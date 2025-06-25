"use client";

import { Star, MessageSquare, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="space-y-6" data-oid="mkkrt-z">
      {/* Header */}
      <div data-oid="d.tb-j9">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="gk7xp90">
          My Reviews
        </h1>
        <p className="text-gray-600 mt-1" data-oid=".rfw1i.">
          Reviews you've left for courses
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="xbjof2z">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="7pcdh4i"
        >
          <div className="flex items-center" data-oid="o4h8rvp">
            <div className="p-2 bg-yellow-100 rounded-lg" data-oid="ysxg3lj">
              <Star className="h-6 w-6 text-yellow-600" data-oid="o3jqac_" />
            </div>
            <div className="ml-4" data-oid="-vlvkdw">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="bwx1hdy"
              >
                Total Reviews
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="ra_p1ih"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="vunx97y"
        >
          <div className="flex items-center" data-oid="ybwfss:">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="u416.x3">
              <MessageSquare
                className="h-6 w-6 text-blue-600"
                data-oid="1hq9vzd"
              />
            </div>
            <div className="ml-4" data-oid="d:jr_2m">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="tw2jwdi"
              >
                Average Rating
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="e5kynq8"
              >
                0.0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="h7ofi9o"
        >
          <div className="flex items-center" data-oid="nry6gk5">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="rujnppj">
              <ThumbsUp className="h-6 w-6 text-green-600" data-oid="by_ogdy" />
            </div>
            <div className="ml-4" data-oid="gdek_zg">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="duzbafl"
              >
                Helpful Votes
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="trubvif"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="9g0-65v">
        <div className="p-8 text-center" data-oid="edorvts">
          <Star
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="x72p2z7"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="t:vzv03"
          >
            No reviews yet
          </h3>
          <p className="text-gray-500 mb-6" data-oid="_o.9p4t">
            Complete courses and share your experience to help other learners
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid="ttg:pdr"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
