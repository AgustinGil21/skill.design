# Polish: the craft pass

The last 10% is what people describe as "it just feels right" without knowing why. It is rarely one big decision; it
is dozens of small ones that generated interfaces skip: a heading that breaks into one orphan word, an icon two pixels
off its text, a number column that jitters, a focus ring clipped by `overflow: hidden`, a button that can only be hit
in its text. This file is the checklist for that pass.

Run it on the **rendered result** (screenshots on phone and desktop, light and dark, the longest locale; zoom in), not
on the code. The `visual-qa` agent runs it when delegated. Fix what you can; report the rest.

## How to look

1. Capture before and after (`node scripts/screenshots.mjs <urls>`), at real sizes: a 375–390 px phone, a 768 px
   tablet, a 1280–1440 px laptop, a large screen.
2. Look at each screen three ways: at a glance (hierarchy, what comes first), at reading distance (text, alignment),
   and zoomed in (edges, icons, borders, focus).
3. Interact: hover, press, focus with the keyboard, scroll, resize, switch theme, turn on reduced motion and larger
   text.
4. Compare with the previous screenshots: `node scripts/visual-diff.mjs before/ after/` marks every changed pixel in red;
   anything that changed and was not meant to is a regression. For native apps, capture with
   `node scripts/native-screenshots.mjs --platform ios|android --large-text` after navigating to the screen.

## Typography

| Check | Why | How |
| --- | --- | --- |
| No orphan words or awkward breaks in headings | A single word on the last line looks accidental | `text-wrap: balance` for headings; adjust copy for important ones |
| Paragraphs without short last lines where possible | Evener blocks read better | `text-wrap: pretty` (progressive enhancement: unsupported browsers wrap normally) |
| Line length around 60–80 characters for reading | Long lines tire the eye | `max-width` in `ch` on text containers |
| Tabular numerals in tables, prices, timers, stats | Columns align; values do not jitter when they change | `font-variant-numeric: tabular-nums` |
| Real typographic characters | Quotes, apostrophes, ellipses, dashes, multiplication signs look intentional | Correct glyphs in copy for each language (« », „ “, " ") |
| Hanging punctuation in large quotes | Optical alignment of the text edge | `hanging-punctuation` where supported, or a negative indent |
| Optical size and tracking by size | Display sizes need tighter tracking, small sizes looser | Tracking tokens per text style; variable font optical sizes when available |
| Line height by size | Large headings need less, small text more | Line-height per text style, not one value everywhere |
| No faux bold or italic | Browsers synthesize ugly weights | Load the weights and styles you use; `font-synthesis: none` |
| Truncation with a way to see the full text | Truncated names hide information | Tooltip or detail view; never truncate the distinguishing part (IDs, addresses) |
| Text in other languages and scripts fits | German and Finnish run longer; CJK needs different line breaking | Test the longest locale; `word-break`/`line-break` per script; `hyphens: auto` with `lang` |

## Alignment and spacing

| Check | Why | How |
| --- | --- | --- |
| Optical alignment of icons with text | Geometric centering often looks off (icons with weight on one side, play triangles) | Nudge by eye with a token-level offset; align icons to the text's cap height, not the line box |
| Shapes optically sized | Circles and triangles look smaller than squares of the same box | Slightly larger round and pointed shapes |
| Consistent edges | Elements on a page share a few vertical lines | A grid; check that cards, headings and images start on the same lines |
| Spacing follows relationships | Closer things are related | Smaller gaps inside groups, larger between; from the spacing scale |
| Concentric radii | A rounded container with rounded children needs inner radius = outer radius − padding | Compute nested radii from tokens |
| Borders that do not double | Two adjacent 1px borders make 2px | Collapse borders, or border only one side |
| Icon sizes from a scale and pixel-aligned | Blurry icons at odd sizes | 16, 20, 24 px (or the family's grid); whole-pixel positions |
| Vertical rhythm in long text | Headings closer to what follows than to what precedes | Margins asymmetric around headings |

## Interaction details

| Check | Why | How |
| --- | --- | --- |
| Hit areas larger than the visible control | Small icons are hard to hit | At least 24×24 CSS px (WCAG 2.5.8); 44 pt / 48 dp by platform convention; extend with padding or a pseudo-element |
| Every interactive state designed | Default, hover, pressed, focus-visible, disabled, loading, selected | Check each control in each state |
| Focus rings visible and not clipped | `overflow: hidden` and tight containers cut them | `outline-offset`, enough padding, ring tokens; check in both themes |
| Hover only where hover exists | Sticky hover on touch looks broken | `@media (hover: hover)` for hover styles |
| Pressed feedback is immediate | A delay feels broken | Pressed state on pointer down, under 100 ms |
| Disabled controls explain why | A greyed button with no reason is a dead end | Helper text or enable the button and explain on press |
| Loading keeps the layout | Buttons that change width when a spinner appears jump | Reserve width; keep the label or swap in place |
| Cursor matches the action | Pointer on links and buttons, text on editable text, grab on draggable | Platform conventions (desktop apps often use the default arrow for buttons) |
| Selection and copy behave | Selecting a label as text while clicking it is annoying; copying an ID should be easy | `user-select: none` only on controls; copy buttons on identifiers |

## Scroll, viewport and layout stability

| Check | Why | How |
| --- | --- | --- |
| No layout shift on load | Content jumps lose people's place | Dimensions on media, matched font fallbacks, reserved space for late content |
| No shift when the scrollbar appears | Centered layouts jump between pages | `scrollbar-gutter: stable` |
| Overscroll contained in panels and sheets | Scrolling a panel should not scroll the page behind it | `overscroll-behavior: contain` |
| Safe areas respected | Notches, home indicators and rounded corners cut content | `env(safe-area-inset-*)` with `viewport-fit=cover`; platform insets on native |
| Mobile viewport height right | `100vh` hides content behind browser bars | `dvh`/`svh` units |
| Sticky headers do not cover anchors | Jumping to a section hides its heading | `scroll-margin-top` on targets |
| Long content does not break layout | Long words, URLs and names overflow | `overflow-wrap: anywhere` where appropriate; `min-width: 0` on flex children |
| Images keep their ratio and crop well | Faces cut off, stretched logos | `aspect-ratio` and `object-fit`/`object-position` per image |

## Color, depth and themes

| Check | Why | How |
| --- | --- | --- |
| Dark theme designed, not inverted | Inverted shadows and saturated colors look wrong | Elevation by lighter surfaces, desaturated accents, rechecked contrast |
| Images and logos work on both themes | A dark logo disappears on dark | Theme variants or a subtle stroke |
| Shadows match the light source and scale | Mixed shadow directions look assembled | One elevation scale; softer and larger as elevation grows |
| Hairlines visible but quiet | 1px borders at low contrast vanish on some screens | Test on standard-density displays, not only on high-density ones |
| Selection, scrollbars, form controls themed | Default blue selection on a branded page breaks the look | `::selection`, `accent-color`, `color-scheme` |

## Motion details

| Check | Why | How |
| --- | --- | --- |
| Motion starts from where things come from | Spatial continuity | Origin-aware transforms (`transform-origin` at the trigger) |
| Interruptible | Reversing mid-animation should not jump | Transitions over keyframes for state changes; springs on native |
| Exit faster than enter | Leaving should not hold people up | Shorter exit durations |
| No animation on first paint of content | Content should be readable at once | Animate changes, not arrival, except one purposeful moment |
| Reduced motion version exists | Required for comfort and accessibility | Fade or no motion under `prefers-reduced-motion` |

## The details people notice

- Favicon, page titles and social preview images are right for every page
  ([brand touchpoints](patterns/app-icons-and-brand-touchpoints.md)).
- The 404, empty states and end-of-feed moments have care ([human design](13-human-design.md)).
- Forms keep input on errors, autofill works, the keyboard type matches the field on mobile (`inputmode`,
  `autocomplete`).
- Dates, numbers and currencies in the person's locale.
- Print styles for pages people print (receipts, tickets, invoices).
- Nothing says "Lorem", "TODO", "undefined", "NaN", "[object Object]" or a raw error code.

## Reporting

For each issue: a screenshot crop (before and, when fixed, after), what is wrong, the fix applied or proposed, and the
token or rule it uses. Group by screen. Say which sizes, themes and states were checked.

## Worked comparison

**Situation:** a pricing page ready to launch.

**Weak.** The headline breaks with "tables" alone on the last line; check icons sit two pixels below the text's center;
prices use proportional numerals so "€29" and "€79" do not align; the plan cards have `overflow: hidden`, which clips
the focus ring on their buttons; on iPhone the sticky "Start" bar sits under the home indicator.

**Strong.** `text-wrap: balance` on the headline; icons aligned to the cap height with a token offset; tabular numerals
on prices; the focus ring moved outside the clipping container with `outline-offset`; the sticky bar padded with
`env(safe-area-inset-bottom)`. Before and after screenshots compared with `scripts/visual-diff.mjs`, and only the
intended areas changed.

## Checklist

- [ ] Screenshots on phone, tablet, laptop and large screen, light and dark, longest locale; zoomed in.
- [ ] Typography: wrapping, numerals, glyphs, tracking, line height, truncation.
- [ ] Alignment: optical icon alignment, edges, spacing by relationship, concentric radii.
- [ ] Interaction: hit areas, every state, focus visible and unclipped, hover only on hover devices.
- [ ] Stability: no layout shift, scrollbar gutter, overscroll, safe areas, dynamic viewport units.
- [ ] Themes: dark designed, images and logos on both, selection and controls themed.
- [ ] Motion: origin, interruptibility, exits, reduced motion.
- [ ] Before/after compared; regressions listed.
