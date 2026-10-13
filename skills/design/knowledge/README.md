# Interface design: knowledge base

What it takes to design clear, accessible, usable interfaces without slop, and to reason about them the way a senior
designer does. Independent of any project and of any language: it applies to web, desktop and mobile, and to products
in any language and market. Examples are in English; rules are stated by function.

Do not read everything. Find the decision or problem you face below and open only what it points to.

## By the decision you are facing

| If you need to… | Read |
| --- | --- |
| Understand what problem to solve and for whom | [20-problem-framing](20-problem-framing.md) |
| Choose between alternatives and justify it | [21-decisions-and-tradeoffs](21-decisions-and-tradeoffs.md) |
| Organize navigation, naming and structure | [22-information-architecture](22-information-architecture.md) · [navigation and settings](patterns/navigation-and-settings.md) |
| Design every state of a feature with data or processes | [23-states-transitions-and-concurrency](23-states-transitions-and-concurrency.md) · [08-real-state-and-verification](08-real-state-and-verification.md) · [empty, loading and error states](patterns/empty-loading-and-error-states.md) |
| Write labels, errors, empty states, confirmations | [04-interface-writing](04-interface-writing.md) |
| Make it work in other languages and markets | [24-content-and-localization](24-content-and-localization.md) |
| Show data in charts or dashboards | [25-data-visualization](25-data-visualization.md) · [dashboards and metrics](patterns/dashboards-and-metrics.md) |
| Decide what to measure and learn after launch | [26-measurement-and-learning](26-measurement-and-learning.md) · [16-research-and-testing](16-research-and-testing.md) |
| Hand over to engineering, or design in code | [27-design-handoff-and-engineering](27-design-handoff-and-engineering.md) · [18-design-systems](18-design-systems.md) |
| Design across channels, people and time (email, support, offline) | [28-service-design-and-journeys](28-service-design-and-journeys.md) |
| Redesign or migrate something people already use | [29-redesigns-and-migrations](29-redesigns-and-migrations.md) |
| Work out what the product is, for whom, and what tone it needs | [30-product-domains-and-tone](30-product-domains-and-tone.md) |
| Give critique, respond to an idea, present options, ask good questions | [31-critique-feedback-and-options](31-critique-feedback-and-options.md) |
| Study an existing brand before changing anything | [32-reading-an-existing-brand](32-reading-an-existing-brand.md) |
| See the product as people see it (screenshots, browser) | [33-looking-at-the-real-interface](33-looking-at-the-real-interface.md) |
| Use live references (Mobbin) and design files (Figma) | [34-references-and-design-tools](34-references-and-design-tools.md) |
| Build from small components and tokens; keep code professional | [35-components-tokens-and-code-quality](35-components-tokens-and-code-quality.md) |
| Design for the platform: web sizes, mobile gestures and motion, desktop conventions, touchpad, shortcuts | [36-platforms-and-input](36-platforms-and-input.md) |
| Give it character without slop | [01-anti-slop](01-anti-slop.md) · [13-human-design](13-human-design.md) · [11-brand-and-identity](11-brand-and-identity.md) |
| Choose type, color, layout and imagery | [09-typography](09-typography.md) · [10-color](10-color.md) · [17-composition-and-layout](17-composition-and-layout.md) · [19-imagery-icons-and-illustration](19-imagery-icons-and-illustration.md) · [05-visual-system](05-visual-system.md) |
| Persuade without manipulating | [12-psychology-and-ethical-persuasion](12-psychology-and-ethical-persuasion.md) |
| Make it accessible and prove it | [02-accessibility](02-accessibility.md) · [15-advanced-accessibility](15-advanced-accessibility.md) |
| Critique or review something | [03-usability](03-usability.md) · [06-review](06-review.md) · [07-process](07-process.md) |
| Build a landing or marketing page | [landing/README](landing/README.md) |
| See the reasoning applied end to end | [cases/README](cases/README.md) |

## How to use it

- **Before designing:** [07-process](07-process.md), [20-problem-framing](20-problem-framing.md) and the pattern file
  for the screen type.
- **While designing:** [00-principles](00-principles.md), [05-visual-system](05-visual-system.md),
  [04-interface-writing](04-interface-writing.md), and the visual foundations.
- **Before calling it done:** [06-review](06-review.md), [02-accessibility](02-accessibility.md),
  [01-anti-slop](01-anti-slop.md), and the verification levels in
  [08-real-state-and-verification](08-real-state-and-verification.md).

## Foundations

| File | What it covers |
| --- | --- |
| [00-principles](00-principles.md) | The principles that govern everything else |
| [01-anti-slop](01-anti-slop.md) | Signs of generic, autopilot design and how to avoid them |
| [02-accessibility](02-accessibility.md) | WCAG 2.2 AA in practice, web and mobile, and how to check |
| [03-usability](03-usability.md) | Heuristics applied, laws of UX, progressive disclosure |
| [04-interface-writing](04-interface-writing.md) | Buttons, titles, errors, empty states, confirmations, voice and tone |
| [05-visual-system](05-visual-system.md) | Hierarchy, type, color, space, shape, icons, motion |
| [06-review](06-review.md) | Review checklist and severity scale |
| [07-process](07-process.md) | How to design step by step and how to critique |
| [08-real-state-and-verification](08-real-state-and-verification.md) | States table, consistency between views, errors by stage, verification levels |
| [09-typography](09-typography.md) | Choosing and pairing families, scales, measures, craft details, loading |
| [10-color](10-color.md) | Palettes in OKLCH, contrast, palettes with character, dark mode, color in data |
| [11-brand-and-identity](11-brand-and-identity.md) | Brand platform, voice, core elements, distinctive assets, guidelines |
| [12-psychology-and-ethical-persuasion](12-psychology-and-ethical-persuasion.md) | How people process and decide, biases used honestly, dark patterns, trust |
| [13-human-design](13-human-design.md) | Roots of slop and how to make a person visible behind the work |
| [14-seo-and-content](14-seo-and-content.md) | Search intent, structure, technical SEO, AI assistants, durable content |
| [15-advanced-accessibility](15-advanced-accessibility.md) | People and tools, names and states, focus, announcements, cognition, testing |
| [16-research-and-testing](16-research-and-testing.md) | Which method for which question, interviews, tests, analytics, experiments |
| [17-composition-and-layout](17-composition-and-layout.md) | Composition, grids, spacing, adaptation, density |
| [18-design-systems](18-design-systems.md) | Tokens, components, states, themes, using a library without losing identity |
| [19-imagery-icons-and-illustration](19-imagery-icons-and-illustration.md) | Photography, screenshots, icons, illustration, 3D, AI imagery |
| [20-problem-framing](20-problem-framing.md) | Problems, users, evidence, constraints and success before solutions |
| [21-decisions-and-tradeoffs](21-decisions-and-tradeoffs.md) | Generating alternatives, criteria, reversibility, documenting decisions |
| [22-information-architecture](22-information-architecture.md) | Mental models, objects and actions, naming, navigation, findability |
| [23-states-transitions-and-concurrency](23-states-transitions-and-concurrency.md) | State models, transitions, async work, conflicts, multiple users and devices |
| [24-content-and-localization](24-content-and-localization.md) | Content design, translation, formats, scripts, right-to-left, cultural fit |
| [25-data-visualization](25-data-visualization.md) | Choosing charts, encoding, honesty, accessibility of data |
| [26-measurement-and-learning](26-measurement-and-learning.md) | Metrics, guardrails, experiments, qualitative signals, learning loops |
| [27-design-handoff-and-engineering](27-design-handoff-and-engineering.md) | Specs, states, edge cases, review in code, collaboration |
| [28-service-design-and-journeys](28-service-design-and-journeys.md) | Journeys across channels, backstage, support, failure recovery |
| [29-redesigns-and-migrations](29-redesigns-and-migrations.md) | Changing what people know: risk, rollout, communication, rollback |
| [30-product-domains-and-tone](30-product-domains-and-tone.md) | Reading a project for evidence, confidence, tone dimensions, domain tendencies with counterexamples |
| [31-critique-feedback-and-options](31-critique-feedback-and-options.md) | Critique, feedback on ideas, presenting options, pushing back, asking questions |
| [32-reading-an-existing-brand](32-reading-an-existing-brand.md) | Brand audit from code and assets: inventory, equity, inconsistencies, fit |
| [33-looking-at-the-real-interface](33-looking-at-the-real-interface.md) | Getting to the real screens, how to look, what screenshots can and cannot prove |
| [34-references-and-design-tools](34-references-and-design-tools.md) | Live references by job and platform, design files as intent, working without tools |
| [35-components-tokens-and-code-quality](35-components-tokens-and-code-quality.md) | Composition over giant components, tokens for every reusable value, exceptions, checking |
| [36-platforms-and-input](36-platforms-and-input.md) | Identifying the platform, responsive web, mobile and tablet, desktop conventions, touchpad parity, shortcuts and muscle memory |
| [sources](sources.md) | Where the knowledge comes from and how to add to it |

## Patterns by screen type

Search with `grep -il "<word>" knowledge/patterns/*.md` or use this table.

### Structure and navigation

| File | Covers |
| --- | --- |
| [navigation-and-settings](patterns/navigation-and-settings.md) | Sidebars, top bars, settings, integrations |
| [search-and-command-palette](patterns/search-and-command-palette.md) | Command palette, search on web and mobile, no results, shortcuts |
| [bookings-shortcuts-and-whats-new](patterns/bookings-shortcuts-and-whats-new.md) | Bookings, keyboard shortcuts, what's new |
| [mobile](patterns/mobile.md) | Tabs, sheets, gestures, system permissions, touch |
| [preferences](patterns/preferences.md) | Language and region, appearance, notification preferences |
| [accessibility-settings](patterns/accessibility-settings.md) | In-app accessibility settings |

### Input and data

| File | Covers |
| --- | --- |
| [forms](patterns/forms.md) | Labels, validation, errors, passwords, long forms |
| [wizards-and-collaboration](patterns/wizards-and-collaboration.md) | Wizards, final review, comments, presence |
| [dates-and-filters](patterns/dates-and-filters.md) | Date ranges, single dates, filters |
| [tables-and-lists](patterns/tables-and-lists.md) | Views, filters, selection, bulk actions, density |
| [boards-and-record-details](patterns/boards-and-record-details.md) | Kanban, record details, inline editing, rich text |
| [dashboards-and-metrics](patterns/dashboards-and-metrics.md) | Dashboards, metrics, charts in product |
| [import-tags-and-cropping](patterns/import-tags-and-cropping.md) | Importing data, tags, cropping images |
| [micro-interactions](patterns/micro-interactions.md) | Reordering, hints, tooltips, previews |
| [direct-manipulation](patterns/direct-manipulation.md) | Maps, globes, 3D views, zoomable canvases: touch, touchpad, wheel, inertia, keyboard |
| [events-quizzes-and-form-builders](patterns/events-quizzes-and-form-builders.md) | Events, quizzes, form builders |
| [templates-and-automations](patterns/templates-and-automations.md) | Template galleries, automation builders |

### Feedback and layers

| File | Covers |
| --- | --- |
| [empty-loading-and-error-states](patterns/empty-loading-and-error-states.md) | Empty, skeletons, progress, errors, error pages, toasts |
| [dialogs-overlays-and-confirmations](patterns/dialogs-overlays-and-confirmations.md) | Which layer to use, dialogs, panels, menus, confirm vs. undo |
| [notifications](patterns/notifications.md) | Inbox, what to notify, badges, system notices |
| [tracking-and-offline](patterns/tracking-and-offline.md) | Following a process in progress, working offline |
| [batches-approvals-and-captions](patterns/batches-approvals-and-captions.md) | Batches and queues, approvals, caption editing |
| [triage-roles-and-celebrations](patterns/triage-roles-and-celebrations.md) | Triage inboxes, roles, celebrations |

### Accounts, people and permissions

| File | Covers |
| --- | --- |
| [sign-in-and-accounts](patterns/sign-in-and-accounts.md) | Sign-in, passkeys, codes, two-factor, account |
| [onboarding](patterns/onboarding.md) | Sign-up, personalization, first steps, tours |
| [profiles](patterns/profiles.md) | Public and private profiles |
| [profile-brand-kit-and-version-history](patterns/profile-brand-kit-and-version-history.md) | Account profile, brand kit, version history |
| [team-invites-help-and-feedback](patterns/team-invites-help-and-feedback.md) | Inviting a team, help center, asking for feedback |
| [permissions-identity-and-scope](patterns/permissions-identity-and-scope.md) | Roles, permissions, acting on behalf, scope |
| [privacy-and-data-controls](patterns/privacy-and-data-controls.md) | Consent, data export and deletion, visibility |
| [family-and-parental-controls](patterns/family-and-parental-controls.md) | Family accounts, parental controls |
| [safety-and-moderation](patterns/safety-and-moderation.md) | Reporting, blocking, moderation |

### Money and plans

| File | Covers |
| --- | --- |
| [plans-and-pricing-tables](patterns/plans-and-pricing-tables.md) | Plan cards and comparison in product |
| [usage-limits-and-subscriptions](patterns/usage-limits-and-subscriptions.md) | Usage and quotas, meters, limit warnings, upgrading, cancelling |
| [checkout-and-scheduling](patterns/checkout-and-scheduling.md) | Checkout, payment methods, subscriptions, picking a time |
| [failed-payments](patterns/failed-payments.md) | Failed and uncertain payments, dunning |
| [enterprise-contact-and-quotes](patterns/enterprise-contact-and-quotes.md) | Enterprise plans, contacting sales, quotes |
| [money-and-progress](patterns/money-and-progress.md) | Amounts and transfers, transactions, goals and streaks |
| [referrals](patterns/referrals.md) | Referral programs |
| [badges-and-gamification](patterns/badges-and-gamification.md) | Badges, achievements, gamification |
| [commerce-and-maps](patterns/commerce-and-maps.md) | Product detail, cart, map search |
| [comparison-support-and-reviews](patterns/comparison-support-and-reviews.md) | Comparison tables, support requests, reviews |

### Content, media and creation

| File | Covers |
| --- | --- |
| [editors-and-creative-tools](patterns/editors-and-creative-tools.md) | Canvas, inspector, timeline, versions, export |
| [file-upload-and-sharing](patterns/file-upload-and-sharing.md) | Uploading files, sharing and permissions |
| [publishing-file-browsing-and-audit-logs](patterns/publishing-file-browsing-and-audit-logs.md) | Publishing, browsing files, audit logs |
| [video-upload-advanced-search-and-live-activities](patterns/video-upload-advanced-search-and-live-activities.md) | Video upload, advanced search, live activities |
| [camera-and-photo-picking](patterns/camera-and-photo-picking.md) | Camera, photo pickers |
| [media-players](patterns/media-players.md) | Audio and video players |
| [accessible-media](patterns/accessible-media.md) | Captions, transcripts, audio description |
| [downloads-and-offline-content](patterns/downloads-and-offline-content.md) | Downloads and offline content |
| [messaging](patterns/messaging.md) | Chat between people |
| [calls](patterns/calls.md) | Audio and video calls |

### AI and developers

| File | Covers |
| --- | --- |
| [ai-chat-and-agents](patterns/ai-chat-and-agents.md) | Prompt fields, responses, agents, agent setup, generation, trust |
| [ai-first-run-and-sharing](patterns/ai-first-run-and-sharing.md) | AI first run, sharing results |
| [developer-tools-and-api-keys](patterns/developer-tools-and-api-keys.md) | API keys, scopes, webhooks, logs, technical settings |

### Marketing

| File | Covers |
| --- | --- |
| [product-pages](patterns/product-pages.md) | Summary of landing patterns; full depth in [landing/](landing/README.md) |

## Landing pages

See [landing/README.md](landing/README.md): strategy, hero, sections, persuasive writing, art direction, motion,
accessibility/performance/SEO, review, and guides by type (pricing, mobile, AI, physical products, portfolios, forms,
dark aesthetics, blog), full recipes and motion recipes.

## Cases

[cases/README.md](cases/README.md): complete reasoned cases showing problem, evidence, constraints, alternatives,
decision, states, tests, results and limits.
