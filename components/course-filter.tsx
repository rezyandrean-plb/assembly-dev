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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-oid="xexrjbh">
      {/* Desktop View */}
      <div className="hidden md:block" data-oid="nd3xbyz">
        <div className="flex flex-col md:flex-row gap-4" data-oid="e80.wuq">
          <div className="relative flex-grow" data-oid="mm15ag:">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="tr46u-3"
            />

            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="py6v6fs"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="9v.tdyr"
              >
                <X size={16} data-oid="ye_zzuj" />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap" data-oid="wja6e82">
            <div className="relative group" data-oid="-yiyz1u">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="o4c2s59"
              >
                Category
                <ChevronDown size={16} data-oid="tog_zx0" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="lqiayuk"
              >
                <div className="p-2 space-y-1" data-oid="e86tc.y">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id
                          ? "bg-[#123B79] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="e0qqv3m"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="p.suw2z">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="jb4vn9n"
              >
                Level
                <ChevronDown size={16} data-oid="uqs8cwi" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="wccm-xf"
              >
                <div className="p-2 space-y-1" data-oid="dfhyt1r">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="kfdtu:n"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="kbxur12">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="9o7fxww"
              >
                Duration
                <ChevronDown size={16} data-oid="t5w21g4" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="4332.qs"
              >
                <div className="p-2 space-y-1" data-oid="_noxhrn">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="f:jkk4:"
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
      <div className="md:hidden" data-oid="np71t.2">
        <div className="flex gap-2 mb-4" data-oid="vspcq7t">
          <div className="relative flex-grow" data-oid="7r42i6:">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="anw730-"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="hbl1do_"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="6fkntl5"
              >
                <X size={16} data-oid="f_178xk" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            data-oid="wer9geh"
          >
            <Filter size={20} data-oid="b.9484b" />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            data-oid="y2i7zdk"
          >
            <div className="space-y-4 pt-2 pb-4" data-oid="x66_2ga">
              <div data-oid="yhs8_ep">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="77iw9j9"
                >
                  Category
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="zh8xauc">
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
                      data-oid="t5tqu65"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="6tth85f">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="1vg8ttl"
                >
                  Level
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="81p_q68">
                  {levels.map((level) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      size="sm"
                      data-oid="fq.p34_"
                    >
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="xgo3t8b">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="_q6tf:5"
                >
                  Duration
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="32e1csg">
                  {durations.map((duration) => (
                    <Button
                      key={duration.id}
                      variant="outline"
                      size="sm"
                      data-oid="jnb.scd"
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
