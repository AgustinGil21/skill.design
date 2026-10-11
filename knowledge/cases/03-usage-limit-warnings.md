# Case: warning before people run out of AI credits

## Context

**Product (fictional):** Draftory, a writing assistant for small agencies. Plans include a monthly number of AI
credits; one credit is roughly one generation, but long documents use more.

**People:** agency writers (who use credits) and agency owners (who pay and choose the plan).

## The problem as first stated

"Customers are angry when they run out of credits mid-project. Add an upgrade pop-up when they hit the limit."

### Reframing

Hitting the limit is the end of a story that started earlier: people **cannot predict** consumption, **do not see**
it coming, and the person who hits the wall (a writer) is often not the one who can fix it (the owner). An upgrade
pop-up at the wall serves the business at the worst moment for the user.

## Evidence

| Type | Finding |
| --- | --- |
| **Known** (billing data) | Most teams that hit the limit do so in the last week of their cycle; a share of them cancel within two months |
| **Known** (support) | Complaints mention "no warning" and "didn't know long documents cost more" |
| **Believed** (interviews with owners) | Owners prefer to be warned and decide, rather than have writers blocked |
| **Guessed** | A small paid top-up would be preferred to upgrading the whole plan |

## Constraints

- Credits reset monthly; top-ups can be sold if billing supports it (engineering: yes, in a later release).
- Consumption per generation varies; it can be estimated before generating for long documents.
- Writers cannot see billing; owners can.

## Alternatives

| Option | Strengths | Weaknesses |
| --- | --- | --- |
| **A. Upgrade pop-up at 100 %** | Simple; direct revenue | Blocks work at the worst moment; writer cannot act; feels like a trap |
| **B. Usage meter always visible** | Predictable | Ignored over time; does not reach the owner |
| **C. Threshold warnings (75 %, 90 %) to owner and writers** | Time to decide | Can become noise if thresholds are wrong |
| **D. Cost preview before expensive generations** | Explains consumption | One more step for long documents |
| **E. Grace: finish the current task when the limit is hit** | Avoids losing work | Small cost to the business |
| **F. C + D + E + meter in settings + request flow writer → owner** | Prediction, warning, no lost work, the right person decides | More pieces to build |

## Decision

**F**, released in two steps (top-ups later):

- **Meter**: in the account menu and on the usage page, with days until reset and an estimated end of credits at the
  current pace.
- **Warnings**: at 75 % an in-app notice to owners (and email); at 90 % a notice to everyone on the team, with "Ask
  your owner for more credits" for writers.
- **Cost preview** for generations estimated to use more than 5 credits: "This will use about 8 credits (42 left)".
- **Grace**: a generation started before reaching 0 always completes; at 0, generation is paused with a clear state,
  editing and exporting still work.
- **At the limit**: owners see options (top-up when available, upgrade, wait until reset on [date]); writers see
  "Credits are used up until [date]. We've let [owner name] know" with an option to send a note.

**Given up:** some immediate upgrade revenue at the wall, in exchange for trust and lower churn (to be measured).

## States

| State | Writer sees | Owner sees |
| --- | --- | --- |
| Normal | Nothing extra; meter in menu | Meter |
| 75 % | Nothing | Notice + email with projection |
| 90 % | Banner: "10 % of this month's credits left — resets May 1" | Banner with options |
| Expensive generation | Cost preview | Cost preview |
| 0 % | Generation paused; editing works; request sent | Options: top-up, upgrade, wait |
| Reset | Banner removed | Summary of last month's use |
| Plan changed | Updated meter immediately | Confirmation with new limits |

### Edge cases

- **Team members in different time zones**: the reset date shown with time zone.
- **Generation in progress when the limit is reached**: completes (grace).
- **Owner absent**: the request is visible to all admins; after 24 h, a reminder.
- **Annual plans with monthly credits**: the reset is monthly; the renewal date is separate.
- **Refunds of failed generations**: credits returned and shown in the usage history.

## Copy (by function)

- Warnings state **the fact, the date and the options**, not fear. "You've used 90 % of this month's credits. They
  reset on May 1. Options: buy a top-up, upgrade, or keep going until the reset."
- No guilt or urgency language ("Don't lose your momentum!"); see
  [psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md).
- Numbers formatted per locale; dates in the person's format and time zone.

## Accessibility

- Banners are not announced repeatedly on every page; announce once when the threshold is crossed.
- The meter has a text equivalent ("158 of 500 credits used, 342 left") and does not rely on color.
- The paused state of the generate button explains why (not just disabled).

## Testing and measurement

- **Concept test** with owners (5) and writers (5) on the 90 % and 0 % states: owners valued the projection; writers
  valued keeping editing.
- **Metrics**: churn within two months after hitting the limit (primary); upgrade and top-up rates (secondary);
  "no warning" tickets; guardrail: notification opt-outs (too many warnings).

## Result and limits

Churn after hitting the limit fell and upgrade rate stayed similar (fictional), because owners upgraded earlier and
by choice. The cost estimate is sometimes off for very long documents; the preview says "about". Thresholds remain to
be tuned per plan.

## Knowledge applied

[Usage, limits and subscriptions](../patterns/usage-limits-and-subscriptions.md) ·
[psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md) ·
[interface writing](../04-interface-writing.md) ·
[permissions, identity and scope](../patterns/permissions-identity-and-scope.md) ·
[measurement and learning](../26-measurement-and-learning.md).
