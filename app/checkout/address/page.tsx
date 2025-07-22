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
    <div>
      {title && <h3 className="text-xl font-bold mb-6">{title}</h3>}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile *</label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Australia">Australia</option>
            <option value="Singapore">Singapore</option>
            <option value="Malaysia">Malaysia</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Street Address (1) *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={address.streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Street Address (2)
          </label>
          <input
            type="text"
            name="streetAddress2"
            value={address.streetAddress2}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Building Name
          </label>
          <input
            type="text"
            name="buildingName"
            value={address.buildingName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Postal Code *
          </label>
          <input
            type="text"
            name="postcode"
            value={address.postcode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Address Forms */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Address Information
              </h2>
              <p className="text-gray-600 mb-6">
                Please provide your delivery and billing details
              </p>

              <div className="space-y-8">
                {/* Delivery Address */}
                {deliveryOption === "delivery" && (
                  <div>
                    <AddressForm
                      address={deliveryAddress}
                      setAddress={setDeliveryAddress}
                      title="Delivery Address"
                    />

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-900">
                        Authority to Leave
                      </h4>
                      <p className="text-sm text-blue-800 mb-2">
                        Your order may be left in a safe place. Contact us if
                        you preferred to have it delivered when someone is home.
                      </p>
                      <p className="text-sm text-blue-800">
                        Please see our{" "}
                        <a
                          href="/terms"
                          className="text-[#123b79] hover:underline font-medium"
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
                <div>
                  <h3 className="text-xl font-bold mb-6">Billing Address</h3>

                  {deliveryOption === "delivery" && (
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        checked={billingSameAsDelivery}
                        onChange={(e) =>
                          setBillingSameAsDelivery(e.target.checked)
                        }
                        id="sameAsDelivery"
                        className="w-4 h-4 text-[#123b79] rounded focus:ring-[#123b79]"
                      />

                      <label
                        htmlFor="sameAsDelivery"
                        className="ml-2 text-sm font-medium"
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
                    />
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#123b79] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#0f2f63] transition-colors text-lg mt-8"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
        <p className="text-gray-600">
          Perhaps our{" "}
          <a href="#" className="text-[#123b79] hover:underline font-medium">
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a href="#" className="text-[#123b79] hover:underline font-medium">
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
