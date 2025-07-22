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
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {greeting}, {user?.name || user?.email.split("@")[0]}
        </h1>
        <p className="text-gray-500 mt-1">{dateString}</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Enrolled Courses */}
        <Link href="/profile/learning-progress" className="block">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-2 bg-blue-700 w-full absolute top-0"></div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-gray-700 font-medium">Enrolled Courses</h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                  />
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-900 mt-3">
                {loading ? "..." : stats.totalCourses}
              </p>
              <p className="text-sm text-gray-400 flex items-center mt-1">
                {stats.totalCourses === 0
                  ? "No courses enrolled yet"
                  : `${stats.activeCourses} active`}
              </p>
            </div>
          </div>
        </Link>

        {/* Completed Courses */}
        <Link href="/profile/completed-courses" className="block">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-2 bg-blue-700 w-full absolute top-0"></div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-gray-700 font-medium">Completed Courses</h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                  />
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-900 mt-3">
                {loading ? "..." : stats.completedCourses}
              </p>
              <p className="text-sm text-gray-400 flex items-center mt-1">
                {stats.completedCourses === 0
                  ? "No courses completed yet"
                  : `${stats.completionRate}% completion rate`}
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-2 bg-blue-700 w-full absolute top-0"></div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-gray-700 font-medium">Wishlist</h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                  />
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-900 mt-3">
                {loading ? "..." : "0"}
              </p>
              <p className="text-sm text-gray-400 flex items-center mt-1">
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
        >
          <div className="h-2 bg-blue-700 w-full absolute top-0"></div>
          <div className="p-5">
            <div className="flex justify-between items-start">
              <h3 className="text-gray-700 font-medium">Learning Streak</h3>
              <div
                className={`p-2 rounded-full transition-colors duration-200 ${
                  hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                }`}
              >
                <Calendar
                  className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                />
              </div>
            </div>
            <p className="text-3xl font-bold text-blue-900 mt-3">
              {loading ? "..." : stats.currentStreak}
            </p>
            <p className="text-sm text-gray-400 flex items-center mt-1">
              {stats.currentStreak === 0
                ? "No learning streak yet"
                : "day learning streak"}
            </p>
          </div>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning Progress - Empty State */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              Learning Progress
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <BookOpen className="mx-auto h-12 w-12 text-gray-300 mb-4" />

              <p className="text-gray-500 mb-2">No courses in progress</p>
              <p className="text-sm text-gray-400">
                Start learning by browsing our course catalog
              </p>
              <Link
                href="/courses"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity - Empty State */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />

              <p className="text-gray-500 mb-2">No recent activity</p>
              <p className="text-sm text-gray-400">
                Your learning activity will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
