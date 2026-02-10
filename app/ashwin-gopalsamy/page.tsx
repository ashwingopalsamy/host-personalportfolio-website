import type { Metadata } from "next"
import Link from "next/link"
import { GlassContainer } from "@/components/ui/glass-container"
import { BASE_URL, PROFILE_LAST_UPDATED, profile } from "@/lib/site-profile"

const canonicalPath = "/ashwin-gopalsamy"
const canonicalUrl = `${BASE_URL}${canonicalPath}`

export const metadata: Metadata = {
  title: "Ashwin Gopalsamy | Canonical Profile",
  description:
    "Canonical profile page for Ashwin Gopalsamy, Staff Software Engineer specializing in cloud-native backend development, distributed systems, and fintech platforms.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "profile",
    url: canonicalUrl,
    title: "Ashwin Gopalsamy | Staff Software Engineer",
    description: profile.summary,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ashwin Gopalsamy profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Gopalsamy | Canonical Profile",
    description: profile.summary,
    images: [`${BASE_URL}/og-image.png`],
  },
}

const allSkills = [
  ...profile.skills.languages,
  ...profile.skills.cloudAndPlatform,
  ...profile.skills.databasesAndTools,
]

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${canonicalUrl}#person`,
  name: profile.name,
  url: canonicalUrl,
  image: `${BASE_URL}/dp.jpeg`,
  description: profile.summary,
  jobTitle: profile.role,
  email: profile.contact.email,
  sameAs: [
    profile.contact.github,
    profile.contact.linkedin,
    profile.contact.twitter,
    profile.contact.blog,
    profile.links.website,
  ],
  worksFor: {
    "@type": "Organization",
    name: profile.currentCompany,
  },
  homeLocation: {
    "@type": "Place",
    name: profile.location,
  },
  knowsAbout: [...profile.focusAreas, ...allSkills],
  mainEntityOfPage: canonicalUrl,
}

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${canonicalUrl}#profile`,
  url: canonicalUrl,
  name: `${profile.name} | Canonical Profile`,
  description: profile.summary,
  inLanguage: "en-US",
  dateModified: PROFILE_LAST_UPDATED,
  mainEntity: {
    "@id": `${canonicalUrl}#person`,
  },
}

export default function AshwinGopalsamyProfilePage() {
  return (
    <div className="pb-20 pt-32">
      <section className="container-custom">
        <GlassContainer className="p-6 md:p-8" intensity="high">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="section-title mb-0">CANONICAL PROFILE</p>
              <h1 className="heading-lg">{profile.name}</h1>
              <p className="max-w-4xl text-lg text-muted-foreground">{profile.summary}</p>
              <p className="text-sm text-muted-foreground">Last updated: {PROFILE_LAST_UPDATED}</p>
            </header>

            <section className="space-y-3">
              <h2 className="heading-sm">Current Role</h2>
              <p className="text-lg text-muted-foreground">
                {profile.role} at {profile.currentCompany} | {profile.location}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="heading-sm">Focus Areas</h2>
              <ul className="grid gap-2 text-lg text-muted-foreground md:grid-cols-2">
                {profile.focusAreas.map((focus) => (
                  <li key={focus}>- {focus}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-sm">Experience Snapshot</h2>
              <div className="space-y-4">
                {profile.experience.map((exp) => (
                  <article key={`${exp.company}-${exp.period}`} className="rounded-2xl border border-foreground/10 p-4">
                    <h3 className="text-xl font-semibold">
                      {exp.company} | {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <ul className="mt-3 space-y-1 text-base text-muted-foreground">
                      {exp.highlights.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="heading-sm">Verified Links</h2>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>
                  Website:{" "}
                  <Link className="text-primary underline-offset-4 hover:underline" href={profile.links.website}>
                    {profile.links.website}
                  </Link>
                </li>
                <li>
                  Resume:{" "}
                  <Link className="text-primary underline-offset-4 hover:underline" href={profile.links.resume}>
                    {profile.links.resume}
                  </Link>
                </li>
                <li>
                  GitHub:{" "}
                  <Link className="text-primary underline-offset-4 hover:underline" href={profile.contact.github}>
                    {profile.contact.github}
                  </Link>
                </li>
                <li>
                  LinkedIn:{" "}
                  <Link className="text-primary underline-offset-4 hover:underline" href={profile.contact.linkedin}>
                    {profile.contact.linkedin}
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="heading-sm">AI Discovery Links</h2>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>
                  <Link className="text-primary underline-offset-4 hover:underline" href={`${BASE_URL}/llms.txt`}>
                    {BASE_URL}/llms.txt
                  </Link>
                </li>
                <li>
                  <Link className="text-primary underline-offset-4 hover:underline" href={`${BASE_URL}/llms-full.txt`}>
                    {BASE_URL}/llms-full.txt
                  </Link>
                </li>
                <li>
                  <Link className="text-primary underline-offset-4 hover:underline" href={`${BASE_URL}/api/ai-summary`}>
                    {BASE_URL}/api/ai-summary
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </GlassContainer>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </div>
  )
}
