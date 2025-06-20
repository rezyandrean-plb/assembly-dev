"use client";

interface CategoryFilterProps {
  category: {
    id: string;
    name: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryFilter({
  category,
  isActive,
  onClick,
}: CategoryFilterProps) {
  return (
    <button
      className={`pb-2 px-1 font-medium text-sm whitespace-nowrap transition-colors ${
        isActive
          ? "text-[#123B79] border-b-2 border-[#123B79]"
          : "text-gray-600 hover:text-gray-900"
      }`}
      onClick={onClick}
      data-oid="71:iq0h"
    >
      {category.name}
    </button>
  );
}
