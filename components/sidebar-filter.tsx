"use client"

interface SidebarFilterProps {
  filterOptions: {
    level: string[]
    duration: string[]
    category: string[]
    type: string[] // Added new filter
    price: string[] // Added new filter
  }
  selectedFilters: {
    level: string[]
    duration: string[]
    category: string[]
    type: string[] // Added new filter
    price: string[] // Added new filter
  }
  toggleFilter: (type: string, value: string) => void
  clearFilters: () => void
  totalResults: number
  isMobile?: boolean
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
    <div className={isMobile ? "" : "sticky top-24"}>
      <div className="mb-4 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Filters</h3>
        {(selectedFilters.level.length > 0 ||
          selectedFilters.duration.length > 0 ||
          selectedFilters.category.length > 0 ||
          selectedFilters.type.length > 0 ||
          selectedFilters.price.length > 0) && (
          <button className="text-sm text-[#123B79] hover:underline" onClick={clearFilters}>
            Clear all
          </button>
        )}
      </div>

      {/* Level Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2 text-sm">Level</h4>
        <div className="space-y-2">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.level.includes(level)}
                onChange={() => toggleFilter("level", level)}
              />
              <span className="ml-2 text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter - New */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2 text-sm">Type</h4>
        <div className="space-y-2">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.type.includes(type)}
                onChange={() => toggleFilter("type", type)}
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter - New */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2 text-sm">Price</h4>
        <div className="space-y-2">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
              />
              <span className="ml-2 text-sm text-gray-700">{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2 text-sm">Duration</h4>
        <div className="space-y-2">
          {filterOptions.duration.map((duration) => (
            <label key={duration} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => toggleFilter("duration", duration)}
              />
              <span className="ml-2 text-sm text-gray-700">{duration}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2 text-sm">Category</h4>
        <div className="space-y-2">
          {filterOptions.category.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#123B79] focus:ring-[#123B79]"
                checked={selectedFilters.category.includes(category)}
                onChange={() => toggleFilter("category", category)}
              />
              <span className="ml-2 text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </div>
    </div>
  )
}
