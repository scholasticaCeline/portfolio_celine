"use client"

import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from "react"
import { motion, useAnimation } from "framer-motion"

export type BeamOptions = {
  color?: string
  width?: number
  length?: number
  speed?: number
  offset?: number
  rotation?: number
  opacity?: number
  borderRadius?: number
}

export type BackgroundBeamsWithCollisionProps = {
  parentRef: React.RefObject<HTMLElement>
  containerRef: React.RefObject<HTMLElement>
  beamOptions?: BeamOptions
  numberOfBeams?: number
  collisionCheckInterval?: number
}

const BackgroundBeamsWithCollision = forwardRef<HTMLDivElement, BackgroundBeamsWithCollisionProps>(
  ({ parentRef, containerRef, beamOptions = {}, numberOfBeams = 10, collisionCheckInterval = 50 }, ref) => {
    const [beams, setBeams] = useState<
      {
        id: string
        x: number
        y: number
        rotation: number
        speed: number
        ref: React.RefObject<HTMLDivElement>
      }[]
    >([])
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false)
    const beamRefs = useRef<React.RefObject<HTMLDivElement>[]>([])
    const animationControls = useAnimation()

    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        animationControls.start({ opacity: 1 })
      },
      stopAnimation: () => {
        animationControls.start({ opacity: 0 })
      },
    }))

    const getRandom = useCallback((min: number, max: number) => {
      return Math.random() * (max - min) + min
    }, [])

    const createBeam = useCallback(() => {
      const id = Math.random().toString(36).substring(7)
      const rotation = getRandom(0, 360)
      const speed = getRandom(0.5, 2)
      const x = getRandom(0, 100)
      const y = getRandom(0, 100)

      return {
        id,
        x,
        y,
        rotation,
        speed,
        ref: React.createRef<HTMLDivElement>(),
      }
    }, [getRandom])

    useEffect(() => {
      beamRefs.current = Array(numberOfBeams)
        .fill(null)
        .map(() => React.createRef<HTMLDivElement>())

      const initialBeams = Array(numberOfBeams)
        .fill(null)
        .map(() => createBeam())

      setBeams(initialBeams)
    }, [createBeam, numberOfBeams])

    const checkCollision = useCallback(() => {
      if (!containerRef.current || !parentRef.current) {
        return
      }

      const containerRect = containerRef.current.getBoundingClientRect()
      const parentRect = parentRef.current.getBoundingClientRect()

      for (let i = 0; i < beams.length; i++) {
        const beam = beams[i]
        const beamRef = beam.ref.current

        if (!beamRef) {
          continue
        }

        const beamRect = beamRef.getBoundingClientRect()

        if (
          beamRect.x < containerRect.x ||
          beamRect.y < containerRect.y ||
          beamRect.x + beamRect.width > containerRect.x + containerRect.width ||
          beamRect.y + beamRect.height > containerRect.y + containerRect.height ||
          beamRect.x < parentRect.x ||
          beamRect.y < parentRect.y ||
          beamRect.x + beamRect.width > parentRect.x + parentRect.width ||
          beamRect.y + beamRect.height > parentRect.y + parentRect.height
        ) {
          setCycleCollisionDetected((prev) => !prev)
          const newBeam = createBeam()
          setBeams((prevBeams) => prevBeams.map((b) => (b.id === beam.id ? { ...newBeam, id: b.id, ref: b.ref } : b)))
        }
      }
    }, [beams, createBeam, containerRef, parentRef])

    useEffect(() => {
      const intervalId = setInterval(() => {
        checkCollision()
      }, collisionCheckInterval)

      return () => clearInterval(intervalId)
    }, [checkCollision, collisionCheckInterval])

    useEffect(() => {
      const animateBeams = () => {
        setBeams((prevBeams) =>
          prevBeams.map((beam) => {
            const container = containerRef.current
            const parent = parentRef.current

            if (!container || !parent) {
              return beam
            }

            const containerRect = container.getBoundingClientRect()
            const parentRect = parent.getBoundingClientRect()

            const angle = beam.rotation * (Math.PI / 180)
            const xSpeed = Math.cos(angle) * beam.speed
            const ySpeed = Math.sin(angle) * beam.speed

            const newX = beam.x + xSpeed
            const newY = beam.y + ySpeed

            const beamRef = beam.ref.current

            if (beamRef) {
              const beamRect = beamRef.getBoundingClientRect()

              if (
                beamRect.x < containerRect.x ||
                beamRect.y < containerRect.y ||
                beamRect.x + beamRect.width > containerRect.x + containerRect.width ||
                beamRect.y + beamRect.height > containerRect.y + containerRect.height ||
                beamRect.x < parentRect.x ||
                beamRect.y < parentRect.y ||
                beamRect.x + beamRect.width > parentRect.x + parentRect.width ||
                beamRect.y + beamRect.height > parentRect.y + parentRect.height
              ) {
                return beam
              }
            }

            return {
              ...beam,
              x: newX,
              y: newY,
            }
          }),
        )
      }

      const animationFrameId = requestAnimationFrame(function animate() {
        animateBeams()
        requestAnimationFrame(animate)
      })

      return () => cancelAnimationFrame(animationFrameId)
    }, [cycleCollisionDetected, containerRef, parentRef])

    return (
      <>
        {beams.map((beam, index) => (
          <motion.div
            key={beam.id}
            ref={beam.ref}
            style={{
              position: "absolute",
              top: `${beam.y}%`,
              left: `${beam.x}%`,
              width: beamOptions.width || "5px",
              height: beamOptions.length || "50px",
              backgroundColor: beamOptions.color || "rgba(255, 255, 255, 0.1)",
              borderRadius: beamOptions.borderRadius || "5px",
              transformOrigin: "top left",
              rotate: `${beam.rotation}deg`,
              opacity: beamOptions.opacity || 1,
              pointerEvents: "none",
            }}
            animate={animationControls}
          />
        ))}
      </>
    )
  },
)

BackgroundBeamsWithCollision.displayName = "BackgroundBeamsWithCollision"

export default BackgroundBeamsWithCollision
