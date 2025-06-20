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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="xeipu0o">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="971idmp"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="d.pvpy-"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid=":v-ewnv">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="8a1t58r">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="2_s5w39"
        >
          {/* Left Column - Items */}
          <div className="lg:col-span-2" data-oid="b5tqv5d">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="bcp:wo5"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="xdte17z"
              >
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-6" data-oid="32aj-70">
                Choose how you'd like to receive your items ({bookItems.length}{" "}
                item{bookItems.length !== 1 ? "s" : ""})
              </p>

              {bookItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-6 mb-6"
                  data-oid="m85t6i:"
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="uuqhshh"
                  >
                    <div
                      className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"
                      data-oid="8b1j1kj"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                          data-oid="2my8s47"
                        />
                      )}
                    </div>
                    <div className="flex-1" data-oid="4k9qimp">
                      <h4 className="font-semibold" data-oid="tk9wa-e">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="5sv6b1e">
                        By {item.author}
                      </p>
                      <p className="text-sm text-gray-600" data-oid="-2jbxva">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-semibold" data-oid="yn9swy4">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="l90re1d">
                    {/* Self Pickup Option */}
                    <div className="flex items-start gap-3" data-oid="7kb56gl">
                      <input
                        type="radio"
                        id="collect"
                        name="deliveryMethod"
                        value="collect"
                        checked={selectedShipping === "collect"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="zs8b39y"
                      />

                      <label
                        htmlFor="collect"
                        className="flex-1"
                        data-oid="4d9ul4x"
                      >
                        <div
                          className="flex justify-between items-start"
                          data-oid="gqrs5p9"
                        >
                          <div data-oid="q7n7gzj">
                            <p className="font-medium" data-oid=":ayo9zy">
                              Self Pickup
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="tql-673"
                            >
                              Collection from 62 Ubi Road 1, Oxley BizHub 2,
                              #11-15/18, Singapore, 408734
                            </p>
                          </div>
                          <span className="font-semibold" data-oid="g9zin74">
                            FREE
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Delivery Option */}
                    <div className="flex items-start gap-3" data-oid="mq227re">
                      <input
                        type="radio"
                        id="delivery"
                        name="deliveryMethod"
                        value="delivery"
                        checked={selectedShipping === "delivery"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="p_ud0r-"
                      />

                      <label
                        htmlFor="delivery"
                        className="flex-1"
                        data-oid=".zef-5e"
                      >
                        <p className="font-medium" data-oid="zbfm-v9">
                          Delivery
                        </p>
                      </label>
                    </div>

                    {/* Delivery Options Section */}
                    {selectedShipping === "delivery" && (
                      <div className="ml-7 space-y-4" data-oid="nk5aoh7">
                        <div data-oid="w_zil2x">
                          <label
                            className="block text-sm font-medium mb-2"
                            data-oid=":r2gxke"
                          >
                            Enter your postal code to see delivery options
                          </label>
                          <div className="flex gap-2 mb-4" data-oid="bm7-937">
                            <input
                              type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              placeholder="Enter postal code"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                              data-oid="3k137pd"
                            />

                            <button
                              onClick={handleCheckDelivery}
                              className="px-4 py-2 bg-[#123b79] text-white rounded-md hover:bg-[#0f2f63] transition-colors"
                              data-oid="ruj.edb"
                            >
                              Check
                            </button>
                          </div>

                          {showDeliveryOptions && postalCode.trim() && (
                            <div className="space-y-3" data-oid="iulnit2">
                              <p
                                className="text-sm font-medium text-gray-700"
                                data-oid="o6smgka"
                              >
                                Delivery options for {postalCode}:
                              </p>

                              <div className="space-y-2" data-oid="ef9c9nx">
                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="2jy:e3s"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="wwda0d7"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="jnt"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(3.75)}
                                      data-oid="ve13f_a"
                                    />

                                    <div className="ml-3" data-oid="56cf.yo">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="4at.r99"
                                      >
                                        J&T Express [1-3 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="751eegg"
                                  >
                                    $3.75
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="u5a2bl7"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="s0w3xml"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="aramex"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.55)}
                                      data-oid="fzpl4wc"
                                    />

                                    <div className="ml-3" data-oid="ou2vbbz">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="g6gjwj7"
                                      >
                                        Aramex Domestic Delivery [1-3 working
                                        day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid=".:d_cp:"
                                  >
                                    $4.55
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="po:csjt"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid=":.k6y2h"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="tracx"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.05)}
                                      data-oid="ae8cr2h"
                                    />

                                    <div className="ml-3" data-oid="m71lk7_">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="0p:2e.1"
                                      >
                                        Tracx Logis [1-2 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="73-j534"
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
                data-oid="w6cw78z"
              >
                Continue to Address →
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="d:z5eu:">
            <div className="sticky top-8" data-oid="q5v9r56">
              <OrderSummary data-oid="wvgg4zo" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="8xz_1v_">
        <h3 className="text-lg font-semibold mb-2" data-oid="6blvj7a">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="27_o89f">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="hn93w-s"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="twqxl6o"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
