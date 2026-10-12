# Search and command palette

Search lets people find things they know exist; a command palette lets them go anywhere and do anything from the
keyboard. They look similar — a field and a list — but they serve different intents, and mixing them carelessly
creates dangerous results: a first suggestion that deletes something, or an AI answer where a known document was
expected.

## The problem and who has it

- **People who know what they want** but not where it is: "the invoice for Lisboa Coffee".
- **Frequent users** who want speed: jump to a page or run an action without the mouse.
- **People exploring**: browsing suggestions, recent items, categories.

When search fails, people navigate by memory, ask colleagues or give up. When a command palette fails, experts lose
their fastest path, or trigger the wrong action.

## Questions to ask before deciding

- **What do people search for**: objects (customers, files), pages, actions, help, or answers?
- **How do they identify things**: names, numbers, emails, codes, content inside documents?
- **How big is the corpus** and how fresh must results be?
- **Which results are dangerous to open by accident** (actions with effects)?
- **Permissions**: can results reveal things people should not see?
- **Languages and scripts** of content and queries.

## Alternatives and how to choose

| Intent | Tool | Why |
| --- | --- | --- |
| Find a known item | Global search with typed results | Direct path by name or identifier |
| Narrow a list | In-list search plus filters | Stays in context (see [tables and lists](tables-and-lists.md)) |
| Navigate or act fast | Command palette | Keyboard-first speed |
| Ask a question in natural language | AI assistant | Synthesizes, but less predictable (see [AI chat](ai-chat-and-agents.md)) |
| Complex queries | Advanced search builder | Precision (see [advanced search](video-upload-advanced-search-and-live-activities.md)) |

Separate **finding** (opening something) from **executing** (changing something). A palette can contain both, but
actions with consequences need their own group, clear verbs and, when risky, a confirmation step.

## Anatomy and behavior

### Command palette (Cmd+K / Ctrl+K)

One place to go anywhere and do anything without the mouse.

- **A field at the top** with text that says what can be done ("Search pages or type a command").
- **Groups** with titles: Recent, Quick actions, Navigation, Settings, results by type
  ([Magnific](https://mobbin.com/screens/e22e26e2-f813-4f1e-beda-43c9ecf26419),
  [Mistral](https://mobbin.com/screens/8450c1c7-7c10-40a3-9af3-c9c234ac4b53),
  [Devin](https://mobbin.com/screens/274435b9-f420-4a7c-ab68-82514c1419f9),
  [Supabase](https://mobbin.com/screens/9b4725f5-e038-4fc7-98ad-64a59f74b4d7)).
- **The shortcut next to each action** that has one: the palette teaches shortcuts.
- **A footer with keys**: arrows to move, Enter to open, Cmd+Enter to open in a new tab, Escape to close
  ([StackAI](https://mobbin.com/screens/bbcc94bb-f535-4dca-8532-56b135fce5c3),
  [Vapi](https://mobbin.com/screens/593d7acd-2e16-4365-bcd6-02ce52f48f3b)).
- **Secondary detail** next to or under each result (its section, a short description).
- **The first option is preselected** so Enter runs it — appropriate when it opens something; risky when it executes
  an action with effects. Preselect navigation results, not destructive actions.
- **Actions ending in "…"** when they open something more ("Create agent…").
- **In AI products**, a free-text option such as "Ask the assistant: '…'" — placed where it does not displace exact
  matches for known items.
- **Tolerant matching**: ignore accents and case, match initials and synonyms ("remove" finds "Delete").

### Global search

- Always visible in the top or side bar, with its shortcut shown.
- Results grouped by type, with the matched term highlighted, and where each result lives ("Invoice 2041 · Lisboa
  Coffee").
- Recent items and suggestions before typing.
- Filters as chips under the field; the URL keeps the search (shareable, back works).
- Index identifiers people use: numbers, emails, codes, not only titles.

### Mobile search

- On open, before typing: **recent searches** (with an X per item and "Clear all"), **popular or suggested** searches
  and **categories** to explore ([Monzo](https://mobbin.com/screens/2f456ff2-f46a-44fa-a7c2-8c247ed51867),
  [foodpanda](https://mobbin.com/screens/eed3c76a-e5a1-4e9e-8267-ad10fb5a5bd6),
  [Fresha](https://mobbin.com/screens/86a0b800-40fe-4cbe-a1b6-1355f84bd38d)).
- **Scope chips** under the field (All / Customers / Orders)
  ([Jobber](https://mobbin.com/screens/ca646634-c05a-4c02-a02c-24495ab96393)).
- **Suggestions while typing** with the matching part emphasized and quick filters derived from the query ("Price:
  under $10", [CVS](https://mobbin.com/screens/a058dde7-9feb-4329-bff8-938e24716f82)).
- **Advanced operators explained as chips** ("organization:", [Mesh](https://mobbin.com/screens/fa6a9c31-104e-4c56-ac36-e84143548f9e)).
- "Cancel" next to the field; the keyboard shows a "Search" key.

## Ranking and explainability

- **Exact matches first**, then prefix matches, then fuzzy matches.
- **Recency and frequency** of the person's own use raise results.
- **Explain why** a result appears when it is not obvious (matched in content, matched a synonym).
- **Stable ranking** for the same query, so people can learn positions.
- **Test relevance** with real queries from logs: for the top queries, is the expected result first?

## States and transitions

- **Before typing**: recent, suggested, categories.
- **Typing**: results update with a short debounce; keep previous results visible while loading.
- **Partial results**: some sources slower; show what is ready and mark the rest as loading.
- **No results**: repeat what was searched ("No results for 'xyz'"), suggest checking spelling or something less
  specific, offer popular searches as chips ([Uxcel](https://mobbin.com/screens/e7ae3281-0fdc-4936-98e2-16ccb49d2df9)),
  keep the field ready to edit. If filters are active, "Remove filters" is the first way out. Never a blank page with a
  single sentence.
- **Stale results**: indexes lag; recently created items may not appear yet. Say so when likely ("Items created in the
  last minute may not appear yet").
- **Errors**: search service down — say it, and offer navigation.

## Scope, permissions and privacy

- Results only include what the person can access; do not reveal titles of restricted items.
- Make the scope visible (this workspace, all workspaces, this folder).
- Search history is personal data: let people clear it, and do not show it to others on shared devices.
- Sensitive queries (health, finance) should not be echoed in visible places like notifications.

## Keyboard shortcuts

- **"?" opens the list of shortcuts**, grouped by task.
- **Single-key shortcuts** only when no field has focus; never override browser or system shortcuts; allow turning them
  off or remapping (WCAG 2.1.4, A).
- **Show the shortcut** in the tooltip and menu of each action.
- **One shortcut means the same thing** everywhere in the product.
- **Keyboard layouts differ**: shortcuts based on characters like "/" or "[" move on non-US layouts; prefer letters with
  modifiers, and test on common layouts (QWERTZ, AZERTY, Nordic, Spanish).

## Edge cases

- Queries with accents, different scripts, transliteration (searching "Muller" should find "Müller").
- Very short queries (one letter) and very long ones.
- Identical names (two customers called "María García"): show disambiguating details.
- Results changing while the person navigates with arrows (do not move the highlight unexpectedly).

## Accessibility specifics

- The palette is a dialog with a combobox pattern: the input keeps focus, the active option is conveyed with
  `aria-activedescendant`, and options have roles and names.
- Result counts are announced politely ("12 results").
- Escape closes and returns focus to where it was.
- Highlighting is not the only indicator of the match.

## Copy

- Placeholder text says what can be searched or done; it is not the only label.
- Action names start with the outcome ("Create invoice", "Go to settings").
- In other languages, synonyms and stemming must work in that language; include localized synonyms.

## Common mistakes and why they happen

- **Preselected destructive actions** — the palette treats all items alike.
- **AI answers first** for queries that match a known item — trend over task.
- **Only titles indexed** — people search by numbers and emails.
- **No-results dead ends.**
- **Shortcuts that break on non-US keyboards.**

## Worked comparison

**Query:** an operations manager types "lisboa" in the palette.

**Weak.** The first result, preselected, is "Ask AI: lisboa"; then "Delete workspace Lisboa" (from actions); then the
customer. Enter sends a vague AI query.

**Strong.** Grouped results: Customers — "Lisboa Coffee · 14 open invoices" (preselected); Invoices — "2041 · Lisboa
Coffee · due 15 Oct"; Pages — "Lisboa warehouse"; at the end, "Ask the assistant about 'lisboa'". Destructive actions
only appear when the query starts with an action verb, in their own group, and require confirmation.

## How to verify and measure

- **Relevance tests** with top real queries.
- **Measure** click position of chosen results, search refinements, zero-result rate, and search-then-navigate
  behavior (a sign search failed).
- **Test** with keyboard only and screen reader; on several keyboard layouts.

## References

- Magnific — [grouped palette](https://mobbin.com/screens/e22e26e2-f813-4f1e-beda-43c9ecf26419)
- Mistral — [grouped palette](https://mobbin.com/screens/8450c1c7-7c10-40a3-9af3-c9c234ac4b53)
- Devin — [grouped palette](https://mobbin.com/screens/274435b9-f420-4a7c-ab68-82514c1419f9)
- Supabase — [grouped palette](https://mobbin.com/screens/9b4725f5-e038-4fc7-98ad-64a59f74b4d7)
- StackAI — [keys footer](https://mobbin.com/screens/bbcc94bb-f535-4dca-8532-56b135fce5c3)
- Vapi — [keys footer](https://mobbin.com/screens/593d7acd-2e16-4365-bcd6-02ce52f48f3b)
- Monzo — [mobile search before typing](https://mobbin.com/screens/2f456ff2-f46a-44fa-a7c2-8c247ed51867)
- foodpanda — [mobile search before typing](https://mobbin.com/screens/eed3c76a-e5a1-4e9e-8267-ad10fb5a5bd6)
- Fresha — [mobile search before typing](https://mobbin.com/screens/86a0b800-40fe-4cbe-a1b6-1355f84bd38d)
- Jobber — [scope chips](https://mobbin.com/screens/ca646634-c05a-4c02-a02c-24495ab96393)
- CVS — [suggestions with derived filters](https://mobbin.com/screens/a058dde7-9feb-4329-bff8-938e24716f82)
- Mesh — [operators as chips](https://mobbin.com/screens/fa6a9c31-104e-4c56-ac36-e84143548f9e)
- Uxcel — [no results with suggestions](https://mobbin.com/screens/e7ae3281-0fdc-4936-98e2-16ccb49d2df9)
