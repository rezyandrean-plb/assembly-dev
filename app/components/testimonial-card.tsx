"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    quote: string;
    image: string;
  };
  delay: number;
}

export default function TestimonialCard({
  testimonial,
  delay,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      data-oid="e4wj3g:"
    >
      <div className="flex items-center mb-4" data-oid="rryxcrs">
        <div
          className="relative w-16 h-16 rounded-full overflow-hidden mr-4"
          data-oid="azs4z.w"
        >
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
            data-oid="gsxet71"
          />
        </div>
        <div data-oid="j4txcvr">
          <h4 className="font-bold text-gray-900" data-oid=".6lcyfa">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm" data-oid="v91.cjr">
            {testimonial.role}
          </p>
        </div>
      </div>

      <blockquote className="text-gray-700 italic" data-oid="8off6b.">
        "{testimonial.quote}"
      </blockquote>

      <div className="mt-4 flex" data-oid="tng.tar">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-oid="r.j_c4l"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              data-oid="2:gtfz4"
            />
          </svg>
        ))}
      </div>
    </motion.div>
  );
}
