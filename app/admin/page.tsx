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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Download Report</Button>
          <Button className="bg-[#123B79] hover:bg-[#425DA0]">
            View All Analytics
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,853</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +12.5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <ShoppingCart className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,294</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +8.2%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +4.3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Completion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                -2.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-6">
        <Card className="col-span-6 md:col-span-4 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-[#123B79]">Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue for the current year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardChart />
          </CardContent>
        </Card>

        <Card className="col-span-6 md:col-span-2 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-[#123B79]">Sales Distribution</CardTitle>
            <CardDescription>By course category</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[240px] w-[240px]">
              <PieChart className="h-full w-full text-[#123B79]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-6">
        <Card className="col-span-6 md:col-span-3 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-[#123B79]">Recent Sales</CardTitle>
            <CardDescription>
              Latest transactions across your platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSalesTable />
          </CardContent>
        </Card>

        <Card className="col-span-6 md:col-span-3 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-[#123B79]">Popular Courses</CardTitle>
            <CardDescription>Top performing courses this month</CardDescription>
          </CardHeader>
          <CardContent>
            <PopularCoursesTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
