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
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash,
  Eye,
  Lock,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function UsersPage() {
  const users = [
    {
      id: 1,
      slug: "john-smith",
      name: "John Smith",
      email: "john@example.com",
      role: "Student",
      enrolledCourses: 3,
      status: "Active",
      joinDate: "2023-01-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      slug: "sarah-johnson",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Student",
      enrolledCourses: 5,
      status: "Active",
      joinDate: "2023-02-22",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      slug: "michael-brown",
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Instructor",
      enrolledCourses: 0,
      status: "Active",
      joinDate: "2022-11-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      slug: "emily-davis",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Student",
      enrolledCourses: 2,
      status: "Inactive",
      joinDate: "2023-03-05",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      slug: "david-wilson",
      name: "David Wilson",
      email: "david@example.com",
      role: "Instructor",
      enrolledCourses: 0,
      status: "Active",
      joinDate: "2022-09-18",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      slug: "jennifer-lee",
      name: "Jennifer Lee",
      email: "jennifer@example.com",
      role: "Admin",
      enrolledCourses: 0,
      status: "Active",
      joinDate: "2022-08-01",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="space-y-6" data-oid="w6fhqz:">
      <div className="flex items-center justify-between" data-oid="6_-vw9c">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid=":nlbq5-">
          User Management
        </h1>
        <Button
          asChild
          className="bg-[#123B79] hover:bg-[#425DA0]"
          data-oid="uadl53t"
        >
          <Link href="/admin/users/new" data-oid="dpazrkg">
            <Plus className="mr-2 h-4 w-4" data-oid="d_6jqr6" />
            Add New User
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6" data-oid="8bn9d_d">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          data-oid="0-dtyn:"
        >
          <TabsList data-oid=":.l3uao">
            <TabsTrigger value="all" data-oid=".xe2r3j">
              All Users
            </TabsTrigger>
            <TabsTrigger value="students" data-oid="0k.1hj8">
              Students
            </TabsTrigger>
            <TabsTrigger value="instructors" data-oid="ikdhkux">
              Instructors
            </TabsTrigger>
            <TabsTrigger value="admins" data-oid="ppyuc5h">
              Admins
            </TabsTrigger>
          </TabsList>

          <div
            className="mt-4 flex items-center gap-2 sm:mt-0"
            data-oid="85.f05c"
          >
            <div className="relative" data-oid="1jrl_sj">
              <Search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="9vardmj"
              />

              <Input
                type="search"
                placeholder="Search users..."
                className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
                data-oid="wobi10x"
              />
            </div>
            <Button variant="outline" size="icon" data-oid="ox717q4">
              <Filter className="h-4 w-4" data-oid="nrbgv43" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-4" data-oid=":9f.8f.">
          <Card className="border-gray-200" data-oid="qqaoxw4">
            <CardHeader className="px-6 py-4" data-oid="658fmv_">
              <CardTitle className="text-base" data-oid="p6ow4_g">
                All Users
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="s2445.w">
              <Table data-oid="8nwljrq">
                <TableHeader data-oid="5oy9sgo">
                  <TableRow data-oid="f.bp4tg">
                    <TableHead data-oid="n02zt:j">User</TableHead>
                    <TableHead data-oid="gmnd:h3">Role</TableHead>
                    <TableHead data-oid="w1e36wv">Enrolled Courses</TableHead>
                    <TableHead data-oid="0dyjrhk">Status</TableHead>
                    <TableHead data-oid=".qru6jm">Join Date</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="54zwu8y"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid=".tqfc3b">
                  {users.map((user) => (
                    <TableRow key={user.id} data-oid="wo4qhbb">
                      <TableCell data-oid="m6art0t">
                        <div
                          className="flex items-center gap-3"
                          data-oid="7y_1ws:"
                        >
                          <Avatar data-oid="vs88emr">
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                              data-oid="yl5l7mo"
                            />

                            <AvatarFallback data-oid="tp0m:67">
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div data-oid="2:nu8l3">
                            <div className="font-medium" data-oid="ftfnw_6">
                              {user.name}
                            </div>
                            <div
                              className="text-sm text-muted-foreground"
                              data-oid="h_-ep7z"
                            >
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell data-oid=".skm3l-">
                        <span
                          className="text-sm font-medium"
                          data-oid="qhvnkrn"
                        >
                          {user.role}
                        </span>
                      </TableCell>
                      <TableCell data-oid="plfxldb">
                        {user.enrolledCourses}
                      </TableCell>
                      <TableCell data-oid="lj9dqa0">
                        <Badge
                          className={
                            user.status === "Active"
                              ? "bg-[#123B79] text-white"
                              : "bg-[#6C757D] text-white"
                          }
                          data-oid="aredxf7"
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell data-oid="tfyopnx">{user.joinDate}</TableCell>
                      <TableCell data-oid="u7.dhy7">
                        <DropdownMenu data-oid="o7u1ql3">
                          <DropdownMenuTrigger asChild data-oid="metfk6t">
                            <Button
                              variant="ghost"
                              size="icon"
                              data-oid="o7vy9dl"
                            >
                              <MoreHorizontal
                                className="h-4 w-4"
                                data-oid="3_-8a4:"
                              />

                              <span className="sr-only" data-oid="r-n1bx.">
                                Actions
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" data-oid="-rlsmte">
                            <DropdownMenuItem asChild data-oid="kkiyv2i">
                              <Link
                                href={`/admin/users/${user.slug}`}
                                className="flex items-center"
                                data-oid=":dy59b4"
                              >
                                <Eye
                                  className="mr-2 h-4 w-4"
                                  data-oid="-434mv1"
                                />
                                View Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild data-oid="b5hqb5b">
                              <Link
                                href={`/admin/users/${user.slug}/edit`}
                                className="flex items-center"
                                data-oid="f2lctc4"
                              >
                                <Edit
                                  className="mr-2 h-4 w-4"
                                  data-oid="sk765yv"
                                />
                                Edit User
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild data-oid="hdrvum9">
                              <Link
                                href={`/admin/users/${user.slug}/email`}
                                className="flex items-center"
                                data-oid="p2j.tx0"
                              >
                                <Mail
                                  className="mr-2 h-4 w-4"
                                  data-oid="nvl9z3s"
                                />
                                Send Email
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild data-oid="a80qceu">
                              <Link
                                href={`/admin/users/${user.slug}/reset-password`}
                                className="flex items-center"
                                data-oid="nti18ul"
                              >
                                <Lock
                                  className="mr-2 h-4 w-4"
                                  data-oid="ofzekql"
                                />
                                Reset Password
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              asChild
                              className="text-red-600"
                              data-oid=".fngqb6"
                            >
                              <Link
                                href={`/admin/users/${user.slug}/delete`}
                                className="flex items-center"
                                data-oid="afrhu0b"
                              >
                                <Trash
                                  className="mr-2 h-4 w-4"
                                  data-oid="zl55z33"
                                />
                                Delete User
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

        <TabsContent value="students" className="mt-4" data-oid="pzfxfik">
          <Card className="border-gray-200" data-oid="jb4druy">
            <CardHeader className="px-6 py-4" data-oid="nahwk5a">
              <CardTitle className="text-base" data-oid="5:id5jk">
                Students
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="f9n5uni">
              <Table data-oid="imzlb2f">
                <TableHeader data-oid="m0ndf09">
                  <TableRow data-oid="xe-miq0">
                    <TableHead data-oid=".gkpd8z">User</TableHead>
                    <TableHead data-oid="eil21.h">Enrolled Courses</TableHead>
                    <TableHead data-oid="v4qnbhz">Status</TableHead>
                    <TableHead data-oid="7do7wh0">Join Date</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="y84i-iw"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="_2p1-p_">
                  {users
                    .filter((user) => user.role === "Student")
                    .map((user) => (
                      <TableRow key={user.id} data-oid="qvbczx3">
                        <TableCell data-oid="54o05bd">
                          <div
                            className="flex items-center gap-3"
                            data-oid="n_oh7df"
                          >
                            <Avatar data-oid="_y5apsi">
                              <AvatarImage
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                data-oid="vrg4bgp"
                              />

                              <AvatarFallback data-oid="omcowtu">
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div data-oid="_5:6q4w">
                              <div className="font-medium" data-oid="81d30jx">
                                {user.name}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="_-mv.:j"
                              >
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-oid="bvjg2xi">
                          {user.enrolledCourses}
                        </TableCell>
                        <TableCell data-oid="0:-ob90">
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-[#123B79] text-white"
                                : "bg-[#6C757D] text-white"
                            }
                            data-oid="3jil4cy"
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell data-oid="0s19thi">
                          {user.joinDate}
                        </TableCell>
                        <TableCell data-oid="3n-g280">
                          <DropdownMenu data-oid="4m:.15h">
                            <DropdownMenuTrigger asChild data-oid="e7ow.zd">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="gjdelp5"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="-yc-:_5"
                                />

                                <span className="sr-only" data-oid="mit7kuj">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="vjhq4x4">
                              <DropdownMenuItem asChild data-oid="91eb2fh">
                                <Link
                                  href={`/admin/users/${user.slug}`}
                                  className="flex items-center"
                                  data-oid="zfwg4-n"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="-kb919j"
                                  />
                                  View Profile
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="sj8ef5h">
                                <Link
                                  href={`/admin/users/${user.slug}/edit`}
                                  className="flex items-center"
                                  data-oid="s:p6.l8"
                                >
                                  <Edit
                                    className="mr-2 h-4 w-4"
                                    data-oid="k2m8buv"
                                  />
                                  Edit User
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="6mtynkq">
                                <Link
                                  href={`/admin/users/${user.slug}/email`}
                                  className="flex items-center"
                                  data-oid="jofujmq"
                                >
                                  <Mail
                                    className="mr-2 h-4 w-4"
                                    data-oid="4e87raa"
                                  />
                                  Send Email
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="fmizcs3">
                                <Link
                                  href={`/admin/users/${user.slug}/reset-password`}
                                  className="flex items-center"
                                  data-oid=":n83mtv"
                                >
                                  <Lock
                                    className="mr-2 h-4 w-4"
                                    data-oid="oeoeg5l"
                                  />
                                  Reset Password
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                className="text-red-600"
                                data-oid="ke09.-6"
                              >
                                <Link
                                  href={`/admin/users/${user.slug}/delete`}
                                  className="flex items-center"
                                  data-oid="wmp93ya"
                                >
                                  <Trash
                                    className="mr-2 h-4 w-4"
                                    data-oid="y0i1u2s"
                                  />
                                  Delete User
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

        <TabsContent value="instructors" className="mt-4" data-oid="_btl6vd">
          <Card className="border-gray-200" data-oid="8ovhm5o">
            <CardHeader className="px-6 py-4" data-oid="b9_hvt.">
              <CardTitle className="text-base" data-oid="j_y7j.t">
                Instructors
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="rhu_jvu">
              <Table data-oid="i2uv_nh">
                <TableHeader data-oid="090.hom">
                  <TableRow data-oid="pzay769">
                    <TableHead data-oid="y839zjb">User</TableHead>
                    <TableHead data-oid="_80ws:e">Status</TableHead>
                    <TableHead data-oid="30xsvc2">Join Date</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="f08eu-a"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="kx.7o0y">
                  {users
                    .filter((user) => user.role === "Instructor")
                    .map((user) => (
                      <TableRow key={user.id} data-oid="gzoh3f1">
                        <TableCell data-oid="z8dvidd">
                          <div
                            className="flex items-center gap-3"
                            data-oid="i2n_tsx"
                          >
                            <Avatar data-oid="27uw7hd">
                              <AvatarImage
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                data-oid="4a982es"
                              />

                              <AvatarFallback data-oid="eip1l8:">
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div data-oid="y5.vl8_">
                              <div className="font-medium" data-oid="t0pqb_7">
                                {user.name}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="mu1q9br"
                              >
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-oid="vj:tgpe">
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-[#123B79] text-white"
                                : "bg-[#6C757D] text-white"
                            }
                            data-oid="y:q3fx-"
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell data-oid="4k2g8b9">
                          {user.joinDate}
                        </TableCell>
                        <TableCell data-oid="vnc-4s9">
                          <DropdownMenu data-oid="obdrc.2">
                            <DropdownMenuTrigger asChild data-oid="e04zqm.">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="sx5s-sn"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="754frb8"
                                />

                                <span className="sr-only" data-oid="4xue1jn">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="pm16gxs">
                              <DropdownMenuItem asChild data-oid="jth0kia">
                                <Link
                                  href={`/admin/users/${user.slug}`}
                                  className="flex items-center"
                                  data-oid="ih_0p17"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="_dsl2u7"
                                  />
                                  View Profile
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="l.:kgmj">
                                <Link
                                  href={`/admin/users/${user.slug}/edit`}
                                  className="flex items-center"
                                  data-oid="77anha2"
                                >
                                  <Edit
                                    className="mr-2 h-4 w-4"
                                    data-oid="t8tlzp0"
                                  />
                                  Edit User
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="7h5-b2.">
                                <Link
                                  href={`/admin/users/${user.slug}/email`}
                                  className="flex items-center"
                                  data-oid="-lcv9fs"
                                >
                                  <Mail
                                    className="mr-2 h-4 w-4"
                                    data-oid="l6g45yv"
                                  />
                                  Send Email
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="aom88fs">
                                <Link
                                  href={`/admin/users/${user.slug}/reset-password`}
                                  className="flex items-center"
                                  data-oid="slvq887"
                                >
                                  <Lock
                                    className="mr-2 h-4 w-4"
                                    data-oid="3wjt6xa"
                                  />
                                  Reset Password
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                className="text-red-600"
                                data-oid="__s_ljk"
                              >
                                <Link
                                  href={`/admin/users/${user.slug}/delete`}
                                  className="flex items-center"
                                  data-oid=":7vv5sm"
                                >
                                  <Trash
                                    className="mr-2 h-4 w-4"
                                    data-oid="rz4ogs3"
                                  />
                                  Delete User
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

        <TabsContent value="admins" className="mt-4" data-oid="3mlniqx">
          <Card className="border-gray-200" data-oid="u.-k44-">
            <CardHeader className="px-6 py-4" data-oid="q9des:a">
              <CardTitle className="text-base" data-oid="7cs94l4">
                Administrators
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="lcu92l0">
              <Table data-oid="z4bymqq">
                <TableHeader data-oid="1s8oiha">
                  <TableRow data-oid="-s4i53w">
                    <TableHead data-oid="-4pet6x">User</TableHead>
                    <TableHead data-oid="7orlg4b">Status</TableHead>
                    <TableHead data-oid="iqdtnyw">Join Date</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="b868odu"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="hld.gxo">
                  {users
                    .filter((user) => user.role === "Admin")
                    .map((user) => (
                      <TableRow key={user.id} data-oid=".p:7o1l">
                        <TableCell data-oid="3.8g-2m">
                          <div
                            className="flex items-center gap-3"
                            data-oid="9u96:l3"
                          >
                            <Avatar data-oid="fjiqymf">
                              <AvatarImage
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                data-oid="bjmk2.g"
                              />

                              <AvatarFallback data-oid="k9isjfi">
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div data-oid="tkic9e-">
                              <div className="font-medium" data-oid="0dmzvn2">
                                {user.name}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="k4rha79"
                              >
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-oid="jikr8dw">
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-[#123B79] text-white"
                                : "bg-[#6C757D] text-white"
                            }
                            data-oid="5jr3ogu"
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell data-oid="30au-34">
                          {user.joinDate}
                        </TableCell>
                        <TableCell data-oid="v6iq37s">
                          <DropdownMenu data-oid="4c42cuv">
                            <DropdownMenuTrigger asChild data-oid="u4axwd4">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="oc6wm.k"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="nktl8z9"
                                />

                                <span className="sr-only" data-oid="a7fn_wq">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="hexyjhr">
                              <DropdownMenuItem asChild data-oid="z7s0umv">
                                <Link
                                  href={`/admin/users/${user.slug}`}
                                  className="flex items-center"
                                  data-oid="nbxe0gd"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="6g1bwxc"
                                  />
                                  View Profile
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="mrfqxm8">
                                <Link
                                  href={`/admin/users/${user.slug}/edit`}
                                  className="flex items-center"
                                  data-oid="4un:d97"
                                >
                                  <Edit
                                    className="mr-2 h-4 w-4"
                                    data-oid="hvd:.mg"
                                  />
                                  Edit User
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="boomxf1">
                                <Link
                                  href={`/admin/users/${user.slug}/email`}
                                  className="flex items-center"
                                  data-oid="rv2qf3q"
                                >
                                  <Mail
                                    className="mr-2 h-4 w-4"
                                    data-oid="wwfeh_d"
                                  />
                                  Send Email
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="5ywkxb6">
                                <Link
                                  href={`/admin/users/${user.slug}/reset-password`}
                                  className="flex items-center"
                                  data-oid="my:a4jn"
                                >
                                  <Lock
                                    className="mr-2 h-4 w-4"
                                    data-oid="n2_ymxf"
                                  />
                                  Reset Password
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                className="text-red-600"
                                data-oid="ockz2zp"
                              >
                                <Link
                                  href={`/admin/users/${user.slug}/delete`}
                                  className="flex items-center"
                                  data-oid="su_m9-y"
                                >
                                  <Trash
                                    className="mr-2 h-4 w-4"
                                    data-oid="u.7fmu5"
                                  />
                                  Delete User
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
  );
}
