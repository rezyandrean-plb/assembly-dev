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
          data-oid="ik2:kif"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="xevmsbi" />
          <path d="M9 3v18" data-oid="a2f5m5c" />
          <path d="M14 8h.01" data-oid="4h:kn0p" />
          <path d="M14 12h.01" data-oid="zp5z5zt" />
          <path d="M14 16h.01" data-oid="696wamp" />
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
          data-oid="vb_r:6l"
        >
          <path d="M2 12h6" data-oid="wpq_ah1" />
          <path d="M22 12h-6" data-oid="rep3mch" />
          <path d="M12 2v2" data-oid="nh79_ne" />
          <path d="M12 8v2" data-oid="2cimv-l" />
          <path d="M12 14v2" data-oid="s47:6m8" />
          <path d="M12 20v2" data-oid="38-i8z2" />
          <path d="M19 9l-7 3-7-3" data-oid=":57_kcx" />
          <path d="M19 15l-7-3-7 3" data-oid="n-r30k9" />
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
          data-oid="r41dsre"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="w.l0lvn" />
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
    <main className="min-h-screen bg-white" data-oid="kv9brzs">
      <div className="pt-24 pb-16" data-oid="xp7wmnp">
        <div className="container mx-auto px-4" data-oid="lc__p8p">
          {/* Back button */}
          <div className="mb-6" data-oid="6pp_-4w">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="9z73dfo"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="8pcqc4w" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="8o6v7c3">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid="n11.u23"
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="91ge9dm"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid="3f8x7ho"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="l208ali"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid="p.ht-tu"
                >
                  <div className="h-3 bg-gray-200" data-oid="xi-g8pl"></div>
                  <div className="p-6" data-oid=":soy61g">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid="0pcku2k"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="6drf1:d"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="00k6y_z"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid=":-fcb:3"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid="s7rp8jd"
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="yiarp_u"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid="xzy_z-m"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="_c2dbtm"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="jl0f3:j"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="ejsth5b"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid="4zk2m9h">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="2pr--ry"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="mnsp:wu"
            >
              <div className="text-center" data-oid="zbtdcp5">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="f-m-6jm"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="ew2b7kd" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid=".:jhtzs">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid="9j_28rd">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid="hh6wp_l">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="829l83k"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="8hkr611"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="gk-3y:_">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid="6l8-ihp">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="pqyso2j">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="cg3lij-"
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="wqkg5o4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="r4_gjel">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="yb-h7l5">
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
