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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="xr.7-0g">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid="axs53vk"
      >
        <h3 className="font-medium text-gray-900" data-oid="mvli-ds">
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
            data-oid="41ht3vc"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="ubq3r3i">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="3_7l3lu"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="yl.7s0.">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="2.njh8k">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid="f8eun3k"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="9zv7.4z">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="d_2ynp6">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="mjagm0l"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="gvq_ghk">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="5sej_-9">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="r33ilv_"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="psch-u0">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="65--uey">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="wx.zbqg"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="sr-7fbv">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid="q4suktm">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="4n2pp6k"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="xdr7ary">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid="6v_dls-">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="di-7gxq"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="_.qg40e">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="-2pb-3r"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid=".z-6ynt"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="yzkf3ed">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid=":jc03q:">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="0hq:ixt"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="ttue:bv">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="dpylw0i"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="1ms3lws"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="b.m1y8t">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="em3ci6s">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
