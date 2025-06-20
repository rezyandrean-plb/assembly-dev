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
    <div data-oid="ojr--dl">
      {title && (
        <h3 className="text-xl font-bold mb-6" data-oid="2vkz_._">
          {title}
        </h3>
      )}
      <div className="space-y-4" data-oid="n0ngxz1">
        <div data-oid="fgdkzvm">
          <label className="block text-sm font-medium mb-1" data-oid="ov76l79">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="0tcrj6j"
          />
        </div>

        <div data-oid="hga79i5">
          <label className="block text-sm font-medium mb-1" data-oid="7q5ijm0">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
            data-oid="_mzzyhw"
          />
        </div>

        <div data-oid="r7oyuzg">
          <label className="block text-sm font-medium mb-1" data-oid="ldp4xz1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="_ljpid6"
          />
        </div>

        <div data-oid="48l:n9i">
          <label className="block text-sm font-medium mb-1" data-oid="6t31tr.">
            Mobile *
          </label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="epswa7l"
          />
        </div>

        <div data-oid="xx3djv2">
          <label className="block text-sm font-medium mb-1" data-oid="6ejquan">
            Country
          </label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="n.8xx-g"
          >
            <option value="Australia" data-oid="0rxs.uq">
              Australia
            </option>
            <option value="Singapore" data-oid="537cfgk">
              Singapore
            </option>
            <option value="Malaysia" data-oid="t00akzb">
              Malaysia
            </option>
          </select>
        </div>

        <div data-oid="dz.df6e">
          <label className="block text-sm font-medium mb-1" data-oid="1.6a2kk">
            Street Address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-oid="7ku2ovn"
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
      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="_0mj8ir">
        <div
          className="flex items-center justify-center min-h-[400px]"
          data-oid="p5t367-"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="-gham43"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="1g1j:hi">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="c586ul8">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="audhmm-"
        >
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2" data-oid="7-cw-3q">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="sn98kzy"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="gezob9b"
              >
                Address Information
              </h2>
              <p className="text-gray-600 mb-6" data-oid="u3.-wft">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8" data-oid="fmgku4n">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div data-oid="9ypzrn9">
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                      data-oid="oshrn4u"
                    />

                    <div
                      className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      data-oid="u_xw22n"
                    >
                      <h4
                        className="font-semibold mb-2 text-blue-900"
                        data-oid="qr35hft"
                      >
                        Authority to Leave
                      </h4>
                      <p
                        className="text-sm text-blue-800 mb-2"
                        data-oid="m31uqlq"
                      >
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800" data-oid="0scdj6e">
                        Please see our{" "}
                        <a
                          href="/privacy"
                          className="text-[#123b79] hover:underline font-medium"
                          data-oid="639hyis"
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
                <div data-oid="sd-ryd0">
                  <h3 className="text-xl font-bold mb-6" data-oid=":__wkqy">
                    Billing Address
                  </h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4" data-oid="nq3cubo">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                        data-oid="ad59v8t"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
                        data-oid="otrz8eu"
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
                      data-oid="s6ps__1"
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                  data-oid=":rx1zvb"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1" data-oid="axqmo_q">
            <div className="sticky top-8" data-oid="ok.iz71">
              <OrderSummary data-oid="yij3sbb" />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center" data-oid="xlqd1al">
        <h3 className="text-lg font-semibold mb-2" data-oid="k01o8y4">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="z4hgowy">
          Perhaps our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="_i9iszp"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-[#123b79] hover:underline font-medium"
            data-oid="e1c__yi"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
