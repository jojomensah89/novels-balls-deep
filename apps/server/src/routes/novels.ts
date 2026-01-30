import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db, eq, like, desc, asc } from '@novels-balls-deep/db'
import { novel } from '@novels-balls-deep/db/schema'
import { listNovelsSchema, novelSlugSchema, searchSchema } from '../schemas/novels'
import { optionalAuth } from '../middleware/auth'

type Env = {
    Variables: {
        user: { id: string; email: string } | null
    }
}

export const app = new Hono<Env>()

// Search novels
app.get('/search', zValidator('query', searchSchema), async (c) => {
    const { q, page, limit } = c.req.valid('query')
    const offset = (page - 1) * limit

    const novels = await db
        .select()
        .from(novel)
        .where(like(novel.title, `%${q}%`))
        .limit(limit)
        .offset(offset)

    return c.json({
        data: novels,
        pagination: { page, limit, hasMore: novels.length === limit },
    })
})

// List novels with filters
app.get('/', optionalAuth, zValidator('query', listNovelsSchema), async (c) => {
    const { page, limit, status, sortBy, order } = c.req.valid('query')
    const offset = (page - 1) * limit

    // Build where clause
    let query = db.select().from(novel)

    if (status) {
        query = query.where(eq(novel.status, status)) as any
    }

    // Determine order by column
    let orderByColumn
    switch (sortBy) {
        case 'title':
            orderByColumn = novel.title
            break
        case 'popularity':
            orderByColumn = novel.views
            break
        case 'rating':
            orderByColumn = novel.views // Fallback to views
            break
        default:
            orderByColumn = novel.updatedAt
    }

    const novels = await query
        .limit(limit)
        .offset(offset)
        .orderBy(order === 'asc' ? asc(orderByColumn) : desc(orderByColumn))

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

    const novelData = await db
        .select()
        .from(novel)
        .where(eq(novel.slug, slug))
        .limit(1)

    if (!novelData || novelData.length === 0) {
        return c.json({ error: 'Novel not found' }, 404)
    }

    return c.json({ data: novelData[0] })
})

export default app
