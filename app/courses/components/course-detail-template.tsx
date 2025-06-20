"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { NetworkProvider } from "@/context/network-context";
import NetworkBackground from "@/components/network-background";
import { Button } from "@/components/ui/button";
import {
  InstructorCard,
  type InstructorProps,
} from "@/app/components/instructor-card";
import {
  Clock,
  Users,
  BarChart,
  BookOpen,
  CheckCircle,
  Calendar,
  Award,
  Star,
  ArrowLeft,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Share2,
  X,
  Facebook,
  Linkedin,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/components/cart-context";

// Course data interface
export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CourseData {
  id: number;
  title: string;
  slug: string;
  level: string;
  duration: string;
  category: string;
  price: string;
  image: string;
  featured: boolean;
  tags: string[];
  rating: number;
  students: number;
  instructors: InstructorProps[];
  lastUpdated: string;
  description: string | React.ReactNode;
  whatYouWillLearn: string[];
  curriculum: CourseModule[];
  highlights?: string[];
  requirements?: string[];
  targetAudience?: string[];
  reviews?: Review[];
  sections?: { title: string; content: string }[];
}

interface CourseDetailTemplateProps {
  courseData: CourseData;
}

export default function CourseDetailTemplate({
  courseData,
}: CourseDetailTemplateProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [scrollY, setScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]); // First module expanded by default
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const lastScrollY = { current: 0 };
  const lastScrollTime = { current: Date.now() };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState(24); // Initial top position
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const relatedCoursesRef = useRef<HTMLDivElement>(null);
  const reviewsSectionRef = useRef<HTMLHeadingElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime.current;

      if (timeDelta > 0) {
        // Calculate scroll speed (pixels per millisecond)
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
        const speed = scrollDelta / timeDelta;

        setScrollY(currentScrollY);
        setScrollSpeed(speed * 100); // Scale for better usability

        // Set scrolling state to true and update sidebar position
        setIsScrolling(true);

        // Check if related courses section is in view
        const relatedCoursesPosition =
          relatedCoursesRef.current?.getBoundingClientRect().top;
        const hasReachedRelatedCourses =
          relatedCoursesPosition !== undefined && relatedCoursesPosition <= 100;

        // Check if main content section bottom is in view
        const mainContentPosition =
          mainContentRef.current?.getBoundingClientRect();
        const hasReachedMainContentBottom =
          mainContentPosition !== undefined &&
          mainContentPosition.bottom <= window.innerHeight;

        if (!hasReachedRelatedCourses && !hasReachedMainContentBottom) {
          // Calculate new position (with limits to keep it visible)
          const newPosition = Math.max(
            24,
            Math.min(
              currentScrollY + 24,
              document.body.scrollHeight - windowHeight - 400,
            ),
          );
          setSidebarPosition(newPosition);
        }

        // Clear any existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Set timeout to detect when scrolling stops
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);

        lastScrollY.current = currentScrollY;
        lastScrollTime.current = currentTime;
      }

      rafId = requestAnimationFrame(handleScroll);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial values
    handleResize();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    rafId = requestAnimationFrame(handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [windowHeight]);

  // Toggle module expansion
  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Copy to clipboard function
  const copyToClipboard = () => {
    const url = `https://assembly.sg/courses/${courseData.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share on social media
  const shareOnSocialMedia = (platform: string) => {
    const url = encodeURIComponent(
      `https://assembly.sg/courses/${courseData.slug}`,
    );
    const title = encodeURIComponent(
      courseData?.title || "Check out this course",
    );

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  // Handle bookmark action
  const handleBookmark = () => {
    if (isLoggedIn) {
      setIsBookmarked(!isBookmarked);
      // In a real app, you would save this to the user's account
      console.log(
        `Course ${isBookmarked ? "removed from" : "added to"} wishlist`,
      );
    } else {
      setIsLoginModalOpen(true);
    }
  };

  // Handle login
  const handleLogin = () => {
    router.push("/login");
    setIsLoginModalOpen(false);
  };

  // Calculate total lessons
  let totalLessons = 0;
  if (Array.isArray(courseData.curriculum)) {
    totalLessons = courseData.curriculum.reduce(
      (acc, module) => acc + (module.lessons?.length || 0),
      0,
    );
  } else if (Array.isArray(courseData.sections)) {
    totalLessons = courseData.sections.length;
  }

  // Check if course has reviews
  const hasReviews = courseData.reviews && courseData.reviews.length > 0;

  return (
    <NetworkProvider data-oid="hxc50_f">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="cdscubq"
      >
        <NetworkBackground
          scrollY={scrollY}
          scrollSpeed={scrollSpeed}
          windowHeight={windowHeight}
          opacity={0.3}
          data-oid="sm4rdao"
        />

        <Navbar data-oid="lu0p77h" />
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative z-10" data-oid="ww75_6e">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="2sq9:cr"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
              data-oid="2v6kir8"
            >
              <a
                href="/courses"
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="vw6qvu5"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="mib65:c" />
                Back to Courses
              </a>
            </motion.div>

            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
              data-oid="lewqjov"
            >
              {/* Main Content - 8 columns on large screens */}
              <motion.div
                ref={mainContentRef}
                className="lg:col-span-8 bg-white/95 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                data-oid="bvqtwbu"
              >
                <h1
                  className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm"
                  data-oid="-2iaa6w"
                >
                  {courseData.title}
                </h1>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  data-oid="s2a65-k"
                >
                  <div className="flex items-center" data-oid="so.:yv_">
                    <Star
                      className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                      data-oid="am0d4w0"
                    />

                    <span className="ml-1 font-semibold" data-oid="c20s:p9">
                      {courseData.rating}
                    </span>
                    <span className="ml-1 text-gray-500" data-oid="d0oehvs">
                      ({courseData.students} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="8yswxbr"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid="d4d9-1s" />
                    <span data-oid="vbp.9c3">{courseData.duration}</span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="ki_a2o4"
                  >
                    <Calendar className="h-4 w-4 mr-1" data-oid="ykutxjn" />
                    <span data-oid="us3-65t">
                      Last updated: {courseData.lastUpdated}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="hav8slq"
                  >
                    <Award className="h-4 w-4 mr-1" data-oid="c_sg5:r" />
                    <span data-oid="lehwm_c">{courseData.level}</span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="_woi.vo"
                >
                  <div className="aspect-video relative" data-oid=":-q96-_">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="xpk-2.5"
                    />
                  </div>
                </div>

                <div className="text-lg text-gray-700 mb-8" data-oid="fxgg9to">
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </div>

                {/* Instructors Section - Updated to display side by side */}
                <div className="mb-8" data-oid="nacip5h">
                  <h2
                    className="font-semibold text-xl text-[#123B79] mb-4"
                    data-oid="zo54s.."
                  >
                    Course Instructors
                  </h2>
                  <div
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    data-oid="2nma_xh"
                  >
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-6"
                      data-oid="pudhpwo"
                    >
                      {Array.isArray(courseData.instructors) &&
                      courseData.instructors.length > 0 ? (
                        courseData.instructors.map((instructor, index) => (
                          <InstructorCard
                            key={index}
                            name={instructor.name}
                            image={instructor.image}
                            data-oid="28mkoy."
                          />
                        ))
                      ) : (
                        <div
                          className="text-gray-500 col-span-4"
                          data-oid="fn:4x6n"
                        >
                          Instructor information coming soon.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Course Highlights */}
                {courseData.highlights && (
                  <div
                    className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                    data-oid="42z6-6b"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="n0jfjc:"
                    >
                      Course Highlights
                    </h2>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="gvv7tf7"
                    >
                      {courseData.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="asz757x"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="p4-17lv"
                          />

                          <p className="text-gray-700" data-oid="csocwfi">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What You'll Learn */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="9vuf92t"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="2_qgy1b"
                  >
                    What You'll Learn
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="23oogrn"
                  >
                    {Array.isArray(courseData.whatYouWillLearn) &&
                    courseData.whatYouWillLearn.length > 0 ? (
                      courseData.whatYouWillLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="97icf_u"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="r0l.y.f"
                          />

                          <p className="text-gray-700" data-oid="div0e3v">
                            {item}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="eipoosp">
                        Learning outcomes will be updated soon.
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="f09e3jm"
                >
                  <div
                    className="flex justify-between items-center mb-4"
                    data-oid="vp84.cf"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79]"
                      data-oid="aa7zt_w"
                    >
                      Course Content
                    </h2>
                    <div className="text-sm text-gray-600" data-oid="susp-mg">
                      {Array.isArray(courseData.curriculum) &&
                      courseData.curriculum.length > 0
                        ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                        : Array.isArray(courseData.sections) &&
                            courseData.sections.length > 0
                          ? `${courseData.sections.length} sections • ${courseData.duration}`
                          : courseData.duration}
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="ldo-h23">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0 ? (
                      courseData.curriculum.map((module, moduleIndex) => (
                        <div
                          key={moduleIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                          data-oid="nbi922u"
                        >
                          <button
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => toggleModule(moduleIndex)}
                            data-oid="1jgn6q4"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="3xz9nqm"
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <div
                              className="flex items-center"
                              data-oid="8-45z8v"
                            >
                              {expandedModules.includes(moduleIndex) ? (
                                <ChevronUp
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="kdpf2s0"
                                />
                              ) : (
                                <ChevronDown
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="nv102zi"
                                />
                              )}
                            </div>
                          </button>

                          {expandedModules.includes(moduleIndex) && (
                            <div
                              className="divide-y divide-gray-200"
                              data-oid="x2.fnrk"
                            >
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="px-6 py-4 flex items-center"
                                  data-oid="2j2wxoj"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="-6bzxgx"
                                  >
                                    <BookOpen
                                      className="h-4 w-4 text-[#123B79] mr-3"
                                      data-oid="-3glnt4"
                                    />

                                    <span
                                      className="text-gray-700"
                                      data-oid="q3qlz9v"
                                    >
                                      {lesson}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : Array.isArray(courseData.sections) &&
                      courseData.sections.length > 0 ? (
                      courseData.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                          data-oid="ltg_c.v"
                        >
                          <div
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center"
                            data-oid="p4.kgo:"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="4p6vzw6"
                            >
                              Section {sectionIndex + 1}: {section.title}
                            </h3>
                          </div>
                          <div className="px-6 py-4" data-oid="wtit1.m">
                            <span className="text-gray-700" data-oid="xgh3-dc">
                              {section.content}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid=":1150.j">
                        No course content available.
                      </div>
                    )}
                  </div>
                </div>

                {/* Who This Course Is For */}
                {courseData.targetAudience && (
                  <div
                    className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                    data-oid="p48jqal"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="w6t3d9g"
                    >
                      Who This Course Is For
                    </h2>
                    <ul
                      className="list-disc pl-5 space-y-2 text-gray-700"
                      data-oid=":.ssv6h"
                    >
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index} data-oid="z-xilqj">
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Testimonials - Now part of the main content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="5epkaf6"
                >
                  <h2
                    ref={reviewsSectionRef}
                    className="text-2xl font-bold text-[#123B79] mb-8"
                    data-oid="mx6o_dc"
                  >
                    What Our Students Say
                  </h2>

                  {hasReviews ? (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      data-oid="5f1u8_7"
                    >
                      {courseData.reviews!.map((review, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl p-6 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          data-oid="krfagzf"
                        >
                          <div
                            className="flex justify-between items-start mb-4"
                            data-oid="ccz150y"
                          >
                            <div data-oid="shpw0n.">
                              <h4 className="font-bold" data-oid="tl5mnm4">
                                {review.name}
                              </h4>
                              <div
                                className="flex items-center mt-1"
                                data-oid="xpz.f:c"
                              >
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-[#F0A500] fill-[#F0A500]"
                                        : "text-gray-300"
                                    }`}
                                    data-oid="n1um2c2"
                                  />
                                ))}
                                <span
                                  className="ml-2 text-sm text-gray-500"
                                  data-oid="chsovww"
                                >
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700" data-oid="p-82ksz">
                            {review.comment}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      className="flex flex-col items-center justify-center bg-gray-50 rounded-xl py-16 px-4 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      data-oid=".4bk-yq"
                    >
                      <div className="mb-6 text-gray-300" data-oid="ya5hf4u">
                        <div
                          className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                          data-oid="wp6u2qn"
                        >
                          <MessageCircle
                            className="h-12 w-12"
                            data-oid="0stn4p5"
                          />
                        </div>
                      </div>
                      <h3
                        className="text-xl font-semibold text-gray-700 mb-2"
                        data-oid="nw_up9j"
                      >
                        No Reviews Yet
                      </h3>
                      <p
                        className="text-gray-500 text-center max-w-md mb-6"
                        data-oid="kg9n5o:"
                      >
                        Be the first to share your experience with this course
                        and help others make informed decisions.
                      </p>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="text-[#123B79] border-[#123B79]"
                        data-oid="-9n7xkz"
                      >
                        Write a Review
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Sidebar - 4 columns on large screens */}
              <motion.div
                className="lg:col-span-4 z-10 relative" // Added relative positioning
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                data-oid="5h_p_ci"
              >
                <div
                  className={`transition-all duration-200 ${isScrolling ? "ease-out" : "ease-in"}`}
                  style={{
                    position: "absolute",
                    top: `${sidebarPosition}px`,
                    width: "100%", // Changed from calc(100% - 2rem) to 100%
                    maxWidth: "100%", // Added max-width constraint
                    right: 0,
                    left: 0,
                  }}
                  data-oid=".rov3ui"
                >
                  {/* Course Preview Image - Desktop Only */}
                  <div
                    className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg"
                    data-oid="d.xxasx"
                  >
                    <div className="aspect-video relative" data-oid="rgs-wmn">
                      <Image
                        src={courseData.image || "/placeholder.svg"}
                        alt={courseData.title}
                        fill
                        className="object-cover"
                        data-oid="4q9-dd6"
                      />
                    </div>
                  </div>

                  {/* Enrollment Card */}
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                    data-oid="ut1o.om"
                  >
                    <div className="p-6" data-oid="2z2vbeg">
                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="g.x.-8-"
                      >
                        <div
                          className="text-3xl font-bold text-[#123B79]"
                          data-oid="0:n2x42"
                        >
                          {courseData.price}
                        </div>
                        <div className="flex space-x-2" data-oid="ekyew4h">
                          <button
                            onClick={handleBookmark}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label={
                              isBookmarked
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                            }
                            data-oid="htr7878"
                          >
                            {isBookmarked ? (
                              <BookOpen
                                className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                                data-oid="g-1xlwh"
                              />
                            ) : (
                              <BookOpen
                                className="h-5 w-5 text-gray-700"
                                data-oid="sk5woe1"
                              />
                            )}
                          </button>
                          <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsShareModalOpen(true)}
                            aria-label="Share course"
                            data-oid="0ahrv9f"
                          >
                            <Share2
                              className="h-5 w-5 text-gray-700"
                              data-oid=":.z64yh"
                            />
                          </button>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-[#123B79] hover:bg-[#0A2A5E] mb-3"
                        onClick={() => {
                          if (
                            courseData.price &&
                            courseData.price.toLowerCase() !== "free"
                          ) {
                            addToCart({
                              id: courseData.id,
                              title: courseData.title,
                              slug: courseData.slug,
                              price: courseData.price,
                              image: courseData.image,
                              instructor:
                                courseData.instructors?.[0]?.name || "",
                            });
                            router.push("/cart"); // Optionally navigate to cart
                          } else {
                            // Free course: enroll or redirect logic (if any)
                            // For now, just show a message or redirect
                          }
                        }}
                        data-oid="9wh-6x3"
                      >
                        <ShoppingCart
                          className="mr-2 h-4 w-4"
                          data-oid="on:bid9"
                        />
                        Enroll Now
                      </Button>

                      <div className="space-y-4 mt-6" data-oid="9gw2m9p">
                        <div className="flex items-center" data-oid="iy.bg2_">
                          <Clock
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="1g:oplo"
                          />

                          <div data-oid=":t5p-b9">
                            <p className="font-semibold" data-oid="fn6yauj">
                              Course Duration
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="w70inux"
                            >
                              {courseData.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="pbmk6r.">
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="a:pnwfq"
                          />

                          <div data-oid="v2-xf1j">
                            <p className="font-semibold" data-oid="-ql1103">
                              Total Enrolled
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="vu2665w"
                            >
                              {courseData.students}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="aoa6cn-">
                          <BarChart
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="669f.sg"
                          />

                          <div data-oid="zrsuflj">
                            <p className="font-semibold" data-oid="r10spoo">
                              Course Level
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid=".35rv5j"
                            >
                              {courseData.level}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the component remains the same */}
        {/* Related Courses */}
        <section
          ref={relatedCoursesRef}
          className="py-16 bg-gray-50 relative z-10 border-y border-gray-100"
          data-oid="8.9f4sj"
        >
          <div className="container mx-auto px-4" data-oid="ln0r7nq">
            <h2
              className="text-2xl font-bold text-[#123B79] mb-8"
              data-oid="7yt6z2p"
            >
              Related Courses You Might Like
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="lmix0ss"
            >
              {[
                {
                  title: "Financial Modeling Masterclass",
                  level: "Advanced",
                  duration: "40 hours 45 minutes",
                  price: "$1,499",
                  image: "/financial-model-dashboard.png",
                  slug: "financial-modeling-masterclass",
                },
                {
                  title: "Condominium Investment Analysis",
                  level: "Intermediate",
                  duration: "24 hours 20 minutes",
                  price: "$999",
                  image: "/singapore-skyline-condos.png",
                  slug: "condominium-investment-analysis",
                },
                {
                  title: "Property Market Trend Analysis",
                  level: "Advanced",
                  duration: "32 hours 10 minutes",
                  price: "$1,199",
                  image: "/singapore-skyline-day.png",
                  slug: "property-market-trend-analysis",
                },
              ].map((relatedCourse, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  data-oid="ndfm2v1"
                >
                  <div className="relative h-48" data-oid="fedrg5_">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                      data-oid="343-zga"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="ss6972j"
                    ></div>
                    <div
                      className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                      data-oid="tgftc8g"
                    >
                      {relatedCourse.level}
                    </div>
                  </div>
                  <div className="p-6" data-oid=".x4iqen">
                    <h3
                      className="text-lg font-bold text-[#123B79] mb-2"
                      data-oid="r.7uzxt"
                    >
                      {relatedCourse.title}
                    </h3>
                    <div
                      className="text-gray-500 text-sm mb-4"
                      data-oid="hj97y4y"
                    >
                      <span className="inline-block mr-4" data-oid="u6ki51u">
                        ⏱️ {relatedCourse.duration}
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="brahplv"
                    >
                      <span
                        className="font-bold text-[#123B79]"
                        data-oid="fxtzy0g"
                      >
                        {relatedCourse.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(`/courses/${relatedCourse.slug}`)
                        }
                        data-oid="k3e4hfr"
                      >
                        View Course
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section
          className="py-16 bg-[#123B79] text-white relative z-10 border-y border-gray-100"
          data-oid="wbmr86g"
        >
          <div
            className="container mx-auto px-4 text-center"
            data-oid="6ve5zsz"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="_ix54de">
              Ready to advance your property investment knowledge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="xnx-eza">
              Join {courseData.students}+ students who are already transforming
              their investment strategies with this course.
            </p>
            <Button
              className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6"
              data-oid="urkffu."
            >
              Enroll Now for {courseData.price}
            </Button>
          </div>
        </section>

        {/* Share Modal */}
        {isShareModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            data-oid="3wznpo5"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="p7nvhvz"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="wf6y002"
              >
                <h3 className="font-bold text-lg" data-oid="xozisp2">
                  Share Course
                </h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="x60vtqi"
                >
                  <X className="h-5 w-5" data-oid=".54z3v2" />
                </button>
              </div>
              <div className="p-6" data-oid="eg9a2tm">
                <div className="mb-6" data-oid="t2nw73.">
                  <p className="font-medium mb-2" data-oid="ivdrssr">
                    Page Link
                  </p>
                  <div className="flex" data-oid="uwxdkoq">
                    <input
                      type="text"
                      value={`https://assembly.sg/courses/${courseData.slug}`}
                      readOnly
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                      data-oid="jshdf9-"
                    />

                    <button
                      onClick={copyToClipboard}
                      className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                      data-oid="-t__hvp"
                    >
                      {copied ? (
                        <Check className="h-5 w-5" data-oid="xl0f.jm" />
                      ) : (
                        <Copy className="h-5 w-5" data-oid="1kn04z8" />
                      )}
                    </button>
                  </div>
                </div>

                <div data-oid="05k6569">
                  <p className="font-medium mb-3" data-oid="rqj8fvf">
                    Share on social media
                  </p>
                  <div className="flex space-x-4" data-oid=":lgxb3g">
                    <button
                      onClick={() => shareOnSocialMedia("facebook")}
                      className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="._zlcdx"
                    >
                      <Facebook className="h-6 w-6" data-oid="onu6ofk" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("twitter")}
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="3g:qknc"
                    >
                      <X className="h-5 w-5" data-oid="jt4od-8" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("linkedin")}
                      className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="8w_i:mg"
                    >
                      <Linkedin className="h-5 w-5" data-oid="yf6e-a9" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {isLoginModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            data-oid="kk4k3kl"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="3_zod.9"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid=":r2r143"
              >
                <h3 className="font-bold text-lg" data-oid="ue9708a">
                  Login Required
                </h3>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="fur-mtw"
                >
                  <X className="h-5 w-5" data-oid="c9:0:nf" />
                </button>
              </div>
              <div className="p-6" data-oid="98lr6p1">
                <p className="mb-6" data-oid="ftj5k9t">
                  Please log in to add this course to your wishlist.
                </p>
                <div className="space-y-4" data-oid="ydzz-j5">
                  <div data-oid="qy2l.c8">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="mj0:ugg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="your@email.com"
                      data-oid="gzn4zcz"
                    />
                  </div>
                  <div data-oid="jr3t_nn">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="vmgw6f2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="••••••••"
                      data-oid="rhh3_is"
                    />
                  </div>
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid=":r3we3x"
                  >
                    Log In
                  </Button>
                  <div
                    className="text-center text-sm text-gray-500"
                    data-oid="21w15m."
                  >
                    <a
                      href="/forgot-password"
                      className="text-[#123B79] hover:underline"
                      data-oid="17exa_c"
                    >
                      Forgot password?
                    </a>
                    <span className="mx-2" data-oid="bnth:kk">
                      •
                    </span>
                    <a
                      href="/signup"
                      className="text-[#123B79] hover:underline"
                      data-oid="2a2a810"
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </NetworkProvider>
  );
}
