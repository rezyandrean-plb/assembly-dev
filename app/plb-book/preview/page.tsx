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
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28" data-oid="o7xwlfw">
      {isMounted && (
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={windowHeight}
          data-oid="e9pvpj0"
        />
      )}

      <div className="container mx-auto py-16 px-4" data-oid="f_k0_np">
        <Link
          href="/plb-book"
          className="inline-flex items-center text-primary mb-8 hover:underline"
          data-oid="bsiyvr_"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="f:jd0ng"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
              data-oid="hrc-i47"
            />
          </svg>
          Back to Book Page
        </Link>

        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          data-oid="87atwhi"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" data-oid="jz.kywx">
            {/* Book Cover Side */}
            <div
              className="bg-primary p-8 flex flex-col justify-center items-center text-white"
              data-oid="hb1cf92"
            >
              <div className="max-w-md" data-oid="_58h44e">
                <div
                  className="relative w-full max-w-xs mx-auto mb-8"
                  data-oid="w4-0d.4"
                >
                  <div
                    className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-xl transform rotate-3 mx-auto"
                    data-oid="8d2g93x"
                  >
                    <div
                      className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center"
                      data-oid="i2bp11e"
                    >
                      <div className="text-center p-4" data-oid="tqk.v55">
                        <h3
                          className="text-primary text-xl font-bold mb-2"
                          data-oid="9so8oez"
                        >
                          POSITIONING
                        </h3>
                        <h4
                          className="text-primary text-lg mb-4"
                          data-oid=":9bo909"
                        >
                          THE ART OF SELLING YOUR PROPERTY
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="9c7u6:9">
                          TO ITS MAXIMUM POTENTIAL
                        </p>
                        <div className="mt-8" data-oid="dxs_tqs">
                          <p
                            className="text-primary font-bold"
                            data-oid="f2jsd2r"
                          >
                            MELVIN LIM
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-oid="2reie5a"
                          >
                            CO-FOUNDER & CEO PROPERTYLIMBROTHERS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4" data-oid="1al:2t8">
                  Unlock Your Property's Maximum Potential
                </h2>
                <p className="mb-6" data-oid=":wpb9:h">
                  Delve into a comprehensive guide to optimising property value,
                  blending market insights, data analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8" data-oid="d2.t62_">
                  <div className="flex items-center" data-oid="knq8lrv">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid=".8npe-_"
                    >
                      01
                    </span>
                    <span data-oid="l9vegde">
                      The Most Common Reasons for Selling
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="0tc_ayr">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="sng120e"
                    >
                      02
                    </span>
                    <span data-oid="ugkfv2f">
                      12 Steps to Selling Your Home
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="49ficm6">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="paxdj2l"
                    >
                      03
                    </span>
                    <span data-oid="202ei:.">
                      Product Positioning: Transforming the home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8" data-oid="6gg_p36">
              {!isSubmitted ? (
                <>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    data-oid="t617p-j"
                  >
                    Claim Your Free Preview Now
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="wjofe-b">
                    Grab our complimentary chapter packed with actionable
                    insights to start transforming your home-selling experience
                    today!
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-oid="w0wdvm5"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="jmunq:f"
                    >
                      <div data-oid="1z2ae3r">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="v2bflvo"
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
                          data-oid="tikegxl"
                        />
                      </div>
                      <div data-oid="qsv_ewu">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="90byda_"
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
                          data-oid="4tcl7ln"
                        />
                      </div>
                    </div>

                    <div data-oid="co6jh9t">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="l-e0.ac"
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
                        data-oid="0h.nejn"
                      />
                    </div>

                    <div data-oid=":n:jxk4">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="mxf55m3"
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
                        data-oid="zwwqlhr"
                      />
                    </div>

                    <div data-oid="smibvcq">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="7200o4b"
                      >
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        data-oid="eh090sp"
                      >
                        <option value="None" data-oid="a_68brn">
                          None
                        </option>
                        <option value="HDB" data-oid="ms.7tgw">
                          HDB
                        </option>
                        <option value="Condo" data-oid="7poqi.-">
                          Condominium
                        </option>
                        <option value="Landed" data-oid="q_iyt15">
                          Landed Property
                        </option>
                        <option value="Multiple" data-oid="d63u5va">
                          Multiple Properties
                        </option>
                      </select>
                    </div>

                    <div className="flex items-start" data-oid="1t.srxx">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        data-oid="9u42118"
                      />

                      <label
                        htmlFor="marketingConsent"
                        className="ml-2 block text-sm text-gray-600"
                        data-oid="y90mn1o"
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
                      data-oid="5yz1oct"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12" data-oid="asbbhpm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="ue4ool."
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="9m-hnme"
                    />
                  </svg>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    data-oid="-.-y6-y"
                  >
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="pjihdsb">
                    Your free preview is on its way to your inbox. Please check
                    your email in the next few minutes.
                  </p>
                  <Link href="/plb-book" data-oid="k_w7dzx">
                    <button
                      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                      data-oid="-.w37:9"
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
