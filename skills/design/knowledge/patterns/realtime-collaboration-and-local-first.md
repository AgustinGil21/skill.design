# Real-time collaboration and local-first apps

Several people editing the same thing at once (documents, boards, design files, spreadsheets), and apps that work fully
offline and sync later. Both break the request-and-response model most interfaces assume: data changes under the
person's cursor, edits arrive out of order, and "saved" means something different. Done well, collaboration feels like
working in the same room; done badly, people lose work and trust.

See also [wizards and collaboration](wizards-and-collaboration.md) (comments and presence basics),
[states, transitions and concurrency](../23-states-transitions-and-concurrency.md) and
[tracking and offline](tracking-and-offline.md).

## The problem and who has it

- **Teams editing together**: they need to see who is here, what others are doing, and never lose an edit.
- **People working offline or on bad connections** (field work, travel): they need to keep working and trust that
  changes will sync.
- **The product**: must resolve conflicts without asking people to merge by hand.

## Questions to ask before deciding

- **How often do people edit the same thing at the same time?** Rarely (records, settings) or constantly (documents,
  canvases)?
- **What is the unit of conflict?** A whole record, a field, a character, an object on a canvas?
- **Must it work offline**, and for how long?
- **Who owns the data**, and where does the truth live (server, device, both)?
- **How many collaborators** at once: two, twenty, thousands of viewers?

## Approaches and how to choose

| Situation | Approach | Why | Cost |
| --- | --- | --- | --- |
| Records edited occasionally by different people | **Optimistic locking**: detect a newer version on save and offer to review | Simple, rare conflicts | Conflicts surface late |
| Forms and settings with several editors | **Field-level merge** with "changed by Ana just now" notices | Fewer conflicts | Needs per-field versions |
| Documents, boards, canvases edited together | **Real-time sync with automatic merging** (operational transformation or CRDTs) and presence | No manual merges; live feel | Infrastructure and complexity; libraries such as Yjs or Automerge, or hosted services |
| Apps that must work offline | **Local-first**: the device's copy is primary, synced in the background (CRDTs or a sync engine) | Instant, offline, resilient | Sync design, storage limits, migrations on device |
| Many viewers, few editors | **Live updates without editing presence** | Simpler | Not collaborative editing |

## Anatomy and behavior

- **Presence**: avatars of who is here; live cursors or selections in the shared area, labeled with names and
  colors that are distinguishable (not by color alone); a follow mode in canvases.
- **Ownership cues**: who is editing this field or object right now; soft locks ("Ana is editing") rather than hard
  locks when possible.
- **Sync status, honestly**: "Saved", "Saving…", "Offline — changes saved on this device", "Syncing 12 changes",
  "Couldn't sync — retrying". Never "Saved" for something only stored locally without saying so.
- **Changes from others** arrive without moving the person's cursor or scroll position; highlights fade.
- **Undo is local**: undo reverts my changes, not someone else's.
- **History**: version history with who changed what, restore points, and named versions
  ([profile, brand kit and version history](profile-brand-kit-and-version-history.md)).
- **Comments and mentions** anchored to content, surviving edits.

## States and edge cases

- Reconnecting after hours offline with many changes on both sides.
- Two people deleting and editing the same object.
- Permission revoked while editing: what happens to unsynced changes.
- Schema changes while some devices run old versions.
- Very large documents: loading progressively, performance with many cursors.
- Storage full on the device.

## Accessibility specifics

- Presence and remote changes announced politely and summarized ("Ana edited 3 cells"), not every keystroke.
- Live cursors do not steal focus; collaborators identified by name, not only color.
- Sync status available to screen readers as a status message (WCAG 4.1.3).

## Copy

- Status by fact: "Offline. Your changes are saved on this device and will sync when you're back online."
- Conflicts by consequence: "Ana changed the due date to 14 March while you were offline. Keep hers or yours?"
- Avoid technical terms (sync engine, CRDT, merge) in the interface.

## Common mistakes and why they happen

- **Last write wins silently**, because it is the default of a simple API.
- **"Saved" while offline**, because the local save succeeded.
- **Cursors jumping when others type**, because remote changes re-render the editor.
- **Presence without names**, color-only.

## Worked comparison

**Weak.** A task board saves each card with a PUT; two people move the same card; the later request wins; the first
person's move disappears without a message.

**Strong.** Moves are operations merged by the sync layer; both people see the card animate to its final position
with "Moved by Ana" for a moment; offline moves queue with "3 changes waiting to sync"; history shows both moves.

## Checklist

- [ ] The collaboration model fits how often people edit the same thing.
- [ ] Presence names people; sync status is honest, including offline.
- [ ] Remote changes never move the person's cursor or scroll; undo is local.
- [ ] Conflicts resolved automatically where possible, explained by consequence where not.
- [ ] Tested with several clients, slow networks and long disconnections.

## How to verify and measure

- Test with two or more clients, slow and offline networks, and long disconnections.
- Measure: conflict rates, lost-work reports, time to sync, support tickets about missing changes.

## References

- The project's sync layer documentation; local-first principles as described by the Ink & Switch essay "Local-first
  software" (2019).
