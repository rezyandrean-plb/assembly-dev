"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CourseCardProps {
  course: {
    title: string
    level: string
    duration: string
    image: string
  }
  delay: number
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
    >
      <div className="bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {course.level}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3">{course.title}</h3>
          <div className="text-gray-400 text-sm mb-4">
            <span className="inline-block mr-4">⏱️ {course.duration}</span>
          </div>

          <div className="mt-auto">
            <Link
              href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
