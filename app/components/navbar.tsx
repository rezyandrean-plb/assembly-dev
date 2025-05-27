"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import CartIcon from "./cart-icon"
import { ChevronDown, User, LogOut, Settings, HelpCircle, Bell } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)

  useEffect(() => {
    // Function to check if user is logged in based on current path
    const checkLoginStatus = () => {
      // Get the current path
      const currentPath = window.location.pathname

      // If user is on profile page or any subpath of profile, they must be logged in
      if (currentPath.startsWith("/profile")) {
        setIsLoggedIn(true)
        return
      }

      // Check other authenticated paths
      const isAuthenticatedPath = currentPath.includes("/cart") || sessionStorage.getItem("fromLogin") === "true"

      if (isAuthenticatedPath) {
        setIsLoggedIn(true)
      }
    }

    // Check login status immediately when component mounts
    checkLoginStatus()

    // Set up scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    sessionStorage.setItem("fromLogin", "true")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/assembly-logo.png" alt="Assembly SG Logo" width={60} height={60} />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/courses" className="nav-link">
            Courses
          </Link>
          <Link href="/learning-paths" className="nav-link">
            Learning Paths
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <CartIcon />

              <div className="relative">
                <button className="relative p-1 rounded-full hover:bg-gray-100">
                  <Bell className="h-6 w-6 text-gray-600" />
                  {hasNotifications && (
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                  )}
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/professional-headshot.png"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-sm">Paul Tan</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">paul.tan@example.com</p>
                      <p className="text-xs text-gray-500 mt-1">Premium Member</p>
                    </div>

                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-50">
                      <div className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">Profile</span>
                      </div>
                    </Link>

                    <Link href="/profile/settings" className="block px-4 py-2 hover:bg-gray-50">
                      <div className="flex items-center space-x-2">
                        <Settings className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">Settings</span>
                      </div>
                    </Link>

                    <Link href="/help" className="block px-4 py-2 hover:bg-gray-50">
                      <div className="flex items-center space-x-2">
                        <HelpCircle className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">Help & Support</span>
                      </div>
                    </Link>

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
          ) : (
            <div className="flex items-center space-x-4">
              <CartIcon />
              <Link href="/profile" className="btn btn-outline" onClick={handleLogin}>
                Log In
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <CartIcon />
          <button className="ml-4 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link href="/courses" className="block py-2">
              Courses
            </Link>
            <Link href="/learning-paths" className="block py-2">
              Learning Paths
            </Link>
            <Link href="/about" className="block py-2">
              About
            </Link>
            <Link href="/contact" className="block py-2">
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <div className="py-2 border-t border-gray-100 mt-2">
                  <div className="flex items-center space-x-2 py-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/professional-headshot.png"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">Paul Tan</span>
                  </div>
                </div>
                <Link href="/profile" className="block py-2 pl-10">
                  Profile
                </Link>
                <Link href="/profile/settings" className="block py-2 pl-10">
                  Settings
                </Link>
                <Link href="/help" className="block py-2 pl-10">
                  Help & Support
                </Link>
                <button className="block py-2 pl-10 text-red-600">Log out</button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2">
                  Log In
                </Link>
                <Link href="/signup" className="block py-2 text-blue-600 font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
