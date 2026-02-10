import { NextResponse } from "next/server"
import { buildAiSummary, BASE_URL } from "@/lib/site-profile"

export const dynamic = "force-static"
export const revalidate = 3600

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

export async function GET() {
  const payload = buildAiSummary()

  return NextResponse.json(payload, {
    status: 200,
    headers: {
      ...corsHeaders,
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      Link: [
        `<${BASE_URL}/llms.txt>; rel="describedby"; type="text/plain"`,
        `<${BASE_URL}/llms-full.txt>; rel="alternate"; type="text/plain"`,
      ].join(", "),
    },
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export async function POST() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { Allow: "GET, OPTIONS", ...corsHeaders } },
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { Allow: "GET, OPTIONS", ...corsHeaders } },
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: { Allow: "GET, OPTIONS", ...corsHeaders } },
  )
}
