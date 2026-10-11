# Case: a long-running video export

## Context and evidence status

**Fictional case.** Clipwise, its export timings, people, observations, job identifiers and example messages
are invented for teaching. Evidence is a hypothetical scenario, not research conducted for a real product.
The validation protocol below is proposed; no improvement or usability result is claimed.

Clipwise is a browser-based video editor for marketing teams. Server-side exports can take from 30 seconds
to 15 minutes in this fictional product, depending on project complexity and queue conditions.
Managers often need several aspect ratios and languages while continuing to edit a campaign.

The job is not "watch a progress indicator." It is obtaining the correct deliverable by a deadline,
knowing which version it contains and being able to find it after attention moves elsewhere.
The main stakes are missed deadlines, duplicate compute cost and publishing an outdated video.

Tone can remain expressive inside the creative editor while export status becomes literal and calm.
A lively animation may make waiting pleasant, but it cannot establish whether work is running or recoverable.

## Reframing the request

The fictional request is: "People close the export spinner and think the job failed. Improve the spinner."
The useful reframing is: **Make work that outlives a session understandable, findable and recoverable.**

A job has a lifecycle independent of the panel showing it.
Closing the panel, closing the browser, losing connection and cancelling the job are different actions.
If the interface treats them as interchangeable, even accurate progress percentages will not create confidence.

Three questions lead the design:

- Has the server accepted the export, or is the request still being submitted?
- What can the person do while it runs, and where can they return to it?
- Is the resulting file the version and format they meant to produce?

## Evidence and its limits

| Fictional evidence | Design implication | What remains uncertain |
| --- | --- | --- |
| Identical exports start close together | People may not trust the first request | Some duplicates may be intentional |
| Jobs finish after sessions close | Results need a durable destination | Closure does not prove confusion |
| Support asks where files are | Result discovery needs attention | Download failures may be the actual cause |
| Managers describe parallel exports | Background jobs may fit | Stated preference is not observed success |
| Rendering progress advances unevenly | A total percentage could mislead | Stage-level progress may still be useful |

In a real investigation, join job events to project revision, export settings and delivery events.
A duplicate is not just a repeated click: a changed subtitle track or revision may justify another export.
Compare people who find the finished file with people who never return, and investigate the difference.
Do not infer that a completed job was useful merely because the browser downloaded bytes.

Inspect support cases for vocabulary. "Stuck" can mean queued, a frozen status connection or rendering failure.
Those causes require different explanations and recovery actions.
Ask whether the service has useful queue telemetry before proposing estimates or queue positions.

## Questions and constraints before deciding

- Does the server continue after the browser disconnects, including before assets finish uploading?
- Are fonts and clips checked before work starts, or can validation happen only during rendering?
- Can a cancel request actually interrupt processing, and does it release reserved usage?
- Is the export tied to an immutable revision, or could later edits change the output?
- How long are files retained, and does expiry remove the job history or just the download?
- Who can see the filename, preview and download link in a shared project?
- Is the team exporting one file occasionally or managing a campaign queue every day?
- What does "ready" mean: rendered, uploaded, scanned or downloadable?

The fictional service reports queue, rendering, encoding and upload stages.
Only rendering has usable fractional progress, and its speed is uneven.
Email and in-app notifications already exist; browser push does not.
These constraints favor a durable job view over a new notification channel in the first release.

An asset upload that depends on the open tab is a distinct preliminary stage.
Until it finishes, "You can close this tab" would be false even if server rendering is resilient afterward.
The copy follows the actual boundary rather than a simplified product promise.

## Alternatives and the recommendation

| Situation | Option | Why it can fit | Cost or limitation |
| --- | --- | --- | --- |
| Short, predictable export | Blocking progress dialog | Focused and inexpensive | Stops parallel work if delays grow |
| Long jobs during active editing | Background panel | Keeps work moving | Needs durable job identity and navigation |
| Person leaves immediately | Completion email | Reaches them outside the editor | Delivery is not guaranteed |
| Several formats and return visits | Panel plus exports page | Supports retrieval | Adds another surface |
| Background service unreliable | Explicit waiting flow | Honest about capability | Limits parallel work |

**Recommendation: background jobs with a compact panel, project exports page and optional email.**
The panel supports the current session; the page supports return visits; email supports chosen interruption.
Each has a separate purpose, so notifications do not become a substitute for persistent history.

A richer blocking modal is rejected because it keeps the same attention dependency.
Email alone is rejected because immediate retries and stage-specific repair would remain awkward.
Browser push is deferred because permission prompts and delivery coordination add cost before discovery is solved.
For a quick local-only editor, a simple progress dialog could remain the more proportionate choice.

A job list is not automatically better for every product.
If exports usually finish before a person can change tasks, persistent background management may create clutter.
Validate duration distribution and concurrent demand before building a campaign dashboard.

## Behavior and information architecture

The export setup names the project, output format and source revision before submission.
After acceptance, the interface shows where progress lives and returns focus to useful editing context.
The top-bar indicator includes a readable active-job count rather than a spinner alone.

The panel shows recent jobs with identifying title, aspect ratio, language, source revision and state.
The exports page adds retained history and filtering when volume justifies it.
Use stable order while someone interacts with a row; moving completed jobs can displace controls under a pointer.

Only measured progress is presented numerically. Rendering completion is not total job completion.
If upload follows rendering, the stage label must change instead of leaving the whole job at "100%" while waiting.
An indeterminate stage is honest when no reliable denominator exists.

Estimates appear only when the model has enough information to be useful and communicates uncertainty.
The fictional maximum duration is not a promise to repeat during an incident.
If a job exceeds its expected range, explain what is known and offer status or cancellation rather than resetting time.

The export captures a revision at start. Later edits create a new revision without silently changing the job.
Duplicate detection compares project revision and meaningful export settings, not title alone.
An intentional repeat remains possible when there is a valid reason, such as a delivery retry.

Retention is seven days in this fictional scenario. Show the actual expiry time near the download.
Keep useful job metadata after expiry if policy permits, so the person understands what happened and can re-export.
Do not imply that an expired link means the underlying project disappeared.

## States and transitions

| State | What is communicated | Available path |
| --- | --- | --- |
| No exports | Where new exports will appear | Start from export setup |
| Checking inputs | Assets and settings being validated | Correct issues or cancel |
| Submitting | Server acceptance not yet confirmed | Wait; check before resubmitting |
| Queued | Accepted job awaiting capacity | Keep editing or request cancellation |
| Rendering | Stage and meaningful progress | Follow or leave after upload is complete |
| Encoding | Output preparation without false total percent | Continue other work |
| Uploading result | File not yet downloadable | Wait for confirmed availability |
| Ready | Format, size, revision and expiry | Download or copy authorized link |
| Partial campaign completion | Ready and failed variants distinguished | Download ready variants; repair failures |
| Fixable failure | Asset or setting needing attention | Open relevant editor location |
| Service failure | Known failure and operation reference | Retry safely or seek help |
| Status connection lost | Last known state and timestamp | Reconnect; job may still continue |
| Cancellation pending | Request received, outcome unconfirmed | Wait for server resolution |
| Cancelled | Confirmed stopped job and usage treatment | Start another export |
| Expired | File unavailable, project revision identified | Re-export if source is accessible |
| Permission lost | Result access no longer permitted | Contact project owner without leaking details |

When cancellation races with completion, show the authoritative result.
A file may become ready before the server can cancel; saying "Cancelled" just because a button was pressed is wrong.
A download request can also fail after rendering succeeds. Keep the successful job and offer another download.

## Edge cases and operational responsibilities

Several tabs should refer to one job identity and converge on server state.
A stale tab should not recreate the job when its local spinner stops.
After a network timeout, status lookup precedes another start request.

For campaign exports, "Download all" needs a clear membership rule.
Does it include ready variants only, wait for everything or produce an archive after completion?
The chosen behavior belongs in the label and status view, especially when one language fails.

A source revision may contain assets later deleted or permissions later withdrawn.
State whether re-export remains possible; do not offer a working-looking action that depends on unavailable media.
Copy-link behavior should disclose audience or expiry when links have different access from the project itself.

Email content avoids exposing sensitive campaign titles if account policy requires privacy.
A person opening an old email lands on current job status, including expiry or revoked permission.
Notification delivery is not proof that the result has been received or reviewed.

## Copy by moment and localization

| Moment | Function | Fictional English example |
| --- | --- | --- |
| Accepted | Confirm work and destination | "Export started. Follow it in Exports." |
| Leaving safely | Explain session independence | "Your export will continue after you leave." |
| Upload dependency | Prevent a mistaken exit | "Keep this tab open until the clips finish uploading." |
| Queue | Distinguish waiting from failure | "Waiting for an export slot" |
| Source version | Identify what will be delivered | "Using the version saved at 14:32" |
| Ready | Identify result and action | "Spring launch — 9:16 is ready. Download" |
| Fixable error | Identify repair location | "A font is missing. Review the title clip." |
| Unknown connection | Separate knowledge from reality | "Status unavailable. Your export may still be running." |
| Expiry | Explain why download is unavailable | "The download expired. Export this version again." |

The English examples illustrate functions, not required verb order or punctuation.
Translate complete status messages and use plural-aware active counts.
Stage names may need plain-language descriptions in a market where technical encoding vocabulary is unfamiliar.
An expert audience may prefer the technical term with a short explanation available.

Display timestamps using the person's locale and provide time-zone context when comparing revisions across teams.
Use direction isolation for filenames, ratios and codes in right-to-left text.
Long campaign names can wrap or be shortened visually while their full accessible name remains available.
Do not truncate the variant information that distinguishes two otherwise identical jobs.

## Accessibility: requirements and recommendations

Relevant WCAG 2.2 requirements include:

- **4.1.2 Name, Role, Value, A:** progress and controls expose their names, roles and applicable values.
- **4.1.3 Status Messages, AA:** stage and completion messages are available without forcing focus changes.
- **2.1.1 Keyboard, A:** job navigation, cancellation, retry and download work from the keyboard.
- **2.4.3 Focus Order, A:** closing setup and opening job details preserve a meaningful sequence.
- **1.4.1 Use of Color, A:** ready, failed and queued states are distinguishable without color alone.
- **2.4.11 Focus Not Obscured (Minimum), AA:** sticky panels do not fully hide focused controls.

Using a native progress element or correctly implemented progressbar role is an implementation recommendation.
Expose determinate values only when the value is meaningful; an indeterminate job should not announce invented progress.
Stage-change announcements generally convey more useful information than announcing every percentage update.

Keep notifications reachable in a persistent center if they disappear from the transient surface.
Test the full recovery path with a screen reader; an accessible progressbar alone does not make the job manageable.
Reduced-motion styling is recommended for decorative spinning and transition effects.
Specific automatic-motion obligations depend on duration and behavior, including WCAG 2.2.2 Pause, Stop, Hide, A.

## Worked comparison: the same campaign export

**Weak version.** A manager starts the fictional "Spring launch — 9:16" export.
A blocking spinner becomes "100%" after rendering, though upload continues.
Closing the dialog removes all evidence of the job. The manager starts it again and later downloads the wrong revision.
The design optimizes the waiting animation while hiding identity and lifecycle.

**Stronger version.** Setup shows the captured revision and variant.
After server acceptance, the manager can edit while the panel distinguishes rendering from file preparation.
Closing the tab does not remove the exports page. On return, the finished file shows its revision and expiry.
A duplicate start points to the existing job while allowing a deliberate new version when settings differ.

The stronger version has more surfaces and coordination cost.
It earns that complexity by addressing parallel work and return visits, not simply by displaying richer progress.

## Proposed validation protocol

Use fictional projects with deliberately different ratios, languages and revisions.
Recruit people who export under deadline as well as occasional creators; include assistive-technology users.
A visual prototype can test understanding, but persistence and cancellation need a working service simulation.

1. Start an export, continue editing and predict which version will be rendered.
2. Close the panel, then the tab after server acceptance; return and locate the result.
3. Start several variants and identify the correct finished file without opening each one.
4. Introduce a missing font, a lost status connection and a timed-out submission as separate scenarios.
5. Cancel just before completion and ask the participant to explain the final state.
6. Open an expired notification and try to recover the intended deliverable.

Observe whether people understand safe departure, source version, pending cancellation and recoverability.
Measure task completion and wrong-file selection, not only whether they notice the indicator.
Avoid moderator prompts such as "Look in Exports"; they remove the discovery problem being tested.
Repeat critical tasks at narrow widths, zoom, with long translations and keyboard-only interaction.

## Measurement, guardrails and limits

Define suspected duplicate exports using matching revision and settings within a chosen analysis window.
Validate that definition against examples before treating fewer repeated jobs as success.
Track successful retrieval among completed jobs with valid access, separated from expiry and deliberate abandonment.
A download is a proxy for delivery, not proof of content approval or publishing success.

Guardrails include server load, status polling, export latency, cancellation reliability and wrong-version reports.
Monitor notification opt-outs and repeat emails so recovery does not become excessive interruption.
Use project- or team-level comparisons when shared workflows could contaminate an individual-level experiment.
Low-volume qualitative evidence can guide iteration without being presented as a precise effect estimate.

Reconsider the recommendation if jobs become near-instant, if browser-dependent upload dominates the wait,
or if most exports are automated through an API rather than initiated by editors.
Do not show estimates until their behavior is defensible under queue spikes as well as ordinary conditions.
The result of this case is a reasoned design proposal, not an invented claim that duplicates declined.

## Review checklist

- [ ] Job identity, revision, acceptance and downloadable completion are distinct.
- [ ] Safe departure copy matches actual upload and server behavior.
- [ ] Partial, uncertain, cancellation and expired states have usable destinations.
- [ ] Duplicate detection recognizes meaningful export differences.
- [ ] Status announcements are useful without constant interruption.
- [ ] Localized titles, times and variant labels remain distinguishable.
- [ ] Testing includes return visits and wrong-file risks.
- [ ] Metrics include delivery quality and service load, not just fewer clicks.

## Knowledge applied

[States, transitions and concurrency](../23-states-transitions-and-concurrency.md) ·
[tracking and offline](../patterns/tracking-and-offline.md) ·
[notifications](../patterns/notifications.md) ·
[real state and verification](../08-real-state-and-verification.md) ·
[editors and creative tools](../patterns/editors-and-creative-tools.md).
