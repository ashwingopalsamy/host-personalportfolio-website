import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/site-profile"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-02-10T00:00:00.000Z")

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/Resume_AshwinGopalsamy.pdf`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/humans.txt`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ]
}
