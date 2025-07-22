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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">User Management</h1>
        <Button asChild className="bg-[#123B79] hover:bg-[#425DA0]">
          <Link href="/admin/users/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New User
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="admins">Admins</TabsTrigger>
          </TabsList>

          <div className="mt-4 flex items-center gap-2 sm:mt-0">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

              <Input
                type="search"
                placeholder="Search users..."
                className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">All Users</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Enrolled Courses</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                            />

                            <AvatarFallback>
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-medium">{user.role}</span>
                      </TableCell>
                      <TableCell>{user.enrolledCourses}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            user.status === "Active"
                              ? "bg-[#123B79] text-white"
                              : "bg-[#6C757D] text-white"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.joinDate}</TableCell>
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
                                href={`/admin/users/${user.slug}`}
                                className="flex items-center"
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/admin/users/${user.slug}/edit`}
                                className="flex items-center"
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/admin/users/${user.slug}/email`}
                                className="flex items-center"
                              >
                                <Mail className="mr-2 h-4 w-4" />
                                Send Email
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/admin/users/${user.slug}/reset-password`}
                                className="flex items-center"
                              >
                                <Lock className="mr-2 h-4 w-4" />
                                Reset Password
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="text-red-600">
                              <Link
                                href={`/admin/users/${user.slug}/delete`}
                                className="flex items-center"
                              >
                                <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="students" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Students</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Enrolled Courses</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter((user) => user.role === "Student")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                              />

                              <AvatarFallback>
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.enrolledCourses}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-[#123B79] text-white"
                                : "bg-[#6C757D] text-white"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
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
                                  href={`/admin/users/${user.slug}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Profile
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/edit`}
                                  className="flex items-center"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit User
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/email`}
                                  className="flex items-center"
                                >
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Email
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/reset-password`}
                                  className="flex items-center"
                                >
                                  <Lock className="mr-2 h-4 w-4" />
                                  Reset Password
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                className="text-red-600"
                              >
                                <Link
                                  href={`/admin/users/${user.slug}/delete`}
                                  className="flex items-center"
                                >
                                  <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="instructors" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Instructors</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter((user) => user.role === "Instructor")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                              />

                              <AvatarFallback>
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-[#123B79] text-white"
                                : "bg-[#6C757D] text-white"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
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
                                  href={`/admin/users/${user.slug}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Profile
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/edit`}
                                  className="flex items-center"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit User
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/email`}
                                  className="flex items-center"
                                >
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Email
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/reset-password`}
                                  className="flex items-center"
                                >
                                  <Lock className="mr-2 h-4 w-4" />
                                  Reset Password
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                className="text-red-600"
                              >
                                <Link
                                  href={`/admin/users/${user.slug}/delete`}
                                  className="flex items-center"
                                >
                                  <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="admins" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Administrators</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter((user) => user.role === "Admin")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                              />

                              <AvatarFallback>
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-[#123B79] text-white"
                                : "bg-[#6C757D] text-white"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
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
                                  href={`/admin/users/${user.slug}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Profile
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/edit`}
                                  className="flex items-center"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit User
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/email`}
                                  className="flex items-center"
                                >
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Email
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/users/${user.slug}/reset-password`}
                                  className="flex items-center"
                                >
                                  <Lock className="mr-2 h-4 w-4" />
                                  Reset Password
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                className="text-red-600"
                              >
                                <Link
                                  href={`/admin/users/${user.slug}/delete`}
                                  className="flex items-center"
                                >
                                  <Trash className="mr-2 h-4 w-4" />
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
