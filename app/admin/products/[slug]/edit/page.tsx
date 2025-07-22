"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
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
  ArrowLeft,
  Clock,
  Star,
  Users,
  Settings,
  Edit,
  Trash,
  FileText,
  ImageIcon,
  DollarSign,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EditProductPage = () => {
  const params = useParams();
  const productSlug = params.slug as string;

  const [productType, setProductType] = useState("course");

  // State variables for dynamic content
  const [highlights, setHighlights] = useState<string[]>([
    "Navigate 2025's changing interest rate environment",
    "Identify high-yield property opportunities",
    "Master financing strategies for maximum leverage",
    "Build a recession-proof property portfolio",
  ]);

  const [learningOutcomes, setLearningOutcomes] = useState<string[]>([
    "Analyze market trends and identify profitable investment opportunities",
    "Implement advanced financing strategies to maximize returns",
    "Develop risk management techniques for property investments",
    "Create a diversified property portfolio strategy",
    "Navigate legal and tax implications of property investment",
  ]);

  const [targetAudience, setTargetAudience] = useState<string[]>([
    "Aspiring property investors looking to start their journey",
    "Experienced investors wanting to adapt to 2025 market conditions",
    "Financial advisors seeking property investment knowledge",
    "Anyone interested in building wealth through real estate",
  ]);

  const [isVirtual, setIsVirtual] = useState(true);
  const [isDownloadable, setIsDownloadable] = useState(false);
  const [trackStock, setTrackStock] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "HDB Investment",
  ]);
  const [courseHighlights, setCourseHighlights] = useState<string[]>([
    "Learn property investment fundamentals",
    "Understand market timing strategies",
    "Get exclusive market insights",
  ]);
  const [featuredImage, setFeaturedImage] = useState<string | null>(
    "/making-the-right-move.jpg",
  );
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pre-populated form data (simulating loaded product data)
  const [formData, setFormData] = useState({
    title: "Making The Right Move",
    slug: "making-the-right-move",
    description:
      "A comprehensive course on HDB investment strategies and property market analysis. Learn the fundamentals of making informed property investment decisions in Singapore's competitive market.",
    shortDescription:
      "Master HDB investment strategies with expert guidance from George Peng.",
    regularPrice: "149.99",
    salePrice: "129.99",
    sku: "COURSE-001",
    stockQuantity: "116",
    lowStockThreshold: "10",
    weight: "",
    length: "",
    width: "",
    height: "",
    shippingClass: "",
    courseDuration: "2 hours 30 minutes",
    instructor: "george-peng",
    enrolledStudents: 245,
    upsells: [],
    crossSells: [],
    rating: 4.8,
    totalReviews: 324,
    featured: true,
    allowComments: true,
    allowDownloads: false,
    certificate: true,
    autoEnroll: false,
    lastModified: "2024-01-15T10:30:00Z",
  });

  // Additional course-specific data
  const [courseData, setCourseData] = useState({
    highlights: [
      "Learn property investment fundamentals",
      "Understand market timing strategies",
      "Get exclusive market insights",
    ],

    learningOutcomes: [
      "Analyze market trends and identify profitable investment opportunities",
      "Implement advanced financing strategies to maximize returns",
      "Develop risk management techniques for property investments",
      "Create a diversified property portfolio strategy",
      "Navigate legal and tax implications of property investment",
    ],

    targetAudience: [
      "Aspiring property investors looking to start their journey",
      "Experienced investors wanting to adapt to 2025 market conditions",
      "Financial advisors seeking property investment knowledge",
      "Anyone interested in building wealth through real estate",
    ],

    instructors: [
      {
        id: "george-peng",
        name: "George Peng",
        title: "Property Investment Expert",
        avatar: "/george-peng-headshot.png",
      },
    ],

    modules: [
      {
        id: 1,
        title: "Market Analysis & 2025 Outlook",
        duration: "2h 15m",
        lessons: [
          {
            id: 1,
            title: "Understanding Rate Cut Impacts",
            type: "video",
            duration: "25:30",
          },
          {
            id: 2,
            title: "Market Trends Analysis",
            type: "video",
            duration: "32:15",
          },
          {
            id: 3,
            title: "Regional Market Opportunities",
            type: "video",
            duration: "28:45",
          },
        ],
      },
      {
        id: 2,
        title: "Financing Strategies",
        duration: "2h 45m",
        lessons: [
          {
            id: 5,
            title: "Leveraging Low Interest Rates",
            type: "video",
            duration: "35:20",
          },
          {
            id: 6,
            title: "Alternative Financing Options",
            type: "video",
            duration: "29:40",
          },
          {
            id: 7,
            title: "Mortgage Optimization Techniques",
            type: "video",
            duration: "41:15",
          },
        ],
      },
    ],

    reviews: [
      {
        id: 1,
        author: "Michael Johnson",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        date: "2024-01-10",
        comment:
          "Excellent course! The strategies are practical and the market analysis is spot-on. Already implementing the techniques learned.",
      },
      {
        id: 2,
        author: "Sarah Williams",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        date: "2024-01-08",
        comment:
          "George's expertise really shows. The financing strategies section was particularly valuable for my investment goals.",
      },
      {
        id: 3,
        author: "David Chen",
        avatar: "/placeholder-user.jpg",
        rating: 4,
        date: "2024-01-05",
        comment:
          "Great content and well-structured. Would love to see more case studies in future updates.",
      },
    ],
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

  // Simulate loading product data
  useEffect(() => {
    const loadProductData = async () => {
      // In a real implementation, this would fetch data based on productSlug
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    loadProductData();
  }, [productSlug]);

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

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 space-y-6">
              <div className="h-32 bg-gray-300 rounded"></div>
              <div className="h-64 bg-gray-300 rounded"></div>
              <div className="h-96 bg-gray-300 rounded"></div>
            </div>
            <div className="col-span-4 space-y-6">
              <div className="h-48 bg-gray-300 rounded"></div>
              <div className="h-64 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/courses">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-[#123B79]">Edit Product</h1>
            <p className="text-gray-600 mt-1">
              Update product information and settings
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-[#123B79] hover:bg-[#425DA0]">
            <Save className="h-4 w-4 mr-2" />
            Update Product
          </Button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge className="bg-green-600">Published</Badge>
            <span className="text-sm text-gray-600">
              Last updated: 2023-05-15 at 2:30 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/courses/${productSlug}`}
              className="text-blue-600 hover:underline text-sm"
            >
              View product →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation for Course Product */}
      {productType === "course" ? (
        <Tabs defaultValue="course-details" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="course-details">Course Details</TabsTrigger>
            <TabsTrigger value="course-content">Course Content</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Course Details Tab Content */}
          <TabsContent value="course-details" className="mt-6">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                {/* Basic Information */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Enter the basic details about your course
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="title">Course Title</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          placeholder="Enter course title"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select defaultValue="Finance">
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Finance">Finance</SelectItem>
                            <SelectItem value="Real Estate">
                              Real Estate
                            </SelectItem>
                            <SelectItem value="Investment">
                              Investment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Course Duration</Label>
                        <div className="relative">
                          <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="duration"
                            value={formData.courseDuration}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                courseDuration: e.target.value,
                              })
                            }
                            placeholder="e.g., 8 hours 30 minutes"
                            className="pl-8"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Enrolled Students</Label>
                        <div className="relative">
                          <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            value={formData.enrolledStudents.toString()}
                            disabled
                            className="bg-gray-100 pl-8"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Course Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        placeholder="Describe your course in detail..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Course Thumbnail</Label>
                      <div className="flex items-center gap-4">
                        <div className="relative h-40 w-60 overflow-hidden rounded-md border">
                          {featuredImage ? (
                            <Image
                              src={featuredImage}
                              alt="Course thumbnail"
                              fill
                              className="object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder.jpg";
                              }}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-muted">
                              <ImageIcon className="h-10 w-10 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Button variant="outline">
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Image
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            Recommended size: 1280x720px. Max file size: 5MB.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, featured: checked })
                        }
                      />

                      <Label htmlFor="featured">
                        Feature this course on the homepage
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Course Highlights */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Course Highlights
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setHighlights([...highlights, ""])}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Key selling points that will appear on the course landing
                      page
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={highlight}
                          onChange={(e) => {
                            const newHighlights = [...highlights];
                            newHighlights[index] = e.target.value;
                            setHighlights(newHighlights);
                          }}
                          placeholder="Enter a course highlight"
                          className="flex-1"
                        />

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            setHighlights(
                              highlights.filter((_, i) => i !== index),
                            )
                          }
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {highlights.length === 0 && (
                      <div className="text-center py-4 border-2 border-dashed border-gray-300 rounded">
                        <p className="text-sm text-muted-foreground">
                          No highlights added yet
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setHighlights([""])}
                          className="mt-2"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add your first highlight
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Learning Outcomes */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Learning Outcomes
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setLearningOutcomes([...learningOutcomes, ""])
                        }
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      What will students learn in this course?
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={outcome}
                          onChange={(e) => {
                            const newOutcomes = [...learningOutcomes];
                            newOutcomes[index] = e.target.value;
                            setLearningOutcomes(newOutcomes);
                          }}
                          placeholder="Enter a learning outcome"
                          className="flex-1"
                        />

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            setLearningOutcomes(
                              learningOutcomes.filter((_, i) => i !== index),
                            )
                          }
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Target Audience */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Target Audience
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setTargetAudience([...targetAudience, ""])
                        }
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Who is this course designed for?
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={audience}
                          onChange={(e) => {
                            const newAudience = [...targetAudience];
                            newAudience[index] = e.target.value;
                            setTargetAudience(newAudience);
                          }}
                          placeholder="Enter target audience description"
                          className="flex-1"
                        />

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            setTargetAudience(
                              targetAudience.filter((_, i) => i !== index),
                            )
                          }
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Course Structure Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Course Structure Overview
                      <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                        <Settings className="h-4 w-4 mr-2" />
                        Manage Content
                      </Button>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Quick overview of your course modules. Use "Manage
                      Content" for detailed editing.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        Modules ({courseData.modules.length})
                      </div>

                      {courseData.modules.length > 0 ? (
                        <div className="space-y-3">
                          {courseData.modules.map((module, index) => (
                            <div
                              key={module.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="font-medium">
                                    {module.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {module.lessons.length} lessons •{" "}
                                    {module.duration}
                                  </p>
                                </div>
                              </div>
                              <Badge variant="secondary">Published</Badge>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 border-2 border-dashed border-gray-300 rounded-lg">
                          <FileText className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                          <p className="text-gray-600 mb-2">
                            No modules created yet
                          </p>
                          <p className="text-sm text-gray-500">
                            Use "Manage Content" to add your first module
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Product Data Integration */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Product Information</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Additional product details and settings
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="sku">Product SKU</Label>
                        <Input
                          id="sku"
                          value={formData.sku}
                          onChange={(e) =>
                            setFormData({ ...formData, sku: e.target.value })
                          }
                          placeholder="e.g., COURSE-001"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stock">Stock Quantity</Label>
                        <Input
                          id="stock"
                          type="number"
                          value={formData.stockQuantity}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              stockQuantity: e.target.value,
                            })
                          }
                          placeholder="Unlimited for digital courses"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="virtual-product"
                          checked={isVirtual}
                          onCheckedChange={setIsVirtual}
                        />

                        <Label htmlFor="virtual-product">
                          Virtual product (no shipping required)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="downloadable"
                          checked={isDownloadable}
                          onCheckedChange={setIsDownloadable}
                        />

                        <Label htmlFor="downloadable">
                          Downloadable product
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="track-stock"
                          checked={trackStock}
                          onCheckedChange={setTrackStock}
                        />

                        <Label htmlFor="track-stock">
                          Track stock quantity
                        </Label>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <Label className="text-base font-semibold">
                        Product Categories
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategories.map((category) => (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="px-3 py-1"
                          >
                            {category}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-4 w-4 p-0"
                              onClick={() => {
                                setSelectedCategories((prev) =>
                                  prev.filter((c) => c !== category),
                                );
                              }}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <Select
                        onValueChange={(value) => {
                          if (!selectedCategories.includes(value)) {
                            setSelectedCategories((prev) => [...prev, value]);
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Add category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories
                            .filter((cat) => !selectedCategories.includes(cat))
                            .map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="col-span-4 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Publish</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Status</Label>
                      <Badge className="bg-green-600">Published</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Visibility</Label>
                      <span className="text-sm">Public</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Last Modified</Label>
                      <p className="text-sm text-muted-foreground">
                        15/01/2024, 18:30:00
                      </p>
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button className="bg-[#123B79] hover:bg-[#425DA0] flex-1">
                        <Save className="h-4 w-4 mr-2" />
                        Update
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Enrolled Students</Label>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Average Rating</Label>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Total Reviews</Label>
                      <span className="font-semibold">324</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Completion Rate</Label>
                      <span className="font-semibold">87%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="relative h-40 w-full overflow-hidden rounded-md border">
                        {featuredImage ? (
                          <Image
                            src={featuredImage}
                            alt="Course thumbnail"
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.jpg";
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-muted">
                            <ImageIcon className="h-10 w-10 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Set Featured Image
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Course Content Tab */}
          <TabsContent value="course-content" className="mt-6">
            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="modules">Modules & Lessons</TabsTrigger>
                <TabsTrigger value="resources">Course Resources</TabsTrigger>
                <TabsTrigger value="assignments">
                  Assignments & Quizzes
                </TabsTrigger>
                <TabsTrigger value="content-settings">
                  Content Settings
                </TabsTrigger>
              </TabsList>

              {/* Modules & Lessons */}
              <TabsContent value="modules" className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">
                      Course Structure
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Manage your course modules and lessons
                    </p>
                  </div>
                  <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Module
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Modules ({courseData.modules.length})
                  </div>

                  {courseData.modules.map((module, index) => (
                    <Card
                      key={module.id}
                      className="border-l-4 border-l-blue-600"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-medium">{module.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {module.lessons.length} lessons •{" "}
                                {module.duration}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Published</Badge>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-2 bg-gray-50 rounded"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-200 rounded text-xs flex items-center justify-center">
                                  {lessonIndex + 1}
                                </div>
                                <span className="text-sm">{lesson.title}</span>
                                <Badge variant="outline" className="text-xs">
                                  {lesson.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {lesson.duration}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {courseData.modules.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600 mb-2">
                        No modules created yet
                      </p>
                      <p className="text-sm text-gray-500">
                        Add your first module to get started
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Course Resources */}
              <TabsContent value="resources" className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">
                      Course Resources
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Manage downloadable resources, templates, and
                      supplementary materials
                    </p>
                  </div>
                  <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Resource
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Sample resources */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">
                            Course Handbook.pdf
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            2.4 MB • PDF
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Trash className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">
                            Investment Calculator.xlsx
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            156 KB • Excel
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Trash className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">
                            Market Charts.png
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            892 KB • Image
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Trash className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Assignments & Quizzes */}
              <TabsContent value="assignments" className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">
                      Assignments & Quizzes
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Create and manage assignments, quizzes, and assessments
                    </p>
                  </div>
                  <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Assignment
                  </Button>
                </div>

                <div className="space-y-3">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Module 1 Quiz</h4>
                            <p className="text-sm text-muted-foreground">
                              5 questions • 10 minutes
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-600">Published</Badge>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                            <FileText className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Property Analysis Assignment
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Written assignment • Due in 1 week
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Draft</Badge>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Content Settings */}
              <TabsContent value="content-settings" className="space-y-6 mt-6">
                <div>
                  <Label className="text-base font-semibold">
                    Content Settings
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Configure how content is delivered and accessed
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="drip-content">
                          Enable drip content (release lessons over time)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Control when students can access lessons
                        </p>
                      </div>
                      <Switch id="drip-content" checked={false} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sequential">
                          Require sequential lesson completion
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Students must complete lessons in order
                        </p>
                      </div>
                      <Switch id="sequential" checked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="downloads">
                          Allow students to download resources
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Enable resource downloads for students
                        </p>
                      </div>
                      <Switch id="downloads" checked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="video-downloads">
                          Allow video downloads
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Let students download video content
                        </p>
                      </div>
                      <Switch id="video-downloads" checked={false} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="playback-controls">
                          Enable video playback speed controls
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Allow students to adjust video speed
                        </p>
                      </div>
                      <Switch id="playback-controls" checked={true} />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Content Protection
                    </Label>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="watermark">
                          Add watermark to videos
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Protect video content with watermarks
                        </p>
                      </div>
                      <Switch id="watermark" checked={false} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="right-click">
                          Disable right-click on content
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Prevent right-click context menu
                        </p>
                      </div>
                      <Switch id="right-click" checked={false} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="screenshot">
                          Enable screenshot protection
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Attempt to prevent screenshots
                        </p>
                      </div>
                      <Switch id="screenshot" checked={false} />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Instructors Tab */}
          <TabsContent value="instructors" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Course Instructors
                  <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Instructor
                  </Button>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Manage the instructors for this course
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {courseData.instructors.map((instructor, index) => (
                  <Card key={instructor.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                            <Image
                              src={
                                instructor.avatar || "/profile-placeholder.png"
                              }
                              alt={instructor.name}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/profile-placeholder.png";
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{instructor.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {instructor.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Pricing</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Set the price and payment options for your course
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-price">Current Price ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="current-price"
                        type="number"
                        value="297"
                        className="pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="original-price">Original Price ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="original-price"
                        type="number"
                        value="497"
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="discount-pricing" defaultChecked />

                    <Label htmlFor="discount-pricing">
                      Show discount pricing
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When enabled, both original and current prices will be
                    displayed with discount percentage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Reviews</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Manage student reviews and ratings
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Review Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <Label className="text-sm text-muted-foreground">
                      Average Rating
                    </Label>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">4.8</span>
                      <span className="text-sm text-muted-foreground">
                        (324 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <Label className="text-sm text-muted-foreground">
                      Total Reviews
                    </Label>
                    <div className="text-2xl font-bold mt-1">324</div>
                  </div>
                  <div className="text-center">
                    <Label className="text-sm text-muted-foreground">
                      Enrolled Students
                    </Label>
                    <div className="text-2xl font-bold mt-1">1247</div>
                  </div>
                </div>

                <Separator />

                {/* Recent Reviews */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    Recent Reviews
                  </Label>

                  {courseData.reviews.map((review, index) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                              <Image
                                src={
                                  review.avatar || "/profile-placeholder.png"
                                }
                                alt={review.author}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/profile-placeholder.png";
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">{review.author}</h4>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Reply
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          {review.comment}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {review.date}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Settings</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Configure additional settings for your course
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="allow-comments">
                          Allow student comments
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Enable students to leave comments on lessons
                        </p>
                      </div>
                      <Switch id="allow-comments" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="allow-downloads">
                          Allow resource downloads
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Let students download course materials
                        </p>
                      </div>
                      <Switch id="allow-downloads" defaultChecked={false} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="certificate">
                          Issue completion certificate
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Award certificate when students complete the course
                        </p>
                      </div>
                      <Switch id="certificate" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-enroll">
                          Auto-enroll in related courses
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically enroll students in suggested courses
                        </p>
                      </div>
                      <Switch id="auto-enroll" defaultChecked={false} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Publication Status</Label>
                    <Select defaultValue="published">
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Last Modified</Label>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">15/01/2024, 18:30:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Product Data Tab - The original WooCommerce-style interface */}
          <TabsContent value="product-data" className="mt-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Main Content Area */}
              <div className="col-span-8">
                {/* Product Name */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="title"
                          className="text-base font-semibold"
                        >
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
                      <div>
                        <Label
                          htmlFor="slug"
                          className="text-sm font-medium text-gray-600"
                        >
                          Slug
                        </Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) =>
                            setFormData({ ...formData, slug: e.target.value })
                          }
                          className="font-mono text-sm"
                        />

                        <p className="text-xs text-gray-500 mt-1">
                          Permalink: /courses/{formData.slug}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Long Description */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Product Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Describe your product in detail..."
                      className="min-h-[200px] resize-none"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                  </CardContent>
                </Card>

                {/* Product Data Section */}
                <Card className="mb-6">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle>Product Data</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="product-type" className="text-sm">
                            Product type:
                          </Label>
                          <Select
                            value={productType}
                            onValueChange={setProductType}
                          >
                            <SelectTrigger
                              id="product-type"
                              className="w-[180px]"
                            >
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="simple">
                                Simple Product
                              </SelectItem>
                              <SelectItem value="course">
                                Course Product
                              </SelectItem>
                              <SelectItem value="book">
                                Physical Book
                              </SelectItem>
                              <SelectItem value="event">
                                Event/Workshop
                              </SelectItem>
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
                          <TabsList className="grid w-full grid-rows-6 h-auto bg-gray-100">
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
                            {productType === "course" && (
                              <TabsTrigger
                                value="course-content"
                                className="justify-start text-left"
                              >
                                Course Content
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
                        <div className="col-span-9">
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
                                <Label htmlFor="sale-price">
                                  Sale price ($)
                                </Label>
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
                                  <SelectItem value="taxable">
                                    Taxable
                                  </SelectItem>
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
                                  setFormData({
                                    ...formData,
                                    sku: e.target.value,
                                  })
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
                                      <SelectItem value="no">
                                        Do not allow
                                      </SelectItem>
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

                          {/* Course Details Tab */}
                          {productType === "course" && (
                            <TabsContent
                              value="course-details"
                              className="space-y-6"
                            >
                              {/* Basic Course Info */}
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="course-duration">
                                    Course Duration
                                  </Label>
                                  <div className="relative">
                                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
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
                                      className="pl-8"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Label>Enrolled Students</Label>
                                  <div className="relative">
                                    <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      value={formData.enrolledStudents.toString()}
                                      disabled
                                      className="bg-gray-100 pl-8"
                                    />
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1">
                                    This field is automatically updated
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Average Rating</Label>
                                  <div className="flex items-center gap-2">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-2xl font-bold">
                                      {formData.rating}
                                    </span>
                                    <span className="text-muted-foreground">
                                      ({formData.totalReviews} reviews)
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <Label>Featured Course</Label>
                                  <div className="flex items-center space-x-2 mt-2">
                                    <Switch
                                      id="featured"
                                      checked={formData.featured}
                                      onCheckedChange={(checked) =>
                                        setFormData({
                                          ...formData,
                                          featured: checked,
                                        })
                                      }
                                    />

                                    <Label htmlFor="featured">
                                      Feature this course on the homepage
                                    </Label>
                                  </div>
                                </div>
                              </div>

                              <Separator />

                              {/* Course Highlights */}
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-base font-semibold">
                                    Course Highlights
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Key selling points that will appear on the
                                    course landing page
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  {courseData.highlights.map(
                                    (highlight, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-2"
                                      >
                                        <Input
                                          placeholder={`Highlight ${index + 1}`}
                                          value={highlight}
                                          onChange={(e) =>
                                            updateItemInArray(
                                              "highlights",
                                              index,
                                              e.target.value,
                                            )
                                          }
                                        />

                                        <Button
                                          type="button"
                                          variant="outline"
                                          size="icon"
                                          onClick={() =>
                                            removeItemFromArray(
                                              "highlights",
                                              index,
                                            )
                                          }
                                        >
                                          <Trash className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ),
                                  )}
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() =>
                                      addItemToArray(
                                        "highlights",
                                        "New highlight",
                                      )
                                    }
                                    className="w-full"
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Highlight
                                  </Button>
                                </div>
                              </div>

                              <Separator />

                              {/* Learning Outcomes */}
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-base font-semibold">
                                    Learning Outcomes
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    What will students learn in this course?
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  {courseData.learningOutcomes.map(
                                    (outcome, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-2"
                                      >
                                        <Input
                                          placeholder={`Learning outcome ${index + 1}`}
                                          value={outcome}
                                          onChange={(e) =>
                                            updateItemInArray(
                                              "learningOutcomes",
                                              index,
                                              e.target.value,
                                            )
                                          }
                                        />

                                        <Button
                                          type="button"
                                          variant="outline"
                                          size="icon"
                                          onClick={() =>
                                            removeItemFromArray(
                                              "learningOutcomes",
                                              index,
                                            )
                                          }
                                        >
                                          <Trash className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ),
                                  )}
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() =>
                                      addItemToArray(
                                        "learningOutcomes",
                                        "New learning outcome",
                                      )
                                    }
                                    className="w-full"
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Learning Outcome
                                  </Button>
                                </div>
                              </div>

                              <Separator />

                              {/* Target Audience */}
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-base font-semibold">
                                    Target Audience
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Who is this course designed for?
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  {courseData.targetAudience.map(
                                    (audience, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-2"
                                      >
                                        <Input
                                          placeholder={`Target audience ${index + 1}`}
                                          value={audience}
                                          onChange={(e) =>
                                            updateItemInArray(
                                              "targetAudience",
                                              index,
                                              e.target.value,
                                            )
                                          }
                                        />

                                        <Button
                                          type="button"
                                          variant="outline"
                                          size="icon"
                                          onClick={() =>
                                            removeItemFromArray(
                                              "targetAudience",
                                              index,
                                            )
                                          }
                                        >
                                          <Trash className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ),
                                  )}
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() =>
                                      addItemToArray(
                                        "targetAudience",
                                        "New target audience",
                                      )
                                    }
                                    className="w-full"
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Target Audience
                                  </Button>
                                </div>
                              </div>

                              <Separator />

                              {/* Instructors Management */}
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <Label className="text-base font-semibold">
                                      Course Instructors
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                      Manage the instructors for this course
                                    </p>
                                  </div>
                                  <Button variant="outline">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Instructor
                                  </Button>
                                </div>
                                <div className="space-y-3">
                                  {courseData.instructors.map(
                                    (instructor, index) => (
                                      <div
                                        key={instructor.id}
                                        className="flex items-center gap-4 rounded-md border p-3"
                                      >
                                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                          <Image
                                            src={instructor.avatar}
                                            alt={instructor.name}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                              const target =
                                                e.target as HTMLImageElement;
                                              target.src =
                                                "/placeholder-user.jpg";
                                            }}
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="font-medium">
                                            {instructor.name}
                                          </h4>
                                          <p className="text-sm text-muted-foreground">
                                            {instructor.title}
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Button variant="outline" size="sm">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit
                                          </Button>
                                          <Button variant="outline" size="icon">
                                            <Trash className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>

                              <Separator />

                              {/* Course Structure Overview */}
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <Label className="text-base font-semibold">
                                      Course Structure Overview
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                      Quick overview of your course modules. Use
                                      "Manage Content" for detailed editing.
                                    </p>
                                  </div>
                                  <Button variant="outline" asChild>
                                    <Link
                                      href={`/admin/courses/${productSlug}/content`}
                                    >
                                      <Settings className="h-4 w-4 mr-2" />
                                      Manage Content
                                    </Link>
                                  </Button>
                                </div>
                                {courseData.modules.length > 0 ? (
                                  <div className="space-y-3">
                                    {courseData.modules.map((module, index) => (
                                      <div
                                        key={module.id}
                                        className="flex items-center justify-between rounded-md border p-3"
                                      >
                                        <div>
                                          <p className="font-medium">
                                            {index + 1}. {module.title}
                                          </p>
                                          <p className="text-sm text-muted-foreground">
                                            {module.lessons.length} lessons •{" "}
                                            {module.duration}
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Button variant="outline" size="sm">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit
                                          </Button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="text-center py-8 text-muted-foreground">
                                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>No modules created yet</p>
                                    <p className="text-sm">
                                      Use "Manage Content" to add course modules
                                      and lessons
                                    </p>
                                  </div>
                                )}
                              </div>

                              <Separator />

                              {/* Course Settings */}
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-base font-semibold">
                                    Course Settings
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Configure additional settings for your
                                    course
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      id="allow-comments"
                                      checked={formData.allowComments}
                                      onCheckedChange={(checked) =>
                                        setFormData({
                                          ...formData,
                                          allowComments: checked,
                                        })
                                      }
                                    />

                                    <Label htmlFor="allow-comments">
                                      Allow student comments
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      id="allow-downloads"
                                      checked={formData.allowDownloads}
                                      onCheckedChange={(checked) =>
                                        setFormData({
                                          ...formData,
                                          allowDownloads: checked,
                                        })
                                      }
                                    />

                                    <Label htmlFor="allow-downloads">
                                      Allow resource downloads
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      id="certificate"
                                      checked={formData.certificate}
                                      onCheckedChange={(checked) =>
                                        setFormData({
                                          ...formData,
                                          certificate: checked,
                                        })
                                      }
                                    />

                                    <Label htmlFor="certificate">
                                      Issue completion certificate
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      id="auto-enroll"
                                      checked={formData.autoEnroll}
                                      onCheckedChange={(checked) =>
                                        setFormData({
                                          ...formData,
                                          autoEnroll: checked,
                                        })
                                      }
                                    />

                                    <Label htmlFor="auto-enroll">
                                      Auto-enroll in related courses
                                    </Label>
                                  </div>
                                </div>
                              </div>

                              <Separator />

                              {/* Recent Reviews */}
                              <div className="space-y-4">
                                <div>
                                  <Label className="text-base font-semibold">
                                    Recent Reviews
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Latest student feedback and ratings
                                  </p>
                                </div>
                                <div className="space-y-3">
                                  {courseData.reviews.map((review) => (
                                    <div
                                      key={review.id}
                                      className="rounded-md border p-4"
                                    >
                                      <div className="flex items-center gap-3 mb-3">
                                        <Image
                                          src={review.avatar}
                                          alt={review.student}
                                          width={40}
                                          height={40}
                                          className="rounded-full"
                                          onError={(e) => {
                                            const target =
                                              e.target as HTMLImageElement;
                                            target.src =
                                              "/placeholder-user.jpg";
                                          }}
                                        />

                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <span className="font-medium">
                                              {review.student}
                                            </span>
                                            <div className="flex items-center">
                                              {Array.from({
                                                length: review.rating,
                                              }).map((_, i) => (
                                                <Star
                                                  key={i}
                                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                />
                                              ))}
                                            </div>
                                          </div>
                                          <p className="text-sm text-muted-foreground">
                                            {review.date}
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Button variant="outline" size="sm">
                                            Reply
                                          </Button>
                                          <Button variant="outline" size="icon">
                                            <Trash className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                      <p className="text-sm">
                                        {review.comment}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                          )}

                          {/* Course Content Management Tab */}
                          {productType === "course" && (
                            <TabsContent
                              value="course-content"
                              className="space-y-6"
                            >
                              {/* Course Content Subtabs */}
                              <Tabs defaultValue="modules" className="w-full">
                                <TabsList className="grid w-full grid-cols-4">
                                  <TabsTrigger value="modules">
                                    Modules & Lessons
                                  </TabsTrigger>
                                  <TabsTrigger value="resources">
                                    Course Resources
                                  </TabsTrigger>
                                  <TabsTrigger value="assignments">
                                    Assignments & Quizzes
                                  </TabsTrigger>
                                  <TabsTrigger value="content-settings">
                                    Content Settings
                                  </TabsTrigger>
                                </TabsList>

                                {/* Modules & Lessons */}
                                <TabsContent
                                  value="modules"
                                  className="space-y-4 mt-6"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <Label className="text-base font-semibold">
                                        Course Structure
                                      </Label>
                                      <p className="text-sm text-muted-foreground">
                                        Manage your course modules and lessons
                                      </p>
                                    </div>
                                    <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                                      <Plus className="h-4 w-4 mr-2" />
                                      Add Module
                                    </Button>
                                  </div>

                                  <div className="space-y-4">
                                    <div className="text-sm text-muted-foreground">
                                      Modules ({courseData.modules.length})
                                    </div>

                                    {courseData.modules.map((module, index) => (
                                      <Card
                                        key={module.id}
                                        className="border-l-4 border-l-blue-600"
                                      >
                                        <CardContent className="p-4">
                                          <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                                                {index + 1}
                                              </div>
                                              <div>
                                                <h4 className="font-medium">
                                                  {module.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                  {module.lessons.length}{" "}
                                                  lessons • {module.duration}
                                                </p>
                                              </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <Badge variant="secondary">
                                                Published
                                              </Badge>
                                              <Button
                                                variant="outline"
                                                size="sm"
                                              >
                                                <Edit className="h-4 w-4 mr-2" />
                                                Edit
                                              </Button>
                                              <Button
                                                variant="outline"
                                                size="icon"
                                              >
                                                <Trash className="h-4 w-4" />
                                              </Button>
                                            </div>
                                          </div>

                                          <div className="space-y-2">
                                            {module.lessons.map(
                                              (lesson, lessonIndex) => (
                                                <div
                                                  key={lesson.id}
                                                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                                                >
                                                  <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-gray-200 rounded text-xs flex items-center justify-center">
                                                      {lessonIndex + 1}
                                                    </div>
                                                    <span className="text-sm">
                                                      {lesson.title}
                                                    </span>
                                                    <Badge
                                                      variant="outline"
                                                      className="text-xs"
                                                    >
                                                      {lesson.type}
                                                    </Badge>
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                    <span className="text-xs text-muted-foreground">
                                                      {lesson.duration}
                                                    </span>
                                                    <Button
                                                      variant="ghost"
                                                      size="icon"
                                                      className="h-6 w-6"
                                                    >
                                                      <Edit className="h-3 w-3" />
                                                    </Button>
                                                  </div>
                                                </div>
                                              ),
                                            )}
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}

                                    {courseData.modules.length === 0 && (
                                      <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                                        <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                                        <p className="text-gray-600 mb-2">
                                          No modules created yet
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          Add your first module to get started
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </TabsContent>

                                {/* Course Resources */}
                                <TabsContent
                                  value="resources"
                                  className="space-y-4 mt-6"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <Label className="text-base font-semibold">
                                        Course Resources
                                      </Label>
                                      <p className="text-sm text-muted-foreground">
                                        Manage downloadable resources,
                                        templates, and supplementary materials
                                      </p>
                                    </div>
                                    <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                                      <Upload className="h-4 w-4 mr-2" />
                                      Upload Resource
                                    </Button>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Sample resources */}
                                    <Card>
                                      <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                          <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                                            <FileText className="h-5 w-5 text-red-600" />
                                          </div>
                                          <div className="flex-1">
                                            <h4 className="font-medium text-sm">
                                              Course Handbook.pdf
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                              2.4 MB • PDF
                                            </p>
                                          </div>
                                          <div className="flex items-center gap-1">
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-6 w-6"
                                            >
                                              <Download className="h-3 w-3" />
                                            </Button>
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-6 w-6"
                                            >
                                              <Trash className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                          <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                                            <FileText className="h-5 w-5 text-green-600" />
                                          </div>
                                          <div className="flex-1">
                                            <h4 className="font-medium text-sm">
                                              Investment Calculator.xlsx
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                              156 KB • Excel
                                            </p>
                                          </div>
                                          <div className="flex items-center gap-1">
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-6 w-6"
                                            >
                                              <Download className="h-3 w-3" />
                                            </Button>
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-6 w-6"
                                            >
                                              <Trash className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                          <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                                            <ImageIcon className="h-5 w-5 text-purple-600" />
                                          </div>
                                          <div className="flex-1">
                                            <h4 className="font-medium text-sm">
                                              Market Charts.png
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                              892 KB • Image
                                            </p>
                                          </div>
                                          <div className="flex items-center gap-1">
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-6 w-6"
                                            >
                                              <Download className="h-3 w-3" />
                                            </Button>
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-6 w-6"
                                            >
                                              <Trash className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </TabsContent>

                                {/* Assignments & Quizzes */}
                                <TabsContent
                                  value="assignments"
                                  className="space-y-4 mt-6"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <Label className="text-base font-semibold">
                                        Assignments & Quizzes
                                      </Label>
                                      <p className="text-sm text-muted-foreground">
                                        Create and manage assignments, quizzes,
                                        and assessments
                                      </p>
                                    </div>
                                    <Button className="bg-[#123B79] hover:bg-[#425DA0]">
                                      <Plus className="h-4 w-4 mr-2" />
                                      Create Assignment
                                    </Button>
                                  </div>

                                  <div className="space-y-3">
                                    <Card>
                                      <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                                              <FileText className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                              <h4 className="font-medium">
                                                Module 1 Quiz
                                              </h4>
                                              <p className="text-sm text-muted-foreground">
                                                5 questions • 10 minutes
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <Badge className="bg-green-600">
                                              Published
                                            </Badge>
                                            <Button variant="outline" size="sm">
                                              <Edit className="h-4 w-4 mr-2" />
                                              Edit
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                                              <FileText className="h-5 w-5 text-orange-600" />
                                            </div>
                                            <div>
                                              <h4 className="font-medium">
                                                Property Analysis Assignment
                                              </h4>
                                              <p className="text-sm text-muted-foreground">
                                                Written assignment • Due in 1
                                                week
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <Badge variant="secondary">
                                              Draft
                                            </Badge>
                                            <Button variant="outline" size="sm">
                                              <Edit className="h-4 w-4 mr-2" />
                                              Edit
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </TabsContent>

                                {/* Content Settings */}
                                <TabsContent
                                  value="content-settings"
                                  className="space-y-6 mt-6"
                                >
                                  <div>
                                    <Label className="text-base font-semibold">
                                      Content Settings
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                      Configure how content is delivered and
                                      accessed
                                    </p>
                                  </div>

                                  <div className="space-y-6">
                                    <div className="space-y-4">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="drip-content">
                                            Enable drip content (release lessons
                                            over time)
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Control when students can access
                                            lessons
                                          </p>
                                        </div>
                                        <Switch
                                          id="drip-content"
                                          checked={false}
                                        />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="sequential">
                                            Require sequential lesson completion
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Students must complete lessons in
                                            order
                                          </p>
                                        </div>
                                        <Switch
                                          id="sequential"
                                          checked={true}
                                        />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="downloads">
                                            Allow students to download resources
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Enable resource downloads for
                                            students
                                          </p>
                                        </div>
                                        <Switch id="downloads" checked={true} />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="video-downloads">
                                            Allow video downloads
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Let students download video content
                                          </p>
                                        </div>
                                        <Switch
                                          id="video-downloads"
                                          checked={false}
                                        />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="playback-controls">
                                            Enable video playback speed controls
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Allow students to adjust video speed
                                          </p>
                                        </div>
                                        <Switch
                                          id="playback-controls"
                                          checked={true}
                                        />
                                      </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                      <Label className="text-base font-semibold">
                                        Content Protection
                                      </Label>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="watermark">
                                            Add watermark to videos
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Protect video content with
                                            watermarks
                                          </p>
                                        </div>
                                        <Switch
                                          id="watermark"
                                          checked={false}
                                        />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="right-click">
                                            Disable right-click on content
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Prevent right-click context menu
                                          </p>
                                        </div>
                                        <Switch
                                          id="right-click"
                                          checked={false}
                                        />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div>
                                          <Label htmlFor="screenshot">
                                            Enable screenshot protection
                                          </Label>
                                          <p className="text-sm text-muted-foreground">
                                            Attempt to prevent screenshots
                                          </p>
                                        </div>
                                        <Switch
                                          id="screenshot"
                                          checked={false}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </TabsContent>
                              </Tabs>
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
                                Upsells are products which you recommend instead
                                of the currently viewed product.
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
                                Cross-sells are products which you promote in
                                the cart, based on the current product.
                              </p>
                            </div>
                          </TabsContent>
                        </div>
                      </div>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Product Short Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>Product Short Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Enter a short description for your product..."
                      className="min-h-[120px] resize-none"
                      value={formData.shortDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          shortDescription: e.target.value,
                        })
                      }
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Right Sidebar */}
              <div className="col-span-4 space-y-6">
                {/* Publish Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Publish</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Status:</span>
                      <Select defaultValue="published">
                        <SelectTrigger className="w-24 h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
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
                      Update Product
                    </Button>
                  </CardContent>
                </Card>

                {/* Categories Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() =>
                              handleCategoryToggle(category)
                            }
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
                    <div className="mt-3 pt-3 border-t">
                      <Button variant="outline" size="sm">
                        + Add new category
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Product Image Card */}
                <Card>
                  <CardHeader>
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
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.jpg";
                          }}
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
                <Card>
                  <CardHeader>
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
          </TabsContent>
        </Tabs>
      ) : (
        /* Non-course product editing - original structure */
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-8">
            <p>Non-course product editing interface would go here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProductPage;
