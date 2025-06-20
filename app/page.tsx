"use client";

import { useEffect, useState, useRef } from "react";
import NewHeroSection from "@/components/sections/new-hero-section";
import NewFeaturesSection from "@/components/sections/new-features-section";
import NewCoursesSection from "@/components/sections/new-courses-section";
import NewLearningPathsSection from "@/components/sections/new-learning-paths-section";
import NewTestimonialsSection from "@/components/sections/new-testimonials-section";
import NewStatsSection from "@/components/sections/new-stats-section";
import NewCtaSection from "@/components/sections/new-cta-section";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar data-oid="1kms-y_" />
      <NewHeroSection data-oid="q3wpj5n" />
      <NewFeaturesSection data-oid="y-gf_x_" />
      <NewCoursesSection data-oid="a4e6vb6" />
      <NewLearningPathsSection data-oid="arw8c44" />
      <NewStatsSection data-oid="c-r8v3f" />
      <NewTestimonialsSection data-oid="c1gep::" />
      <NewCtaSection data-oid="97oz1tp" />
    </>
  );
}
