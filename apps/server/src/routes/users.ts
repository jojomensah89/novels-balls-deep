import { Hono } from 'hono'
import { requireAuth } from '../middleware/auth'

type Env = {
    Variables: {
        user: { id: string; email: string }
    }
}

export const app = new Hono<Env>()

// Get current user profile
app.get('/me', requireAuth, async (c) => {
    const user = c.get('user')
    return c.json({ data: user })
})

// Update user preferences (placeholder for future implementation)
app.patch('/preferences', requireAuth, async (c) => {
    const user = c.get('user')
    // TODO: Implement user preferences update
    return c.json({ message: 'User preferences updated' })
})

export default app
