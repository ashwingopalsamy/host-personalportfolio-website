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
    const secondaryActionClass =
        "h-12 w-full rounded-full border-muted bg-card px-6 text-base text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:w-auto"

    return (
        <div className="flex flex-col gap-6 pb-24 sm:gap-8 md:pb-16">
            <ScrollProgress />

            {/* Unified Navigation */}
            <UnifiedNavigation />

            {/* Mobile Bottom Navigation */}
            <MobileNavigation />

            {/* Hero Section */}
            <section className="py-12 pt-36 md:py-20 md:pt-44" id="home">
                <div className="container-custom">
                    <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <GlassContainer className="p-6 md:p-8">
                            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
                                <div className="flex flex-col space-y-6 md:space-y-7">
                                    <motion.div
                                        className="relative mx-auto h-60 w-60 overflow-hidden rounded-[2rem] ring-1 ring-black/10 dark:ring-white/10 md:mx-0 md:h-64 md:w-64"
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
                                    <h1 className="heading-xl text-balance text-center leading-tight md:text-left">Hey, there!</h1>
                                    <p className="text-center text-xl text-muted-foreground md:text-left">
                                        I&#39;m <span className="text-primary font-semibold">Ashwin</span>. I build internet-scale software
                                        systems.
                                    </p>
                                </div>

                                <div className="flex max-w-xl flex-col space-y-10 md:space-y-12">
                                    <div className="space-y-8">
                                        <h2 className="section-title">ABOUT</h2>
                                        <div className="space-y-7">
                                            <p className="text-xl text-muted-foreground">
                                                Product Engineer. Blogger. Open-source contributor.
                                            </p>
                                            <p className="heading-md leading-tight">
                                                Expertise in distributed systems, cloud-native architecture, and software product development.
                                            </p>
                                            <p className="text-xl text-muted-foreground">
                                                Currently: Staff Software Engineer at VISA.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-wrap gap-3">
                                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className={secondaryActionClass}
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

                                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                                            <Button
                                                size="lg"
                                                className="h-12 w-full rounded-full bg-primary px-6 text-base text-white hover:bg-primary/90 sm:w-auto"
                                                asChild
                                            >
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

                                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className={secondaryActionClass}
                                                asChild
                                            >
                                                <a href="mailto:ashwin2125@icloud.com" aria-label="Send Ashwin an email">
                                                    Email
                                                </a>
                                            </Button>
                                        </motion.div>

                                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className={secondaryActionClass}
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
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <SkillsSection />
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <ExperienceSection />
            </motion.div>

            {/* Projects Section */}
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <ProjectsSection />
            </motion.div>

            {/* Blog Section */}
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <BlogSection />
            </motion.div>

            {/* Connect Section */}
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <ConnectSection />
            </motion.div>
        </div>
    )
}
