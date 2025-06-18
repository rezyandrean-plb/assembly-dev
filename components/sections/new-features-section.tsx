"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Target,
  Lightbulb,
  BarChart3,
} from "lucide-react";

export default function NewFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" data-oid="qd2v5uc" />,
      title: "Expert-Led Courses",
      description:
        "Learn from Singapore's top real estate professionals with proven track records.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" data-oid="0jsx1-k" />,
      title: "Community Learning",
      description:
        "Join a vibrant community of investors sharing insights and experiences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" data-oid="l4thw.m" />,
      title: "Market Analysis",
      description:
        "Get real-time market insights and trends to make informed investment decisions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" data-oid="b6yr77l" />,
      title: "Risk Management",
      description:
        "Learn proven strategies to minimize risks and maximize returns on your investments.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Clock className="w-8 h-8" data-oid="xspue.:" />,
      title: "Flexible Learning",
      description:
        "Study at your own pace with lifetime access to all course materials.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Award className="w-8 h-8" data-oid="g.e28l1" />,
      title: "Certification",
      description:
        "Earn recognized certificates to validate your real estate investment expertise.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    {
      icon: <Target className="w-6 h-6" data-oid="j6.knc5" />,
      value: "95%",
      label: "Success Rate",
      description: "Of our students achieve their investment goals",
    },
    {
      icon: <Lightbulb className="w-6 h-6" data-oid="1qy.6xm" />,
      value: "50+",
      label: "Expert Instructors",
      description: "Industry professionals sharing their knowledge",
    },
    {
      icon: <BarChart3 className="w-6 h-6" data-oid="_vn-_lf" />,
      value: "$2.5B+",
      label: "Portfolio Value",
      description: "Combined value of student portfolios",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="4.:salp">
      <div className="container mx-auto px-4" data-oid="qthqofi">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="zeb3esq"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent"
            data-oid="w36qhz_"
          >
            Why Choose Assembly.sg?
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="zcef4o7"
          >
            We provide comprehensive real estate education that transforms
            beginners into confident investors
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          data-oid="h1s7s27"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="o6fecy-"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                data-oid="0q2bbhq"
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-semibold text-gray-900 mb-3"
                data-oid="t7y1elf"
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-oid="fhndos.">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-oid="2t17m81"
        >
          <div className="text-center mb-12" data-oid="1z-7gyh">
            <h3
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="lpj3hnd"
            >
              Proven Results That Speak for Themselves
            </h3>
            <p className="text-gray-600 text-lg" data-oid="u51xsqr">
              Join thousands of successful investors who've transformed their
              financial future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-oid="1w5b4xd">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.8,
                }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                data-oid="b5glite"
              >
                <div
                  className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-4"
                  data-oid="drko:1e"
                >
                  <div className="text-blue-600" data-oid="7ezk2c5">
                    {stat.icon}
                  </div>
                </div>
                <div
                  className="text-4xl font-bold text-gray-900 mb-2"
                  data-oid=".gjd8zw"
                >
                  {stat.value}
                </div>
                <div
                  className="text-lg font-semibold text-gray-800 mb-2"
                  data-oid="id.nzgo"
                >
                  {stat.label}
                </div>
                <div className="text-gray-600" data-oid="ax.d-hm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
