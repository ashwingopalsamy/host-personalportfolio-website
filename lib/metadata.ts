// lib/metadata.ts
import { Metadata } from 'next'

type SocialMetadataProps = {
    title: string
    description: string
    path?: string
}

export function generateSocialMetadata({
                                           title,
                                           description,
                                           path = ''
                                       }: SocialMetadataProps): Metadata {
    // Base URL for production (adjust as needed)
    const baseUrl = 'https://ashwingopalsamy.in'

    // Ensure path starts with a slash
    const canonicalPath = path.startsWith('/') ? path : `/${path}`

    // Full URL for the current page
    const url = `${baseUrl}${canonicalPath}`

    // Static thumbnail image URL
    const ogImageUrl = `${baseUrl}/og-thumb.png`

    return {
        title,
        description,
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'Ashwin Gopalsamy | Portfolio',
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
            creator: '@ashwin2125',
        },
    }
}