"use client";

import React from "react";
import { useCart } from "@/components/cart-context";
import { useCheckout } from "@/context/checkout-context";

const BOOK_ID = "property-leverage-blueprint";
const BOOK_ORIGINAL_PRICE = 39;
const BOOK_DISCOUNTED_PRICE = 29;

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(price);
}

export default function OrderSummary() {
  const { cart } = useCart();
  const { shippingCost } = useCheckout();

  // Mock data for demonstration - replace with actual cart data
  const subtotal = 129.0;
  const totalShipping = 0; // FREE shipping
  const total = subtotal;
  const gst = total * 0.1; // 10% GST for Australia

  return (
    <div className="bg-white border rounded-lg p-6" data-oid="h5-5tnl">
      <h2 className="text-xl font-bold mb-6" data-oid="ycwc7kk">
        Order Summary
      </h2>

      <div className="space-y-3" data-oid="71s..ax">
        <div className="flex justify-between" data-oid="8r25zec">
          <span data-oid="g-ok3xg">Subtotal</span>
          <span data-oid="-mw4gdt">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between" data-oid="6-.sa:t">
          <span data-oid="bp_-w2z">Estimated Shipping</span>
          <span data-oid="1iw52e7">
            {totalShipping > 0 ? formatPrice(totalShipping) : "FREE"}
          </span>
        </div>

        <p className="text-xs text-gray-500" data-oid="byq_qvm">
          Actual shipping cost is calculated once we know your delivery details
        </p>

        <div className="border-t pt-3 mt-3" data-oid="r:yc3jv">
          <div
            className="flex justify-between font-bold text-lg"
            data-oid="cuf1thg"
          >
            <span data-oid="l9r_a-3">Total</span>
            <span data-oid="m01kh66">{formatPrice(total)}</span>
          </div>
          <div
            className="text-right text-sm text-gray-500 mt-1"
            data-oid="g3w8gky"
          >
            Including GST
          </div>
        </div>
      </div>
    </div>
  );
}
