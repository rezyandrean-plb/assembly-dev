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
      data-oid="faf:so3"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" data-oid="uyaezqj">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100/60 rounded-full blur-xl"
          data-oid="s1rey-c"
        />

        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100/60 rounded-full blur-xl"
          data-oid="xgwicwh"
        />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/50 to-orange-100/50 rounded-full blur-3xl"
          data-oid="0r07pd:"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="3icragg">
        <div className="max-w-4xl mx-auto text-center" data-oid="4.vugk7">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-950 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="s_:11q2"
          >
            The People Who Make It Happen
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="uefm7y7"
          >
            Meet Your
            <span className="block text-blue-900" data-oid="n5ufcbx">
              Property Investment Mentors
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="v3bdlha"
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
