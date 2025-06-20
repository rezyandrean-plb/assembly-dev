"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="rhhl:rb"
        >
          <div className="animate-pulse" data-oid="pl.n:em">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="krk_sml"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="yz-a9af"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="gf70.kk"
            ></div>
          </div>
        </div>
      }
      data-oid="dg37kwn"
    >
      <ResetPasswordContent data-oid="wwydwka" />
    </Suspense>
  );
}
