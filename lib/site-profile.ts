export const BASE_URL = "https://ashwingopalsamy.in"
export const PROFILE_LAST_UPDATED = "2026-02-10"

export const AI_DISCOVERY_PATHS = {
  summaryJson: "/api/ai-summary",
  llms: "/llms.txt",
  llmsFull: "/llms-full.txt",
  aiManifest: "/ai.txt",
  aiSitemap: "/ai-sitemap.xml",
  openapi: "/.well-known/openapi.yaml",
  pluginManifest: "/.well-known/ai-plugin.json",
} as const

type ExperienceEntry = {
  company: string
  role: string
  period: string
  url: string
  highlights: string[]
  technologies: string[]
}

type ProjectEntry = {
  name: string
  description: string
  url: string
  technologies: string[]
}

const absoluteUrl = (path: string) => `${BASE_URL}${path}`

export const profile = {
  name: "Ashwin Gopalsamy",
  headline: "Staff Software Engineer focused on cloud-native backend platforms",
  summary:
    "I build resilient, internet-scale backend systems with Go, AWS, and event-driven architecture, with experience across fintech and platform engineering.",
  role: "Staff Software Engineer",
  currentCompany: "VISA",
  location: "Tamil Nadu, India",
  contact: {
    email: "ashwin2125@icloud.com",
    github: "https://github.com/ashwingopalsamy",
    linkedin: "https://linkedin.com/in/ashwingopalsamy",
    twitter: "https://twitter.com/ashwingopalsamy",
    blog: "https://ashwingopalsamy.substack.com",
    calendar: "https://cal.com/ashwingopalsamy",
  },
  links: {
    website: `${BASE_URL}/`,
    resume: absoluteUrl("/Resume_AshwinGopalsamy.pdf"),
    humans: absoluteUrl("/humans.txt"),
  },
  focusAreas: [
    "Go backend systems",
    "Distributed systems",
    "Cloud-native architecture",
    "Event-driven microservices",
    "Fintech platform engineering",
  ],
  skills: {
    languages: ["Go", "Bash", "Python", "TypeScript"],
    cloudAndPlatform: ["AWS", "Kubernetes", "Terraform", "Docker", "Grafana", "Prometheus"],
    databasesAndTools: ["PostgreSQL", "DynamoDB", "Snowflake", "Sentry", "Jira", "Confluence", "Miro"],
  },
  experience: [
    {
      company: "VISA",
      role: "Staff Software Engineer",
      period: "May 2025 - Present",
      url: "https://www.visa.com",
      highlights: [
        "Works on Pismo, a cloud-native platform for banks and fintechs.",
        "Contributes to reliability and real-time decisioning for high-volume financial systems.",
        "Focuses on long-term platform integrity, modularity, and resilience.",
      ],
      technologies: ["Go", "Distributed Systems", "Cloud Native Architecture", "Event-driven Architecture", "Microservices"],
    },
    {
      company: "Solaris SE",
      role: "Professional Engineer",
      period: "June 2022 - April 2025",
      url: "https://www.solarisgroup.com",
      highlights: [
        "Owned core-banking accounts domain services for interest-bearing products.",
        "Built cloud-native event-sourced microservices for scale and uptime.",
        "Contributed to savings and credit-card interest products as major revenue components.",
      ],
      technologies: ["Go", "AWS", "Kubernetes", "Terraform", "Snowflake", "Microservices", "Distributed Systems"],
    },
    {
      company: "Hexaware",
      role: "Software Engineer Associate",
      period: "June 2021 - June 2022",
      url: "https://hexaware.com",
      highlights: [
        "Contributed to enterprise distributed systems and performance improvements.",
        "Helped deliver cloud HRMS for 75K+ users in a large-scale production environment.",
      ],
      technologies: ["Go", "JavaScript", "Oracle Cloud", "Databases"],
    },
  ] as ExperienceEntry[],
  featuredProjects: [
    {
      name: "UUID v8",
      description: "Open-source Go library for RFC-compliant UUIDv8 generation.",
      url: "https://github.com/ash3in/uuidv8",
      technologies: ["Go", "UUID", "RFC-9562"],
    },
    {
      name: "UUIDCheck",
      description: "Zero-dependency Go utility for validating UUID formats.",
      url: "https://github.com/ashwingopalsamy/uuidcheck",
      technologies: ["Go", "UUID", "RFC-4122", "RFC-9562"],
    },
    {
      name: "VSCode Theme: MacOS Dark",
      description: "Custom VS Code theme for a minimalist, high-contrast dark workflow.",
      url: "https://marketplace.visualstudio.com/items?itemName=ashwingopalsamy.macos-dark-theme",
      technologies: ["VSCode Extension", "Design Tokens"],
    },
  ] as ProjectEntry[],
} as const

export function buildAiSummary() {
  return {
    person: {
      name: profile.name,
      profession: profile.role,
      headline: profile.headline,
      summary: profile.summary,
      location: profile.location,
      currentRole: `${profile.role} at ${profile.currentCompany}`,
      focusAreas: profile.focusAreas,
      skills: profile.skills,
      experience: profile.experience,
      projects: profile.featuredProjects,
      contact: profile.contact,
      portfolio: {
        website: profile.links.website,
        resume: profile.links.resume,
        humansTxt: profile.links.humans,
      },
    },
    metadata: {
      version: "3.0",
      lastUpdated: PROFILE_LAST_UPDATED,
      canonical: profile.links.website,
      format: "application/json",
      purpose: "AI assistant retrieval and factual grounding",
      discovery: {
        llms: absoluteUrl(AI_DISCOVERY_PATHS.llms),
        llmsFull: absoluteUrl(AI_DISCOVERY_PATHS.llmsFull),
        aiManifest: absoluteUrl(AI_DISCOVERY_PATHS.aiManifest),
        aiSitemap: absoluteUrl(AI_DISCOVERY_PATHS.aiSitemap),
        openapi: absoluteUrl(AI_DISCOVERY_PATHS.openapi),
        pluginManifest: absoluteUrl(AI_DISCOVERY_PATHS.pluginManifest),
      },
      keywords: [
        profile.name,
        "Staff Software Engineer",
        "Go Developer",
        "Cloud Native",
        "Distributed Systems",
        "Microservices",
        "Fintech",
      ],
    },
  }
}

export function buildLlmsTxt() {
  return [
    `# ${profile.name}`,
    "",
    `> ${profile.summary}`,
    "",
    "## Canonical",
    profile.links.website,
    "",
    "## Primary Role",
    `${profile.role} at ${profile.currentCompany}`,
    "",
    "## Focus Areas",
    ...profile.focusAreas.map((area) => `- ${area}`),
    "",
    "## Key Links",
    `- Resume: ${profile.links.resume}`,
    `- GitHub: ${profile.contact.github}`,
    `- LinkedIn: ${profile.contact.linkedin}`,
    `- Blog: ${profile.contact.blog}`,
    "",
    "## AI Discovery Endpoints",
    `- JSON summary: ${absoluteUrl(AI_DISCOVERY_PATHS.summaryJson)}`,
    `- Detailed LLM profile: ${absoluteUrl(AI_DISCOVERY_PATHS.llmsFull)}`,
    `- AI manifest: ${absoluteUrl(AI_DISCOVERY_PATHS.aiManifest)}`,
    `- AI sitemap: ${absoluteUrl(AI_DISCOVERY_PATHS.aiSitemap)}`,
    `- OpenAPI: ${absoluteUrl(AI_DISCOVERY_PATHS.openapi)}`,
    "",
    "## Contact",
    `- Email: ${profile.contact.email}`,
    "",
    `Last updated: ${PROFILE_LAST_UPDATED}`,
  ].join("\n")
}

export function buildLlmsFullTxt() {
  return [
    `# ${profile.name} - Full AI Profile`,
    "",
    "## Summary",
    profile.summary,
    "",
    "## Current Role",
    `${profile.role} at ${profile.currentCompany}`,
    "",
    "## Skills",
    "### Languages",
    ...profile.skills.languages.map((skill) => `- ${skill}`),
    "### Cloud and Platform",
    ...profile.skills.cloudAndPlatform.map((skill) => `- ${skill}`),
    "### Databases and Tools",
    ...profile.skills.databasesAndTools.map((skill) => `- ${skill}`),
    "",
    "## Experience",
    ...profile.experience.flatMap((entry) => [
      `### ${entry.company} | ${entry.role} | ${entry.period}`,
      `- Link: ${entry.url}`,
      ...entry.highlights.map((item) => `- ${item}`),
      `- Technologies: ${entry.technologies.join(", ")}`,
      "",
    ]),
    "## Selected Projects",
    ...profile.featuredProjects.flatMap((project) => [
      `### ${project.name}`,
      `- Description: ${project.description}`,
      `- Link: ${project.url}`,
      `- Technologies: ${project.technologies.join(", ")}`,
      "",
    ]),
    "## Source of Truth Endpoints",
    `- JSON summary: ${absoluteUrl(AI_DISCOVERY_PATHS.summaryJson)}`,
    `- OpenAPI spec: ${absoluteUrl(AI_DISCOVERY_PATHS.openapi)}`,
    `- Plugin manifest: ${absoluteUrl(AI_DISCOVERY_PATHS.pluginManifest)}`,
    `- AI sitemap: ${absoluteUrl(AI_DISCOVERY_PATHS.aiSitemap)}`,
    "",
    "## Contact and Identity",
    `- Website: ${profile.links.website}`,
    `- Email: ${profile.contact.email}`,
    `- GitHub: ${profile.contact.github}`,
    `- LinkedIn: ${profile.contact.linkedin}`,
    `- Twitter: ${profile.contact.twitter}`,
    `- Blog: ${profile.contact.blog}`,
    "",
    `Last updated: ${PROFILE_LAST_UPDATED}`,
  ].join("\n")
}

export function buildAiTxt() {
  return [
    "# AI Access Manifest",
    "",
    `canonical: ${profile.links.website}`,
    `name: ${profile.name}`,
    `summary: ${profile.summary}`,
    "",
    "[discovery]",
    `llms = "${absoluteUrl(AI_DISCOVERY_PATHS.llms)}"`,
    `llms_full = "${absoluteUrl(AI_DISCOVERY_PATHS.llmsFull)}"`,
    `summary_json = "${absoluteUrl(AI_DISCOVERY_PATHS.summaryJson)}"`,
    `ai_sitemap = "${absoluteUrl(AI_DISCOVERY_PATHS.aiSitemap)}"`,
    `openapi = "${absoluteUrl(AI_DISCOVERY_PATHS.openapi)}"`,
    `plugin_manifest = "${absoluteUrl(AI_DISCOVERY_PATHS.pluginManifest)}"`,
    "",
    "[contact]",
    `email = "${profile.contact.email}"`,
    `linkedin = "${profile.contact.linkedin}"`,
    `github = "${profile.contact.github}"`,
    "",
    `last_updated = "${PROFILE_LAST_UPDATED}"`,
  ].join("\n")
}
