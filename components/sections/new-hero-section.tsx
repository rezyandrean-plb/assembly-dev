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
      data-oid="y8anmol"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="hp8uft4">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid="n1tpnif"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid=".9hodbi"
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
          data-oid="ev_lana"
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
          data-oid="okfuwfy"
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
          data-oid="ilte4:c"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="6n-yo-5">
        <div className="max-w-6xl mx-auto" data-oid="k9h7.8l">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-oid="h5dub-m"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left" data-oid="mrgz85c">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-oid="p3s:5h3"
              >
                <Star className="w-4 h-4 fill-current" data-oid="7.:z0i5" />
                Singapore's #1 Real Estate Education Platform
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 text-neutral-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-oid="z26c9ea"
              >
                Master Real Estate
                <span className="block text-primary" data-oid="ceh4e26">
                  Investment
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-oid="gkzgv3e"
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
                data-oid="aa8azr0"
              >
                <Link href="/courses" data-oid="jyhcqze">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    data-oid="gdhmsq6"
                  >
                    Start Learning Today
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="39r:ufg"
                    />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-xl group transition-all duration-300"
                  data-oid="021lqjr"
                >
                  <Play
                    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                    data-oid="w1msmx1"
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
                data-oid=":fadq:u"
              >
                <div className="text-center lg:text-left" data-oid="cu.fh64">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="ep7ibaw"
                  >
                    <Users className="w-5 h-5" data-oid="f5h3k1b" />
                    <span className="text-sm font-medium" data-oid="g78dyvi">
                      Students
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="ymqzq.:"
                  >
                    15,000+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="4x9ch42">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="llymy4r"
                  >
                    <BookOpen className="w-5 h-5" data-oid="-bckph8" />
                    <span className="text-sm font-medium" data-oid="zk-xeq9">
                      Courses
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="w86z0t."
                  >
                    50+
                  </div>
                </div>
                <div className="text-center lg:text-left" data-oid="ttat8ul">
                  <div
                    className="flex items-center gap-2 text-gray-600 mb-1"
                    data-oid="aa-.ogi"
                  >
                    <Star className="w-5 h-5" data-oid="v5tmrbg" />
                    <span className="text-sm font-medium" data-oid="uhx:--.">
                      Rating
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="ff:yexw"
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
              data-oid=".xg:anz"
            >
              <div className="relative" data-oid="5aeryt3">
                {/* Main Card */}
                <div
                  className="bg-white rounded-2xl shadow-2xl p-8 relative z-10"
                  data-oid="f515b2r"
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="tl:r1d_"
                  >
                    <div
                      className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"
                      data-oid=":bdmg.9"
                    >
                      <BookOpen
                        className="w-6 h-6 text-white"
                        data-oid="w1on0u6"
                      />
                    </div>
                    <div data-oid="5nq8z86">
                      <h3
                        className="font-semibold text-gray-900"
                        data-oid="aqv5aa:"
                      >
                        Property Investment Masterclass
                      </h3>
                      <p className="text-gray-500 text-sm" data-oid="oeq2utw">
                        By Melvin Lim
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6" data-oid="4.ec2ee">
                    <div
                      className="flex justify-between items-center"
                      data-oid="gj-o2j3"
                    >
                      <span className="text-gray-600" data-oid="m95nofl">
                        Progress
                      </span>
                      <span
                        className="text-primary font-semibold"
                        data-oid="t5oh8.2"
                      >
                        75%
                      </span>
                    </div>
                    <div
                      className="w-full bg-gray-200 rounded-full h-2"
                      data-oid="y8xlp:4"
                    >
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? "75%" : 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        data-oid="78ix-:k"
                      />
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="--ya_-q"
                  >
                    <div className="flex items-center gap-2" data-oid="j_lb8s0">
                      <Star
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        data-oid="lwq8t8h"
                      />

                      <span
                        className="text-gray-600 text-sm"
                        data-oid="f3.wmus"
                      >
                        4.9 (1,234 reviews)
                      </span>
                    </div>
                    <span
                      className="text-2xl font-bold text-gray-900"
                      data-oid="bczns:6"
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
                  data-oid="e3:h098"
                >
                  <div className="text-sm font-medium" data-oid="7snhh2m">
                    ROI Achieved
                  </div>
                  <div className="text-2xl font-bold" data-oid="byvxb96">
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
                  data-oid="_bls6yj"
                >
                  <div className="flex items-center gap-2" data-oid="6f43da_">
                    <div
                      className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
                      data-oid="dzt6biu"
                    >
                      <Users
                        className="w-4 h-4 text-white"
                        data-oid="54trped"
                      />
                    </div>
                    <div data-oid="6-fii4.">
                      <div
                        className="text-sm font-medium text-gray-900"
                        data-oid="-uw00_j"
                      >
                        Live Students
                      </div>
                      <div
                        className="text-lg font-bold text-gray-900"
                        data-oid=":m91u74"
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
