import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { db, eq, desc, asc } from '@novels-balls-deep/db'
import { translation, novel } from '@novels-balls-deep/db/schema'
import {
    listTranslationsSchema,
    translationIdSchema,
    createTranslationSchema,
    updateTranslationSchema
} from '../schemas/translations'
import { requireAuth, optionalAuth } from '../middleware/auth'
import { nanoid } from 'nanoid'

type Env = {
    Variables: {
        user: { id: string; email: string } | null
    }
}

export const app = new Hono<Env>()

// List translations
app.get('/', optionalAuth, zValidator('query', listTranslationsSchema), async (c) => {
    const { page, limit, novelId, language, sortBy, order } = c.req.valid('query')
    const offset = (page - 1) * limit

    let query = db.select().from(translation)

    // Apply filters
    if (novelId) {
        query = query.where(eq(translation.novelId, novelId)) as any
    }
    if (language) {
        query = query.where(eq(translation.language, language)) as any
    }

    // Determine sort column
    let orderByColumn
    switch (sortBy) {
        case 'chapters':
            orderByColumn = translation.chapterCount
            break
        case 'rating':
            orderByColumn = translation.averageRating
            break
        default:
            orderByColumn = translation.updatedAt
    }

    const translations = await query
        .limit(limit)
        .offset(offset)
        .orderBy(order === 'asc' ? asc(orderByColumn) : desc(orderByColumn))

    return c.json({
        data: translations,
        pagination: { page, limit, hasMore: translations.length === limit },
    })
})

// Get translation by ID
app.get('/:id', zValidator('param', translationIdSchema), async (c) => {
    const { id } = c.req.valid('param')

    const translationData = await db
        .select()
        .from(translation)
        .where(eq(translation.id, id))
        .limit(1)

    if (!translationData || translationData.length === 0) {
        return c.json({ error: 'Translation not found' }, 404)
    }

    return c.json({ data: translationData[0] })
})

// Create translation (protected)
app.post('/', requireAuth, zValidator('json', createTranslationSchema), async (c) => {
    const user = c.get('user')
    const data = c.req.valid('json')

    const newTranslation = await db
        .insert(translation)
        .values({
            id: nanoid(),
            ...data,
            chapterCount: 0,
            averageRating: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .returning()

    return c.json({ data: newTranslation[0] }, 201)
})

// Update translation (protected)
app.patch('/:id', requireAuth, zValidator('param', translationIdSchema), zValidator('json', updateTranslationSchema), async (c) => {
    const { id } = c.req.valid('param')
    const data = c.req.valid('json')

    const updated = await db
        .update(translation)
        .set({
            ...data,
            updatedAt: new Date(),
        })
        .where(eq(translation.id, id))
        .returning()

    if (!updated || updated.length === 0) {
        return c.json({ error: 'Translation not found' }, 404)
    }

    return c.json({ data: updated[0] })
})

export default app
