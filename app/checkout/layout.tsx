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
    <CheckoutProvider data-oid="lodkt08">
      <div className="min-h-screen bg-gray-50" data-oid="y22etmg">
        <div className="container mx-auto px-4" data-oid="s__fj00">
          <Stepper currentStep={currentStep} data-oid="t8xcf6s" />
          {children}
        </div>
      </div>
    </CheckoutProvider>
  );
}
