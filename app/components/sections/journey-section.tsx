"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Award,
  Lightbulb,
  Target,
  TrendingUp,
  Star,
} from "lucide-react";

export default function JourneySection() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [pathProgress, setPathProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !svgRef.current) return;

    // Handle scroll for path animation
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate how much of the section is visible
      let sectionScrollPercentage = 0;

      // Start animation when the section is 20% into the viewport
      const triggerPoint = sectionTop - windowHeight * 0.8;

      if (scrollPosition > triggerPoint) {
        // Calculate progress based on how far we've scrolled past the trigger point
        const scrollableDistance = sectionHeight * 0.9;
        sectionScrollPercentage = Math.min(
          1,
          (scrollPosition - triggerPoint) / scrollableDistance,
        );
        setPathProgress(sectionScrollPercentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate positions for milestones around a circle
  const getMilestonePosition = (index, total, radius) => {
    // Start from the bottom left (225 degrees) and go counter-clockwise to top right (45 degrees)
    // This creates an upward journey path
    const startAngle = 225;
    const endAngle = 45;
    const angleRange = (endAngle - startAngle + 360) % 360;

    const angle = startAngle + (angleRange * index) / (total - 1);
    const radians = (angle * Math.PI) / 180;

    const x = 400 + radius * Math.cos(radians);
    const y = 400 + radius * Math.sin(radians);

    return { x, y, angle };
  };

  // Define milestones
  const milestones = [
    {
      name: "Awareness",
      description: "Discover the fundamentals",
      icon: <BookOpen className="h-8 w-8" data-oid="r39i2ix" />,
    },
    {
      name: "Foundation",
      description: "Build your knowledge base",
      icon: <Lightbulb className="h-8 w-8" data-oid="6enu2ww" />,
    },
    {
      name: "Application",
      description: "Apply concepts to real scenarios",
      icon: <Target className="h-8 w-8" data-oid="3iie2ak" />,
    },
    {
      name: "Mastery",
      description: "Develop advanced expertise",
      icon: <TrendingUp className="h-8 w-8" data-oid="lgotvml" />,
    },
    {
      name: "Leadership",
      description: "Become an industry authority",
      icon: <Award className="h-8 w-8" data-oid="c6-a1e3" />,
    },
    {
      name: "Innovation",
      description: "Create new approaches",
      icon: <Star className="h-8 w-8" data-oid="qtn15w2" />,
    },
  ];

  // Generate path points
  const pathPoints = [];
  const totalMilestones = milestones.length;
  const radius = 280; // Increased radius for larger animation

  for (let i = 0; i < totalMilestones; i++) {
    const pos = getMilestonePosition(i, totalMilestones, radius);
    pathPoints.push(pos);
  }

  // Create SVG path
  let pathD = `M ${pathPoints[0].x} ${pathPoints[0].y}`;

  for (let i = 1; i < pathPoints.length; i++) {
    const prevPoint = pathPoints[i - 1];
    const currentPoint = pathPoints[i];

    // Create a curved path between points
    const controlX1 = prevPoint.x + (currentPoint.x - prevPoint.x) * 0.5;
    const controlY1 = prevPoint.y;
    const controlX2 = currentPoint.x - (currentPoint.x - prevPoint.x) * 0.5;
    const controlY2 = currentPoint.y;

    pathD += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${currentPoint.x} ${currentPoint.y}`;
  }

  // Custom positioning adjustments for text boxes to ensure consistent spacing
  const textPositionAdjustments = [
    { x: -20, y: 30 }, // Awareness
    { x: -20, y: -30 }, // Foundation
    { x: 20, y: -30 }, // Application
    { x: 20, y: 30 }, // Mastery
    { x: -20, y: 30 }, // Leadership
    { x: 20, y: 30 }, // Innovation
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gray-900 text-white min-h-[100vh]"
      data-oid="1i6nfew"
    >
      <div className="container mx-auto px-4" data-oid="dez03xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-oid="6l135zc"
        >
          <h2 className="text-5xl font-bold" data-oid="y.vgx_b">
            The Learning Journey
          </h2>
          <p
            className="text-2xl text-gray-300 mt-4 max-w-3xl mx-auto"
            data-oid="iehxnuw"
          >
            Visualize your path to becoming a real estate expert in Singapore
          </p>
          <div
            className="w-24 h-1 bg-orange-500 mx-auto mt-6"
            data-oid="ku3:cpf"
          ></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto" data-oid="zwa.3_o">
          {/* SVG Path */}
          <svg
            ref={svgRef}
            className="w-full h-[900px]"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="jwh0ame"
          >
            {/* Background circles */}
            <circle
              cx="400"
              cy="400"
              r="340"
              fill="rgba(249, 115, 22, 0.05)"
              data-oid="3y.yz1:"
            />

            <circle
              cx="400"
              cy="400"
              r="320"
              stroke="rgba(249, 115, 22, 0.1)"
              strokeWidth="1"
              fill="none"
              data-oid="gy5to:s"
            />

            <circle
              cx="400"
              cy="400"
              r="360"
              stroke="rgba(249, 115, 22, 0.1)"
              strokeWidth="1"
              fill="none"
              data-oid="m9qr:6p"
            />

            {/* Tick marks around the circle */}
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = (i * 6 * Math.PI) / 180;
              const r1 = 360;
              const r2 = i % 5 === 0 ? 350 : 355;
              return (
                <line
                  key={i}
                  x1={400 + r1 * Math.cos(angle)}
                  y1={400 + r1 * Math.sin(angle)}
                  x2={400 + r2 * Math.cos(angle)}
                  y2={400 + r2 * Math.sin(angle)}
                  stroke={
                    i % 5 === 0
                      ? "rgba(249, 115, 22, 0.4)"
                      : "rgba(249, 115, 22, 0.2)"
                  }
                  strokeWidth={i % 5 === 0 ? 2 : 1}
                  data-oid="p19wq.t"
                />
              );
            })}

            {/* Rotating outer circle */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
              data-oid="c6.muof"
            >
              <circle
                cx="400"
                cy="400"
                r="380"
                stroke="rgba(249, 115, 22, 0.2)"
                strokeWidth="12"
                strokeDasharray="5 10"
                fill="none"
                data-oid="z7bepbn"
              />

              {/* Colored segments on the circle */}
              <path
                d="M 400 20 A 380 380 0 0 1 710 260"
                stroke="#f97316"
                strokeWidth="12"
                fill="none"
                data-oid="bs6.rk6"
              />

              <path
                d="M 710 540 A 380 380 0 0 1 400 780"
                stroke="#84cc16"
                strokeWidth="12"
                fill="none"
                data-oid="-cz3z3e"
              />
            </motion.g>

            {/* Center point */}
            <motion.circle
              className="journey-center"
              cx="400"
              cy="400"
              r="60"
              fill="rgba(249, 115, 22, 0.7)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              data-oid="3du2dd:"
            />

            <text
              x="400"
              y="408"
              textAnchor="middle"
              fill="white"
              fontWeight="bold"
              fontSize="20"
              data-oid="48w:c:h"
            >
              YOU
            </text>

            {/* Journey path */}
            <motion.path
              className="journey-path"
              d={pathD}
              stroke="#f97316"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: pathProgress }}
              transition={{ duration: 0.5 }}
              data-oid="xcglw6b"
            />

            {/* Milestones */}
            {milestones.map((milestone, index) => {
              const pos = getMilestonePosition(
                index,
                milestones.length,
                radius,
              );
              const shouldShow = pathProgress > index / (milestones.length - 1);

              return (
                <g key={index} data-oid="vcsun2c">
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="30"
                    fill="#f97316"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      shouldShow
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    data-oid="9:3bz:2"
                  />

                  <motion.foreignObject
                    x={pos.x - 16}
                    y={pos.y - 16}
                    width="32"
                    height="32"
                    initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    animate={
                      shouldShow
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0.5, rotate: 45 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    data-oid="4gizp5y"
                  >
                    <div
                      className="flex items-center justify-center text-white"
                      data-oid="k_lefod"
                    >
                      {milestone.icon}
                    </div>
                  </motion.foreignObject>
                </g>
              );
            })}
          </svg>

          {/* Milestone Text */}
          {milestones.map((milestone, index) => {
            const pos = getMilestonePosition(index, milestones.length, radius);
            const isLeft = pos.x < 400;
            const shouldShow = pathProgress > index / (milestones.length - 1);

            // Position text boxes outside the circle with custom adjustments to prevent overlap
            const adjustment = textPositionAdjustments[index];
            const textX = pos.x + (isLeft ? -180 : 40) + adjustment.x;
            const textY = pos.y - 40 + adjustment.y;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{ top: `${textY}px`, left: `${textX}px` }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                data-oid="uausb97"
              >
                <div
                  className={`bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 w-64 text-center`}
                  data-oid="erx9k07"
                >
                  <h4
                    className="font-bold text-orange-500 text-xl mb-1"
                    data-oid="umifdli"
                  >
                    {milestone.name}
                  </h4>
                  <p className="text-gray-300 text-base" data-oid="8nxo2f6">
                    {milestone.description}
                  </p>
                </div>
                <div
                  className={`w-4 h-4 bg-gray-800 border border-gray-700 transform rotate-45 absolute ${isLeft ? "-right-2" : "-left-2"} top-1/2`}
                  data-oid="xp3:::b"
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
