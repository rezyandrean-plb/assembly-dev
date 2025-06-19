"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  BookOpen,
  Rocket,
  Heart,
  Star,
  ArrowRight,
  Building,
  Palette,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

// Hero Section with modern design
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50"
      data-oid="_b28bpu"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="8h69bf0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid="ux6r77t"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="ioq_fo_"
      >
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="q_4eawi"
        />

        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-orange-500/15 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="n4qog2q"
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="09e9k6t"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="w8_vt:w">
        <div className="max-w-6xl mx-auto text-center" data-oid=":88ly8j">
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="l28g.bj"
          >
            <Star className="w-4 h-4 fill-current" data-oid="bg15s.h" />
            About Assembly Singapore
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="7dq1zg2"
          >
            Creating Creators,
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"
              data-oid="u7t.1ji"
            >
              Empowering Realtors
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="7p-l3i0"
          >
            We're building Singapore's premier knowledge hub where innovation
            meets expertise, fostering a community of forward-thinking
            professionals ready to shape the future of real estate and beyond.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-oid="vpu9sti"
          >
            <Link href="/courses" data-oid="md.ts97">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-oid="pl8wrvf"
              >
                Explore Our Courses
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="oq97.v_"
                />
              </Button>
            </Link>
            <Link href="/contact" data-oid="29pdq-9">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                data-oid="7mjgrfc"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            data-oid="ilkyzsb"
          >
            <div className="text-center" data-oid="a7o4y__">
              <div
                className="text-3xl font-bold text-gray-900 mb-2"
                data-oid="5ufdg3m"
              >
                15,000+
              </div>
              <div className="text-gray-600" data-oid="q1ywwm7">
                Students Empowered
              </div>
            </div>
            <div className="text-center" data-oid="et1nx-j">
              <div
                className="text-3xl font-bold text-gray-900 mb-2"
                data-oid="qlasdeh"
              >
                50+
              </div>
              <div className="text-gray-600" data-oid="7qq:jkb">
                Expert Courses
              </div>
            </div>
            <div className="text-center" data-oid="p_6ye9y">
              <div
                className="text-3xl font-bold text-gray-900 mb-2"
                data-oid="4acfpx_"
              >
                4.9/5
              </div>
              <div className="text-gray-600" data-oid="roczvu.">
                Student Rating
              </div>
            </div>
            <div className="text-center" data-oid="7neeaup">
              <div
                className="text-3xl font-bold text-gray-900 mb-2"
                data-oid="brue_3l"
              >
                98%
              </div>
              <div className="text-gray-600" data-oid="oe:u:u8">
                Success Rate
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mission & Vision Section
const MissionVisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="2a595-k">
      <div className="container mx-auto px-4" data-oid="h2w37i2">
        <div className="max-w-6xl mx-auto" data-oid="jirpn0s">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="sajvgpd"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-oid="85y8dkh"
            >
              Our Mission & Vision
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="ez-:w9z"
            >
              Driving transformation through education, innovation, and
              community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12" data-oid="rx-hu2q">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="3e-qdb0"
            >
              <div
                className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6"
                data-oid="sh2j8t5"
              >
                <Target className="w-8 h-8 text-white" data-oid="ub3e5is" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="8d0bv30"
              >
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed" data-oid="5in2939">
                To democratize access to high-quality real estate education and
                create a thriving ecosystem where professionals can learn, grow,
                and succeed together. We believe in empowering individuals with
                practical knowledge and innovative strategies that drive real
                results.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-oid="4l_fl4a"
            >
              <div
                className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6"
                data-oid="yb9bv2h"
              >
                <Lightbulb className="w-8 h-8 text-white" data-oid="-gm.k25" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="3w79c7b"
              >
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed" data-oid="w0t1cu9">
                To be Singapore's leading platform for professional development,
                fostering a new generation of creative, innovative, and
                successful real estate professionals who shape the future of the
                industry through collaboration and continuous learning.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Core Values Section
const CoreValuesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing cutting-edge approaches and creative solutions to traditional challenges.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building meaningful connections and fostering a supportive community ecosystem.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Empowerment",
      description:
        "Providing tools, knowledge, and confidence to achieve professional excellence.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "Future-Ready",
      description:
        "Preparing professionals for tomorrow's challenges with today's insights.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="uj2phxu">
      <div className="container mx-auto px-4" data-oid="57kd1_3">
        <div className="max-w-6xl mx-auto" data-oid="rfag:1s">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="_sr1cry"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-oid="ta.foy."
            >
              Our Core Values
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="ceshbrr"
            >
              The principles that guide everything we do and shape our community
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="76iipt."
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="bv7k6mt"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  data-oid="9fe39.s"
                >
                  <value.icon
                    className="w-8 h-8 text-white"
                    data-oid="0x9wcpr"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  data-oid="zo3wm:w"
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" data-oid="ra5b1_:">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Schools Section
const SchoolsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const schools = [
    {
      icon: Building,
      title: "School of Real Estate",
      description:
        "Advanced strategies and innovative approaches for property professionals, covering investment analysis, market trends, and portfolio optimization.",
      status: "Coming Soon",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Palette,
      title: "School of Creative Media",
      description:
        "Master content creation, digital storytelling, and brand building to stand out in today's competitive marketplace.",
      status: "Coming Soon",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: TrendingUp,
      title: "School of Entrepreneurship",
      description:
        "Build and scale successful ventures with proven frameworks, business strategies, and entrepreneurial mindset development.",
      status: "Coming Soon",
      color: "from-green-600 to-green-700",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="tcgkhhq">
      <div className="container mx-auto px-4" data-oid="zp9n.1l">
        <div className="max-w-6xl mx-auto" data-oid="cbd0t:7">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="6tdzm2t"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-oid="bmyv0zg"
            >
              Our Specialized Schools
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="gxo7m8s"
            >
              Comprehensive education programs designed for the modern
              professional
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8" data-oid=":0-85py">
            {schools.map((school, index) => (
              <motion.div
                key={school.title}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="z7ziou7"
              >
                <div className="absolute top-4 right-4" data-oid="-7ds:ot">
                  <span
                    className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    data-oid="3wnlu2:"
                  >
                    {school.status}
                  </span>
                </div>

                <div
                  className={`w-16 h-16 bg-gradient-to-r ${school.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  data-oid="fbwr__k"
                >
                  <school.icon
                    className="w-8 h-8 text-white"
                    data-oid="hgw57ju"
                  />
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  data-oid="cidlw1x"
                >
                  {school.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed mb-6"
                  data-oid="ndr3ghr"
                >
                  {school.description}
                </p>

                <div
                  className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                  data-oid="hj09aoi"
                >
                  Learn More
                  <ArrowRight
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    data-oid="c6hopz9"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Assembly Section
const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    "Expert-led courses from industry professionals",
    "Practical, real-world applications and case studies",
    "Vibrant community of like-minded professionals",
    "Cutting-edge curriculum updated with market trends",
    "Flexible learning options to fit your schedule",
    "Ongoing support and mentorship opportunities",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50"
      data-oid=".6qnn.5"
    >
      <div className="container mx-auto px-4" data-oid="-.kyomm">
        <div className="max-w-6xl mx-auto" data-oid="gw9iwmi">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="x6umg2h"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              data-oid="y8watwl"
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                data-oid="25fz-da"
              >
                Why Choose Assembly?
              </h2>
              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                data-oid="ar2nic5"
              >
                We're more than just an education platform. We're a
                transformative community experience that combines cutting-edge
                knowledge with practical application and meaningful connections.
              </p>

              <div className="space-y-4 mb-8" data-oid="c3nag4m">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : -20,
                    }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    data-oid="lp_0rk:"
                  >
                    <CheckCircle
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      data-oid="4k81ndf"
                    />

                    <span className="text-gray-700" data-oid="o45r4m8">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link href="/courses" data-oid="qrym7ev">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  data-oid="tol_cwu"
                >
                  Start Your Journey
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    data-oid="ge5c.s7"
                  />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="nz3ap6r"
            >
              <div className="relative" data-oid="9ali3ll">
                {/* Main Image Placeholder */}
                <div
                  className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 shadow-2xl"
                  data-oid="a-nzu1-"
                >
                  <div
                    className="bg-white rounded-xl p-6 mb-6"
                    data-oid="g6:_hic"
                  >
                    <div
                      className="flex items-center gap-4 mb-4"
                      data-oid="oofp63."
                    >
                      <div
                        className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
                        data-oid="g.5cjla"
                      >
                        <BookOpen
                          className="w-6 h-6 text-white"
                          data-oid="1cok1mw"
                        />
                      </div>
                      <div data-oid="es0b::w">
                        <h4
                          className="font-semibold text-gray-900"
                          data-oid=".te:z8y"
                        >
                          Success Stories
                        </h4>
                        <p className="text-gray-500 text-sm" data-oid="8v6tjx:">
                          Real results from our community
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3" data-oid="cidf-c4">
                      <div
                        className="flex justify-between items-center"
                        data-oid="4pl46oj"
                      >
                        <span className="text-gray-600" data-oid="q.k4679">
                          Portfolio Growth
                        </span>
                        <span
                          className="font-semibold text-green-600"
                          data-oid="8_ub.cb"
                        >
                          +127%
                        </span>
                      </div>
                      <div
                        className="w-full bg-gray-200 rounded-full h-2"
                        data-oid=".meiank"
                      >
                        <motion.div
                          className="bg-green-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: isInView ? "85%" : 0 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          data-oid="vx964um"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4" data-oid="x38n3_0">
                    <div
                      className="bg-white rounded-xl p-4 text-center"
                      data-oid="mf2nqdm"
                    >
                      <div
                        className="text-2xl font-bold text-gray-900"
                        data-oid="vgzznm2"
                      >
                        15K+
                      </div>
                      <div className="text-gray-600 text-sm" data-oid="cdb75r6">
                        Students
                      </div>
                    </div>
                    <div
                      className="bg-white rounded-xl p-4 text-center"
                      data-oid="xh-kxrm"
                    >
                      <div
                        className="text-2xl font-bold text-gray-900"
                        data-oid="epbutsx"
                      >
                        4.9★
                      </div>
                      <div className="text-gray-600 text-sm" data-oid="8fw1gnq">
                        Rating
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  data-oid="5735fvu"
                >
                  <Award className="w-6 h-6" data-oid="zj5zv3e" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  data-oid="sa4ua9-"
                >
                  <Heart className="w-6 h-6" data-oid="vk3ywn-" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Page component
export default function AboutPage() {
  return (
    <>
      <Navbar data-oid="7c4f_.e" />
      <div className="bg-white" data-oid="e5bc8p1">
        <HeroSection data-oid="o.-jgpd" />
        <MissionVisionSection data-oid="spze6v5" />
        <CoreValuesSection data-oid="nckl3d1" />
        <SchoolsSection data-oid="i9iq7x3" />
        <WhyChooseSection data-oid="2m1rld2" />
      </div>
    </>
  );
}
