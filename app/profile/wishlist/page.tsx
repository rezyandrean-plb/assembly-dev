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
    <div className="p-6" data-oid="zdvoumt">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="4k_fzch"
      >
        <div data-oid="y3mtelu">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="lofjbh-">
            Wishlist
          </h1>
          <p className="text-gray-500 mt-1" data-oid="sl_clbi">
            Courses you've bookmarked for later
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="42rs1f.">
          <div className="relative" data-oid="d.cyknj">
            <input
              type="text"
              placeholder="Search wishlist..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="8yfh1au"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="y442qk3"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="wl9uomy"
          >
            <Filter className="h-4 w-4" data-oid="0uf1y8r" />
            <span data-oid="cau6ek6">Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="zc3.3oq">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="t.14ba2"
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
          data-oid="c49rkuv"
        >
          On Sale ({onSaleItems.length})
        </button>
      </div>

      <div
        className="flex justify-between items-center mb-6"
        data-oid="_dkhtv1"
      >
        <p className="text-sm text-gray-500" data-oid="chc9d6m">
          {filteredItems.length} courses in wishlist
        </p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
          data-oid="4hknl03"
        >
          <ShoppingCart className="h-4 w-4" data-oid="g-7hqvs" />
          <span data-oid="-y84na_">Add All to Cart</span>
        </button>
      </div>

      {/* Course Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-oid=":how-lc"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="_g8.93n"
          >
            <div className="relative" data-oid=":xq34re">
              <div className="h-48 relative" data-oid="hoij4zb">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  data-oid="jn0e.g4"
                />
              </div>
              {item.onSale && (
                <div
                  className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  data-oid="w5:r:_t"
                >
                  SALE
                </div>
              )}
            </div>
            <div className="p-6" data-oid="e8hob78">
              <h2
                className="text-lg font-bold text-gray-800 mb-1 line-clamp-1"
                data-oid="n4mt4ln"
              >
                {item.title}
              </h2>
              <p
                className="text-sm text-gray-600 mb-3 line-clamp-2"
                data-oid="ex_c-_p"
              >
                {item.description}
              </p>

              <div className="flex items-center mb-3" data-oid="xtnbbly">
                <p className="text-sm text-gray-700" data-oid=".hig:r.">
                  By {item.instructor}
                </p>
              </div>

              <div className="flex items-center mb-3" data-oid="o14k0ta">
                <div className="flex items-center" data-oid=".md9eww">
                  <Star
                    className="h-4 w-4 text-yellow-500 fill-current"
                    data-oid="z9nprcp"
                  />

                  <span className="ml-1 text-sm font-medium" data-oid="azahpcx">
                    {item.rating}
                  </span>
                </div>
                <span className="mx-2 text-xs text-gray-500" data-oid="vge8h3q">
                  ({item.reviews} reviews)
                </span>
              </div>

              <div
                className="flex items-center justify-between text-sm text-gray-500 mb-4"
                data-oid="478zuv8"
              >
                <span data-oid="es0lrtz">{item.hours} hours</span>
                <span data-oid="ii9amnk">{item.lessons} lessons</span>
                <span data-oid="00mhuk6">Level: {item.level}</span>
              </div>

              <div
                className="flex items-center justify-between mb-4"
                data-oid="q_kaqop"
              >
                <div data-oid="2azvue8">
                  {item.onSale ? (
                    <div className="flex items-center" data-oid="yrw1d.s">
                      <span
                        className="text-lg font-bold text-gray-800"
                        data-oid="zbomp5v"
                      >
                        ${item.salePrice}
                      </span>
                      <span
                        className="ml-2 text-sm text-gray-500 line-through"
                        data-oid="2xp9gbn"
                      >
                        ${item.price}
                      </span>
                    </div>
                  ) : (
                    <span
                      className="text-lg font-bold text-gray-800"
                      data-oid="3z8mgac"
                    >
                      ${item.price}
                    </span>
                  )}
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  data-oid="a1va.yk"
                >
                  Add to Cart
                </button>
              </div>

              <div
                className="flex justify-between items-center"
                data-oid="1iids_d"
              >
                <Link
                  href={`/courses/${item.id}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                  data-oid="fi1bq2j"
                >
                  View Details
                </Link>
                <button
                  className="text-red-500 text-sm font-medium hover:underline"
                  data-oid="6viyzdq"
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
