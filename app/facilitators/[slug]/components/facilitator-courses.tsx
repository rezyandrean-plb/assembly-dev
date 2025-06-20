"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Facilitator } from "@/app/data/facilitators";
import { courses as allCourses, Course } from "@/app/data/courses";

interface FacilitatorCoursesProps {
  facilitator: Facilitator;
}

export function FacilitatorCourses({ facilitator }: FacilitatorCoursesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const facilitatorCourses = allCourses.filter((course: Course) =>
    course.instructor.includes(facilitator.name),
  );

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="0g7mz5z">
      <div className="container mx-auto px-4" data-oid="wl_cjzn">
        <div className="max-w-6xl mx-auto" data-oid=".id-i47">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="ww-ebwh"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="qn-zjc6"
            >
              Courses by {facilitator.name}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="2bhx9jq"
            >
              Discover the comprehensive courses designed and taught by{" "}
              {facilitator.name}, each crafted to provide practical insights and
              actionable strategies.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            data-oid="b_gx2wo"
          >
            {facilitatorCourses.map((course: Course, index: number) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="4no5v:3"
              >
                <div className="p-6" data-oid="gisowhr">
                  <div
                    className="flex items-center gap-3 mb-4"
                    data-oid="v5agh1b"
                  >
                    <div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                      data-oid="b7k0w10"
                    >
                      <BookOpen
                        className="w-6 h-6 text-blue-600"
                        data-oid="yok-ifb"
                      />
                    </div>
                    <div className="flex-1" data-oid="7uhr2-:">
                      <h3
                        className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                        data-oid="u9qcpz."
                      >
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="text-gray-600 mb-6 leading-relaxed"
                    data-oid="-ppp.-9"
                  >
                    {course.description}
                  </p>

                  <div
                    className="flex items-center justify-between text-sm text-gray-500 mb-6"
                    data-oid="_pznmyc"
                  >
                    <div className="flex items-center gap-2" data-oid="q_nt4og">
                      <Clock className="w-4 h-4" data-oid="z0p36sj" />
                      <span data-oid="uhdd2l8">Self-paced</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="oo_5_.l">
                      <Users className="w-4 h-4" data-oid="jhzt5j:" />
                      <span data-oid="6be_9yn">All levels</span>
                    </div>
                  </div>

                  <Link href={`/courses/${course.slug}`} data-oid="l.n9w48">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
                      data-oid="r0av-cn"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        data-oid="ghgb3rv"
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
            data-oid="w2z3w7y"
          >
            <div className="bg-gray-50 rounded-2xl p-8" data-oid="n8aj4sq">
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="ainns65"
              >
                Explore All Courses
              </h3>
              <p
                className="text-gray-600 mb-6 max-w-2xl mx-auto"
                data-oid="ypdajx-"
              >
                Browse our complete course catalog to find the perfect learning
                path for your property investment journey.
              </p>
              <Link href="/courses" data-oid="08nit2y">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
                  data-oid="bdi-4uz"
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
