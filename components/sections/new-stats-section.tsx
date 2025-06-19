"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Users,
  BookOpen,
  Award,
  DollarSign,
  Globe,
} from "lucide-react";

export default function NewStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    success: 0,
    portfolio: 0,
    countries: 0,
    satisfaction: 0,
  });

  const finalValues = {
    students: 15000,
    courses: 50,
    success: 95,
    portfolio: 2.5,
    countries: 12,
    satisfaction: 4.9,
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.keys(finalValues).map((key) => {
        const finalValue = finalValues[key as keyof typeof finalValues];
        const increment = finalValue / steps;
        let currentValue = 0;
        let step = 0;

        return setInterval(() => {
          step++;
          currentValue = Math.min(increment * step, finalValue);

          setCounters((prev) => ({
            ...prev,
            [key]: currentValue,
          }));

          if (step >= steps) {
            clearInterval(intervals.find((interval) => interval === this));
          }
        }, stepDuration);
      });

      return () => {
        intervals.forEach((interval) => clearInterval(interval));
      };
    }
  }, [isInView]);

  const stats = [
    {
      icon: <Users className="w-8 h-8" data-oid="vnr-odk" />,
      value: Math.floor(counters.students).toLocaleString(),
      suffix: "+",
      label: "Active Students",
      description: "Learning and growing with us",
      color: "bg-primary-light",
    },
    {
      icon: <BookOpen className="w-8 h-8" data-oid="xjutah3" />,
      value: Math.floor(counters.courses),
      suffix: "+",
      label: "Expert Courses",
      description: "Comprehensive learning materials",
      color: "bg-success",
    },
    {
      icon: <TrendingUp className="w-8 h-8" data-oid="qk-wxuu" />,
      value: Math.floor(counters.success),
      suffix: "%",
      label: "Success Rate",
      description: "Students achieving their goals",
      color: "bg-secondary",
    },
    {
      icon: <DollarSign className="w-8 h-8" data-oid="6u36tm_" />,
      value: counters.portfolio.toFixed(1),
      suffix: "B+",
      label: "Portfolio Value",
      description: "Combined student investments",
      color: "bg-accent",
    },
    {
      icon: <Globe className="w-8 h-8" data-oid="6s7ay.t" />,
      value: Math.floor(counters.countries),
      suffix: "+",
      label: "Countries",
      description: "Global student community",
      color: "bg-primary-darker",
    },
    {
      icon: <Award className="w-8 h-8" data-oid="-5-a_22" />,
      value: counters.satisfaction.toFixed(1),
      suffix: "/5",
      label: "Satisfaction",
      description: "Average student rating",
      color: "bg-warning",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary text-white relative overflow-hidden"
      data-oid="dosmvgg"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" data-oid="-:_ssa4">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          data-oid="uti2dac"
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        data-oid="uevnz25"
      >
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="5a.icil"
        />

        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          data-oid="zm4rbns"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="i_zmluj">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="rxgwdag"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-white"
            data-oid="c91c73a"
          >
            Our Impact in Numbers
          </h2>
          <p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            data-oid="nlykmuj"
          >
            Join a thriving community of successful real estate investors from
            around the world
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="w0e1hif"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-oid="9lz_-dh"
            >
              <div
                className={`inline-flex p-4 rounded-2xl ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                data-oid="vxjmpoa"
              >
                <div className="text-white" data-oid=".f8udxj">
                  {stat.icon}
                </div>
              </div>

              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                data-oid="r55vgh3"
              >
                {stat.value}
                <span
                  className="text-2xl lg:text-3xl text-white/60"
                  data-oid="1k69b9i"
                >
                  {stat.suffix}
                </span>
              </div>

              <h3
                className="text-xl font-semibold mb-2 text-white"
                data-oid="2gnx:x8"
              >
                {stat.label}
              </h3>

              <p className="text-white/70" data-oid="a6:r8.z">
                {stat.description}
              </p>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="mqr7qmi"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-oid="46lvgc9"
        >
          <div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
            data-oid="550q227"
          >
            <h3 className="text-2xl font-bold mb-4" data-oid="wb1j-9v">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/80 mb-6" data-oid="j7h2l_5">
              Start your real estate investment journey today and become part of
              our growing community.
            </p>
            <motion.button
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="pmbblb:"
            >
              Start Learning Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
