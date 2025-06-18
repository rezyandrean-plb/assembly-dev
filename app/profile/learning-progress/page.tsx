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
    <div className="p-6" data-oid="mvlylg3">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="i26n2ae"
      >
        <div data-oid="3-do32_">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="tpewv68">
            Learning Progress
          </h1>
          <p className="text-gray-500 mt-1" data-oid="4l47-6p">
            Track your progress across all enrolled courses
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="nuzaej6">
          <div className="relative" data-oid="cm09ttz">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="eohr9b3"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="tz8766f"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="c-4ixq1"
          >
            <Filter className="h-4 w-4" data-oid="5gmn6er" />
            <span data-oid="f1irdrx">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="qa_29sv">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="djlynup"
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
          data-oid="njfnb5g"
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
          data-oid="xr1qtho"
        >
          Not Started ({enrolledCourses.filter((c) => c.progress === 0).length})
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="-95dvki">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid=":qn3nui"
          >
            <div className="p-6" data-oid="bmi6li8">
              <div className="flex gap-4" data-oid="u_eer5l">
                <div
                  className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                  data-oid="l8dlfj2"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-oid="s8h.u85"
                  />
                </div>
                <div className="flex-1" data-oid="a493hcm">
                  <h2
                    className="text-lg font-bold text-gray-800"
                    data-oid="xigr6kb"
                  >
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1" data-oid="q-av06g">
                    {course.categories.join(", ")}
                  </p>
                  <p className="text-sm text-gray-700" data-oid="uwe.r_:">
                    {course.instructor}
                  </p>

                  <div
                    className="flex justify-between items-center mt-3 mb-2"
                    data-oid="8k4ytev"
                  >
                    <span className="text-sm text-gray-500" data-oid="f2izp8-">
                      {course.totalHours} hours
                    </span>
                    {course.lastAccessed && (
                      <span
                        className="text-sm text-gray-500"
                        data-oid="qp2ufmr"
                      >
                        Last Accessed: {course.lastAccessed}
                      </span>
                    )}
                  </div>

                  {course.progress > 0 && (
                    <div className="mt-3 mb-4" data-oid="vdhta-g">
                      <div
                        className="flex justify-between items-center mb-1"
                        data-oid="tbmybjb"
                      >
                        <span
                          className="text-xs text-gray-500"
                          data-oid="15grnc_"
                        >
                          Progress
                        </span>
                        <span
                          className="text-xs font-medium text-green-600"
                          data-oid="k081gmt"
                        >
                          {course.progress}%
                        </span>
                      </div>
                      <div
                        className="w-full bg-gray-100 rounded-full h-2"
                        data-oid="ec9u98q"
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
                          data-oid="_s:-jwq"
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end mt-4" data-oid="v8o9wlg">
                    <Link
                      href={`/courses/${course.slug}/learn`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      data-oid="zm:2r_h"
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
