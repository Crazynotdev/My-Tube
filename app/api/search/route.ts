import { NextResponse } from "next/server";
import ytsr from "ytsr"; //  npm install ytsr

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) return NextResponse.json({ results: [] });

  try {
    const filters = await ytsr.getFilters(query);
    const videoFilter = filters.get("Type")?.get("Video");
    const searchResults = await ytsr(videoFilter?.url || query, { limit: 12 });

    const results = searchResults.items
      .filter(item => item.type === "video")
      .map(item => ({
        id: item.id,
        title: item.title,
        thumbnail: item.bestThumbnail?.url,
        channel: item.author?.name,
        url: item.url,
      }));

    return NextResponse.json({ results });
  } catch (err) {
    console.error("Erreur YouTube search:", err);
    return NextResponse.json({ results: [] });
  }
}
