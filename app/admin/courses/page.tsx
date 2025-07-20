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
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      slug: "making-the-right-move",
      title: "Making The Right Move",
      category: "HDB Investment",
      instructor: "George Peng",
      price: 149.99,
      status: "Published",
      students: 245,
      lastUpdated: "2023-05-15",
    },
    {
      id: 2,
      slug: "the-shift-in-singapores-real-estate-market-2023",
      title: "The Shift in Singapore's Real Estate Market 2023",
      category: "Market Analysis",
      instructor: "Adrian Lim",
      price: 89.99,
      status: "Published",
      students: 189,
      lastUpdated: "2023-06-22",
    },
    {
      id: 3,
      slug: "the-art-of-real-estate-investment",
      title: "The Art of Real Estate Investment",
      category: "Investment Strategy",
      instructor: "Beatrice Lim",
      price: 129.99,
      status: "Draft",
      students: 0,
      lastUpdated: "2023-07-10",
    },
    {
      id: 4,
      slug: "module-1-of-niche-positioning-masterclass",
      title: "Module 1 of Niche Positioning Masterclass",
      category: "Strategic Investment",
      instructor: "Marc Chan",
      price: 199.99,
      status: "Published",
      students: 132,
      lastUpdated: "2023-04-30",
    },
    {
      id: 5,
      slug: "property-investment-workshop",
      title: "Property Investment Workshop",
      category: "Investment Strategy",
      instructor: "Shawn Tay",
      price: 249.99,
      status: "Published",
      students: 78,
      lastUpdated: "2023-08-05",
    },
    {
      id: 6,
      slug: "digital-marketing-masterclass",
      title: "Digital Marketing Masterclass",
      category: "Marketing",
      instructor: "Emily Davis",
      price: 119.99,
      status: "Review",
      students: 0,
      lastUpdated: "2023-09-12",
    },
  ];

  return (
    <div className="space-y-6" data-oid="lbe2je4">
      <div className="flex items-center justify-between" data-oid="-gi:227">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="nze6e:-">
          Course Management
        </h1>
        <Button
          asChild
          className="bg-[#123B79] hover:bg-[#425DA0]"
          data-oid=".hv90vg"
        >
          <Link href="/admin/courses/new" data-oid="fv927h2">
            <Plus className="mr-2 h-4 w-4" data-oid="1vguw6n" />
            Add New Course
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6" data-oid="-as216r">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          data-oid=".dvif9q"
        >
          <TabsList data-oid="paabtrg">
            <TabsTrigger value="all" data-oid="7z9hwfo">
              All Courses
            </TabsTrigger>
            <TabsTrigger value="published" data-oid="qns5zf1">
              Published
            </TabsTrigger>
            <TabsTrigger value="draft" data-oid="ap-qly1">
              Draft
            </TabsTrigger>
            <TabsTrigger value="review" data-oid="qs4_l4u">
              Under Review
            </TabsTrigger>
          </TabsList>

          <div
            className="mt-4 flex items-center gap-2 sm:mt-0"
            data-oid="8ix_ak:"
          >
            <div className="relative" data-oid="oa95cjs">
              <Search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid=".:udb13"
              />

              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
                data-oid="7tt9oaq"
              />
            </div>
            <Button variant="outline" size="icon" data-oid="4zd99jg">
              <Filter className="h-4 w-4" data-oid="aurib2e" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-4" data-oid="kv8r2..">
          <Card className="border-gray-200" data-oid="00:2_kf">
            <CardHeader className="px-6 py-4" data-oid="p44.mw8">
              <CardTitle className="text-base" data-oid="ivpsjn5">
                All Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="aoh54wc">
              <Table data-oid="1:4578s">
                <TableHeader data-oid="jbh_soi">
                  <TableRow data-oid="p7jd04d">
                    <TableHead data-oid="j:kpu6b">Title</TableHead>
                    <TableHead data-oid="k55vta8">Category</TableHead>
                    <TableHead data-oid="mpv.r.j">Instructor</TableHead>
                    <TableHead data-oid="-0sa73.">Price</TableHead>
                    <TableHead data-oid="gpaqlfg">Status</TableHead>
                    <TableHead data-oid="futoecu">Students</TableHead>
                    <TableHead data-oid="52zewal">Last Updated</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="t-kkg05"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="wewpj_b">
                  {courses.map((course) => (
                    <TableRow key={course.id} data-oid="t2m5xrr">
                      <TableCell className="font-medium" data-oid="kr3v-h9">
                        {course.title}
                      </TableCell>
                      <TableCell data-oid="p.fss.0">
                        {course.category}
                      </TableCell>
                      <TableCell data-oid=".gdc_v1">
                        {course.instructor}
                      </TableCell>
                      <TableCell data-oid="z.8zz6q">${course.price}</TableCell>
                      <TableCell data-oid="6rj7:ix">
                        <Badge
                          className={
                            course.status === "Published"
                              ? "bg-[#28A745] text-white"
                              : course.status === "Draft"
                                ? "bg-[#123B79] text-white"
                                : course.status === "Review"
                                  ? "bg-[#FFC107] text-[#856404]"
                                  : "bg-[#E4E4E7] text-[#52525B]"
                          }
                          data-oid="f-j6rs5"
                        >
                          {course.status}
                        </Badge>
                      </TableCell>
                      <TableCell data-oid="aw683hb">
                        {course.students}
                      </TableCell>
                      <TableCell data-oid="u:ofs-h">
                        {course.lastUpdated}
                      </TableCell>
                      <TableCell data-oid="y8.gqge">
                        <DropdownMenu data-oid="x2ey_.2">
                          <DropdownMenuTrigger asChild data-oid=".4m6p:p">
                            <Button
                              variant="ghost"
                              size="icon"
                              data-oid="c2.4nl8"
                            >
                              <MoreHorizontal
                                className="h-4 w-4"
                                data-oid="4cs0ibf"
                              />

                              <span className="sr-only" data-oid="fzdu3lb">
                                Actions
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" data-oid=":83rl16">
                            <DropdownMenuItem asChild data-oid="6jc3v3d">
                              <Link
                                href={`/admin/courses/${course.slug}`}
                                className="flex items-center"
                                data-oid=".9:v8s6"
                              >
                                <Eye
                                  className="mr-2 h-4 w-4"
                                  data-oid="ydxtgbw"
                                />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild data-oid="dk496ny">
                              <Link
                                href={`/admin/courses/${course.slug}`}
                                className="flex items-center"
                                data-oid="u2dwrud"
                              >
                                <Edit
                                  className="mr-2 h-4 w-4"
                                  data-oid="usqdxxv"
                                />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild data-oid="p6_kxri">
                              <Link
                                href={`/admin/courses/${course.slug}/content`}
                                className="flex items-center"
                                data-oid="56cdgmt"
                              >
                                <FileText
                                  className="mr-2 h-4 w-4"
                                  data-oid="u8ke0io"
                                />
                                Manage Content
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600"
                              data-oid="p74wh48"
                            >
                              <Trash
                                className="mr-2 h-4 w-4"
                                data-oid="_:qo9ke"
                              />
                              Delete
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

        <TabsContent value="published" className="mt-4" data-oid="9.fmoxu">
          <Card className="border-gray-200" data-oid="9:gq:7k">
            <CardHeader className="px-6 py-4" data-oid="x76p3s:">
              <CardTitle className="text-base" data-oid="h623g55">
                Published Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="7.3dk0o">
              <Table data-oid="8asb9pc">
                <TableHeader data-oid="ill7msw">
                  <TableRow data-oid="5nfodp9">
                    <TableHead data-oid="r_eoe-f">Title</TableHead>
                    <TableHead data-oid="j5-zbyp">Category</TableHead>
                    <TableHead data-oid="d09:rp.">Instructor</TableHead>
                    <TableHead data-oid="5q5j1lq">Price</TableHead>
                    <TableHead data-oid="kiqdmzm">Students</TableHead>
                    <TableHead data-oid="nwj-oz_">Last Updated</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="b.wv09r"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="j9qt.93">
                  {courses
                    .filter((course) => course.status === "Published")
                    .map((course) => (
                      <TableRow key={course.id} data-oid="k8i640k">
                        <TableCell className="font-medium" data-oid="xcgxh5h">
                          {course.title}
                        </TableCell>
                        <TableCell data-oid="56kg3.d">
                          {course.category}
                        </TableCell>
                        <TableCell data-oid="rpbd1ax">
                          {course.instructor}
                        </TableCell>
                        <TableCell data-oid="09ki.e5">
                          ${course.price}
                        </TableCell>
                        <TableCell data-oid="7_ytqy-">
                          {course.students}
                        </TableCell>
                        <TableCell data-oid="8xauyc:">
                          {course.lastUpdated}
                        </TableCell>
                        <TableCell data-oid="rxo17m9">
                          <DropdownMenu data-oid="mp6b8tc">
                            <DropdownMenuTrigger asChild data-oid="rg_35uq">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="f850u0z"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="to4_10j"
                                />

                                <span className="sr-only" data-oid="6-3_5fn">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="d5o03bs">
                              <DropdownMenuItem asChild data-oid="-842wwz">
                                <Link
                                  href={`/admin/courses/${course.slug}`}
                                  className="flex items-center"
                                  data-oid="pm4vwzg"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="h-a8pv5"
                                  />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="zg0z.t8">
                                <Link
                                  href={`/admin/courses/${course.slug}`}
                                  className="flex items-center"
                                  data-oid=":zg2e3i"
                                >
                                  <Edit
                                    className="mr-2 h-4 w-4"
                                    data-oid="ny369a4"
                                  />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="oj7zfiy">
                                <Link
                                  href={`/admin/courses/${course.slug}/content`}
                                  className="flex items-center"
                                  data-oid="3w7ph5e"
                                >
                                  <FileText
                                    className="mr-2 h-4 w-4"
                                    data-oid="1c3_kt7"
                                  />
                                  Manage Content
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                data-oid="ht9h:zl"
                              >
                                <Trash
                                  className="mr-2 h-4 w-4"
                                  data-oid="t09l1ul"
                                />
                                Delete
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

        <TabsContent value="draft" className="mt-4" data-oid="y_r.:6i">
          <Card className="border-gray-200" data-oid="79urmor">
            <CardHeader className="px-6 py-4" data-oid="8fbhz08">
              <CardTitle className="text-base" data-oid="m6s1bfm">
                Draft Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid="pavrima">
              <Table data-oid="uit5666">
                <TableHeader data-oid="adrivb9">
                  <TableRow data-oid="k5vg4xo">
                    <TableHead data-oid="6fow.j-">Title</TableHead>
                    <TableHead data-oid="tr1vr4j">Category</TableHead>
                    <TableHead data-oid="k:rk7zz">Instructor</TableHead>
                    <TableHead data-oid="_p8uh8z">Price</TableHead>
                    <TableHead data-oid="dj44_:.">Students</TableHead>
                    <TableHead data-oid=".2a.adc">Last Updated</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="mllnmzy"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="wyx7131">
                  {courses
                    .filter((course) => course.status === "Draft")
                    .map((course) => (
                      <TableRow key={course.id} data-oid="ha3aydt">
                        <TableCell className="font-medium" data-oid="alfavbu">
                          {course.title}
                        </TableCell>
                        <TableCell data-oid=".0ay5:p">
                          {course.category}
                        </TableCell>
                        <TableCell data-oid="5605fl8">
                          {course.instructor}
                        </TableCell>
                        <TableCell data-oid="7:swq:y">
                          ${course.price}
                        </TableCell>
                        <TableCell data-oid="5zv2-mg">
                          {course.students}
                        </TableCell>
                        <TableCell data-oid="k0-9f99">
                          {course.lastUpdated}
                        </TableCell>
                        <TableCell data-oid="2ovfbr1">
                          <DropdownMenu data-oid="nijcvd.">
                            <DropdownMenuTrigger asChild data-oid="owad36v">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="8_1xmml"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid=".rsjp8s"
                                />

                                <span className="sr-only" data-oid="tka7._9">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="8jvyjpd">
                              <DropdownMenuItem asChild data-oid="mzb52as">
                                <Link
                                  href={`/admin/courses/${course.slug}`}
                                  className="flex items-center"
                                  data-oid="djrg7w2"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="9ds0-mu"
                                  />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="s4j95.o">
                                <Link
                                  href={`/admin/courses/${course.slug}`}
                                  className="flex items-center"
                                  data-oid="yln39vm"
                                >
                                  <Edit
                                    className="mr-2 h-4 w-4"
                                    data-oid="x_keu24"
                                  />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="jts-tln">
                                <Link
                                  href={`/admin/courses/${course.slug}/content`}
                                  className="flex items-center"
                                  data-oid="v9c7ysy"
                                >
                                  <FileText
                                    className="mr-2 h-4 w-4"
                                    data-oid="0:jelda"
                                  />
                                  Manage Content
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                data-oid="oi6mlax"
                              >
                                <Trash
                                  className="mr-2 h-4 w-4"
                                  data-oid="xjg2vkx"
                                />
                                Delete
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

        <TabsContent value="review" className="mt-4" data-oid="xw.c1x.">
          <Card className="border-gray-200" data-oid="f8718mt">
            <CardHeader className="px-6 py-4" data-oid="vfd_g-8">
              <CardTitle className="text-base" data-oid="5fpi4yb">
                Under Review
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0" data-oid=".45-6yj">
              <Table data-oid="6i3f.5y">
                <TableHeader data-oid="h591za.">
                  <TableRow data-oid="tzv4biy">
                    <TableHead data-oid="5rqcun.">Title</TableHead>
                    <TableHead data-oid=":qp-wki">Category</TableHead>
                    <TableHead data-oid="07prjug">Instructor</TableHead>
                    <TableHead data-oid="tggm1jn">Price</TableHead>
                    <TableHead data-oid="ueekb9o">Students</TableHead>
                    <TableHead data-oid="gp-95s_">Last Updated</TableHead>
                    <TableHead
                      className="w-[80px]"
                      data-oid="c3_t9:c"
                    ></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid=":74jvl-">
                  {courses
                    .filter((course) => course.status === "Review")
                    .map((course) => (
                      <TableRow key={course.id} data-oid="o1tvrkb">
                        <TableCell className="font-medium" data-oid="x40zv:v">
                          {course.title}
                        </TableCell>
                        <TableCell data-oid="krkwrgs">
                          {course.category}
                        </TableCell>
                        <TableCell data-oid="onbnc4e">
                          {course.instructor}
                        </TableCell>
                        <TableCell data-oid="1ss:p:o">
                          ${course.price}
                        </TableCell>
                        <TableCell data-oid="in6y4tk">
                          {course.students}
                        </TableCell>
                        <TableCell data-oid="70on1hx">
                          {course.lastUpdated}
                        </TableCell>
                        <TableCell data-oid="gu8jw.v">
                          <DropdownMenu data-oid="68a7ho_">
                            <DropdownMenuTrigger asChild data-oid="gwo2ib_">
                              <Button
                                variant="ghost"
                                size="icon"
                                data-oid="xpjn.0a"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="utkohme"
                                />

                                <span className="sr-only" data-oid="fblbwaz">
                                  Actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="97kko_c">
                              <DropdownMenuItem asChild data-oid="5jh891.">
                                <Link
                                  href={`/admin/courses/${course.slug}`}
                                  className="flex items-center"
                                  data-oid="-v-f8b8"
                                >
                                  <Eye
                                    className="mr-2 h-4 w-4"
                                    data-oid="-14m6p3"
                                  />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="xbvj8zf">
                                <Link
                                  href={`/admin/courses/${course.slug}`}
                                  className="flex items-center"
                                  data-oid="iiavxqk"
                                >
                                  <Edit
                                    className="mr-2 h-4 w-4"
                                    data-oid="caj73yu"
                                  />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild data-oid="qem940w">
                                <Link
                                  href={`/admin/courses/${course.slug}/content`}
                                  className="flex items-center"
                                  data-oid="nyvr4qe"
                                >
                                  <FileText
                                    className="mr-2 h-4 w-4"
                                    data-oid="ok2kaun"
                                  />
                                  Manage Content
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                data-oid="2t7.ca7"
                              >
                                <Trash
                                  className="mr-2 h-4 w-4"
                                  data-oid="e_ewcxh"
                                />
                                Delete
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
