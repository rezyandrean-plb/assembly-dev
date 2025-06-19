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
      data-oid="h5-5tnl"
    >
      {/* Header */}
      <div className="bg-[#2B4C8C] text-white p-6" data-oid="header-section">
        <h2 className="text-xl font-bold" data-oid="ycwc7kk">
          Order Summary
        </h2>
        <p className="text-blue-100 text-sm mt-1" data-oid="header-subtitle">
          Ready to start learning
        </p>
      </div>

      {/* Order Details */}
      <div className="p-6" data-oid="order-details">
        <div className="space-y-4" data-oid="71s..ax">
          <div
            className="flex justify-between text-gray-700"
            data-oid="8r25zec"
          >
            <span data-oid="g-ok3xg">Subtotal</span>
            <span className="font-semibold" data-oid="-mw4gdt">
              {formatPrice(subtotal)}
            </span>
          </div>

          {discount > 0 && (
            <div
              className="flex justify-between text-green-600"
              data-oid="discount-row"
            >
              <span data-oid="gabr65u">Discount</span>
              <span className="font-semibold" data-oid="wxm14_-">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          <div
            className="flex justify-between text-gray-700"
            data-oid="6-.sa:t"
          >
            <span data-oid="bp_-w2z">Shipping</span>
            <span className="font-semibold" data-oid="1iw52e7">
              {finalShippingCost > 0
                ? formatPrice(finalShippingCost)
                : "SGD 10.00"}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4" data-oid="r:yc3jv">
            <div
              className="flex justify-between items-center"
              data-oid="cuf1thg"
            >
              <span
                className="text-lg font-bold text-gray-900"
                data-oid="l9r_a-3"
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#2B4C8C]"
                data-oid="m01kh66"
              >
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div
          className="mt-6 pt-6 border-t border-gray-100"
          data-oid="security-section"
        >
          <div
            className="flex items-center gap-2 mb-4"
            data-oid="secure-checkout"
          >
            <Shield className="w-5 h-5 text-green-600" data-oid="g714:rf" />
            <span className="font-semibold text-gray-900" data-oid="we6itp1">
              Secure Checkout
            </span>
          </div>

          <div
            className="space-y-2 text-sm text-gray-600"
            data-oid="security-features"
          >
            <div className="flex items-center gap-2" data-oid="guarantee">
              <Check className="w-4 h-4 text-green-600" data-oid="cczuv.8" />
              <span data-oid=":mpuobj">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-oid="lifetime-access">
              <Check className="w-4 h-4 text-green-600" data-oid="snzlbjb" />
              <span data-oid=".b30qby">Lifetime access to courses</span>
            </div>
            <div className="flex items-center gap-2" data-oid="ssl-encrypted">
              <Check className="w-4 h-4 text-green-600" data-oid="5mx95ci" />
              <span data-oid="xuzd5-h">SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
