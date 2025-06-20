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
    <div className="p-6" data-oid="7oa38ue">
      <div className="mb-6" data-oid="gsv-.j1">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="wbeqlvz">
          {greeting}, Melvin
        </h1>
        <p className="text-gray-500 mt-1" data-oid="u0b81-d">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid="06ruo01"
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="ll1-:p1"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="h:rf-cv"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="y4o30rc"
            ></div>
            <div className="p-5" data-oid="m_l:06o">
              <div
                className="flex justify-between items-start"
                data-oid="c92dj_z"
              >
                <h3 className="text-gray-700 font-medium" data-oid="h5nlit8">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="lgbs:cr"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="968s439"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="wulsdlv"
              >
                12
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="3kda:h6"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="hmqe:t_"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="rkr:535"
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
          data-oid="aikmlqg"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="8ujcl-k"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="xtmv.js"
            ></div>
            <div className="p-5" data-oid="-ahtu0r">
              <div
                className="flex justify-between items-start"
                data-oid="3qp4t_k"
              >
                <h3 className="text-gray-700 font-medium" data-oid="rv7bjoj">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="_:lin98"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid="4qzxws2"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="67y.7d6"
              >
                8
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="j3or:c_"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="bpz2pr4"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="7ubpvt4"
                  />
                </svg>
                +2 this month
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid="rn97f_4">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="e1rqre6"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="zdvl.5q"
            ></div>
            <div className="p-5" data-oid="2t3s.i-">
              <div
                className="flex justify-between items-start"
                data-oid="h..i-tz"
              >
                <h3 className="text-gray-700 font-medium" data-oid="2wqosqo">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="b9afjce"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid="dmqv4n8"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="e9-mj54"
              >
                7
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="m5od41n"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="1-xfxq6"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="7k8okz."
                  />
                </svg>
                3 new courses
              </p>
            </div>
          </div>
        </Link>

        {/* Upcoming Events */}
        <Link href="/profile/events" className="block" data-oid="k-.lxjk">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("events")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="jcrfdjt"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="94i0a_z"
            ></div>
            <div className="p-5" data-oid="fp4jxbz">
              <div
                className="flex justify-between items-start"
                data-oid="1b2y:ot"
              >
                <h3 className="text-gray-700 font-medium" data-oid="14ojbom">
                  Upcoming Events
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="bp1j_c9"
                >
                  <Calendar
                    className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                    data-oid="gsxhezv"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="qytw6zm"
              >
                {upcomingEvents.length}
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="d3cma:a"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="gwxaas9"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="6:te1rb"
                  />
                </svg>
                Next: {upcomingEvents[0]?.daysLeft || 0} days left
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid=".:-0783">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col" data-oid="_6suvx9">
          {/* Learning Progress */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-oid="0htdhn-"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="-p66593"
            >
              <h2
                className="text-lg font-bold text-gray-800"
                data-oid="jxm2rh4"
              >
                Learning Progress
              </h2>
              <Link
                href="/profile/learning-progress"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="ids33s9"
              >
                View All <ChevronRight size={16} data-oid=":etncs-" />
              </Link>
            </div>

            <div
              className="space-y-4 flex-1 overflow-y-auto"
              data-oid="pqr224g"
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="tn8nvts"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="j5828-7"
                  >
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="0snoc72"
                    />
                  </div>
                  <div className="flex-grow" data-oid=".ds5ohv">
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="8ik7t:f"
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="wiz42l4"
                    >
                      {course.totalHours} hours total
                    </p>
                    <div
                      className="mt-2 w-full bg-gray-200 rounded-full h-2"
                      data-oid="d.9wzb4"
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
                        data-oid="6losb5u"
                      ></div>
                    </div>
                    <div
                      className="mt-2 flex justify-between items-center"
                      data-oid="pvlu_im"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="60i6:ya"
                      >
                        {course.progress === 0
                          ? "Not started yet"
                          : `Last Accessed: ${course.lastAccessed}`}
                      </span>
                      <span
                        className="text-xs text-green-600 font-medium"
                        data-oid="6t.c4ml"
                      >
                        {course.progress === 0
                          ? "Ready to start"
                          : `${course.progress}% completed`}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-end" data-oid=":6jw6q:">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-blue-600 text-xs font-medium hover:underline"
                        data-oid="8wujmxq"
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
        <div className="space-y-6" data-oid="00hlbrv">
          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="g60y25i"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="nq64tst"
            >
              <div data-oid="slj976g">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="jahac2z"
                >
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-500" data-oid="4:l2m8r">
                  Your recent learning activity
                </p>
              </div>
              <Link
                href="/profile/activity"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="pcfi:ho"
              >
                View All <ChevronRight size={16} data-oid="kadwre:" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="o6ur7l5">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  data-oid="t5l793a"
                >
                  <div className="flex items-start gap-3" data-oid="4d0zzjc">
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        activity.type === "completed"
                          ? "bg-green-100"
                          : activity.type === "wishlist"
                            ? "bg-red-100"
                            : "bg-blue-100"
                      }`}
                      data-oid="hfb6dl6"
                    >
                      {activity.type === "completed" && (
                        <Award
                          className={`h-4 w-4 text-green-600`}
                          data-oid="a9666m8"
                        />
                      )}
                      {activity.type === "wishlist" && (
                        <Heart
                          className={`h-4 w-4 text-red-600`}
                          data-oid="i_ijy_6"
                        />
                      )}
                      {activity.type === "purchase" && (
                        <ShoppingBag
                          className={`h-4 w-4 text-blue-600`}
                          data-oid="_y6sgdr"
                        />
                      )}
                    </div>
                    <div data-oid="4-k7few">
                      <p
                        className="font-medium text-gray-800"
                        data-oid="ht04f78"
                      >
                        {activity.title}
                      </p>
                      {activity.course && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="9:ful7n"
                        >
                          {activity.course}
                        </p>
                      )}
                      {activity.instructor && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="h_:uf2:"
                        >
                          Course by {activity.instructor}
                        </p>
                      )}
                      {activity.price && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="3t13f0x"
                        >
                          {activity.price} Premium Course
                        </p>
                      )}
                      {activity.xp && (
                        <p
                          className="text-sm text-green-600 mt-1"
                          data-oid="68v5iev"
                        >
                          +{activity.xp} XP earned
                        </p>
                      )}
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="bi4_ei."
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
            data-oid="ush_8.p"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="6u_rddz"
            >
              <div data-oid=":o5su:9">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid=".7n9leh"
                >
                  Recommended Courses
                </h2>
                <p className="text-sm text-gray-500" data-oid="5wguyni">
                  Based on your interests and learning history
                </p>
              </div>
              <Link
                href="/courses"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="t5ei2ba"
              >
                View All <ChevronRight size={16} data-oid="yoyj7nk" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="-k66tih">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="_c7-wqy"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="lel5b7k"
                  >
                    <Image
                      src={course.image || "/profile-placeholder.png"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="kov6cie"
                    />
                  </div>
                  <div className="flex-grow" data-oid="a-7bvwz">
                    <h3
                      className="font-medium text-gray-800 text-sm"
                      data-oid=".pi:-e0"
                    >
                      {course.title}
                    </h3>
                    <div
                      className="flex items-center justify-between mt-1"
                      data-oid="elv8j2l"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="i30.sy8"
                      >
                        {course.level}
                      </span>
                      <span
                        className="text-xs text-gray-500"
                        data-oid="qd-lxm_"
                      >
                        {course.totalHours} hours
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-2 text-blue-600 text-xs font-medium hover:underline inline-block"
                      data-oid="byvvf7v"
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
