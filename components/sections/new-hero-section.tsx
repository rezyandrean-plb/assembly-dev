"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function NewHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50"
      data-oid="5rqc2wp"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="cf7rzq3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid=":vp3d9z"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="auikjih"
      >
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="ibrf1vz"
        />

        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-accent/15 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="fquj_2k"
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="ptpjblt"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="vmajcf8">
        <div className="max-w-6xl mx-auto" data-oid="zwwzvus">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-oid="ahdlty-"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left" data-oid="nw-.09g">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-oid="u42l95_"
              >
                <Star className="w-4 h-4 fill-current" data-oid="9_ubl2a" />
                Singapore's #1 Real Estate Education Platform
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 text-neutral-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-oid="6klnzky"
              >
                Master Real Estate
                <span className="block text-primary" data-oid="yc0h.qf">
                  Investment
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-oid="m0nx4zs"
              >
                Join thousands of successful investors who've transformed their
                financial future through our comprehensive real estate education
                programs.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                data-oid="sgadffs"
              >
                <Link href="/courses" data-oid="6_xvihv">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    data-oid="46wqjk1"
                  >
                    Start Learning Today
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="mum:zu5"
                    />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-xl group transition-all duration-300"
                  data-oid="5t-3gmy"
                >
                  <Play
                    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                    data-oid="mj8.5sa"
                  />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                data-oid="nw3u2gk"
              >
                <div className="text-center lg:text-left" data-oid="_as.g1_">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="nut59cj"
                  >
                    <Users className="w-5 h-5" data-oid="0krqm4g" />
                    <span className="text-sm font-medium" data-oid="bbu363w">
                      Students
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid=":r-90ue"
                  >
                    15,000+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="w4jg.o:">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="36_agca"
                  >
                    <BookOpen className="w-5 h-5" data-oid="r8pyc2t" />
                    <span className="text-sm font-medium" data-oid=":oxqn45">
                      Courses
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="howg-sn"
                  >
                    50+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="po1-:hp">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="fac02bw"
                  >
                    <Star className="w-5 h-5" data-oid="g5wfdko" />
                    <span className="text-sm font-medium" data-oid="ifejs_1">
                      Rating
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="6k0hym5"
                  >
                    4.9/5
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
              data-oid="ssszuc_"
            >
              <div className="relative" data-oid="5hkp53h">
                {/* Main Card */}
                <div
                  className="bg-white rounded-2xl shadow-2xl p-8 relative z-10"
                  data-oid="199mg1h"
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="vsuau-p"
                  >
                    <div
                      className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"
                      data-oid="qnlbc:l"
                    >
                      <BookOpen
                        className="w-6 h-6 text-white"
                        data-oid=".zf9d7s"
                      />
                    </div>
                    <div data-oid="lk06g7b">
                      <h3
                        className="font-semibold text-gray-900"
                        data-oid="m7hmb2_"
                      >
                        Property Investment Masterclass
                      </h3>
                      <p className="text-gray-500 text-sm" data-oid="hed1btx">
                        By Melvin Lim
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6" data-oid="js2bll7">
                    <div
                      className="flex justify-between items-center"
                      data-oid="xz33k9u"
                    >
                      <span className="text-gray-600" data-oid=".31q:xa">
                        Progress
                      </span>
                      <span
                        className="text-primary font-semibold"
                        data-oid="c0qf6s-"
                      >
                        75%
                      </span>
                    </div>
                    <div
                      className="w-full bg-gray-200 rounded-full h-2"
                      data-oid="7cchfhd"
                    >
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? "75%" : 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        data-oid="ca.q-ho"
                      />
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="r33ui8l"
                  >
                    <div className="flex items-center gap-2" data-oid="v3.u5t9">
                      <Star
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        data-oid=".:6hyz3"
                      />

                      <span
                        className="text-gray-600 text-sm"
                        data-oid=":-_v7zv"
                      >
                        4.9 (1,234 reviews)
                      </span>
                    </div>
                    <span
                      className="text-2xl font-bold text-gray-900"
                      data-oid="_:84ged"
                    >
                      $299
                    </span>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-success text-white p-4 rounded-xl shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  data-oid="cbac4f1"
                >
                  <div className="text-sm font-medium" data-oid="nay1bbn">
                    ROI Achieved
                  </div>
                  <div className="text-2xl font-bold" data-oid="r51-k-c">
                    +127%
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  data-oid="47du017"
                >
                  <div className="flex items-center gap-2" data-oid="4rkk-9z">
                    <div
                      className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
                      data-oid="nczbn3:"
                    >
                      <Users
                        className="w-4 h-4 text-white"
                        data-oid="h7d3gla"
                      />
                    </div>
                    <div data-oid="rr15ff8">
                      <div
                        className="text-sm font-medium text-gray-900"
                        data-oid=".0kuf2l"
                      >
                        Live Students
                      </div>
                      <div
                        className="text-lg font-bold text-gray-900"
                        data-oid="r77-a20"
                      >
                        2,847
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
