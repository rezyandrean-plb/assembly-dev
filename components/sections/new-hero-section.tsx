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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      data-oid="autfk40"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="9drv2sh">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid="z.r4j55"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="ct89hu7"
      >
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="48l-e.z"
        />

        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-15 blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="c0qi0w5"
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="j6883ft"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="uo_fa5i">
        <div className="max-w-6xl mx-auto" data-oid="k8805mm">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-oid="6re.uqm"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left" data-oid="tmfjejl">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-oid="m8hnkky"
              >
                <Star className="w-4 h-4 fill-current" data-oid="7ifsub_" />
                Singapore's #1 Real Estate Education Platform
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-oid="f.099kv"
              >
                Master Real Estate
                <span
                  className="block text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  data-oid="wl7yc_f"
                >
                  Investment
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-oid="0af31wk"
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
                data-oid="ilh1em7"
              >
                <Link href="/courses" data-oid="pizbgf6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    data-oid="jhnskum"
                  >
                    Start Learning Today
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="81zxhba"
                    />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl group"
                  data-oid="hfk0fk_"
                >
                  <Play
                    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                    data-oid="yo.fmkv"
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
                data-oid="hyb-uyn"
              >
                <div className="text-center lg:text-left" data-oid="5j_-aih">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="g1uha--"
                  >
                    <Users className="w-5 h-5" data-oid="vfzd22i" />
                    <span className="text-sm font-medium" data-oid="j673_9q">
                      Students
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="_ykt_3j"
                  >
                    15,000+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="4qdo--x">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="zn66e-5"
                  >
                    <BookOpen className="w-5 h-5" data-oid="b5zc0ny" />
                    <span className="text-sm font-medium" data-oid="8dpqcir">
                      Courses
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="ivugfgr"
                  >
                    50+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="7ogm3:4">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="5sgin80"
                  >
                    <Star className="w-5 h-5" data-oid="aspvtyc" />
                    <span className="text-sm font-medium" data-oid="x0z1t7c">
                      Rating
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="6ns1i88"
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
              data-oid="jaoyzmi"
            >
              <div className="relative" data-oid="5i.c5pb">
                {/* Main Card */}
                <div
                  className="bg-white rounded-2xl shadow-2xl p-8 relative z-10"
                  data-oid="kdxsc9."
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="g.na-m3"
                  >
                    <div
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                      data-oid="3wg706s"
                    >
                      <BookOpen
                        className="w-6 h-6 text-white"
                        data-oid=".ij18el"
                      />
                    </div>
                    <div data-oid="ydeue5f">
                      <h3
                        className="font-semibold text-gray-900"
                        data-oid="rf9jv.u"
                      >
                        Property Investment Masterclass
                      </h3>
                      <p className="text-gray-500 text-sm" data-oid="2.3-vgp">
                        By Melvin Lim
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6" data-oid="24uahw8">
                    <div
                      className="flex justify-between items-center"
                      data-oid="45ht_c8"
                    >
                      <span className="text-gray-600" data-oid="4-:li47">
                        Progress
                      </span>
                      <span
                        className="text-blue-600 font-semibold"
                        data-oid="hc2tomm"
                      >
                        75%
                      </span>
                    </div>
                    <div
                      className="w-full bg-gray-200 rounded-full h-2"
                      data-oid="b5:absl"
                    >
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? "75%" : 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        data-oid="bk.w43r"
                      />
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="bt0sii5"
                  >
                    <div className="flex items-center gap-2" data-oid="glnzw8s">
                      <Star
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        data-oid="lcu-ait"
                      />

                      <span
                        className="text-gray-600 text-sm"
                        data-oid=".45-:kt"
                      >
                        4.9 (1,234 reviews)
                      </span>
                    </div>
                    <span
                      className="text-2xl font-bold text-gray-900"
                      data-oid="6s18p0t"
                    >
                      $299
                    </span>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-xl shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  data-oid="svul6ha"
                >
                  <div className="text-sm font-medium" data-oid="z0m1up3">
                    ROI Achieved
                  </div>
                  <div className="text-2xl font-bold" data-oid="9a6u03g">
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
                  data-oid="-6cc:zi"
                >
                  <div className="flex items-center gap-2" data-oid="u7rhgfc">
                    <div
                      className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center"
                      data-oid="c80ybmt"
                    >
                      <Users
                        className="w-4 h-4 text-white"
                        data-oid="zlit-nx"
                      />
                    </div>
                    <div data-oid=".boupw_">
                      <div
                        className="text-sm font-medium text-gray-900"
                        data-oid="400gko3"
                      >
                        Live Students
                      </div>
                      <div
                        className="text-lg font-bold text-gray-900"
                        data-oid=":m3zkdv"
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
