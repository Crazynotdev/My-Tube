import { NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("videoId");
  const format = searchParams.get("format");

  if (!id || !format) {
    return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 });
  }

  try {
    const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`);

    const filter: "audioonly" | "audioandvideo" =
      format === "mp3" ? "audioonly" : "audioandvideo";

    const formats = ytdl
      .filterFormats(info.formats, filter)
      .map((f) => ({
        quality: f.qualityLabel || (f.audioBitrate ? f.audioBitrate + "kbps" : "unknown"),
        url: f.url,
      }));

    return NextResponse.json({ formats });
  } catch (err) {
    return NextResponse.json(
      { error: "Impossible de récupérer les formats de la vidéo" },
      { status: 500 }
    );
  }
}
