"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: {
    title: string;
    level: string;
    duration: string;
    image: string;
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
      whileHover={{ y: -10 }}
      data-oid="lmgsqtk"
    >
      <div
        className="bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col"
        data-oid="ktmr2s7"
      >
        <div className="relative h-48 overflow-hidden" data-oid=":5b4r57">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-oid="b1mcbql"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"
            data-oid="kl11g92"
          />

          <div
            className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
            data-oid="kdlr:dv"
          >
            {course.level}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow" data-oid="qcsv8z:">
          <h3 className="text-xl font-bold mb-3" data-oid="5ndida5">
            {course.title}
          </h3>
          <div className="text-gray-400 text-sm mb-4" data-oid="mkmagb6">
            <span className="inline-block mr-4" data-oid="nhz_wgp">
              ⏱️ {course.duration}
            </span>
          </div>

          <div className="mt-auto" data-oid="pbmk9j.">
            <Link
              href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
              data-oid="uoxoana"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" data-oid="i-ril:f" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
