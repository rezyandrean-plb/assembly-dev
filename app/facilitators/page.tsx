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
      <Navbar data-oid="x02f6vh" />
      <div className="bg-white" data-oid="06ji-jf">
        <FacilitatorHero data-oid="npun-c7" />

        {/* Main Facilitators Section */}
        <section
          ref={sectionRef}
          className="py-24 bg-gray-50"
          data-oid="n8nyjpy"
        >
          <div className="container mx-auto px-4" data-oid="mhsnyo:">
            <div className="max-w-7xl mx-auto" data-oid="tzhp7w4">
              {/* Facilitators List */}
              <div className="space-y-24 mb-16" data-oid="u1-mpdl">
                {facilitators.map((facilitator, index) => (
                  <FacilitatorCard
                    key={facilitator.id}
                    facilitator={facilitator}
                    index={index}
                    data-oid="4z.jq3:"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white" data-oid="z0qsq7n">
          <div className="container mx-auto px-4" data-oid="udw6y0a">
            <div className="max-w-4xl mx-auto text-center" data-oid="zpxz0au">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                data-oid="efz0a2m"
              >
                <h3
                  className="text-3xl font-bold text-gray-900 mb-4"
                  data-oid="k_yd8.1"
                >
                  Ready to Learn from the Best?
                </h3>
                <p
                  className="text-gray-600 mb-8 max-w-2xl mx-auto"
                  data-oid="97ixgni"
                >
                  Join thousands of successful property investors who have
                  learned from our expert facilitators. Start your journey today
                  with our comprehensive courses and personalized guidance.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  data-oid="1mapc6a"
                >
                  <Link href="/courses" data-oid="mbohsy6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 group"
                      data-oid=".neml3s"
                    >
                      Browse Courses
                      <ArrowRight
                        className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                        data-oid="qmijv.y"
                      />
                    </Button>
                  </Link>
                  <Link href="/contact" data-oid="3i3z.1z">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                      data-oid="d6vq:9w"
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
