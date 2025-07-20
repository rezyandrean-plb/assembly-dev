"use client";

import { Heart, BookOpen, Star } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="space-y-6" data-oid="g3v2bcj">
      {/* Header */}
      <div data-oid="..j5-:-">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="5vp33ho">
          Wishlist
        </h1>
        <p className="text-gray-600 mt-1" data-oid="c2f6_8j">
          Courses you've bookmarked for later
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="gk1i7.e">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="fp-5jra"
        >
          <div className="flex items-center" data-oid="5_ktug2">
            <div className="p-2 bg-red-100 rounded-lg" data-oid="q1qgrb2">
              <Heart className="h-6 w-6 text-red-600" data-oid="oc8ftof" />
            </div>
            <div className="ml-4" data-oid="rurqrlt">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="h06i5mw"
              >
                Total Saved
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="reyutue"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="k0-97mo"
        >
          <div className="flex items-center" data-oid="fdhb86a">
            <div className="p-2 bg-yellow-100 rounded-lg" data-oid="oo8hy4l">
              <Star className="h-6 w-6 text-yellow-600" data-oid="4.a.cpc" />
            </div>
            <div className="ml-4" data-oid="sy2gm9g">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="p03_n_z"
              >
                On Sale
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="afir6uo"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="4dc_:9x"
        >
          <div className="flex items-center" data-oid="px4f444">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="usg0pcs">
              <BookOpen className="h-6 w-6 text-blue-600" data-oid="rg2lm4f" />
            </div>
            <div className="ml-4" data-oid="u_le3k-">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="hs:0bg0"
              >
                Free Courses
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="05-__95"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="nempw_c">
        <div className="p-8 text-center" data-oid=".krbjrv">
          <Heart
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="584uxi3"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="a8.p2-6"
          >
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 mb-6" data-oid="fbd:dh7">
            Save courses you're interested in to access them later
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid="37k:tjl"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
