"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTracking } from "@/context/tracking-context";
import {
  Package,
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  Circle,
} from "lucide-react";

export default function TrackingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { trackingInfo } = useTracking();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If no tracking info and no tracking number in URL, redirect to home
    const trackingNumber = searchParams.get("tracking");
    if (!trackingInfo && !trackingNumber) {
      router.push("/");
      return;
    }
    setIsLoading(false);
  }, [trackingInfo, searchParams, router]);

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="z11dp17"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
          data-oid="dr5pcye"
        ></div>
      </div>
    );
  }

  if (!trackingInfo) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="8ylgbbq"
      >
        <div className="text-center" data-oid="tptnh:v">
          <Package
            className="mx-auto h-16 w-16 text-gray-400 mb-4"
            data-oid="9cykvy8"
          />

          <h1
            className="text-2xl font-bold text-gray-900 mb-2"
            data-oid="q-cio8h"
          >
            Tracking Information Not Found
          </h1>
          <p className="text-gray-600 mb-6" data-oid="n9-a4s1">
            We couldn't find tracking information for this order.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
            data-oid="e0-vpda"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "text-green-600";
      case "out for delivery":
      case "in transit":
        return "text-blue-600";
      case "shipped":
        return "text-orange-600";
      case "processing":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return (
          <CheckCircle className="h-5 w-5 text-green-600" data-oid="dk6umqi" />
        );

      case "out for delivery":
        return <Truck className="h-5 w-5 text-blue-600" data-oid="5sqz02t" />;
      case "in transit":
        return <MapPin className="h-5 w-5 text-blue-600" data-oid="51htjrt" />;
      case "shipped":
        return (
          <Package className="h-5 w-5 text-orange-600" data-oid="lrhq3gj" />
        );

      default:
        return <Clock className="h-5 w-5 text-gray-600" data-oid="amzt3g_" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8" data-oid="4u9d81x">
      <div className="max-w-4xl mx-auto px-4" data-oid="hejwv__">
        {/* Header */}
        <div
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
          data-oid="9s9tymt"
        >
          <div
            className="flex items-center justify-between mb-4"
            data-oid="082_4q-"
          >
            <h1 className="text-3xl font-bold text-gray-900" data-oid="6t30im8">
              Track Your Order
            </h1>
            <button
              onClick={() => router.push("/")}
              className="text-[#123b79] hover:underline font-medium"
              data-oid="uzh3enr"
            >
              ← Back to Home
            </button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="lkrdkp."
          >
            <div data-oid="edyn3el">
              <h3
                className="text-sm font-medium text-gray-500 mb-1"
                data-oid="ay4vk9-"
              >
                Tracking Number
              </h3>
              <p
                className="text-lg font-semibold text-gray-900"
                data-oid="cc9cubq"
              >
                {trackingInfo.trackingNumber}
              </p>
            </div>
            <div data-oid="t09n.gq">
              <h3
                className="text-sm font-medium text-gray-500 mb-1"
                data-oid="s4jr_lk"
              >
                Order ID
              </h3>
              <p
                className="text-lg font-semibold text-gray-900"
                data-oid="exqn3yi"
              >
                {trackingInfo.orderId}
              </p>
            </div>
            <div data-oid="rud0oni">
              <h3
                className="text-sm font-medium text-gray-500 mb-1"
                data-oid=".raymq:"
              >
                Carrier
              </h3>
              <p
                className="text-lg font-semibold text-gray-900"
                data-oid="mt::it8"
              >
                {trackingInfo.carrier}
              </p>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
          data-oid="qol05ig"
        >
          <div className="flex items-center gap-4 mb-4" data-oid="nyjxu0t">
            {getStatusIcon(trackingInfo.status)}
            <div data-oid="wvkw:2p">
              <h2
                className="text-xl font-semibold text-gray-900"
                data-oid="408j_l9"
              >
                Current Status:{" "}
                <span
                  className={getStatusColor(trackingInfo.status)}
                  data-oid="..dbpl9"
                >
                  {trackingInfo.status}
                </span>
              </h2>
              <p className="text-gray-600" data-oid="rrti8g:">
                Estimated delivery:{" "}
                {trackingInfo.estimatedDelivery.toLocaleDateString("en-SG", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative" data-oid=".jf3a7u">
            <div
              className="flex items-center justify-between mb-2"
              data-oid="l8xcn1v"
            >
              <span
                className="text-sm font-medium text-gray-500"
                data-oid="dt.a_xs"
              >
                Order Progress
              </span>
              <span
                className="text-sm font-medium text-gray-500"
                data-oid="v7uhy9v"
              >
                {Math.round(
                  (trackingInfo.events.filter((e) => e.isCompleted).length /
                    trackingInfo.events.length) *
                    100,
                )}
                % Complete
              </span>
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-2"
              data-oid="k5s4u_k"
            >
              <div
                className="bg-[#123b79] h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(trackingInfo.events.filter((e) => e.isCompleted).length / trackingInfo.events.length) * 100}%`,
                }}
                data-oid="sdki8vb"
              ></div>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div
          className="bg-white rounded-lg shadow-sm p-6 mb-6"
          data-oid="-fx7j40"
        >
          <h3
            className="text-lg font-semibold text-gray-900 mb-4"
            data-oid="tkvbl4k"
          >
            Delivery Information
          </h3>
          <div className="space-y-2" data-oid="i:wde48">
            <p data-oid="85u02nn">
              <span className="font-medium" data-oid="ddtd3od">
                Recipient:
              </span>{" "}
              {trackingInfo.recipientInfo.name}
            </p>
            <p data-oid="jpflgfm">
              <span className="font-medium" data-oid="xa6wfr1">
                Address:
              </span>{" "}
              {trackingInfo.recipientInfo.address}
            </p>
            <p data-oid="0j6.u97">
              <span className="font-medium" data-oid="vl..f42">
                Phone:
              </span>{" "}
              {trackingInfo.recipientInfo.phone}
            </p>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6" data-oid="2g10011">
          <h3
            className="text-lg font-semibold text-gray-900 mb-6"
            data-oid="he5g720"
          >
            Tracking Timeline
          </h3>

          <div className="space-y-6" data-oid="vzx6l23">
            {trackingInfo.events.map((event, index) => (
              <div key={event.id} className="flex gap-4" data-oid="f_ghx3l">
                <div className="flex flex-col items-center" data-oid="x1whugo">
                  {event.isCompleted ? (
                    <CheckCircle
                      className="h-6 w-6 text-green-600"
                      data-oid="a5n3twz"
                    />
                  ) : (
                    <Circle
                      className="h-6 w-6 text-gray-300"
                      data-oid="z0_nd1o"
                    />
                  )}
                  {index < trackingInfo.events.length - 1 && (
                    <div
                      className={`w-0.5 h-12 mt-2 ${event.isCompleted ? "bg-green-600" : "bg-gray-200"}`}
                      data-oid=".q8..pj"
                    ></div>
                  )}
                </div>

                <div className="flex-1 pb-8" data-oid="e.63x6o">
                  <div
                    className="flex items-center justify-between mb-1"
                    data-oid="ls6xg3b"
                  >
                    <h4
                      className={`font-semibold ${event.isCompleted ? "text-gray-900" : "text-gray-400"}`}
                      data-oid="c8h.w58"
                    >
                      {event.status}
                    </h4>
                    <span
                      className={`text-sm ${event.isCompleted ? "text-gray-600" : "text-gray-400"}`}
                      data-oid="luq2ztt"
                    >
                      {event.timestamp.toLocaleDateString("en-SG")}{" "}
                      {event.timestamp.toLocaleTimeString("en-SG", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${event.isCompleted ? "text-gray-600" : "text-gray-400"}`}
                    data-oid="7lzg.o_"
                  >
                    {event.description}
                  </p>
                  <p
                    className={`text-xs mt-1 ${event.isCompleted ? "text-gray-500" : "text-gray-300"}`}
                    data-oid="noznpzq"
                  >
                    📍 {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center" data-oid="9gvwrwn">
          <h3 className="text-lg font-semibold mb-2" data-oid="iam:tnk">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4" data-oid="s98u8jt">
            If you have any questions about your order or delivery, please don't
            hesitate to contact us.
          </p>
          <div className="flex justify-center gap-4" data-oid="l56frbg">
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#123b79] text-white px-6 py-2 rounded-lg hover:bg-[#0f2d5c] transition-colors"
              data-oid="ozf-kov"
            >
              Contact Support
            </button>
            <button
              onClick={() => router.push("/profile/purchase-history")}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              data-oid="wdpdbg8"
            >
              View Order History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
