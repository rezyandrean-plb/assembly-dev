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
      data-oid="2.ab21s"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="0pp:6f:">
        <h2 className="text-xl font-bold" data-oid="5qr7lha">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="oxqdqzs">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="69fs.:9">
        <div className="space-y-4" data-oid="9y1h1ng">
          <div
            className="flex justify-between text-gray-700"
            data-oid="6mwcm08"
          >
            <span data-oid="4k_4b_a">Subtotal</span>
            <span className="font-semibold" data-oid=":q84gih">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid="m:9-yq0"
            >
              <span data-oid="g._8ii1">Discount</span>
              <span className="font-semibold" data-oid=":qxwswj">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="9rx56ix"
          >
            <span data-oid="vbl2c:i">Shipping</span>
            <span className="font-semibold" data-oid="l3jcnrw">
              {finalShippingCost > 0
                ? formatPrice(finalShippingCost)
                : "SGD 10.00"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="oqjaesh">
            <div
              className="flex justify-between items-center"
              data-oid="ft.lecj"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="02ha82a"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="o5044f4"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 pt-6 border-t border-gray-100" data-oid="o63judm">
          <div className="flex items-center gap-2 mb-4" data-oid="mtj5xda">
            <Shield className="w-5 h-5 text-green-600" data-oid="_3l2tk5" />
            <span className="font-semibold text-gray-900" data-oid="ppekiqp">
              Secure Checkout
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600" data-oid="pml3ujq">
            <div className="flex items-center gap-2" data-oid="1urja8a">
              <Check className="w-4 h-4 text-green-600" data-oid="ctog9tm" />
              <span data-oid="ez88yip">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-oid="4uaz2:h">
              <Check className="w-4 h-4 text-green-600" data-oid="1n20gua" />
              <span data-oid="pv89czv">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid="8_oh_91">
              <Check className="w-4 h-4 text-green-600" data-oid="p0lw3i3" />
              <span data-oid="aabaw6p">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
