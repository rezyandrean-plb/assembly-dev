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
      <Navbar data-oid="97k9zd4" />
      <NewHeroSection data-oid="fa59.t1" />
      <NewFeaturesSection data-oid="6_4ht2r" />
      <NewCoursesSection data-oid="snvf50:" />
      <NewLearningPathsSection data-oid="xg-ce1g" />
      <NewStatsSection data-oid="3cu0d03" />
      <NewTestimonialsSection data-oid="_79gb75" />
      <NewCtaSection data-oid="ugbn1z1" />
    </>
  );
}
