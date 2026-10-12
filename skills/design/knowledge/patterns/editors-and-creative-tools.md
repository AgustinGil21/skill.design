# Editors and creative tools

Tools where people build something — a video, a design, a document, a flow, a spreadsheet. People spend long sessions
in them, develop deep habits, and lose real work when something goes wrong. The screen is divided by function, each
area with one job; the hard decisions are about the document model, selection, modes, precision, undo and saving.

## The problem and who has it

- **Beginners** who need to make something good quickly with guidance and templates.
- **Professionals** who need speed, precision, shortcuts and predictable behavior.
- **Collaborators** working on the same document.

When editors fail: work is lost, edits apply to the wrong selection, modes confuse people ("why is typing deleting my
shapes?"), undo does not undo what people expect, and exports do not match what was on screen.

## Questions to ask before deciding

- **What is the document model**: pages, scenes, layers, blocks, nodes, cells? How do objects relate (groups,
  components, links)?
- **Who uses it**: beginners, professionals, both?
- **What precision is needed**: free placement, snapping, exact numbers, units?
- **What is time-based** (video, audio, animation) vs. spatial?
- **Single or multi-user editing?**
- **What leaves the editor**: exports, publications, embeds?

## The document model first

Before layout, define the model people will learn:

| Question | Example answer (video editor) |
| --- | --- |
| What are the objects? | Scenes, clips, text layers, audio tracks |
| How do they nest? | A project has scenes; scenes have layers; layers have properties |
| What can be selected together? | Multiple clips on the timeline; multiple layers in a scene |
| What is reusable? | Templates, brand presets, saved styles |
| What changes affect many objects? | Changing a style updates every layer using it |

The interface must make this model visible: the structure panel mirrors it, selection respects it, the inspector
speaks its language.

## Alternatives for layout

| Situation | Layout |
| --- | --- |
| Spatial design with layers | Structure on one side, canvas in the center, inspector on the other |
| Time-based media | Canvas or preview above, timeline below, inspector on the side |
| Text-first documents | A centered writing column, formatting on selection, structure as an optional outline |
| Beginners creating from templates | Fewer panels, a gallery of templates and elements, simple inspector |

The common layout — structure, canvas, inspector, timeline — is a convention for professional tools; it is not
universal. A beginner-oriented tool may hide most panels until needed.

## Anatomy and behavior

### The common professional layout

- **Start side**: structure or pieces (scenes, pages, layers, components).
- **Center**: the canvas, as large as possible.
- **End side**: properties of the selection (inspector), in tabs when there are many.
- **Bottom**: the timeline (video, audio, animation).
- **Top**: back, editable title, undo / redo, save state ("Saved"), share and the primary action (Export, Publish).
- Examples: [Synthesia](https://mobbin.com/screens/6be0015a-fab0-412b-8b87-7eabaf5a4501),
  [Descript](https://mobbin.com/screens/b3485a83-e0c4-4142-8792-43dc8825df7b),
  [VEED](https://mobbin.com/screens/1208aaf1-84cf-421c-a2a1-e90c7b053945).
- If the timeline already shows the structure, the side structure panel is redundant: the canvas gains width.
- In editing mode, global navigation hides (full screen).

### Tools and modes

- A toolbar with the active tool marked and its key shown (V move, C comment…).
- A short hint below the toolbar saying what the active tool does.
- **"?"** opens the shortcuts list.
- **Modes cause errors**: typing a letter while in a selection mode can trigger a tool instead of text. Make the
  current mode unmistakable, return to a default mode after one-off tools, and use the Escape key to exit modes.

### Selection

- **Single selection**: clear handles and a highlight; the inspector shows that object.
- **Multiple selection**: the inspector shows shared properties; **mixed values** display as "Mixed" and editing them
  applies to all.
- **Selecting nested objects**: a predictable rule (first click selects the group, double click enters it), shown in
  the structure panel.
- **Locked and hidden objects**: visible in the structure panel with icons and text; not selectable on the canvas.

### Inspector

- **Empty when nothing is selected**: "Select an element to edit it", not a blank panel — or show document settings.
- **Numeric values** editable by typing, dragging and arrow keys (Shift for ×10), with units shown and convertible.
- **Live changes**; undo covers everything.
- **Reset** per property and per element.

### Precision

- Snapping to guides, grids and other objects, with the snap target shown; a modifier key to disable it.
- Rulers and measurement between objects.
- Units appropriate to the medium (px, pt, mm, frames, seconds) and to the locale where relevant.

### Timeline

- A time ruler at the top, a playhead with the exact time, named tracks.
- Drag to move, edges to trim, split at the playhead, delete.
- Zoom with shortcuts and "Fit all"; zooming reveals finer marks.
- Markers (comments, findings) on their own track or on the ruler.
- Keyboard: Space to play, arrows for frames, Shift+arrows for seconds, Up/Down between scenes, Home/End.

### Undo

- **Undo covers every change**, including those made in the inspector and by automated features (AI generation,
  auto-layout).
- **Scope**: in collaborative editors, undo usually affects only your own changes; say so.
- **History panel** for long sessions, with named steps.
- **Undo after save and after reload** where possible (persistent history).

## Review and versions

- A large player plus a side panel with comments anchored to time
  ([Frame.io](https://mobbin.com/screens/c2ad415a-4ac9-4b33-a51e-d122e7ee7b81),
  [Synthesia](https://mobbin.com/screens/d23dcd69-5ab8-43ae-aac1-8b464fbb3891)).
- A version selector at the top ("Version 3 ⌄"); history with author, date and "Restore"
  ([Descript](https://mobbin.com/screens/2b3c08f5-223b-4296-b17b-50a945120b33)).
- Compare versions side by side when choosing between variants.

## Exporting

- A panel from "Export" with destinations or presets (Social, Presentation, Web), quality, formats and a final button
  ([VEED](https://mobbin.com/screens/77f713e4-e7c1-4be4-b9c6-47805b7b267f),
  [Adobe Express](https://mobbin.com/screens/f9b5b9eb-259d-4208-bc95-13ba3af9bfac)).
- **Warn what does not fit the destination** (duration, aspect ratio, missing fonts) before exporting.
- **Partial export**: a selection, a range, a page.
- **On finishing**: where it went, "Show in folder", "Copy link".
- **Export failures**: what failed, what was produced, retry from where it stopped.

## Saving and recovery

- **Autosave with a visible state** ("Saving…" / "Saved 1 min ago").
- **Without autosave**: a warning when leaving with changes and an explicit "Discard changes".
- **Recovery after an unexpected close.**
- **Missing resources** (a font, a linked image, a deleted asset): flag them in place with a way to replace.

## Accessibility specifics

- Toolbars, panels and the structure tree operable by keyboard; landmarks to jump between areas.
- Canvas objects selectable and movable by keyboard (arrows nudge, Shift for larger steps), with position and size
  editable numerically.
- The structure panel as an accessible tree mirroring the canvas.
- Announcements for selection changes and operations ("3 layers selected", "Moved 10 px right").
- Drag alternatives for every manipulation (WCAG 2.5.7).

## Copy

- Tool names and hints in plain language.
- Export warnings specific ("This video is 3:20; the destination allows 3:00").
- In other languages, keep shortcut letters meaningful or document them; consider keyboard layouts.

## Common mistakes and why they happen

- **Layout copied from professional tools** for beginners.
- **Invisible modes.**
- **Mixed selections showing one object's values.**
- **Undo that skips AI or automatic changes.**
- **Exports that differ from the canvas.**

## Worked comparison: editing with real, complex content

**Weak.** A slide editor tested with three short slides. In real use, a 60-slide deck with a German translation: text
boxes overflow, the structure panel is a long unlabeled list, multi-select shows the first slide's font as if all
shared it, and an export to PDF substitutes a missing font silently.

**Strong.** Text boxes flag overflow; the structure panel shows slide titles and sections, searchable; multi-select
shows "Mixed" font; before export, "Font 'Söhne' is missing for 4 slides — replace or embed?"

## How to verify and measure

- **Test** with real projects (large, multilingual, old), with professionals and beginners, keyboard-only.
- **Measure** undo usage, lost-work incidents, export failures, time to complete common edits.

## References

- Synthesia — [editor layout](https://mobbin.com/screens/6be0015a-fab0-412b-8b87-7eabaf5a4501)
- Descript — [editor layout](https://mobbin.com/screens/b3485a83-e0c4-4142-8792-43dc8825df7b)
- VEED — [editor layout](https://mobbin.com/screens/1208aaf1-84cf-421c-a2a1-e90c7b053945)
- Frame.io — [review with time-anchored comments](https://mobbin.com/screens/c2ad415a-4ac9-4b33-a51e-d122e7ee7b81)
- Synthesia — [review panel](https://mobbin.com/screens/d23dcd69-5ab8-43ae-aac1-8b464fbb3891)
- Descript — [version history](https://mobbin.com/screens/2b3c08f5-223b-4296-b17b-50a945120b33)
- VEED — [export panel](https://mobbin.com/screens/77f713e4-e7c1-4be4-b9c6-47805b7b267f)
- Adobe Express — [export presets](https://mobbin.com/screens/f9b5b9eb-259d-4208-bc95-13ba3af9bfac)
