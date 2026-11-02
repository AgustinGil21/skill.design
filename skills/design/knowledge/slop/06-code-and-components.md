# Slop catalog: code and components

What generated front-end code looks like, and why it produces generic interfaces. Read with the
[catalog rules](README.md): every item is banned by default, and keeping one needs a stated reason tied to evidence. The
project's existing conventions come first.

Background: [components, tokens and code quality](../35-components-tokens-and-code-quality.md) ·
[design systems](../design-system/README.md) · [accessibility](../02-accessibility.md).

## Values and tokens

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Raw hex and arbitrary values in components (`bg-[#7a0f1e]`, `rounded-[13px]`, `mt-[37px]`) | Values nobody can maintain; inconsistency grows | Semantic tokens (`--color-action`, `--radius-control`) or theme keys |
| Tailwind palette names as the design (`bg-indigo-600`, `text-slate-500`) used directly across components | The palette of the framework, not of the product | Map the framework's palette to semantic names once, then use the semantic names |
| shadcn/ui installed with its defaults untouched (neutral base, default radius, default ring) | The single most common generated look | Adjust the theme variables to the brand before building screens |
| Spacing values that vary randomly (`p-3`, `p-5`, `p-7` side by side) | No rhythm | A spacing scale applied by relationship |
| Durations and easings written inline (`transition: all 0.3s ease`) | Motion with no system | Duration and easing tokens |
| `transition: all` | Animates properties nobody intended, costs performance | Transition the specific properties |
| z-index values like `9999` | Stacking wars | A z-index scale by layer |
| Breakpoints chosen per component | Inconsistent layouts | Breakpoint tokens shared by the system |

## Component structure

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| One 500-line component per page that fetches, formats and renders everything | Impossible to reuse or test; every page diverges | Small components with one responsibility composed into screens |
| Duplicated card markup copied five times with tiny differences | Variants without a component | One component with variants and props |
| Div soup: clickable `div`s, no `button`, no `nav`, no headings | Breaks keyboard and screen readers | Semantic elements first; ARIA only where HTML has no element |
| `onClick` on non-interactive elements without keyboard support | Inaccessible | Buttons and links |
| Every heading as a `div` with bold classes | No document outline | Real heading levels in order |
| Icons as buttons with no accessible name | Invisible to screen readers | `aria-label` or visible text |
| `outline: none` / `focus:outline-none` without a replacement | No visible focus | A visible focus style from the system |
| Images without dimensions | Layout shift | Width and height or aspect ratio |
| `alt="image"` or file names as alt text | Useless | Describe the content or mark decorative images as such |

## Copy and data in code

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Hard-coded strings in components | Blocks translation | Strings in locale files from the start |
| Mock data with "John Doe", "Acme", "Lorem ipsum", "$1,234.56" | Hides real-content problems | Realistic content from the domain, varied lengths and locales, marked as sample |
| Dates and numbers formatted by hand (`${month}/${day}`) | Wrong for most locales | The platform's locale formatting (`Intl` on the web) |
| Currency symbols concatenated | Wrong placement and spacing per locale | Locale-aware currency formatting |
| Only the success branch implemented | States missing | Loading, empty, error and partial states in the component API |

## Styling patterns

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| `bg-gradient-to-r from-purple-500 to-blue-500` / `bg-clip-text text-transparent` | Generated signature | Brand tokens; solid text |
| `backdrop-blur` on cards and panels everywhere | Glass decoration with performance cost | Opaque surfaces; blur only for system-like overlays |
| `shadow-xl` / `shadow-2xl` on static content | Fake depth | Elevation tokens with a reason |
| `animate-bounce`, `animate-pulse`, `animate-ping` as decoration | Attention loops | Pulse only for loading placeholders; no bounce or ping |
| `hover:scale-105` on every card | Template hover | A state change from the system |
| Icon libraries imported in full or several libraries mixed | Bundle weight and visual inconsistency | One family, imported per icon |
| Emoji in JSX as icons | Inconsistent rendering, no semantics | The icon family, with labels |
| Inline SVG icons written by hand | Wrong proportions | The project's icon family |
| Dark mode via `dark:` classes sprinkled with different values each time | Inconsistent themes | Theme tokens that switch together |
| Fonts loaded from several sources with fallbacks that shift layout | Layout shift, inconsistency | One font strategy with matched fallbacks |
