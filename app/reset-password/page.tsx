"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="iwn2g_-"
        >
          <div className="animate-pulse" data-oid="75.jbj1">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="pklkby:"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="-3fq33y"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="6-s8p3f"
            ></div>
          </div>
        </div>
      }
      data-oid="42vpn8_"
    >
      <ResetPasswordContent data-oid="za7zjf5" />
    </Suspense>
  );
}
