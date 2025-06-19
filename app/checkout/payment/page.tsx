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

  const paymentMethods = [
    { id: "rewards", name: "David Jones Rewards", icon: "💳" },
    { id: "points", name: "David Jones Points", icon: "🎯" },
    { id: "giftcard", name: "David Jones Gift Card", icon: "🎁" },
  ];

  const otherPaymentMethods = [
    { id: "paypal", name: "PayPal", icon: "🅿️" },
    { id: "afterpay", name: "Afterpay", icon: "🔄" },
    { id: "clicktopay", name: "Click to Pay", icon: "👆" },
    { id: "alipay", name: "Alipay", icon: "💰" },
    { id: "unionpay", name: "Union Pay", icon: "🏦" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" data-oid="v9ewazq">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        data-oid="07nim88"
      >
        {/* Left Column - Payment Methods */}
        <div className="space-y-6" data-oid="77km7zo">
          <h2 className="text-xl font-bold" data-oid="3569deu">
            Payment Method
          </h2>

          {/* Redeem Rewards/Points Section */}
          <div className="border rounded-lg" data-oid="r4.s:5e">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "rewards" ? "" : "rewards",
                )
              }
              data-oid=":.h7lov"
            >
              <h3 className="font-semibold" data-oid="oh_36-w">
                Redeem Rewards / Points
              </h3>
              <ChevronDown
                className={`transition-transform ${expandedSection === "rewards" ? "rotate-180" : ""}`}
                data-oid="27g.m6s"
              />
            </div>
            {expandedSection === "rewards" && (
              <div className="border-t p-4 space-y-3" data-oid="6lw5o8w">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-3 border rounded"
                    data-oid="92f6dlj"
                  >
                    <div className="flex items-center gap-3" data-oid="oum9ft-">
                      <input
                        type="radio"
                        name="rewardPayment"
                        value={method.id}
                        className="w-4 h-4"
                        data-oid="qgeln7g"
                      />

                      <span data-oid="rbu85zm">{method.name}</span>
                    </div>
                    <span className="text-2xl" data-oid="ks1.__b">
                      {method.icon}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Credit/Debit Card Section */}
          <div className="border rounded-lg" data-oid="licc0zz">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "Credit / Debit" ? "" : "Credit / Debit",
                )
              }
              data-oid="kzcmvge"
            >
              <div className="flex items-center gap-3" data-oid="vzo_nn.">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit / Debit"
                  checked={selectedPayment === "Credit / Debit"}
                  onChange={() => setSelectedPayment("Credit / Debit")}
                  className="w-4 h-4"
                  data-oid="nzbrari"
                />

                <span className="font-semibold" data-oid="6ikj0n6">
                  Debit or Credit Card
                </span>
              </div>
              <div className="flex items-center gap-2" data-oid="0t4ki.0">
                <div className="flex gap-1" data-oid="xftma5o">
                  <div
                    className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center"
                    data-oid="9ib:3qn"
                  >
                    VISA
                  </div>
                  <div
                    className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center"
                    data-oid="a3txps9"
                  >
                    MC
                  </div>
                  <div
                    className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center"
                    data-oid="b5c3anj"
                  >
                    AE
                  </div>
                </div>
                <ChevronDown
                  className={`transition-transform ${expandedSection === "Credit / Debit" ? "rotate-180" : ""}`}
                  data-oid="n9l.y29"
                />
              </div>
            </div>

            {expandedSection === "Credit / Debit" &&
              selectedPayment === "Credit / Debit" && (
                <div className="border-t p-4 space-y-4" data-oid="3uddh0v">
                  <div data-oid="ggsyljy">
                    <label
                      className="block text-sm font-medium mb-1"
                      data-oid="6a_fj2."
                    >
                      Card Number *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                      data-oid="ih4dc-n"
                    />
                  </div>
                  <div data-oid="xv4fpt6">
                    <label
                      className="block text-sm font-medium mb-1"
                      data-oid="ou49fgk"
                    >
                      Card Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-oid="pz9f139"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4" data-oid="ft3h.gi">
                    <div data-oid="w4zi6-_">
                      <label
                        className="block text-sm font-medium mb-1"
                        data-oid="pao9ip_"
                      >
                        Expiry Date *
                      </label>
                      <div
                        className="grid grid-cols-2 gap-2"
                        data-oid="it64423"
                      >
                        <select
                          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                          data-oid="k0:b970"
                        >
                          <option data-oid="kw25_kj">MM</option>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (m) => (
                              <option
                                key={m}
                                value={m.toString().padStart(2, "0")}
                                data-oid="y09r73c"
                              >
                                {m.toString().padStart(2, "0")}
                              </option>
                            ),
                          )}
                        </select>
                        <select
                          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          data-oid="4drq92z"
                        >
                          <option data-oid="-nvis:0">YYYY</option>
                          {Array.from(
                            { length: 10 },
                            (_, i) => new Date().getFullYear() + i,
                          ).map((y) => (
                            <option key={y} value={y} data-oid="oy_xj8-">
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div data-oid="jchyg_1">
                      <label
                        className="block text-sm font-medium mb-1"
                        data-oid="evlf-ih"
                      >
                        CVC *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        data-oid="8wo1xoz"
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
              className="border rounded-lg p-4 flex items-center justify-between"
              data-oid="8bizlpq"
            >
              <div className="flex items-center gap-3" data-oid="4amoaqf">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
                  className="w-4 h-4"
                  data-oid="wh.ft34"
                />

                <span className="font-semibold" data-oid="j0o3m0c">
                  {method.name}
                </span>
              </div>
              <span className="text-2xl" data-oid="ywzm2to">
                {method.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column - Review & Order Summary */}
        <div className="space-y-6" data-oid="78fijca">
          {/* Review Address */}
          <div className="bg-gray-50 p-6 rounded-lg" data-oid="u3:0jlq">
            <div
              className="flex justify-between items-center mb-4"
              data-oid="c7bzqiq"
            >
              <h3 className="text-lg font-semibold" data-oid="ibbq2kl">
                Review Address
              </h3>
              <button
                onClick={() => router.push("/checkout/address")}
                className="text-[#123b79] text-sm hover:underline"
                data-oid="ero1b02"
              >
                Edit
              </button>
            </div>
            <div className="text-sm space-y-1" data-oid="17owv8m">
              <h4 className="font-bold" data-oid="jks21kl">
                Delivery & Billing Address
              </h4>
              <p className="font-bold" data-oid="14g-neq">
                {finalBillingAddress.firstName} {finalBillingAddress.lastName}
              </p>
              <p data-oid="36cayzu">{finalBillingAddress.email}</p>
              <p data-oid="axhxtjw">{finalBillingAddress.mobile}</p>
              <p data-oid="bcp06fn">72 Hebe St, QLD, BARDON, 4065</p>
            </div>
          </div>

          <OrderSummary data-oid=":qykfnh" />

          <button
            onClick={() => alert("Order Placed!")}
            className="w-full bg-[#123b79] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#0f2f63] transition-colors flex items-center justify-center gap-2"
            data-oid="r43kqne"
          >
            <Lock size={16} data-oid="2w84:3:" />
            Place Order Securely
          </button>

          <p className="text-xs text-gray-500 text-center" data-oid="fslxcoo">
            By clicking Place Order Securely you confirm that you have read,
            understood and accept our{" "}
            <a
              href="#"
              className="text-[#123b79] hover:underline"
              data-oid=":m:oacs"
            >
              terms and conditions
            </a>
            ,{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              data-oid="i66t83-"
            >
              returns policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              data-oid="i0x2.s1"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="0wlvf18">
        <h3 className="text-lg font-semibold mb-2" data-oid="t-nkjhb">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="s52gr1o">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="ptsc9:m"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="8ay1-8f"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
