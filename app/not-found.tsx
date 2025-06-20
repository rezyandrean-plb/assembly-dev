"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="0qxwphy"
    >
      <div className="text-center" data-oid="0arpfqn">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="ynurxdf"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="m6yzw5m"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="2i7mi-d">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid=".uc9mp2"
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
          data-oid="-shqu:x"
        >
          <div className="animate-pulse" data-oid="xqxkgoe">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="zocnhwg"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="ifss-0j"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="1n-f-av"
            ></div>
          </div>
        </div>
      }
      data-oid="2e:6zc7"
    >
      <NotFoundContent data-oid="hfk3xyt" />
    </Suspense>
  );
}
