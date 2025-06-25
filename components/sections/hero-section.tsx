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
      data-oid="_tcqsp:"
    >
      <div
        className="absolute inset-0 bg-white/5 z-[1]"
        data-oid="2oxyqo8"
      ></div>
      <div
        className="container relative z-10 text-center px-4 mt-20"
        data-oid="p047zuv"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#123B79] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity: titleOpacity }}
          data-oid="zrm194-"
        >
          The Interwoven Network of Opportunity
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ opacity: subtitleOpacity }}
          data-oid="szj_0rf"
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
          data-oid=":n.kxls"
        >
          <Button
            size="lg"
            className="bg-[#123B79] hover:bg-[#0A2A5E] text-white px-8 py-6 text-lg rounded-full hover:shadow-lg transition-all"
            data-oid="tv6kt4n"
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
        data-oid="wxu-_4w"
      >
        <div className="container mx-auto px-4" data-oid="qkul9we">
          <p className="text-sm mb-2" data-oid="5ne4upx">
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
            data-oid="cucclmd"
          >
            <ArrowDown className="h-6 w-6" data-oid="acy10-c" />
          </motion.div>
        </div>
      </motion.div>

      {/* Network Visualization Indicators */}
      <div
        className="absolute bottom-4 right-4 z-10 flex items-center space-x-2 text-xs text-gray-500"
        data-oid="z5mjb4w"
      >
        <div
          className="w-2 h-2 rounded-full bg-[#794B12]"
          data-oid="7aclbqc"
        ></div>
        <span data-oid="babf10w">Real Estate</span>
        <div
          className="w-2 h-2 rounded-full bg-[#F0A500] ml-2"
          data-oid="qdakg8i"
        ></div>
        <span data-oid="6_lsayy">Finance</span>
        <div
          className="w-2 h-2 rounded-full bg-[#79123B] ml-2"
          data-oid="jlasspm"
        ></div>
        <span data-oid="5cqdakc">Learning</span>
      </div>
    </section>
  );
}
