import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db } from '@novels-balls-deep/db'
import { chapter } from '@novels-balls-deep/db/schema'
import { listChaptersSchema, chapterIdSchema } from '../schemas/chapters'
import { eq, asc } from 'drizzle-orm'

const app = new Hono()

// List chapters for a translation
app.get('/', zValidator('query', listChaptersSchema), async (c) => {
    const { translationId, page, limit } = c.req.valid('query')
    const offset = (page - 1) * limit

    const chapters = await db.query.chapter.findMany({
        where: eq(chapter.translationId, translationId),
        limit,
        offset,
        orderBy: asc(chapter.chapterNumber),
    })

    return c.json({
        data: chapters,
        pagination: { page, limit, hasMore: chapters.length === limit },
    })
})

// Get chapter by ID
app.get('/:id', zValidator('param', chapterIdSchema), async (c) => {
    const { id } = c.req.valid('param')

    const chapterData = await db.query.chapter.findFirst({
        where: eq(chapter.id, id),
        with: {
            translation: {
                with: {
                    novel: true,
                },
            },
        },
    })

    if (!chapterData) {
        return c.json({ error: 'Chapter not found' }, 404)
    }

    return c.json({ data: chapterData })
})

export default app
