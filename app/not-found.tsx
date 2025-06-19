"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="v3ma:x4"
    >
      <div className="text-center" data-oid="-6o4:7u">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="p82m6:n"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="zlvy9d."
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="431mzir">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="8kdomy-"
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
          data-oid="h-8953p"
        >
          <div className="animate-pulse" data-oid="5h1aqqx">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="8hey81s"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="j3:ar9z"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="c4eftqq"
            ></div>
          </div>
        </div>
      }
      data-oid="2bzfwvc"
    >
      <NotFoundContent data-oid="q1qzb70" />
    </Suspense>
  );
}
