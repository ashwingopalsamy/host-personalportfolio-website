import { GlassContainer } from "@/components/ui/glass-container"

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <GlassContainer className="p-8">
                <div className="flex flex-col items-center space-y-4">
                    <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                    <p className="text-lg font-medium">Loading...</p>
                </div>
            </GlassContainer>
        </div>
    )
}
