"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  const textRef = useRef(null)
  const subTextRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current || !canvasRef.current) return

    // Setup canvas for background animation
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create cityscape silhouette
    const buildings = []
    const buildingCount = Math.floor(canvas.width / 40)
    const baseHeight = canvas.height * 0.7

    for (let i = 0; i < buildingCount; i++) {
      const width = Math.random() * 60 + 20
      const height = Math.random() * 150 + 50
      const x = i * 40
      const y = baseHeight - height

      buildings.push({
        x,
        y,
        width,
        height,
        windows: Math.floor(height / 20),
        windowLights: Array(Math.floor(height / 20))
          .fill(0)
          .map(() => Math.random() > 0.7),
      })
    }

    // Draw cityscape
    function drawCityscape() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient sky
      const gradient = ctx.createLinearGradient(0, 0, 0, baseHeight)
      gradient.addColorStop(0, "#0f172a") // Dark blue
      gradient.addColorStop(1, "#475569") // Lighter blue-gray
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * baseHeight * 0.8
        const radius = Math.random() * 1.5
        const opacity = Math.random() * 0.8 + 0.2

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      }

      // Draw buildings
      buildings.forEach((building) => {
        // Building silhouette
        ctx.fillStyle = "#0f172a"
        ctx.fillRect(building.x, building.y, building.width, building.height)

        // Windows
        const windowWidth = building.width * 0.6
        const windowHeight = 10
        const windowX = building.x + (building.width - windowWidth) / 2

        for (let i = 0; i < building.windows; i++) {
          const windowY = building.y + 15 + i * 20

          // Only draw if within building
          if (windowY + windowHeight < building.y + building.height) {
            ctx.fillStyle = building.windowLights[i] ? "rgba(255, 206, 84, 0.8)" : "rgba(255, 255, 255, 0.2)"
            ctx.fillRect(windowX, windowY, windowWidth, windowHeight)
          }
        }
      })

      // Randomly toggle window lights
      if (Math.random() > 0.95) {
        const buildingIndex = Math.floor(Math.random() * buildings.length)
        const windowIndex = Math.floor(Math.random() * buildings[buildingIndex].windows)
        buildings[buildingIndex].windowLights[windowIndex] = !buildings[buildingIndex].windowLights[windowIndex]
      }

      requestAnimationFrame(drawCityscape)
    }

    // Start animation
    drawCityscape()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Text animation
    const textAnimation = anime.timeline({
      easing: "easeOutExpo",
    })

    // Split text into letters
    if (textRef.current) {
      textRef.current.innerHTML = textRef.current.textContent.replace(
        /\S/g,
        "<span class='letter inline-block opacity-0'>$&</span>",
      )

      textAnimation
        .add({
          targets: ".hero-title .letter",
          opacity: [0, 1],
          translateY: [20, 0],
          translateZ: 0,
          duration: 1200,
          delay: (el, i) => 300 + 30 * i,
        })
        .add(
          {
            targets: ".hero-subtitle",
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
          },
          "-=800",
        )
        .add(
          {
            targets: ".hero-cta",
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
          },
          "-=600",
        )
        .add(
          {
            targets: ".scroll-indicator",
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
          },
          "-=400",
        )
    }

    // Abstract lines animation
    const linesAnimation = anime({
      targets: ".abstract-line",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => i * 250,
      direction: "alternate",
      loop: true,
    })

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Abstract animated lines */}
      <svg className="absolute inset-0 z-10 w-full h-full" preserveAspectRatio="none">
        <line
          className="abstract-line"
          x1="0"
          y1="70%"
          x2="100%"
          y2="30%"
          stroke="rgba(249, 115, 22, 0.3)"
          strokeWidth="2"
        />
        <line
          className="abstract-line"
          x1="20%"
          y1="0"
          x2="80%"
          y2="100%"
          stroke="rgba(249, 115, 22, 0.2)"
          strokeWidth="1"
        />
        <line
          className="abstract-line"
          x1="80%"
          y1="0"
          x2="20%"
          y2="100%"
          stroke="rgba(249, 115, 22, 0.2)"
          strokeWidth="1"
        />
      </svg>

      <div className="container relative z-20 text-center px-4">
        <h1 ref={textRef} className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
          Unlock Your Potential in Singapore Real Estate
        </h1>

        <p
          ref={subTextRef}
          className="hero-subtitle text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto opacity-0"
        >
          Navigate the dynamic Singapore property market with expert insights and community support
        </p>

        <div ref={ctaRef} className="hero-cta opacity-0">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full hover:shadow-lg transition-all"
          >
            Start Your Journey
          </Button>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0 text-white text-center">
        <p className="text-sm mb-2">Scroll to explore</p>
        <ArrowDown className="h-6 w-6 mx-auto animate-bounce" />
      </div>
    </section>
  )
}
