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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-6">
                Choose how you'd like to receive your items ({bookItems.length}{" "}
                item{bookItems.length !== 1 ? "s" : ""})
              </p>

              {bookItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-6 mb-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">By {item.author}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-semibold">{item.price}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Self Pickup Option */}
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        id="collect"
                        name="deliveryMethod"
                        value="collect"
                        checked={selectedShipping === "collect"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                      />

                      <label htmlFor="collect" className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Self Pickup</p>
                            <p className="text-sm text-gray-600">
                              Collection from 62 Ubi Road 1, Oxley BizHub 2,
                              #11-15/18, Singapore, 408734
                            </p>
                          </div>
                          <span className="font-semibold">FREE</span>
                        </div>
                      </label>
                    </div>

                    {/* Delivery Option */}
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        id="delivery"
                        name="deliveryMethod"
                        value="delivery"
                        checked={selectedShipping === "delivery"}
                        onChange={(e) => handleDeliveryChange(e.target.value)}
                        className="w-4 h-4 mt-1"
                      />

                      <label htmlFor="delivery" className="flex-1">
                        <p className="font-medium">Delivery</p>
                      </label>
                    </div>

                    {/* Delivery Options Section */}
                    {selectedShipping === "delivery" && (
                      <div className="ml-7 space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Enter your postal code to see delivery options
                          </label>
                          <div className="flex gap-2 mb-4">
                            <input
                              type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              placeholder="Enter postal code"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            />

                            <button
                              onClick={handleCheckDelivery}
                              className="px-4 py-2 bg-[#123b79] text-white rounded-md hover:bg-[#0f2f63] transition-colors"
                            >
                              Check
                            </button>
                          </div>

                          {showDeliveryOptions && postalCode.trim() && (
                            <div className="space-y-3">
                              <p className="text-sm font-medium text-gray-700">
                                Delivery options for {postalCode}:
                              </p>

                              <div className="space-y-2">
                                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                                  <div className="flex items-center">
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="jnt"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(3.75)}
                                    />

                                    <div className="ml-3">
                                      <p className="text-sm font-medium">
                                        J&T Express [1-3 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span className="text-sm font-semibold">
                                    $3.75
                                  </span>
                                </label>

                                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                                  <div className="flex items-center">
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="aramex"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.55)}
                                    />

                                    <div className="ml-3">
                                      <p className="text-sm font-medium">
                                        Aramex Domestic Delivery [1-3 working
                                        day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span className="text-sm font-semibold">
                                    $4.55
                                  </span>
                                </label>

                                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                                  <div className="flex items-center">
                                    <input
                                      type="radio"
                                      name="shippingOption"
                                      value="tracx"
                                      className="w-4 h-4 text-[#123b79] focus:ring-[#123b79]"
                                      onChange={() => setShippingCost(4.05)}
                                    />

                                    <div className="ml-3">
                                      <p className="text-sm font-medium">
                                        Tracx Logis [1-2 working day(s)]
                                      </p>
                                    </div>
                                  </div>
                                  <span className="text-sm font-semibold">
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
              >
                Continue to Address →
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
        <p className="text-gray-600">
          Perhaps our{" "}
          <a href="#" className="text-[#123b79] hover:underline font-medium">
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a href="#" className="text-[#123b79] hover:underline font-medium">
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
