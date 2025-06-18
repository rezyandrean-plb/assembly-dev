"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import CourseCard from "@/components/course-card";
import LearningPathCard from "@/components/learning-path-card";
import Navbar from "@/components/navbar";
import { courses as mainCourses } from "@/app/data/courses";

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
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  color: string;
  iconComponent: React.ReactNode;
  courseCount: number;
  nodes: { x: number; y: number }[];
}

// Add a FilterState type for filter state objects
type FilterState = {
  [key: string]: string[];
  level: string[];
  duration: string[];
  category: string[];
  type: string[];
  price: string[];
};

export default function CoursesPage() {
  // State for courses data
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"courses" | "paths">("courses");

  // Update the filter options with the new values
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    level: [],
    duration: [],
    category: [],
    type: [],
    price: [],
  });

  // Categories - will be dynamically populated
  const [categories, setCategories] = useState([
    { id: "all", name: "All Classes" },
  ]);

  // Filter options - will be dynamically populated
  const [filterOptions, setFilterOptions] = useState<FilterState>({
    level: ["All Levels"],
    duration: ["0-4 weeks", "5-8 weeks", "9+ weeks"],
    category: [],
    type: ["Course", "Bundle"],
    price: ["Free", "Paid"],
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  // Add a new state for current page
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 18;

  // Learning paths data
  const learningPaths: LearningPath[] = [
    {
      id: "beginner-property-investor",
      title: "Beginner Property Investor",
      description:
        "Build a strong foundation in property investment and understand the Singapore market",
      color: "#123B79",
      iconComponent: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-oid="d2n62fa"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="347buqf" />
          <path d="M9 3v18" data-oid="0n6g:1o" />
          <path d="M14 8h.01" data-oid="kushg.." />
          <path d="M14 12h.01" data-oid="75p7k-d" />
          <path d="M14 16h.01" data-oid="gqtdmye" />
        </svg>
      ),

      courseCount: 4,
      nodes: [
        { x: 30, y: 40 },
        { x: 90, y: 25 },
        { x: 150, y: 40 },
        { x: 210, y: 25 },
        { x: 270, y: 40 },
      ],
    },
    {
      id: "hdb-upgrader-strategist",
      title: "HDB Upgrader & Strategist",
      description:
        "For HDB owners or upgraders aiming to move to condos or optimize their property journey",
      color: "#794B12",
      iconComponent: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-oid="pzjd_fm"
        >
          <path d="M2 12h6" data-oid="fbf4rjl" />
          <path d="M22 12h-6" data-oid="0m6:g_l" />
          <path d="M12 2v2" data-oid="uhbvsma" />
          <path d="M12 8v2" data-oid="bofssnq" />
          <path d="M12 14v2" data-oid="vclo1k8" />
          <path d="M12 20v2" data-oid="x7uu3sq" />
          <path d="M19 9l-7 3-7-3" data-oid="atpzb9y" />
          <path d="M19 15l-7-3-7 3" data-oid="fgo97vn" />
        </svg>
      ),

      courseCount: 5,
      nodes: [
        { x: 30, y: 40 },
        { x: 90, y: 55 },
        { x: 150, y: 25 },
        { x: 210, y: 55 },
        { x: 270, y: 40 },
      ],
    },
    {
      id: "condo-investment-specialist",
      title: "Condo Investment Specialist",
      description:
        "Master the art of investing in condominiums, from selection to portfolio building",
      color: "#79123B",
      iconComponent: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-oid="lm0px.m"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="is1jpy4" />
        </svg>
      ),

      courseCount: 6,
      nodes: [
        { x: 30, y: 40 },
        { x: 90, y: 25 },
        { x: 150, y: 40 },
        { x: 210, y: 25 },
        { x: 270, y: 40 },
      ],
    },
  ];

  // Function to handle page changes with scroll to top
  const handlePageChange = (pageNumber: number) => {
    // First scroll to top
    window.scrollTo(0, 0);
    // Then update the page
    setCurrentPage(pageNumber);
  };

  // Parse CSV data and set up courses
  useEffect(() => {
    const parseCourseData = () => {
      // This is the CSV data provided by the user, manually parsed
      const courseData = [
        {
          url: "https://assembly.sg/courses/property-strategies-in-2025-amid-rate-cuts/",
          title: "Property Strategies in 2025 Amid Rate Cuts",
          categories: ["Market Trends", "Webinar"],
          instructor: "Melvin Lim, Nicole Ng",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/entry-price-analysis-for-5-upcoming-new-launches/",
          title: "Entry Price Analysis for 5 Upcoming New Launches",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim, Phyllis Goh",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth/",
          title:
            "EC Sellers Make the Most Money when they sell at MOP Year – Myth or Truth?",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start/",
          title:
            "Mistakes in Strategising to Own 1 HDB + 1 Condo Right From the Start",
          categories: ["Condo", "HDB", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/new-launch-condo-selection-strategies/",
          title: "New Launch Condo Selection Strategies",
          categories: ["Condo", "Webinar"],
          instructor:
            "Marc Chan, Ong Yu Rong, George Peng, Shawn Tay, Jesley Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/live-debate-new-launch-condo-vs-resale-condo-which-is-more-profitable/",
          title:
            "Live Debate - New Launch Condo VS Resale Condo: Which is More Profitable?",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio/",
          title:
            "How to Strategise from a Condo Portfolio into a Landed Portfolio",
          categories: ["Landed", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time/",
          title:
            "Are Landed Properties Overpriced in 2024? Should we wait for 2025 to Enter or is now the best time?",
          categories: ["Landed", "Webinar"],
          instructor: "Melvin Lim, Beatrice Lim, George Peng",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/live-debate-resale-hdb-vs-resale-condo/",
          title: "LIVE Debate - Resale HDB VS Resale Condo",
          categories: ["Condo", "HDB", "Webinar"],
          instructor:
            "Melvin Lim, Jesley Lim, Lee Jun Wei, Ramzi Razak, Loong Yanyan",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo-masterclass/",
          title:
            "HDB Upgraders 101: Secrets to Upgrading from a HDB to a Condo",
          categories: ["Condo", "HDB", "Workshop"],
          instructor: "TBD",
          price: "$599.00",
        },
        {
          url: "https://assembly.sg/courses/landed-buyer-investing-masterclass/",
          title: "Landed Buyer Investing",
          categories: ["Landed", "Masterclass"],
          instructor: "TBD",
          price: "$2,899.00",
        },
        {
          url: "https://assembly.sg/courses/property-portfolio-strategy/",
          title: "Property Portfolio Strategy Mastery",
          categories: ["Investing", "Workshop"],
          instructor: "TBD",
          price: "$2,899.00",
        },
        {
          url: "https://assembly.sg/courses/property-financing-strategy/",
          title: "Property Financing Strategy Mastery",
          categories: ["Investing", "Masterclass"],
          instructor: "TBD",
          price: "$1,899.00",
        },
        {
          url: "https://assembly.sg/courses/selling-your-property-effectively-as-a-diy-property-seller/",
          title: "Selling your Property Effectively as a DIY Property Seller",
          categories: ["Condo", "HDB", "Landed", "Masterclass"],
          instructor: "TBD",
          price: "$399.00",
        },
        {
          url: "https://assembly.sg/courses/property-summit-2024/",
          title: "Property Summit 2024",
          categories: [
            "Condo",
            "Event Courses",
            "HDB",
            "Investing",
            "Landed",
            "Market Trends",
          ],

          instructor:
            "Melvin Lim, Marc Chan, Grayce Tan, Ong Yu Rong, Shawn Tay, Jesley Lim, George Peng, Wayne Tang, Joan Loh",
          price: "$399.00",
        },
        {
          url: "https://assembly.sg/courses/niche-positioning-masterclass/",
          title: "Module 1 of Niche Positioning Masterclass",
          categories: ["Condo", "Masterclass"],
          instructor: "Melvin Lim",
          price: "$2,999.00",
        },
        {
          url: "https://assembly.sg/courses/master-new-launch-selection/",
          title:
            "Master New Launch Selection: 6 Exclusive Frameworks to Select the Winning New Launch in 2024/2025",
          categories: ["Condo", "Masterclass"],
          instructor:
            "Melvin Lim, Marc Chan, Ong Yu Rong, Shawn Tay, George Peng, Jesley Lim",
          price: "$399.00",
        },
        {
          url: "https://assembly.sg/courses/condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence/",
          title:
            "Condo Investment Workshop: Building a Profitable Property Portfolio with Confidence",
          categories: ["Condo", "Workshop"],
          instructor: "Melvin Lim",
          price: "$899.00",
        },
        {
          url: "https://assembly.sg/courses/the-ultimate-guide-to-making-the-best-property-decision/",
          title: "The Ultimate Guide To Making The Best Property Decision",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim, Joan Loh",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/2024-market-trends-strategies-for-new-launch-resale-condos/",
          title:
            "2024 Market Trends & Strategies for New Launch & Resale Condos",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong, Wayne Tang, Joan Loh",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/singapore-real-estate-market-trends-predictions-2024/",
          title: "Singapore Real Estate Market Trends & Predictions 2024",
          categories: ["Market Trends", "Webinar"],
          instructor: "Melvin Lim, Grayce Tan",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/2024-market-trends-strategies-for-landed-properties/",
          title: "2024 Market Trends & Strategies for Landed Properties",
          categories: ["Landed", "Webinar"],
          instructor: "Melvin Lim, Beatrice Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/property-portfolio-expansion-strategies-2024/",
          title: "Property Portfolio Expansion Strategies 2024",
          categories: ["Investing", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong, George Peng",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/live-debate-choosing-your-path-in-singapore-property-condo-vs-landed/",
          title:
            "Live Debate - Choosing Your Path in Singapore Property: Condo vs Landed",
          categories: ["Condo", "Landed", "Webinar"],
          instructor:
            "Melvin Lim, Ong Yu Rong, George Peng, Shawn Tay, Gavin Chan",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb/",
          title:
            "Live Debate - Choosing Your Path in Singapore Property: BTO vs Resale HDB",
          categories: ["HDB", "Webinar"],
          instructor:
            "Melvin Lim, Grayce Tan, Joan Loh, Sebastian Lau, Lyndon Leong",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/singapores-master-plan-transformation/",
          title: "Singapore's Master Plan Transformation",
          categories: ["Market Trends", "Webinar"],
          instructor: "Melvin Lim, Grayce Tan",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/how-has-the-latest-cooling-measures-affected-the-property-market/",
          title:
            "How has the latest Cooling Measures affected the Property Market?",
          categories: ["Market Trends", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/maximizing-your-property-investment/",
          title: "Maximizing Your Property Investment",
          categories: ["HDB", "Webinar"],
          instructor: "Ong Yu Rong, Grayce Tan",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/7-analytical-factors-for-safe-new-launch-property-investment/",
          title: "7 Analytical Factors for Safe New Launch Property Investment",
          categories: ["Investing", "Webinar"],
          instructor: "Ong Yu Rong, George Peng",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/rising-stars-or-hidden-gems/",
          title: "Rising Stars or Hidden Gems?",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/freehold-property-investment-strategy/",
          title: "Freehold Property Investment Strategy",
          categories: ["Condo", "Landed", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties/",
          title:
            "The Ultimate Showdown: Cluster Houses vs. Condos vs. Landed Properties",
          categories: ["Landed", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/exit-with-confidence/",
          title: "Exit with Confidence",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim, Marc Chan",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/the-art-of-real-estate-investment/",
          title: "The Art of Real Estate Investment",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim, Ong Yu Rong",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/landed-property-investment-strategies/",
          title: "Landed Property Investment Strategies",
          categories: ["Landed", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/making-the-right-move/",
          title: "Making the Right Move",
          categories: ["HDB", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/new-launches-is-there-still-an-opportunity-in-2023/",
          title: "New Launches – Is There Still an Opportunity in 2023?",
          categories: ["Condo", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
        {
          url: "https://assembly.sg/courses/the-shift-in-singapores-real-estate-market-2023/",
          title: "The Shift in Singapore's Real Estate Market 2023",
          categories: ["Market Trends", "Webinar"],
          instructor: "Melvin Lim",
          price: "Free",
        },
      ];

      // Extract unique categories
      const uniqueCategories = new Set<string>();
      const uniquePrices = new Set<string>();

      courseData.forEach((course) => {
        course.categories.forEach((category) => {
          uniqueCategories.add(category);
        });

        uniquePrices.add(course.price === "Free" ? "Free" : "Paid");
      });

      // Create formatted course objects
      const formattedCourses: Course[] = courseData.map((course, index) => {
        // Generate a slug from the title
        const slug = course.title
          .toLowerCase()
          .replace(/[–—]/g, "-") // Replace en dash and em dash with hyphen
          .replace(/[^\w\s-]/g, "") // Remove other non-word characters
          .replace(/\s+/g, "-") // Replace spaces with hyphen
          .replace(/-{2,}/g, "-") // Collapse multiple hyphens into one
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

        // Determine primary category for image selection
        const primaryCategory = course.categories[0]?.toLowerCase() || "";

        // Select an appropriate image based on the main data file if available
        const mainCourse = mainCourses.find((c) => c.title === course.title);
        let image = mainCourse?.image || "/singapore-skyline-day.png";

        // Find the course with the title "Property Strategies in 2025 Amid Rate Cuts" and update its image property
        if (course.title === "Property Strategies in 2025 Amid Rate Cuts") {
          image = "/images/property-strategies-2025.jpg";
        }

        // Determine if it's a paid course
        const isPaid = course.price !== "Free";

        return {
          id: index + 1,
          title: course.title,
          instructor: course.instructor,
          level: "All Levels", // Default level
          duration: course.categories.includes("Webinar")
            ? "1 hour"
            : "Self-paced",
          category: primaryCategory,
          categories: course.categories,
          price: course.price,
          type: course.categories.includes("Masterclass")
            ? "Masterclass"
            : "Course",
          image,
          rating: 0, // Default rating
          tags: course.categories, // Use categories as tags
          slug,
          url: course.url,
        };
      });

      // Update state with the formatted courses
      setCourses(formattedCourses);

      // Update categories for navigation
      const categoryList = Array.from(uniqueCategories).sort();
      setFilterOptions((prev) => ({
        level: prev.level,
        duration: prev.duration,
        category: categoryList,
        type: prev.type,
        price: Array.from(uniquePrices).sort(),
      }));

      // Update category navigation
      setCategories([
        { id: "all", name: "All Classes" },
        ...Array.from(uniqueCategories).map((cat) => ({
          id: cat.toLowerCase().replace(/\s+/g, "-"),
          name: cat,
        })),
      ]);

      setLoading(false);
    };

    parseCourseData();
  }, []);

  // Filter courses based on active category, search query, and selected filters
  const filteredCourses = courses.filter((course) => {
    // Filter by category
    if (
      activeCategory !== "all" &&
      !course.categories.some((cat) => {
        const categoryObj = categories.find((c) => c.id === activeCategory);
        return categoryObj && cat === categoryObj.name;
      })
    ) {
      return false;
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = course.title.toLowerCase().includes(query);
      const matchesInstructor = course.instructor.toLowerCase().includes(query);
      const matchesTags =
        course.tags?.some((tag) => tag.toLowerCase().includes(query)) || false;

      if (!matchesTitle && !matchesInstructor && !matchesTags) {
        return false;
      }
    }

    // Filter by level
    if (
      selectedFilters.level.length > 0 &&
      !selectedFilters.level.includes(course.level || "")
    ) {
      return false;
    }

    // Filter by type
    if (
      selectedFilters.type.length > 0 &&
      course.type &&
      !selectedFilters.type.includes(course.type)
    ) {
      return false;
    }

    // Filter by price
    if (selectedFilters.price.length > 0) {
      const isPriceMatched = selectedFilters.price.some((priceFilter) => {
        return (
          course.price === priceFilter ||
          (priceFilter === "Free" && course.price === "Free") ||
          (priceFilter === "Paid" && course.price !== "Free")
        );
      });

      if (!isPriceMatched) {
        return false;
      }
    }

    // Filter by category (if selected in sidebar)
    if (selectedFilters.category.length > 0) {
      const categoryMatched = course.categories.some((cat) =>
        selectedFilters.category.includes(cat),
      );
      if (!categoryMatched) {
        return false;
      }
    }

    return true;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "popular") {
      // Sort by whether it's paid (paid courses first) and then by ID (newer courses first)
      const aIsPaid = a.price !== "Free";
      const bIsPaid = b.price !== "Free";

      if (aIsPaid && !bIsPaid) return -1;
      if (!aIsPaid && bIsPaid) return 1;

      return b.id - a.id;
    } else if (sortBy === "newest") {
      return b.id - a.id; // Using ID as a proxy for date
    } else if (sortBy === "highest-rated") {
      return (b.rating || 0) - (a.rating || 0) || b.id - a.id;
    } else if (sortBy === "price-low-high") {
      const aPrice =
        a.price === "Free"
          ? 0
          : Number.parseFloat(a.price.replace(/[^0-9.]/g, ""));
      const bPrice =
        b.price === "Free"
          ? 0
          : Number.parseFloat(b.price.replace(/[^0-9.]/g, ""));
      return aPrice - bPrice;
    } else if (sortBy === "price-high-low") {
      const aPrice =
        a.price === "Free"
          ? 0
          : Number.parseFloat(a.price.replace(/[^0-9.]/g, ""));
      const bPrice =
        b.price === "Free"
          ? 0
          : Number.parseFloat(b.price.replace(/[^0-9.]/g, ""));
      return bPrice - aPrice;
    }
    return 0;
  });

  // Toggle filter selection
  const toggleFilter = (type: string, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((item) => item !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      return newFilters;
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters({
      level: [],
      duration: [],
      category: [],
      type: [],
      price: [],
    });
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <>
      <Navbar data-oid="l08i54f" />
      <main className="min-h-screen bg-white" data-oid="di--adc">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="603u3gy">
          <div className="container mx-auto px-4" data-oid="pijr_to">
            {/* Page Header */}
            <div className="mb-8" data-oid=".e57kfq">
              <h1
                className="text-3xl font-bold text-gray-900"
                data-oid="0.w-r5f"
              >
                Real Estate Courses
              </h1>
              <p className="text-gray-600 mt-2" data-oid="amyxnd2">
                Master Singapore's property market with expert-led courses
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8 border-b border-gray-200" data-oid="zfnta3b">
              <div className="flex space-x-8" data-oid="ipw1aw0">
                <button
                  className={`pb-4 px-1 font-medium text-lg transition-colors ${
                    activeTab === "courses"
                      ? "text-[#123B79] border-b-2 border-[#123B79]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("courses")}
                  data-oid="9-qpoo6"
                >
                  Individual Courses
                </button>
                <button
                  className={`pb-4 px-1 font-medium text-lg transition-colors ${
                    activeTab === "paths"
                      ? "text-[#123B79] border-b-2 border-[#123B79]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("paths")}
                  data-oid="mpf7uuc"
                >
                  Learning Paths
                </button>
              </div>
            </div>

            {activeTab === "courses" ? (
              <>
                {/* Main Content Area with Sidebar */}
                <div
                  className="flex flex-col lg:flex-row gap-8"
                  data-oid="z8f742y"
                >
                  {/* Sidebar Filters (Desktop) */}
                  <div
                    className="hidden lg:block w-64 flex-shrink-0"
                    data-oid="jjb2.ai"
                  >
                    <div className="sticky top-24" data-oid="gnfzetw">
                      <div className="mb-6" data-oid="71sodvd">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="l6yhgty"
                        >
                          Filters
                        </h3>
                        <div className="relative" data-oid="v3xiv1y">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                            data-oid="1bxt63k"
                          />

                          <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-oid="_i55aoy"
                          />
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="mb-6" data-oid="th9441-">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="rlll4lk"
                        >
                          Type
                        </h3>
                        <div className="space-y-2" data-oid="lf1jqn_">
                          {filterOptions.type.map((type) => (
                            <label
                              key={type}
                              className="flex items-center"
                              data-oid="vxiz9-8"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.type.includes(type)}
                                onChange={() => toggleFilter("type", type)}
                                data-oid="_:zpslp"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="t_pncyk"
                              >
                                {type}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6" data-oid="lf90xjr">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="6lpg34f"
                        >
                          Category
                        </h3>
                        <div
                          className="space-y-2 max-h-60 overflow-y-auto"
                          data-oid="bo8nimd"
                        >
                          {filterOptions.category.map((category) => (
                            <label
                              key={category}
                              className="flex items-center"
                              data-oid="b7xpjyy"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.category.includes(
                                  category,
                                )}
                                onChange={() =>
                                  toggleFilter("category", category)
                                }
                                data-oid="9e-01hh"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="6wgdecy"
                              >
                                {category}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Level Filter */}
                      <div className="mb-6" data-oid="k945r0q">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="9a3-1-5"
                        >
                          Level
                        </h3>
                        <div className="space-y-2" data-oid="4zi6_uy">
                          {filterOptions.level.map((level) => (
                            <label
                              key={level}
                              className="flex items-center"
                              data-oid="t75o4b9"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.level.includes(level)}
                                onChange={() => toggleFilter("level", level)}
                                data-oid="v39.luz"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="2l6dpt:"
                              >
                                {level}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div className="mb-6" data-oid="vi_ilzi">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="2eq.g69"
                        >
                          Price
                        </h3>
                        <div className="space-y-2" data-oid="qfb3aa.">
                          {filterOptions.price.map((price) => (
                            <label
                              key={price}
                              className="flex items-center"
                              data-oid="7232m4x"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.price.includes(price)}
                                onChange={() => toggleFilter("price", price)}
                                data-oid="yt5sbkf"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="w1jqami"
                              >
                                {price}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Clear Filters Button */}
                      {(selectedFilters.level.length > 0 ||
                        selectedFilters.duration.length > 0 ||
                        selectedFilters.category.length > 0 ||
                        selectedFilters.type.length > 0 ||
                        selectedFilters.price.length > 0 ||
                        activeCategory !== "all" ||
                        searchQuery) && (
                        <Button
                          variant="outline"
                          className="w-full text-sm"
                          onClick={clearFilters}
                          data-oid="om8403p"
                        >
                          Clear all filters
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Filter Button */}
                  <div
                    className="lg:hidden mb-4 flex items-center justify-between"
                    data-oid="hocm.zj"
                  >
                    <div className="text-sm text-gray-500" data-oid="z4dn8hr">
                      {sortedCourses.length}{" "}
                      {sortedCourses.length === 1 ? "course" : "courses"}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      data-oid="bls325s"
                    >
                      <Filter size={16} data-oid="-6vqdz7" />
                      Filters
                      {(selectedFilters.level.length > 0 ||
                        selectedFilters.duration.length > 0 ||
                        selectedFilters.category.length > 0 ||
                        selectedFilters.type.length > 0 ||
                        selectedFilters.price.length > 0) && (
                        <span
                          className="bg-[#123B79] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                          data-oid="1ls_iuy"
                        >
                          {selectedFilters.level.length +
                            selectedFilters.duration.length +
                            selectedFilters.category.length +
                            selectedFilters.type.length +
                            selectedFilters.price.length}
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Mobile Filters Modal */}
                  {showMobileFilters && (
                    <div
                      className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto p-4"
                      data-oid="_3._6_e"
                    >
                      <div
                        className="flex justify-between items-center mb-6"
                        data-oid="c1abls3"
                      >
                        <h2 className="text-xl font-bold" data-oid="t4i.5p2">
                          Filters
                        </h2>
                        <button
                          onClick={() => setShowMobileFilters(false)}
                          data-oid="wili6ki"
                        >
                          <X size={24} data-oid="5_lfqbu" />
                        </button>
                      </div>

                      {/* Search */}
                      <div className="mb-6" data-oid="xcd:egf">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="_uppy0s"
                        >
                          Search
                        </h3>
                        <div className="relative" data-oid="1e49ht2">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                            data-oid="y49eds1"
                          />

                          <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-oid="mdxwr8n"
                          />
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="mb-6" data-oid="huj:98d">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="qi.qxxd"
                        >
                          Type
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="5r-a_nn"
                        >
                          {filterOptions.type.map((type) => (
                            <Button
                              key={type}
                              variant={
                                selectedFilters.type.includes(type)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className={
                                selectedFilters.type.includes(type)
                                  ? "bg-[#123B79]"
                                  : ""
                              }
                              onClick={() => toggleFilter("type", type)}
                              data-oid="l8vk8tt"
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6" data-oid="1q.658p">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="ydgj0sh"
                        >
                          Category
                        </h3>
                        <div
                          className="flex flex-wrap gap-2 max-h-60 overflow-y-auto"
                          data-oid="wqj6as:"
                        >
                          {filterOptions.category.map((category) => (
                            <Button
                              key={category}
                              variant={
                                selectedFilters.category.includes(category)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className={
                                selectedFilters.category.includes(category)
                                  ? "bg-[#123B79]"
                                  : ""
                              }
                              onClick={() => toggleFilter("category", category)}
                              data-oid="dufojp0"
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Level Filter */}
                      <div className="mb-6" data-oid="rc-me_o">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="6efgx14"
                        >
                          Level
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="t7ktcd8"
                        >
                          {filterOptions.level.map((level) => (
                            <Button
                              key={level}
                              variant={
                                selectedFilters.level.includes(level)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className={
                                selectedFilters.level.includes(level)
                                  ? "bg-[#123B79]"
                                  : ""
                              }
                              onClick={() => toggleFilter("level", level)}
                              data-oid="jj47x:q"
                            >
                              {level}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div className="mb-6" data-oid="a:ycymd">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="qpoyflh"
                        >
                          Price
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="1g4qfgf"
                        >
                          {filterOptions.price.map((price) => (
                            <Button
                              key={price}
                              variant={
                                selectedFilters.price.includes(price)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className={
                                selectedFilters.price.includes(price)
                                  ? "bg-[#123B79]"
                                  : ""
                              }
                              onClick={() => toggleFilter("price", price)}
                              data-oid="jxx-.ba"
                            >
                              {price}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6" data-oid="kcgvdur">
                        {(selectedFilters.level.length > 0 ||
                          selectedFilters.duration.length > 0 ||
                          selectedFilters.category.length > 0 ||
                          selectedFilters.type.length > 0 ||
                          selectedFilters.price.length > 0 ||
                          activeCategory !== "all" ||
                          searchQuery) && (
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={clearFilters}
                            data-oid="8..28wh"
                          >
                            Clear all
                          </Button>
                        )}
                        <Button
                          className="flex-1 bg-[#123B79]"
                          onClick={() => setShowMobileFilters(false)}
                          data-oid="jzgm7-s"
                        >
                          See {sortedCourses.length} results
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Course Grid */}
                  <div className="flex-1" data-oid="u_ao821">
                    {/* Sort Options */}
                    <div
                      className="flex justify-between items-center mb-6"
                      data-oid="g9egj6c"
                    >
                      <div
                        className="hidden lg:block text-sm text-gray-500"
                        data-oid="zahzh3i"
                      >
                        {sortedCourses.length}{" "}
                        {sortedCourses.length === 1 ? "course" : "courses"}
                      </div>
                      <div className="ml-auto" data-oid="_l227ch">
                        <div
                          className="flex items-center gap-2"
                          data-oid="4wtid81"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="q56:w5l"
                          >
                            Sort by:
                          </span>
                          <div className="relative" data-oid="b6tfdjw">
                            <select
                              className="appearance-none bg-transparent border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              data-oid="46t18f1"
                            >
                              <option value="popular" data-oid="6pufnwq">
                                Popular
                              </option>
                              <option value="newest" data-oid="rr.56lb">
                                Newest
                              </option>
                              <option value="highest-rated" data-oid="cg7zh_n">
                                Highest Rated
                              </option>
                              <option value="price-low-high" data-oid="nv6exj8">
                                Price: Low to High
                              </option>
                              <option value="price-high-low" data-oid="2mmgb93">
                                Price: High to Low
                              </option>
                            </select>
                            <ChevronDown
                              size={16}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                              data-oid="8bt_-st"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="a9vpltv"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-lg overflow-hidden h-full flex flex-col border border-gray-200 shadow-sm"
                            data-oid="v:dzrhb"
                          >
                            <div
                              className="relative aspect-video bg-gray-200 animate-pulse"
                              data-oid="zfy16ah"
                            ></div>
                            <div
                              className="p-4 flex-1 flex flex-col"
                              data-oid="ipvz5rw"
                            >
                              <div
                                className="h-4 bg-gray-200 rounded animate-pulse mb-2"
                                data-oid="aryhgq5"
                              ></div>
                              <div
                                className="h-6 bg-gray-200 rounded animate-pulse mb-2"
                                data-oid="w_x.4hj"
                              ></div>
                              <div
                                className="h-4 bg-gray-200 rounded animate-pulse w-2/3"
                                data-oid="rl9.852"
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : sortedCourses.length === 0 ? (
                      <div
                        className="text-center py-16 bg-gray-50 rounded-lg"
                        data-oid="2iturw-"
                      >
                        <div className="text-5xl mb-4" data-oid="n-6sjhx">
                          🔍
                        </div>
                        <h3
                          className="text-xl font-semibold mb-2"
                          data-oid="ui14md-"
                        >
                          No courses found
                        </h3>
                        <p className="text-gray-500 mb-6" data-oid="9s1nw7e">
                          Try adjusting your filters or search query
                        </p>
                        <Button
                          variant="outline"
                          onClick={clearFilters}
                          data-oid="v97u-ia"
                        >
                          Clear all filters
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="dsg1.am"
                      >
                        {sortedCourses
                          .slice(
                            (currentPage - 1) * coursesPerPage,
                            currentPage * coursesPerPage,
                          )
                          .map((course, index) => (
                            <CourseCard
                              key={course.id}
                              course={course}
                              delay={index * 0.1}
                              data-oid="l84deh."
                            />
                          ))}
                      </div>
                    )}

                    {/* Pagination */}
                    {sortedCourses.length > 0 && (
                      <div
                        className="mt-12 flex justify-center"
                        data-oid="u-.5yy3"
                      >
                        <nav
                          className="flex items-center gap-1"
                          data-oid="5f1quc_"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() =>
                              handlePageChange(Math.max(currentPage - 1, 1))
                            }
                            data-oid="-zax.1o"
                          >
                            Previous
                          </Button>

                          {Array.from(
                            {
                              length: Math.min(
                                5,
                                Math.ceil(
                                  sortedCourses.length / coursesPerPage,
                                ),
                              ),
                            },
                            (_, i) => {
                              // Logic for showing page numbers
                              const totalPages = Math.ceil(
                                sortedCourses.length / coursesPerPage,
                              );
                              let pageNum = i + 1;

                              // If we have more than 5 pages, show ellipsis
                              if (totalPages > 5) {
                                if (currentPage <= 3) {
                                  // Near the start
                                  if (i >= 4) {
                                    if (i === 4) {
                                      return (
                                        <span
                                          key={i}
                                          className="px-2 text-gray-500"
                                          data-oid="_vlfipk"
                                        >
                                          ...
                                        </span>
                                      );
                                    }
                                    return null;
                                  }
                                } else if (currentPage >= totalPages - 2) {
                                  // Near the end
                                  pageNum = totalPages - 4 + i;
                                  if (i === 0) {
                                    return (
                                      <>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => handlePageChange(1)}
                                          data-oid="9pagrir"
                                        >
                                          1
                                        </Button>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="hd:-9jm"
                                        >
                                          ...
                                        </span>
                                      </>
                                    );
                                  }
                                } else {
                                  // In the middle
                                  pageNum = currentPage - 2 + i;
                                  if (i === 0) {
                                    return (
                                      <>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => handlePageChange(1)}
                                          data-oid="4eqd:8l"
                                        >
                                          1
                                        </Button>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="ehrbf7-"
                                        >
                                          ...
                                        </span>
                                      </>
                                    );
                                  }
                                  if (i === 4) {
                                    return (
                                      <>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="4kt1v94"
                                        >
                                          ...
                                        </span>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            handlePageChange(totalPages)
                                          }
                                          data-oid="_w34uu5"
                                        >
                                          {totalPages}
                                        </Button>
                                      </>
                                    );
                                  }
                                }
                              }

                              return (
                                <Button
                                  key={i}
                                  variant="outline"
                                  size="sm"
                                  className={
                                    pageNum === currentPage
                                      ? "bg-[#123B79] text-white border-[#123B79]"
                                      : ""
                                  }
                                  onClick={() => handlePageChange(pageNum)}
                                  data-oid="ar3b7ts"
                                >
                                  {pageNum}
                                </Button>
                              );
                            },
                          )}

                          <Button
                            variant="outline"
                            size="sm"
                            disabled={
                              currentPage >=
                              Math.ceil(sortedCourses.length / coursesPerPage)
                            }
                            onClick={() =>
                              handlePageChange(
                                Math.min(
                                  currentPage + 1,
                                  Math.ceil(
                                    sortedCourses.length / coursesPerPage,
                                  ),
                                ),
                              )
                            }
                            data-oid="lu3cbz2"
                          >
                            Next
                          </Button>
                        </nav>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              // Learning Paths Tab Content
              <div data-oid="_ziphn.">
                <div className="text-center mb-12" data-oid="ls34ss5">
                  <h2
                    className="text-3xl font-bold text-[#123B79] mb-4"
                    data-oid="2zhrrsb"
                  >
                    Learning Paths
                  </h2>
                  <p
                    className="text-xl text-gray-600 max-w-3xl mx-auto"
                    data-oid="f7y1n4g"
                  >
                    Structured course sequences designed to guide you from
                    beginner to expert in specific areas
                  </p>
                  <div
                    className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
                    data-oid="j9rqt:x"
                  ></div>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  data-oid="emzlvnu"
                >
                  {learningPaths.map((path, index) => (
                    <LearningPathCard
                      key={path.id}
                      path={path}
                      index={index}
                      data-oid="u9ewzgm"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
