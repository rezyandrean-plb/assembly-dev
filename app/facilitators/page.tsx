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
import { getFacilitatorsForPage } from "@/app/data/facilitators";
import { FacilitatorCard } from "./components/facilitator-card";
import { FacilitatorStats } from "./components/facilitator-stats";
import { FacilitatorHero } from "./components/facilitator-hero";

export default function FacilitatorsPage() {
  const facilitators = getFacilitatorsForPage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <div className="bg-white">
        <FacilitatorHero />

        {/* Main Facilitators Section */}
        <section ref={sectionRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Facilitators List */}
              <div className="space-y-24 mb-16">
                {facilitators.map((facilitator, index) => (
                  <FacilitatorCard
                    key={facilitator.id}
                    facilitator={facilitator}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Learn from the Best?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful property investors who have
                  learned from our expert facilitators. Start your journey today
                  with our comprehensive courses and personalized guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/courses">
                    <Button
                      size="lg"
                      className="bg-slate-300 hover:bg-zinc-100 text-gray-800 hover:text-gray-800 px-8 py-3 rounded-xl transition-all duration-300 group"
                    >
                      Browse Courses
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
