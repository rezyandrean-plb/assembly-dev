"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Filter, X, ChevronDown } from "lucide-react";

interface CourseFilterProps {
  onFilterChange: (filter: string) => void;
  onSearchChange: (search: string) => void;
  activeFilter: string;
  searchQuery: string;
}

export default function CourseFilter({
  onFilterChange,
  onSearchChange,
  activeFilter,
  searchQuery,
}: CourseFilterProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "real-estate", label: "Real Estate" },
    { id: "finance", label: "Finance" },
    { id: "marketing", label: "Marketing" },
    { id: "skills", label: "Skills" },
    { id: "legal", label: "Legal" },
    { id: "analysis", label: "Analysis" },
  ];

  const levels = [
    { id: "all-levels", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  const durations = [
    { id: "any-duration", label: "Any Duration" },
    { id: "short", label: "0-4 weeks" },
    { id: "medium", label: "5-8 weeks" },
    { id: "long", label: "9+ weeks" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-oid="gxeu:ut">
      {/* Desktop View */}
      <div className="hidden md:block" data-oid=":n:d:20">
        <div className="flex flex-col md:flex-row gap-4" data-oid="4lh0085">
          <div className="relative flex-grow" data-oid="_vgxkh7">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="spe1n:2"
            />

            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="ixuo0qt"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="3zpmoph"
              >
                <X size={16} data-oid="-j0ejev" />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap" data-oid="uvbi-db">
            <div className="relative group" data-oid="1-7ubve">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="y.n-2wo"
              >
                Category
                <ChevronDown size={16} data-oid="dp:pnls" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="rf_g8l_"
              >
                <div className="p-2 space-y-1" data-oid="h3g9ebt">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id
                          ? "bg-[#123B79] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="wmmh2gv"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="443r0vn">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid=".nty2l8"
              >
                Level
                <ChevronDown size={16} data-oid="janstsw" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="vmnh2a3"
              >
                <div className="p-2 space-y-1" data-oid="2ba.eyu">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="ppuaq3a"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="kw6wsqa">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="ns_jggq"
              >
                Duration
                <ChevronDown size={16} data-oid="ytaga4g" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="zd2:uvl"
              >
                <div className="p-2 space-y-1" data-oid="xd-aueh">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="p0ap7.x"
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
      <div className="md:hidden" data-oid="ekyk1a2">
        <div className="flex gap-2 mb-4" data-oid=".03fse8">
          <div className="relative flex-grow" data-oid="09fn2:l">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="jvy3p_l"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="z7a7-3v"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="yty_xxv"
              >
                <X size={16} data-oid="4g2kf_2" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            data-oid="6h3ba.k"
          >
            <Filter size={20} data-oid="0ws3qc5" />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            data-oid="85j8j5s"
          >
            <div className="space-y-4 pt-2 pb-4" data-oid="kspa6..">
              <div data-oid="xs5y7r1">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="jcgdv:d"
                >
                  Category
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="enc8mps">
                  {filters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={
                        activeFilter === filter.id ? "default" : "outline"
                      }
                      size="sm"
                      className={
                        activeFilter === filter.id ? "bg-[#123B79]" : ""
                      }
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="rzhh8_z"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="utsg65w">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="7u2.06-"
                >
                  Level
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="unb7weh">
                  {levels.map((level) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      size="sm"
                      data-oid="fwpd6y1"
                    >
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="b_8e9uu">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid=".rlz4x3"
                >
                  Duration
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="jacb1_y">
                  {durations.map((duration) => (
                    <Button
                      key={duration.id}
                      variant="outline"
                      size="sm"
                      data-oid="c85qe6x"
                    >
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
  );
}
