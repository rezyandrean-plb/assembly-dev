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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="i:6:59w">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="02_swts"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="ibtt_1g"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="ocrf4z5">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="iokw3kx">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="i0k6.qy"
        >
          {/* Left Column - Items */}
          <div className="lg:col-span-2" data-oid="eb:jl8u">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="xx9oojw"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="2n:_apc"
              >
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-6" data-oid="3pod46t">
                Choose how you'd like to receive your items ({bookItems.length}{" "}
                item{bookItems.length !== 1 ? "s" : ""})
              </p>

              {bookItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-6 mb-6"
                  data-oid="3joi0q."
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="d_a_evp"
                  >
                    <div
                      className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"
                      data-oid="ow8-nhe"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                          data-oid="5c:5zhu"
                        />
                      )}
                    </div>
                    <div className="flex-1" data-oid="r6k129q">
                      <h4 className="font-semibold" data-oid="40u.7is">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="4rf0wqb">
                        By {item.author}
                      </p>
                      <p className="text-sm text-gray-600" data-oid="-tio.in">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-semibold" data-oid="8up57u1">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="ic9hexj">
                    {/* Self Pickup Option */}
                    <div className="flex items-start gap-3" data-oid="kmusal-">
                      <input
                        type="radio"
                        id="collect"
                        name="deliveryMethod"
                        value="collect"
                        checked={selectedShipping === "collect"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="qrk0oai"
                      />

                      <label
                        htmlFor="collect"
                        className="flex-1"
                        data-oid="j0-1uau"
                      >
                        <div
                          className="flex justify-between items-start"
                          data-oid="inkv_pv"
                        >
                          <div data-oid="5u2c_e2">
                            <p className="font-medium" data-oid="rbx..n4">
                              Self Pickup
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="g3nx40g"
                            >
                              Collection from 62 Ubi Road 1, Oxley BizHub 2,
                              #11-15/18, Singapore, 408734
                            </p>
                          </div>
                          <span className="font-semibold" data-oid="f:ln9c-">
                            FREE
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Delivery Option */}
                    <div className="flex items-start gap-3" data-oid=".9ajvb0">
                      <input
                        type="radio"
                        id="delivery"
                        name="deliveryMethod"
                        value="delivery"
                        checked={selectedShipping === "delivery"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="h0x_kkl"
                      />

                      <label
                        htmlFor="delivery"
                        className="flex-1"
                        data-oid="yuej:pd"
                      >
                        <p className="font-medium" data-oid="ja9:042">
                          Delivery
                        </p>
                      </label>
                    </div>

                    {/* Delivery Options Section */}
                    {selectedShipping === "delivery" && (
                      <div className="ml-7 space-y-4" data-oid="-ofkqbw">
                        <div data-oid="feicdyi">
                          <label
                            className="block text-sm font-medium mb-2"
                            data-oid="pz7u5s:"
                          >
                            Enter your postal code to see delivery options
                          </label>
                          <div className="flex gap-2 mb-4" data-oid="dixv1p0">
                            <input
                              type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              placeholder="Enter postal code"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                              data-oid="dua15f8"
                            />

                            <button
                              onClick={handleCheckDelivery}
                              className="px-4 py-2 bg-[#123b79] text-white rounded-md hover:bg-[#0f2f63] transition-colors"
                              data-oid="0t0gp3p"
                            >
                              Check
                            </button>
                          </div>

                          {showDeliveryOptions && postalCode.trim() && (
                            <div className="space-y-3" data-oid="4.asoml">
                              <p
                                className="text-sm font-medium text-gray-700"
                                data-oid="3iz5wi1"
                              >
                                Delivery options for {postalCode}:
                              </p>

                              <div className="space-y-2" data-oid="d1bq2lx">
                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="un8x3tn"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="uj4vdkb"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="jnt"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(3.75)}
                                      data-oid=":domn33"
                                    />

                                    <div className="ml-3" data-oid="62sxctq">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="1nk4h1b"
                                      >
                                        J&T Express [1-3 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="6.vhe9-"
                                  >
                                    $3.75
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="qajg7wy"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="gusmisr"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="aramex"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.55)}
                                      data-oid="eu7vfju"
                                    />

                                    <div className="ml-3" data-oid="es4tb5a">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="zws2sza"
                                      >
                                        Aramex Domestic Delivery [1-3 working
                                        day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="buir-vh"
                                  >
                                    $4.55
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="n2cpo.p"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="q8:a9ta"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="tracx"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.05)}
                                      data-oid="2_x9h6."
                                    />

                                    <div className="ml-3" data-oid="d1d1uxc">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="gnenffe"
                                      >
                                        Tracx Logis [1-2 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="jjebl2p"
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
                data-oid="t44za8s"
              >
                Continue to Address →
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="tenlbh0">
            <div className="sticky top-8" data-oid="d8:ve3d">
              <OrderSummary data-oid="2yweiu6" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="ka3:gf5">
        <h3 className="text-lg font-semibold mb-2" data-oid="yt3vdy_">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="yj-21ha">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="qsgiwt7"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="96-qbb."
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
