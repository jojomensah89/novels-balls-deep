# API Client Usage Examples

## Basic Usage

```typescript
import { novels, chapters, ratings, reading, users, admin } from '@/lib/api'

// All methods return promises and handle errors automatically
```

## Novels

### List Novels

```typescript
// Get all novels with default pagination
const { data, pagination } = await novels.list()

// With filters
const { data } = await novels.list({
  page: '1',
  limit: '20',
  status: 'ongoing',
  sortBy: 'popularity',
  order: 'desc'
})
```

### Search Novels

```typescript
const { data, pagination } = await novels.search({
  q: 'fantasy',
  page: '1',
  limit: '10'
})
```

### Get Novel by Slug

```typescript
const { data } = await novels.getBySlug('sample-novel-slug')
```

## Chapters

### List Chapters

```typescript
const { data, pagination } = await chapters.list({
  translationId: 'uuid-here',
  page: '1',
  limit: '50'
})
```

### Get Chapter by ID

```typescript
const { data } = await chapters.getById('chapter-uuid')
```

## Translations

### List Translations

```typescript
const { data } = await translations.list({
  novelId: 'novel-uuid',
  language: 'en',
  sortBy: 'updated'
})
```

### Create Translation (requires auth)

```typescript
const { data } = await translations.create({
  novelId: 'novel-uuid',
  translatorName: 'John Doe',
  language: 'en',
  sourceUrl: 'https://example.com'
})
```

### Update Translation (requires auth)

```typescript
const { data } = await translations.update('translation-uuid', {
  status: 'completed'
})
```

## Ratings

### Create/Update Rating (requires auth)

```typescript
const { data } = await ratings.create({
  translationId: 'translation-uuid',
  rating: 5,
  review: 'Excellent translation!'
})
```

### Delete Rating (requires auth)

```typescript
await ratings.delete('rating-uuid')
```

## Reading

### Get Reading List (requires auth)

```typescript
const { data } = await reading.getList()
```

### Add to Reading List (requires auth)

```typescript
const { data } = await reading.addToList({
  novelId: 'novel-uuid',
  status: 'reading'
})
```

### Update Reading List Status (requires auth)

```typescript
const { data } = await reading.updateListStatus('list-item-uuid', {
  status: 'completed'
})
```

### Update Reading Progress (requires auth)

```typescript
const { data } = await reading.updateProgress({
  chapterId: 'chapter-uuid',
  progress: 75 // 0-100
})
```

## Users

### Get Current User (requires auth)

```typescript
const { data } = await users.getMe()
```

## Admin

### Create Novel (requires admin)

```typescript
const { data } = await admin.createNovel({
  title: 'New Novel',
  slug: 'new-novel',
  author: 'Author Name',
  status: 'ongoing'
})
```

### Get Admin Stats (requires admin)

```typescript
const { data } = await admin.getStats()
```

## Error Handling

```typescript
try {
  const { data } = await novels.getBySlug('non-existent')
} catch (error) {
  console.error(error.message) // "Novel not found" or similar
}
```

## React Usage

### With useState

```typescript
'use client'

import { useState, useEffect } from 'react'
import { novels } from '@/lib/api'

export default function NovelsList() {
  const [novelsList, setNovelsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    novels.list({ limit: '20' })
      .then(({ data }) => setNovelsList(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {novelsList.map(novel => (
        <div key={novel.id}>{novel.title}</div>
      ))}
    </div>
  )
}
```

### With Server Components (Next.js)

```typescript
import { novels } from '@/lib/api'

export default async function NovelsPage() {
  const { data } = await novels.list({ limit: '20' })

  return (
    <div>
      {data.map(novel => (
        <div key={novel.id}>{novel.title}</div>
      ))}
    </div>
  )
}
```

### With React Query

```typescript
'use client'

import { useQuery } from '@tanstack/react-query'
import { novels } from '@/lib/api'

export default function NovelsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['novels'],
    queryFn: () => novels.list({ limit: '20' })
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {data.data.map(novel => (
        <div key={novel.id}>{novel.title}</div>
      ))}
    </div>
  )
}
```
