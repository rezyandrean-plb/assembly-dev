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
  Clock,
  MessageSquare,
  Users,
  Star,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { countries } from "./data/countries";
import Navbar from "@/components/navbar";

type FormData = {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  interests: string[];
  urgency: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedUrgency, setSelectedUrgency] = useState("");
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
  } = useForm<FormData>({
    defaultValues: {
      countryCode: "+65",
    },
  });

  const interestOptions = [
    { id: "courses", label: "Property Courses", icon: "📚" },
    { id: "consultation", label: "1-on-1 Consultation", icon: "💬" },
    { id: "book", label: "PLB Book", icon: "📖" },
    { id: "partnership", label: "Partnership", icon: "🤝" },
    { id: "careers", label: "Careers", icon: "💼" },
    { id: "others", label: "Others", icon: "❓" },
  ];

  const urgencyOptions = [
    {
      id: "low",
      label: "No rush",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      id: "medium",
      label: "Within a week",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      id: "high",
      label: "ASAP",
      color: "bg-red-100 text-red-800 border-red-200",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri 9AM-6PM",
      value: "+65 6232 6719",
      action: "tel:+6562326719",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We reply within 24h",
      value: "hello@assembly.sg",
      action: "mailto:hello@assembly.sg",
      color: "bg-purple-500",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available now",
      value: "Start conversation",
      action: "#",
      color: "bg-green-500",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Taught", icon: Users },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "24h", label: "Response Time", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Zap },
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
    data.interests = selectedInterests;
    data.urgency = selectedUrgency;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);

    setIsSubmitted(true);
    reset();
    setSelectedInterests([]);
    setSelectedUrgency("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar data-oid="pgyh9m0" />
      <main
        className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        data-oid="9brcir7"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden" data-oid="dg2a4cq">
          <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            data-oid="s.jtaam"
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"
            data-oid="t8_fozm"
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"
            data-oid="r6hir89"
          ></div>
        </div>

        {/* Hero Section */}
        <section
          className="relative pt-24 pb-16 md:pt-32 md:pb-20"
          data-oid="utxuyzz"
        >
          <div className="container px-4 mx-auto" data-oid="ynpx:2d">
            <div className="text-center max-w-4xl mx-auto" data-oid="qo_2cp6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
                data-oid="poev912"
              >
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
                  data-oid="_5t7o2z"
                >
                  <Zap className="w-4 h-4 mr-2" data-oid="nvvr7.7" />
                  We're here to help 24/7
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-oid="5x__k28"
              >
                Let's Connect
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                data-oid="k97:0bx"
              >
                Ready to transform your property investment journey?
                <br className="hidden md:block" data-oid="z.c4wob" />
                We're excited to hear from you.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                data-oid="awv91u_"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center" data-oid="j.0l-fg">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3"
                      data-oid="90.ut2f"
                    >
                      <stat.icon
                        className="w-6 h-6 text-blue-600"
                        data-oid="z6mbaif"
                      />
                    </div>
                    <div
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-1"
                      data-oid="umjmzmm"
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="-9ozhyr">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="relative py-12" data-oid="fe_3ill">
          <div className="container px-4 mx-auto" data-oid="v73.mir">
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-oid="ggu7qbb"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="d_rs5s0"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 ${method.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    data-oid="-4jv931"
                  >
                    <method.icon
                      className="w-6 h-6 text-white"
                      data-oid="zf39yzs"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2"
                    data-oid="2iz5307"
                  >
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3" data-oid="rijol14">
                    {method.description}
                  </p>
                  <p
                    className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                    data-oid="fav.y7b"
                  >
                    {method.value}
                  </p>
                  <ArrowRight
                    className="w-4 h-4 text-blue-600 mt-2 group-hover:translate-x-1 transition-transform duration-300"
                    data-oid="5ejox16"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="relative py-16" data-oid="0sweu-8">
          <div className="container px-4 mx-auto" data-oid="ut3rexp">
            <div className="max-w-4xl mx-auto" data-oid="ef_qklh">
              <motion.div
                className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                data-oid="ckkh3.3"
              >
                <div className="p-8 md:p-12" data-oid="e:w-zjd">
                  <div className="text-center mb-8" data-oid="71ypvqy">
                    <h2
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                      data-oid="rvlhoxr"
                    >
                      Send us a message
                    </h2>
                    <p className="text-gray-600 text-lg" data-oid="1qaaa:5">
                      Tell us about your property goals and we'll get back to
                      you within 24 hours
                    </p>
                  </div>

                  <AnimatePresence data-oid="6orkq34">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        data-oid="q2oei9s"
                      >
                        <div
                          className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                          data-oid="bf-vvtx"
                        >
                          <CheckCircle
                            className="w-10 h-10 text-green-600"
                            data-oid="gqzlwst"
                          />
                        </div>
                        <h3
                          className="text-2xl font-bold text-gray-900 mb-4"
                          data-oid="z66wbf6"
                        >
                          Message Sent Successfully!
                        </h3>
                        <p
                          className="text-gray-600 text-lg mb-6"
                          data-oid="ukiom3g"
                        >
                          Thank you for reaching out. Our team will get back to
                          you within 24 hours.
                        </p>
                        <div
                          className="inline-flex items-center text-blue-600 font-medium"
                          data-oid="we7-:r9"
                        >
                          <Shield className="w-4 h-4 mr-2" data-oid="sk2xrur" />
                          Your information is secure with us
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-8"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-oid="17apml2"
                      >
                        {/* Personal Information */}
                        <div
                          className="grid md:grid-cols-2 gap-6"
                          data-oid="7snrmmg"
                        >
                          <div data-oid="c1:gf97">
                            <label
                              className="block text-sm font-semibold text-gray-700 mb-2"
                              data-oid=":6r7_1m"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              className={`w-full px-4 py-4 rounded-xl border-2 ${errors.name ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:outline-none transition-colors bg-gray-50/50`}
                              placeholder="Enter your full name"
                              {...register("name", {
                                required: "Name is required",
                              })}
                              data-oid="5z.-49e"
                            />

                            {errors.name && (
                              <p
                                className="mt-2 text-sm text-red-600"
                                data-oid="el6gi9u"
                              >
                                {errors.name.message}
                              </p>
                            )}
                          </div>

                          <div data-oid="jf2ldyi">
                            <label
                              className="block text-sm font-semibold text-gray-700 mb-2"
                              data-oid="mh6sso."
                            >
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className={`w-full px-4 py-4 rounded-xl border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:outline-none transition-colors bg-gray-50/50`}
                              placeholder="Enter your email"
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address",
                                },
                              })}
                              data-oid="eg0yicn"
                            />

                            {errors.email && (
                              <p
                                className="mt-2 text-sm text-red-600"
                                data-oid="-xtxpm8"
                              >
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div data-oid="g2.fxt0">
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="fkm859l"
                          >
                            Phone Number *
                          </label>
                          <div className="flex" data-oid="0mc5ypy">
                            <div className="relative" data-oid="d:tic-c">
                              <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-4 rounded-l-xl border-2 border-r-0 border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50/50"
                                onClick={() =>
                                  setIsCountryDropdownOpen(
                                    !isCountryDropdownOpen,
                                  )
                                }
                                data-oid="yhhtiit"
                              >
                                <span className="text-lg" data-oid="bh2d.aq">
                                  {selectedCountry.flag}
                                </span>
                                <span
                                  className="text-sm font-medium"
                                  data-oid=":e7xjbz"
                                >
                                  {selectedCountry.code}
                                </span>
                                <ChevronDown
                                  className="w-4 h-4 text-gray-500"
                                  data-oid="87wnzoo"
                                />
                              </button>

                              {isCountryDropdownOpen && (
                                <div
                                  className="absolute z-20 top-full left-0 mt-1 w-72 max-h-60 overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-200"
                                  data-oid="j4olqvk"
                                >
                                  <div
                                    className="p-3 border-b border-gray-200"
                                    data-oid="6zyyoal"
                                  >
                                    <input
                                      type="text"
                                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Search countries..."
                                      onClick={(e) => e.stopPropagation()}
                                      data-oid="2moplgl"
                                    />
                                  </div>
                                  <div className="py-2" data-oid="09w.-.c">
                                    {countries.map((country) => (
                                      <button
                                        key={country.code}
                                        type="button"
                                        className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 text-sm"
                                        onClick={() => selectCountry(country)}
                                        data-oid="hzv8t0b"
                                      >
                                        <span
                                          className="text-lg"
                                          data-oid="n67kmbp"
                                        >
                                          {country.flag}
                                        </span>
                                        <span
                                          className="flex-1 truncate"
                                          data-oid="5buut_m"
                                        >
                                          {country.name}
                                        </span>
                                        <span
                                          className="text-gray-500 text-xs"
                                          data-oid="j96xvwp"
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
                              type="tel"
                              className={`flex-1 px-4 py-4 rounded-r-xl border-2 ${errors.phone ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:outline-none transition-colors bg-gray-50/50`}
                              placeholder="Your phone number"
                              {...register("phone", {
                                required: "Phone number is required",
                              })}
                              data-oid="q9h1lhz"
                            />
                          </div>
                          {errors.phone && (
                            <p
                              className="mt-2 text-sm text-red-600"
                              data-oid="c:vqqd_"
                            >
                              {errors.phone.message}
                            </p>
                          )}

                          {isCountryDropdownOpen && (
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setIsCountryDropdownOpen(false)}
                              data-oid="hwfjii_"
                            ></div>
                          )}
                        </div>

                        {/* Interests */}
                        <div data-oid="_t.h3xg">
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-4"
                            data-oid=".:_tn-n"
                          >
                            What can we help you with? *
                          </label>
                          <div
                            className="grid grid-cols-2 md:grid-cols-3 gap-3"
                            data-oid="2gsjh0b"
                          >
                            {interestOptions.map((option) => (
                              <motion.div
                                key={option.id}
                                className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                                  selectedInterests.includes(option.id)
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-200 hover:border-blue-300 bg-gray-50/50"
                                }`}
                                onClick={() => toggleInterest(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                data-oid="863sicl"
                              >
                                <div className="text-center" data-oid="buf4vzm">
                                  <div
                                    className="text-2xl mb-2"
                                    data-oid="v-wfqqp"
                                  >
                                    {option.icon}
                                  </div>
                                  <div
                                    className="text-sm font-medium text-gray-900"
                                    data-oid="::ktaol"
                                  >
                                    {option.label}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          {selectedInterests.length === 0 && (
                            <p
                              className="mt-2 text-sm text-red-600"
                              data-oid="jstx41:"
                            >
                              Please select at least one option
                            </p>
                          )}
                        </div>

                        {/* Urgency */}
                        <div data-oid="_8bm9st">
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-4"
                            data-oid="._rdlll"
                          >
                            How urgent is this? *
                          </label>
                          <div
                            className="grid grid-cols-3 gap-3"
                            data-oid="2qtixtk"
                          >
                            {urgencyOptions.map((option) => (
                              <motion.div
                                key={option.id}
                                className={`cursor-pointer rounded-xl border-2 p-4 text-center transition-all ${
                                  selectedUrgency === option.id
                                    ? `border-blue-500 ${option.color}`
                                    : "border-gray-200 hover:border-blue-300 bg-gray-50/50"
                                }`}
                                onClick={() => setSelectedUrgency(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                data-oid="o:3_cyh"
                              >
                                <div
                                  className="text-sm font-medium"
                                  data-oid="ax-hlj8"
                                >
                                  {option.label}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div data-oid="-mq2gsl">
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="ridpqw:"
                          >
                            Your Message *
                          </label>
                          <textarea
                            rows={5}
                            className={`w-full px-4 py-4 rounded-xl border-2 ${errors.message ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:outline-none transition-colors bg-gray-50/50 resize-none`}
                            placeholder="Tell us about your property investment goals, questions, or how we can help you..."
                            {...register("message", {
                              required: "Message is required",
                            })}
                            data-oid="n-.3q:3"
                          />

                          {errors.message && (
                            <p
                              className="mt-2 text-sm text-red-600"
                              data-oid="dbwk_su"
                            >
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        {/* Privacy Notice */}
                        <div
                          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                          data-oid="b74_xna"
                        >
                          <div
                            className="flex items-start gap-3"
                            data-oid="z9l:hbw"
                          >
                            <Shield
                              className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                              data-oid="a3zfi91"
                            />
                            <div
                              className="text-sm text-blue-800"
                              data-oid="-:hss89"
                            >
                              <strong data-oid="umpkxax">
                                Your privacy matters.
                              </strong>{" "}
                              We'll only use your information to respond to your
                              inquiry and provide relevant property investment
                              insights. You can unsubscribe at any time.
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          disabled={
                            isSubmitting ||
                            selectedInterests.length === 0 ||
                            !selectedUrgency
                          }
                          data-oid="34y:x7t"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="w9nt.t_"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="tp__la2"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="-2jc.lw"
                                ></path>
                              </svg>
                              Sending your message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send
                                className="ml-2 h-5 w-5"
                                data-oid="_u68mge"
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

        {/* Location Section */}
        <section className="relative py-16" data-oid="-84azbe">
          <div className="container px-4 mx-auto" data-oid="8n6:ec2">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              data-oid="w60jtd-"
            >
              <div className="text-center mb-12" data-oid="9l556kh">
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  data-oid="_emth48"
                >
                  Visit Our Office
                </h2>
                <p className="text-gray-600 text-lg" data-oid="e1flfa_">
                  Located in the heart of Singapore's business district
                </p>
              </div>

              <div
                className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                data-oid="lj9mvjl"
              >
                <div className="grid md:grid-cols-2" data-oid="5t.pnbd">
                  {/* Map Placeholder */}
                  <div
                    className="h-80 md:h-96 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden"
                    data-oid="xkci36a"
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      data-oid="2br-93h"
                    >
                      <div className="text-center" data-oid="fc7vne8">
                        <MapPin
                          className="w-16 h-16 text-blue-600 mx-auto mb-4"
                          data-oid="rpobs:0"
                        />
                        <h3
                          className="text-xl font-bold text-gray-900 mb-2"
                          data-oid="34rfuz-"
                        >
                          Assembly SG
                        </h3>
                        <p className="text-gray-600" data-oid="uvat6u_">
                          Interactive map coming soon
                        </p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div
                      className="absolute top-4 left-4 w-20 h-20 bg-blue-200 rounded-full opacity-30"
                      data-oid="7xy_0yw"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 w-32 h-32 bg-purple-200 rounded-full opacity-20"
                      data-oid="-oiux8n"
                    ></div>
                  </div>

                  {/* Contact Information */}
                  <div className="p-8 md:p-12" data-oid="hy_.94n">
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-6"
                      data-oid="rm0jyjd"
                    >
                      Get in Touch
                    </h3>

                    <div className="space-y-6" data-oid="jwmaj4i">
                      <div
                        className="flex items-start gap-4"
                        data-oid="cipu82u"
                      >
                        <div
                          className="bg-blue-100 p-3 rounded-xl"
                          data-oid="f_3dsg:"
                        >
                          <MapPin
                            className="w-6 h-6 text-blue-600"
                            data-oid="c-dvdh6"
                          />
                        </div>
                        <div data-oid="1gbwtkz">
                          <h4
                            className="font-semibold text-gray-900 mb-1"
                            data-oid="1cjda_7"
                          >
                            Address
                          </h4>
                          <p className="text-gray-600" data-oid="xk6xnyk">
                            Oxley Bizhub 2, #11-15
                            <br data-oid="cyoq401" />
                            62 Ubi Road 1<br data-oid="c0r06au" />
                            Singapore 408734
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-start gap-4"
                        data-oid="xvn-xpu"
                      >
                        <div
                          className="bg-purple-100 p-3 rounded-xl"
                          data-oid="4:9bj9_"
                        >
                          <Phone
                            className="w-6 h-6 text-purple-600"
                            data-oid="2pqjsvz"
                          />
                        </div>
                        <div data-oid="wy9jws9">
                          <h4
                            className="font-semibold text-gray-900 mb-1"
                            data-oid="ux9h4o2"
                          >
                            Phone
                          </h4>
                          <p className="text-gray-600" data-oid=".i05hrc">
                            +65 6232 6719
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-start gap-4"
                        data-oid="b9f4cyi"
                      >
                        <div
                          className="bg-green-100 p-3 rounded-xl"
                          data-oid="ymq3jrx"
                        >
                          <Mail
                            className="w-6 h-6 text-green-600"
                            data-oid="hu:x.sp"
                          />
                        </div>
                        <div data-oid="6fk29lb">
                          <h4
                            className="font-semibold text-gray-900 mb-1"
                            data-oid="xgykwvq"
                          >
                            Email
                          </h4>
                          <p className="text-gray-600" data-oid="e0gc1l_">
                            hello@assembly.sg
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-start gap-4"
                        data-oid="at:nk9w"
                      >
                        <div
                          className="bg-orange-100 p-3 rounded-xl"
                          data-oid="0ga-q8-"
                        >
                          <Clock
                            className="w-6 h-6 text-orange-600"
                            data-oid="18jq_:m"
                          />
                        </div>
                        <div data-oid="wqone9_">
                          <h4
                            className="font-semibold text-gray-900 mb-1"
                            data-oid="95m3nlx"
                          >
                            Office Hours
                          </h4>
                          <p className="text-gray-600" data-oid="0effhi.">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br data-oid="j_yhbiz" />
                            Saturday: 10:00 AM - 4:00 PM
                            <br data-oid="cbuh096" />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-8 pt-6 border-t border-gray-200"
                      data-oid="fs5.rsm"
                    >
                      <a
                        href="https://maps.google.com/?q=Oxley+Bizhub+2+62+Ubi+Road+1+Singapore+408734"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        data-oid="42e8m5q"
                      >
                        <Globe className="w-4 h-4 mr-2" data-oid="0e0o11k" />
                        Get Directions
                        <ArrowRight
                          className="w-4 h-4 ml-1"
                          data-oid="ycqdk_m"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
