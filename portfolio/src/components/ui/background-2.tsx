"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function BackgroundParticles({
    className,
    }: {
    className?: string
    }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particles: Particle[] = []
    const maxParticles = 100

    class Particle {
        x: number
        y: number
        vx: number
        vy: number
        size: number
        color: string

        constructor(canvas: HTMLCanvasElement) {
            this.x = Math.random() * canvas.width
            this.y = Math.random() * canvas.height
            this.vx = (Math.random() - 0.5) * 2
            this.vy = (Math.random() - 0.5) * 2
            this.size = Math.random() * 3 + 1
            this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`
        }

        update(canvas: HTMLCanvasElement) {
            this.x += this.vx
            this.y += this.vy

            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            // Reset particles
            particles.length = 0
            for (let i = 0; i < maxParticles; i++) {
                particles.push(new Particle(canvas))
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x
                const dy = particles[i].y - particles[j].y
                const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.update(canvas)
                particle.draw(ctx)
            })

            connectParticles()
        }

        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className={cn("fixed inset-0 z-0", className)}>
        <canvas ref={canvasRef} className="w-full h-full bg-gradient-to-b from-black to-gray-900" />
        <div className="absolute inset-0 bg-black/50" />
        </div>
    )
}
