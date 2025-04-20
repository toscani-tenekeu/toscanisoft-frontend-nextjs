"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface FloatingBubblesProps {
  count?: number
  section?: "hero" | "body" | "footer"
}

export default function FloatingBubbles({ count = 5, section = "hero" }: FloatingBubblesProps) {
  const { theme } = useTheme()
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; x: number; y: number }>>([])

  useEffect(() => {
    const newBubbles = []
    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 60 + 20, // Size between 20 and 80
        x: Math.random() * 100, // Position X (0-100%)
        y: Math.random() * 100, // Position Y (0-100%)
      })
    }
    setBubbles(newBubbles)
  }, [count])

  // Different animation settings based on section
  const getAnimationSettings = (section: string) => {
    switch (section) {
      case "hero":
        return {
          duration: { min: 15, max: 25 },
          distance: { min: 100, max: 200 },
        }
      case "body":
        return {
          duration: { min: 20, max: 30 },
          distance: { min: 50, max: 100 },
        }
      case "footer":
        return {
          duration: { min: 10, max: 15 },
          distance: { min: 30, max: 60 },
        }
      default:
        return {
          duration: { min: 15, max: 25 },
          distance: { min: 100, max: 200 },
        }
    }
  }

  const settings = getAnimationSettings(section)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => {
        const duration = Math.random() * (settings.duration.max - settings.duration.min) + settings.duration.min
        const distanceX = Math.random() * (settings.distance.max - settings.distance.min) + settings.distance.min
        const distanceY = Math.random() * (settings.distance.max - settings.distance.min) + settings.distance.min

        return (
          <motion.div
            key={bubble.id}
            className={`absolute rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-br from-blue-400/20 to-blue-600/20"
                : "bg-gradient-to-br from-blue-400/10 to-blue-600/10"
            } backdrop-blur-sm`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              border: theme === "dark" ? "1px solid rgba(100, 150, 255, 0.2)" : "1px solid rgba(50, 100, 200, 0.1)",
            }}
            animate={{
              x: [0, distanceX, 0, -distanceX, 0],
              y: [0, distanceY, 0, -distanceY, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}
