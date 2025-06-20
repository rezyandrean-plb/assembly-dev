"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Award, BookOpen, Star, Target } from "lucide-react";

export function FacilitatorStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    {
      icon: TrendingUp,
      number: "80+",
      label: "Years Combined Experience",
      description: "Decades of real estate expertise",
    },
    {
      icon: Users,
      number: "15,000+",
      label: "Students Helped",
      description: "Successful property investors trained",
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Courses Created",
      description: "Comprehensive learning programs",
    },
    {
      icon: Award,
      number: "100+",
      label: "Industry Awards",
      description: "Recognition for excellence",
    },
  ];

  const achievements = [
    {
      icon: Star,
      title: "Industry Recognition",
      description:
        "Our facilitators are regularly featured in major media outlets and industry publications.",
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description:
        "Thousands of successful property transactions and investment strategies implemented.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Building a strong network of educated and successful property investors across Singapore.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16" data-oid="i4587r-">
      {/* Stats Grid */}
      <motion.div
        className="grid md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        data-oid="ir9iaxm"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            data-oid="my93vse"
          >
            <div
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              data-oid="w4lkque"
            >
              <stat.icon className="w-8 h-8 text-blue-600" data-oid="ucka93o" />
            </div>
            <div
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="9cdl00p"
            >
              {stat.number}
            </div>
            <div
              className="text-lg font-semibold text-gray-800 mb-2"
              data-oid="_g7c-_."
            >
              {stat.label}
            </div>
            <div className="text-sm text-gray-600" data-oid="k86.-6s">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        data-oid="jvnvxb0"
      >
        <div className="text-center mb-12" data-oid="03z5628">
          <h3 className="text-3xl font-bold mb-4" data-oid="jqtf:x6">
            Why Our Facilitators Stand Out
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto" data-oid="d2165kh">
            Our team combines deep industry knowledge with practical teaching
            experience, ensuring you get both theoretical understanding and
            real-world insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-oid="kl7jlh.">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
              data-oid="m-1e9ba"
            >
              <div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="03o3z1d"
              >
                <achievement.icon
                  className="w-8 h-8 text-white"
                  data-oid="c7ase94"
                />
              </div>
              <h4 className="text-xl font-bold mb-3" data-oid="p3xetr_">
                {achievement.title}
              </h4>
              <p className="text-blue-100 leading-relaxed" data-oid="wq3top-">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
