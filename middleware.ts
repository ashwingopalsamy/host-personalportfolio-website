import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting configuration
const RATE_LIMIT = 100 // requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

// In-memory store for rate limiting
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>()

export function middleware(request: NextRequest) {
    // Clone the response
    const response = NextResponse.next()

    // Rate limiting logic
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'anonymous'
    const now = Date.now()
    const requestData = ipRequestCounts.get(ip)

    if (requestData) {
        if (now > requestData.resetTime) {
            // Reset if window has passed
            ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
        } else if (requestData.count >= RATE_LIMIT) {
            // Rate limit exceeded
            return new NextResponse('Too Many Requests', {
                status: 429,
                headers: {
                    'Retry-After': String(Math.ceil((requestData.resetTime - now) / 1000))
                }
            })
        } else {
            // Increment count
            requestData.count++
            ipRequestCounts.set(ip, requestData)
        }
    } else {
        // First request from this IP
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    }

    // Add security headers with strict CSP
    const securityHeaders = {
        "Content-Security-Policy": [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://va.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https://v0.blob.com blob:",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://plausible.io https://vitals.vercel-insights.com",
            "frame-src 'none'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            "block-all-mixed-content",
            "upgrade-insecure-requests"
        ].join("; "),
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
        "X-DNS-Prefetch-Control": "on",
        "Cache-Control": "public, max-age=31536000, immutable",
        // Additional security headers
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "same-origin",
        "X-Permitted-Cross-Domain-Policies": "none",
        "X-Download-Options": "noopen",
        "X-Powered-By": "Next.js"
    }

    // Set the security headers
    Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value)
    })

    return response
}

// Only run middleware on the main application routes
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico)|public).*)",
    ],
}
