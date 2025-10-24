"use client"

import { useEffect, useState } from "react"
import Confetti from "@/components/confetti"
import FloatingBalloons from "@/components/floating-balloons"
import BirthdayGreeting from "@/components/birthday-greeting"
import MiniSurprise from "@/components/mini-surprise"
import VideoStage from "@/components/video-stage"
import FinalMessage from "@/components/final-message"
import BirthdayMusic from "@/components/birthday-music"

export default function Home() {
  const [stage, setStage] = useState<"greeting" | "video" | "final">("greeting")
  const [showVideo, setShowVideo] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)

  // Auto-play music and start confetti on mount
  useEffect(() => {
    const audioElement = document.getElementById("birthday-audio") as HTMLAudioElement
    if (audioElement) {
      audioElement.play().catch(() => {
        // Autoplay might be blocked, that's okay
      })
    }
  }, [])

  // Transition to video stage after 5-8 seconds
  useEffect(() => {
    const delay = Math.random() * 3000 + 5000 // 5-8 seconds
    const timer = setTimeout(() => {
      setShowVideo(true)
      setStage("video")
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  // Transition to final message when video ends
  const handleVideoEnd = () => {
    setVideoEnded(true)
    setStage("final")
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" />

      {/* Confetti */}
      <Confetti />

      {/* Floating Balloons */}
      <FloatingBalloons />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 overflow-y-auto">
        {/* Stage 1: Birthday Greeting */}
        {stage === "greeting" && (
          <div className="w-full flex flex-col items-center justify-center gap-8 py-8">
            <BirthdayGreeting />
            <MiniSurprise />
          </div>
        )}

        {/* Stage 2: Video */}
        {showVideo && stage === "video" && <VideoStage onVideoEnd={handleVideoEnd} />}

        {/* Stage 3: Final Message */}
        {videoEnded && stage === "final" && <FinalMessage />}
      </div>

      {/* Hidden audio element for birthday music */}
      <BirthdayMusic />
    </main>
  )
}
