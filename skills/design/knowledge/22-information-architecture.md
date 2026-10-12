# Information architecture and mental models

How a designer decides what things are called, how they relate, where they live and how people find them.
Information architecture (IA) is the skeleton under every screen: when it is right, navigation feels obvious and
people predict where things are; when it is wrong, no amount of visual polish fixes the feeling of being lost.

## What it is and why it matters

Information architecture is the structure of a product's content and functions: the **objects** it deals with, the
**relationships** between them, the **vocabulary** used for them, the **groupings** they are placed in and the
**paths** people take to reach them.

It improves decisions about:

- **Navigation.** What goes in the sidebar, what is a tab, what is a filter, what is a setting.
- **Naming.** Whether a "Workspace", a "Project" and a "Team" are three things or one thing with three names.
- **Screen boundaries.** What deserves its own page, what is a panel, what is a section of something else.
- **Search and findability.** Whether people can find what they need without knowing where it is.
- **Growth.** Whether the structure can absorb the next ten features without becoming a junk drawer.

Most navigation problems are IA problems in disguise. "Users can't find the invoices" is rarely about the size of the
link; it is usually about invoices living under a word people do not associate with them, or under an object they
would not think to open.

## Mental models

A mental model is the person's internal picture of how something works: what exists, what contains what, what
causes what. People navigate by their model, not by yours.

### Three models in every product

| Model | Whose | Example in an accounting product |
| --- | --- | --- |
| **Implementation model** | How the system is built | Ledgers, journal entries, reconciliation jobs, tables |
| **Represented model** | How the interface presents it | Whatever the screens show |
| **Person's mental model** | How the person thinks about it | "Money that came in, money that went out, what I still owe, what I'm owed" |

The represented model should sit close to the person's model, not to the implementation. When a product exposes its
database ("Entities", "Records", "Jobs"), people must translate every time they look for something.

### How to learn the person's model

- **Listen to their words.** In interviews, support tickets and sales calls, note the nouns people use and how they
  group them. "I need to find last month's receipts" tells you "receipts" and "by month" matter.
- **Card sorting.** Give people cards with content or features and ask them to group and name the groups (open sort),
  or to place cards in your proposed groups (closed sort). Open sorts reveal models; closed sorts test a proposal.
- **Watch them search.** What they type in search boxes is a direct readout of their vocabulary.
- **Ask them to explain the product to a colleague.** The structure of their explanation is their model.

The model differs between people. Accountants and small business owners may describe the same product differently.
When models diverge, design for the people whose task matters most, and bridge the others with search, synonyms and
clear labels.

## Objects, relationships and attributes

Before designing navigation, model the domain. This is often called object-oriented UX: identify the things before
the actions.

### Steps

1. **List the nouns** people use and the system needs: Client, Project, Invoice, Payment, Team member, Document.
2. **Merge synonyms and split homonyms.** Is "Account" the login, the customer company or the bank account? If it is
   three things, it needs three names.
3. **Define relationships.** A Client has many Projects; a Project has many Invoices; an Invoice can have several
   Payments; a Payment can cover several Invoices (many-to-many matters for navigation).
4. **List the key attributes** of each object, especially the ones people use to identify and find it (a client's
   name and tax number, an invoice's number, amount and due date).
5. **List the actions** on each object (create, send, approve, archive) and who can perform them.
6. **Mark the primary objects**: the ones people come to work on. These usually become top-level navigation.

### A small model, written out

```
Client ──< Project ──< Invoice >──< Payment
  │                       │
  └──< Contact            └── Document (PDF, attachments)

Primary objects: Client, Invoice.
Secondary: Project (context for invoices), Payment (seen mostly from invoices).
Identifiers: Client name + tax ID; Invoice number + client + amount + due date.
```

From this model, decisions follow: invoices need to be reachable both from their client and from a global list
(people think "who owes me?" and "what is overdue?"); payments are mostly seen inside invoices but also need a list for
reconciliation.

## Organizing schemes

Content can be organized in several ways. Each answers a different question.

| Scheme | Answers | Works well for | Breaks when |
| --- | --- | --- | --- |
| **By object** | "Where are my clients?" | Products where people work on things | People think in tasks that span objects |
| **By task** | "How do I send an invoice?" | Occasional, procedural work | Tasks overlap or grow in number |
| **By audience** | "What's for me?" | Sites serving distinct groups (patients / professionals) | People belong to several audiences |
| **By time** | "What's happening today?" | Calendars, feeds, inboxes | People need to find something by what it is |
| **By location** | "What's near me?" | Maps, stores, field work | Location is irrelevant to the task |
| **Alphabetical** | "Where is X?" when the name is known | Long lists of known items (countries, contacts) | People do not know the name |
| **By status or workflow stage** | "What needs my attention?" | Pipelines, support queues, approvals | Items move constantly and people lose track |

Most products combine schemes: primary navigation by object, a home view by time or status, search for known names.
The danger is mixing schemes **at the same level** without a reason (a sidebar with "Clients", "Send invoice",
"Today" and "Settings" side by side mixes object, task, time and system).

## Navigation structures

### Choosing what goes where

| Structure | Use it for | Avoid it for |
| --- | --- | --- |
| **Global navigation** (sidebar, top bar, tab bar) | Primary objects and areas people move between often | Rare actions and settings |
| **Local navigation** (tabs inside an object) | Facets of one object (Overview, Invoices, Contacts of a client) | Different objects or unrelated tasks |
| **Filters and views** | Subsets of one list (overdue invoices, my projects) | Things that are not the same kind of object |
| **Search** | Known items, large collections, cross-cutting lookup | Being the only way to reach important things |
| **Contextual links** | Related objects (from an invoice to its client) | Primary paths that should be in navigation |
| **Settings** | Configuration that changes behavior and is rarely touched | Daily work |
| **Command palette** | Fast access for frequent and expert users | The only way to find a feature |

### Tabs, filters or separate pages?

This is one of the most frequent IA decisions and one of the most often gotten wrong.

- **Tabs** when the content is facets of the same object or context, people switch between them, and each facet is
  substantial. "Client: Overview / Projects / Invoices / Notes."
- **Filters** when the content is the same kind of item and people want subsets. "Invoices: All / Draft / Overdue /
  Paid" is a filter, even if it looks like tabs. Treat it as a filter: keep the same columns and actions, show counts,
  remember the choice.
- **Separate pages** when the content answers different questions, has different actions, or is used by different
  people.

### Depth vs. breadth

A flat structure (many items at one level) makes everything one click away but harder to scan. A deep structure (few
items, many levels) is easy to scan at each level but slow and easy to get lost in. There is no universal ideal
number of items; what matters is whether people can predict which branch holds what they want. Seven clear,
distinct items beat four vague ones.

Signs of a structure that is too deep: people use the back button repeatedly, they open sections "to see what's in
there", search usage spikes for items that exist in navigation. Signs of too flat: long menus people scan slowly,
items that look similar, frequent misclicks between neighbors.

## Labels and vocabulary

Labels are the most visible part of IA, and the cheapest to fix.

- **Use the person's words**, not the team's. Internal names ("Spaces", "Orbit", "Hub") cost a translation every time
  unless they are taught deliberately and consistently.
- **One name per thing, one thing per name.** If "Workspace" and "Organization" mean the same, pick one. If "Account"
  means two things, rename one.
- **Labels predict content.** A person should be able to guess what is behind a label before clicking. "Resources" and
  "More" predict nothing.
- **Parallel structure.** Items at the same level share grammatical form (all nouns, or all verbs) so they read as a set.
- **Stable labels.** Renaming a navigation item breaks habits, documentation, support articles and screenshots. Do it
  for a reason, with a plan (see [redesigns and migrations](29-redesigns-and-migrations.md)).

### Labels across languages

- A label that is short in one language may double in another. Navigation must accommodate the longest translation
  without truncating to ambiguity (see [content and localization](24-content-and-localization.md)).
- Some languages have no direct equivalent for product terms; translators need a glossary with definitions, not just
  words, so "Workspace" is translated consistently and meaningfully.
- Avoid labels built on idioms or wordplay; they rarely translate.
- Alphabetical ordering differs by language and script; never hard-code an order that only makes sense in one
  language.

## Findability: search and navigation together

Navigation helps people who know where something is or can recognize it when they see it. Search helps people who
know what it is called. Most people need both at different moments.

Design search with IA in mind:

- **Index the identifiers** people use (invoice numbers, client tax IDs, email addresses), not only titles.
- **Group results by object type**, so "Acme" returns the client, its projects and its invoices in labeled groups.
- **Support synonyms and the person's vocabulary** ("bill" finds invoices if people say "bill").
- **Handle accents, case and scripts**: searching "Jose" should find "José"; transliteration matters for some
  languages.
- **Show where a result lives** ("Invoice 2041 · Client: Lisboa Coffee · Project: Rebrand").

See [search and command palette](patterns/search-and-command-palette.md).

## Growth: designing a structure that scales

A structure designed for today's five features often collapses under the next twenty. Before adding a feature, ask:

- **Is it a new object, or an attribute or action of an existing one?** Most features are the latter and do not
  deserve top-level navigation.
- **Which existing object would people look in first?** Put it there, and link it from elsewhere if needed.
- **Does it fit the organizing scheme of its level?** If not, the scheme may need to change, not just accept an
  exception.
- **What will the structure look like with ten more items like this?** If the answer is "a long, flat list", design
  grouping now.

Signs the structure needs rework: a "More" or "Other" section that keeps growing, features reachable only through
search, frequent questions in support about where things are, labels that need tooltips to be understood.

## Validating IA

| Method | What it tells you | When to use it |
| --- | --- | --- |
| **Open card sort** | How people group and name content | Early, when building or rebuilding a structure |
| **Closed card sort** | Whether people place content where you expect | Testing a proposed structure |
| **Tree test** | Whether people can find items in a text-only hierarchy, without visual design | Before designing screens; comparing two structures |
| **First-click test** | Whether people start in the right place | On real screens; first clicks predict task success |
| **Search log analysis** | What people look for and fail to find | Any time; it is free evidence |
| **Task-based usability test** | Whether people complete real tasks | On prototypes and live products |

Tree testing deserves special mention: it removes visual design and tests the structure alone, so a failure clearly
points at labels or grouping rather than at layout.

## Accessibility of the structure

- **Consistent navigation** across pages is a requirement for repeated components (WCAG 3.2.3 Consistent Navigation,
  AA) and consistent identification of the same functions (3.2.4, AA).
- **Multiple ways** to find pages in a set of pages (navigation, search, sitemap) is a requirement (2.4.5 Multiple
  Ways, AA), except for steps in a process.
- **Headings and landmarks** expose the structure to screen reader users, who navigate by them.
- **Clear labels** help everyone, and especially people with cognitive disabilities and people reading in a second
  language.
- **Predictable location**: the same item in the same place reduces memory load.

## Worked comparison

**Product:** a tool for small clinics: appointments, patients, billing, staff schedules, reports and settings.

**Weak structure (implementation model):**

```
Dashboard · Entities · Calendar · Transactions · Users · Reports · Config
```

- "Entities" hides patients behind a database term.
- "Transactions" mixes invoices, payments and refunds that people think of separately.
- "Users" mixes staff accounts (permissions) with staff schedules (daily operations).
- Receptionists, who book all day, have to go through "Calendar" and then filter by doctor each time.

**Strong structure (person's model, verified with a card sort of 12 receptionists and 4 clinic owners):**

```
Today        (receptionist home: appointments for today, check-ins, gaps)
Appointments (calendar by doctor and room)
Patients     (search first; each patient has Overview, Appointments, Invoices, Documents)
Billing      (Invoices, Payments, Insurance claims as filters/tabs)
Team         (staff schedules; permissions live in Settings)
Reports
Settings
```

- Primary navigation by object, with a "Today" home organized by time for the most frequent role.
- Invoices are reachable from Billing (for the owner checking what is unpaid) and from each patient (for the
  receptionist answering "how much do I owe?").
- Permissions moved to Settings because they change rarely and are handled by owners.
- Labels in the clinic's own words, with a glossary for translation.
- Tree test result: before, 5 of 12 participants found a patient's unpaid invoice; after, 11 of 12.

## Common mistakes

- **Mirroring the org chart or the database.** Navigation that reflects internal teams or tables instead of people's
  tasks.
- **Clever names.** Branded section names that nobody understands without a tour.
- **Mixed schemes at one level.** Objects, tasks and times side by side in the same menu.
- **Filters dressed as navigation.** Separate pages for "Open" and "Closed" tickets that should be one list with a
  filter.
- **Search as an excuse.** "They can search for it" to avoid deciding where something lives.
- **Adding without restructuring.** Each new feature gets a top-level item until the sidebar becomes a list of
  everything.
- **Renaming silently.** Changing labels without redirects, documentation updates or a note to people who relied on
  them.

## Checklist

- [ ] The domain objects, relationships, identifiers and actions are written down.
- [ ] Synonyms are merged and homonyms are split; one name per thing.
- [ ] Labels come from the people's vocabulary, verified with evidence (interviews, search logs, card sorts).
- [ ] The organizing scheme at each level is consistent, or the mix is deliberate.
- [ ] Tabs, filters and pages are chosen by what the content is, not by how it looks.
- [ ] Important items are reachable by navigation and by search, with identifiers indexed.
- [ ] Labels fit the longest translation and a glossary exists for translators.
- [ ] The structure was tested (tree test, first-click, or tasks) before detailed screens.
- [ ] There is a plan for where the next features will go.
