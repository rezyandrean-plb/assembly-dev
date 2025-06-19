"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestOrderPage() {
  const router = useRouter();

  useEffect(() => {
    // Create mock order details
    const mockOrderDetails = {
      orderId: `ORD-${Date.now()}-TEST123`,
      orderDate: new Date().toISOString(),
      items: [
        {
          id: "book-1",
          title: "Property Investment Mastery Book",
          price: 29.99,
          type: "book",
          quantity: 1,
          image: "/images/book-cover.jpg",
          instructor: "Paul Tan",
        },
        {
          id: "course-1",
          title: "Condo Investment Masterclass",
          price: 199.99,
          type: "course",
          quantity: 1,
          image: "/images/course-thumbnail.jpg",
          instructor: "Paul Tan",
        },
      ],

      totalAmount: 229.98,
      customerInfo: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+65 9123 4567",
        address: "123 Example Street, Singapore 123456",
      },
      hasBooks: true,
      trackingNumber: "ASG12345678TEST",
    };

    // Store in sessionStorage
    sessionStorage.setItem("orderDetails", JSON.stringify(mockOrderDetails));

    // Redirect to order-received page
    router.push("/order-received");
  }, [router]);

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center"
      data-oid="5so1um3"
    >
      <div className="text-center" data-oid="spl5mj2">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79] mx-auto mb-4"
          data-oid="h8l88a6"
        ></div>
        <p className="text-gray-600" data-oid="u7zxfon">
          Setting up test order...
        </p>
      </div>
    </div>
  );
}
