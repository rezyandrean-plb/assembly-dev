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
    <div ref={containerRef} className="bg-white" data-oid="9qwb1ax">
      <div
        className="max-w-7xl mx-auto px:4 sm:px-6 lg:px-8 py-16"
        data-oid="282.8-h"
      >
        <HeroSection data-oid="5dfi_sw" />
        <AimSection data-oid="7zv1:67" />
        <StructureSection data-oid="ro5:_z8" />
        <PhilosophySection data-oid="ds.vu.a" />
        <ChooseSection data-oid="7w32-_y" />
      </div>
    </div>
  );
}
