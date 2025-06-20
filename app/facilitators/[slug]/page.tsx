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
      <div className="bg-white" data-oid="33n8y-u">
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

        <FacilitatorHero facilitator={facilitator} data-oid="j37t2d7" />
        <FacilitatorBio facilitator={facilitator} data-oid="44f_3j0" />
        <FacilitatorCourses facilitator={facilitator} data-oid="9r:64-d" />

        <section
          className="py-24 bg-gradient-to-br from-blue-50 to-orange-50"
          data-oid="7ady3vl"
        >
          <div className="container mx-auto px-4" data-oid="-6mmb9f">
            <div className="max-w-4xl mx-auto text-center" data-oid="dydhzo0">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                data-oid="ryt_7-p"
              >
                Ready to Learn from {facilitator.name}?
              </h2>
              <p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                data-oid="_0_2f_h"
              >
                Join thousands of successful students who have transformed their
                property investment journey under {facilitator.name}'s expert
                guidance.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="20pxhwb"
              >
                <Link href="/courses" data-oid=".y-m5m9">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid="h9srix4"
                  >
                    View {facilitator.name}'s Courses
                  </Button>
                </Link>
                <Link href="/contact" data-oid="slnv.n8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid="fyln_6x"
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
