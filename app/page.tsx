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
      <Navbar data-oid="-eznstj" />
      <NewHeroSection data-oid=".fbnk_x" />
      <NewFeaturesSection data-oid="gn7mzw6" />
      <NewCoursesSection data-oid="j02yk.i" />
      <NewLearningPathsSection data-oid="8k95t2s" />
      <NewStatsSection data-oid="zf8hcf6" />
      <NewTestimonialsSection data-oid=".cebmhc" />
      <NewCtaSection data-oid="cqqda16" />
    </>
  );
}
