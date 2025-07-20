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
    <div className="space-y-6" data-oid="jfic_y-">
      <div className="flex items-center justify-between" data-oid="0e4kf_.">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="ja3ef.1">
          Payment Management
        </h1>
        <div className="flex items-center gap-2" data-oid="8aio99s">
          <Button
            variant="outline"
            className="border-gray-200"
            data-oid="2ru_g.p"
          >
            <FileText className="mr-2 h-4 w-4" data-oid="53ju2f1" />
            Export Payments
          </Button>
        </div>
      </div>

      <div
        className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        data-oid="56x30rb"
      >
        <Card className="border-gray-200 shadow-md" data-oid="j00412j">
          <CardHeader className="pb-2" data-oid="2n4f:8s">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="-2j7lbo"
            >
              Total Payments
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="s71l:j9">
            <div className="text-2xl font-bold" data-oid="jrv5_5h">
              {payments.length}
            </div>
            <p className="text-xs text-muted-foreground" data-oid="1-b6r1x">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md" data-oid="q9w-sol">
          <CardHeader className="pb-2" data-oid="3d.g8uv">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="gzlz9_s"
            >
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="m_-pq1h">
            <div className="text-2xl font-bold" data-oid="clkibum">
              $
              {payments
                .reduce((sum, payment) => sum + payment.amount, 0)
                .toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground" data-oid="ho46j7t">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md" data-oid="16:fj58">
          <CardHeader className="pb-2" data-oid="xcsnsto">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="yci:an_"
            >
              Refunded Amount
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="_6_5yui">
            <div className="text-2xl font-bold" data-oid="hf1o8-m">
              $
              {payments
                .filter((payment) => payment.status === "Refunded")
                .reduce((sum, payment) => sum + payment.amount, 0)
                .toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground" data-oid="qtzdd4d">
              -2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-md" data-oid="c6g-950">
          <CardHeader className="pb-2" data-oid="z8nadys">
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="eisqy0t"
            >
              Failed Payments
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="1ahzt:k">
            <div className="text-2xl font-bold" data-oid="xye3t73">
              {payments.filter((payment) => payment.status === "Failed").length}
            </div>
            <p className="text-xs text-muted-foreground" data-oid="xjmvs:f">
              -5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div
        className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
        data-oid="e:c1dt-"
      >
        <Tabs defaultValue="all" className="w-full" data-oid="o2.v:g-">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
            data-oid="142vd.s"
          >
            <TabsList
              className="bg-white border border-gray-200"
              data-oid="0zk70r."
            >
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="fr.uwz6"
              >
                All Payments
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="3:3hlnr"
              >
                Completed
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="dpyby01"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="failed"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="0aovg:r"
              >
                Failed
              </TabsTrigger>
              <TabsTrigger
                value="refunded"
                className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
                data-oid="4v83en-"
              >
                Refunded
              </TabsTrigger>
            </TabsList>

            <div
              className="mt-4 flex items-center gap-2 sm:mt-0"
              data-oid="r2z54q_"
            >
              <div className="relative" data-oid="7f0ylau">
                <Search
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                  data-oid="8kj:srf"
                />

                <Input
                  type="search"
                  placeholder="Search payments..."
                  className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
                  data-oid="6itq3xy"
                />
              </div>
              <Select defaultValue="all" data-oid="ejq3.-d">
                <SelectTrigger
                  className="w-[180px] border-gray-200"
                  data-oid="7e8lpvq"
                >
                  <SelectValue
                    placeholder="Filter by method"
                    data-oid="611l0gb"
                  />
                </SelectTrigger>
                <SelectContent data-oid="fy68nax">
                  <SelectItem value="all" data-oid="ci46t2f">
                    All Methods
                  </SelectItem>
                  <SelectItem value="credit-card" data-oid="winn8c.">
                    Credit Card
                  </SelectItem>
                  <SelectItem value="paypal" data-oid="22sd9lt">
                    PayPal
                  </SelectItem>
                  <SelectItem value="bank-transfer" data-oid="l4irkcz">
                    Bank Transfer
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-200"
                data-oid="f9h_gz1"
              >
                <Filter className="h-4 w-4" data-oid="_.p_0c-" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-4" data-oid="-zdrerp">
            <Card className="border-gray-200 shadow-md" data-oid="3x4396z">
              <CardHeader className="px-6 py-4" data-oid="n1:fooo">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="zxvez8w"
                >
                  All Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="3m_p91k">
                <Table data-oid="eyyc2x5">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="lr8hhoi">
                    <TableRow data-oid="79_s3-p">
                      <TableHead data-oid="t9u-eq5">Payment ID</TableHead>
                      <TableHead data-oid=":io91e7">Order ID</TableHead>
                      <TableHead data-oid="g-_9xbh">Customer</TableHead>
                      <TableHead data-oid="29o0cki">Amount</TableHead>
                      <TableHead data-oid="knufymg">Method</TableHead>
                      <TableHead data-oid="hyhwfon">Status</TableHead>
                      <TableHead data-oid="cjr9kih">Date</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="fse5azv"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="irhxy1_">
                    {payments.map((payment) => (
                      <TableRow
                        key={payment.id}
                        className="hover:bg-[#F6F8FF]"
                        data-oid="snenic5"
                      >
                        <TableCell
                          className="font-medium text-[#123B79]"
                          data-oid=".g-1p.z"
                        >
                          {payment.id}
                        </TableCell>
                        <TableCell data-oid="bppw.kc">
                          <Link
                            href={`/admin/orders/${payment.orderId}`}
                            className="text-[#123B79] hover:underline"
                            data-oid="_ihzazl"
                          >
                            {payment.orderId}
                          </Link>
                        </TableCell>
                        <TableCell data-oid="3x2g87d">
                          {payment.customer}
                        </TableCell>
                        <TableCell className="font-medium" data-oid="drmbqq6">
                          ${payment.amount.toFixed(2)}
                        </TableCell>
                        <TableCell data-oid="mn5mw1:">
                          <div
                            className="flex items-center gap-2"
                            data-oid=":-rey._"
                          >
                            <CreditCard
                              className="h-4 w-4 text-muted-foreground"
                              data-oid="k79j9-e"
                            />

                            <div data-oid="aal8ti.">
                              <div
                                className="text-sm font-medium"
                                data-oid="u851j03"
                              >
                                {payment.method}
                              </div>
                              <div
                                className="text-xs text-muted-foreground"
                                data-oid="hna:dog"
                              >
                                {payment.cardInfo}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-oid="s36o7j3">
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
                            data-oid="snu-kf."
                          >
                            {payment.status === "Failed" && (
                              <AlertCircle
                                className="mr-1 h-3 w-3"
                                data-oid="jnvzhq."
                              />
                            )}
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell data-oid="1mj6nhh">{payment.date}</TableCell>
                        <TableCell data-oid="_m6ln_y">
                          <DropdownMenu data-oid="13:62h8">
                            <DropdownMenuTrigger asChild data-oid="ftquqw-">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="_il2b.a"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="lj:p5-m"
                                />

                                <span className="sr-only" data-oid=".iizxtg">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="6c1s4_t">
                              <DropdownMenuItem asChild data-oid="ayso3po">
                                <Link
                                  href={`/admin/payments/${payment.id}`}
                                  className="flex items-center"
                                  data-oid="28:-6y0"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="sqiuxhi"
                                  />
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="6f:phm:">
                                <Link
                                  href={`/admin/payments/${payment.id}/receipt`}
                                  className="flex items-center"
                                  data-oid="mp5htl2"
                                >
                                  <FileText
                                    className="mr-2 h-4 w-4"
                                    data-oid="_3t_5mp"
                                  />
                                  View Receipt
                                </Link>
                              </DropdownMenuItem>
                              {payment.status === "Failed" && (
                                <DropdownMenuItem asChild data-oid="7b.:min">
                                  <Link
                                    href={`/admin/payments/${payment.id}/retry`}
                                    className="flex items-center"
                                    data-oid="2b7bqf_"
                                  >
                                    <RefreshCcw
                                      className="mr-2 h-4 w-4"
                                      data-oid="76ryh0h"
                                    />
                                    Retry Payment
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              {payment.status === "Completed" && (
                                <DropdownMenuItem asChild data-oid="vw9-ni_">
                                  <Link
                                    href={`/admin/payments/${payment.id}/refund`}
                                    className="flex items-center"
                                    data-oid="b_.w.s8"
                                  >
                                    <RefreshCcw
                                      className="mr-2 h-4 w-4"
                                      data-oid="le37klv"
                                    />
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

          <TabsContent value="completed" className="mt-4" data-oid="..5e73e">
            <Card className="border-gray-200 shadow-md" data-oid="x_rrgvw">
              <CardHeader className="px-6 py-4" data-oid="wq:yt8r">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="l28ck7n"
                >
                  Completed Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="new5lmv">
                <Table data-oid="jcdq6i_">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="i20v0b0">
                    <TableRow data-oid="gc:9qxv">
                      <TableHead data-oid="rpwrbjm">Payment ID</TableHead>
                      <TableHead data-oid="217_-3q">Order ID</TableHead>
                      <TableHead data-oid="08fjxp3">Customer</TableHead>
                      <TableHead data-oid="7o5yyo7">Amount</TableHead>
                      <TableHead data-oid="p.oa15l">Method</TableHead>
                      <TableHead data-oid="hn4fns5">Date</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="gduc_4d"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="ix80iuh">
                    {payments
                      .filter((payment) => payment.status === "Completed")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid="cfg9ica"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="93w5rlt"
                          >
                            {payment.id}
                          </TableCell>
                          <TableCell data-oid="-_yhh:j">
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                              data-oid="p6v.f3-"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell data-oid="285-lue">
                            {payment.customer}
                          </TableCell>
                          <TableCell className="font-medium" data-oid="x9350ia">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="w1u4olm">
                            <div
                              className="flex items-center gap-2"
                              data-oid="f2n0fgk"
                            >
                              <CreditCard
                                className="h-4 w-4 text-muted-foreground"
                                data-oid="n5bd3yo"
                              />

                              <div data-oid="jx3m5st">
                                <div
                                  className="text-sm font-medium"
                                  data-oid="byqp854"
                                >
                                  {payment.method}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="6f28kcm"
                                >
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="jqrt21z">
                            {payment.date}
                          </TableCell>
                          <TableCell data-oid="bp2p3ln">
                            <DropdownMenu data-oid=":29:acz">
                              <DropdownMenuTrigger asChild data-oid="_j6f-o.">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="3vudn48"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="9-n1wh3"
                                  />

                                  <span className="sr-only" data-oid="pyfoese">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="c:j5a3:"
                              >
                                <DropdownMenuItem asChild data-oid="hcc_8jx">
                                  <Link
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                    data-oid="c.hwmkm"
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="-jjyli7"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="p6ve3zd">
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                    data-oid="hi2d24v"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="a0cyqyp"
                                    />
                                    View Receipt
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="h5m4t8h">
                                  <Link
                                    href={`/admin/payments/${payment.id}/refund`}
                                    className="flex items-center"
                                    data-oid="ltubqi_"
                                  >
                                    <RefreshCcw
                                      className="mr-2 h-4 w-4"
                                      data-oid="fsvbey4"
                                    />
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

          <TabsContent value="pending" className="mt-4" data-oid="kpf.0gu">
            <Card className="border-gray-200 shadow-md" data-oid="tpt2:9q">
              <CardHeader className="px-6 py-4" data-oid="fucvn-s">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="sa11z7o"
                >
                  Pending Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="rlblb:h">
                <Table data-oid="zq32qwk">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="dulj20k">
                    <TableRow data-oid="lr5aqms">
                      <TableHead data-oid="n.rs0me">Payment ID</TableHead>
                      <TableHead data-oid="dmqpec0">Order ID</TableHead>
                      <TableHead data-oid="39zc3ip">Customer</TableHead>
                      <TableHead data-oid="ud50yd.">Amount</TableHead>
                      <TableHead data-oid="xpusqpz">Method</TableHead>
                      <TableHead data-oid="m7:.m0c">Date</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="8r81y:t"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="m08jzk2">
                    {payments
                      .filter((payment) => payment.status === "Pending")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid="z-8.cp9"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="fkv3kqd"
                          >
                            {payment.id}
                          </TableCell>
                          <TableCell data-oid="auw0-07">
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                              data-oid="5k41npi"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell data-oid="62k0e26">
                            {payment.customer}
                          </TableCell>
                          <TableCell className="font-medium" data-oid="ozri7di">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="-k_4ggk">
                            <div
                              className="flex items-center gap-2"
                              data-oid="jzba9y4"
                            >
                              <CreditCard
                                className="h-4 w-4 text-muted-foreground"
                                data-oid="mfcd5gy"
                              />

                              <div data-oid="s7hhki8">
                                <div
                                  className="text-sm font-medium"
                                  data-oid="xruo7ae"
                                >
                                  {payment.method}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="2d23g7q"
                                >
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="8ijjg72">
                            {payment.date}
                          </TableCell>
                          <TableCell data-oid="ri9c.h_">
                            <DropdownMenu data-oid="6c:hjfu">
                              <DropdownMenuTrigger asChild data-oid="7p4ye-k">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="bth.s1d"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="t385uow"
                                  />

                                  <span className="sr-only" data-oid="2gaxxhf">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="_w1p0pg"
                              >
                                <DropdownMenuItem asChild data-oid="y-tsobn">
                                  <Link
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                    data-oid="26s7a1z"
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="84o9rod"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="ytdtsws">
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                    data-oid="bz5odc9"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="qm3fyqa"
                                    />
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

          <TabsContent value="failed" className="mt-4" data-oid="3.frl4q">
            <Card className="border-gray-200 shadow-md" data-oid="j_w3:it">
              <CardHeader className="px-6 py-4" data-oid="5zc5znm">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="t6qyj3k"
                >
                  Failed Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="and6agw">
                <Table data-oid="sfyt1v3">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="ayljws4">
                    <TableRow data-oid="t5hmp2u">
                      <TableHead data-oid="x8dp4q_">Payment ID</TableHead>
                      <TableHead data-oid=":ydl0nc">Order ID</TableHead>
                      <TableHead data-oid="l.38f6s">Customer</TableHead>
                      <TableHead data-oid="q6tz_5u">Amount</TableHead>
                      <TableHead data-oid="muul7_0">Method</TableHead>
                      <TableHead data-oid="jzf2rp7">Date</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="of4snds"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="v484e5p">
                    {payments
                      .filter((payment) => payment.status === "Failed")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid="lu196fd"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="k568_ic"
                          >
                            {payment.id}
                          </TableCell>
                          <TableCell data-oid="08b4xmn">
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                              data-oid="8qa-0-:"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell data-oid="ei8wmts">
                            {payment.customer}
                          </TableCell>
                          <TableCell className="font-medium" data-oid="j63bqwy">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="j.1er7d">
                            <div
                              className="flex items-center gap-2"
                              data-oid="uqpz.ev"
                            >
                              <CreditCard
                                className="h-4 w-4 text-muted-foreground"
                                data-oid="gufdsj8"
                              />

                              <div data-oid="etgvwby">
                                <div
                                  className="text-sm font-medium"
                                  data-oid="kdpvqej"
                                >
                                  {payment.method}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="6lm9k6v"
                                >
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="8c4s7eb">
                            {payment.date}
                          </TableCell>
                          <TableCell data-oid="5sf2-9:">
                            <DropdownMenu data-oid="zlcf4xg">
                              <DropdownMenuTrigger asChild data-oid="eta5gt0">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="bl5kpde"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="oh.jg2v"
                                  />

                                  <span className="sr-only" data-oid="nicld:c">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="a..jv3d"
                              >
                                <DropdownMenuItem asChild data-oid="ip_91ok">
                                  <Link
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                    data-oid="www:e.5"
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="bjf-86w"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="jqp1520">
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                    data-oid=":k9.dze"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="ob_mycy"
                                    />
                                    View Receipt
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="d8q-.nj">
                                  <Link
                                    href={`/admin/payments/${payment.id}/retry`}
                                    className="flex items-center"
                                    data-oid="_lnz.vk"
                                  >
                                    <RefreshCcw
                                      className="mr-2 h-4 w-4"
                                      data-oid="q6k.2q3"
                                    />
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

          <TabsContent value="refunded" className="mt-4" data-oid="2uxh5cw">
            <Card className="border-gray-200 shadow-md" data-oid="h-1d8k:">
              <CardHeader className="px-6 py-4" data-oid="dtb1i:3">
                <CardTitle
                  className="text-base text-[#123B79]"
                  data-oid="s5:73wm"
                >
                  Refunded Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0" data-oid="nua3an8">
                <Table data-oid="p0j3-g1">
                  <TableHeader className="bg-[#F6F8FF]" data-oid="d77:4_5">
                    <TableRow data-oid="nww55.3">
                      <TableHead data-oid="c3afd75">Payment ID</TableHead>
                      <TableHead data-oid="izeks4a">Order ID</TableHead>
                      <TableHead data-oid="212q4o5">Customer</TableHead>
                      <TableHead data-oid="keq4x-x">Amount</TableHead>
                      <TableHead data-oid="ttu46x5">Method</TableHead>
                      <TableHead data-oid=".p38w8x">Date</TableHead>
                      <TableHead
                        className="w-[80px]"
                        data-oid="yfo7zf8"
                      ></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody data-oid="3.-h9ef">
                    {payments
                      .filter((payment) => payment.status === "Refunded")
                      .map((payment) => (
                        <TableRow
                          key={payment.id}
                          className="hover:bg-[#F6F8FF]"
                          data-oid="q38oioq"
                        >
                          <TableCell
                            className="font-medium text-[#123B79]"
                            data-oid="pmj5kt0"
                          >
                            {payment.id}
                          </TableCell>
                          <TableCell data-oid="uyw371k">
                            <Link
                              href={`/admin/orders/${payment.orderId}`}
                              className="text-[#123B79] hover:underline"
                              data-oid="mr6m0vd"
                            >
                              {payment.orderId}
                            </Link>
                          </TableCell>
                          <TableCell data-oid="vc:9t0x">
                            {payment.customer}
                          </TableCell>
                          <TableCell className="font-medium" data-oid="4j-hk:-">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell data-oid="3_rr0w4">
                            <div
                              className="flex items-center gap-2"
                              data-oid=":e0:.13"
                            >
                              <CreditCard
                                className="h-4 w-4 text-muted-foreground"
                                data-oid="4ge8w_y"
                              />

                              <div data-oid="nc9oztq">
                                <div
                                  className="text-sm font-medium"
                                  data-oid="uj1yex-"
                                >
                                  {payment.method}
                                </div>
                                <div
                                  className="text-xs text-muted-foreground"
                                  data-oid="bng-dzv"
                                >
                                  {payment.cardInfo}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell data-oid="y29kbvp">
                            {payment.date}
                          </TableCell>
                          <TableCell data-oid="bmhy::n">
                            <DropdownMenu data-oid="b9io3_k">
                              <DropdownMenuTrigger asChild data-oid="hd6u2_3">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  data-oid="nw.3j9c"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="_ycj3vp"
                                  />

                                  <span className="sr-only" data-oid=":755:vm">
                                    Actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="plu1yjs"
                              >
                                <DropdownMenuItem asChild data-oid="vhap:04">
                                  <Link
                                    href={`/admin/payments/${payment.id}`}
                                    className="flex items-center"
                                    data-oid=":wxu3v7"
                                  >
                                    <Eye
                                      className="mr-2 h-4 w-4"
                                      data-oid="t7k883_"
                                    />
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild data-oid="09yy4_n">
                                  <Link
                                    href={`/admin/payments/${payment.id}/receipt`}
                                    className="flex items-center"
                                    data-oid="3y3zjnn"
                                  >
                                    <FileText
                                      className="mr-2 h-4 w-4"
                                      data-oid="_cjtdeb"
                                    />
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
