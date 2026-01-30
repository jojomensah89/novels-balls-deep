# Search Page Design Prompt

## Overview

Design a search interface with autocomplete suggestions and results page. Fast, responsive, and helpful.

## Search States

### 1. Search Bar (In Navbar)

- **Icon**: Magnifying glass
- **Placeholder**: "Search novels, authors..."
- **Behavior**: Click expands to full search overlay or dedicated page
- **Keyboard**: Cmd/Ctrl + K to focus (desktop)

### 2. Search Overlay/Modal (Optional)

When search is activated from navbar:

- Full-screen or large modal overlay
- Dark backdrop (80% opacity)
- Large search input at top
- Recent searches below (if any)
- Popular/trending searches suggestions
- Close on Escape or clicking outside

### 3. Search Results Page

Full page showing results for a query.

#### Search Header

- Large search input (pre-filled with query)
- Result count: "142 results for 'martial arts'"
- Clear/reset button

#### Filters Bar

- Quick filter pills: All, Novels, Authors, Genres
- Sort dropdown: Relevance, Popular, Latest
- Filter button for advanced options

#### Results List

- **Layout**: List view (horizontal cards) or Grid view toggle
- **Each Result Card**:
  - Cover thumbnail (left, ~80px)
  - Title (linked, bold)
  - Author
  - Genres (2-3 pills)
  - Description snippet (2 lines, with query highlighted)
  - Chapter count + status
  - "Read Now" button (right side)

#### No Results State

- Friendly illustration
- "No results found for '[query]'"
- Suggestions:
  - Check spelling
  - Try different keywords
  - Browse popular novels (link)
- Show popular novels as fallback

#### Loading State

- Skeleton cards
- Search input disabled briefly
- Spinner in input field

### 4. Autocomplete Dropdown

As user types in search:

- **Appears after 2+ characters**
- **Max 8 suggestions**
- **Sections**:
  - Novels (with small cover + title)
  - Authors (with icon + name)
  - Genres (with colored pill)
- **Highlight matching text** in results
- **Keyboard navigation**: Up/down arrows, Enter to select
- **"Search for '[query]'"** at bottom to go to full results

## Visual Style

### Search Input

- Large, prominent (48-56px height)
- Rounded (12px radius)
- Subtle border on focus (accent color)
- Clear button (×) when has text
- Search icon inside (left)

### Result Cards

- Horizontal layout
- Cover image with rounded corners
- Subtle background on hover
- Smooth transitions

### Query Highlighting

- Bold or highlighted background on matching text
- Use accent color sparingly

### Mobile Layout

- Full-width search input
- Stack result cards vertically
- Filters in horizontal scroll or bottom sheet
- Autocomplete takes full screen

## Interactions

- **Debounced search**: Wait 300ms after typing to search
- **URL updates**: `/search?q=martial+arts`
- **History**: Browser back works correctly
- **Keyboard**:
  - Enter submits search
  - Escape clears/closes
  - Tab moves between results

## Performance

- Client-side debouncing
- Show loading state quickly
- Cache recent searches
- Preload first few result images
