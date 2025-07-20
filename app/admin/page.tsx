import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PieChart,
  Users,
  ShoppingCart,
  BookOpen,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecentSalesTable } from "@/components/admin/recent-sales-table";
import { PopularCoursesTable } from "@/components/admin/popular-courses-table";
import { DashboardChart } from "@/components/admin/dashboard-chart";

export default function AdminDashboard() {
  return (
    <>
      <div className="flex items-center justify-between" data-oid="wk0kdy_">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="wg27q-q">
          Dashboard
        </h1>
        <div className="flex items-center gap-2" data-oid="pqnutco">
          <Button variant="outline" data-oid="0q417zu">
            Download Report
          </Button>
          <Button
            className="bg-[#123B79] hover:bg-[#425DA0]"
            data-oid="pa80xn4"
          >
            View All Analytics
          </Button>
        </div>
      </div>

      <div
        className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        data-oid="0qep4g7"
      >
        <Card className="border-none shadow-md" data-oid="hd0b_-6">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid=":-m1fct"
          >
            <CardTitle className="text-sm font-medium" data-oid="e2l48v9">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-[#123B79]" data-oid="t2apfx6" />
          </CardHeader>
          <CardContent data-oid="--agrnm">
            <div className="text-2xl font-bold" data-oid="k9k:-t5">
              2,853
            </div>
            <p className="text-xs text-muted-foreground" data-oid="s4lset9">
              <span
                className="text-green-500 flex items-center"
                data-oid="g.cf496"
              >
                <ArrowUpRight className="mr-1 h-3 w-3" data-oid="52q9cpw" />
                +12.5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md" data-oid="4u1:b0-">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="0k4krwv"
          >
            <CardTitle className="text-sm font-medium" data-oid="kclb1xt">
              Total Revenue
            </CardTitle>
            <ShoppingCart
              className="h-4 w-4 text-[#123B79]"
              data-oid="hj69az0"
            />
          </CardHeader>
          <CardContent data-oid="8o3dk_q">
            <div className="text-2xl font-bold" data-oid="fkd3:4.">
              $48,294
            </div>
            <p className="text-xs text-muted-foreground" data-oid="f63mx.q">
              <span
                className="text-green-500 flex items-center"
                data-oid="516673x"
              >
                <ArrowUpRight className="mr-1 h-3 w-3" data-oid="j36qz.h" />
                +8.2%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md" data-oid="_lg5cpi">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="7lolgd_"
          >
            <CardTitle className="text-sm font-medium" data-oid="e7-n6cc">
              Active Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-[#123B79]" data-oid="b.w-2:b" />
          </CardHeader>
          <CardContent data-oid="y5zp0hk">
            <div className="text-2xl font-bold" data-oid="frqwuty">
              142
            </div>
            <p className="text-xs text-muted-foreground" data-oid=".ulf2zx">
              <span
                className="text-green-500 flex items-center"
                data-oid=":4n8fz5"
              >
                <ArrowUpRight className="mr-1 h-3 w-3" data-oid="ewr7n_q" />
                +4.3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md" data-oid="i4zhf1d">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="-_p95hb"
          >
            <CardTitle className="text-sm font-medium" data-oid="m9flk8u">
              Completion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-[#123B79]" data-oid="v:l.6ef" />
          </CardHeader>
          <CardContent data-oid="8e.e-:z">
            <div className="text-2xl font-bold" data-oid="nhkdcdy">
              68.2%
            </div>
            <p className="text-xs text-muted-foreground" data-oid="9cn2z7_">
              <span
                className="text-red-500 flex items-center"
                data-oid="fh.15:q"
              >
                <ArrowDownRight className="mr-1 h-3 w-3" data-oid="glj:6nt" />
                -2.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-6" data-oid="r6yehz5">
        <Card
          className="col-span-6 md:col-span-4 border-none shadow-md"
          data-oid="-rvz9-x"
        >
          <CardHeader data-oid="hni:q07">
            <CardTitle className="text-[#123B79]" data-oid="k3aoe03">
              Revenue Overview
            </CardTitle>
            <CardDescription data-oid="pbmbpdd">
              Monthly revenue for the current year
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="bcj-opi">
            <DashboardChart data-oid="ex2_mof" />
          </CardContent>
        </Card>

        <Card
          className="col-span-6 md:col-span-2 border-none shadow-md"
          data-oid="ogkozwk"
        >
          <CardHeader data-oid="t829dh9">
            <CardTitle className="text-[#123B79]" data-oid=":yavl9y">
              Sales Distribution
            </CardTitle>
            <CardDescription data-oid="mo-orcs">
              By course category
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center" data-oid="lma79n5">
            <div className="h-[240px] w-[240px]" data-oid="pogz2rf">
              <PieChart
                className="h-full w-full text-[#123B79]"
                data-oid="_tf8d9:"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-6" data-oid="t78s9qh">
        <Card
          className="col-span-6 md:col-span-3 border-none shadow-md"
          data-oid="eleav2t"
        >
          <CardHeader data-oid="ak7f72j">
            <CardTitle className="text-[#123B79]" data-oid="u4ond91">
              Recent Sales
            </CardTitle>
            <CardDescription data-oid="bt2eisg">
              Latest transactions across your platform
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="benq.8d">
            <RecentSalesTable data-oid=":9i5o8n" />
          </CardContent>
        </Card>

        <Card
          className="col-span-6 md:col-span-3 border-none shadow-md"
          data-oid="f0bw4nd"
        >
          <CardHeader data-oid="ufbo8er">
            <CardTitle className="text-[#123B79]" data-oid="z28g.eg">
              Popular Courses
            </CardTitle>
            <CardDescription data-oid="nest:fa">
              Top performing courses this month
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="0thifmg">
            <PopularCoursesTable data-oid="2r8gxlb" />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
