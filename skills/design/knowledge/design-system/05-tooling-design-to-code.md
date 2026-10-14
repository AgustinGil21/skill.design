# Tooling: from design to code

A system lives in two places — where people design and where people build — and dies in the gap between them. This
file covers how to keep one source of truth, how tokens flow from it into every platform, how design tools and code
stay matched, and which checks keep the system honest. Tools change every year; the decisions below do not.

## What it is and why it matters

Without a deliberate pipeline, design and code drift: the design file says the muted text is one gray, the code says
another, and each side "fixes" it in turn. The pipeline decides **where a decision is made once** and how every other
place receives it.

## 1. Choosing the source of truth

| Source | How it works | Fits | Risk |
| --- | --- | --- | --- |
| **Code first** | Tokens and components live in code; design tool libraries mirror them | Small teams, developer-designers, agents writing most of the UI, levels 1–2 | Designers work from a mirror that can lag |
| **Design first** | Tokens are defined as design tool variables and exported to code | Design-led teams with a strong design tool practice | Export steps get skipped; code edits are overwritten |
| **Neutral token file** | Tokens live in a standard-format file in the repository; both sides read from it | Several platforms or products, level 3–4 | Needs a build step and someone who owns it |

Whichever is chosen, write it down: "Tokens are edited in `tokens/` and built; the design library is updated from the
build." Two sources that both accept edits is the one arrangement that always fails.

For agents building a system in a codebase with no design tool in use, code first is the default: tokens in the
format the stack reads (CSS custom properties, the framework's theme, the native theme file), components in code, a
system page rendering both.

## 2. The token pipeline

For levels 3–4, tokens usually flow like this:

1. **Source**: token files in a neutral format, such as the Design Tokens Community Group format
   ([02-foundations-and-tokens](02-foundations-and-tokens.md)), organized by tier and mode.
2. **Resolve**: references are resolved, modes and brands are combined into sets.
3. **Transform**: values are converted per platform — color spaces, units (px, rem, pt, dp), names (kebab case for
   CSS, camel case for JavaScript, platform conventions for native).
4. **Output**: CSS custom properties (with a block per mode), a framework theme, typed constants, iOS and Android
   resources, documentation tables.
5. **Publish**: the outputs are committed or released as a package the products consume.

Build tools exist for this (Style Dictionary is a long-standing open-source one; design-tool plugins such as Tokens
Studio export to it). Check their current documentation and supported format version before configuring them: these
tools have changed major versions and format support in recent years.

### Web output that works well

- **Primitives and semantics as CSS custom properties** on `:root`, semantics redefined per mode with a selector
  (`[data-theme="dark"]`) and the system preference (`@media (prefers-color-scheme: dark)`), so the person's choice
  and their OS setting both work.
- **Utility frameworks read the same variables** (for example a CSS-first theme configuration that maps utilities to
  the custom properties), so utilities and components never carry separate values.
- **Typed access in code** for values needed in scripts (chart colors, animation durations).
- **Reduced motion** handled once, by mapping motion tokens in `@media (prefers-reduced-motion: reduce)`.

### Native output

- **Platform naming and units**: points on iOS, density-independent pixels and scalable pixels on Android, logical
  pixels in Flutter and React Native.
- **Dynamic type and font scaling**: type tokens must scale with the person's settings, not stay fixed.
- **Platform conventions win over web habits** where they conflict
  ([36-platforms-and-input](../36-platforms-and-input.md)).

## 3. Design tools

Modern design tools hold tokens as variables organized in collections, with modes (light and dark, comfortable and
compact, brands) that switch a whole frame at once, and aliases from one variable to another — the same tiers and
modes as in code. Mode counts and some features depend on the plan; check the current limits before designing the
mode structure around them.

Keep design and code matched:

- **Same names, same tiers, same modes** on both sides; the mapping is mechanical.
- **Components in the design library mirror code components**: same name, same variants, same property names, same
  states.
- **Library published from one file**, versioned, with release notes that match code releases.
- **Detached instances and local overrides** in design files are signals of a missing variant or a wrong component
  ([06-governance-and-evolution](06-governance-and-evolution.md)).
- When a design tool can be read by an agent, read the variables and components rather than eyeballing screenshots
  ([34-references-and-design-tools](../34-references-and-design-tools.md)).

## 4. The component workshop

A workshop renders each component in isolation, with every variant and state as a story, and becomes the base for
tests and documentation.

- One story per meaningful state, with realistic content.
- Theme and density switchers in the toolbar, wired to the same tokens.
- Controls generated from the component's typed props.
- Accessibility checks running on every story.
- Visual snapshots of every story compared on each change.

At levels 2–3 in a single product, a system page inside the app can replace the workshop: it renders real components
with real tokens and needs no separate tooling ([04-documentation](04-documentation.md)).

## 5. Checks that keep the system honest

| Check | Where | Catches |
| --- | --- | --- |
| **Raw values** in components and styles | Lint rule, `scripts/system-check.mjs`, code review | Hex codes, pixel values, arbitrary utility values bypassing tokens |
| **Deprecated tokens and components** | Lint rule or build warning | Use of what is being removed |
| **Contrast** of every role pair per mode | A script over the token build (`scripts/contrast.mjs` for pairs) | Theme regressions |
| **Accessibility** per component and per composed example | Automated checks in tests and the workshop, plus manual passes | Missing names, roles, focus problems |
| **Visual regression** | Snapshots per story and per theme | Unintended visual changes |
| **Types** | Typed props and token names | Invalid variants, misspelled tokens |
| **Bundle size** | Build reports | Systems that make every page heavier |

Automated accessibility checks find only some problems; keyboard and screen reader passes on complex components stay
manual ([15-advanced-accessibility](../15-advanced-accessibility.md)).

## 6. Packaging and distribution

| Situation | Distribution |
| --- | --- |
| One product, one repository | A folder in the app (`tokens/`, `components/ui/`), no package |
| One product, several apps in a monorepo | An internal package in the monorepo |
| Several products or repositories | Versioned packages (tokens, components, icons) published to a registry |
| Several platforms | One token source; per-platform outputs; component libraries per platform with the same names and behavior |

Split tokens, icons and components into separate packages when products need them separately (a marketing site that
wants tokens without the component library). Version them together when they must stay in step.

## 7. Using AI tools in the system

AI tools are useful for the mechanical parts: suggesting tokens from repeated values in an existing product,
drafting documentation from props, finding inconsistencies like a visual linter, generating stories for each state,
and writing migration codemods. They are not where the system's strategy comes from: what to include, how to name it
and which abstraction fits are decisions someone must own and explain ([13-human-design](../13-human-design.md)).
Every generated token, component or page is reviewed against the system's rules like any other contribution.

## Worked comparison

**Drifting.** Colors live as variables in the design file and as a hand-written theme object in code. A designer
renames `gray-500` to `text-secondary` in the design file; the code keeps `gray-500`. A developer adds dark mode in
code only. Six months later, the design file and the product disagree on every screen, and each side believes it
is the source.

**Considered.** Tokens are a JSON source in the repository, organized as primitives, semantics and modes, with
descriptions. A build produces CSS custom properties per mode, a typed module for scripts and a token table for the
docs. The design library's variables are updated from the build, with the same names and modes. A lint rule flags
raw values; contrast is checked for every semantic pair on each build; visual snapshots cover every component in
light and dark. Renaming a token is a pull request that updates the source, the build and the design library
together, with a changelog entry.

## Common mistakes

- **Two editable sources** of the same tokens.
- **Choosing tools before decisions**: a pipeline built before the token architecture exists.
- **Outputs edited by hand**, overwritten by the next build.
- **Design library and code with different component names** or variant sets.
- **Checks that only run locally**, so regressions reach production.
- **Copying configuration from an old guide** for a tool whose current version works differently.

## Checklist

- [ ] One source of truth is chosen and written down.
- [ ] Tokens flow from the source to every platform by a build or a single file, never by copying.
- [ ] Web output supports the person's setting and an override, plus reduced motion.
- [ ] Design tool variables and components mirror code names, tiers, modes and variants.
- [ ] Components render in a workshop or system page with every state, theme and density.
- [ ] Raw values, deprecated parts, contrast, accessibility and visual changes are checked automatically.
- [ ] Distribution matches the number of products and platforms.
- [ ] Tool versions and format support were checked against current documentation.
