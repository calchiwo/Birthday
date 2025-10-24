"use client"

import { useEffect, useState } from "react"

export default function BirthdayGreeting() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`text-center transition-all duration-1000 transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 animate-bounce">
        Happy Birthday, Christabel 🥹
      </h1>
      <p className="text-lg md:text-2xl text-purple-600 font-semibold max-w-2xl mx-auto leading-relaxed">
        This special birthday surprise is for you, from Caleb 🥳
      </p>
    </div>
  )
}
