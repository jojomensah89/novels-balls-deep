import type { ErrorHandler } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { ZodError } from 'zod'

export const errorHandler: ErrorHandler = (err, c) => {
    // Zod validation errors
    if (err instanceof ZodError) {
        return c.json(
            {
                error: 'Validation failed',
                issues: err.issues.map((e: any) => ({
                    path: e.path.join('.'),
                    message: e.message,
                })),
            },
            400
        )
    }

    // HTTP exceptions (from middleware)
    if (err instanceof HTTPException) {
        return c.json(
            {
                error: err.message,
                ...(err.cause ? { details: err.cause } : {}),
            },
            err.status
        )
    }

    // Database errors
    if (err.message?.includes('UNIQUE constraint')) {
        return c.json({ error: 'Resource already exists' }, 409)
    }

    if (err.message?.includes('FOREIGN KEY constraint')) {
        return c.json({ error: 'Referenced resource not found' }, 404)
    }

    // Generic errors
    console.error('Unhandled error:', err)
    return c.json(
        {
            error: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' ? { details: err.message } : {}),
        },
        500
    )
}
