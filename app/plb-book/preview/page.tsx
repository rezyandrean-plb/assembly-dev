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
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28" data-oid="62roli3">
      {isMounted && (
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={windowHeight}
          data-oid="4vhtaee"
        />
      )}

      <div className="container mx-auto py-16 px-4" data-oid="v67j80d">
        <Link
          href="/plb-book"
          className="inline-flex items-center text-primary mb-8 hover:underline"
          data-oid="i6sf.j5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="4f2wrx."
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
              data-oid="iuzq98s"
            />
          </svg>
          Back to Book Page
        </Link>

        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          data-oid="xkyiowb"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" data-oid="p9ql7lq">
            {/* Book Cover Side */}
            <div
              className="bg-primary p-8 flex flex-col justify-center items-center text-white"
              data-oid="qw947fl"
            >
              <div className="max-w-md" data-oid="wvv.fvb">
                <div
                  className="relative w-full max-w-xs mx-auto mb-8"
                  data-oid="cfocr:r"
                >
                  <div
                    className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-xl transform rotate-3 mx-auto"
                    data-oid="al8y2vu"
                  >
                    <img
                      src="/images/PLB Book Front Cover_FA.jpg"
                      alt="PropertyLimBrothers Book Cover"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      data-oid="0dktxe:"
                    />

                    <div
                      className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center opacity-0"
                      data-oid="xn10wc8"
                    >
                      <div className="text-center p-4" data-oid="4y4uv7g">
                        <h3
                          className="text-primary text-xl font-bold mb-2"
                          data-oid="968r8gr"
                        >
                          POSITIONING
                        </h3>
                        <h4
                          className="text-primary text-lg mb-4"
                          data-oid="fqp814:"
                        >
                          THE ART OF SELLING YOUR PROPERTY
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="rqhpi3x">
                          TO ITS MAXIMUM POTENTIAL
                        </p>
                        <div className="mt-8" data-oid="hcm5.0:">
                          <p
                            className="text-primary font-bold"
                            data-oid="4livau-"
                          >
                            MELVIN LIM
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-oid="st0.9vw"
                          >
                            CO-FOUNDER & CEO PROPERTYLIMBROTHERS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4" data-oid="n10-gxg">
                  Unlock Your Property's Maximum Potential
                </h2>
                <p className="mb-6" data-oid="2ug5jr1">
                  Delve into a comprehensive guide to optimising property value,
                  blending market insights, data analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8" data-oid="sco1jzg">
                  <div className="flex items-center" data-oid="48wg6wq">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="0888auz"
                    >
                      01
                    </span>
                    <span data-oid="xd59t7s">
                      The Most Common Reasons for Selling
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="rpv.bk8">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="6-7nx.b"
                    >
                      02
                    </span>
                    <span data-oid="-io8hdu">
                      12 Steps to Selling Your Home
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="10_jjqj">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="8q:3u4l"
                    >
                      03
                    </span>
                    <span data-oid="0t5uyza">
                      Product Positioning: Transforming the home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8" data-oid="dc4ycl-">
              {!isSubmitted ? (
                <>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    data-oid="52cv1u2"
                  >
                    Claim Your Free Preview Now
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="h4hrjrg">
                    Grab our complimentary chapter packed with actionable
                    insights to start transforming your home-selling experience
                    today!
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-oid="8gv_s:h"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="loxmiwi"
                    >
                      <div data-oid="ezl59f5">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="7j-c8is"
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
                          data-oid="76yta-p"
                        />
                      </div>
                      <div data-oid="vhc_1._">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="iqd20rj"
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
                          data-oid="o57q2gi"
                        />
                      </div>
                    </div>

                    <div data-oid=".9dohhw">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="64qiucg"
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
                        data-oid="39xaah0"
                      />
                    </div>

                    <div data-oid="8q-okwr">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="4j9snek"
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
                        data-oid="5fv.j93"
                      />
                    </div>

                    <div data-oid="180i.df">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="e_mvjb-"
                      >
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        data-oid="k9q-_m_"
                      >
                        <option value="None" data-oid="a1ar3-2">
                          None
                        </option>
                        <option value="HDB" data-oid="cmdwjm2">
                          HDB
                        </option>
                        <option value="Condo" data-oid="oj_snsx">
                          Condominium
                        </option>
                        <option value="Landed" data-oid="yrjy8j8">
                          Landed Property
                        </option>
                        <option value="Multiple" data-oid="nm9iy-e">
                          Multiple Properties
                        </option>
                      </select>
                    </div>

                    <div className="flex items-start" data-oid="-mdheh3">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        data-oid="j.f5qs0"
                      />

                      <label
                        htmlFor="marketingConsent"
                        className="ml-2 block text-sm text-gray-600"
                        data-oid="mztip_o"
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
                      data-oid="ks1k_:p"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12" data-oid="duv.9-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="kscndnh"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="m0zklfd"
                    />
                  </svg>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    data-oid="ai845pm"
                  >
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="hhzpu0q">
                    Your free preview is on its way to your inbox. Please check
                    your email in the next few minutes.
                  </p>
                  <Link href="/plb-book" data-oid="iyo37j9">
                    <button
                      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                      data-oid="wvn0w1q"
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
