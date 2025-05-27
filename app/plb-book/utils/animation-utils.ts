import anime from "animejs"

export const textReveal = (target: string | HTMLElement, delay = 0) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => delay + i * 50,
    autoplay: false,
  })
}

export const fadeInUp = (target: string | HTMLElement, delay = 0, duration = 800) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeOutExpo",
    duration,
    delay,
    autoplay: false,
  })
}

export const floatingAnimation = (target: string | HTMLElement) => {
  return anime({
    targets: target,
    translateY: ["-5px", "5px"],
    duration: 3000,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  })
}

export const counterAnimation = (target: string | HTMLElement, endValue: number, duration = 2000) => {
  return anime({
    targets: target,
    innerHTML: [0, endValue],
    round: 1,
    easing: "easeInOutExpo",
    duration,
    autoplay: false,
  })
}

export const pageFlipAnimation = (target: string | HTMLElement) => {
  return anime({
    targets: target,
    rotateY: [0, 180],
    duration: 1200,
    easing: "easeInOutSine",
    autoplay: false,
  })
}
