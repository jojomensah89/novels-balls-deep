# Shared Components Design Prompt

## Overview

Design reusable UI components that maintain consistency across all pages.

---

## 1. Navigation Bar

### Desktop Version

- **Height**: 64px
- **Background**: Semi-transparent dark with blur (glassmorphism)
- **Position**: Fixed top, full width
- **Content**:
  - Logo (left): "NovelVerse" text or icon+text
  - Nav links (center): Home, Browse, Genres dropdown
  - Actions (right): Search icon, Theme toggle
- **Active State**: Underline or highlight on current page

### Mobile Version

- **Height**: 56px
- **Logo**: Centered or left
- **Hamburger Menu**: Right side, opens full-screen drawer
- **Drawer Content**: All nav links, theme toggle

### Genres Dropdown

- Trigger: "Genres" nav item
- Grid of genre links (3 columns)
- Icons or colored dots per genre
- Animation: Fade + slide down

---

## 2. Novel Card Component

### Standard Size (Browse Grid)

- **Dimensions**: ~180px wide, cover is 2:3 ratio
- **Cover Image**:
  - Rounded corners (8px)
  - Placeholder while loading
  - Lazy load
- **Title**: Below image, 2 lines max, ellipsis
- **Subtitle**: Author or genre, muted color
- **Status Badge**: Corner overlay (Ongoing/Completed)
- **Hover**: Scale 1.02, shadow increase

### Small Size (Horizontal Scroll)

- **Dimensions**: ~120px wide
- Same structure, smaller text

### List View Variant

- Horizontal layout
- Cover left (80px)
- Info stacked on right
- Description preview (2 lines)

---

## 3. Genre Tag/Pill

- **Size**: 24-28px height
- **Padding**: 8px 12px
- **Border Radius**: Full round (pill shape)
- **Colors**: Each genre has unique color
  - Action: Red (#ef4444)
  - Romance: Pink (#ec4899)
  - Fantasy: Purple (#8b5cf6)
  - Sci-Fi: Cyan (#06b6d4)
  - Adventure: Orange (#f97316)
  - Horror: Gray (#6b7280)
  - Comedy: Yellow (#eab308)
  - Drama: Blue (#3b82f6)
- **Style**: Subtle background, darker text same hue

---

## 4. Status Badge

- **Ongoing**: Green background (#22c55e), white text
- **Completed**: Blue background (#3b82f6), white text
- **Hiatus**: Yellow background (#eab308), dark text
- **Size**: Small pill, uppercase text, 10-12px font

---

## 5. Button Variants

### Primary Button

- Background: Gradient (purple to blue) or solid accent
- Text: White, bold
- Padding: 12px 24px
- Radius: 8px
- Hover: Brighten, subtle lift

### Secondary Button

- Background: Transparent
- Border: 1px accent color
- Text: Accent color
- Hover: Fill with accent, text white

### Ghost Button

- Background: Transparent
- No border
- Text: Muted
- Hover: Subtle background

### Icon Button

- Square or circle
- Icon only
- Tooltip on hover

---

## 6. Chapter List Item

- **Layout**: Full width row
- **Height**: 48-56px
- **Content**:
  - Chapter number (bold, fixed width)
  - Chapter title (flex grow)
  - Date (muted, right aligned)
- **States**:
  - Default: Standard
  - Hover: Background highlight
  - Read (future): Muted text, checkmark
- **Dividers**: 1px line between rows or alternating bg

---

## 7. Loading States

### Skeleton Card

- Gray rectangles matching card layout
- Shimmer animation (left to right gradient)
- Cover area + text lines

### Skeleton Text

- Multiple lines of varying width
- Same shimmer animation

### Spinner

- Simple circular spinner
- Accent color
- Used for buttons, small areas

---

## 8. Empty States

### No Results

- Illustration (optional): Simple line drawing
- Title: "No novels found"
- Description: Helpful suggestions
- CTA Button: "Browse All" or "Clear Filters"

### Error State

- Different illustration
- "Something went wrong"
- "Try Again" button

---

## 9. Toast Notifications

- **Position**: Bottom right (desktop), bottom center (mobile)
- **Types**:
  - Success: Green accent
  - Error: Red accent
  - Info: Blue accent
- **Content**: Icon + message + optional action
- **Duration**: 4 seconds, auto-dismiss
- **Animation**: Slide in from bottom, fade out

---

## 10. Footer

- **Background**: Slightly lighter than page bg
- **Layout**:
  - Links section (About, Contact, DMCA, Privacy)
  - Social icons (optional)
  - Copyright line
- **Height**: ~120px
- **Padding**: Generous
- **Text**: Muted colors

---

## Color Palette Summary

```
Primary Background: #0a0a0f
Card Background: #12121a / #1a1a24
Border Color: rgba(255, 255, 255, 0.1)
Text Primary: #ffffff
Text Secondary: #a1a1aa
Text Muted: #71717a
Accent Primary: #8b5cf6 (Purple)
Accent Secondary: #3b82f6 (Blue)
Success: #22c55e
Error: #ef4444
Warning: #eab308
```

---

## Typography Scale

```
xs: 12px
sm: 14px
base: 16px
lg: 18px
xl: 20px
2xl: 24px
3xl: 30px
4xl: 36px

Font: Inter, system-ui, sans-serif
Reading Font: Georgia, serif
```
