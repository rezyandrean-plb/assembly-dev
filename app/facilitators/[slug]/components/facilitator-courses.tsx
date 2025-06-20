"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Facilitator } from "@/app/data/facilitators";

interface FacilitatorCoursesProps {
  facilitator: Facilitator;
}

export function FacilitatorCourses({ facilitator }: FacilitatorCoursesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="9h-7kee">
      <div className="container mx-auto px-4" data-oid="q_n:mrq">
        <div className="max-w-6xl mx-auto" data-oid="ryyoktl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="k-oq.v3"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="d0y4gux"
            >
              Courses by {facilitator.name}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="m1tqxvp"
            >
              Discover the comprehensive courses designed and taught by{" "}
              {facilitator.name}, each crafted to provide practical insights and
              actionable strategies.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            data-oid="_cl8bfc"
          >
            {facilitator.courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="he45-7y"
              >
                <div className="p-6" data-oid="bi6xu-h">
                  <div
                    className="flex items-center gap-3 mb-4"
                    data-oid="dc6y3r8"
                  >
                    <div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                      data-oid="oe.sdgh"
                    >
                      <BookOpen
                        className="w-6 h-6 text-blue-600"
                        data-oid="lslptwj"
                      />
                    </div>
                    <div className="flex-1" data-oid="3.c6p1d">
                      <h3
                        className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                        data-oid="744g1i7"
                      >
                        {course}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="text-gray-600 mb-6 leading-relaxed"
                    data-oid="hrqyj2s"
                  >
                    Comprehensive training program covering essential strategies
                    and practical applications in{" "}
                    {facilitator.specialty.toLowerCase()}.
                  </p>

                  <div
                    className="flex items-center justify-between text-sm text-gray-500 mb-6"
                    data-oid="ynmxgv2"
                  >
                    <div className="flex items-center gap-2" data-oid="5paixj2">
                      <Clock className="w-4 h-4" data-oid="-n6eckp" />
                      <span data-oid="_-4w9v4">Self-paced</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="qww2:np">
                      <Users className="w-4 h-4" data-oid="8-qd5da" />
                      <span data-oid="1j8-nhx">All levels</span>
                    </div>
                  </div>

                  <Link href="/courses" data-oid="u7m_lpp">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
                      data-oid="1ip0lx-"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        data-oid="0icxdq6"
                      />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Courses CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-oid="h2y0a.."
          >
            <div className="bg-gray-50 rounded-2xl p-8" data-oid="4ex-kew">
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="tkbswg-"
              >
                Explore All Courses
              </h3>
              <p
                className="text-gray-600 mb-6 max-w-2xl mx-auto"
                data-oid="wdyp55t"
              >
                Browse our complete course catalog to find the perfect learning
                path for your property investment journey.
              </p>
              <Link href="/courses" data-oid="bo:pc6s">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
                  data-oid="r9-kjnc"
                >
                  View All Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
