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
    <div className="min-h-screen bg-gray-50" data-oid="5t_1uz5">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="ceet-f4">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="33t832e"
        >
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2" data-oid="9:eu4y2">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid=".xdl9lk"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="cbe75ku"
              >
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6" data-oid="d:-1253">
                Choose your preferred payment method
              </p>

              <div className="space-y-6" data-oid="o7r_bj_">
                {/* Redeem Rewards/Points Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid="c_ejxd."
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "rewards" ? "" : "rewards",
                      )
                    }
                    data-oid="xtgvl5_"
                  >
                    <h3 className="font-semibold" data-oid="n2mgqhk">
                      Redeem Rewards / Points
                    </h3>
                    <ChevronDown
                      className={`transition-transform ${expandedSection === "rewards" ? "rotate-180" : ""}`}
                      data-oid="pwgn0se"
                    />
                  </div>
                  {expandedSection === "rewards" && (
                    <div className="border-t p-4 space-y-3" data-oid="1mn7o25">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className="flex items-center justify-between p-3 border rounded"
                          data-oid="dcw60x9"
                        >
                          <div
                            className="flex items-center gap-3"
                            data-oid="aiox8-s"
                          >
                            <input
                              type="radio"
                              name="rewardPayment"
                              value={method.id}
                              className="w-4 h-4"
                              data-oid="wkjxvi3"
                            />

                            <span data-oid="ylpvsli">{method.name}</span>
                          </div>
                          <span className="text-2xl" data-oid="xx_j18v">
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
                  data-oid="_eu9y-u"
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
                    data-oid="8q-f0cl"
                  >
                    <div className="flex items-center gap-3" data-oid="0qrh_ib">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit / Debit"
                        checked={selectedPayment === "Credit / Debit"}
                        onChange={() => setSelectedPayment("Credit / Debit")}
                        className="w-4 h-4"
                        data-oid=":at50rz"
                      />

                      <span className="font-semibold" data-oid="yfvy21d">
                        Debit or Credit Card
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="htxrkv_">
                      <div className="flex gap-1" data-oid="tlvnv08">
                        <div
                          className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="-4-y3u0"
                        >
                          VISA
                        </div>
                        <div
                          className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="r1qe1x4"
                        >
                          MC
                        </div>
                        <div
                          className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center"
                          data-oid="pg.v4z-"
                        >
                          AE
                        </div>
                      </div>
                      <ChevronDown
                        className={`transition-transform ${expandedSection === "Credit / Debit" ? "rotate-180" : ""}`}
                        data-oid="_gjauhb"
                      />
                    </div>
                  </div>

                  {expandedSection === "Credit / Debit" &&
                    selectedPayment === "Credit / Debit" && (
                      <div
                        className="border-t p-4 space-y-4"
                        data-oid="igrdvph"
                      >
                        <div data-oid="3rr1bed">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="zng5m.7"
                          >
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="ilmeyw4"
                          />
                        </div>
                        <div data-oid="8q.db-9">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="uzvxqif"
                          >
                            Card Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="_g84i1d"
                          />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-4"
                          data-oid=":.bv9-6"
                        >
                          <div data-oid="ymwrx4:">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid=".:rkkn7"
                            >
                              Expiry Date *
                            </label>
                            <div
                              className="grid grid-cols-2 gap-2"
                              data-oid="s5_sd3-"
                            >
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                                data-oid="v5dlhlm"
                              >
                                <option data-oid="qycqdd:">MM</option>
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1,
                                ).map((m) => (
                                  <option
                                    key={m}
                                    value={m.toString().padStart(2, "0")}
                                    data-oid="jxhjnlv"
                                  >
                                    {m.toString().padStart(2, "0")}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="epazox5"
                              >
                                <option data-oid="du.mwts">YYYY</option>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => new Date().getFullYear() + i,
                                ).map((y) => (
                                  <option key={y} value={y} data-oid="l8yj111">
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div data-oid=":1pq7la">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid=".cxaata"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              data-oid="juj0pe9"
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
                    data-oid="4q5kmql"
                  >
                    <div className="flex items-center gap-3" data-oid="6os6756">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="w-4 h-4"
                        data-oid="0m_hg-u"
                      />

                      <span className="font-semibold" data-oid="k1-0x1t">
                        {method.name}
                      </span>
                    </div>
                    <span className="text-2xl" data-oid="5j5xtck">
                      {method.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Review */}
          <div className="lg:col-span-1" data-oid="-1su_ht">
            <div className="sticky top-8 space-y-6" data-oid="ja1l_st">
              <OrderSummary data-oid="for7wdp" />

              {/* Review Address */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-oid="u1z:0a1"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="l1b7t5v"
                >
                  <h3 className="text-lg font-semibold" data-oid="8epsf6_">
                    Review Address
                  </h3>
                  <button
                    onClick={() => router.push("/checkout/address")}
                    className="text-[#123b79] text-sm hover:underline font-medium"
                    data-oid="vokmz:h"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1" data-oid="w86:7it">
                  <h4 className="font-bold text-gray-900" data-oid="58voe:0">
                    Delivery & Billing Address
                  </h4>
                  <p className="font-semibold text-gray-800" data-oid="7zlffn9">
                    {finalBillingAddress.firstName}{" "}
                    {finalBillingAddress.lastName}
                  </p>
                  <p className="text-gray-600" data-oid="b56fun6">
                    {finalBillingAddress.email}
                  </p>
                  <p className="text-gray-600" data-oid="gx2i8sl">
                    {finalBillingAddress.mobile}
                  </p>
                  <p className="text-gray-600" data-oid="ok1m_3k">
                    72 Hebe St, QLD, BARDON, 4065
                  </p>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => alert("Order Placed!")}
                className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                data-oid="bt6wf:_"
              >
                Proceed to Checkout →
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push("/courses")}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                data-oid="360pn5z"
              >
                Continue Shopping
              </button>

              <p
                className="text-xs text-gray-500 text-center leading-relaxed"
                data-oid="hbmyeuo"
              >
                By clicking Proceed to Checkout you confirm that you have read,
                understood and accept our{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="323cxln"
                >
                  terms and conditions
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="452n1tw"
                >
                  returns policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="3kq_mtr"
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
      <div className="mt-12 text-center" data-oid="7o9tk66">
        <h3 className="text-lg font-semibold mb-2" data-oid="3mrj:w7">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="b:bqil1">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="_5kww7p"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="1679kli"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
