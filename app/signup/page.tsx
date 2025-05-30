"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { X, Eye, EyeOff, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { NetworkProvider } from "@/context/network-context"
import NetworkBackground from "@/components/network-background"

interface FormData {
  firstName: string
  lastName: string
  email: string
  countryCode: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  password?: string
  confirmPassword?: string
  general?: string
}

interface CountryCode {
  code: string
  name: string
  flag: string
  dialCode: string
}

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+65", // Singapore as default
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  // Common country codes with flags (focusing on Asia-Pacific region first)
  const countryCodes: CountryCode[] = [
    { code: "SG", name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", dialCode: "+60" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", dialCode: "+62" },
    { code: "TH", name: "Thailand", flag: "🇹🇭", dialCode: "+66" },
    { code: "PH", name: "Philippines", flag: "🇵🇭", dialCode: "+63" },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", dialCode: "+84" },
    { code: "AU", name: "Australia", flag: "🇦🇺", dialCode: "+61" },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", dialCode: "+64" },
    { code: "CN", name: "China", flag: "🇨🇳", dialCode: "+86" },
    { code: "JP", name: "Japan", flag: "🇯🇵", dialCode: "+81" },
    { code: "KR", name: "South Korea", flag: "🇰🇷", dialCode: "+82" },
    { code: "IN", name: "India", flag: "🇮🇳", dialCode: "+91" },
    { code: "HK", name: "Hong Kong", flag: "🇭🇰", dialCode: "+852" },
    { code: "TW", name: "Taiwan", flag: "🇹🇼", dialCode: "+886" },
    { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCountryCodeSelect = (dialCode: string) => {
    setFormData((prev) => ({ ...prev, countryCode: dialCode }))
    setShowCountryDropdown(false)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^\d{8,12}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success state
      setIsSuccess(true)

      // Redirect to home after a delay
      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (err) {
      setErrors({
        general: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Find the selected country
  const selectedCountry = countryCodes.find((country) => country.dialCode === formData.countryCode) || countryCodes[0]

  return (
    <NetworkProvider>
      <main className="relative overflow-hidden bg-[#F5F5F5] min-h-screen">
        <NetworkBackground scrollY={0} scrollSpeed={0} windowHeight={0} opacity={0.3} />
        <Navbar />

        <section className="pt-32 pb-16 relative z-10">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-bold text-lg">Create an Account</h3>
                <Link href="/" className="p-1 rounded-full hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </Link>
              </div>

              {!isSuccess ? (
                <div className="p-6">
                  <p className="mb-6">
                    Join Assembly.sg to access exclusive property investment courses and resources.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.firstName ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.lastName ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="Doe"
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number
                      </label>
                      <div className="flex">
                        <div className="relative">
                          <button
                            type="button"
                            className={`flex items-center justify-between px-3 py-2 border ${
                              errors.phoneNumber ? "border-red-500" : "border-gray-300"
                            } border-r-0 rounded-l-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#123B79] w-[110px]`}
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          >
                            <span className="flex items-center">
                              <span className="mr-2 text-lg">{selectedCountry.flag}</span>
                              <span>{selectedCountry.dialCode}</span>
                            </span>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          </button>

                          {showCountryDropdown && (
                            <div className="absolute z-10 mt-1 w-[220px] bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm border border-gray-200">
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => handleCountryCodeSelect(country.dialCode)}
                                >
                                  <span className="mr-2 text-lg">{country.flag}</span>
                                  <span className="mr-2">{country.dialCode}</span>
                                  <span className="text-gray-500">{country.name}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`flex-1 px-3 py-2 border ${
                            errors.phoneNumber ? "border-red-500" : "border-gray-300"
                          } rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="81234567"
                        />
                      </div>
                      {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.password ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                      {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                      <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.confirmPassword ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>

                    {errors.general && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{errors.general}</div>
                    )}

                    <Button type="submit" className="w-full bg-[#123B79] hover:bg-[#0A2A5E]" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Creating account...
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <Link href="/login" className="text-[#123B79] hover:underline">
                        Log in
                      </Link>
                    </div>

                    <div className="text-xs text-gray-500 pt-4">
                      By creating an account, you agree to our{" "}
                      <Link href="/terms" className="text-[#123B79] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#123B79] hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Created Successfully!</h2>
                  <p className="text-gray-600 mb-6">
                    Welcome to Assembly.sg! You're now being redirected to the homepage.
                  </p>
                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 animate-[progress_3s_ease-in-out]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </NetworkProvider>
  )
}
