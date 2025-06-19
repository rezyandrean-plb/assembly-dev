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
    <div data-oid=":e3rmph">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="yyjmv7n">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="m8eb1e2">
        <div data-oid="ouov96b">
          <label className="block text-sm font-medium mb-1" data-oid="ciw0wi-">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="q6s2g.z"
          />
        </div>

        <div data-oid="w6eva7v">
          <label className="block text-sm font-medium mb-1" data-oid="mftf:n9">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="rhbj2m7"
          />
        </div>

        <div data-oid="c8x__p4">
          <label className="block text-sm font-medium mb-1" data-oid="40ytmy0">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="y6:s_w6"
          />
        </div>

        <div data-oid="aca-js4">
          <label className="block text-sm font-medium mb-1" data-oid="_1evljw">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="iuqwiem"
          />
        </div>

        <div data-oid="54i::5n">
          <label className="block text-sm font-medium mb-1" data-oid="4r3ii_v">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="z_5a27:"
          >
            <option value="Australia" data-oid="bblc--t">
              Australia
            </option>
            <option value="Singapore" data-oid="r7gwf05">
              Singapore
            </option>
            <option value="Malaysia" data-oid="7ah4n0p">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="_g1ff95">
          <label className="block text-sm font-medium mb-1" data-oid="g_3rume">
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="mdzb6:0"
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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="yq95wvz">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="lga7fh4"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="7qsb0.s"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="hu1yuo.">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="slcseuf">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="qgy7z2t"
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid=".mus6yh">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="c4wzit4"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="7ndg68-"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="fdnnv:t">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="20c:as9">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="i34axan">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="s3xktnt"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="gkni3tn"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid="rwgj1cn"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="ivd5ra3"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="e8g74th">
                        Please see our{" "}
                        <a
                          href="/privacy"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid=".3kcqmk"
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
                <div data-oid="4pvyz.9">
                  <h3 className="text-xl font-bold mb-6" data-oid="xo-ocsn">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="a8go9ei">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid="m.tv:7_"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="ey72_s1"
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
                      data-oid="hxq:5mr"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid="587u4.w"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid=":l.k08n">
            <div className="sticky top-8" data-oid="im4p.4a">
              <OrderSummary data-oid="fpd0li." />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="8rskzbz">
        <h3 className="text-lg font-semibold mb-2" data-oid="_qobnfe">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="y5k0v15">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="l_cpg.l"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="is7v21."
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
