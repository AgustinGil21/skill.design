# Events, quizzes and form builders

Three patterns grouped for convenience: **event pages and RSVPs**, **quizzes and lessons**, and **form and survey
builders**. Each has a distinct goal that changes the design: an event must help people decide and show up; a quiz
can teach, assess or entertain, and those need different feedback; a form builder must catch broken logic before
real people answer.

## Events and RSVPs

### The problem and who has it

Hosts want attendance and accurate counts; guests want to know whether to go, how to get there, and who will be there
— without exposing more than they choose.

### Questions to ask before deciding

- **Public or private event?** Who sees the guest list?
- **Capacity limits**, waitlists, tickets?
- **What happens on changes** (time, place, cancellation)?
- **Time zones** for online events with global guests?

### Anatomy and behavior

- **At the top, what decides attendance**: title, date and time with time zone, place (or call link) and host
  ([GroupMe](https://mobbin.com/screens/a5a5450d-8c2b-4896-aa82-4f1fc2867db5),
  [WhatsApp](https://mobbin.com/screens/059ecbd9-1c1e-440d-8120-370b691f6e69)).
- **"Add to calendar" next to the date**, not hidden; "Copy link" next to the call.
- **The response (Going / Not going / Maybe) fixed at the bottom**, large, with the chosen one marked; changing it is
  equally easy ([GroupMe](https://mobbin.com/screens/a5a5450d-8c2b-4896-aa82-4f1fc2867db5),
  [Nextdoor](https://mobbin.com/screens/52830538-46ab-4432-9980-9162aa8cd761)).
- **Guests grouped by response** (Going · Not going · No response) with counts, and avatars + "Zoe and 1,025 others"
  ([Posh](https://mobbin.com/screens/1177d96b-90b8-441b-bfa2-c6717f9f3615)).
- **Practical data as a list with icons**: capacity ("25 of 25 spots open"), suggested price, RSVP deadline, what to
  bring ([Partiful](https://mobbin.com/screens/b6e0629b-9518-42b6-8c4a-b1ad83ecbf53)).
- **After responding**: who sees the response, and offer calendar and reminder
  ([LinkedIn](https://mobbin.com/screens/1dba795f-efa9-4a84-b5fd-700b0472d5a7),
  [Meetup](https://mobbin.com/screens/80bdded1-2649-4675-a195-136cde0f2f8e)).
- **Changes announced**: "Event updated · Guests were notified" ([Amie](https://mobbin.com/screens/5b0e8074-11ab-463f-8284-4e199953a3a1)).
- **A small tappable map** that opens the maps app; long description collapsed with "See more".

### Event lifecycle

| State | Design |
| --- | --- |
| Open | RSVP available |
| Full | "Join the waitlist" with position or likelihood |
| Changed | Highlight what changed (time, place) and re-confirm attendance if significant |
| Cancelled | Clear banner, refunds if tickets, remove from calendars |
| Past | Photos, notes, follow-ups; RSVP disabled |

### Privacy of guests

- Let guests hide their response from other guests where appropriate.
- Do not expose contact details of guests to each other by default.

## Quizzes and lessons

### Learning, assessment or research?

| Goal | Feedback | Design |
| --- | --- | --- |
| **Learning** | Immediate, explained ("why") | One question at a time, retry, explanations |
| **Assessment** (exam, certification) | Delayed or summary only | Allow review and change before submitting; no answers shown during |
| **Survey or research** | None (no correct answers) | Neutral wording, no right/wrong signals |
| **Entertainment** | Playful, immediate | Personality allowed |

Mixing them causes problems: showing correct answers during an assessment, or "right/wrong" colors in a survey.

### Anatomy and behavior

- **A progress bar and "Question 2 of 10"**, with exit (×) that asks to confirm when progress would be lost
  ([Speechify](https://mobbin.com/screens/7098210e-e083-4635-badd-e77692e3474c)).
- **One question per screen** for learning and short quizzes; options as large rows with a letter or number (A, B, C;
  1, 2) that also works as a keyboard shortcut ([Greenlight](https://mobbin.com/screens/df508bbe-387f-4c65-a862-e7c52c427751)).
  For assessments with related questions, several per page with an overview may be better.
- **Select, then "Check"**, in two steps, so people can change their mind
  ([Udemy](https://mobbin.com/screens/bc8c50bb-c999-46da-b418-8420dfa4bee9)); "Previous" available when it makes sense.
- **Instructions on how to answer** ("Tap the correct answer", "Choose all that apply";
  [Mimo](https://mobbin.com/screens/90b75a67-5417-48a7-ad63-c375a12dbd81)).
- **Immediate result with color + icon + text** in learning mode (correct, the chosen incorrect one, and why); never
  color alone ([Nibble](https://mobbin.com/screens/dd1493c3-ea52-435a-80f6-b7d4dd15e72e)).
- **Time limits only if they are part of the purpose**, visible, and adjustable or removable for accessibility
  (WCAG 2.2.1, A).
- **Report a problem** with a question (a flag) for wrong content.
- **At the end**: a summary with results, what to review and the next step (see
  [triage, roles and celebrations](triage-roles-and-celebrations.md)).

### Valid questions and scales

- Avoid leading questions and double-barreled questions ("Was it fast and easy?").
- Balanced scales with labeled ends; a neutral option when appropriate; "Not applicable" when needed.
- Answer options that are mutually exclusive and exhaustive.

## Form and survey builders

### Anatomy and behavior

- **Three zones**: the list of questions on one side (reorderable, with type and icon), editing in the center, a live
  preview on the other side ([Maze](https://mobbin.com/screens/d9824421-e444-457e-9934-117eba1549e5),
  [Typeform](https://mobbin.com/screens/18924c96-2eb9-4aa6-8946-c24c22ae33fc)).
- **Each question**: type (selector with icon), text, optional description, "Required" as a visible switch, and
  draggable answer options with "Add option" ([Asana](https://mobbin.com/screens/c43ca5b8-94fc-4b4c-911b-601695903a65),
  [Sprig](https://mobbin.com/screens/61817c20-65c6-4e44-85b8-9c71500e47e8)).
- **Type settings in place**: scale (5 points recommended in many cases), end labels ("Very difficult" / "Very
  easy"), shuffle options, "Other" with free text.
- **Field types grouped** (Inputs · Structure) in an add panel ([Gumloop](https://mobbin.com/screens/4db6f0ea-77d5-4b94-ad6a-f232b1675352)).
- **Logic (skip questions) as an action per question** ("Add skip logic") and in its own view.
- **Start and end screens** as fixed blocks (Welcome / Thank you).
- **The flow at the top**: Create → Logic → Share → Results, with status ("Published" with a switch, "0 responses";
  [ClickUp](https://mobbin.com/screens/f4a2d5b9-dae7-4fc4-8f6d-f72d877b472f)).
- **Who can respond**, stated at the top ("Only your organization · Change") with plan notes (Asana).
- **Test in mobile and desktop preview**; "Reset" the preview ([Hotjar](https://mobbin.com/screens/8d32aaf6-681a-4466-89da-c7800e7eb34e)).

### Testing logic

- **Detect impossible branches** (questions nobody can reach) and dead ends.
- **Orphaned questions** after deleting the question a rule depended on: flag them.
- **Walk through paths** in preview with a path indicator.

### Published versions and existing responses

- Editing a published form can invalidate existing responses (deleted options, changed question meaning). Warn,
  version the form, and keep responses tied to the version they answered.
- Do not let a typo fix silently change the meaning of a question with responses.

### Accessible conditional forms

- When a question appears because of an earlier answer, announce it and keep focus order logical.
- Required fields marked in text; errors associated; time limits adjustable.

## Copy

- Event details in the guest's time zone and language.
- Quiz feedback explanatory, not just "Correct!".
- Builder warnings specific ("Question 4 is unreachable").

## Common mistakes and why they happen

- **Learning feedback in assessments**, or right/wrong colors in surveys.
- **"One question per screen" applied everywhere.**
- **Logic that strands respondents.**
- **Editing published forms without versioning.**
- **Guest lists exposed by default.**

## Worked comparison

**Weak.** A team survey built with skip logic: question 6 depends on question 3, which was later deleted; respondents
choosing "No" on question 2 reach a blank page. Results mix answers from before and after an option was renamed.

**Strong.** The builder flags "Question 6 depends on a deleted question" and "Path 'No' at question 2 has no ending";
the preview walks each path; renaming an option after responses asks whether to create a new version.

## How to verify and measure

- **Events**: RSVP conversion, attendance vs. RSVPs, changes after updates.
- **Quizzes**: completion, explanation views, retries, reported questions.
- **Builders**: logic errors caught before publishing, completion by path.

## References

- GroupMe — [event page and RSVP](https://mobbin.com/screens/a5a5450d-8c2b-4896-aa82-4f1fc2867db5)
- WhatsApp — [event essentials](https://mobbin.com/screens/059ecbd9-1c1e-440d-8120-370b691f6e69)
- Nextdoor — [fixed RSVP](https://mobbin.com/screens/52830538-46ab-4432-9980-9162aa8cd761)
- Posh — [guests by response](https://mobbin.com/screens/1177d96b-90b8-441b-bfa2-c6717f9f3615)
- Partiful — [practical data](https://mobbin.com/screens/b6e0629b-9518-42b6-8c4a-b1ad83ecbf53)
- LinkedIn — [after responding](https://mobbin.com/screens/1dba795f-efa9-4a84-b5fd-700b0472d5a7)
- Meetup — [after responding](https://mobbin.com/screens/80bdded1-2649-4675-a195-136cde0f2f8e)
- Amie — [changes announced](https://mobbin.com/screens/5b0e8074-11ab-463f-8284-4e199953a3a1)
- Speechify — [quiz progress and exit](https://mobbin.com/screens/7098210e-e083-4635-badd-e77692e3474c)
- Greenlight — [options with shortcuts](https://mobbin.com/screens/df508bbe-387f-4c65-a862-e7c52c427751)
- Udemy — [select then check](https://mobbin.com/screens/bc8c50bb-c999-46da-b418-8420dfa4bee9)
- Mimo — [how to answer](https://mobbin.com/screens/90b75a67-5417-48a7-ad63-c375a12dbd81)
- Nibble — [feedback with explanation](https://mobbin.com/screens/dd1493c3-ea52-435a-80f6-b7d4dd15e72e)
- Maze — [builder zones](https://mobbin.com/screens/d9824421-e444-457e-9934-117eba1549e5)
- Typeform — [builder zones](https://mobbin.com/screens/18924c96-2eb9-4aa6-8946-c24c22ae33fc)
- Asana — [question settings and audience](https://mobbin.com/screens/c43ca5b8-94fc-4b4c-911b-601695903a65)
- Sprig — [question settings](https://mobbin.com/screens/61817c20-65c6-4e44-85b8-9c71500e47e8)
- Gumloop — [field types grouped](https://mobbin.com/screens/4db6f0ea-77d5-4b94-ad6a-f232b1675352)
- ClickUp — [builder flow and status](https://mobbin.com/screens/f4a2d5b9-dae7-4fc4-8f6d-f72d877b472f)
- Hotjar — [preview on devices](https://mobbin.com/screens/8d32aaf6-681a-4466-89da-c7800e7eb34e)
