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
    <html lang="en" data-oid="tq.obm3">
      <body className="" data-oid="sn.4sk0">
        <Providers data-oid="ve0hf5x">
          <ScrollToTop data-oid="_u4wv8c" />
          <div
            className="relative min-h-screen flex flex-col bg-[#F5F5F5]"
            data-oid="qdk5evo"
          >
            <ConditionalHeader data-oid="1kx8_ps" />
            <main className="flex-grow" data-oid="onua6cg">
              {children}
            </main>
            <ConditionalFooter data-oid="1pogakd" />
          </div>
          <Toaster position="top-center" data-oid="xo-4sml" />
        </Providers>
      </body>
    </html>
  );
}
