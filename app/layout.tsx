import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

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
        <Providers data-oid="_t36pw1">
          <ScrollToTop data-oid="n8b12dd" />
          <div
            className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
            data-oid="o31vpkp"
          >
            <Navbar data-oid="persistent-navbar" />
            <main className="flex-grow pt-16" data-oid="5h:grkm">
              {children}
            </main>
            <Footer data-oid="1.wd-wf" />
          </div>
          <Toaster position="top-center" data-oid="gi:d9v6" />
        </Providers>
      </body>
    </html>
  );
}
