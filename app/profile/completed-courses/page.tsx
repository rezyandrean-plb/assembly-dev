"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { getCompletedCourses } from "@/app/data/courses";

export default function CompletedCoursesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get completed courses from centralized data source
  const completedCourses = getCompletedCourses();

  // Get courses completed in the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentlyCompleted = completedCourses.filter((course) => {
    if (!course.completedDate) return false;
    const completedDate = new Date(course.completedDate);
    return completedDate >= thirtyDaysAgo;
  });

  // Filter courses based on active tab and search query
  const filteredCourses = completedCourses.filter((course) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "recent" &&
        recentlyCompleted.some((c) => c.id === course.id));

    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6" data-oid="hfl--:x">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="u0k3kag"
      >
        <div data-oid="dv34slo">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="a_e95tq">
            Completed Courses
          </h1>
          <p className="text-gray-500 mt-1" data-oid="7xvv:wj">
            Courses you've successfully completed
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid=".8dd1fn">
          <div className="relative" data-oid="-obey0h">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="vv_ek99"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="xz3qtgk"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="9fmx.5y"
          >
            <Filter className="h-4 w-4" data-oid="9hwahxn" />
            <span data-oid="j_4bzvi">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="h0:og2k">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="b7i84m-"
        >
          All Completed ({completedCourses.length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "recent"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("recent")}
          data-oid="g:oqfn9"
        >
          Recently Completed ({recentlyCompleted.length})
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="_dtipac">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="6sr92k2"
          >
            <div className="p-6" data-oid="58:3cua">
              <div className="flex items-start gap-4" data-oid="e5x.0:c">
                <div
                  className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                  data-oid="3z6qow7"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-oid="yi5af9k"
                  />
                </div>
                <div className="flex-1" data-oid="fsp-y-m">
                  <h2
                    className="text-lg font-bold text-gray-800"
                    data-oid=":qs-s:j"
                  >
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2" data-oid="aplh-35">
                    {course.categories.join(", ")}
                  </p>

                  <div className="flex items-center mb-3" data-oid="tjvf:0b">
                    <span className="text-xs text-gray-700" data-oid="hb:0-gs">
                      {course.instructor}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-between text-xs text-gray-500"
                    data-oid="sy8.dgn"
                  >
                    <div className="flex items-center gap-4" data-oid="k._15vl">
                      <span data-oid="fvswiak">{course.totalHours} hours</span>
                    </div>
                    <span data-oid="6uwurov">
                      Completed: {course.completedDate}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-end" data-oid="sgqak:4">
                    <button
                      className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      data-oid="ujkz__d"
                    >
                      Review Course
                    </button>
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
