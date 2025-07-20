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
      icon: <BookOpen className="w-8 h-8" data-oid="2x1w74d" />,
      title: "Expert-Led Courses",
      description:
        "Learn from Singapore's top real estate professionals with proven track records.",
      color: "from-primary to-primary-light",
    },
    {
      icon: <Users className="w-8 h-8" data-oid="vu_olao" />,
      title: "Community Learning",
      description:
        "Join a vibrant community of investors sharing insights and experiences.",
      color: "from-primary-light to-primary-lighter",
    },
    {
      icon: <TrendingUp className="w-8 h-8" data-oid="an3c._u" />,
      title: "Market Analysis",
      description:
        "Get real-time market insights and trends to make informed investment decisions.",
      color: "from-success to-primary",
    },
    {
      icon: <Shield className="w-8 h-8" data-oid="9sojyib" />,
      title: "Risk Management",
      description:
        "Learn proven strategies to minimize risks and maximize returns on your investments.",
      color: "from-accent to-primary",
    },
    {
      icon: <Clock className="w-8 h-8" data-oid="f448d89" />,
      title: "Flexible Learning",
      description:
        "Study at your own pace with lifetime access to all course materials.",
      color: "from-primary-dark to-primary",
    },
    {
      icon: <Award className="w-8 h-8" data-oid="8h5dyaw" />,
      title: "Certification",
      description:
        "Earn recognized certificates to validate your real estate investment expertise.",
      color: "from-accent to-warning",
    },
  ];

  const stats = [
    {
      icon: <Target className="w-6 h-6" data-oid="vs5grc7" />,
      value: "95%",
      label: "Success Rate",
      description: "Of our students achieve their investment goals",
    },
    {
      icon: <Lightbulb className="w-6 h-6" data-oid="3_7b6.p" />,
      value: "50+",
      label: "Expert Instructors",
      description: "Industry professionals sharing their knowledge",
    },
    {
      icon: <BarChart3 className="w-6 h-6" data-oid="w.wlql5" />,
      value: "$2.5B+",
      label: "Portfolio Value",
      description: "Combined value of student portfolios",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="yitdf.7">
      <div className="container mx-auto px-4" data-oid="qmzh_w.">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="c3f:o_3"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent"
            data-oid="bjsdmkf"
          >
            Why Choose Assembly.sg?
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid=":bmn7zu"
          >
            We provide comprehensive real estate education that transforms
            beginners into confident investors
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          data-oid="zbup3s0"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="6-xj6i:"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                data-oid="ss8:8hq"
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-semibold text-gray-900 mb-3"
                data-oid="i1.dkxp"
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-oid="qusu.ik">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-oid="gy3rfo8"
        >
          <div className="text-center mb-12" data-oid="tff:syc">
            <h3
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="-g5atau"
            >
              Proven Results That Speak for Themselves
            </h3>
            <p className="text-gray-600 text-lg" data-oid="73_k5l3">
              Join thousands of successful investors who've transformed their
              financial future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-oid="79r--70">
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
                data-oid="1oql_:n"
              >
                <div
                  className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-4"
                  data-oid="ck4uug5"
                >
                  <div className="text-primary" data-oid="ibo37xk">
                    {stat.icon}
                  </div>
                </div>
                <div
                  className="text-4xl font-bold text-gray-900 mb-2"
                  data-oid="evlroaa"
                >
                  {stat.value}
                </div>
                <div
                  className="text-lg font-semibold text-gray-800 mb-2"
                  data-oid="nq1dggi"
                >
                  {stat.label}
                </div>
                <div className="text-gray-600" data-oid="6mtaffv">
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
