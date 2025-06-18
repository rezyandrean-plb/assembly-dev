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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="tzod-k-">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid=".f9uxsf"
      >
        <h3 className="font-medium text-gray-900" data-oid="4zrsxnu">
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
            data-oid="k6r37-5"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="xk.p9ir">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid=".t_f6w0"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="f:c15zn">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid="y5.-6sc">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid="t2iq713"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="ld24lpi">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="mrr_ser">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="gpw7s-0"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="q:up3u9">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="yqq0d--">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="nlaf4ou"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="lmetj0-">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid=":-zz2t8">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="ug1:ata"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="el46w1q">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid=".rjj.ps">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="34xpafs"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="84tewiy">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid="01gnc47">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="mornhm0"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="oh3g0_f">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="0prf9gc"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="v9324b7"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="t6rkrp4">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="0pf-flb">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="wo5jaec"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="91yh5tm">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="qjgrrop"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="heafch_"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="wih8p1-">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="ze_fm4w">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
