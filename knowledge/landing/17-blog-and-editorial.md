# Blog, resource center and editorial pages

The blog and resource center are reading surfaces inside a marketing site. Their job is different from a landing
page: help people learn and come back, build trust and search visibility, and only then lead to the product. Designing
them like landing pages (big claims, aggressive calls to action) makes them worse at both.

For typography details, see [typography](../09-typography.md); for search, [SEO and content](../14-seo-and-content.md).

## What visitors need

- **On the index**: find something relevant quickly (by topic, by recency, by popularity) and judge it (title, summary,
  author, date, reading time).
- **In an article**: read comfortably, navigate long content, trust the author and date, and know what to read next.
- **Over time**: subscribe, search and come back.

## The index

- **One large featured post** and the rest in a grid, with category, author with photo and reading time
  ([Homerun](https://mobbin.com/sites/sections/5107108b-eeca-40f5-be4b-4d824e441479),
  [Assembly](https://mobbin.com/sites/sections/bd0768da-04a2-49f2-bd90-95387c3eeb17)).
- **Categories as a bar or chips** at the top ([Mural](https://mobbin.com/sites/sections/30b7fa31-8800-4cdd-9033-849c86a17d91)),
  and Recent / Popular ([ClickUp](https://mobbin.com/sites/sections/cb6028d0-a6a2-4cd6-8a2b-ce788fc7b67f)).
- **A subscription card within the grid** like another card (ClickUp), or with a quote and a product sign-up
  ([Airtable](https://mobbin.com/sites/sections/a45fe8f0-e240-4e52-8001-b7d5991886dc)).
- **Illustrations or covers with their own system** (the same style, color by category) instead of stock photos
  ([Homerun](https://mobbin.com/sites/sections/5107108b-eeca-40f5-be4b-4d824e441479)).
- **Search and RSS.**
- **Pagination or "Load more"** with real URLs, rather than infinite scroll that breaks the footer and the back
  button.

### Cards

A card shows: title (the main link), a one-line summary, category, date, reading time, author. The whole card can be
clickable, but with one link in the accessibility tree (the title), not several links to the same place.

## The article

### Reading comfort

- **Line length**: around 60–75 characters for Latin scripts (narrower for CJK in characters).
- **Body size**: around 17–20 px for long reading on desktop; never below 16 px on mobile.
- **Line height**: around 1.5–1.7 for body text; tighter for headings.
- **Paragraph spacing** clearer than line spacing.
- **Contrast** comfortably above the minimum for long reading.

These ranges are common guidance from typographic practice, not fixed rules; test with the chosen typeface and
language.

### Structure

- Title, subtitle or summary, author with photo and role, publish date and **updated date** when revised.
- A **table of contents** for long articles, sticky on wide screens, collapsed on mobile.
- Headings that summarize sections, so scanning gives the argument.
- Images with captions and alt text; code blocks with copy buttons and horizontal scroll only inside the block.
- Pull quotes and callouts used sparingly.
- **Related articles** and one relevant product mention at the end, not interruptions every three paragraphs.

### Calls to action in articles

One contextual mention where the product genuinely helps with the article's topic, and one at the end. Pop-ups and
sticky banners that cover text punish the reader for reading.

## Editorial identity

A blog can carry more editorial character than the product: a cover system, an editorial serif, art direction per
series. Keep it consistent with the brand, and design the system so writers can produce covers without a designer for
each post (templates with category colors, illustration libraries).

## Trust

- Real authors with names, photos and short bios; expert reviewers named for health, finance or legal topics.
- Dates visible and accurate; outdated articles updated or marked.
- Sources linked; claims in articles held to the same standard as on landing pages.
- AI-assisted content reviewed and owned by a named person.

## Languages

- Translate articles natively or not at all; machine-translated blogs damage trust and search.
- Not every article needs every language; show which languages an article exists in.
- Dates and reading time formatted per locale.

## Accessibility

- One `h1` per article, logical heading levels, landmarks.
- Skip link to the article content; table of contents as a `nav` with a label.
- Code blocks readable by screen readers; images with alt text; videos with captions.
- Reading mode and zoom work (no fixed widths in pixels for text).

## Worked comparison

**Weak:** a grid of 24 identical cards with stock photos, no dates, titles cut after two lines; articles with a
pop-up after 5 seconds, a sticky banner covering the last line, 90-character lines in 15 px gray text, and "Request a
demo" boxes between every few paragraphs.

**Strong:** a featured article and a grid with category covers from one illustration system; dates and reading time;
articles at 19 px with 68-character lines, a sticky table of contents, an author bio, an updated date, one contextual
product mention and three related articles at the end.

## Common mistakes

- **Treating articles as landing pages.**
- **Stock photo covers.**
- **No dates, or outdated content without a mark.**
- **Interruptions that punish reading.**
- **Infinite scroll without real URLs.**

## Checklist

- [ ] The index lets people filter by topic and judge articles quickly.
- [ ] Article typography tuned for long reading in each language.
- [ ] Author, publish and updated dates visible.
- [ ] Table of contents for long articles; related reading at the end.
- [ ] At most one contextual product mention plus one at the end.
- [ ] Cover system producible without a designer per post.
