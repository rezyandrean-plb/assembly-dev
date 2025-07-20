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
      data-oid="q:2abzf"
    >
      <div
        className="bg-white rounded-xl overflow-hidden h-full flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        data-oid="vm09efq"
      >
        <div className="relative h-48 overflow-hidden" data-oid="gw6.3hw">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-oid="sbf5dfs"
          />

          <div
            className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full"
            data-oid="e44g8c9"
          >
            {course.level}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow" data-oid="_2zd_ak">
          <h3
            className="text-lg font-bold mb-3 text-gray-900"
            data-oid="k6iubp:"
          >
            {course.title}
          </h3>
          <InstructorNames
            instructorIds={course.instructorIds}
            data-oid="0dio-qs"
          />

          <div
            className="text-gray-600 text-sm mb-4 flex items-center"
            data-oid="3y.wiqg"
          >
            <Clock className="w-4 h-4 mr-2" data-oid="mr2s4zl" />
            <span data-oid="mztmdq_">{course.duration}</span>
          </div>

          <div className="mt-auto" data-oid=":pvuek5">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              data-oid="dzy:l99"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" data-oid="equjgec" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
