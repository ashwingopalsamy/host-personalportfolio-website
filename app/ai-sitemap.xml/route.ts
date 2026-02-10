import { NextResponse } from "next/server"
import { BASE_URL, PROFILE_LAST_UPDATED } from "@/lib/site-profile"

type SitemapUrl = {
  loc: string
  changefreq: "daily" | "weekly" | "monthly"
  priority: string
}

const AI_SITEMAP_URLS: SitemapUrl[] = [
  { loc: `${BASE_URL}/llms.txt`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/llms-full.txt`, changefreq: "weekly", priority: "0.8" },
  { loc: `${BASE_URL}/ai.txt`, changefreq: "weekly", priority: "0.8" },
  { loc: `${BASE_URL}/api/ai-summary`, changefreq: "daily", priority: "0.8" },
  { loc: `${BASE_URL}/.well-known/openapi.yaml`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE_URL}/.well-known/ai-plugin.json`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE_URL}/.well-known/llms.txt`, changefreq: "weekly", priority: "0.7" },
]

function buildAiSitemapXml() {
  const urls = AI_SITEMAP_URLS.map(
    ({ loc, changefreq, priority }) =>
      `<url><loc>${loc}</loc><lastmod>${PROFILE_LAST_UPDATED}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
  ).join("")

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
}

export const dynamic = "force-static"
export const revalidate = 86400

export async function GET() {
  return new NextResponse(buildAiSitemapXml(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  })
}
