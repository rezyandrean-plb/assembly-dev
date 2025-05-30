"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { User, Lock, Save, Upload, Camera, X } from "lucide-react"

export default function AccountPage() {
  // Add state for active tab in account section
  const [activeAccountTab, setActiveAccountTab] = useState("profile")
  const [profileImage, setProfileImage] = useState("/profile-placeholder.png")
  const [isHovering, setIsHovering] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setIsUploading(true)

      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader()
        reader.onload = (event) => {
          setProfileImage(event.target.result)
          setIsUploading(false)
        }
        reader.readAsDataURL(file)
      }, 1000)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Account Settings</h1>
      <p className="text-gray-600 mb-6">Manage your account information and security settings</p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("profile")}
        >
          <User className="h-4 w-4" />
          Profile
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "security"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("security")}
        >
          <Lock className="h-4 w-4" />
          Security
        </button>
      </div>

      {/* Content Container with Background */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        {/* Profile Tab Content */}
        {activeAccountTab === "profile" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-6">
            <div className="space-y-8">
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                    {isUploading && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full">
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>

                  {isHovering && !isUploading && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white transition-opacity"
                    >
                      <Camera className="h-8 w-8" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Profile Picture</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center sm:text-left">
                    Upload a profile picture to personalize your account.
                    <br />
                    JPG, PNG or GIF. 1MB max size.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      Upload New
                    </button>

                    {profileImage !== "/profile-placeholder.png" && (
                      <button
                        onClick={() => setProfileImage("/profile-placeholder.png")}
                        className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                      >
                        <X className="h-4 w-4" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue="melvinlim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="melvin.lim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Melvin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Lim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Tab Content */}
        {activeAccountTab === "security" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Password must be at least 8 characters and include a number and a special character.
                    </p>
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700">Add an extra layer of security to your account</p>
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send a verification code to your phone when you sign in.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Session Management</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Current Session</p>
                      <p className="text-xs text-gray-500 mt-1">Chrome on Windows • Singapore</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active now</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition"
                >
                  Sign Out of All Devices
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
