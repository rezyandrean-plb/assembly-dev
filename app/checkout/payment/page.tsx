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
    <div className="min-h-screen bg-gray-50" data-oid="jo.uoi7">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="djhihe_">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid=".sgbjc4"
        >
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2" data-oid="c_:.tn5">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="bzrdif8"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid=".unlr46"
              >
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6" data-oid="mev7_07">
                Choose your preferred payment method
              </p>

              <div className="space-y-6" data-oid=".0z9nb:">
                {/* Redeem Rewards/Points Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid=".rh:ba4"
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "rewards" ? "" : "rewards",
                      )
                    }
                    data-oid="h_hvd8e"
                  >
                    <h3 className="font-semibold" data-oid=".jm1qfv">
                      Redeem Rewards / Points
                    </h3>
                    <ChevronDown
                      className={`transition-transform ${expandedSection === "rewards" ? "rotate-180" : ""}`}
                      data-oid="ps3ztiu"
                    />
                  </div>
                  {expandedSection === "rewards" && (
                    <div className="border-t p-4 space-y-3" data-oid="ta_4b0f">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className="flex items-center justify-between p-3 border rounded"
                          data-oid="aot5g:e"
                        >
                          <div
                            className="flex items-center gap-3"
                            data-oid="h4v0jaj"
                          >
                            <input
                              type="radio"
                              name="rewardPayment"
                              value={method.id}
                              className="w-4 h-4"
                              data-oid="ishthqh"
                            />

                            <span data-oid=":falsd6">{method.name}</span>
                          </div>
                          <span className="text-2xl" data-oid="wda.ro-">
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
                  data-oid="fzs9dy7"
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
                    data-oid="8lhsk-f"
                  >
                    <div className="flex items-center gap-3" data-oid="wu52r-d">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit / Debit"
                        checked={selectedPayment === "Credit / Debit"}
                        onChange={() => setSelectedPayment("Credit / Debit")}
                        className="w-4 h-4"
                        data-oid="q8ksxey"
                      />

                      <span className="font-semibold" data-oid="l5jyrx1">
                        Debit or Credit Card
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="mp5j3h3">
                      <div className="flex gap-1" data-oid="zvdi5za">
                        <div
                          className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="s57byvr"
                        >
                          VISA
                        </div>
                        <div
                          className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center"
                          data-oid="clwp_yf"
                        >
                          MC
                        </div>
                        <div
                          className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center"
                          data-oid="6zycal:"
                        >
                          AE
                        </div>
                      </div>
                      <ChevronDown
                        className={`transition-transform ${expandedSection === "Credit / Debit" ? "rotate-180" : ""}`}
                        data-oid="32jw6r7"
                      />
                    </div>
                  </div>

                  {expandedSection === "Credit / Debit" &&
                    selectedPayment === "Credit / Debit" && (
                      <div
                        className="border-t p-4 space-y-4"
                        data-oid="fh1gbd3"
                      >
                        <div data-oid="aslxrox">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="d-pn64f"
                          >
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="6-w:557"
                          />
                        </div>
                        <div data-oid="nbvxx3.">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid=".sp30-f"
                          >
                            Card Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="brdnqmy"
                          />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-4"
                          data-oid="lp_miux"
                        >
                          <div data-oid="417dflt">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="bcnwadd"
                            >
                              Expiry Date *
                            </label>
                            <div
                              className="grid grid-cols-2 gap-2"
                              data-oid="yaqyq.s"
                            >
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                                data-oid="dc1ta-s"
                              >
                                <option data-oid="7s-37te">MM</option>
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1,
                                ).map((m) => (
                                  <option
                                    key={m}
                                    value={m.toString().padStart(2, "0")}
                                    data-oid="qu3unxv"
                                  >
                                    {m.toString().padStart(2, "0")}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="kwom0rk"
                              >
                                <option data-oid="qifz_hq">YYYY</option>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => new Date().getFullYear() + i,
                                ).map((y) => (
                                  <option key={y} value={y} data-oid="ubggsr9">
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div data-oid="sd2xly3">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="g02keef"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              data-oid="gvmgl58"
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
                    data-oid="kjb5ui:"
                  >
                    <div className="flex items-center gap-3" data-oid="hu9a3bq">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="w-4 h-4"
                        data-oid="827yklk"
                      />

                      <span className="font-semibold" data-oid=".rc8zi.">
                        {method.name}
                      </span>
                    </div>
                    <span className="text-2xl" data-oid="r.8yg37">
                      {method.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Review */}
          <div className="lg:col-span-1" data-oid="h46zmwr">
            <div className="sticky top-8 space-y-6" data-oid="-f1ha_g">
              <OrderSummary data-oid="0td_fr1" />

              {/* Review Address */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-oid="klgr3up"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="kn0ah8g"
                >
                  <h3 className="text-lg font-semibold" data-oid="wtp0gd.">
                    Review Address
                  </h3>
                  <button
                    onClick={() => router.push("/checkout/address")}
                    className="text-[#123b79] text-sm hover:underline font-medium"
                    data-oid="rzisro9"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1" data-oid="w6x_9fo">
                  <h4 className="font-bold text-gray-900" data-oid="ja-vhmq">
                    Delivery & Billing Address
                  </h4>
                  <p className="font-semibold text-gray-800" data-oid="zzy29ux">
                    {finalBillingAddress.firstName}{" "}
                    {finalBillingAddress.lastName}
                  </p>
                  <p className="text-gray-600" data-oid=":349yko">
                    {finalBillingAddress.email}
                  </p>
                  <p className="text-gray-600" data-oid="2clakd-">
                    {finalBillingAddress.mobile}
                  </p>
                  <p className="text-gray-600" data-oid="w2rmp0w">
                    72 Hebe St, QLD, BARDON, 4065
                  </p>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => alert("Order Placed!")}
                className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                data-oid="scml6eo"
              >
                Proceed to Checkout →
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push("/courses")}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                data-oid="gpuf0fx"
              >
                Continue Shopping
              </button>

              <p
                className="text-xs text-gray-500 text-center leading-relaxed"
                data-oid="vv4do_g"
              >
                By clicking Proceed to Checkout you confirm that you have read,
                understood and accept our{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="dghu079"
                >
                  terms and conditions
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="ou9jwuz"
                >
                  returns policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#123b79] hover:underline"
                  data-oid="x0dthsz"
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
      <div className="mt-12 text-center" data-oid="0oj0i9h">
        <h3 className="text-lg font-semibold mb-2" data-oid="p:wt:lc">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="4bnp-2c">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="6394.z3"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="qi-snlp"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
