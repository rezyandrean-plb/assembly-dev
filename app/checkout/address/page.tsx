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
    <div data-oid="x32nvwj">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="er6qdx9">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="-fsxepg">
        <div data-oid="5-.fxxh">
          <label className="block text-sm font-medium mb-1" data-oid="ilh07jl">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="xvc40th"
          />
        </div>

        <div data-oid="w4.3zc8">
          <label className="block text-sm font-medium mb-1" data-oid="xzrrx_d">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="gibqnk4"
          />
        </div>

        <div data-oid=":bvh.xt">
          <label className="block text-sm font-medium mb-1" data-oid="v9tccqh">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="62z3d0t"
          />
        </div>

        <div data-oid="znajv-i">
          <label className="block text-sm font-medium mb-1" data-oid="00b6pja">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="9o6u7_u"
          />
        </div>

        <div data-oid="jcljn6h">
          <label className="block text-sm font-medium mb-1" data-oid="nls3l8p">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="wbhqqy3"
          >
            <option value="Australia" data-oid=".a04034">
              Australia
            </option>
            <option value="Singapore" data-oid="9on04:c">
              Singapore
            </option>
            <option value="Malaysia" data-oid="61g2218">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="ltuetrq">
          <label className="block text-sm font-medium mb-1" data-oid="6w3wy38">
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="8_cbibg"
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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="0jaxtjq">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="2jqk:to"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="d263iwm"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="wtmki18">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="wm.8tj:">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="5i_g454"
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid="0mc-2nb">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="80nnvn:"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="l2sh62q"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="8fbjh6v">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="li94qbm">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="--2c74v">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="tw6r.w0"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="pw3rz:w"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid="i:jqy7m"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="nvbo0vt"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="-5cuh::">
                        Please see our{" "}
                        <a
                          href="/privacy"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid="bh_h:gh"
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
                <div data-oid="8nv.oge">
                  <h3 className="text-xl font-bold mb-6" data-oid=":hff007">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="wfyimbe">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid="4t3mdgl"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="odu6zor"
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
                      data-oid="76.74-j"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid="2jsjy8s"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="xuwihnc">
            <div className="sticky top-8" data-oid="d493mrf">
              <OrderSummary data-oid="l:pteim" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="tjnngrl">
        <h3 className="text-lg font-semibold mb-2" data-oid="ez8rnyt">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="shykq_q">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="vt.vk6l"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="o54b.pp"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
