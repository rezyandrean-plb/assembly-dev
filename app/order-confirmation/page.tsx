"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Package, Download, ArrowRight } from "lucide-react";

export default function OrderConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    const hasBooks = searchParams.get("hasBooks") === "true";
    const trackingNumber = searchParams.get("tracking");

    if (!orderId) {
      router.push("/");
      return;
    }

    setOrderDetails({
      orderId,
      hasBooks,
      trackingNumber,
      orderDate: new Date().toLocaleDateString("en-SG"),
    });
  }, [searchParams, router]);

  if (!orderDetails) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="4:-7nbz"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79]"
          data-oid="dx4_spj"
        ></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8" data-oid="3oso3hf">
      <div className="max-w-2xl mx-auto px-4" data-oid="35w0bdm">
        <div
          className="bg-white rounded-lg shadow-sm p-8 text-center"
          data-oid="kv4na:o"
        >
          <CheckCircle
            className="mx-auto h-16 w-16 text-green-600 mb-6"
            data-oid="rv8obb6"
          />

          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            data-oid="-z41a7u"
          >
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8" data-oid="fttfpbj">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8" data-oid=".vtalgt">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
              data-oid="8.2756t"
            >
              <div data-oid="d:8:wwk">
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  data-oid="gmiz_4o"
                >
                  Order ID
                </h3>
                <p className="text-gray-600" data-oid="3t85bp5">
                  {orderDetails.orderId}
                </p>
              </div>
              <div data-oid="awumc5_">
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  data-oid="-3f-lta"
                >
                  Order Date
                </h3>
                <p className="text-gray-600" data-oid="guf_._q">
                  {orderDetails.orderDate}
                </p>
              </div>
              {orderDetails.trackingNumber && (
                <>
                  <div className="md:col-span-2" data-oid="0c2eq5w">
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      data-oid="twi-e.0"
                    >
                      Tracking Number
                    </h3>
                    <p className="text-gray-600 font-mono" data-oid="gbfbfpu">
                      {orderDetails.trackingNumber}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {orderDetails.hasBooks ? (
            <div className="space-y-4" data-oid="nuat5qx">
              <div
                className="flex items-center justify-center gap-2 text-[#123b79] mb-4"
                data-oid="jnrcx-q"
              >
                <Package className="h-5 w-5" data-oid="upkd1__" />
                <span className="font-semibold" data-oid="yjnldd7">
                  Physical items will be shipped
                </span>
              </div>

              <p className="text-gray-600 mb-6" data-oid="uopphgc">
                Your books will be shipped to your delivery address. You can
                track your package using the tracking number above.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="epc1qln"
              >
                <button
                  onClick={() =>
                    router.push(
                      `/tracking?tracking=${orderDetails.trackingNumber}`,
                    )
                  }
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2"
                  data-oid="ciy1_zq"
                >
                  <Package className="h-4 w-4" data-oid="sgrqq5o" />
                  Track Your Package
                </button>

                <button
                  onClick={() => router.push("/profile/purchase-history")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  data-oid="gf93lmi"
                >
                  View Order History
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4" data-oid="996dws-">
              <div
                className="flex items-center justify-center gap-2 text-[#123b79] mb-4"
                data-oid="p73bm11"
              >
                <Download className="h-5 w-5" data-oid="gq3t:_w" />
                <span className="font-semibold" data-oid="zas1aq4">
                  Digital content is now available
                </span>
              </div>

              <p className="text-gray-600 mb-6" data-oid="wa69c_3">
                Your courses are now available in your profile. Start learning
                right away!
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="56zy-o5"
              >
                <button
                  onClick={() => router.push("/profile/completed-courses")}
                  className="bg-[#123b79] text-white px-6 py-3 rounded-lg hover:bg-[#0f2d5c] transition-colors flex items-center justify-center gap-2"
                  data-oid="j8auqu3"
                >
                  <Download className="h-4 w-4" data-oid="x1mv.19" />
                  Access Your Courses
                </button>

                <button
                  onClick={() => router.push("/courses")}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  data-oid="r646o_e"
                >
                  Browse More Courses
                </button>
              </div>
            </div>
          )}

          <div
            className="mt-8 pt-6 border-t border-gray-200"
            data-oid="49:.c21"
          >
            <p className="text-sm text-gray-500" data-oid="8d-q56-">
              Questions about your order?{" "}
              <button
                onClick={() => router.push("/contact")}
                className="text-[#123b79] hover:underline font-medium"
                data-oid="ilhtcxr"
              >
                Contact our support team
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center" data-oid="pxee.na">
          <button
            onClick={() => router.push("/")}
            className="text-[#123b79] hover:underline font-medium flex items-center justify-center gap-1 mx-auto"
            data-oid="5slp:48"
          >
            ← Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
