# Governance and evolution

A design system is a product with internal users. It succeeds when teams choose it because it is the fastest way to
build something good, and it fails — slowly, then all at once — when it stops changing as they need, or changes
without telling them. Governance is the set of habits that keeps it useful: who decides, how changes are proposed,
how they ship, and how anyone knows whether it is working.

## What it is and why it matters

Most systems do not die from bad components. They die from:

- **No owner**: nobody has time to review, fix or answer, so teams stop asking and fork.
- **No path for change**: contributing is slower than building locally, so local copies multiply.
- **Breaking changes without warning**: teams pin old versions and never upgrade.
- **No evidence**: nobody knows which products use what, so priorities are guesses.

Governance should be as light as the system's level ([01-deciding-scope](01-deciding-scope.md)). A level-2 kit in
one product needs a person who owns it and a habit of updating it; a level-4 system across products needs a team,
a process and metrics.

## 1. Team models

Nathan Curtis described three models for the people behind a system, and the names are widely used:

| Model | How it works | Strengths | Risks |
| --- | --- | --- | --- |
| **Solitary** | One product team builds a system for its own needs and makes it available to others | Fast, grounded in a real product | Others' needs are second; support is informal |
| **Centralized** | A dedicated team builds and supports the system for everyone | Consistency, capacity, a clear owner | Distance from product constraints; can become a bottleneck or a target in budget cuts |
| **Federated** | Designers and engineers from several product teams decide and contribute together | Close to product needs, shared ownership | Without dedicated time, work stalls; Curtis later argued that federation without a funded core team tends to fail |

In practice, larger organizations often combine a small central team that owns quality, tooling and releases with
contributors from product teams. Whatever the model, someone must have system work as part of their actual job, not
as a favor on top of it.

For a single product built by one team or by an agent with a person, the solitary model is natural: the product team
owns the system, and the rules below shrink to "update the system in the same change as the screen".

## 2. Roles

| Role | Responsibility | Exists from level |
| --- | --- | --- |
| **Owner** (a person or team) | Quality bar, roadmap, final say on additions | 2 |
| **Maintainers** | Review contributions, release, fix | 3 |
| **Contributors** | Propose and build additions from product needs | 3 |
| **Accessibility reviewer** | Checks components and patterns before release | 3 (or the owner at level 2) |
| **Content reviewer** | Voice, terminology, guidance quality | 3 |
| **Consumers** | Use the system and report gaps | Always |

## 3. Contribution

A contribution path makes the system grow from real needs instead of guesses. The GOV.UK Design System's published
criteria are a useful model:

- **At proposal**: the addition is **useful** (evidence that several teams or services need it, such as screenshots of
  versions already in use) and **unique** (it does not duplicate something in the system; a replacement must show it
  is better).
- **Before publication**: it is **usable** (tested with a representative sample of people, including disabled
  people, with the tested contexts stated), **consistent** (reuses existing styles and components, guidance follows
  the content style, code meets the standards) and **versatile** (works across services, browsers, assistive
  technologies and devices).

Note what the model asks for at proposal: evidence of need, not a finished design. Asking for polish too early wastes
work on proposals that will be redirected.

A simple flow that works at most levels:

1. **Ask first**: a short proposal with the need, the evidence and what exists today.
2. **Decide**: accept, redirect to an existing component or pattern, or keep it local for now.
3. **Build in the open**, with the system's API rules, states and tests.
4. **Review**: design, accessibility, content, code.
5. **Release** with documentation and a changelog entry.
6. **Tell people**, including those who asked.

Small fixes (a bug, a missing state, a doc error) skip to step 3.

## 4. Decision records

Write down why a component behaves as it does, the alternatives considered and what would change the decision. A
short record per significant decision ([21-decisions-and-tradeoffs](../21-decisions-and-tradeoffs.md)) prevents
re-arguing the same question every time someone new joins, and lets a later decision change it knowingly.

## 5. Versioning

Semantic versioning (major.minor.patch) maps well to systems when "breaking" is defined broadly:

| Change | Version | Why |
| --- | --- | --- |
| Bug fix that restores documented behavior | Patch | Nothing people rely on changes |
| New component, variant, token or optional prop | Minor | Additive |
| Removing or renaming a component, prop, variant or token | Major | Code stops compiling or silently loses styling |
| Changing a token's value in a way that changes meaning (a role becomes a different color family) | Major or a clearly announced minor | Screens change without anyone editing them |
| Changing keyboard behavior, focus handling or semantics | Major | People who rely on the old behavior are affected, even if the code compiles |
| Visual refresh of many components | Major, with a migration guide | Products need to check every screen |

Before a first stable release, communicate that anything may change; after it, keep promises.

Release notes are written for consumers: what changed, why, what they need to do, and how long the old way keeps
working.

## 6. Deprecation

Removing things is part of keeping a system small. A deprecation policy answers:

- **How it is announced**: changelog, a warning in the console or build, a status label in the docs, a mark in the
  token source (`$deprecated` in the token format).
- **What replaces it**, with a migration guide and, where the change is mechanical, a codemod.
- **How long it stays**: a window long enough for teams to plan the work, stated in time or releases, and kept.
- **Who helps**: support for teams with large migrations.

Never remove without a deprecation period, except for security or legal reasons, and then say so.

## 7. Measuring

Measure to learn where the system helps and where it fails, not to produce a vanity number.

| Signal | What it suggests | Caution |
| --- | --- | --- |
| **Coverage**: products (or pages) that use each component at least once | Where the system reaches | Raw instance counts mislead: one header used on thirty pages is one decision |
| **Detached instances and overrides** in design files | A missing variant, a wrong default, or a need the system ignores | Some detaching is expected; look for patterns per component |
| **Local copies and raw values** in code | Components that do not fit, or that are hard to find | Scan with lint rules and `scripts/system-check.mjs` |
| **Version lag**: products on old major versions | Migration cost too high, or poor communication | Ask why before pushing |
| **Questions and requests** | Gaps in components or documentation | The best qualitative roadmap |
| **Accessibility issues traced to components** | Where fixing once fixes many products | Count by component |
| **Time to build common screens** | Whether the system speeds work | Hard to measure cleanly; use as a story, not a KPI |

Practitioner reports from teams at Figma, Pinterest and others describe tracking detachments and component usage from
design tool data and code scans; there is no standard formula for a "healthy" rate, so compare each component with
itself over time and read the numbers with the teams.

## 8. Keeping it alive

- **A regular rhythm**: releases on a schedule, a changelog people read, office hours or a channel for questions.
- **A roadmap** built from requests, metrics and accessibility findings.
- **Periodic pruning**: components nobody uses, variants nobody picks, tokens nobody references.
- **Onboarding**: a short path for new people and new agents — the rules file, the system page, the first
  components to learn.
- **Celebrating contributions** so product teams see the system as theirs.

## Worked comparison

**Neglected.** A component library is launched with a big announcement. Its creator moves to another project. A
team needs a date range picker, finds no way to propose it, builds one; two other teams do the same. A breaking
change to the button ships in a minor version; three products pin the old version. A year later the system is
"the thing we used to use".

**Governed lightly.** The system has an owner with time allocated, a proposal template asking for need and evidence,
a monthly release with dated notes, deprecations with a stated window and codemods for mechanical changes, and a
dashboard of coverage, detaches and version lag reviewed with teams each quarter. When three teams need a date range
picker, the requests are merged into one proposal, built once, and the three local versions are retired with a
migration guide.

## Common mistakes

- **Launching and leaving**: treating the system as a project instead of a product.
- **Federation without funded time.**
- **Proposals that require finished designs**, so only large teams can contribute.
- **Calling behavior changes "minor"** because the code still compiles.
- **Deprecating without a replacement or a date.**
- **Metrics without conversations**: numbers read as success or failure without asking teams why.

## Checklist

- [ ] An owner with real time exists; the team model is chosen and stated.
- [ ] Roles match the system's level.
- [ ] A contribution path asks for need and evidence first, quality before publication.
- [ ] Significant decisions are recorded with alternatives.
- [ ] Versioning treats removals, renames, meaning changes and behavior changes as breaking.
- [ ] Deprecations are announced, marked in source, given a replacement, a guide and a window.
- [ ] Coverage, overrides, local copies, version lag and requests are reviewed with teams.
- [ ] Releases, roadmap, pruning and onboarding happen on a rhythm.
