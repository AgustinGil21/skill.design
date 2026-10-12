# Redesigns and migrations

How a designer changes an existing product — its navigation, names, flows, visual language or underlying model —
without breaking what people rely on. A redesign is not a new design on a blank page: it lands on people who have
habits, saved data, bookmarks, documentation, training and trust. Changing those costs them something, and the design
must earn it.

## What it is and why it matters

Every change to an existing product has two sides:

- **The value of the new design**: better structure, clearer flows, new capabilities, a refreshed brand.
- **The cost of change**: relearning, broken habits, broken links and integrations, outdated help articles and
  screenshots, lost trust if something disappears.

A redesign succeeds only when the value clearly exceeds the cost for the people affected, and when the transition is
designed as carefully as the destination.

## Before redesigning: protect what works

- **Find out what people rely on.** Analytics (most used features and paths), support tickets, interviews with heavy
  users, and the workarounds people built around the current design.
- **List what must not break**: frequent paths, keyboard shortcuts, URLs and bookmarks, integrations and exports,
  saved views and filters, accessibility features people depend on.
- **Separate problems from unfamiliarity.** Some complaints about the current design are real problems; some "ugly but
  efficient" screens are loved by experts. Do not remove efficiency for appearance.
- **Frame the redesign** like any other problem: what is wrong, for whom, with what evidence, and what success looks
  like (see [problem framing](20-problem-framing.md)).

## Kinds of change and their costs

| Change | Main cost for people | Mitigation |
| --- | --- | --- |
| **Visual refresh** (colors, type, spacing) | Low: things look different but work the same | Keep layout and labels; announce briefly |
| **Renaming** (labels, features, objects) | Medium: search, habits, documentation break | Redirects in search, "formerly called" notes, updated help |
| **Moving things** (navigation, settings) | Medium to high: people cannot find what they used | Signposts at old locations, search that finds the new location, a transition period |
| **Changing flows** (steps, order) | High for frequent tasks | Test with heavy users, offer the old flow temporarily, guide the first use |
| **Changing the model** (how objects relate, e.g. folders to tags) | Highest: people's mental model must change | Migration of their data, explanation, gradual rollout, support |
| **Removing features** | High for those who used them | Notice in advance, alternatives, export options |

## Designing the transition

### Communicate before, during and after

- **Before**: tell people what is changing, why, and when — especially for admins who must prepare teams.
- **During**: in-product notes at the moment of first contact ("Projects are now called Workspaces. Your content hasn't
  changed."), short and dismissible.
- **After**: updated help, release notes, and a channel for feedback.

### Bridges between old and new

- **Old URLs redirect** to their new equivalents.
- **Search understands old names** and leads to the new locations.
- **Signposts** at old locations for a period ("Billing moved to Settings › Plan").
- **Optional preview or opt-in period** for large changes, with a clear end date.
- **Temporary toggle back** to the old version for complex tools, with feedback collection, when feasible.

### Migrating data and settings

- Carry over everything people configured: saved views, filters, preferences, shortcuts.
- When the model changes, migrate data visibly and verifiably ("Your 14 folders became 14 tags. Review the result.").
- Never silently drop data that does not fit the new model; show what could not be migrated and why.

### Gradual rollout

- Release to a small group first (internal, then a subset of customers), measure, then expand.
- Watch support contacts, task success and guardrails (see [measurement and learning](26-measurement-and-learning.md)).
- Be ready to roll back.

## People affected differently

- **Heavy and expert users** lose the most from change: their speed depends on habit. Involve them early.
- **Administrators** must explain the change to their teams; give them notice, documentation and controls.
- **People using assistive technology** rely on learned structure (heading order, landmarks, shortcut keys); structural
  changes can be disorienting. Test with them.
- **People in other languages**: renamed concepts need new translations, consistent across languages, and updated
  glossaries.
- **People who learned via third-party content** (tutorials, videos, courses) will find instructions that no longer
  match.

## When not to redesign

- When the problems can be fixed with targeted improvements.
- When the cost of change for heavy users outweighs the benefit for occasional users, and there is no way to serve
  both.
- When the motivation is novelty or internal boredom rather than evidence.
- When there is no capacity to manage the transition well.

## Worked comparison

**Change:** a project management tool replaces nested folders with tags.

**Weak redesign.** One day, folders disappear; projects show tags generated from folder names; deeply nested folders
become long combined tags ("Clients/2026/Spain/Active"); saved folder links return 404; keyboard shortcuts for moving
between folders do nothing; help articles still describe folders. Support is flooded; some teams revert to
spreadsheets.

**Strong redesign.**

- Research shows many teams struggle with items that belong in two folders; heavy users value folder shortcuts.
- Tags are introduced alongside folders for two months, with an opt-in "tags view".
- A migration preview shows each team how their folders will map to tags, with editable results.
- Old folder links redirect to the equivalent tag filter; the folder shortcuts open a tag picker.
- Admins receive notice four weeks ahead, with a guide and a date; help articles and translations are updated before
  the switch.
- Rollout to 10 % of workspaces first; task success for "find a project" and support contacts are monitored.

## Common mistakes

- **Redesigning from a blank page**, ignoring habits and data.
- **Removing "ugly" efficient tools** experts depend on.
- **Silent renames and moves.**
- **Broken links and integrations.**
- **No communication to admins** who must support their teams.
- **Big-bang releases** with no way back.

## Checklist

- [ ] What people rely on (paths, shortcuts, URLs, integrations, settings) is known and protected.
- [ ] The redesign is framed with evidence and success criteria, not novelty.
- [ ] The cost of each kind of change is assessed and mitigated.
- [ ] Communication before, during and after is planned, including admins.
- [ ] Redirects, search aliases and signposts bridge old and new.
- [ ] Data and settings are migrated visibly, with nothing silently dropped.
- [ ] Rollout is gradual, measured and reversible.
- [ ] Translations, glossaries and help content are updated with the change.
