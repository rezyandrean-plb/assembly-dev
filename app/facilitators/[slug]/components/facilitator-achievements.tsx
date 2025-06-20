"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Star } from "lucide-react";
import type { Facilitator } from "@/app/data/facilitators";

interface FacilitatorAchievementsProps {
  facilitator: Facilitator;
}

export function FacilitatorAchievements({
  facilitator,
}: FacilitatorAchievementsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="-fdac5y">
      <div className="container mx-auto px-4" data-oid="j4k.p3h">
        <div className="max-w-6xl mx-auto" data-oid="cridfoo">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="uf2vwqe"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="-1_zfqe"
            >
              Achievements & Recognition
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="6zb0was"
            >
              {facilitator.name}'s expertise and contributions to the property
              investment education industry have been widely recognized.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12" data-oid="_h9ffcf">
            {/* Achievements List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="brtud9a"
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-lg"
                data-oid="uf6q46z"
              >
                <div
                  className="flex items-center gap-3 mb-6"
                  data-oid="_:du5yi"
                >
                  <Award className="w-6 h-6 text-blue-600" data-oid="bdkq_wr" />
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-oid="rk:40f0"
                  >
                    Key Achievements
                  </h3>
                </div>

                <div className="space-y-4" data-oid="dc9f4cs">
                  {facilitator.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -20,
                      }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      data-oid="b320s6w"
                    >
                      <CheckCircle
                        className="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                        data-oid="-jbp3yl"
                      />
                      <p className="text-gray-700" data-oid="gtkja3i">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-oid="3x8ovu8"
            >
              <div
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
                data-oid="qe07fxg"
              >
                <div
                  className="flex items-center gap-3 mb-6"
                  data-oid="3.og7a5"
                >
                  <Star className="w-6 h-6 text-white" data-oid="kid:ysi" />
                  <h3 className="text-2xl font-bold" data-oid="o78kds5">
                    Impact & Influence
                  </h3>
                </div>

                <div className="space-y-6" data-oid="jiiqb31">
                  <div
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                    data-oid="12f1t5e"
                  >
                    <div className="text-3xl font-bold mb-2" data-oid="474rm2-">
                      {facilitator.stats?.studentsHelped.toLocaleString()}+
                    </div>
                    <div className="text-blue-100" data-oid="f-4g_th">
                      Students Successfully Guided
                    </div>
                  </div>

                  <div
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                    data-oid="-shw1y6"
                  >
                    <div className="text-3xl font-bold mb-2" data-oid="u7zf-55">
                      {facilitator.stats?.coursesCreated}
                    </div>
                    <div className="text-blue-100" data-oid="s_.-68k">
                      Comprehensive Courses Developed
                    </div>
                  </div>

                  <div
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                    data-oid="0m1102."
                  >
                    <div className="text-3xl font-bold mb-2" data-oid="jal3l..">
                      {facilitator.stats?.yearsExperience}+
                    </div>
                    <div className="text-blue-100" data-oid="o-7e9jk">
                      Years of Industry Experience
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
