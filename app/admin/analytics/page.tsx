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
    <div className="space-y-6" data-oid="1e4aine">
      <div className="flex items-center justify-between" data-oid="7_ffnzy">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="iojg3r9">
          Analytics & Reports
        </h1>
        <div className="flex items-center gap-2" data-oid="n846l:p">
          <Select defaultValue="30" data-oid=":7zw:d5">
            <SelectTrigger
              className="w-[180px] border-gray-200"
              data-oid="gri6ztu"
            >
              <SelectValue placeholder="Select period" data-oid="czqg6s6" />
            </SelectTrigger>
            <SelectContent data-oid="34f.ot0">
              <SelectItem value="7" data-oid="zey9m38">
                Last 7 days
              </SelectItem>
              <SelectItem value="30" data-oid="0tykcj1">
                Last 30 days
              </SelectItem>
              <SelectItem value="90" data-oid="77m.jn5">
                Last 3 months
              </SelectItem>
              <SelectItem value="365" data-oid="j_votu:">
                Last year
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="border-gray-200"
            data-oid="cfhxexb"
          >
            <Download className="mr-2 h-4 w-4" data-oid="g29pf6n" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div
        className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        data-oid="a3jb4rz"
      >
        <Card className="border-gray-200 shadow-md" data-oid="66a8xfx">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid=".wnndrq"
          >
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid=".v.bfbn"
            >
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-[#123B79]" data-oid="-lfpbi." />
          </CardHeader>
          <CardContent data-oid="z0mr54x">
            <div className="text-2xl font-bold" data-oid="-_3dlfg">
              $140,000
            </div>
            <div
              className="flex items-center text-xs text-muted-foreground"
              data-oid="d6rrlfl"
            >
              <TrendingUp
                className="mr-1 h-3 w-3 text-green-500"
                data-oid="pmghm1l"
              />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-md" data-oid="809q3-f">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="vw1464o"
          >
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid="ovhjw7l"
            >
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-[#123B79]" data-oid="hu8mkz2" />
          </CardHeader>
          <CardContent data-oid="y_riy7v">
            <div className="text-2xl font-bold" data-oid=":4u_6dz">
              2,600
            </div>
            <div
              className="flex items-center text-xs text-muted-foreground"
              data-oid="ta9cny-"
            >
              <TrendingUp
                className="mr-1 h-3 w-3 text-green-500"
                data-oid="iuxj5fv"
              />
              +18.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-md" data-oid="2mjtw49">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="6fbq:_d"
          >
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid=":uoe3.5"
            >
              Course Enrollments
            </CardTitle>
            <BookOpen className="h-4 w-4 text-[#123B79]" data-oid=".remjbo" />
          </CardHeader>
          <CardContent data-oid="-1yp54n">
            <div className="text-2xl font-bold" data-oid="w7b5mud">
              1,378
            </div>
            <div
              className="flex items-center text-xs text-muted-foreground"
              data-oid="fk_59_z"
            >
              <TrendingUp
                className="mr-1 h-3 w-3 text-green-500"
                data-oid="puzh_4w"
              />
              +8.1% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-md" data-oid="-9pi2be">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="i60xui6"
          >
            <CardTitle
              className="text-sm font-medium text-[#123B79]"
              data-oid=":tcrz.q"
            >
              Avg. Completion Rate
            </CardTitle>
            <Clock className="h-4 w-4 text-[#123B79]" data-oid="5eyea2a" />
          </CardHeader>
          <CardContent data-oid="jp_dzy4">
            <div className="text-2xl font-bold" data-oid="a3jmomr">
              71%
            </div>
            <div
              className="flex items-center text-xs text-muted-foreground"
              data-oid="keriw:e"
            >
              <TrendingDown
                className="mr-1 h-3 w-3 text-red-500"
                data-oid="lks_f::"
              />
              -2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6" data-oid=".pn9r3y">
        <TabsList
          className="bg-white border border-gray-200"
          data-oid="7jjtdzq"
        >
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            data-oid="1c:1-e-"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="revenue"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            data-oid="m6h8rru"
          >
            Revenue
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            data-oid="iy-lrw-"
          >
            Users
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            data-oid="5vhh-24"
          >
            Courses
          </TabsTrigger>
          <TabsTrigger
            value="traffic"
            className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            data-oid="qxjkkp0"
          >
            Traffic
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
          className="mt-6 space-y-6"
          data-oid="4a:33pq"
        >
          <div className="grid gap-6 md:grid-cols-2" data-oid="n.mu1.6">
            <Card className="border-gray-200 shadow-md" data-oid="x-t8.s-">
              <CardHeader data-oid="2dhrj40">
                <CardTitle className="text-[#123B79]" data-oid=":mwops:">
                  Revenue Trend
                </CardTitle>
                <CardDescription data-oid="m35sst:">
                  Monthly revenue over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="ppzt8jc">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="duyad4x"
                >
                  <AreaChart data={revenueData} data-oid="n8o2d3y">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8EFFF"
                      data-oid="u:6duhu"
                    />

                    <XAxis
                      dataKey="month"
                      stroke="#737687"
                      data-oid="njf1vgb"
                    />

                    <YAxis stroke="#737687" data-oid="vfco:hu" />
                    <Tooltip
                      formatter={(value) => [`$${value}`, "Revenue"]}
                      data-oid="8-9dfqw"
                    />

                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#123B79"
                      fill="#123B79"
                      fillOpacity={0.1}
                      data-oid="53by1b2"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md" data-oid="whsthhi">
              <CardHeader data-oid="ecpvz9p">
                <CardTitle className="text-[#123B79]" data-oid="enj2s2a">
                  User Growth
                </CardTitle>
                <CardDescription data-oid="67f8ov0">
                  Total and active users over time
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="-:w0-vk">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="mx_vc3s"
                >
                  <LineChart data={userGrowthData} data-oid="j4nl57t">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8EFFF"
                      data-oid="t5_nbkk"
                    />

                    <XAxis
                      dataKey="month"
                      stroke="#737687"
                      data-oid="-ymolbj"
                    />

                    <YAxis stroke="#737687" data-oid="ghqyg_d" />
                    <Tooltip data-oid="19s03au" />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#123B79"
                      strokeWidth={2}
                      data-oid="75kihnb"
                    />

                    <Line
                      type="monotone"
                      dataKey="active"
                      stroke="#D3A518"
                      strokeWidth={2}
                      data-oid="ar_f:7:"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2" data-oid="gn3hikc">
            <Card className="border-gray-200 shadow-md" data-oid="bdreedo">
              <CardHeader data-oid="osy:121">
                <CardTitle className="text-[#123B79]" data-oid="hb6errt">
                  Sales by Category
                </CardTitle>
                <CardDescription data-oid="-nop:n2">
                  Revenue distribution across course categories
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="m:u37.d">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="bvfteas"
                >
                  <PieChart data-oid="a95.o7t">
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      data-oid="d-uys9v"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          data-oid="z004qzp"
                        />
                      ))}
                    </Pie>
                    <Tooltip data-oid="s02txq-" />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md" data-oid=":opfxn6">
              <CardHeader data-oid="k82bkp:">
                <CardTitle className="text-[#123B79]" data-oid="ka29ni4">
                  Top Performing Courses
                </CardTitle>
                <CardDescription data-oid="-cgjk8o">
                  Courses ranked by enrollment and completion
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="wzlqtpy">
                <div className="space-y-4" data-oid="vc-2i0g">
                  {coursePerformanceData.slice(0, 5).map((course, index) => (
                    <div key={index} className="space-y-2" data-oid="v9iuay3">
                      <div
                        className="flex items-center justify-between"
                        data-oid="qy2vvuz"
                      >
                        <p className="text-sm font-medium" data-oid=":m_0_me">
                          {course.name}
                        </p>
                        <Badge
                          variant="outline"
                          className="border-[#123B79] text-[#123B79]"
                          data-oid="57t1d84"
                        >
                          {course.enrollments} enrolled
                        </Badge>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="2xzuflg"
                      >
                        <Progress
                          value={course.completion}
                          className="h-2"
                          data-oid="h3rgkpm"
                        />

                        <span
                          className="text-xs font-medium"
                          data-oid="t_:f2hs"
                        >
                          {course.completion}%
                        </span>
                      </div>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="x7d3-vj"
                      >
                        Revenue: ${course.revenue.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent
          value="revenue"
          className="mt-6 space-y-6"
          data-oid="s67hiqe"
        >
          <div className="grid gap-6 md:grid-cols-2" data-oid="cl5omd1">
            <Card className="border-gray-200 shadow-md" data-oid="xo856f5">
              <CardHeader data-oid="c6c9i79">
                <CardTitle className="text-[#123B79]" data-oid="pr.ev8h">
                  Revenue Trend
                </CardTitle>
                <CardDescription data-oid="y64oe0t">
                  Monthly revenue over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="3c14gn5">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="oenn5g_"
                >
                  <AreaChart data={revenueData} data-oid="3yo0q2u">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8EFFF"
                      data-oid="7-ieu:_"
                    />

                    <XAxis
                      dataKey="month"
                      stroke="#737687"
                      data-oid="7.k.f:o"
                    />

                    <YAxis stroke="#737687" data-oid="jnp_r49" />
                    <Tooltip
                      formatter={(value) => [`$${value}`, "Revenue"]}
                      data-oid="7lwv.-e"
                    />

                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#123B79"
                      fill="#123B79"
                      fillOpacity={0.1}
                      data-oid="n899c22"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md" data-oid="pk9h184">
              <CardHeader data-oid=":z2q.38">
                <CardTitle className="text-[#123B79]" data-oid="-2cpxrt">
                  Sales by Category
                </CardTitle>
                <CardDescription data-oid="-uqo8xf">
                  Revenue distribution across course categories
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="x-p5qg_">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="r4vbxv:"
                >
                  <PieChart data-oid="c3l5tqw">
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      data-oid="cji73k4"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          data-oid="9svah.5"
                        />
                      ))}
                    </Pie>
                    <Tooltip data-oid="4f0th59" />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent
          value="users"
          className="mt-6 space-y-6"
          data-oid="zetlo8s"
        >
          <div className="grid gap-6 md:grid-cols-2" data-oid="vrleh5y">
            <Card className="border-gray-200 shadow-md" data-oid="62qiv5n">
              <CardHeader data-oid="8f0ugv7">
                <CardTitle className="text-[#123B79]" data-oid="-adku-7">
                  User Growth
                </CardTitle>
                <CardDescription data-oid="7oy:no9">
                  Total and active users over time
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="myy4yg0">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="apbgt8m"
                >
                  <LineChart data={userGrowthData} data-oid="cqd7i54">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8EFFF"
                      data-oid="fsefng:"
                    />

                    <XAxis
                      dataKey="month"
                      stroke="#737687"
                      data-oid="moafo.9"
                    />

                    <YAxis stroke="#737687" data-oid="3yqkf65" />
                    <Tooltip data-oid="ivg40li" />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#123B79"
                      strokeWidth={2}
                      data-oid="g6q1tdc"
                    />

                    <Line
                      type="monotone"
                      dataKey="active"
                      stroke="#D3A518"
                      strokeWidth={2}
                      data-oid="m76efy:"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md" data-oid="ipfhghq">
              <CardHeader data-oid="t-s1ymu">
                <CardTitle className="text-[#123B79]" data-oid="ib07tup">
                  User Demographics
                </CardTitle>
                <CardDescription data-oid="bqm4omk">
                  User distribution by age and location
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="l8un.::">
                <div className="space-y-4" data-oid="32_2d3v">
                  <div
                    className="flex items-center justify-between"
                    data-oid="azfw0vw"
                  >
                    <span className="text-sm" data-oid="y.:jy9j">
                      Age 18-25
                    </span>
                    <div className="flex items-center gap-2" data-oid="4k4cglk">
                      <Progress
                        value={35}
                        className="w-32 h-2"
                        data-oid="h_bfya3"
                      />

                      <span className="text-sm font-medium" data-oid="f9jkzo1">
                        35%
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    data-oid="rx9262z"
                  >
                    <span className="text-sm" data-oid="uvb0w5f">
                      Age 26-35
                    </span>
                    <div className="flex items-center gap-2" data-oid=":2ef7u4">
                      <Progress
                        value={42}
                        className="w-32 h-2"
                        data-oid="_:a-nrg"
                      />

                      <span className="text-sm font-medium" data-oid="a--h1qx">
                        42%
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    data-oid="kjbk7tz"
                  >
                    <span className="text-sm" data-oid="mlbsaf2">
                      Age 36-45
                    </span>
                    <div className="flex items-center gap-2" data-oid="i8.cv:p">
                      <Progress
                        value={18}
                        className="w-32 h-2"
                        data-oid="wxyfscz"
                      />

                      <span className="text-sm font-medium" data-oid="ynvetbu">
                        18%
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    data-oid="rm_:y-t"
                  >
                    <span className="text-sm" data-oid="u_53h3g">
                      Age 45+
                    </span>
                    <div className="flex items-center gap-2" data-oid="ql.g4iy">
                      <Progress
                        value={5}
                        className="w-32 h-2"
                        data-oid="p.gsp_j"
                      />

                      <span className="text-sm font-medium" data-oid="yse25-f">
                        5%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent
          value="courses"
          className="mt-6 space-y-6"
          data-oid="oq7q6.y"
        >
          <div className="grid gap-6 md:grid-cols-2" data-oid="vodp89b">
            <Card className="border-gray-200 shadow-md" data-oid="ys3pjzi">
              <CardHeader data-oid="0-id3-s">
                <CardTitle className="text-[#123B79]" data-oid="u44nb91">
                  Course Performance
                </CardTitle>
                <CardDescription data-oid="rmw5ysq">
                  Enrollment and completion rates
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="atp.1xb">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  data-oid="xu-4h3h"
                >
                  <LineChart data={revenueData} data-oid="68pzwo3">
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E8EFFF"
                      data-oid="1bq0bqb"
                    />

                    <XAxis
                      dataKey="month"
                      stroke="#737687"
                      data-oid="_e:e5f:"
                    />

                    <YAxis stroke="#737687" data-oid="6xae3hw" />
                    <Tooltip data-oid="1d468s7" />
                    <Line
                      type="monotone"
                      dataKey="courses"
                      stroke="#123B79"
                      strokeWidth={2}
                      data-oid="3yixagu"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md" data-oid="pdl49z0">
              <CardHeader data-oid="qcycyy-">
                <CardTitle className="text-[#123B79]" data-oid="ifojtqj">
                  Top Performing Courses
                </CardTitle>
                <CardDescription data-oid="ae.ymrj">
                  Courses ranked by enrollment and completion
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="slsus01">
                <div className="space-y-4" data-oid="vddgjd2">
                  {coursePerformanceData.slice(0, 5).map((course, index) => (
                    <div key={index} className="space-y-2" data-oid="u5d48-r">
                      <div
                        className="flex items-center justify-between"
                        data-oid="dh24a6o"
                      >
                        <p className="text-sm font-medium" data-oid="9sg960q">
                          {course.name}
                        </p>
                        <Badge
                          variant="outline"
                          className="border-[#123B79] text-[#123B79]"
                          data-oid="zn4iv.u"
                        >
                          {course.enrollments} enrolled
                        </Badge>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="rg-zie5"
                      >
                        <Progress
                          value={course.completion}
                          className="h-2"
                          data-oid=":ke1vxi"
                        />

                        <span
                          className="text-xs font-medium"
                          data-oid="8l7.hop"
                        >
                          {course.completion}%
                        </span>
                      </div>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="44ybbqk"
                      >
                        Revenue: ${course.revenue.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent
          value="traffic"
          className="mt-6 space-y-6"
          data-oid="w7u.z8:"
        >
          <div className="grid gap-6 md:grid-cols-2" data-oid="9f3vv:x">
            <Card className="border-gray-200 shadow-md" data-oid="5:w7_-8">
              <CardHeader data-oid="ak81fop">
                <CardTitle className="text-[#123B79]" data-oid="xl.:8wx">
                  Traffic Sources
                </CardTitle>
                <CardDescription data-oid="1.urla.">
                  Website traffic by source
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="_:l65o.">
                <div className="space-y-4" data-oid="idxqkwv">
                  {trafficSourceData.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                      data-oid="li_ib-u"
                    >
                      <span className="text-sm" data-oid=":xn.4rj">
                        {source.source}
                      </span>
                      <div
                        className="flex items-center gap-2"
                        data-oid="g8kwwh_"
                      >
                        <Progress
                          value={source.percentage}
                          className="w-32 h-2"
                          data-oid="bmo2dvp"
                        />

                        <span
                          className="text-sm font-medium"
                          data-oid="883szwt"
                        >
                          {source.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-md" data-oid="mz5cjv_">
              <CardHeader data-oid="w6njkq-">
                <CardTitle className="text-[#123B79]" data-oid="6j7ussi">
                  Page Views
                </CardTitle>
                <CardDescription data-oid="3bmii34">
                  Most visited pages
                </CardDescription>
              </CardHeader>
              <CardContent data-oid=":w_jg76">
                <div className="space-y-4" data-oid="8okgor7">
                  <div
                    className="flex items-center justify-between"
                    data-oid="h8a2yr:"
                  >
                    <span className="text-sm" data-oid="y5ku-b1">
                      Homepage
                    </span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                      data-oid="-6gu-g3"
                    >
                      12,450 views
                    </Badge>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    data-oid="eo6n89x"
                  >
                    <span className="text-sm" data-oid="_5t_:5n">
                      Courses
                    </span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                      data-oid="easdb4j"
                    >
                      8,920 views
                    </Badge>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    data-oid=".3jvl7h"
                  >
                    <span className="text-sm" data-oid="ud65329">
                      About
                    </span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                      data-oid="-bet4sz"
                    >
                      3,240 views
                    </Badge>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    data-oid="mg1toq7"
                  >
                    <span className="text-sm" data-oid="4cnfrvx">
                      Contact
                    </span>
                    <Badge
                      variant="outline"
                      className="border-[#123B79] text-[#123B79]"
                      data-oid="_i7i4:k"
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
