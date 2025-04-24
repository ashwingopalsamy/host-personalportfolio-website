"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useMediaQuery, breakpoints } from "@/hooks/use-media-query"

export function Footer() {
  const { theme } = useTheme()
  const isMobile = useMediaQuery(breakpoints.sm)

  return (
      <footer className="py-6 w-full">
        <div className="container-custom">
          <div className={cn("flex justify-center", isMobile && "px-4")}>
            <GlassContainer
                className={cn(
                    "rounded-full w-full",
                    isMobile ? "px-5 py-6" : "px-8 py-4"
                )}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-6">
                  <p className="text-lg font-medium">Ashwin Gopalsamy.</p>

                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <a
                          href="https://github.com/ashwingopalsamy"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                      >
                        <Github
                            className={cn(
                                "w-5 h-5 transition-colors",
                                theme === "light" ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white",
                            )}
                        />
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <a
                          href="https://linkedin.com/in/ashwingopalsamy"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                      >
                        <Linkedin
                            className={cn(
                                "w-5 h-5 transition-colors",
                                theme === "light" ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white",
                            )}
                        />
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <a
                          href="https://twitter.com/ashwingopalsamy"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                      >
                        <Twitter
                            className={cn(
                                "w-5 h-5 transition-colors",
                                theme === "light" ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white",
                            )}
                        />
                      </a>
                    </motion.div>
                  </div>
                </div>

                <div className={cn("text-sm mt-2 md:mt-0", theme === "light" ? "text-black/60" : "text-white/60")}>
                  no rights reserved. design inspired from anaskhan.me
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>
      </footer>
  )
}