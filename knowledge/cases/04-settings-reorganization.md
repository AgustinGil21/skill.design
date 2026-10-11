# Case: reorganizing a settings area nobody can navigate

## Context and evidence status

**Fictional case.** Shiftboard, its configuration, research observations, quantities and messages are invented
for teaching. Evidence is supplied as a scenario, not as actual customer research or a measured redesign result.
Testing and rollout below are proposed work; they should not be read as completed verification.

Shiftboard schedules work for restaurant and retail teams. Its fictional settings area has grown to 46 pages
in one alphabetical list, mixing personal preferences, location rules, company policies, billing and integrations.
The product supports eight languages, and existing links arrive from help articles, emails and partner tools.

Location managers configure their own site. Company administrators set policies across sites.
Owners manage billing. Employees usually change personal notification and language preferences.
One person may hold several roles, so hiding everything outside a single persona would be too simple.

The task is not merely finding a setting. It is finding the correct setting **at the intended scope**,
understanding inherited values and applying a change without surprising other locations.
The cost of an error can include incorrect schedules, pay-related confusion and avoidable administrative repair.

## Reframing the request

The fictional request is: "Settings is a mess. Give it a better sidebar."
Visual hierarchy may help, but the structural problem is that topic and authority are mixed.
A person can successfully locate "Overtime rules" and still edit the wrong scope.

The design question is: **How can people predict where a setting lives and who a change will affect?**
This introduces two success criteria that should be tested separately:

- Findability: locating the relevant setting from the person's own description of the task.
- Scope comprehension: understanding whose configuration is viewed and whose behavior a save will change.

A search box can improve the first while making the second worse if results omit scope.
A scope-first sidebar can improve the second while making unfamiliar topics harder to locate.
Senior reasoning needs to resolve that tension rather than treating one navigation scheme as universally correct.

## Evidence and confidence

| Fictional evidence | Interpretation | Limit |
| --- | --- | --- |
| Queries include overtime and payroll | People begin with topics | Search may mask poor navigation |
| Support describes unintended global edits | Scope is misunderstood | Permissions may also be too broad |
| Tree tasks show trouble with local rules | Test the structure | Tree tasks omit visual scope cues |
| Managers speak about their store | Local context may be a useful entry point | Multi-site managers need comparison |
| Employees mainly mention notifications | Personal settings deserve a direct route | Rare security tasks still matter |

A real evidence review should retain the exact task, role, starting page and destination for each failure.
"Could not find overtime" differs from "found company overtime while trying to edit a location."
Code those outcomes separately; a broad failure bucket conceals the design decision.

Search logs are not a complete vocabulary study. Queries may contain spelling mistakes, private names or
terms copied from help articles. Review them with privacy controls and validate useful synonyms with people.
Interviews can suggest groupings, but observed tasks test whether those groupings support action.

Inspect the data model and authority rules before reorganizing labels.
If inheritance differs from the apparent hierarchy, the interface must explain the real rule or the model must change.
Navigation cannot safely promise a local override the service does not support.

## Questions before choosing a structure

- Which settings are personal, local or company-wide, and which support overrides?
- Can a person view a company rule without changing it, or must it remain undisclosed?
- Do managers switch sites frequently or work almost entirely within one location?
- Are settings applied immediately, scheduled for later or dependent on publishing a schedule?
- Which changes affect pay, security or integrations and therefore need explicit review?
- Do saved links identify a location, or depend on whatever location is currently selected?
- Can a company acquire another site without changing its configuration model?
- Which existing names are familiar even if the current grouping is poor?

These questions establish the difference between information architecture and authorization.
A visible navigation item is not permission to edit, and hiding it is not access control.
The service must check authority when loading and saving each configuration.

## Alternatives and rejected options

| Situation | Option | Why consider it | Cost or limitation |
| --- | --- | --- | --- |
| Structure works, hierarchy is weak | Restyle the existing list | Low migration cost | Does not solve mixed scope |
| Tasks begin with a topic | Topic-first navigation | Matches task vocabulary | Can mix authority levels |
| Scope errors dominate | Scope-first navigation | Makes reach visible early | Adds a decision before finding a topic |
| Both problems matter | Scope, then topics; global search | Context and retrieval | Needs cross-links |
| Experts know exact names | Search-led settings | Efficient access | Weak for discovery and inheritance |
| Small simple product | One grouped page | Avoids unnecessary hierarchy | Becomes difficult as configuration grows |

**Recommendation: scope first, topic second, with cross-scope search and explicit inheritance.**
This responds to the fictional cost of wrong-scope edits while retaining topic-based retrieval.
The choice accepts some duplication of topic names and requires careful migration of deep links.

A cosmetic refresh is rejected because the evidence concerns meaning, not just visual scanning.
Topic-only grouping is rejected as the main structure because a familiar topic can still point to an unsafe scope.
Search-only navigation is rejected because occasional users may not know the setting's name or its dependencies.
These options remain valid when a different product has little scope variation or strongly established expert use.

An alphabetical index can remain a secondary view for experienced administrators if its maintenance is inexpensive.
It should not be used to avoid making the underlying scope explicit.
A compact interface is not inherently less usable than a spacious one; density should support scanning real labels.

## Decision and anatomy

Top-level entries distinguish My account, the current location, Company and permitted billing access.
Within each scope, topics use terms supported by product vocabulary and task evidence.
The heading repeats context, such as the fictional "Overtime rules — Downtown store."
A persistent heading is more reliable than expecting the person to remember a sidebar choice made earlier.

The location switcher changes context deliberately and announces the destination.
For an unsaved policy, switching first offers a choice to remain, discard or save if that is safe.
Do not silently apply a draft to the newly selected location.
Direct links encode an explicit scope so opening an old email does not depend on stale local interface state.

An inherited setting says "Uses company default" and exposes the current effective value.
A local override says it is local and explains what resetting to the company default will do.
At company level, show which locations inherit and which override when that information matters to the change.
A count alone may be enough for a simple rule; consequential changes may need a reviewable list.

Before saving a company policy, summarize the affected scope and important exceptions.
Avoid a misleading statement that every location changes when some have overrides.
Impact calculation is based on current service data, with a recheck if membership or permissions change before save.

Personal preferences may save immediately when changes are reversible and independent.
Policies affecting other people use explicit save and a summary of consequential changes.
This is a risk-based choice, not a rule that every setting needs a Save button.
When interdependent settings must validate together, one grouped save can be clearer than several local saves.

## Search and migration

Search returns the topic, scope, location where applicable and a short distinguishing explanation.
A query such as "notifications" may return personal delivery preferences and company scheduling notifications.
The results should make the difference understandable before someone enters a form.

Synonyms include established old labels and validated market vocabulary.
Do not translate an English abbreviation mechanically into every language; local payroll terms may differ.
Search should tolerate relevant accents, alternate spellings and scripts where the supported market needs them.
No-results copy offers a next step without exposing settings that the person is not allowed to discover.

Old links redirect to the corresponding scope and setting where that mapping is unambiguous.
If a link lacks enough context, ask the person to choose a permitted scope rather than guessing from their last visit.
Preserve meaningful anchors or explain what moved, and test links from emails and partner tools as well as navigation.

For a single-location company, visual simplification can reduce navigation burden.
Keep company and location scope distinguishable when inheritance or future expansion still matters.
Merging the presentation must not silently merge the underlying configuration or change authority.

## States and transitions

| State | Information shown | Next action or transition |
| --- | --- | --- |
| Loading scope | Destination name and loading status | Wait without displaying another site's stale values |
| Empty location | No local customization; effective defaults | Review or create an allowed override |
| Inherited | Company source and effective value | View source or customize if permitted |
| Local override | Local value and difference from default | Edit or review reset consequence |
| Dirty form | Unsaved changes identified | Save, discard or remain |
| Saving | Pending operation and fixed scope | Wait; avoid duplicate submission |
| Saved | Confirmed effective scope and timing | Continue or inspect audit detail |
| Validation failure | Specific errors and retained draft | Correct affected inputs |
| Concurrent edit | Changed server value beside the draft | Review and reconcile |
| Permission lost | Edit unavailable; authority explanation | Return safely or contact an administrator |
| Offline | Last known values marked; save unavailable | Reconnect and revalidate |
| Unknown save outcome | Confirmation not received | Check stored version before retrying |
| Partial deployment | Setting saved but some sites pending | Inspect affected sites and operational status |
| No search results | Query and permissible suggestions | Revise query or browse topics |

A policy may be stored successfully before downstream systems apply it.
If that distinction exists, the confirmation must separate "saved" from "effective everywhere."
A green toast is insufficient evidence that payroll or scheduling has adopted a new rule.

## Conflicts, audit and unusual cases

When two administrators edit the same policy, retain the second person's draft and identify changed fields.
Automatic merging can be reasonable for independent preferences, but a pay-related policy needs review when
interacting values could produce an unintended result.
Do not make someone compare entire raw configuration objects if a field-level explanation is possible.

An audit record includes actor, scope, effective timing and meaningful before/after values.
Restrict sensitive values and access according to the product's policy; an audit trail is not permission to expose
secrets.
A location renamed during editing should retain stable identity even while its display name updates.

If an inherited company value changes while a location form is open, refresh the displayed default or show a notice.
"Reset to default" must refer to a known current default, not an old value cached when the form opened.
Testing this case reveals whether the design treats inheritance as live behavior or merely a decorative badge.

## Copy by moment and localization

| Moment | Function | Fictional English example |
| --- | --- | --- |
| Navigation | Name a recognizable object | "Overtime rules" |
| Heading | Identify task and scope | "Overtime rules — Downtown store" |
| Inheritance | Identify source | "Uses company default" |
| Override | Explain local difference | "Custom rule for this location" |
| Impact | Name actual affected scope | "Applies to locations using the company default" |
| Reset | Explain the resulting value | "Replace this rule with the current company default?" |
| Conflict | Preserve agency and explain cause | "This rule changed while you were editing. Review both versions." |
| Permission | State authority without blame | "Only company administrators can change this rule." |

Labels name settings in the audience's vocabulary rather than exposing internal configuration names.
The functional rule transfers across languages; English noun phrases and sentence case are not mandatory elsewhere.
Keep action labels and confirmation copy consistent about whether a change saves, publishes or schedules a policy.

The customer's preferred term may be store, restaurant, branch or site.
Terminology customization needs grammatical forms or whole-message variants, not raw string substitution everywhere.
A substituted noun can change gender, case or agreement in a translated sentence.

Test long site names, identical names in different regions and mixed-script company names.
Use enough secondary context to distinguish duplicates without exposing unnecessary personal information.
Alphabetical sorting follows locale expectations, and search does not assume all scripts use spaces between words.
Right-to-left layout should preserve the logical distinction between scope navigation and configuration content.

## Accessibility: requirements and recommendations

Relevant WCAG 2.2 requirements include:

- **1.3.1 Info and Relationships, A:** headings, groups, labels and inherited-value relationships are programmatic.
- **2.1.1 Keyboard, A:** navigation, scope selection, search and conflict review work without a pointer.
- **2.4.3 Focus Order, A:** scope transitions and error recovery preserve a meaningful reading and interaction order.
- **3.2.2 On Input, A:** a control changing context needs appropriate advance information unless expected by design.
- **3.3.1 Error Identification, A:** save errors identify the affected inputs in text.
- **4.1.3 Status Messages, AA:** save and scope-update messages are programmatically available.

A labeled navigation landmark and `aria-current="page"` are recommended implementation patterns.
A native select may suit a short location list; a tested combobox may suit many searchable locations.
Use a menu only when its interaction semantics fit the available actions rather than choosing it for appearance.

After a full scope navigation, placing focus on the new page heading can make the change understandable.
After an inline update, a concise announcement may preserve the current task better than moving focus.
Test the chosen behavior with actual assistive technology rather than treating either pattern as universal.
Impact text belongs in the ordinary reading flow near the decision, not solely in a hover tooltip.

## Worked comparison: changing a local overtime rule

**Weak version.** A manager searches "overtime" and opens the only result, labeled "Overtime configuration."
The form has no scope heading, inherited-state explanation or impact summary.
Save succeeds, changing the company policy when the manager intended one store.
The task appears successful in click analytics because the correct topic was found quickly.

**Stronger version.** Search results distinguish company policy from the current store's rule.
The local page identifies the store and its inherited value before offering a local override.
The save review names that store and confirms the effective rule.
The company page remains accessible where permitted, with its broader scope clear.

The stronger version takes more explanation and sometimes an extra choice.
It improves the correctness of the change, which matters more here than minimizing navigation depth.
If real testing showed scope choices confusing low-risk personal tasks, those tasks could keep direct entry points.

## Proposed test and rollout protocol

Use open sorting to collect vocabulary, then a tree test to compare plausible structures on the same tasks.
Sorting reveals associations; it does not by itself prove navigation success.
Include location managers, multi-site administrators, owners and employees instead of averaging unlike roles.

1. Ask participants to find a personal notification setting and a company policy.
2. Ask for a location-only change without telling them which scope label to use.
3. Ask them to predict who will be affected before saving.
4. Introduce an override reset, an unsaved scope switch and a concurrent edit.
5. Open a migrated deep link and a search result from an old label.
6. Repeat critical tasks in supported languages and with non-pointer input.

Record destination correctness, predicted scope, assistance, backtracking and confidence separately.
Tree-test success is followed by realistic form testing because scope cues and save behavior are absent from a tree.
Use a staged rollout with an explicit rollback plan, checking configuration correctness before expanding access.
If old and new navigation coexist briefly, both must lead to the same authoritative settings and permission rules.

## Metrics, guardrails and limits

Primary outcome: confirmed wrong-scope changes relative to consequential setting changes.
Support cases provide examples but can miss unnoticed errors; audit reversals and correction reasons add context.
Secondary measures include successful first destination, query reformulation and time to make a correct change.
A fall in search use is not inherently success if people simply abandon configuration.

Guardrails include broken deep links, accidental loss of drafts, permission exposure, failed saves and support burden.
Segment by role, location count, language and setting risk so faster personal preferences do not mask policy errors.
Track rollout cohort and product changes; an uncontrolled before/after comparison does not establish causality.
No numerical gain is claimed for this fictional proposal.

Reconsider scope-first navigation if topic tasks dominate and explicit scope within each result solves errors more
simply.
Reconsider inheritance presentation if companies mostly need policy comparison across many locations.
If authority is too broad, correcting permissions may matter more than reorganizing labels.
A sidebar redesign cannot repair an unsafe configuration model by itself.

## Review checklist

- [ ] Findability and scope comprehension have separate success measures.
- [ ] Inheritance, overrides and effective timing reflect the service model.
- [ ] Search results and deep links identify an explicit permitted scope.
- [ ] Unsaved, concurrent, offline and uncertain-save states preserve useful context.
- [ ] Single-location simplification does not erase real scope distinctions.
- [ ] Local terminology, grammatical variation and duplicate names have been tested.
- [ ] Keyboard and screen reader checks cover scope changes and conflict resolution.
- [ ] Rollout monitors correctness, migration and authority rather than navigation speed alone.

## Knowledge applied

[Information architecture](../22-information-architecture.md) ·
[navigation and settings](../patterns/navigation-and-settings.md) ·
[redesigns and migrations](../29-redesigns-and-migrations.md) ·
[permissions, identity and scope](../patterns/permissions-identity-and-scope.md) ·
[research and testing](../16-research-and-testing.md).
