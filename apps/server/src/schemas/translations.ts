import { z } from 'zod'
import { paginationSchema, sortOrderSchema } from './common'

// List translations query params
export const listTranslationsSchema = z.object({
    ...paginationSchema.shape,
    novelId: z.string().optional(),
    language: z.string().optional(),
    sortBy: z.enum(['updated', 'chapters', 'rating']).default('updated'),
    order: sortOrderSchema,
})

// Translation ID param
export const translationIdSchema = z.object({
    id: z.string().uuid(),
})

// Create translation body
export const createTranslationSchema = z.object({
    novelId: z.string().uuid(),
    translatorName: z.string().min(1).max(100),
    language: z.string().min(2).max(10),
    sourceUrl: z.string().url().optional(),
})

// Update translation body
export const updateTranslationSchema = z.object({
    translatorName: z.string().min(1).max(100).optional(),
    sourceUrl: z.string().url().optional(),
    status: z.enum(['active', 'dropped', 'completed']).optional(),
})
