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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-oid="95ndo3j">
      {/* Desktop View */}
      <div className="hidden md:block" data-oid="y8h1g3t">
        <div className="flex flex-col md:flex-row gap-4" data-oid="rswfio4">
          <div className="relative flex-grow" data-oid="ltfo5_.">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="fw8u80z"
            />

            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="40i.99_"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="op-1xmm"
              >
                <X size={16} data-oid="lue4fho" />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap" data-oid="o6mfn3w">
            <div className="relative group" data-oid="-zeo53g">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="w1ibube"
              >
                Category
                <ChevronDown size={16} data-oid="bhhlz_4" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="q.kcea."
              >
                <div className="p-2 space-y-1" data-oid="4ljo8fs">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id
                          ? "bg-[#123B79] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="sld:6-g"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="uejjom.">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="i_ceq7q"
              >
                Level
                <ChevronDown size={16} data-oid="4rl84za" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="eui8s8y"
              >
                <div className="p-2 space-y-1" data-oid="fj:m5pn">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="bri:vpx"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="7fl7w_4">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="nfs6hzn"
              >
                Duration
                <ChevronDown size={16} data-oid="xq93gug" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="ljs-12i"
              >
                <div className="p-2 space-y-1" data-oid="x:shd7e">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="448kzlc"
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
      <div className="md:hidden" data-oid="v9_qcgv">
        <div className="flex gap-2 mb-4" data-oid="2ucwzyk">
          <div className="relative flex-grow" data-oid="pkf_m_b">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="_.2.:tl"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="zhcl7zw"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="ly:cmk."
              >
                <X size={16} data-oid="kxtlweh" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            data-oid="77vgnpp"
          >
            <Filter size={20} data-oid="datxkoj" />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            data-oid="12vdrzr"
          >
            <div className="space-y-4 pt-2 pb-4" data-oid="oop1sab">
              <div data-oid="n7r69jb">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="m26cdbs"
                >
                  Category
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="8wdxgvc">
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
                      data-oid="4zk221n"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="6:yglcj">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="pq4fjbs"
                >
                  Level
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="b3a.xq_">
                  {levels.map((level) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      size="sm"
                      data-oid="-pzrc:r"
                    >
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="mo6imz4">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="03c-r:h"
                >
                  Duration
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="dikzsec">
                  {durations.map((duration) => (
                    <Button
                      key={duration.id}
                      variant="outline"
                      size="sm"
                      data-oid="i4:_48e"
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
