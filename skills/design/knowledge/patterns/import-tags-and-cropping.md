# Importing data, managing tags and cropping images

Three tasks that transform people's content: **importing** turns a spreadsheet into records, **tagging** organizes
records with a vocabulary, and **cropping** changes an image. Each can silently damage what people care about —
records overwritten, tags multiplying into chaos, the important part of a photo cut off — so each needs previews,
clear policies and a way back.

## The problem and who has it

- **People migrating** from spreadsheets or other tools.
- **Teams organizing** shared content with tags.
- **People preparing images** for avatars, covers, posts and products.

## Questions to ask before deciding

- **Import**: how do records identify themselves (email, ID)? Update existing records or create new ones? Are records
  related (contacts belonging to companies)? Can the import be undone?
- **Tags**: personal or shared vocabulary? Who can create tags? How many will there be?
- **Cropping**: what is the destination's shape and size? Is the original kept? What must the crop preserve (a face,
  a product, text)?

## Importing a file (CSV, spreadsheet)

### Anatomy and behavior

- **Visible steps**: Upload → Map columns → Review values → Preview → Import, with completed steps checked
  ([Pipedrive](https://mobbin.com/screens/47e55fb3-7a60-4c12-9a1e-2dfdb940a71d),
  [Attio](https://mobbin.com/screens/de2ec449-2208-4989-9b59-2f58c1a0fc5c)).
- **Automatic mapping, stated**: "We matched 8 of 10 columns. Review and adjust"
  ([Unify](https://mobbin.com/screens/f156278e-d1b1-4422-bb94-d087476de139)); counters "8 matched · 2 unmatched"
  ([AutoSend](https://mobbin.com/screens/ecb994a6-1de0-46a4-9a80-5774130e8065)).
- **Each mapping row**: the file column + real sample data + the destination field with search, suggestions at the top
  and "Don't import" as an explicit option ([Twenty](https://mobbin.com/screens/3a95f97c-c287-481f-a39d-cf2692d8f50a)).
- **Required fields and identifiers marked** ("Required", "Identifier";
  [Customer.io](https://mobbin.com/screens/3f24f8cb-e234-4fbc-a370-4936ce2653c8)) and "Create new field" from there.
- **Map values too**, not only columns: "R&D" → "Research", with "Create 3 missing options"
  (Attio, [Workable](https://mobbin.com/screens/9b071e2c-c86b-4d22-b553-b78644a6e7be)).
- **What happens with duplicates**, stated before importing and selectable (skip / update / create).
- **Errors per row** with the reason and the option to fix in place or download the failed rows.
- **A final result with numbers** ("Imported 212 · Skipped 3 · Errors 2 — View errors") and "Undo import" when
  possible.
- **"Restart import" and "Cancel"** always available; a sample template to download before uploading.

### Previewing transformations

Show what will happen to the data before it happens:

- Dates parsed in which format (03/04/2026 — 3 April or 4 March?). Ask when ambiguous; detect the locale.
- Numbers with decimal comma or point; currencies.
- Text encoding problems (accented characters garbled) detected and explained.
- Empty values: will they clear existing data or be ignored?

### Identity and update policy

| Policy | Effect | Risk |
| --- | --- | --- |
| Create only | New records, duplicates possible | Duplicates |
| Update by identifier | Matching records updated | Overwriting good data with stale data |
| Update only empty fields | Fills gaps | Stale data stays |
| Skip existing | Only new records | Updates missed |

Make the policy explicit and preview counts per outcome ("142 new · 70 will be updated · 3 skipped").

### Partial or atomic?

"Import the valid rows, skip the invalid" works for independent records. When records depend on each other (invoices
referencing customers), a partial import can create broken relationships. Say which mode applies, and offer
all-or-nothing when integrity matters.

## Managing tags

- **A list with color, name, description, usage count and last used**
  ([Linear](https://mobbin.com/screens/41d11ba6-cd2f-46ee-a9bd-a23e045101e5),
  [mymind](https://mobbin.com/screens/ed6782ee-b30c-4fe2-836d-45f0ca11c8ee)); sortable by usage.
- **Create inline** (a new row at the top with focus on the name), not a dialog.
- **Edit and delete per row** with icons or a menu ([Buffer](https://mobbin.com/screens/6a5468bc-04ad-42d7-962c-c933f7baa8cf),
  [Navattic](https://mobbin.com/screens/7886b05b-aec0-464b-bfd9-ec2f1037f6c6)); confirm with impact ("Urgent is on 14
  items; it will be removed from all of them").
- **Merge** similar tags (multi-select → "Merge"; [Optimal Workshop](https://mobbin.com/screens/ff1c7155-bfe6-485c-a92f-454ccb0d0981)).
- **Tag groups** when there are many (Linear "New group").
- **Search** at the top and scope stated ("Everyone in the organization sees these").
- **Separate person-created from automatic tags** (mymind "Your tags / AI tags").
- **Colors from a limited, named palette** (not a free picker), with tag text legible on each color — and never color
  alone to distinguish tags.

### Governing a shared vocabulary

- **Who can create tags**: everyone, or curators? Open creation leads to "urgent", "Urgent", "URGENT!!".
- **Suggest existing tags** while typing to prevent near-duplicates; normalize case and accents.
- **Descriptions** for tags whose meaning is not obvious.
- **Periodic cleanup**: show unused tags and near-duplicates for merging.
- **Translation**: shared tags in multilingual teams may need translations or a single agreed language.

## Cropping and straightening an image

- **The image fills most of the screen**, with the crop frame, draggable corners and a rule-of-thirds grid while moving
  ([Apple Photos](https://mobbin.com/screens/3a719f66-2139-427b-99c5-2ebc19fc044c),
  [LinkedIn](https://mobbin.com/screens/6775fe2c-a99e-4b68-9331-94d5f468c1a3)).
- **"Cancel" and "Done"** at the ends, always visible.
- **Aspect ratios as chips** (Free · Original · 1:1 · 4:5 · 16:9) with the chosen one marked
  ([GoPro Quik](https://mobbin.com/screens/c628e27c-ed54-440e-9e80-4a64333d73b8)); the destination's required ratio
  preselected.
- **Rotate 90° and flip** as buttons; **straighten** with a sliding ruler showing degrees (0.0°).
- **Zoom with a slider and value** ("1.0×") in addition to pinch.
- **"Reset"** visible, and undo / redo.
- **Adjustment modes as tabs** (Zoom · Rotate · Ratio; Crop · Tilt,
  [VSCO](https://mobbin.com/screens/d1c1cb70-54ff-4025-99ba-fb8bb03f7101)).
- **A preview of the final result** when the destination crops differently (a circular avatar over a square crop).

### Original, derived and restoring

- Keep the original; save crops as non-destructive edits when possible, so people can re-crop later.
- Say when an edit is destructive (the original is replaced).
- Preserve meaning: for product photos, warn when the crop cuts part of the product; for faces, suggest a crop centered
  on the face.

## Accessibility specifics

- Import steps announced; errors per row in a table.
- Tag management with keyboard; tags with text names, not color only.
- Crop with buttons and numeric inputs for moving and resizing the frame, not only dragging (WCAG 2.5.7).

## Copy

- Import previews with counts per outcome.
- Tag deletion impact stated.
- Crop ratios labeled by destination ("Profile photo", "Story").

## Common mistakes and why they happen

- **Imports that overwrite silently.**
- **Ambiguous dates parsed wrongly.**
- **Partial imports breaking relationships.**
- **Tag explosion** from open creation without suggestions.
- **Destructive crops** without keeping the original.

## Worked comparison: an import with problematic data

**Weak.** A 500-row contacts CSV from a Spanish office: dates like "03/04/2026", names with accents garbled, and
emails matching existing contacts. The import "succeeds"; 120 contacts have birthdays in the wrong month, accents are
broken, and existing phone numbers were overwritten with empty values.

**Strong.** The preview detects the date format ("We read dates as day/month/year — change"), fixes the encoding, and
shows "380 new · 120 will update existing contacts · empty cells won't overwrite existing values". The result offers
"Undo import" for 24 hours.

## How to verify and measure

- **Test** imports with messy real files (encodings, date formats, duplicates, related records).
- **Measure** import errors, undo usage, duplicate records created, tag counts and merges, re-crops.

## References

- Pipedrive — [import steps](https://mobbin.com/screens/47e55fb3-7a60-4c12-9a1e-2dfdb940a71d)
- Attio — [import steps and value mapping](https://mobbin.com/screens/de2ec449-2208-4989-9b59-2f58c1a0fc5c)
- Unify — [automatic mapping stated](https://mobbin.com/screens/f156278e-d1b1-4422-bb94-d087476de139)
- AutoSend — [mapping counters](https://mobbin.com/screens/ecb994a6-1de0-46a4-9a80-5774130e8065)
- Twenty — [mapping rows with samples](https://mobbin.com/screens/3a95f97c-c287-481f-a39d-cf2692d8f50a)
- Customer.io — [required and identifier fields](https://mobbin.com/screens/3f24f8cb-e234-4fbc-a370-4936ce2653c8)
- Workable — [value mapping](https://mobbin.com/screens/9b071e2c-c86b-4d22-b553-b78644a6e7be)
- Linear — [tag list and groups](https://mobbin.com/screens/41d11ba6-cd2f-46ee-a9bd-a23e045101e5)
- mymind — [tag list with person vs. AI tags](https://mobbin.com/screens/ed6782ee-b30c-4fe2-836d-45f0ca11c8ee)
- Buffer — [edit and delete per row](https://mobbin.com/screens/6a5468bc-04ad-42d7-962c-c933f7baa8cf)
- Navattic — [edit and delete per row](https://mobbin.com/screens/7886b05b-aec0-464b-bfd9-ec2f1037f6c6)
- Optimal Workshop — [merge tags](https://mobbin.com/screens/ff1c7155-bfe6-485c-a92f-454ccb0d0981)
- Apple Photos — [crop frame](https://mobbin.com/screens/3a719f66-2139-427b-99c5-2ebc19fc044c)
- LinkedIn — [crop frame](https://mobbin.com/screens/6775fe2c-a99e-4b68-9331-94d5f468c1a3)
- GoPro Quik — [aspect ratio chips](https://mobbin.com/screens/c628e27c-ed54-440e-9e80-4a64333d73b8)
- VSCO — [adjustment modes](https://mobbin.com/screens/d1c1cb70-54ff-4025-99ba-fb8bb03f7101)
