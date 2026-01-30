import { z } from 'zod'

// Pagination
export const paginationSchema = z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    limit: z.coerce.number().int().min(1).max(100).optional().default(20),
})

// UUID validation
export const uuidSchema = z.string().uuid()

// Slug validation
export const slugSchema = z.string().regex(/^[a-z0-9-]+$/)

// Sort order
export const sortOrderSchema = z.enum(['asc', 'desc']).default('desc')

// ID param
export const idParamSchema = z.object({
    id: uuidSchema,
})
