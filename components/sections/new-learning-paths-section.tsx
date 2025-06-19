"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Home,
  Building,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function NewLearningPathsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const learningPaths = [
    {
      id: 1,
      title: "Beginner's Path",
      subtitle: "Start Your Investment Journey",
      description:
        "Perfect for newcomers to real estate investment. Learn the fundamentals and build a solid foundation.",
      icon: <TrendingUp className="w-8 h-8" data-oid="7_c18l3" />,
      duration: "4-6 weeks",
      courses: 8,
      level: "Beginner",
      color: "bg-success",
      bgColor: "bg-success/5",
      features: [
        "Real Estate Investment Basics",
        "Market Analysis Fundamentals",
        "Risk Assessment",
        "Portfolio Planning",
      ],

      slug: "beginner",
    },
    {
      id: 2,
      title: "HDB Specialist",
      subtitle: "Master HDB Investments",
      description:
        "Comprehensive training on HDB regulations, upgrading strategies, and maximizing HDB investment returns.",
      icon: <Home className="w-8 h-8" data-oid="qhgg7.p" />,
      duration: "6-8 weeks",
      courses: 12,
      level: "Intermediate",
      color: "bg-primary",
      bgColor: "bg-primary/5",
      features: [
        "HDB Regulations & Policies",
        "Upgrading Strategies",
        "Resale Market Analysis",
        "Investment Optimization",
      ],

      slug: "hdb",
    },
    {
      id: 3,
      title: "Condo Expert",
      subtitle: "Condominium Investment Mastery",
      description:
        "Advanced strategies for condo investments, new launches, and building a profitable condo portfolio.",
      icon: <Building className="w-8 h-8" data-oid="o_3t21:" />,
      duration: "8-10 weeks",
      courses: 15,
      level: "Advanced",
      color: "bg-secondary",
      bgColor: "bg-secondary/5",
      features: [
        "New Launch Analysis",
        "Condo Market Trends",
        "Portfolio Diversification",
        "Exit Strategies",
      ],

      slug: "condo",
    },
    {
      id: 4,
      title: "Landed Property Pro",
      subtitle: "Luxury Property Investment",
      description:
        "Elite training for landed property investments, including terrace houses, semi-detached, and bungalows.",
      icon: <MapPin className="w-8 h-8" data-oid="r5.11gc" />,
      duration: "10-12 weeks",
      courses: 18,
      level: "Expert",
      color: "bg-accent",
      bgColor: "bg-accent/5",
      features: [
        "Landed Property Analysis",
        "High-Value Negotiations",
        "Development Potential",
        "Luxury Market Insights",
      ],

      slug: "landed",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="jecfuf9">
      <div className="container mx-auto px-4" data-oid="3q9bh8.">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="00kqkjs"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900"
            data-oid="zwmrk_n"
          >
            Choose Your Learning Path
          </h2>
          <p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            data-oid="72m5.9:"
          >
            Structured learning journeys designed to take you from beginner to
            expert in your chosen specialization
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" data-oid="_dgh9yt">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              className={`group relative ${path.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="27::bhj"
            >
              {/* Header */}
              <div
                className="flex items-start justify-between mb-6"
                data-oid="bj4jjv."
              >
                <div
                  className={`p-4 rounded-2xl ${path.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  data-oid="p73btng"
                >
                  {path.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/80 text-neutral-700"
                  data-oid="9ryjut_"
                >
                  {path.level}
                </Badge>
              </div>

              <h3
                className="text-2xl font-bold text-neutral-900 mb-2"
                data-oid="cubn2po"
              >
                {path.title}
              </h3>
              <p
                className="text-lg font-medium text-neutral-700 mb-4"
                data-oid="4bl_dkl"
              >
                {path.subtitle}
              </p>
              <p
                className="text-neutral-600 mb-6 leading-relaxed"
                data-oid="y-kvw83"
              >
                {path.description}
              </p>

              {/* Meta Info */}
              <div
                className="flex items-center gap-6 mb-6 text-sm text-neutral-600"
                data-oid="e_2no2d"
              >
                <div className="flex items-center gap-2" data-oid="_s56sm2">
                  <Clock className="w-4 h-4" data-oid="_:mxdhv" />
                  <span data-oid="_p2c_nk">{path.duration}</span>
                </div>
                <div className="flex items-center gap-2" data-oid="p0e2-k9">
                  <CheckCircle className="w-4 h-4" data-oid="yx5fp7m" />
                  <span data-oid="aj7w13d">{path.courses} courses</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8" data-oid="z70541p">
                {path.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                    data-oid="h5teou8"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-success flex-shrink-0"
                      data-oid="qknpui9"
                    />

                    <span className="text-neutral-700" data-oid="wknn2h5">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/learning-paths/${path.slug}`} data-oid=":me4.0e">
                <Button
                  className={`w-full ${path.color} hover:shadow-lg text-white group-hover:scale-105 transition-all duration-300`}
                  size="lg"
                  data-oid="j.vrtpg"
                >
                  Start This Path
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    data-oid="mub.e1a"
                  />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="bg-primary rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-oid="5vrnbh."
        >
          <h3 className="text-3xl font-bold mb-4" data-oid="vk5j0gl">
            Not Sure Which Path to Choose?
          </h3>
          <p className="text-xl mb-8 opacity-90" data-oid="n2p99t2">
            Take our quick assessment to find the perfect learning path for your
            goals and experience level.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="15e4f.m"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-neutral-100 px-8 py-3"
              data-oid="yzbwvrg"
            >
              Take Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              data-oid="seums_:"
            >
              Speak to Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
