import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative bg-gray-900 text-white pt-12 pb-8 global-footer z-10"
      data-oid="b9evw1c"
    >
      {/* Additional background layer for better contrast */}
      <div
        className="absolute inset-0 bg-gray-900 opacity-95 z-0"
        data-oid="0:e6r.v"
      ></div>

      <div className="container mx-auto px-4 relative z-10" data-oid="or17y3.">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="klunse9"
        >
          <div className="md:col-span-1" data-oid="lb3p769">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="cg8a39b"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={180}
                height={50}
                data-oid="b94rqm1"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="bxnr.e7">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="nqgpoh_">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="y.af-47"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="j1rp.un"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="ds4:k3p"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="--6jax7"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="9.l84l1"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid=".ef_2l4"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="ivix1xw"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="2w7.mjb"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"
                    data-oid="g9joy-1"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="-.t_-zt"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="dzay075"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="d:fhzv9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="mdp7gmu">
            <h3 className="text-lg font-semibold mb-4" data-oid="wdg9rmm">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="e74qgku">
              <li data-oid="fvjm-s.">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="fvmk80n"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="ybrtx8:">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="5soarn5"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="6b8bpz8">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="il0nv24"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="c4qhxh2">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="xuizc5n"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="sek.lr:">
            <h3 className="text-lg font-semibold mb-4" data-oid="c2o5_cl">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="apz.ymn">
              <li data-oid="eq5jtf.">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="hjqf5gx"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="lvrdt-.">
                <Link
                  href="/learning-paths/beginner"
                  className="text-gray-400 hover:text-white"
                  data-oid="11s6h5i"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="z3zgdqs">
                <Link
                  href="/learning-paths/hdb"
                  className="text-gray-400 hover:text-white"
                  data-oid="ef7lq:f"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="7oyydl_">
                <Link
                  href="/learning-paths/condo"
                  className="text-gray-400 hover:text-white"
                  data-oid="9acifbk"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="td.:xsz">
            <h3 className="text-lg font-semibold mb-4" data-oid="pgeg99x">
              Company
            </h3>
            <ul className="space-y-2" data-oid="7s3hn.g">
              <li data-oid="zbt2:zh">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="0u-m17w"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="4_4d552">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid=".irl79v"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="1pzdsq2">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid=".stsil9"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="sb-1w8k">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="jg.zjw4"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="0q7piz4">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="9yo385g"
          >
            <p className="text-gray-400 text-sm" data-oid="x9kdd1i">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="1k06n92">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="8atpwoq"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="xjf_1hj"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="mnune.m"
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
