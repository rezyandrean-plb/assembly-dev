"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid=".25_j_o">
      <div className="container mx-auto px-4" data-oid="jx4k6e0">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="v9ampbe"
        >
          <div className="md:col-span-1" data-oid="nuu.5-.">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="z1-9ljr"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="olm8coq"
              />

              <span className="ml-2 text-xl font-bold" data-oid="0d06gjw">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="qp103__">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="vedzbok">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid=".3l53x1"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="v-nypkf"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="1:8_5oa"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="m2z:l2d"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="-j:uv8l"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="o1zu.p4"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="3datvrh"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="i.aer_z"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="9t:c07v"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="lh2eo86"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="nl:6i6q"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid=".rlqpx3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid=".p2-8ng">
            <h3 className="text-lg font-semibold mb-4" data-oid="zj2559t">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="baq8nm:">
              <li data-oid="bjhlj:9">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="zg.ggqc"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid=".er5sxd">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="xrv3fjn"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="x3o7ss:">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="ezi01jp"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="-nct8ne">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="x_pa47t"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="7kmvebh">
            <h3 className="text-lg font-semibold mb-4" data-oid="p-yct6u">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="0zx-9gm">
              <li data-oid="15u:-ul">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="jx0vh9q"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="vi4xj8w">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="v4_:923"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="1g5iljx">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="a6oi:1e"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="t4.boiv">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="iin-fm9"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="_jotp8-">
            <h3 className="text-lg font-semibold mb-4" data-oid="e8uvyxa">
              Company
            </h3>
            <ul className="space-y-2" data-oid="1he1ra4">
              <li data-oid="dqvg29q">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="m2aecjm"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="05d__xq">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="1:ng0ff"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="7bvowlp">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="s4e_yvj"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="4o0jlfe">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="hj2-f6q"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="z8jgz11">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="fy_1dh2"
          >
            <p className="text-gray-400 text-sm" data-oid="xl0-:jv">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="fv76.ia">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid=".ih4on5"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="82x3vut"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="54axccm"
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
