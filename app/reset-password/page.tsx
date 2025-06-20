"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="5mhw56w"
        >
          <div className="animate-pulse" data-oid="tgyxjd_">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="-._5e9n"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid=":5fbt:a"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="ms7mm9:"
            ></div>
          </div>
        </div>
      }
      data-oid="ht9reys"
    >
      <ResetPasswordContent data-oid="0zhpugc" />
    </Suspense>
  );
}
