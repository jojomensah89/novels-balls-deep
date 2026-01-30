import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db, eq, and } from '@novels-balls-deep/db'
import { translationRating } from '@novels-balls-deep/db/schema'
import { requireAuth } from '../middleware/auth'
import { createRatingSchema, ratingIdSchema } from '../schemas/ratings'
import { nanoid } from 'nanoid'

type Env = {
    Variables: {
        user: { id: string; email: string }
    }
}

export const app = new Hono<Env>()

// Create or update rating
app.post('/', requireAuth, zValidator('json', createRatingSchema), async (c) => {
    const user = c.get('user')
    const { translationId, rating, review } = c.req.valid('json')

    // Check if rating exists
    const existing = await db
        .select()
        .from(translationRating)
        .where(
            and(
                eq(translationRating.userId, user.id),
                eq(translationRating.translationId, translationId)
            )
        )
        .limit(1)

    if (existing && existing.length > 0) {
        // Update existing rating
        const updated = await db
            .update(translationRating)
            .set({
                rating,
                review,
                updatedAt: new Date(),
            })
            .where(eq(translationRating.id, existing[0].id))
            .returning()

        return c.json({ data: updated[0] })
    }

    // Create new rating
    const newRating = await db
        .insert(translationRating)
        .values({
            id: nanoid(),
            userId: user.id,
            translationId,
            rating,
            review,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .returning()

    return c.json({ data: newRating[0] }, 201)
})

// Delete rating
app.delete('/:id', requireAuth, zValidator('param', ratingIdSchema), async (c) => {
    const user = c.get('user')
    const { id } = c.req.valid('param')

    const rating = await db
        .select()
        .from(translationRating)
        .where(eq(translationRating.id, id))
        .limit(1)

    if (!rating || rating.length === 0) {
        return c.json({ error: 'Rating not found' }, 404)
    }

    // Verify ownership
    if (rating[0].userId !== user.id) {
        return c.json({ error: 'Unauthorized' }, 403)
    }

    await db.delete(translationRating).where(eq(translationRating.id, id))

    return c.json({ success: true })
})

export default app
