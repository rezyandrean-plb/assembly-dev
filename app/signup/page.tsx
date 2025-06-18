"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { X, Eye, EyeOff, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { NetworkProvider } from "@/context/network-context";
import NetworkBackground from "@/components/network-background";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

interface CountryCode {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+65", // Singapore as default
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

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
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCountryCodeSelect = (dialCode: string) => {
    setFormData((prev) => ({ ...prev, countryCode: dialCode }));
    setShowCountryDropdown(false);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{8,12}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success state
      setIsSuccess(true);

      // Redirect to home after a delay
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      setErrors({
        general: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Find the selected country
  const selectedCountry =
    countryCodes.find((country) => country.dialCode === formData.countryCode) ||
    countryCodes[0];

  return (
    <NetworkProvider data-oid="okmjjvl">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="j_vex.2"
      >
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={0}
          opacity={0.3}
          data-oid="bkmuu5u"
        />
        <Navbar data-oid="on5oesb" />

        <section className="pt-32 pb-16 relative z-10" data-oid="n_rs.72">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid=".-mioh0"
          >
            <div
              className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200"
              data-oid="ffsiey:"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="zv.c94r"
              >
                <h3 className="font-bold text-lg" data-oid="5j4-uye">
                  Create an Account
                </h3>
                <Link
                  href="/"
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="68awncs"
                >
                  <X className="h-5 w-5" data-oid="1z-q1fk" />
                </Link>
              </div>

              {!isSuccess ? (
                <div className="p-6" data-oid="85yj9-j">
                  <p className="mb-6" data-oid="gbs-0tv">
                    Join Assembly.sg to access exclusive property investment
                    courses and resources.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    data-oid="yhmr.3r"
                  >
                    <div className="grid grid-cols-2 gap-4" data-oid="ya4mp.9">
                      <div data-oid="m3_zs36">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="rcv7m1w"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="John"
                          data-oid="ioi-8so"
                        />

                        {errors.firstName && (
                          <p
                            className="mt-1 text-sm text-red-600"
                            data-oid="9h6k9.-"
                          >
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div data-oid="d8ulsv3">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="nu0u0jc"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="Doe"
                          data-oid="6:jwcks"
                        />

                        {errors.lastName && (
                          <p
                            className="mt-1 text-sm text-red-600"
                            data-oid="7xd7iv2"
                          >
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div data-oid="azqjoru">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="4id.6.c"
                      >
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
                        data-oid="s.o8wz4"
                      />

                      {errors.email && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          data-oid="7hawp2a"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div data-oid="dmdni68">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="-.8_42a"
                      >
                        Mobile Number
                      </label>
                      <div className="flex" data-oid="cvpx9_f">
                        <div className="relative" data-oid="2x7mayk">
                          <button
                            type="button"
                            className={`flex items-center justify-between px-3 py-2 border ${
                              errors.phoneNumber
                                ? "border-red-500"
                                : "border-gray-300"
                            } border-r-0 rounded-l-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#123B79] w-[110px]`}
                            onClick={() =>
                              setShowCountryDropdown(!showCountryDropdown)
                            }
                            data-oid="92a-2pg"
                          >
                            <span
                              className="flex items-center"
                              data-oid="r8u2m6_"
                            >
                              <span className="mr-2 text-lg" data-oid="3r2.urs">
                                {selectedCountry.flag}
                              </span>
                              <span data-oid="6wctuff">
                                {selectedCountry.dialCode}
                              </span>
                            </span>
                            <ChevronDown
                              className="h-4 w-4 text-gray-500"
                              data-oid="9ql7q0k"
                            />
                          </button>

                          {showCountryDropdown && (
                            <div
                              className="absolute z-10 mt-1 w-[220px] bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm border border-gray-200"
                              data-oid="s3x:tio"
                            >
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() =>
                                    handleCountryCodeSelect(country.dialCode)
                                  }
                                  data-oid="6rs_8wq"
                                >
                                  <span
                                    className="mr-2 text-lg"
                                    data-oid="kt:sy4f"
                                  >
                                    {country.flag}
                                  </span>
                                  <span className="mr-2" data-oid="jkbd9ru">
                                    {country.dialCode}
                                  </span>
                                  <span
                                    className="text-gray-500"
                                    data-oid="lywd2ab"
                                  >
                                    {country.name}
                                  </span>
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
                            errors.phoneNumber
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="81234567"
                          data-oid="cdtya:y"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          data-oid="l_2f-4v"
                        >
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div data-oid="8gpi1_s">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="1l0cszw"
                      >
                        Password
                      </label>
                      <div className="relative" data-oid="zg.zzs_">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.password
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="••••••••"
                          data-oid="2eah__z"
                        />

                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                          data-oid="98_tfxq"
                        >
                          {showPassword ? (
                            <EyeOff
                              className="h-5 w-5 text-gray-400"
                              data-oid="4zt7rsc"
                            />
                          ) : (
                            <Eye
                              className="h-5 w-5 text-gray-400"
                              data-oid="5rxko_a"
                            />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          data-oid=":coy23f"
                        >
                          {errors.password}
                        </p>
                      )}
                      <p
                        className="mt-1 text-xs text-gray-500"
                        data-oid="rp82b1z"
                      >
                        Password must be at least 8 characters
                      </p>
                    </div>

                    <div data-oid="s6-svv8">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="e13tnf-"
                      >
                        Confirm Password
                      </label>
                      <div className="relative" data-oid="__czb:z">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${
                            errors.confirmPassword
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]`}
                          placeholder="••••••••"
                          data-oid="zaqqqjt"
                        />

                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          data-oid="_a4skca"
                        >
                          {showConfirmPassword ? (
                            <EyeOff
                              className="h-5 w-5 text-gray-400"
                              data-oid="xhlbpo9"
                            />
                          ) : (
                            <Eye
                              className="h-5 w-5 text-gray-400"
                              data-oid="c51l1iv"
                            />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          data-oid="a_c57bp"
                        >
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {errors.general && (
                      <div
                        className="bg-red-50 text-red-600 p-3 rounded-md text-sm"
                        data-oid="mehmezb"
                      >
                        {errors.general}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                      disabled={isSubmitting}
                      data-oid="1gg2scq"
                    >
                      {isSubmitting ? (
                        <span
                          className="flex items-center justify-center"
                          data-oid="dn2h7kl"
                        >
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            data-oid="goq4pfw"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              data-oid="i_lbk.p"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              data-oid="8:pg:nn"
                            ></path>
                          </svg>
                          Creating account...
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    <div
                      className="text-center text-sm text-gray-500"
                      data-oid="13yuqj6"
                    >
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-[#123B79] hover:underline"
                        data-oid="23.t2.6"
                      >
                        Log in
                      </Link>
                    </div>

                    <div
                      className="text-xs text-gray-500 pt-4"
                      data-oid="dcgg8wb"
                    >
                      By creating an account, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="text-[#123B79] hover:underline"
                        data-oid="-s:bmrm"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-[#123B79] hover:underline"
                        data-oid="v692p8r"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-6 text-center" data-oid="gjitidb">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                    data-oid="c8_i.95"
                  >
                    <Check className="h-8 w-8" data-oid="mkz1wqm" />
                  </div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2"
                    data-oid="du0fsvp"
                  >
                    Account Created Successfully!
                  </h2>
                  <p className="text-gray-600 mb-6" data-oid="u_kmyxu">
                    Welcome to Assembly.sg! You're now being redirected to the
                    homepage.
                  </p>
                  <div className="flex justify-center" data-oid="1a3xsxn">
                    <div
                      className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden"
                      data-oid="7e-4s5."
                    >
                      <div
                        className="h-full bg-green-500 animate-[progress_3s_ease-in-out]"
                        data-oid="f1w_pi2"
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </NetworkProvider>
  );
}
