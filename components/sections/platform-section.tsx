"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNetwork } from "@/context/network-context";
import { Compass, Map, Navigation } from "lucide-react";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { networkState } = useNetwork();
  const [activeFeature, setActiveFeature] = useState(-1);

  // Transform values based on scroll
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [50, 0, 0, -50],
  );

  // Update active feature based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;

      // Calculate relative position within the section (0 to 1)
      const relativePosition = Math.min(
        Math.max((window.innerHeight - sectionTop) / sectionHeight, 0),
        1,
      );

      // Set active feature based on scroll position
      if (relativePosition < 0.4) {
        setActiveFeature(-1); // No feature active yet
      } else if (relativePosition < 0.6) {
        setActiveFeature(0); // First feature
      } else if (relativePosition < 0.8) {
        setActiveFeature(1); // Second feature
      } else {
        setActiveFeature(2); // Third feature
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: <Compass className="h-8 w-8 text-[#123B79]" data-oid="f5tdt:u" />,
      title: "Navigate Complexity",
      description:
        "Find your way through Singapore's intricate real estate landscape with expert guidance.",
    },
    {
      icon: <Map className="h-8 w-8 text-[#123B79]" data-oid="rtk7fqh" />,
      title: "Map Your Journey",
      description:
        "Visualize your path to success with our structured learning approach.",
    },
    {
      icon: (
        <Navigation className="h-8 w-8 text-[#123B79]" data-oid="hf-xwv4" />
      ),

      title: "Connect the Dots",
      description:
        "Discover how real estate, finance, and learning interconnect to create opportunities.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden min-h-screen"
      data-oid="3lyznxh"
    >
      <div
        className="absolute inset-0 bg-white/30 z-[1]"
        data-oid="xtl72:f"
      ></div>
      {/* Dynamic Network Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        data-oid="_gjd.kr"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          data-oid="b0of8pc"
        >
          {/* Base network - complex background */}
          {[...Array(30)].map((_, i) => (
            <motion.path
              key={`base-path-${i}`}
              d={`M${Math.random() * 1000},${Math.random() * 1000} C${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000}`}
              stroke="#AAAAAA"
              strokeWidth="1"
              strokeOpacity="0.16"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isInView ? 1 : 0,
                opacity: isInView ? 0.18 : 0,
              }}
              transition={{ duration: 1.5, delay: i * 0.05 }}
              data-oid="8lo5vmu"
            />
          ))}

          {/* Feature 1: Navigate Complexity - Highlighted Pathways */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeFeature >= 0 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            data-oid="7vtj0b8"
          >
            <motion.path
              d="M100,500 C250,400 400,550 600,450 S800,500 900,400"
              stroke="#123B79"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: activeFeature >= 0 ? 1 : 0,
                opacity: activeFeature >= 0 ? 0.8 : 0,
              }}
              transition={{ duration: 1.5, delay: 0.3 }}
              data-oid="1yz:.ia"
            />

            {/* Glowing effect for the path */}
            <motion.path
              d="M100,500 C250,400 400,550 600,450 S800,500 900,400"
              stroke="#123B79"
              strokeWidth="6"
              strokeLinecap="round"
              strokeOpacity="0.27"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: activeFeature >= 0 ? 1 : 0,
                opacity: activeFeature >= 0 ? [0.08, 0.24, 0.08] : 0,
              }}
              transition={{
                pathLength: { duration: 1.5, delay: 0.3 },
                opacity: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
              data-oid="w8y2zdn"
            />

            {/* Particles flowing along the path */}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={`particle-${i}`}
                r="4"
                fill="#F0A500"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeFeature >= 0 ? [0, 1, 0] : 0,
                  pathOffset: activeFeature >= 0 ? [0, 1] : 0,
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.6,
                }}
                style={{
                  offsetPath:
                    "path('M100,500 C250,400 400,550 600,450 S800,500 900,400')",
                }}
                data-oid="w-_fof3"
              />
            ))}
          </motion.g>

          {/* Feature 2: Map Your Journey - Map Structure */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeFeature >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            data-oid=":_1dkyf"
          >
            {/* Map nodes */}
            {[
              { cx: 200, cy: 600, r: 8 },
              { cx: 350, cy: 550, r: 6 },
              { cx: 500, cy: 650, r: 8 },
              { cx: 650, cy: 600, r: 6 },
              { cx: 800, cy: 550, r: 8 },
            ].map((node, i) => (
              <motion.circle
                key={`map-node-${i}`}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="#79123B"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: activeFeature >= 1 ? 1 : 0,
                  opacity: activeFeature >= 1 ? 0.8 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                data-oid="yi8_pik"
              />
            ))}

            {/* Map connections */}
            <motion.path
              d="M200,600 L350,550 L500,650 L650,600 L800,550"
              stroke="#F0A500"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: activeFeature >= 1 ? 1 : 0,
                opacity: activeFeature >= 1 ? 0.57 : 0,
              }}
              transition={{ duration: 1.8, delay: 0.7 }}
              data-oid="ju5fd0k"
            />

            {/* "You are here" indicator */}
            <motion.circle
              cx="200"
              cy="600"
              r="12"
              fill="none"
              stroke="#F0A500"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: activeFeature >= 1 ? [1, 1.2, 1] : 0,
                opacity: activeFeature >= 1 ? 0.8 : 0,
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              data-oid="wflhs12"
            />
          </motion.g>

          {/* Feature 3: Connect the Dots - New Connections */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeFeature >= 2 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            data-oid="vof5s8e"
          >
            {/* Additional nodes */}
            {[
              { cx: 250, cy: 700, r: 5 },
              { cx: 400, cy: 500, r: 5 },
              { cx: 550, cy: 750, r: 5 },
              { cx: 700, cy: 500, r: 5 },
              { cx: 850, cy: 700, r: 5 },
            ].map((node, i) => (
              <motion.circle
                key={`connect-node-${i}`}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="#794B12"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: activeFeature >= 2 ? 1 : 0,
                  opacity: activeFeature >= 2 ? 0.8 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                data-oid="8i8ujrp"
              />
            ))}

            {/* New connections */}
            {[
              "M200,600 L250,700",
              "M350,550 L400,500",
              "M500,650 L550,750",
              "M650,600 L700,500",
              "M800,550 L850,700",
            ].map((path, i) => (
              <motion.path
                key={`connect-path-${i}`}
                d={path}
                stroke="#79123B"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: activeFeature >= 2 ? 1 : 0,
                  opacity: activeFeature >= 2 ? 0.7 : 0,
                }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                data-oid="c09q924"
              />
            ))}

            {/* Cross connections */}
            {[
              "M250,700 C300,650 350,600 400,500",
              "M400,500 C450,600 500,700 550,750",
              "M550,750 C600,650 650,550 700,500",
              "M700,500 C750,600 800,700 850,700",
            ].map((path, i) => (
              <motion.path
                key={`cross-path-${i}`}
                d={path}
                stroke="#F0A500"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: activeFeature >= 2 ? 1 : 0,
                  opacity: activeFeature >= 2 ? 0.49 : 0,
                }}
                transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                data-oid="ao0f0xh"
              />
            ))}

            {/* Pulsing nodes */}
            {[
              { cx: 250, cy: 700 },
              { cx: 550, cy: 750 },
              { cx: 850, cy: 700 },
            ].map((node, i) => (
              <motion.circle
                key={`pulse-node-${i}`}
                cx={node.cx}
                cy={node.cy}
                r="8"
                fill="#F0A500"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: activeFeature >= 2 ? [1, 1.3, 1] : 0,
                  opacity: activeFeature >= 2 ? [0.7, 0.9, 0.7] : 0,
                }}
                transition={{
                  duration: 2,
                  delay: 1 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                data-oid="5cl-:0f"
              />
            ))}
          </motion.g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20" data-oid="wlu85n3">
        <motion.div
          className="text-center mb-16"
          style={{ opacity: contentOpacity, y: contentY }}
          data-oid="v99vopv"
        >
          <h2
            className="text-4xl font-bold text-[#123B79] mb-4"
            data-oid="6:pyjui"
          >
            Your Platform for Mastery
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="b7a8uye"
          >
            Assembly guides you through the interwoven network of opportunity in
            Singapore's real estate ecosystem
          </p>
          <div
            className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid=":j-hazh"
          ></div>
        </motion.div>

        <div className="flex flex-col items-center gap-12" data-oid="tsym94_">
          <motion.div
            className="w-full max-w-3xl"
            style={{ opacity: contentOpacity, y: contentY }}
            data-oid="ion_qk."
          >
            <h3
              className="text-3xl font-bold text-[#123B79] mb-6 text-center"
              data-oid="px0-tu2"
            >
              Navigating the Network
            </h3>
            <p
              className="text-lg text-gray-700 mb-12 text-center"
              data-oid="5r9vtk9"
            >
              In today's complex real estate landscape, success comes from
              understanding the interconnected nature of property, finance, and
              continuous learning. Assembly provides the tools, knowledge, and
              community to help you navigate this network with confidence.
            </p>

            <div className="space-y-16" data-oid=".wo8gky">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm ${activeFeature === index ? "opacity-100" : "opacity-80"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? (activeFeature >= index ? 1 : 0.8) : 0,
                    y: isInView ? 0 : 20,
                    scale: activeFeature === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  data-oid="fbcyoc:"
                >
                  <motion.div
                    className="p-5 bg-[#F0A500]/10 rounded-full"
                    animate={{
                      boxShadow:
                        activeFeature === index
                          ? [
                              "0 0 0 rgba(240, 165, 0, 0)",
                              "0 0 20px rgba(240, 165, 0, 0.5)",
                              "0 0 0 rgba(240, 165, 0, 0)",
                            ]
                          : "none",
                    }}
                    transition={{
                      duration: 2,
                      repeat:
                        activeFeature === index ? Number.POSITIVE_INFINITY : 0,
                    }}
                    data-oid="ma4-sn9"
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="text-center md:text-left" data-oid="-:rr7c5">
                    <h4
                      className="text-2xl font-semibold text-[#123B79] mb-2"
                      data-oid="rw4ot:4"
                    >
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 max-w-xl" data-oid="qh4bjkp">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
