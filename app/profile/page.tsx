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
    <div className="p-6" data-oid="wkxt_5b">
      <div className="mb-6" data-oid="7houc3:">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="uohbwmg">
          {greeting}, Melvin
        </h1>
        <p className="text-gray-500 mt-1" data-oid="mimxm9l">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid="qpeath."
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="eqm3jjc"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="d9f4zq:"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="qdomx3z"
            ></div>
            <div className="p-5" data-oid=".4vdcr-">
              <div
                className="flex justify-between items-start"
                data-oid="d1aymx-"
              >
                <h3 className="text-gray-700 font-medium" data-oid="jc_t21k">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="2x3hjdw"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="ky2skv5"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="rfums9t"
              >
                12
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="912fnod"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="muzkt.0"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="s4o30kx"
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
          data-oid="jok44c9"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="i4zpr06"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="ar7et.x"
            ></div>
            <div className="p-5" data-oid="2xed.k3">
              <div
                className="flex justify-between items-start"
                data-oid="xhldzr1"
              >
                <h3 className="text-gray-700 font-medium" data-oid="xrik9ut">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="q0c9.x3"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid="-_plu4v"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="9u.ps34"
              >
                8
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="rtbndj."
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="kf0zmaq"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="5hvep8e"
                  />
                </svg>
                +2 this month
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid="xv_23a:">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="-eo_jlh"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="qhf86k4"
            ></div>
            <div className="p-5" data-oid="m4gsj_n">
              <div
                className="flex justify-between items-start"
                data-oid="o_r6g8n"
              >
                <h3 className="text-gray-700 font-medium" data-oid="6gfy1zu">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="9arucy-"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid="i-5mtcs"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="k34te98"
              >
                7
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="g91:kz5"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="mredg6k"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="oix3ur0"
                  />
                </svg>
                3 new courses
              </p>
            </div>
          </div>
        </Link>

        {/* Upcoming Events */}
        <Link href="/profile/events" className="block" data-oid="aye_q59">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("events")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="w_75dv2"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="vw_yk.2"
            ></div>
            <div className="p-5" data-oid="qq17evq">
              <div
                className="flex justify-between items-start"
                data-oid="7.wclxr"
              >
                <h3 className="text-gray-700 font-medium" data-oid="pqv7rmz">
                  Upcoming Events
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="mgnd8b."
                >
                  <Calendar
                    className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                    data-oid="1w6e9d3"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="simwwti"
              >
                {upcomingEvents.length}
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="spgvhzs"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="pqh1ipx"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="srjsm1b"
                  />
                </svg>
                Next: {upcomingEvents[0]?.daysLeft || 0} days left
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="7yw0v70">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col" data-oid="yv_1.zm">
          {/* Learning Progress */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-oid="rlv5h7y"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="uiwtxm7"
            >
              <h2
                className="text-lg font-bold text-gray-800"
                data-oid=".kfr15n"
              >
                Learning Progress
              </h2>
              <Link
                href="/profile/learning-progress"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="36r4gj:"
              >
                View All <ChevronRight size={16} data-oid="cuw8s7i" />
              </Link>
            </div>

            <div
              className="space-y-4 flex-1 overflow-y-auto"
              data-oid="yvwzrxy"
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="t9-7v.6"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="eo2bjd7"
                  >
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="vq:r0ob"
                    />
                  </div>
                  <div className="flex-grow" data-oid="6634z6h">
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="dxabf_x"
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="f-p7f_7"
                    >
                      {course.totalHours} hours total
                    </p>
                    <div
                      className="mt-2 w-full bg-gray-200 rounded-full h-2"
                      data-oid="sc8ucay"
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
                        data-oid="nfi94ip"
                      ></div>
                    </div>
                    <div
                      className="mt-2 flex justify-between items-center"
                      data-oid="co53wn9"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="8hrpde_"
                      >
                        {course.progress === 0
                          ? "Not started yet"
                          : `Last Accessed: ${course.lastAccessed}`}
                      </span>
                      <span
                        className="text-xs text-green-600 font-medium"
                        data-oid="ipx76e3"
                      >
                        {course.progress === 0
                          ? "Ready to start"
                          : `${course.progress}% completed`}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-end" data-oid="rjj_d:u">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-blue-600 text-xs font-medium hover:underline"
                        data-oid="h_2:fg2"
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
        <div className="space-y-6" data-oid="2ru6.zp">
          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="vsyo-c5"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="7pwj:ht"
            >
              <div data-oid="ic5ddj6">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="5:j048t"
                >
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-500" data-oid="dg4yvil">
                  Your recent learning activity
                </p>
              </div>
              <Link
                href="/profile/activity"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="kr23os3"
              >
                View All <ChevronRight size={16} data-oid="3erj:5b" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="1tf2hjn">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  data-oid="rqct4.3"
                >
                  <div className="flex items-start gap-3" data-oid="-k5kgwt">
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        activity.type === "completed"
                          ? "bg-green-100"
                          : activity.type === "wishlist"
                            ? "bg-red-100"
                            : "bg-blue-100"
                      }`}
                      data-oid="whler3m"
                    >
                      {activity.type === "completed" && (
                        <Award
                          className={`h-4 w-4 text-green-600`}
                          data-oid="4jo1z04"
                        />
                      )}
                      {activity.type === "wishlist" && (
                        <Heart
                          className={`h-4 w-4 text-red-600`}
                          data-oid=":juf76v"
                        />
                      )}
                      {activity.type === "purchase" && (
                        <ShoppingBag
                          className={`h-4 w-4 text-blue-600`}
                          data-oid="8t33:u-"
                        />
                      )}
                    </div>
                    <div data-oid="klr7.2l">
                      <p
                        className="font-medium text-gray-800"
                        data-oid="s23ftap"
                      >
                        {activity.title}
                      </p>
                      {activity.course && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="si2jw4c"
                        >
                          {activity.course}
                        </p>
                      )}
                      {activity.instructor && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="p99sgrp"
                        >
                          Course by {activity.instructor}
                        </p>
                      )}
                      {activity.price && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="1.-8gx3"
                        >
                          {activity.price} Premium Course
                        </p>
                      )}
                      {activity.xp && (
                        <p
                          className="text-sm text-green-600 mt-1"
                          data-oid="mhi697j"
                        >
                          +{activity.xp} XP earned
                        </p>
                      )}
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="e24:jwl"
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
            data-oid="veq-d1h"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="c8nmap6"
            >
              <div data-oid="2us21n1">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="s5ede47"
                >
                  Recommended Courses
                </h2>
                <p className="text-sm text-gray-500" data-oid="z88pqqo">
                  Based on your interests and learning history
                </p>
              </div>
              <Link
                href="/courses"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="i83awf4"
              >
                View All <ChevronRight size={16} data-oid="x09f_86" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="3wp3d6m">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="nauzbzt"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid=".azwqi_"
                  >
                    <Image
                      src={course.image || "/profile-placeholder.png"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="4utk8jy"
                    />
                  </div>
                  <div className="flex-grow" data-oid="s35shic">
                    <h3
                      className="font-medium text-gray-800 text-sm"
                      data-oid="knd.7dw"
                    >
                      {course.title}
                    </h3>
                    <div
                      className="flex items-center justify-between mt-1"
                      data-oid="edsq:sh"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="6jjyn-c"
                      >
                        {course.level}
                      </span>
                      <span
                        className="text-xs text-gray-500"
                        data-oid="r.-9380"
                      >
                        {course.totalHours} hours
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-2 text-blue-600 text-xs font-medium hover:underline inline-block"
                      data-oid="g41hvq."
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
