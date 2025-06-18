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
    <CheckoutProvider data-oid="du.ea08">
      <div className="min-h-screen bg-gray-50" data-oid="6z0lc_v">
        <div className="container mx-auto px-4" data-oid="3ahugy7">
          <Stepper currentStep={currentStep} data-oid="1h9sx42" />
          {children}
        </div>
      </div>
    </CheckoutProvider>
  );
}
