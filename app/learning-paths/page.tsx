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
          data-oid="806ul41"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="3glaopj" />
          <path d="M9 3v18" data-oid="qpszjzc" />
          <path d="M14 8h.01" data-oid="s:qs1cx" />
          <path d="M14 12h.01" data-oid="q_17vux" />
          <path d="M14 16h.01" data-oid="dk531am" />
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
          data-oid="1:ybupl"
        >
          <path d="M2 12h6" data-oid="-gkmxn." />
          <path d="M22 12h-6" data-oid="80e5yhm" />
          <path d="M12 2v2" data-oid="u:k2d-z" />
          <path d="M12 8v2" data-oid="f4.p1iq" />
          <path d="M12 14v2" data-oid="3xqj0vi" />
          <path d="M12 20v2" data-oid=":off8ga" />
          <path d="M19 9l-7 3-7-3" data-oid="6qnuns1" />
          <path d="M19 15l-7-3-7 3" data-oid="60uruua" />
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
          data-oid="n2zde9h"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="789k4zs" />
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
    <main className="min-h-screen bg-white" data-oid="vwigv0t">
      <Navbar data-oid="s7vg1kh" />

      <div className="pt-24 pb-16" data-oid="229o7.o">
        <div className="container mx-auto px-4" data-oid="eap3igy">
          {/* Back button */}
          <div className="mb-6" data-oid="r0px9d.">
            <Link
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid=".sv8wvn"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="iijd:y6" />
              Back to Courses
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16" data-oid="lpi9ltr">
            <h1
              className="text-3xl font-bold text-[#123B79] mb-4"
              data-oid=":0yz75c"
            >
              Learning Paths
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="9p38vpo"
            >
              Structured course sequences designed to guide you from beginner to
              expert in specific areas
            </p>
            <div
              className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
              data-oid=":snkwf1"
            ></div>
          </div>

          {/* Learning Paths Grid */}
          {loading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="4jlj2:a"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-pulse"
                  data-oid="lhkis-8"
                >
                  <div className="h-3 bg-gray-200" data-oid="lr1gu4r"></div>
                  <div className="p-6" data-oid="4og5teo">
                    <div
                      className="rounded-full w-14 h-14 bg-gray-200 mb-4"
                      data-oid="fo0of9n"
                    ></div>
                    <div
                      className="h-6 bg-gray-200 rounded w-3/4 mb-3"
                      data-oid="diyuj31"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded mb-2"
                      data-oid="v9ab0v6"
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-5/6 mb-6"
                      data-oid="6js:yqz"
                    ></div>
                    <div
                      className="h-20 bg-gray-200 rounded mb-6"
                      data-oid="b4lbbzw"
                    ></div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="9wyij1v"
                    >
                      <div
                        className="h-4 bg-gray-200 rounded w-1/4"
                        data-oid="ccw_42q"
                      ></div>
                      <div
                        className="h-8 bg-gray-200 rounded w-1/4"
                        data-oid="759zv7n"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="vfuf5yh"
            >
              {learningPaths.map((path, index) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  index={index}
                  data-oid="am1twp5"
                />
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8" data-oid="gqg2x4s">
            <h2
              className="text-2xl font-bold text-center mb-8"
              data-oid="e3xxk6x"
            >
              Why Choose a Learning Path?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="uljzvxo"
            >
              <div className="text-center" data-oid="m9pqljp">
                <div
                  className="bg-[#123B79] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="ts:ytq4"
                >
                  <BookOpen className="h-8 w-8 text-white" data-oid="hh3bt76" />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="t1yo1-b">
                  Structured Learning
                </h3>
                <p className="text-gray-600" data-oid="msxa3zv">
                  Follow a carefully designed sequence of courses that build
                  upon each other for optimal learning progression
                </p>
              </div>
              <div className="text-center" data-oid="z9vtqc-">
                <div
                  className="bg-[#794B12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="3o9usn4"
                >
                  <TrendingUp
                    className="h-8 w-8 text-white"
                    data-oid="gyxl496"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="cl2p4or">
                  Clear Progression
                </h3>
                <p className="text-gray-600" data-oid=".k:8exo">
                  Track your journey from beginner to expert with clear
                  milestones and learning objectives
                </p>
              </div>
              <div className="text-center" data-oid="-wee0ck">
                <div
                  className="bg-[#79123B] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  data-oid="0nc200h"
                >
                  <GraduationCap
                    className="h-8 w-8 text-white"
                    data-oid="_v7xylm"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="2s_y5e9">
                  Comprehensive Knowledge
                </h3>
                <p className="text-gray-600" data-oid="koftcn-">
                  Gain a complete understanding of specialized areas without
                  missing critical concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer data-oid="i:.sq1k" />
    </main>
  );
}
