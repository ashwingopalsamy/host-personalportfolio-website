"use client"

import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const { theme } = useTheme()

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
      skills: ["PostgreSQL", "DynamoDB", "Snowflake", "Confluence","Jira", "Miro", "Sentry"],
    },
  ]

  return (
    <section className="py-12 pt-32" id="skills">
      <div className="container-custom">
        <GlassContainer className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="section-title">SKILLS</h2>
            <p className={cn("text-lg max-w-3xl", theme === "light" ? "text-black/70" : "text-white/70")}>
              Here’s a quick glance at the tools I’ve put to work over the years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-md">{category.title}</h3>
                <div className="grid grid-cols-2 gap-x-8">
                  {[category.skills.slice(0, 4), category.skills.slice(4)].map((columnSkills, colIndex) => (
                      <ul key={colIndex} className="space-y-4">
                        {columnSkills.map((skill, skillIndex) => (
                            <motion.li
                                key={skillIndex}
                                className="text-xl font-medium flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
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

