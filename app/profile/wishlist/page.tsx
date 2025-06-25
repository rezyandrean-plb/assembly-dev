"use client";

import { Heart, BookOpen, Star } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="space-y-6" data-oid="911ki.5">
      {/* Header */}
      <div data-oid="vee_mds">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="om3ja7t">
          Wishlist
        </h1>
        <p className="text-gray-600 mt-1" data-oid="stka6jd">
          Courses you've bookmarked for later
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="q_m.:z-">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="ylgr8wy"
        >
          <div className="flex items-center" data-oid="p:ptxin">
            <div className="p-2 bg-red-100 rounded-lg" data-oid=".77cmj-">
              <Heart className="h-6 w-6 text-red-600" data-oid="33c12r3" />
            </div>
            <div className="ml-4" data-oid="ji.y9ke">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="1h-.g9v"
              >
                Total Saved
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="7b2dm7_"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="aozyx-d"
        >
          <div className="flex items-center" data-oid="izpt87a">
            <div className="p-2 bg-yellow-100 rounded-lg" data-oid="v.tw2_e">
              <Star className="h-6 w-6 text-yellow-600" data-oid="sog45z:" />
            </div>
            <div className="ml-4" data-oid="_v3471o">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="vifm_8j"
              >
                On Sale
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="5d39uz4"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="k7m6ud8"
        >
          <div className="flex items-center" data-oid="brvnkc7">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="iyvbx9o">
              <BookOpen className="h-6 w-6 text-blue-600" data-oid="0ypy2c-" />
            </div>
            <div className="ml-4" data-oid="-5p_mlp">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="uo_y4of"
              >
                Free Courses
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="mnpdnp6"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="4-il-ts">
        <div className="p-8 text-center" data-oid="spzudpp">
          <Heart
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="96zf7ae"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="s4atr6j"
          >
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 mb-6" data-oid="bl_dq2f">
            Save courses you're interested in to access them later
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid="6g1wqxc"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
