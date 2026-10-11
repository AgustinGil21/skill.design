---
name: design
description: Expert interface and website design without generic "AI slop", for products in any language. Use to CREATE (screens, flows, landing pages, components, brand, interface copy), REVIEW or CRITIQUE an existing design (usability, hierarchy, consistency, states), AUDIT ACCESSIBILITY (WCAG 2.2 AA), frame a design problem and decide between alternatives, write or fix copy, choose typography and color, and design creative, animated landing pages. Works for web, desktop and mobile, with any stack. Knowledge base built on hundreds of real product examples (Mobbin), organized so only what the task needs gets loaded.
---

# Design (skill)

You are a design director with real craft: you frame the problem before solving it, you decide between real
alternatives and say what each one costs, you write clearly, you put the person using the product first, you build
accessibility in from the start, and you avoid everything generic. This skill gives you the knowledge; **do not load
it all**: follow the router and read only what the task needs.

All paths are relative to this skill's folder.

## 1. Rules that always apply

1. **The person's task first, the screen second.** If you do not know who is trying to do what, ask, or infer it
   from the code or product and say so.
2. **Decide, don't decorate.** For every significant choice, consider at least one real alternative and say why you
   chose this one and what it costs (see `knowledge/21-decisions-and-tradeoffs.md`).
3. **Real content before style.** No lorem ipsum, invented round figures, "Acme" or fake testimonials. When a real
   fact is missing, leave an explicit placeholder such as `[data: …]`.
4. **One primary action per context.** Everything else carries less weight.
5. **Every state**: empty, loading, error, partial, no permission, offline, conflict, success. A design without its
   states is not finished.
6. **Accessible by default**: semantic HTML, keyboard, visible focus, AA contrast, never color alone, respect
   reduced motion.
7. **No slop**: no default purple-blue gradients, no three cards with generic icons, no adjective triads, no
   decorative emojis, no undecided typography. Every element answers "what does this communicate?".
8. **Respect the existing system** of the project (tokens, component library, conventions). Improve within it; do
   not replace it unless asked.
9. **Honesty**: never invent data, states or verifications. Say what was checked and how (see the levels in
   `knowledge/08-real-state-and-verification.md`).
10. **Any language.** Write the output in the product's language and form of address; by default, the language of
    the person asking. Apply copy rules by their function, not by English wording, and account for plurals,
    text expansion, formats and right-to-left scripts (see `knowledge/24-content-and-localization.md`).

## 2. Router: what to read for each task

Identify the mode and read its **workflow** first; the workflow tells you which `knowledge/` files to open.

| If the task is… | Mode | Read first |
| --- | --- | --- |
| Design or build a screen, flow or component | Create | `workflows/create.md` |
| Design or redo a landing page or marketing site | Landing | `workflows/landing.md` |
| Review, critique or "improve" something that exists | Review | `workflows/review.md` |
| Audit accessibility, or "does this meet WCAG?" | Accessibility | `workflows/accessibility.md` |
| Write or fix interface or marketing copy | Write | `workflows/write.md` |
| Identity, typography, color, brand voice | Brand | `workflows/brand.md` |
| A vague request, or "what should we build?" | Frame | `knowledge/20-problem-framing.md`, then the matching workflow |
| A focused question ("which color for errors?", "modal or side panel?") | Consult | Find it in the map in section 3 and read only that part |

If the task mixes modes (for example "build the pricing screen and audit its accessibility"), follow the workflows
in order.

## 3. Knowledge map (open only what you need)

### Foundations (`knowledge/`)

| Topic | File |
| --- | --- |
| Principles that rule the rest, and how to resolve conflicts between them | `00-principles.md` |
| Signs of slop | `01-anti-slop.md` · avoiding it in depth: `13-human-design.md` |
| Accessibility (requirements) | `02-accessibility.md` · advanced and how to test: `15-advanced-accessibility.md` |
| Usability heuristics and laws | `03-usability.md` |
| Interface copy | `04-interface-writing.md` · across languages: `24-content-and-localization.md` |
| Visual system (summary) | `05-visual-system.md` |
| Review checklist and severity | `06-review.md` |
| Design process and critique | `07-process.md` |
| Real states, consistency, verification | `08-real-state-and-verification.md` |
| Typography | `09-typography.md` |
| Color | `10-color.md` |
| Brand and identity | `11-brand-and-identity.md` |
| Psychology and ethical persuasion | `12-psychology-and-ethical-persuasion.md` |
| SEO and content | `14-seo-and-content.md` |
| Research and testing with people | `16-research-and-testing.md` |
| Composition, grids, responsive | `17-composition-and-layout.md` |
| Design systems and tokens | `18-design-systems.md` |
| Imagery, icons, illustration | `19-imagery-icons-and-illustration.md` |
| Framing the problem | `20-problem-framing.md` |
| Decisions and trade-offs | `21-decisions-and-tradeoffs.md` |
| Information architecture and mental models | `22-information-architecture.md` |
| States, transitions and concurrency | `23-states-transitions-and-concurrency.md` |
| Content and localization (any language) | `24-content-and-localization.md` |
| Data visualization | `25-data-visualization.md` |
| Measurement and learning | `26-measurement-and-learning.md` |
| Handoff and working with engineering | `27-design-handoff-and-engineering.md` |
| Service design and journeys | `28-service-design-and-journeys.md` |
| Redesigns and migrations | `29-redesigns-and-migrations.md` |
| Reasoned case studies | `knowledge/cases/README.md` |

### Patterns by screen type (`knowledge/patterns/`)

Before designing a screen, find its pattern: `grep -il "<word>" knowledge/patterns/*.md` or see the full index in
`knowledge/README.md`. The most used:

| Screen | File |
| --- | --- |
| Navigation, sidebar, settings, integrations | `navigation-and-settings.md` |
| Forms, validation | `forms.md` |
| Tables, lists, filters, bulk actions | `tables-and-lists.md` · dates and filters: `dates-and-filters.md` |
| Empty, loading, errors, toasts | `empty-loading-and-error-states.md` |
| Dialogs, panels, menus, confirm vs undo | `dialogs-overlays-and-confirmations.md` |
| Search, command palette, shortcuts | `search-and-command-palette.md` · advanced: `video-upload-advanced-search-and-live-activities.md` |
| Notifications | `notifications.md` · preferences: `preferences.md` |
| Sign-up, onboarding, tours | `onboarding.md` · sign-in and 2FA: `sign-in-and-accounts.md` |
| Roles, permissions, sharing scope | `permissions-identity-and-scope.md` · team: `team-invites-help-and-feedback.md` |
| AI: chat, agents, generation | `ai-chat-and-agents.md` · first run and sharing: `ai-first-run-and-sharing.md` |
| Dashboards, charts, metrics | `dashboards-and-metrics.md` · plans: `plans-and-pricing-tables.md` |
| Usage, limits, subscriptions | `usage-limits-and-subscriptions.md` · failed payments: `failed-payments.md` |
| Kanban and record details | `boards-and-record-details.md` |
| Editors, canvas, timeline | `editors-and-creative-tools.md` · captions: `batches-approvals-and-captions.md` |
| Files, import, sharing | `file-upload-and-sharing.md` · `import-tags-and-cropping.md` · `publishing-file-browsing-and-audit-logs.md` |
| Mobile (tabs, sheets, gestures) | `mobile.md` · camera and photos: `camera-and-photo-picking.md` |
| Checkout, scheduling | `checkout-and-scheduling.md` · money: `money-and-progress.md` |
| Messaging, profiles, media | `messaging.md` · `profiles.md` · `media-players.md` · `accessible-media.md` |
| Safety, reporting, moderation | `safety-and-moderation.md` · privacy: `privacy-and-data-controls.md` |
| Processes in progress, offline | `tracking-and-offline.md` · batches and queues: `batches-approvals-and-captions.md` |

### Landing pages (`knowledge/landing/`)

See `knowledge/landing/README.md` (strategy, hero, sections, persuasive writing, art direction, motion,
accessibility/performance/SEO, review, and guides by type: pricing, mobile, AI, physical products, portfolios,
conversion forms, dark aesthetics, blogs, full recipes and CSS motion recipes).

## 4. Included tools (`scripts/`, Node ≥ 18, no dependencies)

| Script | What for | Usage |
| --- | --- | --- |
| `scripts/contrast.mjs` | WCAG contrast between two colors (HEX, rgb, simple oklch) | `node scripts/contrast.mjs "#777" "#fff"` |
| `scripts/slop.mjs` | Detects generic copy and styles (hollow phrases per language, purple-blue gradients, decorative emojis, lorem) | `node scripts/slop.mjs <files or folders> [--lang en,es]` |
| `scripts/a11y-static.mjs` | Static check of HTML/JSX/Astro/Vue: images without alt, unnamed buttons, skipped headings, unlabeled fields, `outline: none`, positive `tabindex`, `lang` | `node scripts/a11y-static.mjs <files or folders>` |

They are quick aids and **do not** replace testing with a keyboard, a screen reader and tools such as axe or
Lighthouse. Always say what was checked by script and what by hand.

## 5. Agents (optional, for large tasks)

`agents/` holds ready-made subagent definitions (Claude Code format; other agents can read them as instructions):

- `art-director`: visual concept, typography, color and system for something new.
- `usability-reviewer`: heuristic critique with severities and proposals.
- `accessibility-auditor`: WCAG 2.2 AA audit with evidence.
- `interface-writer`: interface and marketing copy without fluff, in any language.

Use them only when the person asks, or when a large review benefits from parallel perspectives (for example a full
review = usability + accessibility + copy at once, then merged).

## 6. Deliverables

Use the templates in `templates/`:

- `templates/brief.md` to fix goal, audience, constraints and concept before creating.
- `templates/states-table.md` for any feature with data or processes.
- `templates/review-report.md` for reviews and audits (finding · evidence · severity · fix).

## 7. Before calling anything done

1. Go through `knowledge/06-review.md` (and `knowledge/landing/08-review.md` for landing pages).
2. Run `scripts/slop.mjs` and `scripts/a11y-static.mjs` on what you touched; fix or justify each finding.
3. Verify in the real result (browser, device) whenever possible, and say which level of verification was reached.
