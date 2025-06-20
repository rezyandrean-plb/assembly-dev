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
    <html lang="en" data-oid="m7wzi0_">
      <body className="" data-oid="8:6h3kj">
        <ErrorBoundary data-oid="zhqy4ig">
          <AuthProvider data-oid="yknhzjw">
            <CartProvider data-oid="hmk8n6.">
              <NetworkProvider data-oid="-:e92vz">
                <ScrollToTop data-oid="n8b12dd" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="o31vpkp"
                >
                  <main className="flex-grow" data-oid="5h:grkm">
                    {children}
                  </main>
                  <Footer data-oid="1.wd-wf" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid="gi:d9v6" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
