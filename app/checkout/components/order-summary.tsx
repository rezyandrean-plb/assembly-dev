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
      data-oid=".qa64x1"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="clxqc72">
        <h2 className="text-xl font-bold" data-oid="zivum:t">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="oe.47l_">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="0pc9521">
        <div className="space-y-4" data-oid="b47juox">
          <div
            className="flex justify-between text-gray-700"
            data-oid="3c0v_:a"
          >
            <span data-oid="6zx1co5">Subtotal</span>
            <span className="font-semibold" data-oid="h6lb8y2">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid=":wu84t1"
            >
              <span data-oid="x9y7.fw">Discount</span>
              <span className="font-semibold" data-oid="94bovt.">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="kbgvbw9"
          >
            <span data-oid="vf0wcc7">Shipping</span>
            <span className="font-semibold" data-oid="3n.u2rh">
              {finalShippingCost > 0
                ? formatPrice(finalShippingCost)
                : "SGD 10.00"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="6a:r.la">
            <div
              className="flex justify-between items-center"
              data-oid="m-owpcj"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="2xt98kz"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="-sg68z6"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 pt-6 border-t border-gray-100" data-oid="t5mcoi3">
          <div className="flex items-center gap-2 mb-4" data-oid="f1eke15">
            <Shield className="w-5 h-5 text-green-600" data-oid="9ix85b0" />
            <span className="font-semibold text-gray-900" data-oid="77diihn">
              Secure Checkout
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-600" data-oid="_rs_eqc">
            <div className="flex items-center gap-2" data-oid="1y09c5b">
              <Check className="w-4 h-4 text-green-600" data-oid="9gt3:9i" />
              <span data-oid="98kbynf">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-oid="so23ny7">
              <Check className="w-4 h-4 text-green-600" data-oid="jlllq9r" />
              <span data-oid="4bg:kfm">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid=".h1s5hj">
              <Check className="w-4 h-4 text-green-600" data-oid="xp.esgb" />
              <span data-oid="sps3ej.">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
