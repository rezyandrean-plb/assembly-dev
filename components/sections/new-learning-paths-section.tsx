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
      title: "Beginner Property Investor",
      subtitle:
        "Build a strong foundation in property investment and understand the Singapore market",
      description:
        "Perfect for newcomers to real estate investment. Learn the fundamentals and build a solid foundation.",
      icon: <TrendingUp className="w-8 h-8" />,
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
      title: "HDB Upgrader & Strategist",
      subtitle:
        "For HDB owners or upgraders aiming to move to condos or optimize their property journey",
      description:
        "Comprehensive training on HDB regulations, upgrading strategies, and maximizing HDB investment returns.",
      icon: <Home className="w-8 h-8" />,
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
      title: "Condo Investment Specialist",
      subtitle:
        "Master the art of investing in condominiums, from selection to portfolio building",
      description:
        "Advanced strategies for condo investments, new launches, and building a profitable condo portfolio.",
      icon: <Building className="w-8 h-8" />,
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
      icon: <MapPin className="w-8 h-8" />,
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Structured learning journeys designed to take you from beginner to
            expert in your chosen specialization
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {learningPaths.slice(0, 3).map((path, index) => (
            <motion.div
              key={path.id}
              className={`group relative ${path.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`p-4 rounded-2xl ${path.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {path.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/80 text-neutral-700"
                >
                  {path.level}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {path.title}
              </h3>
              <p className="text-lg font-medium text-neutral-700 mb-4">
                {path.subtitle}
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {path.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{path.courses} courses</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {path.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />

                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/learning-paths/${path.slug}`}>
                <Button
                  className={`w-full ${path.color} hover:shadow-lg text-white group-hover:scale-105 transition-all duration-300`}
                  size="lg"
                >
                  Start This Path
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
        >
          <h3 className="text-3xl font-bold mb-4">
            Not Sure Which Path to Choose?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Take our quick assessment to find the perfect learning path for your
            goals and experience level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-3"
            >
              Speak to Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
