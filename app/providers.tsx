"use client";

import { SessionProvider } from "next-auth/react";
import { NetworkProvider } from "@/context/network-context";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/context/auth-context";
import { ErrorBoundary } from "@/components/error-boundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary data-oid="2uktncx">
      <SessionProvider data-oid="hp_do-r">
        <AuthProvider data-oid="cj_wnhf">
          <CartProvider data-oid="pkozznv">
            <NetworkProvider data-oid="xvzn:nw">{children}</NetworkProvider>
          </CartProvider>
        </AuthProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}
