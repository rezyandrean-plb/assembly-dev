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
      data-oid="1mgkhzi"
    >
      <div className="space-y-4" data-oid="e.2ytws">
        <h2 className="text-xl font-semibold" data-oid="z51dzr_">
          Payment Method
        </h2>

        <div className="border rounded-lg" data-oid="-e1ma0.">
          {/* Credit/Debit Card Section */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() =>
              setSelectedPayment(
                selectedPayment === "Credit / Debit" ? "" : "Credit / Debit",
              )
            }
            data-oid="u.j.z7n"
          >
            <div className="flex items-center" data-oid="dv.p0da">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit / Debit"
                checked={selectedPayment === "Credit / Debit"}
                onChange={() => setSelectedPayment("Credit / Debit")}
                className="radio radio-primary"
                data-oid="zbbvluj"
              />

              <span className="font-semibold ml-4" data-oid="zpbupf3">
                Debit or Credit Card
              </span>
            </div>
            <div className="flex items-center space-x-1" data-oid="n5qf5.:">
              <Image
                src="/images/payment/visa.png"
                alt="Visa"
                width={30}
                height={20}
                data-oid="ug6hwwj"
              />

              <Image
                src="/images/payment/mastercard.png"
                alt="Mastercard"
                width={30}
                height={20}
                data-oid="1-wlsls"
              />

              <Image
                src="/images/payment/amex.png"
                alt="Amex"
                width={30}
                height={20}
                data-oid="saa.xc4"
              />

              <ChevronDown
                className={`transition-transform ${selectedPayment === "Credit / Debit" ? "rotate-180" : ""}`}
                data-oid="gh5g8dh"
              />
            </div>
          </div>

          {selectedPayment === "Credit / Debit" && (
            <div className="p-4 border-t" data-oid="ihdne6c">
              <div className="space-y-4" data-oid="shwa52y">
                <div className="form-control" data-oid="honhijl">
                  <label className="label" data-oid="ytfc4jm">
                    <span className="label-text" data-oid="-.fdlx0">
                      Card Number *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    data-oid="o23ts6u"
                  />
                </div>
                <div className="form-control" data-oid="b61p-4z">
                  <label className="label" data-oid="72qizc3">
                    <span className="label-text" data-oid="f4phrut">
                      Card Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    data-oid="x8_5udl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4" data-oid="h.mav2i">
                  <div className="form-control" data-oid="r3aylns">
                    <label className="label" data-oid="fakpp4q">
                      <span className="label-text" data-oid="dfc:ao1">
                        Expiry Date *
                      </span>
                    </label>
                    <div className="grid grid-cols-2 gap-2" data-oid="kb0o:i:">
                      <select
                        className="select select-bordered"
                        data-oid="wpmw:oi"
                      >
                        <option disabled selected data-oid="r9a8qf6">
                          MM
                        </option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(
                          (m) => (
                            <option key={m} data-oid="9rc1b3h">
                              {m.toString().padStart(2, "0")}
                            </option>
                          ),
                        )}
                      </select>
                      <select
                        className="select select-bordered"
                        data-oid="uco4rbw"
                      >
                        <option disabled selected data-oid="v45_qt3">
                          YYYY
                        </option>
                        {Array.from(
                          { length: 10 },
                          (_, i) => new Date().getFullYear() + i,
                        ).map((y) => (
                          <option key={y} data-oid="qpejomj">
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-control" data-oid="f77nyr_">
                    <label className="label" data-oid="cn2gdqz">
                      <span className="label-text" data-oid="se7e1hb">
                        CVC *
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full"
                      data-oid="8uhfkn5"
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
              data-oid="psn41h:"
            >
              <div className="flex items-center" data-oid="j71x28n">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.name}
                  checked={selectedPayment === method.name}
                  onChange={() => setSelectedPayment(method.name)}
                  className="radio radio-primary"
                  data-oid="tu073y6"
                />

                <span className="font-semibold ml-4" data-oid="icco-.q">
                  {method.name}
                </span>
              </div>
              <div className="flex space-x-2" data-oid="veq29z5">
                {method.logos.map((logo) => (
                  <Image
                    src={logo}
                    alt={method.name}
                    width={40}
                    height={25}
                    key={logo}
                    className="object-contain"
                    data-oid="m.kv0_x"
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="space-y-6" data-oid=":gttc3p">
        <div className="bg-gray-50 p-6 rounded-lg" data-oid="gj.wfrs">
          <div
            className="flex justify-between items-center mb-4"
            data-oid="-p2_p67"
          >
            <h2 className="text-lg font-semibold" data-oid="jdd41gb">
              Review Address
            </h2>
            <button
              onClick={() => router.push("/checkout/address")}
              className="text-sm text-primary hover:underline"
              data-oid="ikz2oex"
            >
              Edit
            </button>
          </div>
          <div className="text-sm space-y-1" data-oid="ha:s152">
            <h4 className="font-bold" data-oid="i6c6.rp">
              Delivery & Billing Address
            </h4>
            <p className="font-bold" data-oid="5humvls">
              {finalBillingAddress.firstName} {finalBillingAddress.lastName}
            </p>
            <p data-oid="pj-yp9t">{finalBillingAddress.email}</p>
            <p data-oid="zgjo0nk">{finalBillingAddress.mobile}</p>
            <p data-oid="uuzrwxg">
              {finalBillingAddress.streetAddress}, {finalBillingAddress.suburb},{" "}
              {finalBillingAddress.state} {finalBillingAddress.postcode},{" "}
              {finalBillingAddress.country}
            </p>
          </div>
        </div>

        <OrderSummary data-oid="lnfxsc:" />

        <button
          onClick={() => alert("Order Placed!")}
          className="btn btn-primary w-full btn-lg mt-4"
          data-oid="qj7s.c8"
        >
          <Lock size={16} className="mr-2" data-oid="ybn8f0-" />
          Place Order Securely
        </button>
        <p
          className="text-xs text-gray-500 mt-2 text-center"
          data-oid="b-:w5bv"
        >
          By clicking Place Order Securely you confirm that you have read,
          understood and accept our{" "}
          <a href="#" className="underline" data-oid="lp4kuix">
            Terms and Conditions
          </a>
          ,{" "}
          <a href="#" className="underline" data-oid="y-r.zw4">
            Returns Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline" data-oid="vhhb8vc">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
