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
      <Navbar data-oid="x_ci:6:" />
      <NewHeroSection data-oid="ls7dwin" />
      <NewFeaturesSection data-oid="vcux_si" />
      <NewCoursesSection data-oid="3jf.18-" />
      <NewLearningPathsSection data-oid="hce-8_:" />
      <NewStatsSection data-oid="gd7du5e" />
      <NewTestimonialsSection data-oid="v.bra67" />
      <NewCtaSection data-oid="ve-9vkw" />
    </>
  );
}
