# Typography in the system: families, weights, styles and the specimen

How a design system turns typographic choices into rules people can follow without a typographer in the room: which
family does which job, which weights exist and what each one means, when italics are used, and how every text style
is written down — family, weight, style, size, line height, tracking, case, figures — so designers, developers and
agents pick the same one.

Choosing and pairing typefaces, building the scale and the craft details are in [09-typography](../09-typography.md).
This file starts once the families are chosen.

## What it is and why it matters

Typography is usually the first thing to drift in a product. Without written rules:

- **Weights multiply**: 300, 400, 500, 600, 700 and 800 all appear, each chosen by eye, and the hierarchy blurs
  because 500 and 600 side by side read as a mistake, not a level.
- **Families swap jobs**: the display face creeps into buttons, the text face into hero headlines, and the brand
  voice goes with it.
- **Italics appear as decoration** and disappear where they carry meaning (a book title, a term being defined).
- **Fonts are loaded "just in case"**: every weight and italic of two families, making every page slower.
- **Nobody can name a style**: "the bold gray small one" instead of `text.label`.

A typography system answers each of these once.

## 1. Family roles: which family does which job

Give each family a written job, not just a name. Typical roles:

| Role | Used for | Not used for | Notes |
| --- | --- | --- | --- |
| **Text (UI and reading)** | Body, labels, buttons, fields, tables, navigation, help, errors | Rarely the brand's display moments, if a display family exists | Must have the weights, true italic, tabular figures and language coverage the product needs |
| **Display** (optional) | Hero headlines, page titles, brand moments, large numbers in marketing | Running text, small sizes, controls, dense data | Often only one or two weights; check legibility at its smallest allowed size |
| **Mono** (optional) | Code, IDs, keys, aligned technical values, sometimes metadata labels | Running text, buttons by default | Only when the content is truly technical or the brand uses it as a deliberate signal |

Rules that keep roles clean:

- **Two families at most** in most products (rule 10 in `SKILL.md`); a mono for code is the common, justified third
  when the product shows code or identifiers. One family with a good range of weights is often enough.
- **The boundary is written by size and context**, not by mood: "The display family is used at `heading.2` and above
  on marketing pages; the product UI uses the text family everywhere." Without a boundary, every designer redraws it.
- **The text family carries the product**; the display family carries the brand. When in doubt in a dense screen,
  the text family wins.
- **Per script**: if the product ships in scripts the chosen families do not cover (Arabic, Devanagari, CJK), each
  role names its family per script, matched in weight and size ([09-typography](../09-typography.md), section 7).

## 2. The weight map: which weights exist and what they mean

A weight is a token with a meaning, not a free choice. Decide which weights the system uses and give each one a job.

| Token | Typical value | Meaning | Used in |
| --- | --- | --- | --- |
| `font.weight.regular` | 400 | Reading | Body, long text, table cells, help text |
| `font.weight.medium` | 500 | Interface emphasis | Labels, buttons, tabs, navigation, table headers |
| `font.weight.semibold` | 600 | Structure | Headings, card titles, key numbers |
| `font.weight.bold` | 700 | Strong emphasis | Inline emphasis in text, rare display headings |

These values are a common starting point, not a rule. How to decide for a product:

- **Three or four weights cover almost every product.** Each extra weight must name the job no other weight does.
- **Adjacent weights should not sit side by side as different levels.** 500 next to 600 reads as an accident;
  hierarchy needs a visible step (400 to 600, or a size change).
- **Check the actual family**: "600" in one family is heavier than in another; some families' 500 is nearly
  indistinguishable from 400. Choose by how the weights look at the sizes they will be used, on screen, in both
  themes — text on dark backgrounds looks heavier, so some systems use a lighter weight in dark mode for large text.
- **Thin weights (100–300)** only at large display sizes, if ever: at small sizes they fail legibility and can fail
  contrast in practice even when the color passes.
- **Heavy weights (800–900)** only for display moments, if the brand calls for them.
- **Inline emphasis** in running text uses one rule: bold (`font.weight.bold`) or the semibold, not both, and never
  color alone.
- **Variable fonts** let the system pick intermediate values (450, 550). Use them only when a named role needs it, and
  still write the value as a token; "any weight between 100 and 900" is not a system.

## 3. Italics: when, and when not

| Use italics for | Avoid italics for |
| --- | --- |
| Titles of works (books, films, publications), when the language's style guide uses them | Whole paragraphs, long passages (harder to read; 09-typography, section 9) |
| A term being defined or introduced, the first time | Interface labels, buttons, navigation, table data |
| Foreign words, where the language's conventions call for it | Emphasis in UI copy — use weight, or rewrite |
| Quotations or testimonials, if the brand uses that convention consistently | Placeholder text as its only distinction from entered text |
| Captions or notes, when the system defines that style | Decoration |

Rules:

- **True italics only.** If the family has no italic in a weight the system uses, either load it or do not use italic
  in that style; browsers synthesize a slanted roman otherwise, which looks broken. Turn off synthesis
  (`font-synthesis: none` on the web) so a missing file is noticed instead of faked.
- **Each italic file is a cost.** Load italics only for the weights that styles actually use in italic (often only
  regular).
- **Some scripts have no italic tradition** (many CJK, Arabic and Indic contexts). The style that uses italic in Latin
  needs a defined alternative per script: weight, a different family, quotation marks.
- **Emphasis in the product's language** follows its typographic conventions; the system documents them per language
  ([24-content-and-localization](../24-content-and-localization.md)).

## 4. Text styles: the unit people use

Components and screens never choose family, weight and size separately. They choose a **text style** — a composite
token that bundles everything ([02-foundations-and-tokens](02-foundations-and-tokens.md)).

### What each style defines

| Property | Example | Why it is part of the style |
| --- | --- | --- |
| Name (by role) | `text.heading.2` | People and code refer to it by name |
| Family (role) | Text family | So no one picks the family per screen |
| Weight | `font.weight.semibold` (600) | The meaning of the level |
| Style | Normal or italic | Whether this style is italic by definition |
| Size | 24 px (1.5 rem), or a fluid range for display | The scale step |
| Line height | 1.25 (unitless) | Bound to size; display tight, body loose |
| Letter spacing | −0.01 em | Tighter at large sizes, open for small caps and uppercase labels |
| Case | None, or uppercase | Uppercase only for short labels, with added tracking |
| Figures | Tabular or proportional; lining or old-style | Tabular for numbers that align or change (tables, prices, timers) |
| Other features | Small caps, ligatures off for code | Only when the family supports them |
| Max line length | 60–75 characters for reading styles | Readability ([09-typography](../09-typography.md), section 4) |
| Responsive behavior | Size at each breakpoint, or `clamp()` range | Headings shrink on phones; body usually does not |
| Usage | "Section titles inside a page; one per section" | The rule that lets someone choose correctly |

### A typical set

| Style | Family | Weight | Style | Size / line height | Tracking | Figures | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `text.display` | Display | 600 | Normal | fluid 40–72 / 1.05 | −0.03 em | Lining | Hero headlines, brand moments only |
| `text.heading.1` | Text or display | 600 | Normal | 32 / 1.15 | −0.02 em | Lining | Page title, one per page |
| `text.heading.2` | Text | 600 | Normal | 24 / 1.25 | −0.01 em | Lining | Section titles |
| `text.heading.3` | Text | 600 | Normal | 18 / 1.35 | 0 | Lining | Card and group titles |
| `text.body` | Text | 400 | Normal | 16 / 1.55 | 0 | Proportional | Running text, descriptions |
| `text.body.emphasis` | Text | 600 | Normal | 16 / 1.55 | 0 | Proportional | Inline emphasis inside body |
| `text.label` | Text | 500 | Normal | 14 / 1.4 | 0 | Proportional | Field labels, buttons, tabs |
| `text.caption` | Text | 400 | Normal | 13 / 1.4 | 0 | Proportional | Help text, metadata, timestamps |
| `text.overline` | Text or mono | 500 | Normal | 12 / 1.3 | +0.08 em, uppercase | Lining | Short section labels, never sentences |
| `text.numeric` | Text | 500 | Normal | 14 / 1.4 | 0 | Tabular, lining | Table numbers, amounts, scores |
| `text.quote` | Text or display | 400 | Italic | 20 / 1.5 | 0 | Old-style if available | Testimonials, pull quotes |
| `text.code` | Mono | 400 | Normal | 14 / 1.5 | 0 | Tabular | Code, IDs, keys |

The numbers are an example of one coherent set, not targets: derive yours from the scale and the families.

Rules:

- **Six to ten styles** cover most products. A style exists when a role exists; two styles that differ by one pixel
  are one style.
- **Headings are styles, levels are semantics.** A visual `text.heading.2` may sit on an `h3` element when the
  document structure requires it; never pick the HTML level for its look (1.3.1 Info and Relationships, A).
- **Sizes respect the person's settings**: rem on the web, dynamic type on iOS, scalable pixels on Android (1.4.4
  Resize Text, AA).
- **Line height unitless** so it scales with the size.

## 5. Documenting it: the type specimen

The system's typography page shows every decision with real text, so nobody reads a table to know what a style looks
like.

1. **Families**: name, role, where it is used and where it is not, the license, the weights and italics loaded, the
   languages and scripts covered, the fallback stack per platform.
2. **Weight map**: each weight token rendered in the family at a reading size and a heading size, with its meaning.
3. **Italic policy**: when to use, when not, the alternative per script.
4. **Style specimens**: one row per text style, rendered with a real sentence from the product in each supported
   language, followed by its specification — family, weight (name and number), style (normal or italic), size,
   line height, tracking, case, figures, features — and its usage line. In code, the token name; in the design tool,
   the matching style name.
5. **Do and don't**: same content set right and wrong (two adjacent weights as levels; italic labels; display family
   in a table; an uppercase sentence).
6. **Numbers**: tabular vs proportional side by side in a table and a sentence.
7. **Responsive**: how display and headings change from phone to desktop.
8. **Themes**: the same styles on light and dark, so weight and contrast differences are visible.

A specimen entry, written out:

```
text.heading.2 — Section titles inside a page; one per section.
Family: [text family] · Weight: Semibold (600) · Style: normal
Size: 24 px / 1.5 rem (20 px on phones) · Line height: 1.25 · Tracking: −0.01 em
Case: sentence case · Figures: lining, proportional
Code: var(--text-heading-2-*) · Design tool: Text/Heading 2
```

## 6. Loading only what the system uses

The weight map and the italic policy decide which files ship:

- **Load exactly the weights and italics the styles use**; a weight in no style is not loaded.
- **Variable fonts** when three or more weights of a family are used: one file instead of several
  ([09-typography](../09-typography.md), section 8).
- **Subset** to the scripts the product ships; load other scripts on demand.
- **Preload** only the one or two files needed for the first view.
- **Fallback metrics** adjusted to reduce layout shift when the font arrives.

## 7. Conflicts and trade-offs

| Tension | Resolve by |
| --- | --- |
| Brand wants the display family everywhere | Keep it for display styles; test it in a dense table at 13–14 px and show the result |
| A designer needs "something between" two weights | Use size or color for the step; add a weight only if a recurring role needs it |
| The family's italic is weak or missing | Drop italic from the styles that use it, or choose a family that has one; never synthesize |
| Uppercase labels look sharp in the mock | Allow them only for short labels in the overline style, never for sentences or buttons with long translations |
| Dark mode makes semibold headings heavy | A dark-mode weight token for large text, or accept it; test on real screens |

## Worked comparison

**Generic.** The type page lists "Inter 12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 40" and "weights: all". Screens use
500 for some headings and 600 for others; buttons are 600 on one screen and 500 on another; testimonials are italic
on the landing page and the browser slants them because the italic file was never loaded; prices in tables jump
because figures are proportional.

**Considered.** Two families with written roles (a grotesque for the product, a display face for hero titles on
marketing pages only, from `heading.1` up). Four weight tokens with meanings; 400, 500 and 600 loaded as one variable
file, italic loaded only at 400 for `text.quote`, synthesis turned off. Ten text styles, each with family, weight,
style, size per breakpoint, line height, tracking, case, figures and a usage line, rendered in the system page with
real sentences in each language, light and dark. Tables use `text.numeric` with tabular figures. Nobody chooses a
weight by eye anymore; they choose a style.

## Common mistakes

- **Weights without meanings**, so every screen invents its own hierarchy.
- **Adjacent weights as hierarchy levels.**
- **Synthesized italics and bolds** from missing files.
- **The display family in dense UI.**
- **Styles named by appearance** (`bold-gray-14`) instead of role.
- **Choosing the HTML heading level for its size.**
- **Loading every weight "just in case".**
- **A specimen of sizes without usage**, so people still guess.

## Checklist

- [ ] Each family has a written role, boundary (by size and context) and per-script equivalent if needed.
- [ ] Three or four weight tokens, each with a meaning; no adjacent weights used as levels.
- [ ] An italic policy: when, when not, true italics only, synthesis off, alternatives per script.
- [ ] Six to ten text styles, each with family, weight, style, size (responsive), line height, tracking, case,
      figures, features and usage.
- [ ] Headings' visual styles are separate from semantic levels; sizes respect the person's settings.
- [ ] The type specimen renders every style with real product text, in every language and theme, with do and don't.
- [ ] Only the weights and italics the styles use are loaded, subset and preloaded deliberately.
