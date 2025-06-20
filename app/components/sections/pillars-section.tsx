"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export default function PillarsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const pillars = [
    {
      icon: (
        <TrendingUp className="h-12 w-12 text-orange-500" data-oid="5u9hu5l" />
      ),

      title: "Market Trends",
      description:
        "Stay informed with the latest data and analysis on Singapore's property market movements.",
    },
    {
      icon: (
        <BookOpen className="h-12 w-12 text-orange-500" data-oid="j7a3kq8" />
      ),

      title: "Regulations & Compliance",
      description:
        "Navigate the complex regulatory landscape with our comprehensive guides and updates.",
    },
    {
      icon: (
        <Lightbulb className="h-12 w-12 text-orange-500" data-oid="wf_ghfj" />
      ),

      title: "Marketing Strategies",
      description:
        "Learn effective techniques to market properties and build your personal brand.",
    },
    {
      icon: (
        <BarChart3 className="h-12 w-12 text-orange-500" data-oid="-jb0zsr" />
      ),

      title: "Professional Development",
      description:
        "Enhance your skills and knowledge with our curated learning resources and expert insights.",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="mvcvno2">
      <div className="container mx-auto px-4" data-oid="8soohl_">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-oid="on.1u1y"
        >
          <h2 className="text-4xl font-bold text-gray-900" data-oid="aoeu-:n">
            Pillars of Content
          </h2>
          <p
            className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
            data-oid="jgokh0j"
          >
            Explore key areas of knowledge to build your expertise in
            Singapore's real estate market
          </p>
          <div
            className="w-20 h-1 bg-orange-500 mx-auto mt-4"
            data-oid="5s1juqi"
          ></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          data-oid="3gyiqtr"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              data-oid="nnq-myh"
            >
              <div
                className="flex flex-col items-center text-center"
                data-oid="ao.wqg1"
              >
                <div className="mb-6" data-oid="_kvl7js">
                  {pillar.icon}
                </div>
                <h3
                  className="text-xl font-bold text-gray-800 mb-3"
                  data-oid="rv.96em"
                >
                  {pillar.title}
                </h3>
                <p className="text-gray-600" data-oid="s7upiih">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
