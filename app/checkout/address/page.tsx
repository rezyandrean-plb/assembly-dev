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
    <div className="max-w-6xl mx-auto px-4 py-8" data-oid="1uet0sj">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        data-oid="uwae3_z"
      >
        {/* Left Column - Address Forms */}
        <div className="space-y-8" data-oid="uw666n6">
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
                className="mt-6 p-4 bg-gray-50 rounded-lg"
                data-oid="7hgw00u"
              >
                <h4 className="font-semibold mb-2" data-oid="2n2x7jx">
                  Authority to Leave
                </h4>
                <p className="text-sm text-gray-600 mb-2" data-oid="sbauz2f">
                  Your order may be left in a safe place, if not, it will be
                  taken to your local Singapore Post collection point.
                </p>
                <p className="text-sm text-gray-600 mb-2" data-oid="jhc_gj7">
                  Track and manage your delivery via the{" "}
                  <a
                    href="#"
                    className="text-[#123b79] hover:underline"
                    data-oid="89xco0-"
                  >
                    SingPost app
                  </a>
                  .
                </p>
                <p className="text-sm text-gray-600" data-oid="irxow6b">
                  Please see our{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    data-oid="et-b-my"
                  >
                    privacy policy
                  </a>{" "}
                  for more information about how we deal with your information.
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
                  onChange={(e) => setBillingSameAsDelivery(e.target.checked)}
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

            {(!billingSameAsDelivery || deliveryOption !== "delivery") && (
              <AddressForm
                address={billingAddress}
                setAddress={setBillingAddress}
                title=""
                data-oid="xvrnfhv"
              />
            )}
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div data-oid="xqptmt8">
          <OrderSummary data-oid="ep5thyd" />
          <button
            onClick={handleNext}
            className="w-full bg-[#123b79] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#0f2f63] transition-colors mt-6"
            data-oid="o116:hq"
          >
            Continue to Payment
          </button>
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
