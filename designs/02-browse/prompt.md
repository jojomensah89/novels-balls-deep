# Browse/Novels Page Design Prompt

## Overview

Design the browse page where users can discover and filter novels. Modern grid layout with sidebar filters.

## Page Layout

### 1. Page Header

- **Title**: "Browse Novels" or "Discover"
- **Subtitle**: "Find your next favorite story"
- **Breadcrumb**: Home > Browse (optional)

### 2. Filter Sidebar (Left Side - Desktop)

- **Width**: ~280px
- **Sections**:

#### Genre Filter

- Checkboxes with genre names
- Genres: Action, Adventure, Comedy, Drama, Fantasy, Horror, Martial Arts, Romance, Sci-Fi, Slice of Life, Supernatural
- "Clear All" link

#### Status Filter

- Radio buttons: All, Ongoing, Completed, Hiatus

#### Sort By

- Dropdown: Popular, Latest Update, Rating, A-Z, Newest Added

#### Chapter Count

- Range slider or preset buttons: Any, 100+, 500+, 1000+

- **Mobile**: Collapsible or slide-out drawer with filter icon trigger

### 3. Novel Grid (Main Content)

- **Layout**: 4 columns desktop, 3 tablet, 2 mobile
- **Gap**: 24px between cards

#### Novel Card Design

- **Cover Image**: Portrait ratio (2:3), rounded corners (8px)
- **Overlay on Hover**:
  - Gradient from bottom
  - Quick info (chapters, status)
- **Below Image**:
  - Title (2 lines max, truncate)
  - Author name (smaller, muted)
  - Genre tags (1-2 pills)
  - Status badge (colored: green=ongoing, blue=completed)
- **Hover Effect**:
  - Scale up slightly (1.02)
  - Subtle glow/shadow
  - Cover darkens with play icon or "Read Now"

### 4. Pagination / Load More

- **Style**: Either:
  - Traditional pagination: < 1 2 3 ... 10 >
  - Infinite scroll with "Load More" button
- **Position**: Center bottom of grid
- **Info**: "Showing 1-24 of 1,234 novels"

### 5. Empty/No Results State

- Illustration or icon
- "No novels found"
- "Try adjusting your filters"
- Clear filters button

## Visual Style

### Layout

- **Container**: Max-width 1400px, centered
- **Sidebar**: Sticky on scroll (desktop)
- **Grid**: Responsive with CSS Grid

### Active Filters Display

- Show selected filters as removable pills above grid
- Example: [Fantasy ×] [Ongoing ×] [Clear All]

### Loading State

- Skeleton cards while loading
- Shimmer animation effect

## Responsive Breakpoints

- **Desktop** (1024px+): Sidebar + 4-column grid
- **Tablet** (768-1023px): Collapsible sidebar + 3-column grid
- **Mobile** (<768px): Filter button + 2-column grid

## Interactions

- Clicking card → Navigate to novel detail page
- Filter changes → URL updates, grid refreshes
- Sort dropdown → Immediate re-sort
