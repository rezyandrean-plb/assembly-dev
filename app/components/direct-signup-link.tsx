"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DirectSignupLink() {
  const router = useRouter();

  return (
    <a href="/signup" className="inline-block" data-oid="wacsd26">
      <Button
        className="bg-orange-500 text-white hover:bg-orange-600"
        data-oid=".dmsx9c"
      >
        Sign Up
      </Button>
    </a>
  );
}
