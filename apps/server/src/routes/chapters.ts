import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db, eq, asc } from '@novels-balls-deep/db'
import { chapter, translation, novel } from '@novels-balls-deep/db/schema'
import { listChaptersSchema, chapterIdSchema } from '../schemas/chapters'

const app = new Hono()

// List chapters for a translation
app.get('/', zValidator('query', listChaptersSchema), async (c) => {
    const { translationId, page, limit } = c.req.valid('query')
    const offset = (page - 1) * limit

    const chapters = await db
        .select()
        .from(chapter)
        .where(eq(chapter.translationId, translationId))
        .limit(limit)
        .offset(offset)
        .orderBy(asc(chapter.chapterNumber))

    return c.json({
        data: chapters,
        pagination: { page, limit, hasMore: chapters.length === limit },
    })
})

// Get chapter by ID
app.get('/:id', zValidator('param', chapterIdSchema), async (c) => {
    const { id } = c.req.valid('param')

    const chapterData = await db
        .select({
            id: chapter.id,
            translationId: chapter.translationId,
            chapterNumber: chapter.chapterNumber,
            title: chapter.title,
            content: chapter.content,
            wordCount: chapter.wordCount,
            sourceUrl: chapter.sourceUrl,
            publishedAt: chapter.publishedAt,
            createdAt: chapter.createdAt,
            translation: {
                id: translation.id,
                novelId: translation.novelId,
                translatorName: translation.translatorName,
                language: translation.language,
            },
            novel: {
                id: novel.id,
                title: novel.title,
                slug: novel.slug,
            },
        })
        .from(chapter)
        .leftJoin(translation, eq(chapter.translationId, translation.id))
        .leftJoin(novel, eq(translation.novelId, novel.id))
        .where(eq(chapter.id, id))
        .limit(1)

    if (!chapterData || chapterData.length === 0) {
        return c.json({ error: 'Chapter not found' }, 404)
    }

    return c.json({ data: chapterData[0] })
})

export default app
