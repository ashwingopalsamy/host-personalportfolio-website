"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Optimize font loading with display swap and preload
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
    fallback: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
    ],
})

// Define base URL for canonical links and metadata
const baseUrl = "https://ashwingopalsamy.in"

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
        <head>
            <title>Ashwin Gopalsamy | Portfolio</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="manifest" href="/manifest.json" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://plausible.io" />

            {/* Identity verification links */}
            <link rel="me" href="https://github.com/ashwingopalsamy" />
            <link rel="me" href="https://linkedin.com/in/ashwingopalsamy" />
            <link rel="me" href="https://twitter.com/ashwingopalsamy" />

            {/* Preload critical assets */}
            <link rel="preload" href="/dp.jpeg" as="image" fetchPriority="high" />
            <link
                rel="preload"
                href="/logo-dark.png"
                as="image"
                media="(prefers-color-scheme: dark)"
                fetchPriority="high"
            />
            <link
                rel="preload"
                href="/logo-light.png"
                as="image"
                media="(prefers-color-scheme: light)"
                fetchPriority="high"
            />

            {/* DNS prefetch for external resources */}
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            <link rel="dns-prefetch" href="https://plausible.io" />

            {/* OpenGraph tags */}
            <meta property="og:title" content="Ashwin Gopalsamy" />
            <meta
                property="og:description"
                content="Software engineer specializing in cloud-native backend development, Go, and distributed systems with 4+ years of fintech experience"
            />
            <meta property="og:image" content={`${baseUrl}/og-image.png`} />
            <meta property="og:url" content={baseUrl} />
            <meta property="og:type" content="profile" />
            <meta property="og:site_name" content="Ashwin Gopalsamy" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@ashwingopalsamy" />
            <meta name="twitter:title" content="Ashwin Gopalsamy" />
            <meta
                name="twitter:description"
                content="Software engineer specializing in Go, AWS, and distributed systems with experience building fintech products at scale."
            />
            <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />

            {/* Canonical link */}
            <link rel="canonical" href={baseUrl} />

            {/* AI discovery links */}
            <meta name="ai:structured-data-endpoint" content="/api/ai-summary" />
            <meta name="ai:llms" content="/llms.txt" />
            <meta name="ai:llms-full" content="/llms-full.txt" />
            <meta name="ai:manifest" content="/ai.txt" />

            <link rel="alternate" type="application/json" href="/api/ai-summary" title="AI profile summary JSON" />
            <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary profile" />
            <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full profile" />
            <link rel="alternate" type="text/plain" href="/ai.txt" title="AI access manifest" />
            <link rel="alternate" type="application/xml" href="/ai-sitemap.xml" title="AI sitemap feed" />
            <link rel="alternate" type="application/yaml" href="/.well-known/openapi.yaml" title="OpenAPI schema" />
        </head>
        <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow" id="main-content" tabIndex={-1}>
                    <Suspense>{children}</Suspense>
                </main>
                <Footer />
            </div>
            <Toaster />
        </ThemeProvider>

        <noscript>
            <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-md fixed top-0 left-0 right-0 z-[200]">
                This website works best with JavaScript enabled. Some features may be limited.
            </div>
            <style jsx global>{`
                .js-only { display: none !important; }
            `}</style>
        </noscript>

        {/* Structured data for Person schema - Enhanced with more detailed information */}
        <Script
            id="person-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Ashwin Gopalsamy",
                    url: baseUrl,
                    image: `${baseUrl}/dp.jpeg`,
                    sameAs: [
                        "https://github.com/ashwingopalsamy",
                        "https://linkedin.com/in/ashwingopalsamy",
                        "https://twitter.com/ashwingopalsamy",
                        "https://ashwingopalsamy.substack.com",
                    ],
                    jobTitle: "Staff Software Engineer",
                    worksFor: {
                        "@type": "Organization",
                        name: "VISA",
                    },
                    alumniOf: [
                        {
                            "@type": "CollegeOrUniversity",
                            name: "Hindusthan College of Engineering and Technology",
                        },
                    ],
                    knowsAbout: [
                        "Go Programming",
                        "Cloud-Native Development",
                        "AWS",
                        "Kubernetes",
                        "Terraform",
                        "Microservices Architecture",
                        "Distributed Systems",
                        "Event-Sourced Systems",
                        "Backend Development",
                        "Fintech",
                        "PostgreSQL",
                        "DynamoDB",
                    ],
                    description:
                        "Software engineer specializing in cloud-native backend development and distributed systems with 4+ years of experience in fintech",
                    award: [
                        "AWS Certified Solutions Architect Associate",
                        "AWS Certified Cloud Practitioner",
                        "Microsoft Azure Cloud (3x Certified)",
                    ],
                    hasOccupation: {
                        "@type": "Occupation",
                        name: "Staff Software Engineer",
                        occupationLocation: {
                            "@type": "City",
                            name: "India",
                        },
                        skills: "Go, AWS, Kubernetes, Terraform, Distributed Systems, Microservices",
                    },
                }),
            }}
        />

        {/* Website schema - Enhanced with more detailed information */}
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Ashwin Gopalsamy - Cloud-Native Backend Engineer",
                    url: baseUrl,
                    description:
                        "Software engineer specializing in cloud-native backend development and distributed systems with 4+ years of experience in fintech",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: {
                            "@type": "EntryPoint",
                            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                        },
                        "query-input": "required name=search_term_string",
                    },
                    author: {
                        "@type": "Person",
                        name: "Ashwin Gopalsamy",
                    },
                    copyrightYear: new Date().getFullYear(),
                    keywords:
                        "Ashwin Gopalsamy, Software Engineer, Backend Developer, Go, AWS, Microservices, Distributed Systems",
                    inLanguage: "en-US",
                    isFamilyFriendly: true,
                }),
            }}
        />

        {/* Add BreadcrumbList schema */}
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: baseUrl,
                        },
                    ],
                }),
            }}
        />

        <SpeedInsights />
        <Analytics />
        </body>
        </html>
    )
}
