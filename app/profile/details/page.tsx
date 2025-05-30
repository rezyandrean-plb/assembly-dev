"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, BookOpen, Sliders, Target } from "lucide-react"

export default function LearningPreferencesPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Predefined list of interest areas
  const availableInterests = [
    "HDB Investment",
    "Condo Investment",
    "Commercial Property",
    "Property Financing",
    "Property Tax Planning",
    "Rental Management",
    "Property Valuation",
    "Market Analysis",
    "Real Estate Law",
    "Property Flipping",
    "REIT Investing",
    "International Property",
    "Property Development",
    "Mortgage Refinancing",
    "Retirement Planning with Property",
  ]

  // Mock user data
  const [userData, setUserData] = useState({
    interests: ["HDB Investment", "Condo Investment", "Property Financing", "Market Analysis"],
    experience: "Intermediate",
    learningGoals:
      "Learn advanced property investment strategies and understand the Singapore real estate market in depth.",
    preferredFormat: ["Video Courses", "Case Studies", "Interactive Workshops"],
  })

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, you would save the data to your backend here
  }

  const handleInterestChange = (interest) => {
    if (userData.interests.includes(interest)) {
      setUserData({
        ...userData,
        interests: userData.interests.filter((i) => i !== interest),
      })
    } else {
      setUserData({
        ...userData,
        interests: [...userData.interests, interest],
      })
    }
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Learning Preferences</h1>
          <p className="text-gray-500 mt-1">Customize your learning experience and notification settings</p>
        </div>

        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className={`mt-4 md:mt-0 px-4 py-2 rounded-lg flex items-center gap-2 ${
            isEditing
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span>Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Course Matching Notifications</h3>
              <p className="text-blue-700 mt-1">
                We'll notify you when new courses match your learning preferences. Set your interests and experience
                level below to receive personalized recommendations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Left Column - Areas of Interest */}
        <motion.div
          className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Target className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Areas of Interest</h3>
          </div>

          <p className="text-gray-600 mb-4">Select topics you're interested in learning about</p>

          <div className="space-y-4">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {userData.interests.map((interest, index) => (
                <div key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm">No interests selected</div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Select your interests:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {availableInterests.map((interest) => (
                    <label key={interest} className="flex items-center p-2 hover:bg-gray-100 rounded">
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Sliders className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Experience Level</h3>
            </div>

            <p className="text-gray-600 mb-4">Select your current knowledge level</p>

            {isEditing ? (
              <div className="flex flex-col space-y-2">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="experience"
                    value="Beginner"
                    checked={userData.experience === "Beginner"}
                    onChange={() => setUserData({ ...userData, experience: "Beginner" })}
                    className="h-4 w-4 text-blue-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">Beginner</span>
                    <span className="block text-xs text-gray-500">New to property investment</span>
                  </div>
                </label>
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="experience"
                    value="Intermediate"
                    checked={userData.experience === "Intermediate"}
                    onChange={() => setUserData({ ...userData, experience: "Intermediate" })}
                    className="h-4 w-4 text-blue-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">Intermediate</span>
                    <span className="block text-xs text-gray-500">Some experience with property investment</span>
                  </div>
                </label>
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="experience"
                    value="Advanced"
                    checked={userData.experience === "Advanced"}
                    onChange={() => setUserData({ ...userData, experience: "Advanced" })}
                    className="h-4 w-4 text-blue-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">Advanced</span>
                    <span className="block text-xs text-gray-500">Experienced property investor</span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-medium text-gray-700">{userData.experience}</span>
              </div>
            )}
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Learning Goals</h3>
            </div>

            <p className="text-gray-600 mb-4">What do you want to achieve through our courses?</p>

            {isEditing ? (
              <textarea
                value={userData.learningGoals}
                onChange={(e) => setUserData({ ...userData, learningGoals: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your learning goals..."
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{userData.learningGoals}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Column - Preferred Format */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Preferred Learning Format */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Preferred Format</h3>
            </div>

            <p className="text-gray-600 mb-4">How do you prefer to learn?</p>

            {isEditing ? (
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Video Courses")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Video Courses"]
                        : userData.preferredFormat.filter((f) => f !== "Video Courses")
                      setUserData({ ...userData, preferredFormat: newFormats })
                    }}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Video Courses</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Text Articles")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Text Articles"]
                        : userData.preferredFormat.filter((f) => f !== "Text Articles")
                      setUserData({ ...userData, preferredFormat: newFormats })
                    }}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Text Articles</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Interactive Workshops")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Interactive Workshops"]
                        : userData.preferredFormat.filter((f) => f !== "Interactive Workshops")
                      setUserData({ ...userData, preferredFormat: newFormats })
                    }}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Interactive Workshops</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Case Studies")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Case Studies"]
                        : userData.preferredFormat.filter((f) => f !== "Case Studies")
                      setUserData({ ...userData, preferredFormat: newFormats })
                    }}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Case Studies</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Live Webinars")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Live Webinars"]
                        : userData.preferredFormat.filter((f) => f !== "Live Webinars")
                      setUserData({ ...userData, preferredFormat: newFormats })
                    }}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Live Webinars</span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {userData.preferredFormat.map((format, index) => (
                  <div key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {format}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
