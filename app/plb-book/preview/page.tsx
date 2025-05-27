"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import NetworkBackground from "@/components/network-background"

export default function BookPreviewPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    propertyType: "None",
    marketingConsent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formState)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      <NetworkBackground scrollY={0} scrollSpeed={0} windowHeight={window.innerHeight} />

      <div className="container mx-auto py-16 px-4">
        <Link href="/plb-book" className="inline-flex items-center text-primary mb-8 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Book Page
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Book Cover Side */}
            <div className="bg-primary p-8 flex flex-col justify-center items-center text-white">
              <div className="max-w-md">
                <div className="relative w-full max-w-xs mx-auto mb-8">
                  <div className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-xl transform rotate-3 mx-auto">
                    <div className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <h3 className="text-primary text-xl font-bold mb-2">POSITIONING</h3>
                        <h4 className="text-primary text-lg mb-4">THE ART OF SELLING YOUR PROPERTY</h4>
                        <p className="text-sm text-gray-600">TO ITS MAXIMUM POTENTIAL</p>
                        <div className="mt-8">
                          <p className="text-primary font-bold">MELVIN LIM</p>
                          <p className="text-xs text-gray-500">CO-FOUNDER & CEO PROPERTYLIMBROTHERS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Unlock Your Property's Maximum Potential</h2>
                <p className="mb-6">
                  Delve into a comprehensive guide to optimising property value, blending market insights, data
                  analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8">
                  <div className="flex items-center">
                    <span className="text-sm mr-3 opacity-70">01</span>
                    <span>The Most Common Reasons for Selling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-3 opacity-70">02</span>
                    <span>12 Steps to Selling Your Home</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-3 opacity-70">03</span>
                    <span>Product Positioning: Transforming the home</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Claim Your Free Preview Now</h2>
                  <p className="text-gray-600 mb-8">
                    Grab our complimentary chapter packed with actionable insights to start transforming your
                    home-selling experience today!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="None">None</option>
                        <option value="HDB">HDB</option>
                        <option value="Condo">Condominium</option>
                        <option value="Landed">Landed Property</option>
                        <option value="Multiple">Multiple Properties</option>
                      </select>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                      />
                      <label htmlFor="marketingConsent" className="ml-2 block text-sm text-gray-600">
                        Upon registering, you agree to receive future marketing materials from PropertyLimBrothers. Your
                        personal information will be used in accordance with our privacy policy.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? "Processing..." : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
                  <p className="text-gray-600 mb-8">
                    Your free preview is on its way to your inbox. Please check your email in the next few minutes.
                  </p>
                  <Link href="/plb-book">
                    <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors">
                      Return to Book Page
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
