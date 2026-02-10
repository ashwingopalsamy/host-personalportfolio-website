import { NextResponse } from "next/server"
import { buildLlmsTxt } from "@/lib/site-profile"

export const dynamic = "force-static"
export const revalidate = 86400

export async function GET() {
  return new NextResponse(buildLlmsTxt(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  })
}
