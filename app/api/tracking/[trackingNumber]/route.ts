import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } },
) {
  const { trackingNumber } = params;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // For demo purposes, only accept tracking numbers that start with "ASG"
  if (!trackingNumber.toUpperCase().startsWith("ASG")) {
    return NextResponse.json(
      { error: "Tracking number not found" },
      { status: 404 },
    );
  }

  // Generate mock tracking data
  const now = new Date();
  const mockTrackingData = {
    trackingNumber: trackingNumber.toUpperCase(),
    orderId: `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    status: "in-transit",
    estimatedDelivery: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    carrier: "SingPost",
    recipientInfo: {
      name: "John Doe",
      address: "123 Example Street, Singapore 123456",
      phone: "+65 9123 4567",
    },
    events: [
      {
        id: "1",
        status: "Order Confirmed",
        description:
          "Your order has been confirmed and is being prepared for shipment",
        location: "Assembly SG Warehouse",
        timestamp: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        isCompleted: true,
      },
      {
        id: "2",
        status: "Processing",
        description: "Your order is being processed and packed",
        location: "Assembly SG Warehouse",
        timestamp: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        isCompleted: true,
      },
      {
        id: "3",
        status: "Shipped",
        description: "Your package has been shipped",
        location: "Assembly SG Warehouse",
        timestamp: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        isCompleted: true,
      },
      {
        id: "4",
        status: "In Transit",
        description: "Your package is on its way to you",
        location: "Singapore Post Distribution Center",
        timestamp: new Date(now.getTime() - 12 * 60 * 60 * 1000), // 12 hours ago
        isCompleted: true,
      },
      {
        id: "5",
        status: "Out for Delivery",
        description: "Your package is out for delivery",
        location: "Local Delivery Hub",
        timestamp: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
        isCompleted: false,
      },
      {
        id: "6",
        status: "Delivered",
        description: "Your package has been delivered",
        location: "123 Example Street, Singapore 123456",
        timestamp: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        isCompleted: false,
      },
    ],
  };

  return NextResponse.json(mockTrackingData);
}
