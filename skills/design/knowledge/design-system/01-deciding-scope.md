# Deciding scope: whether to build a system, and how much

The first design-system decision is not a color or a component. It is **how much system this product can use and
sustain**. Too little, and every new screen reinvents spacing, buttons and errors until the product looks like five
products. Too much, and a small team maintains a documentation site, a token pipeline and a release process for a
product with six screens — and abandons it within months, which leaves something worse than no system: a system
that lies.

## What it is and why it matters

Scope decides:

- **What becomes a token**: every reusable value, or only color and type.
- **What becomes a component**: everything that repeats, or only what repeats across products.
- **What gets documented, where and for whom**: a comment block, a page inside the app, a public site.
- **Who maintains it**: the same person building the product, a part-time group, a dedicated team.
- **How change happens**: edit and ship, or propose, review, version and announce.

A system is a product whose users are the people building the main product. Like any product, it should be as small
as its users' needs and grow with evidence.

## The five levels

| Level | What exists | Fits | Costs | Signal it is time for the next level |
| --- | --- | --- | --- | --- |
| **0. None** | Values written where they are used | A one-off page, a throwaway prototype, a campaign that dies in a month | Every change is manual and inconsistent | The same value is changed in three places; a second page is coming |
| **1. Foundations** | A token file: color roles, type scale, spacing, radii, motion, breakpoints, in light and dark if the product has both | A landing page, a marketing site, a small app built by one or two people | An afternoon; tokens must be used everywhere to be worth it | The same button or field is built twice with small differences |
| **2. Core kit** | Level 1 plus the components that repeat (button, field, select, checkbox, dialog, toast, card, table…) with their states, built only from tokens | An app or site that will grow; a small team | Days to weeks; components need tests and states | New people join and ask "which button do I use?"; screens drift |
| **3. Documented system** | Level 2 plus guidance and a place to read it: a system page or docs site with usage rules, do and don't, live examples, changelog | Several people or teams; an agency handing over to a client; a product that will live for years | Weeks to months; documentation needs an owner | A second product or platform needs the same decisions; teams fork components |
| **4. Multi-product system** | Level 3 plus packages versioned and consumed by several products or platforms, themes or brands, governance, contribution and adoption metrics | Organizations with several products, platforms (web, iOS, Android) or brands | A team or part of one, ongoing | — |

Two things matter more than the label:

- **Each level includes the previous one.** A documentation site over components that use raw values is decoration.
- **Levels are a budget, not a ladder to climb.** A landing page at level 1 is complete, not immature.

## Questions to ask before deciding

Most can be answered from the project; ask the person only what the evidence cannot settle.

| Question | Why it changes the scope | Where to look first |
| --- | --- | --- |
| Will this grow beyond what is being built now? | A product that grows needs reusable parts from the start | The request, the roadmap, the README, the routes |
| How many people will build on it, now and in a year? | One person can keep decisions in their head; five cannot | Commit authors, the team the person mentions |
| How many products, platforms or brands share the look? | Sharing across products is what justifies packages and versioning | Repositories, apps, white-label signals |
| Is there a brand to express, or one to invent? | Existing brand: derive tokens from it. None: brand work first (`workflows/brand.md`) | Logo files, brand guides, existing site |
| Who will maintain it after this conversation? | No owner means anything beyond level 2 will rot | Ask; it is rarely in the code |
| Does the stack already bring a library? | A good library is most of a level-2 kit; customize through tokens | `package.json`, imports, design files |
| Are there accessibility, legal or sector requirements? | Requirements built into components are inherited by every screen | Sector, audience, contracts |

## How to ask

Ask once, early — before the first value is chosen — with options and a recommendation built from what you found.
Never ask "do you want a design system?" alone: the person cannot weigh it without knowing what each answer
produces. Offer what each level would leave in their project.

A good question names the evidence, the levels that fit, what each produces and a default:

> This is a new product that will grow (the brief mentions member, billing and reporting areas). Before choosing
> colors and type, how much of a design system do you want?
>
> 1. **Full system (recommended)** — tokens for every value (light and dark), the core components with all their
>    states, and a page in the app that documents them with examples. More work now; every later screen is faster
>    and consistent.
> 2. **Foundations and core components** — tokens and the components that repeat, documented in the code only.
> 3. **Foundations only** — a token file; components built per screen.
> 4. **No system** — build the screens directly.
>
> If you'd rather not decide now, I'll go with 2 and leave room to document it later.

Adapt the recommendation to the evidence:

| Evidence | Recommend |
| --- | --- |
| A single landing page or campaign site | Level 1 (foundations); mention level 2 if a product will follow |
| A marketing site that will gain sections, a blog, pricing, docs | Level 2 |
| A new app with several areas or a team | Level 2 or 3 |
| An agency or freelancer delivering to a client team | Level 3: the documentation is part of the handover |
| Several apps, platforms or brands | Level 3 now, plan for 4 |
| A prototype to test an idea | Do not ask; build it plainly and offer to systematize it if it survives |

Write the answer into `DESIGN-CONTEXT.md` (when the person keeps one) so it is not asked again, and say which level
you are building when you report.

## What changes with the answer

| Decision | Level 1 | Level 2 | Level 3 | Level 4 |
| --- | --- | --- | --- | --- |
| Token tiers | Primitives and semantic roles | Same, plus component tokens only where a component needs its own dial | Same, documented | Same, built from a shared source into every platform |
| Token source | A CSS file or the framework's theme | Same | Same, or a token file built into CSS | A token file in a standard format, built per platform |
| Components | Built per screen from tokens | A component folder, one responsibility each, all states | Same, with usage guidance and examples | Packaged, versioned, consumed by products |
| Documentation | Comments in the token file | A short README per component folder | A system page or docs site | A docs site with changelog, status and contribution guide |
| Testing | Contrast checked once | Component tests for states and keyboard | Visual and accessibility checks on every component | Same, in continuous integration for every release |
| Process | Edit and ship | Edit and ship | Changes reviewed against the guidance | Proposals, review, versioning, deprecation |

## Conflicts and trade-offs

- **Speed now vs. speed later.** A system slows the first screens and speeds every later one. When the product's
  future is uncertain, build level 1 and keep components small and token-based so promotion later is cheap.
- **Consistency vs. fit.** A system that forbids every exception pushes teams to build around it. Allow documented
  local exceptions ([03-components-and-patterns](03-components-and-patterns.md)) and promote them only when they
  repeat.
- **Library vs. own components.** An established library gives accessibility and behavior for free and costs
  identity if used with its defaults. Prefer a library customized through tokens over hand-built widgets, and keep
  identity in typography, color, spacing and brand moments ([18-design-systems](../18-design-systems.md)).
- **Documentation vs. maintenance.** Documentation without an owner becomes wrong, and wrong documentation is worse
  than none. Document at the level someone will keep current.

## Worked comparison

**Request:** "Build the landing page and the sign-up for our padel-court booking app. The app itself comes next
month."

**Over-scoped.** The agent builds a docs site with twenty components, a token pipeline with three tiers and a
release process, before the landing page exists. The founder never opens the docs site; the app team, a month later,
uses a different library and ignores half the tokens.

**Under-scoped.** The agent writes the landing page with values inline. A month later the app needs the same
colors, type and buttons; someone copies hex codes from the landing page by eye, and the two drift apart within a
week.

**Considered.** The agent notices the app is coming, asks with options, recommends level 2, and builds: a token file
(color roles in light and dark, a type scale, spacing, radii, motion, breakpoints), the components the landing page
and sign-up actually use (button, field, checkbox, form error, card, navigation), and a short README per component.
The report says the system is level 2 and what level 3 would add when the app team arrives. The cost is a day more
on the first delivery; the app starts from shared parts.

## Common mistakes

- **Not asking**, and silently deciding the person wanted either everything or nothing.
- **Asking a bare yes/no** without saying what each answer produces.
- **Scope by aspiration**: building level 4 machinery for a product with one developer.
- **Documentation first**: a beautiful docs site over components that do not exist yet.
- **Treating a library as a system**: installing a component library is not a decision about color, type, voice or
  when to use which component.
- **Never revisiting the level** when the team or product grows.

## Checklist

- [ ] The project was read before asking: existing tokens, libraries, brand, team size, roadmap signals.
- [ ] The person was asked once, with levels, what each produces, a recommendation and a default — or the question
      was skipped for a stated reason (existing system, one-off task, prototype, already answered).
- [ ] The chosen level is recorded and named in the report.
- [ ] What was built matches the level: nothing above it that nobody will maintain, nothing below it that the next
      screen will need.
- [ ] The signals for moving to the next level are written down.
