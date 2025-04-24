"use client"

import { useState, useEffect } from "react"

export function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        // Default to false during SSR
        if (typeof window === "undefined") return

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        setPrefersReducedMotion(mediaQuery.matches)

        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    return prefersReducedMotion
}
