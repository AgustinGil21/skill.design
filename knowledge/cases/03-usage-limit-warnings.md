# Case: warning before people run out of AI credits

## Context and evidence status

**Fictional case.** Draftory, its plan rules, people, observations, amounts and messages are invented examples.
Evidence labels describe a hypothetical product investigation, not real billing analysis or completed interviews.
The protocol and metrics are proposed; this case does not claim a measured retention or revenue result.

Draftory is a writing assistant for small agencies. A plan includes monthly AI credits.
Generation cost varies with document length, so a credit is not a reliable promise of one finished document.
Writers consume credits; owners pay and choose plans; administrators may manage access without billing authority.

The user's task is completing client work while understanding the resource constraint.
The business task is charging sustainably without surprising people or pushing them into unnecessary purchases.
Those interests overlap when people can predict demand and choose their response before work is blocked.

A neutral, practical tone fits resource planning. Brand warmth is compatible with that tone,
but motivational language should not obscure price, reset timing or the fact that manual editing still works.

## Reframing the initial request

The fictional request is: "People complain at the limit. Show an upgrade pop-up."
An upgrade prompt arrives after the planning failure and may address someone without purchasing authority.
The design question becomes: **How can a team anticipate consumption and coordinate an informed response?**

Separate four problems:

- Understanding what consumes credits and how much a planned action could cost.
- Seeing the current allowance and its reset schedule.
- Reaching the person who can approve a change without exposing unnecessary billing information.
- Preserving work when generation is unavailable.

A meter addresses visibility but not necessarily comprehension.
A warning addresses attention but not authority.
An upgrade flow addresses payment but not continuity.
The design needs these responsibilities to connect rather than letting one banner stand in for all of them.

## Evidence and questions before deciding

| Fictional evidence | Useful inference | Limit |
| --- | --- | --- |
| Exhaustion clusters late in billing cycles | Reset timing matters | Teams may simply plan work late |
| Complaints mention document cost | Explain consumption better | A clearer price may still be unaffordable |
| Owners request warning before interruption | Advance notice may help planning | Preferences do not predict action |
| Writers cannot access billing | Purchase prompts may reach the wrong role | Some writers may also own an account |
| Cancellation follows some exhausted cycles | Investigate trust and value | Timing alone does not establish causation |

A real analysis would compare exhausted and non-exhausted teams with attention to tenure, plan size and workload.
Teams with unusually high demand may differ before they hit a limit, so their later cancellation is not a clean
estimate of the limit's effect. Support reports reveal failure mechanisms, not their population frequency.

Inspect an individual generation ledger to understand reserved, consumed and returned credits.
If the interface derives its meter from a different system than billing, a polished warning can still be wrong.
Audit what happens when several writers start expensive jobs at the same time.

Questions that determine the design:

- Is cost known before starting, bounded by a maximum or only estimated?
- Can a started generation finish safely when the remaining balance changes?
- Do failed or cancelled generations consume credits, and when are adjustments visible?
- Does the allowance belong to a workspace, person, project or several combined pools?
- What does a plan change do immediately, and what waits until the next cycle?
- Can a writer request help without revealing document content to the owner?
- Which owners are reachable, and what happens when all are absent?
- Is the reset tied to an account time zone or a fixed service timestamp?

These answers belong in a service contract before copy promises them.
An estimate prefixed with "about" does not justify an unbounded charge or unclear consent.

## Alternatives with trade-offs

| Situation | Option | Why consider it | Cost or limitation |
| --- | --- | --- | --- |
| Purchaser meets a known hard cap | Upgrade at the limit | Gives an immediate route | Arrives too late for planning |
| Usage is frequent and predictable | Persistent meter | Makes the resource visible | Can become background noise |
| Owner needs planning time | Threshold warnings | Creates a decision moment | Fixed thresholds may be mistimed |
| Action cost varies materially | Cost preview | Connects intent to consumption | Adds friction if shown too often |
| In-flight work is at risk | Reservation or bounded grace | Protects a started task | Needs a defined cost policy |
| Writer cannot purchase | Request-to-owner flow | Connects the correct roles | Requests can become noise |
| Work can wait | Explain reset and alternatives | Supports a no-purchase choice | Does not solve an urgent deadline |

**Recommendation: visibility, selective warnings, cost preview and an authority-aware request flow.**
Preserve completed work and permit manual editing and exporting while generation is paused.
The fictional rollout defers paid top-ups until billing and support can explain them reliably.

A limit-only pop-up is rejected because it does not solve anticipation or authority.
A meter-only approach is rejected because a busy owner may rarely enter the writing interface.
Warning on every generation is rejected because ordinary actions would repeatedly interrupt the task.
Automatic purchase is not included: it would require an explicit spending agreement and controls for overage.

A no-purchase path is a real alternative, not a hidden link under paid choices.
A team may wait for reset, shorten a generation, reuse existing output or continue writing manually.
If those actions do not fit the product's capabilities, do not invent them as reassuring copy.

## The proposed decision in detail

The usage page shows the current allowance, consumed credits, pending reservations and next reset.
The account menu offers a compact summary, giving daily visibility without crowding the editor.
A writer sees resource availability even when invoice details remain restricted.

Fictional warning thresholds of 75% and 90% are initial test settings, not universal recommendations.
At the earlier threshold, notify the owner with planning context.
At the later threshold, give writers a concise notice with role-appropriate next steps.
A small team with highly variable jobs may need an action-based warning rather than percentage thresholds.

A forecast appears only when recent usage supports a useful estimate.
Label its basis and uncertainty; a recent client campaign can make a simple daily average misleading.
An empty or newly reset account may have no forecast, which is preferable to a false exhaustion date.

Show cost preview when consumption is substantial relative to the remaining allowance or unusually uncertain.
A fictional fixed threshold of five credits can seed a prototype, but it should not become a permanent rule
without considering plan size, task risk and preview fatigue.
The preview distinguishes estimated consumption from a guaranteed maximum if the system supports one.

Before processing, reserve the agreed resource or apply a defined bounded-grace policy.
In this scenario, accepted jobs complete under that policy; later requests may be refused.
Engineering must validate simultaneous requests and retries before the interface promises continuity.
Grace covers the accepted task, not unlimited repeated work after the limit.

At exhaustion, generation pauses but documents remain accessible and editable.
The owner sees available plan options and the precise reset time.
The writer sees whether an owner notification was actually sent and can make a private request when appropriate.
A notification attempt is not described as delivered or read without evidence.

## States and transitions

| State | Writer experience | Owner experience |
| --- | --- | --- |
| Normal allowance | Compact usage access | Usage and billing access |
| Usage loading | Last known balance identified as stale | Same, without an invented zero |
| Early warning | Usually no interruption | Planning notice and reset context |
| Late warning | Remaining resource and next steps | Options with costs and timing |
| Expensive request | Cost estimate before submission | Same preview if acting as writer |
| Reserved work | Job can proceed under stated policy | Pending use distinguished from consumed |
| Limit reached | Generation paused; documents retained | Purchase, wait or other available choices |
| Request pending | Recipient and request status | Review request without private content |
| Request failed | No false delivery claim | Retry or alternate authorized contact |
| Payment pending | Existing limit remains until confirmed | Payment state and receipt destination |
| Allowance changed | Authoritative updated balance | Confirmation of effective allowance |
| Reset | Fresh cycle and current availability | New cycle separated from invoice renewal |
| Refund pending | Adjustment still processing | Same ledger state |
| Offline or stale | Current availability unknown | Reconnect before purchase assumptions |
| Permission changed | Role-appropriate action refreshed | Authority checked before payment |

Concurrent usage can change the balance between preview and submission.
If the request can no longer proceed on the shown terms, explain the changed resource and ask for a new decision.
Do not silently downgrade the requested output or charge an unexpected overage.

## Edge cases and service boundaries

Annual billing with monthly credits has two schedules. Show allowance reset separately from subscription renewal.
For team members in different time zones, show the account's reset moment with understandable local context.
A date alone can imply availability too early when a writer is ahead of the billing time zone.

Owners may be absent or inactive. Route requests to authorized recipients and expose an alternative support path
when appropriate; repeatedly notifying the same unavailable owner does not solve the work interruption.
Avoid making arbitrary administrators purchasers merely because they are reachable.

If top-ups are introduced later, distinguish their expiry and consumption order from the recurring allowance.
A combined meter can be concise, but people need enough detail to understand what resets and what carries over.
A failed payment is a payment problem, not a reason to relabel already consumed credits.

A failed generation may return credits immediately or after reconciliation.
The ledger should show the actual state; an optimistic refund label cannot substitute for the balance update.
Users need a job reference for support without exposing the document text in analytics or notifications.

## Copy by moment and market

| Moment | Function | Fictional English example |
| --- | --- | --- |
| Meter | State available resource | "342 credits remaining this cycle" |
| Cost preview | Connect action to consumption | "Estimated use: 8 credits. Available: 42." |
| Forecast | Mark a projection as uncertain | "At your recent pace, credits may run out before reset." |
| Warning | Give fact, timing and options | "Credits are running low. Review use or ask the owner." |
| Exhaustion | Explain the boundary and retained work | "Generation is paused. You can still edit and export." |
| Request sent | Confirm actual routing | "Your request was sent to the workspace owner." |
| Request failed | Make the next step possible | "The request was not sent. Try again." |
| Reset | Distinguish resource from billing | "Credits reset on the date shown; billing is unchanged." |
| Refund | Describe a confirmed adjustment | "Credits for the failed generation have been returned." |

The functional rule is to state consequence and choice without manufacturing urgency.
The exact English phrase "running low" may be too vague in another market; a concrete remaining amount can work better.
Do not imply that reaching a limit deletes documents when it only pauses new generation.

Localize numbers, currencies, dates and time zones using the person's settings and the account's billing facts.
Translate whole cost messages so variable placement and grammatical agreement can change naturally.
Use the appropriate plural system for credits and days; do not assemble an English noun with a numeric suffix.
Formal address and ownership terms need review in each market, especially where "owner" suggests legal ownership.

For right-to-left layouts, keep numeric ranges, account identifiers and currency strings directionally stable.
Test long translated action names with the paid and no-purchase options equally discoverable.
A billing currency may differ from display language; translation must not silently imply currency conversion.

## Accessibility: requirements and recommendations

Relevant WCAG 2.2 requirements for implementation include:

- **1.4.1 Use of Color, A:** remaining, exhausted and pending usage have text or other non-color meaning.
- **1.3.1 Info and Relationships, A:** the meter's label and related values are programmatically connected.
- **4.1.2 Name, Role, Value, A:** controls and any meter expose meaningful state.
- **4.1.3 Status Messages, AA:** changed balances and request outcomes are available to assistive technology.
- **2.1.1 Keyboard, A:** usage details, request actions and purchase alternatives are operable without a pointer.
- **3.3.4 Error Prevention, AA:** applicable purchase transactions allow reversal, checking or confirmation.

As a recommendation, announce a newly reached threshold once in the current interaction rather than on every page.
A continuously updated meter should not continually interrupt writing through a live region.
Keep the reason for an unavailable generation action visible; a disabled control alone is insufficient explanation.
If the control cannot receive focus, its explanation must be reachable elsewhere in the ordinary reading order.

A modal cost review may be justified for a consequential purchase or unusually costly action.
A routine resource notice is usually better inline, preserving writing focus and reducing interruption.
Those are task-based recommendations, not a WCAG rule about which component to use.

## Worked comparison: the same blocked writer

**Weak version.** A writer finishes a long prompt and presses Generate.
An upgrade modal appears with a large paid action and no reset information.
The writer cannot purchase, assumes the document may be lost and retries from another tab.
The second attempt produces another upgrade prompt without helping the team coordinate.

**Stronger version.** Before the expensive action, the writer sees estimated cost and remaining shared credits.
When another teammate consumes the remaining allowance, the submission explains the changed balance.
The document remains editable; reset timing and a request-to-owner action are visible.
The owner receives the request with available choices and can decide without seeing the writer's private content.

The stronger design does not guarantee enough credits for the project.
It improves prediction, agency and continuity while accepting that some people will deliberately choose not to buy.

## Proposed test protocol

Recruit writer-only users, purchasing owners and people with combined roles.
Use fictional documents and billing accounts with no real payment method.
Test the two sides of the request handoff, not just isolated warning screenshots.

1. Ask a writer to predict whether a long document can be generated from a shown balance.
2. Introduce simultaneous use and observe their explanation of a changed allowance.
3. Reach the limit and ask the writer to continue work and obtain help without prompting a purchase.
4. Ask the owner to compare waiting, a plan change and any actually available top-up.
5. Simulate payment delay, failed request delivery and returned credits.
6. Repeat a reset-time task across differing locales and time zones.

Record misunderstanding of cost, mistaken belief that work is lost, unauthorized purchase attempts and assistance.
Observe whether owners understand when a change takes effect, not merely whether they click Upgrade.
Check keyboard and screen reader access to the paused state and alternatives.
A prototype tests comprehension; ledger reconciliation, concurrency and billing need integration validation.

## Metrics, guardrails and limits

Measure unexpected blocks through explicit feedback and limit-related support, normalized by eligible team usage.
Track successful owner requests, time until an authorized decision and continuity of editing after exhaustion.
A decrease in complaints may reflect reduced use, so inspect active writing and generation demand alongside it.

Retention after a limit event is a longer-term outcome with substantial confounding.
Compare cohorts carefully and avoid claiming that warnings caused a change from a simple before/after chart.
Upgrade and top-up rates are secondary business measures, not proof of informed consent or user success.

Guardrails include notification opt-outs, repeated unanswered requests, estimate error, ledger discrepancies,
unexpected charges, generation failures and support burden after plan changes.
Define unacceptable billing or data-loss failures before rollout rather than balancing them against revenue afterward.
Assess differences by plan, role and language; a global average may hide a writer-only failure.

Reconsider fixed thresholds if consumption is bursty, forecasts are unstable or owners act too late despite noticing.
If costs cannot be bounded, redesign the consent and reservation model before polishing estimates.
If a plan is structurally unsuitable for ordinary customer work, clearer warnings cannot fix the commercial mismatch.

## Review checklist

- [ ] Resource visibility, cost explanation, authority and continuity are treated separately.
- [ ] Warning thresholds and previews reflect meaningful risk rather than arbitrary percentages alone.
- [ ] Accepted-job behavior matches an implemented reservation or grace policy.
- [ ] Reset, renewal, pending use and returned credits are distinguishable.
- [ ] Request delivery and payment state are represented truthfully.
- [ ] No-purchase choices remain understandable and operable.
- [ ] Localized billing facts and accessibility paths have been tested.
- [ ] Measurement includes surprise, estimate accuracy and unwanted interruption.

## Knowledge applied

[Usage, limits and subscriptions](../patterns/usage-limits-and-subscriptions.md) ·
[psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md) ·
[interface writing](../04-interface-writing.md) ·
[permissions, identity and scope](../patterns/permissions-identity-and-scope.md) ·
[measurement and learning](../26-measurement-and-learning.md).
