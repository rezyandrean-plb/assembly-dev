"use client";

import type React from "react";

import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" data-oid="5nf0_uz" />
      {children}
    </>
  );
}
