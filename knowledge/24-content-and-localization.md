# Content and localization

How a designer makes interfaces and copy work in any language and any region. This is not a final translation step:
it is a set of decisions about layout, copy, data formats and content structure that are cheap at the start and
expensive later. It also explains how the rest of this knowledge base should be applied when the product is not in
English.

## What it is and why it matters

- **Internationalization (i18n)** is designing and building so the product *can* work in any language and region:
  no hard-coded text, flexible layouts, locale-aware formats, support for different scripts and directions.
- **Localization (l10n)** is adapting the product *for* a specific language and region: translating, choosing the
  right form of address, adapting examples, images, units, legal text and sometimes features.
- **A locale** is a language plus a region (and sometimes a script): `es-AR` and `es-ES` share a language but differ in
  vocabulary, form of address and formats; `pt-BR` and `pt-PT` differ noticeably; `zh-Hans` and `zh-Hant` use
  different scripts.

Even a product that ships in one language serves people whose names, addresses, phone numbers, keyboards and
calendars come from elsewhere. Internationalization is part of basic quality, not a feature for later.

## How to apply this knowledge base in any language

The rest of this knowledge base is written in English and illustrates copy with English examples. Apply it like this:

1. **Rules are stated by function.** "The button names the outcome of the action and the object it acts on" holds in
   every language. The English example ("Delete project") shows one way to satisfy it.
2. **Grammar differs, the function does not.** English buttons are usually verb-first in the imperative. Other
   languages may use the infinitive (common in French and German interfaces: "Projekt löschen", "Supprimer le
   projet"), the imperative with a specific form of address (Spanish "Eliminá" or "Elimina" or "Elimine"), or a noun
   phrase. Follow the established convention of that language and of the platform, while keeping the function.
3. **Capitalization conventions differ.** English product copy often debates title case vs. sentence case; most other
   languages use sentence case by default; German capitalizes all nouns. Do not import English title case into other
   languages.
4. **Form of address is a brand and cultural decision** (see below), decided once per language and applied
   consistently.
5. **Write natively when possible.** Copy written directly in the target language reads better than copy translated
   from English. When translating, translate meaning and function, not words.

## Text length and layout

Translations change length, often a lot. Short strings vary the most, because a short English word may need a
phrase in another language.

- **Plan for growth.** Leave room for text to grow substantially, especially in buttons, tabs, labels and navigation.
  A common working assumption is that short strings can double in length and long paragraphs grow by a smaller
  proportion, but the real numbers depend on the language pair: measure with real translations of your strings.
- **Plan for shrinkage too.** Languages written in Chinese, Japanese or Korean characters are often much shorter
  horizontally but need more line height and larger minimum font sizes for legibility.
- **Let containers grow.** Buttons, chips and table headers should wrap or expand rather than truncate. Fixed widths
  that fit English are the most common localization bug.
- **Truncate only with a way to see the full text** (a tooltip is not enough for touch and keyboard users; prefer
  wrapping, or full text on focus and in a detail view).
- **Test with the longest language you ship**, and with pseudo-localization (an automatic transformation that
  lengthens strings and adds accented characters, such as "[Ŝàvé çĥàñĝéš ~~~]") to find hard-coded text and
  overflows before real translations exist.

## Never concatenate sentences

Building sentences from fragments breaks in most languages because word order, agreement and articles differ.

| Concatenated (breaks) | Why it breaks | Full message with variables (works) |
| --- | --- | --- |
| `"Delete " + itemName + "?"` | Other languages put the object elsewhere, add articles or change form by gender | `"Delete {itemName}?"` as one translatable string |
| `count + " files selected"` | Plurals differ; some languages put the number elsewhere | A plural-aware message: `{count, plural, one {# file selected} other {# files selected}}` |
| `"Shared by " + name + " on " + date` | Order of name and date varies; prepositions differ | `"Shared by {name} on {date}"`, with the date formatted for the locale |
| A sentence split across two UI elements ("Show" + [dropdown] + "per page") | The translator cannot reorder around the control | Rephrase so the control stands alone: "Rows per page: [dropdown]" |

Give translators complete messages with named variables and a note explaining each variable and where it appears.

## Plurals, gender and agreement

- **Plurals.** English has two forms (one, other). Many languages have more: some distinguish one, few, many and
  other; some use the same form for every number; some have special forms for zero or two. Use a message format that
  supports the plural rules of each language (for example ICU MessageFormat), never `if (count === 1)`.
- **Zero deserves its own message** in most interfaces: "No files selected" reads better than "0 files selected" in
  any language.
- **Gender.** Many languages inflect adjectives, past participles and articles by the grammatical gender of the noun
  or of the person. "{name} was invited" may need different forms depending on the person's gender in some
  languages. Options:
  - Rephrase to avoid gendered forms when possible ("Invitation sent to {name}").
  - Use gender selectors in the message format when the gender is known and the person has chosen how to be
    referred to.
  - Never infer a person's gender from their name.
- **Agreement with variables.** A variable inserted into a sentence may need different articles or cases depending on
  what it is. Prefer structures where the variable stands in a neutral position (after a colon, as a label).

## Form of address and tone

Many languages require choosing how to address the person, and the choice carries meaning: closeness, respect,
regional identity, age.

| Language | Common choices | Notes |
| --- | --- | --- |
| English | "you" | No formal/informal distinction; tone comes from vocabulary |
| Spanish | tú, vos, usted | Vos is standard in Argentina, Uruguay and parts of Central America; usted is formal or regional; tú is widespread |
| Portuguese | você, tu, o senhor/a senhora | Brazil mostly uses você; Portugal uses tu or more formal constructions |
| French | tu, vous | Vous is the safe default for most products; tu signals a casual brand |
| German | du, Sie | Many consumer products use du; banking, insurance and B2B often use Sie |
| Japanese | Levels of politeness (keigo) | Interfaces usually use polite forms; casual forms are a strong brand choice |

Decide per language, record it in the voice guide, and apply it everywhere in that language, including emails,
errors and legal-adjacent copy. Mixing forms in one product feels careless.

## Formats: dates, times, numbers, currency, units

Never format data by hand. Use the platform's locale-aware formatting (for example the `Intl` APIs in browsers) with
the person's locale, and test the results.

| Data | Varies by locale | Design implication |
| --- | --- | --- |
| **Dates** | Order (day-month-year, month-day-year, year-month-day), separators, month names | Use unambiguous formats in critical places ("3 Mar 2026" or the locale's long form) rather than "03/04/26" |
| **Times** | 12-hour vs. 24-hour clock, AM/PM markers | Follow the locale; always show the time zone when people in different zones share data |
| **Week start** | Monday, Sunday or Saturday | Calendars must start on the locale's first day |
| **Calendars** | Gregorian, and others in use (for example Islamic, Hebrew, Persian, Japanese era years) | Support where the audience needs them; at least do not assume Gregorian everywhere for display |
| **Numbers** | Decimal and grouping separators ("1,234.5" vs. "1.234,5" vs. "1 234,5"), digit systems | Parse input according to the locale; do not reject a comma as decimal separator |
| **Currency** | Symbol, position, spacing, decimals (some currencies have none, some have three) | Always pair amounts with a clear currency when more than one is possible |
| **Percentages** | Spacing and symbol position | Use locale formatting |
| **Units** | Metric vs. imperial, paper sizes, temperature | Use the locale's default with an option to change when people mix systems |
| **Names** | Order, number of parts, characters | See below |
| **Addresses** | Fields, order, postal code formats, whether a state or province exists | See below |
| **Phone numbers** | Length, grouping, country codes | Accept spaces, dashes and parentheses; store in an international format |

## Names and addresses

### Names

- Do not assume "first name + last name". Many people have one name, several given names, several family names, a
  family name first, or particles ("van", "de", "bin").
- Prefer a single "Full name" field, plus an optional "What should we call you?" field if you need a short form for
  greetings.
- Accept any characters people use in their names: accents, apostrophes, hyphens, spaces, non-Latin scripts.
- Do not force capitalization changes; some names have meaningful lowercase or uppercase letters.
- Sort and search names respecting accents and scripts.

### Addresses

- Address formats differ by country: some have no postal codes, some put the postal code before the city, some need a
  district, some have no street numbers.
- Ask for the country first and adapt the fields and labels to it, or use a free-form multi-line address when you do
  not need structured data.
- Do not validate postal codes with one country's pattern.
- Label fields with the local term when you adapt ("ZIP code", "Postcode", "CEP", "PLZ").

## Scripts, direction and typography

- **Right-to-left (RTL) languages** (Arabic, Hebrew, Persian, Urdu) mirror the layout: navigation, reading order,
  progress direction and most directional icons. Use logical CSS properties (`margin-inline-start` rather than
  `margin-left`) and set `dir="rtl"` at the right level.
- **Not everything mirrors.** Numbers, code, phone numbers, media playback controls in many conventions, logos and
  images of real objects keep their orientation. Icons that represent time (clocks) or physical objects usually do not
  mirror; icons that represent direction in the interface (back, forward, indent) do. Test with native readers.
- **Bidirectional text.** An RTL sentence can contain LTR fragments (a brand name, a URL, a number). Isolate inserted
  values so punctuation and order stay correct (for example with `<bdi>` or Unicode isolation).
- **Fonts must cover the scripts** you ship, with matching weights. A fallback font with a different size and weight
  makes mixed text look broken; choose fallbacks deliberately (see [typography](09-typography.md)).
- **Line breaking** differs: some scripts do not use spaces between words, some languages have very long compound
  words (German, Finnish) that need hyphenation or wrapping rules, and Thai or Japanese need language-aware breaking.
- **Line height and size**: scripts with tall glyphs or diacritics stacked above and below (Vietnamese, Thai, Arabic,
  Devanagari) need more line height than Latin text.

## Language declaration and accessibility

- Declare the page language (`lang` on the `html` element) so screen readers pronounce text correctly. This is a
  requirement (WCAG 3.1.1 Language of Page, A).
- Declare changes of language inside the page (`lang` on the element) for passages in another language (3.1.2
  Language of Parts, AA).
- Language switchers should show each language in its own name ("Español", "Deutsch", "日本語"), not translated into
  the current language, and should not use flags as the only indicator: flags represent countries, not languages.
- Plain language helps everyone, including people reading in a second language and people using machine translation.

## Content structure for localization

- **Separate content from code.** All user-facing strings live in translation files or a content system, with stable
  keys.
- **Give context to translators.** A key like `save` is ambiguous (save a file? save money? a rescue?). Add a
  description, the screen, the character budget if any, and a screenshot when possible.
- **Keep a glossary** of product terms with definitions and approved translations, and terms that must not be
  translated (brand names).
- **Keep strings complete and reusable only when the meaning is identical.** Reusing the string "Open" for a verb
  ("Open file") and an adjective ("Status: Open") breaks languages where those are different words.
- **Version legal and policy content** per locale, reviewed by people qualified for that jurisdiction.

## Cultural adaptation

Translation is not enough when meaning depends on culture.

- **Examples and sample data**: names, currencies, cities and holidays in examples should feel local or neutral.
- **Imagery**: gestures, clothing, settings and symbols carry different meanings; review imagery per market.
- **Colors**: associations differ (for example, red can signal danger, luck or celebration depending on the context
  and culture). Never rely on color alone for meaning anyway.
- **Humor and idioms** rarely survive translation; write them out of core interface copy.
- **Payment methods, ID documents and legal requirements** differ by country and affect flows, not only copy.

## Internationalization architecture (recommend it from the start)

Recommend i18n from the first screen, even when the product launches in one language: moving hard-coded strings
into translation files later is slow and error-prone, and it forces copy reviews anyway. If the person decides not
to, respect it, and keep strings at least centralized so the door stays open.

### The locale goes in the URL (web)

On the web, put the locale in the path: `/en/pricing`, `/es/precios` or `/es/pricing`, `/pt-BR/…`.

- **Each locale loads only its own translations.** The route knows the locale before rendering, so the app requests
  that locale's messages (split per locale and, in large apps, per page or feature) instead of shipping every
  language in one bundle.
- **Links are shareable and stable**: a URL opens in the language it was shared in, regardless of the browser.
- **Search engines index each language** separately, with `hreflang` alternates between versions and a canonical
  per language (see [SEO and content](14-seo-and-content.md)).
- **Server rendering and caching work per locale** without guessing from headers.
- `<html lang="…">` is set from the route.

Behavior around it:

- **The root (`/`) chooses a locale** from the person's saved preference, then the browser language, then the
  default — and redirects to `/{locale}/…`. Always offer a visible language switcher that keeps the current page.
- **Remember the choice** (cookie or account setting) and use it on the next visit.
- **Avoid query parameters** (`?lang=es`) and cookie-only switching for public pages: they are harder to share,
  cache and index.
- Subdomains or country domains (`es.example.com`, `example.es`) are alternatives when markets differ in content,
  legal entity or pricing; for the same product in several languages, path prefixes are simpler.
- Inside an authenticated app, the URL prefix is still recommended; at minimum, the locale is part of the route
  state and translations are loaded per locale.

### Native apps

Apps have no URL: use the platform's localization (string catalogs, `strings.xml`, ARB files), follow the device
language by default, offer an in-app language choice where the platform allows it, and load resources per locale.

### Code rules

- No user-facing string hard-coded in components; keys with ICU messages for plurals, gender and variables.
- Formats with `Intl` (or the platform's formatters), never hand-built.
- Translations reviewed by native speakers; machine translation only as a draft.

## Language selection and fallback

- **Detect, then let people choose.** Use the browser or device language as an initial guess, never as a lock. Make
  switching easy and remember the choice.
- **Do not tie language to location.** A person in Germany may prefer English; a person in Argentina may use the
  product in Portuguese.
- **Fallback chains**: when a string is missing in `pt-PT`, fall back to `pt` and then to the default language,
  rather than showing a key.
- **Mixed-language content**: user-generated content stays in its original language; translate the interface around
  it, and offer translation of content as an explicit action when useful.

## Worked comparison

**Feature:** a notification that a teammate shared files.

**Weak implementation.**

```
text = user.firstName + " shared " + count + " file" + (count > 1 ? "s" : "") + " with you on " + date.toLocaleDateString("en-US")
```

- Assumes a first name exists and that the name goes first.
- English-only plural logic; wrong for languages with more plural forms and for zero.
- Date always in US format, even for a person in Spain.
- In German or Spanish, the sentence needs different word order and agreement; translators get fragments.
- In Arabic, the mixed-direction sentence with a Latin name renders punctuation in the wrong place.

**Strong implementation.**

```
message key: notification.filesShared
description: Shown in the notifications panel. {sharer} is the display name of the person who shared.
             {count} is the number of files. {date} is the share date, already formatted for the locale.
en: {count, plural, =0 {{sharer} shared a folder with you} one {{sharer} shared # file with you} other {{sharer} shared # files with you}} · {date}
```

- One complete message per locale, with plural rules handled by the message format.
- The display name the person chose, isolated for bidirectional text.
- The date formatted with the reader's locale and time zone.
- Translators can reorder the whole sentence.

## Common mistakes

- **Hard-coded strings** in components, images or emails.
- **Concatenated sentences** and English plural logic.
- **Fixed widths** sized for English.
- **Flags for languages.**
- **Assuming name, address and phone formats** from one country.
- **Formatting numbers and dates by hand.**
- **Mirroring everything, or nothing**, for RTL.
- **Translating without context**, then blaming translators for the result.
- **Locking language to location** or to the browser.

## Checklist

- [ ] Every user-facing string is externalized, with context for translators.
- [ ] No sentence is built by concatenation; plurals, gender and variables use a message format.
- [ ] Layouts accommodate the longest language shipped; pseudo-localization was run.
- [ ] Dates, times, numbers, currencies and units use locale-aware formatting.
- [ ] Names, addresses and phone numbers accept international formats.
- [ ] RTL layouts mirror what should mirror and nothing else; bidirectional text is isolated.
- [ ] Fonts cover every script shipped, with deliberate fallbacks.
- [ ] Page and passage languages are declared.
- [ ] The form of address and tone are decided per language and applied consistently.
- [ ] Language can be changed easily, independent of location, and the choice is remembered.
