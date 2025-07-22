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
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Star className="w-4 h-4 fill-current" />
                Singapore's #1 Real Estate Education Platform
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 text-neutral-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Master Real Estate
                <span className="block text-primary">Investment</span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
              >
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Start Learning Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-xl group transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Students</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    15,000+
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-medium">Courses</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Star className="w-5 h-5" />
                    <span className="text-sm font-medium">Rating</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Property Investment Masterclass
                      </h3>
                      <p className="text-gray-500 text-sm">By Melvin Lim</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-primary font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? "75%" : 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                      <span className="text-gray-600 text-sm">
                        4.9 (1,234 reviews)
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
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
                >
                  <div className="text-sm font-medium">ROI Achieved</div>
                  <div className="text-2xl font-bold">+127%</div>
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
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Live Students
                      </div>
                      <div className="text-lg font-bold text-gray-900">
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
