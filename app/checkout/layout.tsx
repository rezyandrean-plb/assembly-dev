"use client";

import React from "react";
import Stepper from "./components/stepper";
import { usePathname } from "next/navigation";
import { CheckoutProvider } from "@/context/checkout-context";
import { useCart } from "@/components/cart-context";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { cart } = useCart();

  // Check if cart has any books
  const hasBook = cart.some((item) => item.type === "Book");

  let currentStep = 1;
  if (pathname.includes("/delivery")) {
    currentStep = 2;
  } else if (pathname.includes("/address")) {
    currentStep = 3;
  } else if (pathname.includes("/payment")) {
    // If no books in cart, payment is step 2, otherwise step 4
    currentStep = hasBook ? 4 : 2;
  }

  return (
    <CheckoutProvider data-oid="nzcr67q">
      <div className="min-h-screen bg-gray-50" data-oid="pfyqgz7">
        <Stepper
          currentStep={currentStep}
          hasBook={hasBook}
          data-oid="gt-8r4d"
        />

        <div className="bg-white" data-oid="kmq88rm">
          {children}
        </div>
      </div>
    </CheckoutProvider>
  );
}
