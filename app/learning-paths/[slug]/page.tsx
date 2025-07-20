"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Clock,
  Star,
  DollarSign,
  Gift,
  TrendingDown,
  Sparkles,
  Users,
  Award,
  Target,
  ShoppingCart,
  Percent,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-context";
import toast from "react-hot-toast";

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
  const { addToCart } = useCart();

  // Helper function to format price with thousand separators
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Calculate pricing information
  const calculatePricing = (courses: Course[]) => {
    let totalOriginalPrice = 0;
    let totalBundlePrice = 0;

    courses.forEach((course) => {
      const price =
        course.price.toLowerCase() === "free"
          ? 0
          : parseFloat(course.price.replace(/[$,]/g, ""));
      totalOriginalPrice += price;
    });

    // Bundle discount: 25% off total price
    const discountPercentage = 25;
    totalBundlePrice = totalOriginalPrice * (1 - discountPercentage / 100);
    const savings = totalOriginalPrice - totalBundlePrice;

    return {
      originalPrice: totalOriginalPrice,
      bundlePrice: totalBundlePrice,
      savings: savings,
      discountPercentage: discountPercentage,
    };
  };

  // Function to add bundle to cart
  const addBundleToCart = () => {
    if (!pathData || pathCourses.length === 0) return;

    const pricing = calculatePricing(pathCourses);

    // Create a bundle item for the cart
    const bundleItem = {
      id: `bundle-${pathData.id}`,
      title: `${pathData.title} - Complete Bundle`,
      slug: pathData.id,
      price: pricing.bundlePrice.toString(),
      image: "/singapore-skyline-day.png", // Default bundle image
      author: "Assembly.sg",
      type: "Bundle" as const,
      isDiscount: true,
    };

    try {
      addToCart(bundleItem);
      toast.success(`${pathData.title} bundle added to cart!`, {
        duration: 3000,
        style: {
          background: "#10B981",
          color: "white",
        },
      });
    } catch (error) {
      toast.error("Failed to add bundle to cart. Please try again.", {
        duration: 3000,
        style: {
          background: "#EF4444",
          color: "white",
        },
      });
    }
  };

  useEffect(() => {
    // Simulate loading path data
    const loadPathData = () => {
      // Define learning paths with enhanced bundle information
      const paths = [
        {
          id: "beginner-property-investor",
          title: "Beginner Property Investor",
          description:
            "Build a strong foundation in property investment and understand the Singapore market",
          color: "#123B79",
          bundleType: "Foundation Bundle",
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
          bundleType: "Upgrader Bundle",
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
          bundleType: "Specialist Bundle",
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
      <div
        className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20"
        data-oid="tm06g9:"
      >
        <div className="pt-24 pb-16" data-oid="2.u4k7p">
          <div className="container mx-auto px-4" data-oid="q9kw5z9">
            <div className="animate-pulse" data-oid="fhmmgkq">
              <div
                className="h-8 bg-gray-200 rounded w-1/3 mb-4"
                data-oid="9-j4h.d"
              ></div>
              <div
                className="h-4 bg-gray-200 rounded w-2/3 mb-8"
                data-oid="kei8hz5"
              ></div>
              <div
                className="h-64 bg-gray-200 rounded mb-8"
                data-oid=".2twx-t"
              ></div>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-oid="xut:2-z"
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-64 bg-gray-200 rounded"
                    data-oid="th52x75"
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
      <div
        className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20"
        data-oid="e0o.imr"
      >
        <div className="pt-24 pb-16" data-oid="6546gdd">
          <div
            className="container mx-auto px-4 text-center"
            data-oid="m8le26u"
          >
            <h1
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="30p:mu4"
            >
              Learning Path Not Found
            </h1>
            <p className="text-gray-600 mb-8" data-oid="e8dt9bf">
              The learning path you're looking for doesn't exist or has been
              moved.
            </p>
            <Link href="/courses" data-oid="q2uqsy-">
              <Button data-oid="oc7-4_e">
                <ArrowLeft className="mr-2 h-4 w-4" data-oid="3g2fd6w" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const pricing = calculatePricing(pathCourses);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20"
      data-oid="0kd6r:z"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="zdmr4:g">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          data-oid="i0ydt9-"
        ></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
          data-oid="oyv.hn_"
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"
          data-oid="5405fw9"
        ></div>
      </div>

      <div className="pt-24 pb-16 relative z-10" data-oid="rj_dpih">
        <div className="container mx-auto px-4" data-oid="a4jqius">
          {/* Back button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            data-oid="3:ija:l"
          >
            <Link
              href="/courses?tab=paths"
              className="inline-flex items-center text-[#123B79] hover:text-[#0A2A5E] font-medium transition-colors group"
              data-oid="6ukxyyc"
            >
              <ArrowLeft
                className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform"
                data-oid="qug1se-"
              />
              Back to Learning Paths
            </Link>
          </motion.div>

          {/* Enhanced Path Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-oid=".-pexv7"
          >
            <div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden"
              data-oid=":f.-ww2"
            >
              {/* Gradient overlay */}
              <div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#123B79] via-[#F0A500] to-[#123B79]"
                data-oid="9gdrzh7"
              ></div>

              <div className="flex items-center mb-6" data-oid="waj_c0q">
                <div
                  className="rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg"
                  style={{ backgroundColor: pathData.color }}
                  data-oid="pcxcy02"
                >
                  {pathData.id === "beginner-property-investor" ? (
                    <Target className="h-8 w-8 text-white" data-oid="xngv:nv" />
                  ) : pathData.id === "hdb-upgrader-strategist" ? (
                    <TrendingDown
                      className="h-8 w-8 text-white"
                      data-oid="l:0r-4l"
                    />
                  ) : (
                    <Award className="h-8 w-8 text-white" data-oid="ga-97g3" />
                  )}
                </div>
                <div data-oid="b5n3-_u">
                  <div
                    className="flex items-center gap-3 mb-2"
                    data-oid="bskgx-1"
                  >
                    <h1
                      className="text-4xl lg:text-5xl font-bold"
                      style={{ color: pathData.color }}
                      data-oid="2ji0j-8"
                    >
                      {pathData.title}
                    </h1>
                    <span
                      className="bg-gradient-to-r from-[#F0A500] to-[#D89400] text-white text-sm font-bold px-3 py-1 rounded-full"
                      data-oid="e8z399n"
                    >
                      <Sparkles
                        className="h-3 w-3 inline mr-1"
                        data-oid="tn5nahm"
                      />

                      {pathData.bundleType}
                    </span>
                  </div>
                  <p
                    className="text-xl text-gray-700 max-w-4xl leading-relaxed"
                    data-oid="33y85-e"
                  >
                    {pathData.description}
                  </p>
                </div>
              </div>

              <div
                className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
                data-oid="yqvjz7o"
              >
                <div
                  className="flex items-center bg-white/50 rounded-full px-4 py-2"
                  data-oid="1n1xaxm"
                >
                  <BookOpen className="h-4 w-4 mr-2" data-oid="n82010s" />
                  <span className="font-medium" data-oid="_leyhjy">
                    {pathCourses.length} courses
                  </span>
                </div>
                <div
                  className="flex items-center bg-white/50 rounded-full px-4 py-2"
                  data-oid="h:10o3h"
                >
                  <Clock className="h-4 w-4 mr-2" data-oid="eky39la" />
                  <span className="font-medium" data-oid="44kc:8g">
                    Approximately {pathCourses.length * 4} weeks
                  </span>
                </div>
                <div
                  className="flex items-center bg-white/50 rounded-full px-4 py-2"
                  data-oid=".r6y3m."
                >
                  <Users className="h-4 w-4 mr-2" data-oid="6.u9le5" />
                  <span className="font-medium" data-oid="_53e-wa">
                    {pathData.id === "beginner-property-investor"
                      ? "Beginner to Intermediate"
                      : pathData.id === "hdb-upgrader-strategist"
                        ? "Intermediate"
                        : "Intermediate to Advanced"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Path Description with Sidebar */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
            data-oid="7_qtcl_"
          >
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid=".8cclry"
            >
              {/* About Section */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-6"
                data-oid="h3x4pfm"
              >
                <div className="flex items-center mb-6" data-oid="bl5-2c:">
                  <div
                    className="bg-gradient-to-r from-[#123B79] to-[#0A2A5E] rounded-full p-3 mr-4"
                    data-oid="lfi5ur6"
                  >
                    <BookOpen
                      className="h-6 w-6 text-white"
                      data-oid="ynbxlh4"
                    />
                  </div>
                  <h2
                    className="text-3xl font-bold text-[#123B79]"
                    data-oid="k85w.d2"
                  >
                    About This Learning Path
                  </h2>
                </div>
                <p
                  className="text-gray-700 mb-8 text-lg leading-relaxed"
                  data-oid="1n37:cw"
                >
                  {pathData.longDescription}
                </p>

                <div className="flex items-center mb-6" data-oid="p.jmxys">
                  <div
                    className="bg-gradient-to-r from-[#F0A500] to-[#D89400] rounded-full p-3 mr-4"
                    data-oid=":ybpomn"
                  >
                    <Target className="h-6 w-6 text-white" data-oid="cdb.1ea" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#123B79]"
                    data-oid="2h6zikk"
                  >
                    What You'll Master
                  </h3>
                </div>
                <div className="space-y-4" data-oid="f8k5noi">
                  {pathData.outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start group hover:bg-gradient-to-r hover:from-[#123B79]/5 hover:to-transparent rounded-xl p-4 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-oid="_u6lzcl"
                    >
                      <div
                        className="bg-gradient-to-r from-[#123B79] to-[#0A2A5E] rounded-full p-2 mr-4 group-hover:scale-110 transition-transform"
                        data-oid="_v-sozh"
                      >
                        <CheckCircle
                          className="h-4 w-4 text-white"
                          data-oid="bi_e7nj"
                        />
                      </div>
                      <p
                        className="text-gray-700 font-medium text-lg leading-relaxed"
                        data-oid="yfzgytc"
                      >
                        {outcome}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Sidebar */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid=":_vm:1:"
            >
              {/* Bundle Pricing Card */}
              <div
                className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/50 mb-6 relative"
                data-oid="ml5xwxr"
              >
                {/* Premium Badge */}
                <div
                  className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#F0A500] to-[#D89400] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  data-oid="y1s3r78"
                >
                  <Gift className="h-3 w-3 inline mr-1" data-oid="aom3mx1" />
                  BUNDLE DEAL
                </div>

                <div className="p-8" data-oid="sy5rt1q">
                  <div className="text-center mb-8" data-oid="x:8_ygv">
                    <div className="mb-4" data-oid="ezcwsty">
                      <span
                        className="text-sm text-gray-500 font-medium"
                        data-oid="e5wukjs"
                      >
                        Bundle Price
                      </span>
                      <div
                        className="text-4xl font-bold bg-gradient-to-r from-[#123B79] to-[#0A2A5E] bg-clip-text text-transparent"
                        data-oid="b.z0bi8"
                      >
                        ${formatPrice(pricing.bundlePrice)}
                      </div>
                    </div>

                    {/* Savings Display */}
                    <div
                      className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-4 mb-6"
                      data-oid="nm2yox1"
                    >
                      <div
                        className="flex items-center justify-center mb-2"
                        data-oid="b5fk7pv"
                      >
                        <TrendingDown
                          className="h-5 w-5 text-red-600 mr-2"
                          data-oid="e1:-atl"
                        />

                        <span
                          className="text-red-600 font-bold text-lg"
                          data-oid=":twmi3a"
                        >
                          Save ${formatPrice(pricing.savings)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600" data-oid="-n165dz">
                        <span className="line-through" data-oid="muuu0-e">
                          ${formatPrice(pricing.originalPrice)}
                        </span>
                        <span
                          className="ml-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold"
                          data-oid="vjnd6p2"
                        >
                          {pricing.discountPercentage}% OFF
                        </span>
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <Button
                      onClick={addBundleToCart}
                      className="w-full bg-gradient-to-r from-[#123B79] to-[#0A2A5E] hover:from-[#0A2A5E] hover:to-[#123B79] text-white font-bold py-6 text-lg mb-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                      data-oid="mud:epz"
                    >
                      <ShoppingCart
                        className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                        data-oid=".ls8hez"
                      />
                      Enroll in Bundle Now
                    </Button>

                    <p
                      className="text-xs text-gray-500 mb-6"
                      data-oid="ljn38cb"
                    >
                      30-day money-back guarantee • Lifetime access
                    </p>
                  </div>

                  {/* Bundle Benefits */}
                  <div className="space-y-4" data-oid="e9y5lrx">
                    <h3
                      className="font-bold text-lg text-[#123B79] mb-4 flex items-center"
                      data-oid="8auwl15"
                    >
                      <Gift className="h-5 w-5 mr-2" data-oid="pfws5-q" />
                      Bundle Includes:
                    </h3>

                    <div className="space-y-3" data-oid="vml.-jb">
                      <div
                        className="flex items-center group hover:bg-gradient-to-r hover:from-[#123B79]/5 hover:to-transparent rounded-xl p-3 transition-all duration-300"
                        data-oid="rwxen57"
                      >
                        <div
                          className="bg-gradient-to-r from-[#123B79] to-[#0A2A5E] rounded-full p-2 mr-4 group-hover:scale-110 transition-transform"
                          data-oid="axdi9j0"
                        >
                          <BookOpen
                            className="h-4 w-4 text-white"
                            data-oid="1_nldj8"
                          />
                        </div>
                        <div data-oid="xx2tf0s">
                          <p
                            className="font-semibold text-gray-900 text-lg"
                            data-oid="bzkkftd"
                          >
                            {pathCourses.length} Premium Courses
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="ezv7wxf"
                          >
                            Structured learning path
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-center group hover:bg-gradient-to-r hover:from-[#123B79]/5 hover:to-transparent rounded-xl p-3 transition-all duration-300"
                        data-oid="rh8e5sl"
                      >
                        <div
                          className="bg-gradient-to-r from-[#F0A500] to-[#D89400] rounded-full p-2 mr-4 group-hover:scale-110 transition-transform"
                          data-oid="2if854k"
                        >
                          <Percent
                            className="h-4 w-4 text-white"
                            data-oid="7_r3u5p"
                          />
                        </div>
                        <div data-oid="z9xv5pl">
                          <p
                            className="font-semibold text-gray-900 text-lg"
                            data-oid="-g_zawr"
                          >
                            25% Bundle Discount
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="6etfhyb"
                          >
                            Significant savings vs individual courses
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-center group hover:bg-gradient-to-r hover:from-[#123B79]/5 hover:to-transparent rounded-xl p-3 transition-all duration-300"
                        data-oid="_tw3li7"
                      >
                        <div
                          className="bg-gradient-to-r from-[#123B79] to-[#0A2A5E] rounded-full p-2 mr-4 group-hover:scale-110 transition-transform"
                          data-oid="v73ptw4"
                        >
                          <Award
                            className="h-4 w-4 text-white"
                            data-oid="8an56z_"
                          />
                        </div>
                        <div data-oid="xndz58g">
                          <p
                            className="font-semibold text-gray-900 text-lg"
                            data-oid="m0wuhay"
                          >
                            Completion Certificate
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="-utj4gu"
                          >
                            Professional credential
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-center group hover:bg-gradient-to-r hover:from-[#123B79]/5 hover:to-transparent rounded-xl p-3 transition-all duration-300"
                        data-oid=".3vbgd_"
                      >
                        <div
                          className="bg-gradient-to-r from-[#F0A500] to-[#D89400] rounded-full p-2 mr-4 group-hover:scale-110 transition-transform"
                          data-oid="1rkuloe"
                        >
                          <Users
                            className="h-4 w-4 text-white"
                            data-oid="q.13waf"
                          />
                        </div>
                        <div data-oid="sh4xykc">
                          <p
                            className="font-semibold text-gray-900 text-lg"
                            data-oid="1ql33mn"
                          >
                            Expert Support
                          </p>
                          <p
                            className="text-sm text-gray-600"
                            data-oid="0zijsal"
                          >
                            Direct access to instructors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Course Sequence */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-oid="3a28es1"
          >
            <div className="flex items-center mb-8" data-oid="h0hh__i">
              <div
                className="bg-gradient-to-r from-[#123B79] to-[#0A2A5E] rounded-full p-3 mr-4"
                data-oid=".c5favh"
              >
                <BookOpen className="h-6 w-6 text-white" data-oid="-uo:v.g" />
              </div>
              <h2
                className="text-3xl font-bold text-[#123B79]"
                data-oid="u1rrfce"
              >
                Course Sequence
              </h2>
            </div>
            <div className="space-y-6" data-oid="n3122st">
              {pathCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-oid="jem07vb"
                >
                  <div className="flex flex-col md:flex-row" data-oid="xbgjbnp">
                    <div className="md:w-1/4 relative" data-oid="nilomzx">
                      <div
                        className="relative h-48 md:h-full"
                        data-oid="gx4y7_t"
                      >
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                          data-oid="qr97qql"
                        />

                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                          data-oid="u.wplj9"
                        ></div>
                        <div
                          className="absolute top-4 left-4 bg-gradient-to-r from-[#123B79] to-[#0A2A5E] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                          data-oid="1i-43aa"
                        >
                          {index + 1}
                        </div>
                        <div
                          className="absolute top-4 right-4"
                          data-oid="dgw4_te"
                        >
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full shadow-lg ${
                              course.price.toLowerCase() === "free"
                                ? "bg-green-500 text-white"
                                : "bg-white text-gray-800"
                            }`}
                            data-oid="m5dsaet"
                          >
                            {course.price.toLowerCase() === "free"
                              ? "FREE"
                              : course.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:w-3/4" data-oid="wqktcfq">
                      <h3
                        className="text-2xl font-bold text-[#123B79] mb-3"
                        data-oid="ayd:o1e"
                      >
                        {course.title}
                      </h3>
                      <p
                        className="text-gray-500 text-sm mb-3 font-medium"
                        data-oid="sag106v"
                      >
                        Instructor: {course.instructor} • {course.duration}
                      </p>
                      <p
                        className="text-gray-700 mb-6 text-lg leading-relaxed"
                        data-oid="qsqf3gw"
                      >
                        {course.description}
                      </p>
                      <div
                        className="flex flex-wrap gap-2 mb-6"
                        data-oid="m7vnfbx"
                      >
                        {course.categories.map((category, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-[#123B79]/10 to-[#123B79]/5 text-[#123B79] rounded-full border border-[#123B79]/20"
                            data-oid="bw2ehe3"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <div
                        className="flex items-center justify-between"
                        data-oid="0p..u_t"
                      >
                        <div className="flex items-center" data-oid="ei:7c:z">
                          <div className="flex mr-3" data-oid="2abz_d:">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-5 w-5 ${
                                  star <= Math.round(course.rating)
                                    ? "text-[#F0A500] fill-[#F0A500]"
                                    : "text-gray-300"
                                }`}
                                data-oid=".l8tn7s"
                              />
                            ))}
                          </div>
                          <span
                            className="text-sm text-gray-600 font-medium"
                            data-oid="3uehgmp"
                          >
                            {course.rating} ({course.reviewCount} reviews)
                          </span>
                        </div>
                        <div className="text-right" data-oid="r4poymb">
                          <div
                            className="text-2xl font-bold text-[#123B79]"
                            data-oid="o6lf5-u"
                          >
                            {course.price.toLowerCase() === "free" ? (
                              <span
                                className="text-green-600"
                                data-oid="zq7sxvb"
                              >
                                FREE
                              </span>
                            ) : (
                              course.price
                            )}
                          </div>
                          {course.price.toLowerCase() !== "free" && (
                            <div
                              className="text-xs text-gray-500"
                              data-oid=".dge:5h"
                            >
                              Individual price
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="bg-gray-900 text-[white] rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            data-oid="r.:dqvz"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" data-oid="ij8cf07">
              <div
                className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"
                data-oid="_1-r8o8"
              ></div>
              <div
                className="absolute bottom-10 right-10 w-32 h-32 bg-[#F0A500] rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"
                data-oid="zg.ij0g"
              ></div>
            </div>

            <div className="relative z-10" data-oid="whi4th1">
              <h2 className="text-4xl font-bold mb-4" data-oid="n0j4oe1">
                Ready to Start Your
                <span
                  className="bg-gradient-to-r from-[#F0A500] to-[#D89400] bg-clip-text text-transparent"
                  data-oid="1g-h33u"
                >
                  {" "}
                  Learning Journey?
                </span>
              </h2>
              <p
                className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
                data-oid="tb3l-2t"
              >
                Join hundreds of successful students and save $
                {formatPrice(pricing.savings)} with our exclusive bundle deal.
                Transform your property investment knowledge with expert
                guidance.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                data-oid="5vv55:6"
              >
                <Button
                  onClick={addBundleToCart}
                  className="bg-gradient-to-r from-[#F0A500] to-[#D89400] hover:from-[#D89400] hover:to-[#F0A500] text-[#123B79] font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 group"
                  data-oid="cm.or.v"
                >
                  <ShoppingCart
                    className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                    data-oid="v6e-527"
                  />
                  Enroll Now - Save ${formatPrice(pricing.savings)}
                </Button>
                <div className="text-center" data-oid="i9.oqzz">
                  <div className="text-sm opacity-80" data-oid="alz2cny">
                    Bundle Price
                  </div>
                  <div className="text-2xl font-bold" data-oid="6ypvdug">
                    ${formatPrice(pricing.bundlePrice)}
                  </div>
                  <div
                    className="text-sm opacity-80 line-through"
                    data-oid="-tpsslt"
                  >
                    ${formatPrice(pricing.originalPrice)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
