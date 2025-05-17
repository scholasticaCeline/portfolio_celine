"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function HomeSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                
                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Hi, I'm{" "}
                        <PointerHighlight>
                            <span className="text-violet-500">Scholastica Celine Wahyudi</span>
                        </PointerHighlight>
                    </h1>


                    <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                        I’m passionate about AI and enjoy building projects around it. Alongside that, I focus on backend development, databases, and technical areas like networking and cybersecurity.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg">View My Work</Button>
                        <Button variant="outline" size="lg" className="text-black">Contact Me</Button>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg shadow-violet-500/20">
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
            </div>
        </section>
    )
}
