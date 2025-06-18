"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="bsh4x-m"
        >
          <div className="animate-pulse" data-oid="y8bam.k">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="ylf9coo"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="dhvnxca"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid=":jh:e_v"
            ></div>
          </div>
        </div>
      }
      data-oid="dusrth_"
    >
      <ResetPasswordContent data-oid="yncf41r" />
    </Suspense>
  );
}
