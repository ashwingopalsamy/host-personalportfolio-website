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
  description:
      "Ashwin Gopalsamy is a software engineer specializing in cloud-native backend development, Go microservices, and distributed systems with 4+ years of fintech experience.",
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
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Ashwin Gopalsamy | Cloud-Native Backend Engineer & Distributed Systems Specialist",
    description:
        "Software engineer with 4+ years experience in Go, AWS, and event-sourced microservices architecture for fintech products.",
    siteName: "Ashwin Gopalsamy",
    images: [
      {
        url: `${baseUrl}/_vercel/image?url=${encodeURIComponent(`${baseUrl}/og-image.png`)}&w=1200&q=75`,
        width: 1200,
        height: 630,
        alt: "Ashwin Gopalsamy - Software Engineer specializing in cloud-native backend development",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Gopalsamy | Cloud-Native Backend Engineer",
    description:
        "Software engineer specializing in Go, AWS, and distributed systems with experience building fintech products at scale.",
    creator: "@ashwingopalsamy",
    images: [`${baseUrl}/_vercel/image?url=${encodeURIComponent(`${baseUrl}/og-image.png`)}&w=1200&q=75`],
  },
  other: {
    "og:image": `${baseUrl}/_vercel/image?url=${encodeURIComponent(`${baseUrl}/og-image.png`)}&w=1200&q=75`,
    "og:image:secure_url": `${baseUrl}/_vercel/image?url=${encodeURIComponent(`${baseUrl}/og-image.png`)}&w=1200&q=75`,
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Ashwin Gopalsamy - Software Engineer specializing in cloud-native backend development",
    "og:image:url": `${baseUrl}/_vercel/image?url=${encodeURIComponent(`${baseUrl}/og-image.png`)}&w=1200&q=75`,
    "og:url": baseUrl,
    "og:site_name": "Ashwin Gopalsamy",
    "og:title": "Ashwin Gopalsamy | Cloud-Native Backend Engineer & Distributed Systems Specialist",
    "og:description": "Software engineer with 4+ years experience in Go, AWS, and event-sourced microservices architecture for fintech products.",
    "whatsapp:image": `${baseUrl}/_vercel/image?url=${encodeURIComponent(`${baseUrl}/og-image.png`)}&w=1200&q=75`,
    "whatsapp:title": "Ashwin Gopalsamy | Cloud-Native Backend Engineer & Distributed Systems Specialist",
    "whatsapp:description": "Software engineer with 4+ years experience in Go, AWS, and event-sourced microservices architecture for fintech products.",
  },
  other: {
    "og:image:secure_url": `${baseUrl}/og-image.png`,
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Ashwin Gopalsamy - Software Engineer specializing in cloud-native backend development",
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
