"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#123B79] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-pulse">
            <div className="h-12 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}

// Export as dynamic to skip SSR
export default dynamic(() => Promise.resolve(NotFound), {
  ssr: false,
});
