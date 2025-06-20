"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";

// Mock wishlist data
const wishlistItems = [
  {
    id: 1,
    title: "Advanced JavaScript Patterns",
    description: "Master advanced design patterns and techniques",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviews: 342,
    hours: 18,
    lessons: 24,
    level: "Advanced",
    price: 129.99,
    salePrice: 89.99,
    onSale: true,
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 2,
    title: "Cloud Computing Fundamentals",
    description: "Learn cloud infrastructure and deployment",
    instructor: "Michael Chen",
    rating: 4.6,
    reviews: 215,
    hours: 20,
    lessons: 28,
    level: "Intermediate",
    price: 99.99,
    salePrice: null,
    onSale: false,
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 3,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications",
    instructor: "Jessica Lee",
    rating: 4.7,
    reviews: 189,
    hours: 22,
    lessons: 30,
    level: "Intermediate",
    price: 119.99,
    salePrice: 79.99,
    onSale: true,
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning algorithms",
    instructor: "David Wilson",
    rating: 4.9,
    reviews: 412,
    hours: 25,
    lessons: 32,
    level: "Advanced",
    price: 129.99,
    salePrice: null,
    onSale: false,
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 5,
    title: "UI/UX Design Masterclass",
    description: "Create beautiful and functional user interfaces",
    instructor: "Emma Rodriguez",
    rating: 4.5,
    reviews: 278,
    hours: 15,
    lessons: 20,
    level: "All Levels",
    price: 69.99,
    salePrice: null,
    onSale: false,
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 6,
    title: "DevOps for Developers",
    description: "Learn CI/CD pipelines and deployment automation",
    instructor: "Robert Kim",
    rating: 4.7,
    reviews: 156,
    hours: 20,
    lessons: 25,
    level: "Intermediate",
    price: 109.99,
    salePrice: null,
    onSale: false,
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 7,
    title: "Blockchain Development",
    description: "Build decentralized applications with blockchain",
    instructor: "Alex Thompson",
    rating: 4.6,
    reviews: 132,
    hours: 22,
    lessons: 28,
    level: "Advanced",
    price: 119.99,
    salePrice: null,
    onSale: false,
    image: "/images/property-strategies-2025.jpg",
  },
];

export default function WishlistPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get items on sale
  const onSaleItems = wishlistItems.filter((item) => item.onSale);

  // Filter items based on active tab and search query
  const filteredItems = wishlistItems.filter((item) => {
    const matchesTab =
      activeTab === "all" || (activeTab === "onSale" && item.onSale);
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6" data-oid="msnhhp5">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="u259g.e"
      >
        <div data-oid="55soei9">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="96x6nvx">
            Wishlist
          </h1>
          <p className="text-gray-500 mt-1" data-oid="_1z_1d3">
            Courses you've bookmarked for later
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="8_.h-ej">
          <div className="relative" data-oid="lci6rfj">
            <input
              type="text"
              placeholder="Search wishlist..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="8bmw0-l"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="9ac60_g"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="bb0wpuz"
          >
            <Filter className="h-4 w-4" data-oid="dgd3kr-" />
            <span data-oid="x5o8iej">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="6gu_l8_">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="nhhwrhx"
        >
          All Items ({wishlistItems.length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "onSale"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("onSale")}
          data-oid="goms9_m"
        >
          On Sale ({onSaleItems.length})
        </button>
      </div>

      <div
        className="flex justify-between items-center mb-6"
        data-oid="dgsgh97"
      >
        <p className="text-sm text-gray-500" data-oid="g1eno6:">
          {filteredItems.length} courses in wishlist
        </p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
          data-oid="e6g9rta"
        >
          <ShoppingCart className="h-4 w-4" data-oid="wi93u33" />
          <span data-oid="k4:5dzj">Add All to Cart</span>
        </button>
      </div>

      {/* Course Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-oid="vv3x6y0"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="uqwaugt"
          >
            <div className="relative" data-oid="tff6bd6">
              <div className="h-48 relative" data-oid="a6r8sa3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  data-oid="zn0b33j"
                />
              </div>
              {item.onSale && (
                <div
                  className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  data-oid="b67r2.j"
                >
                  SALE
                </div>
              )}
            </div>
            <div className="p-6" data-oid="6y.rpj9">
              <h2
                className="text-lg font-bold text-gray-800 mb-1 line-clamp-1"
                data-oid="12ct0sg"
              >
                {item.title}
              </h2>
              <p
                className="text-sm text-gray-600 mb-3 line-clamp-2"
                data-oid="sroy3ua"
              >
                {item.description}
              </p>

              <div className="flex items-center mb-3" data-oid="8n7k20z">
                <p className="text-sm text-gray-700" data-oid="kui6te8">
                  By {item.instructor}
                </p>
              </div>

              <div className="flex items-center mb-3" data-oid="xn2lcqp">
                <div className="flex items-center" data-oid="pqma3cj">
                  <Star
                    className="h-4 w-4 text-yellow-500 fill-current"
                    data-oid="xyet8u6"
                  />

                  <span className="ml-1 text-sm font-medium" data-oid="ohlt55t">
                    {item.rating}
                  </span>
                </div>
                <span className="mx-2 text-xs text-gray-500" data-oid="3cizda3">
                  ({item.reviews} reviews)
                </span>
              </div>

              <div
                className="flex items-center justify-between text-sm text-gray-500 mb-4"
                data-oid="2s21:pp"
              >
                <span data-oid="la.upy5">{item.hours} hours</span>
                <span data-oid="5..5q3a">{item.lessons} lessons</span>
                <span data-oid="syzk4u1">Level: {item.level}</span>
              </div>

              <div
                className="flex items-center justify-between mb-4"
                data-oid="32z9cij"
              >
                <div data-oid="pfq:ac1">
                  {item.onSale ? (
                    <div className="flex items-center" data-oid="4m-qlab">
                      <span
                        className="text-lg font-bold text-gray-800"
                        data-oid="jw_t:c4"
                      >
                        ${item.salePrice}
                      </span>
                      <span
                        className="ml-2 text-sm text-gray-500 line-through"
                        data-oid="6u41vcr"
                      >
                        ${item.price}
                      </span>
                    </div>
                  ) : (
                    <span
                      className="text-lg font-bold text-gray-800"
                      data-oid=":bj3vut"
                    >
                      ${item.price}
                    </span>
                  )}
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  data-oid="f1snplx"
                >
                  Add to Cart
                </button>
              </div>

              <div
                className="flex justify-between items-center"
                data-oid="1lhs3f2"
              >
                <Link
                  href={`/courses/${item.id}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                  data-oid="n-7kv0z"
                >
                  View Details
                </Link>
                <button
                  className="text-red-500 text-sm font-medium hover:underline"
                  data-oid="k8b65c0"
                >
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
