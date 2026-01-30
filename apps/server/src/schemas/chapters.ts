import { z } from 'zod'
import { uuidSchema, paginationSchema } from './common'

// List chapters query
export const listChaptersSchema = z.object({
    translationId: uuidSchema,
    ...paginationSchema.shape,
})

// Chapter ID param
export const chapterIdSchema = z.object({
    id: uuidSchema,
})
