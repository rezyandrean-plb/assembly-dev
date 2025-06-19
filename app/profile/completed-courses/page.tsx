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
    <div className="p-6" data-oid="c9fou9g">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="e2d.-_j"
      >
        <div data-oid="b35ycfe">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="jr:m0fk">
            Completed Courses
          </h1>
          <p className="text-gray-500 mt-1" data-oid=":9b51oh">
            Courses you've successfully completed
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="k-x9:k3">
          <div className="relative" data-oid="qga7_i:">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="elo4pmb"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="t.y5qtd"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="jsmz1gp"
          >
            <Filter className="h-4 w-4" data-oid="65a:hdg" />
            <span data-oid="pyrpt:2">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="p1clbkj">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="v5oi1ll"
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
          data-oid="4mo1_cp"
        >
          Recently Completed ({recentlyCompleted.length})
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="pz.zd2b">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="9feg8iz"
          >
            <div className="p-6" data-oid="7mwq2j8">
              <div className="flex items-start gap-4" data-oid="6t7o9p:">
                <div
                  className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                  data-oid="8kx4dco"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-oid="cm_ojrn"
                  />
                </div>
                <div className="flex-1" data-oid="kx3gpe5">
                  <h2
                    className="text-lg font-bold text-gray-800"
                    data-oid="7wl636r"
                  >
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2" data-oid="ldq:pvn">
                    {course.categories.join(", ")}
                  </p>

                  <div className="flex items-center mb-3" data-oid="56yz4sd">
                    <span className="text-xs text-gray-700" data-oid=":65ob-s">
                      {course.instructor}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-between text-xs text-gray-500"
                    data-oid="j_sty5x"
                  >
                    <div className="flex items-center gap-4" data-oid="5zpxw-c">
                      <span data-oid="fxoh0z_">{course.totalHours} hours</span>
                    </div>
                    <span data-oid="gmzo_33">
                      Completed: {course.completedDate}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-end" data-oid="d00s_k1">
                    <button
                      className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      data-oid="s7qy_l1"
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
