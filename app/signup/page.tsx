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
        data-oid="44bv7-o"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full"
          data-oid="hc9_jnl"
        >
          <div
            className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
            data-oid="8uvldna"
          >
            <Check className="w-8 h-8 text-success" data-oid="r9fae7b" />
          </div>
          <h2
            className="text-2xl font-bold text-neutral-900 mb-4"
            data-oid="freckr3"
          >
            Welcome to Assembly.sg!
          </h2>
          <p className="text-neutral-600 mb-6" data-oid="x8mviy6">
            Your account has been created successfully. You're being redirected
            to get started with your investment journey.
          </p>
          <div
            className="w-full bg-neutral-200 rounded-full h-2"
            data-oid="8-ifh-e"
          >
            <div
              className="bg-success h-2 rounded-full animate-[progress_3s_ease-in-out]"
              data-oid="dziuctu"
            ></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5 flex"
      data-oid="ltuvq0l"
    >
      {/* Left Side - Feature Showcase */}
      <div
        className="hidden lg:flex flex-1 bg-primary text-white p-12 items-center justify-center relative overflow-hidden"
        data-oid="u_b0s:3"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" data-oid=":d0uez7">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"
            data-oid="5a5lh-7"
          ></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-xl"
            data-oid="tz8ogiz"
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary rounded-full blur-xl"
            data-oid="-haw6jd"
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-md"
          data-oid="v0jibm7"
        >
          <h2 className="text-4xl font-bold mb-6" data-oid="pf8xno8">
            Start Your Investment Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8" data-oid="ho7eqk:">
            Join thousands of successful investors and unlock your potential in
            real estate investment.
          </p>

          <div className="space-y-6" data-oid="tc8kr6k">
            <div className="flex items-center gap-4" data-oid="cjlqwwt">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="ofchmrc"
              >
                <Award className="w-6 h-6" data-oid="1zmlwdl" />
              </div>
              <div data-oid=":7bw28e">
                <h3 className="font-semibold" data-oid="byg80m-">
                  Expert Certification
                </h3>
                <p className="text-white/70" data-oid="e18fh_n">
                  Get certified by industry experts
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" data-oid="c2odib_">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="z5qc8gj"
              >
                <Shield className="w-6 h-6" data-oid="pogdfdi" />
              </div>
              <div data-oid="g4:d-zb">
                <h3 className="font-semibold" data-oid="mx78w1_">
                  Secure Learning
                </h3>
                <p className="text-white/70" data-oid="zrqbwyo">
                  Safe and trusted platform
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" data-oid="e45tf57">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="4zozsoz"
              >
                <Globe className="w-6 h-6" data-oid="831az7s" />
              </div>
              <div data-oid="ouhg_2j">
                <h3 className="font-semibold" data-oid="px2ggch">
                  Global Community
                </h3>
                <p className="text-white/70" data-oid="4avfmjw">
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
        data-oid="puqd65m"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
          data-oid="yu3p946"
        >
          {/* Logo */}
          <div className="text-center mb-8" data-oid="vsd9xjr">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary"
              data-oid="0m7h8lo"
            >
              <img
                src="/images/assembly-logo.png"
                alt="Assembly Logo"
                className="w-40 h-auto"
                style={{ maxHeight: "48px" }}
                data-oid="m3r:84y"
              />
            </Link>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8" data-oid="6xki7jf">
            <h1
              className="text-3xl font-bold text-neutral-900 mb-2"
              data-oid="xu1:huq"
            >
              Create Your Account
            </h1>
            <p className="text-neutral-600" data-oid="uulmrd4">
              Start your real estate investment journey
            </p>
          </div>

          {/* Social Signup */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 p-4 border-2 border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 mb-6"
            data-oid="-c6axof"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" data-oid="0pu9xqr">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                data-oid="dg9p4h3"
              />

              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                data-oid="fn11fz1"
              />

              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                data-oid="5x5aw37"
              />

              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                data-oid="a:tz76x"
              />
            </svg>
            <span className="font-medium text-neutral-700" data-oid="zc7-66j">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div
            className="relative flex items-center justify-center mb-6"
            data-oid="vrup6lu"
          >
            <div
              className="border-t border-neutral-200 w-full"
              data-oid="nr.5h03"
            ></div>
            <span
              className="bg-white px-4 text-sm text-neutral-500 font-medium"
              data-oid="q6sqmsm"
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
              data-oid="0n7ml0z"
            >
              {errors.general}
            </motion.div>
          )}

          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="_lu--2e"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4" data-oid="3c9z6fd">
              <div data-oid="t4618ko">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="ky_4h87"
                >
                  First Name
                </label>
                <div className="relative" data-oid="aq2_tmj">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="imzq7gf"
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border ${errors.firstName ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="John"
                    required
                    data-oid=":8gfvx0"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600" data-oid="pbn.lg6">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div data-oid="uahqxli">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="-j4r17l"
                >
                  Last Name
                </label>
                <div className="relative" data-oid="1sodguh">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="shefdq."
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border ${errors.lastName ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="Doe"
                    required
                    data-oid="ev-stef"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600" data-oid="gsre8_p">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div data-oid="m6a2uoa">
              <label
                className="block text-sm font-medium text-neutral-700 mb-2"
                data-oid="8n1tp5:"
              >
                Email Address
              </label>
              <div className="relative" data-oid="789v_ij">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                  data-oid="tmc8gp-"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border ${errors.email ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                  placeholder="john@example.com"
                  required
                  data-oid="o_nkila"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" data-oid="iqmtza0">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div data-oid="36iq:vs">
              <label
                className="block text-sm font-medium text-neutral-700 mb-2"
                data-oid="6f4qfvz"
              >
                Phone Number
              </label>
              <div className="flex" data-oid="jp_t6g8">
                <div className="relative" data-oid="o1ic3fq">
                  <button
                    type="button"
                    className={`flex items-center justify-between px-4 py-3 border ${errors.phoneNumber ? "border-red-300" : "border-neutral-200"} border-r-0 rounded-l-xl bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary/20 w-[120px]`}
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    data-oid="da641j4"
                  >
                    <span className="flex items-center" data-oid="88kvcql">
                      <span className="mr-2 text-lg" data-oid="wnduczo">
                        {selectedCountry.flag}
                      </span>
                      <span className="text-sm" data-oid="_6sog-s">
                        {selectedCountry.dialCode}
                      </span>
                    </span>
                    <ChevronDown
                      className="h-4 w-4 text-neutral-500"
                      data-oid="_77nrz4"
                    />
                  </button>

                  {showCountryDropdown && (
                    <div
                      className="absolute z-10 mt-1 w-[240px] bg-white shadow-lg max-h-60 rounded-xl py-2 text-base overflow-auto border border-neutral-200"
                      data-oid="o4_awra"
                    >
                      {countryCodes.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          className="flex items-center w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                          onClick={() =>
                            handleCountryCodeSelect(country.dialCode)
                          }
                          data-oid="36z8224"
                        >
                          <span className="mr-3 text-lg" data-oid="oskw4d8">
                            {country.flag}
                          </span>
                          <span className="mr-3 font-medium" data-oid="ymtyw3p">
                            {country.dialCode}
                          </span>
                          <span className="text-neutral-500" data-oid="99yv9cu">
                            {country.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative flex-1" data-oid="pcp.k70">
                  <Phone
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="i9g0t5y"
                  />

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border ${errors.phoneNumber ? "border-red-300" : "border-neutral-200"} rounded-r-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="81234567"
                    required
                    data-oid="eli2a.e"
                  />
                </div>
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600" data-oid="v_jpjea">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-4" data-oid="cb.j3eb">
              <div data-oid="ioi0.9k">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="a4yw0da"
                >
                  Password
                </label>
                <div className="relative" data-oid="nwnp:m1">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="6b-bfll"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-3 border ${errors.password ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="Create a strong password"
                    required
                    data-oid="gyg09je"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    data-oid="gitwt2m"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" data-oid="jr921g7" />
                    ) : (
                      <Eye className="w-5 h-5" data-oid="45uyixe" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600" data-oid="4cw-yby">
                    {errors.password}
                  </p>
                )}
              </div>

              <div data-oid="ja38svr">
                <label
                  className="block text-sm font-medium text-neutral-700 mb-2"
                  data-oid="btrh.5p"
                >
                  Confirm Password
                </label>
                <div className="relative" data-oid="nv:pu3i">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                    data-oid="fvvtj2g"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-3 border ${errors.confirmPassword ? "border-red-300" : "border-neutral-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    placeholder="Confirm your password"
                    required
                    data-oid="rap7sq-"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    data-oid="kpv2wio"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" data-oid="d_nzi0j" />
                    ) : (
                      <Eye className="w-5 h-5" data-oid="623hds." />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600" data-oid="vz-ay.e">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Terms Agreement */}
            <div data-oid="u0d255r">
              <label className="flex items-start gap-3" data-oid="x83p5zo">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary border-neutral-300 rounded focus:ring-primary/20 mt-0.5"
                  data-oid="hj0.m89"
                />

                <span className="text-sm text-neutral-600" data-oid="t1-q75w">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary-dark font-medium"
                    data-oid="pb5dih2"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-primary-dark font-medium"
                    data-oid="o78.3ck"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-600" data-oid="48of3ab">
                  {errors.agreeToTerms}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="mtyp-g1"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    data-oid="burxf8o"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      data-oid="g-93bo4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      data-oid=".toult6"
                    ></path>
                  </svg>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" data-oid="zn0ikxv" />
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6" data-oid="edqmi2u">
            <p className="text-neutral-600" data-oid=".:tkqbn">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-dark font-semibold"
                data-oid="z38-irr"
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
