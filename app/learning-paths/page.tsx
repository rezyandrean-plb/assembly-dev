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
          data-oid="1x2.5jf"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="07y4i75" />
          <path d="M9 3v18" data-oid="jrpgy7u" />
          <path d="M14 8h.01" data-oid=":3r1wb1" />
          <path d="M14 12h.01" data-oid="19sizr0" />
          <path d="M14 16h.01" data-oid="-8vpsrd" />
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
          data-oid="pi28jh:"
        >
          <path d="M2 12h6" data-oid="nio7_rl" />
          <path d="M22 12h-6" data-oid="cfsiht-" />
          <path d="M12 2v2" data-oid=":-6dr5v" />
          <path d="M12 8v2" data-oid="4-.8jci" />
          <path d="M12 14v2" data-oid="onk87e." />
          <path d="M12 20v2" data-oid="j03xqk1" />
          <path d="M19 9l-7 3-7-3" data-oid="st_ti1v" />
          <path d="M19 15l-7-3-7 3" data-oid="xvum790" />
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
          data-oid="42pxja_"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="ldn8x06" />
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
    <main className="min-h-screen bg-white" data-oid="i825q_t">
      <Navbar data-oid="4rq18_x" />

      <div className="pt-24 pb-16" data-oid="yfs778a">
        <div className="container mx-auto px-4" data-oid="qe5_ufc">
          {/* Back button */}
          <div className="mb-6" data-oid="6cf8-sm">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="75h7k_t"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="lt07pht" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="3jkt7dd">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid="9e.1esb"
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="7bhn9a4"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid="x2n_-vu"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="d931g:n"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid=":b_h_02"
                >
                  <div className="h-3 bg-gray-200" data-oid="cif0-yb"></div>
                  <div className="p-6" data-oid="z162l8:">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid=".ls72v-"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="54fffr-"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="i81s1wi"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid="-p:eyky"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid=":p.l-gv"
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="mu31v-z"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid="nlq8jse"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="x.s2hht"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="lzzldtx"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="sd30.-s"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid=":7ns58r">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="bvo6t3q"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="kjvj74b"
            >
              <div className="text-center" data-oid="9si0v2l">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="r3erm10"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="xp6ybw2" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="euo3bc2">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid=".l_3285">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid="4i8axdl">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="ch.nzkk"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="hy1zjna"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="_fbd:_b">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid="4l57g2j">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="_7uhhi2">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="1-4y-5."
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="q3471m6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="qs5w6wm">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="84xfeh6">
                  Gain a complete understanding of specialized areas without
                  missing critical concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
