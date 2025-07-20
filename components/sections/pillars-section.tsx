"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNetwork } from "@/context/network-context";
import { Building2, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";

export default function PillarsSection() {
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

  const pillars = [
    {
      icon: <Building2 className="h-12 w-12" data-oid="nla_iip" />,
      title: "Real Estate",
      description:
        "Navigate Singapore's dynamic property market with expert insights on trends, regulations, and opportunities.",
      color: "from-[#794B12]/20 to-[#794B12]/5",
      borderColor: "border-[#794B12]/30",
      textColor: "text-[#794B12]",
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="h-12 w-12" data-oid="r-oruef" />,
      title: "Finance",
      description:
        "Master the financial aspects of real estate with knowledge on investment strategies, mortgages, and market analysis.",
      color: "from-[#F0A500]/20 to-[#F0A500]/5",
      borderColor: "border-[#F0A500]/30",
      textColor: "text-[#F0A500]",
      delay: 0.4,
    },
    {
      icon: <GraduationCap className="h-12 w-12" data-oid="kepded9" />,
      title: "Learning",
      description:
        "Continuously develop your expertise through structured courses, workshops, and community knowledge sharing.",
      color: "from-[#79123B]/20 to-[#79123B]/5",
      borderColor: "border-[#79123B]/30",
      textColor: "text-[#79123B]",
      delay: 0.6,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#F5F5F5]"
      data-oid="6cav7:o"
    >
      <div className="container mx-auto px-4" data-oid="p860yu:">
        <motion.div
          className="text-center mb-16"
          style={{ opacity: headerOpacity, y: headerY }}
          data-oid="lyphz_0"
        >
          <h2
            className="text-4xl font-bold text-[#123B79] mb-4"
            data-oid="w56j0f:"
          >
            Pillars of the Network
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="nrbk2f."
          >
            Explore the three interconnected domains that form the foundation of
            your success
          </p>
          <div
            className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid="rg86:2."
          ></div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          data-oid="crgoi3r"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg border hover:shadow-xl transition-shadow duration-300 ${pillar.borderColor}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
              }}
              transition={{
                duration: 0.8,
                delay: pillar.delay,
                type: "spring",
                stiffness: 50,
              }}
              data-oid="ro6n0v6"
            >
              <div
                className={`rounded-full p-4 inline-block mb-6 ${
                  pillar.title === "Real Estate"
                    ? "bg-[#f5efe5]"
                    : pillar.title === "Finance"
                      ? "bg-[#fdf6e9]"
                      : "bg-[#f8eaef]"
                }`}
                data-oid="n4q.pzk"
              >
                <div className={pillar.textColor} data-oid="qagk041">
                  {pillar.icon}
                </div>
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${pillar.textColor}`}
                data-oid="rrx_r-k"
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-6" data-oid="09-b8k.">
                {pillar.description}
              </p>

              <div className="pt-4 border-t border-gray-100" data-oid="954hs-g">
                <a
                  href={`/${pillar.title.toLowerCase().replace(" ", "-")}`}
                  className={`inline-flex items-center font-medium hover:opacity-80 transition-opacity ${pillar.textColor}`}
                  data-oid="h--pu1u"
                >
                  Explore {pillar.title}
                  <ArrowRight className="ml-2 h-4 w-4" data-oid="ecm3xob" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Network connection lines between pillars - visible on larger screens */}
      <div
        className="hidden md:block absolute top-1/2 left-0 w-full z-0 pointer-events-none"
        data-oid="yw.iavy"
      >
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="803_so8"
        >
          <motion.path
            d="M300,40 C400,0 500,80 600,40"
            stroke="#123B79"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 0.6 : 0,
            }}
            transition={{ duration: 1.5, delay: 0.8 }}
            data-oid="-tjp1yd"
          />

          <motion.path
            d="M600,40 C700,0 800,80 900,40"
            stroke="#123B79"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              opacity: isInView ? 0.6 : 0,
            }}
            transition={{ duration: 1.5, delay: 1 }}
            data-oid="cc-:mw7"
          />
        </svg>
      </div>
    </section>
  );
}
