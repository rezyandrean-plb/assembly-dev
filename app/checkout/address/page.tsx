"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import { useCart } from "@/components/cart-context";
import OrderSummary from "../components/order-summary";

interface AddressFormProps {
  address: any;
  setAddress: (address: any) => void;
  title: string;
}

function AddressForm({ address, setAddress, title }: AddressFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div data-oid="_oz3lj:">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="gfk.axh">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="z0cpf.:">
        <div data-oid="aq70tk_">
          <label className="block text-sm font-medium mb-1" data-oid="8vuijg:">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="k-zouo_"
          />
        </div>

        <div data-oid="5ects-4">
          <label className="block text-sm font-medium mb-1" data-oid="4j2t0y7">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="d2r_z96"
          />
        </div>

        <div data-oid="h:6jsb3">
          <label className="block text-sm font-medium mb-1" data-oid="a1ogt:n">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="d0wlg-5"
          />
        </div>

        <div data-oid="tz5:ro6">
          <label className="block text-sm font-medium mb-1" data-oid="wfju5de">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="iyr9mu_"
          />
        </div>

        <div data-oid="7dv9f.h">
          <label className="block text-sm font-medium mb-1" data-oid="5-ok_kp">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="87iqmfd"
          >
            <option value="Australia" data-oid="m35psvl">
              Australia
            </option>
            <option value="Singapore" data-oid="241o3gu">
              Singapore
            </option>
            <option value="Malaysia" data-oid="u8ed.kp">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="0zhrym.">
          <label className="block text-sm font-medium mb-1" data-oid="6wcva.v">
            Street Address (1) *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="tap9.uv"
          />
        </div>
        <div data-oid="ikm_n7r">
          <label className="block text-sm font-medium mb-1" data-oid="4kdprdy">
            Street Address (2)
          </label>
          <input
            type="text"
            name="streetAddress2"
            value={address.streetAddress2}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="e8wbki-"
          />
        </div>
        <div data-oid="5xcjirr">
          <label className="block text-sm font-medium mb-1" data-oid="3pyl6_3">
            Building Name
          </label>
          <input
            type="text"
            name="buildingName"
            value={address.buildingName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="ebnszwp"
          />
        </div>
        <div data-oid="l0zwgnf">
          <label className="block text-sm font-medium mb-1" data-oid="bxb__n.">
            Postal Code *
          </label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="xfh7f5q"
          />
        </div>
      </div>
    </div>
  );
}

const isAddressValid = (address: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    address.firstName &&
    address.lastName &&
    address.email &&
    emailRegex.test(address.email) &&
    address.mobile &&
    address.streetAddress &&
    address.postcode
  );
};

export default function AddressPage() {
  const router = useRouter();
  const { cart } = useCart();
  const {
    deliveryOption,
    deliveryAddress,
    setDeliveryAddress,
    billingAddress,
    setBillingAddress,
    billingSameAsDelivery,
    setBillingSameAsDelivery,
  } = useCheckout();

  // Check if there are books in cart, redirect if not
  useEffect(() => {
    const hasBook = cart.some((item) => item.type === "Book");
    if (!hasBook) {
      router.replace("/checkout/payment");
    }
  }, [cart, router]);

  const handleNext = () => {
    let deliveryValid = true;
    if (deliveryOption === "delivery") {
      deliveryValid = isAddressValid(deliveryAddress);
    }

    let billingValid = true;
    if (!billingSameAsDelivery) {
      billingValid = isAddressValid(billingAddress);
    }

    if (deliveryValid && billingValid) {
      if (billingSameAsDelivery) {
        setBillingAddress(deliveryAddress);
      }
      router.push("/checkout/payment");
    } else {
      alert("Please fill in all required fields with valid information.");
    }
  };

  // Don't render if no books (will redirect)
  const hasBook = cart.some((item) => item.type === "Book");
  if (!hasBook) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="68vjb7q">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="v7qvjwa"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="p-iewby"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="484uivc">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="70nkjbr">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="foa_:ax"
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid="sb71lsv">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="g.5wz8p"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="equ47_o"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="vp8ae2.">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="ks3z:oo">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="j5qgt0y">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="gqfu3cy"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="rkmyp60"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid=":v879ir"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="_z51amm"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="vo:tsjh">
                        Please see our{" "}
                        <a
                          href="/terms"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid="cncja9q"
                        >
                          terms of service
                        </a>{" "}
                        for more information about how we deal with your
                        information.
                      </p>
                    </div>
                  </div>
                )}

                {/* Billing Address */}
                <div data-oid="6k8xq:_">
                  <h3 className="text-xl font-bold mb-6" data-oid="acdh.g3">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="udrdcv8">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid="h94q.xh"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="4e:n::0"
                      >
                        Same as Delivery Address
                      </label>
                    </div>
                  )}

                  {(!billingSameAsDelivery ||
                    deliveryOption !== "delivery") && (
                    <AddressForm
                      address={billingAddress}
                      setAddress={setBillingAddress}
                      title=""
                      data-oid="f0ehjiw"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid="71lt78-"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="x1a8_yh">
            <div className="sticky top-8" data-oid="v82veyw">
              <OrderSummary data-oid="53xjnl:" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="nt.66k0">
        <h3 className="text-lg font-semibold mb-2" data-oid="7c_cmgw">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="20b:ncj">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="sqcm36l"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="uqth.ez"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
