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
    <html lang="en" data-oid="hvqnqr7">
      <body className="" data-oid="a4cvbpu">
        <ErrorBoundary data-oid=".7:ug7d">
          <AuthProvider data-oid="9.e427k">
            <CartProvider data-oid="-w2xuek">
              <NetworkProvider data-oid="b83:6ht">
                <ScrollToTop data-oid="8ro1_8f" />
                <div
                  className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
                  data-oid="riy.zyn"
                >
                  <main className="flex-grow" data-oid="iafwm6g">
                    {children}
                  </main>
                  <Footer data-oid="d833p4:" />
                </div>
              </NetworkProvider>
              <Toaster position="top-center" data-oid="-_brdjm" />
            </CartProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
