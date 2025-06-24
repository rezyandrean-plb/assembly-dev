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
import { useAuth } from "@/context/auth-context";

export default function ProfilePage() {
  const { user } = useAuth();
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
    <div className="p-6" data-oid=".g.j9id">
      <div className="mb-6" data-oid=":26j4z1">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="23_i1a6">
          {greeting}, {user?.name || user?.email.split("@")[0]}
        </h1>
        <p className="text-gray-500 mt-1" data-oid="2:uxm.9">
          {dateString}
        </p>
      </div>

      {/* Stats Overview */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        data-oid="31juq:0"
      >
        {/* Enrolled Courses */}
        <Link
          href="/profile/learning-progress"
          className="block"
          data-oid="gr-c5fh"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("enrolled")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="_gmd2.2"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="bij4hsc"
            ></div>
            <div className="p-5" data-oid="0:czb1n">
              <div
                className="flex justify-between items-start"
                data-oid=":hqch5f"
              >
                <h3 className="text-gray-700 font-medium" data-oid="3zgkkl8">
                  Enrolled Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "enrolled" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="db51rq:"
                >
                  <BookOpen
                    className={`h-4 w-4 ${hoveredCard === "enrolled" ? "text-white" : "text-blue-700"}`}
                    data-oid="zyp6cha"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="6io._8w"
              >
                12
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="yvw19ic"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="qgvhm2l"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="qggct0s"
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
          data-oid="i..ncgd"
        >
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("completed")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="r2ed9.e"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="b0nd5qn"
            ></div>
            <div className="p-5" data-oid="1q1-30z">
              <div
                className="flex justify-between items-start"
                data-oid="4yz6xtd"
              >
                <h3 className="text-gray-700 font-medium" data-oid="4oexspc">
                  Completed Courses
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "completed" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="k14y8pe"
                >
                  <Award
                    className={`h-4 w-4 ${hoveredCard === "completed" ? "text-white" : "text-blue-700"}`}
                    data-oid=":n5s6.0"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="-n9viix"
              >
                8
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="x80a6w1"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="u_owyse"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="h_aecb9"
                  />
                </svg>
                +2 this month
              </p>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <Link href="/profile/wishlist" className="block" data-oid=".7m7_mz">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("wishlist")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="oy:pb:1"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="cw.8lr_"
            ></div>
            <div className="p-5" data-oid="0w2no.t">
              <div
                className="flex justify-between items-start"
                data-oid="i41sb__"
              >
                <h3 className="text-gray-700 font-medium" data-oid="_syh_0u">
                  Wishlist
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "wishlist" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="qid0jqx"
                >
                  <Heart
                    className={`h-4 w-4 ${hoveredCard === "wishlist" ? "text-white" : "text-blue-700"}`}
                    data-oid=".-9.ut:"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="t:3mj6h"
              >
                7
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="-5:9ugr"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="053r-6k"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="-e7bvf-"
                  />
                </svg>
                3 new courses
              </p>
            </div>
          </div>
        </Link>

        {/* Upcoming Events */}
        <Link href="/profile/events" className="block" data-oid="7h7a5ek">
          <div
            className="bg-white rounded-lg shadow-sm relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard("events")}
            onMouseLeave={() => setHoveredCard(null)}
            data-oid="2bx3psp"
          >
            <div
              className="h-2 bg-blue-700 w-full absolute top-0"
              data-oid="q74m2n."
            ></div>
            <div className="p-5" data-oid="-31r5p1">
              <div
                className="flex justify-between items-start"
                data-oid="abely6j"
              >
                <h3 className="text-gray-700 font-medium" data-oid="owna8_0">
                  Upcoming Events
                </h3>
                <div
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    hoveredCard === "events" ? "bg-blue-700" : "bg-blue-100"
                  }`}
                  data-oid="bmsqc05"
                >
                  <Calendar
                    className={`h-4 w-4 ${hoveredCard === "events" ? "text-white" : "text-blue-700"}`}
                    data-oid="y3ygcxp"
                  />
                </div>
              </div>
              <p
                className="text-3xl font-bold text-blue-900 mt-3"
                data-oid="a25_ols"
              >
                {upcomingEvents.length}
              </p>
              <p
                className="text-sm text-green-500 flex items-center mt-1"
                data-oid="v24a77r"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                  data-oid="iuwtd2x"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-oid="s6706v4"
                  />
                </svg>
                Next: {upcomingEvents[0]?.daysLeft || 0} days left
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="3m3n:r8">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col" data-oid="8_pe8sg">
          {/* Learning Progress */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-oid="566m.v3"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="i5nd6p2"
            >
              <h2
                className="text-lg font-bold text-gray-800"
                data-oid="-yj:evg"
              >
                Learning Progress
              </h2>
              <Link
                href="/profile/learning-progress"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="fa9.de3"
              >
                View All <ChevronRight size={16} data-oid="7qak0dm" />
              </Link>
            </div>

            <div
              className="space-y-4 flex-1 overflow-y-auto"
              data-oid="j9j.ahg"
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="u7pr1x_"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="xmhec-x"
                  >
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid=":-gu2k."
                    />
                  </div>
                  <div className="flex-grow" data-oid="2ozdhy-">
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="oza0crh"
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="rv-03fx"
                    >
                      {course.totalHours} hours total
                    </p>
                    <div
                      className="mt-2 w-full bg-gray-200 rounded-full h-2"
                      data-oid="u.0rs1a"
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
                        data-oid="-94:_au"
                      ></div>
                    </div>
                    <div
                      className="mt-2 flex justify-between items-center"
                      data-oid="i:yw2fz"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="b.a_u0g"
                      >
                        {course.progress === 0
                          ? "Not started yet"
                          : `Last Accessed: ${course.lastAccessed}`}
                      </span>
                      <span
                        className="text-xs text-green-600 font-medium"
                        data-oid="-swe-sk"
                      >
                        {course.progress === 0
                          ? "Ready to start"
                          : `${course.progress}% completed`}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-end" data-oid="iiicmwf">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-blue-600 text-xs font-medium hover:underline"
                        data-oid="4nr4i9:"
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
        <div className="space-y-6" data-oid=".du637-">
          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="akc7ju6"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="xn7carv"
            >
              <div data-oid="6.y324b">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid=".zck8jq"
                >
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-500" data-oid="q.:5_hg">
                  Your recent learning activity
                </p>
              </div>
              <Link
                href="/profile/activity"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="f.01x23"
              >
                View All <ChevronRight size={16} data-oid="4pw:yb9" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="gm8mf0h">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  data-oid="2_u7a36"
                >
                  <div className="flex items-start gap-3" data-oid="uc-hy13">
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        activity.type === "completed"
                          ? "bg-green-100"
                          : activity.type === "wishlist"
                            ? "bg-red-100"
                            : "bg-blue-100"
                      }`}
                      data-oid="sr3mdg5"
                    >
                      {activity.type === "completed" && (
                        <Award
                          className={`h-4 w-4 text-green-600`}
                          data-oid=":72b-:t"
                        />
                      )}
                      {activity.type === "wishlist" && (
                        <Heart
                          className={`h-4 w-4 text-red-600`}
                          data-oid="om6f.go"
                        />
                      )}
                      {activity.type === "purchase" && (
                        <ShoppingBag
                          className={`h-4 w-4 text-blue-600`}
                          data-oid="o__:o3j"
                        />
                      )}
                    </div>
                    <div data-oid="u-q-8a3">
                      <p
                        className="font-medium text-gray-800"
                        data-oid="t1ewihg"
                      >
                        {activity.title}
                      </p>
                      {activity.course && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="78iea4w"
                        >
                          {activity.course}
                        </p>
                      )}
                      {activity.instructor && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="pz.j6_e"
                        >
                          Course by {activity.instructor}
                        </p>
                      )}
                      {activity.price && (
                        <p
                          className="text-sm text-gray-600 mt-1"
                          data-oid="9aqcx6g"
                        >
                          {activity.price} Premium Course
                        </p>
                      )}
                      {activity.xp && (
                        <p
                          className="text-sm text-green-600 mt-1"
                          data-oid=":.px9ag"
                        >
                          +{activity.xp} XP earned
                        </p>
                      )}
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="gryyn3t"
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
            data-oid="pefbu6z"
          >
            <div
              className="flex justify-between items-center mb-4"
              data-oid="acxng:y"
            >
              <div data-oid="xadhf6q">
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="t:rtjct"
                >
                  Recommended Courses
                </h2>
                <p className="text-sm text-gray-500" data-oid="s3kggd9">
                  Based on your interests and learning history
                </p>
              </div>
              <Link
                href="/courses"
                className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                data-oid="p.6l1ph"
              >
                View All <ChevronRight size={16} data-oid="i.ahuvi" />
              </Link>
            </div>

            <div className="space-y-4" data-oid="s_4axbf">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                  data-oid="yat3nn6"
                >
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                    data-oid="ka_0ngc"
                  >
                    <Image
                      src={course.image || "/profile-placeholder.png"}
                      alt={course.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      data-oid="3zu0u8e"
                    />
                  </div>
                  <div className="flex-grow" data-oid="tni4wxs">
                    <h3
                      className="font-medium text-gray-800 text-sm"
                      data-oid="use5mae"
                    >
                      {course.title}
                    </h3>
                    <div
                      className="flex items-center justify-between mt-1"
                      data-oid="m7-zdi2"
                    >
                      <span
                        className="text-xs text-gray-500"
                        data-oid="_o3fpq6"
                      >
                        {course.level}
                      </span>
                      <span
                        className="text-xs text-gray-500"
                        data-oid="wwpndp3"
                      >
                        {course.totalHours} hours
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-2 text-blue-600 text-xs font-medium hover:underline inline-block"
                      data-oid="xu0lorl"
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
