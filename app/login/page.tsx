"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NetworkBackground from "@/components/network-background";
// Add the Navbar import at the top with the other imports
import Navbar from "@/components/navbar";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    // Simulate API call
    try {
      // In a real app, you would call your API here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Set login state in sessionStorage
      sessionStorage.setItem("fromLogin", "true");

      // Redirect to home page after successful login
      router.push("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update the return statement to include the Navbar component at the top
  // Replace the entire return statement with:
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white relative"
      data-oid="xs0wetn"
    >
      <Navbar data-oid="38pixcm" />
      <NetworkBackground
        scrollY={0}
        scrollSpeed={0}
        windowHeight={0}
        opacity={0.2}
        data-oid="10wsqb-"
      />

      {/* Centered login form */}
      <div
        className="flex-grow flex items-center justify-center"
        data-oid=".l79ce."
      >
        <div
          className="w-full max-w-md mx-auto p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 z-10"
          data-oid="-1zu2pk"
        >
          <div className="mb-8" data-oid="67n1eaa">
            <h1
              className="text-4xl font-bold text-gray-800 mb-2"
              data-oid="fajci9m"
            >
              Welcome Back
            </h1>
            <p className="text-gray-500" data-oid="3rc6n3j">
              Please log in to continue to your account
            </p>
          </div>

          {/* Google login button */}
          <button
            type="button"
            className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center mb-6 hover:bg-gray-50 transition-colors"
            data-oid="ry-zxya"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="mr-2"
              data-oid="itt8jdx"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                data-oid="v3a3wyw"
              />

              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                data-oid="-dz5lds"
              />

              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                data-oid="7l91jye"
              />

              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                data-oid="oj_sav."
              />
            </svg>
            Log in with Google
          </button>

          <div
            className="relative flex items-center justify-center mb-6"
            data-oid="v_518-g"
          >
            <div
              className="border-t border-gray-300 absolute w-full"
              data-oid="v14kpdu"
            ></div>
            <div
              className="bg-white px-4 relative text-sm text-gray-400"
              data-oid="_vd:v:x"
            >
              OR LOGIN WITH EMAIL
            </div>
          </div>

          {error && (
            <div
              className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4"
              data-oid="bzvq5x1"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="9ukvc.1"
          >
            <div data-oid="eh_tz4q">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Email"
                required
                data-oid="5rg709e"
              />
            </div>

            <div data-oid="3_y0m6v">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Password"
                required
                data-oid="xy_2sqr"
              />
            </div>

            <div
              className="flex items-center justify-between"
              data-oid="6txyk1_"
            >
              <div className="flex items-center" data-oid="xqp4uri">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  data-oid="bqq-3c_"
                />

                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                  data-oid="92_aq23"
                >
                  Keep me logged in
                </label>
              </div>
              <div data-oid="q2kubkt">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800"
                  data-oid="z:i5ns1"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-4 bg-[#123B79] hover:bg-[#0A2A5E] text-white font-medium rounded-lg transition-colors"
              disabled={isSubmitting}
              data-oid="9k:046u"
            >
              {isSubmitting ? (
                <span className="flex items-center" data-oid="qgrr66-">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    data-oid="z6qeps2"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      data-oid="o7qg:bc"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      data-oid="j9t12v5"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                <span
                  className="flex items-center justify-center w-full"
                  data-oid="rkki6zq"
                >
                  <span data-oid="e7j18p.">Log in</span>
                  <ArrowRight className="w-4 h-4 ml-2" data-oid="r32-n87" />
                </span>
              )}
            </button>
          </form>

          <div
            className="mt-8 text-center text-gray-500 text-sm"
            data-oid="npnodkn"
          >
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-800"
              data-oid="e69-8g3"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
