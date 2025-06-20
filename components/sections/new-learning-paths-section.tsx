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
      icon: <TrendingUp className="w-8 h-8" data-oid="e8nmns2" />,
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
      icon: <Home className="w-8 h-8" data-oid="shw88x9" />,
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
      icon: <Building className="w-8 h-8" data-oid=":7awns7" />,
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
      icon: <MapPin className="w-8 h-8" data-oid="aormcbx" />,
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="oswiu7t">
      <div className="container mx-auto px-4" data-oid="cs9i7vm">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="l8.r:zi"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900"
            data-oid="5osl0r1"
          >
            Choose Your Learning Path
          </h2>
          <p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            data-oid="cw0vrad"
          >
            Structured learning journeys designed to take you from beginner to
            expert in your chosen specialization
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" data-oid="-77xdz1">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              className={`group relative ${path.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="dkf_c_7"
            >
              {/* Header */}
              <div
                className="flex items-start justify-between mb-6"
                data-oid="x2hc09u"
              >
                <div
                  className={`p-4 rounded-2xl ${path.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  data-oid="h_lu:9d"
                >
                  {path.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/80 text-neutral-700"
                  data-oid="pmmhxzs"
                >
                  {path.level}
                </Badge>
              </div>

              <h3
                className="text-2xl font-bold text-neutral-900 mb-2"
                data-oid="vga4td0"
              >
                {path.title}
              </h3>
              <p
                className="text-lg font-medium text-neutral-700 mb-4"
                data-oid="cjx4ju:"
              >
                {path.subtitle}
              </p>
              <p
                className="text-neutral-600 mb-6 leading-relaxed"
                data-oid="ar26b28"
              >
                {path.description}
              </p>

              {/* Meta Info */}
              <div
                className="flex items-center gap-6 mb-6 text-sm text-neutral-600"
                data-oid="ax6buxm"
              >
                <div className="flex items-center gap-2" data-oid=":c94qvc">
                  <Clock className="w-4 h-4" data-oid="b-g2._b" />
                  <span data-oid="9wlkbvn">{path.duration}</span>
                </div>
                <div className="flex items-center gap-2" data-oid="mq976k_">
                  <CheckCircle className="w-4 h-4" data-oid="gnw4z7z" />
                  <span data-oid="gg7f7ct">{path.courses} courses</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8" data-oid="5ktcvp3">
                {path.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                    data-oid="g2gn25v"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-success flex-shrink-0"
                      data-oid="jgoe7g3"
                    />

                    <span className="text-neutral-700" data-oid="o2e4x_r">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/learning-paths/${path.slug}`} data-oid="g.mv4sg">
                <Button
                  className={`w-full ${path.color} hover:shadow-lg text-white group-hover:scale-105 transition-all duration-300`}
                  size="lg"
                  data-oid="t.jb0lf"
                >
                  Start This Path
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    data-oid="7kyw8lp"
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
          data-oid="x-iq9tj"
        >
          <h3 className="text-3xl font-bold mb-4" data-oid="bca0t92">
            Not Sure Which Path to Choose?
          </h3>
          <p className="text-xl mb-8 opacity-90" data-oid="8b56wbd">
            Take our quick assessment to find the perfect learning path for your
            goals and experience level.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="udvp3fn"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-neutral-100 px-8 py-3"
              data-oid="1s48a3e"
            >
              Take Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              data-oid="fy.4e.a"
            >
              Speak to Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
