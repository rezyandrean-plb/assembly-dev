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
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28" data-oid="i-uq-wn">
      {isMounted && (
        <NetworkBackground
          scrollY={0}
          scrollSpeed={0}
          windowHeight={windowHeight}
          data-oid="rt13577"
        />
      )}

      <div className="container mx-auto py-16 px-4" data-oid="gn7-_1f">
        <Link
          href="/plb-book"
          className="inline-flex items-center text-primary mb-8 hover:underline"
          data-oid="kj9hpx0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="pmw2ada"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
              data-oid="cwgpgza"
            />
          </svg>
          Back to Book Page
        </Link>

        <div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          data-oid="tjmrinj"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" data-oid="5q3vowk">
            {/* Book Cover Side */}
            <div
              className="p-8 flex flex-col justify-center items-center text-gray-800 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, #fffbeb, #fdfdfd, #d1e1f8)",
              }}
              data-oid="p9_hr01"
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10" data-oid="y-4emaq">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform -skew-y-12"
                  data-oid="z1_hqfv"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-200/15 to-transparent transform skew-y-12"
                  data-oid="e9n64de"
                ></div>
              </div>
              <div className="max-w-md relative z-10" data-oid="91:zlqj">
                <div
                  className="relative w-full max-w-xs mx-auto mb-8"
                  data-oid="ijyri1f"
                >
                  <div
                    className="relative w-64 h-80 bg-blue-900 rounded-lg shadow-2xl transform rotate-3 mx-auto hover:rotate-1 transition-transform duration-300"
                    data-oid="62iqv.1"
                  >
                    <img
                      src="/images/PLB Book Front Cover_FA.jpg"
                      alt="PropertyLimBrothers Book Cover"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      data-oid="7:emflj"
                    />

                    <div
                      className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center opacity-0"
                      data-oid="c4.iet:"
                    >
                      <div className="text-center p-4" data-oid="ehx4qh:">
                        <h3
                          className="text-primary text-xl font-bold mb-2"
                          data-oid=":0iyxll"
                        >
                          POSITIONING
                        </h3>
                        <h4
                          className="text-primary text-lg mb-4"
                          data-oid="pa91uea"
                        >
                          THE ART OF SELLING YOUR PROPERTY
                        </h4>
                        <p className="text-sm text-gray-600" data-oid=".foc72x">
                          TO ITS MAXIMUM POTENTIAL
                        </p>
                        <div className="mt-8" data-oid="v5r1ogd">
                          <p
                            className="text-primary font-bold"
                            data-oid="h0zzuv5"
                          >
                            MELVIN LIM
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-oid="2c-c_uk"
                          >
                            CO-FOUNDER & CEO PROPERTYLIMBROTHERS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4" data-oid="yt_wbu1">
                  Unlock Your Property's Maximum Potential
                </h2>
                <p className="mb-6" data-oid="1pgxl_t">
                  Delve into a comprehensive guide to optimising property value,
                  blending market insights, data analysis, and buyer psychology.
                </p>

                <div className="space-y-3 mt-8" data-oid="_rrvw6g">
                  <div className="flex items-center" data-oid="x2i.l_2">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="95_to:-"
                    >
                      01
                    </span>
                    <span data-oid="prycjgn">
                      The Most Common Reasons for Selling
                    </span>
                  </div>
                  <div className="flex items-center" data-oid=".ynid7b">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="0sa0deh"
                    >
                      02
                    </span>
                    <span data-oid="n4zsg-v">
                      12 Steps to Selling Your Home
                    </span>
                  </div>
                  <div className="flex items-center" data-oid="ag3foze">
                    <span
                      className="text-sm mr-3 opacity-70"
                      data-oid="a_u_kb0"
                    >
                      03
                    </span>
                    <span data-oid="oatccss">
                      Product Positioning: Transforming the home
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8" data-oid="iybn6h9">
              {!isSubmitted ? (
                <>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    data-oid="cujpa92"
                  >
                    Claim Your Free Preview Now
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="7-um.ud">
                    Grab our complimentary chapter packed with actionable
                    insights to start transforming your home-selling experience
                    today!
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-oid="7ud2b4c"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="nh9f5hb"
                    >
                      <div data-oid="g-1rz_2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="a-2fln2"
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
                          data-oid="eco273p"
                        />
                      </div>
                      <div data-oid="78ybnf5">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                          data-oid="mm1wmln"
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
                          data-oid="26135vc"
                        />
                      </div>
                    </div>

                    <div data-oid=":5uaipc">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="rt0n_29"
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
                        data-oid="e_i3c._"
                      />
                    </div>

                    <div data-oid="d1j_waq">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="7:9togr"
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
                        data-oid="r1l:jqz"
                      />
                    </div>

                    <div data-oid="h1lpnfg">
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="93mcpb6"
                      >
                        What Property Do You Currently Own?
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        data-oid="1xofd2a"
                      >
                        <option value="None" data-oid="c0m2:5u">
                          None
                        </option>
                        <option value="HDB" data-oid="-p39a-y">
                          HDB
                        </option>
                        <option value="Condo" data-oid="2b_2lpt">
                          Condominium
                        </option>
                        <option value="Landed" data-oid="p9wq9cv">
                          Landed Property
                        </option>
                        <option value="Multiple" data-oid="nrqcx7m">
                          Multiple Properties
                        </option>
                      </select>
                    </div>

                    <div className="flex items-start" data-oid="j:jv3bb">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formState.marketingConsent}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                        data-oid="u3i2jq6"
                      />

                      <label
                        htmlFor="marketingConsent"
                        className="ml-2 block text-sm text-gray-600"
                        data-oid=".lho-ge"
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
                      data-oid="lral51_"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : "Claim Your Access to This Exclusive Preview"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12" data-oid="mh7_cdw">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="es3uy-o"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="p1m.chx"
                    />
                  </svg>
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    data-oid="nopp.sb"
                  >
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-8" data-oid="y9cri_b">
                    Your free preview is on its way to your inbox. Please check
                    your email in the next few minutes.
                  </p>
                  <Link href="/plb-book" data-oid="eiljoc6">
                    <button
                      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                      data-oid="97vgu--"
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
