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
      data-oid="dbg9j-g"
    >
      <ShoppingCart
        className="h-6 w-6 text-neutral-600 hover:text-primary transition-colors"
        data-oid="w-ic:cf"
      />

      {mounted && cart.length > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-[#ff6b35] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          data-oid="ilcptjz"
        >
          {cart.length}
        </span>
      )}
    </Link>
  );
}
