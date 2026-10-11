# Conversion forms (demo requests, sign-ups, contact)

The form is where the landing page's promise meets effort. Every field is a question the visitor must decide to
answer; every unclear requirement is a reason to leave. This file covers demo and sign-up pages, field decisions,
states and what happens after submitting. For general form design, see [forms](../patterns/forms.md).

## What it is and why it matters

A conversion form trades the visitor's information and time for something they want: a demo, an account, a quote, a
download. Designers balance two interests: the business wants qualified leads (more fields), the visitor wants the
thing (fewer fields). The best forms ask only what is needed **now** and get the rest later.

## Questions before designing

- **What happens right after submitting?** An account, a calendar, a sales email in a day? The form's design follows.
- **Which fields are truly needed now**, and who uses each one? If nobody uses a field, remove it.
- **What can be enriched or asked later** (company size from the domain, role in the call)?
- **Who fills it in?** A busy manager on a phone, a developer evaluating, a procurement officer.
- **What blocks submission today?** Look at field-level drop-off in analytics and at error rates.
- **Which markets?** Name formats, phone formats, consent rules differ.

## The demo or sign-up page

- **Two columns**: on one side what the visitor gets (three or four concrete points), social proof (logos, one quote,
  awards); on the other the form ([Canva](https://mobbin.com/sites/sections/7de33acb-1914-4393-8de1-69ec184642d6),
  [Customer.io](https://mobbin.com/sites/sections/34cc3fa8-48fb-4c32-8225-c30ee32986cf)). On mobile, the form comes
  first or right after a short summary.
- **Few fields**: work email, name, company, size; each extra field adds effort. The rest is asked in the call or
  enriched later ([Maze](https://mobbin.com/sites/sections/4a75419b-72ee-424e-aa87-242ef5f3a6aa) asks for three).
- **One intent question as buttons**, not a dropdown ("Your main goal?": Operate with robots · Advertise;
  [Robot.com](https://mobbin.com/sites/sections/d72d39a9-65f4-47a1-bd64-faf51e27af8b)).
- **Stated expectation**: "We'll contact you within one business day" (Robot.com); better still, schedule on submit.
- **Requirements next to the field** ("Work email, not personal") and not only after an error.
- **A self-serve alternative** below for people who do not want to talk to sales ("Ready to start? Try free";
  [Jasper](https://mobbin.com/sites/sections/dc8de370-bc88-4d86-9db3-93ba09af0b30)).
- **Clear consent**: short legal text, optional marketing not pre-checked.
- **A disabled button explains nothing**: normally keep it enabled and explain errors on submit; disable duplicate
  sending while a request is pending.
- **Captcha only if there is abuse**; prefer invisible protection, and never a challenge without an accessible
  alternative.

## Field decisions

| Field | Keep when | Alternatives |
| --- | --- | --- |
| Work email | Needed for service delivery | Accept personal addresses when appropriate |
| Full name | Personal follow-up | One "Name" field, not first/last, to fit all naming conventions |
| Company | Sales routing | Derive from email domain; ask in the call |
| Company size | Routing to sales vs. self-serve | Buttons with ranges; skip for self-serve sign-up |
| Phone | Sales calls by phone are the norm in this market | Optional with reason ("for a call instead of email") |
| Role | Tailoring the demo | Ask in the call |
| "How did you hear about us?" | Attribution matters and is not tracked | Analytics; optional at the end |
| Message | Contact forms | Optional, with an example of what helps |

### Input details

- `autocomplete` values (`email`, `name`, `organization`, `tel`), `type="email"`, `inputmode` for phones.
- Labels visible above fields; placeholders are not labels.
- One column; related short fields side by side only on wide screens.
- Phone fields accept common international formats and explain actual service restrictions; country is changeable.
- Name fields support the scripts and names people use; explain necessary storage limits without Latin-only rules.

## States

| State | What the visitor sees |
| --- | --- |
| Empty | Labels, requirements, the expected next step |
| Typing | No errors until the field is left or the form submitted |
| Invalid field | Message next to the field saying how to fix it; summary at the top on submit for long forms |
| Submitting | Button shows progress and prevents double submission; fields keep their values |
| Network or server error | Say whether receipt is known; preserve data and provide safe status checking |
| Already registered | "You already have an account — sign in" or "We already have your request" |
| Success | What happens next, when, and an action (book now, check email, explore the docs) |

Focus moves to the error summary or the first invalid field on submit; success messages are announced to screen
readers (focus on the confirmation heading or a polite live region).

## After submitting

- **Schedule on submit**: a calendar embedded right after the form for qualified visitors removes days of email.
- **A confirmation page, not only a toast**: what was received, what happens next, how long it takes, how to change it.
- **A confirmation email** consistent with the page.
- **Route by answers**: small teams to self-serve onboarding, large ones to sales — and tell them which path they are
  on.
- **Track the outcome**, not only the submission: show-up rate, qualified leads, activation.

## Multi-step forms

Splitting a long form into steps can help when the first step is easy (email only) and later steps feel like
progress. It hurts when it hides the total effort. Show the number of steps, keep data when going back, and explain
whether intermediate answers are saved.
Do not treat an unfinished step as permission for sales outreach; distinguish a draft from a submitted request.

## Accessibility

- Labels associated with inputs; required fields indicated in text, not only with an asterisk color.
- Errors identified in text and linked (`aria-describedby`); not only red borders (WCAG 1.4.1, 3.3.1).
- Error prevention for important submissions: review step or ability to correct (3.3.4 for legal/financial).
- Redundant entry avoided (3.3.7): do not ask for the same information twice.
- Accessible authentication (3.3.8): no cognitive puzzles without alternatives.
- Buttons for intent questions are real buttons or radio inputs with a group label.

## Languages and markets

- Field order and formats follow local conventions (addresses, phone numbers, names).
- Consent requirements differ (opt-in for marketing is required in many jurisdictions).
- Error messages translated natively, including validation done by the browser.
- Countries that commonly use personal email for business (small businesses, some markets) should not be blocked by a
  "work email only" rule without reason.

## Worked comparison

This is a fictional example, not a measured conversion result.

**Weak:** an 11-field form (first name, last name, email, phone, company, website, role, size, country, budget,
message) with a disabled "Submit" button until all are valid, a reCAPTCHA image challenge, a pre-checked newsletter
box, and a toast saying "Thanks!".

**Stronger for this fictional sales-routing scenario:** four fields (work email, name, company, team size as buttons),
an enabled "Book my demo" button, invisible
spam protection, unchecked marketing consent, and on submit a calendar to pick a time, with a confirmation page and
email. Smaller teams are offered "Start a free trial instead" right away.

## Choose the exchange before choosing the fields

The visitor is deciding whether the promised value justifies disclosure. A shorter form can still be a poor
exchange when it asks for a phone number to deliver a document. A longer quote request can be reasonable when
answers change feasibility, price or the specialist assigned. Explain those dependencies before asking.

| Situation | Option | Why it fits | Cost or limit |
| --- | --- | --- | --- |
| Public educational material | Direct access | No delivery identity needed | Less lead attribution |
| A standard product trial | Minimal account form | Product supplies qualification later | Requires good onboarding |
| A tailored demonstration | Short routing form | Assigns the right specialist | Can exclude unusual buyers |
| A complex quote | Staged questionnaire | Answers affect scope | More effort and draft handling |
| Uncertain fit | Contact choice | Lets people explain exceptions | Requires human triage |

Do not gate a document merely because the form component already exists. An ungated sample plus an optional
consultation can reveal intent more honestly than counting every download as a sales lead. Conversely, a service
with scarce appointment capacity may need eligibility questions before offering a slot.

### Questions that change the decision

Ask sales to demonstrate what they do with each answer. A field used in a dashboard but not in routing, preparation
or service delivery is a candidate for removal. Ask operations which commitments they can actually keep.

- Can someone evaluate on behalf of another organization without being misrouted?
- Is a personal email genuinely unsuitable, or merely unpopular with sales?
- Does a selected region change service availability, consent text or the response team?
- Will the calendar show times before a person discloses details?
- What happens outside staffed hours, during holidays and when the assigned person is absent?
- Can a visitor change an answer after a request has been assigned?
- Does anti-abuse protection disadvantage shared networks or assistive technology?

Record an owner for each requested fact and a reason for collecting it at this moment. Enrichment is not a free
substitute: inferred company size can be wrong, and inferred personal details require their own privacy review.
Allow correction when an inference changes the route or offer.

## Submission is a service transition

A successful browser request, a stored lead and a booked meeting are different events. Model them separately so the
page does not promise a meeting when it has only queued a message. Assign the confirmation to the authoritative
service response, not to an animation finishing or a button becoming disabled.

| Condition | What to communicate | Recovery or next step |
| --- | --- | --- |
| Offline before sending | Connection is needed to send | Retain safe values in this session |
| Timeout after sending | Receipt is not yet confirmed | Check request status before retrying |
| Lead saved; calendar failed | Request received; meeting not booked | Retry scheduling or arrange contact |
| Slot taken | Time no longer available | Refresh times without re-entry |
| Region unsupported | Service is unavailable there | Offer an honest alternative, if one exists |
| Sales capacity exhausted | No appointments currently available | State a real contact route or wait option |
| Duplicate request | Existing request may already be pending | Reuse status without creating extra leads |
| Consent withdrawn | Which future messages stop | Keep service communications distinct |

For uncertain receipt, the implementation should support a stable request identifier or equivalent duplicate
protection. Copy cannot make a retry safe if the backend creates a new lead and email on each attempt. Reconcile
this with engineering before promising that the visitor can simply try again.

Existing-account messages can disclose whether an address is registered. For sensitive services, use a neutral
response with a private email route; explicit account guidance may be reasonable in a low-risk authenticated flow.
This is a contextual privacy decision, not a reason to make every error uninformative.

### Preserve effort without preserving unnecessary secrets

Keeping values after validation errors helps people recover. Saving every answer in local storage indefinitely can
expose personal information on a shared device. Decide which fields can remain in memory, whether drafts expire,
and what happens on navigation. Explain draft saving when it would otherwise surprise the visitor.

Back navigation should restore the chosen route and useful answers. If eligibility rules changed while the person
was away, explain the new constraint and identify the affected answers. Do not silently clear the entire form.

## Copy by moment and market

State the action, the commitment and the next step as separate functions. In English, a label such as “Request a
demo” names a request; “Book a demo” implies a confirmed appointment path. Other languages may use infinitives or
noun phrases: preserve the distinction in commitment rather than English word order.

| Moment | Copy function | Fictional English example |
| --- | --- | --- |
| Before entry | Explain value and effort | “Tell us about your team so we can tailor the demonstration.” |
| Sensitive field | Explain necessity | “Phone is optional; add it if you prefer a call.” |
| Validation | Identify a correctable issue | “Enter an email address that can receive the invitation.” |
| Waiting | State current stage | “Sending your request.” |
| Partial success | Separate completed and pending | “Request received. Choose a meeting time next.” |
| Confirmation | Set a supportable expectation | “We will email the address you provided.” |

Response windows need a named service time zone when timing matters. “Tomorrow” can be misleading across midnight,
and “business day” depends on the team's calendar. Prefer a concrete localized date when operations can supply it.
Do not hard-code a response promise just because a reference site uses one.

Use complete localized messages for counts, dates and errors. Give translators the route and the commitment level.
Test long consent text, multiple plural forms, bidirectional email addresses, mononyms and scripts without spaces.
Changing interface language should preserve entered values while refreshing instructions and available services.

## Accessibility decisions beyond labels

WCAG 1.3.1 Info and Relationships (A) requires programmatic relationships; a visually grouped set of qualification
choices needs an equivalent group name. Native radio inputs are a practical recommendation for one-of-many answers.
A row of independently pressed buttons communicates the wrong model when only one answer may be selected.

WCAG 2.4.3 Focus Order (A) and 2.4.7 Focus Visible (AA) apply to conditional fields and embedded calendars too.
Reveal dependent questions after their trigger in reading order, and avoid moving focus on each selection.
After an intentional step change, provide an understandable heading and focus destination.

WCAG 4.1.3 Status Messages (AA) covers relevant status updates without requiring focus movement. Announce a saved
request once; do not announce each keystroke or every retry countdown. Moving focus to a confirmation heading is
an alternative interaction design when navigation or a substantial view change actually occurs.

WCAG 3.3.7 Redundant Entry (A) has exceptions, including security and invalid prior information. WCAG 3.3.8 Accessible
Authentication (Minimum, AA) concerns authentication, not every lead form. Apply the relevant requirement rather
than calling all anti-abuse checks an authentication failure.

## Verify the whole exchange

1. Recruit people who match the actual routes, including someone with an atypical business email or organization.
2. Give a realistic goal, such as arranging an evaluation with a colleague; avoid instructing which fields to use.
3. Ask what they expect to receive and whether submitting commits them to a meeting or purchase.
4. Observe completion on a phone, with a keyboard, and with the assistive technology in the supported test scope.
5. Inject a validation error, a timeout and a calendar failure; check retained effort and understood next steps.
6. Verify the confirmation email and operational queue agree with the page, including locale and time zone.

Measure completed requests per eligible form starter, then appointments attended or accounts activated. Keep
ineligible traffic visible as a separate cohort rather than silently removing it to improve the reported rate.
Track error recovery, duplicate requests, unwanted-contact complaints and time to actual response as guardrails.
Do not capture typed personal data in field analytics or session recordings just to locate abandonment.

A higher submission rate with lower attendance may mean the promise became ambiguous. A lower rate with better
qualification is not automatically success either: check whether valuable small organizations were excluded.
Agree how sales will assess qualification before the experiment, so the definition cannot shift to favor a variant.

## Decision review checklist

- [ ] The exchange can be explained without mentioning the internal lead pipeline.
- [ ] A direct-access or self-serve alternative was considered.
- [ ] Timeout, partial success and duplicate paths agree with backend behavior.
- [ ] Each response promise has an operational owner and a market-aware calendar.
- [ ] Draft retention and outreach permission are separate decisions.
- [ ] Quality and exclusion guardrails accompany conversion counts.

## Common mistakes

Sales teams often ask for every potentially useful attribute because later follow-up feels uncertain. Resolve that
operational uncertainty with routing and preparation rules, not unexplained required fields. Teams often disable
submit to prevent errors; this can hide the only feedback explaining how to proceed. Make recovery explicit.
Invisible abuse detection also needs a recovery route when it rejects a legitimate visitor.


- **Asking everything up front.**
- **Placeholders as labels.**
- **Disabled submit buttons.**
- **Losing data on error.**
- **"Thanks!" with no next step.**
- **Pre-checked marketing consent.**

## Checklist

- [ ] Every field is needed now and used by someone.
- [ ] Visible labels, autocomplete, correct input types.
- [ ] Requirements stated before errors; errors say how to fix.
- [ ] Submitting, error, already-registered and success states designed.
- [ ] Next step stated and, where possible, scheduled on submit.
- [ ] Consent clear and not pre-checked; formats fit each market.
