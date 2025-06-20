import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NetworkProvider } from "@/context/network-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/context/auth-context";
import { ErrorBoundary } from "@/components/error-boundary";
export const metadata: Metadata = {
  title: "Assembly.sg - Creating Creators, Empowering Realtors",
  description:
    "Singapore's premier knowledge hub for real estate professionals.",
  generator: "v0.dev",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-oid="c9o9dvi">
      <body className="" data-oid="k._:jgx">
        <ErrorBoundary data-oid="j0e_aj2">
          <AuthProvider data-oid="g51iqn1">
            <CartProvider data-oid="x.b0baa">
              <NetworkProvider data-oid="4yisy69">
                <ScrollToTop data-oid="wky2.jg" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="civ4fh4"
                >
                  <main className="flex-grow" data-oid="0:_2_qm">
                    {children}
                  </main>
                  <Footer data-oid="cmvq.tk" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid=".3hd861" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
