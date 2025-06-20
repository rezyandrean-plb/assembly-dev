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
    <div className="p-6" data-oid="jk_09u6">
      <div className="mb-6" data-oid="f051nq4">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="h9fw6ep">
          {greeting}, Melvin
        </h1>
        <p className="text-gray-500 mt-1" data-oid="rltw8_7">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid="a6untq-"
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="x2k1.h8"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="fn0ozt6"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="81wxws2"
            ></div>
            <div className="p-5" data-oid="61gml8u">
              <div
                className="flex justify-between items-start"
                data-oid="3wd7.xt"
              >
                <h3 className="text-gray-700 font-medium" data-oid="bddyr:u">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="1e3b6_:"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="7-w1hy-"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="mrnz2uh"
              >
                12
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="j0x2-3z"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="ug2cpj1"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="k7j9a3o"
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
          data-oid="az_i.r2"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="j9ug4gr"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="mk7gkom"
            ></div>
            <div className="p-5" data-oid="0.k8y15">
              <div
                className="flex justify-between items-start"
                data-oid="xs..6_p"
              >
                <h3 className="text-gray-700 font-medium" data-oid="q0drzhq">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="amy1mh2"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid="1zq8ccm"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="yoqu3mo"
              >
                8
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="n_.jbiy"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="lfe1l1."
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="cvi6dvs"
                  />
                </svg>
                +2 this month
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid="xawscqa">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="w9e3nw1"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="t.3o_v7"
            ></div>
            <div className="p-5" data-oid="k73tbg3">
              <div
                className="flex justify-between items-start"
                data-oid="vi8w2ea"
              >
                <h3 className="text-gray-700 font-medium" data-oid="tcqk2on">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="yb0a:q6"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid="4vnn90p"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="-x49w:p"
              >
                7
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="4er7wbz"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="cv8j.e_"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="itu5wow"
                  />
                </svg>
                3 new courses
              </p>
            </div>
          </div>
        </Link>

        {/* Upcoming Events */}
        <Link href="/profile/events" className="block" data-oid="vgmm.-c">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("events")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="_cg:1t-"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="dcubw1k"
            ></div>
            <div className="p-5" data-oid="q56vd-:">
              <div
                className="flex justify-between items-start"
                data-oid="cm7k:06"
              >
                <h3 className="text-gray-700 font-medium" data-oid="1gktiy2">
                  Upcoming Events
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="a9a_qdf"
                >
                  <Calendar
                    className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                    data-oid=":pyxb8v"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="2.lcbl8"
              >
                {upcomingEvents.length}
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="cdv-c7h"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="v_joyzr"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="olwklx."
                  />
                </svg>
                Next: {upcomingEvents[0]?.daysLeft || 0} days left
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="emf_wjm">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col" data-oid="91mowzu">
          {/* Learning Progress */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-oid="q39067:"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="jzoqwa1"
            >
              <h2
                className="text-lg font-bold text-gray-800"
                data-oid="dlml-0s"
              >
                Learning Progress
              </h2>
              <Link
                href="/profile/learning-progress"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="9k._131"
              >
                View All <ChevronRight size={16} data-oid="e295aj:" />
              </Link>
            </div>

            <div
              className="space-y-4 flex-1 overflow-y-auto"
              data-oid="0_w62ft"
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="4ijrzbv"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="h5k-8uk"
                  >
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="60-pduz"
                    />
                  </div>
                  <div className="flex-grow" data-oid="9f_3npt">
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="znyj29k"
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="_78ok6i"
                    >
                      {course.totalHours} hours total
                    </p>
                    <div
                      className="mt-2 w-full bg-gray-200 rounded-full h-2"
                      data-oid="mj1sfug"
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
                        data-oid="_48dirm"
                      ></div>
                    </div>
                    <div
                      className="mt-2 flex justify-between items-center"
                      data-oid="t4:ujtn"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="8_2bl13"
                      >
                        {course.progress === 0
                          ? "Not started yet"
                          : `Last Accessed: ${course.lastAccessed}`}
                      </span>
                      <span
                        className="text-xs text-green-600 font-medium"
                        data-oid="rdp.9t9"
                      >
                        {course.progress === 0
                          ? "Ready to start"
                          : `${course.progress}% completed`}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-end" data-oid="hwkv5es">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-blue-600 text-xs font-medium hover:underline"
                        data-oid="hus_k83"
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
        <div className="space-y-6" data-oid="e8:r7v-">
          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="7obk75a"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="d9t3:jw"
            >
              <div data-oid="0avkkvm">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="la_8c5l"
                >
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-500" data-oid="k4q4f7l">
                  Your recent learning activity
                </p>
              </div>
              <Link
                href="/profile/activity"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="8316ib9"
              >
                View All <ChevronRight size={16} data-oid="rdd153r" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="lnav1v8">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  data-oid="ze17mfg"
                >
                  <div className="flex items-start gap-3" data-oid="rgh9f:u">
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        activity.type === "completed"
                          ? "bg-green-100"
                          : activity.type === "wishlist"
                            ? "bg-red-100"
                            : "bg-blue-100"
                      }`}
                      data-oid="hkqhx-x"
                    >
                      {activity.type === "completed" && (
                        <Award
                          className={`h-4 w-4 text-green-600`}
                          data-oid="fyqremt"
                        />
                      )}
                      {activity.type === "wishlist" && (
                        <Heart
                          className={`h-4 w-4 text-red-600`}
                          data-oid="y0x.hej"
                        />
                      )}
                      {activity.type === "purchase" && (
                        <ShoppingBag
                          className={`h-4 w-4 text-blue-600`}
                          data-oid="-twr-nn"
                        />
                      )}
                    </div>
                    <div data-oid="rymwidu">
                      <p
                        className="font-medium text-gray-800"
                        data-oid="-dlucj6"
                      >
                        {activity.title}
                      </p>
                      {activity.course && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="02s_sgu"
                        >
                          {activity.course}
                        </p>
                      )}
                      {activity.instructor && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="82tfm35"
                        >
                          Course by {activity.instructor}
                        </p>
                      )}
                      {activity.price && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="j6g2gu_"
                        >
                          {activity.price} Premium Course
                        </p>
                      )}
                      {activity.xp && (
                        <p
                          className="text-sm text-green-600 mt-1"
                          data-oid="qr89lut"
                        >
                          +{activity.xp} XP earned
                        </p>
                      )}
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid=":uhhp:z"
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
            data-oid="tmbdck8"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid=":ae01b."
            >
              <div data-oid="crwg8ki">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="x7fdmqd"
                >
                  Recommended Courses
                </h2>
                <p className="text-sm text-gray-500" data-oid="5.x0vto">
                  Based on your interests and learning history
                </p>
              </div>
              <Link
                href="/courses"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="7kozsk9"
              >
                View All <ChevronRight size={16} data-oid="n-8-jpj" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="0z2sf4x">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid=":0xahnl"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="6jr:job"
                  >
                    <Image
                      src={course.image || "/profile-placeholder.png"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="r7a_:ao"
                    />
                  </div>
                  <div className="flex-grow" data-oid="z_6lzr4">
                    <h3
                      className="font-medium text-gray-800 text-sm"
                      data-oid="watgoh0"
                    >
                      {course.title}
                    </h3>
                    <div
                      className="flex items-center justify-between mt-1"
                      data-oid="h:89.pj"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid=".hjyd:u"
                      >
                        {course.level}
                      </span>
                      <span
                        className="text-xs text-gray-500"
                        data-oid="x96rbx-"
                      >
                        {course.totalHours} hours
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-2 text-blue-600 text-xs font-medium hover:underline inline-block"
                      data-oid="ohy9imn"
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
