"use client"

import { useState } from "react"
import Navbar from "@/components/ui/navbar"
import BackgroundParticles from "@/components/ui/background-2"
import { Meteors } from "@/components/ui/meteors"
import Image from "next/image"

// Project data - replace with your actual projects
const projects = [
    {
        title: "Neth - Freelancer Website",
        description: "A frontend website to search for freelancers, including dashboard and community.",
        image: "/Project1.png",
        tags: ["HTML", "CSS", "JS"],
        githubUrl: "https://github.com/scholasticaCeline/Neth-freelancer-website",
    },
    {
        title: "PartnerGO - Partnership Searching",
        description: "A full stack website for searching partnership with other company/organizations.",
        image: "/Project2.png",
        tags: ["PHP", "Laravel", "MySQL", "CSS"],
        githubUrl: "https://github.com/scholasticaCeline/partnergo",
    },
]

export default function ProjectsPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <main className="relative min-h-screen overflow-hidden">
            <Navbar />
            <BackgroundParticles></BackgroundParticles>
            <div className="relative z-10 pt-20 px-4 md:px-8 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">My Projects</h1>
                <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Explore my recent work and personal projects. Each project represents my passion for creating new things.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                        key={idx}
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                        <div className="relative group">
                            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-3xl bg-violet-500 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-50 blur-3xl transition-all duration-300 group-hover:scale-[0.85] group-hover:opacity-60" />
                                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-8 shadow-xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex space-x-3">
                                        {project.githubUrl && (
                                            <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors"
                                            >
                                            <Github className="h-4 w-4 text-gray-300" />
                                            </a>
                                        )}
                                        </div>
                                    </div>

                                    <div className="mb-6 overflow-hidden rounded-lg">
                                        <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <h2 className="relative z-50 mb-2 text-2xl font-bold text-white">{project.title}</h2>
                                    <p className="relative z-50 mb-6 text-base text-gray-400">{project.description}</p>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                        ))}
                                    </div>

                                {/* Meteors */}
                                <Meteors number={20} shouldAnimate={hoveredIndex === idx} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
