# Documentation

Documentation is how a system's decisions reach people who were not in the room — and, increasingly, the agents that
write code for them. Components without guidance get used for the wrong job; guidance without examples gets
ignored; examples without reasons get copied into places they do not fit.

## What it is and why it matters

Good documentation changes behavior: after reading it, a designer or developer picks the right component, uses it
correctly and knows when not to. It is measured by the questions that stop being asked, not by page count.

It also carries the system's credibility. Documentation that is out of date teaches people to stop trusting it, and
then they stop reading the parts that are correct.

## 1. Where it lives

| Form | Fits | Strength | Weakness |
| --- | --- | --- | --- |
| **Comments and descriptions in the source** | Levels 1–2 | Lives next to the code; never far out of date | Only developers see it |
| **A README per component folder** | Level 2 | Close to the code, readable in the repository | No live examples |
| **A system page inside the product** (a route visible to the team) | Levels 2–3, a single product | Real components, real tokens, every theme, no extra tooling | Must be kept out of public navigation and search when private |
| **A component workshop** (isolated stories per state) | Levels 2–4 | Every state renders; good base for visual and accessibility tests | Developer-oriented; guidance needs adding |
| **A documentation site** | Levels 3–4 | Guidance, patterns, brand, changelog in one place, for every role | Needs an owner and a build |
| **A design tool library** | Any level with designers | Where designers work | Drifts from code unless synced |

Static PDFs and slide decks age the day they are exported and fork into versions: avoid them as the system's home.
Publish them only as snapshots of a living source.

Whatever the form: **one home**, linked from the repository's README and from the design tool, and rendered from the
same tokens and components the product uses — never screenshots of them.

## 2. What a system's documentation contains

| Section | Contents | Level |
| --- | --- | --- |
| **Introduction** | What the system is for, who it serves, how to start, how to get help | 3+ |
| **Principles** | Three to five decisions with consequences ("density over decoration: admins work in tables all day"), not slogans | 3+ |
| **Brand** | Logo use and clear space, voice and tone, imagery rules, approved assets | 3+ when the system carries the brand ([11-brand-and-identity](../11-brand-and-identity.md)) |
| **Foundations** | Color roles with swatches and contrast, a type specimen ([08-typography-in-the-system](08-typography-in-the-system.md)), spacing, radii, depth, motion, layout, icons | 1+ |
| **Components** | One page per component (section 3) | 2+ |
| **Patterns** | Recurring tasks and the preferred composition, with alternatives | 3+ |
| **Content** | Voice, terminology, capitalization, how to write errors and empty states, per language | 3+ ([04-interface-writing](../04-interface-writing.md)) |
| **Accessibility** | What components guarantee and what remains each team's job | 3+ |
| **Changelog and status** | What changed, when, why; each component's status | 3+ |
| **Contributing** | How to propose, what makes a proposal accepted | 4 ([06-governance-and-evolution](06-governance-and-evolution.md)) |

## 3. Anatomy of a component page

1. **Name and one-sentence purpose.** "Dialog: interrupts the current task to ask for a decision or show something
   that needs attention now."
2. **Live example** with realistic content, switchable between themes and densities.
3. **When to use and when not to**, with the alternative for each "not": "For a message that does not need a decision,
   use an inline message or a toast."
4. **Anatomy**: the parts, labeled, with which are optional.
5. **Variants and sizes**, each with when to use it.
6. **States**: the matrix from [03-components-and-patterns](03-components-and-patterns.md), rendered.
7. **Behavior**: keyboard map, focus on open and close, responsive behavior, overflow.
8. **Content rules**: label length, wording by function, truncation, what changes across languages.
9. **Accessibility**: what the component handles, what the team using it must supply (an accessible name, a heading
   level), the WCAG criteria involved.
10. **Do and don't**, as pairs with the same content, each with the reason.
11. **Code**: import, minimal usage, props table generated from the source, copyable examples.
12. **Design tool link** and the matching component name there.
13. **Status and changelog**: experimental, stable, deprecated (with the replacement and date).

A page that says only what a component looks like teaches nothing a screenshot does not. The reasons — why this
variant exists, why the destructive button is not red-filled everywhere — are what let someone decide a case the page
never mentions.

## 4. Writing guidance that changes behavior

- **Rules with reasons and limits**: "Use one primary button per view, because it tells people the expected next
  step. Exception: a list where each row has its own main action uses tertiary buttons per row."
- **Examples from the product's domain**, not placeholder text or "Item 1".
- **Do and don't with the same content**, so the difference is the decision, not the material.
- **Short pages, scannable**: purpose and when-to-use above the fold; detail below.
- **Written for the reader's role**: designers need when and why; developers need API and behavior; writers need
  content rules. Sections, not separate sites.
- **Language**: the system's documentation is written in the team's working language; content guidance covers every
  language the product ships, natively ([24-content-and-localization](../24-content-and-localization.md)).

## 5. Documentation for agents

More and more interface code is written by coding agents. They read the repository, not the docs site, so a system
that wants to be used correctly by them leaves its decisions where they look:

- **Token sources with descriptions**: the description of `color.text.muted` is the guidance an agent reads.
- **A short rules file in the repository** (for example the project's agent instructions file or a `DESIGN.md`) with
  the non-negotiables: use tokens, never raw values; which component to use for which job; the voice; the
  accessibility floor; where the system page lives.
- **Component sources that document themselves**: typed props with comments on intent, examples next to the code.
- **Machine-checkable rules**: lint rules or scripts that flag raw values and deprecated components turn guidance into
  feedback agents and people both receive.

Keep the rules file short and point to the full documentation; a long file gets skimmed by people and agents alike.

## 6. Keeping it true

- **Generate what can be generated**: props tables, token tables, swatches and contrast values from the source.
- **Documentation is part of done**: a component change without its documentation change does not ship.
- **Status labels** tell readers what to trust: experimental components may change; deprecated ones say what replaces
  them and when they go.
- **Date the changelog** and write each entry for the reader ("Dialog now returns focus to the element that opened
  it; no change needed in your code").
- **Review periodically** what is out of date, using the questions people still ask as the to-do list.

## Worked comparison

**Generic.** The "Button" page shows six buttons in a row, a props table and a sentence: "Buttons allow users to take
actions." Nobody learns which one to use for "Delete season" or why there are two gray ones.

**Considered.** The page opens with purpose and a live example in the product's language ("Save changes"). "When to
use": primary for the one expected next step; secondary for alternatives; tertiary inside dense rows; danger only
for irreversible actions, after the confirmation pattern. "When not": navigation uses a link. States render in light
and dark. Do and don't: two primary buttons side by side vs. one primary and one secondary, same labels, with the
reason. Accessibility: the button handles focus and the busy announcement; the team supplies a label that names the
outcome. Code examples are copyable; the props table is generated. Status: stable; changelog dated.

## Common mistakes

- **Screenshots instead of live components**, wrong after the first change.
- **Describing appearance without decisions.**
- **One page for everyone**, too technical for designers and too vague for developers.
- **Documentation as a launch project**, never updated after.
- **No place for "when not to use"**, so components spread to the wrong jobs.
- **Private systems published openly by accident**, indexed by search engines.

## Checklist

- [ ] One home, linked from the repository and the design tool, rendering real tokens and components.
- [ ] Sections match the system's level (foundations always; components from level 2; principles, patterns, content
      and changelog from level 3).
- [ ] Each component page has purpose, live example, when and when not, anatomy, variants, states, behavior,
      content rules, accessibility, do and don't, code, status.
- [ ] Guidance gives reasons and limits, with domain content.
- [ ] Agents can find the rules in the repository: token descriptions, a short rules file, typed components, checks.
- [ ] Generated parts are generated; documentation is part of done; status and changelog are current.
