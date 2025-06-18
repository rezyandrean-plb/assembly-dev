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
      icon: <TrendingUp className="w-8 h-8" data-oid="o_.vr7k" />,
      duration: "4-6 weeks",
      courses: 8,
      level: "Beginner",
      color: "bg-green-500",
      bgColor: "bg-green-50",
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
      icon: <Home className="w-8 h-8" data-oid=".898139" />,
      duration: "6-8 weeks",
      courses: 12,
      level: "Intermediate",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
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
      icon: <Building className="w-8 h-8" data-oid="8bvojac" />,
      duration: "8-10 weeks",
      courses: 15,
      level: "Advanced",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
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
      icon: <MapPin className="w-8 h-8" data-oid="j64.st2" />,
      duration: "10-12 weeks",
      courses: 18,
      level: "Expert",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="_j2v8n_">
      <div className="container mx-auto px-4" data-oid="sqgvtvt">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="x:2:la."
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            data-oid="2ft.x-t"
          >
            Choose Your Learning Path
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="xyg6wvl"
          >
            Structured learning journeys designed to take you from beginner to
            expert in your chosen specialization
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" data-oid="v2an28k">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              className={`group relative ${path.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="n4uaz9z"
            >
              {/* Header */}
              <div
                className="flex items-start justify-between mb-6"
                data-oid=".nzwx.d"
              >
                <div
                  className={`p-4 rounded-2xl ${path.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  data-oid="8q-.j0t"
                >
                  {path.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/80 text-gray-700"
                  data-oid="1z6wt2d"
                >
                  {path.level}
                </Badge>
              </div>

              <h3
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="spvxeyq"
              >
                {path.title}
              </h3>
              <p
                className="text-lg font-medium text-gray-700 mb-4"
                data-oid="5-50qa6"
              >
                {path.subtitle}
              </p>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                data-oid="697uzq8"
              >
                {path.description}
              </p>

              {/* Meta Info */}
              <div
                className="flex items-center gap-6 mb-6 text-sm text-gray-600"
                data-oid="-tb-c61"
              >
                <div className="flex items-center gap-2" data-oid="mivcrqq">
                  <Clock className="w-4 h-4" data-oid="yzt653q" />
                  <span data-oid="vbge4hf">{path.duration}</span>
                </div>
                <div className="flex items-center gap-2" data-oid="aecx88x">
                  <CheckCircle className="w-4 h-4" data-oid="3oy22rq" />
                  <span data-oid="_:-7cqb">{path.courses} courses</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8" data-oid="forysxm">
                {path.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                    data-oid="u93-k._"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      data-oid="7e0g566"
                    />

                    <span className="text-gray-700" data-oid="f:kl48i">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/learning-paths/${path.slug}`} data-oid="2g7vczt">
                <Button
                  className={`w-full ${path.color} hover:shadow-lg text-white group-hover:scale-105 transition-all duration-300`}
                  size="lg"
                  data-oid="gi8xl3u"
                >
                  Start This Path
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    data-oid="flpyf6q"
                  />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="bg-blue-600 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-oid="aiwh1-d"
        >
          <h3 className="text-3xl font-bold mb-4" data-oid="q:nwcrc">
            Not Sure Which Path to Choose?
          </h3>
          <p className="text-xl mb-8 opacity-90" data-oid="f.s5ui2">
            Take our quick assessment to find the perfect learning path for your
            goals and experience level.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid=":1upngn"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              data-oid="2aqvtta"
            >
              Take Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              data-oid=".mb78qw"
            >
              Speak to Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
