# Profiles

A profile represents a person (or an organization, or an AI character) to others and to themselves. It answers
different questions depending on who is looking: "Who is this?", "Can I trust them?", "What have they done?", and, for
the owner, "How do I appear?". Every piece of data on a profile has an audience, and getting that wrong exposes people.

See also [profile, brand kit and version history](profile-brand-kit-and-version-history.md) for editing identity data
and [privacy and data controls](privacy-and-data-controls.md).

## The problem and who has it

- **Profile owners** who want to present themselves accurately and control visibility.
- **Visitors** deciding whether to follow, hire, buy from, trust or contact someone.
- **People at risk** whose location, schedule or identity must not be exposed.

## Questions to ask before deciding

- **Who views profiles**: the public, members, connections, the team?
- **For which decision**: following, hiring, buying, meeting?
- **Which data is shown to whom**, and who decides?
- **Is the identity verified**, and does that matter here?
- **Are there organizational fields** the person cannot edit (job title from HR)?

## Data by audience

| Data | Typical audience | Owner control |
| --- | --- | --- |
| Display name, photo | Everyone the product shows them to | Editable |
| Username | Public | Editable, with impact on links |
| Bio | Public or members | Editable |
| Location | Often sensitive | Optional, precision chosen (city, not address) |
| Activity, statistics | Followers or public | Visibility controls |
| Contact details | Connections or private | Opt-in |
| Job title, team | Organization | Managed by admins or HR |

## Anatomy and behavior

- **At the top**: photo, name, username, a one-line description, and the main action depending on who is looking (own:
  "Edit profile" / "Share"; someone else's: "Follow" / "Message";
  [Character AI](https://mobbin.com/screens/44410091-3f28-41fb-a7bd-89355c793c3b),
  [Beli](https://mobbin.com/screens/fa5ae271-1fb8-4e3e-b3e7-929b58eb444b)).
- **Figures** (followers, activity) as number + label pairs, tappable.
- **A summary with value** before the content ("2026 stats: 2 activities · 1 mile",
  [AllTrails](https://mobbin.com/screens/6a255b50-4f4e-4904-8937-f129dade1f61); tappable cards,
  [komoot](https://mobbin.com/screens/a93ef0fb-2385-432c-9205-682ec544f0a6)).
- **Tabs for the person's content** (Posts, Photos, Reviews, Activity).
- **Explicit privacy**: what only some audiences see says so ("Followers only"); public items marked as such
  ([Hypelist](https://mobbin.com/screens/70c0caa3-220d-453a-8fb2-093c88304d09)).
- **Editing the photo** with a pencil on the avatar; settings and share in the top end corner.
- **"View as"**: let owners preview their profile as the public or as a connection.

## Names and identity across cultures

- Display names in any script, with the person's preferred form and order (see
  [content and localization](../24-content-and-localization.md)).
- Pronouns as an optional field, displayed only where the person chooses.
- Avoid forcing "real names" where pseudonyms protect people, unless the context requires verified identity.

## Edge cases

- Very long names and bios; empty profiles (new users).
- Deceased users and memorialized profiles.
- Profiles of blocked people (what remains visible).
- Organization-managed fields out of date.

## Accessibility specifics

- Profile photo with alternative text (the name, or a description the person writes).
- Statistics readable as text.
- Tabs following the tabs pattern.

## Copy

- Visibility labels plain ("Only you", "Your team", "Everyone").
- Empty states that invite completion without pressure.

## Common mistakes and why they happen

- **Location shown publicly by default.**
- **No preview as others see it.**
- **Fields with unclear audiences.**
- **Real-name policies that endanger people.**

## Worked comparison

**Weak.** A running app shows each profile's routes with exact start points (often home) to everyone by default.

**Strong.** Routes are visible to followers by default; start and end points are hidden within a privacy zone the
person sets; the owner can preview the profile as a stranger.

## How to verify and measure

- **Test** "view as" with real profiles; check every field's audience.
- **Measure** privacy setting changes, reports of exposure, profile completion.

## References

- Character AI — [own vs. others' actions](https://mobbin.com/screens/44410091-3f28-41fb-a7bd-89355c793c3b)
- Beli — [profile header](https://mobbin.com/screens/fa5ae271-1fb8-4e3e-b3e7-929b58eb444b)
- AllTrails — [summary with value](https://mobbin.com/screens/6a255b50-4f4e-4904-8937-f129dade1f61)
- komoot — [tappable summary cards](https://mobbin.com/screens/a93ef0fb-2385-432c-9205-682ec544f0a6)
- Hypelist — [explicit privacy](https://mobbin.com/screens/70c0caa3-220d-453a-8fb2-093c88304d09)
