"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Heart,
  Award,
  ShoppingBag,
  Calendar,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";

interface UserStats {
  totalCourses: number;
  completedCourses: number;
  activeCourses: number;
  totalLearningHours: number;
  currentStreak: number;
  completionRate: number;
  recentActivity: any[];
}

export default function ProfilePage() {
  const { user, isLoggedIn } = useAuth();
  const [stats, setStats] = useState<UserStats>({
    totalCourses: 0,
    completedCourses: 0,
    activeCourses: 0,
    totalLearningHours: 0,
    currentStreak: 0,
    completionRate: 0,
    recentActivity: [],
  });
  const [loading, setLoading] = useState(true);

  // Get current date and time
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = today.toLocaleDateString("en-US", options);

  // Get greeting based on time of day
  const hours = today.getHours();
  let greeting = "Good morning";
  if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else if (hours >= 18) {
    greeting = "Good evening";
  }

  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!isLoggedIn || !user?.email) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/user/stats", {
          headers: {
            "x-user-email": user.email,
            "x-user-name": user.name || "",
            "x-user-image": user.image || "",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          console.error("API error:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching user stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserStats();
  }, [isLoggedIn, user]);

  return (
    <div className="p-6" data-oid="b:jrrik">
      <div className="mb-6" data-oid="d4l87qz">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="mwz:d-d">
          {greeting}, {user?.name || user?.email.split("@")[0]}
        </h1>
        <p className="text-gray-500 mt-1" data-oid="-.utaps">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid="cma42eh"
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="zet.ieo"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="rdkm0lm"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="thu7_qm"
            ></div>
            <div className="p-5" data-oid="2qoju64">
              <div
                className="flex justify-between items-start"
                data-oid="-uyy:sw"
              >
                <h3 className="text-gray-700 font-medium" data-oid="0_w0:qt">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid=":18m7l1"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="ib65-vh"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="okuighz"
              >
                {loading ? "..." : stats.totalCourses}
              </p>
              <p
                className="text-sm text-gray-400 flex items-center mt-1"
                data-oid="t5s1pj-"
              >
                {stats.totalCourses === 0
                  ? "No courses enrolled yet"
                  : `${stats.activeCourses} active`}
              </p>
            </div>
          </div>
        </Link>

        {/* Completed Courses */}
        <Link
          href="/profile/completed-courses"
          className="block"
          data-oid="k8b3855"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="omrel05"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="lsfezu2"
            ></div>
            <div className="p-5" data-oid="wui7d55">
              <div
                className="flex justify-between items-start"
                data-oid="5_rsy3b"
              >
                <h3 className="text-gray-700 font-medium" data-oid="v.ivua0">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid=":hz3e56"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid="ta4u_l-"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="ajzpmdx"
              >
                {loading ? "..." : stats.completedCourses}
              </p>
              <p
                className="text-sm text-gray-400 flex items-center mt-1"
                data-oid="u7:v0hg"
              >
                {stats.completedCourses === 0
                  ? "No courses completed yet"
                  : `${stats.completionRate}% completion rate`}
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid="6brrkll">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="i8-w_9y"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="m5gku:k"
            ></div>
            <div className="p-5" data-oid="7pald4_">
              <div
                className="flex justify-between items-start"
                data-oid="63k0oh4"
              >
                <h3 className="text-gray-700 font-medium" data-oid="ny0w6n8">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="0-e_8u0"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid="k999o:4"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="3f.e6.i"
              >
                {loading ? "..." : "0"}
              </p>
              <p
                className="text-sm text-gray-400 flex items-center mt-1"
                data-oid="eqia.ch"
              >
                No courses saved yet
              </p>
            </div>
          </div>
        </Link>

        {/* Upcoming Events */}
        <div
          className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredCard("events")}
          onMouseLeave={() => setHoveredCard(null)}
          data-oid="hd-5p-s"
        >
          <div
            className="h-2 bg-blue-700 w-full absolute top-0"
            data-oid="qsdknli"
          ></div>
          <div className="p-5" data-oid="wpffftm">
            <div
              className="flex justify-between items-start"
              data-oid="w2uhgd_"
            >
              <h3 className="text-gray-700 font-medium" data-oid="3x72oz6">
                Learning Streak
              </h3>
              <div
                className={`p-2 rounded-full transition-colors duration-200 ${
                  hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                }`}
                data-oid="eiakswm"
              >
                <Calendar
                  className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                  data-oid="mdjaar2"
                />
              </div>
            </div>
            <p
              className="text-3xl font-bold text-blue-900 mt-3"
              data-oid="g88cdcl"
            >
              {loading ? "..." : stats.currentStreak}
            </p>
            <p
              className="text-sm text-gray-400 flex items-center mt-1"
              data-oid="4-3l40q"
            >
              {stats.currentStreak === 0
                ? "No learning streak yet"
                : "day learning streak"}
            </p>
          </div>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="0cpn_vd">
        {/* Learning Progress - Empty State */}
        <div className="bg-white rounded-lg shadow-sm" data-oid="btor1qg">
          <div
            className="flex justify-between items-center p-6 border-b border-gray-100"
            data-oid="in765f8"
          >
            <h2
              className="text-lg font-semibold text-gray-800"
              data-oid="wnpaoiy"
            >
              Learning Progress
            </h2>
          </div>
          <div className="p-6" data-oid="lw10l4i">
            <div className="text-center py-8" data-oid="lu05ce:">
              <BookOpen
                className="mx-auto h-12 w-12 text-gray-300 mb-4"
                data-oid="khrvhfx"
              />

              <p className="text-gray-500 mb-2" data-oid="on8z9cw">
                No courses in progress
              </p>
              <p className="text-sm text-gray-400" data-oid="3k3c-d8">
                Start learning by browsing our course catalog
              </p>
              <Link
                href="/courses"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                data-oid="tv1sc4w"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity - Empty State */}
        <div className="bg-white rounded-lg shadow-sm" data-oid="wh5fwie">
          <div
            className="flex justify-between items-center p-6 border-b border-gray-100"
            data-oid="5:v3a9i"
          >
            <h2
              className="text-lg font-semibold text-gray-800"
              data-oid="ilwnvwr"
            >
              Recent Activity
            </h2>
          </div>
          <div className="p-6" data-oid="b73j0zw">
            <div className="text-center py-8" data-oid="s95-qe7">
              <Calendar
                className="mx-auto h-12 w-12 text-gray-300 mb-4"
                data-oid="7a4rd1q"
              />

              <p className="text-gray-500 mb-2" data-oid="ik-ju.0">
                No recent activity
              </p>
              <p className="text-sm text-gray-400" data-oid="mdkwoal">
                Your learning activity will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
