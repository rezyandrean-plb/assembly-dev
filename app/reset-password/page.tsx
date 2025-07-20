"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          data-oid="vic:9q4"
        >
          <div className="animate-pulse" data-oid="7_34x77">
            <div
              className="h-12 w-32 bg-gray-200 rounded mb-4"
              data-oid="c:fe5g0"
            ></div>
            <div
              className="h-8 w-48 bg-gray-200 rounded mb-4"
              data-oid="z3hd8n3"
            ></div>
            <div
              className="h-4 w-64 bg-gray-200 rounded"
              data-oid="r5-ragk"
            ></div>
          </div>
        </div>
      }
      data-oid=":qa:enx"
    >
      <ResetPasswordContent data-oid=".ilojh3" />
    </Suspense>
  );
}
