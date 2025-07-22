"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Target, TrendingUp } from "lucide-react";
import type { Facilitator } from "@/app/data/facilitators";

interface FacilitatorBioProps {
  facilitator: Facilitator;
}

export function FacilitatorBio({ facilitator }: FacilitatorBioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About {facilitator.name}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {facilitator.longBio}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />

                    <div>
                      <p className="text-gray-700 italic mb-2">
                        "My goal is not just to teach property investment
                        strategies, but to empower individuals with the
                        confidence and knowledge to make informed decisions that
                        will benefit them for life."
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        - {facilitator.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Quick Facts
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />

                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        Specialty
                      </div>
                      <div className="text-gray-600">
                        {facilitator.specialty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />

                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        Experience
                      </div>
                      <div className="text-gray-600">
                        {facilitator.experience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teaching Philosophy */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Teaching Philosophy
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Believes in practical, hands-on learning combined with solid
                    theoretical foundations. Focuses on real-world applications
                    and personalized guidance to help each student achieve their
                    unique investment goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
