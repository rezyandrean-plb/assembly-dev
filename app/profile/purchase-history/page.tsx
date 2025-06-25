"use client";

import { ShoppingBag, Receipt, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PurchaseHistoryPage() {
  return (
    <div className="space-y-6" data-oid="36fm62.">
      {/* Header */}
      <div data-oid="kf5:6i7">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="2cfauow">
          Purchase History
        </h1>
        <p className="text-gray-600 mt-1" data-oid="10caefi">
          View and manage your course purchases
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="aa72_cg">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="5jq-:wy"
        >
          <div className="flex items-center" data-oid="ygfvwun">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid=":8o5k3c">
              <ShoppingBag
                className="h-6 w-6 text-blue-600"
                data-oid="lkf7ayy"
              />
            </div>
            <div className="ml-4" data-oid="chl75zf">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid=":h2krtf"
              >
                Total Orders
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="wpf10-i"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="f1:988f"
        >
          <div className="flex items-center" data-oid="_ynku3v">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="h:is4d9">
              <CreditCard
                className="h-6 w-6 text-green-600"
                data-oid="6xgm7la"
              />
            </div>
            <div className="ml-4" data-oid="j0v2lup">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="6g9.ptf"
              >
                Total Spent
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="onx7t.7"
              >
                $0.00
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="p7hmoh-"
        >
          <div className="flex items-center" data-oid="aekddcj">
            <div className="p-2 bg-purple-100 rounded-lg" data-oid="jao8_kd">
              <Receipt className="h-6 w-6 text-purple-600" data-oid="cz-nnsx" />
            </div>
            <div className="ml-4" data-oid="mse0eh.">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="dzd1hwb"
              >
                This Month
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="_fvtv7b"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="7vqjbbi">
        <div className="p-8 text-center" data-oid="c4lz7c0">
          <ShoppingBag
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="xgs_unb"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="ltftp4f"
          >
            No purchase history yet
          </h3>
          <p className="text-gray-500 mb-6" data-oid="k-aj2uo">
            Your course purchases and transaction history will appear here
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid="j6gri-m"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
