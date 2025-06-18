"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import OrderSummary from "../components/order-summary";

function AddressForm({ address, setAddress, title }) {
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div data-oid="9:o0dom">
      <h3 className="text-2xl font-bold mb-6" data-oid="g_j1c.i">
        {title}
      </h3>
      <div className="space-y-4" data-oid="su1f_f0">
        <div className="grid grid-cols-2 gap-4" data-oid="e_0hw70">
          <div className="form-control" data-oid="lpeom03">
            <label className="label" data-oid="pj7ncwr">
              <span className="label-text" data-oid="m5o6usp">
                First Name*
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="sn-u.ih"
            />
          </div>
          <div className="form-control" data-oid="h6y8bfi">
            <label className="label" data-oid=".o5emsx">
              <span className="label-text" data-oid="k3.xy1x">
                Last Name*
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="r5e04ia"
            />
          </div>
        </div>
        <div className="form-control" data-oid="_inxna:">
          <label className="label" data-oid="x26-4iw">
            <span className="label-text" data-oid="9r99kkd">
              Email Address*
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="v:pya3n"
          />
        </div>
        <div className="form-control" data-oid="lxqlzfn">
          <label className="label" data-oid="-l64i4-">
            <span className="label-text" data-oid="ieb-3k5">
              Mobile*
            </span>
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="lt4kgbm"
          />
        </div>
        <div className="form-control" data-oid="xf6199a">
          <label className="label" data-oid="6kp-vzi">
            <span className="label-text" data-oid="28261w1">
              Country*
            </span>
          </label>
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="zh9tbez"
          />
        </div>
        <div className="form-control" data-oid="k9wi3di">
          <label className="label" data-oid="3pri.wc">
            <span className="label-text" data-oid="1gnlqzu">
              Company
            </span>
          </label>
          <input
            type="text"
            name="company"
            value={address.company}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="-b0tf_o"
          />
        </div>
        <div className="form-control" data-oid="-9z27a6">
          <label className="label" data-oid="p71ktj-">
            <span className="label-text" data-oid="6zk5qx4">
              Street Address*
            </span>
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="3bgctq2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4" data-oid="ch5-xqb">
          <div className="form-control" data-oid=":i30czv">
            <label className="label" data-oid="tnbwztd">
              <span className="label-text" data-oid=":d8st1p">
                Suburb*
              </span>
            </label>
            <input
              type="text"
              name="suburb"
              value={address.suburb}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="6nld9pm"
            />
          </div>
          <div className="form-control" data-oid="bt3k1e1">
            <label className="label" data-oid="y3lm.u0">
              <span className="label-text" data-oid="hbt:n7v">
                State*
              </span>
            </label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="vb_87oh"
            />
          </div>
        </div>
        <div className="form-control" data-oid="r7xf5a-">
          <label className="label" data-oid="gdujjss">
            <span className="label-text" data-oid="pqojtf9">
              Postcode*
            </span>
          </label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="1q__bg5"
          />
        </div>
      </div>
    </div>
  );
}

export default function AddressPage() {
  const router = useRouter();
  const {
    deliveryOption,
    deliveryAddress,
    setDeliveryAddress,
    billingAddress,
    setBillingAddress,
    billingSameAsDelivery,
    setBillingSameAsDelivery,
  } = useCheckout();

  const handleNext = () => {
    if (billingSameAsDelivery) {
      setBillingAddress(deliveryAddress);
    }
    router.push("/checkout/payment");
  };

  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
        data-oid="ph99svw"
      >
        {/* Delivery Address + Authority to Leave */}
        <div data-oid="1zu.2vb">
          {deliveryOption === "delivery" && (
            <>
              <AddressForm
                address={deliveryAddress}
                setAddress={setDeliveryAddress}
                title="Delivery Address"
                data-oid="7:w3rm2"
              />

              <div className="text-sm space-y-4 mt-8" data-oid="n.yzhn5">
                <h4 className="font-semibold" data-oid="ozxa3g2">
                  Authority to Leave
                </h4>
                <p data-oid="3m5hg16">
                  Your order may be left in a safe place, if not, it will be
                  taken to your local Australia Post collection point.
                </p>
                <p data-oid="hrl8igc">
                  Track and manage your delivery via the{" "}
                  <a href="#" className="underline" data-oid="59pgux:">
                    AusPost app
                  </a>
                  .
                </p>
                <p data-oid="sd6m0e0">
                  Please see our{" "}
                  <a href="#" className="underline" data-oid="jh1_38t">
                    privacy policy
                  </a>{" "}
                  for more information about how we deal with your information.
                </p>
              </div>
            </>
          )}
        </div>
        {/* Billing Address */}
        <div data-oid="76f34x7">
          <h3 className="text-2xl font-bold mb-6" data-oid="97r56c-">
            Billing Address
          </h3>
          {deliveryOption === "delivery" && (
            <div className="flex items-center mb-4" data-oid="n92k_wy">
              <input
                type="checkbox"
                checked={billingSameAsDelivery}
                onChange={(e) => setBillingSameAsDelivery(e.target.checked)}
                id="sameAsDelivery"
                className="checkbox"
                data-oid="e.gh3vj"
              />

              <label
                htmlFor="sameAsDelivery"
                className="ml-2 font-semibold"
                data-oid="34bfwd3"
              >
                Same as Delivery Address
              </label>
            </div>
          )}
          {(!billingSameAsDelivery || deliveryOption !== "delivery") && (
            <AddressForm
              address={billingAddress}
              setAddress={setBillingAddress}
              title=""
              data-oid="06.x2k:"
            />
          )}
        </div>
        {/* Order Summary */}
        <div data-oid="pwz9.xl">
          <OrderSummary data-oid="r1y03ec" />
          <button
            onClick={handleNext}
            className="btn btn-primary w-full mt-6"
            data-oid="7_6nrl9"
          >
            Continue to Payment
          </button>
        </div>
      </div>
      <div className="text-center py-12 border-t mt-12" data-oid="867cec:">
        <h3 className="text-xl font-semibold" data-oid="lihg::-">
          Need Help?
        </h3>
        <p className="mt-2 text-gray-600" data-oid="rlwa1-6">
          Perhaps our{" "}
          <a href="#" className="underline font-semibold" data-oid="865nw3-">
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a href="#" className="underline font-semibold" data-oid="_yoqbn4">
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </>
  );
}
