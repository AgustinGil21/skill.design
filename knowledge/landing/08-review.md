# Reviewing a landing page before publishing

A review is not a taste check: it tests whether the page does its job for its visitors, with evidence. This file
gives a review method, severity levels, a full checklist and a worked review. Publication decisions depend on
impact and evidence: a broken conversion path or exclusion from a core task is different from an optional polish issue.

For the general review method and report format, see [review](../06-review.md) and
[the review report template](../../templates/review-report.md).

## Questions before reviewing

A review needs a decision to inform. "Is this good?" produces a taste discussion; "Can this page support the
campaign in its target markets?" produces checks, evidence and a release recommendation.

- What action is the visitor deciding on, and what would make it an informed decision?
- Which traffic promise, audience and language version are in scope?
- Is this a concept review, a release review or an investigation of a live problem?
- What has changed since the last review, including prices, destinations and third-party services?
- Which claims have primary evidence, which are hypotheses, and who can approve publication of each?
- What is the cost of a mistaken purchase, an inaccessible path or a misleading expectation?
- Which environments and states are most likely or most consequential, even when uncommon?
- Who can fix each finding, and what evidence will show that the fix worked?

Do not infer severity from the reviewer's confidence alone. A plausible exclusion deserves investigation even
before its frequency is known; an obvious spacing inconsistency may remain low impact despite high confidence.

## Choose the review depth

| Situation | Approach | Why | Cost |
| --- | --- | --- | --- |
| Early concept | Argument and alternative review | Avoids polishing the wrong promise | Cannot prove usability |
| Before publication | Journey and implementation audit | Checks the commitment path | Needs working states |
| Weak conversion | Source and task diagnosis | Separates fit from friction | Slower than a cosmetic fix |
| Small copy correction | Focused review plus affected states | Keeps effort proportionate | May miss unrelated debt |
| New locale | Native-language and market review | Finds changed meaning and obligations | Needs local expertise |
| Shared component changed | Sample pages and edge variants | Finds repeated regressions | Explicit sampling |

A complete visual redesign is not the default response to a weak result. First distinguish unsuitable traffic,
an unclear offer, a broken action, an unavailable product and a genuinely difficult interface.
A page can communicate an offer clearly while visitors correctly decide that it is not for them.

## How to review

1. **Restate the brief**: goal, audience, stage, traffic source, main objection. Without it, review is opinion.
2. **First impression as a visitor**: open the page on a phone from the real traffic source (the ad, the search
   result). Note what you understood in five seconds.
3. **Walk the argument**: section by section, which question does it answer and with what proof?
4. **Check the craft**: identity, typography, rhythm, motion.
5. **Test access**: keyboard, screen reader, zoom, reduced motion, contrast.
6. **Measure**: performance on a mid-range phone, the skill's scripts.
7. **Follow the click**: complete the main action and check what happens next matches the promise.
8. **Write findings** with evidence, severity and a concrete fix.

## Severity

| Level | Meaning | Example |
| --- | --- | --- |
| **Blocker** | Prevents the task or misleads | Keyboard-blocked form; invented endorsement |
| **High** | Many visitors are confused or slowed | Main objection unanswered; LCP 5 s on mobile |
| **Medium** | A noticeable cost to clarity or trust | Generic feature icons; vague "Learn more" links |
| **Low** | Polish | Inconsistent spacing; a slightly long subheading |

Each finding: what, where, evidence (screenshot, measurement, quote from a test), why it matters, the fix.

## Evidence quality and a useful finding

Separate four layers: the observation, the interpretation, the consequence and the proposed remedy.
"The form has six fields" is an observation; "people abandon because it is long" is an untested interpretation.
A finding becomes stronger when a participant's behavior, analytics and the implementation point to the same issue.

Record the source and limits. A single failed keyboard path can establish that a barrier exists; it does not
estimate how many visitors encounter it. A small comprehension session identifies misunderstandings but does not
justify a population conversion forecast.

A useful finding includes the following in connected prose:

1. Where it happens, including the state and entry path.
2. What was directly observed, with a reproducible condition or appropriately permitted evidence.
3. Which goal or requirement is affected and why the consequence matters.
4. Confidence and remaining uncertainty, especially when the causal explanation is inferred.
5. A recommended fix, its main trade-off and a cheaper temporary mitigation where appropriate.
6. An owner and a retest condition; "make clearer" cannot be checked for completion.

Do not attach participant identifiers or sensitive form values to a public review report. Preserve the evidence
needed to reproduce the problem while limiting access to personal or commercially sensitive information.

## Requirement, recommendation and convention

| Judgment | Basis | Review behavior |
| --- | --- | --- |
| WCAG criterion failure | Reproducible condition and applicable criterion | Name the criterion and affected task |
| Broken advertised behavior | Promise differs from actual destination or state | Fix behavior or narrow the promise |
| Usability recommendation | Observed difficulty or reasoned risk | State evidence, trade-off and proposed test |
| Common convention | Familiar placement or interaction | Check audience expectations before enforcing |
| Visual preference | Art direction and brand intent | Offer as an option, not a compliance defect |

A single `h1`, a fixed headline line count, a particular font family and a first-screen button are not WCAG
requirements. They can be useful choices, but the review should say why they serve this page.
WCAG applies to complete pages and processes; a limited review is not a complete conformance claim.

## Message

- [ ] Brief exposure reveals the offer and audience; deeper tasks check conditions and the next step.
  A five-second exercise is a diagnostic technique, not a universal pass threshold.
- [ ] The headline continues the promise of the traffic source.
- [ ] The headline states an outcome or a concrete idea; no hollow words.
- [ ] One primary action, repeated at the end; the secondary weighs less.
- [ ] The main objection has a visible answer near where it arises.
- [ ] Every figure, logo and testimonial is real, current and permitted.
- [ ] Claims are calibrated (no absolute promises) and recorded with sources.

## Structure

- [ ] Sections follow the visitor's questions, in the order their stage needs.
- [ ] Each section answers a decision-relevant question, including less frequent but consequential objections.
- [ ] Decision-critical information is not hidden in FAQ.
- [ ] Rhythm varies: not a stack of identical blocks.
- [ ] Navigation and action placement fit page length without crowding or obscuring content.

## Identity

- [ ] A visual idea that can be said in one sentence, repeated with variation.
- [ ] Suspected template choices are evaluated against the brand and task, not rejected solely for their appearance.
- [ ] Images show the real product or directed photography.
- [ ] Typography has clear hierarchy and character.
- [ ] Color has a lead and a role for each accent.

## Motion

- [ ] Each animation has a purpose (explain, direct, character).
- [ ] The page works and reads fully without animation.
- [ ] Reduced motion removes unnecessary movement while preserving equivalent information and feedback.
  This is a recommendation beyond individual WCAG AA motion criteria, not a blanket AA ban on motion.
- [ ] Auto-starting motion lasting over five seconds alongside other content meets 2.2.2, including its exception.
  Flashing satisfies 2.3.1; avoiding flashes is the safer design recommendation.
- [ ] Animation is tested on representative devices; transform and opacity are useful performance defaults.

## Accessibility

- [ ] Heading structure, landmarks and skip link.
- [ ] Text contrast meets 1.4.3 and required component/graphic contrast meets 1.4.11, with their exceptions.
- [ ] Keyboard access, focus order and visible focus satisfy 2.1.1, 2.4.3 and 2.4.7.
  Focused controls are not entirely hidden by author content (2.4.11); full visibility is recommended.
- [ ] Alternatives satisfy 1.1.1; media is checked against applicable 1.2 criteria and audio control under 1.4.2.
- [ ] Text resizing to 200 % (1.4.4) and reflow at 320 CSS px (1.4.10) checked separately, with exceptions.
- [ ] Forms have instructions and identified errors (3.3.1, 3.3.2); status messages are exposed under 4.1.3.

## Performance and SEO

- [ ] LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms on mobile.
- [ ] Hero image optimized and prioritized; the rest deferred.
- [ ] Third-party scripts deferred and justified.
- [ ] Title, description, Open Graph and social image written by hand.
- [ ] Real text in HTML; structured data where it applies.

## Mobile

- [ ] The first screen establishes the offer; action placement remains usable with large text and translations.
  Do not shrink meaningful content simply to put everything above a variable fold.
- [ ] Touch targets comfortable and separated; nothing depends on hover.
- [ ] Tables and comparisons reorganize rather than shrink.
- [ ] Menu accessible and closable with a tap and with Escape.

## Languages and markets

- [ ] Each language version written natively, with local proof, prices and legal terms.
- [ ] Layout survives the longest language and right-to-left scripts where relevant.
- [ ] Metadata, alt text and social cards translated.

## Trust and privacy

- [ ] Cookie consent with equal reject option; trackers respect consent.
- [ ] Forms explain data use; policies linked.
- [ ] Contact, company details and legal pages reachable.

## After the click

- [ ] The first screen after the action matches the promise (trial, demo booking, checkout).
- [ ] Confirmation emails and messages are consistent with the page.

## After publishing

- [ ] Primary metric measured by traffic source, with quality and guardrail metrics.
- [ ] Permitted recordings or click maps reviewed when sufficient representative traffic exists; privacy preserved.
- [ ] Experiments have explicit hypotheses and isolation or coordination sufficient to interpret results.
- [ ] A date to review claims, screenshots and prices.

## Automated checks

```bash
node scripts/slop.mjs --lang en,es <page files>
node scripts/a11y-static.mjs <page files>
node scripts/contrast.mjs "#6b7280" "#ffffff"
```

They are fast aids; they do not replace a keyboard pass, a screen reader pass, Lighthouse or axe. State which checks
were automated and which were manual.

## Review the states, not just the default screenshot

| Condition to trigger | What to inspect | What failure would mean |
| --- | --- | --- |
| Slow first load | Offer and action appear without animation | Decoration blocks the decision |
| Denied optional consent | Core journey and fallback contact | Consent becomes a hidden prerequisite |
| Invalid form input | Error identification, preservation and focus | Recovery costs more than submission |
| Timeout after submit | Pending versus confirmed outcome | Visitor may duplicate a request |
| Already registered | Appropriate continuation | The page repeats an impossible offer |
| Unavailable locale or region | Eligibility and alternative | Traffic promise is misleading |
| Keyboard menu open | Entry, order, close and return focus | Visitor becomes trapped or lost |
| Browser back | Chosen plan, filters and input | Exploration destroys prior work |
| Font or media failure | Readable copy and equivalent proof | The argument has a single point of failure |

Choose cases by risk, not by a demand to test every theoretical combination. Test combinations when they interact:
a sticky button, an on-screen keyboard and a consent panel compete for the same small viewport.

## Localization review is more than overflow

Ask a fluent reviewer to explain the offer and obligation in their own words, then compare with the intended
meaning. A fluent sentence can still promise immediate access when the actual service only sends an invitation.

Check form of address, grammatical agreement and whole messages containing variables. Do not build a sentence
from translated fragments when word order or plurals may differ. Test long organization names, names as written
by the person, currencies with ambiguous symbols and dates crossing time zones.

For right-to-left layouts, inspect reading order and directional icons separately. A play icon or brand mark may
not mirror even when the surrounding layout does. Mixed-script email addresses and technical identifiers need
readable directionality without changing the underlying values.

When a regional offer differs, compare the page, checkout, confirmation and support information together.
Translation quality cannot repair a mismatch between the marketed price and the actual charged currency.

## Worked review (fictional example)


**Scenario:** scheduling software for physiotherapy clinics, reached from an ad about reducing missed appointments.
All observations below are fictional examples of review reasoning, not research results or measured performance.

**Weak review:** "The page feels generic, so use brighter colors and shorten it." This names neither the audience's
objection nor a failure in the journey. It could produce a more distinctive page with the same broken promise.

**Strong review:** the recommendation is to fix message continuity and submission access before changing the
visual direction. The existing clinic photography can stay because it helps identify the intended setting.

1. **Message mismatch.** The headline promises "the future of clinic management", while the ad names missed
   appointments. The reviewer observes the mismatch directly; whether visitors misunderstand remains to be tested.
   Recommend describing booking and reminders. Do not promise fewer missed visits without supporting evidence.
2. **Unsupported endorsement.** A testimonial has no approval record. Treat publication of the quote as blocked
   until its source and permission are established; remove it if evidence is unavailable.
3. **Migration answer buried.** Sales notes suggest migration concern, but the notes may overrepresent large clinics.
   Bring a concise import explanation into the argument and test it with smaller clinics before expanding it.
4. **Delayed hero.** The intended LCP image is lazy-loaded. Inspect actual traces and compare a correctly prioritized
   version; do not invent a time saving from the source code alone.
5. **Moving logo strip.** It starts automatically, continues beyond five seconds and appears beside other content.
   With no applicable exception or pause/stop/hide mechanism, record a 2.2.2 failure. A static strip costs little.
6. **Form uncertainty.** A simulated connection loss leaves the button spinning without explaining whether the
   request arrived. Add a truthful pending outcome and a safe way to check or retry, then test duplicate prevention.

The recommendation keeps useful existing assets while repairing the argument and task. A simpler static version
is the fallback if the team cannot fix animation before release. The trade-off is less motion, not less evidence.

Retest the same ad-to-form journey after changes, then add a different traffic source to check that the fix did
not make a narrow campaign claim inappropriate on the general homepage.

## How to verify the review itself

A closed finding has a reproduced failure and a demonstrated corrected state, or a clearly documented limit.
A ticket marked complete without a retest is an implementation claim, not verification.

- Track unresolved issues by affected task and impact, rather than raw counts that reward splitting tickets.
- Compare qualified trial starts or completed bookings, not only button clicks.
- Watch incorrect expectations, duplicate submissions, support contacts and cancellations as guardrails.
- Segment by source and locale when meaningful; an aggregate gain can conceal exclusion of a smaller audience.
- Record what was not tested and when it will be checked; do not imply every browser or assistive tool was covered.

A release recommendation should say what is ready, what remains uncertain, and which unresolved issue changes the
decision. Visual polish can be scheduled; a false offer or unavailable primary action needs correction or removal.

## Common mistakes

- **Reviewing taste instead of the brief.** Reviewers reach for familiar aesthetics when the goal is unclear.
  Restate the audience and decision before debating style.
- **Reviewing on a desktop only.**
- **Findings without evidence or fix.** A confident opinion can sound actionable while remaining impossible to test.
  Include the condition, consequence and retest step.
- **Stopping at the page and never following the click.**
- **Treating automated scores as a pass.**

## Review completion checklist

- [ ] Scope, stage, audiences, sources and market variants are explicit.
- [ ] Each priority finding distinguishes observation from inference.
- [ ] Requirements cite criteria; recommendations name their reasons and trade-offs.
- [ ] Failure and recovery states were exercised through the next destination.
- [ ] Content provenance and commercial promises have responsible owners.
- [ ] Fixes were retested and unresolved limits are visible in the release recommendation.
