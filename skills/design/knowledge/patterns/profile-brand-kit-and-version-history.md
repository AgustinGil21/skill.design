# Account profile, brand kit and version history

Three patterns about identity and change: editing **account profile** data, defining a **brand kit** that the product
applies to people's content, and **version history** that lets people see and restore earlier states. Each changes
something that other things depend on — a username in shared links, brand colors in existing documents, a document
someone else is editing — so each needs to show the consequences of change.

See [profiles](profiles.md) for how profiles are shown to others.

## The problem and who has it

- **Account owners** updating their name, photo, email, username and time zone.
- **Brand managers and small business owners** defining logos, colors, fonts and voice once, to reuse everywhere.
- **Anyone editing documents** who needs to see what changed and undo mistakes.

## Questions to ask before deciding

- **Profile**: which fields are visible to whom? Which changes break things (usernames in links, emails used to sign
  in)? Which fields are managed by the organization?
- **Brand kit**: is it a library of assets or a set of rules? Does changing it affect existing content?
- **Versions**: automatic or manual? Per change or per session? What happens to collaborators when restoring?

## Account profile

### Anatomy and behavior

- **A photo with requirements stated** ("JPG or PNG · up to 8 MB · at least 250×250"), upload, edit crop and remove
  ([Air](https://mobbin.com/screens/6f4b1a5c-2f74-42de-8b62-5a31d37ee699),
  [Preply](https://mobbin.com/screens/1673fd69-a387-4dda-a4de-9fbb82ffda29)).
- **Fields with a line about what they are for** ("The name associated with this account";
  [Clay](https://mobbin.com/screens/4e8696fd-6354-482f-a8e9-1c889dbbf368)) and required ones marked.
- **"Save" enabled only when there are changes** (Clay), and **Cancel / Save next to the edited field** when editing one
  field ([Magnific](https://mobbin.com/screens/b10fa853-c6ac-41ed-9d7c-1d4dc1d83b7c)).
- **Email not editable inline**: changing it requires verifying the new one; a backup email as a security measure
  ([Buffer](https://mobbin.com/screens/c2405be5-c890-4439-91bc-a5452e229e65)).
- **Username with a fixed prefix** (`@`, a domain path) and availability while typing
  ([Luma](https://mobbin.com/screens/e4c0150b-7345-4615-921b-c58dc15eb9d4)).
- **Time zone with its offset** ("Asia/Singapore GMT+8") and social accounts with "Connect" and status (Preply).
- **Tabs for what is not profile** (Data · Security · API key; Clay) instead of an endless page.
- **What it is used for**: "This is how you appear as a host or guest" (Luma).
- **Anti-example**: a "Save changes" button per field across five consecutive fields (Buffer) — unclear what was saved.

### Sensitive changes and existing links

| Change | Consequence | Design |
| --- | --- | --- |
| Username | Old profile links break | Redirect old usernames for a period; warn |
| Email | Sign-in and notifications change | Verify the new address; notify the old one |
| Display name | Appears on past content | Say whether past content updates |
| Legal name (billing) | Invoices | Separate from display name |

### Names across cultures

- Display name in any script and order; legal name separate when needed (see
  [content and localization](../24-content-and-localization.md)).
- Fields managed by the organization (job title, department) shown as read-only with who manages them.

## Brand kit

### A kit as rules, not only files

A useful kit defines how assets are combined: which logo on which background, which color for text and actions,
which font for headings and body, how the voice sounds. A folder of files without rules produces inconsistent output.

### Anatomy and behavior

- **Fixed sections: Logos · Colors · Fonts · Voice**, each with "+ Add" and an empty state saying what to upload ("Add
  a logo or drag it here"; [Canva](https://mobbin.com/screens/886a741b-5211-4dc3-9b41-b33f3c6418dc)).
- **A summary view** with everything together as it will be applied (logo, sample type, palette with codes, button
  style; [Mailchimp](https://mobbin.com/screens/7b7b620b-5f21-4cbf-bbc3-9b963e71f7a3)).
- **Extract the brand from a website** and let people edit the result (identity, tone as chips, described aesthetic;
  [Bloom](https://mobbin.com/screens/455f5962-505e-4b4c-a1c5-8f3501cffc4e)).
- **Brand voice as structured text** (Tone · Structure · Do / Don't) with a counter and "Generate from website"
  ([Strut](https://mobbin.com/screens/fba95f38-2676-4235-bd2a-22adc385c59d)); or "Generate brand voice" from a sample,
  saying where it is used ([HubSpot](https://mobbin.com/screens/6216459c-4fa2-481e-b69b-416c4773a1f4)).
- **Fonts with roles** (Title, Subtitle, Body) and sizes, editable in place
  ([Semrush](https://mobbin.com/screens/3ec139a3-3b2f-4bbd-bd4b-3e74e70a4089)), with script coverage checked for the
  languages used.
- **Where it applies**: "Shown in the client portal, emails and PDFs" with a document preview
  ([Jobber](https://mobbin.com/screens/a3555374-9f57-41d1-a687-3f64eef3626c)).
- **"Apply to my designs" and "Reset"** as explicit actions (Mailchimp).
- **Several kits** for several brands, one default.
- **Contrast checks** for color combinations, warning when text on a brand color fails.

### Applying to existing content

Changing a kit raises a question: should existing content update? Offer the choice with a preview: "Apply the new
colors to 34 existing templates? Preview changes." Never silently restyle published material.

## Version history

### Anatomy and behavior

- **A large preview plus a list of versions** (date, time, author), the current one marked "Current"
  ([Substack](https://mobbin.com/screens/b9578385-f96c-45a2-b2e2-483bfc410cb6),
  [Notion](https://mobbin.com/screens/780626a3-20f5-4795-ac3b-bdbaef325210)).
- **Grouped by day** (Today · Yesterday · date) and the period visible ("Last 30 days";
  [WRITER](https://mobbin.com/screens/d6e6654e-119a-456a-acef-fcb72d9ec330)).
- **"Show changes"** highlighting additions and removals ([Fibery](https://mobbin.com/screens/a0f4b2f8-30ec-48e4-ac84-ddf21f4d52c2);
  text or JSON diff, [Adaline](https://mobbin.com/screens/c53724d7-9387-4a81-8a96-bc74baddd24c)).
- **Restore says what happens**: "Restoring this version replaces the current document" (WRITER) — and the current one
  becomes another version; nothing is lost.
- **Named versions or the request that created them** when AI generates them ("Apply style changes…"), with search
  ([Google AI Studio](https://mobbin.com/screens/8470255e-7788-4b6e-a13c-3286d5df8dcd)).
- **For generated content**: play, restore and download each version
  ([Hume AI](https://mobbin.com/screens/dd296764-8ff1-4f8d-9a8f-86349b84a006)).
- **Saved vs. automatic** versions distinguished ("Saved · Edited by…";
  [Wix](https://mobbin.com/screens/30c1385f-3728-4c4d-a282-0f113a506653)).
- **Cancel / Restore** at the bottom; arrow keys to move through versions.

### Useful comparison

- Compare any two versions, not only with the current one.
- Summarize changes when they are many ("12 edits by 3 people").
- For structured content (tables, settings), show field-level differences.

### Partial and concurrent restoration

- **Restore part**: copy a paragraph or a section from an old version instead of replacing everything.
- **Collaborators editing now**: warn that restoring will replace their current work, or restore as a new branch.
- **Resources deleted since** (images, linked files): say what could not be restored.

## Edge cases

- Very long names and usernames; names in other scripts.
- Photos with unusual aspect ratios; transparent logos on dark backgrounds.
- Fonts without coverage for some languages.
- Thousands of versions (summarize, paginate, keep named ones).

## Accessibility specifics

- Profile fields labeled; image upload with keyboard; crop alternatives.
- Brand color contrast verified and reported.
- Version lists navigable by keyboard; differences conveyed by text, not only color (additions and removals labeled).

## Copy

- Consequences of identity changes stated.
- Restore actions explain what replaces what.

## Common mistakes and why they happen

- **Username changes that break links.**
- **Brand kits as file dumps.**
- **Silent restyling of existing content.**
- **Restore that overwrites without keeping the current version.**
- **Diffs only in color.**

## Worked comparison

**Weak.** Restoring yesterday's version of a shared proposal overwrites today's edits by two colleagues with no warning
and no way back.

**Strong.** "Restoring will replace the current document. Laila and Marco edited it today. Their changes will be saved
as a version you can return to." Or: "Copy the 'Pricing' section from this version" to restore only what was needed.

## How to verify and measure

- **Test** username and email changes end to end; brand kit application on real templates; restoring with collaborators.
- **Measure** restore frequency (signals of problems), broken links after username changes, brand inconsistencies.

## References

- Air — [photo requirements](https://mobbin.com/screens/6f4b1a5c-2f74-42de-8b62-5a31d37ee699)
- Preply — [photo, time zone, social accounts](https://mobbin.com/screens/1673fd69-a387-4dda-a4de-9fbb82ffda29)
- Clay — [field descriptions and tabs](https://mobbin.com/screens/4e8696fd-6354-482f-a8e9-1c889dbbf368)
- Magnific — [save next to the field](https://mobbin.com/screens/b10fa853-c6ac-41ed-9d7c-1d4dc1d83b7c)
- Buffer — [email verification; anti-example save per field](https://mobbin.com/screens/c2405be5-c890-4439-91bc-a5452e229e65)
- Luma — [username availability and usage](https://mobbin.com/screens/e4c0150b-7345-4615-921b-c58dc15eb9d4)
- Canva — [brand kit sections](https://mobbin.com/screens/886a741b-5211-4dc3-9b41-b33f3c6418dc)
- Mailchimp — [brand summary and apply](https://mobbin.com/screens/7b7b620b-5f21-4cbf-bbc3-9b963e71f7a3)
- Bloom — [extract brand from a site](https://mobbin.com/screens/455f5962-505e-4b4c-a1c5-8f3501cffc4e)
- Strut — [structured brand voice](https://mobbin.com/screens/fba95f38-2676-4235-bd2a-22adc385c59d)
- HubSpot — [generate brand voice](https://mobbin.com/screens/6216459c-4fa2-481e-b69b-416c4773a1f4)
- Semrush — [fonts with roles](https://mobbin.com/screens/3ec139a3-3b2f-4bbd-bd4b-3e74e70a4089)
- Jobber — [where the brand applies](https://mobbin.com/screens/a3555374-9f57-41d1-a687-3f64eef3626c)
- Substack — [version list](https://mobbin.com/screens/b9578385-f96c-45a2-b2e2-483bfc410cb6)
- Notion — [version list](https://mobbin.com/screens/780626a3-20f5-4795-ac3b-bdbaef325210)
- WRITER — [grouped versions and restore warning](https://mobbin.com/screens/d6e6654e-119a-456a-acef-fcb72d9ec330)
- Fibery — [show changes](https://mobbin.com/screens/a0f4b2f8-30ec-48e4-ac84-ddf21f4d52c2)
- Adaline — [text and JSON diff](https://mobbin.com/screens/c53724d7-9387-4a81-8a96-bc74baddd24c)
- Google AI Studio — [named generated versions](https://mobbin.com/screens/8470255e-7788-4b6e-a13c-3286d5df8dcd)
- Hume AI — [versions of generated content](https://mobbin.com/screens/dd296764-8ff1-4f8d-9a8f-86349b84a006)
- Wix — [saved vs. automatic versions](https://mobbin.com/screens/30c1385f-3728-4c4d-a282-0f113a506653)
