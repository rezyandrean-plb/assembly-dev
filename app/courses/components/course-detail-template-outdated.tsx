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
    <main className="relative bg-white min-h-screen">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <a
              href="/courses"
              className="inline-flex items-center text-[#123B79] hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Takes up 2/3 of the space */}
            <motion.div
              ref={mainContentRef}
              className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl font-bold text-[#123B79] mb-4 drop-shadow-sm">
                {courseData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#F0A500] fill-[#F0A500]" />

                  <span className="ml-1 font-semibold">
                    {courseData.rating}
                  </span>
                  <span className="ml-1 text-gray-500">
                    ({courseData.students} students)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{courseData.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Last updated: {courseData.lastUpdated}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-1" />
                  <span>{courseData.level}</span>
                </div>
              </div>

              {/* Course Image for Mobile */}
              <div className="lg:hidden mb-6 relative rounded-xl overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-lg text-gray-700 mb-8">
                {typeof courseData.description === "string"
                  ? courseData.description
                  : courseData.description}
              </div>

              {/* Instructors Section - Updated to display side by side */}
              <div className="mb-8">
                <h2 className="font-semibold text-xl text-[#123B79] mb-4">
                  Course Instructors
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Array.isArray(courseData.instructors) &&
                    courseData.instructors.length > 0 ? (
                      courseData.instructors.map((instructor, index) => (
                        <InstructorCard
                          key={index}
                          name={instructor.name}
                          image={instructor.image}
                        />
                      ))
                    ) : (
                      <div className="text-gray-500 col-span-4">
                        Instructor information coming soon.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Course Highlights */}
              {courseData.highlights && (
                <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                  <h2 className="text-xl font-bold text-[#123B79] mb-4">
                    Course Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#F0A500] mr-3 flex-shrink-0 mt-0.5" />

                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What You'll Learn */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                <h2 className="text-xl font-bold text-[#123B79] mb-4">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(courseData.whatYouWillLearn) &&
                  courseData.whatYouWillLearn.length > 0 ? (
                    courseData.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#123B79] mr-3 flex-shrink-0 mt-0.5" />

                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">
                      Learning outcomes will be updated soon.
                    </div>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-[#123B79]">
                    Course Content
                  </h2>
                  <div className="text-sm text-gray-600">
                    {Array.isArray(courseData.curriculum) &&
                    courseData.curriculum.length > 0
                      ? `${courseData.curriculum.length} modules • ${courseData.duration}`
                      : Array.isArray(courseData.sections) &&
                          courseData.sections.length > 0
                        ? `${courseData.sections.length} sections • ${courseData.duration}`
                        : courseData.duration}
                  </div>
                </div>

                <div className="space-y-4">
                  {Array.isArray(courseData.curriculum) &&
                  courseData.curriculum.length > 0 ? (
                    courseData.curriculum.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                          onClick={() => toggleModule(moduleIndex)}
                        >
                          <h3 className="font-bold text-[#123B79] text-left">
                            Module {moduleIndex + 1}: {module.title}
                          </h3>
                          <div className="flex items-center">
                            {expandedModules.includes(moduleIndex) ? (
                              <ChevronUp className="h-5 w-5 text-gray-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-600" />
                            )}
                          </div>
                        </button>

                        {expandedModules.includes(moduleIndex) && (
                          <div className="divide-y divide-gray-200">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="px-6 py-4 flex items-center"
                              >
                                <div className="flex items-center">
                                  <BookOpen className="h-4 w-4 text-[#123B79] mr-3" />

                                  <span className="text-gray-700">
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
                      >
                        <div className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center">
                          <h3 className="font-bold text-[#123B79] text-left">
                            Section {sectionIndex + 1}: {section.title}
                          </h3>
                        </div>
                        <div className="px-6 py-4">
                          <span className="text-gray-700">
                            {section.content}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">
                      No course content available.
                    </div>
                  )}
                </div>
              </div>

              {/* Who This Course Is For */}
              {courseData.targetAudience && (
                <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                  <h2 className="text-xl font-bold text-[#123B79] mb-4">
                    Who This Course Is For
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {courseData.targetAudience.map((audience, index) => (
                      <li key={index}>{audience}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Student Testimonials - Now part of the main content */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                <h2
                  ref={reviewsSectionRef}
                  className="text-2xl font-bold text-[#123B79] mb-8"
                >
                  What Our Students Say
                </h2>

                {hasReviews ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courseData.reviews!.map((review, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-[#F0A500] fill-[#F0A500]"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-500">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    className="flex flex-col items-center justify-center bg-gray-50 rounded-xl py-16 px-4 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-gray-300">
                      <div className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center mb-2">
                        <MessageCircle className="h-12 w-12" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      No Reviews Yet
                    </h3>
                    <p className="text-gray-500 text-center max-w-md mb-6">
                      Be the first to share your experience with this course and
                      help others make informed decisions.
                    </p>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      className="text-[#123B79] border-[#123B79]"
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
            >
              {/* Course Preview Image - Desktop Only */}
              <div className="hidden lg:block mb-6 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-[#123B79]">
                      {courseData.price}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleBookmark}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label={
                          isBookmarked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        {isBookmarked ? (
                          <BookOpen className="h-5 w-5 text-[#F0A500] fill-[#F0A500]" />
                        ) : (
                          <BookOpen className="h-5 w-5 text-gray-700" />
                        )}
                      </button>
                      <button
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setIsShareModalOpen(true)}
                        aria-label="Share course"
                      >
                        <Share2 className="h-5 w-5 text-gray-700" />
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
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Enroll Now
                  </Button>

                  <div className="space-y-4 mt-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#123B79] mr-3" />

                      <div>
                        <p className="font-semibold">Course Duration</p>
                        <p className="text-sm text-gray-600">
                          {courseData.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-[#123B79] mr-3" />

                      <div>
                        <p className="font-semibold">Total Enrolled</p>
                        <p className="text-sm text-gray-600">
                          {courseData.students}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 text-[#123B79] mr-3" />

                      <div>
                        <p className="font-semibold">Course Level</p>
                        <p className="text-sm text-gray-600">
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
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#123B79] mb-8">
            Related Courses You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              >
                <div className="relative h-48">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#123B79] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {relatedCourse.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#123B79] mb-2">
                    {relatedCourse.title}
                  </h3>
                  <div className="text-gray-500 text-sm mb-4">
                    <span className="inline-block mr-4">
                      ⏱️ {relatedCourse.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#123B79]">
                      {relatedCourse.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        router.push(`/courses/${relatedCourse.slug}`)
                      }
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
      <section className="py-16 bg-[#123B79] text-white border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to advance your property investment knowledge?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join {courseData.students}+ students who are already transforming
            their investment strategies with this course.
          </p>
          <Button className="bg-[#F0A500] hover:bg-[#D89400] text-[#123B79] font-bold text-lg px-8 py-6">
            Enroll Now for {courseData.price}
          </Button>
        </div>
      </section>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">Share Course</h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <p className="font-medium mb-2">Page Link</p>
                <div className="flex">
                  <input
                    type="text"
                    value={`https://assembly.sg/courses/${courseData.slug}`}
                    readOnly
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
                  />

                  <button
                    onClick={copyToClipboard}
                    className="bg-[#123B79] text-white px-3 py-2 rounded-r-md hover:bg-[#0A2A5E] transition-colors"
                  >
                    {copied ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-medium mb-3">Share on social media</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => shareOnSocialMedia("facebook")}
                    className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("twitter")}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia("linkedin")}
                    className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">Login Required</h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="mb-6">
                Please log in to add this course to your wishlist.
              </p>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                  />
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full bg-[#123B79] hover:bg-[#0A2A5E]"
                >
                  Log In
                </Button>
                <div className="text-center text-sm text-gray-500">
                  <a
                    href="/forgot-password"
                    className="text-[#123B79] hover:underline"
                  >
                    Forgot password?
                  </a>
                  <span className="mx-2">•</span>
                  <a href="/signup" className="text-[#123B79] hover:underline">
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
