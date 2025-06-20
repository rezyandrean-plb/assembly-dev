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
          data-oid="udc_di3"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" data-oid="asznbex" />
          <path d="M9 3v18" data-oid="_yvko_x" />
          <path d="M14 8h.01" data-oid="hz-40id" />
          <path d="M14 12h.01" data-oid="oyma5ds" />
          <path d="M14 16h.01" data-oid="jt:4hw3" />
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
          data-oid="c-qfw_k"
        >
          <path d="M2 12h6" data-oid="bas1xvy" />
          <path d="M22 12h-6" data-oid="0y7rofd" />
          <path d="M12 2v2" data-oid="mg.xwnc" />
          <path d="M12 8v2" data-oid="wu_mc5w" />
          <path d="M12 14v2" data-oid="no5thn." />
          <path d="M12 20v2" data-oid="ygrp0d0" />
          <path d="M19 9l-7 3-7-3" data-oid="0pd7jk3" />
          <path d="M19 15l-7-3-7 3" data-oid="k9hb69j" />
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
          data-oid=".5dodp-"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" data-oid=".qc80ag" />
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
      <Navbar data-oid="sd-keoi" />
      <main className="min-h-screen bg-white" data-oid=":_9lem4">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="h9kfq90">
          <div className="container mx-auto px-4" data-oid="f4ikeic">
            {/* Page Header */}
            <div className="mb-8" data-oid="w6_.lee">
              <h1
                className="text-3xl font-bold text-gray-900"
                data-oid="hp_mi1n"
              >
                Real Estate Courses
              </h1>
              <p className="text-gray-600 mt-2" data-oid="a.5tvjt">
                Master Singapore's property market with expert-led courses
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8 border-b border-gray-200" data-oid="c_fbhtd">
              <div className="flex space-x-8" data-oid="mse._8a">
                <button
                  className={`pb-4 px-1 font-medium text-lg transition-colors ${
                    activeTab === "courses"
                      ? "text-[#123B79] border-b-2 border-[#123B79]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("courses")}
                  data-oid="ok5z.72"
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
                  data-oid="m6pcppy"
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
                  data-oid="cl0rp7v"
                >
                  {/* Sidebar Filters (Desktop) */}
                  <div
                    className="hidden lg:block w-64 flex-shrink-0"
                    data-oid="gzppp4w"
                  >
                    <div className="sticky top-24" data-oid="_kiwd1l">
                      <div className="mb-6" data-oid="4lcyuw7">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="a7vci-x"
                        >
                          Filters
                        </h3>
                        <div className="relative" data-oid="szpx47:">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                            data-oid="t53sip_"
                          />

                          <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-oid="-rll0b0"
                          />
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="mb-6" data-oid="rl74l:7">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="t8c.hgz"
                        >
                          Type
                        </h3>
                        <div className="space-y-2" data-oid="vtq6w-j">
                          {filterOptions.type.map((type) => (
                            <label
                              key={type}
                              className="flex items-center"
                              data-oid="0yku2o1"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.type.includes(type)}
                                onChange={() => toggleFilter("type", type)}
                                data-oid="jd75y8i"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="jzg:tdx"
                              >
                                {type}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6" data-oid="kkb7zzo">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="meowely"
                        >
                          Category
                        </h3>
                        <div
                          className="space-y-2 max-h-60 overflow-y-auto"
                          data-oid="j.pr2r9"
                        >
                          {filterOptions.category.map((category) => (
                            <label
                              key={category}
                              className="flex items-center"
                              data-oid="xfppm-a"
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
                                data-oid="yrty6hs"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="982ygb8"
                              >
                                {category}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Level Filter */}
                      <div className="mb-6" data-oid="jn92ex5">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="g7ov4ag"
                        >
                          Level
                        </h3>
                        <div className="space-y-2" data-oid="gzxzeuy">
                          {filterOptions.level.map((level) => (
                            <label
                              key={level}
                              className="flex items-center"
                              data-oid="wx-_smq"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.level.includes(level)}
                                onChange={() => toggleFilter("level", level)}
                                data-oid="_u2nt7t"
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid=".alfx9y"
                              >
                                {level}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div className="mb-6" data-oid="d2-_kfz">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="0b4r.p0"
                        >
                          Price
                        </h3>
                        <div className="space-y-2" data-oid="ngily0s">
                          {filterOptions.price.map((price) => (
                            <label
                              key={price}
                              className="flex items-center"
                              data-oid="tg7t6x5"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                                checked={selectedFilters.price.includes(price)}
                                onChange={() => toggleFilter("price", price)}
                                data-oid="64uuay."
                              />

                              <span
                                className="ml-2 text-sm text-gray-700"
                                data-oid="-lme6ow"
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
                          data-oid="utvoz8-"
                        >
                          Clear all filters
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Filter Button */}
                  <div
                    className="lg:hidden mb-4 flex items-center justify-between"
                    data-oid="f-s67gk"
                  >
                    <div className="text-sm text-gray-500" data-oid="lxvd78:">
                      {sortedCourses.length}{" "}
                      {sortedCourses.length === 1 ? "course" : "courses"}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      data-oid="akjsml:"
                    >
                      <Filter size={16} data-oid="f:7xiso" />
                      Filters
                      {(selectedFilters.level.length > 0 ||
                        selectedFilters.duration.length > 0 ||
                        selectedFilters.category.length > 0 ||
                        selectedFilters.type.length > 0 ||
                        selectedFilters.price.length > 0) && (
                        <span
                          className="bg-[#123B79] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                          data-oid="w53v-6u"
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
                      data-oid="9tz346d"
                    >
                      <div
                        className="flex justify-between items-center mb-6"
                        data-oid="w4mhz0p"
                      >
                        <h2 className="text-xl font-bold" data-oid="1zccgm_">
                          Filters
                        </h2>
                        <button
                          onClick={() => setShowMobileFilters(false)}
                          data-oid="wm78ba4"
                        >
                          <X size={24} data-oid="ij2ei8y" />
                        </button>
                      </div>

                      {/* Search */}
                      <div className="mb-6" data-oid="_tcx7hn">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid=":lrse7n"
                        >
                          Search
                        </h3>
                        <div className="relative" data-oid="ig_y94e">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                            data-oid="4dx5zva"
                          />

                          <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-oid="9ei3kyg"
                          />
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="mb-6" data-oid="a9gwe-7">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="k2h53fz"
                        >
                          Type
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid=":uk-266"
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
                              data-oid="x9vr1hz"
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6" data-oid="6o.p5c2">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="bib-0i7"
                        >
                          Category
                        </h3>
                        <div
                          className="flex flex-wrap gap-2 max-h-60 overflow-y-auto"
                          data-oid="hzyihy2"
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
                              data-oid="_y5eoy5"
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Level Filter */}
                      <div className="mb-6" data-oid="-t1qf60">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="q64k4um"
                        >
                          Level
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="dl503ar"
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
                              data-oid="9816io:"
                            >
                              {level}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div className="mb-6" data-oid="n0lv1o0">
                        <h3
                          className="font-medium text-gray-900 mb-3"
                          data-oid="-ewebcv"
                        >
                          Price
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="n8y_mod"
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
                              data-oid="3h29zz7"
                            >
                              {price}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6" data-oid="3apy5_y">
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
                            data-oid="iy.7utt"
                          >
                            Clear all
                          </Button>
                        )}
                        <Button
                          className="flex-1 bg-[#123B79]"
                          onClick={() => setShowMobileFilters(false)}
                          data-oid="x2vatj5"
                        >
                          See {sortedCourses.length} results
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Course Grid */}
                  <div className="flex-1" data-oid="e-k3zo4">
                    {/* Sort Options */}
                    <div
                      className="flex justify-between items-center mb-6"
                      data-oid="58xi10q"
                    >
                      <div
                        className="hidden lg:block text-sm text-gray-500"
                        data-oid="as3vs.3"
                      >
                        {sortedCourses.length}{" "}
                        {sortedCourses.length === 1 ? "course" : "courses"}
                      </div>
                      <div className="ml-auto" data-oid="6w.9x7_">
                        <div
                          className="flex items-center gap-2"
                          data-oid="tet9-ya"
                        >
                          <span
                            className="text-sm text-gray-500"
                            data-oid="7:-h50e"
                          >
                            Sort by:
                          </span>
                          <div className="relative" data-oid="1_ztiaf">
                            <select
                              className="appearance-none bg-transparent border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#123B79]"
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              data-oid="8izshd8"
                            >
                              <option value="popular" data-oid="dzifjrj">
                                Popular
                              </option>
                              <option value="newest" data-oid="2s6t_b_">
                                Newest
                              </option>
                              <option value="highest-rated" data-oid=".:ehd9y">
                                Highest Rated
                              </option>
                              <option value="price-low-high" data-oid="rg.4:q1">
                                Price: Low to High
                              </option>
                              <option value="price-high-low" data-oid="x0kmh6p">
                                Price: High to Low
                              </option>
                            </select>
                            <ChevronDown
                              size={16}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                              data-oid="cuk8:yd"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="zpavedf"
                      >
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-lg overflow-hidden h-full flex flex-col border border-gray-200 shadow-sm"
                            data-oid="scquac_"
                          >
                            <div
                              className="relative aspect-video bg-gray-200 animate-pulse"
                              data-oid="cn90l_-"
                            ></div>
                            <div
                              className="p-4 flex-1 flex flex-col"
                              data-oid="zohlhx_"
                            >
                              <div
                                className="h-4 bg-gray-200 rounded animate-pulse mb-2"
                                data-oid="1hi0b-e"
                              ></div>
                              <div
                                className="h-6 bg-gray-200 rounded animate-pulse mb-2"
                                data-oid="b6s-ynl"
                              ></div>
                              <div
                                className="h-4 bg-gray-200 rounded animate-pulse w-2/3"
                                data-oid="3iipv.e"
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : sortedCourses.length === 0 ? (
                      <div
                        className="text-center py-16 bg-gray-50 rounded-lg"
                        data-oid="vi5_00w"
                      >
                        <div className="text-5xl mb-4" data-oid="o7sp53c">
                          🔍
                        </div>
                        <h3
                          className="text-xl font-semibold mb-2"
                          data-oid="mlvj15l"
                        >
                          No courses found
                        </h3>
                        <p className="text-gray-500 mb-6" data-oid="u-_saiu">
                          Try adjusting your filters or search query
                        </p>
                        <Button
                          variant="outline"
                          onClick={clearFilters}
                          data-oid="_op27h_"
                        >
                          Clear all filters
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="-50tf97"
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
                              data-oid="83r2g9c"
                            />
                          ))}
                      </div>
                    )}

                    {/* Pagination */}
                    {sortedCourses.length > 0 && (
                      <div
                        className="mt-12 flex justify-center"
                        data-oid="6z:psqw"
                      >
                        <nav
                          className="flex items-center gap-1"
                          data-oid="wi-6buz"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() =>
                              handlePageChange(Math.max(currentPage - 1, 1))
                            }
                            data-oid="3i50_8e"
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
                                          data-oid="ohdff0q"
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
                                          data-oid="akcw1d:"
                                        >
                                          1
                                        </Button>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="win695f"
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
                                          data-oid="8c35vv_"
                                        >
                                          1
                                        </Button>
                                        <span
                                          className="px-2 text-gray-500"
                                          data-oid="iajo:1a"
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
                                          data-oid="7bu6l1."
                                        >
                                          ...
                                        </span>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            handlePageChange(totalPages)
                                          }
                                          data-oid="_vdmd0n"
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
                                  data-oid="g0:swyx"
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
                            data-oid="066cq0j"
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
              <div data-oid="hc62c4g">
                <div className="text-center mb-12" data-oid="vkl_v-6">
                  <h2
                    className="text-3xl font-bold text-[#123B79] mb-4"
                    data-oid="zu_3f8k"
                  >
                    Learning Paths
                  </h2>
                  <p
                    className="text-xl text-gray-600 max-w-3xl mx-auto"
                    data-oid="5yr.qpz"
                  >
                    Structured course sequences designed to guide you from
                    beginner to expert in specific areas
                  </p>
                  <div
                    className="w-20 h-1 bg-[#F0A500] mx-auto mt-4"
                    data-oid="tc2acs0"
                  ></div>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  data-oid="rog0qty"
                >
                  {learningPaths.map((path, index) => (
                    <LearningPathCard
                      key={path.id}
                      path={path}
                      index={index}
                      data-oid=":sgdxbf"
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
