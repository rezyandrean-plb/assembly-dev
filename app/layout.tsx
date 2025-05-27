import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NetworkProvider } from "@/context/network-context"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { CartProvider } from "@/components/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Assembly.sg - Creating Creators, Empowering Realtors",
  description: "Singapore's premier knowledge hub for real estate professionals.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NetworkProvider>
            <ScrollToTop />
            <div className="relative min-h-screen flex flex-col bg-[#F5F5F5]">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </NetworkProvider>
          <Toaster position="top-center" />
        </CartProvider>
      </body>
    </html>
  )
}
