# Project Requirements Document: NovelVerse

## 1. Project Overview

### 1.1 Project Name

**NovelVerse** - A modern platform for reading translated novels with community-driven translation ratings.

*Alternative names: NovelNexus, TranslateReads, ChapterFlow, NovelHub, ReadVerse*

### 1.2 Project Description

NovelVerse is a high-performance, SEO-optimized web platform that allows users to discover, read, and rate translated novels. The platform aggregates novels from multiple sources using a scraper and enables users to compare different translations of the same novel.

### 1.3 Target Audience

- Readers of translated novels (web novels, light novels, manga adaptations)
- Multi-language readers seeking quality translations
- Mobile and desktop users
- International audience interested in Asian literature (Chinese, Korean, Japanese novels)

---

## 2. Technology Stack

### 2.1 Frontend

- **Framework**: Next.js 14+ (App Router) or Astro
  - Chosen for excellent SEO capabilities and programmatic SEO (pSEO)
  - Server-side rendering (SSR) and static site generation (SSG)
  - Image optimization and performance
- **Styling**: Tailwind CSS
- **State Management**: React Context / Zustand
- **Mobile Support**: Responsive design with mobile-first approach

### 2.2 Backend

- **Runtime**: Cloudflare Workers with Hono
- **ORM**: Prisma
- **Authentication**: Better-Auth
- **Email**: Resend

### 2.3 Database

- **Primary Database**: Cloudflare D1 (SQLite-based)
  - **Rationale**:
    - Read-heavy workload (novels, chapters)
    - Built-in integration with Cloudflare Workers
    - Low latency at edge
    - Cost-effective for read operations
    - Sufficient for initial scale
  - **Consideration**: Plan migration path to PostgreSQL (Neon/Supabase) if write operations increase significantly

### 2.4 Content Acquisition

- **Scraper**: [NovelScraper](https://github.com/HanaDigital/NovelScraper)
- **Storage**: Cloudflare R2 for images/assets

### 2.5 Scaffolding

- **Tool**: better-t-stack
- **Includes**: TypeScript, tRPC, Tailwind, Prisma integration

---

## 3. Core Features

### 3.1 Novel Discovery & Reading

- Browse novels by genre, status, popularity, rating
- Search functionality with filters
- Novel detail pages with metadata
- Chapter reading interface
- Reading progress tracking
- Bookmarking and favorites
- Reading history

### 3.2 Multi-Translation Support

- Multiple translation versions per novel
- Translation team/translator attribution
- User ratings for translations
- Translation comparison view
- Default translation preference per user

### 3.3 User Management

- User registration and authentication
- User profiles
- Reading preferences
- Notification settings
- Reading lists/libraries

### 3.4 Community Features

- Translation ratings (1-5 stars)
- Translation reviews/comments
- Novel reviews
- User recommendations

### 3.5 SEO & Performance

- Programmatic SEO (pSEO) for all novels and chapters
- Dynamic sitemap generation
- Open Graph metadata
- Schema.org structured data
- Optimized Core Web Vitals
- Image lazy loading

### 3.6 Mobile Experience

- Progressive Web App (PWA) capabilities
- Responsive design
- Touch-optimized reading interface
- Offline reading (future)
- Native app foundation

---

## 4. User Stories & Acceptance Criteria

### 4.1 Novel Discovery

#### User Story 1: Browse Novels

**As a** reader  
**I want to** browse available novels by different categories  
**So that** I can discover new content to read

**Acceptance Criteria:**

- User can view novels filtered by genre (Action, Romance, Fantasy, etc.)
- User can sort by popularity, rating, latest updates, alphabetically
- User can filter by novel status (Ongoing, Completed, Hiatus)
- Pagination or infinite scroll loads additional results
- Each novel card displays: cover image, title, genres, rating, chapter count
- Mobile view shows optimized grid layout

---

#### User Story 2: Search Novels

**As a** reader  
**I want to** search for specific novels  
**So that** I can quickly find content I'm interested in

**Acceptance Criteria:**

- Search bar accepts novel titles, authors, keywords
- Search results display within 500ms
- Advanced filters available (genre, status, translation language)
- Search autocomplete suggests novels as user types
- "No results" state provides helpful suggestions
- Search history saved for logged-in users

---

### 4.2 Reading Experience

#### User Story 3: Read Chapters

**As a** reader  
**I want to** read novel chapters in a clean interface  
**So that** I can enjoy the content without distractions

**Acceptance Criteria:**

- Chapter content loads within 1 second
- Adjustable font size (small, medium, large, extra-large)
- Theme options (light, dark, sepia)
- Previous/Next chapter navigation
- Chapter list navigation
- Reading progress auto-saved every 30 seconds
- Mobile-optimized reading view
- No layout shift during content load

---

#### User Story 4: Track Reading Progress

**As a** reader  
**I want to** automatically track which chapters I've read  
**So that** I can easily continue where I left off

**Acceptance Criteria:**

- Reading progress saved automatically
- "Continue Reading" button on homepage shows last read chapter
- Novel detail page shows current reading progress percentage
- Chapter list indicates read/unread status
- Progress syncs across devices for logged-in users
- Option to mark chapters as read/unread manually

---

### 4.3 Multi-Translation Features

#### User Story 5: View Translation Options

**As a** reader  
**I want to** see all available translations for a novel  
**So that** I can choose the translation I prefer

**Acceptance Criteria:**

- Novel detail page lists all available translations
- Each translation shows: translator/team name, rating, review count, completion status
- Translations sortable by rating, latest update
- Visual indicator for official vs fan translations (if applicable)
- Quick preview of translation quality (sample paragraph)
- Mobile view displays translations in collapsible list

---

#### User Story 6: Rate Translations

**As a** reader  
**I want to** rate and review translations  
**So that** I can help others find quality translations

**Acceptance Criteria:**

- User can rate translation on 5-star scale
- User can write optional review (50-500 characters)
- User can rate only after reading minimum 3 chapters
- One rating per user per translation
- User can edit their rating and review
- Average rating updates in real-time
- Rating breakdown shows distribution (5★: 45%, 4★: 30%, etc.)
- Review moderation flags inappropriate content

---

#### User Story 7: Compare Translations

**As a** reader  
**I want to** compare translations side-by-side  
**So that** I can decide which one to read

**Acceptance Criteria:**

- Side-by-side view displays same chapter from different translations
- Maximum 2 translations compared at once
- Synchronized scrolling between translations
- Rating and translator info displayed for each
- Option to switch default translation from comparison view
- Mobile view shows stacked comparison with easy switching
- Comparison URL is shareable

---

### 4.4 User Account Features

#### User Story 8: User Registration

**As a** new visitor  
**I want to** create an account  
**So that** I can access personalized features

**Acceptance Criteria:**

- Email/password registration
- OAuth options (Google, GitHub)
- Email verification required
- Password requirements: minimum 8 characters, 1 uppercase, 1 number
- Registration completes within 5 seconds
- Welcome email sent via Resend
- Privacy policy and terms acceptance required
- GDPR compliant data handling

---

#### User Story 9: Manage Reading Lists

**As a** logged-in user  
**I want to** organize novels into custom lists  
**So that** I can categorize my reading

**Acceptance Criteria:**

- Create unlimited custom lists
- Default lists: "Reading", "Want to Read", "Completed", "Dropped"
- Add/remove novels from lists
- Reorder novels within lists (drag-and-drop on desktop)
- Lists visible on user profile
- Privacy options: public/private lists
- Export list as text/CSV

---

#### User Story 10: Receive Notifications

**As a** logged-in user  
**I want to** receive notifications for novel updates  
**So that** I don't miss new chapters

**Acceptance Criteria:**

- Follow/subscribe to novels
- Email notifications for new chapters (configurable frequency)
- In-app notification badge
- Notification preferences per novel
- Batch notifications option (daily digest)
- Unsubscribe link in all emails
- Web push notifications (PWA)

---

### 4.5 SEO & Performance

#### User Story 11: Discover via Search Engines

**As a** reader using Google  
**I want to** find novels through search  
**So that** I can discover new content organically

**Acceptance Criteria:**

- Each novel has unique, SEO-optimized URL (/novel/[slug])
- Each chapter has unique URL (/novel/[slug]/chapter/[number])
- Meta titles include novel name, chapter, and site name
- Meta descriptions summarize novel plot (150-160 characters)
- Open Graph tags for social sharing
- Schema.org markup for Book, Person (author), Review
- Sitemap.xml generated and submitted to search engines
- robots.txt properly configured
- Canonical URLs prevent duplicate content
- Page load time < 2 seconds (LCP < 2.5s)

---

### 4.6 Mobile & Future App

#### User Story 12: Mobile Reading

**As a** mobile user  
**I want to** read novels comfortably on my phone  
**So that** I can read anywhere

**Acceptance Criteria:**

- Responsive design works on screens 320px - 1920px wide
- Touch gestures: swipe left/right for chapters
- Mobile navigation menu
- Optimized font sizes for mobile (minimum 16px)
- No horizontal scrolling
- Fast mobile page loads (< 3s on 3G)
- Add to home screen prompt (PWA)
- Installable as PWA
- Works offline for previously loaded chapters

---

## 5. Data Models

### 5.1 Core Entities

#### Novel

```
- id (UUID)
- slug (string, unique)
- title (string)
- alternativeTitles (JSON array)
- author (string)
- coverImage (string, URL)
- description (text)
- genres (many-to-many)
- status (enum: ongoing, completed, hiatus)
- originalLanguage (string)
- totalChapters (integer)
- createdAt (datetime)
- updatedAt (datetime)
```

#### Translation

```
- id (UUID)
- novelId (foreign key)
- translatorName (string)
- translatorTeam (string, nullable)
- language (string)
- isOfficial (boolean)
- status (enum: ongoing, completed, dropped)
- averageRating (decimal)
- ratingCount (integer)
- createdAt (datetime)
- updatedAt (datetime)
```

#### Chapter

```
- id (UUID)
- translationId (foreign key)
- chapterNumber (integer)
- title (string, nullable)
- content (text)
- wordCount (integer)
- publishedAt (datetime)
- createdAt (datetime)
```

#### User

```
- id (UUID)
- email (string, unique)
- username (string, unique)
- passwordHash (string)
- emailVerified (boolean)
- avatar (string, URL, nullable)
- createdAt (datetime)
- lastLoginAt (datetime)
```

#### TranslationRating

```
- id (UUID)
- userId (foreign key)
- translationId (foreign key)
- rating (integer, 1-5)
- review (text, nullable)
- helpfulCount (integer)
- createdAt (datetime)
- updatedAt (datetime)
- UNIQUE constraint on (userId, translationId)
```

#### ReadingProgress

```
- id (UUID)
- userId (foreign key)
- translationId (foreign key)
- chapterId (foreign key)
- progress (integer, percentage)
- lastReadAt (datetime)
```

#### ReadingList

```
- id (UUID)
- userId (foreign key)
- name (string)
- isDefault (boolean)
- isPublic (boolean)
- createdAt (datetime)
```

#### ReadingListItem

```
- id (UUID)
- readingListId (foreign key)
- novelId (foreign key)
- preferredTranslationId (foreign key, nullable)
- addedAt (datetime)
- position (integer)
```

---

## 6. API Routes (Hono)

### 6.1 Public Routes

```
GET  /api/novels - List novels (with filters, pagination)
GET  /api/novels/:slug - Get novel details
GET  /api/novels/:slug/translations - List translations for novel
GET  /api/translations/:id/chapters - List chapters for translation
GET  /api/chapters/:id - Get chapter content
GET  /api/search?q=query - Search novels
```

### 6.2 Protected Routes (Require Auth)

```
POST   /api/translations/:id/ratings - Rate translation
PUT    /api/translations/:id/ratings/:ratingId - Update rating
DELETE /api/translations/:id/ratings/:ratingId - Delete rating

POST   /api/reading-progress - Save reading progress
GET    /api/reading-progress - Get user's reading progress

POST   /api/reading-lists - Create reading list
GET    /api/reading-lists - Get user's reading lists
PUT    /api/reading-lists/:id - Update reading list
DELETE /api/reading-lists/:id - Delete reading list
POST   /api/reading-lists/:id/items - Add novel to list
DELETE /api/reading-lists/:id/items/:itemId - Remove from list

POST   /api/users/follow/:novelId - Follow novel
DELETE /api/users/follow/:novelId - Unfollow novel
GET    /api/users/notifications - Get notifications
PUT    /api/users/preferences - Update preferences
```

### 6.3 Admin Routes

```
POST   /api/admin/scrape - Trigger scraper
POST   /api/admin/novels - Create novel manually
PUT    /api/admin/novels/:id - Update novel
DELETE /api/admin/novels/:id - Delete novel
```

---

## 7. Programmatic SEO Strategy

### 7.1 URL Structure

```
Homepage: /
Novel List: /novels
Genre: /novels/genre/[genre-slug]
Novel: /novel/[novel-slug]
Chapter: /novel/[novel-slug]/chapter/[number]
Translation: /novel/[novel-slug]/translation/[translator-slug]
Comparison: /novel/[novel-slug]/compare?t1=id&t2=id
```

### 7.2 SEO Optimizations

- Server-side render all public pages
- Generate static pages for top 1000 novels
- Incremental Static Regeneration (ISR) for updated content
- Automated meta tag generation based on novel metadata
- Structured data for novels, chapters, reviews
- Internal linking strategy between related novels
- Breadcrumb navigation
- XML sitemap with priority and change frequency
- Alt text for all images
- Lazy loading images below fold

### 7.3 Content Strategy

- Unique descriptions for each novel (scraped + enhanced)
- Author pages linking to their novels
- Genre landing pages with top novels
- "Similar novels" recommendations
- User-generated content (ratings, reviews) for freshness

---

## 8. Mobile App Preparation

### 8.1 API-First Design

- All features accessible via RESTful API
- Consistent response formats
- Versioned API (v1, v2, etc.)
- Rate limiting and authentication ready

### 8.2 PWA Features (Phase 1)

- Service worker for offline caching
- App manifest for "Add to Home Screen"
- Push notification support
- App-like navigation

### 8.3 Future Native App (Phase 2)

- React Native or Flutter
- Shared authentication with web
- Offline chapter downloads
- Native notifications
- In-app purchases (premium features)

---

## 9. Development Phases

### Phase 1: MVP (Months 1-2)

- [ ] Project scaffolding with better-t-stack
- [ ] Database schema and migrations
- [ ] Basic authentication (email/password)
- [ ] Novel scraper integration
- [ ] Novel listing and detail pages
- [ ] Chapter reading interface
- [ ] Basic search functionality
- [ ] Responsive design

### Phase 2: Core Features (Months 3-4)

- [ ] Multi-translation support
- [ ] Translation ratings and reviews
- [ ] User profiles and reading lists
- [ ] Reading progress tracking
- [ ] OAuth authentication
- [ ] Email notifications (Resend)
- [ ] Advanced search and filters

### Phase 3: Enhancement (Months 5-6)

- [ ] Translation comparison view
- [ ] Community features (comments, forums)
- [ ] User recommendations
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] SEO optimizations
- [ ] Performance optimizations

### Phase 4: Mobile & Scale (Months 7-8)

- [ ] PWA implementation
- [ ] Offline reading
- [ ] Push notifications
- [ ] Database optimization
- [ ] CDN integration
- [ ] Load testing and scaling
- [ ] Native app prototype

---

## 10. Non-Functional Requirements

### 10.1 Performance

- Page load time: < 2 seconds (desktop), < 3 seconds (mobile)
- Time to Interactive (TTI): < 3 seconds
- First Contentful Paint (FCP): < 1.5 seconds
- API response time: < 200ms (p95)

### 10.2 Scalability

- Support 10,000+ concurrent readers
- Database handles 100,000+ novels
- Auto-scaling on Cloudflare Workers

### 10.3 Security

- HTTPS everywhere
- SQL injection prevention (Prisma ORM)
- XSS protection
- CSRF protection
- Rate limiting on API endpoints
- Secure password hashing (bcrypt)
- Email verification
- Content Security Policy headers

### 10.4 Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Focus indicators
- Semantic HTML

### 10.5 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 11. Success Metrics

### 11.1 User Engagement

- Daily Active Users (DAU)
- Monthly Active Users (MAU)
- Average session duration
- Pages per session
- Bounce rate < 40%
- Return visitor rate

### 11.2 Content Metrics

- Number of novels
- Number of chapters
- Translation coverage
- User-generated ratings/reviews

### 11.3 SEO Metrics

- Organic traffic growth
- Search engine rankings for target keywords
- Indexed pages
- Click-through rate from SERPs

### 11.4 Technical Metrics

- Page load time (Core Web Vitals)
- API error rate < 0.1%
- Uptime > 99.9%
- Database query performance

---

## 12. Risks & Mitigation

### 12.1 Content Licensing

**Risk**: Copyright/licensing issues with scraped content  
**Mitigation**: Legal review, DMCA compliance, content removal process, attribution to original sources

### 12.2 Scraper Reliability

**Risk**: Source websites blocking scraper or changing structure  
**Mitigation**: Multiple scraper sources, error handling, manual upload option, community submissions

### 12.3 Database Scaling

**Risk**: SQLite limitations at scale  
**Mitigation**: Monitor performance, plan migration path to PostgreSQL, implement caching layer (Redis)

### 12.4 SEO Competition

**Risk**: Competing with established novel platforms  
**Mitigation**: Focus on translation quality ratings (unique value proposition), fast performance, superior UX

---

## 13. Future Enhancements

- Machine translation integration (Google Translate API)
- Text-to-speech for chapters
- Dark mode scheduling
- Social features (followers, activity feed)
- Novel recommendation algorithm (ML-based)
- Premium subscription (ad-free, early access)
- Author profiles and verified translators
- Chapter discussion threads
- Reading statistics and achievements
- Export novels to EPUB/PDF
- API for third-party integrations

---

## 14. Conclusion

NovelVerse aims to be the premier destination for translated novel readers by focusing on translation quality, user experience, and community engagement. The technical stack prioritizes performance, SEO, and scalability while maintaining development velocity. The multi-translation rating system differentiates NovelVerse from competitors and provides genuine value to readers seeking quality translations.
