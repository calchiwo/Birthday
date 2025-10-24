"use client"

import { useEffect, useState } from "react"

export default function MiniSurprise() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay the mini surprise appearance
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      style={{
        animation: isVisible ? "bounce-in 0.8s ease-out" : "none",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md mx-auto">
        <div className="text-6xl md:text-7xl text-center mb-4">🎁</div>
        <p className="text-center text-xl md:text-2xl font-bold text-purple-600">Here's your gift!</p>
        <p className="text-center text-sm md:text-base text-gray-600 mt-3">Something special is coming your way...</p>
      </div>
    </div>
  )
}
