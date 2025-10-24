"use client"

import { useEffect, useState } from "react"

export default function FinalMessage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`text-center transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        animation: isVisible ? "fade-in-up 1s ease-out" : "none",
      }}
    >
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto backdrop-blur-sm">
        <p className="text-2xl md:text-4xl font-bold text-pink-600 mb-4">Hope you loved your surprise 🥰</p>
        <p className="text-xl md:text-2xl text-purple-600 font-semibold mb-4">You're the best sister ever! 💖</p>
        <p className="text-lg md:text-xl text-gray-700 font-medium">From Caleb</p>
      </div>

      {/* Decorative elements */}
      <div className="mt-8 flex justify-center gap-4 text-4xl md:text-5xl animate-pulse">
        <span>🎉</span>
        <span>💝</span>
        <span>🎊</span>
      </div>
    </div>
  )
}
