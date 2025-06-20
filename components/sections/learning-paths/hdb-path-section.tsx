"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HdbPathSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values based on scroll
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );
  const headerY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [50, 0, 0, -50],
  );

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const optimizationProgress = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [0, 1],
  );
  const exitPathProgress = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  // Decision points along the path
  const decisionPoints = [
    { label: "HDB Selection", x: 300, y: 400, delay: 0.1 },
    { label: "Financing", x: 400, y: 300, delay: 0.2 },
    { label: "Timing", x: 500, y: 400, delay: 0.3 },
    { label: "Upgrading", x: 600, y: 300, delay: 0.4 },
    { label: "Portfolio Balance", x: 700, y: 400, delay: 0.5 },
  ];

  // Property types for visualization
  const propertyTypes = [
    { type: "BTO", x: 350, y: 450, color: "#794B12" },
    { type: "Resale HDB", x: 450, y: 350, color: "#794B12" },
    { type: "Condo", x: 650, y: 350, color: "#79123B" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden min-h-screen"
      data-oid="-ozuc9b"
    >
      {/* Network Path Animation */}
      <div className="absolute inset-0 pointer-events-none" data-oid="z:.mdl-">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          data-oid="lia1ks2"
        >
          {/* Background network elements */}
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <motion.path
                key={`bg-path-${i}`}
                d={`M${Math.random() * 1000},${Math.random() * 1000} C${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000}`}
                stroke="#AAAAAA"
                strokeWidth="1"
                strokeOpacity="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: isInView ? 1 : 0,
                  opacity: isInView ? 0.18 : 0,
                }}
                transition={{ duration: 1.5, delay: i * 0.05 }}
                data-oid="3x6_-w8"
              />
            ))}

          {/* Entry pathway from previous section */}
          <motion.path
            d="M50,600 C150,550 200,500 250,450"
            stroke="#79123B"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathProgress }}
            transition={{ duration: 0.5 }}
            data-oid="9qf3mdq"
          />

          {/* Main optimized pathway */}
          <motion.path
            d="M250,450 C300,400 350,450 400,350 S500,300 550,350 S650,400 700,350 S750,300 800,350"
            stroke="#794B12"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: optimizationProgress }}
            transition={{ duration: 0.5 }}
            data-oid="__ig2fd"
          />

          {/* Alternative paths (less optimal) */}
          <motion.path
            d="M250,450 C300,500 350,550 400,500 S500,450 550,500"
            stroke="#794B12"
            strokeWidth="2"
            strokeOpacity="0.4"
            strokeDasharray="5,5"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: useTransform(
                optimizationProgress,
                [0.1, 0.3],
                [0, 1],
              ),
              opacity: useTransform(
                optimizationProgress,
                [0.1, 0.3, 0.5, 0.7],
                [0, 0.36, 0.18, 0],
              ),
            }}
            transition={{ duration: 0.5 }}
            data-oid=".cdlezw"
          />

          <motion.path
            d="M400,500 C450,550 500,600 550,550 S650,500 700,550"
            stroke="#794B12"
            strokeWidth="2"
            strokeOpacity="0.4"
            strokeDasharray="5,5"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: useTransform(
                optimizationProgress,
                [0.2, 0.4],
                [0, 1],
              ),
              opacity: useTransform(
                optimizationProgress,
                [0.2, 0.4, 0.6, 0.8],
                [0, 0.36, 0.18, 0],
              ),
            }}
            transition={{ duration: 0.5 }}
            data-oid="9d0pf_a"
          />

          {/* Decision points along the path */}
          {decisionPoints.map((point, index) => (
            <motion.g key={`decision-${index}`} data-oid="1_4:1b9">
              {/* Decision point node */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="10"
                fill="#123B79"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isInView
                    ? scrollYProgress.get() > 0.2 + index * 0.1
                      ? Math.min(
                          (scrollYProgress.get() - (0.2 + index * 0.1)) / 0.1,
                          1,
                        )
                      : 0
                    : 0,
                  opacity: isInView
                    ? scrollYProgress.get() > 0.2 + index * 0.1
                      ? Math.min(
                          (scrollYProgress.get() - (0.2 + index * 0.1)) / 0.1,
                          1,
                        )
                      : 0
                    : 0,
                }}
                transition={{ duration: 0.5, delay: point.delay }}
                data-oid="us51xmq"
              />

              {/* Decision point label */}
              <motion.text
                x={point.x}
                y={point.y - 20}
                textAnchor="middle"
                fill="#333333"
                fontSize="12"
                fontWeight="bold"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: isInView
                    ? scrollYProgress.get() > 0.2 + index * 0.1 &&
                      scrollYProgress.get() < 0.9
                      ? Math.min(
                          (scrollYProgress.get() - (0.2 + index * 0.1)) / 0.1,
                          1,
                        )
                      : scrollYProgress.get() >= 0.9
                        ? Math.max(1 - (scrollYProgress.get() - 0.9) / 0.1, 0)
                        : 0
                    : 0,
                  y: isInView
                    ? scrollYProgress.get() > 0.2 + index * 0.1
                      ? Math.max(
                          -10 +
                            ((scrollYProgress.get() - (0.2 + index * 0.1)) /
                              0.1) *
                              10,
                          -10,
                        )
                      : -10
                    : -10,
                }}
                transition={{ duration: 0.5, delay: point.delay }}
                data-oid="aa3td5u"
              >
                {point.label}
              </motion.text>

              {/* Data visualization at decision points */}
              <motion.rect
                x={point.x - 15}
                y={point.y + 15}
                width="30"
                height="20"
                rx="2"
                fill="#F0A500"
                fillOpacity="0.63"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isInView
                    ? scrollYProgress.get() > 0.3 + index * 0.1
                      ? Math.min(
                          (scrollYProgress.get() - (0.3 + index * 0.1)) / 0.1,
                          1,
                        )
                      : 0
                    : 0,
                  opacity: isInView
                    ? scrollYProgress.get() > 0.3 + index * 0.1 &&
                      scrollYProgress.get() < 0.8
                      ? Math.min(
                          ((scrollYProgress.get() - (0.3 + index * 0.1)) /
                            0.1) *
                            0.7,
                          0.7,
                        )
                      : scrollYProgress.get() >= 0.8
                        ? Math.max(
                            0.7 - ((scrollYProgress.get() - 0.8) / 0.1) * 0.7,
                            0,
                          )
                        : 0
                    : 0,
                }}
                transition={{ duration: 0.5, delay: point.delay + 0.2 }}
                data-oid="1k1rn9j"
              />
            </motion.g>
          ))}

          {/* Property type representations */}
          {propertyTypes.map((property, index) => (
            <motion.g key={`property-${index}`} data-oid="duseeuh">
              {/* Property shape */}
              <motion.rect
                x={property.x - 20}
                y={property.y - 20}
                width="40"
                height="40"
                rx="4"
                fill={property.color}
                fillOpacity="0.54"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isInView
                    ? scrollYProgress.get() > 0.4
                      ? Math.min((scrollYProgress.get() - 0.4) / 0.1, 1)
                      : 0
                    : 0,
                  opacity: isInView
                    ? scrollYProgress.get() > 0.4 && scrollYProgress.get() < 0.9
                      ? Math.min(
                          ((scrollYProgress.get() - 0.4) / 0.1) * 0.6,
                          0.6,
                        )
                      : scrollYProgress.get() >= 0.9
                        ? Math.max(
                            0.6 - ((scrollYProgress.get() - 0.9) / 0.1) * 0.6,
                            0,
                          )
                        : 0
                    : 0,
                }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                data-oid="9.mgc-n"
              />

              {/* Property label */}
              <motion.text
                x={property.x}
                y={property.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView
                    ? scrollYProgress.get() > 0.4 && scrollYProgress.get() < 0.9
                      ? Math.min(
                          ((scrollYProgress.get() - 0.4) / 0.1) * 0.6,
                          0.6,
                        )
                      : scrollYProgress.get() >= 0.9
                        ? Math.max(
                            0.6 - ((scrollYProgress.get() - 0.9) / 0.1) * 0.6,
                            0,
                          )
                        : 0
                    : 0,
                }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                data-oid="kmf5rb2"
              >
                {property.type}
              </motion.text>
            </motion.g>
          ))}

          {/* Optimization arrows showing transitions */}
          <motion.path
            d="M350,450 C380,400 420,400 450,350"
            stroke="#F0A500"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: isInView
                ? scrollYProgress.get() > 0.5
                  ? Math.min((scrollYProgress.get() - 0.5) / 0.1, 1)
                  : 0
                : 0,
              opacity: isInView
                ? scrollYProgress.get() > 0.5 && scrollYProgress.get() < 0.9
                  ? Math.min(((scrollYProgress.get() - 0.5) / 0.1) * 0.8, 0.8)
                  : scrollYProgress.get() >= 0.9
                    ? Math.max(
                        0.8 - ((scrollYProgress.get() - 0.9) / 0.1) * 0.8,
                        0,
                      )
                    : 0
                : 0,
            }}
            transition={{ duration: 0.5 }}
            data-oid="s384:hr"
          />

          <motion.path
            d="M450,350 C500,320 600,320 650,350"
            stroke="#F0A500"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: isInView
                ? scrollYProgress.get() > 0.6
                  ? Math.min((scrollYProgress.get() - 0.6) / 0.1, 1)
                  : 0
                : 0,
              opacity: isInView
                ? scrollYProgress.get() > 0.6 && scrollYProgress.get() < 0.9
                  ? Math.min(((scrollYProgress.get() - 0.6) / 0.1) * 0.8, 0.8)
                  : scrollYProgress.get() >= 0.9
                    ? Math.max(
                        0.8 - ((scrollYProgress.get() - 0.9) / 0.1) * 0.8,
                        0,
                      )
                    : 0
                : 0,
            }}
            transition={{ duration: 0.5 }}
            data-oid="1rokixo"
          />

          {/* Arrow marker definition */}
          <defs data-oid="okylwkn">
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
              data-oid="sy8psuk"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#F0A500"
                data-oid="13sggx4"
              />
            </marker>
          </defs>

          {/* Exit pathway to next section */}
          <motion.path
            d="M800,350 C850,400 900,450 950,400"
            stroke="#123B79"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: exitPathProgress,
            }}
            transition={{ duration: 0.5 }}
            data-oid="5tl:.d_"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="08uemt.">
        <motion.div
          className="text-center mb-16"
          style={{ opacity: headerOpacity, y: headerY }}
          data-oid="dv.cz2l"
        >
          <h2
            className="text-4xl font-bold text-[#794B12] mb-4"
            data-oid="4r6da9j"
          >
            HDB Upgrader & Strategist Path
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid=":fzgmq_"
          >
            For HDB owners or upgraders aiming to move to condos or optimize
            their property journey
          </p>
          <div
            className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid="1tm66wj"
          ></div>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-oid="e_wwkn5">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="p9s:6mq"
          >
            <h3
              className="text-2xl font-bold text-[#794B12] mb-4"
              data-oid="ncoed5w"
            >
              Strategic Optimization
            </h3>
            <p className="text-gray-700 mb-6" data-oid="ssqqak5">
              The HDB Upgrader & Strategist Path guides you through making
              strategic decisions to optimize your property journey. Whether
              you're starting with your first HDB flat or planning to upgrade to
              a condominium, this learning path helps you navigate the complex
              choices and transitions in Singapore's property market.
            </p>
            <p className="text-gray-700 mb-6" data-oid="3e78wk-">
              Through courses covering common mistakes to avoid, upgrading
              secrets, comparative analysis between property types, and
              investment maximization strategies, you'll develop the strategic
              thinking needed to make optimal decisions at each stage of your
              property ownership journey.
            </p>
            <div className="flex justify-center mt-8" data-oid="k2uk3gk">
              <Button
                className="bg-[#794B12] hover:bg-[#5A380D] text-white"
                data-oid="tl80kxc"
              >
                Explore This Path
                <ArrowRight className="ml-2 h-4 w-4" data-oid="_6t021x" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
