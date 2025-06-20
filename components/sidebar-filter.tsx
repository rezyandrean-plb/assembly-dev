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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="jy0y36k">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid="8bvn9dw"
      >
        <h3 className="font-medium text-gray-900" data-oid="c9f._eq">
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
            data-oid="75uni64"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="n5hzf:x">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="6dtc5z4"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="iw-ofdj">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="57o735t">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid=".:1lf.9"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="u6y2fbn">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="_0an:g.">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="-hurxdy"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="hw__wc9">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="ebq2qsn">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="-63x5c2"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="n.n.o.-">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="vtvik62">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="tvlfot1"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="8s0uf-u">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid="d36rds3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="ras-a9x"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="6mjh1bc">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid="6elfo-d">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="01jhfvb"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="gg83zaz">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="t.5ptuu"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="7hk4ljx"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="1nz1-ts">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="uw5i1cn">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="b:.pozk"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="k76a6:4">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="1guxffe"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="vs16n-c"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="4wka8_b">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="dy8it8t">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
