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
    <div ref={containerRef} className="bg-white" data-oid="vyr4u6:">
      <div
        className="max-w-7xl mx-auto px:4 sm:px-6 lg:px-8 py-16"
        data-oid=".h3yj5-"
      >
        <HeroSection data-oid="yv14arn" />
        <AimSection data-oid="5a..o8n" />
        <StructureSection data-oid="fm-o.s3" />
        <PhilosophySection data-oid="f-_gtt_" />
        <ChooseSection data-oid=":rax-18" />
      </div>
    </div>
  );
}
