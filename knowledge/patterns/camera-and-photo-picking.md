# Camera and photo picking

Capturing a photo and choosing images from a library look simple but involve permissions, privacy, quality and
recovery. The question that decides most of the design: does the product need its own camera experience, or is the
system camera or picker enough?

## The problem and who has it

- **People sharing moments** (social apps): speed and expression.
- **People documenting** (receipts, IDs, damage for a claim, a product listing): legibility and completeness.
- **People choosing from their library**: finding the right photos and controlling what is shared (location, faces).

## Questions to ask before deciding

- **What is the photo for**, and what minimum quality does that require (a readable document vs. a casual photo)?
- **Native picker or custom?** What does custom add that the system does not?
- **One photo or several?** Does order matter?
- **What metadata travels** (location, time, device)?
- **What happens when capture fails** (low light, blur, camera in use, storage full)?

## Native picker or custom camera?

| Need | Option | Why |
| --- | --- | --- |
| Choose existing photos | **System picker** | Familiar, accessible, no full library permission needed |
| Take a quick photo | **System camera** | Familiar, reliable |
| Scan documents | **Custom or system document scanner** | Edge detection, perspective correction, multi-page |
| Social capture with effects | **Custom camera** | Effects, modes, speed |
| Guided capture (ID verification, damage photos) | **Custom with guidance** | Overlays, checks for quality |

Use the system picker and camera when they suffice: they are known, accessible and respect the platform's privacy
model (limited library access). Build custom only for capabilities that matter.

## Anatomy and behavior: camera

- **A large shutter at the bottom center**, in thumb reach; on one side the last photo or gallery, on the other switch
  camera ([WhatsApp](https://mobbin.com/screens/00500990-5c3c-4885-8f03-48b26913884a),
  [Lapse](https://mobbin.com/screens/daf833c8-99c8-4e8c-9e37-77fbc379457e)).
- **Modes as scrollable text below the shutter** (Video · Photo · Document), the current one highlighted
  ([Outlook](https://mobbin.com/screens/f580805b-6c71-4df2-a2e4-444cfb774627),
  [Shopee](https://mobbin.com/screens/a8af8e0e-c4a8-4f5f-b0c1-236dcb107961)). The shutter changes shape or color in
  video.
- **Zoom as chips** (.5 · 1× · 2×) above the shutter.
- **Secondary controls in a labeled column** (Flip, Flash, Timer, Grid), collapsible
  ([Snapchat](https://mobbin.com/screens/55bb3f71-3a46-4f24-9e09-f93fb17b1716)); with icons alone, at least accessible
  labels.
- **Automatic settings visible** ("Auto-capture on"; [Apple Notes](https://mobbin.com/screens/08fc9d6a-832f-47db-a471-1211ee828999))
  and captured items accumulated in a thumbnail with a count.
- **Close (×) at the top start**; "Done" at the top end when capturing several.
- **Specialized modes** (document, whiteboard) that detect edges and correct perspective.
- **Without camera permission**: explain why and offer a button to Settings; offer choosing from the library instead.

### Capture, review and confirm

For documents and evidence, a review step prevents unusable submissions:

- After capture, show the photo with "Retake" and "Use photo".
- **Check quality automatically** where possible (blur, glare, cropped edges): "The text looks blurry — retake?"
- For multi-page documents, show all pages with reorder and delete.

### Interruptions and recovery

| Event | Design |
| --- | --- |
| Camera in use by another app | "The camera is being used by another app" with retry |
| Low light | Suggest flash or more light; for documents, warn before submitting |
| Storage full | Explain and offer to free space or upload without saving locally |
| Phone call or app switch | Keep captured items; resume |
| Permission revoked | Explain and link to Settings |

## Anatomy and behavior: choosing from the library

- **A grid with recent photos first**, tabs Photos / Albums and search
  ([Retro](https://mobbin.com/screens/edd60331-89c5-4a5d-a0b0-e25b78b1c04e),
  [Apple Invites](https://mobbin.com/screens/256bb7df-a0a2-4a66-87f8-7046d6ccc313)).
- **Multi-selection with order numbers** when order matters (1, 2, 3;
  [Shopee](https://mobbin.com/screens/f290c6d3-58be-49e9-bcfd-a24808a478c8)) and checks when it does not.
- **The limit stated and a counter on the button** ("You can choose 3 · Next (3)"; "1 of 6 chosen",
  [Tinder](https://mobbin.com/screens/0784f517-2a0b-486f-ab8e-dd509574a30b)).
- **A tray of chosen items** at the bottom with remove (×) and "Show selected (5)" (Apple Invites).
- **Duration on videos** over the thumbnail.
- **Camera access from the picker** ([Tripadvisor](https://mobbin.com/screens/9c5b81b6-17b3-4ece-84e7-f8eb267b4042)).
- **Privacy stated**: "Location is included · Options" to remove it before sharing
  ([Particle](https://mobbin.com/screens/286b2cbd-fff8-425b-b350-eb45bb957395)).
- **Limited system access** (only some photos): show it and offer "Choose more" without requesting full access.

### Remote and incompatible files

- Photos stored in the cloud may need downloading before use: show progress per item.
- Formats the product cannot handle (some HEIC or RAW variants): convert automatically or explain.
- Very large files: compress with a note, or explain limits.
- **Selecting a photo is not the same as having the file**: handle download failures per item.

## Accessibility specifics

- Camera controls labeled; the shutter reachable and announced; capture confirmation announced.
- Guidance for alignment given by voice or text for blind and low-vision users (for example, "Document detected, hold
  still").
- Pickers with labeled images (date, album) and selection state announced.
- Captured images can receive alternative text before posting.

## Copy

- Permission explanations with the concrete benefit.
- Quality warnings specific ("Part of the receipt is cut off").
- Limits stated before choosing.

## Common mistakes and why they happen

- **Custom pickers that ask for full library access.**
- **No review step for documents** — blurry submissions rejected days later.
- **Location metadata shared silently.**
- **Captured photos lost on interruption.**

## Worked comparison: a social photo vs. a document scan

**Social photo.** Speed matters: open camera, shoot, apply a filter, post. A review step would slow it down; location
is off by default and can be added.

**Document scan for an insurance claim.** Legibility matters: edge detection, automatic capture when steady, a review
with "The bottom edge is cut off — retake", multi-page ordering, and a final check before submission. Speed is
secondary to getting it right once.

## How to verify and measure

- **Test** in low light, with interruptions, with limited library access, and with VoiceOver and TalkBack.
- **Measure** retakes, rejected submissions for quality, permission grant rates, time to capture.

## References

- WhatsApp — [camera layout](https://mobbin.com/screens/00500990-5c3c-4885-8f03-48b26913884a)
- Lapse — [camera layout](https://mobbin.com/screens/daf833c8-99c8-4e8c-9e37-77fbc379457e)
- Outlook — [modes below the shutter](https://mobbin.com/screens/f580805b-6c71-4df2-a2e4-444cfb774627)
- Shopee — [modes below the shutter](https://mobbin.com/screens/a8af8e0e-c4a8-4f5f-b0c1-236dcb107961)
- Snapchat — [labeled secondary controls](https://mobbin.com/screens/55bb3f71-3a46-4f24-9e09-f93fb17b1716)
- Apple Notes — [auto-capture state](https://mobbin.com/screens/08fc9d6a-832f-47db-a471-1211ee828999)
- Retro — [photo grid](https://mobbin.com/screens/edd60331-89c5-4a5d-a0b0-e25b78b1c04e)
- Apple Invites — [chosen tray](https://mobbin.com/screens/256bb7df-a0a2-4a66-87f8-7046d6ccc313)
- Shopee — [ordered multi-select](https://mobbin.com/screens/f290c6d3-58be-49e9-bcfd-a24808a478c8)
- Tinder — [limit and counter](https://mobbin.com/screens/0784f517-2a0b-486f-ab8e-dd509574a30b)
- Tripadvisor — [camera from picker](https://mobbin.com/screens/9c5b81b6-17b3-4ece-84e7-f8eb267b4042)
- Particle — [location privacy](https://mobbin.com/screens/286b2cbd-fff8-425b-b350-eb45bb957395)
