"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bell, ChevronDown, User, LogOut, Settings, FileText, ShoppingBag } from "lucide-react"
import CartIcon from "./cart-icon"

export default function ProfileNavbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    if (isNotificationsOpen) setIsNotificationsOpen(false)
  }

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
    if (isDropdownOpen) setIsDropdownOpen(false)
  }

  const handleNavigation = (href) => {
    setIsDropdownOpen(false)
    setIsNotificationsOpen(false)
    router.push(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/courses" className="nav-link">
            Courses
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/plb-book" className="nav-link">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>

          <div className="flex items-center space-x-4">
            <CartIcon />

            <div className="relative">
              <button onClick={toggleNotifications} className="relative p-1 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
                {hasNotifications && (
                  <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <button className="text-xs text-blue-600 hover:underline">Mark all as read</button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
                      <p className="text-sm font-medium text-gray-800">New course available</p>
                      <p className="text-xs text-gray-500 mt-1">
                        "Advanced Property Investment Strategies" is now available.
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">Course completed</p>
                      <p className="text-xs text-gray-500 mt-1">
                        You've completed "HDB Investment Masterclass". View your certificate.
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-800">Upcoming webinar</p>
                      <p className="text-xs text-gray-500 mt-1">
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button className="text-sm text-blue-600 hover:underline w-full text-center">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                  <Image src="/profile-placeholder.png" alt="Profile" width={32} height={32} className="object-cover" />
                </div>
                <span className="font-medium text-sm">Melvin Lim</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">melvin.lim@example.com</p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">Account Settings</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/purchase-history")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">Purchase History</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <Settings className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">Settings</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">Terms of Use</span>
                    </div>
                  </button>

                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600">
                      <div className="flex items-center space-x-2">
                        <LogOut className="h-5 w-5" />
                        <span className="text-sm">Log out</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <CartIcon />
          <button className="ml-4 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
