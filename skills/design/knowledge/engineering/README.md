# Engineering: how a designer-engineer writes the code

The interface is only as good as the code that ships it. This folder holds the engineering side of the skill:
architecture and patterns, components and comments, styling (Tailwind and CSS), choosing frameworks, testing,
tooling and supply-chain security, and performance. It applies whenever the skill writes or reviews code.

It extends [components, tokens and code quality](../35-components-tokens-and-code-quality.md) and the code items of the
[slop catalog](../slop/06-code-and-components.md).

## The principles

1. **There is no single right way, but there are better options for each case.** Architectures, patterns and tools
   are chosen by the project's size, team, data, rendering needs and lifespan. State the options you considered, the
   one you recommend and why, and what it costs. Combine patterns when the problem needs it.
2. **The project's conventions come first.** In an existing codebase, follow its architecture, libraries, naming and
   tooling. Propose changes separately, with reasons; do not migrate on the side.
3. **The person decides the stack.** Framework and UI library choices (React, Preact, Svelte, Vue, Solid; Next.js,
   Astro, TanStack Start, React Router, a Vite SPA) are the person's call. Recommend with reasons; ask before
   choosing when the project does not already decide it ([frameworks and stacks](04-frameworks-and-stacks.md)).
4. **Research a library before using it.** Every framework and library has its own rules, idioms, pitfalls and
   current version. Before implementing with one, read its current official documentation (a documentation tool such
   as Context7 when available, or the official site) for best practices, anti-patterns and the version in the
   project. Do not write code from memory for a library whose API may have changed.
5. **The design system comes before the code.** When a design system is part of the work (the person asked for one,
   or accepted it when offered), its foundations — tokens for color, type, space, radius, elevation, motion and
   breakpoints — and the core components exist before the first screen is coded
   ([design system workflow](../../workflows/design-system.md)).
6. **Atomic, reusable, configurable components.** Small components with one responsibility, composed into larger
   ones; whenever a piece can be reused, make it a component whose differences are parameters (props, variants,
   slots), not copies ([components and comments](02-components-and-comments.md)).
7. **Tokens, never magic values.** No arbitrary values when the system or the framework's scale has the value
   ([styling and Tailwind](03-styling-and-tailwind.md)).
8. **Code that explains itself; comments only for why.** No AI-style comments, no comments that restate code, no
   comments inside a component's markup ([components and comments](02-components-and-comments.md)).
9. **Tested at the right level with current tools** ([testing](05-testing.md)).
10. **Safe, fast, reproducible tooling**: a secure package manager configuration, exact versions with a release-age
    delay, fast linters and formatters ([tooling and supply chain](06-tooling-and-supply-chain.md)).
11. **Performance is a design property** ([performance](07-performance.md)).

## What to read

| Task | Read |
| --- | --- |
| Starting a project or choosing a stack | [04-frameworks-and-stacks](04-frameworks-and-stacks.md) · [06-tooling-and-supply-chain](06-tooling-and-supply-chain.md) · [01-architecture-and-patterns](01-architecture-and-patterns.md) |
| Building any component or screen | [02-components-and-comments](02-components-and-comments.md) · [03-styling-and-tailwind](03-styling-and-tailwind.md) |
| Structuring a feature, state or data fetching | [01-architecture-and-patterns](01-architecture-and-patterns.md) |
| Writing or reviewing tests | [05-testing](05-testing.md) |
| Adding a dependency or touching package configuration | [06-tooling-and-supply-chain](06-tooling-and-supply-chain.md) |
| Anything users will load (pages, images, fonts, bundles) | [07-performance](07-performance.md) |
| Reviewing code | All of them, plus [slop: code and components](../slop/06-code-and-components.md) |

## Researching a library before using it

1. **Identify the version** the project uses (lockfile, `package.json`) or the current stable one for a new project.
2. **Read the official documentation for that version**: getting started, the recommended patterns, the
   "pitfalls", "common mistakes" or "you might not need" pages, and the migration notes from the previous major.
3. **Check how it fits the stack**: server rendering, the bundler, the test runner, the styling system.
4. **Note the rules you will follow** (for example: React's rules of hooks and purity; TanStack Query's query keys;
   Tailwind's theme variables; a component library's composition API and theming), and follow them.
5. **Say what you checked** in the report, with the version.

When no documentation tool or network is available, say so, prefer APIs you can verify in the installed package
(types, source in `node_modules`), and flag what could not be checked.

## Before calling code done

- [ ] The stack and libraries are the person's choice or an approved recommendation; their docs were checked for
  the version in use.
- [ ] The design system's tokens and core components existed before screens (when a system is in scope).
- [ ] Components are small, reusable and configured by parameters; no copies with small differences.
- [ ] No arbitrary values where a token or the framework's scale has the value.
- [ ] No restating, AI-style or in-markup comments; remaining comments explain why.
- [ ] Tests at the right level pass; accessibility checks included.
- [ ] Dependencies pinned exactly, with the package manager's security settings in place.
- [ ] Performance budget checked for what users load.
