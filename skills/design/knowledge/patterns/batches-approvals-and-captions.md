# Batches, approvals and caption editing

Three patterns about work that is not instant and not individual: **batch jobs and queues** that process many items,
**approvals** where one person's work waits for another's decision, and **caption editing**, where timing, accuracy
and readability decide whether video is accessible. Each has a hidden question that decides the design: are the items
independent? Is an approval still valid after changes? Is a caption readable at the speed it appears?

For accessible media more broadly, see [accessible media](accessible-media.md).

## The problem and who has it

- **Operators** running imports, exports, generations or bulk updates over hundreds or thousands of items.
- **Reviewers** approving expenses, content, code, contracts or time sheets.
- **Creators** editing captions for videos — and the deaf and hard-of-hearing people who depend on them.

## Questions to ask before deciding

- **Batches**: are items independent (each can succeed alone) or dependent (all must succeed together)? What effects
  happen per item? Can a failed item be retried safely?
- **Approvals**: who must approve, in what order, with what quorum? What happens when the work changes after approval?
  Can approval be delegated?
- **Captions**: who are the viewers, in which languages? Is the content speech only, or does it include meaningful
  sounds and multiple speakers?

## Batch jobs and queues

### Independent vs. atomic

| Type | Example | Design |
| --- | --- | --- |
| **Independent items** | Sending 400 personalized emails | Process each; report successes and failures; retry only failures |
| **Atomic (all or nothing)** | Moving accounting entries between periods | Validate first; apply as a transaction; on failure, nothing changes |
| **Ordered dependencies** | Importing customers, then their invoices | Process in order; failures in parents block children, and say so |

Say which type a batch is **before** starting: "If any entry fails, no entries will be moved."

### Anatomy and behavior

- **A list of batches** with name, created, expires, status and progress ("100 %", duration;
  [ElevenLabs](https://mobbin.com/screens/4a16bd1e-72af-43f7-8a35-e40723de44db),
  [Grok](https://mobbin.com/screens/bd1deff9-c4b4-4f12-b129-ccbdd3a6d55c)).
- **Batch detail on the side**: status ("Validating"), counts ("0 completed, 0 failed of 0"), input / output / error
  files and an event timeline; "Cancel batch" at the bottom
  ([OpenAI Platform](https://mobbin.com/screens/2405cd1e-66fd-4cf2-ae4e-f468328cad91)).
- **A summary at the top when finished**: destination, successes (with size and %), failures; a table of items with
  status and error per row, filterable ([AWS](https://mobbin.com/screens/0dc7a3c3-26ec-45a8-8a79-69bb9fce85e8)). Warn if
  the summary will be lost on leaving — better, keep it available.
- **Run history with a chart** (successes and failures per day) and **most frequent errors** grouped by code
  ([Databricks](https://mobbin.com/screens/06b7cd16-d98c-423c-970d-ead120b13b54)); how it was launched (manual,
  scheduled).
- **Pause, resume and cancel with their differences explained** ("Pause stops processing"; "Cancel means it won't
  resume"; [Relevance AI](https://mobbin.com/screens/8735a63d-e92d-431c-975e-e169ecb2102d)) and tabs by status (In
  progress · Processed · Cancelled).
- **Batch stages** as steps (Pick · Print · Pack · Done) when the work has phases
  ([Shopify](https://mobbin.com/screens/10bda18e-95a0-4c93-8be9-3b3775477e90)).
- **Real progress**: "Editing 3 items · 0 % · started 12:05" updates by itself; anti-example: a "Refresh" button to see
  progress ([Jira](https://mobbin.com/screens/58b43a1e-81f2-4808-b7eb-af8a5104fa91)).
- **Retry only the failures** and download partial results; never redo everything because of one error.
- **A queue with order and position** ("3 in queue · starts in about 2 min") and the concurrency limit stated.

### Effects already executed

When a batch is cancelled midway, some effects already happened. Report them: "Cancelled after 120 of 400 emails
were sent. The remaining 280 were not sent." Retrying "failed only" must not resend to the 120.

## Approvals and change requests

- **The request status at the top** (Open · In review · Approved · Closed) with who opened it and where it goes
  ([PlanetScale](https://mobbin.com/screens/78880fb1-c0dc-4307-a635-1fb9a0c5527e),
  [GitLab](https://mobbin.com/screens/b789ca62-550f-4b63-981f-35a051c94ad6)).
- **Two clear actions for the reviewer**: "Approve" and "Request changes"; requesting changes requires a comment and
  says who will be notified ("Alex will be notified to fix and resubmit";
  [Toggl Track](https://mobbin.com/screens/6e5941be-fd02-4fde-af30-bd91b951db8e)).
- **A timeline** with openings, comments, approvals and closings, each with a status icon and text.
- **Process steps with timeframes** ("In review by Legal · can take up to 5 days") and what is used meanwhile ("Until
  approved, the default template is used"; [Deel](https://mobbin.com/screens/04cf3d45-777b-4066-a5b2-b13598930ce7)).
- **Comments anchored to the exact place** (an area of an image, a line) and the version commented (V2;
  [Air](https://mobbin.com/screens/f5d539dc-b847-4a45-83fb-b848a32e0410)); "Revision request" as a thread type
  ([Fiverr](https://mobbin.com/screens/949a894c-dcf2-487d-83f3-2490844e395f)).
- **Review in parts** with "Mark as viewed" and "4/4 reviewed" ([Devin](https://mobbin.com/screens/db4dc31e-376d-4bdd-907e-c99d56e8e964)).
- **Say whether approval is optional or required** ("Approval is optional"; GitLab) and who must approve.
- **"Approve all"** only when requests are homogeneous ([Teams](https://mobbin.com/screens/e6210226-bf0f-4209-8bd5-08263435afa8)),
  with the total shown ("Approve 12 time sheets · 384 hours").

### Validity of an approval

- **Changes after approval**: decide and show the policy. Minor changes may keep the approval; material changes
  (amount, scope) should reset it: "Approval reset because the amount changed from 1,200 to 1,850 EUR."
- **Quorum and order**: "2 of 3 approvers needed · Finance must approve last".
- **Delegation**: when an approver is away, allow delegation with an end date, visible in the timeline.
- **Policies by risk**: low amounts auto-approved, higher amounts needing one or two approvers. Show which policy
  applies and why.

## Caption editing

### Editorial quality of captions

Captions are not just transcripts. Good captions:

- **Are accurate**: correct words, names and terms.
- **Identify speakers** when it is not obvious who is speaking.
- **Include meaningful sounds** in brackets ("[door slams]", "[laughter]", "[music fades]") — for deaf and
  hard-of-hearing viewers, these carry information.
- **Break lines at semantic boundaries**, not in the middle of phrases: "We're opening a new clinic / in Porto next
  month" rather than "We're opening a new / clinic in Porto next month".
- **Stay on screen long enough to read**, and are synchronized with speech.
- **Have at most two lines** and stay inside the safe area of the format (vertical video leaves room for the social app
  interface).

### Anatomy and behavior of the editor

- **Editable transcript as text** on one side and video on the other; editing the text corrects the caption
  ([Descript](https://mobbin.com/screens/c373ca6f-8984-4d1b-bc34-2f562d341063),
  [Loom](https://mobbin.com/screens/338f7c21-31b1-497c-af79-adcc71234a44)).
- **Styles as presets with a real preview** (Classic, Karaoke, Bold highlight, two words) and scope "All scenes / This
  scene" ([Riverside](https://mobbin.com/screens/1afabe30-54d7-407f-8a5b-920749d2a1ae),
  [ElevenLabs](https://mobbin.com/screens/74e7e348-0bf9-483e-a87e-4596a665b67d)).
- **Fine settings grouped**: typeface, size, capitalization, number of lines, automatic highlight, position
  ([VEED](https://mobbin.com/screens/ff4717e3-e2e3-4a93-9f57-73a4434f95b6)), entry and exit animation with timing
  ([Synthesia](https://mobbin.com/screens/3e96b0c0-b1d5-4262-912e-d1b79b734f50)).
- **A caption track on the timeline** with trimmable blocks and "Split" / "Add caption".
- **Assisted cleanup**: remove silences and filler words, showing how many ("3 filler words removed") and struck
  through in the text for review (Loom).
- **Caption language** selectable, and translations as separate tracks, reviewed by people who know the language.
- **Readability first**: contrast with a background or adjustable opacity, minimum size, two lines at most.
- **Viewer-side options** (size, color, background, opacity, position) with sample text and "Reset"
  ([Paramount+](https://mobbin.com/screens/f7b29c41-bea6-46ee-9001-01f0fb1f92b2),
  [Hulu](https://mobbin.com/screens/7f399d48-8dc3-4f9b-ad07-2d29cc1058c0)).

### Timing and segmentation

- Flag captions that appear too briefly for their length, and suggest splitting or extending.
- Keep captions in sync after editing the video (cuts move captions with them).
- Warn when animated "karaoke" styles reduce readability for people who read slowly.

## States and edge cases

- Batches: queued, validating, running, paused, cancelling, partially done, failed, expired results.
- Approvals: draft, submitted, in review, changes requested, approved, approval reset, rejected, withdrawn.
- Captions: auto-generated (unreviewed), edited, reviewed, translated; out of sync after edits.

## Accessibility specifics

- Progress and completion of batches announced; item errors reachable in a table.
- Approval actions keyboard reachable; timeline readable as a list.
- Captions meet WCAG 1.2.2 (prerecorded, A) and 1.2.4 (live, AA); meaningful sounds included.
- The caption editor itself is usable with a keyboard, including timing adjustments with numeric fields.

## Copy

- Batch summaries with counts and next actions.
- Approval notifications say what is waiting, from whom, and the deadline.
- Caption sound descriptions consistent and in the caption's language.

## Common mistakes and why they happen

- **Treating dependent items as independent** (partial imports that corrupt relationships).
- **Retries that duplicate effects.**
- **Approvals that stay valid after material changes.**
- **Auto-captions published without review.**
- **Captions without sounds or speakers.**

## Worked comparison: the same video, bad and good captions

**Weak captions.** Auto-generated, unreviewed: "were opening a new / clinic in porto next" (no capitalization or
punctuation, line break mid-phrase), "[MUSIC]" for every sound, three lines, white text on a bright background, 1.2
seconds on screen.

**Good captions.** "We're opening a new clinic / in Porto next month." Speaker identified when off-screen ("MARTA:");
"[phone rings]" where the sound matters to the story; two lines; a semi-opaque background; enough time to read.

## How to verify and measure

- **Batches**: failure rates, retries, duplicates, time to complete; test cancellation midway.
- **Approvals**: time to approve, changes requested, approvals reset, bottlenecks by approver.
- **Captions**: review with deaf and hard-of-hearing viewers; check reading speed and sync.

## References

- ElevenLabs — [batch list](https://mobbin.com/screens/4a16bd1e-72af-43f7-8a35-e40723de44db)
- Grok — [batch list](https://mobbin.com/screens/bd1deff9-c4b4-4f12-b129-ccbdd3a6d55c)
- OpenAI Platform — [batch detail](https://mobbin.com/screens/2405cd1e-66fd-4cf2-ae4e-f468328cad91)
- AWS — [batch summary with item errors](https://mobbin.com/screens/0dc7a3c3-26ec-45a8-8a79-69bb9fce85e8)
- Databricks — [run history and frequent errors](https://mobbin.com/screens/06b7cd16-d98c-423c-970d-ead120b13b54)
- Relevance AI — [pause, resume, cancel](https://mobbin.com/screens/8735a63d-e92d-431c-975e-e169ecb2102d)
- Shopify — [batch stages](https://mobbin.com/screens/10bda18e-95a0-4c93-8be9-3b3775477e90)
- Jira — [anti-example: manual refresh for progress](https://mobbin.com/screens/58b43a1e-81f2-4808-b7eb-af8a5104fa91)
- PlanetScale — [request status](https://mobbin.com/screens/78880fb1-c0dc-4307-a635-1fb9a0c5527e)
- GitLab — [request status and optional approval](https://mobbin.com/screens/b789ca62-550f-4b63-981f-35a051c94ad6)
- Toggl Track — [request changes](https://mobbin.com/screens/6e5941be-fd02-4fde-af30-bd91b951db8e)
- Deel — [steps with timeframes](https://mobbin.com/screens/04cf3d45-777b-4066-a5b2-b13598930ce7)
- Air — [anchored comments on versions](https://mobbin.com/screens/f5d539dc-b847-4a45-83fb-b848a32e0410)
- Fiverr — [revision request thread](https://mobbin.com/screens/949a894c-dcf2-487d-83f3-2490844e395f)
- Devin — [review in parts](https://mobbin.com/screens/db4dc31e-376d-4bdd-907e-c99d56e8e964)
- Teams — [approve all](https://mobbin.com/screens/e6210226-bf0f-4209-8bd5-08263435afa8)
- Descript — [editable transcript](https://mobbin.com/screens/c373ca6f-8984-4d1b-bc34-2f562d341063)
- Loom — [transcript and cleanup](https://mobbin.com/screens/338f7c21-31b1-497c-af79-adcc71234a44)
- Riverside — [caption style presets](https://mobbin.com/screens/1afabe30-54d7-407f-8a5b-920749d2a1ae)
- ElevenLabs — [caption style presets](https://mobbin.com/screens/74e7e348-0bf9-483e-a87e-4596a665b67d)
- VEED — [fine caption settings](https://mobbin.com/screens/ff4717e3-e2e3-4a93-9f57-73a4434f95b6)
- Synthesia — [caption animation](https://mobbin.com/screens/3e96b0c0-b1d5-4262-912e-d1b79b734f50)
- Paramount+ — [viewer caption options](https://mobbin.com/screens/f7b29c41-bea6-46ee-9001-01f0fb1f92b2)
- Hulu — [viewer caption options](https://mobbin.com/screens/7f399d48-8dc3-4f9b-ad07-2d29cc1058c0)
