"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ShoppingCart,
  ArrowRight,
  User,
  Shield,
  Clock,
} from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("pyee.t104@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    login();
    onClose();
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    login();
    onClose();
  };

  return (
    <AnimatePresence data-oid="y3y1d6u">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={onClose}
          data-oid="3wfud_w"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            data-oid="xfc-:i0"
          >
            {/* Header */}
            <div
              className="bg-primary text-white p-6 relative overflow-hidden"
              data-oid="jal6yv8"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
                data-oid="2aj2bri"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"
                data-oid="o3b:xks"
              ></div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                data-oid="rf4sgus"
              >
                <X className="w-5 h-5" data-oid="1ya.:q9" />
              </button>

              <div className="relative z-10" data-oid="cbk6apy">
                <div
                  className="flex items-center gap-3 mb-4"
                  data-oid="qparb61"
                >
                  <div
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    data-oid=":ou4h6l"
                  >
                    <ShoppingCart className="w-6 h-6" data-oid="qh.hq8j" />
                  </div>
                  <div data-oid="03.k1kk">
                    <h2 className="text-xl font-bold" data-oid="e6hsslw">
                      Almost There!
                    </h2>
                    <p
                      className="text-primary-light text-sm"
                      data-oid="9t1x6cu"
                    >
                      Sign in to complete your purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div
              className="flex border-b border-neutral-200"
              data-oid="tlmwzym"
            >
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                  activeTab === "login"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-neutral-600 hover:text-primary"
                }`}
                data-oid="s8_ccp0"
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                  activeTab === "signup"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-neutral-600 hover:text-primary"
                }`}
                data-oid="26t1pz-"
              >
                Create Account
              </button>
            </div>

            {/* Content */}
            <div className="p-6" data-oid="e41sxdc">
              {activeTab === "login" ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  data-oid="we6ao2g"
                >
                  {/* Benefits */}
                  <div
                    className="bg-neutral-50 rounded-xl p-4 mb-6"
                    data-oid="th:32pd"
                  >
                    <h3
                      className="font-semibold text-neutral-900 mb-3"
                      data-oid="etwaffc"
                    >
                      Why sign in?
                    </h3>
                    <div className="space-y-2" data-oid="m8:sy-a">
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="m29emg-"
                      >
                        <Clock
                          className="w-4 h-4 text-primary"
                          data-oid="qdg4bks"
                        />

                        <span data-oid="l.svtar">
                          Faster checkout experience
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="5mrudx3"
                      >
                        <Shield
                          className="w-4 h-4 text-primary"
                          data-oid="jvwe_uh"
                        />

                        <span data-oid="h9j:a2h">Secure order tracking</span>
                      </div>
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="-_496nb"
                      >
                        <User
                          className="w-4 h-4 text-primary"
                          data-oid="t2d_1op"
                        />

                        <span data-oid="p5gyh5v">
                          Access to your learning progress
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google Login */}
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 p-4 border-2 border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 mb-6"
                    data-oid="cxocu_5"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      data-oid="crw3gwf"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        data-oid="9a1ho:q"
                      />

                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        data-oid="tdif8qn"
                      />

                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        data-oid=":nff-n9"
                      />

                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        data-oid="k7w32i:"
                      />
                    </svg>
                    <span
                      className="font-medium text-neutral-700"
                      data-oid="zbm1nve"
                    >
                      Continue with Google
                    </span>
                  </button>

                  {/* Divider */}
                  <div
                    className="relative flex items-center justify-center mb-6"
                    data-oid="lxy.gxd"
                  >
                    <div
                      className="border-t border-neutral-200 w-full"
                      data-oid="5zs5n-o"
                    ></div>
                    <span
                      className="bg-white px-4 text-sm text-neutral-500 font-medium"
                      data-oid="5xtpf-l"
                    >
                      Or continue with email
                    </span>
                  </div>

                  {/* Login Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleLogin();
                    }}
                    className="space-y-4"
                    data-oid="i1ym_ck"
                  >
                    {/* Email Field */}
                    <div data-oid="k3qucvz">
                      <label
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        data-oid="md.r::1"
                      >
                        Email Address
                      </label>
                      <div className="relative" data-oid="on5-:ji">
                        <Mail
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                          data-oid="urr8dv5"
                        />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Enter your email"
                          required
                          data-oid="ikf5e47"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div data-oid="r8eu:up">
                      <label
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        data-oid="ajna:hs"
                      >
                        Password
                      </label>
                      <div className="relative" data-oid="g1.1xok">
                        <Lock
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                          data-oid="5sdt31a"
                        />

                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-12 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Enter your password"
                          required
                          data-oid="lne8dwe"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                          data-oid="zyejr9u"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" data-oid="u6anolr" />
                          ) : (
                            <Eye className="w-5 h-5" data-oid="2gntmob" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div
                      className="flex items-center justify-between"
                      data-oid="pvj6c02"
                    >
                      <label className="flex items-center" data-oid="9lujf1b">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary/20"
                          data-oid=":1swgmk"
                        />

                        <span
                          className="ml-2 text-sm text-neutral-600"
                          data-oid="d4yg39:"
                        >
                          Remember me
                        </span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:text-primary-dark font-medium"
                        onClick={onClose}
                        data-oid="ow6owi9"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      data-oid="5ggf9ns"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            data-oid="9w08f-n"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              data-oid=".xixl5t"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              data-oid="ffb7vmu"
                            ></path>
                          </svg>
                          Signing in...
                        </>
                      ) : (
                        <>
                          Continue to Checkout
                          <ArrowRight className="w-5 h-5" data-oid="w7..xwy" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                  data-oid="uwx8f20"
                >
                  <div className="mb-6" data-oid="dn9ds80">
                    <h3
                      className="text-lg font-semibold text-neutral-900 mb-2"
                      data-oid="n6gjior"
                    >
                      New to Assembly.sg?
                    </h3>
                    <p className="text-neutral-600" data-oid="6:izr9z">
                      Create an account to access exclusive courses and track
                      your learning progress.
                    </p>
                  </div>

                  <div className="space-y-4" data-oid="_rvgjco">
                    <Link
                      href="/signup"
                      onClick={onClose}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      data-oid="9.0w25b"
                    >
                      Create Free Account
                      <ArrowRight className="w-5 h-5" data-oid="x.bne-a" />
                    </Link>

                    <div
                      className="text-sm text-neutral-500"
                      data-oid="e5e.g3q"
                    >
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-primary hover:text-primary-dark font-medium"
                        data-oid="5b1a0kv"
                      >
                        Sign in here
                      </button>
                    </div>
                  </div>

                  {/* Benefits for new users */}
                  <div
                    className="mt-6 bg-neutral-50 rounded-xl p-4"
                    data-oid="sbrg5s:"
                  >
                    <h4
                      className="font-semibold text-neutral-900 mb-3"
                      data-oid="v66qckm"
                    >
                      What you'll get:
                    </h4>
                    <div
                      className="space-y-2 text-sm text-neutral-600"
                      data-oid="sgvw4f-"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="2d8y78b"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="ckqwkl7"
                        ></div>
                        <span data-oid="uswkqut">
                          Access to exclusive real estate courses
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3"
                        data-oid="-dg9d:t"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="2.s0q3g"
                        ></div>
                        <span data-oid=":9ldx90">
                          Track your learning progress
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3"
                        data-oid="fn.cbkz"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="3tcbfzo"
                        ></div>
                        <span data-oid="ncz9afn">
                          Join our community of investors
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
