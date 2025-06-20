"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="m4d9iy1"
    >
      <div className="text-center" data-oid="_prk:uo">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="v531wch"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="6n-alu9"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="-yt0_c0">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="ar5bbm3"
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
          data-oid="cy:xsoc"
        >
          <div className="animate-pulse" data-oid="az39c_h">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="62q:0o4"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="90erlg0"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid=".f-:m--"
            ></div>
          </div>
        </div>
      }
      data-oid="j56x_:_"
    >
      <NotFoundContent data-oid="2a..wec" />
    </Suspense>
  );
}
