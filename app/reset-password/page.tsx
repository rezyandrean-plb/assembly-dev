"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="riyf7ne"
        >
          <div className="animate-pulse" data-oid="qpuo2-4">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="0bh2l55"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="r0r:byp"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="qkl5fj:"
            ></div>
          </div>
        </div>
      }
      data-oid="p.ta:-y"
    >
      <ResetPasswordContent data-oid="llr2.4." />
    </Suspense>
  );
}
