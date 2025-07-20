"use client";

import { Star, MessageSquare, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="space-y-6" data-oid="90tho14">
      {/* Header */}
      <div data-oid="dkrv604">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="v0mlpyc">
          My Reviews
        </h1>
        <p className="text-gray-600 mt-1" data-oid="zcr461n">
          Reviews you've left for courses
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="1.l6zb4">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="q_i7-nc"
        >
          <div className="flex items-center" data-oid="_wpqm.d">
            <div className="p-2 bg-yellow-100 rounded-lg" data-oid="vw_7p:0">
              <Star className="h-6 w-6 text-yellow-600" data-oid="65vxjnc" />
            </div>
            <div className="ml-4" data-oid="m25x13a">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="vmif6me"
              >
                Total Reviews
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="lswpzy1"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="bu4x3zf"
        >
          <div className="flex items-center" data-oid="dh4jtqb">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="jv:6:52">
              <MessageSquare
                className="h-6 w-6 text-blue-600"
                data-oid="dkgqf:k"
              />
            </div>
            <div className="ml-4" data-oid="jzie29f">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="-bbhd_h"
              >
                Average Rating
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="iyp76zs"
              >
                0.0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="o:t3ze2"
        >
          <div className="flex items-center" data-oid="nmqlqx1">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="vq03mok">
              <ThumbsUp className="h-6 w-6 text-green-600" data-oid="wvinz0y" />
            </div>
            <div className="ml-4" data-oid="oj9xfzm">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="eb6ss.b"
              >
                Helpful Votes
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="yzti6d5"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="cn75wsv">
        <div className="p-8 text-center" data-oid="0sok52o">
          <Star
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="pvu8h:7"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="3f-zjk8"
          >
            No reviews yet
          </h3>
          <p className="text-gray-500 mb-6" data-oid="lphj2y5">
            Complete courses and share your experience to help other learners
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid="sks93i-"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
