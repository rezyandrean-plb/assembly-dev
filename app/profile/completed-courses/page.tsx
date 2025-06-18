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
    <div className="p-6" data-oid="aasb:-_">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="2wgdx9."
      >
        <div data-oid="vu7.izz">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="vrvjh2-">
            Completed Courses
          </h1>
          <p className="text-gray-500 mt-1" data-oid="7nrgarv">
            Courses you've successfully completed
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="igllhkh">
          <div className="relative" data-oid="01y32jg">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="uoxxrj9"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="bj3g0cd"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="1t:i_on"
          >
            <Filter className="h-4 w-4" data-oid="scf1jij" />
            <span data-oid="pqsu8e.">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="oxoxi-8">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="_qmcj3k"
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
          data-oid="1jyrk.v"
        >
          Recently Completed ({recentlyCompleted.length})
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="ofl39m1">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="3vlw1:b"
          >
            <div className="p-6" data-oid="wy3ufls">
              <div className="flex items-start gap-4" data-oid="bsz8kq.">
                <div
                  className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                  data-oid="1ni3rrw"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-oid="mrhlxt0"
                  />
                </div>
                <div className="flex-1" data-oid="bro:1-:">
                  <h2
                    className="text-lg font-bold text-gray-800"
                    data-oid="8lq81i8"
                  >
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2" data-oid="bxl28h1">
                    {course.categories.join(", ")}
                  </p>

                  <div className="flex items-center mb-3" data-oid="aeriiin">
                    <span className="text-xs text-gray-700" data-oid="fic714z">
                      {course.instructor}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-between text-xs text-gray-500"
                    data-oid="ejxpb8y"
                  >
                    <div className="flex items-center gap-4" data-oid="rauqnby">
                      <span data-oid="1asuhbc">{course.totalHours} hours</span>
                    </div>
                    <span data-oid="0uj4lz2">
                      Completed: {course.completedDate}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-end" data-oid="ne43x9:">
                    <button
                      className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      data-oid="3-302-b"
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
