# Performance

Speed is part of the design: a page that shifts while loading, a button that responds late or a hero that appears
after three seconds is a design failure. This file lists what to decide and check, by what users feel.

## What to measure

Core Web Vitals, measured on real devices and real networks, not only on a developer laptop:

| Metric | What people feel | Common causes when bad |
| --- | --- | --- |
| **LCP** (Largest Contentful Paint) | When the main content appears | Large unoptimized hero images, render-blocking fonts and scripts, client-side rendering of content |
| **INP** (Interaction to Next Paint) | Whether taps and clicks respond quickly | Long JavaScript tasks, heavy re-renders, work on the main thread during input |
| **CLS** (Cumulative Layout Shift) | Whether things jump | Images without dimensions, late fonts, injected banners, skeletons that do not match |

Set budgets (JavaScript per route, image weight, LCP target) and check them in CI for important pages.

## Rendering and JavaScript

- **Send less JavaScript**: static or server rendering for content; islands or client components only where there is
  interaction ([frameworks and stacks](04-frameworks-and-stacks.md)).
- **Split by route** and load heavy, rarely used parts on demand (editors, charts, maps).
- **Avoid unnecessary re-renders**: state close to where it is used, stable keys, the React Compiler in React
  projects, virtualized lists for long collections.
- **Keep the main thread free during input**: break long tasks, move heavy work to workers, debounce expensive
  handlers.
- **Prefetch** the likely next route on intent (hover, viewport) where the framework supports it.

## Images and media

- Modern formats (AVIF, WebP) with responsive `srcset` and `sizes`; dimensions or `aspect-ratio` always set.
- The LCP image loaded eagerly with high priority (`fetchpriority="high"`); everything below the fold lazy.
- Video: posters, no autoplay with sound, compressed sources, streaming formats for long video.
- SVG for icons from the icon family, not icon fonts.

## Fonts

- At most two families, few weights, subset to the scripts the product uses, self-hosted in WOFF2.
- `font-display: swap` or `optional` with metric-matched fallbacks (`size-adjust`) to avoid layout shift.
- Preload only the font used above the fold.

## CSS and motion

- Animate `transform` and `opacity`; avoid animating layout properties.
- Remove unused CSS (Tailwind does this by design); avoid huge `backdrop-filter` and blur areas.
- Respect `prefers-reduced-motion`, which also saves work on low-end devices.

## Data

- Cache server data (HTTP caching, a query library's cache) and avoid request waterfalls: load in parallel, at the
  route level.
- Paginate or virtualize large lists; show partial results.
- Optimistic updates for fast, reversible actions.

## Checking it

- Lighthouse or the browser's performance panel for lab checks; real-user monitoring for field data.
- Test on a mid-range phone with network throttling.
- Bundle analysis for each route after adding dependencies.

## Checklist

- [ ] LCP, INP and CLS checked on a phone profile; budgets set for key pages.
- [ ] JavaScript only where interaction needs it; heavy parts loaded on demand.
- [ ] Images sized, modern formats, LCP image prioritized, the rest lazy.
- [ ] Fonts subset, few weights, fallbacks matched.
- [ ] Animations on transform and opacity, with reduced motion respected.
- [ ] No request waterfalls; long lists virtualized or paginated.
