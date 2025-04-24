import Link from "next/link"
import { GlassContainer } from "@/components/ui/glass-container"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <GlassContainer className="p-8 max-w-md w-full text-center">
                <h1 className="heading-xl mb-4">404</h1>
                <h2 className="heading-md mb-6">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
                <Button size="lg" className="rounded-full" asChild>
                    <Link href="/" className="flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </GlassContainer>
        </div>
    )
}
