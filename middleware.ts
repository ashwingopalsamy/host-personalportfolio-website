import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting configuration
const RATE_LIMIT = 100 // requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

// In-memory store for rate limiting
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>()

export function middleware(request: NextRequest) {
    // Rate limiting logic
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'anonymous'
    const now = Date.now()
    const requestData = ipRequestCounts.get(ip)

    if (requestData) {
        if (now > requestData.resetTime) {
            ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
        } else if (requestData.count >= RATE_LIMIT) {
            return new NextResponse('Too Many Requests', {
                status: 429,
                headers: {
                    'Retry-After': String(Math.ceil((requestData.resetTime - now) / 1000))
                }
            })
        } else {
            requestData.count++
            ipRequestCounts.set(ip, requestData)
        }
    } else {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    }

    // Create response
    const response = NextResponse.next()

    // Add security headers
    response.headers.set('Content-Security-Policy', [
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
    ].join("; "))

    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
    response.headers.set('X-DNS-Prefetch-Control', 'on')
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp')
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
    response.headers.set('Cross-Origin-Resource-Policy', 'same-origin')
    response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
    response.headers.set('X-Download-Options', 'noopen')
    response.headers.set('X-Powered-By', 'Next.js')

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
