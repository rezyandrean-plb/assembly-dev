"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Users, Award, BookOpen, Heart } from "lucide-react";

export function FacilitatorHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
      data-oid="fpwwy-s"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" data-oid="y0b2h.b">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100/60 rounded-full blur-xl"
          data-oid="d9.931c"
        />

        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100/60 rounded-full blur-xl"
          data-oid="op145fj"
        />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/50 to-orange-100/50 rounded-full blur-3xl"
          data-oid="lryzxjq"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="v-y3oow">
        <div className="max-w-4xl mx-auto text-center" data-oid=":d0719m">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-950 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="ordvddo"
          >
            The People Who Make It Happen
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="8j-6040"
          >
            Meet Your
            <span className="block text-blue-900" data-oid="u48vhzv">
              Property Investment Mentors
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="fvemj7:"
          >
            Behind every successful property investor is a great mentor. Meet
            the passionate experts who've dedicated their careers to turning
            your property dreams into reality. Each brings their unique
            expertise, personality, and proven track record to guide your
            journey.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
