# Reviewing a landing page before publishing

A review is not a taste check: it tests whether the page does its job for its visitors, with evidence. This file
gives a review method, severity levels, a full checklist and a worked review. Failures in "Message" or
"Accessibility" block publication.

For the general review method and report format, see [review](../06-review.md) and
[the review report template](../../templates/review-report.md).

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
| **Blocker** | The page fails its goal or excludes people | Headline does not say what it is; form unusable by keyboard; invented testimonials |
| **High** | Many visitors are confused or slowed | Main objection unanswered; LCP 5 s on mobile |
| **Medium** | A noticeable cost to clarity or trust | Generic feature icons; vague "Learn more" links |
| **Low** | Polish | Inconsistent spacing; a slightly long subheading |

Each finding: what, where, evidence (screenshot, measurement, quote from a test), why it matters, the fix.

## Message

- [ ] In five seconds, it is clear what it is, for whom and what to do (tested with someone outside the team).
- [ ] The headline continues the promise of the traffic source.
- [ ] The headline states an outcome or a concrete idea; no hollow words.
- [ ] One primary action, repeated at the end; the secondary weighs less.
- [ ] The main objection has a visible answer near where it arises.
- [ ] Every figure, logo and testimonial is real, current and permitted.
- [ ] Claims are calibrated (no absolute promises) and recorded with sources.

## Structure

- [ ] Sections follow the visitor's questions, in the order their stage needs.
- [ ] No section is superfluous (if removed, nobody would miss it).
- [ ] Decision-critical information is not hidden in FAQ.
- [ ] Rhythm varies: not a stack of identical blocks.
- [ ] Navigation is short and the primary action always within reach.

## Identity

- [ ] A visual idea that can be said in one sentence, repeated with variation.
- [ ] No autopilot signals (generic gradients, three cards with icons, emojis, stock imagery).
- [ ] Images show the real product or directed photography.
- [ ] Typography has clear hierarchy and character.
- [ ] Color has a lead and a role for each accent.

## Motion

- [ ] Each animation has a purpose (explain, direct, character).
- [ ] The page works and reads fully without animation.
- [ ] With reduced motion, no translation, parallax or autoplay; feedback remains.
- [ ] Anything moving on its own for more than 5 seconds can be paused; nothing flashes.
- [ ] Only transform and opacity animated; no stutter on a mid-range phone.

## Accessibility

- [ ] Heading structure, landmarks and skip link.
- [ ] Contrast 4.5:1 (text) and 3:1 (large text and components), including text over images.
- [ ] Everything works by keyboard and focus is visible and not obscured.
- [ ] Images with useful alternative text; video with captions and no automatic sound.
- [ ] 200 % zoom and 320 px width without breaking.
- [ ] Forms labeled, with helpful errors.

## Performance and SEO

- [ ] LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms on mobile.
- [ ] Hero image optimized and prioritized; the rest deferred.
- [ ] Third-party scripts deferred and justified.
- [ ] Title, description, Open Graph and social image written by hand.
- [ ] Real text in HTML; structured data where it applies.

## Mobile

- [ ] The first screen shows headline, subheading and button.
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
- [ ] Recordings or click maps reviewed after a week.
- [ ] One test at a time, with a written hypothesis.
- [ ] A date to review claims, screenshots and prices.

## Automated checks

```bash
node scripts/slop.mjs --lang en,es <page files>
node scripts/a11y-static.mjs <page files>
node scripts/contrast.mjs "#6b7280" "#ffffff"
```

They are fast aids; they do not replace a keyboard pass, a screen reader pass, Lighthouse or axe. State which checks
were automated and which were manual.

## Worked review (excerpt)

**Page:** scheduling software for physiotherapy clinics; traffic from a search ad on "reduce no-shows".

| # | Finding | Evidence | Severity | Fix |
| --- | --- | --- | --- | --- |
| 1 | Headline "The future of clinic management" does not mention no-shows, the ad's promise | Five-second test: 4 of 5 people could not say what it does | Blocker | "Fewer no-shows. Patients book online and get text reminders." |
| 2 | Testimonial from "Dr. Smith, Clinic" without a real name or permission | No source in the claims register | Blocker | Replace with a named customer quote with permission, or remove |
| 3 | Migration, the top objection in sales calls, is answered only in FAQ item 9 | Objection list from sales | High | Add a migration block with the import screenshot after "How it works" |
| 4 | Hero image lazy-loaded; LCP 4.1 s on a mid-range phone | Lighthouse mobile run | High | Remove lazy loading, preload, serve AVIF at the right size |
| 5 | Logo strip scrolls forever without pause | Manual check | High (WCAG 2.2.2) | Make it static, or add a visible pause button |
| 6 | Three feature cards with generic icons ("Fast", "Secure", "Simple") | `slop.mjs` triad warning | Medium | One card per real task with a product screenshot |

The review ends with what was verified and how (scripts, devices, screen reader, number of people tested).

## Common mistakes

- **Reviewing taste instead of the brief.**
- **Reviewing on a desktop only.**
- **Findings without evidence or fix.**
- **Stopping at the page and never following the click.**
- **Treating automated scores as a pass.**
