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
    <AdminLayout data-oid="a6nuj-i">
      <div className="flex items-center justify-between" data-oid="y4xc42w">
        <div className="flex items-center gap-2" data-oid="un2idxj">
          <Button variant="ghost" size="icon" asChild data-oid="4f-9gs1">
            <Link href="/admin/orders" data-oid="9di.q4r">
              <ArrowLeft className="h-4 w-4" data-oid="w3x-peq" />
            </Link>
          </Button>
          <div data-oid="-j7fa_1">
            <h1 className="text-3xl font-bold" data-oid="l.6d5o.">
              Order Details
            </h1>
            <p className="text-muted-foreground" data-oid="va5bn0y">
              {order.id}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2" data-oid="pb_wgxk">
          <Button variant="outline" size="sm" data-oid="71f.mbu">
            <Mail className="mr-2 h-4 w-4" data-oid="_pnnhv." />
            Email Customer
          </Button>
          <Button variant="outline" size="sm" data-oid="o1cw9j5">
            <Printer className="mr-2 h-4 w-4" data-oid="r8eozpt" />
            Print Order
          </Button>
          <Button size="sm" data-oid="mt13isa">
            <FileText className="mr-2 h-4 w-4" data-oid="2axxg4g" />
            Generate Invoice
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3" data-oid="ekwktdk">
        <div className="md:col-span-2 space-y-6" data-oid="yi1mml1">
          <Card data-oid="vaw5mft">
            <CardHeader data-oid="s3my4o8">
              <CardTitle data-oid=":wu3pl-">Order Summary</CardTitle>
              <CardDescription data-oid="ouc2gzr">
                Order details and status information
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="s4y_g7w">
              <div className="grid gap-4 md:grid-cols-2" data-oid="bfya3j2">
                <div data-oid="b5znytb">
                  <p className="text-sm font-medium" data-oid="0bkmnya">
                    Order Status
                  </p>
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
                    data-oid="6sgqn7n"
                  >
                    {order.status}
                  </Badge>
                </div>
                <div data-oid="j6g4l.z">
                  <p className="text-sm font-medium" data-oid="6ye3epq">
                    Payment Status
                  </p>
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
                    data-oid="4b4re-n"
                  >
                    {order.paymentStatus}
                  </Badge>
                </div>
                <div data-oid="qwugue_">
                  <p className="text-sm font-medium" data-oid="fcj6rd8">
                    Order Date
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="6yo220h"
                  >
                    {order.date}
                  </p>
                </div>
                <div data-oid="bwpkh_2">
                  <p className="text-sm font-medium" data-oid="749fkbz">
                    Payment Method
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="g1kgowx"
                  >
                    {order.paymentMethod}
                  </p>
                </div>
              </div>

              <Separator className="my-6" data-oid="-7shri9" />

              <div data-oid=":nsf-hj">
                <h3 className="text-lg font-medium mb-4" data-oid="-_3in7l">
                  Order Items
                </h3>
                <div className="space-y-4" data-oid="l76dq97">
                  {order.items.map((item) => {
                    const ItemIcon = getItemTypeIcon(item.type);
                    return (
                      <div
                        key={item.id}
                        className="flex items-start gap-4 rounded-md border p-4"
                        data-oid="em:f3lo"
                      >
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-md bg-muted"
                          data-oid="1coe0qy"
                        >
                          <ItemIcon className="h-6 w-6" data-oid="bf-nwr7" />
                        </div>
                        <div className="flex-1" data-oid="ev69af.">
                          <div
                            className="flex items-center justify-between"
                            data-oid="wvgjoh_"
                          >
                            <div data-oid="_5-tdgk">
                              <p className="font-medium" data-oid=".ldus9k">
                                {item.name}
                              </p>
                              <p
                                className="text-sm text-muted-foreground"
                                data-oid="54ccu7q"
                              >
                                {item.type === "course"
                                  ? "Digital Course"
                                  : "Physical Book"}
                              </p>
                            </div>
                            <p className="font-medium" data-oid="44y7hb_">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          {item.type === "book" && (
                            <div
                              className="mt-2 rounded-md bg-muted p-2"
                              data-oid="abnjjjo"
                            >
                              <p
                                className="text-sm font-medium"
                                data-oid="bl4pex-"
                              >
                                Delivery Method: {item.deliveryMethod}
                              </p>
                              {item.deliveryMethod === "Home Delivery" && (
                                <div
                                  className="mt-1 flex items-center gap-2"
                                  data-oid="..x1gpe"
                                >
                                  <Truck
                                    className="h-4 w-4 text-muted-foreground"
                                    data-oid="tv8bg.n"
                                  />
                                  <p className="text-xs" data-oid="ut.t4_-">
                                    Tracking: {item.trackingNumber} (
                                    {item.carrier})
                                  </p>
                                </div>
                              )}
                              {item.deliveryMethod === "Self Collect" && (
                                <p className="mt-1 text-xs" data-oid="x64_5up">
                                  Pickup Location: {item.pickupLocation}
                                </p>
                              )}
                            </div>
                          )}

                          {item.type === "course" && (
                            <div
                              className="mt-2 rounded-md bg-muted p-2"
                              data-oid="m..iaaz"
                            >
                              <p
                                className="text-sm font-medium"
                                data-oid="4fy83l:"
                              >
                                Access Status:
                              </p>
                              <p className="mt-1 text-xs" data-oid="ip307p3">
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

              <Separator className="my-6" data-oid="ecoe9b1" />

              <div data-oid="nph3qjn">
                <h3 className="text-lg font-medium mb-4" data-oid="-.kc5xl">
                  Order History
                </h3>
                <div className="space-y-4" data-oid="heh5neg">
                  {order.history.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                      data-oid="s_w01hi"
                    >
                      <div
                        className="h-2 w-2 mt-2 rounded-full bg-primary"
                        data-oid="k8ps5_4"
                      />
                      <div className="flex-1" data-oid="ay91mf9">
                        <p className="font-medium" data-oid="7ll7n23">
                          {event.status}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="qogipwn"
                        >
                          {event.description}
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          data-oid="a6a0z:6"
                        >
                          {event.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="y:ngn:s">
            <CardHeader data-oid="xk1aed3">
              <CardTitle data-oid="wkqasa4">Update Order</CardTitle>
              <CardDescription data-oid="jak_us-">
                Change the status or add notes to this order
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="jvsxmv0">
              <div className="space-y-4" data-oid="8v8brzy">
                <div className="grid gap-4 md:grid-cols-2" data-oid=".kkx9j2">
                  <div className="space-y-2" data-oid="z.g-6:i">
                    <p className="text-sm font-medium" data-oid="awd:w:y">
                      Update Status
                    </p>
                    <Select defaultValue={order.status} data-oid="zywktp4">
                      <SelectTrigger data-oid="14-.nl5">
                        <SelectValue data-oid="s8j4kh0" />
                      </SelectTrigger>
                      <SelectContent data-oid="atfkv8h">
                        <SelectItem value="Pending" data-oid="ap.r1mu">
                          Pending
                        </SelectItem>
                        <SelectItem value="Processing" data-oid="9f.re7d">
                          Processing
                        </SelectItem>
                        <SelectItem value="Shipped" data-oid="cr:6tn2">
                          Shipped
                        </SelectItem>
                        <SelectItem value="Ready for Pickup" data-oid="p8m_k68">
                          Ready for Pickup
                        </SelectItem>
                        <SelectItem value="Completed" data-oid="b5s7836">
                          Completed
                        </SelectItem>
                        <SelectItem value="Cancelled" data-oid="tq42dq4">
                          Cancelled
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2" data-oid="p_blpkr">
                    <p className="text-sm font-medium" data-oid="vll9xhe">
                      Update Payment Status
                    </p>
                    <Select
                      defaultValue={order.paymentStatus}
                      data-oid="mx6u.9z"
                    >
                      <SelectTrigger data-oid="nfaykag">
                        <SelectValue data-oid="djn0jwf" />
                      </SelectTrigger>
                      <SelectContent data-oid="ad61nmd">
                        <SelectItem value="Awaiting Payment" data-oid="cur-16d">
                          Awaiting Payment
                        </SelectItem>
                        <SelectItem value="Paid" data-oid="z7s98a3">
                          Paid
                        </SelectItem>
                        <SelectItem value="Refunded" data-oid="n_432hn">
                          Refunded
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2" data-oid="3:j-egs">
                  <p className="text-sm font-medium" data-oid="3rqumxp">
                    Add Note
                  </p>
                  <Textarea
                    placeholder="Enter notes about this order..."
                    data-oid="6qt6w1t"
                  />
                </div>

                <Button data-oid="c7hkfso">Update Order</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6" data-oid="u8rko5_">
          <Card data-oid="9cvwmz:">
            <CardHeader data-oid="aq3bmlq">
              <CardTitle data-oid="_iz3dui">Customer Information</CardTitle>
            </CardHeader>
            <CardContent data-oid="5-mrzbm">
              <div className="flex items-center gap-4" data-oid="i0sdlby">
                <Avatar className="h-10 w-10" data-oid="bzoa07h">
                  <AvatarImage
                    src={order.customer.avatar || "/placeholder.svg"}
                    alt={order.customer.name}
                    data-oid="h.fho7n"
                  />
                  <AvatarFallback data-oid="xu5fs9o">
                    {order.customer.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div data-oid="f_blyx.">
                  <p className="font-medium" data-oid="try2-4g">
                    {order.customer.name}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="8pe19eh"
                  >
                    {order.customer.email}
                  </p>
                </div>
              </div>

              <Separator className="my-4" data-oid="196nwl1" />

              <div className="space-y-2" data-oid="b448uea">
                <p className="text-sm font-medium" data-oid="gm3tnz9">
                  Contact Information
                </p>
                <p className="text-sm" data-oid="n0893fq">
                  {order.customer.phone}
                </p>
                <p className="text-sm" data-oid=":fx-yue">
                  {order.customer.email}
                </p>
              </div>

              <Separator className="my-4" data-oid="yqp15gs" />

              <div className="space-y-2" data-oid="-.9.wpm">
                <p className="text-sm font-medium" data-oid="9ucfacw">
                  Shipping Address
                </p>
                <p className="text-sm whitespace-pre-line" data-oid="uyy5907">
                  {order.customer.address}
                </p>
              </div>

              <div className="mt-4" data-oid=":wfecez">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                  data-oid="ffudwim"
                >
                  <Link
                    href={`/admin/users/${order.customer.email.split("@")[0]}`}
                    data-oid="l__odra"
                  >
                    View Customer Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="9oimxyk">
            <CardHeader data-oid="5:-qmio">
              <CardTitle data-oid="d5_pym-">Order Summary</CardTitle>
            </CardHeader>
            <CardContent data-oid="oe9dmnp">
              <div className="space-y-2" data-oid="ce1hm87">
                <div
                  className="flex items-center justify-between"
                  data-oid="l2zuigj"
                >
                  <p className="text-sm" data-oid="8kwaspk">
                    Subtotal
                  </p>
                  <p className="font-medium" data-oid="z9pq-wl">
                    ${order.subtotal.toFixed(2)}
                  </p>
                </div>
                <div
                  className="flex items-center justify-between"
                  data-oid="hdxw6-7"
                >
                  <p className="text-sm" data-oid="ig8uz6w">
                    Tax
                  </p>
                  <p className="font-medium" data-oid="437bx5u">
                    ${order.tax.toFixed(2)}
                  </p>
                </div>
                <div
                  className="flex items-center justify-between"
                  data-oid="0-z:vt8"
                >
                  <p className="text-sm" data-oid="j336zhu">
                    Shipping
                  </p>
                  <p className="font-medium" data-oid="o97xnsh">
                    ${order.shipping.toFixed(2)}
                  </p>
                </div>
                <Separator data-oid="e_mwa6t" />
                <div
                  className="flex items-center justify-between font-medium"
                  data-oid="iy1drh0"
                >
                  <p data-oid="a2.znu8">Total</p>
                  <p data-oid="gfy3u91">${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2" data-oid="b0fleqs">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  data-oid="nj68l86"
                >
                  <Download className="mr-2 h-4 w-4" data-oid="o5eoaz7" />
                  Download Invoice
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="yenz.6a">
            <CardHeader data-oid="g32pv6k">
              <CardTitle data-oid="78v24:f">Notes</CardTitle>
            </CardHeader>
            <CardContent data-oid="o3_qygh">
              <p className="text-sm" data-oid="2-76bm7">
                {order.notes || "No notes for this order."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
