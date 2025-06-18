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
    <html lang="en" data-oid="u.0h.ak">
      <body className="" data-oid="hls:ri4">
        <ErrorBoundary data-oid="m14bgsi">
          <AuthProvider data-oid=":3i1c2o">
            <CartProvider data-oid="u_iu02p">
              <NetworkProvider data-oid="z:lq4vt">
                <ScrollToTop data-oid="fft9mx:" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="whcmh.d"
                >
                  <main className="flex-grow" data-oid="8lm:ovy">
                    {children}
                  </main>
                  <Footer data-oid="h8ra2pc" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid="lrg-a02" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
