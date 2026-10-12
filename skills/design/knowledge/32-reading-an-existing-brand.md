# Reading an existing brand

Most design work happens inside an identity that already exists — often an identity nobody wrote down. A senior
designer joining a project reconstructs the brand as it really is (in files, code and copy), judges it, and decides
what to protect before changing anything. This file is the method. The `brand-analyst` agent follows it; its output
uses `templates/brand-audit.md`.

## Why it matters

- **Equity is invisible until it is lost.** People recognize products by a color, a shape, a sound, a phrase. A
  redesign that removes them can feel like a different, less trustworthy product.
- **Code is the real guideline.** A brand book may say "Pantone 7621"; the product may use three slightly different
  reds and the framework's default blue. Designing from the brand book alone produces work that does not fit.
- **Inconsistency is information.** Several eras of decisions, unowned areas, and defaults nobody chose show where
  design attention is needed.

## Where a brand lives in a project

| Element | Where to look |
| --- | --- |
| Logo and marks | `public/`, `assets/`, `src/assets/`, favicons, app icons, SVG components, email templates |
| Color | CSS variables, Tailwind config or `@theme`, theme files, design-token JSON, literal colors in components, charts |
| Typography | `@font-face`, font imports (Google Fonts, `next/font`, `@fontsource`), `font-family` declarations, native font files |
| Shape and space | Radius, border, shadow and spacing tokens; component library configuration |
| Imagery | Image folders, illustration components, Lottie files, 3D assets, marketing pages |
| Icons | Icon library imports (one or several?), custom SVG icons |
| Motion | Animation libraries, transition tokens, keyframes, reduced-motion handling |
| Voice | Translation files, headings, buttons, empty states, errors, emails, push notifications, store listings |
| Intent | `DESIGN.md`, `PRODUCT.md`, `DESIGN-CONTEXT.md`, brand guidelines, Figma links, README |

`node scripts/design-scan.mjs <project>` lists most of these as a starting index.

## The audit, step by step

### 1. Inventory before judgment

Write down what exists, with sources, before forming opinions. Judgment formed early filters what you notice.

### 2. Logo and marks

- What kind of mark: wordmark, symbol, combination, monogram, mascot?
- Colors and shapes inside the SVG; whether there are variants (dark, light, small).
- Where it appears and how big; whether there is clear space.
- What makes it recognizable at small sizes (favicon, app icon).

### 3. Color as used, not as declared

- **Lead color**: the one that carries the brand. Count where it appears and for what (actions, headers, accents).
- **Functional colors**: error, warning, success, info. Do they collide with the brand color (a red brand vs. red
  errors)?
- **Defaults nobody chose**: framework blues and grays, chart library palettes. They dilute the brand.
- **Drift**: near-duplicates (`#dc2626`, `#ef4444`, `#e11d48` for the same role).
- **Contrast**: check key pairs (`scripts/contrast.mjs`): text on brand color, muted text, borders of controls.
- **Dark mode**: does it exist, and is it designed or inverted?

### 4. Typography as used

- Families and their roles; whether the display face has a reason (character) or is a default.
- Scale: are there 4–6 deliberate sizes or 15 arbitrary ones?
- Weights, numerals (tabular for data), line lengths.
- Language coverage: does the family support every script the product ships?

### 5. Shape, space and density

Radii, borders, shadows, spacing rhythm and density. Consistency here is what makes an interface feel designed.

### 6. Imagery, illustration and icons

One style or several? Real photography or stock? Icon sets mixed (outline next to filled, two libraries)? Do
illustrations match the audience?

### 7. Motion

Does motion have a character (precise, bouncy, calm)? Are durations and easing consistent? Is reduced motion
honored?

### 8. Voice

Read copy across surfaces and languages:

- Form of address (formal/informal; per language).
- Warmth, humor, directness, sentence length.
- Vocabulary: the product's nouns and verbs; jargon.
- Breaks: playful onboarding with robotic errors; English strings left in other languages; marketing tone inside
  the product.

### 9. Intent documents

Compare what brand documents say with what the product does. The gap is a finding: either the documents are aspirations
that were never implemented, or the product drifted.

## Judging the brand

| Question | Signs of strength | Signs of trouble |
| --- | --- | --- |
| **Coherent?** | One logic for color, type, shape, voice | Several eras; each screen from a different decade |
| **Distinctive?** | Recognizable with the logo removed | Could be any product built with the same library |
| **Fit?** | Matches audience, stakes and context | A playful palette on payroll; a cold palette on a kids app |
| **Accessible?** | Brand colors usable with sufficient contrast | Brand color fails on text and nobody adapted it |
| **Scalable?** | Works in product, marketing, email, social, print | Only works on the landing page |
| **Owned?** | Tokens and rules exist | Values copied by hand everywhere |

## Equity: what to preserve

Equity is what people already associate with the product. Signs: it appears everywhere, it has been there a long
time, customers mention it, it is distinctive in the category. Typical equity: the lead color, the logo, a type
choice, a mascot, a phrase, a sound, a layout signature.

Rules:

- **Preserve equity by default.** Change it only with a reason and a migration plan
  (`knowledge/29-redesigns-and-migrations.md`).
- **Evolve before replacing**: adjust a color for contrast, modernize a typeface within its style, simplify a logo
  while keeping its shape.
- **Do not confuse equity with habit**: something can be everywhere and still be a default nobody likes.

## When there is no brand

Say so plainly. List the decisions to make (lead color, type, voice, imagery) and whether the task requires them now.
Do not invent a brand inside an unrelated task; propose it as its own piece of work (`workflows/brand.md`).

## Reading intent from contradictions

When something contradicts the rest (a single screen in a different style), ask whether it is the future (a new
direction being introduced) or the past (a leftover). The answer changes the recommendation: extend it or remove it.

## Worked example (fictional)

**Project:** a sports club management platform.

- **Inventory**: burgundy `#7a0f1e` as lead (21 uses, all primary actions and sidebar); gold accent `#b08d47`;
  Playfair Display for marketing headings, a grotesque for the product; reds `#dc2626`/`#ef4444` for errors and also
  for some brand moments; Tailwind's default blue in charts and links; two icon libraries.
- **Judgment**: burgundy and gold are distinctive and fit a club's heritage (crests, scarves). The reds compete with
  the burgundy and blur "brand" with "error". Default blue links look like another product.
- **Preserve**: burgundy, gold, the serif on marketing.
- **Fix**: one error red clearly distinct from burgundy (hue and lightness), links in the lead color or neutral,
  one icon library, a chart palette derived from the brand with accessible contrast.
- **Question for the person**: is the serif meant for the product too, or only marketing?

## Common mistakes

- Judging from the logo and the landing page only.
- Taking the brand guideline as the truth without checking the product.
- Calling every default "the brand".
- Proposing a new identity when the task was a screen.
- Ignoring voice: a brand is also how it speaks.

## Checklist

- [ ] Inventory with sources for logo, color, type, shape, imagery, icons, motion and voice.
- [ ] Declared vs. used compared; defaults and drift identified.
- [ ] Key contrasts checked.
- [ ] Equity listed and protected.
- [ ] Inconsistencies ranked by impact, with fixes.
- [ ] Fit with audience and stakes judged.
- [ ] Questions about intent written for the person.
