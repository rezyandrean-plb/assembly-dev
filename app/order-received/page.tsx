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
        <Navbar data-oid="u92kh76" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="v7sq1d."
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid=":14ildn"
          ></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <Navbar data-oid="iipnjx0" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="j3d8-5g"
        >
          <div className="text-center" data-oid="th_snux">
            <CheckCircle
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              data-oid="l29ev1:"
            />

            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              data-oid="m4628hc"
            >
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="fii8nj4">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid="m5mcqci"
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
      <Navbar data-oid="9q_oofj" />
      <div className="min-h-screen bg-gray-50 py-8 pt-24" data-oid="yovp7d9">
        <div className="max-w-4xl mx-auto px-4" data-oid="-sipjdx">
          {/* Header */}
          <div
            className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
            data-oid="7sjxc._"
          >
            <CheckCircle
              className="mx-auto h-16 w-16 text-green-600 mb-6"
              data-oid="_giafll"
            />

            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="gp296ar"
            >
              Order Received!
            </h1>
            <p className="text-lg text-gray-600 mb-6" data-oid="90jydtn">
              Thank you for your purchase. Your order has been successfully
              placed and confirmed.
            </p>

            <div
              className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
              data-oid="klyhyml"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                data-oid="hcfar2n"
              >
                <div data-oid="7di3u.n">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="0jrtyf."
                  >
                    Order ID
                  </h3>
                  <p className="text-gray-600 font-mono" data-oid="7gwu:2w">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div data-oid="k9_sq5l">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="os1fiuj"
                  >
                    Order Date
                  </h3>
                  <p className="text-gray-600" data-oid="-nk826n">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div data-oid="9c-90.q">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="8-bsb18"
                  >
                    Total Amount
                  </h3>
                  <p
                    className="text-gray-600 font-semibold text-lg"
                    data-oid="owqxn.z"
                  >
                    ${orderDetails.totalAmount.toFixed(2)}
                  </p>
                </div>
                <div data-oid="tre8.7c">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="cfoqen3"
                  >
                    Customer
                  </h3>
                  <p className="text-gray-600" data-oid="melyyxn">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="rbg6z:1"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="f21lx7w"
            >
              Customer Information
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-oid=":1t5zpm"
            >
              <div data-oid="zbbikh6">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="skomb2t"
                >
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600" data-oid="unbxufs">
                  <p data-oid="c02q_to">
                    <span className="font-medium" data-oid="9dn8ben">
                      Name:
                    </span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p data-oid="v:lfn:.">
                    <span className="font-medium" data-oid="fcxq9d0">
                      Email:
                    </span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p data-oid="td_pg8-">
                    <span className="font-medium" data-oid="hnmgtus">
                      Phone:
                    </span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div data-oid="mc_-oiz">
                  <h3
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="w:rol2q"
                  >
                    Delivery Address
                  </h3>
                  <p className="text-gray-600" data-oid="3xd5u_.">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="1aqax_t"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-oid="juppn29"
            >
              Order Details
            </h2>
            <div className="space-y-4" data-oid=":p7eh04">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  data-oid="rnga55x"
                >
                  {item.image && (
                    <div
                      className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                      data-oid="q2dk3a9"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-oid="78ukjd4"
                      />
                    </div>
                  )}

                  <div className="flex-1" data-oid="esd8xw3">
                    <h3
                      className="font-semibold text-gray-900"
                      data-oid="8lt0ymu"
                    >
                      {item.title}
                    </h3>
                    {item.author && (
                      <span
                        className="text-xs text-gray-500 ml-2"
                        data-oid="xli.lg-"
                      >
                        by {item.author}
                      </span>
                    )}
                    <div
                      className="flex items-center gap-2 mt-1"
                      data-oid="etr8212"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                        data-oid="1imd2z8"
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package
                              className="w-3 h-3 mr-1"
                              data-oid="j1gk:3i"
                            />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download
                              className="w-3 h-3 mr-1"
                              data-oid="f3s:a09"
                            />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="ecrtbcc"
                      >
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right" data-oid="t4fapz-">
                    <p
                      className="font-semibold text-gray-900"
                      data-oid="hgo03_5"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="z9fcobh">
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
              data-oid="0wvg03t"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="anpiclw">
                <Package className="h-6 w-6 text-blue-600" data-oid="y3d:nue" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="ekcn1mw"
                >
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                data-oid="dg2ubt."
              >
                <div className="flex items-start gap-3" data-oid="ty7e7hz">
                  <MapPin
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    data-oid="nh8_ejq"
                  />

                  <div data-oid="2ya6lhk">
                    <h3
                      className="font-semibold text-blue-900 mb-1"
                      data-oid="m05v48_"
                    >
                      Shipping Address
                    </h3>
                    <p className="text-blue-800" data-oid="20nrvvt">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p
                      className="text-blue-700 text-sm mt-1"
                      data-oid="uj-sy.x"
                    >
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="ol.rvcu"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="3kbrgc0"
                >
                  <div className="flex-1" data-oid="yeibdxr">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="v98z:dk"
                    >
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div
                        className="flex items-center gap-3"
                        data-oid="_03vfnl"
                      >
                        <p
                          className="text-gray-600 font-mono text-lg"
                          data-oid="x8crqsm"
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
                          data-oid="exunbnk"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="mnlug14"
                          />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic" data-oid="x3.050a">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                data-oid="xuvtt7g"
              >
                <Clock className="h-4 w-4" data-oid="hf_ns91" />
                <span data-oid="dr13.u3">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid=".y745:e"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="h4q:daw">
                <Download
                  className="h-6 w-6 text-green-600"
                  data-oid="qrv6nxi"
                />

                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="3oms441"
                >
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                data-oid="1jy7zf4"
              >
                <div className="flex items-start gap-3" data-oid="cd1_f2r">
                  <CheckCircle
                    className="h-5 w-5 text-green-600 mt-0.5"
                    data-oid="m.rrgkd"
                  />

                  <div data-oid="yem.sd7">
                    <h3
                      className="font-semibold text-green-900 mb-1"
                      data-oid="vinnw7x"
                    >
                      Courses Available Now
                    </h3>
                    <p className="text-green-800" data-oid="70_s-eg">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-oid="0x8n4l."
              >
                <button
                  onClick={() => router.push("/profile/completed-courses")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="7lw7xv2"
                >
                  <User className="h-4 w-4" data-oid="fjqb0kw" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="6ms_rb1"
                >
                  <ArrowRight className="h-4 w-4" data-oid="tb9wyp1" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="di.2tyn"
          >
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="4ze_4c6"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="zmw2hry"
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
              data-oid="_8f29sj"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center" data-oid="hnalzj4">
            <p className="text-sm text-gray-500" data-oid="ea3:4uj">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="jw08d2."
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="rh5mm_:"
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
