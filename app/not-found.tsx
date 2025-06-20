"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="o7-8fqg"
    >
      <div className="text-center" data-oid="g7n3ej4">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="smfml7p"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="28orewi"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="uq05kgc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="04r-h1c"
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
          data-oid="0mr76nl"
        >
          <div className="animate-pulse" data-oid="46eu4l3">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="re2wzyt"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="k1retuw"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="w0f3g1h"
            ></div>
          </div>
        </div>
      }
      data-oid="ggj:qdq"
    >
      <NotFoundContent data-oid="0..610x" />
    </Suspense>
  );
}
