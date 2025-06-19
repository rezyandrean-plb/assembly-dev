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
      data-oid="ul9em71"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="epdc495">
        <h2 className="text-xl font-bold" data-oid="_xny9mz">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="bh8_nuv">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="ebvp4k1">
        <div className="space-y-4" data-oid="5ymkto4">
          <div
            className="flex justify-between text-gray-700"
            data-oid="c7vn2j9"
          >
            <span data-oid="j0xt.on">Subtotal</span>
            <span className="font-semibold" data-oid="we66v2c">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid="-9y0n81"
            >
              <span data-oid="anzy2jb">Discount</span>
              <span className="font-semibold" data-oid="_r8by8-">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="wcpr9y0"
          >
            <span data-oid="2-ode75">Shipping</span>
            <span className="font-semibold" data-oid="_1628z:">
              {finalShippingCost > 0
                ? formatPrice(finalShippingCost)
                : "SGD 10.00"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="attwcyx">
            <div
              className="flex justify-between items-center"
              data-oid="5a-sh.a"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="he8kt3u"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="7w:h04:"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 pt-6 border-t border-gray-100" data-oid="zpyyp4k">
          <div className="flex items-center gap-2 mb-4" data-oid="e:yxe50">
            <Shield className="w-5 h-5 text-green-600" data-oid="6aca.hy" />
            <span className="font-semibold text-gray-900" data-oid="now3dpr">
              Secure Checkout
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600" data-oid="jc9xqbd">
            <div className="flex items-center gap-2" data-oid=":9dag7s">
              <Check className="w-4 h-4 text-green-600" data-oid=".4fff16" />
              <span data-oid="tjizjbt">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-oid="y3fzg59">
              <Check className="w-4 h-4 text-green-600" data-oid="oxrszji" />
              <span data-oid="fsmy2r3">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid="4ll2lfo">
              <Check className="w-4 h-4 text-green-600" data-oid="46j-kwa" />
              <span data-oid="271_6v1">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
