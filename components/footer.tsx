import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative bg-gray-900 text-white pt-12 pb-8 global-footer z-10"
      data-oid="8usw7yh"
    >
      {/* Additional background layer for better contrast */}
      <div
        className="absolute inset-0 bg-gray-900 opacity-95 z-0"
        data-oid="n7z8lk6"
      ></div>

      <div className="container mx-auto px-4 relative z-10" data-oid="g7bi4c4">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="n6ihn4:"
        >
          <div className="md:col-span-1" data-oid="d-9rq_q">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="tsaq61h"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={180}
                height={50}
                data-oid="4ar:msz"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="s36a__e">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="tj-n_n1">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="9c.2jpn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="7y31jp8"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="zzoes9-"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="gmt0kgg"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="_v4nvl:"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="5:w64m2"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="_aq7r7w"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="qov0c2u"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"
                    data-oid="us1t6aw"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="cgtqloh"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="oox:x.-"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="b4k4egr"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="qeboqxk">
            <h3 className="text-lg font-semibold mb-4" data-oid="n13z415">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="abbzh00">
              <li data-oid="_312d12">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="6a25l-i"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="n8pou8_">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="rzluw1q"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="ag..lpg">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="x3bf2yo"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="h5z66mh">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="il499-p"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="9h68ko4">
            <h3 className="text-lg font-semibold mb-4" data-oid="8en..u9">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="qru:hkj">
              <li data-oid="sjj9-h-">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="css__fn"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="t.nmcp-">
                <Link
                  href="/learning-paths/beginner"
                  className="text-gray-400 hover:text-white"
                  data-oid="0akgw16"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="dx7-l.0">
                <Link
                  href="/learning-paths/hdb"
                  className="text-gray-400 hover:text-white"
                  data-oid="5bhivxs"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="geknrg0">
                <Link
                  href="/learning-paths/condo"
                  className="text-gray-400 hover:text-white"
                  data-oid="rn.os2a"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="d86qbti">
            <h3 className="text-lg font-semibold mb-4" data-oid="0v05nuw">
              Company
            </h3>
            <ul className="space-y-2" data-oid="l82k4ga">
              <li data-oid="lw3yxhj">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="w3azswr"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="2t75wv1">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid=":fxsp._"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="msd7uzj">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="12_vkm8"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="10k6wni">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="9kg57ji"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="cql46vp">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="a:camnt"
          >
            <p className="text-gray-400 text-sm" data-oid="ugjbl_h">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="rp:.2-1">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="iy-mst0"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="y05cb6k"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="g1pghk-"
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
