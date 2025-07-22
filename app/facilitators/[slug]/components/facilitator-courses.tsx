"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Facilitator } from "@/app/data/facilitators";
import { courses as allCourses, Course } from "@/app/data/courses";
import CourseCard from "@/app/components/course-card";

interface FacilitatorCoursesProps {
  facilitator: Facilitator;
}

export function FacilitatorCourses({ facilitator }: FacilitatorCoursesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const facilitatorCourses = allCourses.filter(
    (course: Course) =>
      Array.isArray(course.instructorIds) &&
      course.instructorIds.includes(facilitator.id),
  );

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Courses by {facilitator.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the comprehensive courses designed and taught by{" "}
              {facilitator.name}, each crafted to provide practical insights and
              actionable strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {facilitatorCourses
              .slice(0, 3)
              .map((course: Course, index: number) => (
                <CourseCard
                  key={course.id}
                  course={{
                    ...course,
                    level: course.level || "All Levels",
                    duration: course.duration || "Self-paced",
                  }}
                  delay={0.1 * index}
                />
              ))}
          </div>

          {/* View All Courses CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Explore More Courses
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover all {facilitator.stats?.coursesCreated} expert courses
                designed and taught by {facilitator.name}, each crafted to
                provide practical insights and actionable strategies.
              </p>
              <Link
                href={`/courses?facilitator=${encodeURIComponent(
                  facilitator.name,
                )}`}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
                >
                  View All {facilitator.name}'s Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
