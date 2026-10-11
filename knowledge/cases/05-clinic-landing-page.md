# Case: a landing page that brings visits but few trials

## Context

**Product (fictional):** Agendo, scheduling software for physiotherapy and small health clinics in Spain and
Portugal. Online booking, text reminders, patient records, invoicing.

**People:** clinic owners with 2–10 practitioners; often the owner is also a practitioner and decides alone.

## The problem as first stated

"The landing page converts poorly. Make it look more modern."

### Reframing

"Modern" is a style; the problem is a gap between **who arrives and what they find**. Before changing visuals:
where do visitors come from, what did they expect, what stops them?

## Evidence

| Type | Finding |
| --- | --- |
| **Known** (analytics) | Most paid traffic comes from search ads on "reduce no-shows" and "online booking for clinics"; most visitors on phones |
| **Known** (page) | The headline is "The future of clinic management"; no-shows are not mentioned above the fold |
| **Known** (sales calls, 20 notes) | Top objections: moving patient data, price for a small clinic, whether older patients will use online booking |
| **Believed** | Owners trust other clinics more than software claims |
| **Guessed** | A comparison with paper diaries would resonate |

## Constraints

- Two languages (Spanish, Portuguese), written natively.
- Real proof available: three clinics willing to be named with figures; screenshots; a free import service.
- Health data regulations; data hosted in the EU.
- One designer and one developer for four weeks.

## Alternatives

| Option | Strengths | Weaknesses |
| --- | --- | --- |
| **A. Visual refresh, same structure** | Fast | Does not address the mismatch with search intent |
| **B. Rewrite for the no-show problem, same visual system** | Addresses intent | Brand stays dated |
| **C. Separate pages per ad group** (no-shows, online booking) + rewritten main page | Message match per source | More pages to maintain |
| **D. C with a new art direction** | Full change | Many variables at once; hard to learn what worked |

## Decision

**C first, visual direction after.** Changing message and structure first made it possible to learn what moved
trials; the visual refresh followed as a separate release.

- **Hero (no-shows page)**: "Fewer no-shows, fewer phone calls. Patients book online and get a text reminder the day
  before." · [Try free for 14 days] · "No card. We import your patients for free." · a phone screenshot of the reminder
  and the booking page.
- **Proof near the hero**: a named clinic with a figure ("Fisio Norte: no-shows fell from 1 in 8 to 1 in 20
  appointments in three months" — fictional) and a photo of the owner.
- **Objections as sections**: migration (import screenshot, "usually ready in a day"), price per practitioner with a
  small-clinic example, "Will my older patients use it?" (bookings by phone still possible; reminders by text work
  with any phone), data hosted in the EU.
- **Closing** with the trial and a "Prefer a call?" secondary action.
- **Main page**: the same structure with a broader headline covering booking, reminders and records.

**Given up:** a dramatic visual change in the first release.

## States and edge cases

- **Trial sign-up form**: four fields (name, email, clinic name, number of practitioners as buttons); error and
  already-registered states; success leads to the import step, matching the page's promise.
- **Visitors on desktop from a phone ad**: same page, layout adapted.
- **Portuguese version**: written by a native writer with Portuguese clinic proof, not translated from Spanish.
- **Claims register**: each figure with its source clinic, date and approval.

## Copy (by function)

- Headline continues the ad's promise (no-shows).
- Proof is specific and attributed.
- Objections in the owners' words, from sales notes.
- No hollow adjectives; `slop.mjs --lang es,pt` run on both versions.

## Accessibility and performance

- Hero screenshot as AVIF, preloaded; LCP under target on a mid-range phone.
- Text over images avoided; contrast checked with `contrast.mjs`.
- Keyboard and screen reader pass on the form.

## Testing and measurement

- **Five-second tests** before launch (8 clinic owners per language): most could say what the product does and for
  whom, compared with few on the old page.
- **Launch as an experiment** on the no-shows ad group: old vs. new page, split traffic for four weeks.
- **Metrics**: trials started (primary); trials that send their first reminder within 7 days (quality); bookings after
  30 days; guardrail: support contacts during trials.

## Result and limits

Trials and activated trials both rose on the new page (fictional), and the import offer was the most clicked secondary
link. Traffic was modest, so the size of the effect is uncertain; the team treated it as directional and continued
with qualitative tests. The visual refresh followed, with comprehension tests repeated to check it did not hurt
clarity.

## Knowledge applied

[Landing strategy and structure](../landing/01-strategy-and-structure.md) ·
[hero](../landing/02-hero.md) ·
[persuasive writing](../landing/04-persuasive-writing.md) ·
[conversion forms](../landing/13-conversion-forms.md) ·
[measurement and learning](../26-measurement-and-learning.md) ·
[content and localization](../24-content-and-localization.md).
