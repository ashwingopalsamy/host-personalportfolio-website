"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown, ChevronUp, Download, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useMediaQuery } from "@/hooks/use-media-query"

export function ExperienceSection() {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
    const { theme } = useTheme()
    const isMobile = useMediaQuery("(max-width: 640px)")
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

    const experiences = [
        {
            company: "Solaris SE",
            logo: "/Solaris.svg",
            role: "Professional Engineer",
            period: "January 2022 - April 2025",
            description: [
                "Owning the Accounts Domain within the Core Banking unit, home to foundational systems powering accounts lifecycle and interest-based financial products.",
                "Designed and implemented cloud-native microservices using an event-sourced architecture - engineered for resilience, uptime, and scale.",
                "Drove the development of the 'Savings Account' product, particularly on tax exemptions and monthly interest payouts - positioning the product as one of the core revenue generators.",
                "Built and maintained the 'Credit Card Interest' component, enabling interest computations, accruals, settlements in a high-throughput workflows, powering hundreds of thousands of cards",
                "Built practical domain knowledge in interest-bearing products, tax rules (like Freistellungsauftrag), credit systems, and regulatory constraints - translating this into informed technical decisions and better alignment with product strategy.",
                "Served as the first representative for our Accounts & Interests domain during ADAC's large-scale migration - ensuring a smooth transition with zero downtime.",
                "Worked closely with product owners, guilds, and fellow engineers to translate business intent into reliable, production-ready services.",
                "Contributed to on-call rotations, improved observability practices, and helped standardize runbooks - supporting faster incident recovery and operational readiness.",
                "Continuously evolving critical services with a focus on long-term maintainability, clarity, and performance across systems processing millions of daily transactions.",
            ],
            skills: [
                "Go",
                "AWS",
                "Distributed Systems",
                "Microservices",
                "Kubernetes",
                "Terraform",
                "Snowflake",
                "Product Development",
            ],
            link: "https://www.solarisgroup.com",
        },
        {
            company: "Hexaware",
            logo: "/hexaware.svg",
            role: "Software Engineer Associate",
            period: "June 2021 - June 2022",
            secondPeriod: "",
            description: [
                "Contributed to the development of distributed systems in the enterprise domain, improving performance and helping deliver ahead of schedule.",
                "Worked on deploying a cloud-based HRMS product for a global automotive client - supporting 75K+ users within a system valued at over $1.5B.",
                "Collaborated across cross-functional teams to integrate business logic with existing features, improving maintainability and reducing post-release defects.",
                "Participated in reviews, documentation, and internal demos - ensuring alignment with expectations and internal quality standards.",
                "Gained exposure to large-scale deployment practices, pipelines, and enterprise security principles while working on production-facing systems.",
            ],
            skills: ["Go", "JavaScript", "Oracle Cloud", "Databases"],
            link: "https://hexaware.com",
        },
        {
            company: "Microsoft",
            logo: "/Microsoft.svg",
            role: "Intern",
            period: "4 months",
            description: [
                "Learnt & engaged in the development of an open-source project over a 4-month span, utilizing Microsoft Azure Cloud and GitHub, as a key participant in Microsoft's 'FutureReadyTalent' Internship Program.",
                "Built Bud.ai - ‘The Student Twin’, an open-source project developed on Microsoft Azure as part of the FutureReadyTalent program.",
                "Collaborated via GitHub and deployed cloud-native features using Azure’s AI tooling, getting hands-on exposure to open-source practices and scalable app design.",
            ],
            skills: ["Microsoft Azure", "JavaScript", "Git"],
            link: "https://news.microsoft.com/en-in/microsoft-collaborates-with-aicte-nasscom-ey-github-and-quess-corp-to-empower-indias-youth-with-tech-skills-to-be-job-ready/",
        },
        {
            company: "Swiggy",
            logo: "/swiggy.svg",
            role: "i++ Trainee",
            period: "3 months",
            description: [
                "Selected as one of 30 trainees for Swiggy’s i++ engineering program - an immersive bootcamp focused on backend engineering at scale.",
                "Trained hands-on with real-world engineering tools and patterns - covering Go, gRPC, Kafka, AWS, and distributed databases.",
                "Learned through mentorship, pair programming, and internal engineering talks that shaped a strong foundation in building production-grade systems.",
                "This experience played a pivotal role in shaping my transition into backend product development, grounding me in modern cloud-native practices very early in my career.",
            ],
            skills: ["Go", "AWS", "gRPC", "Kafka", "DynamoDB", "PostgreSQL", "Jenkins", "Prometheus"],
            link: "https://timesofindia.indiatimes.com/business/startups/people/swiggy-plans-to-create-next-gen-engineers-with-its-i-program/articleshow/92522076.cms",
        },
    ]

    const toggleExpand = (index: number) => {
        setExpandedExperience(expandedExperience === index ? null : index)
    }

    // Prefetch company logos
    useEffect(() => {
        if (isInView) {
            experiences.forEach((exp) => {
                const img = new Image()
                img.src = exp.logo
            })
        }
    }, [isInView, experiences])

    return (
        <section
            ref={sectionRef}
            className="py-12 pt-32"
            id="experience"
            aria-labelledby="experience-heading"
            role="region"
        >
            <div className="container-custom">
                <GlassContainer className="p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 id="experience-heading" className="section-title">
                            EXPERIENCE
                        </h2>
                        <p className={cn("text-lg max-w-3xl", theme === "light" ? "text-black/70" : "text-white/70")}>
                            Where I've worked, what I've shipped, and how it all added up.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <GlassContainer
                                    className={cn(
                                        "p-8 relative overflow-hidden transform transition-all duration-150 ease-out hover:-translate-y-[2px] hover:shadow-xl hover:border-primary/40 border border-transparent",
                                        expandedExperience === index ? "shadow-xl shadow-primary/5" : "",
                                    )}
                                    intensity={expandedExperience === index ? "high" : "medium"}
                                >
                                    <div className="flex flex-col space-y-6">
                                        {/* Header section with company info and toggle */}
                                        <div
                                            className="flex items-center justify-between cursor-pointer"
                                            onClick={() => toggleExpand(index)}
                                            role="button"
                                            tabIndex={0}
                                            aria-expanded={expandedExperience === index}
                                            aria-controls={`experience-details-${index}`}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    toggleExpand(index)
                                                    e.preventDefault()
                                                }
                                            }}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <motion.div
                                                    className="w-16 h-16 bg-secondary flex items-center justify-center rounded-xl overflow-hidden"
                                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <img
                                                        src={exp.logo || "/placeholder.svg"}
                                                        alt={`${exp.company} logo - where Ashwin Gopalsamy worked as ${exp.role}`}
                                                        className="w-15 h-15 object-contain"
                                                        loading={index < 2 ? "eager" : "lazy"}
                                                        width="60"
                                                        height="60"
                                                    />
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                                                    <p className="text-primary font-medium">{exp.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4">
                                                <div className="text-right hidden md:block">
                                                    <div
                                                        className={cn(
                                                            "px-4 py-1 rounded-full text-sm",
                                                            theme === "light" ? "bg-black/5" : "bg-white/5",
                                                        )}
                                                    >
                                                        <div className="flex items-center">
                                                            <Calendar className="h-3 w-3 mr-1.5 text-primary" />
                                                            <span>{exp.period}</span>
                                                        </div>
                                                    </div>
                                                    {exp.secondPeriod && (
                                                        <div
                                                            className={cn(
                                                                "px-4 py-1 mt-1 rounded-full text-xs",
                                                                theme === "light" ? "bg-black/5" : "bg-white/5",
                                                            )}
                                                        >
                                                            <div className="flex items-center">
                                                                <Calendar className="h-2.5 w-2.5 mr-1.5 text-primary" />
                                                                <span>{exp.secondPeriod}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className={cn(
                                                        "rounded-full transition-all duration-300",
                                                        expandedExperience === index
                                                            ? "bg-primary text-white hover:bg-primary/90"
                                                            : theme === "light"
                                                                ? "bg-black/10 hover:bg-black/20"
                                                                : "bg-white/10 hover:bg-white/20",
                                                    )}
                                                >
                                                    {expandedExperience === index ? (
                                                        <ChevronUp className="h-5 w-5" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5" />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Mobile period display */}
                                        <div className="md:hidden">
                                            <div
                                                className={cn(
                                                    "px-4 py-1 rounded-full text-sm inline-block",
                                                    theme === "light" ? "bg-black/5" : "bg-white/5",
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    <Calendar className="h-3 w-3 mr-1.5 text-primary" />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>
                                            {exp.secondPeriod && (
                                                <div
                                                    className={cn(
                                                        "px-4 py-1 mt-1 rounded-full text-xs inline-block ml-2",
                                                        theme === "light" ? "bg-black/5" : "bg-white/5",
                                                    )}
                                                >
                                                    <div className="flex items-center">
                                                        <Calendar className="h-2.5 w-2.5 mr-1.5 text-primary" />
                                                        <span>{exp.secondPeriod}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Expanded content */}
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: expandedExperience === index ? "auto" : 0,
                                                opacity: expandedExperience === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 space-y-6">
                                                <div>
                                                    <h4 className="text-lg font-medium mb-3">Responsibilities & Achievements</h4>
                                                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                                                        {exp.description.map((item, i) => (
                                                            <li key={i} className={theme === "light" ? "text-black/80" : "text-white/80"}>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-medium mb-3">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.skills.map((skill, skillIndex) => (
                                                            <motion.div
                                                                key={skillIndex}
                                                                whileHover={{ scale: 1.1, y: -2 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <Badge className="bg-primary text-white rounded-full px-4 py-1.5 text-sm font-medium">
                                                                    {skill}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className={cn(
                                                            "rounded-full hover:bg-primary hover:text-white border-primary text-primary",
                                                            "transition-all duration-300",
                                                        )}
                                                        asChild
                                                    >
                                                        <a
                                                            href={exp.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2"
                                                        >
                                                            Visit Website
                                                            <ExternalLink className="h-3.5 w-3.5" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Always visible skills preview */}
                                        {expandedExperience !== index && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        className="bg-primary/20 text-primary hover:bg-primary/30 rounded-full px-3 py-1 text-sm font-medium"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </GlassContainer>
                            </motion.div>
                        ))}
                    </div>

                    {/* Resume CTA Section - Updated for better mobile responsiveness */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-8 px-4 py-10 flex justify-center"
                    >
                        <GlassContainer
                            className="aspect-auto w-full max-w-md px-6 py-3 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2"
                            intensity="high"
                        >
                            <span className="text-lg font-regular text-center sm:text-left">Sounds interesting?</span>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.95 }}
                                className="transition-all duration-200 w-full sm:w-auto"
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2.5 text-base font-semibold w-full sm:w-auto"
                                    asChild
                                >
                                    <a
                                        href="/Resume_AshwinGopalsamy.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                        aria-label="Download Resume"
                                        download
                                    >
                                        <Download className="h-4 w-4" aria-hidden="true" />
                                        Download Resume
                                    </a>
                                </Button>
                            </motion.div>
                        </GlassContainer>
                    </motion.div>
                </GlassContainer>
            </div>
        </section>
    )
}
