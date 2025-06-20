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
        <Navbar data-oid="_:ew:hv" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="csdtc.s"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
            data-oid="3ao6.xd"
          ></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <Navbar data-oid="bhaq65g" />
        <div
          className="min-h-screen bg-gray-50 flex items-center justify-center pt-20"
          data-oid="1sbbypr"
        >
          <div className="text-center" data-oid="pe-3m7l">
            <CheckCircle
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              data-oid="p3pvaur"
            />

            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              data-oid="ii2zv1_"
            >
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="4vfytbk">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid="v855xzr"
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
      <Navbar data-oid="p-nmd9j" />
      <div className="min-h-screen bg-gray-50 py-8 pt-24" data-oid="e:jklf4">
        <div className="max-w-4xl mx-auto px-4" data-oid="x3d1ysb">
          {/* Header */}
          <div
            className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
            data-oid="_kbb7u1"
          >
            <CheckCircle
              className="mx-auto h-16 w-16 text-green-600 mb-6"
              data-oid="un3jtfl"
            />

            <h1
              className="text-3xl font-bold text-gray-900 mb-2"
              data-oid="qjki30a"
            >
              Order Received!
            </h1>
            <p className="text-lg text-gray-600 mb-6" data-oid="5psg9pl">
              Thank you for your purchase. Your order has been successfully
              placed and confirmed.
            </p>

            <div
              className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
              data-oid="2z.i9jw"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
                data-oid="m3qtp.n"
              >
                <div data-oid="ekgpet:">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="tt4lwfa"
                  >
                    Order ID
                  </h3>
                  <p className="text-gray-600 font-mono" data-oid="dj3dv_v">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div data-oid="9-qgb4y">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="v8tb:x1"
                  >
                    Order Date
                  </h3>
                  <p className="text-gray-600" data-oid="_.5o2.3">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div data-oid="hk0t9en">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="u-5k8r:"
                  >
                    Total Amount
                  </h3>
                  <p
                    className="text-gray-600 font-semibold text-lg"
                    data-oid="moz5:e0"
                  >
                    ${orderDetails.totalAmount.toFixed(2)}
                  </p>
                </div>
                <div data-oid="xzv7wv5">
                  <h3
                    className="font-semibold text-gray-900 mb-1"
                    data-oid="gm.q3yd"
                  >
                    Customer
                  </h3>
                  <p className="text-gray-600" data-oid="c4_v_ro">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="usvai9u"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="muo4_hx"
            >
              Customer Information
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-oid="ta4c8ww"
            >
              <div data-oid="v0e-43a">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="5li:9mj"
                >
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600" data-oid="uzwnbqg">
                  <p data-oid="io8szgk">
                    <span className="font-medium" data-oid="2c:hl.8">
                      Name:
                    </span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p data-oid=".s.ytay">
                    <span className="font-medium" data-oid="jt8ib6u">
                      Email:
                    </span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p data-oid="rjhethf">
                    <span className="font-medium" data-oid="sd53sdm">
                      Phone:
                    </span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div data-oid="0v5:0s-">
                  <h3
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="munxvw9"
                  >
                    Delivery Address
                  </h3>
                  <p className="text-gray-600" data-oid="7v:.m5_">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid="r3_kdm5"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-oid="lpt:2q."
            >
              Order Details
            </h2>
            <div className="space-y-4" data-oid="a2lbt68">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  data-oid="pq3ln:i"
                >
                  {item.image && (
                    <div
                      className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                      data-oid="0cv5lom"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-oid="g5v63__"
                      />
                    </div>
                  )}

                  <div className="flex-1" data-oid="yh_5::y">
                    <h3
                      className="font-semibold text-gray-900"
                      data-oid="q6d37q7"
                    >
                      {item.title}
                    </h3>
                    {item.author && (
                      <span
                        className="text-xs text-gray-500 ml-2"
                        data-oid="j.d0nu5"
                      >
                        by {item.author}
                      </span>
                    )}
                    <div
                      className="flex items-center gap-2 mt-1"
                      data-oid="0vpe48e"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                        data-oid="pg1rmgc"
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package
                              className="w-3 h-3 mr-1"
                              data-oid="t6zefxn"
                            />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download
                              className="w-3 h-3 mr-1"
                              data-oid="q9qbp.i"
                            />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="ynu_yh5"
                      >
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right" data-oid=".1mxd5d">
                    <p
                      className="font-semibold text-gray-900"
                      data-oid="b_sa_e9"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500" data-oid=".o0m48j">
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
              data-oid="vm33f03"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="n35gr9_">
                <Package className="h-6 w-6 text-blue-600" data-oid="zxy0hp0" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="jfmtnb-"
                >
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                data-oid=".cuknym"
              >
                <div className="flex items-start gap-3" data-oid="4dr7bwy">
                  <MapPin
                    className="h-5 w-5 text-blue-600 mt-0.5"
                    data-oid="3yjccqp"
                  />

                  <div data-oid="7gqbjp1">
                    <h3
                      className="font-semibold text-blue-900 mb-1"
                      data-oid="yyugep:"
                    >
                      Shipping Address
                    </h3>
                    <p className="text-blue-800" data-oid="3475xm1">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p
                      className="text-blue-700 text-sm mt-1"
                      data-oid="hcy32md"
                    >
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="0-gbu2o"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="l8yc633"
                >
                  <div className="flex-1" data-oid="7b5-dfx">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="h2_16no"
                    >
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div
                        className="flex items-center gap-3"
                        data-oid="7z0xort"
                      >
                        <p
                          className="text-gray-600 font-mono text-lg"
                          data-oid="1v9o:9n"
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
                          data-oid="2:ov9l_"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="k-1ysha"
                          />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic" data-oid="62f1_2q">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                data-oid="pf44u6w"
              >
                <Clock className="h-4 w-4" data-oid="2176u8j" />
                <span data-oid="m3-z1t-">
                  Estimated delivery: 3-5 business days
                </span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              data-oid="j:9l-nc"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="y52n.xk">
                <Download
                  className="h-6 w-6 text-green-600"
                  data-oid="qo15blw"
                />

                <h2
                  className="text-xl font-bold text-gray-900"
                  data-oid="7k-qpv4"
                >
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                data-oid="pyktr.4"
              >
                <div className="flex items-start gap-3" data-oid="ewe-e::">
                  <CheckCircle
                    className="h-5 w-5 text-green-600 mt-0.5"
                    data-oid="05..vzy"
                  />

                  <div data-oid="y48zob7">
                    <h3
                      className="font-semibold text-green-900 mb-1"
                      data-oid="oq4naz-"
                    >
                      Courses Available Now
                    </h3>
                    <p className="text-green-800" data-oid="aky8r-o">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-oid=".d8uj7b"
              >
                <button
                  onClick={() => router.push("/profile/completed-courses")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="v55713n"
                >
                  <User className="h-4 w-4" data-oid="42crvlo" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  data-oid="fogrhiq"
                >
                  <ArrowRight className="h-4 w-4" data-oid="q:4_0df" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="uufq1e:"
          >
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="fmw26:d"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              data-oid="0bzgx3f"
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
              data-oid="zldl057"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center" data-oid="t61r0b3">
            <p className="text-sm text-gray-500" data-oid="8ti77df">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="a0uv6rb"
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="yzb4sdh"
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
