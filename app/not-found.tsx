"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="99gbwg6"
    >
      <div className="text-center" data-oid="6oux68d">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="a-s13s-"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="y0n7c:l"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="_vwqklu">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="yk7bd:."
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
          data-oid="ik2d47u"
        >
          <div className="animate-pulse" data-oid="r-6t8kh">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="rr4lebx"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="tfv3ae."
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="ksuwdg7"
            ></div>
          </div>
        </div>
      }
      data-oid="r-d79wh"
    >
      <NotFoundContent data-oid="f-::b47" />
    </Suspense>
  );
}
