import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db, eq, and } from '@novels-balls-deep/db'
import { readingProgress, readingList } from '@novels-balls-deep/db/schema'
import {
    updateProgressSchema,
    addToListSchema,
    updateListStatusSchema,
    readingListIdSchema
} from '../schemas/reading'
import { requireAuth } from '../middleware/auth'
import { nanoid } from 'nanoid'

type Env = {
    Variables: {
        user: { id: string; email: string }
    }
}

export const app = new Hono<Env>()

// Get user's reading list
app.get('/list', requireAuth, async (c) => {
    const user = c.get('user')

    const list = await db
        .select()
        .from(readingList)
        .where(eq(readingList.userId, user.id))

    return c.json({ data: list })
})

// Add novel to reading list
app.post('/list', requireAuth, zValidator('json', addToListSchema), async (c) => {
    const user = c.get('user')
    const { novelId, status } = c.req.valid('json')

    // Check if already in list
    const existing = await db
        .select()
        .from(readingList)
        .where(
            and(
                eq(readingList.userId, user.id),
                eq(readingList.novelId, novelId)
            )
        )
        .limit(1)

    if (existing && existing.length > 0) {
        // Update existing
        const updated = await db
            .update(readingList)
            .set({ status, updatedAt: new Date() })
            .where(eq(readingList.id, existing[0].id))
            .returning()

        return c.json({ data: updated[0] })
    }

    // Create new
    const newItem = await db
        .insert(readingList)
        .values({
            id: nanoid(),
            userId: user.id,
            novelId,
            status,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .returning()

    return c.json({ data: newItem[0] }, 201)
})

// Update reading list item
app.patch('/list/:id', requireAuth, zValidator('param', readingListIdSchema), zValidator('json', updateListStatusSchema), async (c) => {
    const user = c.get('user')
    const { id } = c.req.valid('param')
    const { status } = c.req.valid('json')

    const updated = await db
        .update(readingList)
        .set({ status, updatedAt: new Date() })
        .where(
            and(
                eq(readingList.id, id),
                eq(readingList.userId, user.id)
            )
        )
        .returning()

    if (!updated || updated.length === 0) {
        return c.json({ error: 'Reading list item not found' }, 404)
    }

    return c.json({ data: updated[0] })
})

// Delete from reading list
app.delete('/list/:id', requireAuth, zValidator('param', readingListIdSchema), async (c) => {
    const user = c.get('user')
    const { id } = c.req.valid('param')

    await db
        .delete(readingList)
        .where(
            and(
                eq(readingList.id, id),
                eq(readingList.userId, user.id)
            )
        )

    return c.json({ success: true })
})

// Update reading progress
app.post('/progress', requireAuth, zValidator('json', updateProgressSchema), async (c) => {
    const user = c.get('user')
    const { chapterId, progress } = c.req.valid('json')

    // Check if progress exists
    const existing = await db
        .select()
        .from(readingProgress)
        .where(
            and(
                eq(readingProgress.userId, user.id),
                eq(readingProgress.chapterId, chapterId)
            )
        )
        .limit(1)

    if (existing && existing.length > 0) {
        // Update existing
        const updated = await db
            .update(readingProgress)
            .set({
                progress,
                lastReadAt: new Date(),
                updatedAt: new Date()
            })
            .where(eq(readingProgress.id, existing[0].id))
            .returning()

        return c.json({ data: updated[0] })
    }

    // Create new
    const newProgress = await db
        .insert(readingProgress)
        .values({
            id: nanoid(),
            userId: user.id,
            chapterId,
            progress,
            lastReadAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .returning()

    return c.json({ data: newProgress[0] }, 201)
})

export default app
