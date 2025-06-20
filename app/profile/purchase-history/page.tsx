"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, ChevronDown } from "lucide-react";

// Mock purchase data
const purchaseHistory = [
  {
    id: 1,
    date: "May 12, 2023",
    course: "Advanced Web Development",
    paymentMethod: "Credit Card •••• 4242",
    amount: "$129.99",
  },
  {
    id: 2,
    date: "Apr 28, 2023",
    course: "UX Design Fundamentals",
    paymentMethod: "PayPal",
    amount: "$89.99",
  },
  {
    id: 3,
    date: "Apr 15, 2023",
    course: "Data Science Essentials",
    paymentMethod: "Credit Card •••• 4242",
    amount: "$149.99",
  },
  {
    id: 4,
    date: "Mar 30, 2023",
    course: "Project Management",
    paymentMethod: "Credit Card •••• 4242",
    amount: "$79.99",
  },
  {
    id: 5,
    date: "Mar 15, 2023",
    course: "JavaScript Fundamentals",
    paymentMethod: "PayPal",
    amount: "$59.99",
  },
  {
    id: 6,
    date: "Feb 28, 2023",
    course: "HTML & CSS Mastery",
    paymentMethod: "Credit Card •••• 4242",
    amount: "$49.99",
  },
  {
    id: 7,
    date: "Feb 15, 2023",
    course: "Responsive Web Design",
    paymentMethod: "PayPal",
    amount: "$69.99",
  },
  {
    id: 8,
    date: "Jan 30, 2023",
    course: "Git & GitHub Essentials",
    paymentMethod: "Credit Card •••• 4242",
    amount: "$39.99",
  },
];

export default function PurchaseHistoryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get purchases from the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentPurchases = purchaseHistory.filter((purchase, index) => {
    // This is a simplified approach for demo purposes
    // In a real app, you would parse the date string and compare properly
    return index < 3;
  });

  // Filter purchases based on active tab and search query
  const filteredPurchases = purchaseHistory.filter((purchase) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "recent" &&
        recentPurchases.some((p) => p.id === purchase.id)) ||
      (activeTab === "subscriptions" && false); // No subscriptions in this demo

    const matchesSearch = purchase.course
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6" data-oid="l8-jmdy">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="d9vvenb"
      >
        <div data-oid="664gb11">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="gakabm4">
            Purchase History
          </h1>
          <p className="text-gray-500 mt-1" data-oid="mcvd4gs">
            View and manage your course purchases
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3" data-oid="94980g8">
          <div className="relative" data-oid="gyrlbnz">
            <input
              type="text"
              placeholder="Search purchases..."
              className="px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="xqoiohx"
            />

            <Search
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              data-oid="9wel9ds"
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            data-oid="2uy-h-n"
          >
            <Download className="h-4 w-4" data-oid="-w2-y9l" />
            <span data-oid="3wphwgj">Export</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="hh.ienv">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
          data-oid="l97fld7"
        >
          All Purchases
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "recent"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("recent")}
          data-oid="vnre73:"
        >
          Recent (30 days)
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "subscriptions"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("subscriptions")}
          data-oid=".x_3y6k"
        >
          Subscriptions
        </button>
      </div>

      {/* Transaction History */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        data-oid="r0apmud"
      >
        <div className="p-6" data-oid=":e6f-yd">
          <h2
            className="text-lg font-bold text-gray-800 mb-4"
            data-oid="c.qgbk3"
          >
            Transaction History
          </h2>
          <p className="text-sm text-gray-500 mb-4" data-oid="pajh85d">
            A record of all your course purchases
          </p>
        </div>

        <div className="overflow-x-auto" data-oid="txsc1t7">
          <table
            className="min-w-full divide-y divide-gray-200"
            data-oid="00shld8"
          >
            <thead className="bg-gray-50" data-oid="r:kpfa1">
              <tr data-oid="jhw7e-7">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  data-oid="jej20di"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  data-oid="4ipat.x"
                >
                  Course
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  data-oid="757:4tj"
                >
                  Payment Method
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  data-oid="89z2qnm"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  data-oid="7fj6rpp"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              className="bg-white divide-y divide-gray-200"
              data-oid="hs5-luh"
            >
              {filteredPurchases.map((purchase) => (
                <tr
                  key={purchase.id}
                  className="hover:bg-gray-50"
                  data-oid="gnnu46m"
                >
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    data-oid="0ly0t_x"
                  >
                    {purchase.date}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                    data-oid="k:mfmrt"
                  >
                    {purchase.course}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    data-oid="mlvm_t0"
                  >
                    {purchase.paymentMethod}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                    data-oid="4urywgi"
                  >
                    {purchase.amount}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    data-oid="hfxnc._"
                  >
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      data-oid="8i7mlpk"
                    >
                      <ChevronDown className="h-5 w-5" data-oid="y11:0un" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
