"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-context";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useCart();

  useEffect(() => {
    // Check if cart has any books
    const hasBook = cart.some((item) => item.type === "Book");

    if (hasBook) {
      // If there are books, go to delivery/collect page
      router.replace("/checkout/delivery");
    } else {
      // If only courses, skip to payment
      router.replace("/checkout/payment");
    }
  }, [cart, router]);

  // Show loading while redirecting
  return (
    <div className="max-w-6xl mx-auto px-4 py-8" data-oid="98_6v.e">
      <div
        className="flex items-center justify-center min-h-[400px]"
        data-oid="lq98cdo"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
          data-oid="0u61:yb"
        ></div>
      </div>
    </div>
  );
}
