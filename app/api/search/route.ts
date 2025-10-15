import { NextResponse } from "next/server";
import youtubeSearch from "youtube-search";
import SoundCloud from "soundcloud-scraper";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 m"),
});

export async function GET(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  if (!success) return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const page = parseInt(searchParams.get("page") || "1");

  if (!query) return NextResponse.json({ error: "Query manquante" }, { status: 400 });

  // YouTube
  const ytOpts = { maxResults: 10 * page, key: process.env.YOUTUBE_API_KEY };
  const ytResults = await youtubeSearch(query, ytOpts).then((res) => res.results.map((r: any) => ({ ...r, source: "youtube" })));

  // SoundCloud (basique)
  const scClient = new SoundCloud.Client();
  const scResults = await scClient.search(query, "track").then((tracks) => tracks.map((t: any) => ({
    id: t.id,
    title: t.title,
    thumbnail: t.artwork_url,
    duration: t.duration / 1000 + "s",
    views: t.playback_count,
    source: "soundcloud",
    previewUrl: t.stream_url,
  })));

  const combined = [...ytResults, ...scResults.slice(0, 10)]; // Fusionne et limite
  return NextResponse.json(combined);
}
