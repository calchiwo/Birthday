"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Surprise1Screen() {
  const router = useRouter()

  const handleNext = () => {
    // Navigate to next surprise screen
    router.push("/surprise-2")
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="flex flex-col items-center justify-center gap-8 px-4">
        {/* Surprise Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-8">
            Your First Surprise!
          </h1>

          {/* Gift Placeholder */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-12 shadow-lg mb-8">
            <div className="text-8xl animate-bounce">🎁</div>
            <p className="text-xl font-semibold text-purple-700 mt-4">Your first surprise!</p>
          </div>
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          size="lg"
          className="mt-8 px-8 py-6 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Next Surprise →
        </Button>

        {/* Decorative elements */}
        <div className="mt-12 flex gap-4 text-4xl">
          <span className="animate-pulse">🎈</span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            ✨
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            🎊
          </span>
        </div>
      </div>
    </main>
  )
}
