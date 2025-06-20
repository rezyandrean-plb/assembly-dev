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
      <Navbar data-oid="czetjyh" />
      <NewHeroSection data-oid="qxc3wl3" />
      <NewFeaturesSection data-oid="0q_txgy" />
      <NewCoursesSection data-oid="fy9d66r" />
      <NewLearningPathsSection data-oid="0ya4a_e" />
      <NewStatsSection data-oid=":5xzs6z" />
      <NewTestimonialsSection data-oid="wcifby3" />
      <NewCtaSection data-oid="546:::n" />
    </>
  );
}
