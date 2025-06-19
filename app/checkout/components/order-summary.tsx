"use client";

import React from "react";
import { useCart } from "@/components/cart-context";
import { useCheckout } from "@/context/checkout-context";

const BOOK_ID = "property-leverage-blueprint";
const BOOK_ORIGINAL_PRICE = 39;
const BOOK_DISCOUNTED_PRICE = 29;

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
  }).format(price);
}

export default function OrderSummary() {
  const { cart } = useCart();
  const { shippingCost } = useCheckout();

  const bookInCart = cart.find((item) => item.id === BOOK_ID);
  const discount = bookInCart
    ? (BOOK_ORIGINAL_PRICE - BOOK_DISCOUNTED_PRICE) * bookInCart.quantity
    : 0;

  const subtotal = cart.reduce((sum, item) => {
    let price = 0;
    if (item.id === BOOK_ID) {
      price = BOOK_ORIGINAL_PRICE;
    } else if (item.price.toString().toLowerCase() !== "free") {
      const parsedPrice = parseFloat(
        item.price.toString().replace(/[^0-9.]/g, ""),
      );
      price = isNaN(parsedPrice) ? 0 : parsedPrice;
    }
    return sum + price * item.quantity;
  }, 0);

  const hasBook = cart.some((item) => item.type === "Book");
  const finalShippingCost = hasBook ? shippingCost : 0;
  const orderTotalBeforeGst = subtotal - discount + finalShippingCost;
  const gst = orderTotalBeforeGst * 0.09; // 9% GST for Singapore
  const orderTotal = orderTotalBeforeGst + gst;

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

        {discount > 0 && (
          <div
            className="flex justify-between text-red-600"
            data-oid="discount-row"
          >
            <span data-oid="gabr65u">Discount</span>
            <span data-oid="wxm14_-">-{formatPrice(discount)}</span>
          </div>
        )}

        <div className="flex justify-between" data-oid="6-.sa:t">
          <span data-oid="bp_-w2z">Estimated Shipping</span>
          <span data-oid="1iw52e7">
            {finalShippingCost > 0 ? formatPrice(finalShippingCost) : "FREE"}
          </span>
        </div>

        {hasBook && (
          <p className="text-xs text-gray-500" data-oid="byq_qvm">
            Actual shipping cost is calculated once we know your delivery
            details
          </p>
        )}

        <div className="border-t pt-3 mt-3" data-oid="r:yc3jv">
          <div
            className="flex justify-between font-bold text-lg"
            data-oid="cuf1thg"
          >
            <span data-oid="l9r_a-3">Total</span>
            <span data-oid="m01kh66">{formatPrice(orderTotal)}</span>
          </div>
          <div
            className="text-right text-sm text-gray-500 mt-1"
            data-oid="g3w8gky"
          >
            Including {formatPrice(gst)} GST
          </div>
        </div>
      </div>
    </div>
  );
}
