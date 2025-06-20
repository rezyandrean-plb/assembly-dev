"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNetwork } from "@/context/network-context";
import { Award, BarChart2, BookOpen, Compass, Shield, Zap } from "lucide-react";

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { networkState } = useNetwork();

  // Transform values based on scroll
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );
  const headerY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [50, 0, 0, -50],
  );

  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-[#123B79]" data-oid="wh36bet" />,
      title: "Enhanced Knowledge",
      description:
        "Gain deep insights into Singapore's property market dynamics and trends",
      delay: 0.2,
    },
    {
      icon: <Compass className="h-6 w-6 text-[#123B79]" data-oid="gcqrml:" />,
      title: "Strategic Navigation",
      description:
        "Learn to navigate complex regulations and market conditions with confidence",
      delay: 0.3,
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[#123B79]" data-oid=".9ro6:_" />,
      title: "Career Growth",
      description:
        "Develop skills that can accelerate your professional advancement",
      delay: 0.4,
    },
    {
      icon: <Shield className="h-6 w-6 text-[#123B79]" data-oid="_auk-6j" />,
      title: "Risk Mitigation",
      description:
        "Identify potential pitfalls and develop strategies to protect investments",
      delay: 0.5,
    },
    {
      icon: <Zap className="h-6 w-6 text-[#123B79]" data-oid="23546cd" />,
      title: "Competitive Edge",
      description:
        "Stay ahead with exclusive insights and early access to market information",
      delay: 0.6,
    },
    {
      icon: <Award className="h-6 w-6 text-[#123B79]" data-oid="7p3qfcz" />,
      title: "Industry Recognition",
      description:
        "Build your reputation as a knowledgeable professional in the field",
      delay: 0.7,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#F5F5F5]"
      data-oid="ct9r4v."
    >
      <div className="container mx-auto px-4" data-oid="iq10l:v">
        <motion.div
          className="text-center mb-16"
          style={{ opacity: headerOpacity, y: headerY }}
          data-oid="qgdm4:0"
        >
          <h2
            className="text-4xl font-bold text-[#123B79] mb-4"
            data-oid="f-l90_i"
          >
            The Connected Ecosystem
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="ssxqi28"
          >
            Experience the power of being part of an interconnected network of
            knowledge and opportunity
          </p>
          <div
            className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid="2qz2ndj"
          ></div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          data-oid=":.jvwe3"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30,
              }}
              transition={{
                duration: 0.6,
                delay: benefit.delay,
                type: "spring",
                stiffness: 50,
              }}
              data-oid="mbw4mv4"
            >
              <div
                className="mr-4 p-3 bg-[#F0A500]/10 rounded-full"
                data-oid="s9x:p7t"
              >
                {benefit.icon}
              </div>
              <div data-oid="ksi7x74">
                <h3
                  className="text-xl font-bold text-[#123B79] mb-2"
                  data-oid="zz7gob5"
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600" data-oid="vvyra8e">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Network visualization */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        data-oid="2l53oxj"
      >
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="r59x7.."
        >
          {/* Background network pattern */}
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${Math.random() * 1000},${Math.random() * 600} C${Math.random() * 1000},${Math.random() * 600} ${Math.random() * 1000},${Math.random() * 600} ${Math.random() * 1000},${Math.random() * 600}`}
              stroke="#123B79"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isInView ? 1 : 0,
                opacity: isInView ? 0.3 : 0,
              }}
              transition={{ duration: 2, delay: 0.1 * i }}
              data-oid="55ziz3w"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
