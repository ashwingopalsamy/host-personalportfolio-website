import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Ashwin Gopalsamy - Product Engineer, Blogger and Open-source contributor."
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = "image/png"

export default function OG() {
    return new ImageResponse(
        <div
            style={{
                display: "flex",
                fontSize: 128,
                background: "black",
                width: "100%",
                height: "100%",
            }}
        />,
    )
}
