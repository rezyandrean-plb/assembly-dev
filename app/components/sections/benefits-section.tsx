"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BarChart2, BookOpen, Compass, Shield, Zap } from "lucide-react";

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-orange-500" data-oid="m.pp1u:" />,
      title: "Enhanced Knowledge",
      description:
        "Gain deep insights into Singapore's property market dynamics and trends",
    },
    {
      icon: <Compass className="h-6 w-6 text-orange-500" data-oid="wfitnxh" />,
      title: "Strategic Navigation",
      description:
        "Learn to navigate complex regulations and market conditions with confidence",
    },
    {
      icon: (
        <BarChart2 className="h-6 w-6 text-orange-500" data-oid="xaqd:vh" />
      ),

      title: "Career Growth",
      description:
        "Develop skills that can accelerate your professional advancement",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" data-oid="6a2k_6s" />,
      title: "Risk Mitigation",
      description:
        "Identify potential pitfalls and develop strategies to protect investments",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" data-oid="5tc5qfv" />,
      title: "Competitive Edge",
      description:
        "Stay ahead with exclusive insights and early access to market information",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" data-oid="1c7knj8" />,
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
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="txnrruc">
      <div className="container mx-auto px-4" data-oid="pow6nzx">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-oid="1z86z.z"
        >
          <h2 className="text-4xl font-bold text-gray-900" data-oid="jpw.tog">
            What You'll Gain
          </h2>
          <p
            className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
            data-oid="o50swvp"
          >
            Tangible outcomes from engaging with Assembly's content and
            community
          </p>
          <div
            className="w-20 h-1 bg-orange-500 mx-auto mt-4"
            data-oid="39rgsrl"
          ></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          data-oid="-10:wke"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              data-oid="v9gbwyc"
            >
              <div
                className="mr-4 p-3 bg-orange-100 rounded-full"
                data-oid="i3m4arh"
              >
                {benefit.icon}
              </div>
              <div data-oid="hls3sdn">
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  data-oid="huspp9h"
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600" data-oid="udc6os2">
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
