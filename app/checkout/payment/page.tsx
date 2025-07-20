"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/checkout-context";
import OrderSummary from "../components/order-summary";
import { Lock, ChevronDown } from "lucide-react";
import { useCart } from "@/components/cart-context";
import { useAuth } from "@/context/auth-context";

export default function PaymentPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const { isLoggedIn, user } = useAuth();
  const { deliveryAddress, billingAddress, billingSameAsDelivery } =
    useCheckout();
  const [selectedPayment, setSelectedPayment] = useState("Credit / Debit");
  const [expandedSection, setExpandedSection] = useState("Credit / Debit");

  const finalBillingAddress = billingSameAsDelivery
    ? deliveryAddress
    : billingAddress;

  // Calculate order total using the same logic as cart and order summary
  const BOOK_ID = "property-leverage-blueprint";
  const BOOK_ORIGINAL_PRICE = 39;
  const BOOK_DISCOUNTED_PRICE = 29;

  const bookInCart = cart.find((item) => item.id === BOOK_ID);
  const discount = bookInCart
    ? (BOOK_ORIGINAL_PRICE - BOOK_DISCOUNTED_PRICE) * bookInCart.quantity
    : 0;

  const subtotal = cart.reduce((sum, item) => {
    let price = 0;
    if (item.id === BOOK_ID) {
      price = BOOK_ORIGINAL_PRICE;
    } else if (item.price.toString().toLowerCase() !== "free") {
      const parsedPrice = parseFloat(
        item.price.toString().replace(/[^0-9.]/g, ""),
      );
      price = isNaN(parsedPrice) ? 0 : parsedPrice;
    }
    return sum + price * item.quantity;
  }, 0);

  const hasBook = cart.some((item) => item.type === "Book");
  const shippingCost = hasBook ? 10.0 : 0.0; // This should ideally come from checkout context
  const orderTotal = subtotal - discount + shippingCost;

  // Generate order details
  const generateOrderDetails = () => {
    const orderId = `ORD-${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}-TEST123`;
    const orderDate = new Date().toISOString();

    const orderItems = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price:
        item.id === BOOK_ID
          ? BOOK_DISCOUNTED_PRICE
          : item.price.toString().toLowerCase() === "free"
            ? 0
            : parseFloat(item.price.toString().replace(/[^0-9.]/g, "")) || 0,
      type: item.type as "course" | "book" | "Course" | "Book",
      quantity: item.quantity,
      image: item.image,
      author: item.author,
    }));

    const customerInfo = {
      name:
        user?.name ||
        finalBillingAddress.firstName + " " + finalBillingAddress.lastName ||
        "John Doe",
      email: user?.email || finalBillingAddress.email || "john.doe@example.com",
      phone: finalBillingAddress.mobile || "+65 9123 4567",
      address: hasBook
        ? `${finalBillingAddress.streetAddress}${finalBillingAddress.streetAddress2 ? ", " + finalBillingAddress.streetAddress2 : ""}${finalBillingAddress.buildingName ? ", " + finalBillingAddress.buildingName : ""}, ${finalBillingAddress.country}, ${finalBillingAddress.postcode}`
        : "123 Example Street, Singapore 123456",
    };

    return {
      orderId,
      orderDate,
      items: orderItems,
      totalAmount: orderTotal,
      customerInfo,
      hasBooks: hasBook,
      trackingNumber: hasBook ? undefined : undefined, // Will be updated when order is ready to ship
    };
  };

  const handleProceedToCheckout = async () => {
    if (!isLoggedIn) {
      // If user is not logged in, redirect to login
      router.push("/login");
      return;
    }

    try {
      // Generate and store order details
      const orderDetails = generateOrderDetails();
      sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));

      // Process enrollments for courses in the cart
      const coursesToEnroll = cart.filter((item) => {
        // Check if it's explicitly a book
        if (item.type === "Book") {
          return false;
        }
        // Everything else is treated as a course (Course or undefined)
        return true;
      });

      if (coursesToEnroll.length > 0) {
        const enrollmentResponse = await fetch("/api/enrollments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-user-email": user?.email || "",
            "x-user-name": user?.name || "",
            "x-user-image": user?.image || "",
          },
          body: JSON.stringify({
            courses: coursesToEnroll.map((course) => ({
              id: course.id,
              title: course.title,
              slug:
                course.slug ||
                course.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              price: course.price,
            })),
            orderId: orderDetails.orderId,
          }),
        });

        if (!enrollmentResponse.ok) {
          const errorText = await enrollmentResponse.text();
          console.error("Enrollment error:", errorText);
          throw new Error("Failed to process course enrollments");
        }

        const enrollmentData = await enrollmentResponse.json();
        console.log("Enrollment successful:", enrollmentData.message);
      }

      // Check if all items are free (total is $0)
      if (orderTotal === 0) {
        // All items are free, clear cart and go directly to order received
        clearCart();
        router.push("/order-received");
        return;
      }

      // For paid items, process payment (placeholder for actual payment processing)
      // In a real app, you would integrate with a payment processor here
      alert("Payment processed successfully!");
      clearCart();
      router.push("/order-received");
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your order. Please try again.");
    }
  };

  const paymentMethods: { id: string; name: string; icon: string }[] = [];

  const otherPaymentMethods = [
    {
      id: "grabpay",
      name: "GrabPay",
      icon: "/images/payment/Grabpay.png",
    },
    { id: "applepay", name: "Apple Pay", icon: "/images/payment/applepay.png" },
    { id: "paypal", name: "PayPal", icon: "/images/payment/paypal.png" },
    { id: "stripe", name: "Stripe", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-oid="askap5v">
      <div className="max-w-7xl mx-auto px-4 py-8" data-oid="ah6_t5x">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="4eq.64x"
        >
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2" data-oid="m17qev0">
            <div
              className="bg-white rounded-lg shadow-sm p-6"
              data-oid="xy7r.kn"
            >
              <h2
                className="text-2xl font-bold mb-2 text-gray-900"
                data-oid="0l-0bi7"
              >
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6" data-oid="zg-:_xm">
                Choose your preferred payment method
              </p>

              <div className="space-y-6" data-oid="qsc2jb5">
                {/* Credit/Debit Card Section */}
                <div
                  className="border border-gray-200 rounded-lg"
                  data-oid=".a5mect"
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === "Credit / Debit"
                          ? ""
                          : "Credit / Debit",
                      )
                    }
                    data-oid="5sfsmis"
                  >
                    <div className="flex items-center gap-3" data-oid="s7iq3w1">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Credit / Debit"
                        checked={selectedPayment === "Credit / Debit"}
                        onChange={() => setSelectedPayment("Credit / Debit")}
                        className="w-4 h-4"
                        data-oid="z8m6n5b"
                      />

                      <span className="font-semibold" data-oid="09-go73">
                        Debit or Credit Card
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="808x:th">
                      <Image
                        src="/images/payment/visa-mastercard.png"
                        alt="Visa and Mastercard"
                        width={100}
                        height={25}
                        className="object-contain"
                        data-oid="zuba3jk"
                      />

                      <ChevronDown
                        className={`transition-transform ${
                          expandedSection === "Credit / Debit"
                            ? "rotate-180"
                            : ""
                        }`}
                        data-oid="efoqaz3"
                      />
                    </div>
                  </div>

                  {expandedSection === "Credit / Debit" &&
                    selectedPayment === "Credit / Debit" && (
                      <div
                        className="border-t p-4 space-y-4"
                        data-oid="p.eps9a"
                      >
                        <div data-oid="8fb_kt:">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="6o262aw"
                          >
                            Card Number *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                            data-oid="a1j0q3q"
                          />
                        </div>
                        <div data-oid="s-9x4ov">
                          <label
                            className="block text-sm font-medium mb-1"
                            data-oid="irv:k04"
                          >
                            Card Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="re25y1w"
                          />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-4"
                          data-oid="ddx-070"
                        >
                          <div data-oid="hkdw29v">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="7-9e5r5"
                            >
                              Expiry Date *
                            </label>
                            <div
                              className="grid grid-cols-2 gap-2"
                              data-oid="p15f5g6"
                            >
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123b79]"
                                data-oid="coxgo55"
                              >
                                <option data-oid="r0r7l_.">MM</option>
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1,
                                ).map((m) => (
                                  <option
                                    key={m}
                                    value={m.toString().padStart(2, "0")}
                                    data-oid="p9rqqq_"
                                  >
                                    {m.toString().padStart(2, "0")}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="rgdru7d"
                              >
                                <option data-oid="itwmhk2">YYYY</option>
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => new Date().getFullYear() + i,
                                ).map((y) => (
                                  <option key={y} value={y} data-oid="vtvytab">
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div data-oid="oehjkld">
                            <label
                              className="block text-sm font-medium mb-1"
                              data-oid="hpsmbbk"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              data-oid="t-yn.xg"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>

                {/* Other Payment Methods */}
                {otherPaymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                    data-oid="eii:-x_"
                  >
                    <div className="flex items-center gap-3" data-oid="rintvja">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="w-4 h-4"
                        data-oid="46ckqx1"
                      />

                      <span className="font-semibold" data-oid="7xsrh-0">
                        {method.name}
                      </span>
                    </div>
                    {method.id === "stripe" ? (
                      <span className="text-2xl" data-oid="hoszrpi">
                        {method.icon}
                      </span>
                    ) : (
                      <Image
                        src={method.icon}
                        alt={method.name}
                        width={40}
                        height={40}
                        className="object-contain"
                        data-oid="nhch6ub"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Review */}
          <div className="lg:col-span-1" data-oid="5.2lt_k">
            <div className="sticky top-8 space-y-6" data-oid="3pp:srb">
              <OrderSummary data-oid="w0ccytj" />

              {/* Review Address */}
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                data-oid="p90e9qi"
              >
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="qc_3y_r"
                >
                  <h3 className="text-lg font-semibold" data-oid="ppx_k1i">
                    Review Address
                  </h3>
                  <button
                    onClick={() => router.push("/checkout/address")}
                    className="text-[#123b79] text-sm hover:underline font-medium"
                    data-oid="a5g1asb"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1" data-oid="jjx3c53">
                  <h4 className="font-bold text-gray-900" data-oid="jwh_ue.">
                    Delivery & Billing Address
                  </h4>
                  <p className="font-semibold text-gray-800" data-oid="nxkma39">
                    {finalBillingAddress.firstName}{" "}
                    {finalBillingAddress.lastName}
                  </p>
                  <p className="text-gray-600" data-oid="1l0g2.7">
                    {finalBillingAddress.email}
                  </p>
                  <p className="text-gray-600" data-oid="b.-pys8">
                    {finalBillingAddress.mobile}
                  </p>
                  <p className="text-gray-600" data-oid="-uq6t37">
                    {finalBillingAddress.streetAddress}
                    {finalBillingAddress.streetAddress2 &&
                      `, ${finalBillingAddress.streetAddress2}`}
                    {finalBillingAddress.buildingName &&
                      `, ${finalBillingAddress.buildingName}`}
                    , {finalBillingAddress.country},{" "}
                    {finalBillingAddress.postcode}
                  </p>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                data-oid="y8_-08u"
              >
                {orderTotal === 0
                  ? "Complete Free Enrollment →"
                  : "Process Payment →"}
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push("/courses")}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                data-oid="szc:xj7"
              >
                Continue Shopping
              </button>

              <p
                className="text-xs text-gray-500 text-center leading-relaxed"
                data-oid="t.0_ftx"
              >
                By clicking Proceed to Checkout you confirm that you have read,
                understood and accept our{" "}
                <a
                  href="/terms"
                  className="text-[#123b79] hover:underline"
                  data-oid="taj3tc."
                >
                  terms of service
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 mb-12 text-center" data-oid="xbshbxr">
        <h3 className="text-lg font-semibold mb-2" data-oid="kakbwk5">
          Need Help?
        </h3>
        <p className="text-gray-600" data-oid="vwil8ak">
          Perhaps our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="6tyjzn:"
          >
            FAQs
          </a>{" "}
          page can answer your question. Alternatively, use our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            data-oid="_qdjsez"
          >
            Contact Us
          </a>{" "}
          page to speak to a member of our customer service team
        </p>
      </div>
    </div>
  );
}
