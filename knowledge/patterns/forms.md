# Forms

A form is a conversation: it asks for the minimum, in the order the person thinks, and raises problems where they
happen and when they matter. Forms are where people give the product something — data, money, consent — and where
most friction, abandonment and errors concentrate.

## The problem and who has it

People fill forms to get something done: create an account, pay, book, apply, configure. They rarely want to fill the
form itself. Every field is a cost: time, effort, privacy, and a chance to make a mistake.

When forms are designed badly:

- **People abandon** tasks they wanted to complete.
- **Data quality drops**: wrong formats, fake answers to required fields people did not understand.
- **Support costs rise**: "I can't submit", "it says invalid but doesn't say why".
- **People are excluded**: forms that reject their name, address or phone number format, or that cannot be completed
  with a keyboard or screen reader.

## Questions to ask before deciding

- **Why is each field needed?** Who uses this data, when, for what? Could it be asked later, inferred, or skipped?
- **How often is this form filled?** Once (sign-up), occasionally (address change), or many times a day (an internal
  data entry tool)?
- **What happens if a field is wrong?** A typo in a newsletter email is cheap; a wrong bank account is not.
- **Does the person have the information at hand?** Tax IDs, policy numbers and document numbers often require leaving
  to find them.
- **Which countries, languages and scripts** will people fill it in?
- **What device and context?** Phone keyboard, autofill, password managers, assistive technology.
- **Is it all-or-nothing, or can progress be saved?**

## Alternatives and how to choose

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Few fields, one decision | **Single page form** | Everything visible; easy to review | Becomes long if fields grow |
| Many fields in independent groups | **Single page with sections** | Overview with structure | Requires good grouping |
| Many fields with dependencies or a natural sequence | **Multi-step wizard** | Focus on one part at a time; branching | Loses overview; needs a review step (see [wizards](wizards-and-collaboration.md)) |
| Frequently edited settings | **Inline editing or save per section** | Small changes stay small | Many save points to communicate |
| Data that can be inferred or imported | **Don't ask**: infer, import, pre-fill | Removes effort | Inferences can be wrong; must be visible and editable |
| A short, conversational interaction | **One question at a time** | Feels lighter for simple, personal questions | Slow for experts; hides what is coming; poor for review |
| Large amounts of structured data | **Import (spreadsheet, integration)** | Avoids retyping | Mapping and validation complexity |

## When to use a form and when not

- Not every input needs a form: a toggle saves immediately; a search field is not a form; a command palette can replace
  a settings form for experts.
- "One question per screen" is popular in onboarding and surveys. It works for short, simple, sequential questions. It
  works poorly when answers depend on each other, when people need to compare or review, or when people fill the form
  often.

## Anatomy and behavior

### Labels, help and placeholders

- **Label above the field, always visible.** The placeholder is an example, never the label: it disappears when typing,
  usually has low contrast, and is not reliably read by screen readers (WCAG 3.3.2 Labels or Instructions, A).
- **Help goes between the label and the field**, not in a tooltip: "Lowercase letters, numbers and hyphens only"
  ([Hashnode](https://mobbin.com/screens/b7a1bb30-1f89-4b6c-9c1e-ad6349c62827)).
- **Mark what is different.** If most fields are required, mark the optional ones with "(optional)"
  ([Stripe in Claude](https://mobbin.com/screens/6e3d049f-83d9-4d35-912e-3763c1030a49)); if most are optional, mark the
  required ones. Unexplained asterisks are not enough.
- **One field per idea; the field's width hints at the expected length**: a short postal code, a long address.

### Grouping and layout

- **Group with section headings** when there are more than five or six fields ("Where should we send it?" / "How can
  we reach you?", [Apple](https://mobbin.com/screens/c51018c6-56dd-4b9d-b8f2-44021298b983)). Headings phrased as
  questions guide.
- **One column.** Two columns only for pairs that are read together (expiry date and security code). Multi-column forms
  break reading order and make people miss fields.
- **Related options** inside a `fieldset` with a `legend` (a group of radio buttons, an address).

### Buttons

- **The button names the outcome**: "Create account", "Save changes", "Subscribe", "Pay 84.00 EUR" — not "Submit" or
  "OK".
- **A secondary action** (Cancel, Back) is visually lighter and placed consistently.

### Choosing controls

| Data | Control | Why |
| --- | --- | --- |
| Two to five mutually exclusive options | Radio buttons (visible) | All options visible; one click |
| Many mutually exclusive options | Select or combobox with search | Saves space; searchable |
| Several selectable options | Checkboxes | Clear multi-select |
| On/off that applies immediately | Switch | Communicates immediate effect |
| On/off submitted with the form | Checkbox | Switches imply immediate effect |
| A number in a small range | Stepper or segmented control | Fast adjustment |
| A precise number | Text input with numeric keyboard | Fast, exact |
| A date people know (birth date) | Text inputs or a typed date with format hint | Calendars are slow for distant dates |
| A date near today, or a range | Calendar picker plus typed input | Visual context of weekdays |
| A country, timezone, currency | Searchable select, with sensible default | Long lists, known names |

## Validation

- **When:** when the person leaves the field (blur) or on submit. Not while typing for the first time, and never show
  every "This field is required" when the form opens
  ([anti-example: Copy.ai](https://mobbin.com/screens/4ab58eec-6cef-4abc-b172-e8943044e1ae)). Once a field has shown
  an error, revalidate while typing so the error disappears as soon as it is fixed.
- **Where:** below the field, with a border and an icon on the field and the message in text
  ([Apple](https://mobbin.com/screens/c51018c6-56dd-4b9d-b8f2-44021298b983),
  [Stripe](https://mobbin.com/screens/6e3d049f-83d9-4d35-912e-3763c1030a49)). Color never alone (1.4.1).
- **What it says:** what is wrong and how to fix it. "Use 35 characters or fewer" beats "Invalid value" (3.3.1 Error
  Identification, A; 3.3.3 Error Suggestion, AA).
- **Password rules as a live list** with a check per rule while typing
  ([Relevance AI](https://mobbin.com/screens/20d3040b-464f-4ec9-b37f-6d94043cf3da),
  [GoFundMe](https://mobbin.com/screens/39fa9fa2-7e8b-457f-b386-fd26b2f8383b)). Show the rules before the error.
- **Sign-in: a deliberately generic error** ("Email or password is incorrect") on both fields, so the form does not
  reveal which accounts exist ([Reddit](https://mobbin.com/screens/ad4fcadb-3fc8-475b-aaf7-b1905fde03c5)).
- **On submit with errors:** focus the first field with an error and, when there are several errors or the form is
  long, show a summary at the top with links to each field. Associate errors with `aria-describedby` and mark fields
  with `aria-invalid="true"`.

### Local, remote and cross-field validation

| Type | Example | Design |
| --- | --- | --- |
| **Local** (format) | Email shape, required field | Validate on blur, instantly |
| **Remote** (needs the server) | Username available, discount code valid, address deliverable | Show a checking state in the field; do not block typing; handle timeouts |
| **Cross-field** | End date after start date; password confirmation | Show the error on the field the person should change, explaining the relationship |

Be liberal in what you accept: trim spaces, accept phone numbers with spaces and dashes, accept dates in the formats
people type for their locale, and normalize them.

## Disabled buttons: with care

Many products disable "Continue" until everything is valid
([Substack](https://mobbin.com/screens/286c847a-7843-4ff8-a13f-4fd526bd635f),
[Otter](https://mobbin.com/screens/84f863fc-a31b-452d-9006-bdfdb6db3db9)). The problem: a disabled button does not
explain why, often cannot receive focus, and has low contrast. Prefer:

1. An enabled button that, when pressed, validates and takes the person to the first error. Or
2. A disabled button **only** when what is missing is visible and obvious (a single field), with the reason written
   nearby.

## International data

Forms are where products most often assume one country's conventions. See
[content and localization](../24-content-and-localization.md).

### Names

- A single "Full name" field fits more people than "First name / Last name". Many people have one name, several
  given names, several family names, or family name first.
- If you need a short name for greetings, ask "What should we call you?" separately.
- Accept any characters: accents, apostrophes, hyphens, spaces, non-Latin scripts. Do not limit length aggressively.
- Do not force capitalization.

### Addresses

- Ask for the country first and adapt fields and labels to it, or use a multi-line free-form address when structured
  data is not needed.
- Postal code formats differ, and some countries have none; do not validate with one country's pattern.
- Some countries need a district or neighborhood; some have no street numbers; building and apartment information
  varies.
- Use `autocomplete` values (`address-line1`, `postal-code`, `country`) so browsers fill them.

### Phone numbers

- Accept any formatting (spaces, dashes, parentheses, leading `+`).
- Use a country code selector with a sensible default from the person's locale, and store numbers in international
  format.
- Do not reject valid numbers with a fixed-length rule.

### Dates and numbers

- Accept the person's locale format (day-month-year vs. month-day-year; comma or dot as decimal separator).
- Show the expected format as help text when typing is required ("DD/MM/YYYY" localized).
- Use `inputmode="decimal"` or `"numeric"` to get the right keyboard.

## Shortcuts that respect people

- **Browser autofill** with correct `autocomplete` values (`email`, `new-password`, `one-time-code`, `postal-code`)
  (WCAG 1.3.5 Identify Input Purpose, AA).
- **The right keyboard on mobile** (`inputmode="numeric"`, `type="email"`).
- **Show/hide password** with a toggle inside the field.
- **Paste always allowed**, including in password confirmation and code fields.
- **Do not ask to confirm email or password** if there is a show-password toggle or email verification.
- **Do not ask for the same information twice** in a process (3.3.7 Redundant Entry, A).
- **Save drafts** of long forms; warn before leaving with unsaved changes.

## Long forms and settings

- **Settings layout**: sections with a title and description on one side and fields on the other, or a card per
  section with its own Save ([Hashnode](https://mobbin.com/screens/b7a1bb30-1f89-4b6c-9c1e-ad6349c62827)).
- **Global save** when changes depend on each other and must be validated together: a bar that appears only when there
  are changes ("You have unsaved changes · Discard · Save").
- **Autosave** for simple preferences (switches), with subtle confirmation ("Saved") and undo.

## States and transitions

| State | What the person sees |
| --- | --- |
| Empty | Labels, help, defaults where appropriate; no errors yet |
| Filling | Field-level validation after blur |
| Checking (remote validation) | A small "Checking…" in the field; typing still allowed |
| Submitting | The submit button shows "Creating account…" and is disabled for this submission only |
| Submitted, confirmed | Success message or the next step |
| Submission failed (validation) | Errors in place, summary if several, focus moved, values kept |
| Submission failed (server or network) | A message above the button with what happened and what to do; all values kept |
| Submission outcome unknown | "We couldn't confirm your submission. Check [where] before submitting again." |
| Draft saved | "Draft saved 10:42" near the actions |

Prevent double submission: disable the button while the request is in flight, and make costly submissions idempotent
on the server (see [states, transitions and concurrency](../23-states-transitions-and-concurrency.md)).

## Edge cases

- Very long names, emails and addresses.
- Pasted values with spaces or line breaks.
- Autofill filling hidden or wrong fields.
- Session expiry in the middle of a long form (save drafts; warn before expiry).
- The person navigates back with the browser button.
- A field becomes required because of an earlier answer (conditional fields).
- Values that are valid but unusual (a 100-year-old person, a company with no tax ID).

## Accessibility specifics

- Visible, programmatically associated labels (`<label for>`).
- Instructions before the field, not only in placeholders.
- Errors identified in text, associated with fields, with suggestions; a summary for long forms.
- Required fields indicated in text, not only with color or an unexplained asterisk.
- Logical tab order; no positive `tabindex`.
- Grouped controls in `fieldset` with `legend`.
- Timeouts warned and extendable (2.2.1).
- Review and correction before legal or financial submissions (3.3.4, AA).

## Copy

- **Labels** are short noun phrases; **help** says what the data is for or its format; **errors** say how to fix.
- **Explain why sensitive data is needed**: "We ask for your date of birth to confirm you're over 18."
- **Buttons** name the outcome and, where relevant, the amount.
- In other languages, follow the language's conventions for labels and button grammar; keep error messages calm and
  specific, without blaming.

## Common mistakes and why they happen

- **Asking for everything up front** — because each team wants its field. Justify each field.
- **Placeholder labels** — because they look clean in mockups.
- **Validating while typing** — because it seems helpful; it shows errors before people finish.
- **Disabled submit buttons with no explanation** — copied from popular apps.
- **First name / last name** — because databases were designed that way.
- **Rejecting real input** — strict patterns written for one country.

## Worked comparison

**Same content:** a delivery address form for an online shop selling in several countries.

**Weak form.** Two columns; "First name", "Last name", "Address", "City", "State", "ZIP code" (required, 5 digits),
"Phone" (10 digits); placeholders as labels; a disabled "Submit" until everything is valid.

- A customer in Ireland cannot proceed: the 5-digit ZIP is required, and Irish Eircodes have a different format.
- A customer with one name enters "-" as last name.
- A customer typing "+351 912 345 678" gets "Invalid phone".
- Nobody knows why "Submit" stays disabled.

**Strong form.** Country first (defaulted from locale, changeable); then fields adapted to the country with local
labels; "Full name"; phone with a country code selector accepting any formatting; postal code validated only where the
country uses one; one column; "Continue to payment" enabled, validating on press and focusing the first error; the
order summary visible.

## How to verify and measure

- **Test** with people from several countries, on mobile, with autofill and password managers.
- **Check** keyboard-only completion and a screen reader pass.
- **Measure** completion rate, time to complete, error rate per field (which fields cause the most errors), and
  abandonment per field.
- **Guardrails**: data quality (invalid addresses, failed deliveries), support contacts.

## References

- Hashnode — [help text and settings layout](https://mobbin.com/screens/b7a1bb30-1f89-4b6c-9c1e-ad6349c62827)
- Stripe in Claude — [marking optional fields and errors](https://mobbin.com/screens/6e3d049f-83d9-4d35-912e-3763c1030a49)
- Apple — [grouped sections and errors](https://mobbin.com/screens/c51018c6-56dd-4b9d-b8f2-44021298b983)
- Copy.ai — [anti-example: errors shown on open](https://mobbin.com/screens/4ab58eec-6cef-4abc-b172-e8943044e1ae)
- Relevance AI — [live password rules](https://mobbin.com/screens/20d3040b-464f-4ec9-b37f-6d94043cf3da)
- GoFundMe — [live password rules](https://mobbin.com/screens/39fa9fa2-7e8b-457f-b386-fd26b2f8383b)
- Reddit — [generic sign-in error](https://mobbin.com/screens/ad4fcadb-3fc8-475b-aaf7-b1905fde03c5)
- Substack — [disabled continue](https://mobbin.com/screens/286c847a-7843-4ff8-a13f-4fd526bd635f)
- Otter — [disabled continue](https://mobbin.com/screens/84f863fc-a31b-452d-9006-bdfdb6db3db9)
