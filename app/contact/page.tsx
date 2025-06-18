"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import NetworkBackground from "@/components/network-background";
import { Button } from "@/components/ui/button";
import ContactAnimation from "./components/contact-animation";
import ContactMap from "./components/contact-map";
import { countries } from "./data/countries";
import Navbar from "@/components/navbar";

type FormData = {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  interests: string[];
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === "+65") || countries[0],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      countryCode: "+65",
    },
  });

  const interestOptions = [
    { id: "courses", label: "Courses" },
    { id: "careers", label: "Careers" },
    { id: "book", label: "PLB Book" },
    { id: "others", label: "Others" },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selectCountry = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setValue("countryCode", country.code);
    setIsCountryDropdownOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    // Include selected interests in the form data
    data.interests = selectedInterests;

    // Combine country code with phone number
    const fullPhoneNumber = `${data.countryCode}${data.phone}`;
    console.log("Full phone number:", fullPhoneNumber);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);

    setIsSubmitted(true);
    reset();
    setSelectedInterests([]);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar data-oid="79vrf55" />
      <main
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white"
        data-oid="_g08p_g"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 opacity-20" data-oid="izif57f">
          <NetworkBackground data-oid="8g8m1hh" />
        </div>

        {/* Hero Section */}
        <section
          className="relative pt-24 pb-12 md:pt-32 md:pb-16"
          data-oid="aea547y"
        >
          <div
            className="container px-4 mx-auto text-center"
            data-oid="cstfwf-"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              data-oid="i65jba_"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-oid="rhb_3vh"
            >
              Got a question? We're here 25/8.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-12 md:py-16" data-oid="e9m76o-">
          <div className="container px-4 mx-auto" data-oid="9xklkk1">
            <div
              className="flex flex-col lg:flex-row gap-12 items-center"
              data-oid="x1fj03l"
            >
              {/* Left Column - Animation and Contact Info */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                data-oid="-91-x0y"
              >
                <div
                  className="relative h-[400px] md:h-[500px] mb-8"
                  data-oid="rzluqp."
                >
                  <ContactAnimation data-oid="nw.o2m1" />
                </div>

                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                  data-oid="grhqr.9"
                >
                  <h3
                    className="text-2xl font-bold text-blue-900 mb-6"
                    data-oid="0_s46l9"
                  >
                    Contact Information
                  </h3>

                  <div className="space-y-4" data-oid="kl-vv7d">
                    <div className="flex items-start gap-4" data-oid="34q8mzv">
                      <div
                        className="bg-blue-100 p-3 rounded-full"
                        data-oid="j3digl4"
                      >
                        <MapPin
                          className="h-6 w-6 text-blue-600"
                          data-oid="x_5gogx"
                        />
                      </div>
                      <div data-oid="71a:_-m">
                        <h4
                          className="font-semibold text-gray-900"
                          data-oid="u2p57cq"
                        >
                          Our Location
                        </h4>
                        <p className="text-gray-600" data-oid="2g2ytag">
                          Oxley Bizhub 2, #11-15, 62 Ubi Road 1, Singapore
                          408734
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4" data-oid="p.mzr56">
                      <div
                        className="bg-blue-100 p-3 rounded-full"
                        data-oid="wu:egbc"
                      >
                        <Phone
                          className="h-6 w-6 text-blue-600"
                          data-oid="eqmi4.y"
                        />
                      </div>
                      <div data-oid="fv:5t.z">
                        <h4
                          className="font-semibold text-gray-900"
                          data-oid="9.:e0t8"
                        >
                          Phone Number
                        </h4>
                        <p className="text-gray-600" data-oid="shf3d9q">
                          +65 6232 6719
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4" data-oid="llar7_o">
                      <div
                        className="bg-blue-100 p-3 rounded-full"
                        data-oid="fdp-odp"
                      >
                        <Mail
                          className="h-6 w-6 text-blue-600"
                          data-oid="y53l5q5"
                        />
                      </div>
                      <div data-oid="yn7_k7y">
                        <h4
                          className="font-semibold text-gray-900"
                          data-oid="lqg_n:z"
                        >
                          Email Address
                        </h4>
                        <p className="text-gray-600" data-oid="rqb9uh6">
                          hello@assembly.sg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                data-oid="47_9oyi"
              >
                <div
                  className="bg-white backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl border border-gray-200"
                  data-oid="5vb.:8b"
                >
                  <h2
                    className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6"
                    data-oid="rnot:0g"
                  >
                    Ask us anything!
                  </h2>

                  <AnimatePresence data-oid="nhxow1w">
                    {isSubmitted ? (
                      <motion.div
                        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        data-oid="ux2o.bd"
                      >
                        <CheckCircle
                          className="h-16 w-16 text-green-500 mx-auto mb-4"
                          data-oid="l7ql1-7"
                        />

                        <h3
                          className="text-xl font-semibold text-green-800 mb-2"
                          data-oid="s-6cf3a"
                        >
                          Thank You!
                        </h3>
                        <p className="text-green-700" data-oid="jzfv_s9">
                          Your message has been sent successfully. We'll get
                          back to you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-oid="thix46x"
                      >
                        <div data-oid="9.nnznk">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="anwt3za"
                          >
                            Full Name{" "}
                            <span className="text-red-500" data-oid="i-ga._d">
                              *
                            </span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                            placeholder="Your name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                            data-oid="lwe-lws"
                          />

                          {errors.name && (
                            <p
                              className="mt-1 text-sm text-red-600"
                              data-oid="c5_3bff"
                            >
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div data-oid="yaurdz9">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="s-o_bkq"
                          >
                            Email Address{" "}
                            <span className="text-red-500" data-oid="9cprv8k">
                              *
                            </span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                            placeholder="Your email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            })}
                            data-oid="sm8znv3"
                          />

                          {errors.email && (
                            <p
                              className="mt-1 text-sm text-red-600"
                              data-oid="7to9_ef"
                            >
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div data-oid="3t5w-a:">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="f:911rh"
                          >
                            Phone Number{" "}
                            <span className="text-red-500" data-oid="lgdrndo">
                              *
                            </span>
                          </label>
                          <div className="relative" data-oid="fnauol2">
                            {/* Country code selector - redesigned to be more compact */}
                            <div className="flex" data-oid="q0wrsln">
                              <div
                                className="relative inline-block"
                                data-oid="nq5g6_y"
                              >
                                <button
                                  type="button"
                                  className="flex items-center gap-1 px-2 py-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                  onClick={() =>
                                    setIsCountryDropdownOpen(
                                      !isCountryDropdownOpen,
                                    )
                                  }
                                  data-oid="2yajp9l"
                                >
                                  <span
                                    className="text-base"
                                    data-oid="qz9woak"
                                  >
                                    {selectedCountry.flag}
                                  </span>
                                  <span
                                    className="text-sm whitespace-nowrap"
                                    data-oid="c-o1q75"
                                  >
                                    {selectedCountry.code}
                                  </span>
                                  <ChevronDown
                                    className="h-3 w-3 text-gray-500"
                                    data-oid=":6wpkbx"
                                  />
                                </button>

                                {/* Country dropdown - repositioned and restyled */}
                                {isCountryDropdownOpen && (
                                  <div
                                    className="absolute z-10 left-0 mt-1 w-60 max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200"
                                    style={{ maxWidth: "calc(100vw - 3rem)" }}
                                    data-oid="ca._3w0"
                                  >
                                    <div
                                      className="sticky top-0 bg-white p-2 border-b border-gray-200"
                                      data-oid="p.4db2-"
                                    >
                                      <input
                                        type="text"
                                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search countries..."
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => {
                                          // Filter countries logic would go here
                                        }}
                                        data-oid="z1rbz.."
                                      />
                                    </div>
                                    <div className="py-1" data-oid="jhuj8yh">
                                      {countries.map((country) => (
                                        <button
                                          key={country.code}
                                          type="button"
                                          className="w-full text-left px-3 py-1.5 hover:bg-blue-50 flex items-center gap-2 text-sm"
                                          onClick={() => selectCountry(country)}
                                          data-oid="05ucj_s"
                                        >
                                          <span
                                            className="text-base"
                                            data-oid="4u2eg2n"
                                          >
                                            {country.flag}
                                          </span>
                                          <span
                                            className="truncate"
                                            data-oid="91okunk"
                                          >
                                            {country.name}
                                          </span>
                                          <span
                                            className="text-gray-500 ml-auto text-xs"
                                            data-oid=":liyxaj"
                                          >
                                            {country.code}
                                          </span>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Phone number input */}
                              <input
                                id="phone"
                                type="tel"
                                className={`flex-1 px-4 py-3 rounded-r-lg border ${
                                  errors.phone
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                                placeholder="Your phone number"
                                {...register("phone", {
                                  required: "Phone number is required",
                                })}
                                data-oid="k9gb0gp"
                              />
                            </div>
                            {errors.phone && (
                              <p
                                className="mt-1 text-sm text-red-600"
                                data-oid="i4-h2y7"
                              >
                                {errors.phone.message}
                              </p>
                            )}

                            {/* Add click outside handler to close dropdown */}
                            {isCountryDropdownOpen && (
                              <div
                                className="fixed inset-0 z-0"
                                onClick={() => setIsCountryDropdownOpen(false)}
                                data-oid="14w5d-_"
                              ></div>
                            )}
                          </div>
                        </div>

                        <div data-oid="sbwreto">
                          <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            data-oid="r95.z2:"
                          >
                            What can we help you with?{" "}
                            <span className="text-red-500" data-oid="j_en0ct">
                              *
                            </span>
                          </label>
                          <div
                            className="grid grid-cols-2 gap-3"
                            data-oid="q8nsbiq"
                          >
                            {interestOptions.map((option) => (
                              <motion.div
                                key={option.id}
                                className={`cursor-pointer rounded-lg border p-3 transition-all ${
                                  selectedInterests.includes(option.id)
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-200 hover:border-blue-300 bg-gray-50"
                                }`}
                                onClick={() => toggleInterest(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                data-oid="v.ap0_y"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid="p7jnaim"
                                >
                                  <div
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                      selectedInterests.includes(option.id)
                                        ? "border-blue-500 bg-blue-500"
                                        : "border-gray-300"
                                    }`}
                                    data-oid="-xgdeuk"
                                  >
                                    {selectedInterests.includes(option.id) && (
                                      <motion.div
                                        className="w-2 h-2 bg-white rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        data-oid="64kf936"
                                      />
                                    )}
                                  </div>
                                  <span
                                    className="ml-2 text-sm"
                                    data-oid="h1xtajx"
                                  >
                                    {option.label}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          {selectedInterests.length === 0 && (
                            <p
                              className="mt-1 text-sm text-red-600"
                              data-oid="cfvudb8"
                            >
                              Please select at least one option
                            </p>
                          )}
                        </div>

                        <div data-oid="qzo.h-z">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="0kpt3ai"
                          >
                            Message{" "}
                            <span className="text-red-500" data-oid="j638cgw">
                              *
                            </span>
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                            placeholder="Tell us how we can help you..."
                            {...register("message", {
                              required: "Message is required",
                            })}
                            data-oid="j09bo76"
                          />

                          {errors.message && (
                            <p
                              className="mt-1 text-sm text-red-600"
                              data-oid="z9yekf1"
                            >
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        <div
                          className="text-xs text-gray-500"
                          data-oid="4jgkf9s"
                        >
                          By submitting this form, you agree to receive future
                          marketing materials from Assembly SG. Your personal
                          information will be used in accordance with our
                          privacy policy.
                        </div>

                        <Button
                          type="submit"
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium rounded-lg flex items-center justify-center"
                          disabled={
                            isSubmitting || selectedInterests.length === 0
                          }
                          data-oid="857r0ef"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="lv2ow47"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="o59a:-:"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid=".rq8p.e"
                                ></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit{" "}
                              <Send
                                className="ml-2 h-5 w-5"
                                data-oid="_jjf3yz"
                              />
                            </>
                          )}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative py-12 md:py-16" data-oid="ndals9n">
          <div className="container px-4 mx-auto" data-oid="2sefg8f">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-oid="wt1bfht"
            >
              <ContactMap data-oid="3rm:ezz" />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
