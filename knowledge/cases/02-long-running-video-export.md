# Case: a long-running video export

## Context

**Product (fictional):** Clipwise, a browser-based video editor for marketing teams. Exporting a video renders it on
the server and takes from 30 seconds to 15 minutes depending on length, resolution and queue load.

**People:** social media managers exporting several versions (formats, languages) per campaign, often against a
deadline.

## The problem as first stated

"The export modal shows a spinner; people close the tab and think the export failed. Make the spinner nicer."

### Reframing

The problem is not the spinner. People cannot **trust or follow** a process that outlives their attention: they do
not know how long it will take, whether they can leave, where the result will be, or whether it failed.

## Evidence

| Type | Finding |
| --- | --- |
| **Known** (logs) | Many exports are started twice within minutes; a portion of exports finish while the tab is closed and are never downloaded |
| **Known** (support) | Tickets ask "where is my video?" and "export stuck at 0 %" |
| **Believed** (interviews) | Managers export several formats in a row and want to keep editing meanwhile |
| **Guessed** | Duration estimates would reduce anxiety even if imprecise |

## Constraints

- The server can report stages (queued, rendering with percentage, encoding, uploading) but percentage during
  rendering is uneven.
- Exports can fail for reasons the user can fix (missing font, unsupported clip) or cannot (server error).
- Email and in-app notifications exist; browser push is not implemented.

## Alternatives

| Option | Strengths | Weaknesses |
| --- | --- | --- |
| **A. Blocking modal with progress** | Simple, focused | Blocks work; closing loses context; long waits feel worse |
| **B. Background export with an exports panel** | Keeps working; several exports visible; survives closing the tab | New surface to design; needs notifications |
| **C. Email when done** | Works when away | Slow feedback; email may be filtered |
| **D. B + in-app and optional email notification + an exports page** | Covers staying, leaving and coming back | More states and coordination |

## Decision

**D.** Exports become background jobs:

- Starting an export closes the dialog and shows an **exports indicator** in the top bar with a count and progress.
- The **exports panel** lists jobs with stage, progress, estimated time ("About 4 min left", shown only once the
  estimate is stable), and actions (cancel, retry, download, copy link).
- When done: an in-app notification with a download action; an email only if the person has left the editor for more
  than a few minutes, or if they chose "Email me when ready".
- An **exports page** in the project keeps the history for 7 days.
- **Duplicate detection**: starting an identical export while one runs offers "You're already exporting this version —
  view progress".

**Given up:** the simplicity of one modal.

## States

| State | What people see |
| --- | --- |
| Queued | "Queued — starts in about 1 min" (position if helpful) |
| Rendering | Stage and percentage; estimated time once stable |
| Encoding / uploading | Stage names in plain language ("Preparing your file") |
| Done | Download, copy link, file size and format |
| Failed — fixable | What failed and how to fix ("Font 'Grotesk Bold' is missing. Replace it or upload it, then retry") with a link to the clip |
| Failed — not fixable | "The export failed on our side. Retry — it usually works. If it fails again, contact support with code EXP-4821" |
| Cancelled | Removed from active list, kept in history |
| Expired | "Expired after 7 days — export again" |
| Offline | The panel shows last known state with "Reconnecting…"; jobs continue on the server |

### Edge cases

- **Project edited during export**: the export uses the version at start time; the panel says "Exported from the
  version at 14:32".
- **Several tabs open**: the indicator syncs across tabs.
- **Plan limits**: if a resolution requires a higher plan, say so before starting, not after rendering.
- **Very long exports**: progress that stalls for long periods shows "Still working — longer videos can take up to
  15 min".

## Copy (by function)

- Starting: confirm and say where to follow it. "Exporting 'Spring launch — 9:16'. You can keep editing; follow
  progress in Exports."
- Done notification: what and action. "'Spring launch — 9:16' is ready. Download"
- Failure: what happened, why if known, what to do, a reference code.

Time estimates are formatted per locale; relative times ("about 4 min") follow each language's plural rules.

## Accessibility

- Progress uses a native progress element or `role="progressbar"` with value text; updates are not announced on every
  percentage — only stage changes and completion, via a polite live region.
- Notifications reachable by keyboard and not dismissed automatically before they can be read.
- The indicator has a text label ("2 exports in progress"), not only a spinner.

## Testing and measurement

- **Prototype test** with six managers exporting three formats while editing: all completed without help; two wanted
  to download all formats at once (added "Download all" for the campaign).
- **Metrics**: duplicate exports (primary, expected to fall), exports never downloaded (expected to fall), "where is my
  export" tickets; guardrail: server load from repeated status polling.

## Result and limits

Duplicate exports and never-downloaded exports dropped (fictional). Estimates remain imprecise in busy periods; the
team chose to hide them until stable rather than show wrong numbers. Browser push notifications could replace some
emails later.

## Knowledge applied

[States, transitions and concurrency](../23-states-transitions-and-concurrency.md) ·
[tracking and offline](../patterns/tracking-and-offline.md) ·
[notifications](../patterns/notifications.md) ·
[real state and verification](../08-real-state-and-verification.md) ·
[editors and creative tools](../patterns/editors-and-creative-tools.md).
