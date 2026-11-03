# Production readiness

What separates a demo from software a large company ships: it fails gracefully, can be turned off, tells the team
what is happening, and can be changed safely. These are engineering concerns with direct design consequences — an
error boundary is an error state, a feature flag is a rollout plan, an analytics event is a definition of success.

Related: [states](../23-states-transitions-and-concurrency.md), [measurement](../26-measurement-and-learning.md),
[redesigns and migrations](../29-redesigns-and-migrations.md).

## Failing gracefully

- **Error boundaries** around independent regions (a widget, a panel, a route), so one failure does not blank the
  whole screen. Each boundary renders a designed error state: what failed, whether data is safe, a retry or a way
  around ([empty, loading and error states](../patterns/empty-loading-and-error-states.md)).
- **Route-level error and not-found pages** from the framework's conventions (`error` and `not-found` files, error
  routes, catch-all routes), designed like any other screen.
- **Network failures**: retries with backoff for idempotent requests, timeouts, offline detection, queued mutations
  where the product supports offline work.
- **Partial data**: render what arrived and mark what did not, instead of all-or-nothing.
- **Never show raw errors** (stack traces, "undefined", HTTP codes) to people; log them for the team.

## Turning things on and off

- **Feature flags** for anything risky or incomplete: release to staff, then a percentage, then everyone; a kill switch
  for features that can hurt (payments, notifications, AI actions).
- Flags are temporary: each has an owner and a removal date; old flags are deleted with their dead branches.
- **Design both states**: the flag-off experience is the current product, not a broken one.
- Experiments use the same mechanism, with guardrail metrics ([measurement](../26-measurement-and-learning.md)).

## Knowing what is happening

- **Error tracking** (with source maps uploaded privately) and **performance monitoring** with real-user Core Web
  Vitals or mobile vitals ([performance](07-performance.md)).
- **Analytics events designed, not sprinkled**: a tracking plan with event names in one convention (for example
  `object_action` in past tense: `invoice_sent`, `subscription_cancelled`), properties with types, owners, and the
  question each event answers. Events for outcomes, not every click.
- **Privacy**: consent before non-essential tracking where the law requires it; no personal data in event properties;
  retention limits ([privacy and data controls](../patterns/privacy-and-data-controls.md)).
- **Structured logs** for client errors with enough context to reproduce (route, release, device class), without
  personal data.

## Changing safely

- **Continuous integration**: type check, lint, format check, unit and component tests, accessibility checks and a
  build on every change; end-to-end tests for critical journeys before release.
- **Preview deployments** for each change, so design review happens on the real thing.
- **Visual regression** on the design system and key screens ([testing](05-testing.md)).
- **Versioned releases and rollbacks**: the previous version can be restored quickly; database and API changes are
  backward compatible during rollout.
- **Mobile**: staged rollouts in the stores, forced-update screens only for breaking server changes, over-the-air
  updates within store rules.

## Internationalization and content operations

- Strings in locale files, with a process for translations (a translation management system or reviewed files);
  missing translations fall back visibly in development and gracefully in production.
- Dates, numbers and currencies through `Intl` or the platform; time zones explicit.

## Worked comparison

**Situation:** a new "Recommendations" widget ships on the dashboard.

**Weak.** The widget throws when the recommendations API returns an empty list, and the whole dashboard shows a white
screen. Analytics tracks `click_btn_2`. There is no way to turn the widget off without a release.

**Strong.** The widget sits inside an error boundary that shows "Recommendations aren't available right now" while the
rest of the dashboard works; the empty list has its own designed state. It ships behind a flag to staff, then 10% of
accounts, with a kill switch. Events are `recommendation_viewed` and `recommendation_applied` with typed properties,
and the error tracker shows the failure with the release version.

## Checklist

- [ ] Error boundaries around independent regions, with designed error states; route-level error and 404 pages.
- [ ] Retries, timeouts and offline handling for network calls; partial data shown honestly.
- [ ] Risky features behind flags with owners and removal dates; flag-off state designed.
- [ ] Error tracking and real-user performance monitoring in place.
- [ ] A tracking plan with consistent event names; consent and no personal data in events.
- [ ] CI runs types, lint, tests and accessibility checks; preview deployments; visual regression on the system.
- [ ] Rollback path known; mobile staged rollouts.
