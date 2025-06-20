"use client";

import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" data-oid="weraced">
      <div className="container mx-auto px-4" data-oid="90v0jfl">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="rko.kub"
        >
          <div className="md:col-span-1" data-oid="_-l21l7">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="jno9z3r"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={40}
                height={40}
                data-oid="_rzdssl"
              />

              <span className="ml-2 text-xl font-bold" data-oid="0f62r.3">
                Assembly SG
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="_knh6y7">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="8oi.yma">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="px8s14f"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="qpypudk"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="lml2qwu"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid=":plfbyz"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="p.oodyo"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="jc_etup"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="o6iwg:."
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="tlsft6k"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="2tdxjcq"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid=":5u9qy2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="oq3shrr"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="6zlfy6i"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="sa_k_mk">
            <h3 className="text-lg font-semibold mb-4" data-oid="dck0kym">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="6t45dev">
              <li data-oid="xof26ai">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="zvn4dc6"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="ov1z:4k">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="mq0nx3d"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="u9pdh82">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="yll8iy6"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="gyynv:i">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="1wf8b9e"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="a7t-33r">
            <h3 className="text-lg font-semibold mb-4" data-oid="dze0hje">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="4wlcegp">
              <li data-oid="x-_iga1">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid=":sloncy"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="cajb385">
                <Link
                  href="/learning-paths/beginner-property-investor"
                  className="text-gray-400 hover:text-white"
                  data-oid="qh4f:k6"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="0c6rg22">
                <Link
                  href="/learning-paths/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="sgdl-3x"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="bzuc1s3">
                <Link
                  href="/learning-paths/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="n6b8xp4"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="9fztr.v">
            <h3 className="text-lg font-semibold mb-4" data-oid="c-npc4.">
              Company
            </h3>
            <ul className="space-y-2" data-oid="yxbmal6">
              <li data-oid="pmdm4ka">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="2on-k4w"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="t61jubk">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="pbva6-u"
                >
                  Contact
                </Link>
              </li>
              <li data-oid="cnwwo3e">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="ydg0-_k"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="wp.ltgo">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="fihrddg"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="5rt:usr">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="ph85ht0"
          >
            <p className="text-gray-400 text-sm" data-oid="dw8vcz7">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="zm4.z:_">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="qjur-sj"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="urtao9x"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="ezaj0qc"
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
