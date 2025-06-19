"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid="yoymt3o">
      <div className="container mx-auto px-4" data-oid="1h3w.jp">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="0x7_llt"
        >
          <div className="md:col-span-1" data-oid="m-0lc3q">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="wp77nr2"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="nq2dwbi"
              />

              <span className="ml-2 text-xl font-bold" data-oid="6v89bad">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="sx:14xc">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="_k_-om9">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="bw54z3-"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="h7t0k7n"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="26sy57k"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="wl332li"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="tc5i.1v"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="4p81yjk"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="0v1504l"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="6w0.a6d"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="n0xdt:5"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="920vgpw"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="98fnq95"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="vtbwlc5"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="-2cx6:p">
            <h3 className="text-lg font-semibold mb-4" data-oid="bvk6x9:">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="-q28cm4">
              <li data-oid="3g7cmez">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="9bst8i2"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="1ynf:_k">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="ia92bri"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="mp.5hxm">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="ak4_ieb"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="_3-_4z0">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="i_uded8"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="kdn0st1">
            <h3 className="text-lg font-semibold mb-4" data-oid=".d4flle">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid=":m3auqy">
              <li data-oid="257_u5y">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid=":6ct-xm"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="1.tya6z">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="6p3ru4t"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="ic9qc:u">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="li_tpg6"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="gqbik72">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="-07r9mo"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="jv:ybh7">
            <h3 className="text-lg font-semibold mb-4" data-oid="fg3x.hs">
              Company
            </h3>
            <ul className="space-y-2" data-oid="xi.uykv">
              <li data-oid="q-i68my">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="57ntals"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="ziq-cx6">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="09ccsvm"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="kz7o5l6">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="2becs02"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="g:pmnpg">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid=":bugp2:"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="09ox2w1">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="e00gzyz"
          >
            <p className="text-gray-400 text-sm" data-oid="myx54eu">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="_222m-o">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid=":8c9cs5"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="zq0llh6"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="de02uty"
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
