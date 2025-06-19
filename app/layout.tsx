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
    <html lang="en" data-oid="eis7q-x">
      <body className="" data-oid="ap1-t5g">
        <ErrorBoundary data-oid="unhponb">
          <AuthProvider data-oid=".hgyta1">
            <CartProvider data-oid="fclue6m">
              <NetworkProvider data-oid="ts:mv3r">
                <ScrollToTop data-oid="oit7xec" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="xmen.9w"
                >
                  <main className="flex-grow" data-oid="2lsaxyw">
                    {children}
                  </main>
                  <Footer data-oid="sww3cm:" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid="bydmkd:" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
