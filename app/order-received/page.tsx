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
        <Navbar data-oid=":26:kr6" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="osycgrg"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="786d9y7"
          ></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <Navbar data-oid="xh-w.mf" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="meq5c1i"
        >
          <div className="text-center" data-oid="q-oev1n">
            <CheckCircle
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              data-oid="jf7bf3f"
            />

            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              data-oid="kwvnie-"
            >
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="yqs6pss">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid="xgqgjr-"
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
      <Navbar data-oid="_u5d:xi" />
      <div className="min-h-screen bg-gray-50 py-8 pt-24" data-oid="pkz91:_">
        <div className="max-w-4xl mx-auto px-4" data-oid="r5_4cb.">
          {/* Header */}
          <div
            className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
            data-oid="f9qluxi"
          >
            <CheckCircle
              className="mx-auto h-16 w-16 text-green-600 mb-6"
              data-oid="jkmv.jo"
            />

            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="4027:11"
            >
              Order Received!
            </h1>
            <p className="text-lg text-gray-600 mb-6" data-oid="jej4lg2">
              Thank you for your purchase. Your order has been successfully
              placed and confirmed.
            </p>

            <div
              className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
              data-oid="1usvd9i"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                data-oid=".r_.hp:"
              >
                <div data-oid="2-yt99x">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="38b3v3c"
                  >
                    Order ID
                  </h3>
                  <p className="text-gray-600 font-mono" data-oid="ydos2ux">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div data-oid="j0-i9u-">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="d5:fr8j"
                  >
                    Order Date
                  </h3>
                  <p className="text-gray-600" data-oid="l68z247">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div data-oid="31fum3n">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="xn418hd"
                  >
                    Total Amount
                  </h3>
                  <p
                    className="text-gray-600 font-semibold text-lg"
                    data-oid="melqoo0"
                  >
                    ${orderDetails.totalAmount.toFixed(2)}
                  </p>
                </div>
                <div data-oid="qg99kge">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="2g44on-"
                  >
                    Customer
                  </h3>
                  <p className="text-gray-600" data-oid="a337arh">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="k.-1u.:"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="v8tnhd3"
            >
              Customer Information
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-oid="v2m3cnk"
            >
              <div data-oid="qmv.z9i">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="klap3jy"
                >
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600" data-oid="r41w4pz">
                  <p data-oid="q5056hx">
                    <span className="font-medium" data-oid="1dytihq">
                      Name:
                    </span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p data-oid="msik9tb">
                    <span className="font-medium" data-oid="517:gk9">
                      Email:
                    </span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p data-oid="4aonq6v">
                    <span className="font-medium" data-oid="15-6607">
                      Phone:
                    </span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div data-oid="omua8.k">
                  <h3
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="1q0nbma"
                  >
                    Delivery Address
                  </h3>
                  <p className="text-gray-600" data-oid="pbijcmb">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="2l6j9cx"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-oid="dn1-2mu"
            >
              Order Details
            </h2>
            <div className="space-y-4" data-oid="98tedvj">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  data-oid="m3tqcmw"
                >
                  {item.image && (
                    <div
                      className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                      data-oid=":o.efwe"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-oid="vt21bb5"
                      />
                    </div>
                  )}

                  <div className="flex-1" data-oid="mnzojff">
                    <h3
                      className="font-semibold text-gray-900"
                      data-oid="theig7f"
                    >
                      {item.title}
                    </h3>
                    {item.author && (
                      <span
                        className="text-xs text-gray-500 ml-2"
                        data-oid="5onqjn7"
                      >
                        by {item.author}
                      </span>
                    )}
                    <div
                      className="flex items-center gap-2 mt-1"
                      data-oid="6t42sxb"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                        data-oid="e8-s1lz"
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package
                              className="w-3 h-3 mr-1"
                              data-oid="q69kce."
                            />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download
                              className="w-3 h-3 mr-1"
                              data-oid="eyf.drx"
                            />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="fzev:8u"
                      >
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right" data-oid="gpgp:b5">
                    <p
                      className="font-semibold text-gray-900"
                      data-oid="904.81i"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="gd431q9">
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
              data-oid="va1vmyt"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="pahqw9a">
                <Package className="h-6 w-6 text-blue-600" data-oid="ujl_11x" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="e95a4h0"
                >
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                data-oid="oyj80ay"
              >
                <div className="flex items-start gap-3" data-oid="s0viqe4">
                  <MapPin
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    data-oid="e70.39z"
                  />

                  <div data-oid="7tu:hzb">
                    <h3
                      className="font-semibold text-blue-900 mb-1"
                      data-oid="ds9_v.:"
                    >
                      Shipping Address
                    </h3>
                    <p className="text-blue-800" data-oid="v2nss9q">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p
                      className="text-blue-700 text-sm mt-1"
                      data-oid="4nlw045"
                    >
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="y0-7c16"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="h8mu6b4"
                >
                  <div className="flex-1" data-oid="s9l:qc6">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="lcwh.ei"
                    >
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div
                        className="flex items-center gap-3"
                        data-oid="euwfcqk"
                      >
                        <p
                          className="text-gray-600 font-mono text-lg"
                          data-oid="h8jeswd"
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
                          data-oid="5pgkkxc"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="ddw77tq"
                          />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic" data-oid="r4kt_hm">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                data-oid="c.oi7vm"
              >
                <Clock className="h-4 w-4" data-oid="m:1kr4z" />
                <span data-oid="0bpgiyg">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid="jxyu5x6"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="1v6tsgx">
                <Download
                  className="h-6 w-6 text-green-600"
                  data-oid="8vyt5l6"
                />

                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="qf-c8tt"
                >
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                data-oid="4.9rzws"
              >
                <div className="flex items-start gap-3" data-oid=":vc693z">
                  <CheckCircle
                    className="h-5 w-5 text-green-600 mt-0.5"
                    data-oid="j_yyu88"
                  />

                  <div data-oid="z2je:93">
                    <h3
                      className="font-semibold text-green-900 mb-1"
                      data-oid="byfr_2o"
                    >
                      Courses Available Now
                    </h3>
                    <p className="text-green-800" data-oid="pmo135h">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-oid="-g__d8x"
              >
                <button
                  onClick={() => router.push("/profile/completed-courses")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="-5u1:60"
                >
                  <User className="h-4 w-4" data-oid="7o0nah6" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="_b0kq6h"
                >
                  <ArrowRight className="h-4 w-4" data-oid="9ix:qaw" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="135-s44"
          >
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="-048fg2"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="d953s5w"
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
              data-oid="39v2uxa"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center" data-oid="gip5oyi">
            <p className="text-sm text-gray-500" data-oid="wwp:gwi">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="v-ofo0e"
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid=":97wr16"
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
