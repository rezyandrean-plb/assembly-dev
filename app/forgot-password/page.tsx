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
    <NetworkProvider data-oid="_4lybdn">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="m__p0x1"
      >
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={0}
          opacity={0.3}
          data-oid="4l4xf7d"
        />

        <Navbar data-oid="k3ei967" />

        <section className="pt-32 pb-16 relative z-10" data-oid="q.kk-j4">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="zd7-sib"
          >
            <div
              className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6"
              data-oid="3tjxgm2"
            >
              <div className="mb-6" data-oid="8x-wgo6">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center text-[#123B79] hover:underline"
                  data-oid="ips:q.5"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" data-oid="v8555bm" />
                  Back
                </button>
              </div>

              <div className="text-center mb-6" data-oid="5_q2uog">
                <h1
                  className="text-2xl font-bold text-[#123B79]"
                  data-oid="yv1zq34"
                >
                  Reset Your Password
                </h1>
                {!isSubmitted && (
                  <p className="text-gray-600 mt-2" data-oid="7s:m1ap">
                    Enter your email address and we'll send you instructions to
                    reset your password.
                  </p>
                )}
              </div>

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-oid="jtg7b:3"
                >
                  <div data-oid="tnvdwmb">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="osb8_3_"
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
                      data-oid="kjqnwvn"
                    />

                    {error && (
                      <p
                        className="mt-1 text-sm text-red-600"
                        data-oid="y1qhful"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    disabled={isSubmitting}
                    data-oid="12:8k0q"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center" data-oid="8z2bj_6">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          data-oid="3d7u1pj"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            data-oid="br3-fyl"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            data-oid="232586b"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center" data-oid="k7bvsb1">
                        <Send className="mr-2 h-4 w-4" data-oid="u.rcm1e" />
                        Reset Password
                      </span>
                    )}
                  </Button>

                  <div
                    className="text-center text-sm text-gray-500 pt-4"
                    data-oid="wv5cj9-"
                  >
                    Remember your password?{" "}
                    <a
                      href="/login"
                      className="text-[#123B79] hover:underline font-medium"
                      data-oid="-k.s.uo"
                    >
                      Login instead
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6" data-oid="xdr-ter">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                    data-oid="ynrdtov"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="copaq61"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="k-skf9q"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2"
                    data-oid="rjj4m-2"
                  >
                    Check Your Email
                  </h2>
                  <p className="text-gray-600 mb-3" data-oid="sk7oo4p">
                    If{" "}
                    <span className="font-medium" data-oid="6vxpiel">
                      {email}
                    </span>{" "}
                    is associated with an existing account, you'll receive
                    password reset instructions shortly.
                  </p>
                  <div
                    className="text-sm text-gray-500 mb-6"
                    data-oid="83rd0ut"
                  >
                    <p className="mb-2" data-oid="iyz4f-a">
                      Haven't received an email?
                    </p>
                    <ul className="space-y-1" data-oid="ystxxql">
                      <li data-oid="kxl:hlm">
                        • Please wait a few minutes and check your spam folder
                      </li>
                      <li data-oid="zrq4gaf">
                        • You may try again if the email doesn't arrive
                      </li>
                      <li data-oid="3pl5bci">
                        • If you don't have an account with us, please{" "}
                        <a
                          href="/register"
                          className="text-[#123B79] hover:underline font-medium"
                          data-oid="8gy24h_"
                        >
                          register here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => router.push("/login")}
                    className="bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="65pws9c"
                  >
                    Return to Login
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer data-oid="tfgpu-m" />
      </main>
    </NetworkProvider>
  );
}
