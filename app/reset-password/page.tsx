"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="76dky_."
        >
          <div className="animate-pulse" data-oid="1r30tv2">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="m3rznq_"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="l085qpl"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="oj.3xlj"
            ></div>
          </div>
        </div>
      }
      data-oid="vipr6a."
    >
      <ResetPasswordContent data-oid=".1gk2kp" />
    </Suspense>
  );
}
