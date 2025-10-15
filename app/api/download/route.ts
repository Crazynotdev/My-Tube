import { NextResponse } from "next/server";
import ytdl from "ytdl-core";
import { Client } from "soundcloud-scraper";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("videoId");
  const format = searchParams.get("format");
  const source = searchParams.get("source") || "youtube";

  if (!id || !format) return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 });

  let formats: { quality: string; url: string }[] = [];

  if (source === "youtube") {
    const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`);
    formats = (format === "mp3"
      ? ytdl.filterFormats(info.formats, "audioonly")
      : ytdl.filterFormats(info.formats, "audioandvideo")
    ).map((f) => ({
      quality: f.qualityLabel || (f.audioBitrate ? f.audioBitrate + "kbps" : "unknown"),
      url: f.url,
    }));
  } else if (source === "soundcloud") {
    const scClient = new Client();
    try {
      const track = await scClient.getSong(id);
      formats = [{ quality: "128kbps", url: track.downloadURL || track.streamURL }];
    } catch (error) {
      return NextResponse.json({ error: "Piste SoundCloud introuvable ou inaccessible" }, { status: 404 });
    }
  }

  return NextResponse.json({ formats });
}
