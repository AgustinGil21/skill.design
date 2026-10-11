# References and design tools

Senior designers rarely design from memory. Before deciding how a screen works, they look at how good products solve
the same job; before changing a product, they look at the design files the team already has. This file covers how
to use live references (such as Mobbin) and design tools (such as Figma) when the agent has access to them, how to
use references without copying, and what to do when no tool is available.

Tools vary by environment. Check which ones are available in the session (their names usually mention Mobbin,
Figma, a browser or a design canvas) and use them; never assume one exists.

## Live references (Mobbin and similar libraries)

The knowledge base already cites hundreds of Mobbin examples. A live search adds what a fixed base cannot: the
newest patterns, the exact screen type, the right platform.

### When to search

- **Before generating directions** (`workflows/ideate.md`): to see the range of solutions, not to pick one.
- **Before designing an unfamiliar screen type** (`workflows/create.md`): a permissions matrix, a payout flow, a
  match-day lineup.
- **During a review**, to show a concrete alternative to a problem ("this is how others separate brand red from
  error red").
- **When the person asks** "how do others do this?".

### How to search well

- **Search by job, not by style**: "invite team members with roles", "empty state for first project", "failed
  payment recovery", rather than "modern dashboard".
- **Use the right granularity**: screens for a single view, flows for multi-step journeys (onboarding, checkout,
  cancellation), sections for landing-page blocks.
- **Filter by platform** (iOS, Android, web) and, when possible, by category close to the product's domain — and
  also look outside it: games solve onboarding well; banks solve confirmation well.
- **Collect 5–15 examples**, then group them by approach. The groups, not the individual screens, are the insight.

### How to use what you find

1. **Name the approaches**: "three ways products handle this: inline editing, a side panel, a full page".
2. **Note what each solves and costs**, in the terms of this product's audience and stakes.
3. **Take principles, not pixels**: the way a product reveals information progressively, not its colors or layout.
4. **Cite the references** you relied on (link and product name) in directions and reports, so the person can look.
5. **Filter through the design context**: a pattern from a consumer social app may be wrong for a clinic's admin
   tool, however polished it looks.

### Pitfalls

- Copying a popular product's look (it signals "template" and may infringe trade dress).
- Treating "everyone does it" as proof it works; conventions help, but some are dark patterns.
- References from a different platform or audience used without translation.
- Searching after deciding, only to justify the decision.

## Design files (Figma and similar)

Many teams keep the intended design in a design tool. Code and design files often disagree.

### When to read them

- At the start of a project, if the README, docs or the person mention design files: they are part of the evidence
  for the brand and the intended experience (`workflows/start.md`).
- Before building a screen that has a design: implement the design, adapted to the project's components and tokens.
- During a review, to compare what was designed with what was built.

### What to read

- The frames for the screens in scope, at each breakpoint.
- Variables and styles (colors, type, spacing): compare them with the code tokens.
- Components and their variants: they reveal intended states.
- Notes and annotations: they often contain decisions and edge cases.

### How to treat them

- A design file is **intent**, not truth: if the built product differs, find out which one is current before
  "fixing" either.
- Adapt designs to the real system: map design components to code components and design variables to tokens; do not
  paste generated code without integrating it.
- Report differences between design and code as findings, with both sides shown.

Writing to design files (creating frames, diagrams or components) is a separate request; do it only when asked.

## Browsers and screenshots

To see the running product, see [looking at the real interface](33-looking-at-the-real-interface.md) and
`scripts/screenshots.mjs`. A browser tool also lets you test interaction (menus, focus, flows) that screenshots
cannot show.

## When no tool is available

- Use the examples already cited in `knowledge/patterns/` and `knowledge/landing/` (each pattern file links to real
  products).
- Describe the reference approaches in words and offer the person to share screenshots.
- Say that live references were not consulted, so the person knows the range of options may be incomplete.

## Checklist

- [ ] Available tools checked (references, design files, browser) and used where they add evidence.
- [ ] References searched by job and platform, grouped by approach, filtered by the design context.
- [ ] Principles taken, not looks; references cited in the output.
- [ ] Design files treated as intent and compared with the built product.
- [ ] When tools were missing, the output says so.
