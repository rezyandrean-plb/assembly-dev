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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="c-k52o8">
      <div className="container mx-auto px-4" data-oid="lg21s38">
        <div className="max-w-4xl mx-auto" data-oid="e_94yu8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="z-c86_w"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="m5mcpxl"
            >
              About {facilitator.name}
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"
              data-oid="0a6ml6o"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12" data-oid="1v.0p15">
            {/* Main Bio */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="57-0pgd"
            >
              <div className="prose prose-lg max-w-none" data-oid="yqqle-p">
                <p
                  className="text-gray-700 leading-relaxed text-lg mb-6"
                  data-oid="9lnv9su"
                >
                  {facilitator.longBio}
                </p>

                <div
                  className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8"
                  data-oid="r39kno2"
                >
                  <div className="flex items-start gap-4" data-oid="nc_3xyw">
                    <Quote
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="a0:w6gb"
                    />

                    <div data-oid="fbtpa4p">
                      <p
                        className="text-gray-700 italic mb-2"
                        data-oid="47zpvas"
                      >
                        "My goal is not just to teach property investment
                        strategies, but to empower individuals with the
                        confidence and knowledge to make informed decisions that
                        will benefit them for life."
                      </p>
                      <p
                        className="text-sm text-gray-600 font-medium"
                        data-oid="xem-hl-"
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
              data-oid="r3npbxt"
            >
              <div
                className="bg-gray-50 rounded-2xl p-6 sticky top-8"
                data-oid="v-aguh5"
              >
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  data-oid="xoydafm"
                >
                  Quick Facts
                </h3>

                <div className="space-y-4" data-oid="8omczr9">
                  <div className="flex items-start gap-3" data-oid="rung2dz">
                    <Target
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="uv4n9qw"
                    />

                    <div data-oid="lpk3iug">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="lqsv.wv"
                      >
                        Specialty
                      </div>
                      <div className="text-gray-600" data-oid="az:4k-n">
                        {facilitator.specialty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-oid="9g8ln:a">
                    <TrendingUp
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      data-oid="aw.ddvz"
                    />

                    <div data-oid=":8_l6di">
                      <div
                        className="font-semibold text-gray-900 mb-1"
                        data-oid="l4szn1."
                      >
                        Experience
                      </div>
                      <div className="text-gray-600" data-oid="4ix1cd-">
                        {facilitator.experience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teaching Philosophy */}
                <div
                  className="mt-8 pt-6 border-t border-gray-200"
                  data-oid="9a-1hja"
                >
                  <h4
                    className="font-semibold text-gray-900 mb-3"
                    data-oid="xpbtiov"
                  >
                    Teaching Philosophy
                  </h4>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    data-oid="k3baauy"
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
