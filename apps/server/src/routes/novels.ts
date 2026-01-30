import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db } from '@novels-balls-deep/db'
import { novel } from '@novels-balls-deep/db/schema'
import { listNovelsSchema, novelSlugSchema, searchSchema } from '../schemas/novels'
import { optionalAuth } from '../middleware/auth'
import { eq, like, desc, asc, and } from 'drizzle-orm'

type Env = {
    Variables: {
        user: { id: string; email: string } | null
    }
}

const app = new Hono<Env>()

// Search novels
app.get('/search', zValidator('query', searchSchema), async (c) => {
    const { q, page, limit } = c.req.valid('query')
    const offset = (page - 1) * limit

    const novels = await db.query.novel.findMany({
        where: like(novel.title, `%${q}%`),
        limit,
        offset,
        with: {
            novelToGenres: {
                with: { genre: true },
            },
        },
    })

    return c.json({
        data: novels,
        pagination: { page, limit, hasMore: novels.length === limit },
    })
})

// List novels with filters
app.get('/', optionalAuth, zValidator('query', listNovelsSchema), async (c) => {
    const { page, limit, status, sortBy, order } = c.req.valid('query')
    const offset = (page - 1) * limit

    // Build where conditions
    const conditions = []
    if (status) {
        conditions.push(eq(novel.status, status))
    }

    const novels = await db.query.novel.findMany({
        where: conditions.length > 0 ? and(...conditions) : undefined,
        limit,
        offset,
        orderBy: order === 'asc' ? asc(novel[sortBy]) : desc(novel[sortBy]),
        with: {
            novelToGenres: {
                with: { genre: true },
            },
            translations: true,
        },
    })

    return c.json({
        data: novels,
        pagination: {
            page,
            limit,
            hasMore: novels.length === limit,
        },
    })
})

// Get novel by slug
app.get('/:slug', zValidator('param', novelSlugSchema), async (c) => {
    const { slug } = c.req.valid('param')

    const novelData = await db.query.novel.findFirst({
        where: eq(novel.slug, slug),
        with: {
            novelToGenres: {
                with: { genre: true },
            },
            translations: {
                with: {
                    chapters: {
                        limit: 5,
                        orderBy: (chapter, { desc }) => [desc(chapter.chapterNumber)],
                    },
                },
            },
        },
    })

    if (!novelData) {
        return c.json({ error: 'Novel not found' }, 404)
    }

    return c.json({ data: novelData })
})

export default app
