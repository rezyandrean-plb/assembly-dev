import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative bg-gray-900 text-white pt-12 pb-8 global-footer z-10"
      data-oid="-upwebr"
    >
      {/* Additional background layer for better contrast */}
      <div
        className="absolute inset-0 bg-gray-900 opacity-95 z-0"
        data-oid="12r2j5l"
      ></div>

      <div className="container mx-auto px-4 relative z-10" data-oid="ikz9sk0">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="iq7w6um"
        >
          <div className="md:col-span-1" data-oid=".:_bdoz">
            <Link
              href="/"
              className="flex items-center mb-4"
              data-oid="ypfrpd4"
            >
              <Image
                src="/images/assembly-logo.png"
                alt="Assembly SG Logo"
                width={180}
                height={50}
                data-oid="jxnlht4"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4" data-oid="xowy8g_">
              Singapore's premier knowledge hub for real estate professionals.
            </p>
            <div className="flex space-x-4" data-oid="ik12zw6">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="ahwcae."
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="t51b360"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    data-oid="o87778g"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="itjdgdy"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="-x8jete"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    data-oid="9ainr5r"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="n3xbauu"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="me.mb4d"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"
                    data-oid="jwxdpma"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                data-oid="0f9j2wd"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="-e5hrjq"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-4h-4v4zm0-6h4V6h-4v4z"
                    data-oid="_2o51ly"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1" data-oid="m:i9ijy">
            <h3 className="text-lg font-semibold mb-4" data-oid="f7nypi1">
              Courses
            </h3>
            <ul className="space-y-2" data-oid="s.:ap3i">
              <li data-oid="9w1rf6g">
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  data-oid="s4b96:z"
                >
                  All Courses
                </Link>
              </li>
              <li data-oid="mhl9ia:">
                <Link
                  href="/courses/hdb-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid=":imbkn1"
                >
                  HDB Investment
                </Link>
              </li>
              <li data-oid="zjgao-c">
                <Link
                  href="/courses/condo-investment-masterclass"
                  className="text-gray-400 hover:text-white"
                  data-oid="lp5n3ja"
                >
                  Condo Investment
                </Link>
              </li>
              <li data-oid="t3rxu09">
                <Link
                  href="/courses/strategic-property-investment"
                  className="text-gray-400 hover:text-white"
                  data-oid="on80lpx"
                >
                  Strategic Investment
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="y5muesg">
            <h3 className="text-lg font-semibold mb-4" data-oid="01pc5ba">
              Learning Paths
            </h3>
            <ul className="space-y-2" data-oid="s6917va">
              <li data-oid="-hzitsa">
                <Link
                  href="/learning-paths"
                  className="text-gray-400 hover:text-white"
                  data-oid="wsvvk5r"
                >
                  All Learning Paths
                </Link>
              </li>
              <li data-oid="m.iky8c">
                <Link
                  href="/learning-paths/beginner"
                  className="text-gray-400 hover:text-white"
                  data-oid="t0w5m1u"
                >
                  Beginner Path
                </Link>
              </li>
              <li data-oid="mshls8w">
                <Link
                  href="/learning-paths/hdb"
                  className="text-gray-400 hover:text-white"
                  data-oid="kbf3gjr"
                >
                  HDB Specialist
                </Link>
              </li>
              <li data-oid="l332vgl">
                <Link
                  href="/learning-paths/condo"
                  className="text-gray-400 hover:text-white"
                  data-oid="70_:ke3"
                >
                  Condo Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1" data-oid="8bwobxu">
            <h3 className="text-lg font-semibold mb-4" data-oid="ialf03g">
              Company
            </h3>
            <ul className="space-y-2" data-oid=".06d8:1">
              <li data-oid="6423zop">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  data-oid="hnqtyr:"
                >
                  About Us
                </Link>
              </li>
              <li data-oid="i_4fbvi">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  data-oid="m954u_f"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="1y4igrx">
                <Link
                  href="/plb-book"
                  className="text-gray-400 hover:text-white"
                  data-oid="8nkqhz6"
                >
                  Property Launch Bible
                </Link>
              </li>
              <li data-oid="dap3z82">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white"
                  data-oid="uh-f554"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8" data-oid="aphek8h">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="6qon6lc"
          >
            <p className="text-gray-400 text-sm" data-oid="2sud-t-">
              &copy; {new Date().getFullYear()} Assembly SG. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-oid="f0_s9af">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="97ne6:_"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="l1znpss"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
                data-oid="k7x2k:x"
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
