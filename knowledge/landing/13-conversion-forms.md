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
- **A disabled button explains nothing**: keep it enabled and, on submit, say what is missing.
- **Captcha only if there is abuse**; prefer invisible protection, and never a challenge without an accessible
  alternative.

## Field decisions

| Field | Keep when | Alternatives |
| --- | --- | --- |
| Work email | Always for B2B | Personal email allowed with a note if small businesses use them |
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
- Phone fields accept any format and normalize; a country selector defaults by locale but can be changed.
- Name fields accept any characters and lengths; never validate names against a Latin alphabet.

## States

| State | What the visitor sees |
| --- | --- |
| Empty | Labels, requirements, the expected next step |
| Typing | No errors until the field is left or the form submitted |
| Invalid field | Message next to the field saying how to fix it; summary at the top on submit for long forms |
| Submitting | Button shows progress and prevents double submission; fields keep their values |
| Network or server error | Message that the data was not sent, with retry; data preserved |
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
progress. It hurts when it hides the total effort. Show the number of steps, keep data when going back, and save the
first step so a lead is not lost if the visitor stops.

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

**Weak:** an 11-field form (first name, last name, email, phone, company, website, role, size, country, budget,
message) with a disabled "Submit" button until all are valid, a reCAPTCHA image challenge, a pre-checked newsletter
box, and a toast saying "Thanks!".

**Strong:** four fields (work email, name, company, team size as buttons), an enabled "Book my demo" button, invisible
spam protection, unchecked marketing consent, and on submit a calendar to pick a time, with a confirmation page and
email. Smaller teams are offered "Start a free trial instead" right away.

## Common mistakes

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
