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

  const orderTotalBeforeGst = subtotal - discount + shippingCost;
  const gst = orderTotalBeforeGst * 0.09;
  const orderTotal = orderTotalBeforeGst + gst;

  return (
    <div className="bg-white p-6 rounded-lg shadow" data-oid="j-n:c-y">
      <h2 className="text-xl font-bold mb-6" data-oid="t6xgsij">
        Order Summary
      </h2>
      <div className="space-y-4" data-oid="rb1h2yp">
        <div className="flex justify-between" data-oid="c-cdko1">
          <span data-oid="m9yxdh_">Subtotal</span>
          <span data-oid="tw9u:58">{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-red-600" data-oid="1x5cl-1">
            <span data-oid="hqhldjr">Discount</span>
            <span data-oid="8qn6p0h">-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between" data-oid="8zm60lp">
          <span data-oid="4y6:ztv">Estimated Shipping</span>
          <span data-oid="u:u-daa">
            {shippingCost > 0 ? formatPrice(shippingCost) : "FREE"}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1" data-oid="g5_eqg:">
          Actual shipping cost is calculated once we know your delivery details
        </p>
        <div className="border-t border-gray-200 my-4" data-oid="ckn_1d4"></div>
        <div
          className="flex justify-between font-bold text-lg"
          data-oid="fulyotu"
        >
          <span data-oid="4k6tzb:">Order Total</span>
          <span data-oid="t1rpdsi">{formatPrice(orderTotal)}</span>
        </div>
        <div className="text-right text-sm text-gray-500" data-oid="0avh1mi">
          Including {formatPrice(gst)} GST
        </div>
      </div>
    </div>
  );
}
