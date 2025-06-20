"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { getEnrolledCourses } from "@/app/data/courses";

export default function LearningProgressPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get enrolled courses from centralized data source
  const enrolledCourses = getEnrolledCourses();

  // Filter courses based on active tab and search query
  const filteredCourses = enrolledCourses.filter((course) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "inProgress" &&
        course.progress > 0 &&
        course.progress < 100) ||
      (activeTab === "notStarted" && course.progress === 0);

    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6" data-oid="df8.fhx">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="3u:r719"
      >
        <div data-oid="1k5qu6o">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="th-kxef">
            Learning Progress
          </h1>
          <p className="text-gray-500 mt-1" data-oid="6mts7uh">
            Track your progress across all enrolled courses
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="r9c_z6o">
          <div className="relative" data-oid=":g3u_5b">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="z5mxdul"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="dtw3:wd"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="14_5-ks"
          >
            <Filter className="h-4 w-4" data-oid="rb8r2gg" />
            <span data-oid="n57.365">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="ic.3p4r">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="vgdfldx"
        >
          All Courses ({enrolledCourses.length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "inProgress"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("inProgress")}
          data-oid="cttt:pw"
        >
          In Progress (
          {
            enrolledCourses.filter((c) => c.progress > 0 && c.progress < 100)
              .length
          }
          )
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "notStarted"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notStarted")}
          data-oid=".m.awoz"
        >
          Not Started ({enrolledCourses.filter((c) => c.progress === 0).length})
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="e--:y5c">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="w8dvfo6"
          >
            <div className="p-6" data-oid="x2ps9o0">
              <div className="flex gap-4" data-oid="z6xx-z.">
                <div
                  className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                  data-oid="o10.hss"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-oid="qtoy1ax"
                  />
                </div>
                <div className="flex-1" data-oid="s234v3o">
                  <h2
                    className="text-lg font-bold text-gray-800"
                    data-oid="ojxamf_"
                  >
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1" data-oid="4_rg5kp">
                    {course.categories.join(", ")}
                  </p>
                  <p className="text-sm text-gray-700" data-oid="2az1mbr">
                    {course.instructor}
                  </p>

                  <div
                    className="flex justify-between items-center mt-3 mb-2"
                    data-oid="waqr370"
                  >
                    <span className="text-sm text-gray-500" data-oid=":oosdhm">
                      {course.totalHours} hours
                    </span>
                    {course.lastAccessed && (
                      <span
                        className="text-sm text-gray-500"
                        data-oid="rhfb5nk"
                      >
                        Last Accessed: {course.lastAccessed}
                      </span>
                    )}
                  </div>

                  {course.progress > 0 && (
                    <div className="mt-3 mb-4" data-oid="npvtw:_">
                      <div
                        className="flex justify-between items-center mb-1"
                        data-oid="slf0:rs"
                      >
                        <span
                          className="text-xs text-gray-500"
                          data-oid=":5x8-b:"
                        >
                          Progress
                        </span>
                        <span
                          className="text-xs font-medium text-green-600"
                          data-oid="zuxkp55"
                        >
                          {course.progress}%
                        </span>
                      </div>
                      <div
                        className="w-full bg-gray-100 rounded-full h-2"
                        data-oid="h48dam."
                      >
                        <div
                          className={`h-2 rounded-full ${
                            course.progress < 30
                              ? "bg-green-400"
                              : course.progress < 70
                                ? "bg-green-500"
                                : "bg-green-600"
                          }`}
                          style={{ width: `${course.progress}%` }}
                          data-oid="z0u0zl."
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end mt-4" data-oid="feh_zcs">
                    <Link
                      href={`/courses/${course.slug}/learn`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      data-oid="o8n-kv_"
                    >
                      {course.progress > 0 ? "Continue" : "Start"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
