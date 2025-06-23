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
  Clock,
  MessageCircle,
  Users,
  Star,
  ArrowRight,
  Sparkles,
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
    {
      id: "courses",
      label: "Courses",
      icon: "📚",
      description: "Property investment courses",
    },
    {
      id: "careers",
      label: "Careers",
      icon: "💼",
      description: "Join our team",
    },
    {
      id: "book",
      label: "PLB Book",
      icon: "📖",
      description: "Property investment guide",
    },
    {
      id: "others",
      label: "Others",
      icon: "💬",
      description: "General inquiries",
    },
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
      <Navbar data-oid="w03ihjl" />
      <main
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        data-oid="sxj4622"
      >
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0" data-oid="cc80dnj">
          <NetworkBackground data-oid="thsv9_8" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
            data-oid="t74wtb_"
          />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            data-oid="baqds5d"
          />

          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            data-oid="f6yzi8:"
          />
        </div>

        {/* Hero Section - Enhanced */}
        <section
          className="relative pt-24 pb-16 md:pt-32 md:pb-20"
          data-oid="_ekkul_"
        >
          <div
            className="container px-4 mx-auto text-center"
            data-oid="-i3_l__"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              data-oid="-w10ji5"
            >
              <Sparkles className="h-4 w-4 text-blue-600" data-oid="g7u7hq5" />
              <span
                className="text-sm font-medium text-gray-700"
                data-oid="d36ulyv"
              >
                We're here to help
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-oid="f2fg4p1"
            >
              Let's Connect
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-oid="qyijau2"
            >
              Ready to start your property investment journey? We're here to
              guide you every step of the way.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              data-oid="u77305l"
            >
              <div
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2"
                data-oid="_xusmxe"
              >
                <Clock className="h-5 w-5 text-blue-600" data-oid="7pwbm7w" />
                <span
                  className="text-sm font-medium text-gray-700"
                  data-oid="3r3-cvb"
                >
                  24h Response
                </span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2"
                data-oid="f4kglhn"
              >
                <Users className="h-5 w-5 text-blue-600" data-oid="k_-ovs3" />
                <span
                  className="text-sm font-medium text-gray-700"
                  data-oid="3wyegqq"
                >
                  Expert Team
                </span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2"
                data-oid="xfl7o9w"
              >
                <Star className="h-5 w-5 text-blue-600" data-oid="45oq94:" />
                <span
                  className="text-sm font-medium text-gray-700"
                  data-oid="4t:h-o8"
                >
                  5-Star Service
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content - Redesigned */}
        <section className="relative py-16 md:py-20" data-oid="z7m7q-.">
          <div className="container px-4 mx-auto" data-oid="sx5mlob">
            <div
              className="grid lg:grid-cols-2 gap-16 items-start"
              data-oid="q2w.2_r"
            >
              {/* Left Column - Contact Info & Animation */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                data-oid="nld:uks"
              >
                {/* Contact Animation */}
                <div
                  className="relative h-[400px] md:h-[450px] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
                  data-oid="44dr46a"
                >
                  <ContactAnimation data-oid="x2rhe_z" />
                </div>

                {/* Contact Information Cards */}
                <div className="grid gap-4" data-oid="gqp8rk1">
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -2 }}
                    data-oid="j.hevd4"
                  >
                    <div className="flex items-start gap-4" data-oid="g1zdk8p">
                      <div
                        className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg"
                        data-oid="puhka2o"
                      >
                        <MapPin
                          className="h-6 w-6 text-white"
                          data-oid="xyq87dt"
                        />
                      </div>
                      <div data-oid="pdcj2od">
                        <h4
                          className="font-bold text-gray-900 mb-1"
                          data-oid="5p77kfz"
                        >
                          Visit Our Office
                        </h4>
                        <p
                          className="text-gray-600 text-sm leading-relaxed"
                          data-oid="d3cn-i0"
                        >
                          Oxley Bizhub 2, #11-15
                          <br data-oid="tlklal1" />
                          62 Ubi Road 1, Singapore 408734
                        </p>
                        <button
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 group"
                          data-oid="3fqm_62"
                        >
                          Get Directions
                          <ArrowRight
                            className="h-3 w-3 group-hover:translate-x-1 transition-transform"
                            data-oid="9k.2d93"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-4" data-oid="h.:vwx.">
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -2 }}
                      data-oid="9ph38vy"
                    >
                      <div
                        className="flex items-start gap-4"
                        data-oid="_w4gnml"
                      >
                        <div
                          className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg"
                          data-oid="-9qkf_j"
                        >
                          <Phone
                            className="h-6 w-6 text-white"
                            data-oid="bp30_.m"
                          />
                        </div>
                        <div data-oid="2jr0fhf">
                          <h4
                            className="font-bold text-gray-900 mb-1"
                            data-oid="wspzhss"
                          >
                            Call Us
                          </h4>
                          <p
                            className="text-gray-600 text-sm"
                            data-oid="3xeer74"
                          >
                            +65 6232 6719
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -2 }}
                      data-oid="wlz78ki"
                    >
                      <div
                        className="flex items-start gap-4"
                        data-oid="2hg:6-0"
                      >
                        <div
                          className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg"
                          data-oid="7k.5:92"
                        >
                          <Mail
                            className="h-6 w-6 text-white"
                            data-oid="jdigk2-"
                          />
                        </div>
                        <div data-oid="cxmw595">
                          <h4
                            className="font-bold text-gray-900 mb-1"
                            data-oid="r-xos4q"
                          >
                            Email Us
                          </h4>
                          <p
                            className="text-gray-600 text-sm"
                            data-oid=".n:5exj"
                          >
                            hello@assembly.sg
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Enhanced Contact Form */}
              <motion.div
                className="lg:sticky lg:top-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                data-oid="tatsiio"
              >
                <div
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
                  data-oid="04hkg25"
                >
                  <div className="text-center mb-8" data-oid="wjmnqce">
                    <h2
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-3"
                      data-oid="3gr4__y"
                    >
                      Start Your Journey
                    </h2>
                    <p className="text-gray-600" data-oid="r1jlabw">
                      Tell us how we can help you achieve your property
                      investment goals
                    </p>
                  </div>

                  <AnimatePresence data-oid="gf4dohu">
                    {isSubmitted ? (
                      <motion.div
                        className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        data-oid="mforrd8"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          data-oid="atpsag0"
                        >
                          <CheckCircle
                            className="h-20 w-20 text-green-500 mx-auto mb-4"
                            data-oid="emv2f.:"
                          />
                        </motion.div>
                        <h3
                          className="text-2xl font-bold text-green-800 mb-3"
                          data-oid=":q8ll4z"
                        >
                          Message Sent Successfully!
                        </h3>
                        <p className="text-green-700 mb-4" data-oid="fwc37s.">
                          Thank you for reaching out. Our team will get back to
                          you within 24 hours.
                        </p>
                        <div
                          className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2"
                          data-oid="h1ly8.r"
                        >
                          <Clock
                            className="h-4 w-4 text-green-600"
                            data-oid="2spavhl"
                          />
                          <span
                            className="text-sm font-medium text-green-700"
                            data-oid="6o7sa0b"
                          >
                            Expected response: Within 24 hours
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-oid="henlm69"
                      >
                        {/* Name Field */}
                        <div data-oid="vow43.e">
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="rr60645"
                          >
                            Full Name{" "}
                            <span className="text-red-500" data-oid="w8d13qc">
                              *
                            </span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                              errors.name
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 bg-gray-50"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                            placeholder="Enter your full name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                            data-oid="pekqr5a"
                          />

                          {errors.name && (
                            <motion.p
                              className="mt-2 text-sm text-red-600 flex items-center gap-1"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              data-oid="5--he0g"
                            >
                              {errors.name.message}
                            </motion.p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div data-oid="oz_mkpx">
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="941kxln"
                          >
                            Email Address{" "}
                            <span className="text-red-500" data-oid="m5tgug3">
                              *
                            </span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                              errors.email
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 bg-gray-50"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                            placeholder="Enter your email address"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                              },
                            })}
                            data-oid="2_xlmb3"
                          />

                          {errors.email && (
                            <motion.p
                              className="mt-2 text-sm text-red-600"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              data-oid="e.fz5y5"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </div>

                        {/* Phone Field */}
                        <div data-oid="9a9nbcu">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="ldgx7sa"
                          >
                            Phone Number{" "}
                            <span className="text-red-500" data-oid=":px3e16">
                              *
                            </span>
                          </label>
                          <div className="relative" data-oid="6tb5-2a">
                            <div className="flex" data-oid="6i1uhg3">
                              <div className="relative" data-oid="-ttdnt:">
                                <button
                                  type="button"
                                  className="flex items-center gap-2 px-3 py-3 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                  onClick={() =>
                                    setIsCountryDropdownOpen(
                                      !isCountryDropdownOpen,
                                    )
                                  }
                                  data-oid="46q_8z:"
                                >
                                  <span className="text-lg" data-oid="81y6ywy">
                                    {selectedCountry.flag}
                                  </span>
                                  <span
                                    className="text-sm font-medium"
                                    data-oid="8wvx99."
                                  >
                                    {selectedCountry.code}
                                  </span>
                                  <ChevronDown
                                    className="h-4 w-4 text-gray-500"
                                    data-oid="on_if4."
                                  />
                                </button>

                                {isCountryDropdownOpen && (
                                  <div
                                    className="absolute z-20 left-0 mt-2 w-72 max-h-60 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-200"
                                    data-oid="2i:e.7:"
                                  >
                                    <div
                                      className="sticky top-0 bg-white p-3 border-b border-gray-200"
                                      data-oid="kcu7pga"
                                    >
                                      <input
                                        type="text"
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search countries..."
                                        onClick={(e) => e.stopPropagation()}
                                        data-oid="m8jkms6"
                                      />
                                    </div>
                                    <div className="py-2" data-oid="d5817n0">
                                      {countries.map((country) => (
                                        <button
                                          key={country.code}
                                          type="button"
                                          className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 text-sm transition-colors"
                                          onClick={() => selectCountry(country)}
                                          data-oid="2ddra_4"
                                        >
                                          <span
                                            className="text-lg"
                                            data-oid="4v-dihc"
                                          >
                                            {country.flag}
                                          </span>
                                          <span
                                            className="flex-1 truncate"
                                            data-oid="fgno3xn"
                                          >
                                            {country.name}
                                          </span>
                                          <span
                                            className="text-gray-500 text-xs"
                                            data-oid="96aoljk"
                                          >
                                            {country.code}
                                          </span>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              <input
                                id="phone"
                                type="tel"
                                className={`flex-1 px-4 py-3 rounded-r-xl border-2 ${
                                  errors.phone
                                    ? "border-red-300 bg-red-50"
                                    : "border-gray-200 bg-gray-50"
                                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                                placeholder="Enter your phone number"
                                {...register("phone", {
                                  required: "Phone number is required",
                                })}
                                data-oid="2uud_6w"
                              />
                            </div>
                            {errors.phone && (
                              <motion.p
                                className="mt-2 text-sm text-red-600"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                data-oid="3eq5ct0"
                              >
                                {errors.phone.message}
                              </motion.p>
                            )}

                            {isCountryDropdownOpen && (
                              <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsCountryDropdownOpen(false)}
                                data-oid="96a7dp4"
                              />
                            )}
                          </div>
                        </div>

                        {/* Interest Selection */}
                        <div data-oid="ro:qwzo">
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-3"
                            data-oid="hn9j-b2"
                          >
                            How can we help you?{" "}
                            <span className="text-red-500" data-oid="o7xs_ug">
                              *
                            </span>
                          </label>
                          <div
                            className="grid grid-cols-2 gap-3"
                            data-oid="ut4acn3"
                          >
                            {interestOptions.map((option) => (
                              <motion.div
                                key={option.id}
                                className={`cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                                  selectedInterests.includes(option.id)
                                    ? "border-blue-500 bg-blue-50 shadow-md"
                                    : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-25"
                                }`}
                                onClick={() => toggleInterest(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                data-oid="8hmra4f"
                              >
                                <div
                                  className="flex items-center gap-3"
                                  data-oid="r0ylx4h"
                                >
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                      selectedInterests.includes(option.id)
                                        ? "border-blue-500 bg-blue-500"
                                        : "border-gray-300"
                                    }`}
                                    data-oid="k.069nu"
                                  >
                                    {selectedInterests.includes(option.id) && (
                                      <motion.div
                                        className="w-3 h-3 bg-white rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        data-oid="n2hs_du"
                                      />
                                    )}
                                  </div>
                                  <div data-oid="89vo.v1">
                                    <div
                                      className="flex items-center gap-2"
                                      data-oid=".pr8x8r"
                                    >
                                      <span
                                        className="text-lg"
                                        data-oid="1f4.cl4"
                                      >
                                        {option.icon}
                                      </span>
                                      <span
                                        className="font-medium text-gray-900"
                                        data-oid="2nj3pbk"
                                      >
                                        {option.label}
                                      </span>
                                    </div>
                                    <p
                                      className="text-xs text-gray-500 mt-1"
                                      data-oid="n3.9uq-"
                                    >
                                      {option.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          {selectedInterests.length === 0 && (
                            <p
                              className="mt-2 text-sm text-red-600"
                              data-oid="7pd1k7d"
                            >
                              Please select at least one option
                            </p>
                          )}
                        </div>

                        {/* Message Field */}
                        <div data-oid="a-dw9-l">
                          <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="n7yr12w"
                          >
                            Your Message{" "}
                            <span className="text-red-500" data-oid="x4pxtnh">
                              *
                            </span>
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                              errors.message
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 bg-gray-50"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                            placeholder="Tell us about your property investment goals and how we can help you..."
                            {...register("message", {
                              required: "Message is required",
                            })}
                            data-oid="r1gqpr6"
                          />

                          {errors.message && (
                            <motion.p
                              className="mt-2 text-sm text-red-600"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              data-oid="r8oc7a:"
                            >
                              {errors.message.message}
                            </motion.p>
                          )}
                        </div>

                        {/* Privacy Notice */}
                        <div
                          className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                          data-oid="-godpxq"
                        >
                          <p
                            className="text-xs text-gray-600 leading-relaxed"
                            data-oid="d48n0ag"
                          >
                            🔒{" "}
                            <strong data-oid="n9k_cjy">
                              Privacy Protected:
                            </strong>{" "}
                            By submitting this form, you agree to receive
                            communications from Assembly SG. Your information is
                            secure and will be used in accordance with our
                            privacy policy.
                          </p>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                          disabled={
                            isSubmitting || selectedInterests.length === 0
                          }
                          data-oid="ors_gb6"
                        >
                          {isSubmitting ? (
                            <div
                              className="flex items-center justify-center gap-3"
                              data-oid="to.ls.4"
                            >
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="co8cdhy"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="6hd2bw4"
                                />

                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="qj843nc"
                                />
                              </svg>
                              <span data-oid="o7w2fmv">Sending Message...</span>
                            </div>
                          ) : (
                            <div
                              className="flex items-center justify-center gap-2"
                              data-oid="7afhnwm"
                            >
                              <MessageCircle
                                className="h-5 w-5"
                                data-oid="trjwwdu"
                              />
                              <span data-oid=":n4w932">Send Message</span>
                              <ArrowRight
                                className="h-5 w-5"
                                data-oid="dzc9vqq"
                              />
                            </div>
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

        {/* Enhanced Map Section */}
        <section className="relative py-16 md:py-20" data-oid="k9d6mdc">
          <div className="container px-4 mx-auto" data-oid="pnx2fjt">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              data-oid="4dcsn7z"
            >
              <h2
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-4"
                data-oid="2lqwvki"
              >
                Visit Our Office
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" data-oid=".c2u7zv">
                Located in the heart of Singapore's business district, our
                office is easily accessible and equipped with modern facilities
                for consultations.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="d0iem5a"
            >
              <ContactMap data-oid="oy8lvjj" />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
