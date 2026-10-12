# Accessible media

Video and audio are central to many products — courses, marketing, meetings, social content — and they exclude people
quickly when they lack captions, transcripts or audio description, or when their controls are inaccessible. This
pattern covers what each alternative is for, quality criteria, synchronization, player controls and exporting media
with its accessibility intact.

See also [batches, approvals and captions](batches-approvals-and-captions.md) for caption editing and
[media players](media-players.md) for player design.

## The problem and who has it

- **Deaf and hard-of-hearing people** need captions and transcripts.
- **Blind and low-vision people** need audio description of meaningful visual content, and accessible controls.
- **People with cognitive or learning disabilities** benefit from transcripts, slower playback and clear structure.
- **People in situational contexts** (a quiet library, a noisy train, a second language) use captions too.

## Questions to ask before deciding

- **Is the media prerecorded or live?**
- **What does the visual track convey** that the audio does not (charts, on-screen text, demonstrations)?
- **Which languages** do viewers speak?
- **Who produces captions and descriptions**, and who reviews them?
- **Where does the media travel** (embedded, downloaded, shared to social platforms)?

## Alternatives and what they are for

| Alternative | For | Requirement level (WCAG 2.2) |
| --- | --- | --- |
| **Captions** (prerecorded) | Speech and meaningful sounds, synchronized | 1.2.2, A |
| **Captions** (live) | Live speech | 1.2.4, AA |
| **Transcript** | Reading, searching, people who cannot use the player | Media alternative for audio-only (1.2.1, A); recommended for all |
| **Audio description** | Meaningful visual information in video | 1.2.5, AA (or a media alternative, 1.2.3 A) |
| **Extended audio description** | When pauses are too short for description | 1.2.7, AAA |
| **Sign language** | For people whose first language is a sign language | 1.2.6, AAA |

## Quality criteria

### Captions

- **Accurate**: the words spoken, correct names and terms.
- **Complete**: meaningful sounds ("[door slams]", "[laughter]"), music when relevant, speaker identification.
- **Synchronized**: appear with the speech.
- **Readable**: two lines at most, semantic line breaks, enough time on screen, good contrast.
- **Placed** so they do not cover important visual content (on-screen text, faces when lip reading matters).

### Audio description

- Describes visual information needed to understand the content (actions, scene changes, on-screen text, charts).
- Fits in natural pauses, or uses extended description.
- Neutral and concise.

An alternative design approach: **describe while presenting**. Presenters who say what they show ("As the chart shows,
revenue doubled from 2025 to 2026") reduce the need for separate description.

### Transcripts

- Include speech, speaker names, meaningful sounds and descriptions of visual information.
- Structured with headings and timestamps for long content.
- Linked near the media, in the same language as the content, and searchable.

## Auto-generated captions

Automatic speech recognition is a useful starting point, not a finished product. Errors are common with names,
technical terms, accents and noisy audio — and in languages with less training data. Review before publishing,
especially for educational, legal, medical or marketing content. Label unreviewed captions as automatic.

## Player controls

- All controls keyboard accessible with visible focus and accessible names (see [media players](media-players.md)).
- Captions toggle as a first-level control, with the language shown.
- Caption customization (size, color, background, position) for viewers.
- Audio description track selectable.
- No autoplay with sound (1.4.2, A); pause for moving content (2.2.2, A).

## Multiple languages

- Captions and transcripts per language, translated and reviewed by people who know the language.
- Subtitles (translation for hearing viewers) differ from captions (which include sounds and speakers); label them
  correctly.
- Audio description per language when the audience needs it.

## Exporting and sharing

- **Embed captions** (as a selectable track) when exporting video; burned-in captions (rendered into the image) are
  not selectable or adjustable, but may be the only option for some social platforms — then also provide a text
  alternative.
- **Export transcripts** with the media.
- **When sharing to platforms**, upload caption files rather than relying on platform auto-captions.

## States and edge cases

- Live captions delayed or failing: show a status and offer a transcript after the event.
- Edits to the video that desynchronize captions: re-sync or warn.
- Media without speech (music, ambient): say "No dialogue" so viewers know captions are not missing.

## Accessibility of the authoring tools

The tools to create captions and descriptions should themselves be accessible: keyboard-operable timelines, text
editing for captions, screen reader support for reviewing descriptions.

## Copy

- Caption language labels in the language's own name.
- "Auto-generated" labels when unreviewed.
- Sound descriptions consistent and in the caption's language.

## Common mistakes and why they happen

- **Publishing auto-captions unreviewed.**
- **Captions without sounds or speakers.**
- **No transcript** for podcasts and audio.
- **Visual-only information** (charts, on-screen text) with no description.
- **Burned-in captions only.**

## Worked comparison: a product demo video

**Weak.** A two-minute demo with background music, no narration, on-screen text that flashes by, and auto-captions
reading "[music]". Blind viewers learn nothing; deaf viewers get nothing beyond the visuals; nobody can search it.

**Strong.** The demo is narrated, describing what happens on screen ("Click Create invoice; the client and amount fill
in automatically"); captions are reviewed; a transcript with screenshots is below the video; on-screen text stays long
enough to read; music is low and does not mask speech.

## How to verify and measure

- **Review** captions and descriptions with deaf, hard-of-hearing, blind and low-vision viewers.
- **Check** caption accuracy samples, sync, and reading speed.
- **Measure** caption and transcript usage, and complaints about media accessibility.
