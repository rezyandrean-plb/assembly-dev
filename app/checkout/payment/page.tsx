"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import OrderSummary from "../components/order-summary";
import { Lock, ChevronDown } from "lucide-react";

export default function PaymentPage() {
  const router = useRouter();
  const { deliveryAddress, billingAddress, billingSameAsDelivery } =
    useCheckout();
  const [selectedPayment, setSelectedPayment] = useState("Credit / Debit");
  const [expandedSection, setExpandedSection] = useState("Credit / Debit");

  const finalBillingAddress = billingSameAsDelivery
    ? deliveryAddress
    : billingAddress;

  const paymentMethods: { id: string; name: string; icon: string }[] = [];

  const otherPaymentMethods = [
    {
      id: "grabpay",
      name: "GrabPay",
      icon: "/images/payment/Grabpay.png",
    },
    { id: "applepay", name: "Apple Pay", icon: "/images/payment/applepay.png" },
    { id: "paypal", name: "PayPal", icon: "/images/payment/paypal.png" },
    { id: "stripe", name: "Stripe", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-oid="qkx0qy1">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="0e8hf4u">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="u8u3:as"
        >
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2" data-oid="a3mw._g">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="2-9y0mq"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="caz0.g."
              >
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6" data-oid="15wyb9h">
                Choose your preferred payment method
              </p>

              <div className="space-y-6" data-oid="dat.-:h">
                {/* Credit/Debit Card Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid="f4psag7"
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "Credit / Debit"
                          ? ""
                          : "Credit / Debit",
                      )
                    }
                    data-oid="ho.n9:p"
                  >
                    <div className="flex items-center gap-3" data-oid="r66nnef">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit / Debit"
                        checked={selectedPayment === "Credit / Debit"}
                        onChange={() => setSelectedPayment("Credit / Debit")}
                        className="w-4 h-4"
                        data-oid="lv6ak3f"
                      />

                      <span className="font-semibold" data-oid="iloh450">
                        Debit or Credit Card
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="dozhb5r">
                      <Image
                        src="/images/payment/visa-mastercard.png"
                        alt="Visa and Mastercard"
                        width={100}
                        height={25}
                        className="object-contain"
                        data-oid="oz3phdh"
                      />

                      <ChevronDown
                        className={`transition-transform ${
                          expandedSection === "Credit / Debit"
                            ? "rotate-180"
                            : ""
                        }`}
                        data-oid="izcz1n4"
                      />
                    </div>
                  </div>

                  {expandedSection === "Credit / Debit" &&
                    selectedPayment === "Credit / Debit" && (
                      <div
                        className="border-t p-4 space-y-4"
                        data-oid="dekpnik"
                      >
                        <div data-oid="0-gxk6x">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="x6v2y3b"
                          >
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="a9nv769"
                          />
                        </div>
                        <div data-oid="5hjc396">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="v0cqj0y"
                          >
                            Card Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="07jsd9x"
                          />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-4"
                          data-oid="px1m39b"
                        >
                          <div data-oid="e3o437r">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="zf2kgrf"
                            >
                              Expiry Date *
                            </label>
                            <div
                              className="grid grid-cols-2 gap-2"
                              data-oid="31f4yi6"
                            >
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                                data-oid="h_mgu7m"
                              >
                                <option data-oid="gqsghvz">MM</option>
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1,
                                ).map((m) => (
                                  <option
                                    key={m}
                                    value={m.toString().padStart(2, "0")}
                                    data-oid="gxxn1bl"
                                  >
                                    {m.toString().padStart(2, "0")}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="q0vbefo"
                              >
                                <option data-oid="p-9net:">YYYY</option>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => new Date().getFullYear() + i,
                                ).map((y) => (
                                  <option key={y} value={y} data-oid="fzahhbj">
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div data-oid="g82x:_s">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="5x-y:z9"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              data-oid="o4:nyru"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>

                {/* Other Payment Methods */}
                {otherPaymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                    data-oid="qbtmryo"
                  >
                    <div className="flex items-center gap-3" data-oid="9w9i8-l">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="w-4 h-4"
                        data-oid="9-_jnb4"
                      />

                      <span className="font-semibold" data-oid="9zy8eap">
                        {method.name}
                      </span>
                    </div>
                    {method.id === "stripe" ? (
                      <span className="text-2xl" data-oid="ngn.ju0">
                        {method.icon}
                      </span>
                    ) : (
                      <Image
                        src={method.icon}
                        alt={method.name}
                        width={40}
                        height={40}
                        className="object-contain"
                        data-oid="pfysg05"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Review */}
          <div className="lg:col-span-1" data-oid="nqyco01">
            <div className="sticky top-8 space-y-6" data-oid="8h0uyb.">
              <OrderSummary data-oid="xgi1kuf" />

              {/* Review Address */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-oid="sfjrthk"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="k:u4a2u"
                >
                  <h3 className="text-lg font-semibold" data-oid="q1h.n-z">
                    Review Address
                  </h3>
                  <button
                    onClick={() => router.push("/checkout/address")}
                    className="text-[#123b79] text-sm hover:underline font-medium"
                    data-oid="4cmxenh"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1" data-oid="ca_3-lh">
                  <h4 className="font-bold text-gray-900" data-oid="9tx1v29">
                    Delivery & Billing Address
                  </h4>
                  <p className="font-semibold text-gray-800" data-oid="h8c8fku">
                    {finalBillingAddress.firstName}{" "}
                    {finalBillingAddress.lastName}
                  </p>
                  <p className="text-gray-600" data-oid="pesa:2n">
                    {finalBillingAddress.email}
                  </p>
                  <p className="text-gray-600" data-oid="_qgn6zf">
                    {finalBillingAddress.mobile}
                  </p>
                  <p className="text-gray-600" data-oid="-zuq_uz">
                    {finalBillingAddress.streetAddress}
                    {finalBillingAddress.streetAddress2 &&
                      `, ${finalBillingAddress.streetAddress2}`}
                    {finalBillingAddress.buildingName &&
                      `, ${finalBillingAddress.buildingName}`}
                    , {finalBillingAddress.country},{" "}
                    {finalBillingAddress.postcode}
                  </p>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => alert("Order Placed!")}
                className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                data-oid="0rpp644"
              >
                Proceed to Checkout →
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push("/courses")}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                data-oid=":m0dveo"
              >
                Continue Shopping
              </button>

              <p
                className="text-xs text-gray-500 text-center leading-relaxed"
                data-oid="3mcsnxy"
              >
                By clicking Proceed to Checkout you confirm that you have read,
                understood and accept our{" "}
                <a
                  href="/terms"
                  className="text-[#123b79] hover:underline"
                  data-oid="rtm.u6j"
                >
                  terms of service
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 mb-12 text-center" data-oid="97afuhc">
        <h3 className="text-lg font-semibold mb-2" data-oid="kzl45-8">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="ce:7i0i">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="gifony6"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="zkn85o-"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
