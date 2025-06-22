"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  Calendar,
  Star,
  ChevronRight,
  User,
  Clock,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { getStudent } from "@/app/data/students";
import { courses } from "@/app/data/courses";
import NetworkBackground from "@/components/network-background";

export default function PublicStudentProfile() {
  const params = useParams();
  const searchParams = useSearchParams();
  const username = params.username as string;
  const view = searchParams.get("view");
  const [scrollY, setScrollY] = useState(0);

  // Only show if view=student parameter is present
  if (view !== "student") {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="fotzb_4"
      >
        <div className="text-center" data-oid="0ieiwsy">
          <h1
            className="text-2xl font-bold text-gray-800 mb-4"
            data-oid="02k93h9"
          >
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6" data-oid="zmmhozz">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            data-oid="b-lriqw"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const student = getStudent(username);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!student) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="eth-1xc"
      >
        <div className="text-center" data-oid="346.cce">
          <h1
            className="text-2xl font-bold text-gray-800 mb-4"
            data-oid="uzjiwhc"
          >
            Student Not Found
          </h1>
          <p className="text-gray-600 mb-6" data-oid="zzbf.sb">
            The student profile you're looking for doesn't exist or is private.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            data-oid="dj5iz76"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  // Get course details for enrolled and completed courses
  const enrolledCourseDetails = student.enrolledCourses
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter(Boolean);

  const completedCourseDetails = student.completedCourses
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 relative" data-oid="cjgx9er">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="p:5n23x"
      />

      {/* Header */}
      <div className="bg-white shadow-sm border-b" data-oid="75e1wgj">
        <div className="max-w-6xl mx-auto px-6 py-4" data-oid="0fo7axp">
          <div className="flex items-center gap-4" data-oid="syb7kxa">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
              data-oid="ewx_r77"
            >
              <ExternalLink size={16} data-oid="egymv_w" />
              Back to Assembly.sg
            </Link>
            <span className="text-gray-300" data-oid="cbfddit">
              |
            </span>
            <span className="text-gray-600" data-oid="13kf5.6">
              Student Profile
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8" data-oid="a7m_4oc">
        {/* Profile Header */}
        <motion.div
          className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-oid="ym04-qo"
        >
          <div className="flex flex-col md:flex-row gap-6" data-oid="512.176">
            <div className="flex-shrink-0" data-oid=".wiqf1y">
              <div
                className="w-24 h-24 rounded-full overflow-hidden"
                data-oid="0suiolb"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  data-oid="1i7-rqa"
                />
              </div>
            </div>
            <div className="flex-grow" data-oid="re7bpju">
              <div
                className="flex items-start justify-between"
                data-oid="ib_woei"
              >
                <div data-oid="p_y4t4m">
                  <h1
                    className="text-3xl font-bold text-gray-800 mb-2"
                    data-oid="hh0km6u"
                  >
                    {student.name}
                  </h1>
                  <p className="text-gray-600 mb-4" data-oid="1shq2zl">
                    @{student.username}
                  </p>
                  <p className="text-gray-700 mb-4" data-oid="nhjqov8">
                    {student.bio}
                  </p>
                  <div
                    className="flex items-center gap-4 text-sm text-gray-500"
                    data-oid="m281lby"
                  >
                    <div className="flex items-center gap-1" data-oid="k1nlb_7">
                      <Calendar size={16} data-oid="c5d8_xo" />
                      Joined{" "}
                      {new Date(student.joinDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="bg-blue-50 px-4 py-2 rounded-lg"
                  data-oid=".w5q.xp"
                >
                  <span
                    className="text-blue-600 font-medium text-sm"
                    data-oid="s97v7oy"
                  >
                    Public Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          data-oid="nf8j4yr"
        >
          <div
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            data-oid="cwpkl_b"
          >
            <div className="flex items-center gap-3" data-oid="t.52ak-">
              <div className="p-3 bg-blue-100 rounded-full" data-oid="5zyh::q">
                <BookOpen
                  className="h-6 w-6 text-blue-600"
                  data-oid="vplgl_x"
                />
              </div>
              <div data-oid="k..qz__">
                <p
                  className="text-2xl font-bold text-gray-800"
                  data-oid="dduir87"
                >
                  {student.stats.totalCourses}
                </p>
                <p className="text-sm text-gray-600" data-oid="nu4z4.r">
                  Total Courses
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            data-oid="maw3cho"
          >
            <div className="flex items-center gap-3" data-oid=".4s2hzs">
              <div className="p-3 bg-green-100 rounded-full" data-oid="z4n8kt0">
                <Award className="h-6 w-6 text-green-600" data-oid="_5f3:1y" />
              </div>
              <div data-oid="cxc_whu">
                <p
                  className="text-2xl font-bold text-gray-800"
                  data-oid="-8qzi7_"
                >
                  {student.stats.completedCourses}
                </p>
                <p className="text-sm text-gray-600" data-oid="xtsm93l">
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            data-oid=":_4dh1z"
          >
            <div className="flex items-center gap-3" data-oid="2.5:uqq">
              <div
                className="p-3 bg-purple-100 rounded-full"
                data-oid="08a03h:"
              >
                <Clock className="h-6 w-6 text-purple-600" data-oid="6bowg3r" />
              </div>
              <div data-oid="dmr-er3">
                <p
                  className="text-2xl font-bold text-gray-800"
                  data-oid="htk7usx"
                >
                  {student.stats.totalHours}
                </p>
                <p className="text-sm text-gray-600" data-oid="j3t1a-e">
                  Hours Learned
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="_.b.gyt"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8" data-oid="0ahqknv">
            {/* Completed Courses */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="3h894q3"
            >
              <div className="flex items-center gap-3 mb-6" data-oid="zyliek7">
                <CheckCircle
                  className="h-6 w-6 text-green-600"
                  data-oid="08hd754"
                />

                <h2
                  className="text-xl font-bold text-gray-800"
                  data-oid="6-0rf.7"
                >
                  Completed Courses
                </h2>
                <span
                  className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium"
                  data-oid="cdiiowh"
                >
                  {completedCourseDetails.length}
                </span>
              </div>

              {completedCourseDetails.length > 0 ? (
                <div className="space-y-4" data-oid="39frado">
                  {completedCourseDetails.map((course) => (
                    <div
                      key={course?.id}
                      className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                      data-oid="i9qew:c"
                    >
                      <div
                        className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                        data-oid="h:p4xwd"
                      >
                        <Image
                          src={course?.image || "/placeholder.svg"}
                          alt={course?.title || "Course"}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                          data-oid="o9g53yl"
                        />
                      </div>
                      <div className="flex-grow" data-oid="5p8934n">
                        <h3
                          className="font-medium text-gray-800 mb-1"
                          data-oid="bqo8ant"
                        >
                          {course?.title}
                        </h3>
                        <div
                          className="flex items-center gap-4 text-sm text-gray-500"
                          data-oid="-nfl1:4"
                        >
                          <span data-oid="g9u:p37">{course?.level}</span>
                          <span data-oid="hugbtmb">{course?.duration}</span>
                          <span
                            className="text-green-600 font-medium"
                            data-oid="0mkhte7"
                          >
                            ✓ Completed
                          </span>
                        </div>
                        <div className="mt-2" data-oid=".qw54h-">
                          <Link
                            href={`/courses/${course?.slug}`}
                            className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
                            data-oid="hx1p5pw"
                          >
                            View Course{" "}
                            <ChevronRight size={14} data-oid="3f9dog4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className="text-gray-500 text-center py-8"
                  data-oid="z_w-ymu"
                >
                  No completed courses yet.
                </p>
              )}
            </motion.div>

            {/* Currently Enrolled */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid="co_47nb"
            >
              <div className="flex items-center gap-3 mb-6" data-oid="g98rv--">
                <BookOpen
                  className="h-6 w-6 text-blue-600"
                  data-oid="m9zvxo:"
                />

                <h2
                  className="text-xl font-bold text-gray-800"
                  data-oid="63ibo1-"
                >
                  Currently Enrolled
                </h2>
                <span
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium"
                  data-oid="swq::va"
                >
                  {enrolledCourseDetails.length - completedCourseDetails.length}
                </span>
              </div>

              {enrolledCourseDetails.filter(
                (course) =>
                  !student.completedCourses.includes(course?.slug || ""),
              ).length > 0 ? (
                <div className="space-y-4" data-oid="lr.d0cj">
                  {enrolledCourseDetails
                    .filter(
                      (course) =>
                        !student.completedCourses.includes(course?.slug || ""),
                    )
                    .map((course) => (
                      <div
                        key={course?.id}
                        className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                        data-oid="fba9uks"
                      >
                        <div
                          className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
                          data-oid="nbc7zhv"
                        >
                          <Image
                            src={course?.image || "/placeholder.svg"}
                            alt={course?.title || "Course"}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            data-oid="p.bkuwz"
                          />
                        </div>
                        <div className="flex-grow" data-oid="lv1cc1m">
                          <h3
                            className="font-medium text-gray-800 mb-1"
                            data-oid="n.clsl."
                          >
                            {course?.title}
                          </h3>
                          <div
                            className="flex items-center gap-4 text-sm text-gray-500"
                            data-oid="gzhtku:"
                          >
                            <span data-oid="4tfx38i">{course?.level}</span>
                            <span data-oid="zt4vwen">{course?.duration}</span>
                            <span
                              className="text-blue-600 font-medium"
                              data-oid="ui2esx0"
                            >
                              In Progress
                            </span>
                          </div>
                          <div className="mt-2" data-oid="qv0u2in">
                            <Link
                              href={`/courses/${course?.slug}`}
                              className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
                              data-oid="to7lxwr"
                            >
                              View Course{" "}
                              <ChevronRight size={14} data-oid="0szv9a3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p
                  className="text-gray-500 text-center py-8"
                  data-oid=":mflgi7"
                >
                  No courses currently in progress.
                </p>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6" data-oid="fvjmpht">
            {/* Reviews */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              data-oid="mgc67q9"
            >
              <div className="flex items-center gap-3 mb-6" data-oid="zpzo:uu">
                <Star className="h-6 w-6 text-yellow-500" data-oid="5h3:vn." />
                <h2
                  className="text-lg font-bold text-gray-800"
                  data-oid="e46v-04"
                >
                  Reviews
                </h2>
                <span
                  className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm font-medium"
                  data-oid="4wv7l0w"
                >
                  {student.reviews.length}
                </span>
              </div>

              {student.reviews.length > 0 ? (
                <div className="space-y-4" data-oid="ras_yhy">
                  {student.reviews.map((review, index) => {
                    const reviewedCourse = courses.find(
                      (course) => course.slug === review.courseSlug,
                    );
                    return (
                      <div
                        key={index}
                        className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                        data-oid="9.lvnyn"
                      >
                        <div
                          className="flex items-center gap-2 mb-2"
                          data-oid="tv3va.s"
                        >
                          <div className="flex" data-oid="0hxjhp2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                                data-oid="ekek83k"
                              />
                            ))}
                          </div>
                          <span
                            className="text-sm text-gray-500"
                            data-oid="yag_k2q"
                          >
                            {review.date}
                          </span>
                        </div>
                        <p
                          className="text-gray-700 text-sm mb-2"
                          data-oid="czkl719"
                        >
                          {review.comment}
                        </p>
                        <Link
                          href={`/courses/${review.courseSlug}`}
                          className="text-blue-600 text-xs font-medium hover:underline inline-flex items-center gap-1"
                          data-oid="jqgw-13"
                        >
                          {reviewedCourse?.title}{" "}
                          <ChevronRight size={12} data-oid="pm7uv8s" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p
                  className="text-gray-500 text-center py-4"
                  data-oid="lgkui.7"
                >
                  No reviews yet.
                </p>
              )}
            </motion.div>

            {/* Verification Notice */}
            <motion.div
              className="bg-green-50 border border-green-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              data-oid="_748upi"
            >
              <div className="flex items-start gap-3" data-oid="0898n8s">
                <CheckCircle
                  className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5"
                  data-oid="vceetfg"
                />

                <div data-oid="isj9law">
                  <h3
                    className="font-medium text-green-800 mb-2"
                    data-oid="nwtyqa-"
                  >
                    Verified Student
                  </h3>
                  <p className="text-sm text-green-700" data-oid="t0dg.ou">
                    This profile shows a verified student who has actually
                    enrolled in and completed courses. You can see their
                    learning history to verify the authenticity of their
                    reviews.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Course Verification */}
            <motion.div
              className="bg-blue-50 border border-blue-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-oid="l:pw978"
            >
              <div className="flex items-start gap-3" data-oid="vcu-p8l">
                <User
                  className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5"
                  data-oid="95scg1:"
                />

                <div data-oid="4ff1qzt">
                  <h3
                    className="font-medium text-blue-800 mb-2"
                    data-oid="z_-nvw9"
                  >
                    Review Verification
                  </h3>
                  <p className="text-sm text-blue-700" data-oid="uqdvhw0">
                    Check if this student has actually enrolled in the courses
                    they've reviewed. Authentic reviews come from students who
                    have taken the course.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
