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
    <div data-oid="78-:1rd">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="y:5vqvh">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="ply6hj:">
        <div data-oid="55bnpfn">
          <label className="block text-sm font-medium mb-1" data-oid=":u2zx-x">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="1sud7ji"
          />
        </div>

        <div data-oid="4x33vy:">
          <label className="block text-sm font-medium mb-1" data-oid="r7:-vo0">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="kixymn6"
          />
        </div>

        <div data-oid="ya:s7hq">
          <label className="block text-sm font-medium mb-1" data-oid="kfsc:mm">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="v233kgs"
          />
        </div>

        <div data-oid="xkhevf3">
          <label className="block text-sm font-medium mb-1" data-oid="nmrq.8r">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="o18f7xr"
          />
        </div>

        <div data-oid="mqu0duz">
          <label className="block text-sm font-medium mb-1" data-oid="uf6j.su">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="orus5j-"
          >
            <option value="Australia" data-oid="yvyr_82">
              Australia
            </option>
            <option value="Singapore" data-oid="-6gp4xi">
              Singapore
            </option>
            <option value="Malaysia" data-oid="0l2l_xr">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="96xrnu1">
          <label className="block text-sm font-medium mb-1" data-oid="6-i8p8y">
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="x_vaiag"
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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="irr3g:v">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="43.ao0b"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="-nhszhb"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="754u-nz">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="pk5a5q_">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="eub-qlo"
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid="ax:1uyl">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="t_t4v0e"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="jl-_.s2"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="s-rrdwr">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="e80886b">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="dh2svas">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="q-cwp9c"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="vzpz0:s"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid="1ip_7yo"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="jk3m7ji"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="z_:exsw">
                        Please see our{" "}
                        <a
                          href="/privacy"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid="jhltqpm"
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
                <div data-oid="7fu6_bm">
                  <h3 className="text-xl font-bold mb-6" data-oid="s0ttj_j">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="rxyq:y:">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid="9vkau2b"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="1e4yma9"
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
                      data-oid="s18m6ux"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid="id28b0u"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="62o9jpl">
            <div className="sticky top-8" data-oid="u.z_u:6">
              <OrderSummary data-oid="o-rkioo" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="yne0-u1">
        <h3 className="text-lg font-semibold mb-2" data-oid="xg3v9gn">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="c5oitcc">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="8pnacus"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="1g9e7mi"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
