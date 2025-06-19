"use client";

interface SidebarFilterProps {
  filterOptions: {
    level: string[];
    duration: string[];
    category: string[];
    type: string[]; // Added new filter
    price: string[]; // Added new filter
  };
  selectedFilters: {
    level: string[];
    duration: string[];
    category: string[];
    type: string[]; // Added new filter
    price: string[]; // Added new filter
  };
  toggleFilter: (type: string, value: string) => void;
  clearFilters: () => void;
  totalResults: number;
  isMobile?: boolean;
}

export default function SidebarFilter({
  filterOptions,
  selectedFilters,
  toggleFilter,
  clearFilters,
  totalResults,
  isMobile = false,
}: SidebarFilterProps) {
  return (
    <div className={isMobile ? "" : "sticky top-24"} data-oid="-99m6-b">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid="-o3:nv2"
      >
        <h3 className="font-medium text-gray-900" data-oid="rigk4tx">
          Filters
        </h3>
        {(selectedFilters.level.length > 0 ||
          selectedFilters.duration.length > 0 ||
          selectedFilters.category.length > 0 ||
          selectedFilters.type.length > 0 ||
          selectedFilters.price.length > 0) && (
          <button
            className="text-sm text-[#123B79] hover:underline"
            onClick={clearFilters}
            data-oid=".cwpc5g"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid=".d5ehy3">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="u-2g7:9"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="kqos061">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="ljwu.5m">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid="sv0lua."
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="93c8jbd">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="7oelkjl">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="1-91hk0"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="ullica1">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="48.rt3y">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="907y9la"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="fcjgm.d">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="pgpl1o7">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid=".c_x6a:"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="cq3sw_t">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid=":w79qkn">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="zha6.bv"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="il3og0l">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid=":5pyy:k">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="w.bzlz-"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid=".u5w:7y">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="pdnw893"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="zgs68fs"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="t.h0i0i">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="sg21j86">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="6.xtf55"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="o8dlfjs">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="quj79ve"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="35t:nvb"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid=":xvnmds">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="n1rl.09">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
