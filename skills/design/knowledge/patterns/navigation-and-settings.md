# Navigation and settings

Navigation lets people move between the places of a product and always know where they are. Settings let them shape
how the product behaves. Both are expressions of the information architecture: when the structure underneath is
wrong, no sidebar design fixes it. Read [information architecture](../22-information-architecture.md) first for
objects, vocabulary and organizing schemes.

## The problem and who has it

- **Everyone navigates**: first-time people need to understand what exists; frequent people need to get to their daily
  places fast; experts need shortcuts.
- **Settings are visited rarely**, by fewer people (often administrators), usually with a specific goal ("turn off
  these emails", "add a teammate", "change the billing card").

When navigation fails, people cannot find features that exist, take long routes, lose their place, or rely on search
and support for everything. When settings fail, people cannot change what bothers them, or change the wrong thing.

## Questions to ask before deciding

- **What are the primary objects and tasks**, and how often is each used?
- **Who are the roles**, and do they need different navigation (a member vs. an administrator)?
- **How deep is the hierarchy**, and how many items will there be in a year?
- **Is the product used on mobile, desktop, or both?**
- **Which settings change behavior for one person, and which for the whole organization?**
- **Which settings depend on each other** and must be validated together?
- **Which settings are risky** (security, billing, deleting data)?

## Alternatives and how to choose

### Global navigation

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Work tool with many areas and frequent switching | **Sidebar** | Room for many items, groups, counters; stays visible | Takes horizontal space |
| Few top-level areas, content-focused | **Top bar** | Leaves width for content | Limited items; overflows in other languages |
| Mobile app with 3–5 primary destinations | **Bottom tab bar** | Thumb-reachable, always visible | Few slots; see [mobile](mobile.md) |
| Very large sites (documentation, stores) | **Mega menu or hub pages** | Shows breadth | Heavy to maintain and to use with keyboard |
| Expert, keyboard-heavy users | **Command palette** in addition | Fast for known destinations | Undiscoverable as the only path; see [search and command palette](search-and-command-palette.md) |

### Local navigation inside an object

| Content | Option |
| --- | --- |
| Facets of one object (Overview, Activity, Settings) | **Tabs**, with the active tab in the URL |
| Subsets of one list (All, Open, Closed) | **Filters or saved views**, not tabs to separate pages |
| A long page with sections | **In-page table of contents** or anchored headings |
| A deep hierarchy (folders, categories) | **Breadcrumbs** plus a tree or list |

### When to split a screen and when not

Split when parts answer different questions, have different actions, or are used by different people. Keep together
when the person needs the information at the same time to make one decision (see [principles](../00-principles.md)).
Splitting a task across screens has a real cost: lost context and more memory load.

## Anatomy and behavior

### Sidebar (web and desktop)

The order most work tools repeat:

1. **Top: workspace or project switcher** with a logo or initial; inside its menu: switch, create and configure the
   workspace ([Webflow](https://mobbin.com/screens/e6ef30e7-d8d2-450f-b039-1fd1ccc0bdd3)).
2. **Search** with its shortcut.
3. **Three to five daily destinations** without a group title (Home, Inbox, the main object, the assistant).
4. **Groups with short titles** for what defines the workspace and for shared items.
5. **Bottom**: help, invite, onboarding or plan progress, settings and account.

- **The active item** is marked by background and weight, not only color, and exposed with `aria-current="page"`.
- **Counters and status** at the end of the item (a number to review, an activity dot), with accessible text.
- **Collapsible to icons** with tooltips; the preference is remembered. When collapsed, icons need accessible names.
- **Keep the visible list scannable**: when it grows beyond what people can scan comfortably, group, move rare items
  into "More" or settings, or rethink the structure. There is no magic number; the test is whether people predict
  where things are.
- **Settings, billing and members do not compete with daily work**: they go at the bottom or in their own section.

### Top bar and breadcrumbs

- **Breadcrumbs** when the hierarchy has more than two levels; the last level is not a link and is marked as current.
- **Page title with its actions** at the end (primary solid, secondary outlined, the rest in "⋯").
- **Tabs** for sibling views of the same object (Overview / Activity / Settings), with the active tab in the URL.

### Deep links, routes and permissions

- **Every meaningful place has a URL** that can be bookmarked and shared, including tabs, filters and selected items
  when useful.
- **Opening a link without permission** shows what it is and who can grant access, not a generic 404.
- **Opening a link to something deleted or moved** explains what happened and offers the closest useful place.
- **Back behaves as expected**: browser back returns to the previous view, including filters and scroll position.

## Settings

### Structure

- **Its own page with grouped sub-navigation**: "Your account" (profile, notifications, security) / "Workspace"
  (general, members, integrations, billing) / "Other"
  ([Slite](https://mobbin.com/screens/0f790cac-d25a-47b5-a2ad-16e544eddbe6),
  [Dovetail](https://mobbin.com/screens/899aba45-de7d-4564-8f03-8dd4fb82098f),
  [Unify](https://mobbin.com/screens/29fc6dd6-e213-47e8-b484-f0b74cbe8eef)).
- **Separate personal from organization settings** clearly; say who is affected by each change ("Applies to everyone
  in Lisboa Coffee").
- **"← Back to the app"** at the top of the sub-navigation when settings replace the main sidebar.
- **Searchable settings** when there are many.

### Settings rows and sections

- **Rows**: a title plus the current value or a description on one side, the action on the other ("Change password",
  "Manage subscription"; [ElevenLabs](https://mobbin.com/screens/a5dede03-9f19-42f1-a596-99c1e6357769)). People can scan
  top to bottom without opening anything.
- **Sections in cards** with a title, one line about what it does, its status ("On"), and the section's button
  ([Base44](https://mobbin.com/screens/f51c9f4d-cbbb-40c2-ba83-860a0eb58fb5)).
- **Features from another plan**: visible, disabled, with the plan that includes them and "Upgrade" in the same card
  ([Render](https://mobbin.com/screens/f826ab4a-b578-464f-bff5-a935257fcdd1)) — not hidden, so people know they exist,
  but without nagging.
- **Danger zone at the end**, separated, with the destructive button and its consequence in one line
  ([Sketch](https://mobbin.com/screens/08bf4dc0-8a97-4a99-ad07-0d669ab9b36c)).
- **Simple account settings** can be a dialog with rows that open details
  ([Pitch](https://mobbin.com/screens/0e1c8c93-4926-4e37-a1e6-8381abd098ac)).

### Saving: immediate, per section or transactional

| Strategy | Use when | Design |
| --- | --- | --- |
| **Immediate** | Independent toggles and choices with low risk | Save on change, confirm subtly ("Saved"), offer undo |
| **Per section** | A group of related text fields | A Save button in the section; unsaved-changes indicator; warn before leaving |
| **Transactional (global save)** | Changes that depend on each other and must be validated together (a pricing configuration, a routing rule set) | A bar that appears with changes ("You have unsaved changes · Discard · Save"), validation of the whole set, a summary of what will change |

By default, prefer immediate or per-section saving: a global Save far from what was edited makes people forget to save
or unsure what was saved. A global save is the right choice when partial saves would leave the system in an invalid
or dangerous state.

## Connections and integrations

- **Cards per service** with logo, one line and status ("Connected" with text, or "Connect"); connected first,
  available below.
- **Connecting as a step-by-step flow**: choose method → do it → confirm what will be used and accessed.
- **Honest status**: connected, expired (reconnect), out of quota (still connected), error — each with its own action
  (see [real state and verification](../08-real-state-and-verification.md)).

## States and transitions

- Navigation items with counts must update when the person acts elsewhere.
- Settings show the current value immediately after saving and reflect changes made elsewhere (another admin).
- Loading settings shows the structure with placeholders; errors in one section do not block others.
- Permission changes take effect visibly: if a person loses access to an area while in it, explain and redirect.

## Edge cases

- Very long workspace names and item names; translations that double label length.
- Many workspaces (switcher needs search).
- People with access to only one area (navigation should not show empty sections).
- Right-to-left: the sidebar moves to the right; chevrons and breadcrumb separators mirror.

## Accessibility specifics

- Landmarks: `nav` with an accessible name for each navigation region ("Main", "Settings").
- `aria-current="page"` on the active item.
- Skip link to the main content (2.4.1).
- Consistent navigation order across pages (3.2.3) and consistent names (3.2.4).
- Collapsible sidebars and menus operable by keyboard; collapsed icon items keep their names.
- Multiple ways to find pages: navigation plus search (2.4.5).
- Settings toggles have labels, and their state is announced.

## Copy

- Navigation labels are short nouns in the people's vocabulary, parallel in form.
- Settings titles say what the setting controls; descriptions say the effect and who it affects.
- Destructive settings state the consequence plainly.
- Labels must fit the longest translation; avoid idioms.

## Common mistakes and why they happen

- **Navigation mirrors the org chart or the database.**
- **Everything top-level** — each new feature adds an item.
- **Filters dressed as separate pages.**
- **Hidden upgrade features** — or, the opposite, nagging upsells everywhere.
- **Global Save far from edits** — copied from older desktop software.
- **No URLs for states** — tabs and filters that cannot be shared or bookmarked.

## Worked comparison

**Same product:** a team tool with Home, Projects, Inbox, Reports, Templates, Members, Billing, Integrations, API keys,
Audit log and Settings.

**Weak navigation.** All eleven items in the sidebar in the order they were built; Billing and API keys between
Projects and Reports; no workspace switcher; settings scattered between the sidebar and a profile menu.

**Strong navigation.** Sidebar: workspace switcher, search, then Home, Inbox, Projects, Reports; a "Library" group
with Templates; bottom: Help, Invite, Settings. Settings page grouped into "Your account" (Profile, Notifications,
Security) and "Workspace" (General, Members, Billing, Integrations, API keys, Audit log), each with a description and
who it affects. Tree test result recorded before and after.

## How to verify and measure

- **Tree tests** and **first-click tests** on the structure.
- **Task tests**: "Change the card used for billing", "Find the report for last quarter".
- **Search logs**: frequent searches for items that exist in navigation reveal findability problems.
- **Support tickets** asking "where is…".

## References

- Webflow — [workspace switcher](https://mobbin.com/screens/e6ef30e7-d8d2-450f-b039-1fd1ccc0bdd3)
- Slite — [grouped settings](https://mobbin.com/screens/0f790cac-d25a-47b5-a2ad-16e544eddbe6)
- Dovetail — [grouped settings](https://mobbin.com/screens/899aba45-de7d-4564-8f03-8dd4fb82098f)
- Unify — [grouped settings](https://mobbin.com/screens/29fc6dd6-e213-47e8-b484-f0b74cbe8eef)
- ElevenLabs — [settings rows](https://mobbin.com/screens/a5dede03-9f19-42f1-a596-99c1e6357769)
- Base44 — [settings sections in cards](https://mobbin.com/screens/f51c9f4d-cbbb-40c2-ba83-860a0eb58fb5)
- Render — [features from another plan](https://mobbin.com/screens/f826ab4a-b578-464f-bff5-a935257fcdd1)
- Sketch — [danger zone](https://mobbin.com/screens/08bf4dc0-8a97-4a99-ad07-0d669ab9b36c)
- Pitch — [account settings dialog](https://mobbin.com/screens/0e1c8c93-4926-4e37-a1e6-8381abd098ac)
