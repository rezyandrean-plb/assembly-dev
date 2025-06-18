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
    <NetworkProvider data-oid="6hyfghm">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="tbqge-b"
      >
        <NetworkBackground
          scrollY={scrollY}
          scrollSpeed={scrollSpeed}
          windowHeight={windowHeight}
          opacity={0.3}
          data-oid="qtgqhcq"
        />

        <Navbar data-oid="kxndegu" />
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative z-10" data-oid="2w83aja">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="lbzs.6c"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
              data-oid="xf5c.4p"
            >
              <a
                href="/courses"
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="diygrvk"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="9q00-su" />
                Back to Courses
              </a>
            </motion.div>

            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
              data-oid="2bibm-p"
            >
              {/* Main Content - 8 columns on large screens */}
              <motion.div
                ref={mainContentRef}
                className="lg:col-span-8 bg-white/95 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                data-oid="lsws1g7"
              >
                <h1
                  className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm"
                  data-oid="l4lcqy5"
                >
                  {courseData.title}
                </h1>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  data-oid="1ibdpoi"
                >
                  <div className="flex items-center" data-oid="f9rjxkj">
                    <Star
                      className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                      data-oid="uc6s7-y"
                    />

                    <span className="ml-1 font-semibold" data-oid="dv7pmz.">
                      {courseData.rating}
                    </span>
                    <span className="ml-1 text-gray-500" data-oid="pnp4a37">
                      ({courseData.students} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="fh.a8py"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid=":yxp08k" />
                    <span data-oid="-o9_m7o">{courseData.duration}</span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid=".w-pfsc"
                  >
                    <Calendar className="h-4 w-4 mr-1" data-oid="hh:g5hy" />
                    <span data-oid="-da-h9d">
                      Last updated: {courseData.lastUpdated}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="p8mose-"
                  >
                    <Award className="h-4 w-4 mr-1" data-oid="qlwrxh9" />
                    <span data-oid="ndcqzs9">{courseData.level}</span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="-0mn.8i"
                >
                  <div className="aspect-video relative" data-oid="mz9:ajh">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="siwuvcy"
                    />
                  </div>
                </div>

                <div className="text-lg text-gray-700 mb-8" data-oid="zm8u9l8">
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </div>

                {/* Instructors Section - Updated to display side by side */}
                <div className="mb-8" data-oid="9w7bh9k">
                  <h2
                    className="font-semibold text-xl text-[#123B79] mb-4"
                    data-oid="yq0135-"
                  >
                    Course Instructors
                  </h2>
                  <div
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    data-oid=".xrbr4z"
                  >
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-6"
                      data-oid="zgij0vd"
                    >
                      {Array.isArray(courseData.instructors) &&
                      courseData.instructors.length > 0 ? (
                        courseData.instructors.map((instructor, index) => (
                          <InstructorCard
                            key={index}
                            name={instructor.name}
                            image={instructor.image}
                            data-oid="91rb_9g"
                          />
                        ))
                      ) : (
                        <div
                          className="text-gray-500 col-span-4"
                          data-oid="6wufcqt"
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
                    data-oid="_ub1._z"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="og6qq0j"
                    >
                      Course Highlights
                    </h2>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid=":9h1:2k"
                    >
                      {courseData.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="6p6d7xf"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="fgfeh.2"
                          />

                          <p className="text-gray-700" data-oid="3:6:pe4">
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
                  data-oid="8q.fwwh"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="dt8pr._"
                  >
                    What You'll Learn
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="pffq:s1"
                  >
                    {Array.isArray(courseData.whatYouWillLearn) &&
                    courseData.whatYouWillLearn.length > 0 ? (
                      courseData.whatYouWillLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="iyi1nk1"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="ktyjj-2"
                          />

                          <p className="text-gray-700" data-oid="-2ox77x">
                            {item}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="w-is-b:">
                        Learning outcomes will be updated soon.
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="_9v95-w"
                >
                  <div
                    className="flex justify-between items-center mb-4"
                    data-oid="hno7pax"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79]"
                      data-oid="f5e4jl3"
                    >
                      Course Content
                    </h2>
                    <div className="text-sm text-gray-600" data-oid=":horpt7">
                      {Array.isArray(courseData.curriculum) &&
                      courseData.curriculum.length > 0
                        ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                        : Array.isArray(courseData.sections) &&
                            courseData.sections.length > 0
                          ? `${courseData.sections.length} sections • ${courseData.duration}`
                          : courseData.duration}
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="iaszowr">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0 ? (
                      courseData.curriculum.map((module, moduleIndex) => (
                        <div
                          key={moduleIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                          data-oid="p3y976o"
                        >
                          <button
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => toggleModule(moduleIndex)}
                            data-oid="7yxveim"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="o:fc0ho"
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <div
                              className="flex items-center"
                              data-oid="_qqisd_"
                            >
                              {expandedModules.includes(moduleIndex) ? (
                                <ChevronUp
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="qua1mj-"
                                />
                              ) : (
                                <ChevronDown
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="8:tq19i"
                                />
                              )}
                            </div>
                          </button>

                          {expandedModules.includes(moduleIndex) && (
                            <div
                              className="divide-y divide-gray-200"
                              data-oid="gxu4r8s"
                            >
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="px-6 py-4 flex items-center"
                                  data-oid="usjzz-c"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="b7_asb6"
                                  >
                                    <BookOpen
                                      className="h-4 w-4 text-[#123B79] mr-3"
                                      data-oid="9vq7tzf"
                                    />

                                    <span
                                      className="text-gray-700"
                                      data-oid="vyx17cl"
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
                          data-oid="suuypsf"
                        >
                          <div
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center"
                            data-oid="qm43juj"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="feibwoy"
                            >
                              Section {sectionIndex + 1}: {section.title}
                            </h3>
                          </div>
                          <div className="px-6 py-4" data-oid="id0jto.">
                            <span className="text-gray-700" data-oid="s7s27u0">
                              {section.content}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="2nen6bq">
                        No course content available.
                      </div>
                    )}
                  </div>
                </div>

                {/* Who This Course Is For */}
                {courseData.targetAudience && (
                  <div
                    className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                    data-oid="bx94szq"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="t5.9v-5"
                    >
                      Who This Course Is For
                    </h2>
                    <ul
                      className="list-disc pl-5 space-y-2 text-gray-700"
                      data-oid="gplyjug"
                    >
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index} data-oid="kr9ebvi">
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Testimonials - Now part of the main content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="225-leb"
                >
                  <h2
                    ref={reviewsSectionRef}
                    className="text-2xl font-bold text-[#123B79] mb-8"
                    data-oid="y1ki2jj"
                  >
                    What Our Students Say
                  </h2>

                  {hasReviews ? (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      data-oid="5ii:acp"
                    >
                      {courseData.reviews!.map((review, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl p-6 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          data-oid="0e0dwlp"
                        >
                          <div
                            className="flex justify-between items-start mb-4"
                            data-oid="s_o1:u."
                          >
                            <div data-oid="7bocmp9">
                              <h4 className="font-bold" data-oid="8k9dgtq">
                                {review.name}
                              </h4>
                              <div
                                className="flex items-center mt-1"
                                data-oid="k0oiwcc"
                              >
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-[#F0A500] fill-[#F0A500]"
                                        : "text-gray-300"
                                    }`}
                                    data-oid="ia5g67m"
                                  />
                                ))}
                                <span
                                  className="ml-2 text-sm text-gray-500"
                                  data-oid="icmva8n"
                                >
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700" data-oid="mdhf-x.">
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
                      data-oid="9gtly7a"
                    >
                      <div className="mb-6 text-gray-300" data-oid=":0ctk7r">
                        <div
                          className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                          data-oid="e:6.etk"
                        >
                          <MessageCircle
                            className="h-12 w-12"
                            data-oid="zixsbzd"
                          />
                        </div>
                      </div>
                      <h3
                        className="text-xl font-semibold text-gray-700 mb-2"
                        data-oid="mtx.aqs"
                      >
                        No Reviews Yet
                      </h3>
                      <p
                        className="text-gray-500 text-center max-w-md mb-6"
                        data-oid="vdvodxn"
                      >
                        Be the first to share your experience with this course
                        and help others make informed decisions.
                      </p>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="text-[#123B79] border-[#123B79]"
                        data-oid="t07g9x8"
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
                data-oid="1rtx6m_"
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
                  data-oid="x8teh_w"
                >
                  {/* Course Preview Image - Desktop Only */}
                  <div
                    className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg"
                    data-oid="a-qk2w0"
                  >
                    <div className="aspect-video relative" data-oid="n.d3avn">
                      <Image
                        src={courseData.image || "/placeholder.svg"}
                        alt={courseData.title}
                        fill
                        className="object-cover"
                        data-oid="yl3_shc"
                      />
                    </div>
                  </div>

                  {/* Enrollment Card */}
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                    data-oid="zk38bip"
                  >
                    <div className="p-6" data-oid="zq6ut2k">
                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="0tqz1yd"
                      >
                        <div
                          className="text-3xl font-bold text-[#123B79]"
                          data-oid="sqnut84"
                        >
                          {courseData.price}
                        </div>
                        <div className="flex space-x-2" data-oid="d-1497-">
                          <button
                            onClick={handleBookmark}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label={
                              isBookmarked
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                            }
                            data-oid="h75r1_0"
                          >
                            {isBookmarked ? (
                              <BookOpen
                                className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                                data-oid="ddhx9lx"
                              />
                            ) : (
                              <BookOpen
                                className="h-5 w-5 text-gray-700"
                                data-oid="39457za"
                              />
                            )}
                          </button>
                          <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsShareModalOpen(true)}
                            aria-label="Share course"
                            data-oid="rn-6:4n"
                          >
                            <Share2
                              className="h-5 w-5 text-gray-700"
                              data-oid="3t0vhj6"
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
                        data-oid="alvzm:9"
                      >
                        <ShoppingCart
                          className="mr-2 h-4 w-4"
                          data-oid="r.4qwwf"
                        />
                        Enroll Now
                      </Button>

                      <div className="space-y-4 mt-6" data-oid="yi6zkf1">
                        <div className="flex items-center" data-oid="ke5srrt">
                          <Clock
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="l_8:3m1"
                          />

                          <div data-oid="di4:s3a">
                            <p className="font-semibold" data-oid="0e7ag0z">
                              Course Duration
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="42436.h"
                            >
                              {courseData.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="wqn0-nb">
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="4g4_p1g"
                          />

                          <div data-oid="s7-brp_">
                            <p className="font-semibold" data-oid="3lrjn1r">
                              Total Enrolled
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="amqjqfy"
                            >
                              {courseData.students}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="y0-uu75">
                          <BarChart
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid=".ozui8l"
                          />

                          <div data-oid="vn.si_o">
                            <p className="font-semibold" data-oid="joqlz83">
                              Course Level
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="iddq1is"
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
          data-oid="7jcxymd"
        >
          <div className="container mx-auto px-4" data-oid="a1adjpy">
            <h2
              className="text-2xl font-bold text-[#123B79] mb-8"
              data-oid="tq08.4j"
            >
              Related Courses You Might Like
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="f22egno"
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
                  data-oid="dvde_qz"
                >
                  <div className="relative h-48" data-oid=":diz64e">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                      data-oid="zs5f7nd"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="29i06jp"
                    ></div>
                    <div
                      className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                      data-oid="ks.l.nu"
                    >
                      {relatedCourse.level}
                    </div>
                  </div>
                  <div className="p-6" data-oid="x3pif8o">
                    <h3
                      className="text-lg font-bold text-[#123B79] mb-2"
                      data-oid="c5hnikm"
                    >
                      {relatedCourse.title}
                    </h3>
                    <div
                      className="text-gray-500 text-sm mb-4"
                      data-oid="6w20t-f"
                    >
                      <span className="inline-block mr-4" data-oid=":_xcb_m">
                        ⏱️ {relatedCourse.duration}
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="175rn23"
                    >
                      <span
                        className="font-bold text-[#123B79]"
                        data-oid="fj8sigw"
                      >
                        {relatedCourse.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(`/courses/${relatedCourse.slug}`)
                        }
                        data-oid="xku6qw7"
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
          data-oid="y78pom3"
        >
          <div
            className="container mx-auto px-4 text-center"
            data-oid="s9utwfk"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="8xch4h9">
              Ready to advance your property investment knowledge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="jw.2poh">
              Join {courseData.students}+ students who are already transforming
              their investment strategies with this course.
            </p>
            <Button
              className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6"
              data-oid="b-b0esc"
            >
              Enroll Now for {courseData.price}
            </Button>
          </div>
        </section>

        {/* Share Modal */}
        {isShareModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            data-oid="764v78f"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="wa.ipx0"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="mvcj5jd"
              >
                <h3 className="font-bold text-lg" data-oid="45nya22">
                  Share Course
                </h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="_w97u1y"
                >
                  <X className="h-5 w-5" data-oid="n8e2dzr" />
                </button>
              </div>
              <div className="p-6" data-oid="b1gm.aw">
                <div className="mb-6" data-oid="5sgoden">
                  <p className="font-medium mb-2" data-oid="g41x8:_">
                    Page Link
                  </p>
                  <div className="flex" data-oid="6pxzv26">
                    <input
                      type="text"
                      value={`https://assembly.sg/courses/${courseData.slug}`}
                      readOnly
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                      data-oid="cwoz7_s"
                    />

                    <button
                      onClick={copyToClipboard}
                      className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                      data-oid="55e8es5"
                    >
                      {copied ? (
                        <Check className="h-5 w-5" data-oid="s_ccpah" />
                      ) : (
                        <Copy className="h-5 w-5" data-oid="b423y54" />
                      )}
                    </button>
                  </div>
                </div>

                <div data-oid="8228-zy">
                  <p className="font-medium mb-3" data-oid="1y:hk.0">
                    Share on social media
                  </p>
                  <div className="flex space-x-4" data-oid="vq0z2je">
                    <button
                      onClick={() => shareOnSocialMedia("facebook")}
                      className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="o2u3kd3"
                    >
                      <Facebook className="h-6 w-6" data-oid="2c8oww_" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("twitter")}
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="1rerbfy"
                    >
                      <X className="h-5 w-5" data-oid="45omtk4" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("linkedin")}
                      className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="23_.-28"
                    >
                      <Linkedin className="h-5 w-5" data-oid="c_2uyol" />
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
            data-oid="hknf9n5"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="poke16a"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="-v7rvw6"
              >
                <h3 className="font-bold text-lg" data-oid="lbfnjk1">
                  Login Required
                </h3>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="ui5cd3l"
                >
                  <X className="h-5 w-5" data-oid="9zjh-2h" />
                </button>
              </div>
              <div className="p-6" data-oid="znsw0_4">
                <p className="mb-6" data-oid="e3m.19s">
                  Please log in to add this course to your wishlist.
                </p>
                <div className="space-y-4" data-oid="_pz9-21">
                  <div data-oid="1oaej2o">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="cjkiznd"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="your@email.com"
                      data-oid="iz6sjol"
                    />
                  </div>
                  <div data-oid="j5ap6eg">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="oj42js1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="••••••••"
                      data-oid="ccomf6c"
                    />
                  </div>
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="j-18c4m"
                  >
                    Log In
                  </Button>
                  <div
                    className="text-center text-sm text-gray-500"
                    data-oid="okeg7fj"
                  >
                    <a
                      href="/forgot-password"
                      className="text-[#123B79] hover:underline"
                      data-oid="ee8z8xy"
                    >
                      Forgot password?
                    </a>
                    <span className="mx-2" data-oid="bhj5cq.">
                      •
                    </span>
                    <a
                      href="/signup"
                      className="text-[#123B79] hover:underline"
                      data-oid="-wlx-ak"
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
