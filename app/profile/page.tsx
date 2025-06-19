"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Heart,
  Award,
  ShoppingBag,
  Calendar,
} from "lucide-react";
import {
  getEnrolledCourses,
  getCompletedCourses,
  getRecommendedCourses,
  getUpcomingEvents,
  getRecentActivity,
} from "@/app/data/courses";

export default function ProfilePage() {
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

  // Get course data from centralized source
  const enrolledCourses = getEnrolledCourses();
  const completedCourses = getCompletedCourses();
  const recommendedCourses = getRecommendedCourses();
  const upcomingEvents = getUpcomingEvents();
  const recentActivity = getRecentActivity();

  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="p-6" data-oid=".q2ncwa">
      <div className="mb-6" data-oid="tn_myjv">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="pt1p.4r">
          {greeting}, Melvin
        </h1>
        <p className="text-gray-500 mt-1" data-oid="j0a2ae_">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid=".73896f"
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="q-f8qz8"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="vwr.hzh"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="g555e:1"
            ></div>
            <div className="p-5" data-oid="f-87tb4">
              <div
                className="flex justify-between items-start"
                data-oid="2bhvh5a"
              >
                <h3 className="text-gray-700 font-medium" data-oid="t91:2an">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="pfn9kbe"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="oy50q:j"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="55otqe6"
              >
                12
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="jlx5cj-"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="sgkbljt"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="kxvbv_z"
                  />
                </svg>
                4 in progress
              </p>
            </div>
          </div>
        </Link>

        {/* Completed Courses */}
        <Link
          href="/profile/completed-courses"
          className="block"
          data-oid="5nojwpm"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="wwzwqg2"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="f3u40ot"
            ></div>
            <div className="p-5" data-oid="rzl0n23">
              <div
                className="flex justify-between items-start"
                data-oid="3picghc"
              >
                <h3 className="text-gray-700 font-medium" data-oid="4bwdy:3">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="bib7ard"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid="-ipcm95"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="b7xet9z"
              >
                8
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="p4h7zgv"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="l..n5xh"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="mpgwpq2"
                  />
                </svg>
                +2 this month
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid="6y4pc0y">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="-gwi73n"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="comx8jn"
            ></div>
            <div className="p-5" data-oid="ug5jcac">
              <div
                className="flex justify-between items-start"
                data-oid=".1blbt1"
              >
                <h3 className="text-gray-700 font-medium" data-oid="3n9r5m7">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="5igr5eq"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid="u03_7al"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="zv6._1n"
              >
                7
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="23mmesh"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="ngxtrqx"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="_3k3172"
                  />
                </svg>
                3 new courses
              </p>
            </div>
          </div>
        </Link>

        {/* Upcoming Events */}
        <Link href="/profile/events" className="block" data-oid="znmy2ba">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("events")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid=":8esiex"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="0g082f9"
            ></div>
            <div className="p-5" data-oid="528eykd">
              <div
                className="flex justify-between items-start"
                data-oid="0nsf.t5"
              >
                <h3 className="text-gray-700 font-medium" data-oid="w.fp4fc">
                  Upcoming Events
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="z9dxphs"
                >
                  <Calendar
                    className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                    data-oid="43x3n4u"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="tbdz85t"
              >
                {upcomingEvents.length}
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="dy1k2ms"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="k-nzh-d"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="xfjqy3l"
                  />
                </svg>
                Next: {upcomingEvents[0]?.daysLeft || 0} days left
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="zz11cog">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col" data-oid="uiu66ex">
          {/* Learning Progress */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-oid="tsvrtq4"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="2uvb4o9"
            >
              <h2
                className="text-lg font-bold text-gray-800"
                data-oid="k60o85f"
              >
                Learning Progress
              </h2>
              <Link
                href="/profile/learning-progress"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="lf_:f9v"
              >
                View All <ChevronRight size={16} data-oid="c5cnopa" />
              </Link>
            </div>

            <div
              className="space-y-4 flex-1 overflow-y-auto"
              data-oid="1g06uvx"
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="abhd6c4"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="hhfg7ft"
                  >
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="t5aq6qj"
                    />
                  </div>
                  <div className="flex-grow" data-oid="kboc4qj">
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="-e4x9un"
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="kl9-b:."
                    >
                      {course.totalHours} hours total
                    </p>
                    <div
                      className="mt-2 w-full bg-gray-200 rounded-full h-2"
                      data-oid="v.txudf"
                    >
                      <div
                        className={`h-2 rounded-full ${
                          course.progress > 70
                            ? "bg-green-600"
                            : course.progress > 30
                              ? "bg-green-500"
                              : "bg-green-400"
                        }`}
                        style={{ width: `${course.progress}%` }}
                        data-oid="66o85xn"
                      ></div>
                    </div>
                    <div
                      className="mt-2 flex justify-between items-center"
                      data-oid="p01qfa4"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="9ki__kh"
                      >
                        {course.progress === 0
                          ? "Not started yet"
                          : `Last Accessed: ${course.lastAccessed}`}
                      </span>
                      <span
                        className="text-xs text-green-600 font-medium"
                        data-oid="e2apo4:"
                      >
                        {course.progress === 0
                          ? "Ready to start"
                          : `${course.progress}% completed`}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-end" data-oid="z7jwc-e">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-blue-600 text-xs font-medium hover:underline"
                        data-oid="l93ft9h"
                      >
                        {course.progress === 0 ? "Start" : "Continue"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6" data-oid="7h466em">
          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="tsvn-tg"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="vn7zswb"
            >
              <div data-oid="pffz_99">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="6e04zj0"
                >
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-500" data-oid="3lef5ea">
                  Your recent learning activity
                </p>
              </div>
              <Link
                href="/profile/activity"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="ch8n79f"
              >
                View All <ChevronRight size={16} data-oid="797vi3r" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="elznbk6">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  data-oid="dew:b43"
                >
                  <div className="flex items-start gap-3" data-oid="7x56rtg">
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        activity.type === "completed"
                          ? "bg-green-100"
                          : activity.type === "wishlist"
                            ? "bg-red-100"
                            : "bg-blue-100"
                      }`}
                      data-oid="mopoq3v"
                    >
                      {activity.type === "completed" && (
                        <Award
                          className={`h-4 w-4 text-green-600`}
                          data-oid="lqpg4bi"
                        />
                      )}
                      {activity.type === "wishlist" && (
                        <Heart
                          className={`h-4 w-4 text-red-600`}
                          data-oid="gous.ww"
                        />
                      )}
                      {activity.type === "purchase" && (
                        <ShoppingBag
                          className={`h-4 w-4 text-blue-600`}
                          data-oid="q3h46:n"
                        />
                      )}
                    </div>
                    <div data-oid="j7cxl7:">
                      <p
                        className="font-medium text-gray-800"
                        data-oid="tky2z2z"
                      >
                        {activity.title}
                      </p>
                      {activity.course && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="qy8eshl"
                        >
                          {activity.course}
                        </p>
                      )}
                      {activity.instructor && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="vg4id_v"
                        >
                          Course by {activity.instructor}
                        </p>
                      )}
                      {activity.price && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="wphj128"
                        >
                          {activity.price} Premium Course
                        </p>
                      )}
                      {activity.xp && (
                        <p
                          className="text-sm text-green-600 mt-1"
                          data-oid="cy:ij7r"
                        >
                          +{activity.xp} XP earned
                        </p>
                      )}
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="tel5zuj"
                      >
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommended Courses */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-oid="tu5zd.h"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="e-dn1de"
            >
              <div data-oid="bo0nzd_">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="-qmybs7"
                >
                  Recommended Courses
                </h2>
                <p className="text-sm text-gray-500" data-oid="bpbz6l7">
                  Based on your interests and learning history
                </p>
              </div>
              <Link
                href="/courses"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="b27-1_g"
              >
                View All <ChevronRight size={16} data-oid="hx-3vra" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="gdbaxd0">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="j8yq8g3"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="1e3jb6i"
                  >
                    <Image
                      src={course.image || "/profile-placeholder.png"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="yvu5jlt"
                    />
                  </div>
                  <div className="flex-grow" data-oid="vrxx6b8">
                    <h3
                      className="font-medium text-gray-800 text-sm"
                      data-oid="tc1tn9v"
                    >
                      {course.title}
                    </h3>
                    <div
                      className="flex items-center justify-between mt-1"
                      data-oid="xa-ev9t"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="to-7j4l"
                      >
                        {course.level}
                      </span>
                      <span
                        className="text-xs text-gray-500"
                        data-oid="a_tdqyw"
                      >
                        {course.totalHours} hours
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-2 text-blue-600 text-xs font-medium hover:underline inline-block"
                      data-oid="2d4egw6"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
