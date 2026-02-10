export default function Head() {
    return (
        <>
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
            <link rel="preload" href="/dp.jpeg" as="image" />
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
                content="Ashwin Gopalsamy is a software engineer specializing in cloud-native backend development, Go, and distributed systems"
            />
            <meta name="ai:structured-data-endpoint" content="/api/ai-summary" />
            <meta name="ai:llms" content="/llms.txt" />
            <meta name="ai:llms-full" content="/llms-full.txt" />
            <meta name="ai:manifest" content="/ai.txt" />
            <meta name="ai:openapi" content="/.well-known/openapi.yaml" />

            <link rel="alternate" type="application/json" href="/api/ai-summary" title="AI profile summary JSON" />
            <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary profile" />
            <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full profile" />
            <link rel="alternate" type="text/plain" href="/ai.txt" title="AI access manifest" />
            <link rel="alternate" type="application/xml" href="/ai-sitemap.xml" title="AI sitemap feed" />
            <link rel="alternate" type="application/yaml" href="/.well-known/openapi.yaml" title="OpenAPI schema" />

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
