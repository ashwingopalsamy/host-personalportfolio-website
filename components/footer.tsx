"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMediaQuery, breakpoints } from "@/hooks/use-media-query"

export function Footer() {
  const isMobile = useMediaQuery(breakpoints.sm)

  return (
      <footer className="w-full py-8">
        <div className="container-custom">
          <div className={cn("flex justify-center", isMobile && "px-4")}>
            <GlassContainer
                className={cn(
                    "w-full rounded-full",
                    isMobile ? "px-5 py-6" : "px-8 py-4",
                )}
            >
              <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-6">
                <div className="flex items-center gap-5">
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
                                "text-foreground/60 hover:text-foreground",
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
                                "text-foreground/60 hover:text-foreground",
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
                                "text-foreground/60 hover:text-foreground",
                            )}
                        />
                      </a>
                    </motion.div>
                  </div>
                </div>

                <div className="text-sm text-foreground/60 md:mt-0">
                  no rights reserved. design inspired by anaskhan.me
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>
      </footer>
  )
}
