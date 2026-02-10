"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GlassContainer } from "./ui/glass-container"
import { BriefcaseBusiness, CodeXml, FolderCode, Handshake, Home, NotebookPen } from "lucide-react"

interface NavItem {
    name: string
    href: string
    icon: React.ReactNode
}

const navItems: NavItem[] = [
    { name: "home", href: "#home", icon: <Home className="h-5 w-5" /> },
    { name: "skills", href: "#skills", icon: <CodeXml className="h-5 w-5" /> },
    { name: "experience", href: "#experience", icon: <BriefcaseBusiness className="h-5 w-5" /> },
    { name: "projects", href: "#projects", icon: <FolderCode className="h-5 w-5" /> },
    { name: "blog", href: "#blog", icon: <NotebookPen className="h-5 w-5" /> },
    { name: "connect", href: "#connect", icon: <Handshake className="h-5 w-5" /> },
]

export function MobileNavigation() {
    const [activeSection, setActiveSection] = useState("home")
    const [isScrolled, setIsScrolled] = useState(false)

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Set scrolled state for nav bar styling
            setIsScrolled(window.scrollY > 10)

            const sections = navItems.map((item) => item.href.replace("#", ""))

            const currentSection =
                sections.find((section) => {
                    if (section === "home" && window.scrollY < 300) return true
                    if (section === "") return false

                    const element = document.getElementById(section)
                    if (!element) return false

                    const rect = element.getBoundingClientRect()
                    return rect.top <= 200 && rect.bottom >= 200
                }) || "home"

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleNavClick = (href: string) => {
        // Smooth scroll to section
        if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            const element = document.querySelector(href)
            if (element instanceof HTMLElement) {
                const y = Math.max(0, element.getBoundingClientRect().top + window.scrollY - 96)
                window.scrollTo({ top: y, behavior: "smooth" })
            }
        }
    }

    return (
        <motion.div
            className="fixed bottom-6 left-0 right-0 z-[80] mx-auto w-full max-w-[90%] md:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <GlassContainer
                className={cn(
                    "mx-auto max-w-sm px-3 py-3 transition-all duration-300",
                    isScrolled ? "shadow-xl border-black/[0.16] dark:border-white/[0.16]" : "",
                )}
                intensity="high"
            >
                <div className="flex items-center justify-between">
                    {navItems.map((item) => (
                        <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative flex flex-col items-center justify-center rounded-full p-2 transition-colors",
                                    activeSection === item.href.replace("#", "")
                                        ? "bg-foreground/10 text-primary"
                                        : "text-foreground/60 hover:text-foreground",
                                )}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(item.href)
                                }}
                                aria-label={item.name}
                            >
                                {item.icon}
                                {activeSection === item.href.replace("#", "") && (
                                    <motion.div
                                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                                        layoutId="activeMobileNavIndicator"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </GlassContainer>
        </motion.div>
    )
}
