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
    <div className="bg-white p-6 rounded-lg shadow" data-oid="w8pn5dr">
      <h2 className="text-xl font-bold mb-6" data-oid="9r7iv16">
        Order Summary
      </h2>
      <div className="space-y-4" data-oid="kxzghna">
        <div className="flex justify-between" data-oid="p93eb5m">
          <span data-oid="e76i.l4">Subtotal</span>
          <span data-oid="zkqclx2">{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-red-600" data-oid="uu-vfuv">
            <span data-oid="71s0mqp">Discount</span>
            <span data-oid="ica5fas">-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between" data-oid="lb7b.o_">
          <span data-oid="dpp14o2">Estimated Shipping</span>
          <span data-oid="7fp9j3c">
            {shippingCost > 0 ? formatPrice(shippingCost) : "FREE"}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1" data-oid="u7ah1xz">
          Actual shipping cost is calculated once we know your delivery details
        </p>
        <div className="border-t border-gray-200 my-4" data-oid="1x7k8d7"></div>
        <div
          className="flex justify-between font-bold text-lg"
          data-oid="wu_17nk"
        >
          <span data-oid=".slbzik">Order Total</span>
          <span data-oid="vxglup3">{formatPrice(orderTotal)}</span>
        </div>
        <div className="text-right text-sm text-gray-500" data-oid="9l4rtv2">
          Including {formatPrice(gst)} GST
        </div>
      </div>
    </div>
  );
}
