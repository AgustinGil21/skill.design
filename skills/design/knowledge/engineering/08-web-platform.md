# The modern web platform

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: browser support for platform features.

Many things that needed a library a few years ago are now built into browsers: dialogs, popovers, positioning
tooltips, animating between views, responsive components, text wrapping. Using the platform means less JavaScript,
better accessibility by default and fewer dependencies. Support changes every few months; check current support (MDN's
Baseline status, caniuse) for the browsers the product supports, and use progressive enhancement where support is
missing.

## What to reach for first

| Need | Platform feature | Notes |
| --- | --- | --- |
| Modal dialog | `<dialog>` with `showModal()` | Focus moves in, `Esc` closes, the rest of the page becomes inert, top layer; style `::backdrop`. Return focus to the trigger on close |
| Non-modal popovers, menus, toggletips | `popover` attribute and `popovertarget` | Light dismiss, top layer, no z-index wars; add the right roles and keyboard behavior for menus |
| Positioning a popover next to its trigger | CSS anchor positioning (`anchor-name`, `position-anchor`, `position-area`, `position-try`) | Baseline in 2026; keep a fallback position for older browsers; fallbacks with `position-try-fallbacks` |
| Making content non-interactive | `inert` | For off-canvas panels and content behind custom overlays |
| Accordions | `<details>`/`<summary>`, `name` for exclusive groups | Native keyboard and semantics; animate with `interpolate-size` or `::details-content` where supported |
| Animating to `height: auto` | `interpolate-size: allow-keywords`, `calc-size()` | Not supported everywhere yet; content must work without the animation |
| Transitions between states and pages | View Transitions API (same-document; cross-document with `@view-transition`) | Respect reduced motion; keep them short; name elements that should morph |
| Scroll-linked animation | Scroll-driven animations (`animation-timeline: scroll()` / `view()`) | No JavaScript on scroll; provide a static state |
| Entry animations from `display: none` | `@starting-style` and `transition-behavior: allow-discrete` | Popovers and dialogs that fade in and out |
| Components that adapt to their container | Container queries (`container-type`, `@container`) and container units | Design-system components respond to the space they are given, not the viewport |
| Parent and state selectors | `:has()`, `:focus-visible`, `:user-invalid` | Validation styles after interaction with `:user-invalid` |
| Style organization | Cascade layers (`@layer`), native nesting, `@scope` | Layers order resets, tokens, components and utilities predictably |
| Color | `oklch()`, `color-mix()`, relative color syntax, `light-dark()` | Tokens and tints from one source; theme pairs in one declaration |
| Typography | `text-wrap: balance` and `pretty`, `font-variant-numeric`, `hanging-punctuation` | `pretty` and `hanging-punctuation` are not supported everywhere: progressive enhancement |
| Viewport units on mobile | `dvh`, `svh`, `lvh` | Instead of `100vh` |
| Form controls | `accent-color`, `field-sizing: content`, native validation with custom messages | `field-sizing` for auto-growing text areas where supported |
| Lazy content | `loading="lazy"`, `content-visibility: auto` | `contain-intrinsic-size` to avoid jumps |
| Images | `<picture>`, `srcset`/`sizes`, AVIF/WebP, `fetchpriority` | See [performance](07-performance.md) |

## How to use the platform well

- **Semantics before behavior.** The right element (`button`, `dialog`, `details`, `nav`, `form`) gets keyboard,
  focus and screen-reader behavior for free.
- **Progressive enhancement.** Build the baseline that works everywhere, then enhance with `@supports` or feature
  detection. The page must be usable when an enhancement is missing.
- **Accessibility is not automatic for every feature.** `popover` gives light dismiss and top layer, not menu roles or
  arrow-key navigation; a tooltip still needs to follow the tooltip pattern (WAI-ARIA Authoring Practices).
- **Prefer CSS to JavaScript for presentation** (positioning, animation, responsive behavior); JavaScript for state.
- **Know the framework's interaction** with these features: server rendering, hydration and router transitions can
  conflict with View Transitions or dialogs; read the framework's docs.

## When a library is still the right choice

- Complex widgets with demanding keyboard and screen-reader behavior (combobox with async results, date pickers, data
  grids, rich text): a headless, well-tested library is safer than rebuilding the pattern.
- Supporting browsers where the platform feature is missing and the fallback is not acceptable.
- Cross-platform code (React Native) where web APIs do not exist.

## Worked comparison

**Situation:** a settings page needs a confirmation dialog and a help tooltip.

**Weak.** A modal library and a positioning library are added; the modal is a `div` with a z-index of 9999 that does not
trap focus or close with `Esc`; the tooltip appears on hover only and is cut off near the viewport edge.

**Strong.** `<dialog>` with `showModal()` (focus moves in, `Esc` closes, the page behind is inert, focus returns to the
trigger); the help is a toggletip built with `popover` and anchor positioning with a fallback position, opening on
click and focus, announced by its button. No new dependency.

## Checklist

- [ ] Native elements and APIs considered before adding a library.
- [ ] Support checked for the product's browsers; fallbacks in place.
- [ ] Dialogs and popovers manage focus and roles correctly.
- [ ] Animations respect reduced motion and have a static state.
- [ ] Components use container queries when their layout depends on their space.
