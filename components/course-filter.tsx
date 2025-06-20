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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-oid="c:8_tr-">
      {/* Desktop View */}
      <div className="hidden md:block" data-oid="unvx173">
        <div className="flex flex-col md:flex-row gap-4" data-oid="hyc2vqo">
          <div className="relative flex-grow" data-oid="0ifz861">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="uf3oa2c"
            />

            <input
              type="text"
              placeholder="Search courses by name or topic..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="ds5up42"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="kvn2gw4"
              >
                <X size={16} data-oid="d-01wi6" />
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap" data-oid="kbz8fa1">
            <div className="relative group" data-oid="dsp.jt3">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="-ysgxdm"
              >
                Category
                <ChevronDown size={16} data-oid="swur3z0" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="tcajxwj"
              >
                <div className="p-2 space-y-1" data-oid="ffpk1ch">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        activeFilter === filter.id
                          ? "bg-[#123B79] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => onFilterChange(filter.id)}
                      data-oid="r1wwxyx"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="mg3o2d1">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="mwg-3d1"
              >
                Level
                <ChevronDown size={16} data-oid=":l.ook6" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="7ycbm.1"
              >
                <div className="p-2 space-y-1" data-oid="sqxkd1n">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="1:rgbrv"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" data-oid="o-rjwp-">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                data-oid="xq-.0ao"
              >
                Duration
                <ChevronDown size={16} data-oid="t89n7yu" />
              </Button>
              <div
                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block"
                data-oid="lm2js31"
              >
                <div className="p-2 space-y-1" data-oid="nbogi_m">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 text-gray-700"
                      data-oid="y:8n6r3"
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
      <div className="md:hidden" data-oid="51rec01">
        <div className="flex gap-2 mb-4" data-oid="8amuklj">
          <div className="relative flex-grow" data-oid="1bz337m">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              data-oid="cqc35k7"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123B79]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              data-oid="lv7r-0n"
            />

            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => onSearchChange("")}
                data-oid="m241ob9"
              >
                <X size={16} data-oid="c.axp:8" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            data-oid="4:1guxf"
          >
            <Filter size={20} data-oid="w:wajwb" />
          </Button>
        </div>

        {showMobileFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            data-oid="c3ty6xu"
          >
            <div className="space-y-4 pt-2 pb-4" data-oid="ua2ota7">
              <div data-oid=".m8ss.-">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="tdrtazr"
                >
                  Category
                </h3>
                <div className="flex flex-wrap gap-2" data-oid=":agfoy4">
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
                      data-oid="jrad7bg"
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="oou7s5z">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="a8yx53c"
                >
                  Level
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="mepczn9">
                  {levels.map((level) => (
                    <Button
                      key={level.id}
                      variant="outline"
                      size="sm"
                      data-oid="au-0owb"
                    >
                      {level.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="f93n4:6">
                <h3
                  className="font-medium text-gray-700 mb-2"
                  data-oid="9rk0pb3"
                >
                  Duration
                </h3>
                <div className="flex flex-wrap gap-2" data-oid="5qidm:p">
                  {durations.map((duration) => (
                    <Button
                      key={duration.id}
                      variant="outline"
                      size="sm"
                      data-oid="2mzz.yk"
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
