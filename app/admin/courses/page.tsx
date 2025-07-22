"use client";

import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Archive,
  Eye,
  Upload,
  Download,
  GraduationCap,
  Book,
  Video,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { QuickEditModal } from "../products/components/quick-edit-modal";

// Sample product data with enhanced fields for WooCommerce-style display
const products = [
    {
      id: 1,
      slug: "making-the-right-move",
      title: "Making The Right Move",
    sku: "COURSE-001",
      category: "HDB Investment",
      instructor: "George Peng",
      price: 149.99,
    salePrice: 129.99,
      status: "Published",
    stock: "In stock",
    stockQuantity: 116,
      students: 245,
    type: "Course",
    image: "/making-the-right-move.jpg",
    datePublished: "2023-05-15",
    virtual: true,
    downloadable: false,
    },
    {
      id: 2,
    slug: "property-summit-2024",
    title: "Property Summit 2024",
    sku: "EVENT-001",
      category: "Market Analysis",
      instructor: "Adrian Lim",
    price: 299.99,
    salePrice: null,
      status: "Published",
    stock: "Limited stock",
    stockQuantity: 25,
    students: 89,
    type: "Event",
    image: "/property-summit-2024.jpg",
    datePublished: "2023-06-22",
    virtual: false,
    downloadable: true,
    },
    {
      id: 3,
    slug: "property-investment-book",
    title: "Property Investment Guide - Physical Book",
    sku: "BOOK-001",
      category: "Investment Strategy",
      instructor: "Beatrice Lim",
    price: 39.99,
    salePrice: 29.99,
    status: "Published",
    stock: "In stock",
    stockQuantity: 500,
      students: 0,
    type: "Book",
    image: "/property-investment-book.jpg",
    datePublished: "2023-07-10",
    virtual: false,
    downloadable: false,
    },
    {
      id: 4,
      slug: "module-1-of-niche-positioning-masterclass",
      title: "Module 1 of Niche Positioning Masterclass",
    sku: "COURSE-002",
      category: "Strategic Investment",
      instructor: "Marc Chan",
      price: 199.99,
    salePrice: null,
    status: "Draft",
    stock: "Out of stock",
    stockQuantity: 0,
      students: 132,
    type: "Course",
    image: "/module-1-of-niche-positioning-masterclass.jpg",
    datePublished: "2023-04-30",
    virtual: true,
    downloadable: true,
    },
    {
      id: 5,
    slug: "webinar-market-trends",
    title: "Live Webinar: Market Trends 2024",
    sku: "WEBINAR-001",
    category: "Market Analysis",
      instructor: "Shawn Tay",
    price: 0,
    salePrice: null,
      status: "Published",
    stock: "In stock",
    stockQuantity: 1000,
    students: 456,
    type: "Webinar",
    image: "/webinar-market-trends.jpg",
    datePublished: "2023-08-05",
    virtual: true,
    downloadable: false,
  },
];

const getProductTypeIcon = (type: string) => {
  switch (type) {
    case "Course":
      return <GraduationCap className="h-4 w-4 text-blue-600" />;
    case "Book":
      return <Book className="h-4 w-4 text-green-600" />;
    case "Event":
      return <Calendar className="h-4 w-4 text-purple-600" />;
    case "Webinar":
      return <Video className="h-4 w-4 text-orange-600" />;
    default:
      return <GraduationCap className="h-4 w-4 text-gray-600" />;
  }
};

const getStockDisplay = (stock: string, quantity: number) => {
  if (stock === "In stock") {
    return (
      <div className="flex flex-col">
        <span className="text-green-600 font-medium">{stock}</span>
        <span className="text-sm text-gray-500">({quantity})</span>
      </div>
    );
  } else if (stock === "Limited stock") {
    return (
      <div className="flex flex-col">
        <span className="text-orange-600 font-medium">{stock}</span>
        <span className="text-sm text-gray-500">({quantity})</span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <span className="text-red-600 font-medium">Out of stock</span>
        <span className="text-sm text-gray-500">(0)</span>
      </div>
    );
  }
};

const getPriceDisplay = (price: number, salePrice: number | null) => {
  if (salePrice && salePrice < price) {
    return (
      <div className="flex flex-col">
        <span className="text-gray-400 line-through text-sm">
          ${price.toFixed(2)}
        </span>
        <span className="font-medium text-green-600">
          ${salePrice.toFixed(2)}
        </span>
      </div>
    );
  } else if (price === 0) {
    return <span className="font-medium text-blue-600">Free</span>;
  } else {
    return <span className="font-medium">${price.toFixed(2)}</span>;
  }
};

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [quickEditProduct, setQuickEditProduct] = useState<any>(null);
  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(products.map((p) => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId: number, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }
  };

  const handleQuickEdit = (product: any) => {
    setQuickEditProduct(product);
    setIsQuickEditOpen(true);
  };

  const handleQuickEditSave = (updatedProduct: any) => {
    // In a real implementation, this would update the product in the database
    console.log("Updating product:", updatedProduct);
    setIsQuickEditOpen(false);
    setQuickEditProduct(null);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchesType = typeFilter === "all" || product.type === typeFilter;
    const matchesStock =
      stockFilter === "all" ||
      (stockFilter === "in-stock" && product.stock === "In stock") ||
      (stockFilter === "out-of-stock" && product.stock === "Out of stock") ||
      (stockFilter === "limited" && product.stock === "Limited stock");

    return matchesSearch && matchesCategory && matchesType && matchesStock;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">All Products</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button asChild className="bg-[#123B79] hover:bg-[#425DA0] gap-2">
            <Link href="/admin/products/new">
              <Plus className="h-4 w-4" />
              Add New Product
          </Link>
        </Button>
        </div>
      </div>

      {/* Command Bar - Advanced Filters */}
      <Card className="border-gray-300 bg-white shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Filter by category:</span>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="HDB Investment">HDB Investment</SelectItem>
                  <SelectItem value="Market Analysis">
                    Market Analysis
                  </SelectItem>
                  <SelectItem value="Investment Strategy">
                    Investment Strategy
                  </SelectItem>
                  <SelectItem value="Strategic Investment">
                    Strategic Investment
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Filter by type:</span>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="Course">Course</SelectItem>
                  <SelectItem value="Book">Book</SelectItem>
                  <SelectItem value="Event">Event</SelectItem>
                  <SelectItem value="Webinar">Webinar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Stock Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Filter by stock:</span>
              <Select value={stockFilter} onValueChange={setStockFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All stock" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All stock</SelectItem>
                  <SelectItem value="in-stock">In stock</SelectItem>
                  <SelectItem value="limited">Limited stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of stock</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Box */}
            <div className="flex-1 min-w-[200px] max-w-[400px] relative ml-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products by name or SKU..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions Bar */}
      {selectedProducts.length > 0 && (
        <Card className="border-gray-300 bg-blue-50 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {selectedProducts.length} product
                {selectedProducts.length !== 1 ? "s" : ""} selected
                              </span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Bulk Edit
                </Button>
                <Button variant="outline" size="sm">
                  Archive
                            </Button>
                <Button variant="destructive" size="sm">
                              Delete
                </Button>
              </div>
            </div>
            </CardContent>
          </Card>
      )}

      {/* Professional Data Grid */}
      <Card className="border-gray-300 bg-white shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 border-b border-gray-300">
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedProducts.length === products.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead className="w-16">Image</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">SKU</TableHead>
                <TableHead className="font-semibold">Stock</TableHead>
                <TableHead className="font-semibold">Price</TableHead>
                <TableHead className="font-semibold">Categories</TableHead>
                <TableHead className="font-semibold">Type</TableHead>
                <TableHead className="font-semibold">Date Published</TableHead>
                <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors border-b border-gray-200"
                  onMouseEnter={() => setHoveredRow(product.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={(checked) =>
                        handleSelectProduct(product.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div className="w-12 h-12 relative rounded-md overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.jpg";
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-[#123B79]">
                        {product.title}
                      </div>
                      {/* Hover Actions */}
                      {hoveredRow === product.id && (
                        <div className="flex items-center gap-3 text-sm text-blue-600">
                                <Link
                            href={`/admin/products/${product.slug}/edit`}
                            className="hover:underline"
                                >
                                  Edit
                                </Link>
                          <span className="text-gray-300">|</span>
                          <button
                            className="hover:underline"
                            onClick={() =>
                              handleQuickEdit({
                                ...product,
                                virtual: product.virtual,
                                downloadable: product.downloadable,
                                status: product.status as
                                  | "Published"
                                  | "Draft"
                                  | "Archived",
                              })
                            }
                          >
                            Quick Edit
                          </button>
                          <span className="text-gray-300">|</span>
                          <button className="hover:underline">Archive</button>
                          <span className="text-gray-300">|</span>
                                <Link
                            href={`/courses/${product.slug}`}
                            className="hover:underline"
                                >
                                  View
                                </Link>
                        </div>
                      )}
                    </div>
                        </TableCell>
                  <TableCell className="font-mono text-sm">
                    {product.sku}
                        </TableCell>
                  <TableCell>
                    {getStockDisplay(product.stock, product.stockQuantity)}
                        </TableCell>
                  <TableCell>
                    {getPriceDisplay(product.price, product.salePrice)}
                        </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                        </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getProductTypeIcon(product.type)}
                      <span className="text-sm">{product.type}</span>
                    </div>
                        </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {product.datePublished}
                        </TableCell>
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
                            href={`/courses/${product.slug}`}
                                  className="flex items-center"
                                >
                            <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                                <Link
                            href={`/admin/products/${product.slug}/edit`}
                                  className="flex items-center"
                                >
                            <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Archive className="mr-2 h-4 w-4" />
                          Archive
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

      {/* Quick Edit Modal */}
      <QuickEditModal
        product={quickEditProduct}
        isOpen={isQuickEditOpen}
        onClose={() => setIsQuickEditOpen(false)}
        onSave={handleQuickEditSave}
      />
    </div>
  );
}
