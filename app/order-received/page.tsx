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
import Navbar from "@/app/components/navbar";

interface OrderItem {
  id: string;
  title: string;
  price: number;
  type: "course" | "book" | "Course" | "Book";
  quantity: number;
  image?: string;
  instructor?: string;
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
        <Navbar data-oid="zjp8c7m" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="ep:alsp"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="n4yh6lr"
          ></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <Navbar data-oid="ibfej:0" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="wjjizob"
        >
          <div className="text-center" data-oid="ybvxx4c">
            <CheckCircle
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              data-oid="..0w3.b"
            />

            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              data-oid="a5tczee"
            >
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="wvm5s:5">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid=":ek7oau"
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
      <Navbar data-oid="xp.bl0z" />
      <div className="min-h-screen bg-gray-50 py-8 pt-24" data-oid="sa21e.o">
        <div className="max-w-4xl mx-auto px-4" data-oid=":2jdt3o">
          {/* Header */}
          <div
            className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
            data-oid="3zcfrek"
          >
            <CheckCircle
              className="mx-auto h-16 w-16 text-green-600 mb-6"
              data-oid=":b-18r."
            />

            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="s6tz.rl"
            >
              Order Received!
            </h1>
            <p className="text-lg text-gray-600 mb-6" data-oid="7z0aq0_">
              Thank you for your purchase. Your order has been successfully
              placed and confirmed.
            </p>

            <div
              className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
              data-oid="v0djoz:"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                data-oid="ucghs2a"
              >
                <div data-oid="mgvta7m">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="7o8tfq5"
                  >
                    Order ID
                  </h3>
                  <p className="text-gray-600 font-mono" data-oid="rsfq5m2">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div data-oid="64d2oqt">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="m24gcg0"
                  >
                    Order Date
                  </h3>
                  <p className="text-gray-600" data-oid="x929v3e">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div data-oid="xxfguei">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="3o2.-jf"
                  >
                    Total Amount
                  </h3>
                  <p
                    className="text-gray-600 font-semibold text-lg"
                    data-oid="69yayvd"
                  >
                    ${orderDetails.totalAmount.toFixed(2)}
                  </p>
                </div>
                <div data-oid="kk5gugn">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="l6csnb5"
                  >
                    Customer
                  </h3>
                  <p className="text-gray-600" data-oid="i.5f07x">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="c0tqtb3"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="7_1vonp"
            >
              Customer Information
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-oid="i57-haz"
            >
              <div data-oid="9p-307u">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="knuysep"
                >
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600" data-oid="5dcu8x.">
                  <p data-oid="5pm80g1">
                    <span className="font-medium" data-oid="c7kg7o9">
                      Name:
                    </span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p data-oid=":4xfo3g">
                    <span className="font-medium" data-oid="k8s.1l0">
                      Email:
                    </span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p data-oid="tww90_m">
                    <span className="font-medium" data-oid="e0dxarg">
                      Phone:
                    </span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div data-oid="b200u9o">
                  <h3
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="nh9vvr."
                  >
                    Delivery Address
                  </h3>
                  <p className="text-gray-600" data-oid="3s18jrc">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="51b6u8w"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-oid="ju8q38l"
            >
              Order Details
            </h2>
            <div className="space-y-4" data-oid="c80fwt5">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  data-oid="-im-1gd"
                >
                  {item.image && (
                    <div
                      className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                      data-oid="lwb_:eo"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-oid="ev9hhep"
                      />
                    </div>
                  )}

                  <div className="flex-1" data-oid="e_3nfy7">
                    <h3
                      className="font-semibold text-gray-900"
                      data-oid="zp8j5n1"
                    >
                      {item.title}
                    </h3>
                    {item.instructor && (
                      <p className="text-sm text-gray-600" data-oid=".o-lb8q">
                        by {item.instructor}
                      </p>
                    )}
                    <div
                      className="flex items-center gap-2 mt-1"
                      data-oid="3o:z0v3"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                        data-oid="_gwoiid"
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package
                              className="w-3 h-3 mr-1"
                              data-oid="wd_bgv1"
                            />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download
                              className="w-3 h-3 mr-1"
                              data-oid="8dyij:c"
                            />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="-bh9dr0"
                      >
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right" data-oid="ycxd2m7">
                    <p
                      className="font-semibold text-gray-900"
                      data-oid="4pa12kz"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid="exnernx">
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
              data-oid="nho9n4s"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="5m0tkn8">
                <Package className="h-6 w-6 text-blue-600" data-oid="msbxak:" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="9l0-.cb"
                >
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                data-oid="p1ge_x6"
              >
                <div className="flex items-start gap-3" data-oid="h2d-i05">
                  <MapPin
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    data-oid="kbdjg2y"
                  />

                  <div data-oid="n9vpefv">
                    <h3
                      className="font-semibold text-blue-900 mb-1"
                      data-oid="oy4krra"
                    >
                      Shipping Address
                    </h3>
                    <p className="text-blue-800" data-oid="j149iy1">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p
                      className="text-blue-700 text-sm mt-1"
                      data-oid="0f-nhts"
                    >
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="xgxui6-"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="t3nbsa6"
                >
                  <div className="flex-1" data-oid="ydacnm.">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="gp1543i"
                    >
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div
                        className="flex items-center gap-3"
                        data-oid="_mxne-o"
                      >
                        <p
                          className="text-gray-600 font-mono text-lg"
                          data-oid="qyi77z1"
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
                          data-oid="iy..kj2"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="30cxr1v"
                          />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic" data-oid="kd9mtld">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                data-oid="x--ezl."
              >
                <Clock className="h-4 w-4" data-oid="q:nfo93" />
                <span data-oid="itrjttl">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid="lyb22sf"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="envgtrh">
                <Download
                  className="h-6 w-6 text-green-600"
                  data-oid="cgdinx7"
                />

                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="zr4vqjz"
                >
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                data-oid="2eb9ttu"
              >
                <div className="flex items-start gap-3" data-oid="97g_jmy">
                  <CheckCircle
                    className="h-5 w-5 text-green-600 mt-0.5"
                    data-oid="zvfz:ec"
                  />

                  <div data-oid="8xj9ioh">
                    <h3
                      className="font-semibold text-green-900 mb-1"
                      data-oid="n9pw:r3"
                    >
                      Courses Available Now
                    </h3>
                    <p className="text-green-800" data-oid="88ox.kp">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-oid="ddcwm2k"
              >
                <button
                  onClick={() => router.push("/profile/completed-courses")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="9rf4i:9"
                >
                  <User className="h-4 w-4" data-oid="pv-t73v" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="snbaze6"
                >
                  <ArrowRight className="h-4 w-4" data-oid="o1wahj:" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="7k6oe5e"
          >
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="_n38nvm"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="p8hzj7."
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
              data-oid="yuky43x"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center" data-oid=":wowfap">
            <p className="text-sm text-gray-500" data-oid="gm37qia">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="wg96jc5"
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="f82q31z"
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
