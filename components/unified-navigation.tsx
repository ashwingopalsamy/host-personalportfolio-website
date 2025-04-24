"use client"

import {useState, useEffect, useRef} from "react"
import {motion, AnimatePresence} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {cn} from "@/lib/utils"
import {GlassContainer} from "@/components/ui/glass-container"
import {useTheme} from "next-themes"
import {ThemeToggleDynamicIsland} from "@/components/ThemeToggleIsland"
import {Menu, X} from "lucide-react"

export function UnifiedNavigation() {
    const [activeSection, setActiveSection] = useState("home")
    const [showResumePopup, setShowResumePopup] = useState(false)
    const [isHoveringResume] = useState(false)
    const [showHoverPopup, setShowHoverPopup] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)
    const {theme} = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    const navItems = [
        {name: "skills", href: "#skills"},
        {name: "experience", href: "#experience"},
        {name: "projects", href: "#projects"},
        {name: "blog", href: "#blog"},
        {name: "connect", href: "#connect"},
    ]

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY
                    setIsScrolled(scrollY > 10)

                    const sections = [
                        "home",
                        ...navItems.map((item) => item.href.replace("#", "")),
                    ]

                    let current = "home"
                    for (const section of sections) {
                        const el = document.getElementById(section)
                        if (!el) continue
                        const {top, bottom} = el.getBoundingClientRect()
                        if (top <= 200 && bottom >= 200) {
                            current = section
                            break
                        }
                    }

                    if (current !== activeSection) {
                        setActiveSection(current)
                    }

                    if (current === "experience") {
                        const experienceSection = document.getElementById("experience")
                        if (experienceSection) {
                            const rect = experienceSection.getBoundingClientRect()
                            setShowResumePopup(rect.bottom <= 300)
                        }
                    } else {
                        setShowResumePopup(false)
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [navItems, activeSection])

    useEffect(() => {
        if (isHoveringResume) {
            hoverTimerRef.current = setTimeout(() => {
                setShowHoverPopup(true)
            }, 1000)
        } else {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current)
                hoverTimerRef.current = null
            }
            setShowHoverPopup(false)
        }

        return () => {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current)
            }
        }
    }, [isHoveringResume])

    const scrollToElement = (element: HTMLElement, duration = 150) => {
        const start = window.scrollY
        const end = element.getBoundingClientRect().top + start
        const distance = end - start
        const startTime = performance.now()

        const easeOutQuad = (t: number) => t * (2 - t)

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
            scrollToElement(document.body)
        } else {
            const element = document.querySelector(href)
            if (element instanceof HTMLElement) {
                scrollToElement(element)
            }
        }
    }

    if (!mounted) return null

    return (
        <>
            <motion.div
                className="fixed top-6 left-0 right-0 z-[100] mx-auto w-full max-w-[95%]"
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: "spring", stiffness: 300, damping: 30}}
            >
                <GlassContainer
                    className={cn(
                        "px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 mx-auto max-w-7xl",
                        isScrolled ? "shadow-lg" : "",
                    )}
                    intensity="high"
                >
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="flex-shrink-0 rounded-full overflow-hidden w-8 h-8 cursor-pointer"
                        >
                            <Link href="#" onClick={() => handleNavClick("#")} aria-label="Logo">
                                <Image
                                    src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="object-cover w-full h-full transition-opacity duration-300"
                                />
                            </Link>
                        </motion.div>
                        <div className="flex items-center space-x-1 md:space-x-6">
                            <div className="hidden md:flex items-center space-x-6">
                                {navItems.map((item) => (
                                    <motion.div key={item.name} whileHover={{y: -2}} whileTap={{y: 0}}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "px-3 py-2 text-sm md:text-base rounded-full transition-colors relative",
                                                activeSection === item.href.replace("#", "")
                                                    ? theme === "light"
                                                        ? "text-black"
                                                        : "text-white"
                                                    : theme === "light"
                                                        ? "text-black/60 hover:text-black"
                                                        : "text-white/60 hover:text-white",
                                            )}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleNavClick(item.href)
                                            }}
                                        >
                                            {item.name}
                                            {activeSection === item.href.replace("#", "") && (
                                                <motion.div
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary mx-3"
                                                    layoutId="activeNavIndicator"
                                                    transition={{duration: 0.15}}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}

                                <div className="flex items-center">
                                    <ThemeToggleDynamicIsland/>
                                </div>
                            </div>

                            <div className="md:hidden flex items-center space-x-2">
                                <ThemeToggleDynamicIsland/>
                                <motion.button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/30 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800/30 dark:bg-zinc-900/80"
                                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                >
                                    {mobileMenuOpen ? (
                                        <X className="h-4 w-4 text-zinc-700 dark:text-zinc-300"/>
                                    ) : (
                                        <Menu className="h-4 w-4 text-zinc-700 dark:text-zinc-300"/>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </GlassContainer>
            </motion.div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.15}}
                        className="fixed inset-0 z-[90] pt-24 pb-6 px-4"
                    >
                        <GlassContainer className="w-full h-full p-6 overflow-y-auto" intensity="high">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <motion.div key={item.name} whileHover={{x: 5}} whileTap={{scale: 0.98}}>
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
                                            onClick={(e) => {
                                                e.preventDefault()
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

            <AnimatedResumePopup show={showResumePopup}/>

            <AnimatePresence>
                {showHoverPopup && (
                    <motion.div
                        className="fixed z-50"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.15}}
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function AnimatedResumePopup({show}: { show: boolean }) {
    return (
        <motion.div
            className="fixed bottom-6 left-0 right-0 z-40 mx-auto w-[90%] max-w-md"
            initial={{y: 100, opacity: 0}}
            animate={{
                y: show ? 0 : 100,
                opacity: show ? 1 : 0,
            }}
            transition={{type: "spring", stiffness: 300, damping: 30}}
        ></motion.div>
    )
}
