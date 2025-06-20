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
        <section
          ref={sectionRef}
          className="py-24 bg-gray-50"
          data-oid="q9otwpr"
        >
          <div className="container mx-auto px-4" data-oid="dedeund">
            <div className="max-w-7xl mx-auto" data-oid="jk3w079">
              {/* Facilitators List */}
              <div className="space-y-24 mb-16" data-oid="wdxa0iz">
                {facilitators.map((facilitator, index) => (
                  <FacilitatorCard
                    key={facilitator.id}
                    facilitator={facilitator}
                    index={index}
                    data-oid="h.f8t_q"
                  />
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
