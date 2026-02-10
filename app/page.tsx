"use client"

import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { MobileNavigation } from "@/components/mobile-navigation"
import { UnifiedNavigation } from "@/components/unified-navigation"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { BlogSection } from "@/components/sections/blog-section"
import { ScrollProgress } from "@/components/scroll-progress"

export default function HomePage() {
    return (
        <div className="flex flex-col gap-6 pb-24 sm:gap-8 md:pb-16">
            <ScrollProgress />

            {/* Unified Navigation */}
            <UnifiedNavigation />

            {/* Mobile Bottom Navigation */}
            <MobileNavigation />

            {/* Hero Section */}
            <section className="py-12 md:py-20 pt-40 md:pt-48" id="home">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <GlassContainer className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                <div className="flex flex-col space-y-6">
                                    <motion.div
                                        className="relative w-64 h-64 mx-auto md:mx-0 overflow-hidden rounded-3xl"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src="/dp.jpeg"
                                            alt="Ashwin Gopalsamy portrait showing a professional headshot"
                                            fill
                                            className="object-cover object-[center_30%]"
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={90}
                                        />
                                    </motion.div>
                                    <h1 className="heading-xl text-center text-balance md:text-left">Hey, there!</h1>
                                    <p className="text-xl text-muted-foreground text-center md:text-left">
                                        I&#39;m <span className="text-primary font-semibold">Ashwin</span>. I build internet-scale software
                                        systems.
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-12">
                                    <div>
                                        <h2 className="section-title">ABOUT</h2>
                                        <div className="space-y-8">
                                            <p className="text-xl text-muted-foreground">
                                                Product Engineer. Blogger. Open-source contributor.
                                            </p>
                                            <p className="heading-md">
                                                Expertise in distributed systems, cloud-native architecture, and software product development.
                                            </p>
                                            <p className="text-xl text-muted-foreground">
                                                Currently: Staff Software Engineer - VISA.
                                                <br />
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 relative">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="rounded-full border-muted bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                                                asChild
                                            >
                                                <Link
                                                    href="https://linkedin.com/in/ashwingopalsamy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Visit Ashwin on LinkedIn"
                                                >
                                                    LinkedIn
                                                </Link>
                                            </Button>
                                        </motion.div>

                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white" asChild>
                                                <a
                                                    href="/Resume_AshwinGopalsamy.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                    aria-label="Open Ashwin's resume"
                                                >
                                                    <Download className="h-4 w-4" />
                                                    Resume
                                                </a>
                                            </Button>
                                        </motion.div>

                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="rounded-full border-muted bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                                                asChild
                                            >
                                                <a href="mailto:ashwin2125@icloud.com" aria-label="Send Ashwin an email">
                                                    Email
                                                </a>
                                            </Button>
                                        </motion.div>

                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="rounded-full border-muted bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                                                asChild
                                            >
                                                <Link
                                                    href="https://github.com/ashwingopalsamy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Visit Ashwin on GitHub"
                                                >
                                                    GitHub
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </GlassContainer>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <SkillsSection />
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <ExperienceSection />
            </motion.div>

            {/* Projects Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <ProjectsSection />
            </motion.div>

            {/* Blog Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <BlogSection />
            </motion.div>

            {/* Connect Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <ConnectSection />
            </motion.div>
        </div>
    )
}
