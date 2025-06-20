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
    <div data-oid="nrz8s:r">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="-teih8:">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="y9h37l:">
        <div data-oid="ppm1t.i">
          <label className="block text-sm font-medium mb-1" data-oid="tsa7690">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid=":tykrlr"
          />
        </div>

        <div data-oid="a16.fiu">
          <label className="block text-sm font-medium mb-1" data-oid="mlu3qjl">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="kvg8sok"
          />
        </div>

        <div data-oid="tl9cikp">
          <label className="block text-sm font-medium mb-1" data-oid="u6m6o:3">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="ic5hqjw"
          />
        </div>

        <div data-oid="m-hd_ur">
          <label className="block text-sm font-medium mb-1" data-oid=".h0fe8_">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="dehujru"
          />
        </div>

        <div data-oid="h_gupa6">
          <label className="block text-sm font-medium mb-1" data-oid="y_mb3f0">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="_.fbu1."
          >
            <option value="Australia" data-oid="5.05gzv">
              Australia
            </option>
            <option value="Singapore" data-oid="-vj4b9w">
              Singapore
            </option>
            <option value="Malaysia" data-oid=":-c4p4d">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="p8x-xsc">
          <label className="block text-sm font-medium mb-1" data-oid="d0_kizp">
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="hlgjovy"
          />
        </div>
      </div>
    </div>
  );
}

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
    if (billingSameAsDelivery) {
      setBillingAddress(deliveryAddress);
    }
    router.push("/checkout/payment");
  };

  // Don't render if no books (will redirect)
  const hasBook = cart.some((item) => item.type === "Book");
  if (!hasBook) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="x3mxkd9">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="7fkiuiy"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="59qiu3-"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="c5f4b5n">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="kx0q84o">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="nt.2s0."
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid="-kjlsi1">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="pyv7mb6"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="5btun8x"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="zvlqh30">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="iyavzn5">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="bqmr:_9">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="53-u0y7"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="5ryu:bx"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid="0-x1hy5"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="-mrer9w"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="z27_ipu">
                        Please see our{" "}
                        <a
                          href="/privacy"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid="ccjqt0n"
                        >
                          privacy policy
                        </a>{" "}
                        for more information about how we deal with your
                        information.
                      </p>
                    </div>
                  </div>
                )}

                {/* Billing Address */}
                <div data-oid="ckwwl4i">
                  <h3 className="text-xl font-bold mb-6" data-oid="65bgpta">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="uds6_0i">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid=".dvkdt2"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="lhdtsju"
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
                      data-oid="_jhpah0"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid="u2wd9b:"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="k6i-9p7">
            <div className="sticky top-8" data-oid="_bj-1mb">
              <OrderSummary data-oid="oazrlf8" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="85qtxiv">
        <h3 className="text-lg font-semibold mb-2" data-oid="4b2qffl">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="prthk7d">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="eqblcdy"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="91lky28"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
