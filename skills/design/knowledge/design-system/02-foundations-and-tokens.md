# Foundations and tokens

Foundations are the decisions every component inherits: color, type, space, size, shape, depth, motion, layout,
iconography. Tokens are those decisions written down with names, in one place, so design tools and code read the
same values. A system with good components and weak foundations looks inconsistent anyway; a system with good
foundations makes even improvised screens look like they belong.

Choosing the values themselves is covered in [09-typography](../09-typography.md), [10-color](../10-color.md) and
[17-composition-and-layout](../17-composition-and-layout.md). This file covers how those choices become a token
architecture: which categories, how many values, how they are named, layered and switched between themes.

## What it is and why it matters

A token is a named design decision: `color.text.muted`, `space.4`, `radius.control`, `duration.quick`. It matters
because:

- **A name carries intent.** `color.text.muted` says where to use it; `#6b6b6b` only says what it looks like.
- **One change propagates.** Changing a semantic token re-themes every component that uses it.
- **Constraints speed decisions.** A spacing scale of eight values ends the debate between 14 and 15 pixels.
- **Themes become mappings.** Light, dark, high contrast, compact and each brand are different values behind the same
  names.
- **Tools can check it.** Raw values in components are detectable; a token system makes "off-system" visible
  (`scripts/system-check.mjs`).

## 1. The categories

Not every product needs every category; every product needs the first five.

| Category | Typical tokens | Decide with | Notes |
| --- | --- | --- | --- |
| **Color** | Primitives (ramps), roles (text, surface, border, action, focus, status), states | [10-color](../10-color.md) | Roles, not hues, are what components use |
| **Typography** | Families, weights, a size scale, line heights, letter spacing, composite text styles | [09-typography](../09-typography.md) | Composite styles (`text.body`, `text.heading.2`) keep size, line height and weight together |
| **Space** | A spacing scale; layout gaps; insets | [17-composition-and-layout](../17-composition-and-layout.md) | Derived from one base unit |
| **Size** | Control heights, icon sizes, touch targets, container widths | [02-accessibility](../02-accessibility.md) | Touch targets have a floor (2.5.8 Target Size (Minimum), AA, 24 by 24 CSS px) |
| **Shape** | Radii by role (control, card, dialog, pill), border widths | — | Radii by role let the whole product change character from one place |
| **Motion** | Durations, easings, distances | [landing/06-motion](../landing/06-motion.md) | Few durations; decelerating easings for entering, accelerating for leaving |
| **Depth** | Shadows or elevation levels, z-index layers, overlay opacity | — | A z-index scale by layer name (`dropdown`, `sticky`, `dialog`, `toast`) ends stacking wars |
| **Layout** | Breakpoints, columns, gutters, margins, max widths | [17-composition-and-layout](../17-composition-and-layout.md) | Breakpoints come from content, not devices |
| **Opacity and states** | Disabled, dimmed, scrim, hover and pressed overlays | [10-color](../10-color.md) | Per theme: a dim that reads in light may vanish in dark |
| **Focus** | Focus ring color, width, offset | [02-accessibility](../02-accessibility.md) | Its own token so it survives every theme (2.4.7, 2.4.11) |
| **Iconography** | Icon sizes, stroke width, the family | [19-imagery-icons-and-illustration](../19-imagery-icons-and-illustration.md) | One maintained family; sizes tied to type sizes |

## 2. How many values, and how to derive them

A scale is a decision about **steps**, not about values. Too few steps and designers reach for raw values; too many
and nobody can tell two steps apart.

### Space

- **Pick a base unit** and multiply. Four and eight pixels are the most common bases on screens because they divide
  common screen sizes and icon grids evenly; a 4-based scale gives half steps for dense interfaces, an 8-based one
  forces calmer rhythm. Neither is required: what matters is that every spacing value comes from the scale.
- **Around eight to thirteen steps** cover most products: small steps close together for inside components (2, 4, 8,
  12, 16), large steps far apart for between sections (24, 32, 48, 64, 96). Equal intervals at the large end waste
  steps nobody can distinguish.
- **Name steps neutrally** (`space.1` to `space.12`, or `space.xs` to `space.3xl`) and add semantic layout tokens on
  top only where the role is stable (`space.section`, `space.inset.card`).

### Type

- **A scale of six to eight sizes** covers most interfaces: one or two for small print and labels, one or two for body
  text, the rest for headings and display. More sizes than that are usually indecision.
- **Derive with a ratio for display sizes, adjust by hand for small sizes.** A modular ratio (1.2, 1.25, 1.333) gives
  coherent headings; at caption and label sizes, legibility matters more than the ratio, so round to whole pixels.
- **Fluid sizes** (`clamp()`) for display text on the web reduce breakpoint steps; body text stays fixed or nearly so,
  and must still resize with the person's settings (1.4.4 Resize Text, AA).
- **Composite text styles** bundle family, size, line height, weight and tracking. Components use the composite
  (`text.label`), never the parts.
- **Two families at most**, contrast from weights and sizes (`SKILL.md`, rule 10).
- Family roles, the weight map, italics and how each text style is specified and documented:
  [08-typography-in-the-system](08-typography-in-the-system.md).

### Color

- **Primitives as ramps** of perceptually even steps (OKLCH makes even steps easier to reason about), usually 10 to 12
  steps per hue: one neutral ramp (tinted toward the brand rather than pure gray), the brand hue, an accent if the
  brand has one, and the status hues.
- **Roles on top**: `text.default`, `text.muted`, `text.on-action`, `surface.page`, `surface.raised`,
  `border.subtle`, `border.strong`, `action.primary`, `action.primary.hover`, `focus.ring`, `status.danger.text`,
  `status.danger.surface`, and so on. A role exists when a component needs it, not because the ramp has a step.
- **Pairs, not singles, for status**: each status needs a surface, a border, a text and an icon color that pass
  contrast together (1.4.3 Contrast (Minimum) and 1.4.11 Non-text Contrast, AA), and meaning never by color alone
  (1.4.1 Use of Color, A).
- **Avoid pure black and pure white** for large areas unless the brand demands it: slightly tinted neutrals reduce
  glare and feel intentional. This is a recommendation, not a rule — some brands are built on pure black.

### Motion

- **Three to five durations** (for example instant, quick, standard, slow) and **two or three easings** (enter, exit,
  move). Durations scale with distance and size; a dialog moves more than a checkbox.
- A **reduced** mapping for `prefers-reduced-motion`: durations near zero for movement, opacity kept where it carries
  meaning.

## 3. Tiers: primitive, semantic, component

| Tier | Also called | Named after | Example | Used by |
| --- | --- | --- | --- | --- |
| **Primitive** | Global, core, reference, base | What the value is | `color.green.600`, `space.4`, `duration.200` | Only by semantic tokens |
| **Semantic** | Alias, system, decision, role | What the value is for | `color.action.primary`, `color.text.muted`, `radius.control` | Components and layouts |
| **Component** | Scoped | One component's part and state | `button.primary.background.hover` | That component only |

Material Design 3, for example, publishes three classes named reference, system and component tokens; many public
systems use two tiers and add component tokens sparingly.

How to decide the tiers:

- **Always primitives and semantics.** Semantics are what make themes, dark mode and rebrands possible: a semantic
  name should survive a rebrand unchanged.
- **Component tokens only where a component needs its own dial** — usually because themes or brands change that
  component differently from the semantic role (a white-label button whose shape differs by client). A component
  token per property of every component duplicates the semantic layer and doubles the maintenance.
- **Components never reference primitives directly.** That is the rule that keeps themes working.
- **Do not skip ahead to component tokens** before the scales are stable: it locks names in early and multiplies the
  cost of every later correction.

## 4. Naming

A token name is an API: other people and tools will type it for years.

- **Structure from general to specific**: category → role → variant → state. `color.action.primary.hover`,
  `color.status.danger.surface`, `space.inset.card`.
- **Names by function, never appearance** for semantics: `color.action.danger`, not `color.red`. Primitives are the
  only place appearance names belong.
- **One vocabulary**, written down: `surface` or `background`, not both; `muted` or `subtle` or `secondary`, one
  meaning each.
- **States as suffixes** from a closed list: `hover`, `pressed`, `focus`, `selected`, `disabled`.
- **Same names in design and code.** If the design tool says `text/muted` and the code says `--color-text-muted`, the
  mapping must be mechanical, never interpreted.
- **Test the name**: can someone choose the right token from its name alone, without seeing its value? If two names
  could both fit a case, one of them is wrong or the guidance is missing.

## 5. Modes and themes

A mode is a set of values behind the same semantic names.

| Mode family | Examples | What changes | Test |
| --- | --- | --- | --- |
| **Color scheme** | Light, dark, high contrast | Semantic color mappings | Every role pair passes contrast in every scheme |
| **Density** | Comfortable, compact | Space and size tokens of controls and rows | Real content in tables and forms; touch targets stay above the floor |
| **Brand** | Each client or sub-brand | Primitives, some semantic mappings, maybe component tokens | Every component in every brand, with long content |
| **Platform** | Web, iOS, Android | Type families, sizes, some motion | Native conventions respected (`knowledge/36-platforms-and-input.md`) |

Rules that keep modes manageable:

- **Modes switch semantics, not components.** A component that checks `if (dark)` is a missing token.
- **Every mode is complete.** A token defined in light and missing in dark falls back silently to something wrong.
- **Dark is not inverted light.** Surfaces get lighter as they rise, saturation drops, status colors are re-tuned,
  dimmed content needs different opacity ([10-color](../10-color.md)).
- **Respect the person's setting first** (`prefers-color-scheme`), and let them override it.
- **Combinations multiply**: two schemes × two densities × three brands is twelve combinations to test. Keep mode
  families few and independent.

## 6. Where tokens live: format and files

For levels 1 and 2 ([01-deciding-scope](01-deciding-scope.md)), tokens can live directly in the format the code
reads: CSS custom properties, the framework's theme configuration, a native theme file. That is enough and easy to
maintain by one team.

When several platforms, products or design tools must read the same decisions, keep them in a neutral source and
build each platform's format from it ([05-tooling-design-to-code](05-tooling-design-to-code.md)). The Design Tokens
Community Group published the first stable version of its format, 2025.10, in October 2025 (a Community Group
report, not a W3C Standard). In it:

- A token is an object with a required `$value` and optional `$type`, `$description`, `$extensions` and
  `$deprecated`; groups can set `$type` and `$description` for their children and inherit from another group with
  `$extends`.
- References use curly braces with the token path (`"{color.green.600}"`), and JSON Pointer (`$ref`) is also defined.
- Types include `color`, `dimension`, `fontFamily`, `fontWeight`, `duration`, `cubicBezier` and `number`, and composite
  types `strokeStyle`, `border`, `transition`, `shadow`, `gradient` and `typography`.
- Files use the `.tokens` or `.tokens.json` extension. Separate Color and Resolver modules cover color spaces
  (including OKLCH and Display P3) and how themes and sets are resolved.

A small example of primitives and semantics in that shape (check the current specification before relying on exact
value shapes):

```json
{
  "color": {
    "$type": "color",
    "green": {
      "600": { "$value": { "colorSpace": "oklch", "components": [0.52, 0.13, 152] } }
    },
    "action": {
      "primary": {
        "$value": "{color.green.600}",
        "$description": "Fill of the one main action in a view."
      }
    }
  },
  "space": {
    "$type": "dimension",
    "4": { "$value": { "value": 16, "unit": "px" } }
  }
}
```

Whatever the format: one source, descriptions on semantic tokens (they are the documentation people read in their
editor), and deprecations marked in the source rather than deleted.

## 7. Conflicts and trade-offs

| Tension | Resolve by |
| --- | --- |
| A designer needs a value between two steps | First check whether the next step works; if the need repeats in several places, add a step to the scale for everyone; if it is one place, it is probably the layout, not the scale |
| The brand color fails contrast as text | Keep it for fills, large elements and brand moments; derive a darker (or lighter in dark mode) role for text and small icons ([10-color](../10-color.md)) |
| Product teams want more colors | Ask for the role they are missing; most requests are a missing semantic role, not a missing hue |
| Engineers want fewer tokens, designers more control | Fewer semantic tokens with clear names; primitives can be as many as the ramps need, because only semantics are used |
| Theme parity costs time | Ship fewer modes complete rather than more modes half done |

## 8. Method for a new product

1. List the foundations the product needs from its screens and platform (section 1).
2. Choose the values with the foundation files: type pairing and scale, palette and roles, base unit, motion.
3. Write primitives first, then the semantic roles that components will need; leave component tokens out until a
   component asks for one.
4. Define every mode the product ships (light and dark at least, if the platform has both), complete.
5. Check every text and non-text role pair for contrast in every mode (`scripts/contrast.mjs`).
6. Render a foundations page — swatches with role names and contrast, the type scale with real text, the spacing
   scale, radii, shadows, motion samples — and look at it in each mode ([04-documentation](04-documentation.md)).
7. Use only semantic tokens from the first component on, and run `scripts/system-check.mjs` to find raw values.

## Worked comparison

**Generic.** Tokens named `blue`, `lightBlue`, `gray1` to `gray9`, `red`; a spacing list of 19 values from 1 to 120
pixels collected from existing screens; type sizes 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 28, 32; dark mode as a
second file where someone inverted the grays. Components use `gray6` for muted text in light and `gray4` in dark
through conditionals. The rebrand from blue to green means renaming `blue` everywhere or living with `blue` being
green.

**Considered.** Primitives as OKLCH ramps (`green.50` to `green.950`, a neutral ramp tinted toward the brand, status
hues). Roles on top (`text.muted`, `action.primary`, `status.danger.surface`), each with a description. A spacing
scale of ten steps on a 4 px base; a type scale of seven sizes with composite styles; four durations and three
easings plus a reduced mapping. Light and dark map the same roles to different primitives; every pair passes
contrast. The rebrand changes the primitive the `action` roles point to; no component changes.

## Common mistakes

- **Tokens that are only renamed hex codes**, with no roles: themes still require editing components.
- **Scales harvested from existing screens** instead of designed: the inconsistency becomes official.
- **Semantic names that describe appearance** (`color.light-gray-text`).
- **A mode missing tokens**, discovered by a person in production.
- **Component tokens for everything**, before the semantic layer is stable.
- **Status colors that pass contrast alone but not as surface plus text.**
- **No descriptions**, so every reader guesses what `color.surface.raised` is for.

## Checklist

- [ ] The first five categories (color, type, space, size, shape) exist; motion, depth, layout, focus and states
      exist when the product uses them.
- [ ] Scales are designed (steps chosen), not harvested from existing values.
- [ ] Tiers: primitives and semantics; component tokens only where justified.
- [ ] Semantic names describe function, follow one vocabulary, and match between design and code.
- [ ] Every mode defines every semantic token; every role pair passes contrast in every mode.
- [ ] Reduced-motion and focus tokens exist.
- [ ] Tokens live in one source with descriptions; deprecations are marked, not deleted.
- [ ] Components use only semantic (or component) tokens; `scripts/system-check.mjs` finds no raw values.
