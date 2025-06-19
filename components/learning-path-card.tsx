"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PathNode {
  x: number;
  y: number;
}

interface LearningPathCardProps {
  path: {
    id: string;
    title: string;
    description: string;
    color: string;
    iconComponent: React.ReactNode;
    courseCount: number;
    nodes: PathNode[];
  };
  index: number;
}

export default function LearningPathCard({
  path,
  index,
}: LearningPathCardProps) {
  const [isHovered, setIsHovered] = useState(false);
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

  // Get animation variants based on path type
  const getPathAnimation = () => {
    switch (path.id) {
      case "beginner-property-investor":
        return {
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { type: "spring", duration: 1.5, bounce: 0.3 },
              opacity: { duration: 0.5 },
            },
          },
        };
      case "hdb-upgrader-strategist":
        return {
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { type: "tween", duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5 },
            },
          },
        };
      case "condo-investment-specialist":
        return {
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { type: "tween", duration: 1.8, ease: "easeOut" },
              opacity: { duration: 0.5 },
            },
          },
        };
      default:
        return {
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1 },
          },
        };
    }
  };

  // Get node animation variants based on path type
  const getNodeAnimation = (i: number) => {
    const baseDelay = 0.1 * i;

    switch (path.id) {
      case "beginner-property-investor":
        return {
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: baseDelay + 0.3,
            },
          },
        };
      case "hdb-upgrader-strategist":
        return {
          hidden: { scale: 0, opacity: 0, y: 10 },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              delay: baseDelay + 0.5,
            },
          },
        };
      case "condo-investment-specialist":
        return {
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: [0, 1.2, 1],
            opacity: 1,
            transition: {
              duration: 0.6,
              times: [0, 0.6, 1],
              delay: baseDelay + 0.4,
            },
          },
        };
      default:
        return {
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: baseDelay },
          },
        };
    }
  };

  // Special effects for hover state
  const getHoverEffect = () => {
    if (!isHovered) return null;

    switch (path.id) {
      case "beginner-property-investor":
        return (
          <motion.circle
            r="4"
            fill={path.color}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [
                path.nodes[0].x,
                ...path.nodes.slice(1).map((node) => node.x),
              ],

              y: [
                path.nodes[0].y,
                ...path.nodes.slice(1).map((node) => node.y),
              ],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            data-oid="qn1__-d"
          />
        );

      case "hdb-upgrader-strategist":
        return path.nodes.map((node, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={node.x}
            cy={node.y}
            r="8"
            fill="transparent"
            stroke={path.color}
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0.2, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
            data-oid="c075nv9"
          />
        ));
      case "condo-investment-specialist":
        return (
          <>
            {path.nodes.length > 3 && (
              <>
                <motion.line
                  x1={path.nodes[0].x}
                  y1={path.nodes[0].y}
                  x2={path.nodes[2].x}
                  y2={path.nodes[2].y}
                  stroke={path.color}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  data-oid="3tu8fr:"
                />

                <motion.line
                  x1={path.nodes[1].x}
                  y1={path.nodes[1].y}
                  x2={path.nodes[3].x}
                  y2={path.nodes[3].y}
                  stroke={path.color}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  data-oid="mx0:n:u"
                />

                {path.nodes[4] && (
                  <motion.line
                    x1={path.nodes[2].x}
                    y1={path.nodes[2].y}
                    x2={path.nodes[4].x}
                    y2={path.nodes[4].y}
                    stroke={path.color}
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    data-oid="3on6sru"
                  />
                )}
              </>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-oid="1adp-9m"
    >
      <div
        className="h-3"
        style={{ backgroundColor: path.color }}
        data-oid="z2hm3uo"
      ></div>
      <div className="p-6" data-oid="5m:5j5:">
        <div
          className="rounded-full w-14 h-14 flex items-center justify-center mb-4"
          style={{ backgroundColor: path.color }}
          data-oid="pwzya:8"
        >
          {path.iconComponent}
        </div>
        <h3
          className="text-xl font-bold mb-3"
          style={{ color: path.color }}
          data-oid="n1.4.33"
        >
          {path.title}
        </h3>
        <p className="text-gray-600 mb-6" data-oid="q_mx6_3">
          {path.description}
        </p>

        {/* Path Visualization */}
        <div className="mb-6 h-20 relative" data-oid="z_dfd9-">
          <svg
            width="100%"
            height="80"
            viewBox="0 0 300 80"
            preserveAspectRatio="xMidYMid meet"
            data-oid="3wizxoi"
          >
            {/* Path line */}
            <motion.path
              d={generatePathLine(path.nodes)}
              fill="none"
              stroke={path.color}
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.7"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={getPathAnimation()}
              data-oid="_i3b.u."
            />

            {/* Nodes */}
            {path.nodes.map((node, i) => (
              <motion.g
                key={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={getNodeAnimation(i)}
                data-oid="hf:x0cx"
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={i === 0 || i === path.nodes.length - 1 ? 6 : 5}
                  fill={path.color}
                  data-oid="m3zmke4"
                />

                {i === 0 && (
                  <text
                    x={node.x}
                    y={node.y + 20}
                    textAnchor="middle"
                    fill="#666"
                    fontSize="12"
                    data-oid="4ic.hmt"
                  >
                    Start
                  </text>
                )}
                {i === path.nodes.length - 1 && (
                  <text
                    x={node.x}
                    y={node.y + 20}
                    textAnchor="middle"
                    fill="#666"
                    fontSize="12"
                    data-oid="-uuzynl"
                  >
                    Expert
                  </text>
                )}
              </motion.g>
            ))}

            {/* Special hover effects */}
            {getHoverEffect()}
          </svg>
        </div>

        <div className="flex justify-between items-center" data-oid="e19s.lm">
          <span className="text-sm text-gray-500" data-oid="0:mbxyh">
            {path.courseCount} courses
          </span>
          <Link href={`/learning-paths/${path.id}`} data-oid="eebsad:">
            <Button
              variant="outline"
              className="text-sm"
              style={{ borderColor: path.color, color: path.color }}
              data-oid="gonpfo3"
            >
              View Path
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to generate the SVG path line
function generatePathLine(nodes: PathNode[]): string {
  if (nodes.length < 2) return "";

  let pathString = `M${nodes[0].x},${nodes[0].y}`;

  for (let i = 1; i < nodes.length; i++) {
    pathString += ` L${nodes[i].x},${nodes[i].y}`;
  }

  return pathString;
}
