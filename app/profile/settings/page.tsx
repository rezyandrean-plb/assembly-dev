"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Palette, Save } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications")

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
        >
          <Bell className="h-4 w-4" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
        >
          <Palette className="h-4 w-4" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        {activeTab === "notifications" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Notification Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                  <p className="text-xs text-gray-500">Receive notifications via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Email Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Course Updates</p>
                      <p className="text-xs text-gray-500">Updates about courses you're enrolled in</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">New Course Announcements</p>
                      <p className="text-xs text-gray-500">Notifications about new course releases</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Promotions and Discounts</p>
                      <p className="text-xs text-gray-500">Special offers and discounts on courses</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Learning Reminders</p>
                      <p className="text-xs text-gray-500">Reminders to continue your learning</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Notification Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "appearance" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Appearance Settings</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Theme</p>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="theme" className="sr-only" defaultChecked />
                    <div className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"></div>
                    <span className="text-sm text-gray-700">Light</span>
                  </label>
                  <label className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="theme" className="sr-only" />
                    <div className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"></div>
                    <span className="text-sm text-gray-700">Dark</span>
                  </label>
                  <label className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="theme" className="sr-only" />
                    <div className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"></div>
                    <span className="text-sm text-gray-700">System</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Font Size</p>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="fontSize" className="sr-only" />
                    <span className="text-xs mb-2">Aa</span>
                    <span className="text-sm text-gray-700">Small</span>
                  </label>
                  <label className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="fontSize" className="sr-only" defaultChecked />
                    <span className="text-sm mb-2">Aa</span>
                    <span className="text-sm text-gray-700">Medium</span>
                  </label>
                  <label className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="fontSize" className="sr-only" />
                    <span className="text-base mb-2">Aa</span>
                    <span className="text-sm text-gray-700">Large</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Reduce Animations</p>
                  <p className="text-xs text-gray-500">Minimize motion effects throughout the interface</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">High Contrast Mode</p>
                  <p className="text-xs text-gray-500">Increase contrast for better visibility</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Appearance Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
