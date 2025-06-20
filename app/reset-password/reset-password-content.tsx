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
            data-oid="zzep2sp"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X + 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="a36.sva"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X - 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="x7p6d8k"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X + 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="dm3i-.m"
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
            data-oid="zp3iw.b"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="x86pln0"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="xclpuy8"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X}
            y2={backLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="k7rw-if"
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
            data-oid="wfsnx_g"
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X - 5}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="3gsi61g"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X + 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="8kcze3r"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X - 5}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="ebivhqg"
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
            data-oid="0zgbw4."
          />

          <line
            x1={frontLeg2X}
            y1={frontLegY1}
            x2={frontLeg2X}
            y2={frontLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="qkq1ae7"
          />

          <line
            x1={backLeg1X}
            y1={backLegY1}
            x2={backLeg1X}
            y2={backLegY2}
            stroke="black"
            strokeWidth="2.5"
            data-oid="eb0ancd"
          />

          <line
            x1={backLeg2X}
            y1={backLegY1}
            x2={backLeg2X}
            y2={backLegY2 - 5}
            stroke="black"
            strokeWidth="2.5"
            data-oid="5e_ngth"
          />
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col" data-oid="wh_9-pg">
      <Navbar data-oid="40-mqhw" />
      <NetworkBackground
        scrollY={0}
        scrollSpeed={0}
        windowHeight={0}
        opacity={0.3}
        data-oid=".c3jfi0"
      />

      <section className="pt-32 pb-16 flex-1 relative z-10" data-oid="2p:256r">
        <div
          className="container mx-auto px-4 relative z-10"
          data-oid="8loh871"
        >
          <div
            className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6"
            data-oid="klypi1e"
          >
            <div className="mb-6" data-oid="r.i-ld0">
              <button
                onClick={() => router.push("/login")}
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="h:ah.36"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="s0ktunh" />
                Back to Login
              </button>
            </div>

            <div className="text-center mb-6" data-oid=":73txvc">
              <h1
                className="text-2xl font-bold text-[#123B79]"
                data-oid="zmeuutk"
              >
                Reset Password
              </h1>
              {!isSubmitted && tokenValid && (
                <p className="text-gray-600 mt-2" data-oid=".:-3bap">
                  Please enter your new password below.
                </p>
              )}
            </div>

            {!tokenChecked ? (
              <div className="flex justify-center py-8" data-oid="uxg3ulr">
                <div
                  className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#123B79]"
                  data-oid="1q_ln77"
                ></div>
              </div>
            ) : !tokenValid ? (
              <div className="text-center py-6" data-oid="660z1dk">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4"
                  data-oid="m7jme8w"
                >
                  <AlertCircle className="h-8 w-8" data-oid="f9sfp79" />
                </div>
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  data-oid="2nm3l96"
                >
                  Invalid Reset Link
                </h2>
                <p className="text-gray-600 mb-6" data-oid="bh2z.5p">
                  {error}
                </p>
                <Button
                  onClick={() => router.push("/forgot-password")}
                  className="bg-[#123B79] hover:bg-[#0A2A5E]"
                  data-oid="a169asn"
                >
                  Request New Reset Link
                </Button>
              </div>
            ) : !isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-oid="up3ma7s"
              >
                {/* Cat animation */}
                <div className="flex justify-center mb-6" data-oid="k6p9ti9">
                  <div
                    className="relative h-24 flex items-center justify-center"
                    data-oid="zkk5ll6"
                  >
                    <svg
                      width={catWidth}
                      height="80"
                      viewBox={`0 0 ${catWidth} 80`}
                      preserveAspectRatio="xMidYMid meet"
                      className="transition-all duration-300 ease-in-out"
                      data-oid=".cn-qp8"
                    >
                      <g
                        transform="translate(0,10) scale(1,0.8)"
                        data-oid="css19i:"
                      >
                        {/* Cat body - scales with password length */}
                        <path
                          d={`M30,40 Q${catWidth / 2},30 ${catWidth - 30},40 Q${catWidth - 10},60 ${catWidth - 30},55 L30,55 Q10,60 30,40`}
                          stroke="black"
                          strokeWidth="3"
                          fill="white"
                          data-oid="7m1sd:3"
                        />
                        {/* Cat head - fixed at left */}
                        <circle
                          cx="30"
                          cy="35"
                          r="15"
                          stroke="black"
                          strokeWidth="3"
                          fill="white"
                          data-oid="jza.8-6"
                        />
                        {/* Cat face */}
                        <circle
                          cx="25"
                          cy="30"
                          r="2"
                          fill="black"
                          data-oid="_zgomyl"
                        />{" "}
                        {/* Left eye */}
                        <circle
                          cx="35"
                          cy="30"
                          r="2"
                          fill="black"
                          data-oid="w6rfq16"
                        />{" "}
                        {/* Right eye */}
                        <path
                          d="M30,35 L30,40"
                          stroke="black"
                          strokeWidth="1.5"
                          data-oid="nj6a3yz"
                        />{" "}
                        {/* Nose */}
                        <path
                          d="M30,40 Q25,43 20,41"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="none"
                          data-oid="il8gs7_"
                        />{" "}
                        {/* Mouth left */}
                        <path
                          d="M30,40 Q35,43 40,41"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="none"
                          data-oid="dzfaoff"
                        />{" "}
                        {/* Mouth right */}
                        {/* Cat ears */}
                        <path
                          d="M20,25 L15,15 L25,20 Z"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="white"
                          data-oid=".kn46-i"
                        />{" "}
                        {/* Left ear */}
                        <path
                          d="M40,25 L45,15 L35,20 Z"
                          stroke="black"
                          strokeWidth="1.5"
                          fill="white"
                          data-oid="icloe-s"
                        />{" "}
                        {/* Right ear */}
                        {/* Cat tail - animated */}
                        <path
                          d={`M${catWidth - 30},40 Q${catWidth - 10},${20 + animationFrame * 5} ${catWidth + 10},${30 + (animationFrame % 2) * 10}`}
                          stroke="black"
                          strokeWidth="2.5"
                          fill="none"
                          data-oid="c29fvj1"
                        />
                        {/* Cat legs - animated */}
                        {renderCatLegs()}
                        {/* Cat whiskers */}
                        <path
                          d="M20,38 L10,35"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="7ayqz3n"
                        />{" "}
                        {/* Left whisker top */}
                        <path
                          d="M20,40 L8,40"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="ndwlhoe"
                        />{" "}
                        {/* Left whisker middle */}
                        <path
                          d="M20,42 L10,45"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="d-2lw8x"
                        />{" "}
                        {/* Left whisker bottom */}
                        <path
                          d="M40,38 L50,35"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="1vbihsb"
                        />{" "}
                        {/* Right whisker top */}
                        <path
                          d="M40,40 L52,40"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="h:v7.ee"
                        />{" "}
                        {/* Right whisker middle */}
                        <path
                          d="M40,42 L50,45"
                          stroke="black"
                          strokeWidth="1"
                          data-oid="tmtd.dd"
                        />{" "}
                        {/* Right whisker bottom */}
                      </g>
                    </svg>
                  </div>
                </div>

                <div data-oid="bm27_6d">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="oep3af6"
                  >
                    New Password
                  </label>
                  <div className="relative" data-oid="the5t1.">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-[#123B79] focus:border-transparent"
                      placeholder="Enter new password"
                      required
                      minLength={8}
                      data-oid="wn0_q1."
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      data-oid="zi-h8ze"
                    >
                      {showPassword ? (
                        <EyeOff size={20} data-oid="rffvopb" />
                      ) : (
                        <Eye size={20} data-oid="niu4c66" />
                      )}
                    </button>
                  </div>
                  <p
                    className={`mt-2 text-sm ${getMessageColor()}`}
                    data-oid="3chw0cu"
                  >
                    {getPasswordMessage()}
                  </p>
                </div>

                <div data-oid="9hdhbs-">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="iu75gvb"
                  >
                    Confirm Password
                  </label>
                  <div className="relative" data-oid="sx1i.nb">
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
                      data-oid="7z1y49c"
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
                      data-oid="qofg3ap"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} data-oid="kphgu.5" />
                      ) : (
                        <Eye size={20} data-oid="ztqfci4" />
                      )}
                    </button>
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="mt-2 text-sm text-red-600" data-oid="p080:jc">
                      Passwords do not match
                    </p>
                  )}
                  {confirmPassword && passwordsMatch && (
                    <p
                      className="mt-2 text-sm text-green-600"
                      data-oid="jmqqblt"
                    >
                      Passwords match
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-sm text-red-600" data-oid="yg6.flf">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full py-3 rounded-full bg-black hover:bg-gray-800 text-white font-medium"
                  disabled={
                    isSubmitting || (confirmPassword && !passwordsMatch)
                  }
                  data-oid="wivx:kt"
                >
                  {isSubmitting ? (
                    <span
                      className="flex items-center justify-center"
                      data-oid="dqmhowu"
                    >
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        data-oid="qyestht"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          data-oid="u964ns0"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          data-oid="xkxg9:y"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Reset"
                  )}
                </Button>

                <div className="text-center mt-4" data-oid="3hqo:s5">
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="text-gray-500 hover:text-gray-700"
                    data-oid="hkazdig"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6" data-oid="zhtyck0">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
                  data-oid="ogq182v"
                >
                  <Check className="h-8 w-8" data-oid="b92qnt5" />
                </div>
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  data-oid="_8oca.9"
                >
                  Password Reset Successful
                </h2>
                <p className="text-gray-600 mb-6" data-oid="t.f9x:t">
                  Your password has been successfully reset. You can now log in
                  with your new password.
                </p>
                <Button
                  onClick={() => router.push("/login")}
                  className="py-3 px-6 rounded-full bg-black hover:bg-gray-800 text-white font-medium"
                  data-oid="pozisrk"
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
