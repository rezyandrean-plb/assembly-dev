"use client"

import { useEffect, useState, useRef } from "react"
import HeroSection from "@/components/sections/hero-section"
import PlatformSection from "@/components/sections/platform-section"
import PillarsSection from "@/components/sections/pillars-section"
import BeginnerPathSection from "@/components/sections/learning-paths/beginner-path-section"
import CondoPathSection from "@/components/sections/learning-paths/condo-path-section"
import HdbPathSection from "@/components/sections/learning-paths/hdb-path-section"
import BenefitsSection from "@/components/sections/benefits-section"
import CtaSection from "@/components/sections/cta-section"
import NetworkBackground from "@/components/network-background"
import Navbar from "@/components/navbar"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now()
      const timeDelta = currentTime - lastScrollTime.current

      if (timeDelta > 0) {
        // Calculate scroll speed (pixels per millisecond)
        const currentScrollY = window.scrollY
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)
        const speed = scrollDelta / timeDelta

        setScrollY(currentScrollY)
        setScrollSpeed(speed * 100) // Scale for better usability

        lastScrollY.current = currentScrollY
        lastScrollTime.current = currentTime
      }
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    // Set initial values
    handleResize()

    // Add event listeners
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Add a small timeout to reset scroll speed when scrolling stops
    const scrollTimeout = setInterval(() => {
      if (Date.now() - lastScrollTime.current > 100) {
        setScrollSpeed(0)
      }
    }, 100)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      clearInterval(scrollTimeout)
    }
  }, [])

  return (
    <>
      <Navbar />
      <NetworkBackground scrollY={scrollY} scrollSpeed={scrollSpeed} windowHeight={windowHeight} />
      <HeroSection />
      <PlatformSection />
      <PillarsSection />
      <BeginnerPathSection />
      <CondoPathSection />
      <HdbPathSection />
      <BenefitsSection />
      <CtaSection />
    </>
  )
}
