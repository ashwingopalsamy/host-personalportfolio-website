import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ashwin Gopalsamy | Portfolio",
    template: "%s | Ashwin Gopalsamy",
  },
  description:
      "Software engineer specializing in cloud-native backend development and distributed systems",
  keywords: [
    "Ashwin Gopalsamy",
    "Software Engineer",
    "Backend Developer",
    "Go",
    "Microservices",
    "Distributed Systems",
    "Cloud-native Architecture",
  ],
  authors: [{ name: "Ashwin Gopalsamy", url: baseUrl }],
  creator: "Ashwin Gopalsamy",
  publisher: "Ashwin Gopalsamy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: baseUrl,
    title: "Ashwin Gopalsamy | Software Engineer",
    description:
        "Software engineer specializing in cloud-native backend development and distributed systems",
    siteName: "Ashwin Gopalsamy",
    images: [
      {
        url: `${baseUrl}/images/profile-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Ashwin Gopalsamy - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Gopalsamy | Software Engineer",
    description: "Software engineer specializing in cloud-native backend development and distributed systems",
    creator: "@ashwingopalsamy",
    images: [`${baseUrl}/images/profile-twitter.jpg`],
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  category: "technology",
  generator: "v0.dev",
  applicationName: "Ashwin Gopalsamy Portfolio",
  referrer: "origin-when-cross-origin",
  archives: [`${baseUrl}/blog`],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
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
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>

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
              description:
                  "Software engineer specializing in cloud-native backend development and distributed systems",
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
