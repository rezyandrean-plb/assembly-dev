"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { courses } from "@/app/data/courses";

export default function NewCoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Get featured courses (first 6)
  const featuredCourses = courses.slice(0, 6);

  const getCategoryColor = (category: string) => {
    const colors = {
      condo: "bg-blue-100 text-blue-700",
      hdb: "bg-green-100 text-green-700",
      landed: "bg-purple-100 text-purple-700",
      investing: "bg-orange-100 text-orange-700",
      "market trends": "bg-pink-100 text-pink-700",
      default: "bg-gray-100 text-gray-700",
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      data-oid="9qvwwdn"
    >
      <div className="container mx-auto px-4" data-oid="mqdvx8x">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="87dqg6l"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent"
            data-oid="2y7.de3"
          >
            Featured Courses
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            data-oid="p.1kznj"
          >
            Master real estate investment with our comprehensive courses
            designed by industry experts
          </p>
          <Link href="/courses" data-oid="mi7am84">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              data-oid="ainhxsj"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" data-oid="a0jf3lj" />
            </Button>
          </Link>
        </motion.div>

        {/* Courses Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="fjgj:qp"
        >
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="dmxg4b."
            >
              {/* Course Image */}
              <div
                className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden"
                data-oid="9qdyit9"
              >
                <div
                  className="absolute inset-0 bg-black/20"
                  data-oid="_pk6l3."
                />

                <div className="absolute top-4 left-4" data-oid="i9d3r5.">
                  <Badge
                    className={getCategoryColor(course.category || "default")}
                    data-oid="laty22y"
                  >
                    {course.categories[0]}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4" data-oid="9ef6bfd">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800"
                    data-oid="41qtrnc"
                  >
                    {course.type}
                  </Badge>
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  data-oid="06zqdb-"
                >
                  <div className="text-white text-center" data-oid="f9--hh6">
                    <div
                      className="text-6xl font-bold opacity-20"
                      data-oid="fzfo0ha"
                    >
                      {course.categories[0].charAt(0)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6" data-oid="4x22kb6">
                <h3
                  className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                  data-oid="nft2b35"
                >
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4" data-oid="4kn3li2">
                  By {course.instructor}
                </p>

                {/* Course Meta */}
                <div
                  className="flex items-center gap-4 mb-4 text-sm text-gray-500"
                  data-oid="1587rj_"
                >
                  <div className="flex items-center gap-1" data-oid="0ov4unk">
                    <Clock className="w-4 h-4" data-oid="b-zejju" />
                    <span data-oid="ghl4gnz">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1" data-oid="te.frqg">
                    <Users className="w-4 h-4" data-oid="gevf804" />
                    <span data-oid="immhytx">{course.level}</span>
                  </div>
                </div>

                {/* Rating */}
                {course.rating && (
                  <div
                    className="flex items-center gap-2 mb-4"
                    data-oid="-ic0ng5"
                  >
                    <div className="flex items-center" data-oid="szal_26">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating!)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                          data-oid="9l_ry.e"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600" data-oid="ybxdwy-">
                      {course.rating} ({course.reviewCount} reviews)
                    </span>
                  </div>
                )}

                {/* Price and CTA */}
                <div
                  className="flex items-center justify-between"
                  data-oid="_l4ph.h"
                >
                  <div
                    className="text-2xl font-bold text-gray-900"
                    data-oid="wfi-l8y"
                  >
                    {course.price}
                  </div>
                  <Link
                    href={course.url || `/courses/${course.slug}`}
                    data-oid="vgz1uv4"
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      data-oid="ljvm46q"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-oid="7rpv81v"
        >
          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto"
            data-oid="ipuvn1q"
          >
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              data-oid="c:i-0cl"
            >
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-gray-600 mb-6" data-oid="lp9:_v6">
              Join thousands of successful investors and start building your
              real estate portfolio today.
            </p>
            <Link href="/signup" data-oid="eh82tkg">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                data-oid="88dvw_l"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" data-oid="j8w459u" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
