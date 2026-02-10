"use client"

import { useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "UUID v8",
      description:
          "An open-source minimal Go library to generate RFC-compliant UUIDv8 values - future-ready and optimized for precision and clock-based sequencing. Designed for developers looking to adopt modern UUID standards with clear, idiomatic Go APIs.",
      skills: ["Go", "UUID", "RFC-9562"],
      link: "https://github.com/ash3in/uuidv8",
    },
    {
      title: "UUIDCheck",
      description:
          "An open-source zero-dependency utility in Go for validating UUIDs against RFC-4122 and RFC-9562 formats. Includes built-in parsing of UUIDv7 values to extract embedded timestamps - lightweight, accurate, and useful in observability or data pipelines.",
      skills: ["Go", "UUID", "RFC-4122", "RFC-9562"],
      link: "https://github.com/ashwingopalsamy/uuidcheck",
    },
    {
      title: "Swiggy Qwik",
      description:
          "Developed this final project during the i++ program at Swiggy. Built backend services in Go using gRPC and DynamoDB, hosted on AWS. Applied microservices principles in a fast-paced bootcamp setting, laying a solid foundation for my backend work.",
      skills: ["Go", "gRPC", "DynamoDB", "AWS", "Microservices"],
      link: "https://bytes.swiggy.com/level-up-with-swiggys-i-a902b73db00a",
    },
    {
      title: "Intelligent Traffic Management System",
      description:
          "Bachelor's degree final project. Built a smart traffic controller using YOLO ML for vehicle detection and dynamic signal switching. Designed to respond to real-time road conditions from surveillance footage, improving flow efficiency over static timers.",
      skills: ["YOLO", "Object Detection", "Google Cloud", "Python"],
      link: "#",
    },
    {
      title: "Bud.ai – The Student Twin",
      description:
          "Conversational assistant built during Microsoft’s FutureReadyTalent internship. Deployed on Azure, aimed to help students manage academic life in a Teams-integrated environment. Combined backend logic with cloud services to provide a unified student dashboard experience.",
      skills: ["Microsoft Azure", "JavaScript", "Bot Framework", "GitHub"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
          "This website - built with Next.js and Tailwind - serves as both a design sandbox and a way to reflect my evolution as a full-stack developer. Features responsive layouts, dark/light mode, Framer Motion animations, and a clean aesthetic that is easy to maintain.",
      skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      title: "VSCode Theme: MacOS Dark",
      description:
          "Created and published a custom Visual Studio Code theme to match my preferred minimalist, high-contrast dark aesthetic. Built from scratch when I couldn’t find one that felt just right.",
      skills: ["VSCode Extension", "Design Tokens"],
      link: "https://marketplace.visualstudio.com/items?itemName=ashwingopalsamy.macos-dark-theme",
    },
    {
      title: "HiCET Edu – Android App",
      description:
          "College automation app for academic use-cases - bonafide requests, fee records, event tracking. Developed in Java and Spring MVC, deployed on AWS. Offered students a smoother way to interact with academic admin services.",
      skills: ["Java", "Spring MVC", "Android", "AWS"],
      link: "#",
    },
  ]

  return (
      <section className="py-12 pt-32" id="projects" aria-labelledby="projects-heading" role="region">
        <div className="container-custom">
          <GlassContainer className="p-6 md:p-8">
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
            >
              <h2 id="projects-heading" className="section-title">
                PROJECTS
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground">
                A selection of my published and personal projects across the tech spectrum.
              </p>
            </motion.div>

            <div className="space-y-6 mt-6">
              {projects.map((project, index) => {
                const hasLiveLink = project.link && project.link !== "#"

                return (
                  <motion.div
                      key={index}
                      initial={false}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                  >
                    <GlassContainer
                        className={cn(
                            "relative overflow-hidden border border-transparent p-6 transition-all duration-150 ease-out hover:-translate-y-[2px] hover:border-primary/40 hover:shadow-xl md:p-8",
                        )}
                        intensity="low"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-4 max-w-3xl">
                          <h3 className="heading-md">{project.title}</h3>
                          <p className="text-lg text-muted-foreground">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.skills.map((skill, skillIndex) => (
                                <Badge
                                    key={skillIndex}
                                    className="bg-primary/20 text-primary hover:bg-primary/30 rounded-full px-3 py-1 text-sm font-medium"
                                >
                                  {skill}
                                </Badge>
                            ))}
                          </div>
                        </div>

                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.15, rotate: 6 }}
                            whileTap={{ scale: 0.9 }}
                        >
                          {hasLiveLink ? (
                              <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn(
                                      "flex items-center justify-center w-20 h-20 rounded-full transition-all duration-200",
                                      hoveredProject === index
                                          ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                                          : "bg-foreground/5 text-foreground hover:bg-foreground/10",
                                  )}
                                  aria-label={`Visit ${project.title} project`}
                              >
                                <ArrowUpRight className="w-8 h-8 transition-all duration-200" />
                              </a>
                          ) : (
                              <div className="flex flex-col items-center gap-2">
                                <div
                                    className={cn(
                                        "flex items-center justify-center w-20 h-20 rounded-full border transition-all duration-200 cursor-not-allowed",
                                        "border-foreground/10 bg-foreground/5 text-foreground/35",
                                    )}
                                    aria-label={`${project.title} project link unavailable`}
                                >
                                  <ArrowUpRight className="w-8 h-8 transition-all duration-200" />
                                </div>
                                <span className="text-xs text-foreground/45">Private</span>
                              </div>
                          )}
                        </motion.div>
                      </div>
                    </GlassContainer>
                  </motion.div>
                )
              })}
            </div>

            {/* GitHub Link Section */}
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 px-4 py-10 flex justify-center"
            >
              <GlassContainer
                  className="w-full max-w-md px-6 py-3 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 rounded-full"
                  intensity="high"
              >
                <span className="text-center text-lg font-normal sm:text-left">All talk. See code?</span>

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
                        href="https://github.com/ashwingopalsamy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View GitHub
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
