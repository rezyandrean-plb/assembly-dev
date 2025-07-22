"use client";

import { useEffect, useState, useRef } from "react";
import NewHeroSection from "@/components/sections/new-hero-section";
import NewFeaturesSection from "@/components/sections/new-features-section";
import NewCoursesSection from "@/components/sections/new-courses-section";
import NewLearningPathsSection from "@/components/sections/new-learning-paths-section";
import NewTestimonialsSection from "@/components/sections/new-testimonials-section";
import NewStatsSection from "@/components/sections/new-stats-section";
import NewCtaSection from "@/components/sections/new-cta-section";

export default function HomePage() {
  return (
    <>
      <NewHeroSection />
      <NewFeaturesSection />
      <NewCoursesSection />
      <NewLearningPathsSection />
      <NewStatsSection />
      <NewTestimonialsSection />
      <NewCtaSection />
    </>
  );
}
