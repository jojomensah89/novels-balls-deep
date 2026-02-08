
import { Hono } from 'hono'
import { db, desc, eq, sql } from '@novels-balls-deep/db'
import { novel, genre, novelToGenre } from '@novels-balls-deep/db/schema'

type Env = {
    Variables: {
        user: { id: string; email: string } | null
    }
}

const app = new Hono<Env>()

// Get featured novels (random 5 for now, or by specific logic)
app.get('/featured', async (c) => {
    const novels = await db
        .select()
        .from(novel)
        .orderBy(sql`RANDOM()`)
        .limit(5)

    // Fetch genres for each novel
    const novelsWithGenres = await Promise.all(
        novels.map(async (n) => {
            const genres = await db
                .select({ name: genre.name })
                .from(genre)
                .innerJoin(novelToGenre, eq(genre.id, novelToGenre.genreId))
                .where(eq(novelToGenre.novelId, n.id))

            return {
                ...n,
                genres: genres.map((g) => g.name),
                // Add mocked fields for UI if they don't exist in DB
                rating: 4.5, // Mock rating
                views: n.views?.toString() || "0",
                chapters: n.totalChapters || 0,
                gradient: "from-primary/60 via-accent/40 to-secondary", // Mock gradient
            }
        })
    )

    return c.json({ data: novelsWithGenres })
})

// Get recent updates
app.get('/recent', async (c) => {
    const novels = await db
        .select()
        .from(novel)
        .orderBy(desc(novel.updatedAt))
        .limit(10)

    // Map to UI format
    const formattedNovels = novels.map(n => ({
        ...n, // Spread first to include all original fields
        chapter: `Chapters: ${n.totalChapters}`, // We might need a real chapter fetch here if possible
        timeAgo: new Date(n.updatedAt).toLocaleDateString(),
        cover: "from-blue-600 to-purple-600", // Mock cover gradient
    }))

    return c.json({ data: formattedNovels })
})

// Get new releases
app.get('/new', async (c) => {
    const novels = await db
        .select()
        .from(novel)
        .orderBy(desc(novel.createdAt))
        .limit(10)

    // Fetch genres for each novel as NewReleases component uses them
    const novelsWithGenres = await Promise.all(
        novels.map(async (n) => {
            const genres = await db
                .select({ name: genre.name })
                .from(genre)
                .innerJoin(novelToGenre, eq(genre.id, novelToGenre.genreId))
                .where(eq(novelToGenre.novelId, n.id))
                .limit(1) // Just need one for the badge

            return {
                id: n.id,
                title: n.title,
                author: n.author || 'Unknown',
                genre: genres[0]?.name || 'Fantasy',
                releaseDate: new Date(n.createdAt).toLocaleDateString(),
                cover: "from-violet-600 to-indigo-600", // Mock
            }
        })
    )

    return c.json({ data: novelsWithGenres })
})

// Get popular novels
app.get('/popular', async (c) => {
    const novels = await db
        .select()
        .from(novel)
        .orderBy(desc(novel.views)) // Assuming views column exists and we sort by it
        .limit(6)

    // Fetch genres for each novel
    const novelsWithGenres = await Promise.all(
        novels.map(async (n) => {
            const genres = await db
                .select({ name: genre.name })
                .from(genre)
                .innerJoin(novelToGenre, eq(genre.id, novelToGenre.genreId))
                .where(eq(novelToGenre.novelId, n.id))

            return {
                ...n,
                genres: genres.map((g) => g.name),
                rating: 4.8, // Mock
                views: n.views?.toString() || "0",
                chapters: n.totalChapters || 0,
                cover: "from-blue-600 to-indigo-800", // Mock
            }
        })
    )

    return c.json({ data: novelsWithGenres })
})

// Get all genres with counts
app.get('/genres', async (c) => {
    // This could be expensive. Optimization: Store counts in genre table?
    // For now, let's just get genres
    const genres = await db.select().from(genre)

    // Mock counts for now to avoid massive joins on every load
    const formattedGenres = genres.map(g => ({
        name: g.name,
        count: "100+", // Mock count
        // UI expects specific icons, but we pass name. Frontend should map name to Icon.
        // We pass data needed for frontend to map.
        slug: g.slug
    }))

    return c.json({ data: formattedGenres })
})

export default app
