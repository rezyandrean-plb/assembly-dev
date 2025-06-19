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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-oid="45z824u">
      {/* Desktop View */}
      <div className="hidden md:block" data-oid="y.ljhdx">
        <div className="flex flex-col md:flex-row gap-4" data-oid="bezwpzk">
          <div className="relative flex-grow" data-oid="tjnpdb8">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid=".8kumye"
            />

            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="-fcj::n"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="uffpto2"
              >
                <X size={16} data-oid="hf2kssr" />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap" data-oid="v058sun">
            <div className="relative group" data-oid="gmo8dp6">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="6a3e.5w"
              >
                Category
                <ChevronDown size={16} data-oid="6p9n9zm" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="7p0u_g3"
              >
                <div className="p-2 space-y-1" data-oid="as8uxob">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id
                          ? "bg-[#123B79] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="zqs_8cj"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="kc9d1ov">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid=":og5dr1"
              >
                Level
                <ChevronDown size={16} data-oid="lzfrx6o" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="8q5g0ki"
              >
                <div className="p-2 space-y-1" data-oid="15:0k4g">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="nak518o"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid=":_tz778">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="awvvr1s"
              >
                Duration
                <ChevronDown size={16} data-oid="e2flmki" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="y.0g42y"
              >
                <div className="p-2 space-y-1" data-oid="f1ywjkc">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="_4l996i"
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
      <div className="md:hidden" data-oid="2wisqhj">
        <div className="flex gap-2 mb-4" data-oid=".xbvx73">
          <div className="relative flex-grow" data-oid="rj5zr2h">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="wom.mme"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="9k492d1"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="7wwm471"
              >
                <X size={16} data-oid="im6d85v" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            data-oid="0k7tz4v"
          >
            <Filter size={20} data-oid="mjmf2vo" />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            data-oid="a00dkar"
          >
            <div className="space-y-4 pt-2 pb-4" data-oid="38gc613">
              <div data-oid="_h19wfv">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="nzmopc1"
                >
                  Category
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="vgeimh9">
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
                      data-oid="c5flsdb"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="jspwl7m">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="i5-0ldp"
                >
                  Level
                </h3>
                <div className="flex flex-wrap gap-2" data-oid=".ecz08t">
                  {levels.map((level) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      size="sm"
                      data-oid="nh4_mbo"
                    >
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="ogzsrrx">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="p2h62ng"
                >
                  Duration
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="c:cmi-p">
                  {durations.map((duration) => (
                    <Button
                      key={duration.id}
                      variant="outline"
                      size="sm"
                      data-oid="oqb3m67"
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
