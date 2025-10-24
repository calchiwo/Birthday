"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
  rotation: number
  rotationSpeed: number
}

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const colors = ["#ff69b4", "#ba55d3", "#ffd700", "#ff1493", "#da70d6", "#87ceeb"]

    // Create initial confetti burst
    const createConfetti = () => {
      const particleCount = 80
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        const velocity = 5 + Math.random() * 8
        particlesRef.current.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 2,
          life: 1,
          maxLife: 3 + Math.random() * 2,
          size: 4 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
        })
      }
    }

    // Create continuous confetti
    const createContinuousConfetti = () => {
      if (Math.random() < 0.3) {
        const x = Math.random() * canvas.width
        const y = -10
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 3,
          vy: 2 + Math.random() * 3,
          life: 1,
          maxLife: 4 + Math.random() * 2,
          size: 3 + Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
        })
      }
    }

    createConfetti()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create continuous confetti
      createContinuousConfetti()

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i]

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // gravity
        p.life -= 1 / 60
        p.rotation += p.rotationSpeed

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1)
          continue
        }

        const alpha = Math.max(0, p.life / p.maxLife)
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-20" />
}
