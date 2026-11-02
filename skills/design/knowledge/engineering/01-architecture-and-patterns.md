# Architecture and patterns

How to organize front-end code so it stays easy to change: folder structure, component layers, state, data fetching
and the patterns that combine them. There is no single right architecture; there are better choices for each size of
product, team and data. This file gives the options, when each one fits and what it costs.

## Questions to ask before deciding

- **How big will it get?** A landing page, a ten-screen app, or a product with many teams?
- **How many people work on it**, and do teams own features or layers?
- **Where does the data live?** Mostly server data (APIs, databases), local UI state, or real-time collaboration?
- **How is it rendered?** Static, server-rendered, client-only, or mixed per route?
- **How long will it live?** A prototype, a campaign, a product for years?
- **What does the codebase already do?** Follow it unless there is a strong reason to change, and propose that
  change separately.

## Folder and module structure

| Option | Fits | Costs |
| --- | --- | --- |
| **By type** (`components/`, `hooks/`, `utils/`, `pages/`) | Small apps, sites, prototypes | Features scatter across folders as the app grows |
| **By feature** (`features/billing/{components,hooks,api,tests}`) with a shared `ui/` | Most products with several areas | Needs rules for what is shared vs. feature-owned |
| **Feature-Sliced Design** (layers: app, pages, widgets, features, entities, shared, with import rules) | Large apps, several teams, long life | Learning curve and ceremony for small projects |
| **Monorepo with packages** (`packages/ui`, `packages/tokens`, `apps/web`, `apps/docs`) | A design system shared by several apps | Tooling (workspaces, builds, versioning) |

Rules that hold in all of them:

- **Dependencies point one way**: screens depend on features, features on shared UI and domain code, never the
  reverse. A shared `Button` never imports from `features/billing`.
- **Colocate**: a component's styles, tests, stories and small helpers live next to it.
- **Public surfaces**: a feature exposes an `index` with what others may use; internals stay internal.
- **Routes are thin**: a route file loads data and composes feature components; it does not hold business logic.

## Component layers

The design-system layers from [components and tokens](../35-components-tokens-and-code-quality.md), in code:

| Layer | Responsibility | Knows about data? |
| --- | --- | --- |
| Tokens | Values (color, space, type, radius, motion) | No |
| Primitives | One element, accessible, styled by tokens (`Button`, `Input`, `Badge`) | No |
| Components | Meaningful units from primitives (`PriceTag`, `UserChip`) | Through props only |
| Patterns and sections | Compositions for a job (`InvoiceTable`, `PlanCard`) | Through props, sometimes a hook |
| Features | Business behavior: data, mutations, permissions | Yes |
| Screens and routes | Composition and data loading | Yes |

"Atomic design" names (atoms, molecules, organisms) are one vocabulary for the same idea; use the project's names. The
point is the direction of composition and that lower layers never know about business data.

## Patterns and when to use them

| Pattern | Use when | Avoid when |
| --- | --- | --- |
| **Presentational + container** (or component + hook) | Separating data and behavior from markup so markup is reusable and testable | Tiny components where the split adds files and nothing else |
| **Custom hooks / composables** | Reusing stateful logic (a form field, a media query, a subscription) | Wrapping a single library call with no added logic |
| **Compound components** (`<Tabs><Tabs.List/><Tabs.Panel/></Tabs>`) | Components with related parts the consumer arranges | Simple components with two props |
| **Slots / children / render props** | Letting the consumer supply content while the component owns layout and behavior | Configuring with ten boolean props instead |
| **Variants** (a variant API such as `cva` or the framework's equivalent) | Visual variations of one component (size, tone, emphasis) from tokens | Variations that are really different components |
| **Headless components** (logic and accessibility without styles, from a library or your own) | Complex widgets (combobox, dialog, menu) styled with your tokens | Reimplementing accessibility the library already solved |
| **Controlled and uncontrolled** | Offering both lets simple uses stay simple and complex ones take control | Forcing control for every use |
| **Provider / context** | Cross-cutting values (theme, locale, current user) | Frequently changing values read by many components (re-renders); use a store |
| **State machines** (explicit states and transitions) | Flows with many states: checkout, upload, wizards, players | Two-state toggles |
| **Optimistic updates** | Fast, reversible actions (like, reorder) with a clear rollback | Money, deletions, anything that must be confirmed by the server |
| **Islands / partial hydration** | Mostly static pages with a few interactive parts | Highly interactive apps where most of the page is dynamic |

**Composition over configuration.** A component with `showHeader`, `showFooter`, `compact`, `withIcon`, `iconLeft`,
`iconRight` and `variant` is many components forced into one. Prefer composable parts and a small variant set.

Combine patterns when the problem needs it: a checkout can be a state machine (flow) rendered by presentational
components (steps), fed by a data hook (server state), with optimistic updates only for the coupon field.

## State: put each kind where it belongs

| Kind of state | Where | Examples |
| --- | --- | --- |
| **Server state** (data owned by the backend) | A server-state library (TanStack Query, SWR, Apollo, the framework's loaders) or server components | Lists, records, user profile |
| **URL state** | The URL (path, search params) | Filters, sort, selected tab, pagination: shareable and survives reload |
| **Form state** | A form library or native form handling, validated with a schema | Inputs, errors, dirty state |
| **Local UI state** | The component | Open/closed, hover, a draft value |
| **Global client state** | A small store (Zustand, Jotai, Pinia, Svelte stores, signals) | Cross-screen UI state, preferences not in the URL |
| **Persistent client state** | Storage with a schema and a migration path | Offline drafts, settings |

Common mistakes: copying server data into a global store (two sources of truth), keeping filters out of the URL,
global stores for state that one component owns, and context for values that change on every keystroke.

## Data fetching and rendering

- **Fetch where the framework expects it**: route loaders, server components or a query library, not ad-hoc
  `useEffect` fetches with manual loading flags.
- **Every request has states**: loading, empty, error, partial, stale — designed, not defaulted
  ([states](../23-states-transitions-and-concurrency.md)).
- **Validate at the boundary**: parse API responses and form inputs with a schema (Zod, Valibot, ArkType or the
  stack's equivalent); the rest of the code trusts typed data.
- **Choose rendering per route**: static for content, server-rendered for personalized or SEO pages, client for app
  screens behind sign-in ([frameworks and stacks](04-frameworks-and-stacks.md)).

## TypeScript

- `strict` on; no `any` in shared code; `unknown` plus parsing at boundaries.
- Types describe the domain (`InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue'`), so impossible states cannot
  be represented.
- Component props typed explicitly; variants as unions from the variant definition.

## Worked comparison

**Weak.** `BillingPage.tsx`, 640 lines: fetches with `useEffect`, holds filters in `useState`, formats money with
template strings, renders the table, the plan card and the empty state inline, and duplicates the status badge
markup three times.

**Strong.** `routes/billing.tsx` loads data and composes `PlanSummary`, `UsageMeter` and `InvoiceTable` from
`features/billing`. Filters live in the URL. `useInvoices(filters)` wraps the query. `InvoiceTable` composes
`InvoiceRow` and the shared `StatusBadge` and `EmptyState`. Money goes through `PriceTag`, which uses the locale
formatter. Each piece is small enough to test.

## Checklist

- [ ] The structure fits the size and team, and matches the codebase.
- [ ] Dependencies point from screens to features to shared UI, never back.
- [ ] Each kind of state lives where it belongs; filters and tabs in the URL.
- [ ] Data fetching follows the framework; every request has designed states.
- [ ] Inputs and responses validated at the boundary; TypeScript strict.
- [ ] Patterns chosen for the problem, combined when needed, with the reason stated.
