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
    <div className="p-6" data-oid="a4fp4nc">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="oucie9a"
      >
        <div data-oid="cj5gqm1">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="fw_zr8v">
            Completed Courses
          </h1>
          <p className="text-gray-500 mt-1" data-oid="312wrc.">
            Courses you've successfully completed
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="nm.whlz">
          <div className="relative" data-oid="x83ep9e">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="l8hk0wr"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="rhte9rw"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="-rap0vb"
          >
            <Filter className="h-4 w-4" data-oid="zll4c3h" />
            <span data-oid="h9kc07e">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="uqp.o69">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="2gdzqpj"
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
          data-oid="w7b.ouq"
        >
          Recently Completed ({recentlyCompleted.length})
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="4akiex0">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="not:td6"
          >
            <div className="p-6" data-oid="2cu.ge9">
              <div className="flex items-start gap-4" data-oid="z6vy7qz">
                <div
                  className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                  data-oid="iu0j86y"
                >
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-oid="-vnflyb"
                  />
                </div>
                <div className="flex-1" data-oid="9h2fbm3">
                  <h2
                    className="text-lg font-bold text-gray-800"
                    data-oid="7:sv0a:"
                  >
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2" data-oid="vxy8p7x">
                    {course.categories.join(", ")}
                  </p>

                  <div className="flex items-center mb-3" data-oid="5:tk5g5">
                    <span className="text-xs text-gray-700" data-oid="vorp:-7">
                      {course.instructor}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-between text-xs text-gray-500"
                    data-oid="or87dwn"
                  >
                    <div className="flex items-center gap-4" data-oid="060-4:_">
                      <span data-oid="qina4gr">{course.totalHours} hours</span>
                    </div>
                    <span data-oid="j43sy_q">
                      Completed: {course.completedDate}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-end" data-oid="04xcict">
                    <button
                      className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      data-oid="mlfj1aw"
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
