export default function Head() {
    return (
        <>
            {/* Additional head elements that need to be outside layout.tsx */}
            <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="Ashwin Gopalsamy's Blog" />
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

            {/* AI-specific metadata */}
            <meta
                name="ai:summary"
                content="Ashwin Gopalsamy is a software engineer specializing in cloud-native backend development and distributed systems"
            />
            <meta name="ai:structured-data-endpoint" content="/api/ai-summary" />
        </>
    )
}
