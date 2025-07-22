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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"></div>
        </div>
      </>
    );
  }

  if (!orderDetails) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              We couldn't find your order details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
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
      <div className="min-h-screen bg-gray-50 py-8 pt-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-6" />

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {orderDetails.totalAmount === 0
                ? "Enrollment Complete!"
                : "Order Received!"}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {orderDetails.totalAmount === 0
                ? "Thank you for enrolling! You now have access to your selected courses."
                : "Thank you for your purchase. Your order has been successfully placed and confirmed."}
            </p>

            <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Order ID</h3>
                  <p className="text-gray-600 font-mono">
                    {orderDetails.orderId}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Order Date
                  </h3>
                  <p className="text-gray-600">
                    {formatDate(orderDetails.orderDate)}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Total Amount
                  </h3>
                  <p className="text-gray-600 font-semibold text-lg">
                    {orderDetails.totalAmount === 0
                      ? "Free"
                      : `$${orderDetails.totalAmount.toFixed(2)}`}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Customer</h3>
                  <p className="text-gray-600">
                    {orderDetails.customerInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Contact Details
                </h3>
                <div className="space-y-1 text-gray-600">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {orderDetails.customerInfo.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {orderDetails.customerInfo.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {orderDetails.customerInfo.phone}
                  </p>
                </div>
              </div>

              {orderDetails.hasBooks && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Delivery Address
                  </h3>
                  <p className="text-gray-600">
                    {orderDetails.customerInfo.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Details
            </h2>
            <div className="space-y-4">
              {orderDetails.items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  {item.image && (
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {item.author && (
                      <span className="text-xs text-gray-500 ml-2">
                        by {item.author}
                      </span>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "book" || item.type === "Book"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {item.type === "book" || item.type === "Book" ? (
                          <>
                            <Package className="w-3 h-3 mr-1" />
                            Physical Book
                          </>
                        ) : (
                          <>
                            <Download className="w-3 h-3 mr-1" />
                            Digital Course
                          </>
                        )}
                      </span>
                      <span className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Books Section - Tracking Information */}
          {bookItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Physical Books - Shipping Information
                </h2>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />

                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Shipping Address
                    </h3>
                    <p className="text-blue-800">
                      {orderDetails.customerInfo.address}
                    </p>
                    <p className="text-blue-700 text-sm mt-1">
                      Phone: {orderDetails.customerInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Tracking Number
                    </h3>
                    {orderDetails.trackingNumber ? (
                      <div className="flex items-center gap-3">
                        <p className="text-gray-600 font-mono text-lg">
                          {orderDetails.trackingNumber}
                        </p>
                        <button
                          onClick={() =>
                            router.push(
                              `/tracking?tracking=${orderDetails.trackingNumber}`,
                            )
                          }
                          className="bg-[#123b79] text-white px-4 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center gap-2 text-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Track Package
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">
                        Tracking number will be updated once the order is ready
                        to ship.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Estimated delivery: 3-5 business days</span>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {courseItems.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Download className="h-6 w-6 text-green-600" />

                <h2 className="text-xl font-bold text-gray-900">
                  Digital Courses - Ready to Access
                </h2>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />

                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">
                      Courses Available Now
                    </h3>
                    <p className="text-green-800">
                      Your digital courses are now available in your profile.
                      Start learning immediately!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/profile/learning-progress")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <User className="h-4 w-4" />
                  Go to My Courses
                </button>

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ArrowRight className="h-4 w-4" />
                  View Profile
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              View Order History
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Contact Support
            </button>

            <button
              onClick={() => router.push("/courses")}
              className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors whitespace-nowrap"
            >
              Continue Browsing Courses
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
              >
                Contact our support team
              </button>{" "}
              or check our{" "}
              <button
                onClick={() => router.push("/help")}
                className="text-[#123b79] hover:underline font-medium"
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
