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
    <NetworkProvider data-oid=".s._y9a">
      <main
        className="relative overflow-hidden bg-[#F5F5F5] min-h-screen"
        data-oid="cgt08w:"
      >
        <NetworkBackground
          scrollY={scrollY}
          scrollSpeed={scrollSpeed}
          windowHeight={windowHeight}
          opacity={0.3}
          data-oid="c_vo861"
        />

        <Navbar data-oid="28zuojz" />
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative z-10" data-oid=":-l2oyd">
          <div
            className="container mx-auto px-4 relative z-10"
            data-oid="0pusnrk"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
              data-oid="oyudh64"
            >
              <a
                href="/courses"
                className="inline-flex items-center text-[#123B79] hover:underline"
                data-oid="1mw6.s_"
              >
                <ArrowLeft className="h-4 w-4 mr-2" data-oid="n.hkklf" />
                Back to Courses
              </a>
            </motion.div>

            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
              data-oid=".j5bu9."
            >
              {/* Main Content - 8 columns on large screens */}
              <motion.div
                ref={mainContentRef}
                className="lg:col-span-8 bg-white/95 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                data-oid="h55abye"
              >
                <h1
                  className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm"
                  data-oid="wmp.qea"
                >
                  {courseData.title}
                </h1>

                <div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  data-oid="5wpgrnk"
                >
                  <div className="flex items-center" data-oid="vcd-5cn">
                    <Star
                      className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                      data-oid="0ibrvll"
                    />

                    <span className="ml-1 font-semibold" data-oid="xmf31h3">
                      {courseData.rating}
                    </span>
                    <span className="ml-1 text-gray-500" data-oid="4oljuie">
                      ({courseData.students} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="25gm4qe"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid="1cdcchf" />
                    <span data-oid="gmdirj-">{courseData.duration}</span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="424i79f"
                  >
                    <Calendar className="h-4 w-4 mr-1" data-oid="oqqc3nk" />
                    <span data-oid="7kdd_2c">
                      Last updated: {courseData.lastUpdated}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="6l32wjm"
                  >
                    <Award className="h-4 w-4 mr-1" data-oid="pa1c0::" />
                    <span data-oid="slhogl2">{courseData.level}</span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="mw5w:zg"
                >
                  <div className="aspect-video relative" data-oid="cpgwhub">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="s:hwc21"
                    />
                  </div>
                </div>

                <div className="text-lg text-gray-700 mb-8" data-oid="21_iv3x">
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </div>

                {/* Instructors Section - Updated to display side by side */}
                <div className="mb-8" data-oid=":t.qgik">
                  <h2
                    className="font-semibold text-xl text-[#123B79] mb-4"
                    data-oid="n968vtn"
                  >
                    Course Instructors
                  </h2>
                  <div
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    data-oid="cf0jqef"
                  >
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-6"
                      data-oid="8l.0z4o"
                    >
                      {Array.isArray(courseData.instructors) &&
                      courseData.instructors.length > 0 ? (
                        courseData.instructors.map((instructor, index) => (
                          <InstructorCard
                            key={index}
                            name={instructor.name}
                            image={instructor.image}
                            data-oid="oqh1e_5"
                          />
                        ))
                      ) : (
                        <div
                          className="text-gray-500 col-span-4"
                          data-oid="ubggkg."
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
                    data-oid="sqfupfx"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="-lgebow"
                    >
                      Course Highlights
                    </h2>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="1yno_8w"
                    >
                      {courseData.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="x.5giga"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="22-psn7"
                          />

                          <p className="text-gray-700" data-oid="uaql6qg">
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
                  data-oid="u7vzso9"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="h3-j.vx"
                  >
                    What You'll Learn
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="61me9ib"
                  >
                    {Array.isArray(courseData.whatYouWillLearn) &&
                    courseData.whatYouWillLearn.length > 0 ? (
                      courseData.whatYouWillLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start"
                          data-oid="3rn_u49"
                        >
                          <CheckCircle
                            className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                            data-oid="n9n5rnq"
                          />

                          <p className="text-gray-700" data-oid="pxn-nfx">
                            {item}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="65.15dz">
                        Learning outcomes will be updated soon.
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="e.k3z-7"
                >
                  <div
                    className="flex justify-between items-center mb-4"
                    data-oid="mzi:8-t"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79]"
                      data-oid="2uh-4-_"
                    >
                      Course Content
                    </h2>
                    <div className="text-sm text-gray-600" data-oid="bobpnjd">
                      {Array.isArray(courseData.curriculum) &&
                      courseData.curriculum.length > 0
                        ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                        : Array.isArray(courseData.sections) &&
                            courseData.sections.length > 0
                          ? `${courseData.sections.length} sections • ${courseData.duration}`
                          : courseData.duration}
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="_-7tvte">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0 ? (
                      courseData.curriculum.map((module, moduleIndex) => (
                        <div
                          key={moduleIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                          data-oid="oi56mou"
                        >
                          <button
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => toggleModule(moduleIndex)}
                            data-oid="0fuw0p5"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="57txxf0"
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <div
                              className="flex items-center"
                              data-oid="-lqmt44"
                            >
                              {expandedModules.includes(moduleIndex) ? (
                                <ChevronUp
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="us2vq8_"
                                />
                              ) : (
                                <ChevronDown
                                  className="h-5 w-5 text-gray-600"
                                  data-oid="0umjx99"
                                />
                              )}
                            </div>
                          </button>

                          {expandedModules.includes(moduleIndex) && (
                            <div
                              className="divide-y divide-gray-200"
                              data-oid="my5z0p6"
                            >
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="px-6 py-4 flex items-center"
                                  data-oid="auadqdc"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="c9.sfwi"
                                  >
                                    <BookOpen
                                      className="h-4 w-4 text-[#123B79] mr-3"
                                      data-oid="yx_h1uk"
                                    />

                                    <span
                                      className="text-gray-700"
                                      data-oid="izz6x3t"
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
                          data-oid="g9bsen-"
                        >
                          <div
                            className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center"
                            data-oid="7w5sta8"
                          >
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="31lqh.z"
                            >
                              Section {sectionIndex + 1}: {section.title}
                            </h3>
                          </div>
                          <div className="px-6 py-4" data-oid="67_a2ni">
                            <span className="text-gray-700" data-oid="bkmgmoj">
                              {section.content}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500" data-oid="z20-n-1">
                        No course content available.
                      </div>
                    )}
                  </div>
                </div>

                {/* Who This Course Is For */}
                {courseData.targetAudience && (
                  <div
                    className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                    data-oid="qmsm3-1"
                  >
                    <h2
                      className="text-xl font-bold text-[#123B79] mb-4"
                      data-oid="afmzf.3"
                    >
                      Who This Course Is For
                    </h2>
                    <ul
                      className="list-disc pl-5 space-y-2 text-gray-700"
                      data-oid="dl01n5_"
                    >
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index} data-oid="8r731v1">
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Testimonials - Now part of the main content */}
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="s6n._7i"
                >
                  <h2
                    ref={reviewsSectionRef}
                    className="text-2xl font-bold text-[#123B79] mb-8"
                    data-oid="o19f81o"
                  >
                    What Our Students Say
                  </h2>

                  {hasReviews ? (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      data-oid="r__gp5e"
                    >
                      {courseData.reviews!.map((review, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl p-6 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          data-oid="48a22lg"
                        >
                          <div
                            className="flex justify-between items-start mb-4"
                            data-oid="ok7j8b7"
                          >
                            <div data-oid="gu5.9r_">
                              <h4 className="font-bold" data-oid="u-gjb36">
                                {review.name}
                              </h4>
                              <div
                                className="flex items-center mt-1"
                                data-oid="nheli9v"
                              >
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-[#F0A500] fill-[#F0A500]"
                                        : "text-gray-300"
                                    }`}
                                    data-oid="mair4ds"
                                  />
                                ))}
                                <span
                                  className="ml-2 text-sm text-gray-500"
                                  data-oid="ulv1sgc"
                                >
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700" data-oid="0b9mf86">
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
                      data-oid="vb2hz9z"
                    >
                      <div className="mb-6 text-gray-300" data-oid="mai76jv">
                        <div
                          className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                          data-oid="itzzye."
                        >
                          <MessageCircle
                            className="h-12 w-12"
                            data-oid="sotpdyt"
                          />
                        </div>
                      </div>
                      <h3
                        className="text-xl font-semibold text-gray-700 mb-2"
                        data-oid="3.of-m2"
                      >
                        No Reviews Yet
                      </h3>
                      <p
                        className="text-gray-500 text-center max-w-md mb-6"
                        data-oid="92-u:9o"
                      >
                        Be the first to share your experience with this course
                        and help others make informed decisions.
                      </p>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="text-[#123B79] border-[#123B79]"
                        data-oid="hi2kihl"
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
                data-oid="7gtjwo1"
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
                  data-oid="n0-wizz"
                >
                  {/* Course Preview Image - Desktop Only */}
                  <div
                    className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg"
                    data-oid="eurs926"
                  >
                    <div className="aspect-video relative" data-oid="vhl.kk3">
                      <Image
                        src={courseData.image || "/placeholder.svg"}
                        alt={courseData.title}
                        fill
                        className="object-cover"
                        data-oid="nnnkk98"
                      />
                    </div>
                  </div>

                  {/* Enrollment Card */}
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                    data-oid="a83o87w"
                  >
                    <div className="p-6" data-oid="u3-z0ah">
                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="j-ivnho"
                      >
                        <div
                          className="text-3xl font-bold text-[#123B79]"
                          data-oid="4_c8l6r"
                        >
                          {courseData.price}
                        </div>
                        <div className="flex space-x-2" data-oid=":pnnqra">
                          <button
                            onClick={handleBookmark}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label={
                              isBookmarked
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                            }
                            data-oid="ho6256b"
                          >
                            {isBookmarked ? (
                              <BookOpen
                                className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                                data-oid="u24:vum"
                              />
                            ) : (
                              <BookOpen
                                className="h-5 w-5 text-gray-700"
                                data-oid="jvk3hod"
                              />
                            )}
                          </button>
                          <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsShareModalOpen(true)}
                            aria-label="Share course"
                            data-oid="gnk.axi"
                          >
                            <Share2
                              className="h-5 w-5 text-gray-700"
                              data-oid="umx7-fd"
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
                        data-oid="s5fk5gw"
                      >
                        <ShoppingCart
                          className="mr-2 h-4 w-4"
                          data-oid="wmtm0oh"
                        />
                        Enroll Now
                      </Button>

                      <div className="space-y-4 mt-6" data-oid="b:pak_c">
                        <div className="flex items-center" data-oid="koxy2.8">
                          <Clock
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="jk:-lc4"
                          />

                          <div data-oid="mw_hy0m">
                            <p className="font-semibold" data-oid="m0cr31b">
                              Course Duration
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="dp7hajm"
                            >
                              {courseData.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="5y884y4">
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="w5q_nua"
                          />

                          <div data-oid="rql5tp_">
                            <p className="font-semibold" data-oid="v7rqnkn">
                              Total Enrolled
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="evqwywk"
                            >
                              {courseData.students}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center" data-oid="r:la-_-">
                          <BarChart
                            className="h-5 w-5 text-[#123B79] mr-3"
                            data-oid="znuaanh"
                          />

                          <div data-oid="y6hmg59">
                            <p className="font-semibold" data-oid="ii459:3">
                              Course Level
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid=".y42gzi"
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
          data-oid="ueyci:v"
        >
          <div className="container mx-auto px-4" data-oid="0n8z_bo">
            <h2
              className="text-2xl font-bold text-[#123B79] mb-8"
              data-oid=".yo:65w"
            >
              Related Courses You Might Like
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="ixbun6r"
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
                  data-oid="5e9:r7a"
                >
                  <div className="relative h-48" data-oid="30vxflp">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                      data-oid="mb_55n2"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="8bfedmi"
                    ></div>
                    <div
                      className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                      data-oid="195jrgs"
                    >
                      {relatedCourse.level}
                    </div>
                  </div>
                  <div className="p-6" data-oid="7wsc8.g">
                    <h3
                      className="text-lg font-bold text-[#123B79] mb-2"
                      data-oid="xuuoxx1"
                    >
                      {relatedCourse.title}
                    </h3>
                    <div
                      className="text-gray-500 text-sm mb-4"
                      data-oid="aa8sbmk"
                    >
                      <span className="inline-block mr-4" data-oid="vz40xhn">
                        ⏱️ {relatedCourse.duration}
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center"
                      data-oid="-ze3shb"
                    >
                      <span
                        className="font-bold text-[#123B79]"
                        data-oid="6yesw4-"
                      >
                        {relatedCourse.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(`/courses/${relatedCourse.slug}`)
                        }
                        data-oid="r03vjv."
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
          data-oid="9c-hmzt"
        >
          <div
            className="container mx-auto px-4 text-center"
            data-oid="5nuxem9"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="zhjy.ri">
              Ready to advance your property investment knowledge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="-zh133:">
              Join {courseData.students}+ students who are already transforming
              their investment strategies with this course.
            </p>
            <Button
              className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6"
              data-oid=".y4za5d"
            >
              Enroll Now for {courseData.price}
            </Button>
          </div>
        </section>

        {/* Share Modal */}
        {isShareModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            data-oid="c7ocu77"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="who4pvb"
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="4nix8j4"
              >
                <h3 className="font-bold text-lg" data-oid=":je98gz">
                  Share Course
                </h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="rq9372r"
                >
                  <X className="h-5 w-5" data-oid="8l1efug" />
                </button>
              </div>
              <div className="p-6" data-oid="dq9neht">
                <div className="mb-6" data-oid="4zewt:p">
                  <p className="font-medium mb-2" data-oid="5l7meob">
                    Page Link
                  </p>
                  <div className="flex" data-oid="ajs39jq">
                    <input
                      type="text"
                      value={`https://assembly.sg/courses/${courseData.slug}`}
                      readOnly
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                      data-oid="3597p:y"
                    />

                    <button
                      onClick={copyToClipboard}
                      className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                      data-oid="_u119.-"
                    >
                      {copied ? (
                        <Check className="h-5 w-5" data-oid="2-j.x1s" />
                      ) : (
                        <Copy className="h-5 w-5" data-oid="oclthn1" />
                      )}
                    </button>
                  </div>
                </div>

                <div data-oid="2ctd.pj">
                  <p className="font-medium mb-3" data-oid="zt7c3_b">
                    Share on social media
                  </p>
                  <div className="flex space-x-4" data-oid="p_kjjp:">
                    <button
                      onClick={() => shareOnSocialMedia("facebook")}
                      className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="5f9en8i"
                    >
                      <Facebook className="h-6 w-6" data-oid="0dkilc8" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("twitter")}
                      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="2ke-x-g"
                    >
                      <X className="h-5 w-5" data-oid="zg:o:xl" />
                    </button>
                    <button
                      onClick={() => shareOnSocialMedia("linkedin")}
                      className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                      data-oid="329o7ns"
                    >
                      <Linkedin className="h-5 w-5" data-oid="p-kimxo" />
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
            data-oid="e.x0t3i"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-md w-full"
              data-oid="t7u.nu."
            >
              <div
                className="flex justify-between items-center p-4 border-b"
                data-oid="5wh67nt"
              >
                <h3 className="font-bold text-lg" data-oid="4zes_tp">
                  Login Required
                </h3>
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  data-oid="8plfubc"
                >
                  <X className="h-5 w-5" data-oid="g053r8c" />
                </button>
              </div>
              <div className="p-6" data-oid="oo5d3cg">
                <p className="mb-6" data-oid="db_dah.">
                  Please log in to add this course to your wishlist.
                </p>
                <div className="space-y-4" data-oid="rwjen8z">
                  <div data-oid="zk:4c9v">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="p:7t_10"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="your@email.com"
                      data-oid="rc2y4vw"
                    />
                  </div>
                  <div data-oid="kw-uyno">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="2-b:1.e"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="••••••••"
                      data-oid="q8.:.jq"
                    />
                  </div>
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                    data-oid="1.hvhnv"
                  >
                    Log In
                  </Button>
                  <div
                    className="text-center text-sm text-gray-500"
                    data-oid="7c3957v"
                  >
                    <a
                      href="/forgot-password"
                      className="text-[#123B79] hover:underline"
                      data-oid="36e1km8"
                    >
                      Forgot password?
                    </a>
                    <span className="mx-2" data-oid=":pmz:pr">
                      •
                    </span>
                    <a
                      href="/signup"
                      className="text-[#123B79] hover:underline"
                      data-oid="exg2qo4"
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
