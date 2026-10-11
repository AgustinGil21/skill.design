# Case: reorganizing a settings area nobody can navigate

## Context

**Product (fictional):** Shiftboard, workforce scheduling software for restaurants and retail. Over five years, its
settings area grew to 46 pages in a single alphabetical list, mixing personal preferences, location settings,
company-wide policies, billing and integrations.

**People:** location managers (configure their store), company admins (policies across locations), owners (billing),
and every employee (personal notifications, language).

## The problem as first stated

"Settings is a mess. Redesign it with a nicer sidebar."

### Reframing

A nicer sidebar does not fix the structure. The problem: **people cannot predict where a setting lives, and settings
apply at different scopes (me, this location, the whole company) without saying so** — which leads to changes with
unexpected reach.

## Evidence

| Type | Finding |
| --- | --- |
| **Known** (search logs) | Settings search is used heavily; frequent queries: "notifications", "overtime", "time off", "payroll export" |
| **Known** (support) | Tickets about "changed overtime rule for one store, it changed for all" |
| **Known** (tree test, 30 participants, current structure) | Low success finding "break rules for a single location" |
| **Believed** (interviews) | Managers think in terms of "my store"; admins in terms of "policies" |
| **Guessed** | Most employees never open settings except for notifications |

## Constraints

- Settings have real scopes in the data model: user, location, company. Some company settings can be overridden per
  location.
- Deep links to settings pages exist in help articles, emails and integrations.
- The redesign must ship incrementally; old URLs must redirect.
- The product is used in eight languages.

## Alternatives

| Option | Strengths | Weaknesses |
| --- | --- | --- |
| **A. Same list, better visual design** | Cheap | Does not fix findability or scope |
| **B. Group by topic** (Scheduling, Time off, Pay, Notifications…) | Matches some mental models | Hides scope; the same topic mixes personal and company settings |
| **C. Group by scope** (My account · Location · Company · Billing) | Makes reach explicit | People search by topic, not scope |
| **D. Scope first, topic second, + search, + override indicators** | Reach is explicit and topics are findable within each scope | Some topics appear in two scopes (needs cross-links) |

## Decision

**D**, validated with tree tests and card sorting before visual design:

- **Top level by scope**: My account · [Location name] (with a location switcher) · Company · Billing (owners only).
  The current scope is always in the page heading ("Overtime rules — Downtown store").
- **Second level by topic** within each scope.
- **Overrides made visible**: a company setting overridden at a location shows "Overridden at 3 locations"; at the
  location, "Uses company default" or "Custom for this store — Reset to company default".
- **Impact before saving** for company settings: "This applies to 12 locations and 340 employees".
- **Search across all scopes** with the scope shown in each result, and synonyms from search logs ("OT" → overtime).
- **Redirects** from all old URLs; help articles updated.

**Given up:** the familiarity of the old list (mitigated by search and a "What moved" guide).

## States and edge cases

- **Permissions**: managers do not see Company settings they cannot change; if they can view but not edit, read-only
  with "Only company admins can change this".
- **Single-location companies**: the location level merges into Company to avoid an empty level.
- **Unsaved changes**: warning on leaving; explicit save for policies (not autosave) because changes affect pay.
- **Conflicts**: two admins editing the same policy — the second save shows what changed and asks to review.
- **Audit**: every company and location change logged with who, when, before and after.

## Copy (by function)

- Labels name objects people know ("Overtime rules", not "Labor compliance configuration").
- Scope stated in headings and in impact messages.
- Old names kept as search synonyms for a transition period.
- In translation, scope words (location, store, site) follow each market's vocabulary; the term is a variable chosen
  per customer ("store", "restaurant", "branch").

## Accessibility

- Navigation as a labeled `nav` with the current page indicated (`aria-current="page"`).
- The location switcher is a proper listbox or menu with keyboard support; changing location announces the new scope.
- Impact messages are text near the save button, not only a tooltip.

## Testing and measurement

- **Card sorting** (open, 15 participants) to collect topic names; **tree tests** (30 participants each) comparing B
  and D: D improved success on scope-sensitive tasks without hurting topic tasks.
- **Rollout**: beta toggle for admins for four weeks, with a feedback link; then default with the old structure
  reachable for two weeks.
- **Metrics**: "changed for all" tickets (primary), settings search refinements (people searching twice), time to
  complete common setting changes; guardrail: support contacts about "can't find".

## Result and limits

Scope-related tickets dropped and search refinements fell (fictional). Some admins still preferred the alphabetical
list for rare settings; search covers them. Topics that span scopes (notifications) remain the hardest; cross-links
help but are not perfect.

## Knowledge applied

[Information architecture](../22-information-architecture.md) ·
[navigation and settings](../patterns/navigation-and-settings.md) ·
[redesigns and migrations](../29-redesigns-and-migrations.md) ·
[permissions, identity and scope](../patterns/permissions-identity-and-scope.md) ·
[research and testing](../16-research-and-testing.md).
