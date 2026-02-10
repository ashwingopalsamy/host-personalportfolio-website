"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMediaQuery, breakpoints } from "@/hooks/use-media-query"
import { useEffect, useRef } from "react"

export function BlogSection() {
    const isMobile = useMediaQuery(breakpoints.sm)
    const sectionRef = useRef<HTMLElement>(null)

    // Intersection observer for analytics
    useEffect(() => {
        if (!sectionRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Could add analytics tracking here
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        observer.observe(sectionRef.current)

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
    }, [])

    return (
        <section ref={sectionRef} className="py-12 pt-32" id="blog" aria-labelledby="blog-heading" role="region">
            <div className="container-custom">
                <GlassContainer className="p-6 md:p-8">
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <h2 id="blog-heading" className="section-title">
                            BLOG
                        </h2>
                        <p className="max-w-3xl text-lg text-muted-foreground">
                            I love sharing insights from my journey to the community on Substack.
                        </p>
                    </motion.div>

                    <div className="mt-10 flex flex-col items-center space-y-8 text-center">
                        <motion.h3
                            className="heading-lg"
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Check out my latest thoughts.
                        </motion.h3>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className={cn(isMobile && "w-full px-4")}
                        >
                            <Button
                                size="lg"
                                className={cn(
                                    "h-auto rounded-full bg-primary text-lg text-white hover:bg-primary/90",
                                    isMobile ? "w-full px-4 py-3" : "px-7 py-4",
                                )}
                                asChild
                            >
                                <a
                                    href="https://ashwingopalsamy.substack.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                    aria-label="Visit my Substack blog"
                                >
                                    <ExternalLink className="w-5 h-5" aria-hidden="true" />
                                    <span
                                        className={cn(
                                            "truncate text-ellipsis overflow-hidden sm:whitespace-nowrap",
                                            isMobile ? "text-sm" : "text-base",
                                        )}
                                        style={{ maxWidth: "100%" }}
                                    >
                    ashwingopalsamy.substack.com
                  </span>
                                </a>
                            </Button>
                        </motion.div>

                        <motion.p
                            className="max-w-2xl text-lg text-muted-foreground"
                            initial={false}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Topics include Go, microservices, architecture, productivity and engineering career tips.
                        </motion.p>
                    </div>
                </GlassContainer>
            </div>
        </section>
    )
}
