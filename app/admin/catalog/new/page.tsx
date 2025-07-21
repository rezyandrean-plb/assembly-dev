"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X, Upload, Plus } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  const [productType, setProductType] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [trackInventory, setTrackInventory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const availableCategories = [
    "Market Analysis",
    "Strategic Investment",
    "Investment Strategy",
    "Marketing",
    "HDB Investment",
    "Property Finance",
  ];

  const addCategory = (category: string) => {
    if (category && !categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };

  const removeCategory = (category: string) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const addNewCategory = () => {
    if (newCategory.trim()) {
      addCategory(newCategory.trim());
      setNewCategory("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#123B79]">Add New Product</h1>
          <p className="text-gray-600 mt-1">
            Create a new product for your catalog
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/catalog">Cancel</Link>
          </Button>
          <Button className="bg-[#123B79] hover:bg-[#425DA0]">
            Save Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Product Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Product Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="product-type">Select Product Type *</Label>
              <Select value={productType} onValueChange={setProductType}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Choose a product type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Digital Course">
                    🎓 Digital Course
                  </SelectItem>
                  <SelectItem value="Physical Book">
                    📖 Physical Book
                  </SelectItem>
                  <SelectItem value="Article">📄 Article</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Basic Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Product Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter product title..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  placeholder="auto-generated-from-title"
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This will be auto-generated from the title but can be edited
                </p>
              </div>

              <div>
                <Label>Categories</Label>
                <div className="mt-2 space-y-3">
                  <Select onValueChange={addCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select categories..." />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Add new category..."
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addNewCategory()}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addNewCategory}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {category}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeCategory(category)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label>Product Images</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Drag and drop images here, or click to browse
                  </p>
                  <Button variant="outline" className="mt-2">
                    Choose Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Card */}
          {(productType === "Digital Course" ||
            productType === "Physical Book") && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Regular Price *</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="price"
                        type="number"
                        placeholder="0.00"
                        className="pl-8"
                        step="0.01"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="sale-price">Sale Price (Optional)</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="sale-price"
                        type="number"
                        placeholder="0.00"
                        className="pl-8"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Dynamic Fields Based on Product Type */}
          {productType === "Digital Course" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="instructor">Instructor Name *</Label>
                  <Input
                    id="instructor"
                    placeholder="Enter instructor name..."
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Course Content</Label>
                  <div className="mt-2 p-4 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-600 mb-3">
                      Build your course curriculum by adding modules and content
                    </p>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Module
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {productType === "Physical Book" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Inventory Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                    <Input
                      id="sku"
                      placeholder="Enter SKU..."
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="track-inventory"
                      checked={trackInventory}
                      onCheckedChange={setTrackInventory}
                    />
                    <Label htmlFor="track-inventory">Track Inventory</Label>
                  </div>

                  {trackInventory && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="stock-quantity">Stock Quantity</Label>
                        <Input
                          id="stock-quantity"
                          type="number"
                          placeholder="0"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="low-stock-threshold">
                          Low Stock Threshold
                        </Label>
                        <Input
                          id="low-stock-threshold"
                          type="number"
                          placeholder="10"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="0.0"
                      className="mt-2"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <Label>Dimensions (L x W x H cm)</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <Input placeholder="Length" type="number" />
                      <Input placeholder="Width" type="number" />
                      <Input placeholder="Height" type="number" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Status & Visibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="draft">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="visibility">Visibility</Label>
                <Select defaultValue="public">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="members-only">Members Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-[#123B79] hover:bg-[#425DA0]">
                Save & Publish
              </Button>
              <Button variant="outline" className="w-full">
                Save as Draft
              </Button>
              <Button
                variant="ghost"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Delete Product
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
