"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
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
  Play,
  Download,
  Globe,
  Smartphone,
  Trophy,
  Heart,
  TrendingUp,
  Shield,
  Monitor,
  FileText,
  Infinity,
} from "lucide-react";
import { useCart } from "@/components/cart-context";
import { courses } from "@/app/data/courses";
import { getFacilitator } from "@/app/data/facilitators";
import CourseCard from "@/components/course-card";
import { useAuth } from "@/context/auth-context";
import LoginModal from "@/app/components/login-modal";
import toast from "react-hot-toast";

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
  previewUrl?: string;
}

interface CourseDetailTemplateProps {
  courseData: CourseData;
}

export default function CourseDetailTemplate({
  courseData,
}: CourseDetailTemplateProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showVideoPreview, setShowVideoPreview] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const relatedCoursesRef = useRef<HTMLDivElement>(null);
  const reviewsSectionRef = useRef<HTMLHeadingElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

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
      console.log(
        `Course ${isBookmarked ? "removed from" : "added to"} wishlist`,
      );
    } else {
      setIsLoginModalOpen(true);
    }
  };

  // Handle preview click
  const handlePreview = () => {
    if (courseData.previewUrl) {
      setShowVideoPreview(true);
    }
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
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

  // Get related courses based on categories, tags, and level
  const getRelatedCourses = () => {
    // Filter out the current course and get courses with similar characteristics
    const otherCourses = courses.filter(
      (course) => course.slug !== courseData.slug,
    );

    // Score courses based on similarity
    const scoredCourses = otherCourses.map((course) => {
      let score = 0;

      // Match by category
      if (course.category === courseData.category?.toLowerCase()) {
        score += 3;
      }

      // Match by tags
      const courseTags = courseData.tags || [];
      const otherCourseTags = course.tags || [];
      const tagMatches = courseTags.filter((tag) =>
        otherCourseTags.some(
          (otherTag) =>
            otherTag.toLowerCase().includes(tag.toLowerCase()) ||
            tag.toLowerCase().includes(otherTag.toLowerCase()),
        ),
      ).length;
      score += tagMatches * 2;

      // Match by level
      if (course.level === courseData.level) {
        score += 1;
      }

      // Prefer courses with higher ratings
      if (course.rating && course.rating > 4) {
        score += 1;
      }

      // Prefer paid courses if current course is paid, free if current is free
      const currentIsFree = courseData.price === "Free";
      const courseIsFree = course.price === "Free";
      if (currentIsFree === courseIsFree) {
        score += 1;
      }

      return { course, score };
    });

    // Sort by score and return top 3
    return scoredCourses
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.course);
  };

  const relatedCourses = getRelatedCourses();

  return (
    <main className="relative bg-gray-50 min-h-screen" data-oid="8cta8t:">
      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="pt-32 pb-8 bg-white"
        data-oid="tz59g-l"
      >
        <div className="container mx-auto px-4" data-oid="1w808-e">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            data-oid="jrrt7z1"
          >
            <a
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline font-medium"
              data-oid="qxsvdii"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid=":u5-99." />
              Back to Courses
            </a>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            data-oid="w_q23t:"
          >
            {/* Main Content - Takes up 8/12 columns */}
            <motion.div
              ref={mainContentRef}
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="ryytk_5"
            >
              {/* Course Header */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="9ocucca"
              >
                <div className="flex flex-wrap gap-2 mb-4" data-oid="5:mx65t">
                  {courseData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#123B79]/10 text-[#123B79] text-sm font-medium rounded-full"
                      data-oid="av539-4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-bold text-[#123B79] mb-6 leading-tight"
                  data-oid="il:squl"
                >
                  {courseData.title}
                </h1>

                <div
                  className="text-xl text-gray-700 mb-6 leading-relaxed"
                  data-oid="w9g6y7s"
                >
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </div>

                {/* Course Stats */}
                <div
                  className="flex flex-wrap items-center gap-6 mb-6"
                  data-oid="ni7jqwj"
                >
                  <div className="flex items-center" data-oid="236wgg9">
                    <div className="flex items-center mr-2" data-oid="f528-a2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(courseData.rating)
                              ? "text-[#F0A500] fill-[#F0A500]"
                              : "text-gray-300"
                          }`}
                          data-oid="gjdcgsf"
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg" data-oid="dpzdcid">
                      {courseData.rating}
                    </span>
                    <span className="text-gray-500 ml-1" data-oid="m71zsxt">
                      ({courseData.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="giw05iu"
                  >
                    <Clock className="h-5 w-5 mr-2" data-oid="7vme1zt" />
                    <span className="font-medium" data-oid=":65w1jg">
                      {courseData.duration}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="soyzqbn"
                  >
                    <Award className="h-5 w-5 mr-2" data-oid="vg0824e" />
                    <span className="font-medium" data-oid="fruv6fu">
                      {courseData.level}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="__.1anb"
                  >
                    <Calendar className="h-5 w-5 mr-2" data-oid="_eaikk-" />
                    <span className="font-medium" data-oid="gggbpgi">
                      Updated {courseData.lastUpdated}
                    </span>
                  </div>
                </div>

                {/* Course Image/Video for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="uiui.zu"
                >
                  <div className="aspect-video relative" data-oid="h4md9ix">
                    {showVideoPreview && courseData.previewUrl ? (
                      <div
                        className="relative w-full h-full"
                        data-oid="jwb1k5_"
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${getYouTubeVideoId(courseData.previewUrl)}?autoplay=1&rel=0`}
                          title="Course Preview"
                          className="w-full h-full rounded-xl"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          data-oid="45vqxji"
                        />

                        <button
                          onClick={() => setShowVideoPreview(false)}
                          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                          aria-label="Close video"
                          data-oid="ssqvngc"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="jk5._2_"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                              data-oid="4iba6so"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={courseData.image || "/placeholder.svg"}
                          alt={courseData.title}
                          fill
                          className="object-cover"
                          data-oid="ei1osd:"
                        />

                        {courseData.previewUrl && (
                          <div
                            className="absolute inset-0 bg-black/20 flex items-center justify-center"
                            data-oid="91-i5va"
                          >
                            <button
                              onClick={handlePreview}
                              className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors"
                              data-oid="0je1az-"
                            >
                              <Play
                                className="h-8 w-8 text-[#123B79] ml-1"
                                data-oid="z4xi_qd"
                              />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Course Instructors */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="9vuwcns"
              >
                <h2
                  className="text-2xl font-bold text-[#123B79] mb-6"
                  data-oid="or92.c5"
                >
                  Meet Your Instructors
                </h2>
                <div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
                  data-oid="vchage0"
                >
                  {Array.isArray(courseData.instructors) &&
                  courseData.instructors.length > 0 ? (
                    courseData.instructors.map((instructor, index) => (
                      <div
                        key={index}
                        className="text-center"
                        data-oid="n6jjyjz"
                      >
                        <InstructorCard
                          name={instructor.name}
                          image={instructor.image}
                          data-oid="95wvdqw"
                        />
                      </div>
                    ))
                  ) : (
                    <div
                      className="text-gray-500 col-span-full"
                      data-oid="bz24w8_"
                    >
                      Instructor information coming soon.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Highlights */}
              {courseData.highlights && (
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                  data-oid="7t9uf82"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79] mb-6"
                    data-oid="f.slp5z"
                  >
                    Course Highlights
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="sfljiom"
                  >
                    {courseData.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="5ytlmfw"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="92awip_"
                        />

                        <p
                          className="text-gray-700 font-medium"
                          data-oid="k:iiqx-"
                        >
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What You'll Learn */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="-sn7hs2"
              >
                <h2
                  className="text-2xl font-bold text-[#123B79] mb-6"
                  data-oid="dz-y7-:"
                >
                  What You'll Learn
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="lm1w4xv"
                >
                  {Array.isArray(courseData.whatYouWillLearn) &&
                  courseData.whatYouWillLearn.length > 0 ? (
                    courseData.whatYouWillLearn.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="-mx5u__"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="fo3ke6."
                        />

                        <p
                          className="text-gray-700 font-medium"
                          data-oid="81hb12n"
                        >
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="6zjgyu7">
                      Learning outcomes will be updated soon.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="paz5_3-"
              >
                <div
                  className="flex justify-between items-center mb-6"
                  data-oid="mbk-mql"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79]"
                    data-oid="pbktame"
                  >
                    Course Content
                  </h2>
                  <div
                    className="text-sm text-gray-600 font-medium"
                    data-oid="a58fsr5"
                  >
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0
                      ? `${courseData.curriculum.length} modules • ${totalLessons} lessons • ${courseData.duration}`
                      : Array.isArray(courseData.sections) &&
                          courseData.sections.length > 0
                        ? `${courseData.sections.length} sections • ${courseData.duration}`
                        : courseData.duration}
                  </div>
                </div>

                <div className="space-y-3" data-oid="o_0.r:k">
                  {Array.isArray(courseData.curriculum) &&
                  courseData.curriculum.length > 0 ? (
                    courseData.curriculum.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                        data-oid="vm4b5w0"
                      >
                        <button
                          className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                          onClick={() => toggleModule(moduleIndex)}
                          data-oid="swjgx6a"
                        >
                          <div className="flex items-center" data-oid="ki63q1p">
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="utry2et"
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <span
                              className="ml-4 text-sm text-gray-500"
                              data-oid="3ea4iz9"
                            >
                              {module.lessons.length} lessons
                            </span>
                          </div>
                          {expandedModules.includes(moduleIndex) ? (
                            <ChevronUp
                              className="h-5 w-5 text-gray-600"
                              data-oid="dk8sn:y"
                            />
                          ) : (
                            <ChevronDown
                              className="h-5 w-5 text-gray-600"
                              data-oid=".42sfk3"
                            />
                          )}
                        </button>

                        {expandedModules.includes(moduleIndex) && (
                          <div
                            className="divide-y divide-gray-200"
                            data-oid="xmmxnbu"
                          >
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                                data-oid="g81g44t"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid=".yz:06:"
                                >
                                  <Play
                                    className="h-4 w-4 text-[#123B79] mr-3"
                                    data-oid="xxy.icg"
                                  />

                                  <span
                                    className="text-gray-700 font-medium"
                                    data-oid="p-3-w_o"
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
                        className="border border-gray-200 rounded-xl overflow-hidden"
                        data-oid="gg2_i6o"
                      >
                        <div
                          className="w-full bg-gray-50 px-6 py-4"
                          data-oid="yv1cdg9"
                        >
                          <h3
                            className="font-bold text-[#123B79] text-left"
                            data-oid="hmj1h0l"
                          >
                            Section {sectionIndex + 1}: {section.title}
                          </h3>
                        </div>
                        <div className="px-6 py-4" data-oid="q_8ko:p">
                          <span className="text-gray-700" data-oid="ut_7ojk">
                            {section.content}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="f13cgf6">
                      No course content available.
                    </div>
                  )}
                </div>
              </div>

              {/* Who This Course Is For */}
              {courseData.targetAudience && (
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                  data-oid="p7:c1r-"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79] mb-6"
                    data-oid="k2-si_0"
                  >
                    Who This Course Is For
                  </h2>
                  <ul className="space-y-3" data-oid="j-96n2l">
                    {courseData.targetAudience.map((audience, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        data-oid="8go0n8p"
                      >
                        <Users
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="kbmejjb"
                        />

                        <span
                          className="text-gray-700 font-medium"
                          data-oid="7zomrun"
                        >
                          {audience}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Student Reviews */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="66pf.v9"
              >
                <h2
                  ref={reviewsSectionRef}
                  className="text-2xl font-bold text-[#123B79] mb-8"
                  data-oid="hsuw3xn"
                >
                  Student Reviews
                </h2>

                {hasReviews ? (
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-oid="byay.my"
                  >
                    {courseData.reviews!.map((review, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        data-oid="hkg-i-q"
                      >
                        <div
                          className="flex justify-between items-start mb-4"
                          data-oid="yf27jkn"
                        >
                          <div data-oid="e6:uwh6">
                            <h4
                              className="font-bold text-lg"
                              data-oid="-6usy6s"
                            >
                              {review.name}
                            </h4>
                            <div
                              className="flex items-center mt-1"
                              data-oid="pe:nhrq"
                            >
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-[#F0A500] fill-[#F0A500]"
                                      : "text-gray-300"
                                  }`}
                                  data-oid="hsxi:17"
                                />
                              ))}
                              <span
                                className="ml-2 text-sm text-gray-500"
                                data-oid="j8lge4a"
                              >
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700" data-oid="fotspnw">
                          {review.comment}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    className="flex flex-col items-center justify-center bg-gray-50 rounded-xl py-16 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    data-oid="0d.4zom"
                  >
                    <div className="mb-6 text-gray-300" data-oid="rv9o8jm">
                      <div
                        className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                        data-oid="a6ut7v0"
                      >
                        <MessageCircle
                          className="h-12 w-12"
                          data-oid=":14ddpu"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-semibold text-gray-700 mb-2"
                      data-oid="0t9_kzz"
                    >
                      No Reviews Yet
                    </h3>
                    <p
                      className="text-gray-500 text-center max-w-md mb-6"
                      data-oid="ct9r8i-"
                    >
                      Be the first to share your experience with this course and
                      help others make informed decisions.
                    </p>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      className="text-[#123B79] border-[#123B79]"
                      data-oid="_s_a9wk"
                    >
                      Write a Review
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Enhanced Sidebar - Takes up 4/12 columns */}
            <motion.div
              ref={sidebarRef}
              className="lg:col-span-4 self-start lg:sticky lg:top-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="h7q5mp8"
            >
              {/* Course Preview Card */}
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                data-oid="eu7qxlf"
              >
                {/* Course Preview Image/Video */}
                <div className="relative aspect-video" data-oid="k.yyuaf">
                  {showVideoPreview && courseData.previewUrl ? (
                    <div className="relative w-full h-full" data-oid="1v.kspk">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(courseData.previewUrl)}?autoplay=1&rel=0`}
                        title="Course Preview"
                        className="w-full h-full rounded-t-2xl"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        data-oid="t10qmvd"
                      />

                      <button
                        onClick={() => setShowVideoPreview(false)}
                        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                        aria-label="Close video"
                        data-oid="8z_5g70"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="2tn4ujc"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            data-oid="e::4yx7"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={courseData.image || "/placeholder.svg"}
                        alt={courseData.title}
                        fill
                        className="object-cover"
                        data-oid="t31r0l8"
                      />

                      {courseData.previewUrl && (
                        <>
                          <div
                            className="absolute inset-0 bg-black/20 flex items-center justify-center"
                            data-oid="lp::onw"
                          >
                            <button
                              onClick={handlePreview}
                              className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors group"
                              data-oid="7:y9kqu"
                            >
                              <Play
                                className="h-8 w-8 text-[#123B79] ml-1 group-hover:scale-110 transition-transform"
                                data-oid="180y4nm"
                              />
                            </button>
                          </div>
                          <div
                            className="absolute top-4 right-4 bg-[#123B79] text-white text-sm font-bold px-3 py-1 rounded-full"
                            data-oid="2:2r-17"
                          >
                            Preview
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Quick Summary */}
                <div className="p-6" data-oid="qzge37r">
                  <div
                    className="flex justify-between items-center mb-6"
                    data-oid="g-62aly"
                  >
                    <div
                      className="text-3xl font-bold text-[#123B79]"
                      data-oid=".12.w7a"
                    >
                      {courseData.price}
                    </div>
                    <div className="flex space-x-2" data-oid="enz48w4">
                      <button
                        onClick={handleBookmark}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label={
                          isBookmarked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        data-oid="qirgmqa"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            isBookmarked
                              ? "text-red-500 fill-red-500"
                              : "text-gray-700"
                          }`}
                          data-oid="khgikxi"
                        />
                      </button>
                      <button
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setIsShareModalOpen(true)}
                        aria-label="Share course"
                        data-oid="d-h2:bx"
                      >
                        <Share2
                          className="h-5 w-5 text-gray-700"
                          data-oid="zvyxakv"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <Button
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E] text-white font-bold py-4 text-lg mb-4 rounded-xl"
                    onClick={() => {
                      // Always add course to cart (paid or free)
                      const coursePrice =
                        courseData.price &&
                        courseData.price.toLowerCase() !== "free"
                          ? courseData.price
                          : "$0.00"; // Display free courses as $0.00

                      addToCart({
                        id: String(courseData.id),
                        title: courseData.title,
                        slug: courseData.slug,
                        price: coursePrice,
                        image: courseData.image,
                        author: courseData.instructors?.[0]?.name || "Assembly",
                        type: "Course",
                      });

                      // Show success notification instead of redirecting
                      toast.success(
                        `Course added to cart! "${courseData.title}" has been added to your cart.`,
                        {
                          duration: 3000, // Auto-dismiss after 3 seconds
                          position: "top-center",
                          style: {
                            background: "#10B981",
                            color: "#fff",
                            fontWeight: "500",
                          },
                        },
                      );
                    }}
                    data-oid="wwh-91u"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" data-oid="j5cly:g" />
                    Enroll Now
                  </Button>

                  {/* Secondary CTA */}
                  {courseData.previewUrl && (
                    <Button
                      variant="outline"
                      onClick={
                        showVideoPreview
                          ? () => setShowVideoPreview(false)
                          : handlePreview
                      }
                      className="w-full border-[#123B79] text-[#123B79] hover:bg-[#123B79] hover:text-white font-semibold py-3 mb-6 rounded-xl"
                      data-oid="bj.e608"
                    >
                      {showVideoPreview ? (
                        <>
                          <svg
                            className="mr-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="-iio_uj"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                              data-oid="yzys6py"
                            />
                          </svg>
                          Close Preview
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" data-oid="ben.3n_" />
                          Preview Course
                        </>
                      )}
                    </Button>
                  )}

                  {/* Course Features */}
                  <div className="space-y-4" data-oid="ixiogkt">
                    <h3
                      className="font-bold text-lg text-[#123B79] mb-4"
                      data-oid="ysrw.iq"
                    >
                      This course includes:
                    </h3>

                    <div className="space-y-3" data-oid="qtzw3r.">
                      <div className="flex items-center" data-oid="uxkk9.m">
                        <Monitor
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="5s1f.6x"
                        />

                        <div data-oid="id-rycz">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="u89lpva"
                          >
                            {courseData.duration}
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid=".djwekp"
                          >
                            On-demand video
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="6dvxzum">
                        <Smartphone
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="ft7lojp"
                        />

                        <div data-oid="sh03-pk">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="vcuikta"
                          >
                            Mobile access
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="gn9yy8w"
                          >
                            Learn on any device
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="b_rdtb8">
                        <Trophy
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="7b0qagd"
                        />

                        <div data-oid="v9qx8yl">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="_2ixj3k"
                          >
                            Certificate of completion
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="e_fr3w8"
                          >
                            Shareable credential
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="-dd3.rd">
                        <Infinity
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="f:75cdx"
                        />

                        <div data-oid="q7ace9y">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="jga-a6h"
                          >
                            Lifetime access
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="j4ub2fl"
                          >
                            Learn at your pace
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div
                    className="mt-6 pt-6 border-t border-gray-200"
                    data-oid="n884q-e"
                  >
                    <div className="grid grid-cols-2 gap-4" data-oid="iemf8-4">
                      <div className="text-center" data-oid="61zjg36">
                        <div
                          className="flex items-center justify-center mb-2"
                          data-oid="yonywxu"
                        >
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-2"
                            data-oid="8ioht3n"
                          />

                          <span
                            className="font-bold text-lg text-gray-900"
                            data-oid="8lvf0:7"
                          >
                            {courseData.students.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid=".h53gf8">
                          Students enrolled
                        </p>
                      </div>
                      <div className="text-center" data-oid="e2qbscz">
                        <div
                          className="flex items-center justify-center mb-2"
                          data-oid=":5k2qcl"
                        >
                          <Star
                            className="h-5 w-5 text-[#F0A500] fill-[#F0A500] mr-2"
                            data-oid="ah8azo:"
                          />

                          <span
                            className="font-bold text-lg text-gray-900"
                            data-oid="h_wh.om"
                          >
                            {courseData.rating}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid="keh5h19">
                          Course rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section
        ref={relatedCoursesRef}
        className="py-16 bg-white border-t border-gray-100"
        data-oid="5z-v1ek"
      >
        <div className="container mx-auto px-4" data-oid="hbu5:ab">
          <h2
            className="text-3xl font-bold text-[#123B79] mb-8 text-center"
            data-oid="yk8:s1o"
          >
            Related Courses You Might Like
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="o5xn1fg"
          >
            {relatedCourses.map((course, index) => {
              // Get instructor names from IDs
              const instructorNames =
                course.instructorIds
                  ?.map((id) => {
                    if (id === "tbd") return "To be announced";
                    const facilitator = getFacilitator(id);
                    return facilitator?.name || "Unknown";
                  })
                  .join(", ") || "To be announced";

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  data-oid="mzzo-gw"
                >
                  <CourseCard
                    course={{
                      title: course.title,
                      instructor: instructorNames,
                      level: course.level || "All Levels",
                      duration: course.duration || "Self-paced",
                      image: course.image,
                      slug: course.slug,
                      price: course.price || "Free",
                      rating: course.rating,
                      reviewCount: course.reviewCount,
                    }}
                    delay={0}
                    size="normal"
                    data-oid="c7y._rx"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 bg-gradient-to-r from-[#123B79] to-[#0A2A5E] text-white"
        data-oid="_ydp36h"
      >
        <div className="container mx-auto px-4 text-center" data-oid="u2av:q7">
          <h2 className="text-4xl font-bold mb-4" data-oid="v9-i:p1">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            data-oid="yjyljam"
          >
            Join {courseData.students.toLocaleString()}+ students who are
            already mastering property investment with expert guidance and
            proven strategies.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-oid="i4p3d.q"
          >
            <Button
              className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-4 rounded-xl"
              onClick={() => {
                if (
                  courseData.price &&
                  courseData.price.toLowerCase() !== "free"
                ) {
                  addToCart({
                    id: String(courseData.id),
                    title: courseData.title,
                    slug: courseData.slug,
                    price: courseData.price,
                    image: courseData.image,
                    author: courseData.instructors?.[0]?.name || "Assembly",
                    type: "Course",
                  });
                  router.push("/cart");
                }
              }}
              data-oid="4p:sttx"
            >
              <ShoppingCart className="mr-2 h-5 w-5" data-oid="1qntu5j" />
              Enroll Now for {courseData.price}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-gray-300 hover:text-[#123B79] font-semibold text-lg px-8 py-4 rounded-xl"
              data-oid="eoiusne"
            >
              <TrendingUp
                className="mr-2 h-5 w-5 text-gray-800"
                data-oid="vtwz1pe"
              />

              <a href="/courses" className="text-gray-800" data-oid="j1vln2c">
                View All Courses
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          data-oid="u1t:my4"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="eky:-mk"
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="se3c_yy"
            >
              <h3 className="font-bold text-lg" data-oid="ta12ygf">
                Share Course
              </h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="10sq52d"
              >
                <X className="h-5 w-5" data-oid="i2xpgr7" />
              </button>
            </div>
            <div className="p-6" data-oid="tfb.ns9">
              <div className="mb-6" data-oid="3j6cpa9">
                <p className="font-medium mb-2" data-oid="-jm8.29">
                  Page Link
                </p>
                <div className="flex" data-oid="g3x1ypz">
                  <input
                    type="text"
                    value={`https://assembly.sg/courses/${courseData.slug}`}
                    readOnly
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                    data-oid="yp02wr2"
                  />

                  <button
                    onClick={copyToClipboard}
                    className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                    data-oid="v23gfvt"
                  >
                    {copied ? (
                      <Check className="h-5 w-5" data-oid="n_73:ze" />
                    ) : (
                      <Copy className="h-5 w-5" data-oid="fk:ocue" />
                    )}
                  </button>
                </div>
              </div>

              <div data-oid="br:llnb">
                <p className="font-medium mb-3" data-oid="t1n.77x">
                  Share on social media
                </p>
                <div className="flex space-x-4" data-oid=".:ji.r:">
                  <button
                    onClick={() => shareOnSocialMedia("facebook")}
                    className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="-ppogev"
                  >
                    <Facebook className="h-6 w-6" data-oid="r1ozuyz" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("twitter")}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="kvo981l"
                  >
                    <X className="h-5 w-5" data-oid="0k3hw0c" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("linkedin")}
                    className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="vbyo9mf"
                  >
                    <Linkedin className="h-5 w-5" data-oid="apnj1dc" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        data-oid="k.88-hw"
      />
    </main>
  );
}
