# Color in depth

How a designer builds and uses color. Color organizes (what is what), communicates (state, danger, success) and gives
character — in that order of importance. A palette that looks beautiful in a swatch can still fail in real screens if
its roles collide, its states are indistinguishable or its contrast drops in dark mode. This file covers structure,
scales, contrast, roles and states, brand color, character, dark mode and data.

## What it is and why it matters

Color decisions affect:

- **Comprehension**: whether people can tell interactive from static, selected from unselected, error from warning.
- **Access**: whether text is readable and states are perceivable for people with low vision or color vision
  deficiencies.
- **Recognition**: whether the brand is recognizable.
- **Mood**: whether the product feels calm, urgent, playful or serious.

## 1. The structure of a palette

- **Neutrals (most of the surface)**: a scale of about 10–12 steps, slightly tinted toward the brand hue or toward warm
  or cool, rather than an unconsidered pure gray.
- **One brand or accent color**: for the primary action, focus and selection. A scale of 10–12 steps.
- **Semantic colors**: success, warning, error, information — each with a soft background, a border, text and an icon
  color.
- **Optionally, one or two supporting colors** for charts, categories and illustration.

The 60-30-10 rule (60 % base, 30 % secondary, 10 % accent) is a starting point for marketing pieces, not a law for
interfaces, where neutrals usually dominate far more.

## 2. Building scales with OKLCH

Work in **OKLCH** (lightness, chroma, hue) rather than HEX or HSL: steps look perceptually even and contrast becomes
more predictable, because lightness in OKLCH tracks perceived lightness much better than HSL's.

```css
:root {
  --brand-50:  oklch(97% 0.02 45);
  --brand-100: oklch(93% 0.04 45);
  --brand-300: oklch(80% 0.10 45);
  --brand-500: oklch(65% 0.17 45);  /* base */
  --brand-700: oklch(48% 0.14 45);
  --brand-900: oklch(30% 0.08 45);
  --neutral-50:  oklch(98% 0.004 60);
  --neutral-900: oklch(20% 0.01 60);
}
```

### Building and correcting a scale

1. **Fix the hue** (H) for the scale; allow small hue shifts at the ends if colors look muddy (yellows often need to
   shift toward orange in darker steps).
2. **Set lightness steps** (L) evenly, denser near the middle where most UI colors live.
3. **Reduce chroma** (C) at the light and dark ends, where high chroma falls out of the displayable gamut.
4. **Check every step in sRGB**: some OKLCH values are out of gamut on common screens and get clipped, changing their
   appearance and contrast.
5. **Test the steps in use**: text on each background, borders on each surface, in light and dark themes.
6. **Adjust by eye after measuring**: perceptual uniformity is a starting point; some hues need manual correction.

### Naming

Name by **scale** in definitions (`--brand-500`) and by **role** in use (`--background`, `--text`, `--text-muted`,
`--border`, `--action`, `--danger`). Components should only use role tokens, so themes can change the mapping.

## 3. Contrast

| What | Minimum (WCAG 2.2 AA) |
| --- | --- |
| Normal text | 4.5:1 (1.4.3) |
| Large text (24 px, or 18.66 px bold) | 3:1 (1.4.3) |
| Input borders, meaningful icons, focus indicators, chart elements | 3:1 against adjacent colors (1.4.11) |
| Text in disabled controls, decorative text, logos | Exempt from the requirement |

**Disabled text.** WCAG exempts inactive controls from contrast requirements. As a recommendation, keep disabled text
legible enough to read (people need to know what the control is), make the disabled state obvious by more than color
(lower contrast plus a different cursor and the absence of hover), and never rely on a disabled control to communicate
why it is disabled: say it in text nearby. This aligns with [accessibility](02-accessibility.md).

- **APCA** (Accessible Perceptual Contrast Algorithm, under development for future guidelines) models perceived
  contrast better for dark mode and small text. Use it as a second opinion when tuning; conformance today is measured
  with the WCAG 2.x ratio.
- **Text on images**: measure against the lightest and darkest areas the text actually crosses; add a scrim, a soft
  shadow or a solid box when needed. Images change with responsive cropping, so test at several widths.
- **Color is never the only signal**: error = color + icon + text (1.4.1).
- **Test with color vision deficiency simulators** (deuteranopia and protanopia are the most common): red versus green
  as the only difference fails.

Use `scripts/contrast.mjs` for every text/background pair and every border/surface pair in each theme.

## 4. Roles and semantic collisions

Real components combine several color meanings at once. Design the combinations, not only the swatches.

### A surface and state matrix

For a component such as a list row, check every combination people will see:

| State combination | Background | Text | Border / indicator |
| --- | --- | --- | --- |
| Default | surface | text | none |
| Hover | surface-hover | text | none |
| Selected | accent-subtle | text | accent bar at the start edge |
| Focused (keyboard) | as current state | text | focus ring (3:1 against both background and surroundings) |
| Selected + focused | accent-subtle | text | accent bar + focus ring, both visible |
| Error | danger-subtle | text | danger icon + text |
| Selected + error | accent-subtle | text | accent bar + danger icon + text (the error must remain visible) |
| Disabled | surface | text-disabled | none |

Collisions to watch:

- **Focus vs. selection**: if both use the accent color, keyboard users cannot tell which row is focused and which is
  selected. Use different treatments (a ring for focus, a fill or bar for selection).
- **Brand vs. error**: if the brand is red, errors and brand elements look alike. Keep errors paired with an icon and
  text; use a distinct hue or lightness for errors; keep brand red away from forms and alerts.
- **Brand vs. links**: if the accent is blue and links are blue, actions and navigation blur. Underline links in text.
- **Warning vs. highlight**: yellow highlights for search results can look like warnings.

## 5. Brand color vs. functional meaning

Brand colors carry identity; functional colors carry meaning. When they conflict:

| Brand color | Risk | Common resolution |
| --- | --- | --- |
| Red | Looks like errors and destructive actions | Brand red for logo and marketing; product accent in a neutral or second brand color; errors with icons and text |
| Green | Looks like success | Use brand green for brand moments; success states with icon and text, possibly a different green |
| Yellow / light colors | Fails contrast as text or on white | Use dark text on brand yellow; never yellow text on white |
| Very dark brand color | Hard to use in dark mode | Define a lighter variant for dark surfaces |

The goal is not to remove the brand from the product, but to keep functional signals unambiguous.

## 6. Palettes with character (and avoiding the generic)

Generic today: purple-blue gradients, the default SaaS blue (#3B82F6) on white, black with neon purple glows.

Ways to build character:

- **An unexpected lead color for the category**, used with conviction: Mailchimp's yellow with a warm black
  ("Cavendish Yellow" + "Peppercorn"; [Mailchimp](https://mobbin.com/sites/sections/c8d952df-f1ff-456c-b797-d9838627301e));
  intense full-screen orange ([Raw Materials](https://mobbin.com/sites/sections/f8f4b266-6f1c-4821-a57f-610a525137f5)).
- **Warm neutrals** (bone, paper, sand) instead of pure white and cold gray: more human and editorial.
- **Monochrome plus one accent**: almost everything in one hue's scale, the accent only for action.
- **Palettes taken from something real**: a photograph, a material, a place, an object from the domain; this gives
  natural coherence.
- **Named colors** within the brand: identity and easier correct use.
- **A broad but accessible palette**: many colors, each tested with white and black text
  ([Canva](https://mobbin.com/sites/sections/9665e99f-9b88-4608-8ed7-6b05549186e9) documents this in its guide).

Starting combinations (adjust in OKLCH and test contrast):

| Character | Base | Text | Accent |
| --- | --- | --- | --- |
| Warm editorial | Bone / paper | Warm near-black | Brick red or terracotta |
| Sober technical | Bluish near-black | Light gray | An acid green or orange |
| Natural | Cream | Dark forest green | Mustard |
| Playful | A full color (yellow, coral) | Black | White plus a second strong color |
| Luxury | Black or ivory | Ivory or black | A muted metal (dull gold), used sparingly |

**A palette that looks good and fails operationally**: five beautiful pastel brand colors that all sit at similar
lightness. In charts, they are indistinguishable in grayscale and for people with color vision deficiencies; as
backgrounds, white text fails contrast on all of them; as states, none stands out as an error. Character must survive
function.

## 7. Dark mode

- **Not an inversion**: backgrounds in very dark gray (pure black is usually avoided because white text halates on it,
  though OLED-focused products sometimes choose it), raised surfaces slightly lighter (light rises with elevation),
  text in off-white (around 90 % lightness) rather than pure white.
- **Lower the saturation** of accents and semantic colors; saturated colors vibrate on dark backgrounds.
- **Redo shadows**: they barely show on dark; use subtle borders or lighter surfaces.
- **Check contrast again**: secondary gray text often fails in dark mode.
- **Respect the system preference and let people change it** ([preferences](patterns/preferences.md)).
- **Images and illustrations**: some need dark variants (logos with dark text, diagrams with white backgrounds).

## 8. Contrast preferences and forced colors

- **`prefers-contrast: more`**: offer a higher-contrast mapping of tokens (darker text, stronger borders) for people who
  ask for it.
- **Forced colors** (Windows High Contrast): the system replaces colors. Do not convey state with background colors
  alone; use borders, icons and text that survive the replacement. Check focus indicators in forced colors mode.

## 9. Color in data

- **Categorical**: about 6–8 distinguishable colors with different lightness, so they also work in grayscale. More
  categories need another encoding (labels, patterns, small multiples).
- **Sequential**: one hue from light to dark, for ordered values.
- **Diverging**: two hues with a neutral middle, for values above and below a meaningful center.
- **Direct labels** on series instead of distant legends.
- **Multi-series charts**: check that adjacent series remain distinguishable in grayscale and with color vision
  deficiency simulators; add markers or dash patterns when lines cross.
- **Do not reuse semantic colors** for categories: a red series reads as "bad".

See [data visualization](25-data-visualization.md).

## 10. Color meaning across cultures

Associations exist but depend on culture and context; they are not rules.

- Red can mean urgency, error, danger, energy, or luck and celebration in some cultures. In some East Asian financial
  contexts, red indicates rising prices and green falling ones — the opposite of common Western conventions.
- Green: success, money, nature, and religious meaning in some regions.
- Blue: calm and trust — which is why it is everywhere and does not differentiate.
- White: purity in some cultures, mourning in others.

What matters most is not the "meaning" but **consistency**: the same color always means the same thing within the
product, reinforced with icons and text. For products serving markets with opposite conventions (finance in
particular), let people choose or follow local conventions per market.

## Worked comparison

**Same component:** a list of invoices with selection, keyboard focus and overdue errors, in a product whose brand
color is red.

**Weak color design.** Brand red is the accent: selected rows are red-tinted, the focus ring is red, overdue invoices
are red text. A selected overdue invoice with focus is three shades of red. Keyboard users cannot tell focus from
selection; people with protanopia cannot distinguish overdue from normal.

**Strong color design.** The product accent is a deep neutral blue-gray derived from the brand palette; brand red
appears in the logo and marketing. Selection uses a subtle fill with a bar at the start edge; focus uses a ring with
3:1 contrast against both the row and the page; overdue uses an icon, the word "Overdue" and a distinct error red.
Verified with `contrast.mjs` in light and dark, and with a protanopia simulator.

## Common mistakes

- **Choosing palettes from swatches** instead of testing roles in real screens.
- **One color for several meanings** (accent for focus, selection and links).
- **Ignoring the brand-error collision.**
- **Dark mode as an inversion.**
- **Pastel palettes with no lightness contrast.**
- **Color-only states and chart series.**
- **Assuming universal color meanings.**

## Checklist

- [ ] Scales are built in OKLCH, checked in sRGB, and corrected by eye.
- [ ] Components use role tokens; themes remap them.
- [ ] Contrast passes for text, borders, icons and focus in every theme.
- [ ] State combinations (hover, selected, focused, error, disabled) are designed and distinguishable.
- [ ] Brand color and functional colors do not collide.
- [ ] Nothing relies on color alone; color vision deficiency simulation was checked.
- [ ] Dark mode is designed, not inverted; contrast preferences and forced colors are handled.
- [ ] Data palettes are distinguishable in grayscale, with direct labels.
- [ ] Color meanings are consistent within the product and appropriate for each market.
