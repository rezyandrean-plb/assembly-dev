"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Package } from "lucide-react";

interface TrackingSearchProps {
  className?: string;
  placeholder?: string;
}

export default function TrackingSearch({
  className = "",
  placeholder = "Enter tracking number...",
}: TrackingSearchProps) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number");
      return;
    }

    setIsSearching(true);

    try {
      // Simulate API call to validate tracking number
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, accept any tracking number that starts with "ASG"
      if (trackingNumber.toUpperCase().startsWith("ASG")) {
        router.push(`/tracking?tracking=${trackingNumber.toUpperCase()}`);
      } else {
        alert(
          "Tracking number not found. Please check your tracking number and try again.",
        );
      }
    } catch (error) {
      console.error("Tracking search failed:", error);
      alert(
        "There was an error searching for your tracking information. Please try again.",
      );
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex gap-2 ${className}`}
      data-oid="nmkhf1x"
    >
      <div className="relative flex-1" data-oid="dcqe8hy">
        <Package
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
          data-oid="1ngfcbz"
        />

        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123b79] focus:border-transparent"
          data-oid="142sguf"
        />
      </div>
      <button
        type="submit"
        disabled={isSearching}
        className="bg-[#123b79] text-white px-4 py-2 rounded-lg hover:bg-[#0f2d5c] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        data-oid="oaun_f1"
      >
        {isSearching ? (
          <div
            className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"
            data-oid="5w.rj6u"
          ></div>
        ) : (
          <Search className="h-4 w-4" data-oid="_kqleus" />
        )}
        {isSearching ? "Searching..." : "Track"}
      </button>
    </form>
  );
}
