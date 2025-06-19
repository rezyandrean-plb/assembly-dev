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
          data-oid="t.t6:zq"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="6l8vj4_" />
          <path d="M9 3v18" data-oid="rc:ph.5" />
          <path d="M14 8h.01" data-oid="okzb:w9" />
          <path d="M14 12h.01" data-oid="b:0l5gy" />
          <path d="M14 16h.01" data-oid="re.brfw" />
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
          data-oid="8xgpj89"
        >
          <path d="M2 12h6" data-oid="klffi27" />
          <path d="M22 12h-6" data-oid="6e0htpy" />
          <path d="M12 2v2" data-oid="0dwrdo8" />
          <path d="M12 8v2" data-oid="g9t15gj" />
          <path d="M12 14v2" data-oid="88yiykh" />
          <path d="M12 20v2" data-oid="9xkkbor" />
          <path d="M19 9l-7 3-7-3" data-oid="8bnfgy4" />
          <path d="M19 15l-7-3-7 3" data-oid="s30l4k1" />
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
          data-oid="zd7ybxx"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid=".w2_d_:" />
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
    <main className="min-h-screen bg-white" data-oid="luy4s7t">
      <Navbar data-oid="29dmqyu" />

      <div className="pt-24 pb-16" data-oid="tmctxmz">
        <div className="container mx-auto px-4" data-oid="xxho04k">
          {/* Back button */}
          <div className="mb-6" data-oid="u6m-m4-">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="i3t-jqy"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="gmgjq8m" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="do7jh_q">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid="ivv_tr8"
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="-x1cnbt"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid="m:ps8q6"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="b03m4-g"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid="y9a8agn"
                >
                  <div className="h-3 bg-gray-200" data-oid="qj65v7j"></div>
                  <div className="p-6" data-oid="x5iy1fo">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid="c4f6ob2"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="xvlk.mu"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="jh9fgkd"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid="u73_4li"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid="jgat6hz"
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="l0znd50"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid="-_v42sr"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="wutqcyu"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="z6iv4y1"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="x4inh0b"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid="di0_4:g">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="wctjd33"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="spjx1s:"
            >
              <div className="text-center" data-oid="s9z5001">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="9um:y77"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="thm.3p2" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="nyub_4r">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid="ey60e10">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid=".glgftb">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="p66ntew"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="8o5s_kv"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="p5.t0ay">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid="1hgvg19">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="fp9i4az">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="3iabdfm"
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="jyjcl3_"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="mfmeql:">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="q81pqej">
                  Gain a complete understanding of specialized areas without
                  missing critical concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer data-oid="upylv2e" />
    </main>
  );
}
