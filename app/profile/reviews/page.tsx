"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Filter, Star, Edit, Trash } from "lucide-react"

// Mock reviews data
const reviewsData = [
  {
    id: 1,
    course: "JavaScript Fundamentals",
    instructor: "Sarah Johnson",
    date: "May 20, 2023",
    rating: 5,
    content:
      "This course was exactly what I needed to strengthen my JavaScript skills. The instructor explains complex concepts in a way that's easy to understand, and the exercises helped reinforce what I learned. Highly recommended for anyone looking to build a solid foundation in JavaScript.",
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 2,
    course: "HTML & CSS Mastery",
    instructor: "Michael Chen",
    date: "March 15, 2023",
    rating: 4,
    content:
      "Great course for learning modern HTML and CSS techniques. The projects were practical and helped me apply what I learned. The only reason I'm not giving 5 stars is because some of the content could use updating to cover the latest CSS features.",
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 3,
    course: "Responsive Web Design",
    instructor: "Jessica Lee",
    date: "January 25, 2023",
    rating: 5,
    content:
      "Excellent course on responsive design! I learned so much about media queries, flexible layouts, and mobile-first design principles. The instructor was engaging and the course projects were challenging but doable. I feel much more confident in creating responsive websites now.",
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 4,
    course: "UI/UX Principles",
    instructor: "Emma Rodriguez",
    date: "October 10, 2022",
    rating: 5,
    content:
      "This course changed how I think about design. The instructor breaks down complex UI/UX concepts into digestible lessons, and the case studies were incredibly insightful. I've already started applying these principles to my work and have seen significant improvements in user engagement.",
    image: "/images/property-strategies-2025.jpg",
  },
  {
    id: 5,
    course: "Python for Beginners",
    instructor: "David Wilson",
    date: "July 5, 2022",
    rating: 4,
    content:
      "A solid introduction to Python programming. The course covers all the basics and includes some interesting projects to work on. I would have liked more advanced topics toward the end, but it's a great starting point for beginners.",
    image: "/images/property-strategies-2025.jpg",
  },
]

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Get reviews from the last 30 days
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const recentReviews = reviewsData.filter((review, index) => {
    // This is a simplified approach for demo purposes
    // In a real app, you would parse the date string and compare properly
    return index < 2
  })

  // Filter reviews based on active tab and search query
  const filteredReviews = reviewsData.filter((review) => {
    const matchesTab = activeTab === "all" || (activeTab === "recent" && recentReviews.some((r) => r.id === review.id))

    const matchesSearch = review.course.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesTab && matchesSearch
  })

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Reviews</h1>
          <p className="text-gray-500 mt-1">Reviews you've left for courses</p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search reviews..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Reviews ({reviewsData.length})
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "recent" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("recent")}
        >
          Recent ({recentReviews.length})
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.course}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-gray-800">{review.course}</h2>
                  <div className="flex items-center mt-2 md:mt-0">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-2">Instructor: {review.instructor}</p>

                <p className="text-gray-700 mb-4">{review.content}</p>

                <div className="flex justify-end space-x-3">
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-1">
                    <Edit className="h-3.5 w-3.5" />
                    <span>Edit</span>
                  </button>
                  <button className="px-3 py-1.5 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 flex items-center gap-1">
                    <Trash className="h-3.5 w-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
