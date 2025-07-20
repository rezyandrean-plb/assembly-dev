"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Building2,
  Shield,
  Award,
  Globe,
  ChevronDown,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
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
    countryCode: "+65",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countryCodes: CountryCode[] = [
    { code: "SG", name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", dialCode: "+60" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", dialCode: "+62" },
    { code: "TH", name: "Thailand", flag: "🇹🇭", dialCode: "+66" },
    { code: "PH", name: "Philippines", flag: "🇵🇭", dialCode: "+63" },
    { code: "AU", name: "Australia", flag: "🇦🇺", dialCode: "+61" },
    { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{8,12}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
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

  const selectedCountry =
    countryCodes.find((country) => country.dialCode === formData.countryCode) ||
    countryCodes[0];

  if (isSuccess) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5 flex items-center justify-center p-8"
        data-oid="0ksouwt"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full"
          data-oid="cu.59_4"
        >
          <div
            className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
            data-oid="3vbli1x"
          >
            <Check className="w-8 h-8 text-success" data-oid="zid0gn6" />
          </div>
          <h2
            className="text-2xl font-bold text-neutral-900 mb-4"
            data-oid="rf:v1x1"
          >
            Welcome to Assembly.sg!
          </h2>
          <p className="text-neutral-600 mb-6" data-oid="qj:fbry">
            Your account has been created successfully. You're being redirected
            to get started with your investment journey.
          </p>
          <div
            className="w-full bg-neutral-200 rounded-full h-2"
            data-oid="7xwzml6"
          >
            <div
              className="bg-success h-2 rounded-full animate-[progress_3s_ease-in-out]"
              data-oid="j17.tee"
            ></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5 flex"
      data-oid="ynwdc-1"
    >
      {/* Left Side - Feature Showcase */}
      <div
        className="hidden lg:flex flex-1 bg-primary text-white p-12 items-center justify-center relative overflow-hidden"
        data-oid="x.zv3o2"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" data-oid="1bov7fg">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"
            data-oid="-:lt3:h"
          ></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-xl"
            data-oid="38f68dh"
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary rounded-full blur-xl"
            data-oid="oohgo5h"
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-md"
          data-oid="08n7xme"
        >
          <h2 className="text-4xl font-bold mb-6" data-oid="vr46g4p">
            Start Your Investment Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8" data-oid="q23:257">
            Join thousands of successful investors and unlock your potential in
            real estate investment.
          </p>

          <div className="space-y-6" data-oid="3qma17j">
            <div className="flex items-center gap-4" data-oid="et1a3a8">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="ja-g1-k"
              >
                <Award className="w-6 h-6" data-oid="3h2y7kv" />
              </div>
              <div data-oid="1k71-6p">
                <h3 className="font-semibold" data-oid="euelvf_">
                  Expert Certification
                </h3>
                <p className="text-white/70" data-oid="_xs68wm">
                  Get certified by industry experts
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" data-oid="eir-ssy">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="ypmsey3"
              >
                <Shield className="w-6 h-6" data-oid="6zpw6jg" />
              </div>
              <div data-oid="_c:6py9">
                <h3 className="font-semibold" data-oid="pt4x7vn">
                  Secure Learning
                </h3>
                <p className="text-white/70" data-oid="t71uvu-">
                  Safe and trusted platform
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" data-oid="r3jf8aj">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="n7eqxd8"
              >
                <Globe className="w-6 h-6" data-oid="icb:d8a" />
              </div>
              <div data-oid="su7_1ep">
                <h3 className="font-semibold" data-oid="-ebq60u">
                  Global Community
                </h3>
                <p className="text-white/70" data-oid="8y95rpn">
                  Connect with investors worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Signup Form */}
      <div
        className="flex-1 flex items-center justify-center p-8"
        data-oid="ery3bqo"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
          data-oid="b-ihwtd"
        >
          {/* Logo */}
          <div className="text-center mb-8" data-oid="l:lj3l9">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary"
              data-oid="r9nxttv"
            >
              <img
                src="/images/assembly-logo.png"
                alt="Assembly Logo"
                className="w-40 h-auto"
                style={{ maxHeight: "48px" }}
                data-oid="pnz2r-e"
              />
            </Link>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8" data-oid="1.s47_g">
            <h1
              className="text-3xl font-bold text-neutral-900 mb-2"
              data-oid="eqx_5h1"
            >
              Create Your Account
            </h1>
            <p className="text-neutral-600" data-oid="gt97v_q">
              Start your real estate investment journey
            </p>
          </div>

          {/* Social Signup */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 p-4 border-2 border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 mb-6"
            data-oid="w50x88i"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" data-oid="8c8c5:y">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                data-oid="qtpg66f"
              />

              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                data-oid="oinmsdd"
              />

              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                data-oid="ja9v1mz"
              />

              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                data-oid="babiv45"
              />
            </svg>
            <span className="font-medium text-neutral-700" data-oid=".abyhpv">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div
            className="relative flex items-center justify-center mb-6"
            data-oid="i:gmp11"
          >
            <div
              className="border-t border-neutral-200 w-full"
              data-oid="2cpa4uw"
            ></div>
            <span
              className="bg-white px-4 text-sm text-neutral-500 font-medium"
              data-oid="3rj-0ho"
            >
              Or create with email
            </span>
          </div>

          {/* Error Message */}
          {errors.general && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm mb-6"
              data-oid="c_0y7h2"
            >
              {errors.general}
            </motion.div>
          )}

          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="x-a7p_j"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4" data-oid="j3lp00t">
              <div data-oid=":h.wwl3">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="6fjxba:"
                >
                  First Name
                </label>
                <div className="relative" data-oid="5dn_.4c">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="kkgqjqr"
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border ${errors.firstName ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="John"
                    required
                    data-oid="g:fw_ep"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600" data-oid="58o8k_y">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div data-oid="5w7wans">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="z6:3_rh"
                >
                  Last Name
                </label>
                <div className="relative" data-oid=":snxt2v">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid=":_v74iv"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border ${errors.lastName ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="Doe"
                    required
                    data-oid="5wkhtfk"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600" data-oid="b8ctace">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div data-oid="o6hxqrf">
              <label
                className="block text-sm font-medium text-neutral-700 mb-2"
                data-oid="m6g7n2-"
              >
                Email Address
              </label>
              <div className="relative" data-oid=":v0xx4m">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                  data-oid="pgax90z"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border ${errors.email ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                  placeholder="john@example.com"
                  required
                  data-oid="mz2yyk0"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" data-oid="y0ivn9.">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div data-oid="3l8ylxo">
              <label
                className="block text-sm font-medium text-neutral-700 mb-2"
                data-oid="9ffdbl."
              >
                Phone Number
              </label>
              <div className="flex" data-oid="bvxv3c4">
                <div className="relative" data-oid="3dvvtw2">
                  <button
                    type="button"
                    className={`flex items-center justify-between px-4 py-3 border ${errors.phoneNumber ? "border-red-300" : "border-neutral-200"} border-r-0 rounded-l-xl bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary/20 w-[120px]`}
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    data-oid="r:h6_15"
                  >
                    <span className="flex items-center" data-oid="m3_nsft">
                      <span className="mr-2 text-lg" data-oid="3uk8fjd">
                        {selectedCountry.flag}
                      </span>
                      <span className="text-sm" data-oid="jg5b0qg">
                        {selectedCountry.dialCode}
                      </span>
                    </span>
                    <ChevronDown
                      className="h-4 w-4 text-neutral-500"
                      data-oid="jc_0gk3"
                    />
                  </button>

                  {showCountryDropdown && (
                    <div
                      className="absolute z-10 mt-1 w-[240px] bg-white shadow-lg max-h-60 rounded-xl py-2 text-base overflow-auto border border-neutral-200"
                      data-oid="3pa:oyg"
                    >
                      {countryCodes.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          className="flex items-center w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                          onClick={() =>
                            handleCountryCodeSelect(country.dialCode)
                          }
                          data-oid="1xi8m8h"
                        >
                          <span className="mr-3 text-lg" data-oid="l:38sqd">
                            {country.flag}
                          </span>
                          <span className="mr-3 font-medium" data-oid=":-paz9s">
                            {country.dialCode}
                          </span>
                          <span className="text-neutral-500" data-oid="wq5tvvk">
                            {country.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative flex-1" data-oid="s3eaz3.">
                  <Phone
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="iwch6u1"
                  />

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border ${errors.phoneNumber ? "border-red-300" : "border-neutral-200"} rounded-r-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="81234567"
                    required
                    data-oid="lk0zls2"
                  />
                </div>
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600" data-oid="1z-sna_">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-4" data-oid="jwmvki0">
              <div data-oid="l2t5w:q">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="e12vg2a"
                >
                  Password
                </label>
                <div className="relative" data-oid="dkl6x3x">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="jbj713k"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-3 border ${errors.password ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="Create a strong password"
                    required
                    data-oid=".nofo:r"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    data-oid="_5wxe65"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" data-oid="p6akx63" />
                    ) : (
                      <Eye className="w-5 h-5" data-oid="ksmuqos" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600" data-oid="e0ivnxp">
                    {errors.password}
                  </p>
                )}
              </div>

              <div data-oid="9arnl5w">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="2axn9v1"
                >
                  Confirm Password
                </label>
                <div className="relative" data-oid="8knwyfz">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="a6lbs8h"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-3 border ${errors.confirmPassword ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="Confirm your password"
                    required
                    data-oid="fn81xev"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    data-oid="v-cwyz7"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" data-oid="wrns_xa" />
                    ) : (
                      <Eye className="w-5 h-5" data-oid="hc-81tj" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600" data-oid="04rhdlc">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Terms Agreement */}
            <div data-oid="yy67paj">
              <label className="flex items-start gap-3" data-oid="sfje3.e">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary border-neutral-300 rounded focus:ring-primary/20 mt-0.5"
                  data-oid="_-kn3me"
                />

                <span className="text-sm text-neutral-600" data-oid="s18dlii">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary-dark font-medium"
                    data-oid="35m3xf:"
                  >
                    Terms of Service
                  </Link>{" "}
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-600" data-oid="e7w7.ko">
                  {errors.agreeToTerms}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="b:bf4.l"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    data-oid="098v8jy"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      data-oid=":s7ldko"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      data-oid="-gpa-yp"
                    ></path>
                  </svg>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" data-oid="i3vy..y" />
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6" data-oid="vly3w8-">
            <p className="text-neutral-600" data-oid="qwzekq8">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-dark font-semibold"
                data-oid="a5swl5f"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
