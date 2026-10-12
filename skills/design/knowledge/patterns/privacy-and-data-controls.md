# Privacy and data controls

Privacy controls let people understand and decide what happens to their data: what is collected, how it is used, who
it is shared with, how to get a copy and how to delete it. Good privacy design explains consequences in plain words
and treats export and deletion as real processes with states, not as buttons that disappear into the void.

## The problem and who has it

- **People** who want to know what the product knows about them and control it.
- **People leaving** a product who want their data or want it gone.
- **Organizations** that must comply with privacy laws in each region they serve.

When privacy controls fail: consent is meaningless, data requests take months without feedback, deletion is
incomplete or surprising, and trust erodes.

## Questions to ask before deciding

- **What data is collected, for which purposes**, and which purposes are optional?
- **Which laws apply** in each region (consent requirements, data access and deletion rights, children's data)?
- **What does deletion actually delete** (backups, logs, data shared with others, data required by law to keep)?
- **How long do exports take**, and how are they delivered securely?
- **Who else is affected** by a person's deletion (shared documents, team workspaces)?

## A map of data and consequences

Before designing the screens, map:

| Data | Purpose | Required? | Who sees it | Retention | Consequence of turning off |
| --- | --- | --- | --- | --- | --- |
| Email | Account, receipts | Required | The company | While the account exists | — |
| Activity for recommendations | Personalization | Optional | The company | 12 months | Less relevant suggestions |
| Activity for ads elsewhere | Advertising | Optional | Ad partners | Varies | Ads less related to you |
| Content for AI training | Model improvement | Optional | The company | Varies | None for your use of the product |

This map drives honest copy and settings.

## Anatomy and behavior

- **A "Privacy and data" section** in the account, with blocks: what is shared, download my data, delete data, delete
  the account ([Pinterest](https://mobbin.com/screens/6c80f8e4-8733-4a1d-a624-18b95def1471),
  [Adobe](https://mobbin.com/screens/34681a38-01aa-4942-a4b0-eeb870dab450)).
- **Each data-use permission with a concrete sentence** ("Use your activity to improve ads on other sites") and "Learn
  more"; separate AI training into its own toggle (Pinterest, Adobe).
- **Request a copy of data**: selectable format, how long it takes ("Up to 30 days") and how it arrives; a history of
  requests with status and download ([Airbnb](https://mobbin.com/screens/49df298a-b4e9-43b4-a3e7-def86bfa1dbf),
  [Dropbox Dash](https://mobbin.com/screens/66db5892-c38d-4fa6-b461-6063ae12a173)).
- **Delete partial data** with selectable scope (before a date, which sources) and a confirmed result ("2 transactions
  deleted"; [Monarch](https://mobbin.com/screens/25301b5b-e74f-46ca-b5aa-85666d49c25c)).
- **Delete the account** with consequences stated ("You'll lose your progress. This can't be undone") and what it does
  **not** do ("Doesn't cancel your app store subscription"; [Duolingo](https://mobbin.com/screens/2a93dd58-8d48-4fb6-8300-61b82ac8194c)).
- **Connected apps** listed with their access and "Remove access"; an explicit empty state ("No connected apps").
- **The destructive button** styled as dangerous but not the most prominent element on the page; confirmation separate.

### Export and deletion as processes

| Process | States |
| --- | --- |
| Export | Requested → preparing → ready (link expires on…) → downloaded / expired |
| Deletion | Requested → grace period (cancel until…) → deleting → completed (with what remains and why) |

- Confirm requests by email, especially deletion.
- Offer a grace period for account deletion where appropriate, with a clear cancel option.
- Say what must be kept by law (invoices for tax purposes) and for how long.
- For shared content, explain what happens: "Documents you shared with your team stay in the team's workspace."

## Consent

- **Consent must be informed, specific and freely given**: no pre-checked boxes, no bundling unrelated purposes, no
  degrading the core service for refusing optional tracking (where laws prohibit it).
- **Accepting and refusing are equally easy** (see [ethical persuasion](../12-psychology-and-ethical-persuasion.md)).
- **Changing your mind** is as easy as the first choice, from settings at any time.
- **Regional differences**: some regions require opt-in consent for tracking, others allow opt-out; design for the
  strictest region you serve, or adapt by region honestly.

## States and edge cases

- Requests from people without accounts (data about them held by the company).
- Data shared with integrations: removal from partners may be separate.
- Account deletion when the person owns a team workspace (transfer ownership first).
- Children's accounts managed by guardians (see [family and parental controls](family-and-parental-controls.md)).

## Accessibility specifics

- Settings with labels and descriptions associated; toggles announce state.
- Long privacy explanations structured with headings and plain language.
- Export files in accessible formats (CSV, JSON, readable PDFs).

## Copy

- Plain-language purposes, not legal phrases.
- Consequences of each choice stated.
- Retention and timelines specific.
- Available in the person's language; legal texts per jurisdiction.

## Common mistakes and why they happen

- **Vague purposes** ("to improve your experience").
- **Bundled consent.**
- **Deletion that silently keeps data** or deletes shared content unexpectedly.
- **Exports without status.**
- **Hiding account deletion.**

## Worked comparison

**Weak.** One toggle "Personalized experience" that turns on ad tracking, AI training and recommendations together;
"Delete account" sends an email to support; nothing happens for weeks.

**Strong.** Three toggles with concrete descriptions; "Download your data" with a status list; "Delete account" shows
consequences, a 14-day grace period, what is kept by law, and sends a confirmation email.

## How to verify and measure

- **Test** comprehension: can people say what each setting does?
- **Measure** request completion times, support contacts about privacy, consent rates by option (balanced choices
  indicate honest design).

## References

- Pinterest — [privacy section and AI training toggle](https://mobbin.com/screens/6c80f8e4-8733-4a1d-a624-18b95def1471)
- Adobe — [privacy section](https://mobbin.com/screens/34681a38-01aa-4942-a4b0-eeb870dab450)
- Airbnb — [request a copy of data](https://mobbin.com/screens/49df298a-b4e9-43b4-a3e7-def86bfa1dbf)
- Dropbox Dash — [data request history](https://mobbin.com/screens/66db5892-c38d-4fa6-b461-6063ae12a173)
- Monarch — [delete partial data](https://mobbin.com/screens/25301b5b-e74f-46ca-b5aa-85666d49c25c)
- Duolingo — [delete account consequences](https://mobbin.com/screens/2a93dd58-8d48-4fb6-8300-61b82ac8194c)
