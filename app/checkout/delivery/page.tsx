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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16" data-oid="bb9mgt4">
      <div data-oid="a6ldtbq">
        <h2 className="text-2xl font-bold mb-6" data-oid="fisi8iq">
          Select click & collect or delivery for each item
        </h2>

        <div className="space-y-4" data-oid="9_pdpq1">
          <label
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${deliveryOption === "self-collect" ? "border-primary ring-2 ring-primary" : "border-gray-300"}`}
            data-oid="1yc7qeg"
          >
            <input
              type="radio"
              name="deliveryOption"
              value="self-collect"
              checked={deliveryOption === "self-collect"}
              onChange={() => setDeliveryOption("self-collect")}
              className="mr-4"
              data-oid="0i80cwg"
            />

            <div data-oid="khh:ofz">
              <p className="font-semibold" data-oid="7j_93:6">
                Click & Collect
              </p>
              <p className="text-sm text-gray-500" data-oid="v7f386z">
                Collection from 62 Ubi Road 1, Oxley BizHub 2, #11-15/18,
                Singapore, 408734
              </p>
            </div>
            <p className="ml-auto font-semibold" data-oid="wrqt.ta">
              FREE
            </p>
          </label>

          <label
            className={`p-4 border rounded-lg ${deliveryOption === "delivery" ? "border-primary ring-2 ring-primary" : "border-gray-300"}`}
            data-oid="7wpfm19"
          >
            <div
              className="flex items-center cursor-pointer"
              data-oid="t8wbsyb"
            >
              <input
                type="radio"
                name="deliveryOption"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={() => setDeliveryOption("delivery")}
                className="mr-4"
                data-oid="v10uvfv"
              />

              <p className="font-semibold" data-oid="l0-nb91">
                Delivery
              </p>
            </div>
            {deliveryOption === "delivery" && (
              <div className="mt-4 pl-8" data-oid="xk-qb79">
                <p className="font-semibold mb-2" data-oid="wp18x0k">
                  Delivers to
                </p>
                <div className="flex gap-2" data-oid="tymn-qd">
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter your postal code"
                    className="input input-bordered w-full"
                    data-oid="1pu_bvi"
                  />

                  <button
                    onClick={handleCheckDelivery}
                    className="btn btn-primary"
                    data-oid="koc9w6i"
                  >
                    Check
                  </button>
                </div>

                {showShipping && (
                  <div className="mt-4 space-y-2" data-oid="o.psp2j">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.name}
                        className="flex items-center p-2 border rounded-md cursor-pointer"
                        data-oid="-zvzxfn"
                      >
                        <input
                          type="radio"
                          name="shipping"
                          onChange={() => handleSelectShipping(option.price)}
                          className="mr-3"
                          data-oid="d91d17r"
                        />

                        <p data-oid="jojggkn">{option.name}</p>
                        <p className="ml-auto font-semibold" data-oid="yt1570p">
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

      <div className="space-y-8" data-oid="5.4rz2-">
        <OrderSummary data-oid="y9opxxu" />
        <button
          onClick={handleNext}
          className="btn btn-primary w-full mt-6"
          data-oid="79_c12f"
        >
          Next
        </button>
      </div>
    </div>
  );
}
