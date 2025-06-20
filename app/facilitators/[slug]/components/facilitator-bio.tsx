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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="u24.f-g">
      <div className="container mx-auto px-4" data-oid="xo3nrp2">
        <div className="max-w-4xl mx-auto" data-oid="1-igagt">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="_9bgn.u"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="n1:-ukk"
            >
              About {facilitator.name}
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"
              data-oid=":wr_3en"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12" data-oid="_lqilj1">
            {/* Main Bio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="00t47jf"
            >
              <div className="prose prose-lg max-w-none" data-oid="jx45knt">
                <p
                  className="text-gray-700 leading-relaxed text-lg mb-6"
                  data-oid="kh3:gk4"
                >
                  {facilitator.longBio}
                </p>

                <div
                  className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8"
                  data-oid="tyd-2ry"
                >
                  <div className="flex items-start gap-4" data-oid="zkdaxb7">
                    <Quote
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="uzscwa_"
                    />
                    <div data-oid="qhgy66g">
                      <p
                        className="text-gray-700 italic mb-2"
                        data-oid="w77h9du"
                      >
                        "My goal is not just to teach property investment
                        strategies, but to empower individuals with the
                        confidence and knowledge to make informed decisions that
                        will benefit them for life."
                      </p>
                      <p
                        className="text-sm text-gray-600 font-medium"
                        data-oid="q4g:9n7"
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
              data-oid="7i4johk"
            >
              <div
                className="bg-gray-50 rounded-2xl p-6 sticky top-8"
                data-oid="i-06jvy"
              >
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  data-oid="98di7za"
                >
                  Quick Facts
                </h3>

                <div className="space-y-4" data-oid="0dnpeeu">
                  <div className="flex items-start gap-3" data-oid="z00g13l">
                    <Target
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="q.3dcl:"
                    />
                    <div data-oid="opa5hto">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="jbp.npp"
                      >
                        Specialty
                      </div>
                      <div className="text-gray-600" data-oid="p1rw2nn">
                        {facilitator.specialty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-oid="1_wwxq6">
                    <TrendingUp
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="ax_rlql"
                    />
                    <div data-oid="ko3f.zc">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="5e9m4nh"
                      >
                        Experience
                      </div>
                      <div className="text-gray-600" data-oid="5b_35tz">
                        {facilitator.experience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teaching Philosophy */}
                <div
                  className="mt-8 pt-6 border-t border-gray-200"
                  data-oid="v29i4gx"
                >
                  <h4
                    className="font-semibold text-gray-900 mb-3"
                    data-oid="f42u_zi"
                  >
                    Teaching Philosophy
                  </h4>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    data-oid="h5t.kvf"
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
