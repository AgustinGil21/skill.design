# Composition, grids and responsive layout

How a designer arranges content on a screen so that relationships are obvious, the eye knows where to go, and the
layout survives every width, language and amount of data. Composition is not decoration: it is the visual expression
of the information structure and the task.

## What it is and why it matters

Layout decides:

- **What is seen first, and what is related to what.** People infer relationships from position and spacing before
  they read a word.
- **Whether people can compare, read or edit efficiently.** Each task has layouts that serve it and layouts that
  fight it.
- **Whether the design holds up** at small and large widths, with long content and in other languages.

The common failure is choosing a layout first (a 12-column grid, a bento, three cards) and pouring content into it.
The better order: understand the content and the task, derive the relationships, then choose the grid that expresses
them.

## 1. Principles of composition

- **Hierarchy**: one clear entry point per screen or section (the largest, most contrasted or most isolated element).
- **Proximity**: related things together, different things apart; space groups better than lines and boxes.
- **Alignment**: few axes, everything anchored to them; something almost aligned looks like a mistake.
- **Scale contrast**: large differences (a headline four times the body size) look intentional; small differences
  look doubtful.
- **Rhythm**: alternate density and air, full width and columns, image and text.
- **Negative space**: empty space is an element; do not fill it "because it looks empty".
- **Balance**: symmetric (calm, formal) or asymmetric (tension, dynamism); asymmetry requires more control.
- **Eye path**: from the strongest element to the action; nothing competes with the primary action.
- **Reading direction**: in right-to-left languages the entry point, alignment and eye path mirror. Design with
  logical directions (start and end) rather than left and right.

## 2. Derive the layout from the content and the task

Before choosing a grid, answer:

1. **What are the content blocks**, and how much content does each really have (minimum, typical, maximum)?
2. **How are they related?** Parent and child, siblings to compare, a sequence, a primary item with supporting detail.
3. **What is the task?** Reading, scanning, comparing, editing, monitoring.
4. **What must stay visible together** for the task to work?

| Task | Layout that serves it | Layout that fights it |
| --- | --- | --- |
| **Reading** | A single comfortable column (around 65–75 characters), generous line height, supporting content beside or after | Multiple narrow columns, text over busy backgrounds |
| **Scanning a list** | Consistent rows, aligned columns, the identifying field first | Cards of varying height in a masonry grid |
| **Comparing items** | Side by side, same attributes in the same order, aligned rows (a table or comparison grid) | Items on separate screens or in a carousel |
| **Editing a record** | The object with its fields grouped, actions near what they affect, context kept visible | Fields scattered across tabs that must be checked together |
| **Monitoring** | A stable layout where values update in place; the most important signal in the most prominent position | Layouts that reflow when data changes |
| **Exploring media** | A grid of thumbnails with consistent aspect ratios, a detail view | Text-heavy lists for visual content |

### What must stay visible

For each layout, list what the person must see at the same time to do the task. That list decides breakpoints and
collapse behavior:

- Editing an invoice: the line items and the total must be visible together.
- Choosing a seat: the map and the selected seat's price.
- Writing a reply: the message being answered and the reply box.

When the screen narrows, collapse what is **not** on this list first.

## 3. Grids

Grids are tools for alignment and consistency, not goals. Common starting points:

- **Columns**: 12 on desktop, 8 on tablet, 4 on mobile are common conventions because 12 divides into halves, thirds
  and quarters. Derive the number from the content: a reading-centered site may need a simple centered column; a
  dashboard may need a grid of equal modules.
- **Gutters**: about 16–32 px; **side margins**: at least 16 px on mobile, more on large screens.
- **Maximum widths**: 1200–1440 px for layouts is a common range; about 65ch for text. Tables, maps and canvases can use
  the full width.
- **Editorial grids**: break the grid on purpose (an image that bleeds, a headline across columns) once the grid is
  established and the break communicates something.
- **Spacing grid**: multiples of 4 or 8 (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- **Bento layouts**: cells of different sizes on a common grid, with the most important largest. Good for showcasing
  a few features with real content; poor for lists of equal items or for content that must be compared.

## 4. Spacing with meaning

- Less space within a group than between groups (proximity expressed in numbers).
- Spacing communicates hierarchy: the space above a section heading should be larger than the space below it, so the
  heading belongs to what follows.
- Landing page sections often use 96–160 px of separation on desktop and 64–96 px on mobile.
- Internal padding proportional to text size.
- Use tokens (`--space-2`, `--space-4`…) instead of loose values.

### Optical alignment

Mathematical alignment and visual alignment differ:

- Round shapes and icons look smaller than squares of the same size; they may need to be slightly larger.
- Text with large headings looks indented because of side bearings; optical margin alignment may require a small
  negative offset.
- Play icons inside circles look off-center when mathematically centered; shift them slightly toward the point.
- Uppercase text and lowercase text with descenders sit differently in buttons; check vertical centering by eye.

## 5. Responsive layout

- **Design the content for small screens and expand**, but do not treat "mobile first" as dogma for tools whose real
  use is on large desktop screens (complex editors, trading terminals, design tools). There, design for the primary
  context first and make sure small screens offer the essential tasks.
- **Breakpoints by content, not by device**: break when the text gets too long or the grid too cramped.
- **Container queries** (`@container`) so a component adapts to the space it has, not to the screen.
- **Fluid type and spacing** with `clamp()` for smooth transitions.
- **Safe areas** on mobile (notches, home indicators) with `env(safe-area-inset-*)`.
- **Large screens**: do not stretch lines of text; use the space to show more context (a side panel, a preview, more
  columns of data).
- **Intermediate sizes** (small laptops, tablets in landscape, split-screen windows) are where many layouts break. Test
  them, not only phone and desktop.

### Table, cards or scroll?

A common responsive decision with real trade-offs:

| Option | Keeps | Loses | Use when |
| --- | --- | --- | --- |
| **Horizontal scroll with a sticky first column** | Comparison across rows, all columns | Seeing everything at once | People need to compare values across items |
| **Cards (each row becomes a card)** | Readability of one item | Comparison between items; alignment of values | People look at one item at a time |
| **Priority columns** (hide less important columns, with a way to show them) | The key comparison | Secondary data | A few columns carry most of the value |
| **Master-detail** (a list of identifiers, tap for the detail) | Fast scanning by name | Seeing details in the list | Items are identified by name and inspected individually |

Transforming a comparison table into cards can destroy the task it supported. Choose by the task, not by habit.

### Panels on small screens

A side panel on desktop usually becomes a sheet or a full screen on mobile. Ask what context the person loses: if the
panel edits an item while the list stays visible, on mobile the list disappears. A bottom sheet that shows part of the
list behind it, or a clear "back to list" with the edited item highlighted, preserves context.

## 6. Order: visual, reading and focus

- **Visual order, DOM order and focus order must agree** (WCAG 1.3.2 Meaningful Sequence, A; 2.4.3 Focus Order, A).
  CSS grid and flex `order` can rearrange visually without changing the reading order, which confuses screen reader
  and keyboard users. Reorder the source when the visual order changes meaning.
- **When the layout reflows** at narrow widths, the stacking order should follow importance and reading order.
- **Reflow** must work at 320 CSS px (1.4.10, AA) without horizontal scrolling, except content that needs two
  dimensions.

## 7. Density

- **Comfortable** for occasional use and marketing; **compact** for intensive tools (tables, editors).
- Offer a choice when the audience is mixed.
- High density demands more rigor: perfect alignment, small but legible type, subtle separators, strong focus
  indicators.
- Density interacts with touch: compact rows below the minimum target size need larger hit areas than their visual
  height.

## 8. Extreme content

Layouts are tested with ideal content and broken by real content. Test:

- **Long and short**: the longest name, title or label; a single word; an empty field.
- **Few and many**: zero items, one item, a thousand.
- **Other languages**: the longest translation; right-to-left; scripts with taller line heights.
- **Large numbers**: amounts with many digits and long currency formats.
- **User content**: images of any aspect ratio, very long words or URLs without spaces.
- **Zoom and text size**: 200 % zoom, large system text.

## Worked comparison: two compositions for the same problem

**Problem:** a product page for a booking system for climbing gyms, showing a session's details, availability and the
booking action, used mostly on phones by members booking for tonight.

**Composition A — bento showcase.** A grid of six equal cards: description, coach photo, availability, price,
equipment and reviews. On mobile they stack in grid order; availability and price end up fourth and fifth; the Book
button sits at the bottom after reviews.

- Looks balanced in a screenshot.
- Breaks the task: members came to check slots and book; they must scroll past four cards.
- Price and availability, which must be seen together, are separated.

**Composition B — task-derived.** The session name and time first; directly below, the next available slots for
tonight as large tappable options with the price per slot; the Book button stays visible at the bottom of the screen
once a slot is chosen; description, coach and equipment follow in a single column; reviews last.

- Derived from "what must be visible together": slot, price and action.
- Costs: less visual drama; the coach photo is lower on the page.
- On desktop, the slots and booking box sit in a sticky side column next to the description, preserving the same
  relationship.

## Common mistakes

- **Choosing the grid before knowing the content.**
- **Everything centered in a narrow column** on large screens.
- **Cards inside cards inside cards.**
- **Different margins in every section.**
- **Borders and shadows to separate what space already separates.**
- **Content touching the screen edge on mobile.**
- **Visual reordering that breaks reading and focus order.**
- **Responsive transformations that destroy the task** (tables to cards for comparison).
- **Only testing phone and desktop widths.**

## Checklist

- [ ] The layout was derived from the content blocks, their relationships and the task.
- [ ] What must stay visible together is defined and preserved at every width.
- [ ] There is one entry point per screen and section; the eye path leads to the primary action.
- [ ] Spacing follows proximity and comes from tokens.
- [ ] Visual, reading and focus order agree; layout mirrors correctly in right-to-left.
- [ ] Responsive choices (table, cards, scroll, panels) were made by task.
- [ ] Intermediate widths, 320 px reflow and 200 % zoom work.
- [ ] Extreme content (long, empty, many, translated) was tested.
