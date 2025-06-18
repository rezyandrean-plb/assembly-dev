"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, CheckCircle, Clock, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  instructor: string;
  level?: string;
  duration?: string;
  category?: string;
  categories: string[];
  price: string;
  type?: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  slug: string;
  url?: string;
  description?: string;
}

export default function LearningPathPage() {
  const params = useParams();
  const { slug } = params;
  const [loading, setLoading] = useState(true);
  const [pathData, setPathData] = useState<any>(null);
  const [pathCourses, setPathCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Simulate loading path data
    const loadPathData = () => {
      // Define learning paths
      const paths = [
        {
          id: "beginner-property-investor",
          title: "Beginner Property Investor",
          description:
            "Build a strong foundation in property investment and understand the Singapore market",
          color: "#123B79",
          longDescription:
            "The Beginner Property Investor Path guides you through building a solid foundation of knowledge and skills essential for success in Singapore's property market. Starting with fundamental concepts and gradually progressing to more complex strategies, this structured learning journey prepares you to make informed investment decisions with confidence.",
          outcomes: [
            "Understand Singapore's property market dynamics and regulations",
            "Develop financial literacy specific to property investment",
            "Learn to evaluate property opportunities using data-driven approaches",
            "Build a strategic framework for your first property investments",
            "Gain confidence in navigating property transactions",
          ],

          courseIds: [1, 5, 12, 19],
        },
        {
          id: "hdb-upgrader-strategist",
          title: "HDB Upgrader & Strategist",
          description:
            "For HDB owners or upgraders aiming to move to condos or optimize their property journey",
          color: "#794B12",
          longDescription:
            "The HDB Upgrader & Strategist Path guides you through making strategic decisions to optimize your property journey. Whether you're starting with your first HDB flat or planning to upgrade to a condominium, this learning path helps you navigate the complex choices and transitions in Singapore's property market.",
          outcomes: [
            "Develop a clear upgrading strategy from HDB to private property",
            "Understand the financial implications of upgrading",
            "Learn timing strategies for maximizing returns on your HDB",
            "Navigate the regulatory requirements for property transitions",
            "Optimize your property portfolio for long-term growth",
          ],

          courseIds: [4, 9, 10, 27, 29],
        },
        {
          id: "condo-investment-specialist",
          title: "Condo Investment Specialist",
          description:
            "Master the art of investing in condominiums, from selection to portfolio building",
          color: "#79123B",
          longDescription:
            "The Condo Investment Specialist Path takes you deep into the specialized world of condominium investments in Singapore. This focused learning journey helps you develop expertise in analyzing, selecting, and building a portfolio of condominium properties across different market segments.",
          outcomes: [
            "Develop advanced condominium selection frameworks",
            "Master entry price analysis for new launch and resale condos",
            "Learn to identify high-potential districts and developments",
            "Understand market cycles specific to the condominium segment",
            "Build a diversified condominium portfolio strategy",
            "Optimize financing structures for multiple properties",
          ],

          courseIds: [2, 5, 6, 17, 18, 20],
        },
      ];

      // Find the current path
      const currentPath = paths.find((path) => path.id === slug);
      setPathData(currentPath);

      // Simulate loading courses
      setTimeout(() => {
        // This would normally be an API call to get courses by IDs
        const mockCourses = [
          {
            id: 1,
            title: "Property Market Fundamentals",
            instructor: "Melvin Lim",
            level: "Beginner",
            duration: "4 weeks",
            categories: ["Market Trends", "Fundamentals"],
            price: "$399.00",
            image: "/singapore-skyline-day.png",
            rating: 4.8,
            reviewCount: 124,
            slug: "property-market-fundamentals",
            description:
              "A comprehensive introduction to Singapore's property market dynamics, regulations, and key factors that influence property values.",
          },
          {
            id: 2,
            title: "Condominium Selection Masterclass",
            instructor: "Marc Chan",
            level: "Intermediate",
            duration: "6 weeks",
            categories: ["Condo", "Selection"],
            price: "$599.00",
            image: "/singapore-skyline-condos.png",
            rating: 4.9,
            reviewCount: 87,
            slug: "condominium-selection-masterclass",
            description:
              "Learn advanced frameworks for selecting high-potential condominium properties in Singapore's competitive market.",
          },
          {
            id: 4,
            title: "HDB to Condo Upgrading Strategies",
            instructor: "Grayce Tan",
            level: "Intermediate",
            duration: "5 weeks",
            categories: ["HDB", "Condo", "Upgrading"],
            price: "$499.00",
            image: "/colorful-hdb-skyline.png",
            rating: 4.7,
            reviewCount: 93,
            slug: "hdb-to-condo-upgrading-strategies",
            description:
              "A strategic guide to planning and executing your property upgrade from HDB to condominium with optimal timing and financing.",
          },
          {
            id: 5,
            title: "New Launch Condo Selection Strategies",
            instructor: "Marc Chan, Ong Yu Rong",
            level: "Intermediate",
            duration: "4 weeks",
            categories: ["Condo", "New Launch"],
            price: "$399.00",
            image: "/singapore-skyline-condos.png",
            rating: 4.8,
            reviewCount: 76,
            slug: "new-launch-condo-selection-strategies",
            description:
              "Master the art of selecting winning new launch condominiums with exclusive frameworks and analytical approaches.",
          },
          {
            id: 6,
            title: "Live Debate - New Launch Condo VS Resale Condo",
            instructor: "Melvin Lim",
            level: "All Levels",
            duration: "1 hour",
            categories: ["Condo", "Webinar"],
            price: "Free",
            image: "/singapore-skyline-condos.png",
            rating: 4.5,
            reviewCount: 210,
            slug: "live-debate-new-launch-condo-vs-resale-condo",
            description:
              "An insightful debate comparing the investment potential of new launch condominiums versus resale condominiums in Singapore's current market.",
          },
          {
            id: 9,
            title:
              "HDB Upgraders 101: Secrets to Upgrading from a HDB to a Condo",
            instructor: "Melvin Lim",
            level: "Beginner",
            duration: "6 weeks",
            categories: ["Condo", "HDB", "Workshop"],
            price: "$599.00",
            image: "/colorful-hdb-skyline.png",
            rating: 4.9,
            reviewCount: 156,
            slug: "hdb-upgraders-101",
            description:
              "A comprehensive guide for HDB owners looking to upgrade to private property, covering financial planning, timing strategies, and common pitfalls to avoid.",
          },
          {
            id: 10,
            title: "Maximizing Your Property Investment",
            instructor: "Ong Yu Rong, Grayce Tan",
            level: "Intermediate",
            duration: "4 weeks",
            categories: ["HDB", "Investing"],
            price: "Free",
            image: "/singapore-skyline-investment.png",
            rating: 4.6,
            reviewCount: 89,
            slug: "maximizing-your-property-investment",
            description:
              "Learn proven strategies to maximize returns on your HDB property through strategic renovations, timing your sale, and understanding market cycles.",
          },
          {
            id: 12,
            title: "Property Portfolio Strategy Mastery",
            instructor: "Melvin Lim",
            level: "Advanced",
            duration: "8 weeks",
            categories: ["Investing", "Workshop"],
            price: "$2,899.00",
            image: "/singapore-skyline-investment.png",
            rating: 4.9,
            reviewCount: 42,
            slug: "property-portfolio-strategy",
            description:
              "An advanced course on building and managing a diversified property portfolio in Singapore, with focus on long-term wealth creation and risk management.",
          },
          {
            id: 17,
            title: "Master New Launch Selection",
            instructor: "Melvin Lim, Marc Chan",
            level: "Intermediate",
            duration: "6 weeks",
            categories: ["Condo", "Masterclass"],
            price: "$399.00",
            image: "/singapore-skyline-condos.png",
            rating: 4.8,
            reviewCount: 67,
            slug: "master-new-launch-selection",
            description:
              "Six exclusive frameworks to select winning new launch properties in Singapore's competitive market for 2024/2025.",
          },
          {
            id: 18,
            title: "Condo Investment Workshop",
            instructor: "Melvin Lim",
            level: "Intermediate",
            duration: "4 weeks",
            categories: ["Condo", "Workshop"],
            price: "$899.00",
            image: "/singapore-skyline-condos.png",
            rating: 4.7,
            reviewCount: 53,
            slug: "condo-investment-workshop",
            description:
              "Building a profitable property portfolio with confidence through hands-on exercises, case studies, and personalized feedback.",
          },
          {
            id: 19,
            title: "The Ultimate Guide To Making The Best Property Decision",
            instructor: "Melvin Lim, Joan Loh",
            level: "Beginner",
            duration: "1 hour",
            categories: ["Condo", "Webinar"],
            price: "Free",
            image: "/singapore-skyline-day.png",
            rating: 4.5,
            reviewCount: 178,
            slug: "the-ultimate-guide-to-making-the-best-property-decision",
            description:
              "A comprehensive framework for making informed property decisions in Singapore, covering financial, lifestyle, and long-term planning considerations.",
          },
          {
            id: 20,
            title: "Rising Stars or Hidden Gems?",
            instructor: "Melvin Lim, Ong Yu Rong",
            level: "Intermediate",
            duration: "1 hour",
            categories: ["Condo", "Webinar"],
            price: "Free",
            image: "/singapore-skyline-condos.png",
            rating: 4.6,
            reviewCount: 92,
            slug: "rising-stars-or-hidden-gems",
            description:
              "Discover emerging districts and developments with high growth potential in Singapore's evolving property landscape.",
          },
          {
            id: 27,
            title: "Making the Right Move",
            instructor: "Melvin Lim",
            level: "Beginner",
            duration: "1 hour",
            categories: ["HDB", "Webinar"],
            price: "Free",
            image: "/colorful-hdb-skyline.png",
            rating: 4.4,
            reviewCount: 124,
            slug: "making-the-right-move",
            description:
              "Strategic guidance for HDB owners on timing their property moves to maximize financial outcomes and meet changing lifestyle needs.",
          },
          {
            id: 29,
            title: "Live Debate - Resale HDB VS Resale Condo",
            instructor: "Melvin Lim, Jesley Lim",
            level: "All Levels",
            duration: "1 hour",
            categories: ["Condo", "HDB", "Webinar"],
            price: "Free",
            image: "/colorful-hdb-skyline.png",
            rating: 4.7,
            reviewCount: 143,
            slug: "live-debate-resale-hdb-vs-resale-condo",
            description:
              "A comprehensive comparison of resale HDB flats versus resale condominiums as investment vehicles in Singapore's current market.",
          },
        ];

        // Filter courses based on the current path's courseIds
        if (currentPath) {
          const filteredCourses = mockCourses.filter((course) =>
            currentPath.courseIds.includes(course.id),
          );
          setPathCourses(filteredCourses);
        }

        setLoading(false);
      }, 1000);
    };

    loadPathData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F5]" data-oid="9pyqnvt">
        <Navbar data-oid="li-v_d6" />
        <div className="pt-24 pb-16" data-oid="_l8s4cl">
          <div className="container mx-auto px-4" data-oid=".9f8n._">
            <div className="animate-pulse" data-oid="jigj006">
              <div
                className="h-8 bg-gray-200 rounded w-1/3 mb-4"
                data-oid="n-1cha6"
              ></div>
              <div
                className="h-4 bg-gray-200 rounded w-2/3 mb-8"
                data-oid="q.i7sx:"
              ></div>
              <div
                className="h-64 bg-gray-200 rounded mb-8"
                data-oid=".wbqslq"
              ></div>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-oid="8pz02zc"
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-64 bg-gray-200 rounded"
                    data-oid="m2tir.n"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!pathData) {
    return (
      <div className="min-h-screen bg-[#F5F5F5]" data-oid="ffn609k">
        <Navbar data-oid="f_8enhz" />
        <div className="pt-24 pb-16" data-oid="rbxa4i2">
          <div
            className="container mx-auto px-4 text-center"
            data-oid="gd-:abo"
          >
            <h1
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="p:c:ekk"
            >
              Learning Path Not Found
            </h1>
            <p className="text-gray-600 mb-8" data-oid="e31lk5n">
              The learning path you're looking for doesn't exist or has been
              moved.
            </p>
            <Link href="/courses" data-oid="pzc9d2-">
              <Button data-oid="qi6ft.z">
                <ArrowLeft className="mr-2 h-4 w-4" data-oid="l._jdwg" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]" data-oid="52e0io5">
      <Navbar data-oid="lm9fc48" />

      <div className="pt-24 pb-16" data-oid="eq9022w">
        <div className="container mx-auto px-4" data-oid="temc7fp">
          {/* Back button */}
          <div className="mb-6" data-oid="rzrunhy">
            <Link
              href="/courses?tab=paths"
              className="inline-flex items-center text-[#123B79] hover:underline"
              data-oid="vk_7wnx"
            >
              <ArrowLeft className="h-4 w-4 mr-2" data-oid="px10s7n" />
              Back to Learning Paths
            </Link>
          </div>

          {/* Path Header */}
          <div className="mb-12" data-oid="keh4e0f">
            <div className="flex items-center mb-4" data-oid="ztf0nt8">
              <div
                className="rounded-full w-14 h-14 flex items-center justify-center mr-4"
                style={{ backgroundColor: pathData.color }}
                data-oid="pswqfcl"
              >
                {pathData.id === "beginner-property-investor" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    data-oid="90tdvhw"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      data-oid="lc-qq77"
                    />
                    <path d="M9 3v18" data-oid="xg-umcb" />
                    <path d="M14 8h.01" data-oid="3sll07m" />
                    <path d="M14 12h.01" data-oid="4q9fdme" />
                    <path d="M14 16h.01" data-oid="ho2wqyi" />
                  </svg>
                ) : pathData.id === "hdb-upgrader-strategist" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    data-oid="8px0t0w"
                  >
                    <path d="M2 12h6" data-oid="2.:-gtj" />
                    <path d="M22 12h-6" data-oid="-wc94i." />
                    <path d="M12 2v2" data-oid="_4j.4p:" />
                    <path d="M12 8v2" data-oid="dy:1voj" />
                    <path d="M12 14v2" data-oid="g13k_uu" />
                    <path d="M12 20v2" data-oid="fhtnic2" />
                    <path d="M19 9l-7 3-7-3" data-oid="pzupxst" />
                    <path d="M19 15l-7-3-7 3" data-oid="iwylocj" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    data-oid="rmb:0jd"
                  >
                    <path
                      d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                      data-oid="s:7wr.f"
                    />
                  </svg>
                )}
              </div>
              <h1
                className="text-3xl font-bold"
                style={{ color: pathData.color }}
                data-oid="8fvw634"
              >
                {pathData.title}
              </h1>
            </div>
            <p
              className="text-xl text-gray-600 mb-6 max-w-3xl"
              data-oid="r_peljj"
            >
              {pathData.description}
            </p>
            <div
              className="flex items-center text-sm text-gray-500"
              data-oid="-y-q97q"
            >
              <BookOpen className="h-4 w-4 mr-1" data-oid="3dva7.m" />
              <span data-oid="bic.1m9">{pathCourses.length} courses</span>
              <span className="mx-2" data-oid="r6ghfsc">
                •
              </span>
              <Clock className="h-4 w-4 mr-1" data-oid="8fz1fyd" />
              <span data-oid="bijcogf">
                Approximately {pathCourses.length * 4} weeks to complete
              </span>
            </div>
          </div>

          {/* Path Description */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
            data-oid="8u9r013"
          >
            <div className="lg:col-span-2" data-oid=".odwslb">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: pathData.color }}
                data-oid="7rafk.1"
              >
                About This Learning Path
              </h2>
              <p className="text-gray-700 mb-6" data-oid="gutwrwd">
                {pathData.longDescription}
              </p>

              <h3 className="text-xl font-bold mb-4" data-oid="absgujs">
                What You'll Learn
              </h3>
              <div className="space-y-2 mb-8" data-oid="dn1ik-s">
                {pathData.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                    data-oid="ikkye33"
                  >
                    <CheckCircle
                      className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      data-oid="qp2dty-"
                    />
                    <p className="text-gray-700" data-oid="mlr0_iy">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1" data-oid="mxnkr84">
              <div className="bg-gray-50 rounded-xl p-6" data-oid="2uvjp_7">
                <h3 className="text-xl font-bold mb-4" data-oid=".3d0w1g">
                  Path Details
                </h3>
                <div className="space-y-4" data-oid="-..38y-">
                  <div className="flex items-center" data-oid=".10lbin">
                    <BookOpen
                      className="h-5 w-5 text-[#123B79] mr-3"
                      data-oid="s0.heum"
                    />
                    <div data-oid="dvcu:y4">
                      <p className="font-semibold" data-oid="gfv0xf4">
                        Courses
                      </p>
                      <p className="text-sm text-gray-600" data-oid="--zp9z5">
                        {pathCourses.length} courses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center" data-oid="y6yvrei">
                    <Clock
                      className="h-5 w-5 text-[#123B79] mr-3"
                      data-oid="jkb8-.f"
                    />
                    <div data-oid="sk9-.oc">
                      <p className="font-semibold" data-oid="9wh0492">
                        Duration
                      </p>
                      <p className="text-sm text-gray-600" data-oid="13ggc-w">
                        Approximately {pathCourses.length * 4} weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center" data-oid="jw3xkt_">
                    <Star
                      className="h-5 w-5 text-[#123B79] mr-3"
                      data-oid="0hk17ml"
                    />
                    <div data-oid="fm66hdv">
                      <p className="font-semibold" data-oid="a4ng:ar">
                        Level
                      </p>
                      <p className="text-sm text-gray-600" data-oid="m23u.q7">
                        {pathData.id === "beginner-property-investor"
                          ? "Beginner to Intermediate"
                          : pathData.id === "hdb-upgrader-strategist"
                            ? "Intermediate"
                            : "Intermediate to Advanced"}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-6 pt-6 border-t border-gray-200"
                  data-oid="2wpgswb"
                >
                  <Button
                    className="w-full"
                    style={{ backgroundColor: pathData.color }}
                    data-oid="fzqu-6e"
                  >
                    Enroll in This Path
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Sequence */}
          <div className="mb-16" data-oid="wbwf6lk">
            <h2 className="text-2xl font-bold mb-6" data-oid="srhw1bp">
              Course Sequence
            </h2>
            <div className="space-y-6" data-oid="tgzkczu">
              {pathCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                  data-oid="j9_yjru"
                >
                  <div className="flex flex-col md:flex-row" data-oid="-gt:jtr">
                    <div className="md:w-1/4 relative" data-oid="_vugb0a">
                      <div
                        className="relative h-48 md:h-full"
                        data-oid="jiv6cea"
                      >
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                          data-oid="0zl00jh"
                        />

                        <div
                          className="absolute inset-0 bg-black bg-opacity-20"
                          data-oid="d-ll::f"
                        ></div>
                        <div
                          className="absolute top-4 left-4 bg-white text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center"
                          data-oid="qq-kbli"
                        >
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:w-3/4" data-oid="15a.r6l">
                      <h3 className="text-xl font-bold mb-2" data-oid="fvdgv2:">
                        {course.title}
                      </h3>
                      <p
                        className="text-gray-500 text-sm mb-2"
                        data-oid="kp7fqbl"
                      >
                        Instructor: {course.instructor} • {course.duration}
                      </p>
                      <p className="text-gray-700 mb-4" data-oid="bx-qgmc">
                        {course.description}
                      </p>
                      <div
                        className="flex flex-wrap gap-2 mb-4"
                        data-oid="b5ttn8b"
                      >
                        {course.categories.map((category, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                            data-oid="-mqyyik"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <div
                        className="flex items-center justify-between"
                        data-oid="x1w31nb"
                      >
                        <div className="flex items-center" data-oid="1sooqlm">
                          <div className="flex" data-oid="6:lmw9-">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= Math.round(course.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                                data-oid="27108_u"
                              />
                            ))}
                          </div>
                          <span
                            className="ml-2 text-sm text-gray-600"
                            data-oid="8fxsh-0"
                          >
                            {course.rating} ({course.reviewCount} reviews)
                          </span>
                        </div>
                        <div className="text-lg font-bold" data-oid="_gwhigw">
                          {course.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="bg-gray-50 rounded-xl p-8 text-center"
            data-oid="w9bn_jn"
          >
            <h2 className="text-2xl font-bold mb-4" data-oid="3hqlno6">
              Ready to Start Your Learning Journey?
            </h2>
            <p
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
              data-oid="rz7en5."
            >
              Enroll in this learning path to gain structured access to all
              courses and track your progress toward becoming an expert in{" "}
              {pathData.title.toLowerCase()}.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: pathData.color }}
              data-oid="hlfr9wy"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
