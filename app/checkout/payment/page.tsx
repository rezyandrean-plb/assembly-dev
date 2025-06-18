"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import Image from "next/image";
import OrderSummary from "../components/order-summary";
import { ChevronDown, Lock } from "lucide-react";

const paymentMethods = [
  {
    name: "Credit / Debit",
    logos: [
      "/images/payment/visa.png",
      "/images/payment/mastercard.png",
      "/images/payment/amex.png",
    ],
  },
  { name: "Apple Pay", logos: ["/images/payment/applepay.png"] },
  { name: "Google Pay", logos: ["/images/payment/google-pay.png"] },
  { name: "PayNow", logos: ["/images/payment/PayNow.png"] },
  { name: "Grab Pay", logos: ["/images/payment/Grabpay.png"] },
];

export default function PaymentPage() {
  const router = useRouter();
  const { deliveryAddress, billingAddress, billingSameAsDelivery } =
    useCheckout();
  const [selectedPayment, setSelectedPayment] = useState("Credit / Debit");

  const finalBillingAddress = billingSameAsDelivery
    ? deliveryAddress
    : billingAddress;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      data-oid="8iksbw8"
    >
      <div className="space-y-4" data-oid="n4y_rc4">
        <h2 className="text-xl font-semibold" data-oid="h.i_96a">
          Payment Method
        </h2>

        <div className="border rounded-lg" data-oid="8m2sxi4">
          {/* Credit/Debit Card Section */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() =>
              setSelectedPayment(
                selectedPayment === "Credit / Debit" ? "" : "Credit / Debit",
              )
            }
            data-oid="l7qemx2"
          >
            <div className="flex items-center" data-oid="37wh5w3">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit / Debit"
                checked={selectedPayment === "Credit / Debit"}
                onChange={() => setSelectedPayment("Credit / Debit")}
                className="radio radio-primary"
                data-oid="cbks5-8"
              />

              <span className="font-semibold ml-4" data-oid="1bnqqs2">
                Debit or Credit Card
              </span>
            </div>
            <div className="flex items-center space-x-1" data-oid="oiqmlob">
              <Image
                src="/images/payment/visa.png"
                alt="Visa"
                width={30}
                height={20}
                data-oid="6t4apem"
              />

              <Image
                src="/images/payment/mastercard.png"
                alt="Mastercard"
                width={30}
                height={20}
                data-oid="0h8km2u"
              />

              <Image
                src="/images/payment/amex.png"
                alt="Amex"
                width={30}
                height={20}
                data-oid="0vh-boc"
              />

              <ChevronDown
                className={`transition-transform ${selectedPayment === "Credit / Debit" ? "rotate-180" : ""}`}
                data-oid="h8aagpp"
              />
            </div>
          </div>

          {selectedPayment === "Credit / Debit" && (
            <div className="p-4 border-t" data-oid="e252qpd">
              <div className="space-y-4" data-oid="wuf1yn9">
                <div className="form-control" data-oid="mw9e9mq">
                  <label className="label" data-oid="h88jr4t">
                    <span className="label-text" data-oid="vs4dy.e">
                      Card Number *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    data-oid="-h3ft1s"
                  />
                </div>
                <div className="form-control" data-oid=":27e9vn">
                  <label className="label" data-oid="4wfhcip">
                    <span className="label-text" data-oid="kxht:6d">
                      Card Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    data-oid="d_..lw8"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4" data-oid="y7.rrgm">
                  <div className="form-control" data-oid="09zgle_">
                    <label className="label" data-oid="wn0dcqf">
                      <span className="label-text" data-oid="to072u-">
                        Expiry Date *
                      </span>
                    </label>
                    <div className="grid grid-cols-2 gap-2" data-oid="zo7l2s8">
                      <select
                        className="select select-bordered"
                        data-oid="a:jnj8o"
                      >
                        <option disabled selected data-oid="xvo6h_9">
                          MM
                        </option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(
                          (m) => (
                            <option key={m} data-oid="r2zm.0k">
                              {m.toString().padStart(2, "0")}
                            </option>
                          ),
                        )}
                      </select>
                      <select
                        className="select select-bordered"
                        data-oid="2dsozfi"
                      >
                        <option disabled selected data-oid="332wxfp">
                          YYYY
                        </option>
                        {Array.from(
                          { length: 10 },
                          (_, i) => new Date().getFullYear() + i,
                        ).map((y) => (
                          <option key={y} data-oid=":ybsf7-">
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-control" data-oid="5d697t.">
                    <label className="label" data-oid="etmya5f">
                      <span className="label-text" data-oid="i95j0me">
                        CVC *
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full"
                      data-oid="00mi8s5"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Other Payment Methods */}
        {paymentMethods
          .filter((p) => p.name !== "Credit / Debit")
          .map((method) => (
            <div
              key={method.name}
              className="border rounded-lg p-4 flex justify-between items-center"
              data-oid="ds:l9ri"
            >
              <div className="flex items-center" data-oid="85j3489">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.name}
                  checked={selectedPayment === method.name}
                  onChange={() => setSelectedPayment(method.name)}
                  className="radio radio-primary"
                  data-oid="ifim4gq"
                />

                <span className="font-semibold ml-4" data-oid="autd_34">
                  {method.name}
                </span>
              </div>
              <div className="flex space-x-2" data-oid="i9y6pr:">
                {method.logos.map((logo) => (
                  <Image
                    src={logo}
                    alt={method.name}
                    width={40}
                    height={25}
                    key={logo}
                    className="object-contain"
                    data-oid="ps_9cwv"
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="space-y-6" data-oid="8wo5q_f">
        <div className="bg-gray-50 p-6 rounded-lg" data-oid="5p7441b">
          <div
            className="flex justify-between items-center mb-4"
            data-oid="hz73tpt"
          >
            <h2 className="text-lg font-semibold" data-oid="uq43k.0">
              Review Address
            </h2>
            <button
              onClick={() => router.push("/checkout/address")}
              className="text-sm text-primary hover:underline"
              data-oid="orbzz25"
            >
              Edit
            </button>
          </div>
          <div className="text-sm space-y-1" data-oid="kljlr_w">
            <h4 className="font-bold" data-oid="a2owo-e">
              Delivery & Billing Address
            </h4>
            <p className="font-bold" data-oid="1tj-f6r">
              {finalBillingAddress.firstName} {finalBillingAddress.lastName}
            </p>
            <p data-oid="yvggj04">{finalBillingAddress.email}</p>
            <p data-oid="q8m7o3b">{finalBillingAddress.mobile}</p>
            <p data-oid="h-7m:ja">
              {finalBillingAddress.streetAddress}, {finalBillingAddress.suburb},{" "}
              {finalBillingAddress.state} {finalBillingAddress.postcode},{" "}
              {finalBillingAddress.country}
            </p>
          </div>
        </div>

        <OrderSummary data-oid="-7u757d" />

        <button
          onClick={() => alert("Order Placed!")}
          className="btn btn-primary w-full btn-lg mt-4"
          data-oid="z9k-:wr"
        >
          <Lock size={16} className="mr-2" data-oid="qx2:01h" />
          Place Order Securely
        </button>
        <p
          className="text-xs text-gray-500 mt-2 text-center"
          data-oid="zfp5d2e"
        >
          By clicking Place Order Securely you confirm that you have read,
          understood and accept our{" "}
          <a href="#" className="underline" data-oid="r9yldy.">
            Terms and Conditions
          </a>
          ,{" "}
          <a href="#" className="underline" data-oid="btxm3ep">
            Returns Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline" data-oid="w2-o4k4">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
