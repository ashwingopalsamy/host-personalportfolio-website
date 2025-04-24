import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ashwingopalsamy.in"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/api/", "/*.json$", "/admin/", "/drafts/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
