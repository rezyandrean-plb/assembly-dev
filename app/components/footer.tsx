"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid="1zx8gvd">
      <div className="container mx-auto px-4" data-oid="5bzl3_.">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="by8ifck"
        >
          <div className="md:col-span-1" data-oid="g53nkxk">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="_7l9v:n"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="c6__ief"
              />

              <span className="ml-2 text-xl font-bold" data-oid=".-9637j">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="zqlnw2u">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="rtrk9t0">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="ega371i"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="r-w7nhv"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="_voi8tu"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="2_-q407"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="w7or32x"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="40s0mgk"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="sphf6-t"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="fpk2fz7"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="1ybv_j6"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="y.hhtlu"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="_6zf8jo"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="61y7bcp"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="wmz7yc_">
            <h3 className="text-lg font-semibold mb-4" data-oid="d48yv-k">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="3xu_kwh">
              <li data-oid="n.6jjaw">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="8vudfel"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="i0t0gdr">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="0z7qnlz"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="zhxit:-">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="s:_l8jn"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="jgy90dt">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="bm377c."
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="-g35iee">
            <h3 className="text-lg font-semibold mb-4" data-oid="ghpxwbb">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="mforya7">
              <li data-oid="pgqdxfd">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="ou749x4"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="e4c..vx">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="qggli.0"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="yv8:_-6">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="_hdex1f"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="gpc.0:5">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="aexdkjo"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="vwdub4f">
            <h3 className="text-lg font-semibold mb-4" data-oid="uetnckc">
              Company
            </h3>
            <ul className="space-y-2" data-oid="zt:grd6">
              <li data-oid=":g9f06z">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="_b4pvjt"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="z:0qui7">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid=".z31ky6"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="2eilzpb">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid=".kiatea"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="-2nlug6">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="a008n7i"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="8lb2tti">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="dn46nha"
          >
            <p className="text-gray-400 text-sm" data-oid="520xi8s">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="q5n7222">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="771:9go"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="48d4llr"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="24n1xrr"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
