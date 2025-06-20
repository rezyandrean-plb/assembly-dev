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
    <html lang="en" data-oid=".kzs8f4">
      <body className="" data-oid="n8oqpwp">
        <ErrorBoundary data-oid="x04d6wj">
          <AuthProvider data-oid="hecp4i9">
            <CartProvider data-oid="vl_oglc">
              <NetworkProvider data-oid="xqw7brn">
                <ScrollToTop data-oid="5402foo" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="cpf0okn"
                >
                  <main className="flex-grow" data-oid="5pohv_7">
                    {children}
                  </main>
                  <Footer data-oid="-7ym_qo" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid="j-ne9mz" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
