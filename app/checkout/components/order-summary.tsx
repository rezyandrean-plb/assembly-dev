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
  const orderTotal = subtotal - discount + finalShippingCost;
  const gst = (orderTotal / 1.09) * 0.09; // 9% GST is included in the price

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      data-oid="84n94v5"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="t1xmv9l">
        <h2 className="text-xl font-bold" data-oid="nnoqmx6">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="qi-kabx">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="qadgo.s">
        <div className="space-y-4" data-oid="1.g5q3v">
          <div
            className="flex justify-between text-gray-700"
            data-oid="x5:9n5y"
          >
            <span data-oid="9wuzqpj">Subtotal</span>
            <span className="font-semibold" data-oid=":37.ru8">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid="_:fgfh8"
            >
              <span data-oid="cynj22c">Discount</span>
              <span className="font-semibold" data-oid="71.1uhh">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="c7owp2l"
          >
            <span data-oid="5l2xwoy">Shipping</span>
            <span className="font-semibold" data-oid="1k7ssct">
              {finalShippingCost > 0 ? formatPrice(finalShippingCost) : "Free"}
            </span>
          </div>

          <div
            className="flex justify-between text-gray-700"
            data-oid="ummgw1v"
          >
            <span data-oid="3x4vvv8">GST (included)</span>
            <span className="font-semibold" data-oid="eioin9j">
              {formatPrice(gst)}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="15c239s">
            <div
              className="flex justify-between items-center"
              data-oid="8vd:qj4"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="zjv34o9"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="eqs-nts"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 pt-6 border-t border-gray-100" data-oid=".3_kb_q">
          <div className="flex items-center gap-2 mb-4" data-oid="7cz07c2">
            <Shield className="w-5 h-5 text-green-600" data-oid="q1w-0jg" />
            <span className="font-semibold text-gray-900" data-oid="ztlew_i">
              Secure Checkout
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600" data-oid="2xedata">
            <div className="flex items-center gap-2" data-oid="3pvdjz5">
              <Check className="w-4 h-4 text-green-600" data-oid="9yck8cs" />
              <span data-oid="eepkrk9">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid="xccitjl">
              <Check className="w-4 h-4 text-green-600" data-oid=".26l83-" />
              <span data-oid="uveo-xs">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
