"use client";

import { Award, Trophy, Calendar } from "lucide-react";
import Link from "next/link";

export default function CompletedCoursesPage() {
  return (
    <div className="space-y-6" data-oid=".2ihkw6">
      {/* Header */}
      <div data-oid=".6hu8lu">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="ulhmizh">
          Completed Courses
        </h1>
        <p className="text-gray-600 mt-1" data-oid="7077gu0">
          View your achievements and certificates
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="b.qzqej">
        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="pqjgf3l"
        >
          <div className="flex items-center" data-oid="6it.u5i">
            <div className="p-2 bg-green-100 rounded-lg" data-oid="i_.68p9">
              <Award className="h-6 w-6 text-green-600" data-oid="hx8idoj" />
            </div>
            <div className="ml-4" data-oid="q2b8gf3">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="ggk0vot"
              >
                Courses Completed
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="t1b:nz3"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="7ebjgzi"
        >
          <div className="flex items-center" data-oid="265ca0f">
            <div className="p-2 bg-yellow-100 rounded-lg" data-oid="ws9mrg2">
              <Trophy className="h-6 w-6 text-yellow-600" data-oid="_g.0oj9" />
            </div>
            <div className="ml-4" data-oid="b-z1.e8">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="zfcsu3s"
              >
                Certificates Earned
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="w2n4ml8"
              >
                0
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-sm border"
          data-oid="j_m448l"
        >
          <div className="flex items-center" data-oid="y4lvolr">
            <div className="p-2 bg-blue-100 rounded-lg" data-oid="_iucc5:">
              <Calendar className="h-6 w-6 text-blue-600" data-oid="w5mg3st" />
            </div>
            <div className="ml-4" data-oid="on_h5:q">
              <p
                className="text-sm font-medium text-gray-600"
                data-oid="lrmmswl"
              >
                This Month
              </p>
              <p
                className="text-2xl font-bold text-gray-900"
                data-oid="asbjl9g"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow-sm border" data-oid="th71tqq">
        <div className="p-8 text-center" data-oid="fd4ulu3">
          <Award
            className="mx-auto h-16 w-16 text-gray-300 mb-4"
            data-oid="3-jtgy3"
          />

          <h3
            className="text-lg font-medium text-gray-900 mb-2"
            data-oid="nhwzsys"
          >
            No completed courses yet
          </h3>
          <p className="text-gray-500 mb-6" data-oid="t.npip.">
            Complete your first course to earn certificates and track
            achievements
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            data-oid=":u4nr8j"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
