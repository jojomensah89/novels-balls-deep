import { z } from 'zod'
import { paginationSchema, slugSchema, sortOrderSchema } from './common'

// List novels query params
export const listNovelsSchema = z.object({
    ...paginationSchema.shape,
    genre: z.string().optional(),
    status: z.enum(['ongoing', 'completed', 'hiatus']).optional(),
    sortBy: z.enum(['popularity', 'rating', 'updatedAt', 'title']).default('updatedAt'),
    order: sortOrderSchema,
})

// Novel slug param
export const novelSlugSchema = z.object({
    slug: slugSchema,
})

// Search query
export const searchSchema = z.object({
    q: z.string().min(1).max(100),
    ...paginationSchema.shape,
})
