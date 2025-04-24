"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils" // assuming you're using a `cn()` helper
import type { ReactNode } from "react"
import { useMediaQuery, breakpoints } from "@/hooks/use-media-query"

interface GlassContainerProps {
  children: ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function GlassContainer({ children, className, intensity = "medium" }: GlassContainerProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery(breakpoints.sm)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or return a <div style={{ visibility: "hidden" }} /> to prevent layout shift
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) !== "light"

  const darkIntensityStyles = {
    low: "bg-black/40 backdrop-blur-sm border-white/5 shadow-sm",
    medium: "bg-black/30 backdrop-blur-md border-white/10 shadow-md",
    high: "bg-black/20 backdrop-blur-xl border-white/15 shadow-lg",
  }

  const lightIntensityStyles = {
    low: "bg-white/40 backdrop-blur-sm border-black/5 shadow-sm",
    medium: "bg-white/30 backdrop-blur-md border-black/10 shadow-md",
    high: "bg-white/20 backdrop-blur-xl border-black/15 shadow-lg",
  }

  const intensityStyles = isDark ? darkIntensityStyles : lightIntensityStyles

  // Use a more moderate border radius on mobile to maintain the capsule shape
  const borderRadiusClass = className?.includes("rounded-full")
      ? isMobile
          ? "!rounded-[1.5rem]" // More moderate rounded corners on mobile that still look pill-like
          : "rounded-[2rem]"    // Original rounding on desktop
      : "rounded-[2rem]";     // Default for non-rounded-full elements

  return (
      <div
          className={cn(
              "border transition-all",
              borderRadiusClass, intensityStyles[intensity], className)}>
        {children}
      </div>
  )
}
