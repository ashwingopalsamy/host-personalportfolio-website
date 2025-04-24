"use client"

import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { MobileNavigation } from "@/components/mobile-navigation"
import { UnifiedNavigation } from "@/components/unified-navigation"
import { BlogSection } from "@/components/sections/blog-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { useEffect } from "react"

export default function ClientHomePage() {
    // Enable JS-only features when component mounts
    useEffect(() => {
        document.documentElement.classList.add("js-loaded")
    }, [])

    return (
        <div className="flex flex-col gap-6 sm:gap-8 pb-16 md:pb-16 pb-24">
            <ScrollProgress />
            <UnifiedNavigation />
            <MobileNavigation />

            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <BlogSection />
            <ConnectSection />
        </div>
    )
}
