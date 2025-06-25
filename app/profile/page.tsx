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
    <div className="p-6" data-oid=".g.j9id">
      <div className="mb-6" data-oid=":26j4z1">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="23_i1a6">
          {greeting}, {user?.name || user?.email.split("@")[0]}
        </h1>
        <p className="text-gray-500 mt-1" data-oid="2:uxm.9">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid="31juq:0"
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="gr-c5fh"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="_gmd2.2"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="bij4hsc"
            ></div>
            <div className="p-5" data-oid="0:czb1n">
              <div
                className="flex justify-between items-start"
                data-oid=":hqch5f"
              >
                <h3 className="text-gray-700 font-medium" data-oid="3zgkkl8">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="db51rq:"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="zyp6cha"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="6io._8w"
              >
                {loading ? "..." : stats.totalCourses}
              </p>
              <p
                className="text-sm text-gray-400 flex items-center mt-1"
                data-oid="yvw19ic"
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
          data-oid="i..ncgd"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="r2ed9.e"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="b0nd5qn"
            ></div>
            <div className="p-5" data-oid="1q1-30z">
              <div
                className="flex justify-between items-start"
                data-oid="4yz6xtd"
              >
                <h3 className="text-gray-700 font-medium" data-oid="4oexspc">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="k14y8pe"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid=":n5s6.0"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="-n9viix"
              >
                {loading ? "..." : stats.completedCourses}
              </p>
              <p
                className="text-sm text-gray-400 flex items-center mt-1"
                data-oid="x80a6w1"
              >
                {stats.completedCourses === 0
                  ? "No courses completed yet"
                  : `${stats.completionRate}% completion rate`}
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid="7rfr6jc">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="6:vp7vz"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="b9fv5gm"
            ></div>
            <div className="p-5" data-oid="65o3q-5">
              <div
                className="flex justify-between items-start"
                data-oid="m6e:-kw"
              >
                <h3 className="text-gray-700 font-medium" data-oid="1nnb4be">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="o61wg7e"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid="lro3yh6"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="r9i3.4g"
              >
                {loading ? "..." : "0"}
              </p>
              <p
                className="text-sm text-gray-400 flex items-center mt-1"
                data-oid="qesr6my"
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
          data-oid="ipt2bnr"
        >
          <div
            className="h-2 bg-blue-700 w-full absolute top-0"
            data-oid="0if0iej"
          ></div>
          <div className="p-5" data-oid="qeaj.kn">
            <div
              className="flex justify-between items-start"
              data-oid="2qlvjrs"
            >
              <h3 className="text-gray-700 font-medium" data-oid="lbksluo">
                Learning Streak
              </h3>
              <div
                className={`p-2 rounded-full transition-colors duration-200 ${
                  hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                }`}
                data-oid="iy5yt:t"
              >
                <Calendar
                  className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                  data-oid="2k2p:vg"
                />
              </div>
            </div>
            <p
              className="text-3xl font-bold text-blue-900 mt-3"
              data-oid="0vdjqpu"
            >
              {loading ? "..." : stats.currentStreak}
            </p>
            <p
              className="text-sm text-gray-400 flex items-center mt-1"
              data-oid="9z6nqpm"
            >
              {stats.currentStreak === 0
                ? "No learning streak yet"
                : "day learning streak"}
            </p>
          </div>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="ld4mn5o">
        {/* Learning Progress - Empty State */}
        <div className="bg-white rounded-lg shadow-sm" data-oid="a6d25sr">
          <div
            className="flex justify-between items-center p-6 border-b border-gray-100"
            data-oid="9jxd2hb"
          >
            <h2
              className="text-lg font-semibold text-gray-800"
              data-oid="75mrvfr"
            >
              Learning Progress
            </h2>
          </div>
          <div className="p-6" data-oid="m8n1v3x">
            <div className="text-center py-8" data-oid="q2s0-lc">
              <BookOpen
                className="mx-auto h-12 w-12 text-gray-300 mb-4"
                data-oid="71.mp30"
              />

              <p className="text-gray-500 mb-2" data-oid="l-51mu_">
                No courses in progress
              </p>
              <p className="text-sm text-gray-400" data-oid="0sas41t">
                Start learning by browsing our course catalog
              </p>
              <Link
                href="/courses"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                data-oid="y.5njgw"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity - Empty State */}
        <div className="bg-white rounded-lg shadow-sm" data-oid="3hf6k8l">
          <div
            className="flex justify-between items-center p-6 border-b border-gray-100"
            data-oid="7pq9m2n"
          >
            <h2
              className="text-lg font-semibold text-gray-800"
              data-oid="1xt5r9w"
            >
              Recent Activity
            </h2>
          </div>
          <div className="p-6" data-oid="4bv8c6z">
            <div className="text-center py-8" data-oid="6xhkcp:">
              <Calendar
                className="mx-auto h-12 w-12 text-gray-300 mb-4"
                data-oid="y6134_:"
              />

              <p className="text-gray-500 mb-2" data-oid="gextfq1">
                No recent activity
              </p>
              <p className="text-sm text-gray-400" data-oid="zdf91_.">
                Your learning activity will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
