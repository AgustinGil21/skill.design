# Publishing, file browsing and audit logs

Three patterns about content becoming visible and traceable: **publishing** a post (who will see it, as whom, with
what), **browsing files** in a shared structure, and **audit logs** that record who did what. Each has an audience
question at its core: publishing decides who sees content; browsing must show who can access it; audit logs are
evidence, which must be complete and precise.

## The problem and who has it

- **People posting** to social networks, communities or internal channels.
- **Teams organizing files** in shared drives.
- **Administrators and security teams** investigating incidents or proving compliance.

## Questions to ask before deciding

- **Publishing**: who is the audience, which identity posts, what can be changed after publishing, can it be recalled?
- **Files**: folders, tags or search? How are permissions inherited? What happens on move and copy?
- **Audit**: who reads the log and why (investigation, compliance)? How long is it kept? Is it complete?

## Publishing a post

### The publication contract

Before publishing, people should know:

- **Audience**: who will see it (public, followers, a group, a team).
- **Identity**: as whom (personal, page, anonymous).
- **Reach**: will it be indexed by search engines, shared to other networks, notified to followers?
- **Editability**: can it be edited after publishing? Will an "edited" label appear?
- **Recall**: can it be deleted, and what about copies, shares and notifications already sent?

### Anatomy and behavior

- **"Post" at the top end and "Cancel" at the start**; the button disabled while there is no content
  ([X](https://mobbin.com/screens/a1e7660e-01af-4280-b917-b7f4e20f6338),
  [Bluesky](https://mobbin.com/screens/4169c149-1194-415f-89d3-a2c9e3ac04ff)).
- **Who sees it, next to the author and before writing** ("Anyone ▾"), with a sheet explaining each option
  ([LinkedIn](https://mobbin.com/screens/a7ae8de3-ab04-4d21-b264-23125c9f0afe),
  [Fable](https://mobbin.com/screens/639b4f5c-cfde-42a9-b912-c4b55c91bb09)). Who can reply too, as a chip.
- **Which identity posts** when there are several (personal, anonymous, a page), with the chosen one marked
  ([Glassdoor](https://mobbin.com/screens/72cc0630-a90a-4d25-8114-a82a7f0ad9d7)).
- **A character counter that appears near the limit** (a filling ring, a number turning negative), not a fixed "0 / 750"
  from the start.
- **An attachment bar above the keyboard**: image, camera, GIF, poll, location.
- **Attached images with remove, edit and "Alt text"** visible — not hidden in a menu (X "+ALT", Bluesky "Alt text").
- **Secondary options in rows** below (tag people, location, audience, "Also share to…", AI-generated content label;
  [Instagram](https://mobbin.com/screens/a0263958-4e25-4126-888c-dc100f58a5dc)).
- **Drafts**: on cancel with text, ask "Save draft?"; access to drafts and scheduled posts.
- **Post language** detected and changeable (Bluesky).
- **Anti-example**: filling the compose screen with trends and promotions — it distracts from writing.

### Partial publication and recovery

Posts with several media files can partially fail: two images upload, one does not. Do not publish a post silently
missing an image; hold it as a draft with "1 image failed · Retry" or ask whether to publish without it.

## File browsing

### Folders, tags or search?

| Organization | Good for | Weak for |
| --- | --- | --- |
| Folders | Clear ownership and permissions, familiar | Items belonging in several places |
| Tags | Multiple classifications | Permissions, consistency |
| Search and smart views | Large collections, known names | Browsing unknown content |

Most file systems combine folders for permissions with search and smart views for finding.

### Anatomy and behavior

- **A folder tree on the start side, content on the other**, breadcrumbs above with the full path
  ([Frame](https://mobbin.com/screens/faf11a8a-de14-4a68-bdc7-d895af526b70),
  [Zoho CRM](https://mobbin.com/screens/e2d3cd50-453d-4967-b55c-c4d4fa025ece)).
- **Fixed shortcuts above the tree**: Recent, Shared with me, Starred, Trash; storage used at the bottom ("467 MB of
  15 GB", [Google Drive](https://mobbin.com/screens/50679553-4fdc-4bb1-a068-d63654a6a767)).
- **A list with useful columns** (name with type icon, owner, modified, size, type), sortable, and **list / grid
  toggle**; folders first.
- **Filters as chips** (Type, People, Modified, Location) and **smart views** ("Created by me", "Expiring soon";
  [PandaDoc](https://mobbin.com/screens/48cc7028-bab5-4d91-9154-97b63fe12ef3)).
- **Selection with an action bar** that replaces filters ("1 selected · share · move · delete").
- **A details panel**: preview, who has access with "Manage access", type, size, activity (Drive).
- **Grouping by date** in chronological views ([Fabric](https://mobbin.com/screens/1b68a658-409a-428f-9cbf-02c8678297cf)).
- **Status per file** when processed (indexed, error) and totals ("Files: 2 · Indexed: 2 · Errors: 0",
  [StackAI](https://mobbin.com/screens/89e694f3-663c-48b2-868d-0cf06bb57bc9)).
- **Drag to move**, always with a menu alternative ("Move to…").

### Move, copy and restore

- **Moving changes access** when folders have different permissions: warn ("Moving to 'Clients' gives 12 more people
  access").
- **Copying** creates a new item with the destination's permissions; say so.
- **Name collisions**: replace, keep both, or skip.
- **Trash** with retention period and restore to the original location (or choose one if it no longer exists).

## Audit logs

### Evidence, not just activity

An audit log is used as evidence. That raises the bar:

- **Exact times** with time zone, not "3 h ago".
- **Actor identity**, including delegated actions ("Marco, acting as admin for Lisboa Coffee") and automated actors
  (API keys, integrations, bots) distinguished.
- **Before and after** values for changes, not only "edited".
- **Completeness and limits stated**: "Events before 11 November are not available", "You only see events in areas you
  can access", and any delays in ingestion.
- **Retention** policy visible.
- **Sensitive data** masked in details.

### Anatomy and behavior

- **Columns: when, who, what, on what, from where (IP or location) and detail**
  ([1Password](https://mobbin.com/screens/84dbef44-916b-4322-956f-154845c224a7),
  [PlanetScale](https://mobbin.com/screens/d7448333-6400-49dd-b11f-e48e4e229200)).
- **The action in human language plus the technical event name** below ("Approved deploy request #6" ·
  `deploy_request.approved`, PlanetScale) — serving both people and integrators.
- **Filters by date, person, action type and resource**, with "Clear"
  ([Front](https://mobbin.com/screens/0c2efddc-d2d9-4a17-b589-34523d08e1d8),
  [Vanta](https://mobbin.com/screens/41659ab7-5710-4abf-91ca-c6bf482c9b0b)).
- **Export** (CSV) and **visible freshness** ("Updated just now · Refresh"; Front).
- **People vs. automated processes** distinguished with their own icon.
- **Scope stated**: "You only see events in areas you can access" (1Password); "Data since 11 November"
  ([Klaviyo](https://mobbin.com/screens/1f44450b-8a6f-4d19-83e8-24addf2ca0e8)).
- **A volume chart at the top** to see spikes and filter by range ([Grok](https://mobbin.com/screens/673656da-327b-4e01-98fd-8a23f21718a4)).
- **Event detail**: before and after values.

### Investigating from the log

Design the path from a suspicious event to understanding: click an actor to see all their actions in the period; click
a resource to see its history; save and share an investigation view.

## Accessibility specifics

- Compose screens with labeled controls; alt text prominent; counters announced near the limit.
- File trees following the tree pattern; drag alternatives.
- Logs as tables with headers; filters labeled.

## Copy

- Audience options described by who sees the content.
- Move warnings that name the people affected.
- Log events in plain language with exact timestamps.

## Common mistakes and why they happen

- **Audience chosen after writing**, or hidden.
- **Alt text buried.**
- **Moves that silently change permissions.**
- **Logs with relative times and no before/after.**
- **Logs that look complete but are not.**

## Worked comparison: partial publication and recovery

**Weak.** A store posts a product announcement with four images; one fails; the post goes out with three images and a
broken layout; followers are notified; deleting and reposting creates a second notification.

**Strong.** The post stays in drafts: "3 of 4 images uploaded · Retry 'detail-back.jpg' or publish without it". Once all
images are ready, it publishes once.

## How to verify and measure

- **Test** audience comprehension ("Who will see this?"), file moves across permission boundaries, and log
  investigations with security staff.
- **Measure** posts deleted shortly after publishing (regret), access changes after moves, time to answer audit
  questions.

## References

- X — [compose with alt text](https://mobbin.com/screens/a1e7660e-01af-4280-b917-b7f4e20f6338)
- Bluesky — [compose with counter and language](https://mobbin.com/screens/4169c149-1194-415f-89d3-a2c9e3ac04ff)
- LinkedIn — [audience before writing](https://mobbin.com/screens/a7ae8de3-ab04-4d21-b264-23125c9f0afe)
- Fable — [audience options](https://mobbin.com/screens/639b4f5c-cfde-42a9-b912-c4b55c91bb09)
- Glassdoor — [identity selection](https://mobbin.com/screens/72cc0630-a90a-4d25-8114-a82a7f0ad9d7)
- Instagram — [secondary options](https://mobbin.com/screens/a0263958-4e25-4126-888c-dc100f58a5dc)
- Frame — [folder tree and breadcrumbs](https://mobbin.com/screens/faf11a8a-de14-4a68-bdc7-d895af526b70)
- Zoho CRM — [folder tree](https://mobbin.com/screens/e2d3cd50-453d-4967-b55c-c4d4fa025ece)
- Google Drive — [shortcuts, storage and details panel](https://mobbin.com/screens/50679553-4fdc-4bb1-a068-d63654a6a767)
- PandaDoc — [smart views](https://mobbin.com/screens/48cc7028-bab5-4d91-9154-97b63fe12ef3)
- Fabric — [grouping by date](https://mobbin.com/screens/1b68a658-409a-428f-9cbf-02c8678297cf)
- StackAI — [status per file](https://mobbin.com/screens/89e694f3-663c-48b2-868d-0cf06bb57bc9)
- 1Password — [audit columns and scope](https://mobbin.com/screens/84dbef44-916b-4322-956f-154845c224a7)
- PlanetScale — [human and technical event names](https://mobbin.com/screens/d7448333-6400-49dd-b11f-e48e4e229200)
- Front — [filters and freshness](https://mobbin.com/screens/0c2efddc-d2d9-4a17-b589-34523d08e1d8)
- Vanta — [filters](https://mobbin.com/screens/41659ab7-5710-4abf-91ca-c6bf482c9b0b)
- Klaviyo — [data availability stated](https://mobbin.com/screens/1f44450b-8a6f-4d19-83e8-24addf2ca0e8)
- Grok — [volume chart](https://mobbin.com/screens/673656da-327b-4e01-98fd-8a23f21718a4)
