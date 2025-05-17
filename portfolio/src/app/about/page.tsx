"use client"

import { useState } from "react"
import Navbar from "@/components/ui/navbar"
import BackgroundParticles from "@/components/ui/background-2"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const hardSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "MongoDB",
  "SQL",
  "GraphQL",
  "REST API",
]

// Soft skills
const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Creativity",
  "Critical Thinking",
]

export default function AboutPage() {

  return (
    <main className="relative min-h-screen overflow-hidden">
        <Navbar />
              <div className="absolute inset-0 -z-10">
                {/* <BackgroundBeamsWithCollision className="bg-gray-900" >{null}</BackgroundBeamsWithCollision> */}
                <BackgroundParticles />
              </div>
      <div className="relative z-10 pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">About Me</h1>

        {/* Bio Section */}
        <section className="mb-16 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg shadow-violet-500/20">
              <Image
                src="/Profile2.jpg"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-white">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate developer and designer with a keen eye for detail and a love for creating beautiful,
              functional digital experiences. With several years of experience in the tech industry, I've worked on a
              variety of projects ranging from small business websites to complex enterprise applications.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities. I believe in continuous learning and pushing the boundaries of what's
              possible in web development.
            </p>
          </div>
        </section>

        {/* Hard Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {hardSkills.map((skill, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer rounded-lg border border-violet-600 bg-transparent transition-shadow hover:shadow-lg hover:shadow-violet-600/60"
              >
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-lg bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 transition-opacity",
                  )}
                  layoutId="hoverBackground"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
                <div
                  className="relative z-10 p-4 text-center font-semibold text-white"
                >
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-violet-900/60 rounded-lg border border-violet-600 p-4 shadow-sm text-white cursor-default hover:bg-violet-800 transition-colors"
              >
                <div className="text-center">
                  <span className="text-lg font-semibold">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>
          <div className="space-y-8">
            <TimelineItem
              year="2024 - Present"
              title="Activist"
              company="HIMTI Binus University"
              description="Leading the frontend development team, implementing modern web technologies, and mentoring junior developers."
            />
            <TimelineItem
              year="2025 - Present"
              title="Member"
              company="Ureeka Binus University"
              description="Developed responsive websites and web applications for various clients using React and Next.js."
            />
            {/* <TimelineItem
              year="2018 - 2020"
              title="NAR Trainee"
              company="Laboratory Center at Binus University"
              description="Assisted in the development of web applications and gained experience in frontend technologies."
            /> */}
          </div>
        </section>
      </div>
    </main>
  )
}

function TimelineItem({
  year,
  title,
  company,
  description,
}: {
  year: string
  title: string
  company: string
  description: string
}) {
  return (
    <div className="relative pl-8 border-l border-gray-700">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500"></div>
      <div className="text-violet-400 font-bold">{year}</div>
      <div className="text-white text-lg font-medium">{title}</div>
      <div className="text-gray-400">{company}</div>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  )
}
