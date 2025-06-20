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
      data-oid="9j9rgey"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="xcva5xf">
        <h2 className="text-xl font-bold" data-oid="yyn31ic">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="7ea7d4o">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="mk0viqr">
        <div className="space-y-4" data-oid="w2xna20">
          <div
            className="flex justify-between text-gray-700"
            data-oid="qww-1i1"
          >
            <span data-oid="ix:vdku">Subtotal</span>
            <span className="font-semibold" data-oid="3adpbfi">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid="ia_tnh4"
            >
              <span data-oid="n6fmrvt">Discount</span>
              <span className="font-semibold" data-oid="4q5f4ru">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="pvef3uh"
          >
            <span data-oid="e9h95w0">Shipping</span>
            <span className="font-semibold" data-oid="gzydjb_">
              {finalShippingCost > 0
                ? formatPrice(finalShippingCost)
                : "SGD 10.00"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="ui:qmg7">
            <div
              className="flex justify-between items-center"
              data-oid="vj6i2n7"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="f5yr909"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="tdww9.1"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 pt-6 border-t border-gray-100" data-oid="xrmgo01">
          <div className="flex items-center gap-2 mb-4" data-oid="e2lq5-4">
            <Shield className="w-5 h-5 text-green-600" data-oid="-2vjh0-" />
            <span className="font-semibold text-gray-900" data-oid="c3i-.zq">
              Secure Checkout
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600" data-oid="r7-.e85">
            <div className="flex items-center gap-2" data-oid="88z97sn">
              <Check className="w-4 h-4 text-green-600" data-oid="ia4lyod" />
              <span data-oid="sy40pdu">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-oid="d84_i6a">
              <Check className="w-4 h-4 text-green-600" data-oid="-gb8_rw" />
              <span data-oid="1j9x1wf">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid="5qxz0j6">
              <Check className="w-4 h-4 text-green-600" data-oid="4gdyq_p" />
              <span data-oid="kwc1hfg">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
