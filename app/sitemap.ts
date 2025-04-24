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
  sections.forEach((section, index) => {
    routes.push({
      url: `${baseUrl}/#${section}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9 - index * 0.05, // Decreasing priority for each section
    })
  })

  // Add blog posts if they exist
  const blogPosts = [
    {
      slug: "event-sourcing-in-go",
      date: new Date("2025-05-30"),
    },
  ]

  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  })

  return routes
}
