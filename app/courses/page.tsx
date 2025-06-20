"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import CourseCard from "@/components/course-card";
import LearningPathCard from "@/components/learning-path-card";
import Navbar from "@/components/navbar";
import { courses as mainCourses, Course } from "@/app/data/courses";

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
  const [courses, setCourses] = useState<Course[]>(mainCourses);
  const [loading, setLoading] = useState(false);
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
          data-oid="injp17d"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="0dh1yof" />
          <path d="M9 3v18" data-oid="yihk9xc" />
          <path d="M14 8h.01" data-oid="km:y36u" />
          <path d="M14 12h.01" data-oid="1me24.g" />
          <path d="M14 16h.01" data-oid="ba9y.3n" />
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
          data-oid="ngr7nra"
        >
          <path d="M2 12h6" data-oid="o.s2nnt" />
          <path d="M22 12h-6" data-oid="v70iase" />
          <path d="M12 2v2" data-oid="5rt84bj" />
          <path d="M12 8v2" data-oid="zyhsr5m" />
          <path d="M12 14v2" data-oid="z1iicw8" />
          <path d="M12 20v2" data-oid="avq8ft." />
          <path d="M19 9l-7 3-7-3" data-oid="szg7gqv" />
          <path d="M19 15l-7-3-7 3" data-oid="chymleb" />
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
          data-oid="z1tt8pg"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid="1sa00aw" />
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

  useEffect(() => {
    // This effect now only populates categories and filter options from the mainCourses data
    const allCategories = mainCourses.flatMap((course) => course.categories);
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories([
      { id: "all", name: "All Classes" },
      ...uniqueCategories.map((cat) => ({ id: cat, name: cat })),
    ]);

    const allLevels = mainCourses.map((course) => course.level || "All Levels");
    const uniqueLevels = Array.from(new Set(allLevels));
    setFilterOptions((prev) => ({ ...prev, level: uniqueLevels }));
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
      <Navbar data-oid="ot1jetq" />
      <main className="min-h-screen bg-white" data-oid="0mm8n2k">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="4mq7atz">
          <div className="container mx-auto px-4" data-oid="-tuid8u">
            {/* Page Header */}
            <div className="mb-8" data-oid="ig585ha">
              <h1
                className="text-3xl font-bold text-gray-900"
                data-oid="hm.gko3"
              >
                Real Estate Courses
              </h1>
              <p className="text-gray-600 mt-2" data-oid="ijfktms">
                Master Singapore's property market with expert-led courses
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8 border-b border-gray-200" data-oid="o5ci2tw">
              <div className="flex space-x-8" data-oid="14z0ah_">
                <button
                  className={`pb-4 px-1 font-medium text-lg transition-colors ${
                    activeTab === "courses"
                      ? "text-[#123B79] border-b-2 border-[#123B79]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("courses")}
                  data-oid="sa0rqaj"
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
                  data-oid="u5z8nmr"
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
                  data-oid="e..zn2q"
                >
                  {/* Sidebar Filters (Desktop) */}
                  <div
                    className="hidden lg:block w-64 flex-shrink-0"
                    data-oid="o4wv:7j"
                  >
                    <div className="sticky top-24" data-oid="jk7o9j_">
                      <div className="mb-6" data-oid="hxhla:4">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="t4j.y2b"
                        >
                          Filters
                        </h3>
                        <div className="relative" data-oid="rj64amf">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                            data-oid="qkj4qkl"
                          />

                          <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-oid="49jl:b_"
                          />
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="mb-6" data-oid="nm.mf7l">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="sga7b-f"
                        >
                          Type
                        </h3>
                        <div className="space-y-2" data-oid="mk_3w:x">
                          {filterOptions.type.map((type) => (
                            <label
                              key={type}
                              className="flex items-center"
                              data-oid="5_r0why"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.type.includes(type)}
                                onChange={() => toggleFilter("type", type)}
                                data-oid="aue9z8."
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="xjumdye"
                              >
                                {type}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6" data-oid="2.y2a18">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="mr68q0y"
                        >
                          Category
                        </h3>
                        <div
                          className="space-y-2 max-h-60 overflow-y-auto"
                          data-oid="tox7poc"
                        >
                          {filterOptions.category.map((category) => (
                            <label
                              key={category}
                              className="flex items-center"
                              data-oid="x6in516"
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
                                data-oid="o0hs8tk"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="e2uk6ca"
                              >
                                {category}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Level Filter */}
                      <div className="mb-6" data-oid="3xsub2b">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="vl9qgx2"
                        >
                          Level
                        </h3>
                        <div className="space-y-2" data-oid="fktexzq">
                          {filterOptions.level.map((level) => (
                            <label
                              key={level}
                              className="flex items-center"
                              data-oid="uk1-0n8"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.level.includes(level)}
                                onChange={() => toggleFilter("level", level)}
                                data-oid="bhew::x"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="1.9h30b"
                              >
                                {level}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div className="mb-6" data-oid="k2-5m10">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="huz7xar"
                        >
                          Price
                        </h3>
                        <div className="space-y-2" data-oid="rzxxms7">
                          {filterOptions.price.map((price) => (
                            <label
                              key={price}
                              className="flex items-center"
                              data-oid="q:piguw"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.price.includes(price)}
                                onChange={() => toggleFilter("price", price)}
                                data-oid="ss1rghl"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="t3c8scp"
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
                          data-oid="q2vy:t0"
                        >
                          Clear all filters
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Filter Button */}
                  <div
                    className="lg:hidden mb-4 flex items-center justify-between"
                    data-oid="au6k.lz"
                  >
                    <div className="text-sm text-gray-500" data-oid="eu.2re8">
                      {sortedCourses.length}{" "}
                      {sortedCourses.length === 1 ? "course" : "courses"}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      data-oid="imjsc0y"
                    >
                      <Filter size={16} data-oid="h18r9b6" />
                      Filters
                      {(selectedFilters.level.length > 0 ||
                        selectedFilters.duration.length > 0 ||
                        selectedFilters.category.length > 0 ||
                        selectedFilters.type.length > 0 ||
                        selectedFilters.price.length > 0) && (
                        <span
                          className="bg-[#123B79] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                          data-oid="zu81pbu"
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
                      data-oid="aidzj3w"
                    >
                      <div
                        className="flex justify-between items-center mb-6"
                        data-oid="f7y3fg."
                      >
                        <h2 className="text-xl font-bold" data-oid=".qv_0b0">
                          Filters
                        </h2>
                        <button
                          onClick={() => setShowMobileFilters(false)}
                          data-oid="to.7cu7"
                        >
                          <X size={24} data-oid="8xa8n2d" />
                        </button>
                      </div>

                      {/* Search */}
                      <div className="mb-6" data-oid="dvztru:">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="630foag"
                        >
                          Search
                        </h3>
                        <div className="relative" data-oid="uopluvt">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                            data-oid="2em.5xl"
                          />

                          <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-oid="e67.df8"
                          />
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="mb-6" data-oid="85cvoor">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="nitco:q"
                        >
                          Type
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="nt95gz6"
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
                              data-oid="qkrwp10"
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6" data-oid="kn8lxjl">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="5oh-4:2"
                        >
                          Category
                        </h3>
                        <div
                          className="flex flex-wrap gap-2 max-h-60 overflow-y-auto"
                          data-oid="ybxmzj_"
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
                              data-oid="fu4ze1."
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Level Filter */}
                      <div className="mb-6" data-oid="u98zilu">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="3j3q3:c"
                        >
                          Level
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="_3xuzwh"
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
                              data-oid="a4fu5do"
                            >
                              {level}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div className="mb-6" data-oid="ca5:zc-">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="t3athjk"
                        >
                          Price
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="9jp38y1"
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
                              data-oid="ch7h4pa"
                            >
                              {price}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6" data-oid="br5gx9e">
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
                            data-oid="y559llk"
                          >
                            Clear all
                          </Button>
                        )}
                        <Button
                          className="flex-1 bg-[#123B79]"
                          onClick={() => setShowMobileFilters(false)}
                          data-oid="7l8cy2x"
                        >
                          See {sortedCourses.length} results
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Course Grid */}
                  <div className="flex-1" data-oid="ztaldkk">
                    {/* Sort Options */}
                    <div
                      className="flex justify-between items-center mb-6"
                      data-oid="ls2ojfl"
                    >
                      <div
                        className="hidden lg:block text-sm text-gray-500"
                        data-oid=".n-otg9"
                      >
                        {sortedCourses.length}{" "}
                        {sortedCourses.length === 1 ? "course" : "courses"}
                      </div>
                      <div className="ml-auto" data-oid="wwpjeq1">
                        <div
                          className="flex items-center gap-2"
                          data-oid="tfcqypm"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="b2hvv:c"
                          >
                            Sort by:
                          </span>
                          <div className="relative" data-oid="wul59.6">
                            <select
                              className="appearance-none bg-transparent border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              data-oid="dfh3.el"
                            >
                              <option value="popular" data-oid="19zcug6">
                                Popular
                              </option>
                              <option value="newest" data-oid="_5iwobb">
                                Newest
                              </option>
                              <option value="highest-rated" data-oid="jw_3r-t">
                                Highest Rated
                              </option>
                              <option value="price-low-high" data-oid=":6:39el">
                                Price: Low to High
                              </option>
                              <option value="price-high-low" data-oid="qv9chu9">
                                Price: High to Low
                              </option>
                            </select>
                            <ChevronDown
                              size={16}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                              data-oid="koppq9k"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="ifc-x:c"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-lg overflow-hidden h-full flex flex-col border border-gray-200 shadow-sm"
                            data-oid="l47ivmv"
                          >
                            <div
                              className="relative aspect-video bg-gray-200 animate-pulse"
                              data-oid="k0bnic6"
                            ></div>
                            <div
                              className="p-4 flex-1 flex flex-col"
                              data-oid="n4nzlh8"
                            >
                              <div
                                className="h-4 bg-gray-200 rounded animate-pulse mb-2"
                                data-oid=".o2.pxd"
                              ></div>
                              <div
                                className="h-6 bg-gray-200 rounded animate-pulse mb-2"
                                data-oid="5pmcfrb"
                              ></div>
                              <div
                                className="h-4 bg-gray-200 rounded animate-pulse w-2/3"
                                data-oid="sj89p4-"
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : sortedCourses.length === 0 ? (
                      <div
                        className="text-center py-16 bg-gray-50 rounded-lg"
                        data-oid="_d9crob"
                      >
                        <div className="text-5xl mb-4" data-oid="hyzjadl">
                          🔍
                        </div>
                        <h3
                          className="text-xl font-semibold mb-2"
                          data-oid="o7e2ond"
                        >
                          No courses found
                        </h3>
                        <p className="text-gray-500 mb-6" data-oid="h-ol01g">
                          Try adjusting your filters or search query
                        </p>
                        <Button
                          variant="outline"
                          onClick={clearFilters}
                          data-oid="on1vh16"
                        >
                          Clear all filters
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="vcssjxz"
                      >
                        {sortedCourses
                          .slice(
                            (currentPage - 1) * coursesPerPage,
                            currentPage * coursesPerPage,
                          )
                          .map((course, index) => (
                            <CourseCard
                              key={course.id}
                              course={{
                                title: course.title,
                                level: course.level || "All Levels",
                                duration: course.duration || "Self-paced",
                                image: course.image,
                                slug: course.slug,
                                instructorIds: course.instructorIds || [],
                              }}
                              delay={0.1 * (index % 3)}
                              data-oid="3_2qtbl"
                            />
                          ))}
                      </div>
                    )}

                    {/* Pagination */}
                    {sortedCourses.length > 0 && (
                      <div
                        className="mt-12 flex justify-center"
                        data-oid="_a1r._r"
                      >
                        <nav
                          className="flex items-center gap-1"
                          data-oid="jz9qdvf"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() =>
                              handlePageChange(Math.max(currentPage - 1, 1))
                            }
                            data-oid="c083k.v"
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
                                          data-oid="ua45vnk"
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
                                          data-oid="9w:9gfa"
                                        >
                                          1
                                        </Button>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="k.od0e8"
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
                                          data-oid="ln3c6_g"
                                        >
                                          1
                                        </Button>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="-1yqs7-"
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
                                          data-oid="athv19o"
                                        >
                                          ...
                                        </span>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            handlePageChange(totalPages)
                                          }
                                          data-oid="lz.-8:u"
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
                                  data-oid="xr104l3"
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
                            data-oid="h:xk:if"
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
              <div data-oid="28qnhq-">
                <div className="text-center mb-12" data-oid="uqi:k9r">
                  <h2
                    className="text-3xl font-bold text-[#123B79] mb-4"
                    data-oid="6n4r2km"
                  >
                    Learning Paths
                  </h2>
                  <p
                    className="text-xl text-gray-600 max-w-3xl mx-auto"
                    data-oid="xp9s3h5"
                  >
                    Structured course sequences designed to guide you from
                    beginner to expert in specific areas
                  </p>
                  <div
                    className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
                    data-oid="r7b5p29"
                  ></div>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  data-oid="m_1.0kg"
                >
                  {learningPaths.map((path, index) => (
                    <LearningPathCard
                      key={path.id}
                      path={path}
                      index={index}
                      data-oid="2jf9i0u"
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
