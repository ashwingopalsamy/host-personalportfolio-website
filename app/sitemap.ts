import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ashwingopalsamy.in"
  const currentDate = new Date()

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/Resume_AshwinGopalsamy.pdf`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Add sections as hash fragments
  const sections = ["skills", "experience", "projects", "blog", "connect"]
  sections.forEach((section) => {
    routes.push({
      url: `${baseUrl}/#${section}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  })

  return routes
}
