"use client";

import { AdminLayout } from "@/components/admin-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Download,
  FileText,
  Mail,
  Package,
  Printer,
  Truck,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock order data - in a real app, you would fetch this based on the ID
  const order = {
    id: params.id,
    customer: {
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street, Apt 4B, New York, NY 10001",
    },
    date: "2025-06-03",
    total: 179.98,
    subtotal: 179.98,
    tax: 0,
    shipping: 0,
    status: "Processing",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card (Visa ending in 4242)",
    items: [
      {
        id: 1,
        type: "book",
        name: "Property Investment Guide 2025",
        price: 49.99,
        quantity: 1,
        deliveryMethod: "Home Delivery",
        trackingNumber: "TRK123456789",
        estimatedDelivery: "2025-06-10",
        carrier: "FedEx",
      },
      {
        id: 2,
        type: "course",
        name: "Property Investment Workshop",
        price: 129.99,
        accessType: "Digital",
        accessGranted: true,
        accessDate: "2025-06-03",
      },
    ],

    notes: "Customer requested gift wrapping for the book.",
    history: [
      {
        date: "2025-06-03 14:30:00",
        status: "Order Placed",
        description: "Order was placed by customer",
      },
      {
        date: "2025-06-03 14:31:00",
        status: "Payment Received",
        description: "Payment was successfully processed",
      },
      {
        date: "2025-06-03 15:15:00",
        status: "Processing",
        description: "Order is being prepared",
      },
    ],
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default";
      case "Processing":
        return "secondary";
      case "Shipped":
        return "secondary";
      case "Ready for Pickup":
        return "secondary";
      case "Pending":
        return "outline";
      case "Cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getPaymentStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Paid":
        return "default";
      case "Awaiting Payment":
        return "outline";
      case "Refunded":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getItemTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return BookOpen;
      case "book":
        return Package;
      default:
        return Package;
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Order Details</h1>
            <p className="text-muted-foreground">{order.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Mail className="mr-2 h-4 w-4" />
            Email Customer
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print Order
          </Button>
          <Button size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Generate Invoice
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                Order details and status information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">Order Status</p>
                  <Badge
                    className={
                      order.status === "Completed"
                        ? "bg-[#28A745] text-white"
                        : order.status === "Processing"
                          ? "bg-[#FFF3CD] text-[#856404]"
                          : order.status === "Shipped"
                            ? "bg-[#CCE5FF] text-[#00529B]"
                            : order.status === "Ready for Pickup"
                              ? "bg-[#E0E7FF] text-[#4F46E5]"
                              : order.status === "Pending"
                                ? "bg-[#E4E4E7] text-[#52525B]"
                                : order.status === "Cancelled"
                                  ? "bg-[#F8D7DA] text-[#DC3545]"
                                  : order.status === "Returned"
                                    ? "bg-[#FDEBD0] text-[#77370B]"
                                    : ""
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Status</p>
                  <Badge
                    className={
                      order.paymentStatus === "Paid"
                        ? "bg-[#28A745] text-white"
                        : order.paymentStatus === "Awaiting Payment"
                          ? "bg-[#E4E4E7] text-[#52525B]"
                          : order.paymentStatus === "Refunded"
                            ? "bg-[#FDEBD0] text-[#77370B]"
                            : ""
                    }
                  >
                    {order.paymentStatus}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Order Date</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Method</p>
                  <p className="text-sm text-muted-foreground">
                    {order.paymentMethod}
                  </p>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-medium mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item) => {
                    const ItemIcon = getItemTypeIcon(item.type);
                    return (
                      <div
                        key={item.id}
                        className="flex items-start gap-4 rounded-md border p-4"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                          <ItemIcon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.type === "course"
                                  ? "Digital Course"
                                  : "Physical Book"}
                              </p>
                            </div>
                            <p className="font-medium">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          {item.type === "book" && (
                            <div className="mt-2 rounded-md bg-muted p-2">
                              <p className="text-sm font-medium">
                                Delivery Method: {item.deliveryMethod}
                              </p>
                              {item.deliveryMethod === "Home Delivery" && (
                                <div className="mt-1 flex items-center gap-2">
                                  <Truck className="h-4 w-4 text-muted-foreground" />

                                  <p className="text-xs">
                                    Tracking: {item.trackingNumber} (
                                    {item.carrier})
                                  </p>
                                </div>
                              )}
                              {item.deliveryMethod === "Self Collect" && (
                                <p className="mt-1 text-xs">
                                  Pickup Location: {item.pickupLocation}
                                </p>
                              )}
                            </div>
                          )}

                          {item.type === "course" && (
                            <div className="mt-2 rounded-md bg-muted p-2">
                              <p className="text-sm font-medium">
                                Access Status:
                              </p>
                              <p className="mt-1 text-xs">
                                {item.accessGranted
                                  ? `Access granted on ${item.accessDate}`
                                  : "Access pending payment confirmation"}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-medium mb-4">Order History</h3>
                <div className="space-y-4">
                  {order.history.map((event, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary" />

                      <div className="flex-1">
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {event.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Order</CardTitle>
              <CardDescription>
                Change the status or add notes to this order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Update Status</p>
                    <Select defaultValue={order.status}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Processing">Processing</SelectItem>
                        <SelectItem value="Shipped">Shipped</SelectItem>
                        <SelectItem value="Ready for Pickup">
                          Ready for Pickup
                        </SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Update Payment Status</p>
                    <Select defaultValue={order.paymentStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Awaiting Payment">
                          Awaiting Payment
                        </SelectItem>
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Refunded">Refunded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Add Note</p>
                  <Textarea placeholder="Enter notes about this order..." />
                </div>

                <Button>Update Order</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={order.customer.avatar || "/placeholder.svg"}
                    alt={order.customer.name}
                  />

                  <AvatarFallback>
                    {order.customer.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{order.customer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.customer.email}
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <p className="text-sm font-medium">Contact Information</p>
                <p className="text-sm">{order.customer.phone}</p>
                <p className="text-sm">{order.customer.email}</p>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <p className="text-sm font-medium">Shipping Address</p>
                <p className="text-sm whitespace-pre-line">
                  {order.customer.address}
                </p>
              </div>

              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link
                    href={`/admin/users/${order.customer.email.split("@")[0]}`}
                  >
                    View Customer Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Subtotal</p>
                  <p className="font-medium">${order.subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Tax</p>
                  <p className="font-medium">${order.tax.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Shipping</p>
                  <p className="font-medium">${order.shipping.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <p>Total</p>
                  <p>${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Invoice
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {order.notes || "No notes for this order."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
