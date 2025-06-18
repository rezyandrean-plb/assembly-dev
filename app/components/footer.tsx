"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid="0.2tllj">
      <div className="container mx-auto px-4" data-oid="5t2aau.">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="z0kghf3"
        >
          <div className="md:col-span-1" data-oid="xma__9j">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="qa_rjy:"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="20js32r"
              />

              <span className="ml-2 text-xl font-bold" data-oid="hp1j3in">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid=".zkz5ip">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="twpp-t:">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="_xr.nz0"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="ec94rhn"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="gh16kac"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="uiq-nxv"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="plht1bd"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="m1z8ixv"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="5jrvrox"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="pmuf7go"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="_ukhda."
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="ncixdtl"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="qohofq3"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="ks995it"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="tt0xfl-">
            <h3 className="text-lg font-semibold mb-4" data-oid="7j0qa-2">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="ncrsqf.">
              <li data-oid="4cnf8tj">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="lha6j1v"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="8s3k5mw">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="u4uaa-x"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="q0lvs03">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="_fnj6ad"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="yrnofvn">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="2mdt3m3"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="g.xr_5s">
            <h3 className="text-lg font-semibold mb-4" data-oid="rxhnp.k">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="4cmh-un">
              <li data-oid="gyiehva">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="uc5kfdw"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="168.q32">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="zbr8m6u"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="l:0.qso">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="k7dua2y"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="yazu3k6">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="azexlys"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="nn-:l.z">
            <h3 className="text-lg font-semibold mb-4" data-oid="csoe_4q">
              Company
            </h3>
            <ul className="space-y-2" data-oid="7u1r_bt">
              <li data-oid="2mola77">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="9db4thw"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="4k.b8si">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="rlm3hww"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="4i4qmxs">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="qno6tfx"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="jdi9zjy">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="zz4r.50"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="r8n-gk2">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="9r0hw5d"
          >
            <p className="text-gray-400 text-sm" data-oid="v2houhb">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="f_561pj">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="cj9ewvi"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="gwm5omo"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="w4pt35g"
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
