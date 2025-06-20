"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNetwork } from "@/context/network-context";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const { networkState } = useNetwork();

  // Transform values based on scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-oid="ddy-dn4"
    >
      <div
        className="absolute inset-0 bg-white/5 z-[1]"
        data-oid="9ne466q"
      ></div>
      <div
        className="container relative z-10 text-center px-4 mt-20"
        data-oid="zerqg6t"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#123B79] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity: titleOpacity }}
          data-oid="q41p5hq"
        >
          The Interwoven Network of Opportunity
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ opacity: subtitleOpacity }}
          data-oid="cjw706z"
        >
          Where Real Estate, Finance, and Learning converge to create a powerful
          ecosystem for your success
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ opacity: buttonOpacity }}
          className="flex justify-center"
          data-oid="sb1p2xk"
        >
          <Button
            size="lg"
            className="bg-[#123B79] hover:bg-[#0A2A5E] text-white px-8 py-6 text-lg rounded-full hover:shadow-lg transition-all"
            data-oid="jop6_do"
          >
            Explore The Network
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 w-full z-10 text-[#123B79] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        data-oid="yspo1u9"
      >
        <div className="container mx-auto px-4" data-oid="tg0fjb:">
          <p className="text-sm mb-2" data-oid="tf4qcsw">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="mx-auto w-fit"
            data-oid="yt9o8j2"
          >
            <ArrowDown className="h-6 w-6" data-oid="z1sf:di" />
          </motion.div>
        </div>
      </motion.div>

      {/* Network Visualization Indicators */}
      <div
        className="absolute bottom-4 right-4 z-10 flex items-center space-x-2 text-xs text-gray-500"
        data-oid=":x_cl5o"
      >
        <div
          className="w-2 h-2 rounded-full bg-[#794B12]"
          data-oid="kk1vj56"
        ></div>
        <span data-oid="jmxlnz:">Real Estate</span>
        <div
          className="w-2 h-2 rounded-full bg-[#F0A500] ml-2"
          data-oid="pd.b7ld"
        ></div>
        <span data-oid="284:.cv">Finance</span>
        <div
          className="w-2 h-2 rounded-full bg-[#79123B] ml-2"
          data-oid="02ds5ms"
        ></div>
        <span data-oid="awfy.ys">Learning</span>
      </div>
    </section>
  );
}
