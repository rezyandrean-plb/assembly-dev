"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      sessionStorage.setItem("fromLogin", "true");
      router.push("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5 flex"
      data-oid="oxc.x:s"
    >
      {/* Left Side - Login Form */}
      <div
        className="flex-1 flex items-center justify-center p-8"
        data-oid="uk2qa3d"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
          data-oid="d5fyek4"
        >
          {/* Logo */}
          <div className="text-center mb-8" data-oid="pbf1c8f">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary"
              data-oid="w73-dhq"
            >
              <img
                src="/images/assembly-logo.png"
                alt="Assembly Logo"
                className="w-40 h-auto"
                style={{ maxHeight: "48px" }}
                data-oid="lzhsxzw"
              />
            </Link>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8" data-oid="v5xaw1_">
            <h1
              className="text-3xl font-bold text-neutral-900 mb-2"
              data-oid="myewcg7"
            >
              Welcome Back
            </h1>
            <p className="text-neutral-600" data-oid="y8xpban">
              Continue your real estate investment journey
            </p>
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 p-4 border-2 border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 mb-6"
            data-oid="kl.nn9e"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" data-oid="87wt1j5">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                data-oid="8okbbcx"
              />

              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                data-oid="1qy.mxq"
              />

              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                data-oid="22t0kks"
              />

              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                data-oid="qcvrjxg"
              />
            </svg>
            <span className="font-medium text-neutral-700" data-oid="nr_xpm0">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div
            className="relative flex items-center justify-center mb-6"
            data-oid="cb1kuug"
          >
            <div
              className="border-t border-neutral-200 w-full"
              data-oid="bft0e40"
            ></div>
            <span
              className="bg-white px-4 text-sm text-neutral-500 font-medium"
              data-oid="0q6:v:e"
            >
              Or continue with email
            </span>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm mb-6"
              data-oid="pwka81f"
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-oid="ivvgt31"
          >
            {/* Email Field */}
            <div data-oid=":4:nwcy">
              <label
                className="block text-sm font-medium text-neutral-700 mb-2"
                data-oid="ij2nqh2"
              >
                Email Address
              </label>
              <div className="relative" data-oid="_8o.2qp">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                  data-oid="a-q3j1-"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Enter your email"
                  required
                  data-oid="c2pozct"
                />
              </div>
            </div>

            {/* Password Field */}
            <div data-oid="ri7_opa">
              <label
                className="block text-sm font-medium text-neutral-700 mb-2"
                data-oid="m5e9g_t"
              >
                Password
              </label>
              <div className="relative" data-oid="_qmdpkh">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                  data-oid="7oqxap."
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Enter your password"
                  required
                  data-oid="ul9zd5-"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  data-oid=".ovkrou"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" data-oid="nvr2:-g" />
                  ) : (
                    <Eye className="w-5 h-5" data-oid="vaf7b47" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div
              className="flex items-center justify-between"
              data-oid="i1_pgyc"
            >
              <label className="flex items-center" data-oid="l.51:pe">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary/20"
                  data-oid="s22e7qn"
                />

                <span
                  className="ml-2 text-sm text-neutral-600"
                  data-oid="rc8t.xq"
                >
                  Remember me
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:text-primary-dark font-medium"
                data-oid="bt9-8p7"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="f9gz0--"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    data-oid="9f-148w"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      data-oid="n07kbr1"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      data-oid="76mxj6t"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" data-oid="ziap3ua" />
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8" data-oid="fxs7lxr">
            <p className="text-neutral-600" data-oid="--ehqww">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-primary-dark font-semibold"
                data-oid="6s11qkc"
              >
                Create account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Feature Showcase */}
      <div
        className="hidden lg:flex flex-1 bg-primary text-white p-12 items-center justify-center relative overflow-hidden"
        data-oid="v103n.n"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" data-oid="yr9iokf">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"
            data-oid="rk4d20p"
          ></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-xl"
            data-oid="5s0qi_r"
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary rounded-full blur-xl"
            data-oid="bc:umal"
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-md"
          data-oid="q1xl:vi"
        >
          <h2 className="text-4xl font-bold mb-6" data-oid=":lzx4df">
            Master Real Estate Investment
          </h2>
          <p className="text-xl text-white/80 mb-8" data-oid="6n7zvrh">
            Join thousands of successful investors who've transformed their
            financial future with our expert-led courses.
          </p>

          <div className="space-y-6" data-oid="2o1hkk8">
            <div className="flex items-center gap-4" data-oid="auzv5s7">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="vd.-n_7"
              >
                <TrendingUp className="w-6 h-6" data-oid="4wnpu:d" />
              </div>
              <div data-oid="pp5.1:h">
                <h3 className="font-semibold" data-oid="p2egyoj">
                  Expert-Led Courses
                </h3>
                <p className="text-white/70" data-oid="mzbua25">
                  Learn from industry professionals
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" data-oid="1mu6.yn">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="egp0z3q"
              >
                <Users className="w-6 h-6" data-oid="y:.8k5." />
              </div>
              <div data-oid="r.o15kx">
                <h3 className="font-semibold" data-oid="268b0hz">
                  Community Support
                </h3>
                <p className="text-white/70" data-oid="wf_m33_">
                  Connect with fellow investors
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" data-oid="7n5.o15">
              <div
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                data-oid="u_rr05y"
              >
                <Building2 className="w-6 h-6" data-oid="it1r46-" />
              </div>
              <div data-oid="8ar_59n">
                <h3 className="font-semibold" data-oid="s2acd7t">
                  Real-World Strategies
                </h3>
                <p className="text-white/70" data-oid="s-dq-r2">
                  Practical investment techniques
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
