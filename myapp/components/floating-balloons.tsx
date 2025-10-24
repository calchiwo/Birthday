"use client"

import { useEffect, useState } from "react"

interface Balloon {
  id: number
  left: number
  delay: number
  duration: number
  color: string
}

const balloonColors = ["#ff69b4", "#ba55d3", "#ffd700", "#ff1493", "#da70d6", "#87ceeb", "#ffb6c1"]

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([])

  useEffect(() => {
    // Create initial balloons
    const initialBalloons: Balloon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
    }))

    setBalloons(initialBalloons)

    // Add new balloons periodically
    const interval = setInterval(() => {
      setBalloons((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
          color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        },
      ])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-pulse"
          style={{
            left: `${balloon.left}%`,
            bottom: "-50px",
            animation: `float-up ${balloon.duration}s linear ${balloon.delay}s forwards`,
          }}
        >
          {/* Balloon */}
          <div
            className="w-8 h-10 rounded-full shadow-lg relative"
            style={{
              backgroundColor: balloon.color,
              opacity: 0.9,
            }}
          >
            {/* Balloon shine */}
            <div
              className="absolute top-1 left-1 w-2 h-2 rounded-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
              }}
            />
          </div>

          {/* String */}
          <div
            className="w-0.5 h-12"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              margin: "0 auto",
            }}
          />
        </div>
      ))}
    </div>
  )
}
