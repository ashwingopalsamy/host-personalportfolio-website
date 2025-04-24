"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GlassContainer } from "./ui/glass-container"
import {Home, BriefcaseBusiness, CodeXml, NotebookPen, Handshake, FolderCode} from "lucide-react"

interface NavItem {
    name: string
    href: string
    icon: React.ReactNode
}

export function MobileNavigation() {
    const [activeSection, setActiveSection] = useState("home")
    const { theme } = useTheme()
    const [isScrolled, setIsScrolled] = useState(false)

    const navItems: NavItem[] = [
        { name: "home", href: "#home", icon: <Home className="h-5 w-5" /> },
        {name : "skills", href: "#skills", icon: <CodeXml className="h-5 w-5" /> },
        { name: "experience", href: "#experience", icon: <BriefcaseBusiness className="h-5 w-5" /> },
        { name: "projects", href: "#projects", icon: <FolderCode className="h-5 w-5" /> },
        { name: "blog", href: "#blog", icon: <NotebookPen className="h-5 w-5" /> },
        { name: "connect", href: "#connect", icon: <Handshake className="h-5 w-5" /> },
    ]

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

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [navItems])

    const handleNavClick = (href: string) => {
        // Smooth scroll to section
        if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    return (
        <motion.div
            className="fixed bottom-6 left-0 right-0 z-[100] mx-auto w-full max-w-[90%] md:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <GlassContainer
                className={cn("px-3 py-3 transition-all duration-300 mx-auto max-w-xs", isScrolled ? "shadow-lg" : "")}
                intensity="high"
            >
                <div className="flex items-center justify-between">
                    {navItems.map((item) => (
                        <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex flex-col items-center justify-center p-2 rounded-full transition-colors relative",
                                    activeSection === item.href.replace("#", "")
                                        ? "text-primary"
                                        : theme === "light"
                                            ? "text-black/60 hover:text-black"
                                            : "text-white/60 hover:text-white",
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
