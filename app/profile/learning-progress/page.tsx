"use client";

import { useState, useEffect } from "react";
import { BookOpen, Award, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

interface Enrollment {
  id: string;
  courseName: string;
  courseSlug: string;
  enrolledAt: string;
  lastAccessed: string | null;
  status: string;
  progressPercentage: number;
}

interface UserStats {
  totalCourses: number;
  completedCourses: number;
  activeCourses: number;
  totalLearningHours: number;
  currentStreak: number;
  completionRate: number;
}

export default function LearningProgressPage() {
  const { isLoggedIn } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [stats, setStats] = useState<UserStats>({
    totalCourses: 0,
    completedCourses: 0,
    activeCourses: 0,
    totalLearningHours: 0,
    currentStreak: 0,
    completionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoggedIn) {
        setLoading(false);
        return;
      }

      // Get user from localStorage
      try {
        const authUser = JSON.parse(localStorage.getItem("auth_user") || "{}");
        if (!authUser.email) {
          setLoading(false);
          return;
        }

        const headers = {
          "x-user-email": authUser.email,
          "x-user-name": authUser.name || "",
          "x-user-image": authUser.image || "",
        };

        console.log("Learning Progress - Auth User:", authUser);
        console.log("Learning Progress - Headers:", headers);

        const [enrollmentsResponse, statsResponse] = await Promise.all([
          fetch("/api/enrollments", { headers }),
          fetch("/api/user/stats", { headers }),
        ]);

        if (enrollmentsResponse.ok) {
          const enrollmentsData = await enrollmentsResponse.json();
          console.log("Enrollments Data:", enrollmentsData);
          setEnrollments(enrollmentsData);
        } else {
          console.error(
            "Enrollments API error:",
            await enrollmentsResponse.text(),
          );
        }

        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          console.log("Stats Data:", statsData);
          setStats(statsData);
        } else {
          console.error("Stats API error:", await statsResponse.text());
        }
      } catch (error) {
        console.error("Error fetching learning progress data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  return (
    <div className="space-y-6" data-oid="x3st4m.">
      {/* Header */}
      <div data-oid="reu3-yj">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="78sci3w">
          Learning Progress
        </h1>
        <p className="text-gray-600 mt-1" data-oid="gd6y76_">
          Track your learning journey and achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-oid="duqoc22">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="a_3-:yo"
        >
          <div className="flex items-center" data-oid="7d1mi:j">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="j0_mp:3">
              <BookOpen className="h-6 w-6 text-blue-600" data-oid="d54mnau" />
            </div>
            <div className="ml-4" data-oid="7ro7hvi">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="wy5f7wc"
              >
                In Progress
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="lh3dah0"
              >
                {loading ? "..." : stats.activeCourses}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="ahkdn1e"
        >
          <div className="flex items-center" data-oid="xh8map:">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="39lkptm">
              <Award className="h-6 w-6 text-green-600" data-oid="q_p6p45" />
            </div>
            <div className="ml-4" data-oid="3.hq:21">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="hl1eiub"
              >
                Completed
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="pp6-f2."
              >
                {loading ? "..." : stats.completedCourses}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="5p4djan"
        >
          <div className="flex items-center" data-oid="pp1n2ml">
            <div className="p-2 bg-purple-100 rounded-lg" data-oid="_fup4xl">
              <Clock className="h-6 w-6 text-purple-600" data-oid="ms5.5jn" />
            </div>
            <div className="ml-4" data-oid="4adzryk">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="nb-xn4v"
              >
                Study Time
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="tevx.-6"
              >
                {loading ? "..." : `${stats.totalLearningHours}h`}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="0gc176n"
        >
          <div className="flex items-center" data-oid="lxszntp">
            <div className="p-2 bg-orange-100 rounded-lg" data-oid="lcpiy:r">
              <TrendingUp
                className="h-6 w-6 text-orange-600"
                data-oid="xoefo59"
              />
            </div>
            <div className="ml-4" data-oid="dy-b93v">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="48r-078"
              >
                Streak
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="8qiavko"
              >
                {loading ? "..." : `${stats.currentStreak} days`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Progress or Empty State */}
      {enrollments.length > 0 ? (
        <div className="space-y-4" data-oid="w5bzy37">
          <h2
            className="text-lg font-semibold text-gray-800"
            data-oid="p377xah"
          >
            Your Enrolled Courses
          </h2>
          <div className="grid gap-4" data-oid="27-2gqk">
            {enrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className="bg-white rounded-lg shadow-sm border p-6"
                data-oid="u.-ntz4"
              >
                <div
                  className="flex justify-between items-start mb-4"
                  data-oid="z5d97-m"
                >
                  <div data-oid="bhc8-c2">
                    <h3
                      className="text-lg font-medium text-gray-900"
                      data-oid="3k4a9xu"
                    >
                      {enrollment.courseName}
                    </h3>
                    <p className="text-sm text-gray-500" data-oid="0cfpufu">
                      Enrolled on{" "}
                      {new Date(enrollment.enrolledAt).toLocaleDateString()}
                    </p>
                    {enrollment.lastAccessed && (
                      <p className="text-sm text-gray-500" data-oid="-18-_uu">
                        Last accessed:{" "}
                        {new Date(enrollment.lastAccessed).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      enrollment.status === "COMPLETED"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                    data-oid="i5e1a3z"
                  >
                    {enrollment.status === "COMPLETED"
                      ? "Completed"
                      : "In Progress"}
                  </span>
                </div>

                <div
                  className="w-full bg-gray-200 rounded-full h-2 mb-2"
                  data-oid="ktmtmo3"
                >
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${enrollment.progressPercentage}%` }}
                    data-oid="9hl7u-:"
                  ></div>
                </div>
                <p className="text-sm text-gray-600" data-oid="6qx3107">
                  {enrollment.progressPercentage}% complete
                </p>

                <div className="mt-4 flex gap-2" data-oid="u8onowl">
                  <Link
                    href={`/courses/${enrollment.courseSlug}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    data-oid="92gf8_i"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="bg-white rounded-lg shadow-sm border"
          data-oid="3r:ecrb"
        >
          <div className="p-8 text-center" data-oid="9en4cb7">
            <BookOpen
              className="mx-auto h-16 w-16 text-gray-300 mb-4"
              data-oid="4l06g63"
            />

            <h3
              className="text-lg font-medium text-gray-900 mb-2"
              data-oid="e8lrodq"
            >
              No learning progress yet
            </h3>
            <p className="text-gray-500 mb-6" data-oid="bwyydu8">
              Start your learning journey by enrolling in courses
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              data-oid="saxh-ky"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
