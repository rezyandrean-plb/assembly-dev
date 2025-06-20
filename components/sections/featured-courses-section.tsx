"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNetwork } from "@/context/network-context";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturedCoursesSection() {
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

  const courses = [
    {
      title: "Strategic Property Investment",
      category: "Real Estate + Finance",
      image: "/singapore-skyline-investment.png",
      description:
        "Master the art of property investment in Singapore's competitive market with data-driven strategies and financial modeling techniques.",
      primaryColor: "#794B12",
      secondaryColor: "#F0A500",
      delay: 0.3,
    },
    {
      title: "Digital Marketing for Agents",
      category: "Real Estate + Learning",
      image: "/modern-real-estate-marketing.png",
      description:
        "Build your online presence and attract high-quality leads using cutting-edge digital marketing strategies tailored for property agents.",
      primaryColor: "#794B12",
      secondaryColor: "#79123B",
      delay: 0.5,
    },
    {
      title: "Financial Modeling Masterclass",
      category: "Finance + Learning",
      image: "/financial-model-dashboard.png",
      description:
        "Develop sophisticated financial models to evaluate property investments, forecast returns, and make data-driven decisions.",
      primaryColor: "#F0A500",
      secondaryColor: "#79123B",
      delay: 0.7,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white"
      data-oid="ivlk72w"
    >
      <div className="container mx-auto px-4" data-oid="gdtw6tw">
        <motion.div
          className="text-center mb-16"
          style={{ opacity: headerOpacity, y: headerY }}
          data-oid="so353xm"
        >
          <h2
            className="text-4xl font-bold text-[#123B79] mb-4"
            data-oid="gjkovqp"
          >
            Nodes of Expertise
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="gvgq1yx"
          >
            Discover specialized courses that represent key intersections within
            our knowledge network
          </p>
          <div
            className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
            data-oid="l_j8-eo"
          ></div>
        </motion.div>

        <div className="space-y-24" data-oid="hsv60.o">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
              }}
              transition={{
                duration: 0.8,
                delay: course.delay,
                type: "spring",
                stiffness: 50,
              }}
              data-oid="6j1p76f"
            >
              <div className="md:w-1/2 order-2 md:order-1" data-oid="ujl2gvy">
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{
                    background: `linear-gradient(to right, ${course.primaryColor}, ${course.secondaryColor})`,
                    color: "white",
                  }}
                  data-oid="3w6:u1e"
                >
                  {course.category}
                </div>
                <h3
                  className="text-3xl font-bold text-[#123B79] mb-4"
                  data-oid="s6le-n1"
                >
                  {course.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6" data-oid="a4lgkt6">
                  {course.description}
                </p>

                <div className="flex space-x-4 mb-6" data-oid=".x14d3f">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#F0A500]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-oid=":lp69_a"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        data-oid="5ioluas"
                      />
                    </svg>
                  ))}
                </div>

                <a
                  href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-[#123B79] font-medium hover:text-[#0A2A5E] transition-colors"
                  data-oid="k:scr:3"
                >
                  Explore this course
                  <ArrowRight className="ml-2 h-4 w-4" data-oid="cimhw0r" />
                </a>
              </div>

              <div className="md:w-1/2 order-1 md:order-2" data-oid="gxcfhn7">
                <div
                  className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl"
                  data-oid="-8q4d:-"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    data-oid="2sa4-rh"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-r"
                    style={{
                      background: `linear-gradient(to right, ${course.primaryColor}20, ${course.secondaryColor}10)`,
                    }}
                    data-oid="-e0x.xm"
                  ></div>

                  {/* Network node visualization */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    data-oid="r0545j7"
                  >
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="5rwvg:o"
                    >
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="50"
                        stroke={course.primaryColor}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: isInView ? 0.54 : 0,
                          scale: isInView ? 1 : 0,
                        }}
                        transition={{ duration: 1, delay: course.delay + 0.3 }}
                        data-oid="o0unpw6"
                      />

                      <motion.circle
                        cx="100"
                        cy="100"
                        r="70"
                        stroke={course.secondaryColor}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: isInView ? 0.54 : 0,
                          scale: isInView ? 1 : 0,
                        }}
                        transition={{ duration: 1, delay: course.delay + 0.5 }}
                        data-oid="fe:bzqw"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
