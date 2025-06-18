"use client";

import { useCart } from "@/components/cart-context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartIcon() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center"
      data-oid="4pvu:mt"
    >
      <ShoppingCart className="h-6 w-6 text-amber-500" data-oid="at4g1rd" />
      {mounted && cart.length > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          data-oid="qwt3v4_"
        >
          {cart.length}
        </span>
      )}
    </Link>
  );
}
