# Chapter Reader Page Design Prompt

## Overview

Design the chapter reading interface - the most important page for user experience. Must be clean, distraction-free, and highly readable. Similar to e-reader apps.

## Page Layout

### 1. Reader Header (Sticky Top)

- **Layout**: Compact bar, auto-hides on scroll down, shows on scroll up
- **Left**: Back arrow + Novel title (truncated)
- **Center**: Chapter number/title
- **Right**: Settings icon (gear), Theme toggle, Bookmark icon
- **Style**: Semi-transparent background, blur effect
- **Height**: ~56px

### 2. Chapter Content Area (Main)

- **Container**: Centered, max-width 720px for readability
- **Padding**: Generous horizontal padding (mobile: 16px, desktop: 24px+)
- **Typography**:
  - Font: Georgia, serif (or system serif for reading)
  - Size: 18-20px default (adjustable)
  - Line height: 1.8-2.0
  - Paragraph spacing: 1.5em
- **Background**: Based on theme (dark, light, sepia)

#### Chapter Title

- Display chapter number and title at top
- Larger, bold text
- Optional decorative divider below

#### Chapter Text

- Clean paragraphs
- Proper indentation or spacing between paragraphs
- No distracting elements

### 3. Reader Footer / Navigation

- **Style**: Fixed bottom bar or floating buttons
- **Elements**:
  - Previous Chapter button (left arrow + "Prev")
  - Chapter dropdown/selector (center)
  - Next Chapter button (right arrow + "Next")
- **Progress Bar**: Thin line at very top or bottom showing reading progress
- **Alternative**: Tap left/right sides of screen to navigate (mobile)

### 4. Settings Panel (Overlay/Drawer)

Triggered by settings icon:

#### Font Size

- Slider or +/- buttons
- Range: 14px to 28px
- Preview text updates live

#### Theme/Background

- Three options with preview circles:
  - **Dark**: #0a0a0f background, #e5e5e5 text
  - **Light**: #ffffff background, #1a1a1a text
  - **Sepia**: #f4ecd8 background, #5c4b37 text

#### Font Family (Optional)

- Serif (Georgia)
- Sans-serif (Inter)
- Monospace (for some readers)

#### Line Spacing

- Compact / Normal / Relaxed

- **Style**: Bottom sheet on mobile, side panel on desktop
- **Save**: Settings persist to localStorage

### 5. Progress Indicator

- **Options** (choose one):
  - Thin progress bar at bottom of viewport
  - Percentage in corner (e.g., "45%")
  - "Chapter 45 of 1,484" in footer
  - Scroll position indicator (vertical bar on side)

## Theme Variations

### Dark Theme (Default)

```
Background: #0d0d12
Text: #e5e5e5
Accent: #8b5cf6
Header BG: rgba(13, 13, 18, 0.9)
```

### Light Theme

```
Background: #ffffff
Text: #1f1f1f
Accent: #7c3aed
Header BG: rgba(255, 255, 255, 0.9)
```

### Sepia Theme

```
Background: #f5f0e6
Text: #433422
Accent: #8b6914
Header BG: rgba(245, 240, 230, 0.9)
```

## Mobile Considerations

- Full-width content with proper padding
- Tap zones: Left 1/3 = prev, Right 1/3 = next, Center = show/hide controls
- Swipe gestures for chapter navigation (optional)
- Settings as bottom sheet
- Navigation bar hides during active reading

## Desktop Considerations

- Comfortable max-width (700-800px)
- Keyboard shortcuts: ← → for navigation
- Settings panel as sidebar or modal
- Possible side margins for notes (future feature)

## Loading States

- Skeleton text while loading chapter
- Spinner is acceptable
- Preload next chapter content

## Accessibility

- High contrast themes
- Scalable fonts
- Screen reader compatible structure
- Focus indicators for keyboard navigation

## Interactions

- Scroll to read
- Click/tap prev/next
- Settings persist across sessions
- Chapter position remembered (future)
- Keyboard: Escape to go back
