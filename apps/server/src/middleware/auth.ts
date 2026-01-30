import { createMiddleware } from 'hono/factory'
import { HTTPException } from 'hono/http-exception'
import { auth } from '@novels-balls-deep/auth'

/**
 * Require authentication
 * Sets c.get('user') if authenticated, throws 401 otherwise
 */
export const requireAuth = createMiddleware(async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })

    if (!session) {
        throw new HTTPException(401, { message: 'Unauthorized' })
    }

    c.set('user', session.user)
    await next()
})

/**
 * Optional authentication
 * Sets c.get('user') if authenticated, null otherwise
 */
export const optionalAuth = createMiddleware(async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })
    c.set('user', session?.user || null)
    await next()
})
