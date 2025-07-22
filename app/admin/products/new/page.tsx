"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Save,
  Calendar,
  Upload,
  X,
  Plus,
  GraduationCap,
  Book,
  Video,
  Calendar as CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProductEditor = () => {
  const [productType, setProductType] = useState("simple");
  const [isVirtual, setIsVirtual] = useState(false);
  const [isDownloadable, setIsDownloadable] = useState(false);
  const [trackStock, setTrackStock] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [courseHighlights, setCourseHighlights] = useState<string[]>([
    "",
    "",
    "",
  ]);
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Additional course-specific data for new products
  const [courseData, setCourseData] = useState({
    highlights: [""],
    learningOutcomes: [""],
    targetAudience: [""],
    instructors: [] as any[],
    modules: [] as any[],
    reviews: [] as any[],
  });

  // Form data states
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    shortDescription: "",
    regularPrice: "",
    salePrice: "",
    sku: "",
    stockQuantity: "",
    lowStockThreshold: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    shippingClass: "",
    courseDuration: "",
    instructor: "",
    enrolledStudents: 0,
    upsells: [],
    crossSells: [],
    rating: 0,
    totalReviews: 0,
    featured: false,
    allowComments: true,
    allowDownloads: false,
    certificate: true,
    autoEnroll: false,
  });

  const categories = [
    "HDB Investment",
    "Market Analysis",
    "Investment Strategy",
    "Strategic Investment",
    "Property Finance",
    "Real Estate Trends",
  ];

  const instructors = [
    { id: "george-peng", name: "George Peng" },
    { id: "adrian-lim", name: "Adrian Lim" },
    { id: "beatrice-lim", name: "Beatrice Lim" },
    { id: "marc-chan", name: "Marc Chan" },
    { id: "shawn-tay", name: "Shawn Tay" },
  ];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleHighlightChange = (index: number, value: string) => {
    setCourseHighlights((prev) => {
      const newHighlights = [...prev];
      newHighlights[index] = value;
      return newHighlights;
    });
  };

  const addHighlight = () => {
    setCourseHighlights((prev) => [...prev, ""]);
  };

  const removeHighlight = (index: number) => {
    setCourseHighlights((prev) => prev.filter((_, i) => i !== index));
  };

  // Helper functions for managing course data arrays
  const addItemToArray = (arrayName: string, value: string) => {
    if (!value.trim()) return;
    setCourseData((prev) => ({
      ...prev,
      [arrayName]: [
        ...(prev[arrayName as keyof typeof prev] as string[]),
        value.trim(),
      ],
    }));
  };

  const removeItemFromArray = (arrayName: string, index: number) => {
    setCourseData((prev) => ({
      ...prev,
      [arrayName]: (prev[arrayName as keyof typeof prev] as string[]).filter(
        (_, i) => i !== index,
      ),
    }));
  };

  const updateItemInArray = (
    arrayName: string,
    index: number,
    value: string,
  ) => {
    setCourseData((prev) => {
      const newArray = [...(prev[arrayName as keyof typeof prev] as string[])];
      newArray[index] = value;
      return {
        ...prev,
        [arrayName]: newArray,
      };
    });
  };

  return (
    <div className="container mx-auto py-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#123B79]">Add New Product</h1>
          <p className="text-gray-600 mt-1">
            Create a new product for your catalog
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/admin/courses">Cancel</Link>
          </Button>
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-[#123B79] hover:bg-[#425DA0]">
            <Save className="h-4 w-4 mr-2" />
            Save Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Content Area */}
        <div className="col-span-8">
          {/* Product Name */}
          <Card className="mb-6 border-gray-300 bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-base font-semibold">
                    Product Name
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter product name"
                    className="text-lg h-12 mt-2"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Long Description */}
          <Card className="mb-6 border-gray-300 bg-white shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle>Product Description</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Describe your product in detail..."
                className="min-h-[200px] resize-none"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </CardContent>
          </Card>

          {/* Product Data Section */}
          <Card className="mb-6 border-gray-300 bg-white shadow-sm">
            <CardHeader className="pb-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <CardTitle>Product Data</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="product-type" className="text-sm">
                      Product type:
                    </Label>
                    <Select value={productType} onValueChange={setProductType}>
                      <SelectTrigger id="product-type" className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">Simple Product</SelectItem>
                        <SelectItem value="course">Course Product</SelectItem>
                        <SelectItem value="book">Physical Book</SelectItem>
                        <SelectItem value="event">Event/Workshop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="virtual"
                        checked={isVirtual}
                        onCheckedChange={setIsVirtual}
                      />

                      <Label htmlFor="virtual" className="text-sm">
                        Virtual
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="downloadable"
                        checked={isDownloadable}
                        onCheckedChange={setIsDownloadable}
                      />

                      <Label htmlFor="downloadable" className="text-sm">
                        Downloadable
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general" className="w-full">
                <div className="grid grid-cols-12 gap-6">
                  {/* Vertical Tabs */}
                  <div className="col-span-3">
                    <TabsList className="grid w-full grid-rows-5 h-auto bg-gray-100 border border-gray-300">
                      <TabsTrigger
                        value="general"
                        className="justify-start text-left"
                      >
                        General
                      </TabsTrigger>
                      <TabsTrigger
                        value="inventory"
                        className="justify-start text-left"
                      >
                        Inventory
                      </TabsTrigger>
                      <TabsTrigger
                        value="shipping"
                        className="justify-start text-left"
                        disabled={isVirtual}
                      >
                        Shipping
                      </TabsTrigger>
                      {productType === "course" && (
                        <TabsTrigger
                          value="course-details"
                          className="justify-start text-left"
                        >
                          Course Details
                        </TabsTrigger>
                      )}
                      <TabsTrigger
                        value="linked"
                        className="justify-start text-left"
                      >
                        Linked Products
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Tab Content */}
                  <div className="col-span-9 bg-white border border-gray-300 rounded-md p-4">
                    {/* General Tab */}
                    <TabsContent value="general" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="regular-price">
                            Regular price ($)
                          </Label>
                          <Input
                            id="regular-price"
                            placeholder="0.00"
                            type="number"
                            step="0.01"
                            value={formData.regularPrice}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                regularPrice: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="sale-price">Sale price ($)</Label>
                          <Input
                            id="sale-price"
                            placeholder="0.00"
                            type="number"
                            step="0.01"
                            value={formData.salePrice}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                salePrice: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Schedule sale dates</span>
                      </div>
                      <div>
                        <Label htmlFor="tax-status">Tax status</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Taxable" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="taxable">Taxable</SelectItem>
                            <SelectItem value="shipping">
                              Shipping only
                            </SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>

                    {/* Inventory Tab */}
                    <TabsContent value="inventory" className="space-y-4">
                      <div>
                        <Label htmlFor="sku">SKU</Label>
                        <Input
                          id="sku"
                          placeholder="e.g. COURSE-001"
                          value={formData.sku}
                          onChange={(e) =>
                            setFormData({ ...formData, sku: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="track-stock"
                          checked={trackStock}
                          onCheckedChange={setTrackStock}
                        />

                        <Label htmlFor="track-stock">
                          Track stock quantity for this product
                        </Label>
                      </div>
                      {trackStock && (
                        <>
                          <div>
                            <Label htmlFor="stock-quantity">
                              Stock quantity
                            </Label>
                            <Input
                              id="stock-quantity"
                              type="number"
                              placeholder="0"
                              value={formData.stockQuantity}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  stockQuantity: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="low-stock">
                              Low stock threshold
                            </Label>
                            <Input
                              id="low-stock"
                              type="number"
                              placeholder="5"
                              value={formData.lowStockThreshold}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  lowStockThreshold: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="backorders">
                              Allow backorders?
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Do not allow" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="no">Do not allow</SelectItem>
                                <SelectItem value="notify">
                                  Allow, but notify customer
                                </SelectItem>
                                <SelectItem value="yes">Allow</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}
                    </TabsContent>

                    {/* Shipping Tab */}
                    <TabsContent value="shipping" className="space-y-4">
                      <div>
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          placeholder="0.5"
                          type="number"
                          step="0.01"
                          value={formData.weight}
                          onChange={(e) =>
                            setFormData({ ...formData, weight: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label>Dimensions (cm)</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <Input
                            placeholder="Length"
                            type="number"
                            step="0.1"
                            value={formData.length}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                length: e.target.value,
                              })
                            }
                          />

                          <Input
                            placeholder="Width"
                            type="number"
                            step="0.1"
                            value={formData.width}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                width: e.target.value,
                              })
                            }
                          />

                          <Input
                            placeholder="Height"
                            type="number"
                            step="0.1"
                            value={formData.height}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                height: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="shipping-class">Shipping class</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="No shipping class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">No shipping class</SelectItem>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="express">Express</SelectItem>
                            <SelectItem value="free">Free shipping</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>

                    {/* Course Details Tab */}
                    {productType === "course" && (
                      <TabsContent value="course-details" className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="course-duration">
                              Course Duration
                            </Label>
                            <Input
                              id="course-duration"
                              placeholder="2 hours 30 minutes"
                              value={formData.courseDuration}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  courseDuration: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="instructor">Instructor</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select instructor" />
                              </SelectTrigger>
                              <SelectContent>
                                {instructors.map((instructor) => (
                                  <SelectItem
                                    key={instructor.id}
                                    value={instructor.id}
                                  >
                                    {instructor.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label>Enrolled Students</Label>
                          <Input
                            value={formData.enrolledStudents.toString()}
                            disabled
                            className="bg-gray-100"
                          />
                        </div>
                        <div>
                          <Label>Course Highlights</Label>
                          <div className="space-y-2 mt-2">
                            {courseHighlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Input
                                  placeholder={`Highlight ${index + 1}`}
                                  value={highlight}
                                  onChange={(e) =>
                                    handleHighlightChange(index, e.target.value)
                                  }
                                />

                                {courseHighlights.length > 1 && (
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => removeHighlight(index)}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            ))}
                            <Button
                              type="button"
                              variant="outline"
                              onClick={addHighlight}
                              className="w-full"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Highlight
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    )}

                    {/* Linked Products Tab */}
                    <TabsContent value="linked" className="space-y-4">
                      <div>
                        <Label htmlFor="upsells">Upsells</Label>
                        <Textarea
                          id="upsells"
                          placeholder="Search for products to upsell..."
                          className="min-h-[100px]"
                        />

                        <p className="text-sm text-gray-600 mt-1">
                          Upsells are products which you recommend instead of
                          the currently viewed product.
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="cross-sells">Cross-sells</Label>
                        <Textarea
                          id="cross-sells"
                          placeholder="Search for products to cross-sell..."
                          className="min-h-[100px]"
                        />

                        <p className="text-sm text-gray-600 mt-1">
                          Cross-sells are products which you promote in the
                          cart, based on the current product.
                        </p>
                      </div>
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          {/* Product Short Description */}
          <Card className="border-gray-300 bg-white shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle>Product Short Description</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter a short description for your product..."
                className="min-h-[120px] resize-none"
                value={formData.shortDescription}
                onChange={(e) =>
                  setFormData({ ...formData, shortDescription: e.target.value })
                }
              />
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Publish Card */}
          <Card className="border-gray-300 bg-white shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-base">Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Status:</span>
                <span className="text-blue-600">Draft</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Visibility:</span>
                <span className="text-blue-600">Public</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Save Draft
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
              <Button className="w-full bg-[#123B79] hover:bg-[#425DA0]">
                Publish
              </Button>
            </CardContent>
          </Card>

          {/* Categories Card */}
          <Card className="border-gray-300 bg-white shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-base">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryToggle(category)}
                    />

                    <Label
                      htmlFor={`category-${category}`}
                      className="text-sm cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-300">
                <Button variant="outline" size="sm">
                  + Add new category
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Image Card */}
          <Card className="border-gray-300 bg-white shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-base">Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              {featuredImage ? (
                <div className="relative">
                  <Image
                    src={featuredImage}
                    alt="Featured image"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setFeaturedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload image
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Upload Image
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Product Gallery Card */}
          <Card className="border-gray-300 bg-white shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-base">Product Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              {galleryImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        width={150}
                        height={100}
                        className="w-full h-20 object-cover rounded-md"
                      />

                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 w-6 h-6"
                        onClick={() => {
                          setGalleryImages((prev) =>
                            prev.filter((_, i) => i !== index),
                          );
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : null}
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Upload className="h-4 w-4 mr-2" />
                Add Gallery Images
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductEditor;
