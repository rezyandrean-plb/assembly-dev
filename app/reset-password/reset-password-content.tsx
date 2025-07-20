"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, AlertCircle, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/network-background";

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
            data-oid="lundjhz"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X + 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="kaoafve"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X - 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="7rgrrm."
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X + 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid=":7lpll5"
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
            data-oid="-0paeyj"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="cqo21-1"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="pw97zmr"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X}
            y2={backLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="mw:m1_."
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
            data-oid="88715_x"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X - 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid=".975nk_"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X + 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="5xibm_0"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X - 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="quvyikg"
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
            data-oid="ztvh08."
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="7kds94l"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="5kegy9f"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X}
            y2={backLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="yuayzyk"
          />
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col" data-oid="j8k_f18">
      <NetworkBackground
        scrollY={0}
        scrollSpeed={0}
        windowHeight={0}
        opacity={0.3}
        data-oid="ndrdqaq"
      />

      <section className="pt-32 pb-16 flex-1 relative z-10" data-oid="gg7.o.e">
        <div
          className="container mx-auto px-4 relative z-10"
          data-oid="i7ytz41"
        >
          <div
            className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6"
            data-oid="io99uzr"
          >
            <div className="mb-6" data-oid="-zi-kg3">
              <button
                onClick={() => router.push("/login")}
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="yhi2e0."
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="e_af8rs" />
                Back to Login
              </button>
            </div>

            <div className="text-center mb-6" data-oid="yxk_gin">
              <h1
                className="text-2xl font-bold text-[#123B79]"
                data-oid="qlr4mk8"
              >
                Reset Password
              </h1>
              {!isSubmitted && tokenValid && (
                <p className="text-gray-600 mt-2" data-oid="cf763_z">
                  Please enter your new password below.
                </p>
              )}
            </div>

            {!tokenChecked ? (
              <div className="flex justify-center py-8" data-oid="jr7m5en">
                <div
                  className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#123B79]"
                  data-oid="a.b_lji"
                ></div>
              </div>
            ) : !tokenValid ? (
              <div className="text-center py-6" data-oid="6uhnc8s">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4"
                  data-oid="ri-0agb"
                >
                  <AlertCircle className="h-8 w-8" data-oid="dlxx1p2" />
                </div>
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  data-oid="uxzui.v"
                >
                  Invalid Reset Link
                </h2>
                <p className="text-gray-600 mb-6" data-oid="5g4_c9s">
                  {error}
                </p>
                <Button
                  onClick={() => router.push("/forgot-password")}
                  className="bg-[#123B79] hover:bg-[#0A2A5E]"
                  data-oid="0us4jw:"
                >
                  Request New Reset Link
                </Button>
              </div>
            ) : !isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="g_ro..p"
              >
                {/* Cat animation */}
                <div className="flex justify-center mb-6" data-oid="hp5uxkp">
                  <div
                    className="relative h-24 flex items-center justify-center"
                    data-oid="btykbh:"
                  >
                    <svg
                      width={catWidth}
                      height="80"
                      viewBox={`0 0 ${catWidth} 80`}
                      preserveAspectRatio="xMidYMid meet"
                      className="transition-all duration-300 ease-in-out"
                      data-oid="7-zewdf"
                    >
                      <g
                        transform="translate(0,10) scale(1,0.8)"
                        data-oid="7a:.4a8"
                      >
                        {/* Cat body - scales with password length */}
                        <path
                          d={`M30,40 Q${catWidth / 2},30 ${catWidth - 30},40 Q${catWidth - 10},60 ${catWidth - 30},55 L30,55 Q10,60 30,40`}
                          stroke="black"
                          strokeWidth="3"
                          fill="white"
                          data-oid="g6h9-2b"
                        />
                        {/* Cat head - fixed at left */}
                        <circle
                          cx="30"
                          cy="35"
                          r="15"
                          stroke="black"
                          strokeWidth="3"
                          fill="white"
                          data-oid="ysjuo5p"
                        />
                        {/* Cat face */}
                        <circle
                          cx="25"
                          cy="30"
                          r="2"
                          fill="black"
                          data-oid="y3i_1-w"
                        />{" "}
                        {/* Left eye */}
                        <circle
                          cx="35"
                          cy="30"
                          r="2"
                          fill="black"
                          data-oid="h1vyshu"
                        />{" "}
                        {/* Right eye */}
                        <path
                          d="M30,35 L30,40"
                          stroke="black"
                          strokeWidth="1.5"
                          data-oid="nh9ys_f"
                        />{" "}
                        {/* Nose */}
                        <path
                          d="M30,40 Q25,43 20,41"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="none"
                          data-oid="pyu2nst"
                        />{" "}
                        {/* Mouth left */}
                        <path
                          d="M30,40 Q35,43 40,41"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="none"
                          data-oid="lv-0ayh"
                        />{" "}
                        {/* Mouth right */}
                        {/* Cat ears */}
                        <path
                          d="M20,25 L15,15 L25,20 Z"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="white"
                          data-oid="tpjl-_a"
                        />{" "}
                        {/* Left ear */}
                        <path
                          d="M40,25 L45,15 L35,20 Z"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="white"
                          data-oid=".44g_2z"
                        />{" "}
                        {/* Right ear */}
                        {/* Cat tail - animated */}
                        <path
                          d={`M${catWidth - 30},40 Q${catWidth - 10},${20 + animationFrame * 5} ${catWidth + 10},${30 + (animationFrame % 2) * 10}`}
                          stroke="black"
                          strokeWidth="2.5"
                          fill="none"
                          data-oid="v17bnb-"
                        />
                        {/* Cat legs - animated */}
                        {renderCatLegs()}
                        {/* Cat whiskers */}
                        <path
                          d="M20,38 L10,35"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="qgj_rwp"
                        />{" "}
                        {/* Left whisker top */}
                        <path
                          d="M20,40 L8,40"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="a_s8d5l"
                        />{" "}
                        {/* Left whisker middle */}
                        <path
                          d="M20,42 L10,45"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="qlnazdm"
                        />{" "}
                        {/* Left whisker bottom */}
                        <path
                          d="M40,38 L50,35"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="jl_7sq7"
                        />{" "}
                        {/* Right whisker top */}
                        <path
                          d="M40,40 L52,40"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="fzcu31o"
                        />{" "}
                        {/* Right whisker middle */}
                        <path
                          d="M40,42 L50,45"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="h:uup_i"
                        />{" "}
                        {/* Right whisker bottom */}
                      </g>
                    </svg>
                  </div>
                </div>

                <div data-oid="fiqvmgy">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="zio.kk4"
                  >
                    New Password
                  </label>
                  <div className="relative" data-oid="q8p..:f">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-[#123B79] focus:border-transparent"
                      placeholder="Enter new password"
                      required
                      minLength={8}
                      data-oid="_hoii32"
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      data-oid="k5-0-tc"
                    >
                      {showPassword ? (
                        <EyeOff size={20} data-oid="o.u2gm2" />
                      ) : (
                        <Eye size={20} data-oid=":botibt" />
                      )}
                    </button>
                  </div>
                  <p
                    className={`mt-2 text-sm ${getMessageColor()}`}
                    data-oid="-g9vc8n"
                  >
                    {getPasswordMessage()}
                  </p>
                </div>

                <div data-oid="7aths1y">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="5.v:jri"
                  >
                    Confirm Password
                  </label>
                  <div className="relative" data-oid="mr38i72">
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
                      data-oid="34-hu8w"
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
                      data-oid="3_zzn5p"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} data-oid="gniscpk" />
                      ) : (
                        <Eye size={20} data-oid="eyb:5w9" />
                      )}
                    </button>
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="mt-2 text-sm text-red-600" data-oid="wz_xhi2">
                      Passwords do not match
                    </p>
                  )}
                  {confirmPassword && passwordsMatch && (
                    <p
                      className="mt-2 text-sm text-green-600"
                      data-oid="12aa1d2"
                    >
                      Passwords match
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-sm text-red-600" data-oid="9y84.8m">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full py-3 rounded-full bg-black hover:bg-gray-800 text-white font-medium"
                  disabled={
                    isSubmitting || (confirmPassword && !passwordsMatch)
                  }
                  data-oid=".dq63jr"
                >
                  {isSubmitting ? (
                    <span
                      className="flex items-center justify-center"
                      data-oid="4hu7if5"
                    >
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        data-oid="khy2ccb"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          data-oid="6xr5-:z"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          data-oid="qlzqajx"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Reset"
                  )}
                </Button>

                <div className="text-center mt-4" data-oid="ot0xtd1">
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="text-gray-500 hover:text-gray-700"
                    data-oid="fswsuct"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6" data-oid="s9wtge2">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                  data-oid="izbdxxe"
                >
                  <Check className="h-8 w-8" data-oid="933dfk4" />
                </div>
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  data-oid="xmb1rwj"
                >
                  Password Reset Successful
                </h2>
                <p className="text-gray-600 mb-6" data-oid="f8g2y3p">
                  Your password has been successfully reset. You can now log in
                  with your new password.
                </p>
                <Button
                  onClick={() => router.push("/login")}
                  className="py-3 px-6 rounded-full bg-black hover:bg-gray-800 text-white font-medium"
                  data-oid="k.e5.n-"
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
