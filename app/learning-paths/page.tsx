"use client";

import type React from "react";

import { useState, useEffect } from "react";
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
          data-oid="e7di6z6"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="e7fqene" />
          <path d="M9 3v18" data-oid="hh0dtkr" />
          <path d="M14 8h.01" data-oid="6gwxj1l" />
          <path d="M14 12h.01" data-oid="d7x_moi" />
          <path d="M14 16h.01" data-oid="xh1qli9" />
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
          data-oid="5bhiesb"
        >
          <path d="M2 12h6" data-oid="8ojbpor" />
          <path d="M22 12h-6" data-oid="kdunsnh" />
          <path d="M12 2v2" data-oid="j_94e0y" />
          <path d="M12 8v2" data-oid="meph:q2" />
          <path d="M12 14v2" data-oid="rxrc12e" />
          <path d="M12 20v2" data-oid="vxyad05" />
          <path d="M19 9l-7 3-7-3" data-oid="op9a8bx" />
          <path d="M19 15l-7-3-7 3" data-oid="zbmbv66" />
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
          data-oid="2:ozjfl"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="x-k.-3l" />
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
    <main className="min-h-screen bg-white" data-oid="oqobhzb">
      <div className="pt-24 pb-16" data-oid="_-02xsi">
        <div className="container mx-auto px-4" data-oid="dqhjou.">
          {/* Back button */}
          <div className="mb-6" data-oid="_h6fz_g">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="s1u-u2y"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="pvy4m7m" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="vh1jyf7">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid="3uo2zph"
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid=".ur8cwq"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid="mn7u21h"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="hmp6g3k"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid="bos9944"
                >
                  <div className="h-3 bg-gray-200" data-oid="0825ejm"></div>
                  <div className="p-6" data-oid="j889awp">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid="ab7le5f"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="kep-j5j"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="r.w7p3p"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid="jdg9k70"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid="13_koy_"
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="y-q-8bh"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid="h.rz49h"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="h.kdkll"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="ja31l9e"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="7w10jog"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid="p3itz2y">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="l9ib5wc"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="n39eq0d"
            >
              <div className="text-center" data-oid="emf4l0d">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="l2v52tx"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="8e79e5b" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="_vof2pv">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid="v62gzcy">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid="z30m0:z">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="jbkfuy3"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="o58dx9y"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid=".xnzmvz">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid="kojq_oo">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="5:kqw:.">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="dkarac9"
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="hxwiotu"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="r6tg6mr">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="vq:dz5d">
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
