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
    <main className="relative bg-gray-50 min-h-screen" data-oid="ws-_tnc">
      <Navbar data-oid="4.lki::" />

      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="pt-32 pb-8 bg-white"
        data-oid="831x7_1"
      >
        <div className="container mx-auto px-4" data-oid="n04ro-n">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            data-oid="tjgvl6:"
          >
            <a
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline font-medium"
              data-oid="4fd9gd8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="kgca0el" />
              Back to Courses
            </a>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            data-oid="kf.1ojx"
          >
            {/* Main Content - Takes up 8/12 columns */}
            <motion.div
              ref={mainContentRef}
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="raw:x_c"
            >
              {/* Course Header */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="9fffn8j"
              >
                <div className="flex flex-wrap gap-2 mb-4" data-oid="floeq8l">
                  {courseData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#123B79]/10 text-[#123B79] text-sm font-medium rounded-full"
                      data-oid="81c9s9c"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-bold text-[#123B79] mb-6 leading-tight"
                  data-oid="go291ux"
                >
                  {courseData.title}
                </h1>

                <p
                  className="text-xl text-gray-700 mb-6 leading-relaxed"
                  data-oid="0g1j2dm"
                >
                  {typeof courseData.description === "string"
                    ? courseData.description
                    : courseData.description}
                </p>

                {/* Course Stats */}
                <div
                  className="flex flex-wrap items-center gap-6 mb-6"
                  data-oid="gwftjtc"
                >
                  <div className="flex items-center" data-oid="3joof5r">
                    <div className="flex items-center mr-2" data-oid="cho4akc">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(courseData.rating)
                              ? "text-[#F0A500] fill-[#F0A500]"
                              : "text-gray-300"
                          }`}
                          data-oid="dr9fbze"
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg" data-oid="u0qz4k7">
                      {courseData.rating}
                    </span>
                    <span className="text-gray-500 ml-1" data-oid="ecjiqdw">
                      ({courseData.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="ayelpbm"
                  >
                    <Clock className="h-5 w-5 mr-2" data-oid="29kcon3" />
                    <span className="font-medium" data-oid="1bh-5jo">
                      {courseData.duration}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="4bydczq"
                  >
                    <Award className="h-5 w-5 mr-2" data-oid="tqtpyje" />
                    <span className="font-medium" data-oid="e:byj-i">
                      {courseData.level}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="r1hp0vs"
                  >
                    <Calendar className="h-5 w-5 mr-2" data-oid="nuupy9f" />
                    <span className="font-medium" data-oid="o1g-pen">
                      Updated {courseData.lastUpdated}
                    </span>
                  </div>
                </div>

                {/* Course Image for Mobile */}
                <div
                  className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                  data-oid="ebho020"
                >
                  <div className="aspect-video relative" data-oid="3o16scz">
                    <Image
                      src={courseData.image || "/placeholder.svg"}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                      data-oid="nvdg:pn"
                    />

                    <div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      data-oid="1z59d0y"
                    >
                      <button
                        className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors"
                        data-oid="ewpm9hd"
                      >
                        <Play
                          className="h-8 w-8 text-[#123B79] ml-1"
                          data-oid="i6ewelv"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="dp1q6pq"
              >
                <h2
                  className="text-2xl font-bold text-[#123B79] mb-6"
                  data-oid="rnzkwa."
                >
                  What You'll Learn
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="vgz._o3"
                >
                  {Array.isArray(courseData.whatYouWillLearn) &&
                  courseData.whatYouWillLearn.length > 0 ? (
                    courseData.whatYouWillLearn.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="kqr_.jv"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="ykv7k2t"
                        />
                        <p
                          className="text-gray-700 font-medium"
                          data-oid="i8.stie"
                        >
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="zq.kc7k">
                      Learning outcomes will be updated soon.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="ag84mhj"
              >
                <div
                  className="flex justify-between items-center mb-6"
                  data-oid=":65bx.p"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79]"
                    data-oid="t2c9gtg"
                  >
                    Course Content
                  </h2>
                  <div
                    className="text-sm text-gray-600 font-medium"
                    data-oid="f4o5ioa"
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

                <div className="space-y-3" data-oid="xadpvw7">
                  {Array.isArray(courseData.curriculum) &&
                  courseData.curriculum.length > 0 ? (
                    courseData.curriculum.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                        data-oid="6_fj8:5"
                      >
                        <button
                          className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                          onClick={() => toggleModule(moduleIndex)}
                          data-oid="0rztdoy"
                        >
                          <div className="flex items-center" data-oid="fmly0zj">
                            <h3
                              className="font-bold text-[#123B79] text-left"
                              data-oid=":q43x2d"
                            >
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                            <span
                              className="ml-4 text-sm text-gray-500"
                              data-oid="3dzoo_e"
                            >
                              {module.lessons.length} lessons
                            </span>
                          </div>
                          {expandedModules.includes(moduleIndex) ? (
                            <ChevronUp
                              className="h-5 w-5 text-gray-600"
                              data-oid="u-9a5u8"
                            />
                          ) : (
                            <ChevronDown
                              className="h-5 w-5 text-gray-600"
                              data-oid="49c-9gj"
                            />
                          )}
                        </button>

                        {expandedModules.includes(moduleIndex) && (
                          <div
                            className="divide-y divide-gray-200"
                            data-oid="b32554t"
                          >
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                                data-oid="u-ngr-6"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid="nc6rlas"
                                >
                                  <Play
                                    className="h-4 w-4 text-[#123B79] mr-3"
                                    data-oid="083s7fm"
                                  />
                                  <span
                                    className="text-gray-700 font-medium"
                                    data-oid="n8b__8o"
                                  >
                                    {lesson}
                                  </span>
                                </div>
                                <span
                                  className="text-sm text-gray-500"
                                  data-oid="rwt2rzi"
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
                        data-oid="vnr7cj3"
                      >
                        <div
                          className="w-full bg-gray-50 px-6 py-4"
                          data-oid="z1a430y"
                        >
                          <h3
                            className="font-bold text-[#123B79] text-left"
                            data-oid="zl2wbi5"
                          >
                            Section {sectionIndex + 1}: {section.title}
                          </h3>
                        </div>
                        <div className="px-6 py-4" data-oid="5zdl37.">
                          <span className="text-gray-700" data-oid="5m-srt7">
                            {section.content}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="pu0lp6a">
                      No course content available.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Instructors */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6"
                data-oid="porjufo"
              >
                <h2
                  className="text-2xl font-bold text-[#123B79] mb-6"
                  data-oid=".gxjm8n"
                >
                  Meet Your Instructors
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  data-oid="gw14xcb"
                >
                  {Array.isArray(courseData.instructors) &&
                  courseData.instructors.length > 0 ? (
                    courseData.instructors.map((instructor, index) => (
                      <div
                        key={index}
                        className="text-center"
                        data-oid="hg4g4aw"
                      >
                        <InstructorCard
                          name={instructor.name}
                          image={instructor.image}
                          data-oid="6cez_yd"
                        />
                      </div>
                    ))
                  ) : (
                    <div
                      className="text-gray-500 col-span-3"
                      data-oid="w.eixku"
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
                  data-oid="imvq92r"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79] mb-6"
                    data-oid="y.d2r.i"
                  >
                    Course Highlights
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="61sg-04"
                  >
                    {courseData.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="iksvin9"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="z.wowax"
                        />
                        <p
                          className="text-gray-700 font-medium"
                          data-oid="sd2xq0q"
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
                  data-oid="5g.x7ex"
                >
                  <h2
                    className="text-2xl font-bold text-[#123B79] mb-6"
                    data-oid="u0b5pos"
                  >
                    Who This Course Is For
                  </h2>
                  <ul className="space-y-3" data-oid="fz__cg_">
                    {courseData.targetAudience.map((audience, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        data-oid="-zi.2hp"
                      >
                        <Users
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="8-yt9:7"
                        />
                        <span
                          className="text-gray-700 font-medium"
                          data-oid="_f76ri2"
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
                data-oid="1jenua_"
              >
                <h2
                  ref={reviewsSectionRef}
                  className="text-2xl font-bold text-[#123B79] mb-8"
                  data-oid="3tejxro"
                >
                  Student Reviews
                </h2>

                {hasReviews ? (
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-oid="x7:ltv."
                  >
                    {courseData.reviews!.map((review, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        data-oid="nhnw9y4"
                      >
                        <div
                          className="flex justify-between items-start mb-4"
                          data-oid="v:iyabt"
                        >
                          <div data-oid="5mibt0h">
                            <h4
                              className="font-bold text-lg"
                              data-oid="jntj.d1"
                            >
                              {review.name}
                            </h4>
                            <div
                              className="flex items-center mt-1"
                              data-oid="lht95nq"
                            >
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-[#F0A500] fill-[#F0A500]"
                                      : "text-gray-300"
                                  }`}
                                  data-oid="o3m-xs2"
                                />
                              ))}
                              <span
                                className="ml-2 text-sm text-gray-500"
                                data-oid="6_m1a6y"
                              >
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700" data-oid="jn:22tb">
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
                    data-oid="bz-u8gg"
                  >
                    <div className="mb-6 text-gray-300" data-oid="f2dlh-d">
                      <div
                        className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                        data-oid="kker:66"
                      >
                        <MessageCircle
                          className="h-12 w-12"
                          data-oid="60ouh62"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-semibold text-gray-700 mb-2"
                      data-oid="r00_aj1"
                    >
                      No Reviews Yet
                    </h3>
                    <p
                      className="text-gray-500 text-center max-w-md mb-6"
                      data-oid="f4uov2d"
                    >
                      Be the first to share your experience with this course and
                      help others make informed decisions.
                    </p>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      className="text-[#123B79] border-[#123B79]"
                      data-oid="65cap2j"
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
              data-oid="aiz0tzz"
            >
              {/* Course Preview Card */}
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                data-oid="97.uz1y"
              >
                {/* Course Preview Image */}
                <div className="relative aspect-video" data-oid="f-u-s8h">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                    data-oid="wi:c7bs"
                  />

                  <div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                    data-oid="_12xezd"
                  >
                    <button
                      className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors group"
                      data-oid="-2_xbf7"
                    >
                      <Play
                        className="h-8 w-8 text-[#123B79] ml-1 group-hover:scale-110 transition-transform"
                        data-oid="giq79qj"
                      />
                    </button>
                  </div>
                  <div
                    className="absolute top-4 right-4 bg-[#123B79] text-white text-sm font-bold px-3 py-1 rounded-full"
                    data-oid="9ycagcl"
                  >
                    Preview
                  </div>
                </div>

                {/* Quick Summary */}
                <div className="p-6" data-oid="b_7ib0t">
                  <div
                    className="flex justify-between items-center mb-6"
                    data-oid="mj8j2a8"
                  >
                    <div
                      className="text-3xl font-bold text-[#123B79]"
                      data-oid="6h5v3gu"
                    >
                      {courseData.price}
                    </div>
                    <div className="flex space-x-2" data-oid="njvu95i">
                      <button
                        onClick={handleBookmark}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label={
                          isBookmarked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        data-oid="6gq1f4_"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            isBookmarked
                              ? "text-red-500 fill-red-500"
                              : "text-gray-700"
                          }`}
                          data-oid="19o83:0"
                        />
                      </button>
                      <button
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setIsShareModalOpen(true)}
                        aria-label="Share course"
                        data-oid="-:4tmj_"
                      >
                        <Share2
                          className="h-5 w-5 text-gray-700"
                          data-oid="0agchv."
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
                    data-oid="e_6-wyq"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" data-oid="kihb4_5" />
                    Enroll Now
                  </Button>

                  {/* Secondary CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-[#123B79] text-[#123B79] hover:bg-[#123B79] hover:text-white font-semibold py-3 mb-6 rounded-xl"
                    data-oid="m9gxozj"
                  >
                    <Play className="mr-2 h-4 w-4" data-oid="67hxz-n" />
                    Preview Course
                  </Button>

                  {/* Course Features */}
                  <div className="space-y-4" data-oid="ew8ag03">
                    <h3
                      className="font-bold text-lg text-[#123B79] mb-4"
                      data-oid="_1dv8d4"
                    >
                      This course includes:
                    </h3>

                    <div className="space-y-3" data-oid="uaz0yp-">
                      <div className="flex items-center" data-oid="xseds6r">
                        <Monitor
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="tki6q6k"
                        />
                        <div data-oid="qj_wkls">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="b.uayjc"
                          >
                            {courseData.duration}
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="3obsefh"
                          >
                            On-demand video
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="qdqoeme">
                        <BookOpen
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="zo.8-b0"
                        />
                        <div data-oid="jjl.2mt">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="6kur1bc"
                          >
                            {totalLessons} lessons
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="nntpmb5"
                          >
                            Comprehensive content
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="o7eko3f">
                        <FileText
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid=".malvbn"
                        />
                        <div data-oid="10i2c_s">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid=".zvftsr"
                          >
                            Downloadable resources
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="6svh6zo"
                          >
                            PDFs and materials
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="uyx0ih4">
                        <Smartphone
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="_qbo6rp"
                        />
                        <div data-oid="b:nq9yq">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="ibc81wp"
                          >
                            Mobile access
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="8j7oiow"
                          >
                            Learn on any device
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid="10m3knr">
                        <Trophy
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="lztdkl7"
                        />
                        <div data-oid="dbf.mae">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="be9.ouw"
                          >
                            Certificate of completion
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="90ahem1"
                          >
                            Shareable credential
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center" data-oid=":d4g9h4">
                        <Infinity
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0"
                          data-oid="r4ll.z-"
                        />
                        <div data-oid="06ao6u.">
                          <p
                            className="font-semibold text-gray-900"
                            data-oid="_ll9-e9"
                          >
                            Lifetime access
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="lubp7-k"
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
                    data-oid="i99r:it"
                  >
                    <div className="grid grid-cols-2 gap-4" data-oid="epn4-xp">
                      <div className="text-center" data-oid="ro-vuvi">
                        <div
                          className="flex items-center justify-center mb-2"
                          data-oid="7d.dmxo"
                        >
                          <Users
                            className="h-5 w-5 text-[#123B79] mr-2"
                            data-oid="jgbzn8q"
                          />
                          <span
                            className="font-bold text-lg text-gray-900"
                            data-oid=":sy66-q"
                          >
                            {courseData.students.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid="fqx19d7">
                          Students enrolled
                        </p>
                      </div>
                      <div className="text-center" data-oid="5t4dkgz">
                        <div
                          className="flex items-center justify-center mb-2"
                          data-oid="unyu1-0"
                        >
                          <Star
                            className="h-5 w-5 text-[#F0A500] fill-[#F0A500] mr-2"
                            data-oid="9szuv85"
                          />
                          <span
                            className="font-bold text-lg text-gray-900"
                            data-oid="b2w6mqk"
                          >
                            {courseData.rating}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600" data-oid="jlhkj9n">
                          Course rating
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Money-back guarantee */}
                  <div
                    className="mt-6 pt-6 border-t border-gray-200"
                    data-oid="6040nkh"
                  >
                    <div
                      className="flex items-center justify-center text-center"
                      data-oid="pt4o2j5"
                    >
                      <Shield
                        className="h-5 w-5 text-green-600 mr-2"
                        data-oid="w5z:0xy"
                      />
                      <span
                        className="text-sm text-gray-600 font-medium"
                        data-oid="l-j9u:b"
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
                data-oid="xh8h_4q"
              >
                <h3
                  className="font-bold text-lg text-[#123B79] mb-4"
                  data-oid="vmv9q9t"
                >
                  Course Information
                </h3>
                <div className="space-y-3" data-oid="ii2_rg7">
                  <div className="flex justify-between" data-oid="87h_43:">
                    <span className="text-gray-600" data-oid="nr8n72r">
                      Level:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="4ls23t7"
                    >
                      {courseData.level}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="4qudjtl">
                    <span className="text-gray-600" data-oid="j6jwkf7">
                      Duration:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="3yyoht4"
                    >
                      {courseData.duration}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="93u0wlj">
                    <span className="text-gray-600" data-oid="2upm4h7">
                      Category:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="ic3grzr"
                    >
                      {courseData.category}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="7a_gea.">
                    <span className="text-gray-600" data-oid="vfy12od">
                      Last Updated:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      data-oid="6046.7y"
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
        data-oid="3c07ygv"
      >
        <div className="container mx-auto px-4" data-oid="a4nu-fm">
          <h2
            className="text-3xl font-bold text-[#123B79] mb-8 text-center"
            data-oid="a3cz:dm"
          >
            Related Courses You Might Like
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="2pnax9:"
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
                data-oid=".a9d7q_"
              >
                <div className="relative h-48" data-oid="vg.uvbv">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover"
                    data-oid="toa7ffk"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    data-oid="aa8t-bm"
                  ></div>
                  <div
                    className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                    data-oid="1bnhi34"
                  >
                    {relatedCourse.level}
                  </div>
                  <div
                    className="absolute bottom-4 left-4 text-white"
                    data-oid="p02f-2s"
                  >
                    <div className="flex items-center mb-1" data-oid=":36q7h0">
                      <Star
                        className="h-4 w-4 text-[#F0A500] fill-[#F0A500] mr-1"
                        data-oid="04jhncl"
                      />
                      <span className="font-semibold" data-oid=":lfr5lp">
                        {relatedCourse.rating}
                      </span>
                      <span className="ml-1 text-sm" data-oid="1t0xk1_">
                        ({relatedCourse.students})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6" data-oid="tj_c_.:">
                  <h3
                    className="text-lg font-bold text-[#123B79] mb-2 line-clamp-2"
                    data-oid="5z-qg9_"
                  >
                    {relatedCourse.title}
                  </h3>
                  <div
                    className="text-gray-500 text-sm mb-4 flex items-center"
                    data-oid="4vkz1n6"
                  >
                    <Clock className="h-4 w-4 mr-1" data-oid="cdshh62" />
                    {relatedCourse.duration}
                  </div>
                  <div
                    className="flex justify-between items-center"
                    data-oid="f4y-8kc"
                  >
                    <span
                      className="font-bold text-xl text-[#123B79]"
                      data-oid="qe0r4n-"
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
                      data-oid="vuylc07"
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
        data-oid="i-cinn4"
      >
        <div className="container mx-auto px-4 text-center" data-oid="_pgw9fk">
          <h2 className="text-4xl font-bold mb-4" data-oid="40swhcu">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            data-oid="q0:n7x:"
          >
            Join {courseData.students.toLocaleString()}+ students who are
            already mastering property investment with expert guidance and
            proven strategies.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-oid="gvg-ir4"
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
              data-oid="5pp0fb9"
            >
              <ShoppingCart className="mr-2 h-5 w-5" data-oid="rdnd-jy" />
              Enroll Now for {courseData.price}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#123B79] font-semibold text-lg px-8 py-4 rounded-xl"
              data-oid="po4np96"
            >
              <TrendingUp className="mr-2 h-5 w-5" data-oid="e-k7djy" />
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          data-oid="qz79dav"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="m.p-0cz"
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="2p0gcxk"
            >
              <h3 className="font-bold text-lg" data-oid="i.hpbl7">
                Share Course
              </h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="-9u5nlk"
              >
                <X className="h-5 w-5" data-oid="bel90cw" />
              </button>
            </div>
            <div className="p-6" data-oid=":nfq3jy">
              <div className="mb-6" data-oid="5:2yed5">
                <p className="font-medium mb-2" data-oid="rx8tmkg">
                  Page Link
                </p>
                <div className="flex" data-oid="fz_o_ak">
                  <input
                    type="text"
                    value={`https://assembly.sg/courses/${courseData.slug}`}
                    readOnly
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                    data-oid="28.uk0x"
                  />

                  <button
                    onClick={copyToClipboard}
                    className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                    data-oid="q965c27"
                  >
                    {copied ? (
                      <Check className="h-5 w-5" data-oid="spm7:l3" />
                    ) : (
                      <Copy className="h-5 w-5" data-oid="p66:71x" />
                    )}
                  </button>
                </div>
              </div>

              <div data-oid="k5-9hld">
                <p className="font-medium mb-3" data-oid="m17xo6:">
                  Share on social media
                </p>
                <div className="flex space-x-4" data-oid="e4:i.l2">
                  <button
                    onClick={() => shareOnSocialMedia("facebook")}
                    className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="11jf-s:"
                  >
                    <Facebook className="h-6 w-6" data-oid="-jmn4:e" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("twitter")}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="gq1ay_l"
                  >
                    <X className="h-5 w-5" data-oid="750:zx1" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("linkedin")}
                    className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="k9e91k4"
                  >
                    <Linkedin className="h-5 w-5" data-oid="qg7o8lj" />
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
          data-oid="61tlt21"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="9i:oou5"
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="4ill9gr"
            >
              <h3 className="font-bold text-lg" data-oid="-130w7z">
                Login Required
              </h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="noc9_i5"
              >
                <X className="h-5 w-5" data-oid="_3ud53." />
              </button>
            </div>
            <div className="p-6" data-oid="cpezrk.">
              <p className="mb-6" data-oid="_svz8ws">
                Please log in to add this course to your wishlist.
              </p>
              <div className="space-y-4" data-oid="wty7ir6">
                <div data-oid="pixc04t">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="t4fv9.o"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="your@email.com"
                    data-oid="13jg-_3"
                  />
                </div>
                <div data-oid="nvpeye2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="3hug4q9"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    data-oid="zez.qhy"
                  />
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                  data-oid="fsos29_"
                >
                  Log In
                </Button>
                <div
                  className="text-center text-sm text-gray-500"
                  data-oid="__3s6z3"
                >
                  <a
                    href="/forgot-password"
                    className="text-[#123B79] hover:underline"
                    data-oid="iloa46q"
                  >
                    Forgot password?
                  </a>
                  <span className="mx-2" data-oid=".dtl6xu">
                    •
                  </span>
                  <a
                    href="/signup"
                    className="text-[#123B79] hover:underline"
                    data-oid="mm8n_1r"
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
