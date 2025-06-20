"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import InstructorNames from "./instructor-names";

interface CourseCardProps {
  course: {
    title: string;
    level: string;
    duration: string;
    image: string;
    slug: string;
    instructorIds: string[];
  };
  delay: number;
}

export default function CourseCard({ course, delay }: CourseCardProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      data-oid=":x0pb1q"
    >
      <div
        className="bg-white rounded-xl overflow-hidden h-full flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        data-oid="iyqf5gi"
      >
        <div className="relative h-48 overflow-hidden" data-oid="903wdue">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-oid="16mtcrp"
          />

          <div
            className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full"
            data-oid="zqa14ei"
          >
            {course.level}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow" data-oid="l571zz9">
          <h3
            className="text-lg font-bold mb-3 text-gray-900"
            data-oid="xn2vqi1"
          >
            {course.title}
          </h3>
          <InstructorNames
            instructorIds={course.instructorIds}
            data-oid="4fa3pvx"
          />

          <div
            className="text-gray-600 text-sm mb-4 flex items-center"
            data-oid="p:6s:eu"
          >
            <Clock className="w-4 h-4 mr-2" data-oid="e::.8pu" />
            <span data-oid="zua3j:c">{course.duration}</span>
          </div>

          <div className="mt-auto" data-oid="kw4sw.4">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              data-oid=".qwlh4."
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" data-oid="d9mq3xq" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
