import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/site-profile"

export default function robots(): MetadataRoute.Robots {
  const aiAllowList = [
    "/api/ai-summary",
    "/llms.txt",
    "/llms-full.txt",
    "/ai.txt",
    "/ai-sitemap.xml",
    "/.well-known/llms.txt",
    "/.well-known/openapi.yaml",
    "/.well-known/ai-plugin.json",
    "/Resume_AshwinGopalsamy.pdf",
    "/humans.txt",
  ]

  const restrictedPaths = ["/private/", "/admin/", "/drafts/"]
  const sharedAllow = ["/", ...aiAllowList]
  const sharedDisallow = ["/api/", ...restrictedPaths]
  const sharedRule = {
    allow: sharedAllow,
    disallow: sharedDisallow,
  }

  return {
    rules: [
      {
        userAgent: "*",
        ...sharedRule,
      },
      {
        userAgent: "GPTBot",
        ...sharedRule,
      },
      {
        userAgent: "OAI-SearchBot",
        ...sharedRule,
      },
      {
        userAgent: "ChatGPT-User",
        ...sharedRule,
      },
      {
        userAgent: "ClaudeBot",
        ...sharedRule,
      },
      {
        userAgent: "Claude-SearchBot",
        ...sharedRule,
      },
      {
        userAgent: "Claude-User",
        ...sharedRule,
      },
      {
        userAgent: "Google-Extended",
        ...sharedRule,
      },
      {
        userAgent: "Googlebot",
        ...sharedRule,
      },
      {
        userAgent: "Bingbot",
        ...sharedRule,
      },
      {
        userAgent: "DuckDuckBot",
        ...sharedRule,
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/ai-sitemap.xml`],
    host: BASE_URL,
  }
}
