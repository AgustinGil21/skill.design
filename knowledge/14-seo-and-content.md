# SEO and findable content

How a designer makes content that people can find through search engines and AI assistants — and that is worth
finding. Good SEO is mostly good content, well structured, fast and honest. This file covers search intent, page
structure, information architecture for content, multilingual and multi-regional sites, technical foundations,
maintenance and measurement. It complements
[landing accessibility, performance and SEO](landing/07-accessibility-performance-and-seo.md).

Search engines and AI systems change often. Treat specific techniques as current recommendations to verify against
the official documentation of each search engine, not as permanent rules. The principles — useful content, clear
structure, fast pages, honest information — have been stable for a long time.

## What it is and why it matters

Findability decides whether the right people reach the right page at the moment they need it. It improves when:

- Each page answers a clear need in the words people use.
- Pages are organized so related content reinforces each other.
- The technical foundation lets search engines read, render and index the content.
- Content stays accurate over time.

SEO that ignores what happens after the click (the page does not help) wastes the traffic it wins.

## 1. Search intent and the task after the click

Every search has an intent:

| Intent | Example | What the page should do |
| --- | --- | --- |
| **Informational** | "how to calculate VAT on services to another EU country" | Answer directly, then explain in depth |
| **Comparative** | "invoicing app for freelancers vs. spreadsheet" | Compare honestly, with criteria |
| **Transactional** | "invoicing app pricing", "try invoicing app" | Make the action easy and clear |
| **Navigational** | The brand name | Take people where they wanted to go |

- **Look at what appears today for the query**: the format that ranks (guide, list, tool, video) shows what people
  expect.
- **Design for the task after the search.** Someone searching "how to calculate VAT" may need a calculator, not an
  essay. Someone comparing needs a fair table.
- **One primary intent per page**, but real needs overlap. A pricing page can serve transactional and comparative
  intent if both are well structured.

## 2. Content architecture

Individual pages succeed or fail as part of a structure.

- **Topic clusters**: a central page on a topic links to detailed pages on subtopics, and they link back. This helps
  people navigate and helps search engines understand topical depth.
- **Avoid cannibalization**: two pages competing for the same intent split signals and confuse people. Merge them,
  or differentiate their intents clearly.
- **Breadcrumbs and descriptive internal links** with meaningful anchor text.
- **Navigation that exposes important content**, not only search.

### Consolidate, keep or retire

Content accumulates. Review it periodically:

| Situation | Action |
| --- | --- |
| Two pages cover the same intent | Merge into the better one; redirect the other (301) |
| A page is outdated but still useful | Update it, and show the update date |
| A page is obsolete and gets no meaningful traffic | Retire it; redirect to the closest relevant page or return 410/404 |
| A page is accurate but thin | Expand it with real substance or merge it |
| A page targets a different audience with similar words | Keep it separate, make the distinction explicit |

## 3. Page structure

- **Title**: unique per page, describing the content with the main term early and the brand at the end; roughly 50–60
  characters is a common guideline to avoid truncation, not a rule.
- **Meta description**: an invitation stating the benefit, roughly 150–160 characters; search engines do not always use
  it, but it guides the snippet.
- **One `h1`** that matches the intent; `h2` and `h3` that reflect the questions people ask.
- **The direct answer near the top** in one or two sentences, then the development. This serves readers, featured
  snippets and AI systems that summarize sources.
- **Unique, useful content**: original data, examples, screenshots, real experience. Content that repeats what is
  everywhere else adds no value.
- **Images** with descriptive file names and alternative text, explicit dimensions and modern formats.
- **URLs**: short, readable, lowercase, with hyphens; in localized sites, consider localized slugs.

## 4. Multilingual and multi-regional sites

- **One URL per language or region version**, never content switched by cookies or browser language on the same URL,
  which search engines cannot index separately.
- **URL structure options**:

| Structure | Example | Notes |
| --- | --- | --- |
| Subdirectories | `example.com/de/`, `example.com/pt-br/` | Simple to maintain; shares domain authority |
| Subdomains | `de.example.com` | Separable infrastructure |
| Country domains | `example.de` | Strong local signal; more costly to maintain |

- **`hreflang` annotations** link each page to its equivalents in other languages and regions. They must be reciprocal
  (each version references all others, including itself), use valid language and optional region codes (`es`,
  `es-AR`, `pt-BR`), and can include an `x-default` for a fallback page.
- **Translated vs. adapted content**: translating words is not enough. Search terms differ between languages and even
  between regions of the same language. Research the terms people actually use in each market, and adapt examples,
  prices, currencies and legal information.
- **Do not auto-redirect by IP or browser language** without letting people switch; offer a clear language selector
  and remember the choice.
- **Declare the page language** with `lang` (also an accessibility requirement).
- **Machine translation without review** produces low-quality pages that serve neither people nor search.

## 5. Technical foundations

- **Server-rendered or static HTML** for the main content; do not depend on JavaScript to show the text.
- **Core Web Vitals within the "good" thresholds** as defined by Google at the time of writing: Largest Contentful
  Paint ≤ 2.5 s, Interaction to Next Paint ≤ 200 ms, Cumulative Layout Shift ≤ 0.1, measured at the 75th percentile of
  real visits.
- **Responsive design**: search engines primarily index the mobile version.
- **Canonical URLs** on every page; sitemaps; `robots.txt` that does not block needed resources.
- **Structured data** (JSON-LD) only with visible, true information: Organization, Product, Article, FAQ where
  appropriate, Breadcrumbs, real reviews. Never mark up content that is not on the page.
- **Correct status codes**: a real 404 for what does not exist, 301 for what moved.
- **HTTPS** without mixed content.

## 6. AI assistants and generative answers

AI systems that answer questions draw on web content. What helps is largely what helps people:

- Clear, verifiable statements; original data; visible authorship and update dates.
- Scannable structure (question-style headings, lists, tables) and explicit definitions.
- Consistent information about the organization across the site and external profiles.
- Accuracy over volume: content written to be cited, not to rank for every variation.

The way these systems choose and cite sources is not fully documented and changes over time. Distinguish what you
know (evidence from your own analytics or official documentation) from what is recommended by practitioners and from
what is speculation. Check the current official guidance of each search engine before applying specific techniques.

## 7. Content that lasts

- **Useful guides and tools** (calculators, templates, honest comparisons) attract natural links and return visits.
- **Update what ages**, and say so ("Updated on …", in the reader's date format).
- **Real authorship**, with author profiles showing relevant experience.
- **An owner and a review date per page**, so content does not silently rot.
- **Write for people, not for search engines**: keyword-stuffed text is obvious to readers and penalized by search
  engines.

## 8. Social sharing

- Open Graph and social cards: title, description and a designed image (1200×630 is common), legible as a thumbnail.
- A distinct image for each important page, not just the logo.
- Localized titles, descriptions and images for each language version.
- Test how links look in the platforms where they are shared most.

## 9. Measuring usefulness, not only traffic

Traffic is a means. Measure what happens after people arrive:

- **Task completion**: did they use the calculator, find the answer, start the trial?
- **Engagement that signals value**: scroll depth on long guides, return visits, internal navigation to related pages.
- **Search queries that lead to the page** and whether the page answers them.
- **Feedback**: "Was this helpful?" with an optional reason.
- **Guardrails**: bounce back to search results quickly (people did not find what they wanted), support contacts
  about topics the page should answer.

See [measurement and learning](26-measurement-and-learning.md).

## Worked comparison

**Same goal:** an accounting software company wants to attract freelancers looking for help with invoices.

**Weak approach.** Forty short articles targeting variations of "invoice template", each with similar text, a stock
photo and a sign-up button. The same content is machine-translated into four languages under the same URLs with a
language switcher that changes text by cookie.

- Cannibalization; thin content; no task served after the click.
- Translated pages are invisible to search and use terms people do not search for locally.

**Strong approach.**

- One comprehensive page per real intent: "Free invoice template" offers a working template generator (the task),
  with a short guide on what a valid invoice must contain, and a comparison with doing it in the product.
- Country-specific pages where requirements differ (VAT rules, mandatory fields), adapted by people who know each
  market, at separate URLs with reciprocal `hreflang`.
- Each page has an owner and a review date; legal information is checked yearly.
- Success measured by templates generated and trials started from the page, not by visits.

## Common mistakes

- **Writing for keywords instead of people.**
- **Many thin pages for one intent.**
- **Content switched by language without separate URLs.**
- **Literal translation instead of local research.**
- **Structured data for content that is not visible.**
- **JavaScript-only rendering of main content.**
- **Treating unverified SEO folklore as rules.**
- **Never updating or retiring content.**

## Checklist

- [ ] Each page serves a clear intent and the task after the click.
- [ ] Content is organized in clusters without cannibalization; outdated content is updated, merged or retired.
- [ ] Titles, descriptions, headings, URLs and images are structured and descriptive.
- [ ] Multilingual and multi-regional versions have separate URLs, reciprocal `hreflang` and locally researched terms.
- [ ] Main content is server-rendered; Core Web Vitals are within thresholds on real visits.
- [ ] Structured data reflects only visible, true information.
- [ ] Pages have an owner, an update date and authorship.
- [ ] Success is measured by usefulness, with guardrails.
