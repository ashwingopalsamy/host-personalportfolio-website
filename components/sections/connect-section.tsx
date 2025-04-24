"use client"

import { Button } from "@/components/ui/button"
import { CalendarIcon, MailIcon } from "lucide-react"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ConnectSection() {
    const { theme } = useTheme()

    return (
        <section className="py-12 pt-32" id="connect" aria-labelledby="connect-heading">
            <div className="container-custom">
                <GlassContainer className="p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <h2 id="connect-heading" className="section-title">
                            CONNECT
                        </h2>
                        <p className={cn("text-lg max-w-3xl", theme === "light" ? "text-black/70" : "text-white/70")}>
                            Let&#39;s discuss opportunities, collaborations, or just have a chat about technology.
                        </p>
                    </motion.div>

                    <div className="flex flex-col items-center text-center space-y-8 mt-10">
                        <motion.h3
                            className="heading-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Let&#39;s make it happen.
                        </motion.h3>

                        {/* Button Group */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            {/* Cal.com Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="w-full md:w-auto"
                            >
                                <Button
                                    size="lg"
                                    className="w-full md:w-64 rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg h-auto"
                                >
                                    <a
                                        href="https://cal.com/ashwingopalsamy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full"
                                        aria-label="Book a meeting on Cal.com"
                                    >
                                        <CalendarIcon className="w-5 h-5" aria-hidden="true" />
                                        Book a meeting
                                    </a>
                                </Button>
                            </motion.div>

                            {/* Email Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="w-full md:w-auto"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full md:w-64 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all px-6 py-3 text-lg h-auto"
                                    asChild
                                >
                                    <a
                                        href="mailto:ashwin2125@icloud.com"
                                        className="flex items-center justify-center gap-2 w-full"
                                        aria-label="Send an email"
                                    >
                                        <MailIcon className="w-5 h-5" aria-hidden="true" />
                                        Send an email
                                    </a>
                                </Button>
                            </motion.div>
                        </div>

                        <motion.p
                            className={cn("text-lg", theme === "light" ? "text-black/60" : "text-white/60")}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Slots are time-zone friendly. Pick what works for you.
                        </motion.p>
                    </div>
                </GlassContainer>
            </div>
        </section>
    )
}
