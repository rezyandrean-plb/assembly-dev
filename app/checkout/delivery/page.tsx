"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import OrderSummary from "../components/order-summary";

export default function DeliveryPage() {
  const router = useRouter();
  const { deliveryOption, setDeliveryOption, setShippingCost } = useCheckout();
  const [postalCode, setPostalCode] = useState("4000");
  const [selectedShipping, setSelectedShipping] = useState("delivery");

  const handleNext = () => {
    if (deliveryOption === "self-collect") {
      setShippingCost(0);
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" data-oid="kzd80fn">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-oid="qs7_02p">
        {/* Left Column - Items */}
        <div className="lg:col-span-1" data-oid="-9is4:2">
          <h2 className="text-2xl font-bold mb-6" data-oid="nscpyxi">
            Your Items (1)
          </h2>

          <h3 className="text-lg font-semibold mb-4" data-oid="veor1jb">
            Select click & collect or delivery for each item
          </h3>

          <div
            className="bg-white border rounded-lg p-4 mb-6"
            data-oid="htv75ag"
          >
            <div className="flex items-center gap-4" data-oid=":5ouael">
              <div
                className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"
                data-oid="7k.2ayw"
              ></div>
              <div className="flex-1" data-oid=".hbnr3o">
                <h4 className="font-semibold" data-oid="ir1s27p">
                  Country Road
                </h4>
                <p className="text-sm text-gray-600" data-oid="ogdp3.j">
                  TRI CROSSBODY
                </p>
                <p className="text-sm text-gray-600" data-oid="neh_4ii">
                  Size: no size | Colour: BLACK
                </p>
                <p className="text-sm text-gray-600" data-oid="jmm:mvv">
                  Quantity: 1
                </p>
                <p className="font-semibold" data-oid="5q7ub:v">
                  $129.00
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

                <label htmlFor="collect" className="flex-1" data-oid="c4jakb0">
                  <div
                    className="flex justify-between items-center"
                    data-oid="7_2o2s-"
                  >
                    <div data-oid="r_oc4ak">
                      <p className="font-medium" data-oid="8ckjt_v">
                        Click & Collect
                      </p>
                      <p className="text-sm text-gray-600" data-oid="g1ma449">
                        Select to check availability
                      </p>
                    </div>
                    <span className="font-semibold" data-oid="u.d:aat">
                      FREE
                    </span>
                  </div>
                </label>
              </div>

              <div className="border rounded-lg" data-oid="uvv0oto">
                <div className="flex items-center gap-3 p-3" data-oid="2x-z3ih">
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
                    <div className="mb-3" data-oid="j0qem3u">
                      <label
                        className="block text-sm font-medium mb-1"
                        data-oid="f_pk_0q"
                      >
                        Postcode: {postalCode}
                      </label>
                      <p className="text-sm text-gray-600" data-oid="vf7bzf6">
                        Standard Delivery (5-9 Business Days) FREE
                      </p>
                    </div>
                    <button
                      className="text-blue-600 text-sm hover:underline"
                      data-oid="bv4by92"
                    >
                      Change Delivery Type
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
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
            className="text-blue-600 hover:underline font-medium"
            data-oid="xk11b-9"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
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
