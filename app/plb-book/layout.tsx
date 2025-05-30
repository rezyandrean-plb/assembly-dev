import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import "./styles.css"

// Use Next.js font optimization
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Property Leverage Blueprint | Assembly SG",
  description: "Your guide to strategic property investment in Singapore",
}

export default function PLBBookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
