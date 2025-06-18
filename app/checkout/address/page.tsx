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
    <div data-oid="nu_ktyd">
      <h3 className="text-2xl font-bold mb-6" data-oid="ai9b_ul">
        {title}
      </h3>
      <div className="space-y-4" data-oid="x9:m43s">
        <div className="grid grid-cols-2 gap-4" data-oid="vitrsil">
          <div className="form-control" data-oid="ng4w8-j">
            <label className="label" data-oid="yugsm5n">
              <span className="label-text" data-oid="c.rbgn.">
                First Name*
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="isf7bxk"
            />
          </div>
          <div className="form-control" data-oid="oq7effs">
            <label className="label" data-oid="1srve:v">
              <span className="label-text" data-oid="ptgz-1j">
                Last Name*
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="hf79.o8"
            />
          </div>
        </div>
        <div className="form-control" data-oid="yn.alul">
          <label className="label" data-oid="wiv2a6c">
            <span className="label-text" data-oid="d8:6u_e">
              Email Address*
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="mb7-5tw"
          />
        </div>
        <div className="form-control" data-oid="t78i.xk">
          <label className="label" data-oid="hg-87-i">
            <span className="label-text" data-oid="_n4:e9n">
              Mobile*
            </span>
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="u-y4vdh"
          />
        </div>
        <div className="form-control" data-oid="u8pilq9">
          <label className="label" data-oid="r-w5hem">
            <span className="label-text" data-oid="ptn7s62">
              Country*
            </span>
          </label>
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="7-gqg02"
          />
        </div>
        <div className="form-control" data-oid="y9x.vsh">
          <label className="label" data-oid="0w6m67p">
            <span className="label-text" data-oid="n6lo:9k">
              Company
            </span>
          </label>
          <input
            type="text"
            name="company"
            value={address.company}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="5hz:kui"
          />
        </div>
        <div className="form-control" data-oid="mjnxpx6">
          <label className="label" data-oid="ppg4:.n">
            <span className="label-text" data-oid="jkmuhmw">
              Street Address*
            </span>
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="0u.4gkh"
          />
        </div>
        <div className="grid grid-cols-2 gap-4" data-oid=":l-np5d">
          <div className="form-control" data-oid="nsgailh">
            <label className="label" data-oid="a6kkdlt">
              <span className="label-text" data-oid="8x636pl">
                Suburb*
              </span>
            </label>
            <input
              type="text"
              name="suburb"
              value={address.suburb}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="fr:49m9"
            />
          </div>
          <div className="form-control" data-oid="imgy_6-">
            <label className="label" data-oid="zmnq6qn">
              <span className="label-text" data-oid="7ikps_p">
                State*
              </span>
            </label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="uzqge3p"
            />
          </div>
        </div>
        <div className="form-control" data-oid="h7l5i8a">
          <label className="label" data-oid="x27x5vf">
            <span className="label-text" data-oid="d41:_o0">
              Postcode*
            </span>
          </label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="af_du_4"
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
        data-oid="8s.7q5f"
      >
        {/* Delivery Address + Authority to Leave */}
        <div data-oid="3gzts8u">
          {deliveryOption === "delivery" && (
            <>
              <AddressForm
                address={deliveryAddress}
                setAddress={setDeliveryAddress}
                title="Delivery Address"
                data-oid="xtpp2gc"
              />
              <div className="text-sm space-y-4 mt-8" data-oid="eotjpp:">
                <h4 className="font-semibold" data-oid="r4lurdn">
                  Authority to Leave
                </h4>
                <p data-oid="07j4kgp">
                  Your order may be left in a safe place, if not, it will be
                  taken to your local Australia Post collection point.
                </p>
                <p data-oid="b:1nxuy">
                  Track and manage your delivery via the{" "}
                  <a href="#" className="underline" data-oid="67x-n1w">
                    AusPost app
                  </a>
                  .
                </p>
                <p data-oid="1fpf2-v">
                  Please see our{" "}
                  <a href="#" className="underline" data-oid="7cm.5qm">
                    privacy policy
                  </a>{" "}
                  for more information about how we deal with your information.
                </p>
              </div>
            </>
          )}
        </div>
        {/* Billing Address */}
        <div data-oid="go2h2hk">
          <h3 className="text-2xl font-bold mb-6" data-oid="9h5uzdc">
            Billing Address
          </h3>
          {deliveryOption === "delivery" && (
            <div className="flex items-center mb-4" data-oid="iueb_-5">
              <input
                type="checkbox"
                checked={billingSameAsDelivery}
                onChange={(e) => setBillingSameAsDelivery(e.target.checked)}
                id="sameAsDelivery"
                className="checkbox"
                data-oid="w9:9sl:"
              />
              <label
                htmlFor="sameAsDelivery"
                className="ml-2 font-semibold"
                data-oid="6::gb5y"
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
              data-oid=":ow_rrd"
            />
          )}
        </div>
        {/* Order Summary */}
        <div data-oid="ktu0w.s">
          <OrderSummary data-oid="2evo_3r" />
          <button
            onClick={handleNext}
            className="btn btn-primary w-full mt-6"
            data-oid="slla4t5"
          >
            Continue to Payment
          </button>
        </div>
      </div>
      <div className="text-center py-12 border-t mt-12" data-oid="7h:7wy3">
        <h3 className="text-xl font-semibold" data-oid="ori7no9">
          Need Help?
        </h3>
        <p className="mt-2 text-gray-600" data-oid=".4temab">
          Perhaps our{" "}
          <a href="#" className="underline font-semibold" data-oid="hwrn5ku">
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a href="#" className="underline font-semibold" data-oid="_4384tg">
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </>
  );
}
