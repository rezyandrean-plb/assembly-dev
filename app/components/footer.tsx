"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid="3qr4v-b">
      <div className="container mx-auto px-4" data-oid="j.1s03r">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="u2vry4d"
        >
          <div className="md:col-span-1" data-oid=":bw.w68">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="d8rm73n"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="cas6xzt"
              />
              <span className="ml-2 text-xl font-bold" data-oid="l:_scwu">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="d8vfub8">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="nfpmz__">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="pfvjo48"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="j4swbbf"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="-dfbhdt"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="j32jdw9"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="fmv7-sf"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="3b9ahql"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="fxs9o2:"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="u4hy:fp"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="goyi8w9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="vx2bxz8"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="s1.fjet"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="joivx7t"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="1zt1uhw">
            <h3 className="text-lg font-semibold mb-4" data-oid="ox2n79u">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="_40bas:">
              <li data-oid="jhol-ya">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="pkwe0dd"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="1012x1d">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="cmktt:1"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="m4lcol3">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="c_7v9zp"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="p-j65xc">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="ifmaw_g"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="4r7w587">
            <h3 className="text-lg font-semibold mb-4" data-oid="k426-lq">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="yw-7io_">
              <li data-oid="a8mdukt">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="wpzidto"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="8c-0c1t">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="spjndd9"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid=":_vnav-">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="o2.tq4:"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="40plxmn">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="pku6ciy"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="b1xz7ua">
            <h3 className="text-lg font-semibold mb-4" data-oid="7vfxu.5">
              Company
            </h3>
            <ul className="space-y-2" data-oid="juybev.">
              <li data-oid="t62lh3s">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="h02mfpz"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="kzui3ml">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="5vodaqf"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="a6yva7i">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="ic8.8hi"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="l528g4:">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="pzerjt1"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="otgz-ye">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="2irwsdn"
          >
            <p className="text-gray-400 text-sm" data-oid="v65rbz.">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="f8q0kdd">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="_74266y"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="0dxfiuc"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="m4u9k.s"
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
