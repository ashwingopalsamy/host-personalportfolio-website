export default function Head() {
    // Base URL for absolute URLs
    const baseUrl = "https://ashwingopalsamy.in"

    return (
        <>
            {/* Existing meta tags */}
            <link
                rel="alternate"
                type="application/rss+xml"
                href="/rss.xml"
                title="Ashwin Gopalsamy's Blog on Backend Engineering"
            />
            <link rel="author" href="/humans.txt" />
            <link rel="pgpkey" type="application/pgp-keys" href="/key.asc" />

            {/* Cache control */}
            <meta httpEquiv="Cache-Control" content="max-age=86400, public" />

            {/* Preload critical resources */}
            <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/dp.jpg" as="image" />
            <link rel="preload" href="/logo-dark.png" as="image" media="(prefers-color-scheme: dark)" />
            <link rel="preload" href="/logo-light.png" as="image" media="(prefers-color-scheme: light)" />
            <link rel="preload" href="/Solaris.svg" as="image" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://plausible.io" />

            {/* Open Graph meta tags for rich social previews */}
            <meta property="og:title" content="Ashwin Gopalsamy | Software Engineer" />
            <meta
                property="og:description"
                content="Building resilient, cloud-native microservices & distributed systems in Go."
            />
            <meta property="og:url" content={baseUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${baseUrl}/api/og`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta
                property="og:image:alt"
                content="Ashwin Gopalsamy - Software Engineer specializing in cloud-native backend development"
            />
            <meta property="og:site_name" content="Ashwin Gopalsamy" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ashwin2125" />
            <meta name="twitter:creator" content="@ashwin2125" />
            <meta name="twitter:title" content="Ashwin Gopalsamy | Software Engineer" />
            <meta
                name="twitter:description"
                content="Building resilient, cloud-native microservices & distributed systems in Go."
            />
            <meta name="twitter:image" content={`${baseUrl}/api/og`} />
            <meta
                name="twitter:image:alt"
                content="Ashwin Gopalsamy - Software Engineer specializing in cloud-native backend development"
            />

            {/* AI-specific metadata */}
            <meta
                name="ai:summary"
                content="Ashwin Gopalsamy is a software engineer specializing in cloud-native backend development, and distributed systems"
            />
            <meta name="ai:structured-data-endpoint" content="/api/ai-summary" />

            {/* Additional SEO meta tags */}
            <meta name="author" content="Ashwin Gopalsamy" />
            <meta name="copyright" content="Ashwin Gopalsamy" />
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="7 days" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN" />
            <meta name="geo.placename" content="India" />
        </>
    )
}
