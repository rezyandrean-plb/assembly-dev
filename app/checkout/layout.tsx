"use client";

import React from "react";
import Stepper from "./components/stepper";
import { usePathname } from "next/navigation";
import { CheckoutProvider } from "@/context/checkout-context";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let currentStep = 1;
  if (pathname.includes("/delivery")) {
    currentStep = 2;
  } else if (pathname.includes("/address")) {
    currentStep = 3;
  } else if (pathname.includes("/payment")) {
    currentStep = 4;
  }

  return (
    <CheckoutProvider data-oid="l1c3jdj">
      <div className="min-h-screen bg-gray-50" data-oid=".ya8xw8">
        <div className="container mx-auto px-4" data-oid="ivwg2q2">
          <Stepper currentStep={currentStep} data-oid="j5iru9r" />
          {children}
        </div>
      </div>
    </CheckoutProvider>
  );
}
