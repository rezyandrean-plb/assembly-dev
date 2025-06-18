"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NetworkProvider } from "@/context/network-context";
import NetworkBackground from "@/components/network-background";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would call your API here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NetworkProvider data-oid="b-gcuc7">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="ciicewl"
      >
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={0}
          opacity={0.3}
          data-oid="g:4fvee"
        />

        <Navbar data-oid="_c4kn3m" />

        <section className="pt-32 pb-16 relative z-10" data-oid="5cig_j.">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="b64g.d9"
          >
            <div
              className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6"
              data-oid="ntc1q4h"
            >
              <div className="mb-6" data-oid="z-p-s85">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center text-[#123B79] hover:underline"
                  data-oid="fvwhy45"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" data-oid="c3lg36q" />
                  Back
                </button>
              </div>

              <div className="text-center mb-6" data-oid="i15c40b">
                <h1
                  className="text-2xl font-bold text-[#123B79]"
                  data-oid="kso.wuc"
                >
                  Reset Your Password
                </h1>
                {!isSubmitted && (
                  <p className="text-gray-600 mt-2" data-oid="hcz3jpl">
                    Enter your email address and we'll send you instructions to
                    reset your password.
                  </p>
                )}
              </div>

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-oid="nvtbg-5"
                >
                  <div data-oid="50do2hn">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="a780nqj"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123B79]"
                      placeholder="your@email.com"
                      required
                      data-oid="4hxtz1p"
                    />

                    {error && (
                      <p
                        className="mt-1 text-sm text-red-600"
                        data-oid="figguag"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    disabled={isSubmitting}
                    data-oid="emgx6_q"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center" data-oid="i4tl7yd">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          data-oid="qj71b8w"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            data-oid="fx:5cy3"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            data-oid="lrfrvjq"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center" data-oid="nw6fzrn">
                        <Send className="mr-2 h-4 w-4" data-oid="-b.w1fa" />
                        Reset Password
                      </span>
                    )}
                  </Button>

                  <div
                    className="text-center text-sm text-gray-500 pt-4"
                    data-oid="-8ptpph"
                  >
                    Remember your password?{" "}
                    <a
                      href="/login"
                      className="text-[#123B79] hover:underline font-medium"
                      data-oid="7n-inqo"
                    >
                      Login instead
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6" data-oid="djt0an0">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                    data-oid="_fp_pry"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="o804-je"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="e8lanad"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2"
                    data-oid="jicb6yv"
                  >
                    Check Your Email
                  </h2>
                  <p className="text-gray-600 mb-3" data-oid="bwshiiy">
                    If{" "}
                    <span className="font-medium" data-oid="wao7tr-">
                      {email}
                    </span>{" "}
                    is associated with an existing account, you'll receive
                    password reset instructions shortly.
                  </p>
                  <div
                    className="text-sm text-gray-500 mb-6"
                    data-oid="j.4blln"
                  >
                    <p className="mb-2" data-oid="_u09bdf">
                      Haven't received an email?
                    </p>
                    <ul className="space-y-1" data-oid="pqrqqnv">
                      <li data-oid="2u30j0v">
                        • Please wait a few minutes and check your spam folder
                      </li>
                      <li data-oid="oam5mam">
                        • You may try again if the email doesn't arrive
                      </li>
                      <li data-oid="f:jhu3w">
                        • If you don't have an account with us, please{" "}
                        <a
                          href="/register"
                          className="text-[#123B79] hover:underline font-medium"
                          data-oid="n_erjmb"
                        >
                          register here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => router.push("/login")}
                    className="bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="u:5iqc9"
                  >
                    Return to Login
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer data-oid="6ufb:y8" />
      </main>
    </NetworkProvider>
  );
}
