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
  GraduationCap,
  BookOpen,
  FileIcon,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// Product type icons mapping
const getProductTypeIcon = (type: string) => {
  switch (type) {
    case "Digital Course":
      return <GraduationCap className="h-4 w-4 text-blue-600" />;
    case "Physical Book":
      return <BookOpen className="h-4 w-4 text-green-600" />;
    case "Article":
      return <FileIcon className="h-4 w-4 text-purple-600" />;
    default:
      return <FileIcon className="h-4 w-4 text-gray-600" />;
  }
};

// Inventory status styling
const getInventoryStatus = (type: string, inventory: number | string) => {
  if (type === "Digital Course" || type === "Article") {
    return <span className="text-gray-500">N/A</span>;
  }

  const stock =
    typeof inventory === "number" ? inventory : parseInt(inventory as string);

  if (stock === 0) {
    return <span className="text-red-600 font-medium">0 (Out of Stock)</span>;
  } else if (stock <= 8) {
    return (
      <span className="text-orange-600 font-medium">{stock} (Low Stock)</span>
    );
  } else {
    return (
      <span className="text-green-600 font-medium">{stock} (In Stock)</span>
    );
  }
};

export default function CatalogPage() {
  const products = [
    {
      id: 1,
      slug: "the-shift-in-singapores-real-estate-market-2023",
      title: "The Shift in SG's Real Estate Market 2023",
      type: "Digital Course",
      category: "Market Analysis",
      price: 89.99,
      inventory: "N/A",
      salesEnrolments: 189,
      status: "Published",
      lastUpdated: "2025-06-22",
    },
    {
      id: 2,
      slug: "plb-book-the-definitive-guide",
      title: "PLB Book: The Definitive Guide",
      type: "Physical Book",
      category: "Strategic Investment",
      price: 49.99,
      inventory: 250,
      salesEnrolments: 250,
      status: "Published",
      lastUpdated: "2025-07-15",
    },
    {
      id: 3,
      slug: "module-1-of-niche-positioning-masterclass",
      title: "Module 1 of Niche Positioning Masterclass",
      type: "Digital Course",
      category: "Strategic Investment",
      price: 199.99,
      inventory: "N/A",
      salesEnrolments: 132,
      status: "Published",
      lastUpdated: "2025-04-30",
    },
    {
      id: 4,
      slug: "digital-marketing-masterclass",
      title: "Digital Marketing Masterclass",
      type: "Digital Course",
      category: "Marketing",
      price: 119.99,
      inventory: "N/A",
      salesEnrolments: 0,
      status: "Draft",
      lastUpdated: "2025-07-12",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">Catalog</h1>
        <Button asChild className="bg-[#123B79] hover:bg-[#425DA0]">
          <Link href="/admin/catalog/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="review">Under Review</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <div className="mt-4 flex items-center gap-2 sm:mt-0">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[200px] md:w-[300px] border-gray-200 bg-white"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export to Sheets
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">All Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Inventory</TableHead>
                    <TableHead>Sales/Enrolments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.title}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getProductTypeIcon(product.type)}
                          <span className="text-sm">{product.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>
                        {getInventoryStatus(product.type, product.inventory)}
                      </TableCell>
                      <TableCell>{product.salesEnrolments}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            product.status === "Published"
                              ? "bg-[#28A745] text-white"
                              : product.status === "Draft"
                                ? "bg-[#123B79] text-white"
                                : product.status === "Review"
                                  ? "bg-[#FFC107] text-[#856404]"
                                  : "bg-[#E4E4E7] text-[#52525B]"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.lastUpdated}</TableCell>
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
                                href={`/admin/catalog/${product.slug}`}
                                className="flex items-center"
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/admin/catalog/${product.slug}/edit`}
                                className="flex items-center"
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            {product.type === "Digital Course" && (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/catalog/${product.slug}/content`}
                                  className="flex items-center"
                                >
                                  <FileText className="mr-2 h-4 w-4" />
                                  Manage Content
                                </Link>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="published" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Published Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Inventory</TableHead>
                    <TableHead>Sales/Enrolments</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products
                    .filter((product) => product.status === "Published")
                    .map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">
                          {product.title}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getProductTypeIcon(product.type)}
                            <span className="text-sm">{product.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                          {getInventoryStatus(product.type, product.inventory)}
                        </TableCell>
                        <TableCell>{product.salesEnrolments}</TableCell>
                        <TableCell>{product.lastUpdated}</TableCell>
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
                                  href={`/admin/catalog/${product.slug}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/catalog/${product.slug}/edit`}
                                  className="flex items-center"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              {product.type === "Digital Course" && (
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/catalog/${product.slug}/content`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    Manage Content
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="draft" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Draft Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Inventory</TableHead>
                    <TableHead>Sales/Enrolments</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products
                    .filter((product) => product.status === "Draft")
                    .map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">
                          {product.title}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getProductTypeIcon(product.type)}
                            <span className="text-sm">{product.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                          {getInventoryStatus(product.type, product.inventory)}
                        </TableCell>
                        <TableCell>{product.salesEnrolments}</TableCell>
                        <TableCell>{product.lastUpdated}</TableCell>
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
                                  href={`/admin/catalog/${product.slug}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/catalog/${product.slug}/edit`}
                                  className="flex items-center"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              {product.type === "Digital Course" && (
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/catalog/${product.slug}/content`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    Manage Content
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="review" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Under Review</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Inventory</TableHead>
                    <TableHead>Sales/Enrolments</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products
                    .filter((product) => product.status === "Review")
                    .map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">
                          {product.title}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getProductTypeIcon(product.type)}
                            <span className="text-sm">{product.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                          {getInventoryStatus(product.type, product.inventory)}
                        </TableCell>
                        <TableCell>{product.salesEnrolments}</TableCell>
                        <TableCell>{product.lastUpdated}</TableCell>
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
                                  href={`/admin/catalog/${product.slug}`}
                                  className="flex items-center"
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/admin/catalog/${product.slug}/edit`}
                                  className="flex items-center"
                                >
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              {product.type === "Digital Course" && (
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/admin/catalog/${product.slug}/content`}
                                    className="flex items-center"
                                  >
                                    <FileText className="mr-2 h-4 w-4" />
                                    Manage Content
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
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

        <TabsContent value="archived" className="mt-4">
          <Card className="border-gray-200">
            <CardHeader className="px-6 py-4">
              <CardTitle className="text-base">Archived Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-8 text-center text-gray-500">
                <FileIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p>No archived products found.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
