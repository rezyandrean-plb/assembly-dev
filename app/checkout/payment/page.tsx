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
      data-oid="6eqiyap"
    >
      <div className="space-y-4" data-oid="o9ssko_">
        <h2 className="text-xl font-semibold" data-oid="dgh5qso">
          Payment Method
        </h2>

        <div className="border rounded-lg" data-oid="2gpx:_z">
          {/* Credit/Debit Card Section */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() =>
              setSelectedPayment(
                selectedPayment === "Credit / Debit" ? "" : "Credit / Debit",
              )
            }
            data-oid="_dd9781"
          >
            <div className="flex items-center" data-oid="p5bp.qc">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit / Debit"
                checked={selectedPayment === "Credit / Debit"}
                onChange={() => setSelectedPayment("Credit / Debit")}
                className="radio radio-primary"
                data-oid="n-1yi5o"
              />

              <span className="font-semibold ml-4" data-oid="xfce3a6">
                Debit or Credit Card
              </span>
            </div>
            <div className="flex items-center space-x-1" data-oid="qgug71c">
              <Image
                src="/images/payment/visa.png"
                alt="Visa"
                width={30}
                height={20}
                data-oid="m.rbg95"
              />

              <Image
                src="/images/payment/mastercard.png"
                alt="Mastercard"
                width={30}
                height={20}
                data-oid="38_gb9r"
              />

              <Image
                src="/images/payment/amex.png"
                alt="Amex"
                width={30}
                height={20}
                data-oid="pg4679p"
              />

              <ChevronDown
                className={`transition-transform ${selectedPayment === "Credit / Debit" ? "rotate-180" : ""}`}
                data-oid="u5t-o1z"
              />
            </div>
          </div>

          {selectedPayment === "Credit / Debit" && (
            <div className="p-4 border-t" data-oid="l1y55lt">
              <div className="space-y-4" data-oid="r0j9wig">
                <div className="form-control" data-oid="tnts2j0">
                  <label className="label" data-oid="l4m0dza">
                    <span className="label-text" data-oid="-p9hnh4">
                      Card Number *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    data-oid="zmifye_"
                  />
                </div>
                <div className="form-control" data-oid="g781cb4">
                  <label className="label" data-oid="lli7mqh">
                    <span className="label-text" data-oid="s-d_0ph">
                      Card Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    data-oid="5ae.i:3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4" data-oid="1x69bnr">
                  <div className="form-control" data-oid="w0zy7s2">
                    <label className="label" data-oid="3-7sb18">
                      <span className="label-text" data-oid="_u71_sp">
                        Expiry Date *
                      </span>
                    </label>
                    <div className="grid grid-cols-2 gap-2" data-oid="34na7ew">
                      <select
                        className="select select-bordered"
                        data-oid="5a8j2yy"
                      >
                        <option disabled selected data-oid="4fxtvug">
                          MM
                        </option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(
                          (m) => (
                            <option key={m} data-oid="0-rb1y_">
                              {m.toString().padStart(2, "0")}
                            </option>
                          ),
                        )}
                      </select>
                      <select
                        className="select select-bordered"
                        data-oid="3-uadnh"
                      >
                        <option disabled selected data-oid="29_2.:n">
                          YYYY
                        </option>
                        {Array.from(
                          { length: 10 },
                          (_, i) => new Date().getFullYear() + i,
                        ).map((y) => (
                          <option key={y} data-oid="3r_nece">
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-control" data-oid="jmbsu.d">
                    <label className="label" data-oid="f9gq5rl">
                      <span className="label-text" data-oid="ty5mf0-">
                        CVC *
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full"
                      data-oid="na1-.46"
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
              data-oid="ncc8ai:"
            >
              <div className="flex items-center" data-oid="pr6yo.f">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.name}
                  checked={selectedPayment === method.name}
                  onChange={() => setSelectedPayment(method.name)}
                  className="radio radio-primary"
                  data-oid="zk:u1ue"
                />

                <span className="font-semibold ml-4" data-oid="6scekg4">
                  {method.name}
                </span>
              </div>
              <div className="flex space-x-2" data-oid="fw9:zwz">
                {method.logos.map((logo) => (
                  <Image
                    src={logo}
                    alt={method.name}
                    width={40}
                    height={25}
                    key={logo}
                    className="object-contain"
                    data-oid="gwu0p-1"
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="space-y-6" data-oid=".c9-ko_">
        <div className="bg-gray-50 p-6 rounded-lg" data-oid="pn6_bke">
          <div
            className="flex justify-between items-center mb-4"
            data-oid="9m:9vju"
          >
            <h2 className="text-lg font-semibold" data-oid="zf-7sge">
              Review Address
            </h2>
            <button
              onClick={() => router.push("/checkout/address")}
              className="text-sm text-primary hover:underline"
              data-oid="6ovz23d"
            >
              Edit
            </button>
          </div>
          <div className="text-sm space-y-1" data-oid="4bjjkco">
            <h4 className="font-bold" data-oid="g38nssf">
              Delivery & Billing Address
            </h4>
            <p className="font-bold" data-oid="4yblh3q">
              {finalBillingAddress.firstName} {finalBillingAddress.lastName}
            </p>
            <p data-oid=":u47h0u">{finalBillingAddress.email}</p>
            <p data-oid="d_qhqf_">{finalBillingAddress.mobile}</p>
            <p data-oid="2d:uhdx">
              {finalBillingAddress.streetAddress}, {finalBillingAddress.suburb},{" "}
              {finalBillingAddress.state} {finalBillingAddress.postcode},{" "}
              {finalBillingAddress.country}
            </p>
          </div>
        </div>

        <OrderSummary data-oid="ij79yul" />

        <button
          onClick={() => alert("Order Placed!")}
          className="btn btn-primary w-full btn-lg mt-4"
          data-oid="vwr4pln"
        >
          <Lock size={16} className="mr-2" data-oid="h0vq31f" />
          Place Order Securely
        </button>
        <p
          className="text-xs text-gray-500 mt-2 text-center"
          data-oid="6qu_sbu"
        >
          By clicking Place Order Securely you confirm that you have read,
          understood and accept our{" "}
          <a href="#" className="underline" data-oid="zkpjgoq">
            Terms and Conditions
          </a>
          ,{" "}
          <a href="#" className="underline" data-oid="_ovu.dc">
            Returns Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline" data-oid="yia3xzh">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
