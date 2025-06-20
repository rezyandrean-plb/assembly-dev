"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Heart,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { getAllFacilitators } from "@/app/data/facilitators";
import { FacilitatorCard } from "./components/facilitator-card";
import { FacilitatorStats } from "./components/facilitator-stats";
import { FacilitatorHero } from "./components/facilitator-hero";

export default function FacilitatorsPage() {
  const facilitators = getAllFacilitators();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <Navbar data-oid="4_0ch:p" />
      <div className="bg-white" data-oid="weavtvu">
        <FacilitatorHero data-oid="nrx3c1u" />

        {/* Main Facilitators Section */}
        <section ref={sectionRef} className="py-24 bg-white" data-oid="q9otwpr">
          <div className="container mx-auto px-4" data-oid="dedeund">
            <div className="max-w-7xl mx-auto" data-oid="jk3w079">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8 }}
                data-oid="-3vh3sc"
              >
                <div
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  data-oid="tdu8t-o"
                >
                  <Users className="w-4 h-4" data-oid="h2q95i." />
                  Meet Our Expert Team
                </div>
                <h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  data-oid="-0wwfy."
                >
                  Learn from Industry Leaders
                </h2>
                <p
                  className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  data-oid="e64m:yb"
                >
                  Our facilitators bring decades of combined experience in
                  Singapore's property market. Each expert specializes in
                  different aspects of real estate investment, ensuring you get
                  comprehensive, practical knowledge from true industry
                  veterans.
                </p>
              </motion.div>

              {/* Facilitators Grid */}
              <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                data-oid="yo02vkj"
              >
                {facilitators.map((facilitator, index) => (
                  <motion.div
                    key={facilitator.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 30,
                    }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    data-oid="0hi_ffa"
                  >
                    <FacilitatorCard
                      facilitator={facilitator}
                      data-oid="4f01vu5"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Stats Section */}
              <FacilitatorStats data-oid="16.z3n-" />

              {/* CTA Section */}
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                data-oid="ea2zk66"
              >
                <div
                  className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-12"
                  data-oid="egobncy"
                >
                  <h3
                    className="text-3xl font-bold text-gray-900 mb-4"
                    data-oid="rl2tdyo"
                  >
                    Ready to Learn from the Best?
                  </h3>
                  <p
                    className="text-gray-600 mb-8 max-w-2xl mx-auto"
                    data-oid="weu:5ve"
                  >
                    Join thousands of successful property investors who have
                    learned from our expert facilitators. Start your journey
                    today with our comprehensive courses and personalized
                    guidance.
                  </p>
                  <div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    data-oid="5uqnyt0"
                  >
                    <Link href="/courses" data-oid="8-7m83k">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 group"
                        data-oid="kzouq-y"
                      >
                        Browse Courses
                        <ArrowRight
                          className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                          data-oid="7ofzha1"
                        />
                      </Button>
                    </Link>
                    <Link href="/contact" data-oid="jjj76c2">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                        data-oid="kn64w.f"
                      >
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
