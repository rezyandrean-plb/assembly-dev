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
    <NetworkProvider data-oid="foj72c-">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="w7za0un"
      >
        <NetworkBackground
          scrollY={scrollY}
          scrollSpeed={scrollSpeed}
          windowHeight={windowHeight}
          opacity={0.3}
          data-oid="m4epxz:"
        />

        <Navbar data-oid="0e5otj5" />
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative z-10" data-oid="dt-k83p">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="vrq.v45"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
              data-oid="9whbwt9"
            >
              <a
                href="/courses"
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="c.opd:u"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="r0xnef:" />
                Back to Courses
              </a>
            </motion.div>

            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
              data-oid="ubkwe6g"
            >
              {/* Main Content - 8 columns on large screens */}
              <motion.div
                ref={mainContentRef}
                className="lg:col-span-8 bg-white/95 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                data-oid="7k23y7b"
              >
                <h1
                  className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm"
                  data-oid="g2fnyvr"
                >
                  {courseData.title}
                </h1>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  data-oid="p2-g2b:"
                >
                  <div className="flex items-center" data-oid="5yu6z3w">
                    <Star
                      className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                      data-oid="es1myyj"
                    />

                    <span className="ml-1 font-semibold" data-oid="myrcx_1">
                      {courseData.rating}
                    </span>
                    <span className="ml-1 text-gray-500" data-oid="4-y-_2q">
                      ({courseData.students} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="_cm4lgc"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid="3w9vbze" />
                    <span data-oid="4-6pm04">{courseData.duration}</span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="w4mia2i"
                  >
                    <Calendar className="h-4 w-4 mr-1" data-oid="v2apu7j" />
                    <span data-oid="rzn2b6o">
                      Last updated: {courseData.lastUpdated}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="o6flqfq"
                  >
                    <Award className="h-4 w-4 mr-1" data-oid="0uzfjzc" />
                    <span data-oid=".uobdxa">{courseData.level}</span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="s3.sb92"
                >
                  <div className="aspect-video relative" data-oid="szv0sb.">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="k1q6jsk"
                    />
                  </div>
                </div>

                <div className="text-lg text-gray-700 mb-8" data-oid="euvx5az">
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </div>

                {/* Instructors Section - Updated to display side by side */}
                <div className="mb-8" data-oid="mc2d-68">
                  <h2
                    className="font-semibold text-xl text-[#123B79] mb-4"
                    data-oid="-ium67f"
                  >
                    Course Instructors
                  </h2>
                  <div
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    data-oid="8j_em6k"
                  >
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-6"
                      data-oid="p20uos7"
                    >
                      {Array.isArray(courseData.instructors) &&
                      courseData.instructors.length > 0 ? (
                        courseData.instructors.map((instructor, index) => (
                          <InstructorCard
                            key={index}
                            name={instructor.name}
                            image={instructor.image}
                            data-oid="nzkac2e"
                          />
                        ))
                      ) : (
                        <div
                          className="text-gray-500 col-span-4"
                          data-oid="jpf.67r"
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
                    data-oid="0bnje_1"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="7bsxfi."
                    >
                      Course Highlights
                    </h2>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="issj69_"
                    >
                      {courseData.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="4inxvyh"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="esteh.o"
                          />

                          <p className="text-gray-700" data-oid="g4egvlk">
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
                  data-oid="hgkhg:e"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="8ald2s5"
                  >
                    What You'll Learn
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="u_plfmq"
                  >
                    {Array.isArray(courseData.whatYouWillLearn) &&
                    courseData.whatYouWillLearn.length > 0 ? (
                      courseData.whatYouWillLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid=":6h6hqc"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="30z.d3b"
                          />

                          <p className="text-gray-700" data-oid="ycxrik9">
                            {item}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="2mvfpl6">
                        Learning outcomes will be updated soon.
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="_s5l0-5"
                >
                  <div
                    className="flex justify-between items-center mb-4"
                    data-oid="ys9es03"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79]"
                      data-oid="omd3:8-"
                    >
                      Course Content
                    </h2>
                    <div className="text-sm text-gray-600" data-oid="n-70134">
                      {Array.isArray(courseData.curriculum) &&
                      courseData.curriculum.length > 0
                        ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                        : Array.isArray(courseData.sections) &&
                            courseData.sections.length > 0
                          ? `${courseData.sections.length} sections • ${courseData.duration}`
                          : courseData.duration}
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="hugbc.0">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0 ? (
                      courseData.curriculum.map((module, moduleIndex) => (
                        <div
                          key={moduleIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                          data-oid="rmsxg01"
                        >
                          <button
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => toggleModule(moduleIndex)}
                            data-oid="4v-o5b7"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="rk9ajp."
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <div
                              className="flex items-center"
                              data-oid="br5weqo"
                            >
                              {expandedModules.includes(moduleIndex) ? (
                                <ChevronUp
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="vl0kq7_"
                                />
                              ) : (
                                <ChevronDown
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="86qmscr"
                                />
                              )}
                            </div>
                          </button>

                          {expandedModules.includes(moduleIndex) && (
                            <div
                              className="divide-y divide-gray-200"
                              data-oid="gnva.1f"
                            >
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="px-6 py-4 flex items-center"
                                  data-oid="nl_mvbr"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="6qegimu"
                                  >
                                    <BookOpen
                                      className="h-4 w-4 text-[#123B79] mr-3"
                                      data-oid="8768xw3"
                                    />

                                    <span
                                      className="text-gray-700"
                                      data-oid="96775ik"
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
                          data-oid="9nk327c"
                        >
                          <div
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center"
                            data-oid="x7:qu84"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="k4jfdxi"
                            >
                              Section {sectionIndex + 1}: {section.title}
                            </h3>
                          </div>
                          <div className="px-6 py-4" data-oid="ql-gmj2">
                            <span className="text-gray-700" data-oid="5sox21h">
                              {section.content}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="5sz44x8">
                        No course content available.
                      </div>
                    )}
                  </div>
                </div>

                {/* Who This Course Is For */}
                {courseData.targetAudience && (
                  <div
                    className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                    data-oid="scc140b"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="cpgd9pr"
                    >
                      Who This Course Is For
                    </h2>
                    <ul
                      className="list-disc pl-5 space-y-2 text-gray-700"
                      data-oid="2_1wi-i"
                    >
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index} data-oid="jlc-zp.">
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Testimonials - Now part of the main content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="qqs4h1r"
                >
                  <h2
                    ref={reviewsSectionRef}
                    className="text-2xl font-bold text-[#123B79] mb-8"
                    data-oid="v9wzm5h"
                  >
                    What Our Students Say
                  </h2>

                  {hasReviews ? (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      data-oid="zt6p46:"
                    >
                      {courseData.reviews!.map((review, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl p-6 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          data-oid="jsknu_t"
                        >
                          <div
                            className="flex justify-between items-start mb-4"
                            data-oid="rl6urfa"
                          >
                            <div data-oid="8bnzo2m">
                              <h4 className="font-bold" data-oid="kjknoue">
                                {review.name}
                              </h4>
                              <div
                                className="flex items-center mt-1"
                                data-oid="ntmmy8m"
                              >
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-[#F0A500] fill-[#F0A500]"
                                        : "text-gray-300"
                                    }`}
                                    data-oid="3cmyj1a"
                                  />
                                ))}
                                <span
                                  className="ml-2 text-sm text-gray-500"
                                  data-oid="2h4ake6"
                                >
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700" data-oid="fbgcmby">
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
                      data-oid="swk8-2i"
                    >
                      <div className="mb-6 text-gray-300" data-oid="w.z57wo">
                        <div
                          className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                          data-oid="qh9ivsi"
                        >
                          <MessageCircle
                            className="h-12 w-12"
                            data-oid="67k3mur"
                          />
                        </div>
                      </div>
                      <h3
                        className="text-xl font-semibold text-gray-700 mb-2"
                        data-oid="4mt__i-"
                      >
                        No Reviews Yet
                      </h3>
                      <p
                        className="text-gray-500 text-center max-w-md mb-6"
                        data-oid="lbhmw71"
                      >
                        Be the first to share your experience with this course
                        and help others make informed decisions.
                      </p>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="text-[#123B79] border-[#123B79]"
                        data-oid="pyduubg"
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
                data-oid="t9njiif"
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
                  data-oid="bem.1lv"
                >
                  {/* Course Preview Image - Desktop Only */}
                  <div
                    className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg"
                    data-oid="p-jz.al"
                  >
                    <div className="aspect-video relative" data-oid="5xkdw67">
                      <Image
                        src={courseData.image || "/placeholder.svg"}
                        alt={courseData.title}
                        fill
                        className="object-cover"
                        data-oid="s7dljt2"
                      />
                    </div>
                  </div>

                  {/* Enrollment Card */}
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                    data-oid="yz9rx8a"
                  >
                    <div className="p-6" data-oid="442z0wr">
                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="b41n6b7"
                      >
                        <div
                          className="text-3xl font-bold text-[#123B79]"
                          data-oid="cp2p41g"
                        >
                          {courseData.price}
                        </div>
                        <div className="flex space-x-2" data-oid="wvqv.9q">
                          <button
                            onClick={handleBookmark}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label={
                              isBookmarked
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                            }
                            data-oid="d0woy4n"
                          >
                            {isBookmarked ? (
                              <BookOpen
                                className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                                data-oid=".sma807"
                              />
                            ) : (
                              <BookOpen
                                className="h-5 w-5 text-gray-700"
                                data-oid="mdh1:ii"
                              />
                            )}
                          </button>
                          <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsShareModalOpen(true)}
                            aria-label="Share course"
                            data-oid=".vhtkaf"
                          >
                            <Share2
                              className="h-5 w-5 text-gray-700"
                              data-oid=".5:e.aq"
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
                        data-oid="wxukxgd"
                      >
                        <ShoppingCart
                          className="mr-2 h-4 w-4"
                          data-oid=".16-06l"
                        />
                        Enroll Now
                      </Button>

                      <div className="space-y-4 mt-6" data-oid="m542ojj">
                        <div className="flex items-center" data-oid="r08x2vd">
                          <Clock
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid=".me_cl8"
                          />

                          <div data-oid="z5kjsi8">
                            <p className="font-semibold" data-oid="k6z_2eg">
                              Course Duration
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="vne-run"
                            >
                              {courseData.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid=".4zznz_">
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="5z_2.h:"
                          />

                          <div data-oid="vkwlhv4">
                            <p className="font-semibold" data-oid="x4g_zrk">
                              Total Enrolled
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="o_zppna"
                            >
                              {courseData.students}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="nfr-uj:">
                          <BarChart
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="8tqv.a5"
                          />

                          <div data-oid="l1rbbj0">
                            <p className="font-semibold" data-oid="l0rr6tq">
                              Course Level
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="c6psv-v"
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
          data-oid="cw7:ste"
        >
          <div className="container mx-auto px-4" data-oid="z_lhlf3">
            <h2
              className="text-2xl font-bold text-[#123B79] mb-8"
              data-oid="6:wkd-q"
            >
              Related Courses You Might Like
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="zxjs3ko"
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
                  data-oid="iwpqw7r"
                >
                  <div className="relative h-48" data-oid="jagmwb:">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                      data-oid="f.f96yk"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="dz2jb8x"
                    ></div>
                    <div
                      className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                      data-oid="x907acb"
                    >
                      {relatedCourse.level}
                    </div>
                  </div>
                  <div className="p-6" data-oid="jey:tgq">
                    <h3
                      className="text-lg font-bold text-[#123B79] mb-2"
                      data-oid="47bo:5j"
                    >
                      {relatedCourse.title}
                    </h3>
                    <div
                      className="text-gray-500 text-sm mb-4"
                      data-oid="_jml0lp"
                    >
                      <span className="inline-block mr-4" data-oid="syaxn39">
                        ⏱️ {relatedCourse.duration}
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="_-j-szi"
                    >
                      <span
                        className="font-bold text-[#123B79]"
                        data-oid="6p6rt_5"
                      >
                        {relatedCourse.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(`/courses/${relatedCourse.slug}`)
                        }
                        data-oid="j7txt70"
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
          data-oid="cs.kgrg"
        >
          <div
            className="container mx-auto px-4 text-center"
            data-oid="44yq-q_"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="t5jue45">
              Ready to advance your property investment knowledge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="-pl8pz.">
              Join {courseData.students}+ students who are already transforming
              their investment strategies with this course.
            </p>
            <Button
              className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6"
              data-oid="cny89qy"
            >
              Enroll Now for {courseData.price}
            </Button>
          </div>
        </section>

        {/* Share Modal */}
        {isShareModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            data-oid="za_vgqu"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="49yl09l"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="9p_1vxt"
              >
                <h3 className="font-bold text-lg" data-oid="d552oig">
                  Share Course
                </h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="k8v417c"
                >
                  <X className="h-5 w-5" data-oid="mggmg-1" />
                </button>
              </div>
              <div className="p-6" data-oid="b6w2psa">
                <div className="mb-6" data-oid="fcos5f:">
                  <p className="font-medium mb-2" data-oid="j-g5ztc">
                    Page Link
                  </p>
                  <div className="flex" data-oid="zv477ja">
                    <input
                      type="text"
                      value={`https://assembly.sg/courses/${courseData.slug}`}
                      readOnly
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                      data-oid="cucavz5"
                    />

                    <button
                      onClick={copyToClipboard}
                      className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                      data-oid="7ujb6rr"
                    >
                      {copied ? (
                        <Check className="h-5 w-5" data-oid="jam1z.b" />
                      ) : (
                        <Copy className="h-5 w-5" data-oid="77qxa.2" />
                      )}
                    </button>
                  </div>
                </div>

                <div data-oid="_vm0uu7">
                  <p className="font-medium mb-3" data-oid="imemavu">
                    Share on social media
                  </p>
                  <div className="flex space-x-4" data-oid="3skb_xh">
                    <button
                      onClick={() => shareOnSocialMedia("facebook")}
                      className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="sncb-14"
                    >
                      <Facebook className="h-6 w-6" data-oid="zehkbe6" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("twitter")}
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="5mo82m."
                    >
                      <X className="h-5 w-5" data-oid="_a90cye" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("linkedin")}
                      className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="wmga4t_"
                    >
                      <Linkedin className="h-5 w-5" data-oid="lnkpwdb" />
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
            data-oid="eaiyir0"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="rvthv29"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="6jva8cv"
              >
                <h3 className="font-bold text-lg" data-oid="5e38u_v">
                  Login Required
                </h3>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="uuou0ol"
                >
                  <X className="h-5 w-5" data-oid="s4_c0rc" />
                </button>
              </div>
              <div className="p-6" data-oid="r36ofk8">
                <p className="mb-6" data-oid="13g7g5t">
                  Please log in to add this course to your wishlist.
                </p>
                <div className="space-y-4" data-oid="mfyqfg:">
                  <div data-oid="wcgx1:-">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="vinn69k"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="your@email.com"
                      data-oid="ea3j6hy"
                    />
                  </div>
                  <div data-oid="ju27ou3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="t_ed-n2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="••••••••"
                      data-oid="3gbxugf"
                    />
                  </div>
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="8jy1_d7"
                  >
                    Log In
                  </Button>
                  <div
                    className="text-center text-sm text-gray-500"
                    data-oid=":we40jj"
                  >
                    <a
                      href="/forgot-password"
                      className="text-[#123B79] hover:underline"
                      data-oid="l.i8rm2"
                    >
                      Forgot password?
                    </a>
                    <span className="mx-2" data-oid="jvmumt9">
                      •
                    </span>
                    <a
                      href="/signup"
                      className="text-[#123B79] hover:underline"
                      data-oid="pt4xknm"
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
