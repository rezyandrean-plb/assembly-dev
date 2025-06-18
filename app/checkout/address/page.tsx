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
    <div data-oid="ww1c9:-">
      <h3 className="text-2xl font-bold mb-6" data-oid=":_4j2_3">
        {title}
      </h3>
      <div className="space-y-4" data-oid="fgpm_qu">
        <div className="grid grid-cols-2 gap-4" data-oid="rqbbggz">
          <div className="form-control" data-oid="mt-toh0">
            <label className="label" data-oid="d.-qn5h">
              <span className="label-text" data-oid="bso56sz">
                First Name*
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="v05so7l"
            />
          </div>
          <div className="form-control" data-oid="qe2fj._">
            <label className="label" data-oid="z1.iw_l">
              <span className="label-text" data-oid="88mjyzx">
                Last Name*
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="s3oyvsp"
            />
          </div>
        </div>
        <div className="form-control" data-oid="2oks_lk">
          <label className="label" data-oid="6suy3_x">
            <span className="label-text" data-oid="dbtvo.1">
              Email Address*
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="le8v3qr"
          />
        </div>
        <div className="form-control" data-oid="f.0as9c">
          <label className="label" data-oid="q:6ufdz">
            <span className="label-text" data-oid="89hdfh5">
              Mobile*
            </span>
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="6u44yk."
          />
        </div>
        <div className="form-control" data-oid="3i:mpgp">
          <label className="label" data-oid="ozb7q14">
            <span className="label-text" data-oid="5uvw7r-">
              Country*
            </span>
          </label>
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="h34154o"
          />
        </div>
        <div className="form-control" data-oid="ndktipz">
          <label className="label" data-oid="xb-9p.5">
            <span className="label-text" data-oid="b8.686w">
              Company
            </span>
          </label>
          <input
            type="text"
            name="company"
            value={address.company}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="qsra5pm"
          />
        </div>
        <div className="form-control" data-oid="c:yjtl0">
          <label className="label" data-oid="d.vkvo:">
            <span className="label-text" data-oid="41n6t:n">
              Street Address*
            </span>
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="o:zc_v5"
          />
        </div>
        <div className="grid grid-cols-2 gap-4" data-oid="r:6zcb7">
          <div className="form-control" data-oid="pacfhdf">
            <label className="label" data-oid="qb-1zz0">
              <span className="label-text" data-oid="02jyhmf">
                Suburb*
              </span>
            </label>
            <input
              type="text"
              name="suburb"
              value={address.suburb}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="d4gapy8"
            />
          </div>
          <div className="form-control" data-oid="jddao7j">
            <label className="label" data-oid="siqzgnx">
              <span className="label-text" data-oid="3:o_a0y">
                State*
              </span>
            </label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="input input-bordered w-full"
              data-oid="2n-rg8j"
            />
          </div>
        </div>
        <div className="form-control" data-oid="4aiom:5">
          <label className="label" data-oid="7bogv.7">
            <span className="label-text" data-oid="22.4:6b">
              Postcode*
            </span>
          </label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={handleChange}
            className="input input-bordered w-full"
            data-oid="cbxll83"
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
        data-oid="79gc-c_"
      >
        {/* Delivery Address + Authority to Leave */}
        <div data-oid="v6sa.8v">
          {deliveryOption === "delivery" && (
            <>
              <AddressForm
                address={deliveryAddress}
                setAddress={setDeliveryAddress}
                title="Delivery Address"
                data-oid="o8332qt"
              />

              <div className="text-sm space-y-4 mt-8" data-oid="_4yc.2x">
                <h4 className="font-semibold" data-oid="mg-:3_d">
                  Authority to Leave
                </h4>
                <p data-oid="vdvfu.i">
                  Your order may be left in a safe place, if not, it will be
                  taken to your local Australia Post collection point.
                </p>
                <p data-oid="q9ib6-c">
                  Track and manage your delivery via the{" "}
                  <a href="#" className="underline" data-oid="mocxn4t">
                    AusPost app
                  </a>
                  .
                </p>
                <p data-oid="ceq9zf1">
                  Please see our{" "}
                  <a href="#" className="underline" data-oid="wgv374s">
                    privacy policy
                  </a>{" "}
                  for more information about how we deal with your information.
                </p>
              </div>
            </>
          )}
        </div>
        {/* Billing Address */}
        <div data-oid="rspk3z3">
          <h3 className="text-2xl font-bold mb-6" data-oid="jgg404p">
            Billing Address
          </h3>
          {deliveryOption === "delivery" && (
            <div className="flex items-center mb-4" data-oid="-of9mzb">
              <input
                type="checkbox"
                checked={billingSameAsDelivery}
                onChange={(e) => setBillingSameAsDelivery(e.target.checked)}
                id="sameAsDelivery"
                className="checkbox"
                data-oid=".p2nj96"
              />

              <label
                htmlFor="sameAsDelivery"
                className="ml-2 font-semibold"
                data-oid="1owmgs2"
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
              data-oid="_rnh:6n"
            />
          )}
        </div>
        {/* Order Summary */}
        <div data-oid="y28n_jj">
          <OrderSummary data-oid="bog9-f6" />
          <button
            onClick={handleNext}
            className="btn btn-primary w-full mt-6"
            data-oid="7rbvisf"
          >
            Continue to Payment
          </button>
        </div>
      </div>
      <div className="text-center py-12 border-t mt-12" data-oid="ybrpulk">
        <h3 className="text-xl font-semibold" data-oid="7mqspcx">
          Need Help?
        </h3>
        <p className="mt-2 text-gray-600" data-oid="vbxgvdl">
          Perhaps our{" "}
          <a href="#" className="underline font-semibold" data-oid="w:lqhf8">
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a href="#" className="underline font-semibold" data-oid="38fpu78">
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </>
  );
}
