"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const prefersReducedMotion = useReducedMotion()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: prefersReducedMotion ? 300 : 100,
        damping: prefersReducedMotion ? 50 : 30,
        restDelta: 0.001,
    })

    if (prefersReducedMotion) {
        return null // Don't show the animation for users who prefer reduced motion
    }

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-[101] origin-left"
            style={{
                scaleX,
                backgroundColor: "hsl(var(--primary))",
            }}
        />
    )
}
