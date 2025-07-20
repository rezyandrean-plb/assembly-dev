"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="wtq-ie0"
    >
      <div className="text-center" data-oid="nu7u4xj">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="m3ohu7h"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="3hj9-rc"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="0ayf2.:">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="_.m7..x"
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
          data-oid="-.:9l-."
        >
          <div className="animate-pulse" data-oid="zlk8g21">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="a-2afry"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="zg.g11m"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid=":qf4hxo"
            ></div>
          </div>
        </div>
      }
      data-oid="3im6cjv"
    >
      <NotFoundContent data-oid="ka8gn3e" />
    </Suspense>
  );
}
