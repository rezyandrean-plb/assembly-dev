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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="06s0xjo">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="4e5:2m9"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="us:dagk"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid=".06qyzf">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="6a9h59x">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="o9l.b-p"
        >
          {/* Left Column - Items */}
          <div className="lg:col-span-2" data-oid="po:l3qr">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="4qqa.gj"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="4o4qq78"
              >
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-6" data-oid="t8ipspg">
                Choose how you'd like to receive your items ({bookItems.length}{" "}
                item{bookItems.length !== 1 ? "s" : ""})
              </p>

              {bookItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-6 mb-6"
                  data-oid="by7f-ti"
                >
                  <div
                    className="flex items-center gap-4 mb-6"
                    data-oid="1x7lavp"
                  >
                    <div
                      className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"
                      data-oid="76t4h7c"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                          data-oid=".vugv-k"
                        />
                      )}
                    </div>
                    <div className="flex-1" data-oid="0ckp:23">
                      <h4 className="font-semibold" data-oid="wgyyf09">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="4.uyn9b">
                        By {item.author}
                      </p>
                      <p className="text-sm text-gray-600" data-oid="ncwhqvk">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-semibold" data-oid="p16yuec">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="jtvj241">
                    {/* Self Pickup Option */}
                    <div className="flex items-start gap-3" data-oid="5k2ce.e">
                      <input
                        type="radio"
                        id="collect"
                        name="deliveryMethod"
                        value="collect"
                        checked={selectedShipping === "collect"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="py9ys-1"
                      />

                      <label
                        htmlFor="collect"
                        className="flex-1"
                        data-oid="iv86j5j"
                      >
                        <div
                          className="flex justify-between items-start"
                          data-oid="_.p7uel"
                        >
                          <div data-oid="1mz5f39">
                            <p className="font-medium" data-oid="-ad5egd">
                              Self Pickup
                            </p>
                            <p
                              className="text-sm text-gray-600"
                              data-oid="81bpwm-"
                            >
                              Collection from 62 Ubi Road 1, Oxley BizHub 2,
                              #11-15/18, Singapore, 408734
                            </p>
                          </div>
                          <span className="font-semibold" data-oid="xwj7crq">
                            FREE
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Delivery Option */}
                    <div className="flex items-start gap-3" data-oid="_3.4bi2">
                      <input
                        type="radio"
                        id="delivery"
                        name="deliveryMethod"
                        value="delivery"
                        checked={selectedShipping === "delivery"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                        data-oid="oke0d.y"
                      />

                      <label
                        htmlFor="delivery"
                        className="flex-1"
                        data-oid="4c:-cs9"
                      >
                        <p className="font-medium" data-oid="imo0gmn">
                          Delivery
                        </p>
                      </label>
                    </div>

                    {/* Delivery Options Section */}
                    {selectedShipping === "delivery" && (
                      <div className="ml-7 space-y-4" data-oid="tl:0oxh">
                        <div data-oid="nax1.zp">
                          <label
                            className="block text-sm font-medium mb-2"
                            data-oid="_bdz84j"
                          >
                            Enter your postal code to see delivery options
                          </label>
                          <div className="flex gap-2 mb-4" data-oid="4sdpnv4">
                            <input
                              type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              placeholder="Enter postal code"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                              data-oid="ssuvw3:"
                            />

                            <button
                              onClick={handleCheckDelivery}
                              className="px-4 py-2 bg-[#123b79] text-white rounded-md hover:bg-[#0f2f63] transition-colors"
                              data-oid="37-z85q"
                            >
                              Check
                            </button>
                          </div>

                          {showDeliveryOptions && postalCode.trim() && (
                            <div className="space-y-3" data-oid="thoe7z5">
                              <p
                                className="text-sm font-medium text-gray-700"
                                data-oid="p4vb592"
                              >
                                Delivery options for {postalCode}:
                              </p>

                              <div className="space-y-2" data-oid="_folc2o">
                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="2-4c_:j"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="3o_xkm0"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="jnt"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(3.75)}
                                      data-oid="_7p28ae"
                                    />

                                    <div className="ml-3" data-oid="wbybw74">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid=".x-pr2s"
                                      >
                                        J&T Express [1-3 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="_g1vs56"
                                  >
                                    $3.75
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="haenjp6"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="adq8mpo"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="aramex"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.55)}
                                      data-oid="i_5jez8"
                                    />

                                    <div className="ml-3" data-oid="nt7jw6r">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="oxfzn8w"
                                      >
                                        Aramex Domestic Delivery [1-3 working
                                        day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="n..k9:_"
                                  >
                                    $4.55
                                  </span>
                                </label>

                                <label
                                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                                  data-oid="ayf8uvw"
                                >
                                  <div
                                    className="flex items-center"
                                    data-oid="ij2yega"
                                  >
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="tracx"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.05)}
                                      data-oid="gjc.-0d"
                                    />

                                    <div className="ml-3" data-oid="nf5ss2x">
                                      <p
                                        className="text-sm font-medium"
                                        data-oid="1ei5gfp"
                                      >
                                        Tracx Logis [1-2 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span
                                    className="text-sm font-semibold"
                                    data-oid="wti7-9o"
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
                data-oid="2hpqeny"
              >
                Continue to Address →
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="7fa5qu8">
            <div className="sticky top-8" data-oid="zoaokhh">
              <OrderSummary data-oid="7g0c:w1" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="9ewddf2">
        <h3 className="text-lg font-semibold mb-2" data-oid="o4dg7t6">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="wucpe88">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="74g8h8p"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="hq2.la-"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
