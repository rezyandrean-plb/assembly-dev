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
    <NetworkProvider data-oid=".ncmy_-">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="k:qx63h"
      >
        <NetworkBackground
          scrollY={scrollY}
          scrollSpeed={scrollSpeed}
          windowHeight={windowHeight}
          opacity={0.3}
          data-oid="cays0mc"
        />

        <Navbar data-oid="bcyhr67" />
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative z-10" data-oid="4-.0n5t">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="eotdzvs"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
              data-oid="rnpif90"
            >
              <a
                href="/courses"
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="u-pgxw7"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="gwjoz7." />
                Back to Courses
              </a>
            </motion.div>

            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
              data-oid="jh75ic9"
            >
              {/* Main Content - 8 columns on large screens */}
              <motion.div
                ref={mainContentRef}
                className="lg:col-span-8 bg-white/95 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                data-oid="xmcekoj"
              >
                <h1
                  className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm"
                  data-oid="1qn431d"
                >
                  {courseData.title}
                </h1>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  data-oid="tlv8ga3"
                >
                  <div className="flex items-center" data-oid="vsvljtj">
                    <Star
                      className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                      data-oid="nf0.31b"
                    />

                    <span className="ml-1 font-semibold" data-oid="hj.flay">
                      {courseData.rating}
                    </span>
                    <span className="ml-1 text-gray-500" data-oid="5ujiphc">
                      ({courseData.students} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="wnxr1vy"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid="ewhubao" />
                    <span data-oid="cj7_tfi">{courseData.duration}</span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="mf.z0t1"
                  >
                    <Calendar className="h-4 w-4 mr-1" data-oid="gp_jcr2" />
                    <span data-oid="jgloge-">
                      Last updated: {courseData.lastUpdated}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="tw2623x"
                  >
                    <Award className="h-4 w-4 mr-1" data-oid="aw7:8tg" />
                    <span data-oid="3vqw6.f">{courseData.level}</span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="yw5_yxl"
                >
                  <div className="aspect-video relative" data-oid="ez-:7x6">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="b8yz2:5"
                    />
                  </div>
                </div>

                <div className="text-lg text-gray-700 mb-8" data-oid="g:2igyw">
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </div>

                {/* Instructors Section - Updated to display side by side */}
                <div className="mb-8" data-oid="ykytkh.">
                  <h2
                    className="font-semibold text-xl text-[#123B79] mb-4"
                    data-oid="-_blc.r"
                  >
                    Course Instructors
                  </h2>
                  <div
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    data-oid="y:-2-w4"
                  >
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-6"
                      data-oid="oe4j6r7"
                    >
                      {Array.isArray(courseData.instructors) &&
                      courseData.instructors.length > 0 ? (
                        courseData.instructors.map((instructor, index) => (
                          <InstructorCard
                            key={index}
                            name={instructor.name}
                            image={instructor.image}
                            data-oid="9mvtu1l"
                          />
                        ))
                      ) : (
                        <div
                          className="text-gray-500 col-span-4"
                          data-oid="pif9fpd"
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
                    data-oid="ky5mklp"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="nyyo0r6"
                    >
                      Course Highlights
                    </h2>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="--8-yu5"
                    >
                      {courseData.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="8hnktss"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="z5n7opb"
                          />

                          <p className="text-gray-700" data-oid="l-1koid">
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
                  data-oid="kgio_6s"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="s-bsak8"
                  >
                    What You'll Learn
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="iy570d7"
                  >
                    {Array.isArray(courseData.whatYouWillLearn) &&
                    courseData.whatYouWillLearn.length > 0 ? (
                      courseData.whatYouWillLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="xv0-1qe"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="ba78mjt"
                          />

                          <p className="text-gray-700" data-oid="v6n4p.v">
                            {item}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="d87_g2d">
                        Learning outcomes will be updated soon.
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="9_c2qmg"
                >
                  <div
                    className="flex justify-between items-center mb-4"
                    data-oid=":pydtcp"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79]"
                      data-oid="c-frxzh"
                    >
                      Course Content
                    </h2>
                    <div className="text-sm text-gray-600" data-oid="c5cdg-h">
                      {Array.isArray(courseData.curriculum) &&
                      courseData.curriculum.length > 0
                        ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                        : Array.isArray(courseData.sections) &&
                            courseData.sections.length > 0
                          ? `${courseData.sections.length} sections • ${courseData.duration}`
                          : courseData.duration}
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="90kgd8a">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0 ? (
                      courseData.curriculum.map((module, moduleIndex) => (
                        <div
                          key={moduleIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                          data-oid="nis3hfw"
                        >
                          <button
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => toggleModule(moduleIndex)}
                            data-oid="pn9_k5k"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="z9f3vdk"
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <div
                              className="flex items-center"
                              data-oid="y_q71dp"
                            >
                              {expandedModules.includes(moduleIndex) ? (
                                <ChevronUp
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="286pt1a"
                                />
                              ) : (
                                <ChevronDown
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="ynbz:_."
                                />
                              )}
                            </div>
                          </button>

                          {expandedModules.includes(moduleIndex) && (
                            <div
                              className="divide-y divide-gray-200"
                              data-oid="y5bcku."
                            >
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="px-6 py-4 flex items-center"
                                  data-oid=".spjj5b"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="67lblkn"
                                  >
                                    <BookOpen
                                      className="h-4 w-4 text-[#123B79] mr-3"
                                      data-oid="wrbk2pu"
                                    />

                                    <span
                                      className="text-gray-700"
                                      data-oid="xjo8aex"
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
                          data-oid="ha1dwtq"
                        >
                          <div
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center"
                            data-oid="55.enr3"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="izpx92t"
                            >
                              Section {sectionIndex + 1}: {section.title}
                            </h3>
                          </div>
                          <div className="px-6 py-4" data-oid="vf3n.s0">
                            <span className="text-gray-700" data-oid="0skagll">
                              {section.content}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="61.1uaj">
                        No course content available.
                      </div>
                    )}
                  </div>
                </div>

                {/* Who This Course Is For */}
                {courseData.targetAudience && (
                  <div
                    className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                    data-oid="7qz3s.t"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="m.26xq."
                    >
                      Who This Course Is For
                    </h2>
                    <ul
                      className="list-disc pl-5 space-y-2 text-gray-700"
                      data-oid="qduundz"
                    >
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index} data-oid="w4-z8r-">
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Testimonials - Now part of the main content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="2msdzpi"
                >
                  <h2
                    ref={reviewsSectionRef}
                    className="text-2xl font-bold text-[#123B79] mb-8"
                    data-oid="qxv709:"
                  >
                    What Our Students Say
                  </h2>

                  {hasReviews ? (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      data-oid=":16tg7l"
                    >
                      {courseData.reviews!.map((review, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl p-6 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          data-oid="30yo_99"
                        >
                          <div
                            className="flex justify-between items-start mb-4"
                            data-oid="j9-k:90"
                          >
                            <div data-oid="bpgzgt-">
                              <h4 className="font-bold" data-oid="f0xanif">
                                {review.name}
                              </h4>
                              <div
                                className="flex items-center mt-1"
                                data-oid="3dnta84"
                              >
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-[#F0A500] fill-[#F0A500]"
                                        : "text-gray-300"
                                    }`}
                                    data-oid="_v2l0sp"
                                  />
                                ))}
                                <span
                                  className="ml-2 text-sm text-gray-500"
                                  data-oid="a3alh1d"
                                >
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700" data-oid="w0k28hm">
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
                      data-oid="812l7:n"
                    >
                      <div className="mb-6 text-gray-300" data-oid="n8vjz:_">
                        <div
                          className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                          data-oid="iwgft_-"
                        >
                          <MessageCircle
                            className="h-12 w-12"
                            data-oid="akeb9w-"
                          />
                        </div>
                      </div>
                      <h3
                        className="text-xl font-semibold text-gray-700 mb-2"
                        data-oid="te2.-rs"
                      >
                        No Reviews Yet
                      </h3>
                      <p
                        className="text-gray-500 text-center max-w-md mb-6"
                        data-oid="5u.reyj"
                      >
                        Be the first to share your experience with this course
                        and help others make informed decisions.
                      </p>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="text-[#123B79] border-[#123B79]"
                        data-oid="5hr2ff_"
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
                data-oid="lx.dq_y"
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
                  data-oid="w019xrx"
                >
                  {/* Course Preview Image - Desktop Only */}
                  <div
                    className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg"
                    data-oid="edyvcsj"
                  >
                    <div className="aspect-video relative" data-oid="_vbb2ff">
                      <Image
                        src={courseData.image || "/placeholder.svg"}
                        alt={courseData.title}
                        fill
                        className="object-cover"
                        data-oid="i:-s1vp"
                      />
                    </div>
                  </div>

                  {/* Enrollment Card */}
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                    data-oid="-h622oa"
                  >
                    <div className="p-6" data-oid="hvmlt3w">
                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="rw8mze-"
                      >
                        <div
                          className="text-3xl font-bold text-[#123B79]"
                          data-oid="q9.iysk"
                        >
                          {courseData.price}
                        </div>
                        <div className="flex space-x-2" data-oid="g4bbk6n">
                          <button
                            onClick={handleBookmark}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label={
                              isBookmarked
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                            }
                            data-oid="fkcbqx7"
                          >
                            {isBookmarked ? (
                              <BookOpen
                                className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                                data-oid="3u7fxew"
                              />
                            ) : (
                              <BookOpen
                                className="h-5 w-5 text-gray-700"
                                data-oid=":v_sgai"
                              />
                            )}
                          </button>
                          <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsShareModalOpen(true)}
                            aria-label="Share course"
                            data-oid="fa1fwr9"
                          >
                            <Share2
                              className="h-5 w-5 text-gray-700"
                              data-oid="xqk:sb-"
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
                        data-oid="sy5p6pn"
                      >
                        <ShoppingCart
                          className="mr-2 h-4 w-4"
                          data-oid="7fwp9ba"
                        />
                        Enroll Now
                      </Button>

                      <div className="space-y-4 mt-6" data-oid="et1h8.e">
                        <div className="flex items-center" data-oid="4l1balk">
                          <Clock
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="h_d3e9e"
                          />

                          <div data-oid="0iphong">
                            <p className="font-semibold" data-oid="2y3nzwx">
                              Course Duration
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="3u2k_6f"
                            >
                              {courseData.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid=".b-::34">
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="c2dagb6"
                          />

                          <div data-oid="7ta_wab">
                            <p className="font-semibold" data-oid="tzm6s9t">
                              Total Enrolled
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="fl23w:_"
                            >
                              {courseData.students}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid=":3t0.l.">
                          <BarChart
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="c0ubhq_"
                          />

                          <div data-oid=":xyanr1">
                            <p className="font-semibold" data-oid="-0.d:2r">
                              Course Level
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="vrzzco-"
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
          data-oid="7vdev7p"
        >
          <div className="container mx-auto px-4" data-oid="awrxwch">
            <h2
              className="text-2xl font-bold text-[#123B79] mb-8"
              data-oid="asd_-o3"
            >
              Related Courses You Might Like
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="rzviys-"
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
                  data-oid="f57o68q"
                >
                  <div className="relative h-48" data-oid="ot3qf5v">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                      data-oid="zsq_gkt"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="r2-:ki6"
                    ></div>
                    <div
                      className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                      data-oid="bhyx2j1"
                    >
                      {relatedCourse.level}
                    </div>
                  </div>
                  <div className="p-6" data-oid="y-x8.9k">
                    <h3
                      className="text-lg font-bold text-[#123B79] mb-2"
                      data-oid="thh:cvv"
                    >
                      {relatedCourse.title}
                    </h3>
                    <div
                      className="text-gray-500 text-sm mb-4"
                      data-oid="-8bihrl"
                    >
                      <span className="inline-block mr-4" data-oid="djv0f5n">
                        ⏱️ {relatedCourse.duration}
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="vn1zcrq"
                    >
                      <span
                        className="font-bold text-[#123B79]"
                        data-oid="f4fm994"
                      >
                        {relatedCourse.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(`/courses/${relatedCourse.slug}`)
                        }
                        data-oid="x5yfp-l"
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
          data-oid="qhoj1a2"
        >
          <div
            className="container mx-auto px-4 text-center"
            data-oid="wxww5tl"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="fm0b7wi">
              Ready to advance your property investment knowledge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="xsjru7:">
              Join {courseData.students}+ students who are already transforming
              their investment strategies with this course.
            </p>
            <Button
              className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6"
              data-oid="z4k9zaf"
            >
              Enroll Now for {courseData.price}
            </Button>
          </div>
        </section>

        {/* Share Modal */}
        {isShareModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            data-oid="utali:_"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="mkh-_y3"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="av164g0"
              >
                <h3 className="font-bold text-lg" data-oid="xb8uip6">
                  Share Course
                </h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="hvel7ba"
                >
                  <X className="h-5 w-5" data-oid="umcf2-3" />
                </button>
              </div>
              <div className="p-6" data-oid="xmaei20">
                <div className="mb-6" data-oid="ylihvpj">
                  <p className="font-medium mb-2" data-oid="8a7wlv.">
                    Page Link
                  </p>
                  <div className="flex" data-oid="b4au1ti">
                    <input
                      type="text"
                      value={`https://assembly.sg/courses/${courseData.slug}`}
                      readOnly
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                      data-oid="m35rw:p"
                    />

                    <button
                      onClick={copyToClipboard}
                      className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                      data-oid=":4av-bc"
                    >
                      {copied ? (
                        <Check className="h-5 w-5" data-oid="4foss3o" />
                      ) : (
                        <Copy className="h-5 w-5" data-oid="4mbrd_5" />
                      )}
                    </button>
                  </div>
                </div>

                <div data-oid="0w.i9nd">
                  <p className="font-medium mb-3" data-oid="4um61l2">
                    Share on social media
                  </p>
                  <div className="flex space-x-4" data-oid="3d__93r">
                    <button
                      onClick={() => shareOnSocialMedia("facebook")}
                      className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="52bemxi"
                    >
                      <Facebook className="h-6 w-6" data-oid="4giy_m1" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("twitter")}
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="fj-b.6."
                    >
                      <X className="h-5 w-5" data-oid="eln88cl" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("linkedin")}
                      className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="plsot8q"
                    >
                      <Linkedin className="h-5 w-5" data-oid="0w8jp0c" />
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
            data-oid="8bkk.ga"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="80f4a_p"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="uax321:"
              >
                <h3 className="font-bold text-lg" data-oid="r0.y-vn">
                  Login Required
                </h3>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="1y1tbtz"
                >
                  <X className="h-5 w-5" data-oid="mvfa_jz" />
                </button>
              </div>
              <div className="p-6" data-oid="03d9.f6">
                <p className="mb-6" data-oid=".p9qq29">
                  Please log in to add this course to your wishlist.
                </p>
                <div className="space-y-4" data-oid="vgufr1n">
                  <div data-oid="_85ta_q">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="f-nxyuv"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="your@email.com"
                      data-oid="5b9faul"
                    />
                  </div>
                  <div data-oid="w521rr3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="r2x:_.b"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="••••••••"
                      data-oid="05_6c5m"
                    />
                  </div>
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="2vcvzvs"
                  >
                    Log In
                  </Button>
                  <div
                    className="text-center text-sm text-gray-500"
                    data-oid="dsj327y"
                  >
                    <a
                      href="/forgot-password"
                      className="text-[#123B79] hover:underline"
                      data-oid="w2m6zl0"
                    >
                      Forgot password?
                    </a>
                    <span className="mx-2" data-oid="b5o3kvg">
                      •
                    </span>
                    <a
                      href="/signup"
                      className="text-[#123B79] hover:underline"
                      data-oid="jfa_vlr"
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
