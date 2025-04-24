import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

// Define font loading
const interRegular = fetch(new URL("../../../../public/fonts/Inter-Regular.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
)

const interBold = fetch(new URL("../../../../public/fonts/Inter-Bold.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
)

// Image dimensions
const width = 1200
const height = 630

export async function GET(req: NextRequest) {
    try {
        // Load fonts
        const [interRegularData, interBoldData] = await Promise.all([interRegular, interBold])

        // Generate the OG image with a custom background image
        return new ImageResponse(
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter",
                    backgroundImage: "url(https://ashwingopalsamy.in/social-background.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Semi-transparent overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "40px",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        position: "relative", // To appear above the overlay
                        zIndex: 10,
                    }}
                >
                    {/* Main title */}
                    <div
                        style={{
                            fontSize: "60px",
                            fontWeight: "bold",
                            color: "white",
                            marginBottom: "20px",
                            lineHeight: 1.2,
                        }}
                    >
                        Ashwin Gopalsamy
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: "32px",
                            color: "hsl(16, 100%, 50%)",
                            marginBottom: "30px",
                            fontWeight: "bold",
                        }}
                    >
                        Software Engineer
                    </div>

                    {/* Description */}
                    <div
                        style={{
                            fontSize: "24px",
                            color: "rgba(255, 255, 255, 0.8)",
                            maxWidth: "800px",
                            textAlign: "center",
                        }}
                    >
                        Cloud-Native Backends & Distributed Systems
                    </div>

                    {/* Skills pills */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "10px",
                            marginTop: "40px",
                        }}
                    >
                        {["Go", "AWS", "Kubernetes", "Terraform", "Microservices"].map((skill) => (
                            <div
                                key={skill}
                                style={{
                                    backgroundColor: "rgba(255, 69, 0, 0.2)",
                                    color: "hsl(16, 100%, 50%)",
                                    padding: "8px 16px",
                                    borderRadius: "9999px",
                                    fontSize: "18px",
                                }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* URL at bottom */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "30px",
                            fontSize: "20px",
                            color: "rgba(255, 255, 255, 0.6)",
                        }}
                    >
                        ashwingopalsamy.in
                    </div>
                </div>
            </div>,
            {
                width,
                height,
                fonts: [
                    {
                        name: "Inter",
                        data: interRegularData,
                        style: "normal",
                        weight: 400,
                    },
                    {
                        name: "Inter",
                        data: interBoldData,
                        style: "normal",
                        weight: 700,
                    },
                ],
                // Set cache headers for optimal CDN caching
                headers: {
                    "Cache-Control": "public, max-age=31536000, immutable",
                    "Content-Type": "image/png",
                },
            },
        )
    } catch (e) {
        console.error(e)
        return new Response("Failed to generate OG image", { status: 500 })
    }
}
