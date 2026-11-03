# Feeds and social posting

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: EU regulatory action on addictive design.

Feeds (home timelines, community lists, activity streams, "for you" pages) and the composer that feeds them. A feed
is one of the most powerful patterns in software and one of the most criticized: it decides what people see, how long
they stay and how they feel when they leave. This pattern covers feed models, ending and pacing, autoplay, posting
with an explicit audience, reactions, time controls and the regulatory direction.

See also [product archetypes](../39-product-archetypes.md) (social and content), [messaging](messaging.md),
[profiles](profiles.md), [safety and moderation](safety-and-moderation.md), [notifications](notifications.md) and
[media players](media-players.md).

## The problem and who has it

- **People catching up** with people or topics they chose: they want to know when they are done.
- **People browsing** with no goal: they want something good, quickly, and to stop when they decide.
- **People posting**: they want to know who will see it and to undo mistakes.
- **Communities and teams**: an activity feed in a work tool has the same mechanics with different stakes.

When done badly: compulsive use, regret, anxiety from comparison, posts seen by the wrong audience, and — for large
platforms — regulatory action.

## Questions to ask before deciding

- **Does the product need a feed at all?** Many tools add one as a home page because social products have one.
- **Is the content chosen by the person (following) or by the system (recommended)?** Can people choose?
- **Is there a natural end?** Catching up has one; browsing does not.
- **Who is the audience of a post**, and can it change after posting?
- **Who uses it?** Minors and vulnerable people change every default.
- **What does success mean**: time spent, or people finding what they came for and leaving satisfied?

## Alternatives and how to choose

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| People follow a manageable number of sources | **Chronological "Following" feed with an end** ("You're up to date") | Predictable, finite | Less engagement; busy accounts dominate |
| Large, noisy graphs | **Ranked feed** with a visible switch to chronological | Relevance with control | Ranking must be explainable |
| Discovery of new content | **Recommended feed** as a separate tab, not the default home | Choice is explicit | Lower discovery |
| Work tools | **Activity feed filtered by relevance** (assigned, mentioned, following) with read state | Signal over volume | Needs good filters |
| Communities by topic | **Lists by community** with sort (new, top, trending) | Clear context | People must choose |
| Short-form video | Full-screen vertical feed with **autoplay off by default**, or on with clear control, and time controls | The format depends on video | Lower watch time |

## Infinite scroll, pagination and ends

- **Infinite scroll** suits open-ended browsing on mobile; it is harmful as the only option and when combined with
  autoplay and no end.
- **A natural end**: "You're up to date" after new items, then an explicit choice to see older or recommended
  content. The end of a feed is a forgotten moment worth a small detail from the product's world
  ([human design](../13-human-design.md)).
- **"Load more"** keeps the footer reachable and gives a moment of choice; useful on the web.
- **Position memory**: coming back from a post returns to the same place; new items arrive as "12 new posts" at the
  top, not by jumping the list.
- **Regulatory direction**: in February 2026 the European Commission preliminarily found TikTok's infinite scroll,
  autoplay, push notifications and recommender design in breach of the Digital Services Act, and pointed to disabling
  infinite scroll over time and effective screen-time breaks as remedies
  ([European Commission](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act)).
  An EU Digital Fairness Act addressing addictive design and dark patterns is expected to be proposed. Design feeds
  as if these expectations apply, especially for minors.

## Autoplay

- Off by default for video with sound; muted autoplay only with a clear control and a setting.
- Respect reduced motion and data-saver settings.
- Never autoplay the next video after the end without a visible countdown that can be cancelled — and consider not
  doing it at all.

## Posting: the composer

1. **Audience first.** The audience selector sits above or next to the text: "Everyone", a community, friends, a
   school ([X](https://mobbin.com/flows/99a52f6e-d598-4720-bfc7-4fdcb64d4d0a),
   [Digg](https://mobbin.com/flows/51e2230c-a562-4fea-910d-34bb7f3e7369),
   [Runna](https://mobbin.com/flows/2d97de76-1809-444d-be9b-fc4f02fe0505),
   [Handshake](https://mobbin.com/flows/5c80547c-d194-4d5d-bddc-ee7dc9205467)). Who can reply is stated
   ("Everyone can reply"). Posting to a community shows its rules (X).
2. **Defaults are safe**: the narrowest reasonable audience for new accounts and minors; never change it silently.
3. **Drafts saved automatically**; "Drafts" reachable from the composer (X).
4. **The post button names the action** ("Post") and is disabled until there is content; posting shows progress for
   media and a confirmation in place ("Posted" toast with the new post visible;
   [Handshake](https://mobbin.com/flows/5c80547c-d194-4d5d-bddc-ee7dc9205467)).
5. **Edit and delete** with clear effects: edits marked, delete confirmed or undoable, and what happens to replies.
6. **Media**: alt text field available, ideally prompted; previews of crops.

## Reactions, counts and comparison

- One-tap reactions are fine; make the state obvious (liked, saved).
- **Public counts** (likes, followers) drive comparison; consider hiding them or making them optional, especially for
  young people.
- **Reporting and blocking** from every post and profile, in at most two taps to start
  ([safety and moderation](safety-and-moderation.md)).
- **Muting topics and people in place** with an undoable confirmation ("You muted Book Lovers";
  [Fable](https://mobbin.com/screens/1163393d-c735-447b-8132-160724efd6ed)).

## Time and attention controls

- **Show time spent** and let people set reminders and limits
  ([Whatnot](https://mobbin.com/screens/d40efedd-3b9b-4193-99f5-11b30b8ca9f3)).
- **Quiet hours** for notifications, on by default at night for minors.
- **Breaks** that respect the person: a calm prompt after a set time, easy to continue or stop, never guilt.
- Notifications about people who matter, not about "suggested posts".

## States and edge cases

- Empty feed for a new account: suggest who or what to follow, with a way to skip; never fill it with unrelated
  viral content silently.
- Offline: cached posts with a clear "Offline" state; posts queued with status.
- Deleted or hidden content in a thread: a placeholder explaining why.
- Very long posts, many images, right-to-left text, mixed scripts.
- Content warnings and sensitive media blurred with a reason and a way to show.
- Audience changed after posting: who already saw it, and what changes now.

## Accessibility specifics

- Feeds as lists with posts as articles, each with a heading or accessible name; keyboard shortcuts to move between
  posts on the web, without trapping focus in infinite scroll.
- Infinite scroll must not make the footer unreachable; provide "Load more" or put footer links elsewhere.
- Autoplay controls and captions (WCAG 1.2.x, 2.2.2 Pause, Stop, Hide).
- Announce new items politely, not by moving focus.
- Alt text for images, prompted at posting.

## Copy

- End of feed: "You're up to date" or the product's own line, with what comes next.
- Audience: "Visible to people at your school", "Only your followers can reply".
- Breaks and limits: neutral ("You've been here 45 minutes. Keep going or take a break?").
- Notifications: the fact, never bait.

## Common mistakes and why they happen

- **A feed as the home of a tool**, copied from social apps.
- **Infinite scroll with autoplay and no end**, because time spent is the metric.
- **Audience hidden in a menu**, because the composer was designed for speed only.
- **Public counts by default**, because they drive posting.
- **Reporting buried**, because it is designed after launch.

## Worked comparison

**Situation:** a running app adds a community feed.

**Weak.** The home tab becomes an infinite ranked feed of everyone's runs with autoplaying route videos, public
like counts, and notifications for "Runners you may know posted".

**Strong.** A "Community" tab with "Following" (chronological, ends with "You're up to date") and "Clubs" (by club,
sorted by new). Posting shows the audience ("Your club: Hackney Harriers") and who can comment. Likes are visible to
the author only by default. Notifications: comments and club announcements. Weekly time on the tab is visible in
settings with an optional reminder.

## How to verify and measure

- Measure satisfaction and "found what I came for", not only time spent; ask people after sessions whether the time
  felt worth it.
- Watch late-night use, especially for young people.
- Test posting with people: do they know who will see the post before posting?
- Guardrails: reports, blocks, mutes and regret signals (quick deletes, unfollows after notifications).

## References

- X — [choosing an audience](https://mobbin.com/flows/99a52f6e-d598-4720-bfc7-4fdcb64d4d0a)
- Digg — [creating a post](https://mobbin.com/flows/51e2230c-a562-4fea-910d-34bb7f3e7369)
- Runna — [choosing audience](https://mobbin.com/flows/2d97de76-1809-444d-be9b-fc4f02fe0505)
- Handshake — [creating a post](https://mobbin.com/flows/5c80547c-d194-4d5d-bddc-ee7dc9205467)
- Whatnot — [watch time and limits](https://mobbin.com/screens/d40efedd-3b9b-4193-99f5-11b30b8ca9f3)
- Fable — [muting in place](https://mobbin.com/screens/1163393d-c735-447b-8132-160724efd6ed)
- European Commission — [preliminary findings on TikTok (February 2026)](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act)
