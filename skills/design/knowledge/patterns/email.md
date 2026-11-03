# Email

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: email client support.

Transactional emails (receipts, sign-in codes, password resets, invitations, alerts) and product emails (onboarding,
digests, announcements). Email is a hostile rendering environment — dozens of clients, partial CSS support, forced dark
modes, image blocking, clipping — and it is often the product's most-read surface. It is also where trust is won or
lost: a receipt that does not say what was charged, or a reset email that looks like phishing.

See also [notifications](notifications.md), [service design](../28-service-design-and-journeys.md) (the journey across
channels) and [interface writing](../04-interface-writing.md).

## The problem and who has it

- **People acting on something**: a code to type, a link to confirm, a receipt to keep, an invitation to accept. They
  scan on a phone, often in dark mode, sometimes with images off.
- **People deciding whether to trust the email**: is this really from the product? Is it phishing?
- **The business**: deliverability, brand consistency, and fewer support tickets.

## Questions to ask before deciding

- **Transactional or marketing?** Transactional emails carry one task and should be plain and fast; marketing emails
  need consent and one-click unsubscribe.
- **What must the person do or know**, and can they do it from the preview text and the first screen?
- **Which clients and languages** matter (business audiences use Outlook on Windows more; consumers use Apple Mail and
  Gmail on phones)?
- **Who sends it and from which domain** (authentication, recognizable sender name)?

## Anatomy of a good transactional email

1. **Sender name and address** people recognize ("Factura <facturas@factura.example>"), consistent across emails.
2. **Subject** that states the event and the key fact: "Receipt for €48.20 — Order 10432", "Your sign-in code: 482 913"
   (codes in the subject only when the security model allows it), "Ana invited you to Hartley Studio".
3. **Preview text** (the first text, or a hidden preheader) that completes the subject instead of repeating it.
4. **One message, one primary action**: the button names the action ("Accept invitation", "Reset password") and the
   link text works on its own; a plain-text URL fallback for links that matter.
5. **The facts**: amounts, dates with time zone, items, reference numbers, what happens next, expiry ("This link
   expires in 30 minutes").
6. **Security cues**: "If you didn't request this, you can ignore this email" for resets and codes; never ask for a
   password or a full card number; no unexpected attachments.
7. **Footer**: company identity, why they received it, preference and unsubscribe links for non-transactional email.

## Building it

- **Structure that survives**: table-based or a tested framework (MJML, React Email, Maizzle) that outputs
  client-safe HTML; one column on phones; widths around 600 px for the container.
- **Inline critical styles**; keep the HTML small (Gmail clips messages above roughly 102 KB, hiding the end — often the
  unsubscribe link).
- **Live text, not text in images**; images with `alt`, width and height; the email must make sense with images off.
- **Fonts**: web fonts work in some clients only; always a matching system fallback stack.
- **Buttons**: "bulletproof" buttons (padding on a table cell or link with fallback for older Outlook), at least 44 px
  tall, text that names the action.
- **Dark mode**: clients either leave the email alone, partially invert it, or fully invert it, and the sender cannot
  control which. Design for all three: transparent logos with a light stroke or a dark-mode variant, no pure white or
  pure black large areas, `color-scheme` and `prefers-color-scheme` styles for clients that honor them, and check text
  in images.
- **Plain-text part** for every email.
- **Language and direction**: `lang` and `dir` on the root; translations per locale; dates and amounts in the
  recipient's locale.
- **Test** in real clients (or a rendering service): Apple Mail iOS and macOS, Gmail web and apps, Outlook (new and
  classic on Windows), Outlook.com, Yahoo; light and dark.

## Accessibility specifics

- Semantic headings (`<h1>`, `<h2>`) and `role="presentation"` on layout tables so screen readers do not announce them
  as data tables.
- Contrast at AA in both modes; text at least 14–16 px; links distinguishable without color alone.
- Logical reading order in the source; descriptive link text; `alt` on meaningful images, empty `alt` on decorative
  ones.

## Copy

- Subjects with the fact, not the brand voice ("Payment failed for your Pro plan" beats "Uh oh! 😬").
- One idea per email; short paragraphs; the action near the top.
- Codes and amounts in large, selectable text; codes not split in a way that breaks copying.
- In other languages, keep subjects short (some languages run much longer) and avoid idioms.

## Deliverability and trust

- Authenticate the sending domain (SPF, DKIM, DMARC) with whoever runs email infrastructure; a brand logo in inboxes
  (BIMI) where supported requires DMARC enforcement.
- One-click unsubscribe (`List-Unsubscribe` headers) for marketing and bulk email, as major inbox providers require.
- Consistent sender, no link shorteners, no misleading subjects.

## Common mistakes and why they happen

- **Designed in a browser, broken in Outlook**, because nobody tested in real clients.
- **The whole email is an image**, because it was exported from a design tool.
- **"Click here" buttons and long marketing copy in a reset email**, copied from the newsletter template.
- **No plain-text part, no preview text**, because the template engine had defaults.
- **Dark mode untested**: invisible logos, unreadable text in images.

## Worked comparison

**Weak.** Subject "Important update from Factura!"; a hero image with the text baked in; "Click here" button; the
amount in a grey footer table; images blocked shows nothing.

**Strong.** Subject "Receipt for €48.20 — Order 10432"; preview "Paid with Visa ending 4421 on 2 Nov"; live text
heading; items, taxes and total in a readable table; "Download invoice (PDF)" as the action; a plain-text part; works
with images off and in dark mode.

## Checklist

- [ ] Subject and preview state the event and the key fact.
- [ ] One primary action; links work as text; plain-text part included.
- [ ] Works with images off, in dark mode and in Outlook, Gmail and Apple Mail.
- [ ] Accessible structure: headings, presentation tables, contrast, alt text.
- [ ] Size under the clipping limit; authenticated sender; one-click unsubscribe for non-transactional email.

## How to verify and measure

- Render tests across clients and modes; check the size against clipping; images-off view.
- Measure: open-to-action rate for transactional emails, support tickets about "didn't get the email" or "is this
  real?", spam complaints, unsubscribe rate.

## References

- Use the project's existing email templates as the source of truth for structure and brand.
- Rendering support data: caniemail.com for CSS and HTML support by client.
