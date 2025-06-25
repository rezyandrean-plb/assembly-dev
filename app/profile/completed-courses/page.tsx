"use client";

import { Award, Trophy, Calendar } from "lucide-react";
import Link from "next/link";

export default function CompletedCoursesPage() {
  return (
    <div className="space-y-6" data-oid="3yh-xcj">
      {/* Header */}
      <div data-oid="biv03t7">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="v5d2rar">
          Completed Courses
        </h1>
        <p className="text-gray-600 mt-1" data-oid="769m8-j">
          View your achievements and certificates
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid=":vyg96v">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="w3n-wuk"
        >
          <div className="flex items-center" data-oid="ou262-j">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="prc9c9r">
              <Award className="h-6 w-6 text-green-600" data-oid="ny1mywm" />
            </div>
            <div className="ml-4" data-oid="ssfv9f5">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid=".7.cu2n"
              >
                Courses Completed
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="ujn:zp3"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="x3ty-t_"
        >
          <div className="flex items-center" data-oid="ksy5:f7">
            <div className="p-2 bg-yellow-100 rounded-lg" data-oid="-8dxz6z">
              <Trophy className="h-6 w-6 text-yellow-600" data-oid="yk6fabo" />
            </div>
            <div className="ml-4" data-oid=":427iw6">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="3b988ou"
              >
                Certificates Earned
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="izzt26s"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="hxn_dm:"
        >
          <div className="flex items-center" data-oid="9euxbg_">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="z6wof0c">
              <Calendar className="h-6 w-6 text-blue-600" data-oid="8u8_br9" />
            </div>
            <div className="ml-4" data-oid="m94x:n0">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="4-l:fbs"
              >
                This Month
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="oz.fb6q"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="fwuf4p:">
        <div className="p-8 text-center" data-oid="a3mzgbj">
          <Award
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="u:qr-ru"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="f_azua5"
          >
            No completed courses yet
          </h3>
          <p className="text-gray-500 mb-6" data-oid="omizr83">
            Complete your first course to earn certificates and track
            achievements
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid=":32a:ij"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
