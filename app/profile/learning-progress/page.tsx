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
    <div className="space-y-6" data-oid="llii71a">
      {/* Header */}
      <div data-oid="t8qg4wo">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="2w45hqr">
          Learning Progress
        </h1>
        <p className="text-gray-600 mt-1" data-oid="6xj8tkg">
          Track your learning journey and achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-oid="wzjgyxe">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="67a5p-t"
        >
          <div className="flex items-center" data-oid="1i3lzq8">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="rjsilsg">
              <BookOpen className="h-6 w-6 text-blue-600" data-oid="t7eb0_f" />
            </div>
            <div className="ml-4" data-oid="v9639co">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="f2hp2pp"
              >
                In Progress
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid=":qi8uj7"
              >
                {loading ? "..." : stats.activeCourses}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="l.77i4-"
        >
          <div className="flex items-center" data-oid="44_49ks">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="35yrm__">
              <Award className="h-6 w-6 text-green-600" data-oid="hm:98qu" />
            </div>
            <div className="ml-4" data-oid="5n:5p9f">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="wwcfj4:"
              >
                Completed
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="bi.9i8p"
              >
                {loading ? "..." : stats.completedCourses}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid=":a8y1xl"
        >
          <div className="flex items-center" data-oid=":szy_ci">
            <div className="p-2 bg-purple-100 rounded-lg" data-oid="x:r2:9q">
              <Clock className="h-6 w-6 text-purple-600" data-oid="dkvvu78" />
            </div>
            <div className="ml-4" data-oid="m4g9pbq">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="dzrcybt"
              >
                Study Time
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="zmhul_."
              >
                {loading ? "..." : `${stats.totalLearningHours}h`}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="1_xt95d"
        >
          <div className="flex items-center" data-oid="x3jz3vr">
            <div className="p-2 bg-orange-100 rounded-lg" data-oid="slaqk1v">
              <TrendingUp
                className="h-6 w-6 text-orange-600"
                data-oid="p-rb75m"
              />
            </div>
            <div className="ml-4" data-oid="646r91z">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="fvx8rvd"
              >
                Streak
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="31_yfon"
              >
                {loading ? "..." : `${stats.currentStreak} days`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Progress or Empty State */}
      {enrollments.length > 0 ? (
        <div className="space-y-4" data-oid="2.5g-fu">
          <h2
            className="text-lg font-semibold text-gray-800"
            data-oid="5i6c1lr"
          >
            Your Enrolled Courses
          </h2>
          <div className="grid gap-4" data-oid="suea4lh">
            {enrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className="bg-white rounded-lg shadow-sm border p-6"
                data-oid="hwawii5"
              >
                <div
                  className="flex justify-between items-start mb-4"
                  data-oid="tb3p.np"
                >
                  <div data-oid="8y-adt7">
                    <h3
                      className="text-lg font-medium text-gray-900"
                      data-oid="y6hl3:s"
                    >
                      {enrollment.courseName}
                    </h3>
                    <p className="text-sm text-gray-500" data-oid="-aw5v1b">
                      Enrolled on{" "}
                      {new Date(enrollment.enrolledAt).toLocaleDateString()}
                    </p>
                    {enrollment.lastAccessed && (
                      <p className="text-sm text-gray-500" data-oid="e7lxlwx">
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
                    data-oid="gqz9cma"
                  >
                    {enrollment.status === "COMPLETED"
                      ? "Completed"
                      : "In Progress"}
                  </span>
                </div>

                <div
                  className="w-full bg-gray-200 rounded-full h-2 mb-2"
                  data-oid=".17pq3s"
                >
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${enrollment.progressPercentage}%` }}
                    data-oid="17bl9ju"
                  ></div>
                </div>
                <p className="text-sm text-gray-600" data-oid="etow7-d">
                  {enrollment.progressPercentage}% complete
                </p>

                <div className="mt-4 flex gap-2" data-oid="e1tq9ge">
                  <Link
                    href={`/courses/${enrollment.courseSlug}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    data-oid="rast1_5"
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
          data-oid="47.w6vy"
        >
          <div className="p-8 text-center" data-oid="t7tze8r">
            <BookOpen
              className="mx-auto h-16 w-16 text-gray-300 mb-4"
              data-oid="xih9qs9"
            />

            <h3
              className="text-lg font-medium text-gray-900 mb-2"
              data-oid="r_x0bqs"
            >
              No learning progress yet
            </h3>
            <p className="text-gray-500 mb-6" data-oid="rjm1c6l">
              Start your learning journey by enrolling in courses
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              data-oid="98jazrh"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
