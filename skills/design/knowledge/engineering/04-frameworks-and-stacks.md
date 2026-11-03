# Frameworks and stacks

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: framework versions and maturity.

Choosing the UI library and the meta-framework is a decision with long consequences: hiring, hosting, performance,
what is easy and what is painful for years. **The person makes it.** The skill's job is to ask, recommend with
reasons, and explain what each option costs. In an existing project, the stack is already decided: work within it.

Versions and maturity change quickly. Before recommending, check the current stable versions and release notes; the
notes below describe tendencies as of late 2026, not permanent truths.

## Ask first

When the project does not already decide it, ask (once, with options and a recommendation):

1. **UI library**: React, Preact, Svelte, Vue, Solid, or none (plain HTML and a little JavaScript).
2. **Rendering and framework**: static site, server-rendered app, client-only app, or mixed.
3. **Constraints**: where it will be hosted, the team's experience, SEO needs, offline needs, existing backends.

Give a default ("If you have no preference, I'd use X because…") so the person can answer in one word.

## UI libraries

| Library | Strengths | Costs | Leans toward |
| --- | --- | --- | --- |
| **React** | Largest ecosystem (component libraries, hiring, docs), Server Components in frameworks, React Compiler for automatic memoization | Heavier runtime; many ways to do the same thing; ecosystem churn | Products that need the ecosystem or a team that knows it |
| **Preact** | React-compatible API in a few kilobytes, signals | Some React libraries need the compatibility layer; smaller community | Widgets, embedded UIs, performance-critical pages with React skills |
| **Svelte** (SvelteKit) | Compiler, little runtime, concise components, runes for reactivity | Smaller ecosystem of complex components | Fast sites and apps, small teams |
| **Vue** (Nuxt) | Approachable, single-file components, strong official ecosystem | Smaller React-style library ecosystem in some niches | Teams that value conventions and approachability |
| **Solid** (SolidStart) | Fine-grained reactivity, very fast | Smallest ecosystem | Performance-focused apps by teams comfortable with it |
| **None** (HTML, CSS, a little JS or web components) | No build complexity, fastest pages | Manual work as interactivity grows | Simple sites, documents, forms |

## Meta-frameworks and build setups

| Option | Use when | Avoid when |
| --- | --- | --- |
| **Astro** | Content sites: marketing, docs, blogs, portfolios, landing pages. Static by default, islands for interactive parts, any UI library inside | Highly interactive apps where most of the page is client state |
| **Next.js** (React) | Full-stack React products that need server rendering, Server Components, many routes, and a large ecosystem; teams that know it | Simple static sites; hosting constraints that fight its runtime assumptions; teams that want minimal framework magic |
| **TanStack Start** (React, Solid) | Apps that want type-safe routing, TanStack Query as the data layer, Vite, per-route rendering and portable deployment. Declared stable (1.0) in October 2026 | Teams that need the largest set of examples and integrations today |
| **React Router (framework mode)** | Data-heavy React apps with forms and mutations; the successor of Remix; SSR, prerendering or SPA from one setup | Content sites (Astro fits better) |
| **Vite + a client-side router (SPA)** | Apps behind sign-in with no SEO needs: dashboards, internal tools, admin panels | Public pages that need fast first load and search visibility |
| **SvelteKit / Nuxt / SolidStart** | The full-stack framework of the chosen library | — |

Rules of thumb:

- **Content first → Astro.** Most marketing sites do not need an app framework.
- **App behind sign-in, no SEO → a Vite SPA** (with TanStack Router or React Router) is simpler than a server framework.
- **Public app with SEO and personalized pages → a server-rendering framework** for the chosen library.
- **Mixed products** (marketing site + app): two projects (Astro for the site, an app framework for the product)
  sharing a token package is often simpler than one framework doing both.
- **Native mobile**: React Native (with Expo) for React teams, Flutter, or fully native (SwiftUI, Jetpack Compose) —
  also the person's decision.

## Libraries around the framework (examples, not mandates)

| Need | Common choices | Note |
| --- | --- | --- |
| Accessible primitives | Radix UI, React Aria, Ark UI, Headless UI, Bits UI (Svelte), Reka UI (Vue) | Headless primitives styled with your tokens beat fully styled kits for custom brands |
| Component kits | shadcn/ui (copied into the project), MUI, Mantine, Chakra, Vuetify | Theme them from the design system before use |
| Server state | TanStack Query, SWR, the framework's loaders | Do not copy server data into global stores |
| Forms | React Hook Form, TanStack Form, Superforms, native forms with server actions | Schema validation at the boundary |
| Validation | Zod, Valibot, ArkType | One per project |
| Client state | Zustand, Jotai, Pinia, Svelte stores, signals | Only for state that is truly global |
| Animation | CSS, the Web Animations API, Motion, GSAP, Rive | See [animation techniques](../37-animation-techniques.md) |
| i18n | The framework's i18n, Paraglide, i18next, FormatJS | Locale in the URL on the web |

For each one used, read its current documentation and best practices first ([engineering README](README.md)).

## React specifics worth knowing

- **React Compiler** (1.0, production-ready since October 2025) memoizes automatically. For new code, rely on it and
  use `useMemo`/`useCallback` only where precise control is needed. In existing code, remove manual memoization only
  with tests in place.
- **Rules of React**: components and hooks are pure; hooks at the top level; no side effects during render. The
  official ESLint plugin checks them.
- **You might not need an effect**: derive values during render; handle events in handlers; fetch with the
  framework or a query library.
- **Server Components** (in frameworks that support them): fetch and render on the server; send only interactive
  parts as client components.

## Worked comparison

**Request:** "Build the website and app for our clinic booking product."

**Weak.** Picks Next.js for everything without asking, builds the marketing pages as client components, and adds a
global store for booking data fetched with `useEffect`.

**Strong.** Asks: "Do you have a preference for the UI library? If not, I'd use React for the ecosystem of accessible
components. For the public site I'd recommend Astro (static, fast, good for search); for the booking app behind
sign-in, a Vite SPA with TanStack Router and TanStack Query, sharing a token package. If you'd rather have one
framework, Next.js can do both at the cost of more complexity for the site." Then builds what the person chooses.

## Checklist

- [ ] The person chose the library and framework, or approved a recommendation given with reasons and costs.
- [ ] Current versions and release notes were checked.
- [ ] Rendering strategy chosen per area (site, app).
- [ ] Each library's documentation was read for its rules before writing code.
