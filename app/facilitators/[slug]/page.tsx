"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Users,
  Calendar,
  Star,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Target,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { getFacilitator } from "@/app/data/facilitators";
import { FacilitatorHero } from "./components/facilitator-hero";
import { FacilitatorBio } from "./components/facilitator-bio";
import { FacilitatorCourses } from "./components/facilitator-courses";
import { FacilitatorAchievements } from "./components/facilitator-achievements";

interface FacilitatorPageProps {
  params: {
    slug: string;
  };
}

export default function FacilitatorPage({ params }: FacilitatorPageProps) {
  const facilitator = getFacilitator(params.slug);

  if (!facilitator) {
    notFound();
  }

  return (
    <>
      <Navbar data-oid="3g3au.v" />
      <div className="bg-white" data-oid=":p.s_om">
        {/* Back Navigation */}
        <div className="bg-gray-50 py-4" data-oid="2om6118">
          <div className="container mx-auto px-4" data-oid="4nqiyue">
            <Link
              href="/facilitators"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              data-oid="vp7buz."
            >
              <ArrowLeft className="w-4 h-4" data-oid="jnz_063" />
              Back to All Facilitators
            </Link>
          </div>
        </div>

        <FacilitatorHero facilitator={facilitator} data-oid="c69sl2y" />
        <FacilitatorBio facilitator={facilitator} data-oid="yjc-bwu" />
        <FacilitatorAchievements facilitator={facilitator} data-oid="g3s0zif" />
        <FacilitatorCourses facilitator={facilitator} data-oid="4-x_.83" />

        {/* CTA Section */}
        <section
          className="py-24 bg-gradient-to-br from-blue-50 to-orange-50"
          data-oid="rcy7lt_"
        >
          <div className="container mx-auto px-4" data-oid="5xmnfmn">
            <div className="max-w-4xl mx-auto text-center" data-oid="cqpakip">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                data-oid=":gv:he4"
              >
                Ready to Learn from {facilitator.name}?
              </h2>
              <p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                data-oid="cct..h_"
              >
                Join thousands of successful students who have transformed their
                property investment journey under {facilitator.name}'s expert
                guidance.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="osq9v.7"
              >
                <Link href="/courses" data-oid="t-6ex11">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid=".f6rwlb"
                  >
                    View {facilitator.name}'s Courses
                  </Button>
                </Link>
                <Link href="/contact" data-oid="d_8rgvt">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid="h.hx0jg"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
