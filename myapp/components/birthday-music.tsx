"use client"

export default function BirthdayMusic() {
  return (
    <audio id="birthday-audio" preload="auto" loop={false}>
      <source src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" type="audio/mp3" />
    </audio>
  )
}
