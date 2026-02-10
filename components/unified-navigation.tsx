"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlassContainer } from "@/components/ui/glass-container"
import { useTheme } from "next-themes"
import { ThemeToggleDynamicIsland } from "@/components/ThemeToggleIsland"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "skills", href: "#skills" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "blog", href: "#blog" },
    { name: "connect", href: "#connect" },
] as const

function getScrollOffset() {
    return window.innerWidth < 768 ? 96 : 124
}

export function UnifiedNavigation() {
    const [activeSection, setActiveSection] = useState("home")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (ticking) return

            ticking = true
            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 10)

                const sections = ["home", ...navItems.map((item) => item.href.replace("#", ""))]
                let current = "home"

                for (const section of sections) {
                    const element = document.getElementById(section)
                    if (!element) continue

                    const { top, bottom } = element.getBoundingClientRect()
                    if (top <= 220 && bottom >= 220) {
                        current = section
                        break
                    }
                }

                setActiveSection(current)
                ticking = false
            })
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToElement = (element: HTMLElement, duration = 180) => {
        const start = window.scrollY
        const targetY = Math.max(
            0,
            element === document.body ? 0 : element.getBoundingClientRect().top + start - getScrollOffset(),
        )
        const distance = targetY - start
        const startTime = performance.now()

        const easeOutQuad = (value: number) => value * (2 - value)

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            window.scrollTo(0, start + distance * easeOutQuad(progress))
            if (progress < 1) requestAnimationFrame(animateScroll)
        }

        requestAnimationFrame(animateScroll)
    }

    const handleNavClick = (href: string) => {
        if (href === "#") {
            scrollToElement(document.body, 220)
            return
        }

        const element = document.querySelector(href)
        if (element instanceof HTMLElement) {
            scrollToElement(element)
        }
    }

    const logo = useMemo(() => {
        const activeTheme = theme === "system" ? resolvedTheme : theme
        return activeTheme === "light" ? "/logo-light.png" : "/logo-dark.png"
    }, [theme, resolvedTheme])

    if (!mounted) return null

    return (
        <>
            <motion.div
                className="fixed top-6 left-0 right-0 z-[100] mx-auto w-full max-w-[95%]"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <GlassContainer
                    className={cn(
                        "px-4 py-3 transition-all duration-300 mx-auto max-w-7xl sm:px-6 sm:py-4",
                        isScrolled ? "shadow-lg" : "",
                    )}
                    intensity="high"
                >
                    <nav aria-label="Main navigation">
                        <div className="flex items-center justify-between">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-shrink-0 rounded-full overflow-hidden w-8 h-8 cursor-pointer"
                            >
                                <Link href="#" onClick={() => handleNavClick("#")} aria-label="Logo">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full transition-opacity duration-300"
                                    />
                                </Link>
                            </motion.div>

                            <div className="flex items-center space-x-1 md:space-x-6">
                                <div className="hidden md:flex items-center space-x-6">
                                    {navItems.map((item) => {
                                        const isActive = activeSection === item.href.replace("#", "")

                                        return (
                                            <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "px-3 py-2 text-sm md:text-base rounded-full transition-colors relative",
                                                        isActive
                                                            ? theme === "light"
                                                                ? "text-black"
                                                                : "text-white"
                                                            : theme === "light"
                                                                ? "text-black/60 hover:text-black"
                                                                : "text-white/60 hover:text-white",
                                                    )}
                                                    onClick={(event) => {
                                                        event.preventDefault()
                                                        handleNavClick(item.href)
                                                    }}
                                                >
                                                    {item.name}
                                                    {isActive && (
                                                        <motion.div
                                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary mx-3"
                                                            layoutId="activeNavIndicator"
                                                            transition={{ duration: 0.15 }}
                                                        />
                                                    )}
                                                </Link>
                                            </motion.div>
                                        )
                                    })}

                                    <div className="flex items-center">
                                        <ThemeToggleDynamicIsland />
                                    </div>
                                </div>

                                <div className="md:hidden flex items-center space-x-2">
                                    <ThemeToggleDynamicIsland />
                                    <motion.button
                                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                                        aria-expanded={mobileMenuOpen}
                                        aria-controls="mobile-menu"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/30 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800/30 dark:bg-zinc-900/80"
                                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                    >
                                        {mobileMenuOpen ? (
                                            <X className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                                        ) : (
                                            <Menu className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </GlassContainer>
            </motion.div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-[90] pt-24 pb-6 px-4"
                        id="mobile-menu"
                        role="menu"
                        aria-hidden={!mobileMenuOpen}
                    >
                        <GlassContainer className="w-full h-full p-6 overflow-y-auto" intensity="high">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <motion.div key={item.name} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "block px-4 py-3 text-lg rounded-full transition-colors relative",
                                                activeSection === item.href.replace("#", "")
                                                    ? "bg-primary text-primary-foreground"
                                                    : theme === "light"
                                                        ? "bg-black/5 text-black/80 hover:bg-black/10"
                                                        : "bg-white/5 text-white/80 hover:bg-white/10",
                                            )}
                                            onClick={(event) => {
                                                event.preventDefault()
                                                handleNavClick(item.href)
                                                setMobileMenuOpen(false)
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassContainer>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
