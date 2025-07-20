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
  const [expandedModules, setExpandedModules] = useState<number[]>([0]); // First module expanded by default
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
    <main className="relative bg-white min-h-screen" data-oid="4vgz3jp">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="pt-32 pb-16" data-oid="phfyo0h">
        <div className="container mx-auto px-4" data-oid="2llei2m">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            data-oid="_40dhyk"
          >
            <a
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="_.j6xw."
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="ji1mqsa" />
              Back to Courses
            </a>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-oid="gsqye9y"
          >
            {/* Main Content - Takes up 2/3 of the space */}
            <motion.div
              ref={mainContentRef}
              className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="qb4uu8s"
            >
              <h1
                className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm"
                data-oid="58egc2q"
              >
                {courseData.title}
              </h1>

              <div
                className="flex flex-wrap items-center gap-4 mb-6"
                data-oid="yy:5t7j"
              >
                <div className="flex items-center" data-oid="b-m6oia">
                  <Star
                    className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                    data-oid="vip3ypw"
                  />

                  <span className="ml-1 font-semibold" data-oid="q0i94-_">
                    {courseData.rating}
                  </span>
                  <span className="ml-1 text-gray-500" data-oid="v87ve3d">
                    ({courseData.students} students)
                  </span>
                </div>
                <div
                  className="flex items-center text-gray-600"
                  data-oid="isc3.7m"
                >
                  <Clock className="h-4 w-4 mr-1" data-oid="l-s3vij" />
                  <span data-oid="lu6rskm">{courseData.duration}</span>
                </div>
                <div
                  className="flex items-center text-gray-600"
                  data-oid="t23va1w"
                >
                  <Calendar className="h-4 w-4 mr-1" data-oid="jgt14e3" />
                  <span data-oid="j8t47ke">
                    Last updated: {courseData.lastUpdated}
                  </span>
                </div>
                <div
                  className="flex items-center text-gray-600"
                  data-oid="01:ds_n"
                >
                  <Award className="h-4 w-4 mr-1" data-oid="i324f.7" />
                  <span data-oid="ewqd8yk">{courseData.level}</span>
                </div>
              </div>

              {/* Course Image for Mobile */}
              <div
                className="lg:hidden mb-6 relative rounded-xl overflow-hidden"
                data-oid="o336krc"
              >
                <div className="aspect-video relative" data-oid=":avta66">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                    data-oid="4yqv0us"
                  />
                </div>
              </div>

              <div className="text-lg text-gray-700 mb-8" data-oid="s.61svn">
                {typeof courseData.description === "string"
                  ? courseData.description
                  : courseData.description}
              </div>

              {/* Instructors Section - Updated to display side by side */}
              <div className="mb-8" data-oid="unyctl9">
                <h2
                  className="font-semibold text-xl text-[#123B79] mb-4"
                  data-oid="_pge1:c"
                >
                  Course Instructors
                </h2>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  data-oid="-dp9r0-"
                >
                  <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    data-oid="r3:ers6"
                  >
                    {Array.isArray(courseData.instructors) &&
                    courseData.instructors.length > 0 ? (
                      courseData.instructors.map((instructor, index) => (
                        <InstructorCard
                          key={index}
                          name={instructor.name}
                          image={instructor.image}
                          data-oid="6z..ugq"
                        />
                      ))
                    ) : (
                      <div
                        className="text-gray-500 col-span-4"
                        data-oid="468ve.y"
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
                  data-oid="j4413js"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="w804y6r"
                  >
                    Course Highlights
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="tc1-1up"
                  >
                    {courseData.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="q2:j:re"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="2:95cb0"
                        />

                        <p className="text-gray-700" data-oid="uvavsuo">
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
                data-oid="vxfd5xu"
              >
                <h2
                  className="text-xl font-bold text-[#123B79] mb-4"
                  data-oid=":l7eex4"
                >
                  What You'll Learn
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="ycxmckj"
                >
                  {Array.isArray(courseData.whatYouWillLearn) &&
                  courseData.whatYouWillLearn.length > 0 ? (
                    courseData.whatYouWillLearn.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        data-oid="yyqo:ty"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5"
                          data-oid="86:jfyl"
                        />

                        <p className="text-gray-700" data-oid="wlv:50p">
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="ygjto8k">
                      Learning outcomes will be updated soon.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div
                className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                data-oid="45b54:_"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="zjljl06"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79]"
                    data-oid="wcih0rj"
                  >
                    Course Content
                  </h2>
                  <div className="text-sm text-gray-600" data-oid="cohuiq9">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0
                      ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                      : Array.isArray(courseData.sections) &&
                          courseData.sections.length > 0
                        ? `${courseData.sections.length} sections • ${courseData.duration}`
                        : courseData.duration}
                  </div>
                </div>

                <div className="space-y-4" data-oid="gxsll6f">
                  {Array.isArray(courseData.curriculum) &&
                  courseData.curriculum.length > 0 ? (
                    courseData.curriculum.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                        data-oid="su2mz-f"
                      >
                        <button
                          className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                          onClick={() => toggleModule(moduleIndex)}
                          data-oid="_lpxe.m"
                        >
                          <h3
                            className="font-bold text-[#123B79] text-left"
                            data-oid="mf210w1"
                          >
                            Module {moduleIndex + 1}: {module.title}
                          </h3>
                          <div className="flex items-center" data-oid="a1plsoo">
                            {expandedModules.includes(moduleIndex) ? (
                              <ChevronUp
                                className="h-5 w-5 text-gray-600"
                                data-oid="cb1xej8"
                              />
                            ) : (
                              <ChevronDown
                                className="h-5 w-5 text-gray-600"
                                data-oid="yax_it2"
                              />
                            )}
                          </div>
                        </button>

                        {expandedModules.includes(moduleIndex) && (
                          <div
                            className="divide-y divide-gray-200"
                            data-oid="acqbc6j"
                          >
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="px-6 py-4 flex items-center"
                                data-oid="j:.ht4a"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid="38ujl4:"
                                >
                                  <BookOpen
                                    className="h-4 w-4 text-[#123B79] mr-3"
                                    data-oid="l3-ek9:"
                                  />

                                  <span
                                    className="text-gray-700"
                                    data-oid="yzaf74h"
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
                        data-oid="adn-ys4"
                      >
                        <div
                          className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center"
                          data-oid="_87ljxs"
                        >
                          <h3
                            className="font-bold text-[#123B79] text-left"
                            data-oid="0wb.80b"
                          >
                            Section {sectionIndex + 1}: {section.title}
                          </h3>
                        </div>
                        <div className="px-6 py-4" data-oid="8fmjx8x">
                          <span className="text-gray-700" data-oid="1bxxtmg">
                            {section.content}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500" data-oid="73.rclx">
                      No course content available.
                    </div>
                  )}
                </div>
              </div>

              {/* Who This Course Is For */}
              {courseData.targetAudience && (
                <div
                  className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                  data-oid="ep10fm0"
                >
                  <h2
                    className="text-xl font-bold text-[#123B79] mb-4"
                    data-oid="ip3c5d3"
                  >
                    Who This Course Is For
                  </h2>
                  <ul
                    className="list-disc pl-5 space-y-2 text-gray-700"
                    data-oid="rqlbkym"
                  >
                    {courseData.targetAudience.map((audience, index) => (
                      <li key={index} data-oid="n9vfih:">
                        {audience}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Student Testimonials - Now part of the main content */}
              <div
                className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100"
                data-oid=".:uwtjk"
              >
                <h2
                  ref={reviewsSectionRef}
                  className="text-2xl font-bold text-[#123B79] mb-8"
                  data-oid="xh-4951"
                >
                  What Our Students Say
                </h2>

                {hasReviews ? (
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    data-oid="f-uru7g"
                  >
                    {courseData.reviews!.map((review, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        data-oid="kvjx_fa"
                      >
                        <div
                          className="flex justify-between items-start mb-4"
                          data-oid="-h_.e.2"
                        >
                          <div data-oid="4uvjspj">
                            <h4 className="font-bold" data-oid="et0zxrh">
                              {review.name}
                            </h4>
                            <div
                              className="flex items-center mt-1"
                              data-oid="u0h5r-q"
                            >
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-[#F0A500] fill-[#F0A500]"
                                      : "text-gray-300"
                                  }`}
                                  data-oid="uus5r_6"
                                />
                              ))}
                              <span
                                className="ml-2 text-sm text-gray-500"
                                data-oid="mowlzg7"
                              >
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700" data-oid="ycjmx7_">
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
                    data-oid="4rkmrhv"
                  >
                    <div className="mb-6 text-gray-300" data-oid="uemnmhp">
                      <div
                        className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2"
                        data-oid="srb4xkf"
                      >
                        <MessageCircle
                          className="h-12 w-12"
                          data-oid="7bg.u.a"
                        />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-semibold text-gray-700 mb-2"
                      data-oid="pgf:8cy"
                    >
                      No Reviews Yet
                    </h3>
                    <p
                      className="text-gray-500 text-center max-w-md mb-6"
                      data-oid="dq33pdl"
                    >
                      Be the first to share your experience with this course and
                      help others make informed decisions.
                    </p>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      className="text-[#123B79] border-[#123B79]"
                      data-oid="4cl:t0t"
                    >
                      Write a Review
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Sidebar - Takes up 1/3 of the space, no longer sticky */}
            <motion.div
              ref={sidebarRef}
              className={`lg:col-span-1 transition-all duration-300 ${
                isSidebarSticky ? "lg:fixed lg:top-24 lg:right-24" : ""
              }`}
              style={{
                width: isSidebarSticky
                  ? sidebarRef.current?.parentElement?.clientWidth
                    ? sidebarRef.current.parentElement.clientWidth / 3 - 32
                    : "auto"
                  : "auto",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="gqsudm3"
            >
              {/* Course Preview Image - Desktop Only */}
              <div
                className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg"
                data-oid="j3-z13-"
              >
                <div className="aspect-video relative" data-oid="w-v.psq">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                    data-oid="w7k_.2j"
                  />
                </div>
              </div>

              {/* Enrollment Card */}
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6"
                data-oid="2_2ntu."
              >
                <div className="p-6" data-oid=".0.c.3m">
                  <div
                    className="flex justify-between items-center mb-4"
                    data-oid="hx9vbwz"
                  >
                    <div
                      className="text-3xl font-bold text-[#123B79]"
                      data-oid="zsbvo:w"
                    >
                      {courseData.price}
                    </div>
                    <div className="flex space-x-2" data-oid="bm5-cpy">
                      <button
                        onClick={handleBookmark}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label={
                          isBookmarked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        data-oid="k-w5.x9"
                      >
                        {isBookmarked ? (
                          <BookOpen
                            className="h-5 w-5 text-[#F0A500] fill-[#F0A500]"
                            data-oid="vuom5si"
                          />
                        ) : (
                          <BookOpen
                            className="h-5 w-5 text-gray-700"
                            data-oid="ii.gi65"
                          />
                        )}
                      </button>
                      <button
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setIsShareModalOpen(true)}
                        aria-label="Share course"
                        data-oid="x-yj98e"
                      >
                        <Share2
                          className="h-5 w-5 text-gray-700"
                          data-oid="y5q4x94"
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
                          id: String(courseData.id),
                          title: courseData.title,
                          slug: courseData.slug,
                          price: courseData.price,
                          image: courseData.image,
                          type: "Course",
                        });
                        router.push("/cart"); // Optionally navigate to cart
                      } else {
                        // Free course: enroll or redirect logic (if any)
                        // For now, just show a message or redirect
                      }
                    }}
                    data-oid="ve9lcy1"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" data-oid="-ah5djk" />
                    Enroll Now
                  </Button>

                  <div className="space-y-4 mt-6" data-oid="pko1qit">
                    <div className="flex items-center" data-oid="cdvw4ej">
                      <Clock
                        className="h-5 w-5 text-[#123B79] mr-3"
                        data-oid="lglwqu2"
                      />

                      <div data-oid="qelm-wm">
                        <p className="font-semibold" data-oid=":ecb227">
                          Course Duration
                        </p>
                        <p className="text-sm text-gray-600" data-oid="nzi-w8o">
                          {courseData.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center" data-oid="10sduw3">
                      <Users
                        className="h-5 w-5 text-[#123B79] mr-3"
                        data-oid=".pvlsi0"
                      />

                      <div data-oid="5e9ntry">
                        <p className="font-semibold" data-oid="zw3posr">
                          Total Enrolled
                        </p>
                        <p className="text-sm text-gray-600" data-oid="7muo2l3">
                          {courseData.students}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center" data-oid="hul1.q7">
                      <BarChart
                        className="h-5 w-5 text-[#123B79] mr-3"
                        data-oid="2l.nhjx"
                      />

                      <div data-oid="343ckr4">
                        <p className="font-semibold" data-oid="9k.687u">
                          Course Level
                        </p>
                        <p className="text-sm text-gray-600" data-oid="a00k_-f">
                          {courseData.level}
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

      {/* Rest of the component remains the same */}
      {/* Related Courses */}
      <section
        ref={relatedCoursesRef}
        className="py-16 bg-gray-50 border-y border-gray-100"
        data-oid="_u:_yi:"
      >
        <div className="container mx-auto px-4" data-oid="dl1bsxn">
          <h2
            className="text-2xl font-bold text-[#123B79] mb-8"
            data-oid="l6rj83u"
          >
            Related Courses You Might Like
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="spa.jiz"
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
                data-oid="plehf:q"
              >
                <div className="relative h-48" data-oid="039yy:8">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover"
                    data-oid="chcn2::"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    data-oid="axqpnes"
                  ></div>
                  <div
                    className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full"
                    data-oid="0gbcsb5"
                  >
                    {relatedCourse.level}
                  </div>
                </div>
                <div className="p-6" data-oid="8tps:0s">
                  <h3
                    className="text-lg font-bold text-[#123B79] mb-2"
                    data-oid=":igi5u8"
                  >
                    {relatedCourse.title}
                  </h3>
                  <div
                    className="text-gray-500 text-sm mb-4"
                    data-oid="rbze4xj"
                  >
                    <span className="inline-block mr-4" data-oid="vjcypve">
                      ⏱️ {relatedCourse.duration}
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center"
                    data-oid="1j87p0q"
                  >
                    <span
                      className="font-bold text-[#123B79]"
                      data-oid="o64ktg4"
                    >
                      {relatedCourse.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        router.push(`/courses/${relatedCourse.slug}`)
                      }
                      data-oid="t.pj_2z"
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
        className="py-16 bg-[#123B79] text-white border-y border-gray-100"
        data-oid="i-7r4ij"
      >
        <div className="container mx-auto px-4 text-center" data-oid="g:gqn7_">
          <h2 className="text-3xl font-bold mb-4" data-oid="_gaogaq">
            Ready to advance your property investment knowledge?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="ymxm6-2">
            Join {courseData.students}+ students who are already transforming
            their investment strategies with this course.
          </p>
          <Button
            className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6"
            data-oid="hp1i:yy"
          >
            Enroll Now for {courseData.price}
          </Button>
        </div>
      </section>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          data-oid="mtpuj0v"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="j:d.t30"
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="74khkic"
            >
              <h3 className="font-bold text-lg" data-oid="elezv:f">
                Share Course
              </h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="t0d-:ku"
              >
                <X className="h-5 w-5" data-oid="2ovg_o6" />
              </button>
            </div>
            <div className="p-6" data-oid="uw96n_t">
              <div className="mb-6" data-oid="91uf4on">
                <p className="font-medium mb-2" data-oid="pk:__36">
                  Page Link
                </p>
                <div className="flex" data-oid="ays15hi">
                  <input
                    type="text"
                    value={`https://assembly.sg/courses/${courseData.slug}`}
                    readOnly
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                    data-oid="qe:20.h"
                  />

                  <button
                    onClick={copyToClipboard}
                    className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                    data-oid="oz65_r4"
                  >
                    {copied ? (
                      <Check className="h-5 w-5" data-oid="z5xnw8t" />
                    ) : (
                      <Copy className="h-5 w-5" data-oid="jt.7a.i" />
                    )}
                  </button>
                </div>
              </div>

              <div data-oid="4fxxkfi">
                <p className="font-medium mb-3" data-oid="jwn_2ce">
                  Share on social media
                </p>
                <div className="flex space-x-4" data-oid="6skl4m.">
                  <button
                    onClick={() => shareOnSocialMedia("facebook")}
                    className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="x6nqfmm"
                  >
                    <Facebook className="h-6 w-6" data-oid="6szlm-b" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("twitter")}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="yavggtq"
                  >
                    <X className="h-5 w-5" data-oid="kcp1t_-" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("linkedin")}
                    className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    data-oid="s0s_26u"
                  >
                    <Linkedin className="h-5 w-5" data-oid="2z0qqp." />
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
          data-oid="jlnbdpn"
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-md w-full"
            data-oid="b._99os"
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              data-oid="08q0u84"
            >
              <h3 className="font-bold text-lg" data-oid="c4fost_">
                Login Required
              </h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                data-oid="wat0.c-"
              >
                <X className="h-5 w-5" data-oid=":b0dhh4" />
              </button>
            </div>
            <div className="p-6" data-oid="9jcfqpa">
              <p className="mb-6" data-oid="uo.oscs">
                Please log in to add this course to your wishlist.
              </p>
              <div className="space-y-4" data-oid="b4_d:ke">
                <div data-oid=".3dmxna">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid=":sjjqoj"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="your@email.com"
                    data-oid="3v-.jer"
                  />
                </div>
                <div data-oid="-83dbvs">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid=".4v2.ef"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    data-oid="jgxxhkq"
                  />
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                  data-oid="jsf3:u8"
                >
                  Log In
                </Button>
                <div
                  className="text-center text-sm text-gray-500"
                  data-oid="1cnb0:j"
                >
                  <a
                    href="/forgot-password"
                    className="text-[#123B79] hover:underline"
                    data-oid="_33pg_z"
                  >
                    Forgot password?
                  </a>
                  <span className="mx-2" data-oid="6ehifjb">
                    •
                  </span>
                  <a
                    href="/signup"
                    className="text-[#123B79] hover:underline"
                    data-oid="bdl:05v"
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
