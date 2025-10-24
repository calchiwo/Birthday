"use client"

import { useEffect } from "react"

export default function BirthdayMusic() {
  useEffect(() => {
    const audio = document.getElementById("birthday-audio") as HTMLAudioElement | null
    if (audio) {
      // Try to play automatically (some browsers may require interaction)
      audio.play().catch((err) => {
        console.log("Autoplay blocked by browser:", err)
      })
    }
  }, [])

  return (
    <audio id="birthday-audio" preload="auto" loop={false}>
      <source src="/birthday-music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}
