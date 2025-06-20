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
    <html lang="en" data-oid="7afg:0n">
      <body className="" data-oid="lm3e14t">
        <ErrorBoundary data-oid="nry45kf">
          <AuthProvider data-oid="r:sr6xj">
            <CartProvider data-oid=".kt_7:h">
              <NetworkProvider data-oid="tthq6ja">
                <ScrollToTop data-oid="68c1p7v" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="1u8h9og"
                >
                  <main className="flex-grow" data-oid="q.145b9">
                    {children}
                  </main>
                  <Footer data-oid="i1rtb5t" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid="z-d-nex" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
