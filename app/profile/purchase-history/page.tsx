"use client";

import { ShoppingBag, Receipt, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PurchaseHistoryPage() {
  return (
    <div className="space-y-6" data-oid="w7e-nnz">
      {/* Header */}
      <div data-oid="3ohdgif">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="q4x9wtf">
          Purchase History
        </h1>
        <p className="text-gray-600 mt-1" data-oid="grx8x4s">
          View and manage your course purchases
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="kwq4smo">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="hjity2w"
        >
          <div className="flex items-center" data-oid="uqtkmi0">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="gxnu.sd">
              <ShoppingBag
                className="h-6 w-6 text-blue-600"
                data-oid="ixrdam6"
              />
            </div>
            <div className="ml-4" data-oid="fzqlx::">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="3sebzxu"
              >
                Total Orders
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="m0auk.r"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="0n96g3y"
        >
          <div className="flex items-center" data-oid="l3_-qar">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="g13tkr6">
              <CreditCard
                className="h-6 w-6 text-green-600"
                data-oid="6ruqeva"
              />
            </div>
            <div className="ml-4" data-oid="5s01h80">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="q1w2r-_"
              >
                Total Spent
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="e4i6k9w"
              >
                $0.00
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="mkx0_du"
        >
          <div className="flex items-center" data-oid="iw4y5kk">
            <div className="p-2 bg-purple-100 rounded-lg" data-oid="qr9sv3f">
              <Receipt className="h-6 w-6 text-purple-600" data-oid="ag7gi.q" />
            </div>
            <div className="ml-4" data-oid="7ea.hjk">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="729b3ow"
              >
                This Month
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="3yil14y"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="etyz1h6">
        <div className="p-8 text-center" data-oid="zkga4ek">
          <ShoppingBag
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="4z.xinr"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="upr.xhx"
          >
            No purchase history yet
          </h3>
          <p className="text-gray-500 mb-6" data-oid="rz8lle3">
            Your course purchases and transaction history will appear here
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid="06d7.3q"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
