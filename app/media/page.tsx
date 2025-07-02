
import { YouTubeEmbed, InstagramEmbed, SoundCloudEmbed } from "@/components/media-embeds"

const MEDIA_ITEMS = [
  { type: "instagram", postUrl: "https://www.instagram.com/p/BjWQH5VnKEt/", title: "Instagram Example 2" },
  { type: "instagram", postUrl: "https://www.instagram.com/p/C9IOEK7pfjV/", title: "Instagram Example 1" },
  { type: "instagram", postUrl: "https://www.instagram.com/p/C_GGcTmJGJj/", title: "Instagram Example 2" },
  { type: "instagram", postUrl: "https://www.instagram.com/p/C2BW0O8JiYR/?img_index=1", title: "Instagram Example 2" },
  { type: "instagram", postUrl: "https://www.instagram.com/p/CxrK1D1PyYM/", title: "Instagram Example 2" },
  { type: "instagram", postUrl: "https://www.instagram.com/p/CvEbgReOFVp/", title: "Instagram Example 2" },
  { type: "instagram", postUrl: "https://www.instagram.com/p/CjzOP5aAqnx/", title: "Instagram Example 2" },
  { type: "soundcloud", trackUrl: "api.soundcloud.com/tracks/90566490", title: "SoundCloud Example 2" },
  { type: "soundcloud", trackUrl: "api.soundcloud.com/tracks/81921137", title: "SoundCloud Example 2" },
  { type: "soundcloud", trackUrl: "api.soundcloud.com/tracks/116870905", title: "SoundCloud Example 2" },
  { type: "soundcloud", trackUrl: "api.soundcloud.com/tracks/1444548139", title: "SoundCloud Example 1" },
  { type: "youtube", videoId: "BLIj_VFtYiQ", title: "Rainy Evening" },
  { type: "youtube", videoId: "F5FxKzrBt9o", title: "Weekend" },
  { type: "youtube", videoId: "a0NiNnUgwIA", title: "Motorcycle" },
  { type: "youtube", videoId: "0qQU8URK2Q4", title: "SF to Seattle" },
  { type: "youtube", videoId: "HbMJkrEhnqE", title: "Mt Shahsta" },
  { type: "youtube", videoId: "s-2NHXW2HNs", title: "Life" },
]

export default function MediaPage() {
  // Group items by row: each row is [YouTube, Instagram, SoundCloud]
  const rows = [];
  const maxRows = Math.max(
    MEDIA_ITEMS.filter(i => i.type === "youtube").length,
    MEDIA_ITEMS.filter(i => i.type === "instagram").length,
    MEDIA_ITEMS.filter(i => i.type === "soundcloud").length
  );
  const yts = MEDIA_ITEMS.filter(i => i.type === "youtube");
  const instas = MEDIA_ITEMS.filter(i => i.type === "instagram");
  const scs = MEDIA_ITEMS.filter(i => i.type === "soundcloud");
  for (let i = 0; i < maxRows; i++) {
    rows.push({
      youtube: yts[i],
      instagram: instas[i],
      soundcloud: scs[i],
    });
  }

  return (
    <section className="container pb-8 pt-2 md:py-10">
      <div className="mb-8 w-full text-left">
        <h1 className="text-3xl font-bold mb-2">My Creative World</h1>
        <p className="text-muted-foreground text-lg max-w-5xl">
          Outside of my professional life, I find immense joy in exploring creative pursuits that fuel my curiosity and passion. Whether it's capturing moments through photography and video, sharing stories and inspiration on Instagram, or composing and mixing music, these projects are where I truly express myself. I adore the process of making, experimenting, and connecting with others through art, sound, and visuals. This page is a window into the creative side of my life—one that keeps me inspired, balanced, and always learning.
        </p>
      </div>
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          {rows.map((row, idx) =>
            row.youtube && row.youtube.videoId ? (
              <YouTubeEmbed key={row.youtube.videoId + idx} videoId={row.youtube.videoId} title={row.youtube.title} />
            ) : <div key={"yt-empty-"+idx}></div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {rows.map((row, idx) =>
            row.instagram && row.instagram.postUrl ? (
              <InstagramEmbed key={row.instagram.postUrl + idx} postUrl={row.instagram.postUrl} title={row.instagram.title} />
            ) : <div key={"insta-empty-"+idx}></div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {rows.map((row, idx) =>
            row.soundcloud && row.soundcloud.trackUrl ? (
              <SoundCloudEmbed key={row.soundcloud.trackUrl + idx} trackUrl={row.soundcloud.trackUrl} title={row.soundcloud.title} />
            ) : <div key={"sc-empty-"+idx}></div>
          )}
        </div>
      </div>
    </section>
  )
}
