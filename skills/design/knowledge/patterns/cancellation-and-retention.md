# Trials, renewals, cancelling and retention

How a subscription starts, renews and ends. Cancelling is where a product shows whether it respects people: it is also
one of the most regulated flows in consumer software, and one of the most manipulated. This pattern covers free
trials, renewal reminders, the cancel flow, retention offers, pausing, what happens after cancelling, and the legal
landscape a designer must know about.

See also [usage, limits and subscriptions](usage-limits-and-subscriptions.md) (plans, meters, upgrading),
[failed payments](failed-payments.md), [checkout](checkout-and-scheduling.md),
[ethical persuasion](../12-psychology-and-ethical-persuasion.md) and the
[flows and dark patterns catalog](../slop/07-flows-and-dark-patterns.md).

## The problem and who has it

- **People who want to stop paying**: because they do not use it, money is tight, they switched, the trial was a
  test, or they subscribed by accident. They want certainty that it is done and that they will not be charged again.
- **People unsure whether to stay**: a pause, a cheaper plan or a reminder of what they would lose can genuinely
  help them.
- **The business**: wants to keep revenue and learn why people leave.

What it costs when done badly: chargebacks, complaints, app-store refunds, regulatory action and a reputation that
spreads ("impossible to cancel"). Obstructed cancelling also hides the real churn signal the business needs.

## Questions to ask before deciding

- **Where did the subscription start?** On the web, in the iOS or Android store, through a partner (a carrier, a
  bundle)? Each controls who can cancel and how.
- **Which markets does the product serve?** Rules differ (see the legal section) and the strictest market usually
  sets the design.
- **What happens to the person's data and content** after the period ends? Kept, read-only, deleted after a time?
- **Is there a trial, and does it convert to paid automatically?**
- **What real alternatives exist**: pause, downgrade, a cheaper plan, a billing date change?
- **What does the business need to learn** from people leaving, and can it learn it without blocking them?

## Alternatives and how to choose

| Situation | Option | Why | What it costs |
| --- | --- | --- | --- |
| Most subscriptions | **Direct cancel**: one confirmation that states the end date | Certainty, compliance, trust | Fewer saves |
| Usage is seasonal or temporary | **Pause** offered beside cancel | Real alternative people want | Needs billing support; must resume as stated |
| Price is the reason | **Downgrade or cheaper plan** beside cancel | Keeps people who still value the product | Revenue per person drops |
| The business needs reasons | **Optional reason question**, skippable, after or beside the cancel action | Learning without a toll | Lower response rate than a forced survey |
| A meaningful offer exists | **One retention offer** on the same screen as a visible cancel action | A genuine choice | Must be symmetric in weight and honest in terms |
| App-store subscriptions | **Explain and link** to the store's subscription page | Only the store can cancel | A context switch the product cannot avoid |

Do not use: cancel only by phone or chat when people subscribed online, mandatory surveys, chains of retention
screens, guilt, countdown offers, or ending access immediately for people who cancel early.

## Starting a trial: design the end at the beginning

The cancel flow starts at the trial screen. Good trial screens show a **timeline**: today (access starts), a reminder
before the end, the day of the charge, the amount, and that cancelling before then costs nothing
([Headspace](https://mobbin.com/screens/17e4ce60-0851-40be-92af-336be1220857),
[foodpanda](https://mobbin.com/screens/5c330e96-9e24-4420-a703-7612ab830a4b),
[Mesh](https://mobbin.com/screens/60db255e-0f7c-4caf-a0a5-4d91c0aa8740),
[Dropbox](https://mobbin.com/screens/5ea4e218-270a-4fd8-b086-67ed9bb9ea55),
[Monarch](https://mobbin.com/screens/f4f97ca0-8e85-4609-8f21-c5c9902171d4)).

- **The charge date and amount next to the start button**, at a readable size; foodpanda repeats it in the total
  ("Free for 90 days, then S$ 5.99 for 1 mo.").
- **Reminder on by default.** Vocabulary shows a "Reminder before trial ends" toggle that is off
  ([Vocabulary](https://mobbin.com/screens/d76467c4-5b84-463a-8ee6-d9e387aecd92)): an anti-example; a reminder people
  must remember to turn on defeats its purpose.
- **Consent separate from marketing.** foodpanda separates "agree to be charged" from promotional messages.
- **The FAQ answers the questions people fear**: "When will I be charged?", "What happens to my files if I cancel?"
  (Dropbox).

## Anatomy of the cancel flow

1. **Findable.** "Cancel subscription" is visible in plan or billing settings, labeled with those words — not
   "Manage", not hidden under a "More" menu. Givingli puts it as a full-width button under the plan
   ([Givingli](https://mobbin.com/flows/6f2ce926-e665-4025-93be-b15e8b8b7254)); Glovo uses "Unsubscribe" at the end
   of the plan page ([Glovo](https://mobbin.com/flows/da775648-3290-4204-ae36-38f49dec29d2)).
2. **One screen of facts.** What changes, when access ends ("You keep Premium until 29 October"), what happens to
   data, and the amount that will not be charged.
3. **Alternatives on the same screen, if they exist**: pause, downgrade, a single offer. The cancel action keeps equal
   or greater visual weight.
4. **Optional reason**: a short list plus "Other", clearly optional, never blocking.
5. **Confirm with the outcome in the button**: "Cancel subscription" (not "Continue", not "Submit").
6. **Confirmation**: on screen and by email, with the end date, a reference, and how to resubscribe.
7. **Account state updated everywhere**: "Cancelled, ends on 21 Jun 2026"
   ([Givingli](https://mobbin.com/flows/6f2ce926-e665-4025-93be-b15e8b8b7254),
   [Pillow](https://mobbin.com/flows/80a23e9d-b50b-4328-98a3-cb8b665ec0d0)).

### What the examples get wrong (anti-examples)

| Product | What it does | Why it is a problem |
| --- | --- | --- |
| [Headspace](https://mobbin.com/flows/a2f8004c-5004-40b6-9f58-ed0953a391b7) | "Goodbyes are tough" with a smiling sun; one reason pre-styled as the primary blue button | Emotional framing; a reason option that looks like the main action |
| [Pillow](https://mobbin.com/flows/80a23e9d-b50b-4328-98a3-cb8b665ec0d0) | "Limited-time offer −25%" with a countdown ("expires in 23h 59m 58s") during cancelling | Manufactured urgency at the moment of leaving |
| [Deepstash](https://mobbin.com/flows/fec8ca43-c83a-428a-a759-e82c4e3f13a0) | A feedback sheet, then "You're about to leave Pro" with a sad character, "I changed my mind" as the primary button and "See how to cancel" as a red link to instructions | Several screens, guilt, and cancel demoted to a link |
| [Glovo](https://mobbin.com/flows/da775648-3290-4204-ae36-38f49dec29d2) | "Keep on saving 2,80 € on every order"; cancelling the free trial "can't be reactivated" and ends benefits "right away" | Loss framing and immediate loss of access for cancelling early |
| [Givingli](https://mobbin.com/flows/6f2ce926-e665-4025-93be-b15e8b8b7254) | Reason survey with "Submit Feedback" as the only action | Unclear whether the survey is required to cancel |

What they get right: Givingli and Pillow update the plan status with the end date; Pillow keeps access until the end
of the trial; Givingli includes "Upgraded by accident" as a reason, which tells the business something true.

## Retention offers without manipulation

- **At most one**, on the same screen as the cancel action, with the cancel action continuously visible. This is also
  what California's rules require for online save offers (see below).
- **Symmetric weight**: "Cancel subscription" and "Stay for €4/month" as two clear buttons; no grey link for cancel.
- **Honest terms**: duration of the discount, the price after it, no countdown.
- **Relevant to the reason**: a pause for "I'm not using it right now", a cheaper plan for "too expensive", nothing
  for "I subscribed by accident" (refund instead).
- **Never conditional on talking to someone.**

## Pausing

- Offer fixed durations (1, 2, 3 months) and the exact resume date.
- Say what is available during the pause and whether it is billed.
- Remind before resuming, like a renewal.

## Renewals and reminders

- **Remind before renewals**, especially annual ones and trials converting to paid, with the amount, the date and a
  direct link to cancel. The UK regime requires reminder notices before renewal (see below); it is good practice
  everywhere.
- **Price changes**: notify ahead with the new price, the date and how to cancel before it applies.
- **After the first charge of an annual plan**, make refund rules clear.

## After cancelling

- Access until the end of the paid or trial period, stated with a date.
- Data: what stays, for how long, how to export it.
- "Resubscribe" in one step, without re-entering everything.
- No guilt emails; at most one factual confirmation and, later, one honest win-back message that can be unsubscribed
  from in one click.

## Legal landscape (check current rules; not legal advice)

Rules change quickly; verify before designing for a market. As of late 2026:

| Market | Rule | What it means for design |
| --- | --- | --- |
| **United States (federal)** | The FTC's 2024 "click-to-cancel" amendments were vacated by the Eighth Circuit in July 2025 and never took effect; the FTC restored the earlier rule (February 2026) and opened a new rulemaking in March 2026. ROSCA enforcement continues. | No federal click-to-cancel rule in force, but deceptive or obstructed cancelling is still enforced against; state laws apply |
| **California** | Automatic Renewal Law amendments (AB 2863) for contracts from 1 July 2025: online cancellation for online sign-ups, express affirmative consent to renewal, save offers only with a prominent, continuously displayed "click to cancel" link or button, rules for free-to-paid conversions | Design the cancel screen so the cancel action is always visible next to any offer; consent to renewal separate and explicit |
| **Germany** | Since July 2022, consumer contracts concluded online must offer a cancellation button (Kündigungsbutton) leading to a confirmation page | A labeled cancel entry point reachable without login obstacles, and a confirmation step |
| **European Union** | Directive (EU) 2023/2673 adds an electronic **withdrawal function** for distance contracts concluded online, applying from 19 June 2026 | A visible way to withdraw within the withdrawal period, distinct from ending an ongoing subscription; check national transposition |
| **United Kingdom** | The DMCC Act's subscription contracts regime, expected to start in January 2027: easy exit, reminder notices before renewals, a cooling-off period after renewals | Reminders before renewal, an exit as easy as joining, cooling-off messaging |
| **App stores** | Apple and Google own cancellation of subscriptions bought through them | Explain this and link to the store page; never pretend the product can cancel it |

Sources for this table are secondary summaries from law firms and official announcements; confirm each rule with a
qualified person for the product's markets.

## States and edge cases

- **Store subscription**: the cancel button opens the store's subscription page; say so before tapping.
- **Partner or bundle billing**: say who bills and link there.
- **Several subscriptions** (add-ons, seats): cancel each, or all, with the effect of each.
- **Teams**: who can cancel (owner, billing admin); what happens to members' access and data.
- **Failed payment during cancelling**: cancelling must still work; outstanding amounts explained.
- **Cancelling during a trial**: access until the trial ends.
- **Cancelling after the renewal charge**: refund rules shown, including statutory ones where they apply.
- **Offline or error**: the cancellation is not lost; the person sees whether it succeeded, and gets an email.

## Accessibility specifics

- The cancel button is a real button with its outcome as the name; reachable by keyboard and screen reader in order.
- Offers and cancel actions have equal visibility for assistive technologies, not only visually.
- No timers (countdown offers also fail people who need more time; WCAG 2.2.1 Timing Adjustable).
- Confirmation announced (status message, WCAG 4.1.3).

## Copy

By function, with English examples:

- **Entry point** names the action: "Cancel subscription".
- **Facts** use dates and amounts: "You won't be charged €9.99 on 1 December. You keep Premium until 30 November."
- **Offer** states terms: "Stay for €4.99/month for 3 months, then €9.99."
- **Buttons** name the outcome: "Cancel subscription" / "Keep my plan".
- **Confirmation**: "Subscription cancelled. Premium ends on 30 November. We sent a confirmation to ana@correo.es."
- **Avoid**: "Goodbyes are tough", "We'll miss you", "You'll lose everything", "Are you sure you want to give up?".

In other languages, use the term people know from their market and the law (for example the German "Verträge hier
kündigen" for the cancellation button), and keep the same form of address as the rest of the product.

## Common mistakes and why they happen

- **Retention screens stacked one after another**, because each team adds one and each shows a "save rate".
- **Cancel by phone or chat**, because support teams are measured on saves.
- **Mandatory survey**, because product teams want data and forget it becomes a toll.
- **Ending access immediately**, because it is simpler in billing systems.
- **Guilt copy and sad mascots**, copied from popular apps.
- **No email confirmation**, because the cancel flow was built after launch, in a hurry.

## Worked comparison

**Situation:** a meditation app, €59.99/year, the person subscribed on the web.

**Weak.** Settings → Account → "Manage" → "Subscription details: Edit" → "Goodbyes are tough" with three reasons →
"Wait! 50% off for 24 hours" with a countdown → "Are you sure? Your 214-minute streak will be lost" → "Continue with
cancellation" as a grey link → a page that says "Contact support to complete cancellation".

**Strong.** Settings → Plan: "Annual · renews 14 March 2027 for €59.99" with "Cancel subscription" and "Pause" beside
it. One screen: "Your plan ends on 14 March 2027. You won't be charged again. Your sessions history stays in your
account." Below: "Would a pause help? Pause for 1, 2 or 3 months" and an optional "What's the main reason? (optional)".
Buttons: "Cancel subscription" and "Keep my plan", equal weight. Confirmation on screen and by email with the date and
"Resubscribe" in one step.

The second version saves fewer people in the moment and more over time: no chargebacks, no complaints, and people
who come back.

## How to verify and measure

- Count steps and screens from "I want to cancel" to "cancelled", and compare with the steps to subscribe.
- Test with people: can they find it in under a minute? Do they know when access ends?
- Measure: cancellations completed vs. started, reactivations, chargebacks, support contacts about cancelling,
  complaints. A high "save rate" with high chargebacks is a failure.
- Check the strictest market's rules for each change to the flow.

## References

- Headspace — [cancel flow](https://mobbin.com/flows/a2f8004c-5004-40b6-9f58-ed0953a391b7) ·
  [trial timeline](https://mobbin.com/screens/17e4ce60-0851-40be-92af-336be1220857)
- Pillow — [cancel flow with countdown offer](https://mobbin.com/flows/80a23e9d-b50b-4328-98a3-cb8b665ec0d0) (anti-example)
- Givingli — [cancel flow and status](https://mobbin.com/flows/6f2ce926-e665-4025-93be-b15e8b8b7254)
- Deepstash — [cancel flow](https://mobbin.com/flows/fec8ca43-c83a-428a-a759-e82c4e3f13a0) (anti-example)
- Glovo — [cancel trial](https://mobbin.com/flows/da775648-3290-4204-ae36-38f49dec29d2)
- foodpanda — [trial with billing reminder](https://mobbin.com/screens/5c330e96-9e24-4420-a703-7612ab830a4b) · Mesh —
  [trial timeline](https://mobbin.com/screens/60db255e-0f7c-4caf-a0a5-4d91c0aa8740) · Dropbox —
  [trial with FAQ](https://mobbin.com/screens/5ea4e218-270a-4fd8-b086-67ed9bb9ea55) · Monarch —
  [trial timeline](https://mobbin.com/screens/f4f97ca0-8e85-4609-8f21-c5c9902171d4) · Vocabulary —
  [reminder off by default](https://mobbin.com/screens/d76467c4-5b84-463a-8ee6-d9e387aecd92) (anti-example)
- Legal summaries (secondary, verify): [FTC rule status](https://www.crowell.com/en/insights/client-alerts/clicking-all-the-right-boxes-ftc-moves-to-revive-click-to-cancel-rule-following-eighth-circuit-vacatur) ·
  [California AB 2863](https://dwt.com/insights/2024/10/ab-2863-updates-california-automatic-renewal-law) ·
  [EU withdrawal button](https://www.gtlaw.com/en/insights/2026/5/eu-consumer-law-new-withdrawal-button-requirements-for-online-contracts) ·
  [UK DMCC subscriptions](https://www.lewissilkin.com/insights/2026/09/15/key-takeaways-the-subscription-shake-up-are-you-ready-for-january-2027-102o14n)
