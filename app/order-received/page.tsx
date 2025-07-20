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
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="-nli4_h"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="k:.mq5b"
          ></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="3gk6e-m"
        >
          <div className="text-center" data-oid="22xx6x.">
            <CheckCircle
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              data-oid="d09tyt:"
            />

            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              data-oid="7mpjmqp"
            >
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="fhbavs_">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid="1tgrugv"
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
      <div className="min-h-screen bg-gray-50 py-8 pt-24" data-oid="_di9rxm">
        <div className="max-w-4xl mx-auto px-4" data-oid="7px0my_">
          {/* Header */}
          <div
            className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
            data-oid=".1zc1:p"
          >
            <CheckCircle
              className="mx-auto h-16 w-16 text-green-600 mb-6"
              data-oid="h28pgiq"
            />

            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="2by98qu"
            >
              {orderDetails.totalAmount === 0
                ? "Enrollment Complete!"
                : "Order Received!"}
            </h1>
            <p className="text-lg text-gray-600 mb-6" data-oid="3gcyens">
              {orderDetails.totalAmount === 0
                ? "Thank you for enrolling! You now have access to your selected courses."
                : "Thank you for your purchase. Your order has been successfully placed and confirmed."}
            </p>

            <div
              className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
              data-oid="v13np4m"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                data-oid="-zfx_ec"
              >
                <div data-oid="6zhsbu3">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="7qp0:q:"
                  >
                    Order ID
                  </h3>
                  <p className="text-gray-600 font-mono" data-oid="w-3_tap">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div data-oid="bp2dv4q">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="xdw30va"
                  >
                    Order Date
                  </h3>
                  <p className="text-gray-600" data-oid="aduvgyt">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div data-oid="l459r2h">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="cnnmqs9"
                  >
                    Total Amount
                  </h3>
                  <p
                    className="text-gray-600 font-semibold text-lg"
                    data-oid="y:tknsc"
                  >
                    {orderDetails.totalAmount === 0
                      ? "Free"
                      : `$${orderDetails.totalAmount.toFixed(2)}`}
                  </p>
                </div>
                <div data-oid="yvtpv2i">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="j4:f9ng"
                  >
                    Customer
                  </h3>
                  <p className="text-gray-600" data-oid="xi696yx">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid=".:q.6ve"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="n6mvz_4"
            >
              Customer Information
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-oid="jdlyunq"
            >
              <div data-oid="6:s.kbk">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="ii5r3gs"
                >
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600" data-oid="-k4z005">
                  <p data-oid="as4aa5_">
                    <span className="font-medium" data-oid="oww-fhn">
                      Name:
                    </span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p data-oid="55ulaka">
                    <span className="font-medium" data-oid="2ivnoou">
                      Email:
                    </span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p data-oid="3n7i972">
                    <span className="font-medium" data-oid="fbjvrm5">
                      Phone:
                    </span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div data-oid="1..crja">
                  <h3
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="tp65_fy"
                  >
                    Delivery Address
                  </h3>
                  <p className="text-gray-600" data-oid="c8.hhmr">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="p3a06be"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-oid=":i4z54u"
            >
              Order Details
            </h2>
            <div className="space-y-4" data-oid="5jv-udo">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  data-oid="ov_53s2"
                >
                  {item.image && (
                    <div
                      className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                      data-oid=":_26n63"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-oid="wv5ytd6"
                      />
                    </div>
                  )}

                  <div className="flex-1" data-oid="7ap7e7m">
                    <h3
                      className="font-semibold text-gray-900"
                      data-oid="3qrizo7"
                    >
                      {item.title}
                    </h3>
                    {item.author && (
                      <span
                        className="text-xs text-gray-500 ml-2"
                        data-oid="iiinjti"
                      >
                        by {item.author}
                      </span>
                    )}
                    <div
                      className="flex items-center gap-2 mt-1"
                      data-oid="q0rxhlm"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                        data-oid="widrw10"
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package
                              className="w-3 h-3 mr-1"
                              data-oid="s3kum1o"
                            />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download
                              className="w-3 h-3 mr-1"
                              data-oid="crvy8vi"
                            />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="7w-f5ms"
                      >
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right" data-oid="d255u0m">
                    <p
                      className="font-semibold text-gray-900"
                      data-oid="d.njcxp"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="4verl1h">
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
              data-oid="lp711s2"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="lxwfwju">
                <Package className="h-6 w-6 text-blue-600" data-oid="5ic-afx" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="r1rd2wt"
                >
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                data-oid="0hbv.4u"
              >
                <div className="flex items-start gap-3" data-oid="502nbuy">
                  <MapPin
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    data-oid="dlsk9og"
                  />

                  <div data-oid="2nw7b8x">
                    <h3
                      className="font-semibold text-blue-900 mb-1"
                      data-oid="4xlg-t5"
                    >
                      Shipping Address
                    </h3>
                    <p className="text-blue-800" data-oid="mti5g26">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p
                      className="text-blue-700 text-sm mt-1"
                      data-oid="ndvzwa0"
                    >
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="r8f6l17"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="ehnjsuw"
                >
                  <div className="flex-1" data-oid="ookgh2b">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="d-mnpop"
                    >
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div
                        className="flex items-center gap-3"
                        data-oid="sxs0hlc"
                      >
                        <p
                          className="text-gray-600 font-mono text-lg"
                          data-oid="b7et.mw"
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
                          data-oid="::x.4pn"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid=":zfzii8"
                          />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic" data-oid="g1tr.k3">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                data-oid="36smbpb"
              >
                <Clock className="h-4 w-4" data-oid="bd71h-5" />
                <span data-oid="tc2yzx9">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid="5.5fw:9"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="u95-lm6">
                <Download
                  className="h-6 w-6 text-green-600"
                  data-oid="wf-y2ni"
                />

                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="bjmbrsm"
                >
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                data-oid="s7kg49o"
              >
                <div className="flex items-start gap-3" data-oid="8r8rew2">
                  <CheckCircle
                    className="h-5 w-5 text-green-600 mt-0.5"
                    data-oid="g_kist7"
                  />

                  <div data-oid="7uyxf4f">
                    <h3
                      className="font-semibold text-green-900 mb-1"
                      data-oid="dhoxiwr"
                    >
                      Courses Available Now
                    </h3>
                    <p className="text-green-800" data-oid="ft:3stt">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-oid="knvpoil"
              >
                <button
                  onClick={() => router.push("/profile/learning-progress")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="g-r3f5p"
                >
                  <User className="h-4 w-4" data-oid="u4v1c-3" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="2crmaeg"
                >
                  <ArrowRight className="h-4 w-4" data-oid="io9buh9" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="91e_hac"
          >
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="wf:o6gj"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid=":g6_rt0"
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
              data-oid="idxm8w:"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center" data-oid="9ms28cf">
            <p className="text-sm text-gray-500" data-oid="n4dz6xy">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="4pbtns4"
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="_2ujryz"
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
