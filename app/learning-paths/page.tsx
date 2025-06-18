"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, BookOpen, TrendingUp, GraduationCap } from "lucide-react";
import Link from "next/link";
import LearningPathCard from "@/components/learning-path-card";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  color: string;
  iconComponent: React.ReactNode;
  courseCount: number;
  nodes: { x: number; y: number }[];
}

export default function LearningPathsPage() {
  const [loading, setLoading] = useState(true);

  // Learning paths data
  const learningPaths: LearningPath[] = [
    {
      id: "beginner-property-investor",
      title: "Beginner Property Investor",
      description:
        "Build a strong foundation in property investment and understand the Singapore market",
      color: "#123B79",
      iconComponent: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-oid="9-h0gpd"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="kwsp-a9" />
          <path d="M9 3v18" data-oid="k::9of7" />
          <path d="M14 8h.01" data-oid="ajug:dx" />
          <path d="M14 12h.01" data-oid="z2_-im4" />
          <path d="M14 16h.01" data-oid="rfl-lsq" />
        </svg>
      ),

      courseCount: 4,
      nodes: [
        { x: 30, y: 40 },
        { x: 90, y: 25 },
        { x: 150, y: 40 },
        { x: 210, y: 25 },
        { x: 270, y: 40 },
      ],
    },
    {
      id: "hdb-upgrader-strategist",
      title: "HDB Upgrader & Strategist",
      description:
        "For HDB owners or upgraders aiming to move to condos or optimize their property journey",
      color: "#794B12",
      iconComponent: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-oid="bfykl1x"
        >
          <path d="M2 12h6" data-oid="5ygjlc." />
          <path d="M22 12h-6" data-oid="wxjr8e5" />
          <path d="M12 2v2" data-oid="cpeb6xs" />
          <path d="M12 8v2" data-oid="i_sv4tp" />
          <path d="M12 14v2" data-oid="w4hjy71" />
          <path d="M12 20v2" data-oid="87nnofq" />
          <path d="M19 9l-7 3-7-3" data-oid="af02z3z" />
          <path d="M19 15l-7-3-7 3" data-oid="ctfp8-u" />
        </svg>
      ),

      courseCount: 5,
      nodes: [
        { x: 30, y: 40 },
        { x: 90, y: 55 },
        { x: 150, y: 25 },
        { x: 210, y: 55 },
        { x: 270, y: 40 },
      ],
    },
    {
      id: "condo-investment-specialist",
      title: "Condo Investment Specialist",
      description:
        "Master the art of investing in condominiums, from selection to portfolio building",
      color: "#79123B",
      iconComponent: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-oid="io28piu"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="3e-2m5e" />
        </svg>
      ),

      courseCount: 6,
      nodes: [
        { x: 30, y: 40 },
        { x: 90, y: 25 },
        { x: 150, y: 40 },
        { x: 210, y: 25 },
        { x: 270, y: 40 },
      ],
    },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="min-h-screen bg-white" data-oid="oegzjlr">
      <Navbar data-oid="zpvr:g0" />

      <div className="pt-24 pb-16" data-oid="3yne0_0">
        <div className="container mx-auto px-4" data-oid="da1t0ra">
          {/* Back button */}
          <div className="mb-6" data-oid="kwjbbe3">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="mct3yyd"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="rk5ew5q" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="ar:_uuv">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid="8z5o0:z"
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="3.i628v"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid="cy9npba"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="zuf-p1d"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid="vesak2r"
                >
                  <div className="h-3 bg-gray-200" data-oid="x9-3j50"></div>
                  <div className="p-6" data-oid="q.va92y">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid="iapt8a9"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="hvenxlc"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="zvvnur3"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid="zefrm3z"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid="c5m4.o."
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="rxsb4p9"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid=":z_i8fr"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="3q68_hc"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid=".-nm4:_"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="-417fg:"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid="s6tgh5d">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="rm.an56"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="ck8ocb:"
            >
              <div className="text-center" data-oid="zh:mz7u">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="0ekxa0b"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="iqfpf2f" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="mm9.a7o">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid="_5vqkzo">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid="zxh9:w7">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="9q9gumx"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="8o0ihcy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="_q5.md-">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid="1ljzyp.">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="1vro:j1">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="755f1:x"
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="s0mflb."
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="h907b52">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="q9-o3a5">
                  Gain a complete understanding of specialized areas without
                  missing critical concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer data-oid="7ma:gza" />
    </main>
  );
}
