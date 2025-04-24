import type React from "react"
import type { Metadata, Viewport } from "next"
import ClientLayout from "./client"

// Define base URL for canonical links and metadata
const baseUrl = "https://ashwingopalsamy.in"

// Enhance metadata with researched keywords
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ashwin Gopalsamy | Cloud-Native Backend Engineer & Distributed Systems Specialist",
    template: "%s | Ashwin Gopalsamy",
  },
  description: "Product Engineer. Blogger. Open-source contributor.",
  keywords: [
    "Ashwin Gopalsamy",
    "Software Engineer",
    "Backend Developer",
    "Go Developer",
    "Microservices",
    "Distributed Systems",
    "Cloud-native Architecture",
    "AWS Certified",
    "Fintech Engineer",
    "Event-Sourced Systems",
    "Kubernetes",
    "Terraform",
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
    title: "Ashwin Gopalsamy",
    description: "Product Engineer. Open-source contributor and Blogger.",
    siteName: "Ashwin Gopalsamy",
    images: [
      {
        url: `${baseUrl}/social-background.png`,
        width: 1200,
        height: 630,
        alt: "Ashwin Gopalsamy - Product Engineer. Open-source contributor and Blogger.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Gopalsamy",
    description: "Product Engineer. Open-source contributor and Blogger.",
    creator: "@ashwingopalsamy",
    images: [`${baseUrl}/social-background.png`],
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
  return <ClientLayout>{children}</ClientLayout>
}
