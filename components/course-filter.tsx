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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-oid="0.xr:hk">
      {/* Desktop View */}
      <div className="hidden md:block" data-oid="4zkq8ax">
        <div className="flex flex-col md:flex-row gap-4" data-oid="ctussy2">
          <div className="relative flex-grow" data-oid="li4eutq">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid=":272ocd"
            />
            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="xsd2js:"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="4dgrrj9"
              >
                <X size={16} data-oid="dnl7ye9" />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap" data-oid="8v7if4i">
            <div className="relative group" data-oid="p69fi3f">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="i4f.b9y"
              >
                Category
                <ChevronDown size={16} data-oid="pczzil8" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="k0hmfeo"
              >
                <div className="p-2 space-y-1" data-oid="dxfw0l6">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id
                          ? "bg-[#123B79] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="8re-06l"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="ng67gc0">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="4..m53:"
              >
                Level
                <ChevronDown size={16} data-oid="i671su:" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="tswp64-"
              >
                <div className="p-2 space-y-1" data-oid=":llhnuq">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="z761dbr"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="jecza04">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="72olcv1"
              >
                Duration
                <ChevronDown size={16} data-oid="2xd_tqb" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="m_:w:jh"
              >
                <div className="p-2 space-y-1" data-oid="0asroyk">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="wa:ph29"
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
      <div className="md:hidden" data-oid="qt9uihg">
        <div className="flex gap-2 mb-4" data-oid="f2ki.c4">
          <div className="relative flex-grow" data-oid=".m2v:p_">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="hqd.xjy"
            />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="v8lbg:v"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="axeioce"
              >
                <X size={16} data-oid="mfja76j" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            data-oid="61h4gne"
          >
            <Filter size={20} data-oid="zl7wkn1" />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            data-oid="hsi-.pp"
          >
            <div className="space-y-4 pt-2 pb-4" data-oid="1ag3oby">
              <div data-oid="1gox5ff">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="66dwpiy"
                >
                  Category
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="kfhsb5.">
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
                      data-oid="qa--85v"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="yqueajs">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="daohip3"
                >
                  Level
                </h3>
                <div className="flex flex-wrap gap-2" data-oid=".73vevq">
                  {levels.map((level) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      size="sm"
                      data-oid="6b2uxc7"
                    >
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="-80uc0x">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="vli2:.t"
                >
                  Duration
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="9.mo51n">
                  {durations.map((duration) => (
                    <Button
                      key={duration.id}
                      variant="outline"
                      size="sm"
                      data-oid="og7ooem"
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
