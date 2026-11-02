# Styling and Tailwind

How to style with a system instead of with numbers. Generated code is full of `h-[250px]`, `text-[#1a1a2e]`,
`rounded-[13px]` and `mt-[37px]`: values nobody chose, that drift apart and cannot be themed. A professional uses the
design system's tokens, and when the framework already has the value, uses the framework's scale.

Read Tailwind's documentation for the version in the project before writing classes: Tailwind v4 moved configuration
into CSS (`@theme`) and changed how scales work, so v3 habits produce wrong code.

## The rule

1. **Semantic tokens first**: `bg-surface`, `text-muted`, `border-subtle`, `rounded-control`, `shadow-raised`,
   `duration-feedback`, `ease-standard` — defined once in the theme from the design system.
2. **The framework's scale second**: if the value is on the scale, use it. In Tailwind v4 spacing and sizing are
   multiples of `--spacing` (0.25rem, 4px, by default), and the multiplier accepts steps of 0.25: `h-64` is 256px,
   `h-62.5` is 250px, `w-17` is 68px. There is no reason to write `h-[256px]` or `h-[250px]`; `system-check.mjs`
   flags these and names the class to use.
3. **A new token third**: if a value is needed and is not on the scale, it is a decision; add it to the theme with a
   name (`--container-sidebar: 17.5rem` → `w-sidebar`) so it is reused and documented.
4. **Arbitrary values last**, and only for genuinely one-off values tied to something outside the system (an
   embedded third-party widget's fixed size, a value derived from an image's intrinsic ratio), ideally expressed in
   terms of the system (`h-[calc(100dvh-var(--header-height))]`).

| Generated | Better |
| --- | --- |
| `h-[250px]` | `h-62.5` (on the scale); better, a named token (`h-card-media`) if the size is a design decision that repeats |
| `max-w-[1200px]` | `max-w-7xl` (80rem), or a `--container-content` token |
| `text-[#1a1a2e]` | `text-fg` (a semantic token mapped to the palette) |
| `bg-[#7c3aed]` | `bg-action` |
| `rounded-[13px]` | `rounded-control` (token) or `rounded-md`/`rounded-lg` from the scale |
| `text-[15px] leading-[22px]` | A text style from the type scale (`text-body`) |
| `gap-[18px] p-[22px]` | `gap-4 p-5` or spacing tokens; values off the 4px grid usually mean nobody decided |
| `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` | `shadow-raised` (elevation token) |
| `duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)]` | `duration-feedback ease-standard` (motion tokens) |
| `z-[9999]` | `z-overlay` from a layer scale |
| `top-[73px]` (to clear a header) | `top-(--header-height)` or a token |

## Defining tokens in Tailwind v4

```css
@import "tailwindcss";

@theme {
  --color-surface: oklch(0.99 0.004 85);
  --color-fg: oklch(0.22 0.02 85);
  --color-muted: oklch(0.48 0.015 85);
  --color-action: oklch(0.52 0.16 25);

  --radius-control: 0.5rem;
  --shadow-raised: 0 1px 2px oklch(0 0 0 / 0.06), 0 4px 12px oklch(0 0 0 / 0.08);

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --duration-feedback: 150ms;

  --container-content: 72rem;
}
```

Each variable in a theme namespace (`--color-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--container-*`,
`--breakpoint-*`, `--font-*`, `--text-*`) generates utilities. For themes (dark mode, brands), map semantic tokens
to primitive values with CSS variables and switch the mapping; components never change.

If the project's library ships its own theme variables (shadcn/ui uses `--background`, `--foreground`, `--primary`
and others), set those from the design system before building screens; never leave the library defaults
([slop: visual](../slop/01-visual.md)).

## Class hygiene

- **Variants, not conditionals scattered in strings**: a variant API (`cva`, `tailwind-variants` or the project's
  equivalent) defines size and tone from tokens; components accept the variant names.
- **Merge classes safely** when components accept `className` (`tailwind-merge` or the project's helper), so
  overrides do not fight.
- **No `@apply` everywhere**: it recreates CSS classes and hides the system; use it sparingly for base styles.
- **No dynamic class names built from strings** (`bg-${color}-500`): the compiler cannot see them; map to full class
  names.
- **Class order** handled by the formatter or linter plugin, not by hand.
- **Long class lists** are a sign a component or variant is missing.

## Without Tailwind

The same rules apply to CSS Modules, vanilla CSS, CSS-in-JS or native styling: custom properties or theme objects for
tokens, no raw values in components, a type scale, a spacing scale, motion tokens. Modern CSS covers much of what
libraries used to: custom properties, `clamp()` for fluid type, container queries for component-level responsiveness,
`:has()`, cascade layers for ordering, native nesting, `color-mix()` and relative colors for tints.

## Checklist

- [ ] Tokens from the design system exist in the theme before components are styled.
- [ ] No arbitrary value where a token or the framework's scale has the value.
- [ ] New values were added as named tokens, not repeated as literals.
- [ ] Library theme variables set from the system.
- [ ] Variants instead of string conditionals; no dynamic class name construction.
- [ ] The Tailwind version's documentation was checked (v3 and v4 differ).
