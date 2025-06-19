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
      <Navbar data-oid="_4e3x.b" />
      <NewHeroSection data-oid="zme4ncz" />
      <NewFeaturesSection data-oid="o_wu.u_" />
      <NewCoursesSection data-oid="r.7_jcf" />
      <NewLearningPathsSection data-oid=".4z-:w." />
      <NewStatsSection data-oid="h9lj40i" />
      <NewTestimonialsSection data-oid="gz0xebc" />
      <NewCtaSection data-oid="wdk6_mo" />
    </>
  );
}
