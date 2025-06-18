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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="gll3_7j">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid=":xwe:2w"
      >
        <h3 className="font-medium text-gray-900" data-oid="-0w.67a">
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
            data-oid="sf1gage"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="107coh4">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="hqgnees"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="9r1l2tw">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="d.y6j1x">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid="x5wzl_x"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="8szkkus">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="qhon8ww">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="z7ta61u"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="gf1rolp">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="3-z76ps">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="7s9ms11"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="_gjf5yo">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="z1ekfb.">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="k93s0b-"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="jlj.-a0">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid="359-4cr">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="6uzngzd"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="6diic4p">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid="ysle8rl">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="1deuopk"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="bhnlm_3">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid=".w.ffxo"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="4m3m6bp"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="li5buhu">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="u_xwdiw">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="obbwkfc"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="9u17fdb">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="edfvi-y"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="izonglr"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="sk4npur">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="5mkv_lm">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
