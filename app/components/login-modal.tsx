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
    <AnimatePresence data-oid="0knz16w">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={onClose}
          data-oid="4m3sgwp"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            data-oid="ebuymi:"
          >
            {/* Header */}
            <div
              className="bg-primary text-white p-6 relative overflow-hidden"
              data-oid="_jr8ko_"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
                data-oid="c:73egy"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"
                data-oid="l4qi7y:"
              ></div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                data-oid="db6gu32"
              >
                <X className="w-5 h-5" data-oid=":zq569k" />
              </button>

              <div className="relative z-10" data-oid="kl8s3wk">
                <div
                  className="flex items-center gap-3 mb-4"
                  data-oid="g14_xkv"
                >
                  <div
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    data-oid="zvfv:f2"
                  >
                    <ShoppingCart className="w-6 h-6" data-oid="y2.2v-i" />
                  </div>
                  <div data-oid="6ettdtg">
                    <h2 className="text-xl font-bold" data-oid="tbyklz-">
                      Almost There!
                    </h2>
                    <p
                      className="text-primary-light text-sm"
                      data-oid="6lzlz_s"
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
              data-oid="7sb0sf8"
            >
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                  activeTab === "login"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-neutral-600 hover:text-primary"
                }`}
                data-oid="a4h0:w-"
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
                data-oid="81:_cwf"
              >
                Create Account
              </button>
            </div>

            {/* Content */}
            <div className="p-6" data-oid="75kp-xx">
              {activeTab === "login" ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  data-oid="mr2kgu8"
                >
                  {/* Benefits */}
                  <div
                    className="bg-neutral-50 rounded-xl p-4 mb-6"
                    data-oid=":gg__a6"
                  >
                    <h3
                      className="font-semibold text-neutral-900 mb-3"
                      data-oid="2hni:6b"
                    >
                      Why sign in?
                    </h3>
                    <div className="space-y-2" data-oid="ipch6nr">
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="bbs16f_"
                      >
                        <Clock
                          className="w-4 h-4 text-primary"
                          data-oid="e4t770p"
                        />

                        <span data-oid="32hf8-1">
                          Faster checkout experience
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="lre9ku5"
                      >
                        <Shield
                          className="w-4 h-4 text-primary"
                          data-oid="ipibv1:"
                        />

                        <span data-oid="g1644rp">Secure order tracking</span>
                      </div>
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="-_dyhwr"
                      >
                        <User
                          className="w-4 h-4 text-primary"
                          data-oid="7v6oda5"
                        />

                        <span data-oid="lixqpwb">
                          Access to your learning progress
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google Login */}
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 p-4 border-2 border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 mb-6"
                    data-oid="8qvw_gv"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      data-oid=":0jz7hl"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        data-oid="7.bzjys"
                      />

                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        data-oid="vhd4v7i"
                      />

                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        data-oid="41-pod8"
                      />

                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        data-oid="ekpjqlf"
                      />
                    </svg>
                    <span
                      className="font-medium text-neutral-700"
                      data-oid="kp_lny1"
                    >
                      Continue with Google
                    </span>
                  </button>

                  {/* Divider */}
                  <div
                    className="relative flex items-center justify-center mb-6"
                    data-oid="z.--swg"
                  >
                    <div
                      className="border-t border-neutral-200 w-full"
                      data-oid="e2_fwp2"
                    ></div>
                    <span
                      className="bg-white px-4 text-sm text-neutral-500 font-medium"
                      data-oid="81dgp28"
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
                    data-oid="_s_8d89"
                  >
                    {/* Email Field */}
                    <div data-oid="d3eanb0">
                      <label
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        data-oid="3_cgxyo"
                      >
                        Email Address
                      </label>
                      <div className="relative" data-oid="6eyn05q">
                        <Mail
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                          data-oid="u:-z_2:"
                        />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Enter your email"
                          required
                          data-oid="21t.7t:"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div data-oid="bam:4wh">
                      <label
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        data-oid="b2fns79"
                      >
                        Password
                      </label>
                      <div className="relative" data-oid="pbohimm">
                        <Lock
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                          data-oid=":3-al36"
                        />

                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-12 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Enter your password"
                          required
                          data-oid="glxgz33"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                          data-oid="zxo3.q_"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" data-oid="5p5r953" />
                          ) : (
                            <Eye className="w-5 h-5" data-oid="hhoxxbm" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div
                      className="flex items-center justify-between"
                      data-oid="hqktj.d"
                    >
                      <label className="flex items-center" data-oid="l9dewsc">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary/20"
                          data-oid="7chqwuc"
                        />

                        <span
                          className="ml-2 text-sm text-neutral-600"
                          data-oid=".opq0vn"
                        >
                          Remember me
                        </span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:text-primary-dark font-medium"
                        onClick={onClose}
                        data-oid="xagw4o2"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      data-oid="-wjmpeb"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            data-oid="r2_415v"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              data-oid="x_k2wf4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              data-oid="6_kb7n3"
                            ></path>
                          </svg>
                          Signing in...
                        </>
                      ) : (
                        <>
                          Continue to Checkout
                          <ArrowRight className="w-5 h-5" data-oid="id2:-nl" />
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
                  data-oid="12hr7ze"
                >
                  <div className="mb-6" data-oid="zd._t1p">
                    <h3
                      className="text-lg font-semibold text-neutral-900 mb-2"
                      data-oid="4n-r17f"
                    >
                      New to Assembly.sg?
                    </h3>
                    <p className="text-neutral-600" data-oid="y6nwgv9">
                      Create an account to access exclusive courses and track
                      your learning progress.
                    </p>
                  </div>

                  <div className="space-y-4" data-oid="g0:t49.">
                    <Link
                      href="/signup"
                      onClick={onClose}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      data-oid="j6rl07u"
                    >
                      Create Free Account
                      <ArrowRight className="w-5 h-5" data-oid="t2eewo." />
                    </Link>

                    <div
                      className="text-sm text-neutral-500"
                      data-oid="nlpsk8r"
                    >
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-primary hover:text-primary-dark font-medium"
                        data-oid="d-1pet7"
                      >
                        Sign in here
                      </button>
                    </div>
                  </div>

                  {/* Benefits for new users */}
                  <div
                    className="mt-6 bg-neutral-50 rounded-xl p-4"
                    data-oid="6a64adg"
                  >
                    <h4
                      className="font-semibold text-neutral-900 mb-3"
                      data-oid="1vqe7e4"
                    >
                      What you'll get:
                    </h4>
                    <div
                      className="space-y-2 text-sm text-neutral-600"
                      data-oid="gr31p71"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="5534xnp"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="1re3l_g"
                        ></div>
                        <span data-oid="y0ri7j.">
                          Access to exclusive real estate courses
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3"
                        data-oid="np0z2bh"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="u0tqo7."
                        ></div>
                        <span data-oid="t6q8c78">
                          Track your learning progress
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3"
                        data-oid="puy8jmx"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="9hwq2h:"
                        ></div>
                        <span data-oid="4yv6_s7">
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
