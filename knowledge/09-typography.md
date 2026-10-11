# Typography in depth

How a designer chooses and uses type. Typography carries most of an interface's content and much of a brand's
personality; choosing and setting it well is one of the clearest differences between careful and generic design. This
file covers choosing families, pairing, scales, measurements, craft details, multiple scripts, performance and
accessibility.

## What it is and why it matters

Typography decides whether people can read comfortably, scan quickly, distinguish data precisely and recognize the
brand. Its decisions are among the most consequential in a visual system because text is everywhere: labels, data,
messages, headlines.

## 1. Choosing a family

Ask these questions in order:

1. **What does it have to do?** A dense interface (legibility at 13–15 px, tabular figures, several weights), long
   reading (comfortable body at 17–20 px), brand headlines (character at large sizes), data (unambiguous digits).
2. **What does it have to say?** Precision (neutral grotesques, monospace), warmth (humanist sans, soft serifs),
   luxury or editorial (high-contrast serifs), playfulness (rounded, shaped display faces), craft (transitional or slab
   serifs).
3. **Does it cover the languages?** Accents and diacritics, punctuation of each language, and the scripts the product
   ships (Latin, Cyrillic, Greek, Arabic, Hebrew, Devanagari, Thai, Chinese, Japanese, Korean…). A family that lacks a
   script forces a fallback that may look and behave differently.
4. **Does it have the technical features?** The needed weights, a true italic, tabular and proportional figures,
   variable axes, good screen hinting or metrics, a license that allows web, app and any embedding needed.

### Families by intent (starting points, not recipes)

| Intent | Type category | Common families (verify license and coverage) |
| --- | --- | --- |
| Neutral, precise interface | Grotesque / neo-grotesque | Inter, Geist, IBM Plex Sans, Public Sans |
| Warm and human | Humanist sans | Source Sans 3, Nunito Sans, Figtree, Atkinson Hyperlegible (designed for legibility) |
| Editorial / premium headlines | High-contrast serif | Fraunces, Playfair Display, Instrument Serif, Newsreader |
| Long reading | Text serif | Source Serif 4, Literata, Lora, Charter |
| Technical / data | Monospace | JetBrains Mono, IBM Plex Mono, Geist Mono |
| Strong brand character | Display with distinctive shapes | Space Grotesk, Syne, Bricolage Grotesque, Unbounded |
| Broad script coverage | Superfamilies designed across scripts | Noto Sans / Noto Serif families, IBM Plex (several scripts) |

Always check the license and the character set in the official source before using a family.

### Comparing candidates with real content

Do not choose a typeface from a specimen sentence. Build a test page with the product's real content:

- A dense table with real numbers, dates and codes.
- A paragraph of long-form text.
- The longest labels and buttons, in the longest language shipped.
- Names with diacritics and from other scripts the product will display.
- Headlines at their real size.
- Error messages and small print.

Compare two or three candidates side by side on screen, at real sizes, in light and dark. A face that wins in
headlines may lose in data (see the worked comparison below).

### How to avoid the generic

- Inter, Roboto or Arial everywhere, with no decision, is the "AI default" typography. It can be the right choice for an
  interface, but then character must come from elsewhere: headlines in another family, size, weight, color, layout.
- **A contrast with intent**: an expressive serif for headlines with a neutral sans for text
  ([Mailchimp](https://mobbin.com/sites/sections/28982227-0e30-418a-b6ce-37e80af7982c),
  [Frontify](https://mobbin.com/sites/sections/9dc7cb3d-08cc-4c17-bb89-4373060676f2)); or one variable family used at
  the extremes of weight and size.
- **Assign roles and say so** (headlines / body / code;
  [Aave](https://mobbin.com/sites/sections/194a20c4-7e03-4839-86b3-30981d8db06e)).
- Type can be the image: huge headlines that compose the page
  ([Studio Freight](https://mobbin.com/sites/sections/37214c10-d891-48bc-a46e-6050033671b4)), or a display face as the
  protagonist when the product is about brand, fashion or culture.

## 2. Pairing

- **Two families at most** (plus a monospace for code or data). A third needs a strong reason.
- **Contrast in one dimension, not all**: serif with sans of similar proportions (similar x-height), or one family at
  opposite weights.
- **Avoid two similar sans-serifs** (for example two neo-grotesques): it looks like a mistake, not a decision.
- **Check pairing across scripts**: a Latin pair may need matching faces for Arabic or Japanese that share weight and
  size relationships.
- **Test with real copy** at real sizes, never with lorem ipsum.

## 3. Scale

A modular scale gives rhythm and prevents arbitrary sizes.

| Ratio | Name | Typical use |
| --- | --- | --- |
| 1.125 | Major second | Dense interfaces (tables, panels) |
| 1.2 | Minor third | General interfaces |
| 1.25 | Major third | Sites with reading and moderate marketing |
| 1.333 | Perfect fourth | Landing pages with strong headlines |
| 1.5–1.618 | Perfect fifth / golden | Editorial, dramatic headlines |

Example with a 16 px base and 1.25: 12.8 · **16** · 20 · 25 · 31.25 · 39 · 48.8 · 61. Round to whole or half pixels.

### Scale by function, not only by ratio

A ratio produces sizes; the system needs **roles**. Define each role with its size, weight, line height and use:

| Role | Example values | Used for |
| --- | --- | --- |
| Display | 48–64 px, semibold, 1.05 | Landing headlines only |
| Heading 1 | 28–32 px, semibold, 1.15 | Page titles |
| Heading 2 | 20–24 px, semibold, 1.25 | Section titles |
| Body | 16 px, regular, 1.5 | Paragraphs, descriptions |
| UI | 14 px, medium, 1.4 | Labels, buttons, table cells |
| Small | 12–13 px, regular, 1.4 | Metadata, captions |
| Mono | 13–14 px, regular, 1.5 | Code, IDs |

- **Fluid scale** for landing pages: headlines can grow with the viewport using `clamp()` (for example
  `font-size: clamp(2.5rem, 1.5rem + 4vw, 5rem)`), while body text stays nearly fixed (16–18 px on mobile, 17–20 px on
  desktop).
- **Use `rem`, not `px`**, so text respects the size people chose in their browser.
- **Few steps**: five to seven sizes across the product.

## 4. Measurements that matter

These are starting values for Latin scripts; adjust for others.

- **Line length**: about 45–75 characters (around 66 is a common target) for reading; `max-width: 65ch`. CJK text is
  usually measured in characters too, with shorter comfortable lines in character count.
- **Line height**: body 1.5–1.7; headings 1.05–1.2 (larger sizes tighter); dense UI around 1.4. Scripts with tall
  glyphs or stacked diacritics (Vietnamese, Thai, Arabic, Devanagari) need more.
- **Letter spacing**: large headings −1 % to −3 %; all caps and very small text +2 % to +8 %; body text 0. Many
  scripts (Arabic, Devanagari) should not have letter spacing applied at all: it breaks joins.
- **Weights**: 400 for body, 500–600 for UI emphasis, 700+ for headings. Avoid 300 or lighter for small text: it
  loses contrast.
- **Minimum sizes**: 16 px for form inputs on mobile web (iOS zooms in when smaller); 12–13 px only for labels and
  metadata.
- **Contrast**: 4.5:1 for normal text, 3:1 for large text (24 px, or 18.66 px bold) — WCAG 1.4.3.

## 5. Craft details

- **Tabular figures** (`font-variant-numeric: tabular-nums`) in tables, prices, counters and clocks, so digits align
  and numbers do not jump when they change.
- **Real punctuation for each language**: the correct quotation marks („…“, «…», “…”, 「…」), em dash for asides, en
  dash for ranges (10–20), typographic apostrophe (’), ellipsis (…), non-breaking spaces where the language requires
  them (for example before certain punctuation in French, between numbers and units).
- **Widows and orphans**: `text-wrap: balance` for headings and `text-wrap: pretty` for paragraphs where supported.
- **All caps** only for short labels, with added spacing; never for paragraphs. Some scripts have no case at all, so
  do not rely on capitalization for hierarchy.
- **True italics** from the family, not synthetic slanting. Some scripts have no italic tradition; use weight or
  another style for emphasis there.
- **Ligatures and alternates** (`font-feature-settings`) with judgment, mainly in headlines.
- **Alignment**: start-aligned for reading (left in left-to-right, right in right-to-left); centered only for one to
  three lines; justified rarely on the web, because it creates uneven spacing without good hyphenation.
- **Hierarchy with few tools**: size and weight first, then color; do not underline what is not a link.

## 6. Text expansion, truncation and wrapping

Real content is longer, shorter and more varied than mockups.

| Situation | Prefer | Avoid |
| --- | --- | --- |
| Button label longer in another language | Let the button grow or wrap | Fixed widths that cut text |
| Long names in a list | Wrap to two lines, or truncate with the full name available on focus and in detail | Truncating to an ambiguous prefix ("Dr. Alexandra Papad…") with no way to read it |
| Table headers | Wrap, or abbreviate with a full label available to assistive technology | Rotated headers that are hard to read |
| Long compound words (German, Finnish) | `hyphens: auto` with the correct `lang`; `overflow-wrap: anywhere` as a last resort | Overflowing containers |
| Numbers that grow | Tabular figures and enough width for the largest realistic value | Layouts that shift when a counter goes from 9 to 10 |

## 7. Multiple scripts and fallbacks

- **Choose families that cover every script you ship**, or pair a primary family with deliberately chosen companions
  per script that match weight, size and tone.
- **Fallback stacks are design decisions.** When a character is missing, the browser falls back to another font. An
  unmatched fallback looks broken: different size, weight and baseline in the middle of a sentence. Define fallback
  stacks per script, and adjust metrics (`size-adjust`, `ascent-override`, `descent-override`) so fallbacks match.
- **Line breaking and justification** differ: Chinese and Japanese break between characters with rules about
  punctuation; Thai and Lao need dictionary-based breaking; Arabic must not be letter-spaced. Rely on the browser with
  the correct `lang`, and test.
- **Mixed-script text** (a Latin brand name inside an Arabic sentence) needs both fonts to harmonize in size and weight.
- **Right-to-left**: alignment, punctuation and number direction follow the script. See
  [content and localization](24-content-and-localization.md).

## 8. Loading and performance

- **Subsets per language or script**, WOFF2 format, `font-display: swap` (or `optional` for non-critical fonts).
- **Preload only the font used by the first text that appears.**
- **Adjust fallback metrics** so text does not jump when the web font loads (cumulative layout shift).
- **Variable fonts** when three or more weights are used: one file instead of many.
- **Self-host** when possible, for performance and privacy.
- **CJK fonts are large**: use subsetting by usage, system fonts, or services that serve only the characters needed.

## 9. Typography and accessibility

- **Respect zoom and system text size**: no fixed sizes that do not scale.
- **Distinguishable letterforms** (I l 1, O 0, rn vs. m) for data and codes; families such as Atkinson Hyperlegible are
  designed for this.
- **Avoid long passages** in all caps, in italics, or in very thin or very condensed fonts.
- **User-adjusted text spacing must not break the layout** (WCAG 1.4.12 Text Spacing, AA: line height 1.5×,
  paragraph spacing 2×, letter spacing 0.12 em, word spacing 0.16 em).
- **Reading fatigue**: long sessions favor comfortable sizes, generous line height and moderate contrast (very high
  contrast pure white on pure black can cause halation for some readers).

## Worked comparison: a typeface that wins in headlines and loses in data

**Situation:** a fintech brand chooses a geometric display sans for its identity. It looks distinctive in the landing
page headlines.

**Weak decision.** The same face is used for the whole app. In the transaction table, its proportional digits make
amounts misalign; "1" and "l" look alike in reference codes; at 13 px, its tight apertures blur "e" and "c"; Greek and
Cyrillic customer names fall back to a system font with a different x-height.

**Strong decision.**

- Brand face for display and headings only.
- A neutral sans with tabular figures, open apertures and Latin, Greek and Cyrillic coverage for UI and data.
- A monospace for reference codes.
- Fallback metrics adjusted for the scripts that are not covered.
- Tested with a real statement: 200 transactions, names in three scripts, amounts up to 9,999,999.99.

## Common mistakes

- **Choosing from a specimen** instead of from real content.
- **One family for everything**, including data where it fails.
- **Ignoring script coverage** until translations arrive.
- **Letter-spacing scripts that must not be letter-spaced.**
- **Fixed pixel sizes** that ignore user settings.
- **Proportional figures in tables.**
- **Truncating without a way to read the full text.**

## Checklist

- [ ] The family was chosen with real content, at real sizes, in light and dark.
- [ ] Every script shipped is covered, with deliberate, metric-matched fallbacks.
- [ ] Roles (display, headings, body, UI, small, mono) are defined with size, weight and line height.
- [ ] Sizes use `rem` and respect user settings.
- [ ] Line length, line height and spacing are adjusted per script.
- [ ] Tabular figures are used for numbers that align or change.
- [ ] Text expands, wraps and truncates gracefully in the longest language.
- [ ] Fonts are subset, preloaded selectively and do not cause layout shift.
- [ ] Contrast and text-spacing requirements are met.
