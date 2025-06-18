"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import OrderSummary from "../components/order-summary";

const shippingOptions = [
  { name: "J&T Express [1-3 working day(s)]", price: 3.75 },
  { name: "Aramex Domestic Delivery [1-3 working day(s)]", price: 4.55 },
  { name: "Tracx Logis [1-2 working day(s)]", price: 4.05 },
];

export default function DeliveryPage() {
  const router = useRouter();
  const { deliveryOption, setDeliveryOption, setShippingCost } = useCheckout();
  const [postalCode, setPostalCode] = useState("");
  const [showShipping, setShowShipping] = useState(false);

  const handleCheckDelivery = () => {
    // In a real app, you'd validate the postal code and fetch options
    if (postalCode) {
      setShowShipping(true);
    }
  };

  const handleSelectShipping = (price: number) => {
    setShippingCost(price);
  };

  const handleNext = () => {
    if (deliveryOption === "self-collect") {
      setShippingCost(0);
    }
    router.push("/checkout/address");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16" data-oid=".kmsy::">
      <div data-oid="q4fdl0i">
        <h2 className="text-2xl font-bold mb-6" data-oid="w60nohd">
          Select click & collect or delivery for each item
        </h2>

        <div className="space-y-4" data-oid="m_4w6wx">
          <label
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${deliveryOption === "self-collect" ? "border-primary ring-2 ring-primary" : "border-gray-300"}`}
            data-oid="rcd-fcr"
          >
            <input
              type="radio"
              name="deliveryOption"
              value="self-collect"
              checked={deliveryOption === "self-collect"}
              onChange={() => setDeliveryOption("self-collect")}
              className="mr-4"
              data-oid="m5bocsa"
            />

            <div data-oid="w02y1bo">
              <p className="font-semibold" data-oid="bbxyam0">
                Click & Collect
              </p>
              <p className="text-sm text-gray-500" data-oid="t9f3pa0">
                Collection from 62 Ubi Road 1, Oxley BizHub 2, #11-15/18,
                Singapore, 408734
              </p>
            </div>
            <p className="ml-auto font-semibold" data-oid="ktw6t0c">
              FREE
            </p>
          </label>

          <label
            className={`p-4 border rounded-lg ${deliveryOption === "delivery" ? "border-primary ring-2 ring-primary" : "border-gray-300"}`}
            data-oid="3p765g_"
          >
            <div
              className="flex items-center cursor-pointer"
              data-oid="-a2s251"
            >
              <input
                type="radio"
                name="deliveryOption"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={() => setDeliveryOption("delivery")}
                className="mr-4"
                data-oid="ncyw.-j"
              />

              <p className="font-semibold" data-oid="5osal-9">
                Delivery
              </p>
            </div>
            {deliveryOption === "delivery" && (
              <div className="mt-4 pl-8" data-oid="4sxgg28">
                <p className="font-semibold mb-2" data-oid="b33rz-5">
                  Delivers to
                </p>
                <div className="flex gap-2" data-oid="0brnc7:">
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter your postal code"
                    className="input input-bordered w-full"
                    data-oid="26lhx:7"
                  />

                  <button
                    onClick={handleCheckDelivery}
                    className="btn btn-primary"
                    data-oid="5a0xl07"
                  >
                    Check
                  </button>
                </div>

                {showShipping && (
                  <div className="mt-4 space-y-2" data-oid="_ac6i6t">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.name}
                        className="flex items-center p-2 border rounded-md cursor-pointer"
                        data-oid="y.0bm3-"
                      >
                        <input
                          type="radio"
                          name="shipping"
                          onChange={() => handleSelectShipping(option.price)}
                          className="mr-3"
                          data-oid="1111:dk"
                        />

                        <p data-oid="3_hsf9b">{option.name}</p>
                        <p className="ml-auto font-semibold" data-oid="2k1jw-f">
                          ${option.price.toFixed(2)}
                        </p>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </label>
        </div>
      </div>

      <div className="space-y-8" data-oid="2jj2_.3">
        <OrderSummary data-oid="qgxl8xq" />
        <button
          onClick={handleNext}
          className="btn btn-primary w-full mt-6"
          data-oid="fqv6xdh"
        >
          Next
        </button>
      </div>
    </div>
  );
}
