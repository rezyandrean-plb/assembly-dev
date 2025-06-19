"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import { useCart } from "@/components/cart-context";
import OrderSummary from "../components/order-summary";

export default function DeliveryPage() {
  const router = useRouter();
  const { cart } = useCart();
  const { deliveryOption, setDeliveryOption, setShippingCost } = useCheckout();
  const [postalCode, setPostalCode] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("delivery");

  // Check if there are books in cart, redirect if not
  useEffect(() => {
    const hasBook = cart.some((item) => item.type === "Book");
    if (!hasBook) {
      router.replace("/checkout/payment");
    }
  }, [cart, router]);

  // Get book items from cart
  const bookItems = cart.filter((item) => item.type === "Book");

  const handleNext = () => {
    if (deliveryOption === "self-collect") {
      setShippingCost(0);
    } else if (deliveryOption === "delivery" && !postalCode.trim()) {
      alert("Please enter a postal code and select a delivery option");
      return;
    }
    router.push("/checkout/address");
  };

  const handleDeliveryChange = (option: string) => {
    setSelectedShipping(option);
    if (option === "collect") {
      setDeliveryOption("self-collect");
      setShippingCost(0);
    } else {
      setDeliveryOption("delivery");
    }
  };

  // Don't render if no books (will redirect)
  if (bookItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="lm_xbf.">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="sbvreuy"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="wneg4v_"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" data-oid="kzd80fn">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-oid="qs7_02p">
        {/* Left Column - Items */}
        <div className="lg:col-span-1" data-oid="-9is4:2">
          <h2 className="text-2xl font-bold mb-6" data-oid="nscpyxi">
            Your Items ({bookItems.length})
          </h2>

          <h3 className="text-lg font-semibold mb-4" data-oid="veor1jb">
            Select click & collect or delivery for each item
          </h3>

          {bookItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg p-4 mb-6"
              data-oid="htv75ag"
            >
              <div className="flex items-center gap-4" data-oid=":5ouael">
                <div
                  className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"
                  data-oid="7k.2ayw"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded"
                      data-oid="r:ew6tj"
                    />
                  )}
                </div>
                <div className="flex-1" data-oid=".hbnr3o">
                  <h4 className="font-semibold" data-oid="ir1s27p">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600" data-oid="ogdp3.j">
                    By {item.instructor}
                  </p>
                  <p className="text-sm text-gray-600" data-oid="jmm:mvv">
                    Quantity: {item.quantity}
                  </p>
                  <p className="font-semibold" data-oid="5q7ub:v">
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3" data-oid="a-s.vku">
                <div className="flex items-center gap-3" data-oid="247v21:">
                  <input
                    type="radio"
                    id="collect"
                    name="deliveryMethod"
                    value="collect"
                    checked={selectedShipping === "collect"}
                    onChange={(e) => handleDeliveryChange(e.target.value)}
                    className="w-4 h-4"
                    data-oid="1dlke3k"
                  />

                  <label
                    htmlFor="collect"
                    className="flex-1"
                    data-oid="c4jakb0"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="7_2o2s-"
                    >
                      <div data-oid="r_oc4ak">
                        <p className="font-medium" data-oid="8ckjt_v">
                          Click & Collect
                        </p>
                        <p className="text-sm text-gray-600" data-oid="g1ma449">
                          Collection from 62 Ubi Road 1, Oxley BizHub 2,
                          #11-15/18, Singapore, 408734
                        </p>
                      </div>
                      <span className="font-semibold" data-oid="u.d:aat">
                        FREE
                      </span>
                    </div>
                  </label>
                </div>

                <div className="border rounded-lg" data-oid="uvv0oto">
                  <div
                    className="flex items-center gap-3 p-3"
                    data-oid="2x-z3ih"
                  >
                    <input
                      type="radio"
                      id="delivery"
                      name="deliveryMethod"
                      value="delivery"
                      checked={selectedShipping === "delivery"}
                      onChange={(e) => handleDeliveryChange(e.target.value)}
                      className="w-4 h-4"
                      data-oid="2_.i1ns"
                    />

                    <label
                      htmlFor="delivery"
                      className="flex-1"
                      data-oid="yx:mdoa"
                    >
                      <p className="font-medium" data-oid="wl9q_5o">
                        Delivery
                      </p>
                    </label>
                  </div>

                  {selectedShipping === "delivery" && (
                    <div className="border-t p-3" data-oid="qngnz:t">
                      <div className="mb-4" data-oid="j0qem3u">
                        <label
                          className="block text-sm font-medium mb-2"
                          data-oid="f_pk_0q"
                        >
                          Enter your postal code to see delivery options
                        </label>
                        <div className="flex gap-2 mb-3" data-oid="g552_47">
                          <input
                            type="text"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            placeholder="Enter postal code"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="r_azx:w"
                          />

                          <button
                            onClick={() => {
                              if (postalCode.trim()) {
                                console.log(
                                  "Checking delivery for:",
                                  postalCode,
                                );
                              }
                            }}
                            className="px-4 py-2 bg-[#123b79] text-white rounded-md hover:bg-[#0f2f63] transition-colors"
                            data-oid=".:kxpcp"
                          >
                            Check
                          </button>
                        </div>

                        {postalCode.trim() && (
                          <div className="space-y-3" data-oid="toaid_r">
                            <p
                              className="text-sm font-medium text-gray-700"
                              data-oid="snt3iq4"
                            >
                              Delivery options for {postalCode}:
                            </p>

                            <div className="space-y-2" data-oid="o3hl96z">
                              <label
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                data-oid="o8t1cp1"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid="2c-y.t0"
                                >
                                  <input
                                    type="radio"
                                    name="shippingOption"
                                    value="jnt"
                                    className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                    onChange={() => setShippingCost(3.75)}
                                    data-oid="410t6m0"
                                  />

                                  <div className="ml-3" data-oid="utjwo:o">
                                    <p
                                      className="text-sm font-medium"
                                      data-oid="ju2z:sq"
                                    >
                                      J&T Express [1-3 working day(s)]
                                    </p>
                                  </div>
                                </div>
                                <span
                                  className="text-sm font-semibold"
                                  data-oid=":35hsiy"
                                >
                                  $3.75
                                </span>
                              </label>

                              <label
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                data-oid="6p7q1c2"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid=":ee9-ng"
                                >
                                  <input
                                    type="radio"
                                    name="shippingOption"
                                    value="aramex"
                                    className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                    onChange={() => setShippingCost(4.55)}
                                    data-oid="wc9jfb7"
                                  />

                                  <div className="ml-3" data-oid="ucx5t98">
                                    <p
                                      className="text-sm font-medium"
                                      data-oid="lzsdco4"
                                    >
                                      Aramex Domestic Delivery [1-3 working
                                      day(s)]
                                    </p>
                                  </div>
                                </div>
                                <span
                                  className="text-sm font-semibold"
                                  data-oid="69pdsl3"
                                >
                                  $4.55
                                </span>
                              </label>

                              <label
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                data-oid=":oqlu7y"
                              >
                                <div
                                  className="flex items-center"
                                  data-oid="r8cm5xq"
                                >
                                  <input
                                    type="radio"
                                    name="shippingOption"
                                    value="tracx"
                                    className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                    onChange={() => setShippingCost(4.05)}
                                    data-oid="c9a0biy"
                                  />

                                  <div className="ml-3" data-oid="61_rou8">
                                    <p
                                      className="text-sm font-medium"
                                      data-oid="co:jxsl"
                                    >
                                      Tracx Logis [1-2 working day(s)]
                                    </p>
                                  </div>
                                </div>
                                <span
                                  className="text-sm font-semibold"
                                  data-oid="q4v739a"
                                >
                                  $4.05
                                </span>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>

                      {postalCode.trim() && (
                        <button
                          className="text-[#123b79] text-sm hover:underline"
                          data-oid="bv4by92"
                        >
                          Change Delivery Type
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={handleNext}
            className="w-full bg-[#123b79] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#0f2f63] transition-colors"
            data-oid="njusf9n"
          >
            Next
          </button>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-2" data-oid="n4tdra6">
          <OrderSummary data-oid="_3u5_ql" />
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="ywc8upb">
        <h3 className="text-lg font-semibold mb-2" data-oid="pjxm8ad">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="::h2f_b">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="xk11b-9"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="5_6jjn6"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
