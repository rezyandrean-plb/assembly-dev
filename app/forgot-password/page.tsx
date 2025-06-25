"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <NetworkProvider data-oid="15jro4e">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="mto2k:j"
      >
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={0}
          opacity={0.3}
          data-oid=".gkagud"
        />

        <section className="pt-32 pb-16 relative z-10" data-oid="5j-j8_7">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="-mtm887"
          >
            <div
              className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6"
              data-oid="rifflt5"
            >
              <div className="mb-6" data-oid="ct.l:t8">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center text-[#123B79] hover:underline"
                  data-oid="vme-sd-"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" data-oid="9yov_nv" />
                  Back
                </button>
              </div>

              <div className="text-center mb-6" data-oid="-cjh78t">
                <h1
                  className="text-2xl font-bold text-[#123B79]"
                  data-oid="pryyc2."
                >
                  Reset Your Password
                </h1>
                {!isSubmitted && (
                  <p className="text-gray-600 mt-2" data-oid="1l26hsh">
                    Enter your email address and we'll send you instructions to
                    reset your password.
                  </p>
                )}
              </div>

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-oid="1udwqxf"
                >
                  <div data-oid="ua6qk97">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="zyxy9gp"
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
                      data-oid="ydixvqh"
                    />

                    {error && (
                      <p
                        className="mt-1 text-sm text-red-600"
                        data-oid="37.s24s"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    disabled={isSubmitting}
                    data-oid="4lo:0as"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center" data-oid="ph5-d2j">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          data-oid="wr8h8sm"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            data-oid="8:a0s9-"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            data-oid="6fgt7ya"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center" data-oid="3p1sosx">
                        <Send className="mr-2 h-4 w-4" data-oid="zim5xj4" />
                        Reset Password
                      </span>
                    )}
                  </Button>

                  <div
                    className="text-center text-sm text-gray-500 pt-4"
                    data-oid="6nk8ghr"
                  >
                    Remember your password?{" "}
                    <a
                      href="/login"
                      className="text-[#123B79] hover:underline font-medium"
                      data-oid="o15hahz"
                    >
                      Login instead
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6" data-oid="g5hys-m">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                    data-oid="t3u22sa"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid=":fhach1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid=".p7uzvn"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2"
                    data-oid="f50-pxk"
                  >
                    Check Your Email
                  </h2>
                  <p className="text-gray-600 mb-3" data-oid="_psvx45">
                    If{" "}
                    <span className="font-medium" data-oid="x5amoab">
                      {email}
                    </span>{" "}
                    is associated with an existing account, you'll receive
                    password reset instructions shortly.
                  </p>
                  <div
                    className="text-sm text-gray-500 mb-6"
                    data-oid="mewdp_d"
                  >
                    <p className="mb-2" data-oid="xw-yq6-">
                      Haven't received an email?
                    </p>
                    <ul className="space-y-1" data-oid="zq9z_d6">
                      <li data-oid="enbklnd">
                        • Please wait a few minutes and check your spam folder
                      </li>
                      <li data-oid="fqaiuyy">
                        • You may try again if the email doesn't arrive
                      </li>
                      <li data-oid="13ajm5-">
                        • If you don't have an account with us, please{" "}
                        <a
                          href="/register"
                          className="text-[#123B79] hover:underline font-medium"
                          data-oid="0-y3vjh"
                        >
                          register here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => router.push("/login")}
                    className="bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="neu31z4"
                  >
                    Return to Login
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </NetworkProvider>
  );
}
