"use client"

import { Button } from "@/components/ui/button"
import { CalendarIcon, MailIcon } from "lucide-react"
import { GlassContainer } from "@/components/ui/glass-container"
import { motion } from "framer-motion"

export function ConnectSection() {
    return (
        <section className="py-12 pt-32" id="connect" aria-labelledby="connect-heading">
            <div className="container-custom">
                <GlassContainer className="p-6 md:p-8">
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <h2 id="connect-heading" className="section-title">
                            CONNECT
                        </h2>
                        <p className="max-w-3xl text-lg text-muted-foreground">
                            Let&#39;s discuss opportunities, collaborations, or just have a chat about technology.
                        </p>
                    </motion.div>

                    <div className="mt-10 flex flex-col items-center space-y-8 text-center">
                        <motion.h3
                            className="heading-lg"
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Let&#39;s make it happen.
                        </motion.h3>

                        {/* Button Group */}
                        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                            {/* Cal.com Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="w-full md:w-auto"
                            >
                                <Button
                                    size="lg"
                                    className="h-12 min-h-[48px] w-full rounded-full bg-primary px-6 text-lg text-white hover:bg-primary/90 md:w-64"
                                    asChild
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
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="w-full md:w-auto"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 min-h-[48px] w-full rounded-full border-primary px-6 text-lg text-primary transition-all hover:bg-primary hover:text-white md:w-64"
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
                            className="max-w-2xl text-lg text-muted-foreground"
                            initial={false}
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
