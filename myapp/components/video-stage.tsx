"use client"

import { useEffect, useState } from "react"

interface VideoStageProps {
  onVideoEnd: () => void
}

export default function VideoStage({ onVideoEnd }: VideoStageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`w-full max-w-2xl transition-all duration-1000 transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <video autoPlay controls onEnded={onVideoEnd} className="w-full h-auto" style={{ maxHeight: "70vh" }}>
          <source src="/video/birthday-greeting.mp4" type="video/mp4" />
          {/* Fallback if video doesn't exist */}
          <div className="w-full h-96 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
            <p className="text-white text-2xl font-bold">🎬 Birthday Video</p>
          </div>
        </video>
      </div>
      <p className="text-center text-white text-sm mt-4 font-semibold">Playing your special birthday video...</p>
    </div>
  )
}
