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
      data-oid="pmpcspp"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" data-oid="m6x506x">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100/60 rounded-full blur-xl"
          data-oid="n43ishs"
        />

        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100/60 rounded-full blur-xl"
          data-oid="kzw7wq5"
        />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/50 to-orange-100/50 rounded-full blur-3xl"
          data-oid="tv4vtym"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="a4:2y23">
        <div className="max-w-4xl mx-auto text-center" data-oid="fv7:t5n">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="fo9fqvd"
          >
            <Heart className="w-4 h-4 text-red-500" data-oid="k81xbrz" />
            The People Who Make It Happen
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="os1ngp5"
          >
            Meet Your
            <span className="block text-blue-600" data-oid="yztjxd3">
              Property Investment Mentors
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="3l4l43l"
          >
            Behind every successful property investor is a great mentor. Meet
            the passionate experts who've dedicated their careers to turning
            your property dreams into reality. Each brings their unique
            expertise, personality, and proven track record to guide your
            journey.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-oid="l5s9ts1"
          >
            <div className="text-center group" data-oid="t0tf2fa">
              <div
                className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl"
                data-oid="5:5:1ir"
              >
                <Users className="w-10 h-10 text-white" data-oid="ol4sk6e" />
              </div>
              <div
                className="text-4xl font-bold mb-2 text-gray-900"
                data-oid="-do-luy"
              >
                6
              </div>
              <div className="text-gray-600 font-medium" data-oid="3d2mg-d">
                Expert Facilitators
              </div>
              <div className="text-sm text-gray-500 mt-1" data-oid="s8rm2-2">
                Industry veterans and mentors
              </div>
            </div>
            <div className="text-center group" data-oid="-23:ts-">
              <div
                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl"
                data-oid="i148.x8"
              >
                <Award className="w-10 h-10 text-white" data-oid="2:vqhf5" />
              </div>
              <div
                className="text-4xl font-bold mb-2 text-gray-900"
                data-oid="xs.xmfa"
              >
                Proven
              </div>
              <div className="text-gray-600 font-medium" data-oid="liznpw5">
                Track Records
              </div>
              <div className="text-sm text-gray-500 mt-1" data-oid="4omsv:_">
                Real success in property investment
              </div>
            </div>
            <div className="text-center group" data-oid="fqdiyic">
              <div
                className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl"
                data-oid="hivu8mq"
              >
                <BookOpen className="w-10 h-10 text-white" data-oid="4_j76ny" />
              </div>
              <div
                className="text-4xl font-bold mb-2 text-gray-900"
                data-oid="h6as8uy"
              >
                50+
              </div>
              <div className="text-gray-600 font-medium" data-oid="ze_wooh">
                Expert Courses
              </div>
              <div className="text-sm text-gray-500 mt-1" data-oid="21y5xhs">
                Carefully crafted learning journeys
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
