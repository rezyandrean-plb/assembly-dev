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
    <div className={isMobile ? "" : "sticky top-24"} data-oid="ctle4r1">
      <div
        className="mb-4 flex justify-between items-center"
        data-oid="xl4sgrj"
      >
        <h3 className="font-medium text-gray-900" data-oid="v2naypb">
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
            data-oid="_qr51ch"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6" data-oid="y8jl7cn">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="mq727yp"
        >
          Level
        </h4>
        <div className="space-y-2" data-oid="o0hr_.q">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center" data-oid=":.p6oqg">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
                data-oid="2n4k6o6"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="_c32nb3">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6" data-oid="be:6dm8">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="b5i9ixq"
        >
          Type
        </h4>
        <div className="space-y-2" data-oid="580h.rv">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center" data-oid="0:-w_60">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
                data-oid="_7j:7.s"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="eo0yftt">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6" data-oid="ki_hgr0">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="9fs8vah"
        >
          Price
        </h4>
        <div className="space-y-2" data-oid="c4.u-bt">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center" data-oid="6-8z0gx">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                data-oid="b.a7wy:"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="lii2bkk">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6" data-oid="vos588o">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="1ghghz3"
        >
          Duration
        </h4>
        <div className="space-y-2" data-oid="0lr:p:f">
          {filterOptions.duration.map((duration) => (
            <label
              key={duration}
              className="flex items-center"
              data-oid="zob_q:u"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
                data-oid="nvcnto3"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="z.qwhjp">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6" data-oid="98ci13d">
        <h4
          className="font-medium text-gray-700 mb-2 text-sm"
          data-oid="m9yov7z"
        >
          Category
        </h4>
        <div className="space-y-2" data-oid="e73:zwq">
          {filterOptions.category.map((category) => (
            <label
              key={category}
              className="flex items-center"
              data-oid="7oc-_a_"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
                data-oid="jif05ch"
              />

              <span className="ml-2 text-sm text-gray-700" data-oid="yexpkji">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500" data-oid="uyazigx">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  );
}
