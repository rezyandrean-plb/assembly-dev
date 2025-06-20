"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="smn13o6"
        >
          <div className="animate-pulse" data-oid="5mxrjgv">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="4urp0gq"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="ncnitds"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="vzin8j2"
            ></div>
          </div>
        </div>
      }
      data-oid="8gj1fsl"
    >
      <ResetPasswordContent data-oid="m327m5u" />
    </Suspense>
  );
}
