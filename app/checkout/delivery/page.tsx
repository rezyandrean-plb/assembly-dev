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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16" data-oid="oark0x0">
      <div data-oid="m0fu7-z">
        <h2 className="text-2xl font-bold mb-6" data-oid="scnqi2i">
          Select click & collect or delivery for each item
        </h2>

        <div className="space-y-4" data-oid="lb:05je">
          <label
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${deliveryOption === "self-collect" ? "border-primary ring-2 ring-primary" : "border-gray-300"}`}
            data-oid="s_1_n5e"
          >
            <input
              type="radio"
              name="deliveryOption"
              value="self-collect"
              checked={deliveryOption === "self-collect"}
              onChange={() => setDeliveryOption("self-collect")}
              className="mr-4"
              data-oid="sovy5-e"
            />

            <div data-oid="sbclf5l">
              <p className="font-semibold" data-oid=":8luo-9">
                Click & Collect
              </p>
              <p className="text-sm text-gray-500" data-oid="676o1xs">
                Collection from 62 Ubi Road 1, Oxley BizHub 2, #11-15/18,
                Singapore, 408734
              </p>
            </div>
            <p className="ml-auto font-semibold" data-oid="hrcues2">
              FREE
            </p>
          </label>

          <label
            className={`p-4 border rounded-lg ${deliveryOption === "delivery" ? "border-primary ring-2 ring-primary" : "border-gray-300"}`}
            data-oid=":iw13j_"
          >
            <div
              className="flex items-center cursor-pointer"
              data-oid="nh8moa1"
            >
              <input
                type="radio"
                name="deliveryOption"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={() => setDeliveryOption("delivery")}
                className="mr-4"
                data-oid="_y8r8nj"
              />

              <p className="font-semibold" data-oid="9:p3ptb">
                Delivery
              </p>
            </div>
            {deliveryOption === "delivery" && (
              <div className="mt-4 pl-8" data-oid="4scj0b7">
                <p className="font-semibold mb-2" data-oid="dvpn23x">
                  Delivers to
                </p>
                <div className="flex gap-2" data-oid="2r8jfsx">
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter your postal code"
                    className="input input-bordered w-full"
                    data-oid="x2o4zbh"
                  />

                  <button
                    onClick={handleCheckDelivery}
                    className="btn btn-primary"
                    data-oid="xc0j33j"
                  >
                    Check
                  </button>
                </div>

                {showShipping && (
                  <div className="mt-4 space-y-2" data-oid="yjc0vm1">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.name}
                        className="flex items-center p-2 border rounded-md cursor-pointer"
                        data-oid="r2zizar"
                      >
                        <input
                          type="radio"
                          name="shipping"
                          onChange={() => handleSelectShipping(option.price)}
                          className="mr-3"
                          data-oid="pvodv.7"
                        />

                        <p data-oid="535k7ub">{option.name}</p>
                        <p className="ml-auto font-semibold" data-oid="1:c-lxa">
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

      <div className="space-y-8" data-oid="tdqlux5">
        <OrderSummary data-oid="62es6i2" />
        <button
          onClick={handleNext}
          className="btn btn-primary w-full mt-6"
          data-oid="6yeauq:"
        >
          Next
        </button>
      </div>
    </div>
  );
}
