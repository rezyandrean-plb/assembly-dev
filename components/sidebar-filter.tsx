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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="2aahif8">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid="52:iesp"
      >
        <h3 className="font-medium text-gray-900" data-oid="08mdo7c">
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
            data-oid="1_p.tq5"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="sxiuhjn">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="bh29ogd"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="nw7y2qv">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="tsfcx7_">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid="giinzft"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="9v29h37">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="cwte0f4">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="dmrt6yy"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="r68wshd">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="3471vx:">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="a64-kt4"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="y61w--3">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="x0b.28a">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="3xkl7:s"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="h84rhl.">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid="ndmg:uk">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="ese_-vi"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="uik9hy8">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid="4lafqox">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="_9yknzk"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="mibboeb">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="phq7ebr"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="4mv5::0"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="._f593a">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="hdjx1zt">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="voj_r6z"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid=":k9crkv">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="m1ezsz1"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="tzaq0nc"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="7:3xo3w">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="3_bongx">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
