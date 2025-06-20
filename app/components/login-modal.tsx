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
    <AnimatePresence data-oid=":xhz1zm">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={onClose}
          data-oid="2-ml1::"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            data-oid="t3d:hvn"
          >
            {/* Header */}
            <div
              className="bg-primary text-white p-6 relative overflow-hidden"
              data-oid="qjabx0-"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
                data-oid="40w_djq"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"
                data-oid="08.tm.3"
              ></div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                data-oid="atm7m4:"
              >
                <X className="w-5 h-5" data-oid="g.6pzjk" />
              </button>

              <div className="relative z-10" data-oid=":qndnmr">
                <div
                  className="flex items-center gap-3 mb-4"
                  data-oid="a82u79e"
                >
                  <div
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    data-oid="haat318"
                  >
                    <ShoppingCart className="w-6 h-6" data-oid="mgljaby" />
                  </div>
                  <div data-oid="jxaucj5">
                    <h2 className="text-xl font-bold" data-oid="zzo92nn">
                      Almost There!
                    </h2>
                    <p
                      className="text-primary-light text-sm"
                      data-oid="pr:9l7v"
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
              data-oid="b7_kf7a"
            >
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                  activeTab === "login"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-neutral-600 hover:text-primary"
                }`}
                data-oid="9nqs1r_"
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
                data-oid="_snhz.e"
              >
                Create Account
              </button>
            </div>

            {/* Content */}
            <div className="p-6" data-oid="39exq87">
              {activeTab === "login" ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  data-oid="mkhyng7"
                >
                  {/* Benefits */}
                  <div
                    className="bg-neutral-50 rounded-xl p-4 mb-6"
                    data-oid="rxmkpes"
                  >
                    <h3
                      className="font-semibold text-neutral-900 mb-3"
                      data-oid="a_u6zbh"
                    >
                      Why sign in?
                    </h3>
                    <div className="space-y-2" data-oid="g4bg37d">
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="u8t9dof"
                      >
                        <Clock
                          className="w-4 h-4 text-primary"
                          data-oid="5ljs_py"
                        />

                        <span data-oid="7viuyd7">
                          Faster checkout experience
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="by8yd.f"
                      >
                        <Shield
                          className="w-4 h-4 text-primary"
                          data-oid="nnfzxok"
                        />

                        <span data-oid="tjyk9m6">Secure order tracking</span>
                      </div>
                      <div
                        className="flex items-center gap-3 text-sm text-neutral-600"
                        data-oid="_wuoq5f"
                      >
                        <User
                          className="w-4 h-4 text-primary"
                          data-oid="tmnp8.4"
                        />

                        <span data-oid="f.jp.j9">
                          Access to your learning progress
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google Login */}
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 p-4 border-2 border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 mb-6"
                    data-oid="::s_o.g"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      data-oid="7-lp4rf"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        data-oid="3vbc3qv"
                      />

                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        data-oid="ogz5vn9"
                      />

                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        data-oid="ro6meut"
                      />

                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        data-oid="300xozt"
                      />
                    </svg>
                    <span
                      className="font-medium text-neutral-700"
                      data-oid="y:qsypw"
                    >
                      Continue with Google
                    </span>
                  </button>

                  {/* Divider */}
                  <div
                    className="relative flex items-center justify-center mb-6"
                    data-oid="1vyx59:"
                  >
                    <div
                      className="border-t border-neutral-200 w-full"
                      data-oid="4zl6-i3"
                    ></div>
                    <span
                      className="bg-white px-4 text-sm text-neutral-500 font-medium"
                      data-oid="swzo6lz"
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
                    data-oid="42wxxqz"
                  >
                    {/* Email Field */}
                    <div data-oid="lwd4z42">
                      <label
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        data-oid="b2rsj0i"
                      >
                        Email Address
                      </label>
                      <div className="relative" data-oid="lzxikiv">
                        <Mail
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                          data-oid=":_301-j"
                        />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Enter your email"
                          required
                          data-oid="7w5nf_3"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div data-oid="vqgdh_5">
                      <label
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        data-oid="td-9:cj"
                      >
                        Password
                      </label>
                      <div className="relative" data-oid="yhkh98x">
                        <Lock
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                          data-oid="tx3tk8b"
                        />

                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-12 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Enter your password"
                          required
                          data-oid="7q0zx27"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                          data-oid="obrhtff"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" data-oid="0j:ut8t" />
                          ) : (
                            <Eye className="w-5 h-5" data-oid="vr9-7y." />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div
                      className="flex items-center justify-between"
                      data-oid="xn6l4h6"
                    >
                      <label className="flex items-center" data-oid="kt-75xx">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary/20"
                          data-oid="fmmu9df"
                        />

                        <span
                          className="ml-2 text-sm text-neutral-600"
                          data-oid="4ul3mvn"
                        >
                          Remember me
                        </span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:text-primary-dark font-medium"
                        onClick={onClose}
                        data-oid=":7ux-3q"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      data-oid="3hgvc60"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            data-oid="8gh2obm"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              data-oid="q-jch07"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              data-oid="9iska-5"
                            ></path>
                          </svg>
                          Signing in...
                        </>
                      ) : (
                        <>
                          Continue to Checkout
                          <ArrowRight className="w-5 h-5" data-oid="xqm.ydy" />
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
                  data-oid="hurbb0g"
                >
                  <div className="mb-6" data-oid="k9:m_ln">
                    <h3
                      className="text-lg font-semibold text-neutral-900 mb-2"
                      data-oid="al1pzsp"
                    >
                      New to Assembly.sg?
                    </h3>
                    <p className="text-neutral-600" data-oid="w.s2-1v">
                      Create an account to access exclusive courses and track
                      your learning progress.
                    </p>
                  </div>

                  <div className="space-y-4" data-oid="u.px:jk">
                    <Link
                      href="/signup"
                      onClick={onClose}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      data-oid=".jgdtf2"
                    >
                      Create Free Account
                      <ArrowRight className="w-5 h-5" data-oid="yf47:.m" />
                    </Link>

                    <div
                      className="text-sm text-neutral-500"
                      data-oid="5tfbrj1"
                    >
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-primary hover:text-primary-dark font-medium"
                        data-oid="f.sug7a"
                      >
                        Sign in here
                      </button>
                    </div>
                  </div>

                  {/* Benefits for new users */}
                  <div
                    className="mt-6 bg-neutral-50 rounded-xl p-4"
                    data-oid="7t4d5ia"
                  >
                    <h4
                      className="font-semibold text-neutral-900 mb-3"
                      data-oid="qyd.uaj"
                    >
                      What you'll get:
                    </h4>
                    <div
                      className="space-y-2 text-sm text-neutral-600"
                      data-oid="oemyjgs"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="6v027iu"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="w5bp-06"
                        ></div>
                        <span data-oid="3v4f5z2">
                          Access to exclusive real estate courses
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3"
                        data-oid="2ex7yd."
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="hdm6k_6"
                        ></div>
                        <span data-oid="y5lx.5s">
                          Track your learning progress
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3"
                        data-oid="tlwqm0a"
                      >
                        <div
                          className="w-2 h-2 bg-primary rounded-full"
                          data-oid="ozsq.a."
                        ></div>
                        <span data-oid="1jx-f0o">
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
