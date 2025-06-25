"use client";

import { useRef } from "react";
import { useScrollAnimation } from "./hooks/use-scroll-animation";
import HeroSection from "./sections/hero-section";
import AimSection from "./sections/aim-section";
import StructureSection from "./sections/structure-section";
import PhilosophySection from "./sections/philosophy-section";
import ChooseSection from "./sections/choose-section";

export default function AboutPage() {
  // This file appears to be a test or alternative implementation
  // that's not being used in the main application.

  // Main container ref to track when sections come into view
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll animations
  useScrollAnimation(containerRef, {
    rootMargin: "-100px",
    threshold: 0.1,
    once: true,
  });

  return (
    <div ref={containerRef} className="bg-white" data-oid="dplnmww">
      <div
        className="max-w-7xl mx-auto px:4 sm:px-6 lg:px-8 py-16"
        data-oid="e7f.glm"
      >
        <HeroSection data-oid="7jgunz1" />
        <AimSection data-oid="o2gu7:2" />
        <StructureSection data-oid="hn74t8l" />
        <PhilosophySection data-oid="_dh._k7" />
        <ChooseSection data-oid="b51.7us" />
      </div>
    </div>
  );
}
