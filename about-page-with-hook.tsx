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
    <div ref={containerRef} className="bg-white" data-oid="mss2lzh">
      <div
        className="max-w-7xl mx-auto px:4 sm:px-6 lg:px-8 py-16"
        data-oid="1djw7yv"
      >
        <HeroSection data-oid="_7-ra93" />
        <AimSection data-oid="aqmii.r" />
        <StructureSection data-oid="d31mor." />
        <PhilosophySection data-oid="g1i-h5l" />
        <ChooseSection data-oid="b:aa9pp" />
      </div>
    </div>
  );
}
