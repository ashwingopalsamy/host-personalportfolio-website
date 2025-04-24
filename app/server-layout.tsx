import type { ReactNode } from "react"
import Image from "next/image"
import type { Metadata } from "next"

// Define base URL for canonical links and metadata
const baseUrl = "https://ashwingopalsamy.in"

export const metadata: Metadata = {
    title: "Ashwin Gopalsamy | Portfolio",
    description: "Software engineer specializing in cloud-native backend development and distributed systems",
}

interface ServerLayoutProps {
    children: ReactNode
}

export default function ServerLayout({ children }: ServerLayoutProps) {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            {/* Static Navigation */}
            <header className="fixed top-6 left-0 right-0 z-[100] mx-auto w-full max-w-[95%]">
                <div className="px-4 sm:px-6 py-3 sm:py-4 mx-auto max-w-7xl border rounded-[2rem] bg-white/30 dark:bg-black/30 backdrop-blur-md border-black/10 dark:border-white/10 shadow-md">
                    <nav aria-label="Main navigation" className="flex items-center justify-between">
                        <a href="#" className="flex-shrink-0 rounded-full overflow-hidden w-8 h-8">
                            <Image
                                src="/logo-dark.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full dark:block hidden"
                            />
                            <Image
                                src="/logo-light.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full dark:hidden block"
                            />
                        </a>

                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#skills" className="px-3 py-2 text-base rounded-full transition-colors">
                                skills
                            </a>
                            <a href="#experience" className="px-3 py-2 text-base rounded-full transition-colors">
                                experience
                            </a>
                            <a href="#projects" className="px-3 py-2 text-base rounded-full transition-colors">
                                projects
                            </a>
                            <a href="#blog" className="px-3 py-2 text-base rounded-full transition-colors">
                                blog
                            </a>
                            <a href="#connect" className="px-3 py-2 text-base rounded-full transition-colors">
                                connect
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            <main id="main-content" tabIndex={-1}>
                {children}
            </main>

            {/* Static Footer */}
            <footer className="py-6 w-full">
                <div className="container-custom">
                    <div className="flex justify-center px-4">
                        <div className="rounded-full w-full px-8 py-4 border bg-white/30 dark:bg-black/30 backdrop-blur-md border-black/10 dark:border-white/10">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <p className="text-lg font-medium">Ashwin Gopalsamy.</p>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href="https://github.com/ashwingopalsamy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-5 h-5"
                                            >
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/ashwingopalsamy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-5 h-5"
                                            >
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect width="4" height="12" x="2" y="9"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://twitter.com/ashwingopalsamy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-5 h-5"
                                            >
                                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-sm mt-2 md:mt-0 text-black/60 dark:text-white/60">
                                    no rights reserved. design inspired from anaskhan.me
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
