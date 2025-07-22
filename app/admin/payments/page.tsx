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
  CreditCard,
  RefreshCcw,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-2025-1001",
      orderId: "ORD-2025-1001",
      customer: "John Smith",
      amount: 149.99,
      method: "Credit Card",
      cardInfo: "Visa ending in 4242",
      status: "Completed",
      date: "2025-06-01",
    },
    {
      id: "PAY-2025-1002",
      orderId: "ORD-2025-1002",
      customer: "Sarah Johnson",
      amount: 89.99,
      method: "PayPal",
      cardInfo: "sarah@example.com",
      status: "Completed",
      date: "2025-06-02",
    },
    {
      id: "PAY-2025-1003",
      orderId: "ORD-2025-1003",
      customer: "Michael Brown",
      amount: 179.98,
      method: "Credit Card",
      cardInfo: "Mastercard ending in 5678",
      status: "Completed",
      date: "2025-06-03",
    },
    {
      id: "PAY-2025-1004",
      orderId: "ORD-2025-1004",
      customer: "Emily Davis",
      amount: 34.99,
      method: "Bank Transfer",
      cardInfo: "Direct Deposit",
      status: "Completed",
      date: "2025-06-04",
    },
    {
      id: "PAY-2025-1005",
      orderId: "ORD-2025-1005",
      customer: "David Wilson",
      amount: 199.99,
      method: "Credit Card",
      cardInfo: "Amex ending in 9876",
      status: "Completed",
      date: "2025-06-05",
    },
    {
      id: "PAY-2025-1006",
      orderId: "ORD-2025-1006",
      customer: "Jennifer Lee",
      amount: 169.98,
      method: "Credit Card",
      cardInfo: "Visa ending in 1234",
      status: "Completed",
      date: "2025-06-06",
    },
    {
      id: "PAY-2025-1007",
      orderId: "ORD-2025-1007",
      customer: "Robert Taylor",
      amount: 129.99,
      method: "Credit Card",
      cardInfo: "Visa ending in 5432",
      status: "Failed",
      date: "2025-06-07",
    },
    {
      id: "PAY-2025-1008",
      orderId: "ORD-2025-1008",
      customer: "Lisa Anderson",
      amount: 79.99,
      method: "PayPal",
      cardInfo: "lisa@example.com",
      status: "Pending",
      date: "2025-06-08",
    },
    {
      id: "PAY-2025-1009",
      orderId: "ORD-2025-1003",
      customer: "Michael Brown",
      amount: 179.98,
      method: "Credit Card",
      cardInfo: "Mastercard ending in 5678",
      status: "Refunded",
      date: "2025-06-09",
    },
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default";
      case "Pending":
        return "secondary";
      case "Failed":
        return "destructive";
      case "Refunded":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">
          Payment Management
        </h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-gray-200">
            <FileText className="mr-2 h-4 w-4" />
            Export Payments
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Total Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payments.length}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
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
              $
              {payments
                .reduce((sum, payment) => sum + payment.amount, 0)
                .toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Refunded Amount
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {payments
                .filter((payment) => payment.status === "Refunded")
                .reduce((sum, payment) => sum + payment.amount, 0)
                .toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">-2% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Failed Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {payments.filter((payment) => payment.status === "Failed").length}
            </div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
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
                All Payments
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Completed
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="failed"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Failed
              </TabsTrigger>
              <TabsTrigger
                value="refunded"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
              >
                Refunded
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 flex items-center gap-2 sm:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

                <Input
                  type="search"
                  placeholder="Search payments..."
                  className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-gray-200">
                  <SelectValue placeholder="Filter by method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
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
                  All Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id} className="hover:bg-[#F6F8FF]">
                        <TableCell className="font-medium text-[#123B79]">
                          {payment.id}
                        </TableCell>
                        <TableCell>
                          <Link
                            href={`/admin/orders/${payment.orderId}`}
                            className="text-[#123B79] hover:underline"
                          >
                            {payment.orderId}
                          </Link>
                        </TableCell>
                        <TableCell>{payment.customer}</TableCell>
                        <TableCell className="font-medium">
                          ${payment.amount.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />

                            <div>
                              <div className="text-sm font-medium">
                                {payment.method}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {payment.cardInfo}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={getStatusBadgeVariant(payment.status)}
                            className={
                              payment.status === "Completed"
                                ? "bg-[#28A745] text-white"
                                : payment.status === "Pending"
                                  ? "bg-[#E4E4E7] text-[#52525B]"
                                  : payment.status === "Failed"
                                    ? "bg-[#F8D7DA] text-[#DC3545]"
                                    : payment.status === "Refunded"
                                      ? "bg-[#FDEBD0] text-[#77370B]"
                                      : ""
                            }
                          >
                            {payment.status === "Failed" && (
                              <AlertCircle className="mr-1 h-3 w-3" />
                            )}
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{payment.date}</TableCell>
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
                                  href={`/admin/payments/${payment.id}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/payments/${payment.id}/receipt`}
                                  className="flex items-center"
                                >
                                  <FileText className="mr-2 h-4 w-4" />
                                  View Receipt
                                </Link>
                              </DropdownMenuItem>
                              {payment.status === "Failed" && (
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/retry`}
                                    className="flex items-center"
                                  >
                                    <RefreshCcw className="mr-2 h-4 w-4" />
                                    Retry Payment
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              {payment.status === "Completed" && (
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/refund`}
                                    className="flex items-center"
                                  >
                                    <RefreshCcw className="mr-2 h-4 w-4" />
                                    Process Refund
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
                  Completed Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments
                      .filter((payment) => payment.status === "Completed")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                        >
                          <TableCell className="font-medium text-[#123B79]">
                            {payment.id}
                          </TableCell>
                          <TableCell>
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell>{payment.customer}</TableCell>
                          <TableCell className="font-medium">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-muted-foreground" />

                              <div>
                                <div className="text-sm font-medium">
                                  {payment.method}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{payment.date}</TableCell>
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
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Receipt
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/refund`}
                                    className="flex items-center"
                                  >
                                    <RefreshCcw className="mr-2 h-4 w-4" />
                                    Process Refund
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

          <TabsContent value="pending" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  Pending Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments
                      .filter((payment) => payment.status === "Pending")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                        >
                          <TableCell className="font-medium text-[#123B79]">
                            {payment.id}
                          </TableCell>
                          <TableCell>
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell>{payment.customer}</TableCell>
                          <TableCell className="font-medium">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-muted-foreground" />

                              <div>
                                <div className="text-sm font-medium">
                                  {payment.method}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{payment.date}</TableCell>
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
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Receipt
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

          <TabsContent value="failed" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  Failed Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments
                      .filter((payment) => payment.status === "Failed")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                        >
                          <TableCell className="font-medium text-[#123B79]">
                            {payment.id}
                          </TableCell>
                          <TableCell>
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell>{payment.customer}</TableCell>
                          <TableCell className="font-medium">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-muted-foreground" />

                              <div>
                                <div className="text-sm font-medium">
                                  {payment.method}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{payment.date}</TableCell>
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
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Receipt
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/retry`}
                                    className="flex items-center"
                                  >
                                    <RefreshCcw className="mr-2 h-4 w-4" />
                                    Retry Payment
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

          <TabsContent value="refunded" className="mt-4">
            <Card className="border-gray-200 shadow-md">
              <CardHeader className="px-6 py-4">
                <CardTitle className="text-base text-[#123B79]">
                  Refunded Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F6F8FF]">
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments
                      .filter((payment) => payment.status === "Refunded")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                        >
                          <TableCell className="font-medium text-[#123B79]">
                            {payment.id}
                          </TableCell>
                          <TableCell>
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell>{payment.customer}</TableCell>
                          <TableCell className="font-medium">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-muted-foreground" />

                              <div>
                                <div className="text-sm font-medium">
                                  {payment.method}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{payment.date}</TableCell>
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
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Receipt
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
