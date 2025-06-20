"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, AlertCircle, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/network-background";
import Navbar from "@/components/navbar";

export default function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [tokenValid, setTokenValid] = useState(true);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [animationFrame, setAnimationFrame] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Calculate cat width based on password length
  const minCatWidth = 160; // Reduced from 180 to 160 for slightly shorter initial width
  const maxCatWidth = 300; // Maximum width
  const charWidth = 12; // Width to add per character
  const catWidth = Math.min(
    minCatWidth + password.length * charWidth,
    maxCatWidth,
  );

  // Check if passwords match when confirmPassword changes
  useEffect(() => {
    if (confirmPassword) {
      setPasswordsMatch(password === confirmPassword);
    } else {
      setPasswordsMatch(true); // Don't show error when confirm field is empty
    }
  }, [confirmPassword, password]);

  // Running animation
  useEffect(() => {
    if (password.length > 0) {
      const interval = setInterval(() => {
        setAnimationFrame((prev) => (prev + 1) % 4);
      }, 150); // Speed of animation
      return () => clearInterval(interval);
    }
  }, [password]);

  // Determine password strength message
  const getPasswordMessage = () => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Password not long enough";
    if (password.length < 8) return "Password could be stronger";
    if (password.length < 10) return "Good password length";
    return "Strong password length";
  };

  // Determine message color
  const getMessageColor = () => {
    if (password.length === 0) return "text-gray-500";
    if (password.length < 6) return "text-red-600";
    if (password.length < 8) return "text-orange-500";
    if (password.length < 10) return "text-yellow-500";
    return "text-green-600";
  };

  // Simulate token validation
  useEffect(() => {
    const validateToken = async () => {
      try {
        // In a real app, you would validate the token with your API
        // For now, we'll simulate validation and consider it valid if it exists
        if (!token) {
          setTokenValid(false);
          setError(
            "Invalid or expired password reset link. Please request a new one.",
          );
        } else {
          setTokenValid(true);
        }
      } catch (err) {
        setTokenValid(false);
        setError(
          "An error occurred validating your reset link. Please try again.",
        );
      } finally {
        setTokenChecked(true);
      }
    };

    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!password) {
      setError("Please enter a new password");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would call your API here with the token and new password
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to render cat legs based on animation frame
  const renderCatLegs = () => {
    const frontLegY1 = 55;
    const frontLegY2 = 70;
    const backLegY1 = 55;
    const backLegY2 = 70;

    // Front legs
    const frontLeg1X = 40;
    const frontLeg2X = 60;

    // Back legs
    const backLeg1X = catWidth - 60;
    const backLeg2X = catWidth - 40;

    // Adjust leg positions based on animation frame
    if (animationFrame === 0) {
      return (
        <>
          <line
            x1={frontLeg1X}
            y1={frontLegY1}
            x2={frontLeg1X - 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="ixzjeam"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X + 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="x491v15"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X - 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="k_tgas6"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X + 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="ost-eja"
          />
        </>
      );
    } else if (animationFrame === 1) {
      return (
        <>
          <line
            x1={frontLeg1X}
            y1={frontLegY1}
            x2={frontLeg1X}
            y2={frontLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid=":_xscxp"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="tizy5s6"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="esi77il"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X}
            y2={backLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="bfctucs"
          />
        </>
      );
    } else if (animationFrame === 2) {
      return (
        <>
          <line
            x1={frontLeg1X}
            y1={frontLegY1}
            x2={frontLeg1X + 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="g2xnhbz"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X - 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="f-1x.k."
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X + 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="u4zln2r"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X - 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="1qmku14"
          />
        </>
      );
    } else {
      return (
        <>
          <line
            x1={frontLeg1X}
            y1={frontLegY1}
            x2={frontLeg1X}
            y2={frontLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="3q.x0g3"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="x0tin.9"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="zijr1vo"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X}
            y2={backLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="zs-:9:-"
          />
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col" data-oid="doowhj2">
      <Navbar data-oid="ztzidfq" />
      <NetworkBackground
        scrollY={0}
        scrollSpeed={0}
        windowHeight={0}
        opacity={0.3}
        data-oid="0cq8-t0"
      />

      <section className="pt-32 pb-16 flex-1 relative z-10" data-oid="c6rpr1-">
        <div
          className="container mx-auto px-4 relative z-10"
          data-oid="fcjy8bk"
        >
          <div
            className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6"
            data-oid="4blcv83"
          >
            <div className="mb-6" data-oid="5kgcmdu">
              <button
                onClick={() => router.push("/login")}
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="q099erh"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="p.qbg5j" />
                Back to Login
              </button>
            </div>

            <div className="text-center mb-6" data-oid="ifxc.:3">
              <h1
                className="text-2xl font-bold text-[#123B79]"
                data-oid="_nfmis."
              >
                Reset Password
              </h1>
              {!isSubmitted && tokenValid && (
                <p className="text-gray-600 mt-2" data-oid="_5v5h0u">
                  Please enter your new password below.
                </p>
              )}
            </div>

            {!tokenChecked ? (
              <div className="flex justify-center py-8" data-oid="j4nbl4y">
                <div
                  className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#123B79]"
                  data-oid="1cuxw0."
                ></div>
              </div>
            ) : !tokenValid ? (
              <div className="text-center py-6" data-oid="_oe-q8l">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4"
                  data-oid="xmb.qv8"
                >
                  <AlertCircle className="h-8 w-8" data-oid="m.509zt" />
                </div>
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  data-oid="azmf0f."
                >
                  Invalid Reset Link
                </h2>
                <p className="text-gray-600 mb-6" data-oid=".0vte51">
                  {error}
                </p>
                <Button
                  onClick={() => router.push("/forgot-password")}
                  className="bg-[#123B79] hover:bg-[#0A2A5E]"
                  data-oid="i7-6mco"
                >
                  Request New Reset Link
                </Button>
              </div>
            ) : !isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="e_jx.a2"
              >
                {/* Cat animation */}
                <div className="flex justify-center mb-6" data-oid="nswor7t">
                  <div
                    className="relative h-24 flex items-center justify-center"
                    data-oid="p6crni1"
                  >
                    <svg
                      width={catWidth}
                      height="80"
                      viewBox={`0 0 ${catWidth} 80`}
                      preserveAspectRatio="xMidYMid meet"
                      className="transition-all duration-300 ease-in-out"
                      data-oid="di8-lm5"
                    >
                      <g
                        transform="translate(0,10) scale(1,0.8)"
                        data-oid="goybg-1"
                      >
                        {/* Cat body - scales with password length */}
                        <path
                          d={`M30,40 Q${catWidth / 2},30 ${catWidth - 30},40 Q${catWidth - 10},60 ${catWidth - 30},55 L30,55 Q10,60 30,40`}
                          stroke="black"
                          strokeWidth="3"
                          fill="white"
                          data-oid="v:4:0o0"
                        />
                        {/* Cat head - fixed at left */}
                        <circle
                          cx="30"
                          cy="35"
                          r="15"
                          stroke="black"
                          strokeWidth="3"
                          fill="white"
                          data-oid="mjhv_ep"
                        />
                        {/* Cat face */}
                        <circle
                          cx="25"
                          cy="30"
                          r="2"
                          fill="black"
                          data-oid="p89ria3"
                        />{" "}
                        {/* Left eye */}
                        <circle
                          cx="35"
                          cy="30"
                          r="2"
                          fill="black"
                          data-oid="z307dmz"
                        />{" "}
                        {/* Right eye */}
                        <path
                          d="M30,35 L30,40"
                          stroke="black"
                          strokeWidth="1.5"
                          data-oid="ilooskk"
                        />{" "}
                        {/* Nose */}
                        <path
                          d="M30,40 Q25,43 20,41"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="none"
                          data-oid="r3y0vc2"
                        />{" "}
                        {/* Mouth left */}
                        <path
                          d="M30,40 Q35,43 40,41"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="none"
                          data-oid="a:w5815"
                        />{" "}
                        {/* Mouth right */}
                        {/* Cat ears */}
                        <path
                          d="M20,25 L15,15 L25,20 Z"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="white"
                          data-oid="r_x7qvo"
                        />{" "}
                        {/* Left ear */}
                        <path
                          d="M40,25 L45,15 L35,20 Z"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="white"
                          data-oid="5w7ro_m"
                        />{" "}
                        {/* Right ear */}
                        {/* Cat tail - animated */}
                        <path
                          d={`M${catWidth - 30},40 Q${catWidth - 10},${20 + animationFrame * 5} ${catWidth + 10},${30 + (animationFrame % 2) * 10}`}
                          stroke="black"
                          strokeWidth="2.5"
                          fill="none"
                          data-oid="j66bnhc"
                        />
                        {/* Cat legs - animated */}
                        {renderCatLegs()}
                        {/* Cat whiskers */}
                        <path
                          d="M20,38 L10,35"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="mf61rqf"
                        />{" "}
                        {/* Left whisker top */}
                        <path
                          d="M20,40 L8,40"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="knou6l_"
                        />{" "}
                        {/* Left whisker middle */}
                        <path
                          d="M20,42 L10,45"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="ssik62_"
                        />{" "}
                        {/* Left whisker bottom */}
                        <path
                          d="M40,38 L50,35"
                          stroke="black"
                          strokeWidth="1"
                          data-oid=":2ds-vj"
                        />{" "}
                        {/* Right whisker top */}
                        <path
                          d="M40,40 L52,40"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="31_sx_z"
                        />{" "}
                        {/* Right whisker middle */}
                        <path
                          d="M40,42 L50,45"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="zzh.c3r"
                        />{" "}
                        {/* Right whisker bottom */}
                      </g>
                    </svg>
                  </div>
                </div>

                <div data-oid="4gzdml4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="yww-0iz"
                  >
                    New Password
                  </label>
                  <div className="relative" data-oid="msspi46">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-[#123B79] focus:border-transparent"
                      placeholder="Enter new password"
                      required
                      minLength={8}
                      data-oid="qlpt6xr"
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      data-oid="45osjs2"
                    >
                      {showPassword ? (
                        <EyeOff size={20} data-oid="yrys48r" />
                      ) : (
                        <Eye size={20} data-oid="0jsgsui" />
                      )}
                    </button>
                  </div>
                  <p
                    className={`mt-2 text-sm ${getMessageColor()}`}
                    data-oid="jcy:3iv"
                  >
                    {getPasswordMessage()}
                  </p>
                </div>

                <div data-oid="mw117:9">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="pat_y6c"
                  >
                    Confirm Password
                  </label>
                  <div className="relative" data-oid="13crt-x">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full px-4 py-3 pr-12 border-2 ${
                        confirmPassword && !passwordsMatch
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-full focus:outline-none focus:ring-2 focus:ring-[#123B79] focus:border-transparent`}
                      placeholder="Confirm new password"
                      required
                      data-oid="i34lwi4"
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                      data-oid="oofusab"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} data-oid="g7b589l" />
                      ) : (
                        <Eye size={20} data-oid="qn.q:v5" />
                      )}
                    </button>
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="mt-2 text-sm text-red-600" data-oid="3ma.pq6">
                      Passwords do not match
                    </p>
                  )}
                  {confirmPassword && passwordsMatch && (
                    <p
                      className="mt-2 text-sm text-green-600"
                      data-oid="ir77mzn"
                    >
                      Passwords match
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-sm text-red-600" data-oid=":7ckc_r">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full py-3 rounded-full bg-black hover:bg-gray-800 text-white font-medium"
                  disabled={
                    isSubmitting || (confirmPassword && !passwordsMatch)
                  }
                  data-oid="sws-grt"
                >
                  {isSubmitting ? (
                    <span
                      className="flex items-center justify-center"
                      data-oid="z9h7qn:"
                    >
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        data-oid="c8v.72r"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          data-oid="5.4m0u3"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          data-oid="9_-i46y"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Reset"
                  )}
                </Button>

                <div className="text-center mt-4" data-oid="8exlx6x">
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="text-gray-500 hover:text-gray-700"
                    data-oid="t8absuo"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6" data-oid="3m653:0">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                  data-oid="7tw6.au"
                >
                  <Check className="h-8 w-8" data-oid="q8x4czf" />
                </div>
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  data-oid="nn9rgfb"
                >
                  Password Reset Successful
                </h2>
                <p className="text-gray-600 mb-6" data-oid="5kafi5q">
                  Your password has been successfully reset. You can now log in
                  with your new password.
                </p>
                <Button
                  onClick={() => router.push("/login")}
                  className="py-3 px-6 rounded-full bg-black hover:bg-gray-800 text-white font-medium"
                  data-oid=":33gzzj"
                >
                  Go to Login
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
