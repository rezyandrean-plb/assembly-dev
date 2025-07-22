"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  FileText,
  Truck,
  Package,
  BookOpen,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function OrdersPage() {
  const orders = [
    {
      id: "ORD-2025-1001",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-01",
      total: 149.99,
      status: "Completed",
      paymentStatus: "Paid",
      items: [
        {
          type: "course",
          name: "Making The Right Move",
          price: 149.99,
          accessType: "Digital",
        },
      ],
    },
    {
      id: "ORD-2025-1002",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-02",
      total: 89.99,
      status: "Completed",
      paymentStatus: "Paid",
      items: [
        {
          type: "course",
          name: "The Shift in Singapore's Real Estate Market 2023",
          price: 89.99,
          accessType: "Digital",
        },
      ],
    },
    {
      id: "ORD-2025-1003",
      customer: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-03",
      total: 179.98,
      status: "Processing",
      paymentStatus: "Paid",
      items: [
        {
          type: "book",
          name: "Property Launch Bible",
          price: 49.99,
          deliveryMethod: "Home Delivery",
          trackingNumber: "TRK123456789",
        },
        {
          type: "course",
          name: "Property Investment Workshop",
          price: 129.99,
          accessType: "Digital",
        },
      ],
    },
    {
      id: "ORD-2025-1004",
      customer: {
        name: "Emily Davis",
        email: "emily@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-04",
      total: 34.99,
      status: "Ready for Pickup",
      paymentStatus: "Paid",
      items: [
        {
          type: "book",
          name: "Property Investment Guide 2025",
          price: 34.99,
          deliveryMethod: "Self Collect",
          pickupLocation: "Main Campus Store",
        },
      ],
    },
    {
      id: "ORD-2025-1005",
      customer: {
        name: "David Wilson",
        email: "david@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-05",
      total: 199.99,
      status: "Completed",
      paymentStatus: "Paid",
      items: [
        {
          type: "course",
          name: "The Art of Real Estate Investment",
          price: 199.99,
          accessType: "Digital",
        },
      ],
    },
    {
      id: "ORD-2025-1006",
      customer: {
        name: "Jennifer Lee",
        email: "jennifer@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-06",
      total: 169.98,
      status: "Shipped",
      paymentStatus: "Paid",
      items: [
        {
          type: "book",
          name: "Property Investment Strategy Guide",
          price: 39.99,
          deliveryMethod: "Home Delivery",
          trackingNumber: "TRK987654321",
        },
        {
          type: "book",
          name: "Real Estate Market Analysis",
          price: 29.99,
          deliveryMethod: "Home Delivery",
          trackingNumber: "TRK987654321",
        },
        {
          type: "course",
          name: "Digital Marketing Masterclass",
          price: 99.99,
          accessType: "Digital",
        },
      ],
    },
    {
      id: "ORD-2025-1007",
      customer: {
        name: "Robert Taylor",
        email: "robert@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2025-06-07",
      total: 129.99,
      status: "Pending",
      paymentStatus: "Awaiting Payment",
      items: [
        {
          type: "course",
          name: "Module 1 of Niche Positioning Masterclass",
          price: 129.99,
          accessType: "Digital",
        },
      ],
    },
  ];

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
        return "secondary";
      case "Cancelled":
        return "destructive";
      case "Returned":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getPaymentStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Paid":
        return "default";
      case "Awaiting Payment":
        return "secondary";
      case "Refunded":
        return "outline";
      default:
        return "secondary";
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">Orders & Sales</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-gray-200">
            <Download className="mr-2 h-4 w-4" />
            Export Orders
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orders.length}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Course Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                orders.filter((order) =>
                  order.items.some((item) => item.type === "course"),
                ).length
              }
            </div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Book Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                orders.filter((order) =>
                  order.items.some((item) => item.type === "book"),
                ).length
              }
            </div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                All Orders
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Completed
              </TabsTrigger>
              <TabsTrigger
                value="processing"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Processing
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Pending
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 flex items-center gap-2 sm:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

                <Input
                  type="search"
                  placeholder="Search orders..."
                  className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-gray-200">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="course">Courses Only</SelectItem>
                  <SelectItem value="book">Books Only</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="border-gray-200">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  All Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="hover:bg-[#F6F8FF]">
                        <TableCell className="font-medium text-[#123B79]">
                          {order.id}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 border border-[#E8EFFF]">
                              <AvatarImage
                                src={
                                  order.customer.avatar || "/placeholder.svg"
                                }
                                alt={order.customer.name}
                              />

                              <AvatarFallback className="bg-[#123B79] text-white">
                                {order.customer.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">
                                {order.customer.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {order.customer.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="font-medium">
                          ${order.total.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={getStatusBadgeVariant(order.status)}
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
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={getPaymentStatusBadgeVariant(
                              order.paymentStatus,
                            )}
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
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />

                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/orders/${order.id}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/orders/${order.id}/invoice`}
                                  className="flex items-center"
                                >
                                  <FileText className="mr-2 h-4 w-4" />
                                  View Invoice
                                </Link>
                              </DropdownMenuItem>
                              {order.items.some(
                                (item) =>
                                  item.type === "book" &&
                                  item.deliveryMethod === "Home Delivery",
                              ) && (
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}/tracking`}
                                    className="flex items-center"
                                  >
                                    <Truck className="mr-2 h-4 w-4" />
                                    Track Shipment
                                  </Link>
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  Completed Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders
                      .filter((order) => order.status === "Completed")
                      .map((order) => (
                        <TableRow key={order.id} className="hover:bg-[#F6F8FF]">
                          <TableCell className="font-medium text-[#123B79]">
                            {order.id}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8 border border-[#E8EFFF]">
                                <AvatarImage
                                  src={
                                    order.customer.avatar || "/placeholder.svg"
                                  }
                                  alt={order.customer.name}
                                />

                                <AvatarFallback className="bg-[#123B79] text-white">
                                  {order.customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">
                                  {order.customer.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {order.customer.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell className="font-medium">
                            ${order.total.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-[#28A745] text-white">
                              {order.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />

                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}/invoice`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Invoice
                                  </Link>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processing" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  Processing Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders
                      .filter((order) => order.status === "Processing")
                      .map((order) => (
                        <TableRow key={order.id} className="hover:bg-[#F6F8FF]">
                          <TableCell className="font-medium text-[#123B79]">
                            {order.id}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8 border border-[#E8EFFF]">
                                <AvatarImage
                                  src={
                                    order.customer.avatar || "/placeholder.svg"
                                  }
                                  alt={order.customer.name}
                                />

                                <AvatarFallback className="bg-[#123B79] text-white">
                                  {order.customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">
                                  {order.customer.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {order.customer.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell className="font-medium">
                            ${order.total.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-[#28A745] text-white">
                              {order.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />

                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}/invoice`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Invoice
                                  </Link>
                                </DropdownMenuItem>
                                {order.items.some(
                                  (item) =>
                                    item.type === "book" &&
                                    item.deliveryMethod === "Home Delivery",
                                ) && (
                                  <DropdownMenuItem asChild>
                                    <Link
                                      href={`/admin/orders/${order.id}/tracking`}
                                      className="flex items-center"
                                    >
                                      <Truck className="mr-2 h-4 w-4" />
                                      Track Shipment
                                    </Link>
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  Pending Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders
                      .filter((order) => order.status === "Pending")
                      .map((order) => (
                        <TableRow key={order.id} className="hover:bg-[#F6F8FF]">
                          <TableCell className="font-medium text-[#123B79]">
                            {order.id}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8 border border-[#E8EFFF]">
                                <AvatarImage
                                  src={
                                    order.customer.avatar || "/placeholder.svg"
                                  }
                                  alt={order.customer.name}
                                />

                                <AvatarFallback className="bg-[#123B79] text-white">
                                  {order.customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">
                                  {order.customer.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {order.customer.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell className="font-medium">
                            ${order.total.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-[#E4E4E7] text-[#52525B]">
                              {order.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />

                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/orders/${order.id}/invoice`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Invoice
                                  </Link>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Export as dynamic to skip SSR
export default dynamic(() => Promise.resolve(OrdersPage), {
  ssr: false,
});
