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

            {/* Identity verification links */}
            <link rel="me" href="https://github.com/ashwingopalsamy" />
            <link rel="me" href="https://linkedin.com/in/ashwingopalsamy" />
            <link rel="me" href="https://twitter.com/ashwingopalsamy" />

            {/* Preload critical assets */}
            <link rel="preload" href="/dp.jpg" as="image" />
            <link rel="preload" href="/logo-dark.png" as="image" media="(prefers-color-scheme: dark)" />
            <link rel="preload" href="/logo-light.png" as="image" media="(prefers-color-scheme: light)" />
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
            <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-md fixed top-0 left-0 right-0 z-[200] text-center">
                <p>
                    JavaScript is disabled. You're viewing a simplified version of this website with core content and
                    functionality.
                </p>
                <p>For the full interactive experience, please enable JavaScript in your browser settings.</p>
            </div>
        </noscript>

        {/* Structured data for Person schema */}
        <Script
            id="person-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Ashwin Gopalsamy",
                    url: baseUrl,
                    image: `${baseUrl}/dp.jpg`,
                    sameAs: [
                        "https://github.com/ashwingopalsamy",
                        "https://linkedin.com/in/ashwingopalsamy",
                        "https://twitter.com/ashwingopalsamy",
                    ],
                    jobTitle: "Software Engineer",
                    worksFor: {
                        "@type": "Organization",
                        name: "HackerRank",
                    },
                    alumniOf: [
                        {
                            "@type": "CollegeOrUniversity",
                            name: "Your University", // Replace with actual university
                        },
                    ],
                    knowsAbout: [
                        "Python",
                        "Go",
                        "Backend Development",
                        "Django",
                        "Flask",
                        "ExpressJS",
                        "PostgreSQL",
                        "MongoDB",
                        "SQLite",
                        "Microservices",
                        "Distributed Systems",
                    ],
                    description: "Software engineer specializing in cloud-native backend development and distributed systems",
                }),
            }}
        />

        {/* Website schema */}
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Ashwin Gopalsamy",
                    url: baseUrl,
                    description: "Software engineer specializing in cloud-native backend development and distributed systems",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: {
                            "@type": "EntryPoint",
                            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                        },
                        "query-input": "required name=search_term_string",
                    },
                }),
            }}
        />

        {/* Privacy-focused analytics */}
        <Script
            async
            defer
            data-domain="ashwingopalsamy.in"
            src="https://plausible.io/js/plausible.js"
            strategy="afterInteractive"
        />

        {/* Vercel Web Vitals monitoring */}
        <SpeedInsights />
        <Analytics />
        </body>
        </html>
    )
}
