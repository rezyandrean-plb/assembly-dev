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
    <div data-oid="ggvcbbr">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="rmo809u">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="1v.z.6d">
        <div data-oid="7t.uqx9">
          <label className="block text-sm font-medium mb-1" data-oid="daigc9s">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="69imxw5"
          />
        </div>

        <div data-oid="17p.v59">
          <label className="block text-sm font-medium mb-1" data-oid="3_hvi.1">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="23x5qju"
          />
        </div>

        <div data-oid="lmlhbqi">
          <label className="block text-sm font-medium mb-1" data-oid="df9af7u">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="70hy0en"
          />
        </div>

        <div data-oid="_m.gg-s">
          <label className="block text-sm font-medium mb-1" data-oid="geaqmzt">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="t-hih60"
          />
        </div>

        <div data-oid="45i8gzo">
          <label className="block text-sm font-medium mb-1" data-oid="zp6445n">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="so1j0cu"
          >
            <option value="Australia" data-oid="n2i.sel">
              Australia
            </option>
            <option value="Singapore" data-oid="l3juxez">
              Singapore
            </option>
            <option value="Malaysia" data-oid="bxy34ac">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="db9q:.k">
          <label className="block text-sm font-medium mb-1" data-oid="te1.er-">
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="efa9z9x"
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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="8t-:lc8">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="r1a8yqw"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="_0mi.j-"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="1uet0sj">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="ctf1v9s">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="uwae3_z"
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid="uw666n6">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="rmt9ts_"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="address-title"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="address-subtitle">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="adfty2f">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="ir__idl">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="3lkogbo"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="7hgw00u"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid="2n2x7jx"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="sbauz2f"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="irxow6b">
                        Please see our{" "}
                        <a
                          href="/privacy"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid="et-b-my"
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
                <div data-oid="7fu3lps">
                  <h3 className="text-xl font-bold mb-6" data-oid="u91wm7-">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="ze6iks6">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid="y00kykg"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="lb6cxmr"
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
                      data-oid="xvrnfhv"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid="o116:hq"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="xqptmt8">
            <div className="sticky top-8" data-oid="qg0h:u9">
              <OrderSummary data-oid="ep5thyd" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="pivekcj">
        <h3 className="text-lg font-semibold mb-2" data-oid="ha8txy.">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="f9vgyfo">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="atc_apo"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="giqdcga"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
