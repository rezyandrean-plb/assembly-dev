"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  DollarSign,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function AnalyticsPage() {
  // Mock data for charts
  const revenueData = [
    { month: "Jan", revenue: 15000, courses: 120, books: 45 },
    { month: "Feb", revenue: 18000, courses: 145, books: 52 },
    { month: "Mar", revenue: 22000, courses: 178, books: 61 },
    { month: "Apr", revenue: 25000, courses: 195, books: 58 },
    { month: "May", revenue: 28000, courses: 220, books: 67 },
    { month: "Jun", revenue: 32000, courses: 260, books: 73 },
  ];

  const userGrowthData = [
    { month: "Jan", users: 1200, active: 980 },
    { month: "Feb", users: 1450, active: 1180 },
    { month: "Mar", users: 1780, active: 1420 },
    { month: "Apr", users: 1950, active: 1560 },
    { month: "May", users: 2200, active: 1760 },
    { month: "Jun", users: 2600, active: 2080 },
  ];

  const coursePerformanceData = [
    {
      name: "Data Science Essentials",
      enrollments: 245,
      completion: 78,
      revenue: 36675,
    },
    {
      name: "JavaScript Patterns",
      enrollments: 189,
      completion: 65,
      revenue: 17001,
    },
    {
      name: "Property Investment",
      enrollments: 156,
      completion: 72,
      revenue: 38844,
    },
    {
      name: "AI for Beginners",
      enrollments: 132,
      completion: 58,
      revenue: 26388,
    },
    {
      name: "Cloud Computing",
      enrollments: 98,
      completion: 82,
      revenue: 12740,
    },
  ];

  const categoryData = [
    { name: "Finance", value: 35, color: "#123B79" },
    { name: "Technology", value: 30, color: "#516AAE" },
    { name: "Data Science", value: 20, color: "#D3A518" },
    { name: "Marketing", value: 15, color: "#A7AABC" },
  ];

  const trafficSourceData = [
    { source: "Direct", visitors: 4500, percentage: 35 },
    { source: "Google Search", visitors: 3200, percentage: 25 },
    { source: "Social Media", visitors: 2800, percentage: 22 },
    { source: "Email", visitors: 1500, percentage: 12 },
    { source: "Referrals", visitors: 800, percentage: 6 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">
          Analytics & Reports
        </h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px] border-gray-200">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 3 months</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-200">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$140,000</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,600</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +18.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Course Enrollments
            </CardTitle>
            <BookOpen className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,378</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +8.1% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#123B79]">
              Avg. Completion Rate
            </CardTitle>
            <Clock className="h-4 w-4 text-[#123B79]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">71%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              -2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="bg-white border border-gray-200">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="revenue"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
          >
            Revenue
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
          >
            Users
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
          >
            Courses
          </TabsTrigger>
          <TabsTrigger
            value="traffic"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
          >
            Traffic
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">Revenue Trend</CardTitle>
                <CardDescription>
                  Monthly revenue over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EFFF" />

                    <XAxis dataKey="month" stroke="#737687" />

                    <YAxis stroke="#737687" />
                    <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />

                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#123B79"
                      fill="#123B79"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">User Growth</CardTitle>
                <CardDescription>
                  Total and active users over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EFFF" />

                    <XAxis dataKey="month" stroke="#737687" />

                    <YAxis stroke="#737687" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#123B79"
                      strokeWidth={2}
                    />

                    <Line
                      type="monotone"
                      dataKey="active"
                      stroke="#D3A518"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  Sales by Category
                </CardTitle>
                <CardDescription>
                  Revenue distribution across course categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  Top Performing Courses
                </CardTitle>
                <CardDescription>
                  Courses ranked by enrollment and completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coursePerformanceData.slice(0, 5).map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{course.name}</p>
                        <Badge
                          variant="outline"
                          className="border-[#123B79] text-[#123B79]"
                        >
                          {course.enrollments} enrolled
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={course.completion} className="h-2" />

                        <span className="text-xs font-medium">
                          {course.completion}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Revenue: ${course.revenue.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">Revenue Trend</CardTitle>
                <CardDescription>
                  Monthly revenue over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EFFF" />

                    <XAxis dataKey="month" stroke="#737687" />

                    <YAxis stroke="#737687" />
                    <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />

                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#123B79"
                      fill="#123B79"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  Sales by Category
                </CardTitle>
                <CardDescription>
                  Revenue distribution across course categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">User Growth</CardTitle>
                <CardDescription>
                  Total and active users over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EFFF" />

                    <XAxis dataKey="month" stroke="#737687" />

                    <YAxis stroke="#737687" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#123B79"
                      strokeWidth={2}
                    />

                    <Line
                      type="monotone"
                      dataKey="active"
                      stroke="#D3A518"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  User Demographics
                </CardTitle>
                <CardDescription>
                  User distribution by age and location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Age 18-25</span>
                    <div className="flex items-center gap-2">
                      <Progress value={35} className="w-32 h-2" />

                      <span className="text-sm font-medium">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Age 26-35</span>
                    <div className="flex items-center gap-2">
                      <Progress value={42} className="w-32 h-2" />

                      <span className="text-sm font-medium">42%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Age 36-45</span>
                    <div className="flex items-center gap-2">
                      <Progress value={18} className="w-32 h-2" />

                      <span className="text-sm font-medium">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Age 45+</span>
                    <div className="flex items-center gap-2">
                      <Progress value={5} className="w-32 h-2" />

                      <span className="text-sm font-medium">5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  Course Performance
                </CardTitle>
                <CardDescription>
                  Enrollment and completion rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8EFFF" />

                    <XAxis dataKey="month" stroke="#737687" />

                    <YAxis stroke="#737687" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="courses"
                      stroke="#123B79"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  Top Performing Courses
                </CardTitle>
                <CardDescription>
                  Courses ranked by enrollment and completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coursePerformanceData.slice(0, 5).map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{course.name}</p>
                        <Badge
                          variant="outline"
                          className="border-[#123B79] text-[#123B79]"
                        >
                          {course.enrollments} enrolled
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={course.completion} className="h-2" />

                        <span className="text-xs font-medium">
                          {course.completion}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Revenue: ${course.revenue.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">
                  Traffic Sources
                </CardTitle>
                <CardDescription>Website traffic by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSourceData.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{source.source}</span>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={source.percentage}
                          className="w-32 h-2"
                        />

                        <span className="text-sm font-medium">
                          {source.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-[#123B79]">Page Views</CardTitle>
                <CardDescription>Most visited pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Homepage</span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                    >
                      12,450 views
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Courses</span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                    >
                      8,920 views
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">About</span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                    >
                      3,240 views
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Contact</span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                    >
                      1,890 views
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
