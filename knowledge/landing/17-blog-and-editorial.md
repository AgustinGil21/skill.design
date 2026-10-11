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
- **Categories as a bar or chips** at the top
  ([Mural](https://mobbin.com/sites/sections/30b7fa31-8800-4cdd-9033-849c86a17d91)),
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
- **Body size**: around 17–20 px for long reading on desktop; start near 16 px or above on mobile, then test the font
  and reading conditions.
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

- Use native editorial review for consequential translations. Machine-assisted drafts can help, but verify meaning,
  terminology and sources before treating them as an equivalent edition.
- Not every article needs every language; show which languages an article exists in.
- Dates and reading time formatted per locale.

## Accessibility

- A clear article heading and logical heading levels; one `h1` is a useful convention, not a WCAG counting rule.
- Skip link to the article content; table of contents as a `nav` with a label.
- Code blocks readable by screen readers; images with alt text; videos with captions.
- Reading mode and zoom work (no fixed widths in pixels for text).

## Worked comparison

The following layouts and dimensions are fictional examples, not measured outcomes.

**Weak:** a grid of 24 identical cards with stock photos, no dates, titles cut after two lines; articles with a
pop-up after 5 seconds, a sticky banner covering the last line, 90-character lines in 15 px gray text, and "Request a
demo" boxes between every few paragraphs.

**Strong:** a featured article and a grid with category covers from one illustration system; dates and reading time;
articles at 19 px with 68-character lines, a sticky table of contents, an author bio, an updated date, one contextual
product mention and three related articles at the end.

## Editorial decisions before layout

A resource center can serve discovery, ongoing learning, product evaluation or urgent troubleshooting. These tasks
need different entry points. A featured story is useful when readers browse; it can obstruct someone searching for
a specific migration procedure. Establish which task the page serves before choosing a magazine-style grid.

Ask the editor which content deserves prominence and ask readers how they describe the subject. Internal campaign
names rarely make good categories. A senior designer connects taxonomy, production capacity and visitor intent,
rather than treating the blog as an unlimited supply of interchangeable cards.

### Questions that change the structure

- Does the reader arrive at the index, an individual article or a search result within the site?
- Is freshness essential, or is an older maintained explanation more useful than a new announcement?
- Who owns technical accuracy, corrections and review dates after the author leaves?
- How many topics have enough content to justify separate navigation?
- Can a visitor distinguish advice, opinion, sponsored material and product documentation?
- Must the page support printing, saving, citation or sharing with a decision-making group?
- Which articles can be responsibly maintained in each language?
- Is a subscription valuable independently of a future product purchase?

A small collection may need a plain list with strong summaries. Adding filters to six articles increases interface
work without necessarily improving discovery. A large library may need search and a controlled taxonomy before
any new cover art; layout cannot repair inconsistent subject labels.

## Alternatives and when not to use them

| Situation | Structure | Why | Cost or limit |
| --- | --- | --- | --- |
| Small focused library | Grouped text list | Titles and summaries carry selection | Less visual spectacle |
| Frequent news publishing | Chronological index | Freshness leads the decision | Evergreen work gets buried |
| Durable educational material | Topic hubs | Builds a learning path | Requires editorial maintenance |
| Known-item search | Search-led directory | Matches a specific question | Search quality becomes critical |
| Deep authored storytelling | Magazine layout | Supports editorial hierarchy | More art and production effort |
| Product troubleshooting | Documentation route | Version and task matter most | Less campaign flexibility |

Do not turn release notes into an evergreen advice library without version labels. Do not add a “Popular” view
unless its basis is meaningful and maintained. Raw page views can favor old promotion or a misleading headline;
an editorial recommendation should be named as such instead of pretending to be a popularity ranking.

Gating an article may be appropriate for paid journalism or licensed research. For a public marketing explanation,
requiring an email can prevent the trust-building task it was meant to support. Compare direct reading with an
optional subscription; measure continued usefulness rather than treating a form submission as proof of learning.

## A method for shaping the reading journey

1. Inventory articles by reader question, freshness needs, owner, language and evidence quality.
2. Group by questions readers recognize; resolve overlapping categories before designing chips.
3. Choose what belongs on a card by its role in selection, not by available CMS fields.
4. Design a representative article with a long title, table, image, quote and correction notice.
5. Connect related reading by the next question, not only by shared tags or commercial priority.
6. Define publication, revision, withdrawal and translation states as part of the editorial workflow.

An author portrait can help establish identity but is not a substitute for expertise or accountable sourcing.
Reading time is an estimate, not a promise: code, tables, assistive technology and language change reading pace.
Omit it if the estimate adds false precision; retain a useful summary of scope instead.

Distinguish a substantial revision date from a technical deployment date. Automatically changing “Updated” whenever
an asset rebuilds falsely signals freshness. A correction should say what materially changed, and withdrawn advice
may need a dated explanation rather than silently disappearing from a bookmarked URL.

## States and edge cases

| Condition | Reader-facing behavior | Recovery or next step |
| --- | --- | --- |
| Search loading | Keep query and existing context | Announce completion when meaningful |
| No search results | Explain the query produced no match | Offer revised terms or topic browsing |
| Filter has no entries | Keep selected filters visible | Allow clearing one or all filters |
| Search service fails | Distinguish failure from zero results | Provide browsable topics |
| Image unavailable | Keep caption and meaningful alternative | Preserve the argument in text |
| Article is outdated | State scope and what changed | Link to the maintained replacement if one exists |
| Article withdrawn | Explain availability and relevant correction | Preserve a useful route from old links |
| Translation missing | Name available language choices | Do not silently substitute unrelated content |
| Newsletter pending | Explain confirmation step | Permit correcting the address safely |
| Subscription timeout | Receipt uncertain | Check status or retry without duplicate mail |

Returning from an article should restore the index's query, filters and position where feasible. A “Load more”
button that resets on return makes comparison expensive. Pagination has a similar obligation: meaningful URLs
help sharing, but URL support alone does not guarantee focus and scroll restoration.

Long tables and code can need contained horizontal scrolling. Keep the article column readable, give the scroll
area an understandable label when needed, and ensure keyboard users can reach its content. Test long unbroken
identifiers without shrinking the entire page's text to make them fit.

## Accessibility of finding and reading

WCAG 1.3.1 Info and Relationships (A) requires structural relationships to be programmatically available. Use real
headings, lists and table headers where those relationships exist. Bold paragraphs that resemble headings do not
provide equivalent navigation to a screen reader user.

WCAG 2.4.1 Bypass Blocks (A) requires a way past repeated blocks; a skip link is a common implementation.
WCAG 2.4.4 Link Purpose (In Context, A) matters for repeated article links: “Read more” needs an understandable
context. A descriptive title link often avoids the problem and reduces repeated tab stops.

WCAG 1.4.4 Resize Text (AA), 1.4.10 Reflow (AA) and 1.4.12 Text Spacing (AA) address different adaptations.
Test each rather than using a large base font as proof. Recommendations for line length and font size are starting
points; they do not replace the required behavior when readers enlarge or restyle text.

WCAG 1.1.1 Non-text Content (A) governs image alternatives. A decorative cover can have empty alt text when the
adjacent title already communicates its purpose. A chart that supports the argument needs its information conveyed,
not merely an alt description of its colors. Captions supply visible context and need not duplicate the alternative.

When filters update results without navigation, WCAG 4.1.3 Status Messages (AA) may require programmatically
available status. Announce a concise result count after a committed change; avoid reading the full results list
on every keystroke. Keep focus on the control unless the interaction intentionally navigates elsewhere.

## Copy and localization by reading moment

| Moment | Function | Fictional English example |
| --- | --- | --- |
| Card | Explain scope without overselling | “Prepare appointment data for a scheduling migration” |
| Article opening | Identify audience and limits | “For administrators importing an existing appointment list.” |
| Correction | Make changed meaning visible | “Updated the supported import fields.” |
| No results | Identify state and recovery | “No articles match these filters. Clear a filter to broaden results.” |
| Subscription | State the recurring exchange | “Receive new migration guides by email.” |
| Pending confirmation | Explain remaining action | “Check your email to confirm the subscription.” |

Titles should help predict the article, not merely win a click. Suspense can suit narrative journalism; procedural
help usually benefits from naming the task. Preserve that function across languages rather than copying an English
headline formula, capitalization style or verb order.

Reading-time calculations need language-aware assumptions, especially for scripts without spaces. Dates should
follow the reader's locale and state a time zone when publication time changes interpretation. Sorting by title
requires locale-aware collation; an English alphabetic index is not a universal navigation model.

Give translated articles their own review status. An updated original does not mean every edition is current.
Show meaningful differences when they affect the advice, and preserve language choice across related links where
an equivalent exists. Mark language changes for pronunciation under WCAG 3.1.2 Language of Parts (AA), subject to
its exceptions; declare the page language under 3.1.1 (A).

Test quotations, bylines and code identifiers in mixed-direction text. Mirror navigation where appropriate, while
keeping code and other direction-sensitive notation intact. Font fallbacks need enough line height for the shipped
scripts, including diacritics; do not clip titles to preserve a uniform card silhouette.

## Worked reasoning: from visual upgrade to useful reading

For the same fictional clinic-software resource center, the original weak layout hides whether a migration article
is current and interrupts readers with demo requests. Increasing font size helps reading, but a featured card and
better illustration do not answer the more consequential question: does this procedure apply to my data?

Extend the stronger version with a scope statement, supported version or import format, accountable author and
substantive revision note. Place a product mention where a described workflow actually uses the product. Recommend
a preparation checklist next, because it answers the reader's likely follow-up question.

Reject an exit-intent signup overlay for this task: it adds interruption at the point the reader may be comparing
instructions in another tab. An inline optional newsletter can serve ongoing learning without blocking the task.
If readers instead pay for independent editorial reporting, reconsider the business model and access treatment;
the marketing recipe should not silently dictate a publication's revenue model.

The stronger approach costs editorial time and may produce fewer immediate demo clicks. Its hypothesis is better
qualified evaluation and fewer misunderstandings. That needs testing; a calmer layout alone is not evidence of
trust or improved conversion.

## Verification, metrics and guardrails

Test the index with a concrete question, then test direct arrival at the article from search. Ask readers to judge
relevance, identify the source and date, find a limitation and explain their next step. Avoid asking only whether
they like the page. Include an outdated article and a no-results path in the protocol.

Verify keyboard navigation, heading navigation with a screen reader, zoom, text spacing, print and back navigation.
Check that overlays do not cover focused links or the final lines of text. Test newsletter confirmation and failure
states separately from the article, because a successful reading task can end without subscribing.

Track successful finding, unresolved searches, helpful onward navigation and subscription confirmation. Product
activation may be a delayed secondary outcome; attribution is uncertain when readers return through another device
or share the article with a colleague. Do not present assisted-conversion counts as causal proof.

Guard against increased bounce caused by misleading titles, complaints about obsolete advice, unsubscribe rates
and blocked reading on narrow screens. Time on page and scroll depth are diagnostic signals: fast departure may
mean an answer was found, and a long session may mean the writing was difficult.

## Decision checklist

- [ ] Index structure matches browsing, learning or known-item discovery.
- [ ] Categories have reader meaning and enough maintained content.
- [ ] Article scope, evidence ownership and freshness are explicit.
- [ ] Search failure, no results, withdrawal and missing translations are distinct.
- [ ] Reading remains usable through zoom, restyling, assistive technology and print.
- [ ] Measurement rewards useful reading, with commercial outcomes interpreted cautiously.

## Common mistakes

Commercial pressure often adds repeated calls to action because article value is measured only by immediate leads.
Agree on reading and discovery outcomes before designing placements. Stale dates usually reflect missing ownership,
so assigning a review process is more effective than merely redesigning the date label.


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
- [ ] Product mentions earn their place and do not interrupt the reading task.
- [ ] Cover system producible without a designer per post.
