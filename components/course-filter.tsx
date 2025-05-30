"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, Filter, X, ChevronDown } from "lucide-react"

interface CourseFilterProps {
  onFilterChange: (filter: string) => void
  onSearchChange: (search: string) => void
  activeFilter: string
  searchQuery: string
}

export default function CourseFilter({ onFilterChange, onSearchChange, activeFilter, searchQuery }: CourseFilterProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "real-estate", label: "Real Estate" },
    { id: "finance", label: "Finance" },
    { id: "marketing", label: "Marketing" },
    { id: "skills", label: "Skills" },
    { id: "legal", label: "Legal" },
    { id: "analysis", label: "Analysis" },
  ]

  const levels = [
    { id: "all-levels", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ]

  const durations = [
    { id: "any-duration", label: "Any Duration" },
    { id: "short", label: "0-4 weeks" },
    { id: "medium", label: "5-8 weeks" },
    { id: "long", label: "9+ weeks" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <div className="relative group">
              <Button variant="outline" className="flex items-center gap-1">
                Category
                <ChevronDown size={16} />
              </Button>
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block">
                <div className="p-2 space-y-1">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id ? "bg-[#123B79] text-white" : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Button variant="outline" className="flex items-center gap-1">
                Level
                <ChevronDown size={16} />
              </Button>
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block">
                <div className="p-2 space-y-1">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Button variant="outline" className="flex items-center gap-1">
                Duration
                <ChevronDown size={16} />
              </Button>
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block">
                <div className="p-2 space-y-1">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                    >
                      {duration.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <Button variant="outline" className="flex-shrink-0" onClick={() => setShowMobileFilters(!showMobileFilters)}>
            <Filter size={20} />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-2 pb-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={activeFilter === filter.id ? "default" : "outline"}
                      size="sm"
                      className={activeFilter === filter.id ? "bg-[#123B79]" : ""}
                      onClick={() => onFilterChange(filter.id)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Button key={level.id} variant="outline" size="sm">
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Duration</h3>
                <div className="flex flex-wrap gap-2">
                  {durations.map((duration) => (
                    <Button key={duration.id} variant="outline" size="sm">
                      {duration.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
