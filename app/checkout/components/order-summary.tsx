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
    <div className="bg-white p-6 rounded-lg shadow" data-oid="ujkkc.m">
      <h2 className="text-xl font-bold mb-6" data-oid="w37jjve">
        Order Summary
      </h2>
      <div className="space-y-4" data-oid="xk-ln07">
        <div className="flex justify-between" data-oid="7xhyd0f">
          <span data-oid="oifv9nq">Subtotal</span>
          <span data-oid="4hpduq.">{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-red-600" data-oid="aab641a">
            <span data-oid="17arccm">Discount</span>
            <span data-oid="i6:x71:">-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between" data-oid="ox2w7qn">
          <span data-oid=":q32yig">Estimated Shipping</span>
          <span data-oid="kn0xt:8">
            {shippingCost > 0 ? formatPrice(shippingCost) : "FREE"}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1" data-oid="y8uyn21">
          Actual shipping cost is calculated once we know your delivery details
        </p>
        <div className="border-t border-gray-200 my-4" data-oid="y7yya.8"></div>
        <div
          className="flex justify-between font-bold text-lg"
          data-oid="hxtpw9b"
        >
          <span data-oid="g617p.m">Order Total</span>
          <span data-oid="yh5o8hg">{formatPrice(orderTotal)}</span>
        </div>
        <div className="text-right text-sm text-gray-500" data-oid="-l1frda">
          Including {formatPrice(gst)} GST
        </div>
      </div>
    </div>
  );
}
