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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="hiwm3yp">
      <div className="container mx-auto px-4" data-oid="6e8l-_1">
        <div className="max-w-6xl mx-auto" data-oid="_hyjz9q">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid=".5krdz5"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="l-93gfw"
            >
              Courses by {facilitator.name}
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="vap48jy"
            >
              Discover the comprehensive courses designed and taught by{" "}
              {facilitator.name}, each crafted to provide practical insights and
              actionable strategies.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            data-oid="vc.sfy9"
          >
            {facilitator.courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="fij8dt7"
              >
                <div className="p-6" data-oid="-ek50t5">
                  <div
                    className="flex items-center gap-3 mb-4"
                    data-oid="frdv5ws"
                  >
                    <div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                      data-oid="vzdfcbm"
                    >
                      <BookOpen
                        className="w-6 h-6 text-blue-600"
                        data-oid="lxb:ku0"
                      />
                    </div>
                    <div className="flex-1" data-oid="nuvdnds">
                      <h3
                        className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                        data-oid="9pzufyi"
                      >
                        {course}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="text-gray-600 mb-6 leading-relaxed"
                    data-oid="-.6nq9:"
                  >
                    Comprehensive training program covering essential strategies
                    and practical applications in{" "}
                    {facilitator.specialty.toLowerCase()}.
                  </p>

                  <div
                    className="flex items-center justify-between text-sm text-gray-500 mb-6"
                    data-oid="j5u0pm9"
                  >
                    <div className="flex items-center gap-2" data-oid="pr2flat">
                      <Clock className="w-4 h-4" data-oid="gzp_89d" />
                      <span data-oid="vvg27vx">Self-paced</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="pcspa-0">
                      <Users className="w-4 h-4" data-oid="mkow1hc" />
                      <span data-oid="4wt1kqt">All levels</span>
                    </div>
                  </div>

                  <Link href="/courses" data-oid="iuxj7wv">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
                      data-oid="g3u2g7e"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        data-oid="ti2hly3"
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
            data-oid="-2r97:u"
          >
            <div className="bg-gray-50 rounded-2xl p-8" data-oid="xhdggfo">
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="iig3x2-"
              >
                Explore All Courses
              </h3>
              <p
                className="text-gray-600 mb-6 max-w-2xl mx-auto"
                data-oid="7:3uoap"
              >
                Browse our complete course catalog to find the perfect learning
                path for your property investment journey.
              </p>
              <Link href="/courses" data-oid="9.919kz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
                  data-oid="vae:ejl"
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
