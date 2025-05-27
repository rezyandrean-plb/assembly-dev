"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type anime from "animejs"

export const useScrollAnimation = (animationFn: () => anime.AnimeInstance, threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    let animation: anime.AnimeInstance

    if (inView) {
      animation = animationFn()
      animation.play()
    }

    return () => {
      if (animation && animation.pause) {
        animation.pause()
      }
    }
  }, [inView, animationFn])

  return ref
}
