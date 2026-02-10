"use client"

import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Go", "Bash", "Python", "TypeScript"],
    },
    {
      title: "Cloud & Platform",
      skills: ["AWS", "Kubernetes", "Terraform", "Docker", "Grafana", "Prometheus"],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "DynamoDB", "Snowflake", "Confluence", "Jira", "Miro", "Sentry"],
    },
  ]

  const getColumns = (skills: string[]) => {
    if (skills.length <= 4) return [skills]

    const midpoint = Math.ceil(skills.length / 2)
    return [skills.slice(0, midpoint), skills.slice(midpoint)]
  }

  return (
      <section className="py-12 pt-32" id="skills" aria-labelledby="skills-heading" role="region">
        <div className="container-custom">
          <GlassContainer className="p-6 md:p-8">
            <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
            >
              <h2 id="skills-heading" className="section-title">
                SKILLS
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground">
                Here’s a quick glance at the tools I’ve put to work over the years.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {skillCategories.map((category, index) => (
                  <motion.div
                      key={index}
                      className={cn(
                        "space-y-6 rounded-[1.5rem] border p-5 md:p-6 transition-colors",
                        "border-foreground/10 bg-foreground/[0.02] hover:border-primary/30",
                      )}
                      initial={false}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{category.title}</h3>
                    <div className={cn("grid gap-x-8", category.skills.length <= 4 ? "grid-cols-1" : "grid-cols-2")}>
                      {getColumns(category.skills).map((columnSkills, colIndex) => (
                          <ul key={colIndex} className="space-y-3.5">
                            {columnSkills.map((skill, skillIndex) => (
                                <motion.li
                                    key={skillIndex}
                                    className="flex items-center text-lg font-medium md:text-xl"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                  <span className="mr-3 h-2 w-2 rounded-full bg-primary"></span>
                                  {skill}
                                </motion.li>
                            ))}
                          </ul>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>
          </GlassContainer>
        </div>
      </section>
  )
}
