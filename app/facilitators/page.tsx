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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white" data-oid="9r3t99q">
          <div className="container mx-auto px-4" data-oid="7_s5_b.">
            <div className="max-w-4xl mx-auto text-center" data-oid="ww9-sjf">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                data-oid="f9:ub.f"
              >
                <h3
                  className="text-3xl font-bold text-gray-900 mb-4"
                  data-oid="f7e.pwz"
                >
                  Ready to Learn from the Best?
                </h3>
                <p
                  className="text-gray-600 mb-8 max-w-2xl mx-auto"
                  data-oid="7u9d8ui"
                >
                  Join thousands of successful property investors who have
                  learned from our expert facilitators. Start your journey today
                  with our comprehensive courses and personalized guidance.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  data-oid="8zscd63"
                >
                  <Link href="/courses" data-oid="nfddmf-">
                    <Button
                      size="lg"
                      className="bg-slate-300 hover:bg-zinc-100 text-gray-800 hover:text-gray-800 px-8 py-3 rounded-xl transition-all duration-300 group"
                      data-oid="6a6w07:"
                    >
                      Browse Courses
                      <ArrowRight
                        className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                        data-oid="z2owbai"
                      />
                    </Button>
                  </Link>
                  <Link href="/contact" data-oid="7w055kn">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                      data-oid="237hikr"
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
