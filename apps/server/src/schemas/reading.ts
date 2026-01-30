import { z } from 'zod'

// Update reading progress
export const updateProgressSchema = z.object({
    chapterId: z.string().uuid(),
    progress: z.number().min(0).max(100),
})

// Add to reading list
export const addToListSchema = z.object({
    novelId: z.string().uuid(),
    status: z.enum(['reading', 'completed', 'plan_to_read', 'dropped']),
})

// Update list status
export const updateListStatusSchema = z.object({
    status: z.enum(['reading', 'completed', 'plan_to_read', 'dropped']),
})

// Reading list ID param
export const readingListIdSchema = z.object({
    id: z.string().uuid(),
})
