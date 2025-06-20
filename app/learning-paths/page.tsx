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
          data-oid="af8s.b-"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="hxs51go" />
          <path d="M9 3v18" data-oid="805mj_r" />
          <path d="M14 8h.01" data-oid="1wd.34w" />
          <path d="M14 12h.01" data-oid="_ss84q_" />
          <path d="M14 16h.01" data-oid="6w4biyj" />
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
          data-oid="9xtu_0a"
        >
          <path d="M2 12h6" data-oid="xftiq3i" />
          <path d="M22 12h-6" data-oid="pec2jh6" />
          <path d="M12 2v2" data-oid="onl_0qm" />
          <path d="M12 8v2" data-oid="k-m5q2." />
          <path d="M12 14v2" data-oid="dm-1hh2" />
          <path d="M12 20v2" data-oid="xala6gh" />
          <path d="M19 9l-7 3-7-3" data-oid="oq554-9" />
          <path d="M19 15l-7-3-7 3" data-oid="sujr.5k" />
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
          data-oid="i8d_q3t"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="wd1ht1e" />
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
    <main className="min-h-screen bg-white" data-oid="r._v4o3">
      <Navbar data-oid="g22cqgw" />

      <div className="pt-24 pb-16" data-oid="0-lxv8_">
        <div className="container mx-auto px-4" data-oid="t6lvfo6">
          {/* Back button */}
          <div className="mb-6" data-oid="ubpemr7">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="e:g.bk-"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="h0ica-j" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="j.3uv0c">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid="n0ur2t."
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="6:b.goh"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid="7bizuy6"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="gj_f-r."
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid="gi33c5."
                >
                  <div className="h-3 bg-gray-200" data-oid="n11qq70"></div>
                  <div className="p-6" data-oid="nvrcqd2">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid="xl6nrd5"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="2r1ojhd"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="9ye6-5x"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid="okoa72v"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid="nuskf1q"
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="jo9owom"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid="xqc5oyx"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="lkfiix5"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="1_y_70m"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="ukt8fcl"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid="hl9hhic">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="mr9s553"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="-1ojii:"
            >
              <div className="text-center" data-oid="f4mb08y">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid=":m1ceg5"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="vv34p1z" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="iuewitj">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid="pg082y2">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid="sdou8nk">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="lcub.4e"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="22ga68b"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="ze0r:zs">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid="0w8f:4t">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="0btka0s">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="7__518i"
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="qen_zbk"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="-cokny7">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="flg5p19">
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
