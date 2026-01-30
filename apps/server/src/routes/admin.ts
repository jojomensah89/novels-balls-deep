import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db, eq } from '@novels-balls-deep/db'
import { novel, translation, chapter } from '@novels-balls-deep/db/schema'
import { requireAuth } from '../middleware/auth'
import { z } from 'zod'
import { nanoid } from 'nanoid'

type Env = {
    Variables: {
        user: { id: string; email: string }
    }
}

export const app = new Hono<Env>()

// Admin middleware - check if user has admin role
// TODO: Implement proper role checking from database
const requireAdmin = requireAuth

// Create novel schema
const createNovelSchema = z.object({
    title: z.string().min(1).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    description: z.string().optional(),
    author: z.string().min(1).max(100),
    coverImage: z.string().url().optional(),
    status: z.enum(['ongoing', 'completed', 'hiatus']),
})

// Create novel (admin only)
app.post('/novels', requireAdmin, zValidator('json', createNovelSchema), async (c) => {
    const data = c.req.valid('json')

    const newNovel = await db
        .insert(novel)
        .values({
            id: nanoid(),
            ...data,
            views: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .returning()

    return c.json({ data: newNovel[0] }, 201)
})

// Update novel (admin only)
app.patch('/novels/:id', requireAdmin, zValidator('json', createNovelSchema.partial()), async (c) => {
    const { id } = c.req.param()
    const data = c.req.valid('json')

    const updated = await db
        .update(novel)
        .set({
            ...data,
            updatedAt: new Date(),
        })
        .where(eq(novel.id, id))
        .returning()

    if (!updated || updated.length === 0) {
        return c.json({ error: 'Novel not found' }, 404)
    }

    return c.json({ data: updated[0] })
})

// Delete novel (admin only)
app.delete('/novels/:id', requireAdmin, async (c) => {
    const { id } = c.req.param()

    await db.delete(novel).where(eq(novel.id, id))

    return c.json({ success: true })
})

// Admin stats endpoint
app.get('/stats', requireAdmin, async (c) => {
    // TODO: Implement proper stats aggregation
    return c.json({
        data: {
            totalNovels: 0,
            totalTranslations: 0,
            totalChapters: 0,
            totalUsers: 0,
        }
    })
})

export default app
