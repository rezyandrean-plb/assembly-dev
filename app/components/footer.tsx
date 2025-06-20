"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid="m6df98-">
      <div className="container mx-auto px-4" data-oid="r3ho:k6">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="ut9w2uy"
        >
          <div className="md:col-span-1" data-oid="6yreb_2">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="5__v.ur"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="es360p9"
              />

              <span className="ml-2 text-xl font-bold" data-oid="pdj4vp4">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="x956751">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="wj3gjo6">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="qxys7i5"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="n00scrs"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="17qg44a"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="wgzu.u5"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="58rdchf"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="0r:4qlr"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="x:v7i-n"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="1sy3xt:"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="ip_6kb1"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="l65k:mq"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="4qogqhf"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="z0ykg5h"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="m2g0v9t">
            <h3 className="text-lg font-semibold mb-4" data-oid="u0shujk">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="6d::m:l">
              <li data-oid="te9gxx3">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid=":n2byh-"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="3-gsmxs">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="c98efme"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="3pndfw-">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="-lm3t-o"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="_mqku7-">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="0y0zmqu"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="s53f--l">
            <h3 className="text-lg font-semibold mb-4" data-oid="pay5r79">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="j7g3hwe">
              <li data-oid="lqlrups">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="cnl5oxc"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="-iepbus">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="ke:5.-l"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="s.q.xqu">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="py_y-n7"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="h-ipkm_">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="jq3gbec"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="rayls4.">
            <h3 className="text-lg font-semibold mb-4" data-oid="b7nni9z">
              Company
            </h3>
            <ul className="space-y-2" data-oid="whfqhwj">
              <li data-oid="f57xi9o">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="9652e2n"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="s.epm5f">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="5lkcfrp"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="v1-rftp">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="dngy8ez"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="js1160i">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="4mcr6ir"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="sefhou-">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="s08djb0"
          >
            <p className="text-gray-400 text-sm" data-oid="3wtm8eh">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="las63:g">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="wgy.av:"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="tadbl7."
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="pakac-j"
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
