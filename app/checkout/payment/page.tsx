"use client";

import React, { useState } from "react";
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
    { id: "grabpay", name: "GrabPay", icon: "🟩" },
    { id: "applepay", name: "Apple Pay", icon: "" },
    { id: "paypal", name: "PayPal", icon: "🅿️" },
    { id: "stripe", name: "Stripe", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-oid=":a.hg5e">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="1xjwz2n">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="3hmx:3:"
        >
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2" data-oid="p2ilp42">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="5fc9v5d"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid=":ra351z"
              >
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6" data-oid="e5rmbi1">
                Choose your preferred payment method
              </p>

              <div className="space-y-6" data-oid="-nae7hp">
                {/* Redeem Rewards/Points Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid="yjf91v8"
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "rewards" ? "" : "rewards",
                      )
                    }
                    data-oid="fmn35hb"
                  >
                    <h3 className="font-semibold" data-oid="_xw-:9.">
                      Redeem Rewards / Points
                    </h3>
                    <ChevronDown
                      className={`transition-transform ${expandedSection === "rewards" ? "rotate-180" : ""}`}
                      data-oid="ya1evyo"
                    />
                  </div>
                  {expandedSection === "rewards" && (
                    <div className="border-t p-4 space-y-3" data-oid=".qcgw1s">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className="flex items-center justify-between p-3 border rounded"
                          data-oid="cq:wozk"
                        >
                          <div
                            className="flex items-center gap-3"
                            data-oid="s9zp4o9"
                          >
                            <input
                              type="radio"
                              name="rewardPayment"
                              value={method.id}
                              className="w-4 h-4"
                              data-oid="yc48anx"
                            />

                            <span data-oid="c5s7r2d">{method.name}</span>
                          </div>
                          <span className="text-2xl" data-oid="22t.ovl">
                            {method.icon}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Credit/Debit Card Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid="o1vwwjn"
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
                    data-oid="n4ty:8:"
                  >
                    <div className="flex items-center gap-3" data-oid="zr0uhji">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit / Debit"
                        checked={selectedPayment === "Credit / Debit"}
                        onChange={() => setSelectedPayment("Credit / Debit")}
                        className="w-4 h-4"
                        data-oid="a4vdl1s"
                      />

                      <span className="font-semibold" data-oid=".2:1718">
                        Debit or Credit Card
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid=":ip4i.h">
                      <div className="flex gap-1" data-oid="d_0gvvp">
                        <div
                          className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="wev-eup"
                        >
                          VISA
                        </div>
                        <div
                          className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="cvlis4s"
                        >
                          MC
                        </div>
                        <div
                          className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center"
                          data-oid="lanf1ui"
                        >
                          AE
                        </div>
                      </div>
                      <ChevronDown
                        className={`transition-transform ${expandedSection === "Credit / Debit" ? "rotate-180" : ""}`}
                        data-oid=".x0t6nr"
                      />
                    </div>
                  </div>

                  {expandedSection === "Credit / Debit" &&
                    selectedPayment === "Credit / Debit" && (
                      <div
                        className="border-t p-4 space-y-4"
                        data-oid="al:m4.-"
                      >
                        <div data-oid="kzek8ug">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="c_q9dh1"
                          >
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="balhz:8"
                          />
                        </div>
                        <div data-oid="dpzh-i:">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="ax:6e2y"
                          >
                            Card Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="1:20iy2"
                          />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-4"
                          data-oid="xgil_1t"
                        >
                          <div data-oid="8wuta-l">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="0f.d6df"
                            >
                              Expiry Date *
                            </label>
                            <div
                              className="grid grid-cols-2 gap-2"
                              data-oid=":tj8c7d"
                            >
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                                data-oid="2pi25k5"
                              >
                                <option data-oid="3:ztglx">MM</option>
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1,
                                ).map((m) => (
                                  <option
                                    key={m}
                                    value={m.toString().padStart(2, "0")}
                                    data-oid="8a:j11u"
                                  >
                                    {m.toString().padStart(2, "0")}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="a.8z6-u"
                              >
                                <option data-oid="wrdrkcv">YYYY</option>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => new Date().getFullYear() + i,
                                ).map((y) => (
                                  <option key={y} value={y} data-oid="oxw.pti">
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div data-oid="6hatlv0">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="topa1ge"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              data-oid="qr6o2dq"
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
                    data-oid="vimbudx"
                  >
                    <div className="flex items-center gap-3" data-oid="kl3jd9f">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="w-4 h-4"
                        data-oid="ec51q9b"
                      />

                      <span className="font-semibold" data-oid="l8rk1z5">
                        {method.name}
                      </span>
                    </div>
                    <span className="text-2xl" data-oid="7u4afd.">
                      {method.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Review */}
          <div className="lg:col-span-1" data-oid="34rk6c2">
            <div className="sticky top-8 space-y-6" data-oid="96p58ua">
              <OrderSummary data-oid="6srct4k" />

              {/* Review Address */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-oid="69ftf1u"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="odl39sm"
                >
                  <h3 className="text-lg font-semibold" data-oid="3-1rx98">
                    Review Address
                  </h3>
                  <button
                    onClick={() => router.push("/checkout/address")}
                    className="text-[#123b79] text-sm hover:underline font-medium"
                    data-oid=":p3vsl8"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1" data-oid="njnsx2n">
                  <h4 className="font-bold text-gray-900" data-oid="49twvco">
                    Delivery & Billing Address
                  </h4>
                  <p className="font-semibold text-gray-800" data-oid="kb2mp18">
                    {finalBillingAddress.firstName}{" "}
                    {finalBillingAddress.lastName}
                  </p>
                  <p className="text-gray-600" data-oid="9tj6p0v">
                    {finalBillingAddress.email}
                  </p>
                  <p className="text-gray-600" data-oid="mw770ka">
                    {finalBillingAddress.mobile}
                  </p>
                  <p className="text-gray-600" data-oid="vwmrfkj">
                    72 Hebe St, QLD, BARDON, 4065
                  </p>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => alert("Order Placed!")}
                className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                data-oid="1ssu2a3"
              >
                Proceed to Checkout →
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push("/courses")}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                data-oid="hrqbnq:"
              >
                Continue Shopping
              </button>

              <p
                className="text-xs text-gray-500 text-center leading-relaxed"
                data-oid="52_l1-t"
              >
                By clicking Proceed to Checkout you confirm that you have read,
                understood and accept our{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="n8x9bw_"
                >
                  terms and conditions
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="3rhrsdc"
                >
                  returns policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="f0vah28"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="3f_3:qt">
        <h3 className="text-lg font-semibold mb-2" data-oid="i4z52:u">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="k8ljrl-">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="p9g1q7d"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="f2vqj9r"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
