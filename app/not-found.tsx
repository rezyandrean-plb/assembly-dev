"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="pimiqx1"
    >
      <div className="text-center" data-oid="mrgeq--">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="vrhbi8e"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="9ru1vab"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="7c0b5m1">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="6pkbd1t"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center bg-gray-50"
          data-oid="_6s45h9"
        >
          <div className="animate-pulse" data-oid="_:i7-q.">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="8y54ai1"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="7zcu-.s"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="t41kj3j"
            ></div>
          </div>
        </div>
      }
      data-oid="9c4can."
    >
      <NotFoundContent data-oid="5mgr05f" />
    </Suspense>
  );
}
