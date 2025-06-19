"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CondoPathSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // State to store transformed values
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [headerY, setHeaderY] = useState(50);
  const [pathProgress, setPathProgress] = useState(0);
  const [clusterProgress, setClusterProgress] = useState(0);
  const [exitPathProgress, setExitPathProgress] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      const progress = scrollYProgress.get();

      // Header animations
      if (progress >= 0.1 && progress <= 0.9) {
        setHeaderOpacity(1);
        setHeaderY(0);
      } else if (progress > 0.9) {
        setHeaderOpacity(0);
        setHeaderY(-50);
      } else {
        setHeaderOpacity(0);
        setHeaderY(50);
      }

      // Path progress
      if (progress >= 0.1 && progress <= 0.3) {
        setPathProgress((progress - 0.1) / 0.2);
      } else if (progress > 0.3) {
        setPathProgress(1);
      } else {
        setPathProgress(0);
      }

      // Cluster progress
      if (progress >= 0.3 && progress <= 0.7) {
        setClusterProgress((progress - 0.3) / 0.4);
      } else if (progress > 0.7) {
        setClusterProgress(1);
      } else {
        setClusterProgress(0);
      }

      // Exit path progress
      if (progress >= 0.7 && progress <= 0.9) {
        setExitPathProgress((progress - 0.7) / 0.2);
      } else if (progress > 0.9) {
        setExitPathProgress(1);
      } else {
        setExitPathProgress(0);
      }
    };

    const unsubscribe = scrollYProgress.onChange(updateValues);
    updateValues(); // Initial call

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Specialized condo market segments
  const segments = [
    { label: "Luxury", x: 500, y: 350, size: 60, delay: 0.1 },
    { label: "Mid-tier", x: 600, y: 450, size: 70, delay: 0.2 },
    { label: "Entry-level", x: 450, y: 500, size: 50, delay: 0.3 },
    { label: "Integrated", x: 550, y: 550, size: 55, delay: 0.4 },
    { label: "Waterfront", x: 650, y: 350, size: 45, delay: 0.5 },
  ];

  // Connection lines between segments
  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 4 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 3, to: 4 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden min-h-screen"
      data-oid="7jiw3-2"
    >
      {/* Network Path Animation */}
      <div className="absolute inset-0 pointer-events-none" data-oid="-pgcl:d">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          data-oid="ig512m6"
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
                data-oid="veqg4fn"
              />
            ))}

          {/* Entry pathway from previous section */}
          <motion.path
            d="M50,500 C150,500 250,450 350,450"
            stroke="#123B79"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathProgress }}
            transition={{ duration: 0.5 }}
            data-oid="1j7gjg_"
          />

          {/* Specialized cluster - central node */}
          <motion.circle
            cx="500"
            cy="450"
            r="15"
            fill="#79123B"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: clusterProgress >= 0.1 ? 1 : 0,
              opacity: clusterProgress >= 0.1 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            data-oid="t9msuj7"
          />

          {/* Specialized cluster - segment nodes */}
          {segments.map((segment, index) => {
            const segmentStart = 0.1 + index * 0.05;
            const segmentEnd = 0.2 + index * 0.05;
            const labelStart = 0.2 + index * 0.05;
            const labelEnd = 0.3 + index * 0.05;

            return (
              <motion.g key={`segment-${index}`} data-oid="r:omsk3">
                {/* Segment circle */}
                <motion.circle
                  cx={segment.x}
                  cy={segment.y}
                  r={segment.size / 4}
                  fill="#79123B"
                  fillOpacity="0.7"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: clusterProgress >= segmentStart ? 1 : 0,
                    opacity: clusterProgress >= segmentStart ? 0.63 : 0,
                  }}
                  transition={{ duration: 0.5, delay: segment.delay }}
                  data-oid="z:371_-"
                />

                {/* Segment label */}
                <motion.text
                  x={segment.x}
                  y={segment.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#333333"
                  fontSize="12"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      clusterProgress >= labelStart && clusterProgress <= 0.8
                        ? 1
                        : clusterProgress > 0.8 && clusterProgress <= 0.9
                          ? 1
                          : 0,
                  }}
                  transition={{ duration: 0.5, delay: segment.delay + 0.1 }}
                  data-oid="709inzd"
                >
                  {segment.label}
                </motion.text>

                {/* Connection to central node */}
                <motion.line
                  x1="500"
                  y1="450"
                  x2={segment.x}
                  y2={segment.y}
                  stroke="#79123B"
                  strokeWidth="2"
                  strokeOpacity="0.54"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: clusterProgress >= segmentStart ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: segment.delay }}
                  data-oid="cqxjoa0"
                />

                {/* Pulsing effect */}
                <motion.circle
                  cx={segment.x}
                  cy={segment.y}
                  r={segment.size / 3}
                  fill="none"
                  stroke="#F0A500"
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: segment.delay + 0.5,
                  }}
                  style={{
                    opacity: clusterProgress >= labelStart ? 0.3 : 0,
                  }}
                  data-oid="frvvvrm"
                />
              </motion.g>
            );
          })}

          {/* Connections between segments */}
          {connections.map((connection, index) => (
            <motion.line
              key={`connection-${index}`}
              x1={segments[connection.from].x}
              y1={segments[connection.from].y}
              x2={segments[connection.to].x}
              y2={segments[connection.to].y}
              stroke="#F0A500"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              strokeOpacity="0.45"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength:
                  clusterProgress >= 0.4 && clusterProgress <= 0.6
                    ? (clusterProgress - 0.4) / 0.2
                    : clusterProgress > 0.6
                      ? 1
                      : 0,
                opacity: clusterProgress >= 0.4 ? 0.45 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              data-oid="ubjjgfq"
            />
          ))}

          {/* Data flow particles along connections */}
          {connections.map((connection, index) => (
            <motion.circle
              key={`data-particle-${index}`}
              r="3"
              fill="#F0A500"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.65, 0],
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1 + index * 0.5,
              }}
              style={{
                offsetPath: `path('M${segments[connection.from].x},${segments[connection.from].y} L${segments[connection.to].x},${segments[connection.to].y}')`,
                opacity:
                  clusterProgress >= 0.4 && clusterProgress <= 0.6
                    ? ((clusterProgress - 0.4) / 0.2) * 0.45
                    : clusterProgress > 0.6
                      ? 0.45
                      : 0,
              }}
              data-oid="ea-_mm2"
            />
          ))}

          {/* Exit pathway to next section */}
          <motion.path
            d="M650,550 C750,600 850,550 950,600"
            stroke="#79123B"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: exitPathProgress }}
            transition={{ duration: 0.5 }}
            data-oid="k0fb5ff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="vxk3ftl">
        <motion.div
          className="text-center mb-16"
          style={{
            opacity: headerOpacity,
            y: headerY,
          }}
          data-oid="s64-j9g"
        >
          <h2
            className="text-4xl font-bold text-[#79123B] mb-4"
            data-oid="ibz00my"
          >
            Condo Investment Specialist Path
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="4cfok4i"
          >
            Master the art of investing in condominiums, from selection to
            portfolio building
          </p>
          <div
            className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid="ci4:3n6"
          ></div>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-oid=":ru-8w6">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="yn2nqrn"
          >
            <h3
              className="text-2xl font-bold text-[#79123B] mb-4"
              data-oid="gzj-dlj"
            >
              Specialized Market Mastery
            </h3>
            <p className="text-gray-700 mb-6" data-oid=".twm7iw">
              The Condo Investment Specialist Path takes you deep into the
              specialized world of condominium investments in Singapore. This
              focused learning journey helps you develop expertise in analyzing,
              selecting, and building a portfolio of condominium properties
              across different market segments.
            </p>
            <p className="text-gray-700 mb-6" data-oid="8fxf6hv">
              Through advanced courses covering entry price analysis, selection
              frameworks, market comparisons, and portfolio building strategies,
              you'll gain the specialized knowledge needed to make informed
              decisions in this competitive market segment and maximize your
              investment returns.
            </p>
            <div className="flex justify-center mt-8" data-oid="i638p1.">
              <Button
                className="bg-[#79123B] hover:bg-[#5A0E2C] text-white"
                data-oid="21c2bkt"
              >
                Explore This Path
                <ArrowRight className="ml-2 h-4 w-4" data-oid="0c-oobo" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
