import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db } from '@novels-balls-deep/db'
import { translationRating } from '@novels-balls-deep/db/schema'
import { requireAuth } from '../middleware/auth'
import { createRatingSchema, ratingIdSchema } from '../schemas/ratings'
import { eq, and } from 'drizzle-orm'
import { nanoid } from 'nanoid'

type Env = {
    Variables: {
        user: { id: string; email: string }
    }
}

const app = new Hono<Env>()

// Create or update rating
app.post('/', requireAuth, zValidator('json', createRatingSchema), async (c) => {
    const user = c.get('user')
    const data = c.req.valid('json')

    // Check if rating exists
    const existing = await db.query.translationRating.findFirst({
        where: and(
            eq(translationRating.userId, user.id),
            eq(translationRating.translationId, data.translationId)
        ),
    })

    if (existing) {
        // Update existing rating
        await db
            .update(translationRating)
            .set({
                rating: data.rating,
                review: data.review,
                updatedAt: new Date(),
            })
            .where(eq(translationRating.id, existing.id))

        return c.json({ message: 'Rating updated', id: existing.id })
    }

    // Create new rating
    const id = nanoid()
    await db.insert(translationRating).values({
        id,
        userId: user.id,
        translationId: data.translationId,
        rating: data.rating,
        review: data.review,
    })

    return c.json({ message: 'Rating created', id }, 201)
})

// Delete rating
app.delete('/:id', requireAuth, zValidator('param', ratingIdSchema), async (c) => {
    const user = c.get('user')
    const { id } = c.req.valid('param')

    // Verify ownership
    const rating = await db.query.translationRating.findFirst({
        where: eq(translationRating.id, id),
    })

    if (!rating) {
        return c.json({ error: 'Rating not found' }, 404)
    }

    if (rating.userId !== user.id) {
        return c.json({ error: 'Forbidden' }, 403)
    }

    await db.delete(translationRating).where(eq(translationRating.id, id))

    return c.json({ message: 'Rating deleted' })
})

export default app
