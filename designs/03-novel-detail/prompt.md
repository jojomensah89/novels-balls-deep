# Novel Detail Page Design Prompt

## Overview

Design the novel detail page showing full information about a single novel (e.g., "Swallowed Star"). This is the page users see before starting to read.

## Page Layout

### 1. Hero/Header Section

- **Background**: Blurred, darkened cover image as backdrop
- **Layout**: Horizontal on desktop (cover left, info right)

#### Left Side - Cover Image

- Large cover image (~300px wide)
- Rounded corners
- Subtle shadow
- Optional: "NEW" or "HOT" badge corner

#### Right Side - Novel Info

- **Title**: Large, bold (H1)
- **Alternative Titles**: Smaller, muted (if any)
- **Author**: "By [Author Name]" with link
- **Stats Row**:
  - ⭐ 4.5 rating (if available)
  - 📖 1,847 Chapters
  - 👁 1.2M Views
  - Status badge (Ongoing/Completed)
- **Genre Tags**: Pill badges (Action, Sci-Fi, Adventure, etc.)
- **Action Buttons**:
  - "Start Reading" (primary, large)
  - "Continue from Ch. 45" (if returning user - future feature)
  - Bookmark icon button (ghost style)
  - Share icon button

### 2. Description Section

- **Section Title**: "Synopsis" or "Description"
- **Content**: Full novel description (expandable if long)
- **"Read More"/"Show Less"**: Toggle for long descriptions
- **Style**: Max 3-4 paragraphs visible initially

### 3. Translation Selector (If Multiple)

- **Section Title**: "Available Translations"
- **Cards/List**: Each translation option showing:
  - Translator name/team
  - Language
  - Chapter count
  - Last updated
  - "Read" button
- **Note**: MVP may have single translation per novel

### 4. Chapter List Section

- **Section Title**: "Chapters" with total count
- **Controls**:
  - Search chapters input
  - Sort: Ascending/Descending toggle
  - View: List/Grid toggle (optional)

#### Chapter List Items

- **Layout**: Vertical list, compact rows
- **Each Row**:
  - Chapter number (bold)
  - Chapter title
  - Date published (right-aligned, muted)
  - Read indicator (checkmark if read - future)
- **Grouping**: Optional volume/arc grouping
- **Pagination**: Show 50 chapters at a time with load more

### 5. Similar Novels Section

- **Section Title**: "You May Also Like" or "Similar Novels"
- **Layout**: Horizontal scroll or 4-5 card grid
- **Cards**: Same style as browse page cards

### 6. Comments/Reviews Section (Optional for MVP)

- Can be placeholder or omitted initially
- "Coming Soon" badge if shown

## Visual Style

### Hero Background

- Cover image, heavily blurred (20-30px blur)
- Dark gradient overlay (70-80% opacity)
- Creates cinematic feel

### Information Hierarchy

- Title: 32-40px, white, bold
- Stats/meta: 14px, muted gray
- Description: 16px, light gray, line-height 1.6

### Chapter List

- Alternating row backgrounds (subtle)
- Hover: Highlight row
- Active chapter: Accent color indicator

### Mobile Layout

- Stack vertically: Cover on top, info below
- Full-width buttons
- Chapter list takes full width
- Genre tags wrap to multiple lines

## Interactions

- Click "Start Reading" → First chapter
- Click chapter row → That chapter's reader
- Click genre tag → Browse filtered by genre
- Click author → Browse filtered by author

## Example Content (Swallowed Star)

- **Title**: Swallowed Star
- **Author**: I Eat Tomatoes
- **Genres**: Action, Adventure, Martial Arts, Sci-Fi
- **Status**: Completed
- **Chapters**: 1,484
- **Description**: "Year 2056, in a city surrounded by high walls, a young man named Luo Feng..."
