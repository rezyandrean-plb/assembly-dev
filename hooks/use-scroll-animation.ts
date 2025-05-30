"use client"

import { useEffect, type RefObject } from "react"
import anime from "animejs"

interface AnimationOptions {
  rootMargin?: string
  threshold?: number
  once?: boolean
}

export function useScrollAnimation(containerRef: RefObject<HTMLElement>, options: AnimationOptions = {}) {
  const { rootMargin = "-100px", threshold = 0.1, once = true } = options

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id

            // Animate the section container
            anime({
              targets: `#${sectionId}`,
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              easing: "easeOutQuad",
            })

            // Animate the heading
            anime({
              targets: `#${sectionId} h2`,
              opacity: [0, 1],
              translateY: [20, 0],
              scale: [0.95, 1],
              duration: 1000,
              delay: 200,
              easing: "easeOutQuad",
            })

            // Animate the paragraph
            anime({
              targets: `#${sectionId} p`,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
              delay: 400,
              easing: "easeOutQuad",
            })

            // Animate the image
            anime({
              targets: `#${sectionId} img`,
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 1200,
              delay: 300,
              easing: "easeOutQuad",
            })

            // Animate list items if they exist
            const listItems = document.querySelectorAll(`#${sectionId} li`)
            if (listItems.length > 0) {
              anime({
                targets: listItems,
                opacity: [0, 1],
                translateX: [20, 0],
                duration: 800,
                delay: anime.stagger(150, { start: 500 }),
                easing: "easeOutQuad",
              })
            }

            // Unobserve after animation if once is true
            if (once) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    )

    // Observe all sections
    const sections = containerRef.current.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [containerRef, rootMargin, threshold, once])
}
