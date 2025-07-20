"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function NewCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    "Lifetime access to all course materials",
    "Expert-led live sessions and Q&A",
    "Private community of successful investors",
    "Personalized investment strategy guidance",
    "Regular market updates and insights",
    "Certificate of completion",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary relative overflow-hidden"
      data-oid="wgnl0po"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" data-oid="kbgiyxr">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid="3mwm-qg"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="7.lovco"
      >
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="umda06m"
        />

        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="ercwoxp"
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="xiwct73"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="hihu3q4">
        <div
          className="max-w-4xl mx-auto text-center text-white"
          data-oid="d0n-a7u"
        >
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="7f_lsmx"
          >
            <div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
              data-oid="z65ov3_"
            >
              <Sparkles className="w-4 h-4" data-oid="ticky_8" />
              Limited Time Offer
            </div>

            <h2
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              data-oid="qys769d"
            >
              Start Your Real Estate
              <span className="block text-yellow-300" data-oid="4d2qx6-">
                Success Story Today
              </span>
            </h2>

            <p
              className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed"
              data-oid="_t-ogzc"
            >
              Join thousands of successful investors who've transformed their
              financial future. Get started with our comprehensive courses and
              expert guidance.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="3ielbpq"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                data-oid="pb1:p61"
              >
                <CheckCircle
                  className="w-6 h-6 text-success flex-shrink-0"
                  data-oid="sw.1zm2"
                />

                <span className="text-left" data-oid="-7ecsc8">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="xeu:dmz"
          >
            <Link href="/courses" data-oid="cy4fcil">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-oid="gxls8nu"
              >
                <Zap
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="w1plob5"
                />
                Start Learning Now
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="n9zxt3:"
                />
              </Button>
            </Link>
            <Link href="/contact" data-oid="hjsvjkv">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-xl transition-all duration-300"
                data-oid="dzu2t36"
              >
                Speak to an Advisor
              </Button>
            </Link>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-oid="jprakuk"
          >
            <div
              className="flex items-center justify-center gap-2 mb-4"
              data-oid="5-m:qpq"
            >
              <Sparkles className="w-6 h-6 text-accent" data-oid="f:1-494" />

              <span className="text-xl font-bold" data-oid="y4-gd_2">
                Special Launch Offer
              </span>
            </div>
            <p className="text-lg mb-4" data-oid="lx47rcd">
              Get 30% off your first course when you sign up this month!
            </p>
            <div className="text-sm opacity-75" data-oid=":gz:4vw">
              Use code:{" "}
              <span
                className="font-mono bg-white/20 px-2 py-1 rounded"
                data-oid="epv36ll"
              >
                LAUNCH30
              </span>{" "}
              at checkout
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 0.75 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            data-oid="j9:2_4v"
          >
            <div className="text-sm" data-oid="bvz3iho">
              ✓ Trusted by 15,000+ students
            </div>
            <div className="text-sm" data-oid="ogalos6">
              ✓ 4.9/5 average rating
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
