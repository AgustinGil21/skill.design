# Video upload, advanced search and live activities

Three patterns grouped for convenience: **uploading and publishing video** (large files, long processing, many
settings), **advanced search and query builders** (precise logic for expert users), and **live activities and
widgets** (glanceable status on lock screens and home screens). Each deals with a process or a logic that people
cannot see directly and must trust.

## Video upload and publishing

### The problem and who has it

Creators, educators and businesses upload large video files that take minutes to transfer and longer to process. They
want to fill in details while waiting, know when the video is really ready, and avoid publishing something broken.

### Questions to ask before deciding

- **What are the requirements** (duration, resolution, aspect ratio, size, formats)?
- **What happens after upload**: transcoding, thumbnails, captions, checks? How long?
- **Can publishing happen before all qualities are ready?**
- **What if the connection drops or the tab closes?**

### Anatomy and behavior

- **Requirements before choosing the file**: duration, minimum resolution, aspect ratio, size and formats ("20–60 s ·
  1280×720 · 16:9 · up to 5 GB · mp4, mov"; [Fiverr](https://mobbin.com/screens/d0fda4fd-b04e-4a1c-9f4f-1c6d4516d267),
  [The Leap](https://mobbin.com/screens/fb6a4c8e-280b-44be-99d2-b2e072e7f17c)).
- **Fill in details while uploading**: progress ("Uploading 51 %") stays in place and the form (title, description,
  tags) can already be filled ([Patreon](https://mobbin.com/screens/03822e19-93e2-4334-a828-d105ccf9fba8)).
- **Different states for upload and processing**: uploaded is not ready ("Processing" on the thumbnail;
  [Air](https://mobbin.com/screens/8bd82e1c-8a69-4487-8c06-b73a8d26eb6e)), with a notice when done ("Upload complete ·
  3 items").
- **A selectable cover** from frames or a custom image ("Edit cover";
  [TikTok](https://mobbin.com/screens/9d751778-eabe-482b-9516-d538ff62720a),
  [Vimeo](https://mobbin.com/screens/13f47f6c-b6da-40d9-99b6-8c3fcff25395)).
- **When and for whom**: Now / Schedule, visibility ("Who can watch"), extra options collapsed.
- **A preview in the destination format** beside the form (the video inside a phone frame, TikTok).
- **Optional pre-checks** (copyright, quality) with what they do; authorship declaration when relevant (Fiverr).
- **Captions and audio in other languages** as separate files (VTT, SRT; Vimeo).
- **Guidance on the side**, not in a modal: what to say, what equipment to use, examples (Fiverr).
- **Technical data at hand** in the file detail (codec, resolution, bit rate;
  [Frame.io](https://mobbin.com/screens/47e3ef66-fad0-4e83-95b6-5f4653967a80)).
- **Closing the tab** should not cancel silently: warn "The upload will be cancelled" or continue in the background.

### Partially processed video and recovery

| Situation | Design |
| --- | --- |
| Low quality ready, high quality processing | Allow publishing with "HD available in ~10 min", or wait — let the creator choose |
| Captions failed to generate | Publish without them only with a clear warning; offer retry |
| Processing failed | Explain the stage and the reason (unsupported codec), suggest a fix |
| Upload interrupted | Resume from where it stopped, not from zero |
| Duplicate upload | "You uploaded this video on 3 Oct. Upload again?" |

## Advanced search and query builders

### When to expose advanced logic

Most people never need AND/OR groups. Expose advanced search for experts and for repeated, precise needs (support
agents, researchers, analysts), while keeping simple search simple.

### Anatomy and behavior

- **A condition = field + operator + value**, each a selector, with "+ Condition" and All (AND) / Any (OR) at the top
  ([beehiiv](https://mobbin.com/screens/6cc5a7c8-92a3-4656-8305-412ebd97ebda),
  [Braintrust](https://mobbin.com/screens/70b8ceb1-38fa-4fd6-9a2d-f75b68110533)).
- **Operators in human language** by type (text: contains / doesn't contain / is; number: greater than; date: before /
  after) ([Qatalog](https://mobbin.com/screens/3f10c158-e82b-4348-92cd-15471e3467df)).
- **Fields with examples** of what they do ("All these words", "This exact phrase", "None of these words";
  [X](https://mobbin.com/screens/3c3cc7a3-c632-47d4-a6ed-706d5ef26812)).
- **Form and written query in sync**: filling filters builds the text (`tags:2D status:open after:2024-12-31`) and
  typing fills the filters ([Unity](https://mobbin.com/screens/c5e90f45-e761-4154-933b-8fdb50f58387)); Basic / Advanced
  modes (Braintrust).
- **Boolean expressions for those who know them** in a separate field, with "Save and search"
  ([Juicebox](https://mobbin.com/screens/48ebbbc1-2267-492a-95c7-207b85862a25)).
- **Ranges as sliders or two fields** (min ↔ max) and dates with shortcuts (Today, 7 days, 30 days;
  [Exa](https://mobbin.com/screens/a9163a4a-23a3-4058-b64c-67c27651d2e6)).
- **Save the search or view** ("Unsaved view · Save"), and the number of active filters on the button ("Filters 2";
  [Elicit](https://mobbin.com/screens/0413c8c7-a017-451a-b093-f6fe99d4c20e)).
- **Apply / Cancel** when many filters are set together; live when it is one.
- **"Clear all conditions"** visible; the result shows how many match.

### Explaining a query

- **Precedence**: show grouping explicitly ("(Status is Open OR Pending) AND Owner is Laila"); never rely on people
  knowing operator precedence.
- **Nulls**: say how empty values behave ("Items without a due date are excluded").
- **A plain-language summary** of the whole query above the results.

### Converting between modes without loss

Some advanced queries cannot be represented in the simple mode. When switching back, warn: "This query uses grouped
conditions that the basic view can't show. Switching will remove the groups." Never drop conditions silently.

## Live activities and widgets (lock screen, home screen)

### When to use them

- **Only for something in progress with an end** (an order, a ride, a workout, an upload), not advertising.
- **Privacy**: lock screens are visible to others; avoid sensitive details (health, messages, amounts) or let people
  hide them.

### Anatomy and behavior

- **The fact that matters, large** ("Arrives in 5 min", "15 min to destination") and context small (address, ETA;
  [Lugg](https://mobbin.com/screens/38cf885b-a1e4-4b26-a84a-7e06ddf64e37),
  [Zomato](https://mobbin.com/screens/91ace382-39ab-41ea-b09f-0e9700d2eec4)).
- **Stages as a bar with milestones** (Received · Preparing · Ready;
  [Wonder](https://mobbin.com/screens/e3af3b8e-851f-49e9-b23b-dbc679d71c51)) or continuous progress with time left
  ([Tinder](https://mobbin.com/screens/7331a549-d8dc-4fed-ba4c-140854eedc5c)).
- **A direct action when it saves opening the app** (mark a set done;
  [Hevy](https://mobbin.com/screens/184c2861-65d0-4764-a3d3-6808a961264e)).
- **Few, large figures** (distance, time, pace; [Runbuds](https://mobbin.com/screens/8ebcad43-ccca-4a8e-81c2-70a0496a0393));
  a minimal version with a single number in compact presentations.
- **Legible on any background**; updates by itself and disappears when finished.
- **Freshness**: if updates stop (no connection), show the last update time rather than stale data as current.
- **Actions that fail** (no connection, expired session) explain and open the app at the right place.
- It is the mobile version of [tracking and offline](tracking-and-offline.md).

## Accessibility specifics

- Upload progress and processing states announced; forms usable during upload.
- Query builders with labeled selectors, keyboard operable, and the summary readable.
- Live activities and widgets with accessible labels; large text support.

## Copy

- Requirements stated before upload.
- Query summaries in plain language.
- Live activity text short and specific.

## Common mistakes and why they happen

- **"Uploaded" shown as ready.**
- **Uploads lost on tab close.**
- **Hidden operator precedence.**
- **Silent loss when switching query modes.**
- **Live activities used for promotion or showing private data.**

## Worked comparison

**Weak.** A course creator uploads a 2 GB lesson; the page says "Done!" after transfer; she publishes; students get
"Video unavailable" for 20 minutes while it processes.

**Strong.** After transfer, "Processing · about 15 min · You can publish now; students will see it when it's ready, or
schedule for when processing finishes." The creator schedules publication automatically on readiness.

## How to verify and measure

- **Measure** upload failures and resumes, time to ready, publications before ready; advanced search usage and saved
  searches; live activity engagement and dismissals.
- **Test** with large files and poor networks; with complex queries; with lock-screen privacy settings.

## References

- Fiverr — [requirements and guidance](https://mobbin.com/screens/d0fda4fd-b04e-4a1c-9f4f-1c6d4516d267)
- The Leap — [requirements before upload](https://mobbin.com/screens/fb6a4c8e-280b-44be-99d2-b2e072e7f17c)
- Patreon — [form while uploading](https://mobbin.com/screens/03822e19-93e2-4334-a828-d105ccf9fba8)
- Air — [processing state](https://mobbin.com/screens/8bd82e1c-8a69-4487-8c06-b73a8d26eb6e)
- TikTok — [cover selection and preview](https://mobbin.com/screens/9d751778-eabe-482b-9516-d538ff62720a)
- Vimeo — [cover and caption files](https://mobbin.com/screens/13f47f6c-b6da-40d9-99b6-8c3fcff25395)
- Frame.io — [technical data](https://mobbin.com/screens/47e3ef66-fad0-4e83-95b6-5f4653967a80)
- beehiiv — [condition builder](https://mobbin.com/screens/6cc5a7c8-92a3-4656-8305-412ebd97ebda)
- Braintrust — [condition builder and modes](https://mobbin.com/screens/70b8ceb1-38fa-4fd6-9a2d-f75b68110533)
- Qatalog — [operators by type](https://mobbin.com/screens/3f10c158-e82b-4348-92cd-15471e3467df)
- X — [fields with examples](https://mobbin.com/screens/3c3cc7a3-c632-47d4-a6ed-706d5ef26812)
- Unity — [form and query in sync](https://mobbin.com/screens/c5e90f45-e761-4154-933b-8fdb50f58387)
- Juicebox — [boolean expressions](https://mobbin.com/screens/48ebbbc1-2267-492a-95c7-207b85862a25)
- Exa — [ranges and date shortcuts](https://mobbin.com/screens/a9163a4a-23a3-4058-b64c-67c27651d2e6)
- Elicit — [save view and filter count](https://mobbin.com/screens/0413c8c7-a017-451a-b093-f6fe99d4c20e)
- Lugg — [live activity](https://mobbin.com/screens/38cf885b-a1e4-4b26-a84a-7e06ddf64e37)
- Zomato — [live activity](https://mobbin.com/screens/91ace382-39ab-41ea-b09f-0e9700d2eec4)
- Wonder — [stages bar](https://mobbin.com/screens/e3af3b8e-851f-49e9-b23b-dbc679d71c51)
- Tinder — [continuous progress](https://mobbin.com/screens/7331a549-d8dc-4fed-ba4c-140854eedc5c)
- Hevy — [direct action](https://mobbin.com/screens/184c2861-65d0-4764-a3d3-6808a961264e)
- Runbuds — [large figures](https://mobbin.com/screens/8ebcad43-ccca-4a8e-81c2-70a0496a0393)
