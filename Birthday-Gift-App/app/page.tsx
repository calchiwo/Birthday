"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function WelcomeScreen() {
  const [isStarted, setIsStarted] = useState(false)

  const handleStart = () => {
    setIsStarted(true)
    // Add celebration animation or navigate to next screen
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="flex flex-col items-center justify-center gap-8 px-4">
        {/* Birthday Message */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">Christabel</h2>
          <div className="text-6xl mt-4 animate-bounce">🎉</div>
        </div>

        {/* Call to Action Button */}
        <Button
          onClick={handleStart}
          size="lg"
          className="mt-8 px-8 py-6 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Tap to start your surprise
        </Button>

        {/* Decorative elements */}
        <div className="mt-12 flex gap-4 text-4xl">
          <span className="animate-pulse">🎈</span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🎂
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            🎁
          </span>
        </div>
      </div>
    </main>
  )
}
