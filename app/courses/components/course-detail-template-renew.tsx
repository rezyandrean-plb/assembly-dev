"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
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

interface CourseDetailTemplateRenewProps {
  courseData: CourseData;
}

export default function CourseDetailTemplateRenew({
  courseData,
}: CourseDetailTemplateRenewProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSidebarSticky, setIsSidebarSticky] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const relatedCoursesRef = useRef<HTMLDivElement>(null);
  const reviewsSectionRef = useRef<HTMLHeadingElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !mainContentRef.current ||
        !sidebarRef.current ||
        !heroSectionRef.current ||
        !relatedCoursesRef.current
      ) {
        return;
      }

      const heroBottom =
        heroSectionRef.current.offsetTop + heroSectionRef.current.offsetHeight;
      const relatedTop = relatedCoursesRef.current.offsetTop;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const scrollY = window.scrollY;

      const shouldBeSticky =
        scrollY > heroBottom - 100 &&
        scrollY < relatedTop - sidebarHeight - 100;

      setIsSidebarSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <main className="relative bg-gray-50 min-h-screen" data-oid="07_zg65">
      <Navbar data-oid="65hrnwu" />

      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="pt-32 pb-8 bg-white"
        data-oid="_srr9i7"
      >
        <div className="container mx-auto px-4" data-oid="3om9m3u">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            data-oid="e2-104c"
          >
            <a
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline font-medium"
              data-oid="devjs_p"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="6gd:-44" />
              Back to Courses
            </a>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            data-oid="87fph33"
          >
            {/* Main Content - Takes up 8/12 columns */}
            <motion.div
              ref={mainContentRef}
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="ksi36-9"
            >
              {/* Course Header */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid=".f8k3xd"
              >
                <div className="flex flex-wrap gap-2 mb-4" data-oid="opy6xdu">
                  {courseData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#123B79]/10 text-[#123B79] text-sm font-medium rounded-full"
                      data-oid="rrkp32n"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-bold text-[#123B79] mb-6 leading-tight"
                  data-oid="eqokzc3"
                >
                  {courseData.title}
                </h1>

                <p
                  className="text-xl text-gray-700 mb-6 leading-relaxed"
                  data-oid="ix-:npe"
                >
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </p>

                {/* Course Stats */}
                <div
                  className="flex flex-wrap items-center gap-6 mb-6"
                  data-oid="ezv2w5p"
                >
                  <div className="flex items-center" data-oid="oz1r7uj">
                    <div className="flex items-center mr-2" data-oid="ujma4m3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(courseData.rating)
                              ? "text-[#F0A500] fill-[#F0A500]"
                              : "text-gray-300"
                          }`}
                          data-oid="ib1gx8v"
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg" data-oid="y3z33-z">
                      {courseData.rating}
                    </span>
                    <span className="text-gray-500 ml-1" data-oid="ve71mmr">
                      ({courseData.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="_q5-7z8"
                  >
                    <Clock className="h-5 w-5 mr-2" data-oid=".xwmt_g" />
                    <span className="font-medium" data-oid="73ig-8o">
                      {courseData.duration}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="7a4:.my"
                  >
                    <Award className="h-5 w-5 mr-2" data-oid="l4t2y_c" />
                    <span className="font-medium" data-oid=":l1ki:_">
                      {courseData.level}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="8ax98on"
                  >
                    <Calendar className="h-5 w-5 mr-2" data-oid="j588i:e" />
                    <span className="font-medium" data-oid="dp:yaht">
                      Updated {courseData.lastUpdated}
                    </span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="tlkw_8w"
                >
                  <div className="aspect-video relative" data-oid="k.0epp-">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="egbpzaf"
                    />

                    <div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      data-oid="wttvi18"
                    >
                      <button
                        className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors"
                        data-oid="yc52h.l"
                      >
                        <Play
                          className="h-8 w-8 text-[#123B79] ml-1"
                          data-oid="doqjd_x"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="25h52x3"
              >
                <h2
                  className="text-2xl font-bold text-[#123B79] mb-6"
                  data-oid="0-j82l2"
                >
                  What You'll Learn
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="07j6_8h"
                >
                  {Array.isArray(courseData.whatYouWillLearn) &&
                  courseData.whatYouWillLearn.length > 0 ? (
                    courseData.whatYouWillLearn.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="s:kuodj"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="q0x-3z7"
                        />
                        <p
                          className="text-gray-700 font-medium"
                          data-oid="yi2wv8."
                        >
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="ar6f.w0">
                      Learning outcomes will be updated soon.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="lvx0n3h"
              >
                <div
                  className="flex justify-between items-center mb-6"
                  data-oid="q0.fzwe"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79]"
                    data-oid="j:85ttb"
                  >
                    Course Content
                  </h2>
                  <div
                    className="text-sm text-gray-600 font-medium"
                    data-oid="_d0fx:g"
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

                <div className="space-y-3" data-oid="znaan2.">
                  {Array.isArray(courseData.curriculum) &&
                  courseData.curriculum.length > 0 ? (
                    courseData.curriculum.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                        data-oid="1luquos"
                      >
                        <button
                          className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                          onClick={() => toggleModule(moduleIndex)}
                          data-oid="uer1oal"
                        >
                          <div className="flex items-center" data-oid="u_q4tpg">
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid="a1g-ce."
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <span
                              className="ml-4 text-sm text-gray-500"
                              data-oid="sww2arv"
                            >
                              {module.lessons.length} lessons
                            </span>
                          </div>
                          {expandedModules.includes(moduleIndex) ? (
                            <ChevronUp
                              className="h-5 w-5 text-gray-600"
                              data-oid="pgxuti:"
                            />
                          ) : (
                            <ChevronDown
                              className="h-5 w-5 text-gray-600"
                              data-oid="ahvw30y"
                            />
                          )}
                        </button>

                        {expandedModules.includes(moduleIndex) && (
                          <div
                            className="divide-y divide-gray-200"
                            data-oid="gyrwm0z"
                          >
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                                data-oid="3z-ee.2"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid="bdgm8hh"
                                >
                                  <Play
                                    className="h-4 w-4 text-[#123B79] mr-3"
                                    data-oid="cp24dz-"
                                  />
                                  <span
                                    className="text-gray-700 font-medium"
                                    data-oid="5opdze4"
                                  >
                                    {lesson}
                                  </span>
                                </div>
                                <span
                                  className="text-sm text-gray-500"
                                  data-oid="i4bo5na"
                                >
                                  {Math.floor(Math.random() * 15) + 5} min
                                </span>
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
                        data-oid="_infnxz"
                      >
                        <div
                          className="w-full bg-gray-50 px-6 py-4"
                          data-oid="hvpx-kt"
                        >
                          <h3
                            className="font-bold text-[#123B79] text-left"
                            data-oid="y_b._qw"
                          >
                            Section {sectionIndex + 1}: {section.title}
                          </h3>
                        </div>
                        <div className="px-6 py-4" data-oid="kjknub7">
                          <span className="text-gray-700" data-oid="3og6ukr">
                            {section.content}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="4c_ydoh">
                      No course content available.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Instructors */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="lyw-.ac"
              >
                <h2
                  className="text-2xl font-bold text-[#123B79] mb-6"
                  data-oid="si5suz5"
                >
                  Meet Your Instructors
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  data-oid="g41qf83"
                >
                  {Array.isArray(courseData.instructors) &&
                  courseData.instructors.length > 0 ? (
                    courseData.instructors.map((instructor, index) => (
                      <div
                        key={index}
                        className="text-center"
                        data-oid=":ppoeoq"
                      >
                        <InstructorCard
                          name={instructor.name}
                          image={instructor.image}
                          data-oid="g:jve_."
                        />
                      </div>
                    ))
                  ) : (
                    <div
                      className="text-gray-500 col-span-3"
                      data-oid="9jgu2q-"
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
                  data-oid="1.8hj.n"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79] mb-6"
                    data-oid="qgd0oo8"
                  >
                    Course Highlights
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="t4-nrg3"
                  >
                    {courseData.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="13yrg00"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="--00c0u"
                        />
                        <p
                          className="text-gray-700 font-medium"
                          data-oid="oz7fp1z"
                        >
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Who This Course Is For */}
              {courseData.targetAudience && (
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                  data-oid="sx3difj"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79] mb-6"
                    data-oid="uiw5d4j"
                  >
                    Who This Course Is For
                  </h2>
                  <ul className="space-y-3" data-oid="v0e_d2e">
                    {courseData.targetAudience.map((audience, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        data-oid="2lxziyl"
                      >
                        <Users
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="dl5eidp"
                        />
                        <span
                          className="text-gray-700 font-medium"
                          data-oid="292ape2"
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
                data-oid="w5oj:gg"
              >
                <h2
                  ref={reviewsSectionRef}
                  className="text-2xl font-bold text-[#123B79] mb-8"
                  data-oid="3h7s0yr"
                >
                  Student Reviews
                </h2>

                {hasReviews ? (
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-oid="cp3xev3"
                  >
                    {courseData.reviews!.map((review, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        data-oid="dv.pcpb"
                      >
                        <div
                          className="flex justify-between items-start mb-4"
                          data-oid="js6oe4-"
                        >
                          <div data-oid="_leur-w">
                            <h4
                              className="font-bold text-lg"
                              data-oid="6tt..f_"
                            >
                              {review.name}
                            </h4>
                            <div
                              className="flex items-center mt-1"
                              data-oid="_us9-7m"
                            >
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-[#F0A500] fill-[#F0A500]"
                                      : "text-gray-300"
                                  }`}
                                  data-oid="qijqus-"
                                />
                              ))}
                              <span
                                className="ml-2 text-sm text-gray-500"
                                data-oid="e8ljyr5"
                              >
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700" data-oid="34kd4k0">
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
                    data-oid="7s4zdij"
                  >
                    <div className="mb-6 text-gray-300" data-oid="olef9cz">
                      <div
                        className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                        data-oid="ogf9yos"
                      >
                        <MessageCircle
                          className="h-12 w-12"
                          data-oid="cep.fhb"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-semibold text-gray-700 mb-2"
                      data-oid="c_cfi-b"
                    >
                      No Reviews Yet
                    </h3>
                    <p
                      className="text-gray-500 text-center max-w-md mb-6"
                      data-oid="8w:njco"
                    >
                      Be the first to share your experience with this course and
                      help others make informed decisions.
                    </p>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      className="text-[#123B79] border-[#123B79]"
                      data-oid="a91f752"
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
              className={`lg:col-span-4 transition-all duration-300 ${
                isSidebarSticky ? "lg:fixed lg:top-24 lg:right-8" : ""
              }`}
              style={{
                width: isSidebarSticky
                  ? sidebarRef.current?.parentElement?.clientWidth
                    ? (sidebarRef.current.parentElement.clientWidth / 12) * 4 -
                      32
                    : "auto"
                  : "auto",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="ub6pr7."
            >
              {/* Course Preview Card */}
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                data-oid="qpf7dbc"
              >
                {/* Course Preview Image */}
                <div className="relative aspect-video" data-oid="w.tp_d3">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                    data-oid="xnmktfs"
                  />

                  <div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                    data-oid="nbj21k5"
                  >
                    <button
                      className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors group"
                      data-oid="rcr307l"
                    >
                      <Play
                        className="h-8 w-8 text-[#123B79] ml-1 group-hover:scale-110 transition-transform"
                        data-oid=".2azrmo"
                      />
                    </button>
                  </div>
                  <div
                    className="absolute top-4 right-4 bg-[#123B79] text-white text-sm font-bold px-3 py-1 rounded-full"
                    data-oid="w-rm335"
                  >
                    Preview
                  </div>
                </div>

                {/* Quick Summary */}
                <div className="p-6" data-oid="y4.e95j">
                  <div
                    className="flex justify-between items-center mb-6"
                    data-oid="qreuxi3"
                  >
                    <div
                      className="text-3xl font-bold text-[#123B79]"
                      data-oid="_oo7u9z"
                    >
                      {courseData.price}
                    </div>
                    <div className="flex space-x-2" data-oid="010isg0">
                      <button
                        onClick={handleBookmark}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label={
                          isBookmarked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        data-oid="wa4_7tq"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            isBookmarked
                              ? "text-red-500 fill-red-500"
                              : "text-gray-700"
                          }`}
                          data-oid="vnd06y1"
                        />
                      </button>
                      <button
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setIsShareModalOpen(true)}
                        aria-label="Share course"
                        data-oid="ewn781p"
                      >
                        <Share2
                          className="h-5 w-5 text-gray-700"
                          data-oid="vn_ijno"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <Button
                    className="w-full bg-[#123B79] hover:bg-[#0A2A5E] text-white font-bold py-4 text-lg mb-4 rounded-xl"
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
                          type: "Course",
                        });
                        router.push("/cart");
                      }
                    }}
                    data-oid="r25xgqt"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" data-oid="1g6:0xx" />
                    Enroll Now
                  </Button>

                  {/* Secondary CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-[#123B79] text-[#123B79] hover:bg-[#123B79] hover:text-white font-semibold py-3 mb-6 rounded-xl"
                    data-oid="pa0933h"
                  >
                    <Play className="mr-2 h-4 w-4" data-oid="f35r4y." />
                    Preview Course
                  </Button>

                  {/* Course Features */}
                  <div className="space-y-4" data-oid="47oivtn">
                    <h3
                      className="font-bold text-lg text-[#123B79] mb-4"
                      data-oid="4uw:8my"
                    >
                      This course includes:
                    </h3>

                    <div className="space-y-3" data-oid="ml8a.s_">
                      <div className="flex items-center" data-oid="v22uqgc">
                        <Monitor
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="a2igilv"
                        />
                        <div data-oid="gk79ix8">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="giadw9x"
                          >
                            {courseData.duration}
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="za_6dmm"
                          >
                            On-demand video
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="5gxgxcq">
                        <BookOpen
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="j8xpyf7"
                        />
                        <div data-oid="ayunmx7">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="x0y7039"
                          >
                            {totalLessons} lessons
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="5k0h083"
                          >
                            Comprehensive content
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="s20686h">
                        <FileText
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="81-p690"
                        />
                        <div data-oid="uzfcbo2">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="9hh4h25"
                          >
                            Downloadable resources
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="lds4sc8"
                          >
                            PDFs and materials
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="-x8y87y">
                        <Smartphone
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="yb86lf-"
                        />
                        <div data-oid="jyfocwe">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="1u2mv67"
                          >
                            Mobile access
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="hg.1job"
                          >
                            Learn on any device
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="ik7bfux">
                        <Trophy
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="yr4.xj:"
                        />
                        <div data-oid="ul6:48g">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="j41px41"
                          >
                            Certificate of completion
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="x6e7gqq"
                          >
                            Shareable credential
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="lawwdvf">
                        <Infinity
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="62rtfab"
                        />
                        <div data-oid="n7e60sg">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="7zxzlg2"
                          >
                            Lifetime access
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="1syc_mx"
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
                    data-oid="3c.sml."
                  >
                    <div className="grid grid-cols-2 gap-4" data-oid="4.18o1.">
                      <div className="text-center" data-oid="b5pw3tj">
                        <div
                          className="flex items-center justify-center mb-2"
                          data-oid="8a4wm8."
                        >
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-2"
                            data-oid="it4qjtc"
                          />
                          <span
                            className="font-bold text-lg text-gray-900"
                            data-oid="4xrvxrf"
                          >
                            {courseData.students.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid="z-jcj5h">
                          Students enrolled
                        </p>
                      </div>
                      <div className="text-center" data-oid="zgcklad">
                        <div
                          className="flex items-center justify-center mb-2"
                          data-oid="wdsti9p"
                        >
                          <Star
                            className="h-5 w-5 text-[#F0A500] fill-[#F0A500] mr-2"
                            data-oid="xkkt8jr"
                          />
                          <span
                            className="font-bold text-lg text-gray-900"
                            data-oid="fzyfapl"
                          >
                            {courseData.rating}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid="_2a4mm3">
                          Course rating
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Money-back guarantee */}
                  <div
                    className="mt-6 pt-6 border-t border-gray-200"
                    data-oid="6-mr0h-"
                  >
                    <div
                      className="flex items-center justify-center text-center"
                      data-oid="rvqp7l:"
                    >
                      <Shield
                        className="h-5 w-5 text-green-600 mr-2"
                        data-oid="he0vcy6"
                      />
                      <span
                        className="text-sm text-gray-600 font-medium"
                        data-oid="trvggqy"
                      >
                        30-day money-back guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Course Info */}
              <div
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                data-oid="241mm4u"
              >
                <h3
                  className="font-bold text-lg text-[#123B79] mb-4"
                  data-oid="oesvidi"
                >
                  Course Information
                </h3>
                <div className="space-y-3" data-oid="ffl31ei">
                  <div className="flex justify-between" data-oid="_r:gqvc">
                    <span className="text-gray-600" data-oid=":autgor">
                      Level:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="x1zgz4a"
                    >
                      {courseData.level}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="mqo8ogz">
                    <span className="text-gray-600" data-oid="ptlqmwx">
                      Duration:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="_:cufqq"
                    >
                      {courseData.duration}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="4t.-lcx">
                    <span className="text-gray-600" data-oid="xh40t-3">
                      Category:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="7yurymk"
                    >
                      {courseData.category}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="94_667j">
                    <span className="text-gray-600" data-oid="w1sdash">
                      Last Updated:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="rps_z2v"
                    >
                      {courseData.lastUpdated}
                    </span>
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
        data-oid="sm-:n_c"
      >
        <div className="container mx-auto px-4" data-oid="kk0q.o-">
          <h2
            className="text-3xl font-bold text-[#123B79] mb-8 text-center"
            data-oid="nyan:8y"
          >
            Related Courses You Might Like
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="xb.xa53"
          >
            {[
              {
                title: "Financial Modeling Masterclass",
                level: "Advanced",
                duration: "40 hours 45 minutes",
                price: "$1,499",
                image: "/financial-model-dashboard.png",
                slug: "financial-modeling-masterclass",
                rating: 4.8,
                students: 1250,
              },
              {
                title: "Condominium Investment Analysis",
                level: "Intermediate",
                duration: "24 hours 20 minutes",
                price: "$999",
                image: "/singapore-skyline-condos.png",
                slug: "condominium-investment-analysis",
                rating: 4.7,
                students: 890,
              },
              {
                title: "Property Market Trend Analysis",
                level: "Advanced",
                duration: "32 hours 10 minutes",
                price: "$1,199",
                image: "/singapore-skyline-day.png",
                slug: "property-market-trend-analysis",
                rating: 4.9,
                students: 1100,
              },
            ].map((relatedCourse, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                data-oid="5o-g5j:"
              >
                <div className="relative h-48" data-oid="654u8i_">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover"
                    data-oid="zkut4wj"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    data-oid="x5qkf05"
                  ></div>
                  <div
                    className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                    data-oid="n9mnvl3"
                  >
                    {relatedCourse.level}
                  </div>
                  <div
                    className="absolute bottom-4 left-4 text-white"
                    data-oid="_2sl_cr"
                  >
                    <div className="flex items-center mb-1" data-oid="o191scs">
                      <Star
                        className="h-4 w-4 text-[#F0A500] fill-[#F0A500] mr-1"
                        data-oid="xvk3w3k"
                      />
                      <span className="font-semibold" data-oid="zptgt6:">
                        {relatedCourse.rating}
                      </span>
                      <span className="ml-1 text-sm" data-oid="7_jdz5k">
                        ({relatedCourse.students})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6" data-oid="9m6l1hz">
                  <h3
                    className="text-lg font-bold text-[#123B79] mb-2 line-clamp-2"
                    data-oid="8uxkpx3"
                  >
                    {relatedCourse.title}
                  </h3>
                  <div
                    className="text-gray-500 text-sm mb-4 flex items-center"
                    data-oid="kypsqkz"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid="v.wwqxp" />
                    {relatedCourse.duration}
                  </div>
                  <div
                    className="flex justify-between items-center"
                    data-oid="9h58y2e"
                  >
                    <span
                      className="font-bold text-xl text-[#123B79]"
                      data-oid="7-hf.n:"
                    >
                      {relatedCourse.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        router.push(`/courses/${relatedCourse.slug}`)
                      }
                      className="border-[#123B79] text-[#123B79] hover:bg-[#123B79] hover:text-white"
                      data-oid="i9fg89i"
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
        className="py-16 bg-gradient-to-r from-[#123B79] to-[#0A2A5E] text-white"
        data-oid="c.iwg6a"
      >
        <div className="container mx-auto px-4 text-center" data-oid="yfv4geh">
          <h2 className="text-4xl font-bold mb-4" data-oid="0r.ke8u">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            data-oid="8tu_8uj"
          >
            Join {courseData.students.toLocaleString()}+ students who are
            already mastering property investment with expert guidance and
            proven strategies.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-oid="z7rqhvd"
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
                    type: "Course",
                  });
                  router.push("/cart");
                }
              }}
              data-oid="5-awx1a"
            >
              <ShoppingCart className="mr-2 h-5 w-5" data-oid="fq5mt:v" />
              Enroll Now for {courseData.price}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#123B79] font-semibold text-lg px-8 py-4 rounded-xl"
              data-oid="j9j-f62"
            >
              <TrendingUp className="mr-2 h-5 w-5" data-oid="pfct65v" />
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          data-oid="g3fb94_"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="nqwi.lp"
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="2htv-tb"
            >
              <h3 className="font-bold text-lg" data-oid=":kvw:86">
                Share Course
              </h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="0uw9p.6"
              >
                <X className="h-5 w-5" data-oid="b_z2flc" />
              </button>
            </div>
            <div className="p-6" data-oid="o7o0yjh">
              <div className="mb-6" data-oid="rtgsp7p">
                <p className="font-medium mb-2" data-oid="qa1nn25">
                  Page Link
                </p>
                <div className="flex" data-oid="5940b9.">
                  <input
                    type="text"
                    value={`https://assembly.sg/courses/${courseData.slug}`}
                    readOnly
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                    data-oid=":coo9cx"
                  />

                  <button
                    onClick={copyToClipboard}
                    className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                    data-oid="q.:5f2."
                  >
                    {copied ? (
                      <Check className="h-5 w-5" data-oid="u2n9za4" />
                    ) : (
                      <Copy className="h-5 w-5" data-oid="b.-vemx" />
                    )}
                  </button>
                </div>
              </div>

              <div data-oid="d.8get7">
                <p className="font-medium mb-3" data-oid="bn8f4ci">
                  Share on social media
                </p>
                <div className="flex space-x-4" data-oid="gz9z9vc">
                  <button
                    onClick={() => shareOnSocialMedia("facebook")}
                    className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="wol.pt-"
                  >
                    <Facebook className="h-6 w-6" data-oid=".mmgg69" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("twitter")}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="k4t2b:h"
                  >
                    <X className="h-5 w-5" data-oid="4el5z:n" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("linkedin")}
                    className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="kbpf:l5"
                  >
                    <Linkedin className="h-5 w-5" data-oid="t_vou.8" />
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
          data-oid="4t:yq_a"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="avwf_p."
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="6ksm6h2"
            >
              <h3 className="font-bold text-lg" data-oid=":s65:20">
                Login Required
              </h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="7cfe7.k"
              >
                <X className="h-5 w-5" data-oid="ph.pte1" />
              </button>
            </div>
            <div className="p-6" data-oid="mgmwdz1">
              <p className="mb-6" data-oid="f988:mr">
                Please log in to add this course to your wishlist.
              </p>
              <div className="space-y-4" data-oid="sp5qn6.">
                <div data-oid="xpq9nzt">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="2:hxawm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="your@email.com"
                    data-oid="z5m.csq"
                  />
                </div>
                <div data-oid="u1tbtpi">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="90da.ej"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    data-oid="1df7t-0"
                  />
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                  data-oid="i9qzu01"
                >
                  Log In
                </Button>
                <div
                  className="text-center text-sm text-gray-500"
                  data-oid="a8gt--h"
                >
                  <a
                    href="/forgot-password"
                    className="text-[#123B79] hover:underline"
                    data-oid="fub29oo"
                  >
                    Forgot password?
                  </a>
                  <span className="mx-2" data-oid="cr5ol4a">
                    •
                  </span>
                  <a
                    href="/signup"
                    className="text-[#123B79] hover:underline"
                    data-oid="zy2nyoe"
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
  );
}
