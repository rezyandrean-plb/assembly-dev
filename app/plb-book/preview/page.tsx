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
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28" data-oid="m7nojmy">
      {isMounted && (
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={windowHeight}
          data-oid="jhzwc0r"
        />
      )}

      <div className="container mx-auto py-16 px-4" data-oid="7-w7841">
        <Link
          href="/plb-book"
          className="inline-flex items-center text-primary mb-8 hover:underline"
          data-oid="8lv8qvk"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="l.61hfp"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
              data-oid="otnsl7j"
            />
          </svg>
          Back to Book Page
        </Link>

        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          data-oid="f:m9w1u"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" data-oid="0nex-y1">
            {/* Book Cover Side */}
            <div
              className="p-8 flex flex-col justify-center items-center text-gray-800 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, #fffbeb, #fdfdfd, #d1e1f8)",
              }}
              data-oid="nqdr6o0"
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10" data-oid="_of06k1">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform -skew-y-12"
                  data-oid="mak2n.a"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-200/15 to-transparent transform skew-y-12"
                  data-oid="x4k.vp5"
                ></div>
              </div>
              <div className="max-w-md relative z-10" data-oid="ni.hcy7">
                <div
                  className="relative w-full max-w-xs mx-auto mb-8"
                  data-oid="4qb:x9m"
                >
                  <div
                    className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-2xl transform rotate-3 mx-auto hover:rotate-1 transition-transform duration-300"
                    data-oid="50iprjs"
                  >
                    <img
                      src="/images/PLB Book Front Cover_FA.jpg"
                      alt="PropertyLimBrothers Book Cover"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      data-oid="qy1:i75"
                    />

                    <div
                      className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center opacity-0"
                      data-oid="ilpq6:d"
                    >
                      <div className="text-center p-4" data-oid="esd--_h">
                        <h3
                          className="text-primary text-xl font-bold mb-2"
                          data-oid="dn6s5:o"
                        >
                          POSITIONING
                        </h3>
                        <h4
                          className="text-primary text-lg mb-4"
                          data-oid="bwobjq0"
                        >
                          THE ART OF SELLING YOUR PROPERTY
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="dfn1qy.">
                          TO ITS MAXIMUM POTENTIAL
                        </p>
                        <div className="mt-8" data-oid="i1ho8a:">
                          <p
                            className="text-primary font-bold"
                            data-oid="jxgx4qm"
                          >
                            MELVIN LIM
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-oid="_0u1sa6"
                          >
                            CO-FOUNDER & CEO PROPERTYLIMBROTHERS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4" data-oid="emcsei:">
                  Unlock Your Property's Maximum Potential
                </h2>
                <p className="mb-6" data-oid="8s00y18">
                  Delve into a comprehensive guide to optimising property value,
                  blending market insights, data analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8" data-oid="v053gga">
                  <div className="flex items-center" data-oid="e373z7l">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="jmtyfwg"
                    >
                      01
                    </span>
                    <span data-oid="uf4w:-k">
                      The Most Common Reasons for Selling
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="kj9g01f">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="fzs8iv_"
                    >
                      02
                    </span>
                    <span data-oid="ip8ebum">
                      12 Steps to Selling Your Home
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="q8-gpn1">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="h57s:7v"
                    >
                      03
                    </span>
                    <span data-oid="2sadawv">
                      Product Positioning: Transforming the home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8" data-oid="12992np">
              {!isSubmitted ? (
                <>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    data-oid="zri_2:m"
                  >
                    Claim Your Free Preview Now
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="6z6atg0">
                    Grab our complimentary chapter packed with actionable
                    insights to start transforming your home-selling experience
                    today!
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-oid="9zd6lls"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="20567hl"
                    >
                      <div data-oid="vw1fzs6">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="nwegtaf"
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
                          data-oid="gwp8.wl"
                        />
                      </div>
                      <div data-oid="m2214hq">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="i0-4o.n"
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
                          data-oid="lhczhp1"
                        />
                      </div>
                    </div>

                    <div data-oid="yer5ytw">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="9.-c:f:"
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
                        data-oid="0f06:f:"
                      />
                    </div>

                    <div data-oid="2.zsm5_">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="_2izsko"
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
                        data-oid="g_3fg45"
                      />
                    </div>

                    <div data-oid="ukgalc_">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="_4a3..2"
                      >
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        data-oid="_azcq9t"
                      >
                        <option value="None" data-oid="-22l7ea">
                          None
                        </option>
                        <option value="HDB" data-oid="_ntf5s0">
                          HDB
                        </option>
                        <option value="Condo" data-oid="8p2-r00">
                          Condominium
                        </option>
                        <option value="Landed" data-oid="fstr-9e">
                          Landed Property
                        </option>
                        <option value="Multiple" data-oid="0rhwqjg">
                          Multiple Properties
                        </option>
                      </select>
                    </div>

                    <div className="flex items-start" data-oid="hqf4nky">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        data-oid="9:4_bsb"
                      />

                      <label
                        htmlFor="marketingConsent"
                        className="ml-2 block text-sm text-gray-600"
                        data-oid="4i6wate"
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
                      data-oid="1m_myz3"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12" data-oid="e.dp1ge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="m3hq6bi"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="y8c.e3i"
                    />
                  </svg>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    data-oid="qr2bsnr"
                  >
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="5m9-ww8">
                    Your free preview is on its way to your inbox. Please check
                    your email in the next few minutes.
                  </p>
                  <Link href="/plb-book" data-oid="3gc311v">
                    <button
                      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                      data-oid="v33qs2j"
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
