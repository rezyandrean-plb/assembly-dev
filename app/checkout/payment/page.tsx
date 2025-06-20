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
    <div className="min-h-screen bg-gray-50" data-oid="3majcoo">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="ef3j2pn">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="kp.p9c5"
        >
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2" data-oid="d89rvo3">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="ojx2a8z"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="_nkmsfl"
              >
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6" data-oid="9-_2131">
                Choose your preferred payment method
              </p>

              <div className="space-y-6" data-oid="z8k2pyn">
                {/* Redeem Rewards/Points Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid="48dm371"
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "rewards" ? "" : "rewards",
                      )
                    }
                    data-oid="jb--5hl"
                  >
                    <h3 className="font-semibold" data-oid="ot-c3_.">
                      Redeem Rewards / Points
                    </h3>
                    <ChevronDown
                      className={`transition-transform ${expandedSection === "rewards" ? "rotate-180" : ""}`}
                      data-oid=".nttp4a"
                    />
                  </div>
                  {expandedSection === "rewards" && (
                    <div className="border-t p-4 space-y-3" data-oid="96jubit">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className="flex items-center justify-between p-3 border rounded"
                          data-oid="nv6b.c_"
                        >
                          <div
                            className="flex items-center gap-3"
                            data-oid="f8jnv4i"
                          >
                            <input
                              type="radio"
                              name="rewardPayment"
                              value={method.id}
                              className="w-4 h-4"
                              data-oid="lvcbwqa"
                            />

                            <span data-oid="fr1wi52">{method.name}</span>
                          </div>
                          <span className="text-2xl" data-oid="n4.xxln">
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
                  data-oid="07p_nke"
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
                    data-oid="o6pzau6"
                  >
                    <div className="flex items-center gap-3" data-oid="gk9warj">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit / Debit"
                        checked={selectedPayment === "Credit / Debit"}
                        onChange={() => setSelectedPayment("Credit / Debit")}
                        className="w-4 h-4"
                        data-oid="icmctt0"
                      />

                      <span className="font-semibold" data-oid="v60e0vc">
                        Debit or Credit Card
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid=".moustq">
                      <div className="flex gap-1" data-oid="7otl_1b">
                        <div
                          className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="i1rkjc4"
                        >
                          VISA
                        </div>
                        <div
                          className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="gst_i8e"
                        >
                          MC
                        </div>
                        <div
                          className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center"
                          data-oid="3-7l9:5"
                        >
                          AE
                        </div>
                      </div>
                      <ChevronDown
                        className={`transition-transform ${expandedSection === "Credit / Debit" ? "rotate-180" : ""}`}
                        data-oid=":hs2u1t"
                      />
                    </div>
                  </div>

                  {expandedSection === "Credit / Debit" &&
                    selectedPayment === "Credit / Debit" && (
                      <div
                        className="border-t p-4 space-y-4"
                        data-oid="9k5go-z"
                      >
                        <div data-oid="6po4lsc">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="va-u9nm"
                          >
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="n2aq6t0"
                          />
                        </div>
                        <div data-oid="sov5dwv">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="qk5tss3"
                          >
                            Card Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="sqfx1ne"
                          />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-4"
                          data-oid="5g:7kq."
                        >
                          <div data-oid="ptl1mrt">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="zb3q85h"
                            >
                              Expiry Date *
                            </label>
                            <div
                              className="grid grid-cols-2 gap-2"
                              data-oid="1lkylcn"
                            >
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                                data-oid="upvr_r4"
                              >
                                <option data-oid="eng71p3">MM</option>
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1,
                                ).map((m) => (
                                  <option
                                    key={m}
                                    value={m.toString().padStart(2, "0")}
                                    data-oid="dlq1ne6"
                                  >
                                    {m.toString().padStart(2, "0")}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="xyk9hjd"
                              >
                                <option data-oid="j3gfevc">YYYY</option>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => new Date().getFullYear() + i,
                                ).map((y) => (
                                  <option key={y} value={y} data-oid="k9w2ucm">
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div data-oid="cvbo8kw">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="0mgbe-4"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              data-oid="akzpt25"
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
                    data-oid="jrtzqv-"
                  >
                    <div className="flex items-center gap-3" data-oid="pxfns0:">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="w-4 h-4"
                        data-oid="ir5dmrc"
                      />

                      <span className="font-semibold" data-oid="r3wqvi0">
                        {method.name}
                      </span>
                    </div>
                    <span className="text-2xl" data-oid="l2n.gqb">
                      {method.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Review */}
          <div className="lg:col-span-1" data-oid="9bu6k0p">
            <div className="sticky top-8 space-y-6" data-oid="3ir..rk">
              <OrderSummary data-oid="7-xgdy7" />

              {/* Review Address */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-oid="zsh:w91"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="amu9yyf"
                >
                  <h3 className="text-lg font-semibold" data-oid="4lo:gbg">
                    Review Address
                  </h3>
                  <button
                    onClick={() => router.push("/checkout/address")}
                    className="text-[#123b79] text-sm hover:underline font-medium"
                    data-oid="62mw-vr"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1" data-oid="-3zbh7p">
                  <h4 className="font-bold text-gray-900" data-oid="et3e2b5">
                    Delivery & Billing Address
                  </h4>
                  <p className="font-semibold text-gray-800" data-oid="euxo.ei">
                    {finalBillingAddress.firstName}{" "}
                    {finalBillingAddress.lastName}
                  </p>
                  <p className="text-gray-600" data-oid="26vwne5">
                    {finalBillingAddress.email}
                  </p>
                  <p className="text-gray-600" data-oid="pimmsag">
                    {finalBillingAddress.mobile}
                  </p>
                  <p className="text-gray-600" data-oid="ssx7mya">
                    72 Hebe St, QLD, BARDON, 4065
                  </p>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => alert("Order Placed!")}
                className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                data-oid="q0_vk3j"
              >
                Proceed to Checkout →
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push("/courses")}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                data-oid="pycj8:s"
              >
                Continue Shopping
              </button>

              <p
                className="text-xs text-gray-500 text-center leading-relaxed"
                data-oid="3e-dun."
              >
                By clicking Proceed to Checkout you confirm that you have read,
                understood and accept our{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="w6_5uja"
                >
                  terms and conditions
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="h4:9h1s"
                >
                  returns policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="bzf3jgv"
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
      <div className="mt-12 text-center" data-oid="9azqm27">
        <h3 className="text-lg font-semibold mb-2" data-oid="4l1om2c">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="f44ujbs">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="n5rfwr2"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="z:ey73p"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
