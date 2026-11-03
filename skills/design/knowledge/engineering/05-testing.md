# Testing

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: test runner versions and features.

What to test, at which level, with which current tools, so tests catch real regressions without slowing the team.
The project's existing runner and conventions come first; for new projects, choose current, fast tools.

## Levels and what each one is for

| Level | Tests | Tool examples | Speed |
| --- | --- | --- | --- |
| **Static** | Types, lint rules (including accessibility and hooks rules) | TypeScript, Oxlint, Biome, ESLint | Instant |
| **Unit** | Pure logic: formatting, validation, reducers, state machines | Vitest | Milliseconds |
| **Component** | A component's behavior as a person uses it: renders, responds to input, shows states | Vitest with Testing Library; Vitest Browser Mode for real-browser behavior | Fast |
| **Integration** | A feature with its data layer mocked at the network level | Vitest + Mock Service Worker | Fast |
| **End-to-end** | Critical journeys through the real app: sign-in, checkout, cancel | Playwright | Slower; keep few and stable |
| **Visual regression** | Unintended visual changes | Vitest Browser Mode screenshots, Playwright screenshots, or a hosted service | Medium |
| **Accessibility** | Automated rule checks in component and E2E tests | axe-core (with the runner's integration) | Fast; catches only part of the issues |

A healthy suite has many fast tests at the bottom and few slow ones at the top. Testing every component end to end
is slow and brittle; testing only units misses broken journeys.

## Choosing the runner

- **Vitest** for new projects using Vite or a Vite-based framework: native ESM and TypeScript, shares the app's
  config, fast watch mode. Vitest 4 (October 2025) made **Browser Mode** stable: components run in a real browser
  through Playwright or WebdriverIO providers, with visual regression and trace support.
- **jsdom or happy-dom** for logic-heavy component tests where a real browser adds nothing; **Browser Mode** where
  layout, focus, real events or CSS matter.
- **Jest** in existing projects that use it; migrating is a separate decision with a benefit to show, not something
  to do on the side.
- **Playwright** for end-to-end tests on the web; run on Chromium, Firefox and WebKit for critical journeys.
- **Native**: XCTest / Swift Testing, JUnit / Compose testing, Flutter's test package, Detox or Maestro for E2E.

## How to write tests that last

- **Test behavior, not implementation**: query by role and accessible name (`getByRole('button', { name: 'Cancel
  subscription' })`), not by class names or test IDs when a role exists. If a test cannot find an element by role,
  the element is probably not accessible.
- **One behavior per test**, named as a sentence of what the person sees ("shows the end date after cancelling").
- **Every state**: empty, loading, error, partial, permission denied, success — the [states table](../../templates/states-table.md)
  is a test plan.
- **Mock at the network boundary** (Mock Service Worker) rather than mocking your own modules.
- **No arbitrary waits**; wait for what the person would see.
- **Realistic data**: long names, other locales, right-to-left, zero and many items.
- **Accessibility checks in component tests** with axe, plus keyboard paths in E2E (tab order, focus after dialogs).
- **Snapshots of markup sparingly**: they break on every change and are approved without reading.
- **Flaky tests are bugs**: fix or delete them; do not retry them into green.

## What to test first

1. Money, data loss and permissions: payments, cancelling, deleting, sharing.
2. The main journey of the product.
3. Components in the design system (every variant and state), because everything depends on them.
4. Logic with many branches (formatting, pricing, validation).

## Visual regression

Visual tests catch what behavior tests cannot: a token change that shifts every button, a font that failed to load, a
dark-mode regression.

- **What to snapshot**: every design-system component in each variant and state, in light and dark, at the longest
  locale; a few key screens at phone and desktop sizes.
- **Tools**: Vitest Browser Mode screenshot assertions, Playwright `toHaveScreenshot`, Storybook's test runner with a
  visual service (for example Chromatic) when the team reviews changes in a hosted UI; on native,
  screenshot tests per platform ([native apps](10-native-apps.md)).
- **Stable baselines**: fixed fonts, disabled animations (or reduced motion), fixed dates and data, the same browser
  version in CI; otherwise diffs become noise and people approve them without looking.
- **Review diffs like code**: an intended change updates the baseline in the same pull request, with the reason.

## Component library testing

- Each design-system component has a story or example per variant and state; stories double as visual and
  accessibility tests (Storybook's test integration with Vitest, or Vitest Browser Mode directly).
- Visual baselines for light and dark, and for the longest locale.

## Checklist

- [ ] The runner fits the project (existing one kept; current, fast tools for new projects).
- [ ] Tests query by role and name; behavior over implementation.
- [ ] States from the states table are covered.
- [ ] Network mocked at the boundary; realistic data.
- [ ] Accessibility checks automated, keyboard paths tested in E2E.
- [ ] Critical journeys covered end to end; no flaky tests left.
