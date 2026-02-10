"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ThemeToggleDynamicIsland() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const activeTheme = theme === "system" ? resolvedTheme : theme

    if (!mounted || !activeTheme) {
        return (
            <button
                aria-label="Toggle theme"
                className="relative flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/80 dark:border-white/20 dark:bg-black/60"
            />
        )
    }

    const toggleTheme = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setTheme(activeTheme === "dark" ? "light" : "dark")
    }

    const iconVariants = {
        initial: {
            opacity: 0,
            scale: 0.6,
            rotate: -30,
        },
        animate: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            scale: 0.6,
            rotate: 30,
            transition: {
                duration: 0.15,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.08, rotate: 4 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
            className={cn(
                "relative flex items-center justify-center h-8 w-8 rounded-full border transition-colors duration-150",
                activeTheme === "light"
                    ? "border-black/10 bg-white/80 text-black hover:bg-white"
                    : "border-white/20 bg-black/60 text-white hover:bg-black/80",
            )}
        >
            <div className="relative w-5 h-5 overflow-hidden">
                <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                    {activeTheme === "light" ? (
                        <motion.div
                            key="moon"
                            className="absolute inset-0 flex items-center justify-center"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Moon className="h-4 w-4 text-black" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            className="absolute inset-0 flex items-center justify-center"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Sun className="h-4 w-4 text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    )
}
