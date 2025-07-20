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

export default function OrdersPage() {
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
    <div className="space-y-6" data-oid="pd3m9md">
      <div className="flex items-center justify-between" data-oid="ardef-1">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="ijgqoe9">
          Orders & Sales
        </h1>
        <div className="flex items-center gap-2" data-oid="b2bg2h-">
          <Button
            variant="outline"
            className="border-gray-200"
            data-oid="-.3okzs"
          >
            <Download className="mr-2 h-4 w-4" data-oid="le_5pvo" />
            Export Orders
          </Button>
        </div>
      </div>

      <div
        className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        data-oid="4a.sff2"
      >
        <Card className="border-gray-200 shadow-md" data-oid="i3z5m.n">
          <CardHeader className="pb-2" data-oid="ja8yf7r">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="6m0:jaj"
            >
              Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="xfu5gqv">
            <div className="text-2xl font-bold" data-oid="2e4v257">
              {orders.length}
            </div>
            <p className="text-xs text-muted-foreground" data-oid="r5_kvw:">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md" data-oid=".yt3_1u">
          <CardHeader className="pb-2" data-oid="z_r--3g">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="1u.6v7y"
            >
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="kmvq3rb">
            <div className="text-2xl font-bold" data-oid=".qfa3nm">
              ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground" data-oid="47kz1oq">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md" data-oid="ef7-r7u">
          <CardHeader className="pb-2" data-oid="213aetu">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="v.47szu"
            >
              Course Sales
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="crw1s2f">
            <div className="text-2xl font-bold" data-oid="ktxfdsa">
              {
                orders.filter((order) =>
                  order.items.some((item) => item.type === "course"),
                ).length
              }
            </div>
            <p className="text-xs text-muted-foreground" data-oid="l1.6378">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md" data-oid="n4yr_lo">
          <CardHeader className="pb-2" data-oid="sjp_3z3">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="9jy2ngr"
            >
              Book Sales
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="onhbod0">
            <div className="text-2xl font-bold" data-oid="3w3j_2o">
              {
                orders.filter((order) =>
                  order.items.some((item) => item.type === "book"),
                ).length
              }
            </div>
            <p className="text-xs text-muted-foreground" data-oid="g1o5wtz">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div
        className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
        data-oid="c71be5f"
      >
        <Tabs defaultValue="all" className="w-full" data-oid="qi.d0xn">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
            data-oid="hv4kibe"
          >
            <TabsList
              className="bg-white border border-gray-200"
              data-oid="-6w6to4"
            >
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="eyfawxp"
              >
                All Orders
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="tt1_fha"
              >
                Completed
              </TabsTrigger>
              <TabsTrigger
                value="processing"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="0te1js-"
              >
                Processing
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="rej1661"
              >
                Pending
              </TabsTrigger>
            </TabsList>

            <div
              className="mt-4 flex items-center gap-2 sm:mt-0"
              data-oid="ogpbyu9"
            >
              <div className="relative" data-oid="bi82nzi">
                <Search
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                  data-oid="ax1htx."
                />
                <Input
                  type="search"
                  placeholder="Search orders..."
                  className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
                  data-oid="zpkkrmt"
                />
              </div>
              <Select defaultValue="all" data-oid="9:.q:w2">
                <SelectTrigger
                  className="w-[180px] border-gray-200"
                  data-oid="vobwemy"
                >
                  <SelectValue
                    placeholder="Filter by type"
                    data-oid="b18phu7"
                  />
                </SelectTrigger>
                <SelectContent data-oid="0t_ct38">
                  <SelectItem value="all" data-oid="ruo1hr1">
                    All Products
                  </SelectItem>
                  <SelectItem value="course" data-oid="o0x4lef">
                    Courses Only
                  </SelectItem>
                  <SelectItem value="book" data-oid="_hh4x:y">
                    Books Only
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-200"
                data-oid="wdb2z3j"
              >
                <Filter className="h-4 w-4" data-oid="rwo:3wa" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-4" data-oid="ejpq:37">
            <Card className="border-gray-200 shadow-md" data-oid="0hg-hxx">
              <CardHeader className="px-6 py-4" data-oid="0.qjp2t">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="xqo-f0_"
                >
                  All Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="goiykvh">
                <Table data-oid="ztu3qnz">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="-03igbl">
                    <TableRow data-oid="8ojejw3">
                      <TableHead data-oid="dhs0ig3">Order ID</TableHead>
                      <TableHead data-oid="tl9fgrh">Customer</TableHead>
                      <TableHead data-oid="c45_440">Date</TableHead>
                      <TableHead data-oid="m3x0igc">Total</TableHead>
                      <TableHead data-oid="qyd17ua">Status</TableHead>
                      <TableHead data-oid="zzsrunz">Payment</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="glj492g"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="v64zet8">
                    {orders.map((order) => (
                      <TableRow
                        key={order.id}
                        className="hover:bg-[#F6F8FF]"
                        data-oid="i34.nui"
                      >
                        <TableCell
                          className="font-medium text-[#123B79]"
                          data-oid="i0zm6xa"
                        >
                          {order.id}
                        </TableCell>
                        <TableCell data-oid="7.9642w">
                          <div
                            className="flex items-center gap-3"
                            data-oid="28dsy9c"
                          >
                            <Avatar
                              className="h-8 w-8 border border-[#E8EFFF]"
                              data-oid="8s8udpa"
                            >
                              <AvatarImage
                                src={
                                  order.customer.avatar || "/placeholder.svg"
                                }
                                alt={order.customer.name}
                                data-oid="p45pe6q"
                              />

                              <AvatarFallback
                                className="bg-[#123B79] text-white"
                                data-oid="8529g_2"
                              >
                                {order.customer.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div data-oid="d1o0xa2">
                              <div className="font-medium" data-oid="dgib.d5">
                                {order.customer.name}
                              </div>
                              <div
                                className="text-xs text-muted-foreground"
                                data-oid="dcg3at0"
                              >
                                {order.customer.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-oid="xt-aqc_">{order.date}</TableCell>
                        <TableCell className="font-medium" data-oid="3zq4d:d">
                          ${order.total.toFixed(2)}
                        </TableCell>
                        <TableCell data-oid="gu191wd">
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
                            data-oid="iiyzj.o"
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell data-oid="vxiu7k_">
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
                            data-oid="0vp_2qq"
                          >
                            {order.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell data-oid="4w9c5.8">
                          <DropdownMenu data-oid="gu3njgt">
                            <DropdownMenuTrigger asChild data-oid="ca1_si_">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="cqalqb7"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="8_.nkh7"
                                />
                                <span className="sr-only" data-oid="tg5zhzw">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="uhdwy9f">
                              <DropdownMenuItem asChild data-oid="p85jlqu">
                                <Link
                                  href={`/admin/orders/${order.id}`}
                                  className="flex items-center"
                                  data-oid="vxx3-t2"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="3zrxdti"
                                  />
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="hxijhe_">
                                <Link
                                  href={`/admin/orders/${order.id}/invoice`}
                                  className="flex items-center"
                                  data-oid="-_kyi_0"
                                >
                                  <FileText
                                    className="mr-2 h-4 w-4"
                                    data-oid="mmmm:a_"
                                  />
                                  View Invoice
                                </Link>
                              </DropdownMenuItem>
                              {order.items.some(
                                (item) =>
                                  item.type === "book" &&
                                  item.deliveryMethod === "Home Delivery",
                              ) && (
                                <DropdownMenuItem asChild data-oid="mubw402">
                                  <Link
                                    href={`/admin/orders/${order.id}/tracking`}
                                    className="flex items-center"
                                    data-oid="p3eh70x"
                                  >
                                    <Truck
                                      className="mr-2 h-4 w-4"
                                      data-oid="s65mw.-"
                                    />
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

          <TabsContent value="completed" className="mt-4" data-oid="gf.jclr">
            <Card className="border-gray-200 shadow-md" data-oid="jmd-45:">
              <CardHeader className="px-6 py-4" data-oid="9sqneq-">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="n8m5qth"
                >
                  Completed Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="s5dprif">
                <Table data-oid="w31vwbd">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="mzoa374">
                    <TableRow data-oid="jn3bl5o">
                      <TableHead data-oid="jtkn4co">Order ID</TableHead>
                      <TableHead data-oid="b:28l5m">Customer</TableHead>
                      <TableHead data-oid="78.y6dk">Date</TableHead>
                      <TableHead data-oid="d3..9lb">Total</TableHead>
                      <TableHead data-oid="k8kmqr_">Payment</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="q_.n5-l"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="zm6f74m">
                    {orders
                      .filter((order) => order.status === "Completed")
                      .map((order) => (
                        <TableRow
                          key={order.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid="--9s1uc"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="-cb0g1g"
                          >
                            {order.id}
                          </TableCell>
                          <TableCell data-oid="2.3b8zs">
                            <div
                              className="flex items-center gap-3"
                              data-oid=".hm8ijb"
                            >
                              <Avatar
                                className="h-8 w-8 border border-[#E8EFFF]"
                                data-oid=".e11ag_"
                              >
                                <AvatarImage
                                  src={
                                    order.customer.avatar || "/placeholder.svg"
                                  }
                                  alt={order.customer.name}
                                  data-oid="es4im.-"
                                />

                                <AvatarFallback
                                  className="bg-[#123B79] text-white"
                                  data-oid="7:lei6."
                                >
                                  {order.customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div data-oid="kqw10w4">
                                <div className="font-medium" data-oid="1pz_l06">
                                  {order.customer.name}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="grxnor3"
                                >
                                  {order.customer.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="wte6bdz">{order.date}</TableCell>
                          <TableCell className="font-medium" data-oid="px-21u:">
                            ${order.total.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="4pz9fkq">
                            <Badge
                              className="bg-[#28A745] text-white"
                              data-oid="08i9314"
                            >
                              {order.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell data-oid="3if9-e0">
                            <DropdownMenu data-oid="cl_n58a">
                              <DropdownMenuTrigger asChild data-oid="nkmfn9t">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="i3ndjbs"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="avo3may"
                                  />
                                  <span className="sr-only" data-oid="qcj0au8">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="6spq66q"
                              >
                                <DropdownMenuItem asChild data-oid="h4fr-g6">
                                  <Link
                                    href={`/admin/orders/${order.id}`}
                                    className="flex items-center"
                                    data-oid="1j1kdo8"
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="3n6ormi"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="cv8q8os">
                                  <Link
                                    href={`/admin/orders/${order.id}/invoice`}
                                    className="flex items-center"
                                    data-oid="xj2t2js"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="p:obbct"
                                    />
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

          <TabsContent value="processing" className="mt-4" data-oid="2hfn-ws">
            <Card className="border-gray-200 shadow-md" data-oid="sya4dqe">
              <CardHeader className="px-6 py-4" data-oid="h5bab4l">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="zxzdryj"
                >
                  Processing Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="wecg2a3">
                <Table data-oid="7ywgb4m">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="mbplidz">
                    <TableRow data-oid="z95_h7h">
                      <TableHead data-oid="mzuwitg">Order ID</TableHead>
                      <TableHead data-oid="1tbwnf1">Customer</TableHead>
                      <TableHead data-oid="b6xhtd0">Date</TableHead>
                      <TableHead data-oid="a5rbgd6">Total</TableHead>
                      <TableHead data-oid="vx5ojb5">Payment</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="diqcjk1"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid=".22s4gx">
                    {orders
                      .filter((order) => order.status === "Processing")
                      .map((order) => (
                        <TableRow
                          key={order.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid=".a1z_sf"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="9dajgvd"
                          >
                            {order.id}
                          </TableCell>
                          <TableCell data-oid="b4n3u92">
                            <div
                              className="flex items-center gap-3"
                              data-oid="tjhjnrz"
                            >
                              <Avatar
                                className="h-8 w-8 border border-[#E8EFFF]"
                                data-oid="zx11m85"
                              >
                                <AvatarImage
                                  src={
                                    order.customer.avatar || "/placeholder.svg"
                                  }
                                  alt={order.customer.name}
                                  data-oid="rgqby.l"
                                />

                                <AvatarFallback
                                  className="bg-[#123B79] text-white"
                                  data-oid="rjglh1."
                                >
                                  {order.customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div data-oid="e4pvs4g">
                                <div className="font-medium" data-oid="kxhish8">
                                  {order.customer.name}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="7t702vn"
                                >
                                  {order.customer.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="pp2w188">{order.date}</TableCell>
                          <TableCell className="font-medium" data-oid="d-tq1.:">
                            ${order.total.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="id1y.kp">
                            <Badge
                              className="bg-[#28A745] text-white"
                              data-oid="vs37kk4"
                            >
                              {order.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell data-oid="8ru0p.7">
                            <DropdownMenu data-oid="h2mqvsb">
                              <DropdownMenuTrigger asChild data-oid="qghvbe0">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="yel236f"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="-5jho23"
                                  />
                                  <span className="sr-only" data-oid="3-34-04">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="y57521f"
                              >
                                <DropdownMenuItem asChild data-oid=":sh.pwv">
                                  <Link
                                    href={`/admin/orders/${order.id}`}
                                    className="flex items-center"
                                    data-oid="7hlzvq6"
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="-u-qnml"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="iz79q4l">
                                  <Link
                                    href={`/admin/orders/${order.id}/invoice`}
                                    className="flex items-center"
                                    data-oid="hjgtqvb"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="c1n.pad"
                                    />
                                    View Invoice
                                  </Link>
                                </DropdownMenuItem>
                                {order.items.some(
                                  (item) =>
                                    item.type === "book" &&
                                    item.deliveryMethod === "Home Delivery",
                                ) && (
                                  <DropdownMenuItem asChild data-oid=":poeagp">
                                    <Link
                                      href={`/admin/orders/${order.id}/tracking`}
                                      className="flex items-center"
                                      data-oid="33tcr4u"
                                    >
                                      <Truck
                                        className="mr-2 h-4 w-4"
                                        data-oid="mud9w58"
                                      />
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

          <TabsContent value="pending" className="mt-4" data-oid="c7.a.bs">
            <Card className="border-gray-200 shadow-md" data-oid="5oa9adj">
              <CardHeader className="px-6 py-4" data-oid="hgjm3hu">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="i6xiraa"
                >
                  Pending Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="w.advc1">
                <Table data-oid="t-zpeh0">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="e_zv89d">
                    <TableRow data-oid="wpl5fru">
                      <TableHead data-oid="c0_b9bm">Order ID</TableHead>
                      <TableHead data-oid="97qq:x8">Customer</TableHead>
                      <TableHead data-oid="_d-x_xm">Date</TableHead>
                      <TableHead data-oid="c84ivjl">Total</TableHead>
                      <TableHead data-oid="4cxx0dx">Payment</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="xi7pg_h"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="4ceewh7">
                    {orders
                      .filter((order) => order.status === "Pending")
                      .map((order) => (
                        <TableRow
                          key={order.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid=".ay9aha"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="suwozwm"
                          >
                            {order.id}
                          </TableCell>
                          <TableCell data-oid="caadsso">
                            <div
                              className="flex items-center gap-3"
                              data-oid="19xefsy"
                            >
                              <Avatar
                                className="h-8 w-8 border border-[#E8EFFF]"
                                data-oid="7butmh:"
                              >
                                <AvatarImage
                                  src={
                                    order.customer.avatar || "/placeholder.svg"
                                  }
                                  alt={order.customer.name}
                                  data-oid="shtqi6t"
                                />

                                <AvatarFallback
                                  className="bg-[#123B79] text-white"
                                  data-oid="b7jh1_n"
                                >
                                  {order.customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div data-oid="9-6fwae">
                                <div className="font-medium" data-oid="y25i:5y">
                                  {order.customer.name}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="c-p7fey"
                                >
                                  {order.customer.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="aim4tht">{order.date}</TableCell>
                          <TableCell className="font-medium" data-oid=".6fvp5j">
                            ${order.total.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="2-hymp1">
                            <Badge
                              className="bg-[#E4E4E7] text-[#52525B]"
                              data-oid=":7aol4j"
                            >
                              {order.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell data-oid=":k_4m0m">
                            <DropdownMenu data-oid="k.oskd0">
                              <DropdownMenuTrigger asChild data-oid="pe3qrmq">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="xpfmrsj"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="k7gp_t9"
                                  />
                                  <span className="sr-only" data-oid="16i-7a0">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="wo3z6s6"
                              >
                                <DropdownMenuItem asChild data-oid="yg1g.wr">
                                  <Link
                                    href={`/admin/orders/${order.id}`}
                                    className="flex items-center"
                                    data-oid="rk:n08."
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="rke5zh6"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="gnzujrr">
                                  <Link
                                    href={`/admin/orders/${order.id}/invoice`}
                                    className="flex items-center"
                                    data-oid="7-:.dlj"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="1hh.l-x"
                                    />
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
