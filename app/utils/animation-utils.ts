// Helper function to create scroll-triggered animations
export const createScrollAnimation = (
  element: Element | null,
  animationFunction: () => void,
  threshold = 0.2,
): (() => void) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFunction()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold },
  )

  if (element) {
    observer.observe(element)
  }

  return () => {
    if (element) {
      observer.unobserve(element)
    }
  }
}

// Remove all other unused functions
