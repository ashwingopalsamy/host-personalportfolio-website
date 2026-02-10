import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  intensity?: "low" | "medium" | "high"
}

export function GlassContainer({ children, className, intensity = "medium", ...props }: GlassContainerProps) {
  const intensityStyles = {
    low: "bg-white/40 backdrop-blur-sm border-black/5 shadow-sm dark:bg-black/40 dark:border-white/5",
    medium: "bg-white/30 backdrop-blur-md border-black/10 shadow-md dark:bg-black/30 dark:border-white/10",
    high: "bg-white/20 backdrop-blur-xl border-black/15 shadow-lg dark:bg-black/20 dark:border-white/15",
  }

  return (
    <div className={cn("border rounded-[2rem] transition-all", intensityStyles[intensity], className)} {...props}>
      {children}
    </div>
  )
}
