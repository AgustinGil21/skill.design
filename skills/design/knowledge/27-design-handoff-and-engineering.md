# Design handoff and working with engineering

How a designer turns a design into working software together with engineers: specifying behavior and not just
pictures, writing acceptance criteria, understanding technical limits, negotiating scope with visible trade-offs, and
reviewing what was built. "Handoff" is a misleading word: good teams collaborate from framing to release, and the
designer's job is not finished until the real product works.

## What it is and why it matters

Most of the distance between a good design and a good product is lost in translation:

- Mockups show one state; software has dozens.
- Mockups show ideal content; software receives real, messy data.
- Mockups do not specify keyboard behavior, focus, errors, timing or loading.
- Engineers fill the gaps with reasonable guesses that differ from what the designer imagined.

Good collaboration closes these gaps early and cheaply.

## 1. Involve engineering from the start

- **Share the frame** (problem, people, success) before any design exists. Engineers often know constraints,
  existing capabilities and cheaper alternatives.
- **Explore together**: a technical spike can answer a design question faster than another mockup ("can we show live
  availability?").
- **Ask about data**: what the system actually knows, how fresh it is, how fast it responds, which errors it can return.
  These answers shape the states table (see [real state and verification](08-real-state-and-verification.md)).
- **Agree on what is risky** to build and test that part first.

## 2. Specify behavior, not only appearance

A complete specification for a screen or component covers:

| Area | What to specify |
| --- | --- |
| **Layout and responsive behavior** | Breakpoints, what collapses, what must stay visible, min and max widths |
| **Content rules** | Maximum lengths, wrapping and truncation, empty values, number and date formats per locale |
| **States** | Every state from the states table, with copy for each |
| **Interaction** | What each control does, hover/focus/active states, keyboard behavior, touch behavior |
| **Focus management** | Where focus goes when dialogs open and close, after submit, after delete |
| **Validation** | When fields validate, the messages, how errors are announced |
| **Loading and timing** | Feedback for short and long waits, timeouts, optimistic updates and rollbacks |
| **Errors** | Each known error, its message, its recovery action |
| **Motion** | Durations, easing, what animates, the reduced-motion version |
| **Accessibility** | Roles, names, announcements, contrast, target sizes |
| **Localization** | Strings with keys and context, plural rules, RTL behavior |
| **Analytics** | Events needed to measure success and guardrails |

Not every screen needs a document. A small change may need three sentences; a new flow needs the full list. What
matters is that every item is decided by someone, deliberately.

## 3. Acceptance criteria

Acceptance criteria turn the design into checkable statements. Write them so anyone can verify them.

```
Feature: Invite people to a project

Given I am a project owner
When I enter an email address that already belongs to a member
Then I see "Laila Haddad is already a member" next to the field
And the Invite button stays enabled for other addresses

Given I invite 3 people and one invitation fails because the address bounced
Then I see "2 invitations sent. 1 couldn't be delivered: ana@exmple.com"
And the failed address stays in the field so I can correct it

Given I use only a keyboard
When I open the invite dialog
Then focus moves to the email field
And Escape closes the dialog and returns focus to "Invite people"

Given the interface language is German
Then no label in the dialog is truncated at 360 px width
```

Good criteria cover the happy path, the main errors, accessibility and at least one extreme content case.

## 4. Technical limits and their design consequences

Many design problems are technical limits in disguise. Learn to ask about them:

| Limit | Design consequence |
| --- | --- |
| The API is slow for this query | Loading states, caching, showing stale data with a timestamp, a different query |
| Data is only updated nightly | Show "as of" times; do not design real-time expectations |
| The operation cannot be undone in the backend | No "undo"; preview and confirm instead |
| Requests can time out with unknown outcome | Design the "unknown" state and safe retries (see [states, transitions and concurrency](23-states-transitions-and-concurrency.md)) |
| A third-party component cannot be styled | Choose around it, or accept its look and document the exception |
| The platform does not support a pattern natively | Use the native pattern instead, or budget for the custom one including accessibility |
| Localization strings are limited in length by another system | Design copy and layout within that limit, or fix the limit |

When a limit blocks the experience the person needs, say so plainly and propose alternatives: "If we can't make this
undoable, we need a preview step; that adds one screen."

## 5. Negotiating scope with trade-offs visible

Deadlines force cuts. Make the consequences of each cut visible, so the team cuts the least harmful parts.

| Candidate cut | Consequence for people | Recommendation |
| --- | --- | --- |
| Bulk editing | Power users edit one by one for now | Acceptable for the first release |
| Conflict detection when two people edit | Silent overwrites of colleagues' work | Do not cut; data loss |
| Empty state illustrations | Plainer first impression | Acceptable; keep the text and action |
| Keyboard support in the new picker | Keyboard and screen reader users cannot complete the task | Do not cut; a barrier, and a requirement |
| Animation polish | Less delightful transitions | Acceptable |
| Error messages for each failure | Generic errors; more support contacts | Keep at least the most frequent errors |

Rules of thumb:

- **Cut features, not quality** of what ships: a smaller feature that works in all states beats a larger one that
  fails at the edges.
- **Never cut accessibility requirements, honesty or data safety** to meet a date.
- **Record what was cut and when it will be revisited.**

## 6. Design and code correspondence

- **Use the design system's components and tokens** in designs; name things as they are named in code.
- **Mark deviations** from the system explicitly, with the reason.
- **Share real assets**: icons as SVG from the system, images in the right formats and sizes, copy in the string files.
- **Prototype in code** for interactions that static tools cannot express (timing, gestures, real data).

See [design systems](18-design-systems.md).

## 7. Reviewing what was built (design QA)

Review the real product, in the real environment, with real data.

### Visual QA

- Spacing, alignment, typography and color match tokens.
- Light, dark and other themes.
- Breakpoints, including intermediate widths.
- The longest language and RTL if shipped.

### Functional QA

- Every state from the states table can be reached and looks right.
- Errors, retries, cancels and timeouts behave as specified.
- Keyboard, focus and screen reader behavior.
- Performance: no layout shifts, responsive interactions.

### Reporting issues

Report issues like review findings (see [review](06-review.md)): what, where, evidence (screenshot, video, steps),
expected vs. actual, severity. Group cosmetic issues; prioritize barriers and misleading states.

## 8. After release

- Check the measures and guardrails defined before release (see [measurement and learning](26-measurement-and-learning.md)).
- Watch support channels for problems related to the change.
- Keep design and code in sync: update the design files when the built product differs for good reasons.

## Working relationship

- **Respect expertise in both directions**: engineers decide how; designers decide what the person experiences; both
  discuss why.
- **Ask, don't assume**: "Is this hard?" early saves weeks.
- **Explain the reason behind design details**, so engineers can make good calls when something is unspecified.
- **Be present during building**: quick answers to small questions prevent big drifts.

## Worked comparison

**Feature:** a file upload area in a document management tool.

**Picture handoff.** A mockup of a dashed box with "Drag files here or browse", and one image of three files uploading
with progress bars. Engineering builds it. In production: large files fail silently after a timeout; duplicates are
uploaded twice; the browse button cannot be reached by keyboard because the whole box is a div with a click handler;
the progress bars jump to 100 % before processing finishes; German labels overflow.

**Behavior handoff.**

- States table: idle, dragging over, uploading (per file), processing (per file), done, failed (with reason: too large,
  unsupported type, network), duplicate detected, partially done.
- Content rules: file names truncate in the middle with the full name on focus; sizes formatted per locale.
- Interaction: a native button "Choose files" inside the drop area; Enter and Space open the file picker; drag and drop
  is an enhancement, not the only path.
- Feedback: upload and processing shown as separate stages; "Uploaded, processing…" until the server confirms.
- Errors: specific messages per failure with "Try again" for network errors and "Choose a smaller file (max 2 GB)" for
  size.
- Duplicates: "contract-2026.pdf already exists in this folder. Replace it or keep both?"
- Acceptance criteria for each state, keyboard, screen reader announcements and the German layout at 360 px.

## Common mistakes

- **Handing off pictures** and expecting behavior to emerge.
- **Designing without knowing what the system returns.**
- **Cutting quality instead of scope.**
- **Treating accessibility as optional under deadline pressure.**
- **Never reviewing the built product.**
- **Design files that drift from reality.**

## Checklist

- [ ] Engineering was involved from framing; technical risks were tested early.
- [ ] Behavior is specified: states, content rules, interaction, focus, validation, timing, errors, motion,
      accessibility, localization, analytics.
- [ ] Acceptance criteria cover the happy path, main errors, accessibility and extreme content.
- [ ] Technical limits were translated into design decisions.
- [ ] Scope cuts were negotiated with visible consequences; requirements were not cut.
- [ ] The built product was reviewed visually and functionally, with real data and devices.
- [ ] Measurement after release is in place.
