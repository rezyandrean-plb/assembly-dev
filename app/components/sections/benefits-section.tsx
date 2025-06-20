"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BarChart2, BookOpen, Compass, Shield, Zap } from "lucide-react";

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-orange-500" data-oid="vup6z-p" />,
      title: "Enhanced Knowledge",
      description:
        "Gain deep insights into Singapore's property market dynamics and trends",
    },
    {
      icon: <Compass className="h-6 w-6 text-orange-500" data-oid="w4-z:uh" />,
      title: "Strategic Navigation",
      description:
        "Learn to navigate complex regulations and market conditions with confidence",
    },
    {
      icon: (
        <BarChart2 className="h-6 w-6 text-orange-500" data-oid="uvn0zua" />
      ),

      title: "Career Growth",
      description:
        "Develop skills that can accelerate your professional advancement",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" data-oid=".s:fax7" />,
      title: "Risk Mitigation",
      description:
        "Identify potential pitfalls and develop strategies to protect investments",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" data-oid="2bwgx3m" />,
      title: "Competitive Edge",
      description:
        "Stay ahead with exclusive insights and early access to market information",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" data-oid="sf7webl" />,
      title: "Industry Recognition",
      description:
        "Build your reputation as a knowledgeable professional in the field",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="wyy:f7.">
      <div className="container mx-auto px-4" data-oid="-z9r6od">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-oid="ccxu7n."
        >
          <h2 className="text-4xl font-bold text-gray-900" data-oid="67jtuse">
            What You'll Gain
          </h2>
          <p
            className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
            data-oid="3nww89h"
          >
            Tangible outcomes from engaging with Assembly's content and
            community
          </p>
          <div
            className="w-20 h-1 bg-orange-500 mx-auto mt-4"
            data-oid="1-.wf40"
          ></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          data-oid="dv.qzmm"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              data-oid="icx.egf"
            >
              <div
                className="mr-4 p-3 bg-orange-100 rounded-full"
                data-oid="pfiqdg6"
              >
                {benefit.icon}
              </div>
              <div data-oid="t4vbx.s">
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  data-oid="ejtiej."
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600" data-oid="n6z_.27">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
