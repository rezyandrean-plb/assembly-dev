"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="y-27l_b"
    >
      <div className="text-center" data-oid="-7082yg">
        <h1
          className="text-6xl font-bold text-[#123B79] mb-4"
          data-oid="n9r7e2w"
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold text-gray-700 mb-4"
          data-oid="i9.pm39"
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8" data-oid="54m730s">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#123B79] text-white rounded-md hover:bg-[#0A2A5E] transition-colors"
          data-oid="8bvh5kf"
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
          data-oid="8kx6_ca"
        >
          <div className="animate-pulse" data-oid="-aqpui-">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="y8ak9ge"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="4wa5_r1"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="624ydhk"
            ></div>
          </div>
        </div>
      }
      data-oid="4jzckm7"
    >
      <NotFoundContent data-oid="sar_uos" />
    </Suspense>
  );
}
