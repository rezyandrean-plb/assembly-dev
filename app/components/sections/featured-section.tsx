"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Target } from "lucide-react";

export default function FeaturedSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="m1m.3sf">
      <div className="container mx-auto px-4" data-oid="b6n7bz4">
        <div
          className="flex flex-col md:flex-row items-center gap-12"
          data-oid="lqgz995"
        >
          <motion.div
            className="md:w-1/2 relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            data-oid="m13cc2o"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-orange-500 z-10"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ originX: 0 }}
              data-oid="_umnrsx"
            />

            <div
              className="relative w-full aspect-[4/3] overflow-hidden"
              data-oid="6l91n5e"
            >
              <Image
                src="/singapore-skyline-day.png"
                alt="Niche Positioning Masterclass"
                fill
                className="object-cover"
                data-oid="45jtho3"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"
                data-oid="67fmk34"
              ></div>
              <div
                className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                data-oid="d4k:u9."
              >
                Featured Course
              </div>
            </div>
          </motion.div>

          <div className="md:w-1/2" data-oid="b_ujlx9">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              data-oid="uo5q.k7"
            >
              Niche Positioning Masterclass
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="0gktr12"
            >
              Stand out in a crowded market by identifying and dominating your
              unique niche. This masterclass teaches real estate professionals
              how to position themselves as specialists rather than generalists,
              attracting higher-value clients and commanding premium fees.
            </motion.p>
            <div className="relative h-24 w-full mb-6" data-oid="dvw042q">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${(4 - i) * 50}px`,
                    height: `${(4 - i) * 50}px`,
                    border: `2px solid ${i === 0 ? "#f97316" : "#f97316"}`,
                    backgroundColor: i === 0 ? "#f97316" : "transparent",
                    zIndex: 4 - i,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  data-oid="84y9agf"
                />
              ))}
              <Target
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-white z-10"
                data-oid="k1ea08-"
              />
            </div>
            <motion.a
              href="/courses/niche-positioning-masterclass"
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              data-oid="irw7n0a"
            >
              Learn more about this course
              <ArrowRight className="ml-2 h-4 w-4" data-oid="rsg0w6-" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
