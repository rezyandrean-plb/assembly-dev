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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="l_:siyu">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid="kl39_ph"
      >
        <h3 className="font-medium text-gray-900" data-oid="nubotb:">
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
            data-oid="vnwg31c"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="b1fa6-5">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="ews6ynq"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="d-tvaf1">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="ff.liq_">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid=":4chws5"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="z_j:sx9">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="m06goa_">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="q3bzstz"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="4s-h-ab">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="-.qgvt6">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="fso.-9s"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="tnf3j5a">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="5yxypu.">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="h9g96kr"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="jk3r81t">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid="w9rquvp">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="_l4et1-"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="bgxkj5u">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid=":blamos">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="x.5tymk"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="xb4q4fe">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="_3cah22"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="d71_tef"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="sm_natp">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="mlls76v">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="d6da-0f"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="8oo.2-0">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="46a4vaq"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="tiq:f_8"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="4g1u2fr">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="ihn4963">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
