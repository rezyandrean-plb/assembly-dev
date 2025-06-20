"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle,
  Package,
  Download,
  ArrowRight,
  User,
  ExternalLink,
  Clock,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/navbar";

interface OrderItem {
  id: string;
  title: string;
  price: number;
  type: "course" | "book" | "Course" | "Book";
  quantity: number;
  image?: string;
  author?: string;
}

interface OrderDetails {
  orderId: string;
  orderDate: string;
  items: OrderItem[];
  totalAmount: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  hasBooks: boolean;
  trackingNumber?: string;
}

export default function OrderReceivedPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get order details from sessionStorage
    const storedOrderDetails = sessionStorage.getItem("orderDetails");

    if (!storedOrderDetails) {
      // If no order details found, redirect to home
      router.push("/");
      return;
    }

    try {
      const parsedOrderDetails = JSON.parse(storedOrderDetails);
      setOrderDetails(parsedOrderDetails);
    } catch (error) {
      console.error("Failed to parse order details:", error);
      router.push("/");
      return;
    }

    setIsLoading(false);

    // Clear order details from sessionStorage after 1 hour
    setTimeout(
      () => {
        sessionStorage.removeItem("orderDetails");
      },
      60 * 60 * 1000,
    );
  }, [router]);

  if (isLoading) {
    return (
      <>
        <Navbar data-oid="sw_7w1r" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="h9lprsl"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="xqbhf3:"
          ></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <Navbar data-oid="1cla0vw" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="l4pd630"
        >
          <div className="text-center" data-oid="-bjsdns">
            <CheckCircle
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              data-oid="yadhqxf"
            />

            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              data-oid="zjzg63g"
            >
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="xcod5jr">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid="62e8t3m"
            >
              Return Home
            </button>
          </div>
        </div>
      </>
    );
  }

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-SG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const bookItems = orderDetails.items.filter(
    (item) => item.type === "book" || item.type === "Book",
  );

  const courseItems = orderDetails.items.filter(
    (item) => item.type === "course" || item.type === "Course",
  );

  return (
    <>
      <Navbar data-oid="kjq35lq" />
      <div className="min-h-screen bg-gray-50 py-8 pt-24" data-oid="vz3wjw7">
        <div className="max-w-4xl mx-auto px-4" data-oid="yoq66ns">
          {/* Header */}
          <div
            className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
            data-oid="oecrjma"
          >
            <CheckCircle
              className="mx-auto h-16 w-16 text-green-600 mb-6"
              data-oid="47je4lr"
            />

            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="aia9066"
            >
              Order Received!
            </h1>
            <p className="text-lg text-gray-600 mb-6" data-oid="ewyya10">
              Thank you for your purchase. Your order has been successfully
              placed and confirmed.
            </p>

            <div
              className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
              data-oid="66qt6v8"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                data-oid="8scfqu-"
              >
                <div data-oid="ndaet6i">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="7t-lmom"
                  >
                    Order ID
                  </h3>
                  <p className="text-gray-600 font-mono" data-oid="-s-c-bt">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div data-oid="89c2k6q">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="tt:9uzi"
                  >
                    Order Date
                  </h3>
                  <p className="text-gray-600" data-oid="9kwe12x">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div data-oid="-u9li.-">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="paun1ep"
                  >
                    Total Amount
                  </h3>
                  <p
                    className="text-gray-600 font-semibold text-lg"
                    data-oid="azxps9w"
                  >
                    ${orderDetails.totalAmount.toFixed(2)}
                  </p>
                </div>
                <div data-oid="mlur:t3">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="y-21ot7"
                  >
                    Customer
                  </h3>
                  <p className="text-gray-600" data-oid="nsg4cu7">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="wcwhi6x"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="4joabz7"
            >
              Customer Information
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-oid=".f4kwjy"
            >
              <div data-oid="va23:y9">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="m8j3xft"
                >
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600" data-oid="2g5xsgc">
                  <p data-oid="c24mpqn">
                    <span className="font-medium" data-oid="pv39.xv">
                      Name:
                    </span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p data-oid=":2e0ymd">
                    <span className="font-medium" data-oid="1vu7z0-">
                      Email:
                    </span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p data-oid="q7u.q_v">
                    <span className="font-medium" data-oid="0tamigy">
                      Phone:
                    </span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div data-oid="k7gh4ey">
                  <h3
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="t-akh:l"
                  >
                    Delivery Address
                  </h3>
                  <p className="text-gray-600" data-oid="_ovoicj">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid=":towmya"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-oid="ecn17hb"
            >
              Order Details
            </h2>
            <div className="space-y-4" data-oid="81f2wqr">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  data-oid=".:hhabn"
                >
                  {item.image && (
                    <div
                      className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                      data-oid="0p6ja0z"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-oid="god7vip"
                      />
                    </div>
                  )}

                  <div className="flex-1" data-oid="_l0az2s">
                    <h3
                      className="font-semibold text-gray-900"
                      data-oid="s8lp:dd"
                    >
                      {item.title}
                    </h3>
                    {item.author && (
                      <span
                        className="text-xs text-gray-500 ml-2"
                        data-oid="t9:sq32"
                      >
                        by {item.author}
                      </span>
                    )}
                    <div
                      className="flex items-center gap-2 mt-1"
                      data-oid="zl0oa9g"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                        data-oid="ds0gjor"
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package
                              className="w-3 h-3 mr-1"
                              data-oid="31sdtzu"
                            />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download
                              className="w-3 h-3 mr-1"
                              data-oid="uiem:7x"
                            />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="l3pe8qs"
                      >
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right" data-oid="kqvgvfm">
                    <p
                      className="font-semibold text-gray-900"
                      data-oid="oapre3f"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="0oojbdu">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Books Section - Tracking Information */}
          {bookItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid="r_k5._v"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="ypm9fe:">
                <Package className="h-6 w-6 text-blue-600" data-oid="csrvo43" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="mif09za"
                >
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                data-oid="wcr-sy8"
              >
                <div className="flex items-start gap-3" data-oid="fjqf84g">
                  <MapPin
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    data-oid="gep7.cj"
                  />

                  <div data-oid="1ad:4o9">
                    <h3
                      className="font-semibold text-blue-900 mb-1"
                      data-oid="wfjz6um"
                    >
                      Shipping Address
                    </h3>
                    <p className="text-blue-800" data-oid="vm7:hja">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p
                      className="text-blue-700 text-sm mt-1"
                      data-oid="gj:x720"
                    >
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="5:7fbbh"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="4pfw63p"
                >
                  <div className="flex-1" data-oid="w6eik03">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="v3mrz::"
                    >
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div
                        className="flex items-center gap-3"
                        data-oid="wv7o-qe"
                      >
                        <p
                          className="text-gray-600 font-mono text-lg"
                          data-oid="mxf0lp_"
                        >
                          {orderDetails.trackingNumber}
                        </p>
                        <button
                          onClick={() =>
                            router.push(
                              `/tracking?tracking=${orderDetails.trackingNumber}`,
                            )
                          }
                          className="bg-[#123b79] text-white px-4 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center gap-2 text-sm"
                          data-oid="hvzbs2k"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="n5198or"
                          />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic" data-oid="ja4fvsa">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                data-oid="fb6m8x3"
              >
                <Clock className="h-4 w-4" data-oid="zix5rfb" />
                <span data-oid=":encnn3">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid="om:erhn"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="_5ra:ev">
                <Download
                  className="h-6 w-6 text-green-600"
                  data-oid="qgtikem"
                />

                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="a2az1p3"
                >
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                data-oid="vvjj6n8"
              >
                <div className="flex items-start gap-3" data-oid="xo67.1o">
                  <CheckCircle
                    className="h-5 w-5 text-green-600 mt-0.5"
                    data-oid="pcdrqyn"
                  />

                  <div data-oid="hyj7_as">
                    <h3
                      className="font-semibold text-green-900 mb-1"
                      data-oid="_cd-o4z"
                    >
                      Courses Available Now
                    </h3>
                    <p className="text-green-800" data-oid="n2ly1d5">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-oid="256r6_h"
              >
                <button
                  onClick={() => router.push("/profile/completed-courses")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="cr6fq0b"
                >
                  <User className="h-4 w-4" data-oid="rjhk0nj" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="0.5.y_a"
                >
                  <ArrowRight className="h-4 w-4" data-oid="8x3p:dq" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="a845bef"
          >
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid=":gs9sj2"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="ou:9mz6"
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
              data-oid="p:7qmj0"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center" data-oid="3o5dkf:">
            <p className="text-sm text-gray-500" data-oid="lqf3v1n">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="dg2r:rr"
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="gk-frv3"
              >
                help center
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
