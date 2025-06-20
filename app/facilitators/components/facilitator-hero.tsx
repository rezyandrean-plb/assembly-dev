"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Users, Award, BookOpen } from "lucide-react";

export function FacilitatorHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden"
      data-oid="pmpcspp"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" data-oid="m6x506x">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
          data-oid="n43ishs"
        />

        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"
          data-oid="kzw7wq5"
        />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-orange-400/10 rounded-full blur-3xl"
          data-oid="tv4vtym"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="a4:2y23">
        <div
          className="max-w-4xl mx-auto text-center text-white"
          data-oid="fv7:t5n"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="fo9fqvd"
          >
            <Sparkles className="w-4 h-4" data-oid="k81xbrz" />
            Meet Our Expert Facilitators
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="os1ngp5"
          >
            Learn from Singapore's
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-200"
              data-oid="v0mjzp:"
            >
              Property Investment Experts
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="3l4l43l"
          >
            Our facilitators are not just educators – they're active property
            investors, industry veterans, and passionate mentors who have helped
            thousands of Singaporeans achieve their property investment goals.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-oid="4kk_8rz"
          >
            <div className="text-center" data-oid="qpnm7ud">
              <div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="cn-_ou_"
              >
                <Users className="w-8 h-8 text-white" data-oid="tfunbe9" />
              </div>
              <div className="text-3xl font-bold mb-2" data-oid="ln.y_.t">
                15,000+
              </div>
              <div className="text-blue-200" data-oid="0djayqu">
                Students Taught
              </div>
            </div>
            <div className="text-center" data-oid="hp-1.-f">
              <div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="zmd5orw"
              >
                <Award className="w-8 h-8 text-white" data-oid="23cw5at" />
              </div>
              <div className="text-3xl font-bold mb-2" data-oid="27kgc70">
                80+
              </div>
              <div className="text-blue-200" data-oid="dmk30pi">
                Years Combined Experience
              </div>
            </div>
            <div className="text-center" data-oid="f1y0:57">
              <div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="na9k1sr"
              >
                <BookOpen className="w-8 h-8 text-white" data-oid="tk.xun0" />
              </div>
              <div className="text-3xl font-bold mb-2" data-oid="-ibi1l2">
                50+
              </div>
              <div className="text-blue-200" data-oid="qrrfb5l">
                Courses Created
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
