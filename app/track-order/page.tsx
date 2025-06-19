"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TrackingSearch from "@/app/components/tracking-search";
import { Package, Truck, MapPin, Clock } from "lucide-react";

export default function TrackOrderPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-8" data-oid="-pebh2y">
      <div className="max-w-4xl mx-auto px-4" data-oid="i:whjen">
        {/* Header */}
        <div className="text-center mb-8" data-oid="f4ljvhe">
          <h1
            className="text-4xl font-bold text-gray-900 mb-4"
            data-oid="hrf:n4x"
          >
            Track Your Order
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-oid="_:tkn3b"
          >
            Enter your tracking number below to get real-time updates on your
            book delivery
          </p>
        </div>

        {/* Search Section */}
        <div
          className="bg-white rounded-lg shadow-sm p-8 mb-8"
          data-oid="lwn0vqm"
        >
          <div className="max-w-md mx-auto" data-oid="8gw6o98">
            <TrackingSearch
              className="w-full"
              placeholder="Enter your tracking number (e.g., ASG12345678ABCD)"
              data-oid="r7z-jsa"
            />

            <p
              className="text-sm text-gray-500 mt-2 text-center"
              data-oid="6lrblj-"
            >
              Your tracking number was provided in your order confirmation email
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div
          className="bg-white rounded-lg shadow-sm p-8 mb-8"
          data-oid="lx4twi8"
        >
          <h2
            className="text-2xl font-bold text-gray-900 mb-6 text-center"
            data-oid=".lphhq9"
          >
            How Tracking Works
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            data-oid="l5kk_1k"
          >
            <div className="text-center" data-oid=":.a_jj_">
              <div
                className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                data-oid="h:saia:"
              >
                <Package className="h-8 w-8 text-blue-600" data-oid="-xdrew5" />
              </div>
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="h9ivo0-"
              >
                Order Confirmed
              </h3>
              <p className="text-sm text-gray-600" data-oid="emhtn:d">
                Your order is confirmed and being prepared
              </p>
            </div>

            <div className="text-center" data-oid="55gwn:8">
              <div
                className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                data-oid="arx8p9l"
              >
                <Clock className="h-8 w-8 text-orange-600" data-oid="sal2ebj" />
              </div>
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="9aw5wtj"
              >
                Processing
              </h3>
              <p className="text-sm text-gray-600" data-oid="2tr:pf7">
                Your books are being packed and prepared for shipment
              </p>
            </div>

            <div className="text-center" data-oid="0y3qkas">
              <div
                className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                data-oid="ygr9:xj"
              >
                <Truck className="h-8 w-8 text-purple-600" data-oid="h7iytt2" />
              </div>
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="-pakeg:"
              >
                In Transit
              </h3>
              <p className="text-sm text-gray-600" data-oid="al.crlj">
                Your package is on its way to you
              </p>
            </div>

            <div className="text-center" data-oid="._zs60e">
              <div
                className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                data-oid="iv7pdrb"
              >
                <MapPin className="h-8 w-8 text-green-600" data-oid="bwradu." />
              </div>
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="v0100.b"
              >
                Delivered
              </h3>
              <p className="text-sm text-gray-600" data-oid="t9ghm:.">
                Your books have been delivered to your address
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8" data-oid="zsz7nzk">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            data-oid="6ni85pn"
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-6" data-oid="-0n-tjw">
            <div data-oid="-6-hwp0">
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="5l:nd-t"
              >
                Where can I find my tracking number?
              </h3>
              <p className="text-gray-600" data-oid="qy6-.y5">
                Your tracking number is provided in the order confirmation email
                sent to you after completing your purchase. It starts with "ASG"
                followed by numbers and letters.
              </p>
            </div>

            <div data-oid="tuktaar">
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="zrcey6t"
              >
                How long does delivery take?
              </h3>
              <p className="text-gray-600" data-oid="c_z4fui">
                Standard delivery within Singapore typically takes 3-5 business
                days. You'll receive real-time updates as your package moves
                through our delivery network.
              </p>
            </div>

            <div data-oid="t0_0mhz">
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="7iop__r"
              >
                What if my tracking number doesn't work?
              </h3>
              <p className="text-gray-600" data-oid=".qxg6.e">
                If your tracking number isn't working, please check that you've
                entered it correctly. If you're still having issues, please{" "}
                <button
                  onClick={() => router.push("/contact")}
                  className="text-[#123b79] hover:underline font-medium"
                  data-oid="ct_:pu."
                >
                  contact our support team
                </button>{" "}
                for assistance.
              </p>
            </div>

            <div data-oid="3c:_a0a">
              <h3
                className="font-semibold text-gray-900 mb-2"
                data-oid="limmc7l"
              >
                Do digital courses need tracking?
              </h3>
              <p className="text-gray-600" data-oid="onh.:rr">
                No, digital courses are available immediately after purchase in
                your profile. Tracking is only needed for physical books that
                require shipping.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center" data-oid="fc_nmmv">
          <button
            onClick={() => router.push("/")}
            className="text-[#123b79] hover:underline font-medium"
            data-oid="4c7:0_:"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
