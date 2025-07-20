"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import NetworkBackground with no SSR
const NetworkBackground = dynamic(
  () => import("@/components/network-background"),
  {
    ssr: false,
  },
);

export default function BookPreviewPage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    propertyType: "None",
    marketingConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formState);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28" data-oid="5y.jhye">
      {isMounted && (
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={windowHeight}
          data-oid="jdin3gd"
        />
      )}

      <div className="container mx-auto py-16 px-4" data-oid="jjaqev:">
        <Link
          href="/plb-book"
          className="inline-flex items-center text-primary mb-8 hover:underline"
          data-oid="oo37-:0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="rvsqnxy"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
              data-oid="v2tlt-1"
            />
          </svg>
          Back to Book Page
        </Link>

        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          data-oid="e1:9b-a"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" data-oid="kh37jjk">
            {/* Book Cover Side */}
            <div
              className="p-8 flex flex-col justify-center items-center text-gray-800 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, #fffbeb, #fdfdfd, #d1e1f8)",
              }}
              data-oid="ts72fud"
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10" data-oid="z204j4a">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform -skew-y-12"
                  data-oid="gj.j079"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-200/15 to-transparent transform skew-y-12"
                  data-oid="bwfu8pp"
                ></div>
              </div>
              <div className="max-w-md relative z-10" data-oid="3zfj1sp">
                <div
                  className="relative w-full max-w-xs mx-auto mb-8"
                  data-oid="-40xug7"
                >
                  <div
                    className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-2xl transform rotate-3 mx-auto hover:rotate-1 transition-transform duration-300"
                    data-oid="k98:vit"
                  >
                    <img
                      src="/images/PLB Book Front Cover_FA.jpg"
                      alt="PropertyLimBrothers Book Cover"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      data-oid="pj.o34f"
                    />

                    <div
                      className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center opacity-0"
                      data-oid=".:4d_o5"
                    >
                      <div className="text-center p-4" data-oid="9.el7eg">
                        <h3
                          className="text-primary text-xl font-bold mb-2"
                          data-oid="cdajviy"
                        >
                          POSITIONING
                        </h3>
                        <h4
                          className="text-primary text-lg mb-4"
                          data-oid="atsosu:"
                        >
                          THE ART OF SELLING YOUR PROPERTY
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="927sxq1">
                          TO ITS MAXIMUM POTENTIAL
                        </p>
                        <div className="mt-8" data-oid="wn95fts">
                          <p
                            className="text-primary font-bold"
                            data-oid="3yyx5ha"
                          >
                            MELVIN LIM
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-oid="bqsqi8x"
                          >
                            CO-FOUNDER & CEO PROPERTYLIMBROTHERS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4" data-oid="gj7c2ey">
                  Unlock Your Property's Maximum Potential
                </h2>
                <p className="mb-6" data-oid="v78y7:3">
                  Delve into a comprehensive guide to optimising property value,
                  blending market insights, data analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8" data-oid="c1_x7i5">
                  <div className="flex items-center" data-oid="j0uhhs9">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="7r-ghu9"
                    >
                      01
                    </span>
                    <span data-oid="wc-m98t">
                      The Most Common Reasons for Selling
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="xy3b5jl">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="alp8m0:"
                    >
                      02
                    </span>
                    <span data-oid="g5oig8w">
                      12 Steps to Selling Your Home
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="rpd5uaw">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="x_2s2h9"
                    >
                      03
                    </span>
                    <span data-oid="6mvry1g">
                      Product Positioning: Transforming the home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8" data-oid="uq3.5ib">
              {!isSubmitted ? (
                <>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    data-oid="-djvt7f"
                  >
                    Claim Your Free Preview Now
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="e.j6lqu">
                    Grab our complimentary chapter packed with actionable
                    insights to start transforming your home-selling experience
                    today!
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-oid="n:dfhyh"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="t228rs5"
                    >
                      <div data-oid="nhq_r8:">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid=".ct9zk6"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="First Name"
                          data-oid="eeyz5_f"
                        />
                      </div>
                      <div data-oid="aba3gu7">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="_k-buhm"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Last Name"
                          data-oid="eirikl7"
                        />
                      </div>
                    </div>

                    <div data-oid="slcou2m">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="chki857"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Email"
                        data-oid="23jzloz"
                      />
                    </div>

                    <div data-oid="i5u2msc">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="b0:asdl"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Phone Number"
                        data-oid="u_:ma5-"
                      />
                    </div>

                    <div data-oid="j.e5n5h">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="re0jlpt"
                      >
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        data-oid="xlq84:w"
                      >
                        <option value="None" data-oid="oa-ag9s">
                          None
                        </option>
                        <option value="HDB" data-oid="7au:nbi">
                          HDB
                        </option>
                        <option value="Condo" data-oid=".x8ra10">
                          Condominium
                        </option>
                        <option value="Landed" data-oid="pkywp0u">
                          Landed Property
                        </option>
                        <option value="Multiple" data-oid="vrhqrqh">
                          Multiple Properties
                        </option>
                      </select>
                    </div>

                    <div className="flex items-start" data-oid="b3dvpwp">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        data-oid="yuuubwz"
                      />

                      <label
                        htmlFor="marketingConsent"
                        className="ml-2 block text-sm text-gray-600"
                        data-oid="fh-t8w4"
                      >
                        Upon registering, you agree to receive future marketing
                        materials from PropertyLimBrothers. Your personal
                        information will be used in accordance with our privacy
                        policy.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                      data-oid="h19:6lj"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12" data-oid="t7.wqeg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="47jp0:o"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="2wikty:"
                    />
                  </svg>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    data-oid=":rib7he"
                  >
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="i2:yn:t">
                    Your free preview is on its way to your inbox. Please check
                    your email in the next few minutes.
                  </p>
                  <Link href="/plb-book" data-oid=":rfs:3w">
                    <button
                      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                      data-oid="eq5.rgt"
                    >
                      Return to Book Page
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
