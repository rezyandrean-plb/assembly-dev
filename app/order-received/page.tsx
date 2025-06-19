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
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="ep:alsp"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
          data-oid="n4yh6lr"
        ></div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
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
    );
  }

  const formatPrice = (price: number) => {
    return `${price.toFixed(2)}`;
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
    <div className="min-h-screen bg-gray-50 py-8" data-oid="xhh9h7x">
      <div className="max-w-4xl mx-auto px-4" data-oid="1ojkk7u">
        {/* Header */}
        <div
          className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center"
          data-oid="io2t:b4"
        >
          <CheckCircle
            className="mx-auto h-16 w-16 text-green-600 mb-6"
            data-oid="bv:10hv"
          />

          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            data-oid="u8f6g6e"
          >
            Order Received!
          </h1>
          <p className="text-lg text-gray-600 mb-6" data-oid="ax6o.v1">
            Thank you for your purchase. Your order has been successfully placed
            and confirmed.
          </p>

          <div
            className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto"
            data-oid="r64kk-q"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
              data-oid="h2-2jp6"
            >
              <div data-oid="p5o6f9o">
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  data-oid="q110ag7"
                >
                  Order ID
                </h3>
                <p className="text-gray-600 font-mono" data-oid="6iddwod">
                  {orderDetails.orderId}
                </p>
              </div>
              <div data-oid="g.bg1.e">
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  data-oid="ckn:hiq"
                >
                  Order Date
                </h3>
                <p className="text-gray-600" data-oid="2g3tscc">
                  {formatDate(orderDetails.orderDate)}
                </p>
              </div>
              <div data-oid="p2wxo.p">
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  data-oid="a3le_ah"
                >
                  Total Amount
                </h3>
                <p
                  className="text-gray-600 font-semibold text-lg"
                  data-oid="8hiar9x"
                >
                  {formatPrice(orderDetails.totalAmount)}
                </p>
              </div>
              <div data-oid="uehkxpp">
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  data-oid="e:n4mq7"
                >
                  Customer
                </h3>
                <p className="text-gray-600" data-oid="jgryyw3">
                  {orderDetails.customerInfo.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
          data-oid="npop57a"
        >
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            data-oid="yn3_huu"
          >
            Order Details
          </h2>

          <div className="space-y-4" data-oid="qg6bo6y">
            {orderDetails.items.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                data-oid="b:9znke"
              >
                {item.image && (
                  <div
                    className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden"
                    data-oid="5bupf-b"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      data-oid="nsqp13w"
                    />
                  </div>
                )}

                <div className="flex-1" data-oid="avg9jjw">
                  <h3
                    className="font-semibold text-gray-900"
                    data-oid="_tmbjxu"
                  >
                    {item.title}
                  </h3>
                  {item.instructor && (
                    <p className="text-sm text-gray-600" data-oid="-kf62ob">
                      by {item.instructor}
                    </p>
                  )}
                  <div
                    className="flex items-center gap-2 mt-1"
                    data-oid="0b3iy3m"
                  >
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === "book" || item.type === "Book"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                      data-oid="cf3r610"
                    >
                      {item.type === "book" || item.type === "Book" ? (
                        <>
                          <Package
                            className="w-3 h-3 mr-1"
                            data-oid="tyfddri"
                          />
                          Physical Book
                        </>
                      ) : (
                        <>
                          <Download
                            className="w-3 h-3 mr-1"
                            data-oid="nso:.n9"
                          />
                          Digital Course
                        </>
                      )}
                    </span>
                    <span className="text-sm text-gray-500" data-oid="z085ih7">
                      Qty: {item.quantity}
                    </span>
                  </div>
                </div>

                <div className="text-right" data-oid="m0dl9aq">
                  <p className="font-semibold text-gray-900" data-oid="r7jnqw_">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <p className="text-sm text-gray-500" data-oid="_pfhk0q">
                    {formatPrice(item.price)} each
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
            data-oid="6sdo4b1"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="vr7hb8u">
              <Package className="h-6 w-6 text-blue-600" data-oid="hc3q5hc" />
              <h2
                className="text-xl font-bold text-gray-900"
                data-oid="w28dfer"
              >
                Physical Books - Shipping Information
              </h2>
            </div>

            <div
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
              data-oid="q2ha0i:"
            >
              <div className="flex items-start gap-3" data-oid=":5cv02h">
                <MapPin
                  className="h-5 w-5 text-blue-600 mt-0.5"
                  data-oid="oo1csfo"
                />

                <div data-oid="dzsrq9a">
                  <h3
                    className="font-semibold text-blue-900 mb-1"
                    data-oid=":co5a-j"
                  >
                    Shipping Address
                  </h3>
                  <p className="text-blue-800" data-oid="w3m9icu">
                    {orderDetails.customerInfo.address}
                  </p>
                  <p className="text-blue-700 text-sm mt-1" data-oid=":m3cx2w">
                    Phone: {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            {orderDetails.trackingNumber && (
              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
                data-oid="k0l:lft"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="r1bde.8"
                >
                  <div data-oid="k5iw7s9">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="ruhkt22"
                    >
                      Tracking Number
                    </h3>
                    <p
                      className="text-gray-600 font-mono text-lg"
                      data-oid="jq88g7_"
                    >
                      {orderDetails.trackingNumber}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      router.push(
                        `/tracking?tracking=${orderDetails.trackingNumber}`,
                      )
                    }
                    className="bg-[#123b79] text-white px-4 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center gap-2"
                    data-oid="wdj_ont"
                  >
                    <ExternalLink className="h-4 w-4" data-oid="tta9jm4" />
                    Track Package
                  </button>
                </div>
              </div>
            )}

            <div
              className="flex items-center gap-2 text-sm text-gray-600"
              data-oid="eqr2jrt"
            >
              <Clock className="h-4 w-4" data-oid="cq1ne8p" />
              <span data-oid="4s8ukjo">
                Estimated delivery: 3-5 business days
              </span>
            </div>
          </div>
        )}

        {/* Courses Section */}
        {courseItems.length > 0 && (
          <div
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            data-oid=".zb107b"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="j91xjgb">
              <Download className="h-6 w-6 text-green-600" data-oid="swm:y4z" />
              <h2
                className="text-xl font-bold text-gray-900"
                data-oid=".4z.7jo"
              >
                Digital Courses - Ready to Access
              </h2>
            </div>

            <div
              className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
              data-oid="ssy3gr0"
            >
              <div className="flex items-start gap-3" data-oid="_g7fxk_">
                <CheckCircle
                  className="h-5 w-5 text-green-600 mt-0.5"
                  data-oid="q1x5kls"
                />

                <div data-oid="1wsv2si">
                  <h3
                    className="font-semibold text-green-900 mb-1"
                    data-oid="vi.in_d"
                  >
                    Courses Available Now
                  </h3>
                  <p className="text-green-800" data-oid="d40romk">
                    Your digital courses are now available in your profile.
                    Start learning immediately!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3" data-oid="dl8e_40">
              <button
                onClick={() => router.push("/profile/completed-courses")}
                className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2"
                data-oid="g:-kuia"
              >
                <User className="h-4 w-4" data-oid="707mxaw" />
                Go to My Courses
              </button>

              <button
                onClick={() => router.push("/profile")}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                data-oid="_m2:w5q"
              >
                <ArrowRight className="h-4 w-4" data-oid="7o:_je9" />
                View Profile
              </button>
            </div>
          </div>
        )}

        {/* Customer Information */}
        <div
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
          data-oid="tzey897"
        >
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            data-oid="tufr8t."
          >
            Customer Information
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="z..1lg9"
          >
            <div data-oid="_uxutlm">
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="wfw:-p0"
              >
                Contact Details
              </h3>
              <div className="space-y-1 text-gray-600" data-oid="18hjyhe">
                <p data-oid="hscteef">
                  <span className="font-medium" data-oid="3wi3oh2">
                    Name:
                  </span>{" "}
                  {orderDetails.customerInfo.name}
                </p>
                <p data-oid="qt30i:j">
                  <span className="font-medium" data-oid="kwgd5wt">
                    Email:
                  </span>{" "}
                  {orderDetails.customerInfo.email}
                </p>
                <p data-oid="bz5gxgr">
                  <span className="font-medium" data-oid="hometzt">
                    Phone:
                  </span>{" "}
                  {orderDetails.customerInfo.phone}
                </p>
              </div>
            </div>

            {orderDetails.hasBooks && (
              <div data-oid="n5cd2lv">
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  data-oid="dx_1egw"
                >
                  Delivery Address
                </h3>
                <p className="text-gray-600" data-oid="rkppv0l">
                  {orderDetails.customerInfo.address}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-oid="b5_kd52"
        >
          <button
            onClick={() => router.push("/profile/purchase-history")}
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            data-oid="ryajvn2"
          >
            View Order History
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            data-oid="ozke33w"
          >
            Contact Support
          </button>

          <button
            onClick={() => router.push("/")}
            className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors"
            data-oid="9zmuwms"
          >
            Continue Browin{" "}
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center" data-oid="t:ejvfn">
          <p className="text-sm text-gray-500" data-oid=".:l_c6t">
            Questions about your order?{" "}
            <button
              onClick={() => router.push("/contact")}
              className="text-[#123b79] hover:underline font-medium"
              data-oid="es-210i"
            >
              Contact our support team
            </button>{" "}
            or check our{" "}
            <button
              onClick={() => router.push("/help")}
              className="text-[#123b79] hover:underline font-medium"
              data-oid="ejk:.yx"
            >
              help center
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
