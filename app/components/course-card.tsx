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
      data-oid="zn.mn-j"
    >
      <div
        className="bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col"
        data-oid="hfnbgjf"
      >
        <div className="relative h-48 overflow-hidden" data-oid="be3o4p9">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-oid="jq5b27v"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"
            data-oid="--we:ob"
          />

          <div
            className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
            data-oid="67upsmo"
          >
            {course.level}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow" data-oid="ab:wh5h">
          <h3 className="text-xl font-bold mb-3" data-oid="huigj:w">
            {course.title}
          </h3>
          <div className="text-gray-400 text-sm mb-4" data-oid="g:cc69_">
            <span className="inline-block mr-4" data-oid="7m2c:al">
              ⏱️ {course.duration}
            </span>
          </div>

          <div className="mt-auto" data-oid="-evk9g7">
            <Link
              href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
              data-oid="2px0:t3"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" data-oid="hm1fxo6" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
