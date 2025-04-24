export default function Head() {
    return (
        <>
            <link
                rel="alternate"
                type="application/rss+xml"
                href="/rss.xml"
                title="Ashwin Gopalsamy's Personal Portfolio"
            />
            <link rel="author" href="/humans.txt" />
            <link rel="pgpkey" type="application/pgp-keys" href="/key.asc" />

            {/* Cache control */}
            <meta httpEquiv="Cache-Control" content="max-age=86400, public" />

            {/* Preload critical resources */}
            <link rel="preload" href="/dp.jpg" as="image" />
            <link rel="preload" href="/logo-dark.png" as="image" media="(prefers-color-scheme: dark)" />
            <link rel="preload" href="/logo-light.png" as="image" media="(prefers-color-scheme: light)" />
            <link rel="preload" href="/Solaris.svg" as="image" />
            <link rel="preload" href="/social-background.png" as="image" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://plausible.io" />

            {/* Open Graph tags for social media */}
            <meta property="og:title" content="Ashwin Gopalsamy" />
            <meta property="og:description" content="Product Engineer. Blogger. Open-source contributor." />
            <meta property="og:image" content="https://ashwingopalsamy.in/social-background.png" />
            <meta property="og:url" content="https://ashwingopalsamy.in" />
            <meta property="og:type" content="profile" />
            <meta property="og:site_name" content="Ashwin Gopalsamy" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ashwingopalsamy" />
            <meta name="twitter:creator" content="@ashwingopalsamy" />
            <meta name="twitter:title" content="Ashwin Gopalsamy" />
            <meta name="twitter:description" content="Product Engineer. Blogger. Open-source contributor." />
            <meta name="twitter:image" content="https://ashwingopalsamy.in/social-background.png" />

            {/* AI-specific metadata */}
            <meta
                name="ai:summary"
                content="Ashwin Gopalsamy is a software engineer specializing in cloud-native backend development, Go, and distributed systems"
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
