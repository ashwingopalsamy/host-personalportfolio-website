"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ThemeToggleDynamicIsland() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const toggleTheme = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setTheme(theme === "dark" ? "light" : "dark")
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
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className={cn(
                "relative flex items-center justify-center h-8 w-8 rounded-full border transition-colors duration-150",
                theme === "light"
                    ? "bg-white border-zinc-300 text-black hover:bg-zinc-100"
                    : "bg-black border-white/20 text-white hover:bg-white/20"
            )}
        >
            {/* Radial accent glow */}
            {theme === "dark" && (
                <motion.div
                    className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                    animate={{
                        background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.5), rgba(31, 41, 55, 0))",
                    }}
                    transition={{ duration: 0.3 }}
                />
            )}


            {/* Icon animation */}
            <div className="relative w-5 h-5 overflow-hidden">
                <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                    {theme === "light" ? (
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
