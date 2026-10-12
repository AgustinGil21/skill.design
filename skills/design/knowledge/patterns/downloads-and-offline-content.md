# Downloads and offline content

Downloads let people take content with them: videos for a flight, lessons for a commute, maps for a trip. The design
must make clear what is available offline, how much space it uses, and what "downloaded" really means — because a
downloaded file can still be unavailable if its license expired, the session ended or the file is corrupted.

For syncing user-created work offline, see [tracking and offline](tracking-and-offline.md).

## The problem and who has it

- **People preparing for no connection** (travel, commutes, poor coverage).
- **People on limited data plans** who download on Wi-Fi.
- **People with full devices** who need to manage space.

When downloads fail: content is missing when needed, data plans are consumed unexpectedly, storage fills up, and
downloaded content refuses to play offline.

## Questions to ask before deciding

- **What can be downloaded**, and are there limits (number of downloads, expiry, devices)?
- **How large** are items, and at which qualities?
- **What happens on network changes** (Wi-Fi to cellular)?
- **When does downloaded content expire**, and does it need periodic online checks?
- **What happens on sign-out** or account change?

## Downloaded, available and expired

| State | Meaning | Display |
| --- | --- | --- |
| Queued | Waiting to download | "Waiting for Wi-Fi" or "In queue" |
| Downloading | In progress | Progress, size, pause |
| Downloaded and available | Playable offline | An offline badge |
| Downloaded but expiring | License ends soon | "Expires in 2 days · Renew online" |
| Downloaded but unavailable | License expired, session invalid, region change | "Connect to renew this download" |
| Failed or corrupted | Incomplete file | "Download failed · Retry" |

## Anatomy and behavior

- **Two groups: Downloading (with progress and pause) and Downloaded** ([Skillshare](https://mobbin.com/screens/c5d27450-a0dc-48c5-bb97-f40087d76433)).
- **Device storage as a bar** (used by the app · other · free; [HBO Max](https://mobbin.com/screens/d9a2fca3-d30a-424a-befb-a9d3f4454ea9))
  and size per item.
- **Remove one (×) and edit for several** (Select all · Delete; [Apple TV](https://mobbin.com/screens/8f1bc04c-9d1e-4227-8202-c780fcea2bac));
  "Delete all downloads" at the end ([Headspace](https://mobbin.com/screens/43d841d6-90be-4f12-8082-874271af24ea)).
- **A queue with status per file** (Complete · 0:27 remaining · Waiting) and "Step 2 of 4" at the top; if people must
  stay on the screen, say so ([GoPro Quik](https://mobbin.com/screens/d9d1710a-5585-42da-ae77-c4811a8ed7b0)).
- **Recommend Wi-Fi for large downloads** with the size stated ("Up to 4 GB";
  [Glow](https://mobbin.com/screens/37c73ea5-7d11-44f9-b6c0-b00e294622e7)).
- **Download settings** (quality, Wi-Fi only, delete after watching) at hand, with their size impact.
- **Filters and sorting** when there are many ("Recently added", type;
  [Mindvalley](https://mobbin.com/screens/9ea2ac57-fb38-4ad8-bd4e-74fa00a3e497)).
- **Mark offline availability across the app** (a badge on cards), and when offline, show downloaded content first.

## Edge cases

- Storage full in the middle of a download: pause, explain, offer to free space.
- Downloads interrupted by app updates or OS cleanup.
- Several devices with download limits ("Downloaded on 3 of 4 devices").
- Content removed from the catalog after downloading.
- Subtitles and audio tracks: download with the content, in the chosen languages.

## Accessibility specifics

- Progress announced at meaningful intervals; completion announced.
- Offline badges with text equivalents.
- Caption and audio description tracks included in downloads.

## Copy

- Sizes in the locale's format; time estimates honest.
- Expiry dates in the person's date format.

## Common mistakes and why they happen

- **"Downloaded" that does not play offline.**
- **Large downloads over cellular data by default.**
- **No storage management.**
- **Subtitles not downloaded with the video.**

## Worked comparison

**Weak.** A traveler downloads a series; on the plane, episodes show "Downloaded" but refuse to play because the
license requires an online check every 48 hours; nothing warned about it.

**Strong.** Before departure, "3 episodes expire in 1 day · Renew while online" appeared in the downloads screen and as
a notification; the traveler renewed them; captions in two languages were included.

## How to verify and measure

- **Test** offline playback after time passes, storage-full scenarios, and network switches.
- **Measure** failed offline plays, download failures, and storage-related support contacts.

## References

- Skillshare — [downloading and downloaded groups](https://mobbin.com/screens/c5d27450-a0dc-48c5-bb97-f40087d76433)
- HBO Max — [storage bar](https://mobbin.com/screens/d9a2fca3-d30a-424a-befb-a9d3f4454ea9)
- Apple TV — [edit and delete several](https://mobbin.com/screens/8f1bc04c-9d1e-4227-8202-c780fcea2bac)
- Headspace — [delete all downloads](https://mobbin.com/screens/43d841d6-90be-4f12-8082-874271af24ea)
- GoPro Quik — [queue with status per file](https://mobbin.com/screens/d9d1710a-5585-42da-ae77-c4811a8ed7b0)
- Glow — [Wi-Fi recommendation with size](https://mobbin.com/screens/37c73ea5-7d11-44f9-b6c0-b00e294622e7)
- Mindvalley — [filters and sorting](https://mobbin.com/screens/9ea2ac57-fb38-4ad8-bd4e-74fa00a3e497)
