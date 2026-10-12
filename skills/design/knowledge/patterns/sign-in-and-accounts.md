# Sign-in and accounts

Sign-in is the door to everything else, and account recovery is what happens when the door is locked. Both must be
secure without being hostile: easy for the right person, hard for the wrong one, and recoverable when something is
lost. This pattern covers choosing access methods, sign-in, verification codes, two-factor authentication, sign-up,
sessions and account management.

## The problem and who has it

- **Returning people** want to get in quickly, often on a different device than last time.
- **People who forgot** a password or lost a phone need to recover without being locked out forever.
- **Organizations** need control: single sign-on (SSO), enforced two-factor, offboarding.
- **Attackers** try stolen passwords and social engineering.

When access fails: people create duplicate accounts, abandon, call support, or get locked out permanently. When it
is too weak: accounts get taken over.

## Questions to ask before deciding

- **Who are the users**: consumers, employees of organizations with SSO, both?
- **What is at stake** if an account is taken over: money, health data, other people's data?
- **Which methods do people already use** (password managers, passkeys, Google or Microsoft accounts)?
- **How do people recover** when they lose every factor?
- **Shared devices**: family tablets, shop counters, hospital workstations?
- **Regional requirements**: phone numbers are not universal; SMS reliability varies by country.

## Alternatives and how to choose

| Method | Strengths | Weaknesses | Good for |
| --- | --- | --- | --- |
| **Password** | Universal, works offline from email | Reuse, phishing, forgotten | Baseline, with a password manager friendly form |
| **Passkey** | Phishing-resistant, fast | Device and platform support, recovery across ecosystems | Primary for returning people when available |
| **Magic link or email code** | No password to remember | Depends on email access and delivery; opening links on another device | Occasional-use products |
| **Social sign-in** (Google, Apple, Microsoft) | Fast, no new password | Ties identity to a provider; duplicate accounts when people forget which they used | Consumer and SMB |
| **SSO (SAML/OIDC)** | Organizational control | Setup by admins; personal accounts mixed with work | B2B with enterprise customers |
| **SMS code** | Familiar | SIM swapping, delivery issues, cost, not everyone has a reliable number | A fallback, not the strongest factor |
| **Authenticator app** | Stronger than SMS | Setup effort; lost phone | Second factor |

Most products combine several. The design question is how to present them without confusing people.

## Anatomy and behavior

### Sign-in

- **One main path, others clear and secondary.** The most used first (Google / Microsoft / Apple, or email); an "or"
  separator; the rest ([Workable](https://mobbin.com/screens/35802b2a-095f-48a3-a161-bab66a7c6f2b),
  [Notion](https://mobbin.com/screens/ef4aba01-ca49-4180-9ef3-96c3fc6be970)).
- **Email first, then the method**: the email decides whether SSO, a passkey or a password applies, and stays at the
  top with "Change" ([Gemini](https://mobbin.com/screens/a54ac6e1-8604-4624-a1d6-960e7db5556d)). Trade-off: one extra
  step, and it can reveal that an account exists; design the next step so it does not confirm existence for unknown
  emails (for example, "If an account exists, we'll send a link").
- **Magic link or email code** as an alternative to a password ("Email me a link",
  [Better Stack](https://mobbin.com/screens/6e4462ee-35ac-4263-8fd9-7ca9b00b6e00)), with "Resend in 18 s"
  ([Notion](https://mobbin.com/screens/ef4aba01-ca49-4180-9ef3-96c3fc6be970)). Offer a code alongside the link for
  people who open email on another device.
- **Passkeys** offered visibly and, once created, as the first option.
- **SSO** with its own button ("Sign in with SSO") for company accounts.
- **"Forgot password?"** next to the password field, not at the bottom of the page.
- **Show/hide password**; "Remember my email" rather than an ambiguous "Keep me signed in".
- **Errors**: "Email or password is incorrect" (without revealing which); after several attempts, explain the lock and
  how long it lasts.
- **CAPTCHA only on signs of abuse**, and with accessible alternatives.
- **Status messages at the top** ("You changed your password — sign in again",
  [Workable](https://mobbin.com/screens/35802b2a-095f-48a3-a161-bab66a7c6f2b)).
- **Password managers must work**: correct `autocomplete` values (`username`, `current-password`, `new-password`), no
  blocking paste (WCAG 3.3.8, AA).

### Verification codes (2FA, email verification)

- Six boxes or a single field with `autocomplete="one-time-code"`, pasting all six digits at once, automatic advance,
  and submitting only when complete ([Grammarly](https://mobbin.com/screens/2b6ddcc9-e973-49d8-94ad-78c19495b64d)).
- Say where it was sent and how long it lasts ("Expires in 15 minutes"), "Resend" with a visible wait, "Use another
  method".
- Ask for the code in its own step after the password, not as a third field from the start.
- Codes must be readable by screen readers and enterable without time pressure, or with an extension.

### Turning on two-step verification

- **Numbered steps in one view or a short wizard** (1. Scan · 2. Enter code · 3. Save recovery codes;
  [Todoist](https://mobbin.com/screens/1cb4595c-0588-4f2e-832e-909a80a99f66) in one screen,
  [Expensify](https://mobbin.com/screens/43e91a56-edb6-44a7-a230-9851bb39e41a) in a side panel "Step 2 of 3").
- **A QR code plus a manual key with "Copy"**, grouped in readable blocks (`5NNC NXC2 GOKO`), for people setting up on
  the same phone ("Can't scan? Enter the key", [YNAB](https://mobbin.com/screens/6f491d7e-8c14-40ce-a37a-bba0046ed393)).
- **Recommended apps named** with links, without requiring one ([Uber](https://mobbin.com/screens/686c8f04-5d33-4b81-b84e-af4cf520a045)).
- **Verify the code before enabling**, with confirmation in the field ("Verification complete").
- **Recovery codes** listed, with copy all / download, and the reason ("If you lose your phone, you'll need these").
  Do not let people finish without having seen them.
- **"Remember this device"** optional, with its duration stated ([Gusto](https://mobbin.com/screens/38ee08b2-726c-40b4-83cd-eead522d1c5d)).
- **Status in settings** ("On · 0 trusted devices · 2/10 codes used") with "Regenerate codes" and "Turn off" (which
  asks to confirm identity).

## Recovery as a primary journey

Recovery is not an edge case; it is how many people experience the product's security.

| Lost | Recovery path |
| --- | --- |
| Password | Email link or code; then set a new password; sign out other sessions optionally |
| Email access | Second factor plus support verification; never only "security questions" |
| Phone with authenticator | Recovery codes; another registered factor; support process with identity verification |
| Everything | A documented, slower support process with clear expectations; for organizations, an admin reset |

- Explain each path before people need it (when enabling 2FA).
- Warn that recovery without factors takes time, and why.
- Notify the account by email of recovery attempts.

## Identity and linked methods

- **One person, one account**: when someone signs in with Google using the same email as an existing password account,
  link them (after verification) instead of creating a duplicate.
- **Show linked methods** in account settings, with add and remove, and prevent removing the last one.
- **Work and personal accounts**: when SSO is enforced for a domain, explain why a personal sign-in is redirected.

## Sign-up

- The minimum; verify later. See [onboarding](onboarding.md).
- **Terms as text below the button** ("By continuing you agree to…"), not a mandatory checkbox — unless law or policy in
  the jurisdiction requires explicit consent; separate consent for marketing, unchecked.
- Prevent duplicate accounts: if the email exists, offer to sign in instead.

## Sessions and devices

- **Active sessions** with device, approximate location and last activity, and "Sign out" per session and "Sign out of
  all other sessions".
- **Shared devices**: an easy, visible sign-out; do not remember sensitive data; shorter sessions where appropriate.
- **Session expiry**: warn before expiring in the middle of work, and preserve unsaved input.

## Account management

- Changing email or password with confirmation of current identity.
- Exporting personal data and deleting the account, findable, with clear consequences (see
  [privacy and data controls](privacy-and-data-controls.md)).
- **Managed accounts** (owned by an organization): explain what the person can and cannot change, and who administers
  it.

## States and transitions

- Signing in, redirecting to a provider, returning from a provider (success, cancel, error).
- Locked after attempts, with time remaining.
- Code sent, expired, invalid, too many attempts.
- Session expired; signed out elsewhere.

## Edge cases

- Returning from an external provider in a different browser tab or app.
- Email links opened on a different device than the one requesting.
- Phone numbers from countries with different formats; people without a mobile phone.
- Names and emails with non-Latin characters.
- An employee who left the organization still holding sessions.

## Accessibility specifics

- No cognitive function tests (3.3.8): allow paste, password managers, passkeys, email links.
- Codes entered in one field or in boxes that support paste and screen readers.
- Error messages linked to fields and announced.
- CAPTCHAs, if used, have non-visual and non-puzzle alternatives.
- Time limits on codes are generous and extendable by requesting a new code.

## Copy

- Neutral errors that do not reveal account existence.
- Clear explanations of where codes were sent and how long they last.
- Security messages calm and specific, never alarming without a reason.
- In other languages, keep security terms consistent with platform conventions (the local words for "passkey",
  "two-step verification").

## Common mistakes and why they happen

- **Blocking paste** in password fields — a misguided security measure.
- **Too many methods with equal weight** — confusion about which was used.
- **Duplicate accounts** from social sign-in.
- **No recovery codes or unclear recovery.**
- **Terms checkboxes** where text suffices.
- **SMS as the strongest factor.**

## Worked comparison

**Same person:** returns to a project management tool on a new laptop, unsure whether they used Google or a password.

**Weak.** Three equal buttons and an email/password form. They try a password; "Wrong password". They click Google;
a new empty account is created. Support merges them days later.

**Strong.** "Continue with email" first: after typing the email, the product shows "You usually sign in with Google"
(only after the email is verified as theirs through the provider flow, or without revealing method to unknown emails);
the Google button signs them into the existing account. A passkey is offered for next time.

## How to verify and measure

- **Measure** sign-in success rate, time to sign in, password resets, duplicate accounts, recovery support tickets.
- **Test** with password managers, screen readers, on a new device, and with lost-factor scenarios.

## References

- Workable — [sign-in options and status message](https://mobbin.com/screens/35802b2a-095f-48a3-a161-bab66a7c6f2b)
- Notion — [sign-in options and resend timer](https://mobbin.com/screens/ef4aba01-ca49-4180-9ef3-96c3fc6be970)
- Gemini — [email first](https://mobbin.com/screens/a54ac6e1-8604-4624-a1d6-960e7db5556d)
- Better Stack — [magic link](https://mobbin.com/screens/6e4462ee-35ac-4263-8fd9-7ca9b00b6e00)
- Grammarly — [code entry](https://mobbin.com/screens/2b6ddcc9-e973-49d8-94ad-78c19495b64d)
- Todoist — [2FA setup in one screen](https://mobbin.com/screens/1cb4595c-0588-4f2e-832e-909a80a99f66)
- Expensify — [2FA setup in a side panel](https://mobbin.com/screens/43e91a56-edb6-44a7-a230-9851bb39e41a)
- YNAB — [manual key](https://mobbin.com/screens/6f491d7e-8c14-40ce-a37a-bba0046ed393)
- Uber — [recommended authenticator apps](https://mobbin.com/screens/686c8f04-5d33-4b81-b84e-af4cf520a045)
- Gusto — [remember this device](https://mobbin.com/screens/38ee08b2-726c-40b4-83cd-eead522d1c5d)
