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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="qje8oo0">
      <div className="container mx-auto px-4" data-oid="bdqvda5">
        <div className="max-w-4xl mx-auto" data-oid="x5tbbi2">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid=".os0o:a"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="8boiw6-"
            >
              About {facilitator.name}
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"
              data-oid="_aqgwh_"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12" data-oid="416bclb">
            {/* Main Bio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="bacudph"
            >
              <div className="prose prose-lg max-w-none" data-oid="tw:asgr">
                <p
                  className="text-gray-700 leading-relaxed text-lg mb-6"
                  data-oid="kqyqmyd"
                >
                  {facilitator.longBio}
                </p>

                <div
                  className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8"
                  data-oid="q09fl4a"
                >
                  <div className="flex items-start gap-4" data-oid="xlx7w0f">
                    <Quote
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      data-oid=":v08sl3"
                    />

                    <div data-oid="vume18-">
                      <p
                        className="text-gray-700 italic mb-2"
                        data-oid="-q9m7k9"
                      >
                        "My goal is not just to teach property investment
                        strategies, but to empower individuals with the
                        confidence and knowledge to make informed decisions that
                        will benefit them for life."
                      </p>
                      <p
                        className="text-sm text-gray-600 font-medium"
                        data-oid="tx6ed85"
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
              data-oid="8.xgehw"
            >
              <div
                className="bg-gray-50 rounded-2xl p-6 sticky top-8"
                data-oid="r_fxlbh"
              >
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  data-oid="x1nenmn"
                >
                  Quick Facts
                </h3>

                <div className="space-y-4" data-oid="mgvwdmi">
                  <div className="flex items-start gap-3" data-oid="_ek01mb">
                    <Target
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="mmr-f-o"
                    />

                    <div data-oid="feo:6oc">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="b:7u9oh"
                      >
                        Specialty
                      </div>
                      <div className="text-gray-600" data-oid="e0rvt6a">
                        {facilitator.specialty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-oid="qtz-e4p">
                    <TrendingUp
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="pd01.x3"
                    />

                    <div data-oid="g0ba0gr">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="gy_t99u"
                      >
                        Experience
                      </div>
                      <div className="text-gray-600" data-oid=":hqbrya">
                        {facilitator.experience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teaching Philosophy */}
                <div
                  className="mt-8 pt-6 border-t border-gray-200"
                  data-oid="9x4flr2"
                >
                  <h4
                    className="font-semibold text-gray-900 mb-3"
                    data-oid="zaoay.6"
                  >
                    Teaching Philosophy
                  </h4>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    data-oid="spwri_z"
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
