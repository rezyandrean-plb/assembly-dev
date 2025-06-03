"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function ScrollToTopContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // When the route changes, scroll to the top of the page
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  return null // This component doesn't render anything
}

export default function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopContent />
    </Suspense>
  )
}
