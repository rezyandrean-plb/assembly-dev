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
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28" data-oid="ocfmylt">
      {isMounted && (
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={windowHeight}
          data-oid="xww.enl"
        />
      )}

      <div className="container mx-auto py-16 px-4" data-oid=".kijtss">
        <Link
          href="/plb-book"
          className="inline-flex items-center text-primary mb-8 hover:underline"
          data-oid="jqydxkh"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="b6:6xm1"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
              data-oid="5j7pq0:"
            />
          </svg>
          Back to Book Page
        </Link>

        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          data-oid="gzorrqa"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" data-oid="fgxi0r1">
            {/* Book Cover Side */}
            <div
              className="p-8 flex flex-col justify-center items-center text-gray-800 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, #fffbeb, #fdfdfd, #d1e1f8)",
              }}
              data-oid="3-y8lly"
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10" data-oid="gugu30:">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform -skew-y-12"
                  data-oid="y1zxi2_"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-200/15 to-transparent transform skew-y-12"
                  data-oid="ssavl5x"
                ></div>
              </div>
              <div className="max-w-md relative z-10" data-oid="a7iizwc">
                <div
                  className="relative w-full max-w-xs mx-auto mb-8"
                  data-oid="6_fbd4t"
                >
                  <div
                    className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-2xl transform rotate-3 mx-auto hover:rotate-1 transition-transform duration-300"
                    data-oid="0j5cyn3"
                  >
                    <img
                      src="/images/PLB Book Front Cover_FA.jpg"
                      alt="PropertyLimBrothers Book Cover"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      data-oid="g1qc97-"
                    />

                    <div
                      className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center opacity-0"
                      data-oid=":5noibo"
                    >
                      <div className="text-center p-4" data-oid="6l7x_et">
                        <h3
                          className="text-primary text-xl font-bold mb-2"
                          data-oid="qb7l:th"
                        >
                          POSITIONING
                        </h3>
                        <h4
                          className="text-primary text-lg mb-4"
                          data-oid="lf165uc"
                        >
                          THE ART OF SELLING YOUR PROPERTY
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="2s-zlvu">
                          TO ITS MAXIMUM POTENTIAL
                        </p>
                        <div className="mt-8" data-oid="l.9-_3h">
                          <p
                            className="text-primary font-bold"
                            data-oid=".xk69u2"
                          >
                            MELVIN LIM
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-oid="-lwg_jm"
                          >
                            CO-FOUNDER & CEO PROPERTYLIMBROTHERS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4" data-oid="yrhhi5p">
                  Unlock Your Property's Maximum Potential
                </h2>
                <p className="mb-6" data-oid="qbqs_bk">
                  Delve into a comprehensive guide to optimising property value,
                  blending market insights, data analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8" data-oid="jbjm2ts">
                  <div className="flex items-center" data-oid="0q-fs5b">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="3a0bzp6"
                    >
                      01
                    </span>
                    <span data-oid="krqiizw">
                      The Most Common Reasons for Selling
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="93kclos">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="0oimy-z"
                    >
                      02
                    </span>
                    <span data-oid="77:v20k">
                      12 Steps to Selling Your Home
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="2vq.dy5">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="oa8eyn_"
                    >
                      03
                    </span>
                    <span data-oid="tehugof">
                      Product Positioning: Transforming the home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8" data-oid="yfu2rnk">
              {!isSubmitted ? (
                <>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    data-oid="jn2lo0t"
                  >
                    Claim Your Free Preview Now
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="i7urcuv">
                    Grab our complimentary chapter packed with actionable
                    insights to start transforming your home-selling experience
                    today!
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-oid="9d7e5:w"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="4tm3qrk"
                    >
                      <div data-oid="f_5gs8v">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="8a8erui"
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
                          data-oid="so28-p."
                        />
                      </div>
                      <div data-oid="2q0jc04">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="j-2hrda"
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
                          data-oid="kb7vx7a"
                        />
                      </div>
                    </div>

                    <div data-oid="7.-zckx">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="i2oqt1a"
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
                        data-oid="ped9t1y"
                      />
                    </div>

                    <div data-oid="_:f5oyj">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="8di3.i0"
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
                        data-oid="a9wlmui"
                      />
                    </div>

                    <div data-oid="gs3o6gl">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="f84i077"
                      >
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        data-oid="3ih824o"
                      >
                        <option value="None" data-oid="07nbkbh">
                          None
                        </option>
                        <option value="HDB" data-oid="gj9wybu">
                          HDB
                        </option>
                        <option value="Condo" data-oid="1y:xl79">
                          Condominium
                        </option>
                        <option value="Landed" data-oid="ol0etji">
                          Landed Property
                        </option>
                        <option value="Multiple" data-oid="yvidg9.">
                          Multiple Properties
                        </option>
                      </select>
                    </div>

                    <div className="flex items-start" data-oid="k_u10t7">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        data-oid=":vx6_bc"
                      />

                      <label
                        htmlFor="marketingConsent"
                        className="ml-2 block text-sm text-gray-600"
                        data-oid="t9zvblt"
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
                      data-oid="mh05rya"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12" data-oid="99e-t9x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="51deupr"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid=":xhyvga"
                    />
                  </svg>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    data-oid="fn5zlo3"
                  >
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="y9zsfqi">
                    Your free preview is on its way to your inbox. Please check
                    your email in the next few minutes.
                  </p>
                  <Link href="/plb-book" data-oid="l67k2ah">
                    <button
                      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                      data-oid="57jk53h"
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
