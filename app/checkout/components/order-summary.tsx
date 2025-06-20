"use client";

import React from "react";
import { useCart } from "@/components/cart-context";
import { useCheckout } from "@/context/checkout-context";
import { Shield, Check } from "lucide-react";

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
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      data-oid="45-1vik"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="zdos5ac">
        <h2 className="text-xl font-bold" data-oid=".9uhqqm">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="p4alkhz">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="85ffjly">
        <div className="space-y-4" data-oid="vkj_lp2">
          <div
            className="flex justify-between text-gray-700"
            data-oid="fk2e3el"
          >
            <span data-oid="ci.sp8g">Subtotal</span>
            <span className="font-semibold" data-oid="9rlb:ug">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid="g_j83bz"
            >
              <span data-oid="6_.l9sp">Discount</span>
              <span className="font-semibold" data-oid="f736sbc">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="4b3osjo"
          >
            <span data-oid="gampgy:">Shipping</span>
            <span className="font-semibold" data-oid="j-017ku">
              {finalShippingCost > 0
                ? formatPrice(finalShippingCost)
                : "SGD 10.00"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="va9htmd">
            <div
              className="flex justify-between items-center"
              data-oid="o6dk5np"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="eil:_c4"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="ec6irqb"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 pt-6 border-t border-gray-100" data-oid="3nleg44">
          <div className="flex items-center gap-2 mb-4" data-oid="mc8.lmb">
            <Shield className="w-5 h-5 text-green-600" data-oid="1k1td7-" />
            <span className="font-semibold text-gray-900" data-oid="iv_ii9m">
              Secure Checkout
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600" data-oid="ttwh6ip">
            <div className="flex items-center gap-2" data-oid="4flz9gy">
              <Check className="w-4 h-4 text-green-600" data-oid="dyc2s58" />
              <span data-oid="n26wazf">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-oid=":6d5rl9">
              <Check className="w-4 h-4 text-green-600" data-oid="m4rwn7z" />
              <span data-oid=".8.52wo">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid="fu6:kzr">
              <Check className="w-4 h-4 text-green-600" data-oid="a1a:73q" />
              <span data-oid="29ngj-8">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
