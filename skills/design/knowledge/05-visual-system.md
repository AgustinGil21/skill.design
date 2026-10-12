# Visual system: typography, color, space, shape and motion

How a designer builds a small set of visual decisions and holds them across the whole product. Style shows in
consistency, not in the number of ornaments. This file is the summary: what each part of the system is for, how the
parts work together, and which values are good starting points versus fixed rules.

In depth: [typography](09-typography.md), [color](10-color.md), [composition and layout](17-composition-and-layout.md),
[imagery, icons and illustration](19-imagery-icons-and-illustration.md), [design systems](18-design-systems.md).

## What it is and why it matters

A visual system is the set of decisions that every screen reuses: type scale, color roles, spacing scale, radii,
elevation, icon style, motion timing and the components built from them. Its value comes from repetition:

- **Recognition**: people learn the product's visual language once and read every screen faster.
- **Hierarchy**: when values are few and consistent, differences carry meaning.
- **Speed and quality**: designers and engineers stop re-deciding the same things and spend effort on real problems.
- **Accessibility**: contrast, sizes and focus styles verified once apply everywhere.

## Starting values vs. constraints

Many numbers in design advice are good **starting values**, not laws. Distinguish them:

| Kind | Example | Treat it as |
| --- | --- | --- |
| **Requirement** | Text contrast 4.5:1; targets at least 24×24 CSS px | Fixed |
| **Platform convention** | iOS 44 pt targets; Android 48 dp; 16 px minimum input font on iOS to avoid auto-zoom | Follow on that platform |
| **Starting value** | A 4 px spacing scale; a 1.2 type ratio; 150–250 ms transitions | Adjust to the product, then hold consistently |
| **Taste** | "Never pure black", "only one radius" | A preference with a reason; break it when the reason does not apply |

The goal is not to obey the numbers; it is to choose deliberately and then be consistent.

## Hierarchy: how the parts work together

Every screen needs **an entry point** (the title or the main thing), **a second level** (sections, key data) and **a
third level** (detail, metadata). Hierarchy is built with:

1. **Position**: what comes first in reading order and where the eye lands (top-left in left-to-right languages,
   top-right in right-to-left).
2. **Size**: bigger reads as more important.
3. **Weight**: bolder reads as more important at the same size.
4. **Contrast and color**: darker or more saturated stands out. Color is the most expensive tool: reserve it for state
   and action.
5. **Space**: isolation draws attention; proximity groups.

Use the cheapest tool that works. A hierarchy built only with color collapses in grayscale and for people with color
vision deficiencies.

**Test:** view the screen in grayscale and slightly blurred. Can you still tell the three levels apart?

## Typography

- **One family for the interface**, chosen for legibility at small sizes, with the weights and numerals you need, and
  coverage for every script the product ships. At most a second family with a clear role (brand headlines, or
  monospace for code and data).
- **A short, modular scale**: for example 12 · 14 · 16 · 20 · 24 · 32 · 40 px. Dense interfaces often use a 14 px base;
  reading content 16–18 px.
- **Weights**: regular for text, medium for labels and emphasis, semibold or bold for titles. Three weights are usually
  enough.
- **Line height**: about 1.4–1.6 for text; 1.1–1.25 for large headings; more for scripts with tall glyphs.
- **Line length**: about 45–75 characters for reading in Latin scripts; adjust for other scripts.
- **Tabular figures** in tables, times, prices and counters.
- **Minimum sizes**: avoid text below about 12 px on the web (11 pt on iOS) except legal small print; inputs at 16 px on
  mobile web.

See [typography](09-typography.md).

## Color

- **Neutrals for almost everything**: backgrounds, surfaces, borders and text at three levels (primary, secondary,
  tertiary).
- **One accent** for the primary action, focus and selection.
- **Semantic colors with fixed meanings**: success, warning, error, information. Keep each meaning stable across the
  product.
- **Brand color vs. functional meaning**: if the brand color is red, it will compete with error states. Decide how they
  coexist (for example, brand red only in marketing surfaces and logos; errors use a distinct red with an icon and
  text) rather than banning the brand color or confusing people.
- **Tokens, not loose values**: `--background`, `--foreground`, `--muted`, `--border`, `--primary`, `--destructive`…
  defined for every theme.
- **Dark mode is not an inversion**: surfaces get lighter as they rise in elevation, accents are slightly desaturated,
  shadows are replaced by lighter surfaces or borders. Pure black backgrounds are usually avoided because of halation
  with white text, but OLED-focused products sometimes choose them deliberately.
- **Contrast** per [accessibility](02-accessibility.md), in every theme.
- **Status badges**: a soft background with text in the same hue, with sufficient contrast, plus a word — not only a
  colored dot.

See [color](10-color.md).

## Space

- **A spacing scale**, commonly based on 4 px (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64). The base unit matters less than
  using only values from the scale.
- **Proximity groups**: more space between groups than within them. Space separates better than lines.
- **Consistent side margins**; a maximum width for reading content (around 65–75 characters of body text);
  tables and canvases can use the full width.
- **Density by use**: intensive work tools can be dense (rows of 32–40 px); occasional-use products more relaxed.
  Offer a density setting when both kinds of people use the same screens.

See [composition and layout](17-composition-and-layout.md).

## Shape and depth

- **A small set of radii**: often one for controls and one for containers (cards, dialogs). Hold them everywhere.
- **Depth with intent**: no shadow for what lies on the page; a soft shadow for what floats (menus, popovers); a
  stronger shadow for dialogs. Thin borders separate surfaces on the same plane.
- **Avoid cards inside cards**; use space and headings instead.
- **Shape can carry brand**: a distinctive corner treatment or a recurring geometric motif, applied consistently, is a
  recognizable asset.

## Icons

- **One family**, one stroke weight, consistent sizes (often 16 px in dense UI, 20 px in general).
- **Text next to icons** except for universally understood controls in context (close, search, more). Icon-only
  controls have an accessible name and, on pointer devices, a tooltip.
- **One icon, one meaning** across the product.
- **Directional icons mirror** in right-to-left layouts; icons of real objects usually do not.

See [imagery, icons and illustration](19-imagery-icons-and-illustration.md).

## Motion

- **To explain, not to decorate**: where something came from, where it went, what changed.
- **Durations** as starting values: about 100–150 ms for small state changes (hover, toggle); 200–300 ms for panels
  and dialogs; longer only for large, rare transitions.
- **Easing**: ease-out for entering, ease-in for exiting; springs without overshoot (critically damped) for direct
  manipulation. No bounce, elastic or "back" easings unless explicitly asked for (see
  [motion](landing/06-motion.md)).
- **Do not animate layout while people read or type**; no bouncing in chat scrolls or changing lists.
- **Honor reduced motion**: replace movement with fades or instant changes, keeping the information the motion carried.

See [landing motion](landing/06-motion.md) for expressive motion.

## Components

- **Use a solid, accessible library** (the project's system, or established ones) and **keep its design language**:
  customize through tokens instead of reinventing controls.
- **Every component with all its states**: default, hover, focus, pressed, selected, disabled, loading, error, empty.
- **Buttons**: primary (solid), secondary (outline or subtle), tertiary (text), destructive; one size per context; a
  stable width while loading.

## Choosing a system for the product

The right system depends on the product:

| Product | System tendencies |
| --- | --- |
| Intensive work tool (CRM, editor, admin) | Dense type and spacing, quiet neutrals, one accent, strong focus styles, keyboard-friendly components |
| Consumer app used briefly and often | Larger targets, clear hierarchy, more color and imagery, motion for feedback |
| Content and reading | Comfortable type, generous line height, restrained UI chrome |
| Marketing site | More expressive type and color, imagery, motion — built on the same tokens as the product where possible |
| Data visualization | A palette designed for distinguishable series, neutral surroundings |

## Validating the system together

Tokens are often validated one by one ("this text color passes contrast on this background"). Real screens combine
them. Validate combinations:

- Text levels on every surface level, in every theme.
- Selected, focused, hovered and error states on the same component at once (a selected row with an error and focus).
- The longest language and extreme content in each component.
- Dense and comfortable densities, if both exist.

## Worked comparison

**Same screen:** a project list in a team tool.

**Undecided system.** Titles at 17, 18 and 19 px depending on the page; five grays used for text; three radii; a blue
accent on buttons, a teal on links, purple on selected rows; shadows on every card; icons from two sets.

**Decided system.** Type scale 12/14/16/20/24; three text levels from the neutral ramp; one accent for primary
actions, focus and selection; links in body text underlined; two radii (6 px controls, 12 px containers); shadows only
on menus and dialogs; one icon set at 16/20 px. The page looks calmer and the selected row is immediately obvious,
because it is the only place the accent appears in the list.

## Common mistakes

- **Too many values**: five text sizes that differ by one pixel, seven grays, many radii.
- **Color as the only hierarchy tool.**
- **Treating starting values as laws**, or ignoring requirements as if they were preferences.
- **Validating tokens in isolation**, then discovering clashes in real screens.
- **Reinventing library components** instead of theming them.

## Checklist

- [ ] Hierarchy holds in grayscale and blur.
- [ ] Type, color, spacing, radius, elevation and motion come from a small set of tokens.
- [ ] Requirements (contrast, target size) are met; starting values are adjusted and then held.
- [ ] The brand color and semantic colors coexist without confusion.
- [ ] Every theme meets contrast; combinations of states were validated together.
- [ ] Components have all their states.
- [ ] Icons are one family, labeled where needed, mirrored correctly in right-to-left.
- [ ] Motion explains and has a reduced version.
