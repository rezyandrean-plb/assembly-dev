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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="w8lfsgx">
      <div className="container mx-auto px-4" data-oid="c3zb4ub">
        <div className="max-w-4xl mx-auto" data-oid="ausujj.">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="twhcifz"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="28tmcb1"
            >
              About {facilitator.name}
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"
              data-oid="uqzfe89"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12" data-oid="j8:mzgu">
            {/* Main Bio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="m3z4h2:"
            >
              <div className="prose prose-lg max-w-none" data-oid="c7sj.yq">
                <p
                  className="text-gray-700 leading-relaxed text-lg mb-6"
                  data-oid="7xoowxj"
                >
                  {facilitator.longBio}
                </p>

                <div
                  className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8"
                  data-oid="dsd39xv"
                >
                  <div className="flex items-start gap-4" data-oid="1h8i08c">
                    <Quote
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="texy2xp"
                    />

                    <div data-oid="wof3rjj">
                      <p
                        className="text-gray-700 italic mb-2"
                        data-oid="n9f4l2i"
                      >
                        "My goal is not just to teach property investment
                        strategies, but to empower individuals with the
                        confidence and knowledge to make informed decisions that
                        will benefit them for life."
                      </p>
                      <p
                        className="text-sm text-gray-600 font-medium"
                        data-oid="r_3ishl"
                      >
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
              data-oid="zh9ds:z"
            >
              <div
                className="bg-gray-50 rounded-2xl p-6 sticky top-8"
                data-oid="n7b12_h"
              >
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  data-oid="y4:dv7f"
                >
                  Quick Facts
                </h3>

                <div className="space-y-4" data-oid="e_a8chc">
                  <div className="flex items-start gap-3" data-oid="kcbpzc9">
                    <Target
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="yjzi7kv"
                    />

                    <div data-oid="87_xnb_">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="0tp33ap"
                      >
                        Specialty
                      </div>
                      <div className="text-gray-600" data-oid="_bp5gwd">
                        {facilitator.specialty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-oid="e22zlu1">
                    <TrendingUp
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="l3dg4qc"
                    />

                    <div data-oid="cwpah40">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid=":hzrq:1"
                      >
                        Experience
                      </div>
                      <div className="text-gray-600" data-oid="xsdri18">
                        {facilitator.experience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teaching Philosophy */}
                <div
                  className="mt-8 pt-6 border-t border-gray-200"
                  data-oid="7:m3q62"
                >
                  <h4
                    className="font-semibold text-gray-900 mb-3"
                    data-oid="-_ga.22"
                  >
                    Teaching Philosophy
                  </h4>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    data-oid=":vgj_t4"
                  >
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
