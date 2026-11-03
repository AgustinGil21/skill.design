# Card: write or change code

The compact version of `knowledge/engineering/README.md`. Read this before writing code in any stack; open the
engineering files for the decision at hand.

## Before the first line

1. **Stack.** Existing project: its framework, libraries, structure and conventions win. New project: recommend a
   library and framework with reasons and costs, then let the person choose
   (`knowledge/engineering/04-frameworks-and-stacks.md`).
2. **Docs.** Read the current documentation of every framework and library you will use, for the installed version:
   recommended patterns, pitfalls, migration notes. Say what you checked.
3. **System first.** When a design system is in scope, its tokens and core components exist before screens.
4. **Architecture.** Where state lives (URL, server, form, local, global), how data loads, which patterns and why
   (`knowledge/engineering/01-architecture-and-patterns.md`).
5. **New project setup.** pnpm pinned, exact versions, supply-chain settings in `pnpm-workspace.yaml`, a fast linter
   and formatter, TypeScript strict, Vitest and Playwright (`knowledge/engineering/06-tooling-and-supply-chain.md`).

## While writing

- **Components**: one responsibility; anything that repeats is one component configured by props, variants or slots.
- **No comments inside markup**; a part that needs a label is a component. No comments that restate code, narrate
  changes, address the reader or leave TODOs. Comments explain why.
- **Tokens, then the scale**: `bg-action`, `h-64`, `max-w-7xl`; never `h-[256px]` or `text-[#1a1a2e]`
  (`knowledge/engineering/03-styling-and-tailwind.md`).
- **States** in the component API: loading, empty, error, disabled.
- **Accessible by construction**: semantic elements first, names, focus management, keyboard.
- **Platform first**: `<dialog>`, popover, anchor positioning, container queries before a library, with fallbacks
  where support is missing (`knowledge/engineering/08-web-platform.md`).
- **Secure**: no `dangerouslySetInnerHTML` or `v-html` with unsanitized input, no secrets in the client, safe links
  (`knowledge/engineering/09-frontend-security.md`).
- **Fast**: little JavaScript, sized images, subset fonts, no waterfalls (`knowledge/engineering/07-performance.md`).
- **Strings in locale files**; formatting through `Intl` or the platform.
- **Native apps**: `knowledge/engineering/10-native-apps.md`.

## Before handing over

- Tests at the right level pass, queried by role and name (`knowledge/engineering/05-testing.md`).
- `node scripts/system-check.mjs <paths>` (tokens, scale, comments, component size, version ranges),
  `node scripts/a11y-static.mjs <paths>`, the project's linter, formatter and type check.
- Production basics where they apply: error boundaries, feature flags, analytics events named consistently
  (`knowledge/engineering/11-production-readiness.md`).
- Slop: `knowledge/slop/06-code-and-components.md`.
- Report: files and structure, decisions and alternatives, libraries and the docs you checked, tests and checks run,
  what was not verified.
