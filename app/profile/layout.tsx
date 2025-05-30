"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, BookOpen, Award, Heart, MessageSquare, LogOut } from "lucide-react"
import NetworkBackground from "@/components/network-background"
import { Suspense } from "react"
import ProfileNavbar from "../components/profile-navbar"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 relative">
      <NetworkBackground scrollY={scrollY} scrollSpeed={0.5} windowHeight={0} opacity={0.05} />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar />

      <div className="flex">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
        >
          <div className="flex flex-col h-full">
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/profile-placeholder.png"
                    alt="Melvin Lim"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">Melvin Lim</h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">MAIN NAVIGATION</p>
              <Link
                href="/profile"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <Home size={18} />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <User size={18} />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <BookOpen size={18} />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <Award size={18} />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <MessageSquare size={18} />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <Heart size={18} />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4">
              <button className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </div>
    </div>
  )
}
