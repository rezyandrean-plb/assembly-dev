"use client"

import { useRef, useMemo } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generatePath(seed: number) {
  const x1 = seededRandom(seed) * 1000
  const y1 = seededRandom(seed + 1) * 1000
  const x2 = seededRandom(seed + 2) * 1000
  const y2 = seededRandom(seed + 3) * 1000
  const x3 = seededRandom(seed + 4) * 1000
  const y3 = seededRandom(seed + 5) * 1000
  const x4 = seededRandom(seed + 6) * 1000
  const y4 = seededRandom(seed + 7) * 1000
  return `M${x1},${y1} C${x2},${y2} ${x3},${y3} ${x4},${y4}`
}

export default function BeginnerPathSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Key concepts that appear along the foundation
  const concepts = useMemo(
    () => [
      { text: "Market Knowledge", delay: 0.1 },
      { text: "Financial Literacy", delay: 0.2 },
      { text: "Risk Assessment", delay: 0.3 },
      { text: "Investment Strategy", delay: 0.4 },
      { text: "Regulatory Understanding", delay: 0.5 },
    ],
    [],
  )

  // Transform values based on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, -50])

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1])
  const foundationProgress = useTransform(scrollYProgress, [0.2, 0.7], [0, 1])

  // Foundation top horizontal
  const foundationTopHorizontalPathLength = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])

  // Exit pathway
  const exitPathwayPathLength = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])

  // Replace the random path generation with seeded paths
  const paths = useMemo(() => 
    Array(20)
      .fill(0)
      .map((_, i) => ({
        d: generatePath(i),
        key: `bg-path-${i}`,
        index: i
      }))
  , [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden min-h-screen">
      {/* Network Path Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Background network elements */}
          {paths.map(({ d, key, index }) => (
            <motion.path
              key={key}
              d={d}
              stroke="#AAAAAA"
              strokeWidth="1"
              strokeOpacity="0.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            />
          ))}

          {/* Main entry pathway */}
          <motion.path
            d="M100,500 C200,450 300,500 400,450"
            stroke="#123B79"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathProgress }}
            transition={{ duration: 0.5 }}
          />

          {/* Foundation structure - horizontal base */}
          <motion.path
            d="M400,450 L800,450"
            stroke="#794B12"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: foundationProgress }}
            transition={{ duration: 0.5 }}
          />

          {/* Foundation structure - vertical supports */}
          {Array(5)
            .fill(0)
            .map((_, i) => {
              const x = 450 + i * 75
              return (
                <motion.path
                  key={`support-${i}`}
                  d={`M${x},450 L${x},350`}
                  stroke="#794B12"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: isInView
                      ? scrollYProgress.get() > 0.2 + i * 0.05
                        ? Math.min((scrollYProgress.get() - (0.2 + i * 0.05)) / 0.05, 1)
                        : 0
                      : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              )
            })}

          {/* Foundation structure - top horizontal */}
          <motion.path
            d="M450,350 L825,350"
            stroke="#794B12"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: foundationTopHorizontalPathLength,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Knowledge blocks being placed on the foundation */}
          {Array(5)
            .fill(0)
            .map((_, i) => {
              const x = 465 + i * 75
              return (
                <motion.rect
                  key={`block-${i}`}
                  x={x - 25}
                  y={300}
                  width="50"
                  height="50"
                  rx="4"
                  fill="#123B79"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{
                    opacity: isInView
                      ? scrollYProgress.get() > 0.45 + i * 0.05
                        ? Math.min((scrollYProgress.get() - (0.45 + i * 0.05)) / 0.05, 0.8)
                        : 0
                      : 0,
                    y: isInView
                      ? scrollYProgress.get() > 0.45 + i * 0.05
                        ? Math.max(-100 + ((scrollYProgress.get() - (0.45 + i * 0.05)) / 0.05) * 100, -100)
                        : -100
                      : -100,
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              )
            })}

          {/* Glowing effect for the foundation */}
          <motion.rect
            x="400"
            y="445"
            width="400"
            height="10"
            fill="#F0A500"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.18, 0.45, 0.18] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{ opacity: useTransform(foundationProgress, [0, 1], [0, 1]) }}
          />

          {/* Particles flowing along the entry path */}
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <motion.circle
                key={`particle-${i}`}
                r="4"
                fill="#F0A500"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? [0, 1, 0] : 0,
                  pathOffset: isInView ? [0, 1] : 0,
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.6,
                }}
                style={{
                  offsetPath: "path('M100,500 C200,450 300,500 400,450')",
                }}
              />
            ))}

          {/* Concept labels */}
          {concepts.map((concept, index) => {
            const x = 465 + index * 75
            return (
              <motion.g key={`concept-${index}`} style={{ originX: 0.5, originY: 0.5 }}>
                <motion.text
                  x={x}
                  y={270}
                  textAnchor="middle"
                  fill="#333333"
                  fontSize="12"
                  fontWeight="bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: isInView
                      ? scrollYProgress.get() > 0.5 + index * 0.05 && scrollYProgress.get() < 0.85
                        ? Math.min((scrollYProgress.get() - (0.5 + index * 0.05)) / 0.05, 1)
                        : scrollYProgress.get() >= 0.85
                          ? Math.max(1 - (scrollYProgress.get() - 0.85) / 0.05, 0)
                          : 0
                      : 0,
                    y: isInView
                      ? scrollYProgress.get() > 0.5 + index * 0.05
                        ? Math.max(-20 + ((scrollYProgress.get() - (0.5 + index * 0.05)) / 0.05) * 20, -20)
                        : -20
                      : -20,
                  }}
                  transition={{ duration: 0.5, delay: concept.delay }}
                >
                  {concept.text}
                </motion.text>
                <motion.line
                  x1={x}
                  y1={280}
                  x2={x}
                  y2={300}
                  stroke="#333333"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{
                    opacity: isInView
                      ? scrollYProgress.get() > 0.5 + index * 0.05 && scrollYProgress.get() < 0.85
                        ? Math.min(((scrollYProgress.get() - (0.5 + index * 0.05)) / 0.05) * 0.6, 0.6)
                        : scrollYProgress.get() >= 0.85
                          ? Math.max(0.6 - ((scrollYProgress.get() - 0.85) / 0.05) * 0.6, 0)
                          : 0
                      : 0,
                    pathLength: isInView
                      ? scrollYProgress.get() > 0.5 + index * 0.05
                        ? Math.min((scrollYProgress.get() - (0.5 + index * 0.05)) / 0.05, 1)
                        : 0
                      : 0,
                  }}
                  transition={{ duration: 0.5, delay: concept.delay }}
                />
              </motion.g>
            )
          })}

          {/* Exit pathway to next section */}
          <motion.path
            d="M800,450 C850,450 900,500 950,500"
            stroke="#123B79"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: exitPathwayPathLength,
            }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" style={{ opacity: headerOpacity, y: headerY }}>
          <h2 className="text-4xl font-bold text-[#123B79] mb-4">Beginner Property Investor Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a strong foundation in property investment and understand the Singapore market
          </p>
          <div className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#123B79] mb-4">Laying the Foundation</h3>
            <p className="text-gray-700 mb-6">
              The Beginner Property Investor Path guides you through building a solid foundation of knowledge and skills
              essential for success in Singapore's property market. Starting with fundamental concepts and gradually
              progressing to more complex strategies, this structured learning journey prepares you to make informed
              investment decisions with confidence.
            </p>
            <p className="text-gray-700 mb-6">
              Through a carefully sequenced curriculum covering market analysis, financial planning, risk assessment,
              regulatory frameworks, and strategic decision-making, you'll develop the comprehensive understanding
              needed to navigate your first property investments successfully.
            </p>
            <div className="flex justify-center mt-8">
              <Button className="bg-[#123B79] hover:bg-[#0A2A5E] text-white">
                Explore This Path
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
