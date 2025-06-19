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
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

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
      setShowDeliveryOptions(false);
    } else {
      setDeliveryOption("delivery");
    }
  };

  const handleCheckDelivery = () => {
    if (postalCode.trim()) {
      setShowDeliveryOptions(true);
    }
  };

  // Don't render if no books (will redirect)
  if (bookItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="nthqmhd">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="g-mhsxb"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="zk__.:v"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="zu-tk0k">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="rpo1n7s">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="ajrxlbr"
        >
          {/* Left Column - Items */}
          <div className="lg:col-span-2" data-oid="kuosav:">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="rc:4u.c"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="z8lx7z9"
              >
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-6" data-oid="delivery-subtitle">
                Choose how you'd like to receive your items ({bookItems.length}{" "}
                item{bookItems.length !== 1 ? "s" : ""})
              </p>

              {bookItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-6 mb-6"
                  data-oid="0uog8-o"
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="628ilza"
                  >
                    <div
                      className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"
                      data-oid="ak-tzf1"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                          data-oid="14b81oa"
                        />
                      )}
                    </div>
                    <div className="flex-1" data-oid="k9:o992">
                      <h4 className="font-semibold" data-oid="o6e2oe7">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="4m_azpx">
                        By {item.instructor}
                      </p>
                      <p className="text-sm text-gray-600" data-oid="eqiki77">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-semibold" data-oid="7p9la66">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="nl0q1g.">
                    {/* Self Pickup Option */}
                    <div className="flex items-start gap-3" data-oid="ftooqzj">
                      <input
                        type="radio"
                        id="collect"
                        name="deliveryMethod"
                        value="collect"
                        checked={selectedShipping === "collect"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="1.f4v.n"
                      />

                      <label
                        htmlFor="collect"
                        className="flex-1"
                        data-oid="cwi-d6b"
                      >
                        <div
                          className="flex justify-between items-start"
                          data-oid="l6ymfaj"
                        >
                          <div data-oid="ree7w6e">
                            <p className="font-medium" data-oid="xg9joej">
                              Self Pickup
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="2j37woo"
                            >
                              Collection from 62 Ubi Road 1, Oxley BizHub 2,
                              #11-15/18, Singapore, 408734
                            </p>
                          </div>
                          <span className="font-semibold" data-oid="zbqrbf_">
                            FREE
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Delivery Option */}
                    <div className="flex items-start gap-3" data-oid="mh-i:12">
                      <input
                        type="radio"
                        id="delivery"
                        name="deliveryMethod"
                        value="delivery"
                        checked={selectedShipping === "delivery"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="iltx6_h"
                      />

                      <label
                        htmlFor="delivery"
                        className="flex-1"
                        data-oid="uob5ms9"
                      >
                        <p className="font-medium" data-oid="6q4x4qz">
                          Delivery
                        </p>
                      </label>
                    </div>

                    {/* Delivery Options Section */}
                    {selectedShipping === "delivery" && (
                      <div className="ml-7 space-y-4" data-oid="nby2kk8">
                        <div data-oid="lzoy2e1">
                          <label
                            className="block text-sm font-medium mb-2"
                            data-oid="w51w-tx"
                          >
                            Enter your postal code to see delivery options
                          </label>
                          <div className="flex gap-2 mb-4" data-oid="gafjgdu">
                            <input
                              type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              placeholder="Enter postal code"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                              data-oid="7j44cwh"
                            />

                            <button
                              onClick={handleCheckDelivery}
                              className="px-4 py-2 bg-[#123b79] text-white rounded-md hover:bg-[#0f2f63] transition-colors"
                              data-oid="sdbyyj4"
                            >
                              Check
                            </button>
                          </div>

                          {showDeliveryOptions && postalCode.trim() && (
                            <div className="space-y-3" data-oid="pbs_rop">
                              <p
                                className="text-sm font-medium text-gray-700"
                                data-oid="kmx.opo"
                              >
                                Delivery options for {postalCode}:
                              </p>

                              <div className="space-y-2" data-oid="n.p0mxc">
                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="moh1dkx"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="nv5ro35"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="jnt"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(3.75)}
                                      data-oid="18ouxti"
                                    />

                                    <div className="ml-3" data-oid="znal_-s">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="0.tdlgo"
                                      >
                                        J&T Express [1-3 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="r7ym5.u"
                                  >
                                    $3.75
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="nc47o0r"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="gtd8h0_"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="aramex"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.55)}
                                      data-oid="b402k36"
                                    />

                                    <div className="ml-3" data-oid="5j..my8">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="31:ew27"
                                      >
                                        Aramex Domestic Delivery [1-3 working
                                        day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="d:omw4f"
                                  >
                                    $4.55
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="2ry4s_i"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="q40r4oj"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="tracx"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.05)}
                                      data-oid="inhxr88"
                                    />

                                    <div className="ml-3" data-oid="fia39ij">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="8o87fii"
                                      >
                                        Tracx Logis [1-2 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="gfzpr5p"
                                  >
                                    $4.05
                                  </span>
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={handleNext}
                className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg"
                data-oid="c-gqm4k"
              >
                Continue to Address →
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="dh..sf1">
            <div className="sticky top-8" data-oid="dk.w62h">
              <OrderSummary data-oid=".ao9gys" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="eq.2f00">
        <h3 className="text-lg font-semibold mb-2" data-oid="qix79hk">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="7625bhp">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="t9ny_i_"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="95zmxky"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
