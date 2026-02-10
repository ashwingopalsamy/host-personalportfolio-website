import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  intensity?: "low" | "medium" | "high"
}

export function GlassContainer({ children, className, intensity = "medium", ...props }: GlassContainerProps) {
  const intensityStyles = {
    low: "bg-white/45 backdrop-blur-md backdrop-saturate-150 border-black/[0.08] shadow-[0_12px_30px_-24px_rgba(0,0,0,0.45)] dark:bg-black/45 dark:border-white/[0.08]",
    medium:
      "bg-white/35 backdrop-blur-lg backdrop-saturate-150 border-black/[0.12] shadow-[0_16px_40px_-28px_rgba(0,0,0,0.5)] dark:bg-black/35 dark:border-white/[0.12]",
    high: "bg-white/25 backdrop-blur-xl backdrop-saturate-150 border-black/[0.15] shadow-[0_20px_48px_-30px_rgba(0,0,0,0.6)] dark:bg-black/25 dark:border-white/[0.15]",
  }

  return (
    <div
      className={cn(
        "border rounded-[2rem] transition-[background-color,border-color,box-shadow,transform] duration-300",
        intensityStyles[intensity],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
