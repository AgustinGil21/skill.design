# Measurement and learning

How a designer knows whether a design worked: choosing what to measure before shipping, pairing every success metric
with guardrails, reading results without fooling themselves, and turning what they learn into the next decision.
Measurement is not a report at the end; it is how the design process closes its loop.

## What it is and why it matters

Every design is a hypothesis: "If we change this, people will be able to do that better." Measurement tests the
hypothesis in the real world. Without it, teams cannot tell success from failure, and decisions get made by whoever
argues most confidently.

Good measurement:

- **Is defined before shipping**, so results cannot be reinterpreted to fit hopes.
- **Measures outcomes for people**, not only outputs or activity.
- **Includes guardrails** that catch harm done while improving the main metric.
- **Combines numbers with reasons**: quantitative data shows what happened; qualitative research explains why.

## Outcomes, outputs and activity

| Level | Example | Useful for |
| --- | --- | --- |
| **Output** | "We shipped the new checkout" | Tracking work, not success |
| **Activity** | Clicks, page views, time on page | Diagnosis; often ambiguous |
| **Behavior** | Completed purchases, tasks finished, features used repeatedly | Whether people do what the design intended |
| **Outcome** | Customers get what they needed: orders arrive, invoices get paid, problems get solved | Whether the design created value |

Prefer behavior and outcome measures. Activity metrics are easy to move and hard to interpret: more time on a page can
mean engagement or confusion; more clicks can mean interest or difficulty.

## Kinds of measures

### Task-level measures

- **Task success rate**: the share of attempts that end in the intended result.
- **Time on task**: for frequent tasks where speed matters.
- **Error rate**: mistakes, corrections, undos, failed submissions.
- **Abandonment**: where people leave a flow.
- **Self-reported ease**: a single ease question after a task, or a standardized questionnaire such as the System
  Usability Scale for comparisons over time.

### Product-level measures

- **Activation**: people reaching the first real value (defined per product: "created the first invoice and sent it").
- **Adoption**: use of a feature among the people who could use it.
- **Retention**: people coming back over time, by cohort.
- **Conversion**: moving from one stage to another (trial to paid), measured with quality (see below).
- **Support contacts**: volume and topics of tickets related to the design.

### Quality of conversion

A conversion is only good if the person benefits from it.

- **Regret signals**: refunds, cancellations shortly after purchase, chargebacks, downgrades.
- **Downstream use**: did people who signed up through the new flow actually use the product?
- **Lead quality**: for sales forms, the share of leads that become real conversations.

## Guardrails

Every success metric gets one or more guardrails: things that must not get worse.

| Success metric | Guardrails |
| --- | --- |
| Checkout completion | Payment errors, refunds, support contacts about orders |
| Sign-up rate | Activation rate, spam accounts, misconfigured accounts |
| Notification open rate | Notification opt-outs, uninstalls |
| Time to complete a form | Error rate, data quality |
| Engagement with a feed | Self-reported wellbeing, reports of unwanted content, session regret |
| Upgrade rate | Cancellation and refund rates, complaints |
| Accessibility work shipped | Task success with assistive technology, barrier reports |

When a change improves the success metric and harms a guardrail, it is not a success.

## Defining measures before shipping

Write a short measurement plan:

```
Change: Show the delivery date before the payment step.
Hypothesis: People abandon at payment because they discover the delivery date too late.
Primary measure: Checkout completion rate.
Guardrails: Orders cancelled before shipping; support contacts about delivery.
Segments: New vs. returning customers; mobile vs. desktop; country.
Expected direction and minimum meaningful change: Completion up by at least 2 points.
Duration: Four full weeks, to cover weekly patterns.
Decision rule: Keep if completion improves without guardrail regressions; investigate if mixed.
```

Defining this beforehand prevents three common traps: moving the goalposts, cherry-picking segments, and stopping
measurement when the numbers look good.

## Reading results without fooling yourself

- **Compare against a baseline**, ideally a control group (an experiment) or at least a comparable period before.
- **Watch for seasonality and external events**: holidays, campaigns, outages, competitors' changes.
- **Look at segments**, but decide which in advance; slicing until something looks significant finds noise.
- **Novelty effects**: new designs can get a temporary boost (or dip) as people react to change. Measure long enough.
- **Regression to the mean**: a metric that hit an unusual low will often rise on its own.
- **Small numbers**: percentages from few events swing wildly; show counts and confidence intervals.
- **Survivorship**: measuring only people who completed a flow hides those who left.
- **Correlation**: a feature used by retained customers does not necessarily cause retention.

### When you cannot run experiments

Low traffic, B2B products and high-stakes changes often cannot be A/B tested meaningfully. Alternatives:

- **Before/after comparisons** with care for seasonality, and explicit uncertainty.
- **Staged rollouts** to a subset of customers, with qualitative follow-up.
- **Task-based testing** before release (see [research and testing](16-research-and-testing.md)).
- **Direct observation** and interviews after release.
- **Leading indicators** (errors, support contacts) that move faster than outcomes.

Be honest about the weaker evidence: "Completion went up after the change; we could not rule out the seasonal
increase."

## Unintended consequences

Designs change behavior in ways nobody planned. Look for:

- **Shifted problems**: fewer errors in the form, more support tickets about wrong data.
- **Gaming**: people (or teams) optimizing the metric instead of the goal.
- **Harm to non-users**: recipients of more emails, neighbors of more deliveries, people tagged in content.
- **Exclusion**: improvements for the majority that create barriers for people using assistive technology or other
  languages. Segment by language, device and, where possible and consented, accessibility needs.
- **Long-term erosion**: short-term gains that reduce trust.

## Qualitative learning after release

Numbers say what; people say why.

- **Read support tickets and feedback** about the change in the first weeks.
- **Watch session recordings** (with consent and masking) where numbers show trouble.
- **Talk to a few people** who used the new design, and to some who stopped.
- **Look for workarounds**: exporting data, copying information elsewhere, contacting support for tasks the interface
  should handle.

## Closing the loop

1. **Compare results with the plan**: success, guardrails, segments.
2. **Decide**: keep, adjust, roll back, or investigate further.
3. **Record the learning** next to the decision record (see [decisions and trade-offs](21-decisions-and-tradeoffs.md)):
   what happened, what was learned, what changed in our understanding.
4. **Share it**, including failures. A team that hides failed experiments repeats them.

## Instrumentation and privacy

- **Track events by goal**, named clearly and documented, not "track everything".
- **Respect consent**: in many jurisdictions analytics requires consent; design measurement that works with partial
  data.
- **Minimize personal data**; aggregate where possible; mask sensitive inputs in recordings.
- **Make instrumentation part of the design**: the events needed to measure the hypothesis are specified together with
  the screens (see [handoff and engineering](27-design-handoff-and-engineering.md)).

## Worked comparison

**Change:** a simplified sign-up flow for a team collaboration tool, from five fields to two.

**Weak measurement.** After launch, sign-ups rise 30 %. The team celebrates. Three months later, paid conversion has
not moved and sales complain that most new workspaces are empty.

- Success measured only by sign-ups.
- No guardrail on activation or lead quality.
- No segment analysis: most extra sign-ups came from a campaign that started the same week.

**Strong measurement.**

- Plan defined before launch: primary measure "workspaces where at least two people collaborate on a document in the
  first week"; guardrails: spam sign-ups, sales-qualified leads, support contacts about setup.
- Staged rollout to half of new visitors for four weeks, excluding campaign traffic from the comparison.
- Result: sign-ups up, activated workspaces unchanged, spam up. Interviews show the removed fields (team size, use
  case) helped tailor the onboarding.
- Decision: keep the shorter sign-up, move team size and use case to the first step of onboarding, add spam
  protection. Re-measure.

## Common mistakes

- **Measuring outputs** ("shipped") or activity ("clicks") as success.
- **No guardrails.**
- **Defining success after seeing results.**
- **Stopping as soon as numbers look good.**
- **Ignoring segments** where the change hurt people.
- **Numbers without reasons**, or reasons without numbers.
- **Never recording what was learned.**

## Checklist

- [ ] The hypothesis, primary measure, guardrails, segments, duration and decision rule are defined before shipping.
- [ ] Measures focus on behavior and outcomes, with conversion quality.
- [ ] Results are compared against a baseline or control, with seasonality and novelty considered.
- [ ] Unintended consequences and excluded groups were looked for.
- [ ] Qualitative evidence explains the numbers.
- [ ] The decision and the learning are recorded and shared.
- [ ] Instrumentation is specified with the design and respects consent and privacy.
