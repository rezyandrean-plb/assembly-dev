"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BarChart2, BookOpen, Compass, Shield, Zap } from "lucide-react";

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-orange-500" data-oid=".1ks06d" />,
      title: "Enhanced Knowledge",
      description:
        "Gain deep insights into Singapore's property market dynamics and trends",
    },
    {
      icon: <Compass className="h-6 w-6 text-orange-500" data-oid="9i.z4px" />,
      title: "Strategic Navigation",
      description:
        "Learn to navigate complex regulations and market conditions with confidence",
    },
    {
      icon: (
        <BarChart2 className="h-6 w-6 text-orange-500" data-oid="4vkm7hl" />
      ),

      title: "Career Growth",
      description:
        "Develop skills that can accelerate your professional advancement",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" data-oid="6..ei7n" />,
      title: "Risk Mitigation",
      description:
        "Identify potential pitfalls and develop strategies to protect investments",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" data-oid="ft8x.53" />,
      title: "Competitive Edge",
      description:
        "Stay ahead with exclusive insights and early access to market information",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" data-oid="mi:g_xy" />,
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
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="_g726ul">
      <div className="container mx-auto px-4" data-oid="cpk2qva">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-oid="v77pz:-"
        >
          <h2 className="text-4xl font-bold text-gray-900" data-oid="il40q_0">
            What You'll Gain
          </h2>
          <p
            className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
            data-oid="kvwluoz"
          >
            Tangible outcomes from engaging with Assembly's content and
            community
          </p>
          <div
            className="w-20 h-1 bg-orange-500 mx-auto mt-4"
            data-oid="1yjc:zc"
          ></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          data-oid="x-6ct4n"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              data-oid="ksepwxw"
            >
              <div
                className="mr-4 p-3 bg-orange-100 rounded-full"
                data-oid="j25bj6k"
              >
                {benefit.icon}
              </div>
              <div data-oid="clovgc2">
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  data-oid="ewk1qvc"
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600" data-oid="39zs5ij">
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
