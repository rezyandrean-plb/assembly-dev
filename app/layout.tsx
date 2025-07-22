import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import { ConditionalHeader } from "@/components/conditional-header";
import { ConditionalFooter } from "@/components/conditional-footer";
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
    <html lang="en">
      <body className="">
        <Providers>
          <ScrollToTop />
          <div className="relative min-h-screen flex flex-col bg-[#F5F5F5]">
            <ConditionalHeader />
            <main className="flex-grow">{children}</main>
            <ConditionalFooter />
          </div>
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
