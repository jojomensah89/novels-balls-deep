import { z } from 'zod'
import { uuidSchema } from './common'

// Create/update rating
export const createRatingSchema = z.object({
    translationId: uuidSchema,
    rating: z.number().int().min(1).max(5),
    review: z.string().min(50).max(500).optional(),
})

// Rating ID param
export const ratingIdSchema = z.object({
    id: uuidSchema,
})
