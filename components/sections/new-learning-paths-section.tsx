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
      icon: <TrendingUp className="w-8 h-8" data-oid="y:o77zv" />,
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
      icon: <Home className="w-8 h-8" data-oid="znxzhw-" />,
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
      icon: <Building className="w-8 h-8" data-oid=".p36:bb" />,
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
      icon: <MapPin className="w-8 h-8" data-oid="z7mqntb" />,
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="yir:9c.">
      <div className="container mx-auto px-4" data-oid="o-i4q08">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="hhwk-26"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900"
            data-oid="apyy29u"
          >
            Choose Your Learning Path
          </h2>
          <p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            data-oid=".t9kz8a"
          >
            Structured learning journeys designed to take you from beginner to
            expert in your chosen specialization
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" data-oid="20jj6yj">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              className={`group relative ${path.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="h:i.ws."
            >
              {/* Header */}
              <div
                className="flex items-start justify-between mb-6"
                data-oid="gag95c7"
              >
                <div
                  className={`p-4 rounded-2xl ${path.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  data-oid="xs43hb6"
                >
                  {path.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/80 text-neutral-700"
                  data-oid="i2zzkhp"
                >
                  {path.level}
                </Badge>
              </div>

              <h3
                className="text-2xl font-bold text-neutral-900 mb-2"
                data-oid="hh0u:m1"
              >
                {path.title}
              </h3>
              <p
                className="text-lg font-medium text-neutral-700 mb-4"
                data-oid="8r.ujg1"
              >
                {path.subtitle}
              </p>
              <p
                className="text-neutral-600 mb-6 leading-relaxed"
                data-oid="6-n9ogt"
              >
                {path.description}
              </p>

              {/* Meta Info */}
              <div
                className="flex items-center gap-6 mb-6 text-sm text-neutral-600"
                data-oid="-k4.1be"
              >
                <div className="flex items-center gap-2" data-oid="bqv.-d6">
                  <Clock className="w-4 h-4" data-oid="l59_itq" />
                  <span data-oid="c-pa928">{path.duration}</span>
                </div>
                <div className="flex items-center gap-2" data-oid="xva:hzh">
                  <CheckCircle className="w-4 h-4" data-oid="bc5tb.c" />
                  <span data-oid="h6o8rlx">{path.courses} courses</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8" data-oid="tc.k2dw">
                {path.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                    data-oid="8x2txjz"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-success flex-shrink-0"
                      data-oid="fao-1ru"
                    />

                    <span className="text-neutral-700" data-oid="3jq6_xu">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/learning-paths/${path.slug}`} data-oid="0ib-2y_">
                <Button
                  className={`w-full ${path.color} hover:shadow-lg text-white group-hover:scale-105 transition-all duration-300`}
                  size="lg"
                  data-oid="_b-pxa."
                >
                  Start This Path
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    data-oid="znk2c_-"
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
          data-oid="gis_fs7"
        >
          <h3 className="text-3xl font-bold mb-4" data-oid="-43lp2z">
            Not Sure Which Path to Choose?
          </h3>
          <p className="text-xl mb-8 opacity-90" data-oid="5xjx27i">
            Take our quick assessment to find the perfect learning path for your
            goals and experience level.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="4-llgfd"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-neutral-100 px-8 py-3"
              data-oid="cozokb."
            >
              Take Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              data-oid="_wk8db8"
            >
              Speak to Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
