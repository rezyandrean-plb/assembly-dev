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
      data-oid="g9o0x0k"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="55-aln6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid="-n3z2xw"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="8vj62bl"
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
          data-oid="41rf.wz"
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
          data-oid="14kx:73"
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
          data-oid="050lheu"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="wrgw7-3">
        <div className="max-w-6xl mx-auto" data-oid="enfhu8e">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-oid="dsmo2_n"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left" data-oid="6-n0wdv">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-oid="1wwbhaj"
              >
                <Star className="w-4 h-4 fill-current" data-oid="lg05.f:" />
                Singapore's #1 Real Estate Education Platform
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 text-neutral-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-oid="tpq8lz2"
              >
                Master Real Estate
                <span className="block text-primary" data-oid="5d655lm">
                  Investment
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-oid="j.y8aci"
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
                data-oid="kknjwxs"
              >
                <Link href="/courses" data-oid="6g5nr2w">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    data-oid="7vfsbtt"
                  >
                    Start Learning Today
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="7:2qpka"
                    />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-xl group transition-all duration-300"
                  data-oid="_8b2k1z"
                >
                  <Play
                    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                    data-oid="nh6rl:d"
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
                data-oid="f72pqb1"
              >
                <div className="text-center lg:text-left" data-oid="q2lrhg3">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="_st.b3w"
                  >
                    <Users className="w-5 h-5" data-oid="ab1lkej" />
                    <span className="text-sm font-medium" data-oid="920.98i">
                      Students
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="ku9_zf5"
                  >
                    15,000+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="kbm80m8">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="c_19y:e"
                  >
                    <BookOpen className="w-5 h-5" data-oid="hh3_ztk" />
                    <span className="text-sm font-medium" data-oid="dqp-fo5">
                      Courses
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="jos9wl4"
                  >
                    50+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="zo23icn">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="6xsjir8"
                  >
                    <Star className="w-5 h-5" data-oid="1r81h.:" />
                    <span className="text-sm font-medium" data-oid="0.txbgm">
                      Rating
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="c:xd3qo"
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
              data-oid="xtbq283"
            >
              <div className="relative" data-oid="2qeghcb">
                {/* Main Card */}
                <div
                  className="bg-white rounded-2xl shadow-2xl p-8 relative z-10"
                  data-oid="j7..ydh"
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="-prnxjm"
                  >
                    <div
                      className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"
                      data-oid="gntr79v"
                    >
                      <BookOpen
                        className="w-6 h-6 text-white"
                        data-oid="mvhnnz0"
                      />
                    </div>
                    <div data-oid="bwebdf0">
                      <h3
                        className="font-semibold text-gray-900"
                        data-oid="q-ww9ka"
                      >
                        Property Investment Masterclass
                      </h3>
                      <p className="text-gray-500 text-sm" data-oid="try6a.n">
                        By Melvin Lim
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6" data-oid="z2t:82y">
                    <div
                      className="flex justify-between items-center"
                      data-oid="_1.0jua"
                    >
                      <span className="text-gray-600" data-oid="r-s94w6">
                        Progress
                      </span>
                      <span
                        className="text-primary font-semibold"
                        data-oid="g1fm5n7"
                      >
                        75%
                      </span>
                    </div>
                    <div
                      className="w-full bg-gray-200 rounded-full h-2"
                      data-oid="7s011qx"
                    >
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? "75%" : 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        data-oid="pxblm63"
                      />
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="40dms:b"
                  >
                    <div className="flex items-center gap-2" data-oid="30j6aqv">
                      <Star
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        data-oid="4qk-gnx"
                      />

                      <span
                        className="text-gray-600 text-sm"
                        data-oid="hk9_9.:"
                      >
                        4.9 (1,234 reviews)
                      </span>
                    </div>
                    <span
                      className="text-2xl font-bold text-gray-900"
                      data-oid="xsrv10j"
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
                  data-oid="uty9tz2"
                >
                  <div className="text-sm font-medium" data-oid="4c7p_-g">
                    ROI Achieved
                  </div>
                  <div className="text-2xl font-bold" data-oid="0uwdsfb">
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
                  data-oid="pe0b..l"
                >
                  <div className="flex items-center gap-2" data-oid="anvcek2">
                    <div
                      className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
                      data-oid="saz9xty"
                    >
                      <Users
                        className="w-4 h-4 text-white"
                        data-oid="64d227j"
                      />
                    </div>
                    <div data-oid="ha8_ejf">
                      <div
                        className="text-sm font-medium text-gray-900"
                        data-oid="doyfjsi"
                      >
                        Live Students
                      </div>
                      <div
                        className="text-lg font-bold text-gray-900"
                        data-oid="49lc_uo"
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
