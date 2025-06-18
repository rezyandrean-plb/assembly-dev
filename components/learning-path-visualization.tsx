"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PathNode {
  x: number;
  y: number;
  color: string;
  size: number;
  label?: string;
}

interface LearningPath {
  title: string;
  description: string;
  color: string;
  iconClassName: string;
  courses: number;
  nodes: PathNode[];
}

export default function LearningPathVisualization() {
  const paths: LearningPath[] = [
    {
      title: "Beginner Property Investor",
      description:
        "Build a strong foundation in property investment and understand the Singapore market",
      color: "#123B79",
      iconClassName: "h-8 w-8 text-white",
      courses: 4,
      nodes: [
        { x: 0.1, y: 0.5, color: "#123B79", size: 8, label: "Start" },
        { x: 0.3, y: 0.3, color: "#123B79", size: 6 },
        { x: 0.5, y: 0.5, color: "#123B79", size: 6 },
        { x: 0.7, y: 0.3, color: "#123B79", size: 6 },
        { x: 0.9, y: 0.5, color: "#123B79", size: 8, label: "Expert" },
      ],
    },
    {
      title: "HDB Upgrader & Strategist",
      description:
        "For HDB owners or upgraders aiming to move to condos or optimize their property journey",
      color: "#794B12",
      iconClassName: "h-8 w-8 text-white",
      courses: 5,
      nodes: [
        { x: 0.1, y: 0.5, color: "#794B12", size: 8, label: "Start" },
        { x: 0.3, y: 0.7, color: "#794B12", size: 6 },
        { x: 0.5, y: 0.3, color: "#794B12", size: 6 },
        { x: 0.7, y: 0.7, color: "#794B12", size: 6 },
        { x: 0.9, y: 0.5, color: "#794B12", size: 8, label: "Expert" },
      ],
    },
    {
      title: "Condo Investment Specialist",
      description:
        "Master the art of investing in condominiums, from selection to portfolio building",
      color: "#79123B",
      iconClassName: "h-8 w-8 text-white",
      courses: 6,
      nodes: [
        { x: 0.1, y: 0.5, color: "#79123B", size: 8, label: "Start" },
        { x: 0.3, y: 0.3, color: "#79123B", size: 6 },
        { x: 0.5, y: 0.5, color: "#79123B", size: 6 },
        { x: 0.7, y: 0.3, color: "#79123B", size: 6 },
        { x: 0.9, y: 0.5, color: "#79123B", size: 8, label: "Expert" },
      ],
    },
  ];

  return (
    <div className="py-16" data-oid="yn7heh4">
      <div className="container mx-auto px-4" data-oid="v1hzrhv">
        <div className="text-center mb-16" data-oid="s6x2mt:">
          <h2
            className="text-3xl font-bold text-[#123B79] mb-4"
            data-oid="ur20cfc"
          >
            Learning Paths
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto" data-oid="du7kwdr">
            Structured course sequences designed to guide you from beginner to
            expert in specific areas
          </p>
          <div
            className="w-16 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid="2jz9cqd"
          ></div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="dw7_f0a"
        >
          {paths.map((path, index) => (
            <PathCard
              key={index}
              path={path}
              index={index}
              data-oid="f.8ohds"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PathCard({ path, index }: { path: LearningPath; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Generate path string from nodes
  const generatePath = () => {
    if (path.nodes.length < 2) return "";

    const width = svgRef.current?.width.baseVal.value || 300;
    const height = svgRef.current?.height.baseVal.value || 80;

    let pathString = `M${path.nodes[0].x * width},${path.nodes[0].y * height}`;

    for (let i = 1; i < path.nodes.length; i++) {
      pathString += ` L${path.nodes[i].x * width},${path.nodes[i].y * height}`;
    }

    return pathString;
  };

  // Different animation variants based on path type
  const getAnimationVariants = () => {
    // Beginner Property Investor - Foundation Building Animation
    if (index === 0) {
      return {
        pathAnimation: {
          pathLength: [0, 1],
          transition: { duration: 1.5, ease: "easeInOut" },
        },
        nodeAnimation: (i: number) => ({
          scale: [0, 1.2, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.5,
            delay: 0.2 * i,
            type: "spring",
            stiffness: 200,
          },
        }),
        specialEffect: isHovered && (
          <motion.rect
            x="0"
            y="60"
            width="100%"
            height="20"
            fill={path.color}
            opacity="0.1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
            data-oid="y7:ac-a"
          />
        ),
      };
    }

    // HDB Upgrader & Strategist - Step-by-Step Progression
    if (index === 1) {
      return {
        pathAnimation: {
          pathLength: [0, 1],
          pathOffset: [0, 0],
          transition: { duration: 2, ease: "easeOut" },
        },
        nodeAnimation: (i: number) => ({
          scale: [0, 1],
          opacity: [0, 1],
          y: [10, 0],
          transition: {
            duration: 0.4,
            delay: 0.3 * i,
            type: "spring",
          },
        }),
        specialEffect:
          isHovered &&
          path.nodes.map((_, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={path.nodes[i].x * 300}
              cy={path.nodes[i].y * 80}
              r={path.nodes[i].size + 5}
              fill="transparent"
              stroke={path.color}
              strokeWidth="1"
              opacity="0.5"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              data-oid="-kkw:pv"
            />
          )),
      };
    }

    // Condo Investment Specialist - Network Building Animation
    if (index === 2) {
      return {
        pathAnimation: {
          pathLength: [0, 1],
          transition: { duration: 1.5, ease: "easeInOut" },
        },
        nodeAnimation: (i: number) => ({
          scale: [0, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.5,
            delay: 0.15 * i,
          },
        }),
        specialEffect: isHovered && (
          <>
            {/* Additional connection lines between nodes */}
            {path.nodes.length > 3 && (
              <>
                <motion.line
                  x1={path.nodes[0].x * 300}
                  y1={path.nodes[0].y * 80}
                  x2={path.nodes[2].x * 300}
                  y2={path.nodes[2].y * 80}
                  stroke={path.color}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  data-oid="jto6u.8"
                />

                <motion.line
                  x1={path.nodes[1].x * 300}
                  y1={path.nodes[1].y * 80}
                  x2={path.nodes[3].x * 300}
                  y2={path.nodes[3].y * 80}
                  stroke={path.color}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  data-oid="851_:zi"
                />

                <motion.line
                  x1={path.nodes[2].x * 300}
                  y1={path.nodes[2].y * 80}
                  x2={path.nodes[4].x * 300}
                  y2={path.nodes[4].y * 80}
                  stroke={path.color}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  data-oid="_scide4"
                />
              </>
            )}
          </>
        ),
      };
    }

    // Default animation
    return {
      pathAnimation: {
        pathLength: [0, 1],
        transition: { duration: 1.5, ease: "easeInOut" },
      },
      nodeAnimation: (i: number) => ({
        scale: [0, 1],
        opacity: [0, 1],
        transition: { duration: 0.5, delay: 0.2 * i },
      }),
      specialEffect: null,
    };
  };

  const animations = getAnimationVariants();

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-oid="k2q90ua"
    >
      <div
        className="h-3"
        style={{ backgroundColor: path.color }}
        data-oid="gu-5rad"
      ></div>
      <div className="p-6" data-oid="x-xbvi4">
        <div
          className="rounded-full w-14 h-14 flex items-center justify-center mb-4"
          style={{ backgroundColor: path.color }}
          data-oid="_91l4qm"
        >
          {index === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              data-oid="9mb_:33"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                data-oid="vtb62sd"
              />
              <path d="M9 3v18" data-oid="0onc33l" />
              <path d="M14 8h.01" data-oid="b:eph_:" />
              <path d="M14 12h.01" data-oid="h6f0d79" />
              <path d="M14 16h.01" data-oid=".vfepyr" />
            </svg>
          ) : index === 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              data-oid="a1p7bp2"
            >
              <path d="M2 12h6" data-oid="n1wgo-f" />
              <path d="M22 12h-6" data-oid="rx2hmxv" />
              <path d="M12 2v2" data-oid="mhly3m-" />
              <path d="M12 8v2" data-oid="yy4d1w4" />
              <path d="M12 14v2" data-oid="7q-zy7." />
              <path d="M12 20v2" data-oid="ikct.a8" />
              <path d="M19 9l-7 3-7-3" data-oid="z68hrw1" />
              <path d="M19 15l-7-3-7 3" data-oid="80pcg_m" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              data-oid="8t:c..q"
            >
              <path
                d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                data-oid="sn3p78f"
              />
            </svg>
          )}
        </div>
        <h3
          className="text-xl font-bold mb-3"
          style={{ color: path.color }}
          data-oid="57oivoh"
        >
          {path.title}
        </h3>
        <p className="text-gray-600 mb-6" data-oid="tgt9l2w">
          {path.description}
        </p>

        {/* Path Visualization */}
        <div className="mb-6 h-20 relative" data-oid="23at71e">
          <svg
            ref={svgRef}
            width="300"
            height="80"
            viewBox="0 0 300 80"
            data-oid="c6l4z.t"
          >
            {/* Special background effects */}
            {animations.specialEffect}

            {/* Path line */}
            <motion.path
              d={generatePath()}
              fill="none"
              stroke={path.color}
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={isInView ? animations.pathAnimation : {}}
              data-oid="003v9o_"
            />

            {/* Nodes */}
            {path.nodes.map((node, i) => (
              <g key={i} data-oid="wdq7dee">
                <motion.circle
                  cx={node.x * 300}
                  cy={node.y * 80}
                  r={node.size}
                  fill={node.color}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? animations.nodeAnimation(i) : {}}
                  data-oid="0v95-f:"
                />

                {node.label && (
                  <text
                    x={node.x * 300}
                    y={node.y * 80 + 20}
                    textAnchor="middle"
                    fill="#666"
                    fontSize="12"
                    data-oid="-3m38_v"
                  >
                    {node.label}
                  </text>
                )}
              </g>
            ))}

            {/* Moving particle along the path for hover effect */}
            {isHovered && (
              <motion.circle
                r="4"
                fill={path.color}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  offsetPath: `path("${generatePath()}")`,
                }}
                animate={{
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
                data-oid="3kw9xhg"
              />
            )}
          </svg>
        </div>

        <div className="flex justify-between items-center" data-oid="qkeuq4_">
          <span className="text-sm text-gray-500" data-oid="k6j014h">
            {path.courses} courses
          </span>
          <Link
            href={`/learning-paths/${path.title.toLowerCase().replace(/\s+/g, "-")}`}
            data-oid="se_g:mc"
          >
            <Button
              variant="outline"
              className="text-sm"
              style={{ borderColor: path.color, color: path.color }}
              data-oid="pn:m1zj"
            >
              View Path
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
