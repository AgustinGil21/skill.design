# Interface writing

How a designer writes the words of an interface: labels, buttons, messages, empty states, errors, confirmations and
help. Copy is half of the interface. Written well, it replaces tooltips, tours and documentation; written badly, no
layout can save it.

Every rule in this file is stated by **function**, so it holds in any language. English examples illustrate the
rule; when a rule depends on English grammar, the note says so and explains the equivalent decision elsewhere. For
writing in other languages, read this together with [content and localization](24-content-and-localization.md).

## What it is and why it matters

Interface copy is not decoration added after the design. It is how the product explains what things are, what will
happen and what went wrong. Copy decisions are design decisions:

- A label decides whether people recognize the thing they are looking for.
- A button decides whether people know what will happen before they act.
- An error decides whether people recover or give up.
- A confirmation decides whether people understand what they are about to lose.

When copy needs a long explanation, it is often signaling a structural problem: two concepts that should be one, an
action whose effect is unclear, a setting that should not exist. Fix the structure, then the words.

## Principles

### Clear before clever

People read interfaces while trying to do something else. Wordplay, puns and brand jokes cost attention and rarely
translate. Personality belongs in tone, word choice and moments of low stakes (an empty state, a success), never at the
expense of understanding.

**Where it stops holding.** Clarity does not mean "never make people think". Some decisions should make people pause:
deleting an account, sharing data publicly, confirming a large payment. There, the copy should slow reading down by
stating the consequence plainly.

### Short, but complete

Remove words that do not change the meaning. Do not remove information the person needs. "Saved" is complete when the
person can see what was saved; "Saved to Shared drive › Q3 reports" is needed when the destination is not obvious.

### The important part first

Lead with the consequence or the action, not with the preamble. "3 files will be deleted. This can't be undone." is
better than "Please note that if you continue, the files you selected, which are 3, will be deleted and…". People
scan the start of sentences and stop.

### The person's words, not the system's

Use the words people use for things, learned from research, support tickets and search logs (see
[information architecture](22-information-architecture.md)). "Video", not "job". "Version", not "spec revision".
"Your card was declined", not "Payment processor error 402".

### One term per concept

Keep a glossary. If the product says "Delete" in one place and "Remove" in another, people wonder whether they do
different things. If they do (remove from a list vs. delete permanently), the difference must be consistent and
explained where it matters.

### Active, direct and addressed to the person

Say who does what. "We couldn't save your changes" is clearer than "Changes could not be saved". Choose a form of
address and keep it everywhere in that language (see "Voice and tone" below).

### No blame, no drama

"We can't find that page" rather than "You entered a wrong address". No "Oops!", no "Uh-oh", no exclamation marks in
errors. Calm copy helps people recover; dramatic copy makes them anxious about the next action.

### Numbers, not words

"3 files", "in 5 minutes", "2 of 7". Digits are faster to scan in most languages. Format them with the person's locale
(decimal and grouping separators, date order).

## Writing by moment: before, during and after

Copy is a system that accompanies the person through an action. Decide what they need to know at each moment.

| Moment | What the person needs | Example |
| --- | --- | --- |
| **Before** acting | What will happen, what it costs, whether it can be undone | "Uses 2 credits", "You can change this later", "Recipients will get an email" |
| **While** it happens | That it is happening, how long, whether they can leave | "Analyzing 3 of 12 files…", "You can close this window" |
| **After** it happened | What changed, where to find it, what's next | "Video exported to Downloads · Open" |
| **When it failed** | What failed, why if known, what to do, that their work is safe | "We couldn't upload clip.mov (file too large). Your other 4 files were uploaded." |
| **When it's unknown** | What is known, what is not, what not to do | "We couldn't confirm the payment yet. Don't pay again — we're checking." |

Most bad copy comes from writing only the "after" moment and forgetting the others.

## Messages according to what is actually known

The interface should never claim more certainty than the system has. Match the wording to the state (see
[states, transitions and concurrency](23-states-transitions-and-concurrency.md)):

| What the system knows | Wording pattern | Avoid |
| --- | --- | --- |
| It succeeded | State the result: "Invoice sent to ana@lisboacafe.pt" | "Success!" with no content |
| It is in progress | Say what and, if possible, how long: "Sending… usually under a minute" | A bare spinner with "Loading" |
| It was accepted, not finished | "Request received. We'll email you when your export is ready." | "Done" |
| It failed for a known reason | Reason and fix: "The card expired. Use another card." | "Payment failed" |
| It failed for an unknown reason | Admit it, keep work safe, give a next step: "Something went wrong on our side. Your draft is saved. Try again in a few minutes." | "Error 500" |
| The outcome is unknown | "We can't confirm whether it was sent. Check Sent before trying again." | "Failed. Try again." |
| Partly succeeded | Counts and next step: "362 imported, 16 need your attention · Review" | "Import complete" |

## By element

| Element | Rule (by function) | English example | Avoid |
| --- | --- | --- | --- |
| **Button** | Names the outcome of the action and, when needed, the object | "Create project", "Delete 3 videos" | "OK", "Submit", "Yes" |
| **Link** | Says where it leads or what it opens | "See pricing", "Read the refund policy" | "Click here", "More" |
| **Page title** | Names the place, or the question it answers | "Videos", "What do you want to create?" | "Entity management" |
| **Dialog title** | States the task or the question | "Delete project "Aurora"?" | "Warning", "Are you sure?" |
| **Field label** | A short noun phrase for the data | "Work email" | "Please enter your email here" |
| **Field help** | What the data is for, or its format, in one line | "We'll use it to tell you when your export is ready" | Repeating the label |
| **Placeholder** | An example, never the label or an instruction | "name@company.com" | "Type your email" |
| **Error** | What happened and how to continue | "The card expired. Try another card." | "Payment declined" alone |
| **Empty state** | What will appear here and the first action | "Your videos will appear here. Create your first one." | "No data" |
| **Success** | What happened, briefly, and where it is | "Video exported" | "Operation completed successfully!" |
| **Confirmation** | The concrete consequence | "All 12 versions will be deleted and can't be recovered." | "Are you sure?" |
| **Long loading** | What is happening | "Analyzing 3 of 12 files…" | "Loading…" |
| **Tooltip** | Clarifies an icon or a term; never essential information | "Pin to top" | Instructions people need to complete the task |
| **Notification** | Who did what, about what, and why it matters to you | "Laila assigned you "Q3 budget review" · due Friday" | "You have a new notification" |

### Buttons: naming the outcome

The button is the most important piece of copy on most screens, because it is the moment of commitment.

- **Name the result, not the gesture.** "Send invoice" tells what happens; "Submit" only tells you pressed something.
- **Include the object when there could be doubt.** "Delete" in a dialog titled "Delete project?" is enough; "Delete"
  on a toolbar acting on a selection should say "Delete 3 items".
- **Show scope and cost when they matter.** "Send to 12 people", "Pay 84.00 EUR", "Use 2 credits".
- **Keep the verb of the dialog title.** Title "Archive this video?" → buttons "Cancel" and "Archive". People can
  answer by reading the buttons alone.
- **Avoid "Yes" and "No"**: they force people to re-read the question, and they are dangerous when the question is
  phrased negatively ("Don't save changes?").

**Language note.** English buttons are usually imperative verbs. In many other languages, interfaces conventionally
use the infinitive ("Projekt löschen", "Supprimer le projet") or a specific imperative form tied to the form of
address. Follow the established convention of the language and platform; the function — naming the outcome — stays.

### Scope of verbs

Many verbs hide their scope. Choose the one that tells the truth about who is affected.

| Ambiguous | What people may not know | Clearer |
| --- | --- | --- |
| "Share" | With whom? Can they edit? Will they be notified? | "Invite 12 people to edit" / "Copy view-only link" |
| "Remove" | From this list, or from everywhere? | "Remove from playlist" / "Delete from library" |
| "Publish" | Visible to whom? Indexed by search engines? | "Publish to your team" / "Publish publicly" |
| "Sync" | In which direction? Will something be overwritten? | "Import contacts from Google (doesn't change Google)" |
| "Reset" | Which settings? Can it be undone? | "Restore default notification settings" |

### Errors: anatomy

A complete error message has up to four parts. Not every error needs all four, but each missing part should be a
decision.

1. **What happened**, in the person's terms. "We couldn't send your message."
2. **Why**, if it is known and useful. "You're offline."
3. **What to do.** "It will send when you reconnect." / "Check the number and try again."
4. **What is safe.** "Your text is saved."

Place the error where the problem is (next to the field, on the failed item), not only at the top of the page.

Distinguish errors the person can fix (wrong format, missing field) from errors they cannot (server down, service
unavailable). For the first, say exactly what to change. For the second, apologize briefly, say what is safe and when
to try again; do not ask them to "check your input".

### Empty states

Empty states are the first thing new people see and the moment they decide whether the product is worth the effort.
Distinguish them:

| Empty because… | Say |
| --- | --- |
| Nothing has been created yet | What will live here, why it is useful, and how to create the first one |
| A search or filter returned nothing | What was searched, and how to widen it: "No invoices match "Lisboa" in Overdue. Search all invoices" |
| The person has no access | That content exists but they cannot see it, and who can grant access |
| Everything is done | The good news, without forcing a celebration: "No pending approvals" |
| It failed to load | That it is an error, not emptiness; see errors |

### Confirmations

Confirm only what deserves it (see [dialogs, overlays and confirmations](patterns/dialogs-overlays-and-confirmations.md)).
When you do:

- The title asks the specific question: "Delete "Q3 budget"?".
- The body states the consequence concretely: what will be lost, who is affected, whether it can be recovered.
- The confirming button repeats the action: "Delete spreadsheet".
- For high-stakes actions, name the thing: "Delete 1,248 contacts" rather than "Delete selected".

## Voice and tone

**Voice** is the product's stable personality in words; **tone** adapts it to the moment. A product can be warm and
plain in its voice, and become more neutral and precise in an error about money.

- Decide the voice once per brand, in a short guide with "we say / we don't say" examples.
- Adapt tone to stakes: lighter in empty states and successes, plain and careful in errors, money, security and
  privacy.
- Do not use humor where people may be stressed, confused or losing something.

### Form of address

Many languages require choosing how to address the person (for example tú, vos or usted in Spanish; du or Sie in
German; tu or vous in French). This is a brand and cultural decision: decide it once per language and apply it
everywhere, including emails and legal-adjacent text. English has a single "you", so tone carries the formality
instead. See the table in [content and localization](24-content-and-localization.md).

## Capitalization and punctuation

These conventions depend on the language. Decide them per language and keep them consistent.

- **English**: choose title case or sentence case for headings and buttons and apply it everywhere. Sentence case is
  easier to read and to localize, and is the more common modern choice.
- **Most other languages** use sentence case for interface text by default. German capitalizes all nouns as a rule of
  the language. Do not import English title case into other languages.
- **Final periods**: commonly omitted in buttons, labels and titles, and used in full sentences of help text and
  messages. Pick a rule and apply it consistently.
- **Language-specific punctuation**: Spanish opening question and exclamation marks (¿ ¡), French spacing before some
  punctuation, different quotation marks («», „“, 「」). Follow the language's typographic rules.
- **No exclamation marks in errors**, in any language.

## Inclusive and accessible language

- **Avoid unnecessary gendered forms.** In languages with grammatical gender, prefer structures that do not assign a
  gender to the reader when it is unknown (for example, rephrasing a greeting so it does not inflect for gender). Never
  infer gender from a name.
- **Avoid idioms, slang and cultural references** in core interface copy; they exclude people reading in a second
  language and do not translate.
- **Plain language**: short sentences, common words, one idea per sentence. Interface copy should be understandable by
  someone reading quickly, in a second language or with a cognitive disability.
- **Do not rely on sensory characteristics**: "Click the green button on the right" fails for people who cannot see
  color or position (WCAG 1.3.3 Sensory Characteristics, A). Name the button instead.
- **Visible text and accessible names must match**: when a control has visible text, its accessible name must contain
  that text, ideally starting with it, so voice-control users can say what they see (2.5.3 Label in Name, A).
- **Explain abbreviations** the first time, or avoid them.

## Variables, plurals and localization

- **Write complete sentences with named variables**, never fragments joined in code. See
  [content and localization](24-content-and-localization.md).
- **Handle plurals with a message format** that supports each language's plural rules, and write a separate message
  for zero.
- **Give every variable context** for translators: what it contains, its maximum length, whether it is a name, a
  number or a date.
- **Leave room for longer translations** in every container.
- **Avoid reusing one string for two meanings.** The same English word can be a verb in one place and an adjective in
  another; translations differ.

## Microcopy that pays off

- "You can change this later" on decisions that look permanent but are not.
- The cost before the action: "Uses 2 credits", "Billed annually: 96.00 USD".
- Why a piece of data or a permission is requested: "We use your location to show clinics near you."
- What happens after pressing the button: "We'll email you a link to confirm."
- How long something takes: "Usually takes 2–3 minutes."
- What is safe when something fails: "Your draft is saved."

## AI-generated content in the interface

When the interface shows text written by an AI system:

- Label it as generated where people need to judge its reliability.
- Do not let generated text impersonate system messages about state, money or security; those must come from the
  system's real state.
- Make it easy to edit, regenerate and report.
- See [AI chat and agents](patterns/ai-chat-and-agents.md).

## Worked comparison

**Situation:** a teammate tries to delete a shared folder that contains files other people use.

**Weak copy.**

```
Title: Warning!
Body: Are you sure you want to do this?
Buttons: Yes   No
```

- "Warning!" says nothing about the task.
- "Do this" hides what "this" is.
- No consequence: the person does not know other people use these files.
- "Yes / No" forces re-reading; a hurried click on "Yes" deletes everything.

**Strong copy.**

```
Title: Delete "Client contracts 2026"?
Body: This folder has 48 files. Laila Haddad and 3 other people use it.
      Deleted files stay in Trash for 30 days, then they're gone for good.
Buttons: Cancel   Delete folder
```

- The title asks the specific question with the object's name.
- The body states the scope (48 files), who is affected and the real recovery window.
- The button repeats the action.
- In German, the same function would be expressed with the language's conventions (for example an infinitive button
  such as "Ordner löschen" and the chosen form of address); the structure — question, consequence, named action — is
  identical.

## Common mistakes

- **Writing copy last**, into boxes designed for lorem ipsum.
- **System words**: job, entity, record, sync failed, null.
- **Generic buttons**: OK, Submit, Continue everywhere.
- **Errors without a way out**: "Something went wrong" and nothing else.
- **False certainty**: "Success!" before the system knows.
- **Inconsistent terms**: Delete, Remove, Trash for the same action.
- **Concatenated sentences and English-only plural logic.**
- **Humor in serious moments.**
- **Title Case imported into languages that do not use it.**

## Checklist

- [ ] Every button names the outcome, with scope and cost where they matter.
- [ ] Every error says what happened, what to do and what is safe, placed where the problem is.
- [ ] Empty states are distinguished by cause.
- [ ] Confirmations state concrete consequences and repeat the action on the button.
- [ ] Wording matches what the system actually knows (success, pending, unknown, partial).
- [ ] Terms follow the glossary; one term per concept.
- [ ] Voice, tone and form of address are consistent per language.
- [ ] Capitalization and punctuation follow each language's conventions.
- [ ] No sensory-only instructions; visible labels match accessible names.
- [ ] Strings are complete messages with variables and plural rules, ready for translation.
