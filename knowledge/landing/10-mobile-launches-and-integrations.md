# Landing pages on phones, waitlists and integration directories

Three situations with their own logic: the phone, where most ad and social traffic lands; the waitlist, where the
product does not exist yet; and the integration directory, where visitors check whether the product fits their stack.

## The landing page on a phone

Most visits from ads and social media arrive on a phone. Design there first; do not shrink the desktop version.

### Questions before designing

- **What share of traffic is mobile, by source?** Social ads are often mostly mobile; search for B2B software often
  less so. Check analytics.
- **Can the action be completed on a phone?** If not (a desktop-only tool), the mobile goal changes: send a link,
  book a demo, save for later.
- **What is the visitor doing?** Commuting, between tasks, one-handed: short attention, interrupted sessions.

### The first screen

- **Headline** (two or three lines at most), short subheading, a button 44–48 px tall, and part of the visual peeking
  in to invite scrolling. No giant visual pushing the button off the screen.
- **Test with large system text** and with the longest language: the button must not fall below the first screen
  without anyone noticing.

### Layout and components

- **A sticky bottom button** when the page is long and the action is single; it must not cover content or the cookie
  banner, and it hides near the closing section (where the button already is). Account for safe areas
  (`env(safe-area-inset-bottom)`).
- **Menu** as a sheet or full screen, with the primary action inside too; closable with one tap and with Escape; focus
  managed while open.
- **Grids → one column**; comparison tables → cards or "compare two plans"; carousels with an indicator and swipe,
  never only small arrows.
- **Screenshots designed for the phone**: readable crops of the product, not the whole desktop screen shrunk.
- **Video**: vertical or square, short, muted, with captions.
- **Forms**: the right keyboard (`type="email"`, `inputmode`), `autocomplete`, one field per row.
- **Nothing depends on hover**: what desktop reveals on hover is visible or tappable on the phone.
- **A single field in the hero** when the action is starting with one piece of data (phone or email;
  [Current](https://mobbin.com/sites/sections/92cca7c1-f14e-4cbc-96f9-12a4b5893464)).

### Promoting an app

- On the phone, store buttons that go straight to the store for that platform (detect the platform, show the other
  as a link).
- On desktop, a QR code with "Works on iOS and Android"
  ([Mailchimp](https://mobbin.com/sites/sections/b9ad2dfa-45dd-419e-b1a6-cb0c488665fd)), plus "Send me a link" for
  people who do not scan.
- Show the app inside a phone in real use ([Riverside](https://mobbin.com/sites/sections/1c313c57-669f-445e-9894-30cc76f0e798),
  [Headspace](https://mobbin.com/sites/sections/5b44d3ff-891d-4add-9f5f-53b903bb1800)).
- Official store badges follow each store's guidelines and are localized.
- Ratings shown only if real and current, with the store named.

### Measuring on real devices

Test on a real mid-range phone on mobile data: weight, tap accuracy and layout problems appear there that never appear
on a design laptop.

## Waitlist or launch page

### What it must answer

Even without a product, visitors need: what it is, for whom, when, what they get by joining, and what happens to their
email.

### The pieces

- **What it is and when**: even if not ready, say what it will do and when it is expected ("Pre-orders open in March";
  [Superr](https://mobbin.com/sites/sections/bd3dab59-95e3-497d-9eb7-f64e334fd07f)). If the date is uncertain, say so
  ("Early 2027, we'll email you first").
- **One field and a button saying what you get** ("Reserve my spot", "Get early access";
  [ISO Meet](https://mobbin.com/sites/sections/c494bf4c-177f-4b26-830f-1168406fd48f),
  [Base](https://mobbin.com/sites/sections/75fb9e38-9f05-494f-92ab-86ff2a2e5efd)).
- **What happens with the email**, as a list: notice at launch, updates, first chance to buy (Superr), with a link to
  the privacy policy.
- **Honest social proof** ("5,000+ creatives already signed up", ISO Meet) — only real counts.
- **A countdown only if there is a real date** ([Rains](https://mobbin.com/sites/sections/6efdded0-c82c-47c3-b304-4cba52056fb6)),
  accessible (not announcing every second; the date also in text, with time zone).
- **A visual idea that creates curiosity** without hiding what it is (the named cursors of "Not just cursors on a
  screen"; [Opacity](https://mobbin.com/sites/sections/aa78df4e-e768-4c84-956a-35bf1072f469)).

### After signing up

- A confirmation with its own tone ("You're on the list"), position in the queue if it exists, and something to do
  (share, follow, answer one question to prioritize access).
- A confirmation email immediately, consistent with the page; double opt-in where required.
- Referral mechanics ("move up by inviting friends") only if the reward is real and the rules are clear (see
  [referrals](../patterns/referrals.md)).

### States

- Already registered: say so kindly and offer what they can do ("You're already on the list — we'll email
  ana@example.com").
- Invalid email: inline error with how to fix.
- Network error: keep the typed email and offer retry.
- Launched: the page changes to the product page; people on the list get the promised first access.

**Anti-example**: a gradient and a generic sentence with a "Join" button and nothing else — no what, when or why.

## Integration directory

### Why it matters

For many products, "does it work with what we already use?" is a deciding objection. The directory answers it and,
with one page per integration, attracts search traffic ("[product] + [tool] integration").

### The pieces

- **Search at the top and categories on the side** ([Harvest](https://mobbin.com/sites/sections/41a0951f-e71a-414d-b2ab-9b8d7ac6402f),
  [Customer.io](https://mobbin.com/sites/sections/ddd898fb-2f9e-4d80-976e-9c5540521002)).
- **A card**: logo, name, one line on **what you can do** with the integration ("Track time from your Asana tasks"),
  not the other company's description.
- **Status and plan labels** (Beta, New, "Notify me when available", Pro / Business;
  [Glide](https://mobbin.com/sites/sections/c636424b-762c-4482-ac1b-8a68bd54133e)).
- **Curated sections** (Popular · New · Free) with "See all" ([Intercom](https://mobbin.com/sites/sections/1a275928-845e-4086-baae-d6e9eb65e6d2)).
- **Who builds it** (official / partner; [Apollo](https://mobbin.com/sites/sections/80ce640b-eb1b-4e86-8131-7789528a0f5b)).
- **On the main landing page, the short version**: "1,000+ integrations" with categories and recognizable logos
  ([ClickUp](https://mobbin.com/sites/sections/bb3f7978-3e19-438c-a1ac-7fdec49dc8a9)) and a link to the directory.

### The integration page

Each integration gets its own page: what it does (use cases), how to connect it (steps), screenshots, the permissions
it requests and why, which plans include it, who maintains it, and a link to documentation. A request form for
integrations that do not exist yet ("Tell us what you use") turns gaps into signals.

### Edge cases

- **No results**: suggest similar tools, the generic options (API, webhooks, Zapier-style connectors) and the request
  form.
- **Deprecated integrations**: a clear label and the alternative.
- **Many logos at once**: lazy-load, with dimensions reserved; logos with alt text naming the tool.
- **Trademark use**: follow each partner's logo guidelines.

## Worked comparison

**Weak mobile landing:** the desktop page shrunk; the hero visual takes the whole first screen and the button is
below; a feature grid of 3 columns at 320 px; a comparison table that scrolls horizontally with tiny text; a chat
widget covering the sticky button.

**Strong mobile landing:** headline, subheading and button on the first screen at large text; screenshots cropped to
the relevant part; features as a single column with one screenshot each; the comparison reduced to "Free vs. Pro";
the sticky button hides near the closing; the chat opens from a link in the footer instead of a floating bubble.

## Common mistakes

- **Desktop-first design shrunk to mobile.**
- **Waitlists that hide what the product is.**
- **Countdowns without real dates.**
- **Integration cards that describe the partner instead of the use case.**
- **Store links that ignore the visitor's platform.**

## Checklist

- [ ] Mobile traffic share known; mobile first screen shows headline, subheading and action.
- [ ] Sticky elements do not cover content or each other.
- [ ] Screenshots and video designed for the phone.
- [ ] Waitlist says what, for whom, when, and what happens with the email.
- [ ] Waitlist states designed (already registered, error, launched).
- [ ] Integration directory with search, categories, use-case lines and per-integration pages.
