# Admin API Documentation

## Overview
This document outlines the API endpoints required to support the admin functionality for the PLB (Property Learning Business) platform. The admin interface includes course management, user management, analytics, payments, orders, and various administrative features.

## Base URL
```
/api/admin
```

## Authentication
All admin endpoints require authentication with admin privileges. Include the admin authentication token in the request headers:
```
Authorization: Bearer <admin-token>
```

---

## 1. Dashboard Analytics

### GET `/api/admin/dashboard/stats`
Get overall dashboard statistics.

**Response:**
```json
{
  "totalUsers": 2853,
  "totalRevenue": 48294,
  "activeCourses": 142,
  "completionRate": 68.2,
  "growthRates": {
    "users": 12.5,
    "revenue": 8.2,
    "courses": 4.3,
    "completion": -2.1
  }
}
```

### GET `/api/admin/dashboard/revenue-chart`
Get revenue trend data for charts.

**Query Parameters:**
- `period` (string): "7d", "30d", "90d", "1y"

**Response:**
```json
{
  "data": [
    {
      "month": "Jan",
      "revenue": 15000,
      "courses": 120,
      "books": 45
    }
  ]
}
```

### GET `/api/admin/dashboard/recent-sales`
Get recent sales transactions.

**Query Parameters:**
- `limit` (number): Number of records to return (default: 10)

**Response:**
```json
{
  "sales": [
    {
      "id": "SALE-001",
      "customer": "John Smith",
      "product": "Making The Right Move",
      "amount": 149.99,
      "date": "2024-01-15T10:30:00Z",
      "status": "completed"
    }
  ]
}
```

### GET `/api/admin/dashboard/popular-courses`
Get top performing courses.

**Query Parameters:**
- `limit` (number): Number of courses to return (default: 5)
- `period` (string): Time period for ranking

**Response:**
```json
{
  "courses": [
    {
      "id": "course-1",
      "title": "Making The Right Move",
      "enrollments": 245,
      "revenue": 36675,
      "completionRate": 78
    }
  ]
}
```

---

## 2. Course/Product Management

### GET `/api/admin/products`
List all products with filtering and pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `search` (string): Search by title or SKU
- `category` (string): Filter by category
- `type` (string): Filter by product type (course, book, event, webinar)
- `stock` (string): Filter by stock status (in-stock, limited, out-of-stock)
- `status` (string): Filter by status (published, draft, archived)

**Response:**
```json
{
  "products": [
    {
      "id": 1,
      "slug": "making-the-right-move",
      "title": "Making The Right Move",
      "sku": "COURSE-001",
      "category": "HDB Investment",
      "instructor": "George Peng",
      "price": 149.99,
      "salePrice": 129.99,
      "status": "Published",
      "stock": "In stock",
      "stockQuantity": 116,
      "students": 245,
      "type": "Course",
      "image": "/making-the-right-move.jpg",
      "datePublished": "2023-05-15",
      "virtual": true,
      "downloadable": false
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 142,
    "totalPages": 8
  }
}
```

### GET `/api/admin/products/{slug}`
Get specific product details.

**Response:**
```json
{
  "id": 1,
  "slug": "making-the-right-move",
  "title": "Making The Right Move",
  "description": "A comprehensive course on HDB investment strategies...",
  "shortDescription": "Master HDB investment strategies with expert guidance...",
  "sku": "COURSE-001",
  "category": "HDB Investment",
  "instructor": "George Peng",
  "price": 149.99,
  "salePrice": 129.99,
  "status": "Published",
  "stock": "In stock",
  "stockQuantity": 116,
  "students": 245,
  "type": "Course",
  "image": "/making-the-right-move.jpg",
  "datePublished": "2023-05-15",
  "virtual": true,
  "downloadable": false,
  "highlights": ["Learn property investment fundamentals", "Understand market timing strategies"],
  "learningOutcomes": ["Analyze market trends and identify profitable investment opportunities"],
  "targetAudience": ["Aspiring property investors looking to start their journey"],
  "modules": [
    {
      "id": 1,
      "title": "Market Analysis & 2025 Outlook",
      "duration": "2h 15m",
      "lessons": [
        {
          "id": 1,
          "title": "Understanding Rate Cut Impacts",
          "type": "video",
          "duration": "25:30"
        }
      ]
    }
  ],
  "reviews": [
    {
      "id": 1,
      "author": "Michael Johnson",
      "rating": 5,
      "date": "2024-01-10",
      "comment": "Excellent course! The strategies are practical..."
    }
  ]
}
```

### GET `/api/admin/products/{slug}/stats`
Get product statistics.

**Response:**
```json
{
  "enrolledStudents": 1247,
  "averageRating": 4.8,
  "totalReviews": 324,
  "completionRate": 87,
  "revenue": 186753,
  "lastModified": "2024-01-15T18:30:00Z"
}
```

### POST `/api/admin/products`
Create new product.

**Request Body:**
```json
{
  "title": "New Course Title",
  "description": "Course description...",
  "shortDescription": "Short description...",
  "sku": "COURSE-002",
  "category": "HDB Investment",
  "instructor": "george-peng",
  "price": 199.99,
  "salePrice": null,
  "type": "course",
  "virtual": true,
  "downloadable": false,
  "trackStock": true,
  "stockQuantity": 100,
  "highlights": ["Highlight 1", "Highlight 2"],
  "learningOutcomes": ["Outcome 1", "Outcome 2"],
  "targetAudience": ["Audience 1", "Audience 2"],
  "categories": ["HDB Investment", "Market Analysis"]
}
```

### PUT `/api/admin/products/{slug}`
Update product details.

**Request Body:** Same as POST with updated fields.

### PUT `/api/admin/products/{slug}/status`
Update product status.

**Request Body:**
```json
{
  "status": "published" // "published", "draft", "archived"
}
```

### DELETE `/api/admin/products/{slug}`
Delete product.

### POST `/api/admin/products/bulk-actions`
Perform bulk operations on products.

**Request Body:**
```json
{
  "action": "archive", // "archive", "delete", "publish", "draft"
  "productIds": [1, 2, 3, 4]
}
```

---

## 3. Product Editor (Course Content Management)

### GET `/api/admin/products/{slug}/edit`
Get product data for editing interface.

**Response:** Same as GET `/api/admin/products/{slug}` with additional editing-specific data.

### GET `/api/admin/categories`
Get all available categories.

**Response:**
```json
{
  "categories": [
    "HDB Investment",
    "Market Analysis",
    "Investment Strategy",
    "Strategic Investment",
    "Property Finance",
    "Real Estate Trends"
  ]
}
```

### GET `/api/admin/instructors`
Get all available instructors.

**Response:**
```json
{
  "instructors": [
    {
      "id": "george-peng",
      "name": "George Peng",
      "title": "Property Investment Expert",
      "avatar": "/george-peng-headshot.png"
    }
  ]
}
```

### GET `/api/admin/products/{slug}/modules`
Get course modules and lessons.

**Response:**
```json
{
  "modules": [
    {
      "id": 1,
      "title": "Market Analysis & 2025 Outlook",
      "duration": "2h 15m",
      "lessons": [
        {
          "id": 1,
          "title": "Understanding Rate Cut Impacts",
          "type": "video",
          "duration": "25:30",
          "status": "published"
        }
      ]
    }
  ]
}
```

### POST `/api/admin/products/{slug}/modules`
Add new course module.

**Request Body:**
```json
{
  "title": "New Module Title",
  "description": "Module description...",
  "lessons": [
    {
      "title": "Lesson Title",
      "type": "video",
      "duration": "30:00"
    }
  ]
}
```

### PUT `/api/admin/products/{slug}/modules/{moduleId}`
Update course module.

### DELETE `/api/admin/products/{slug}/modules/{moduleId}`
Delete course module.

### POST `/api/admin/products/{slug}/resources`
Upload course resources.

**Request Body:** Multipart form data with file upload.

### DELETE `/api/admin/products/{slug}/resources/{resourceId}`
Delete course resource.

### POST `/api/admin/products/{slug}/highlights`
Add course highlight.

**Request Body:**
```json
{
  "highlight": "New course highlight"
}
```

### PUT `/api/admin/products/{slug}/highlights/{index}`
Update course highlight.

### DELETE `/api/admin/products/{slug}/highlights/{index}`
Delete course highlight.

### POST `/api/admin/products/{slug}/learning-outcomes`
Add learning outcome.

**Request Body:**
```json
{
  "outcome": "New learning outcome"
}
```

### PUT `/api/admin/products/{slug}/learning-outcomes/{index}`
Update learning outcome.

### DELETE `/api/admin/products/{slug}/learning-outcomes/{index}`
Delete learning outcome.

### POST `/api/admin/products/{slug}/target-audience`
Add target audience.

**Request Body:**
```json
{
  "audience": "New target audience"
}
```

### PUT `/api/admin/products/{slug}/target-audience/{index}`
Update target audience.

### DELETE `/api/admin/products/{slug}/target-audience/{index}`
Delete target audience.

### PUT `/api/admin/products/{slug}/pricing`
Update course pricing.

**Request Body:**
```json
{
  "price": 199.99,
  "salePrice": 149.99,
  "showDiscount": true
}
```

### PUT `/api/admin/products/{slug}/content-settings`
Update content delivery settings.

**Request Body:**
```json
{
  "dripContent": false,
  "sequential": true,
  "allowDownloads": true,
  "videoDownloads": false,
  "playbackControls": true,
  "watermark": false,
  "rightClick": false,
  "screenshot": false
}
```

### PUT `/api/admin/products/{slug}/instructors`
Update course instructors.

**Request Body:**
```json
{
  "instructors": ["george-peng", "adrian-lim"]
}
```

### PUT `/api/admin/products/{slug}/reviews`
Update review settings.

**Request Body:**
```json
{
  "allowComments": true,
  "moderateComments": false
}
```

---

## 4. User Management

### GET `/api/admin/users`
List all users with filtering and pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `search` (string): Search by name or email
- `role` (string): Filter by user role
- `status` (string): Filter by status (active, suspended)
- `dateFrom` (string): Filter by registration date from
- `dateTo` (string): Filter by registration date to

**Response:**
```json
{
  "users": [
    {
      "id": "user-1",
      "name": "John Smith",
      "email": "john@example.com",
      "role": "student",
      "status": "active",
      "registeredAt": "2024-01-15T10:30:00Z",
      "lastLogin": "2024-01-20T15:45:00Z",
      "enrolledCourses": 3,
      "completedCourses": 2
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 2853,
    "totalPages": 143
  }
}
```

### GET `/api/admin/users/{id}`
Get user details.

**Response:**
```json
{
  "id": "user-1",
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+65 9123 4567",
  "role": "student",
  "status": "active",
  "registeredAt": "2024-01-15T10:30:00Z",
  "lastLogin": "2024-01-20T15:45:00Z",
  "profile": {
    "avatar": "/profile-placeholder.png",
    "bio": "Property investor from Singapore",
    "location": "Singapore"
  }
}
```

### GET `/api/admin/users/{id}/enrollments`
Get user course enrollments.

**Response:**
```json
{
  "enrollments": [
    {
      "id": "enrollment-1",
      "courseId": "course-1",
      "courseTitle": "Making The Right Move",
      "enrolledAt": "2024-01-15T10:30:00Z",
      "status": "active",
      "progress": 75,
      "completedAt": null
    }
  ]
}
```

### GET `/api/admin/users/{id}/orders`
Get user order history.

**Response:**
```json
{
  "orders": [
    {
      "id": "order-1",
      "orderNumber": "ORD-2025-1001",
      "total": 149.99,
      "status": "completed",
      "createdAt": "2024-01-15T10:30:00Z",
      "items": [
        {
          "productId": "course-1",
          "productTitle": "Making The Right Move",
          "price": 149.99
        }
      ]
    }
  ]
}
```

### PUT `/api/admin/users/{id}`
Update user details.

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+65 9123 4567",
  "profile": {
    "bio": "Updated bio",
    "location": "Singapore"
  }
}
```

### PUT `/api/admin/users/{id}/status`
Update user status.

**Request Body:**
```json
{
  "status": "suspended" // "active", "suspended"
}
```

### PUT `/api/admin/users/{id}/role`
Update user role.

**Request Body:**
```json
{
  "role": "instructor" // "student", "instructor", "admin"
}
```

### DELETE `/api/admin/users/{id}`
Delete user.

---

## 5. Order Management

### GET `/api/admin/orders`
List all orders with filtering and pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `search` (string): Search by order number or customer name
- `status` (string): Filter by order status
- `dateFrom` (string): Filter by order date from
- `dateTo` (string): Filter by order date to

**Response:**
```json
{
  "orders": [
    {
      "id": "order-1",
      "orderNumber": "ORD-2025-1001",
      "customer": {
        "id": "user-1",
        "name": "John Smith",
        "email": "john@example.com"
      },
      "total": 149.99,
      "status": "completed",
      "createdAt": "2024-01-15T10:30:00Z",
      "paymentStatus": "paid",
      "items": [
        {
          "productId": "course-1",
          "productTitle": "Making The Right Move",
          "price": 149.99
        }
      ]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1250,
    "totalPages": 63
  }
}
```

### GET `/api/admin/orders/{id}`
Get order details.

**Response:**
```json
{
  "id": "order-1",
  "orderNumber": "ORD-2025-1001",
  "customer": {
    "id": "user-1",
    "name": "John Smith",
    "email": "john@example.com",
    "phone": "+65 9123 4567"
  },
  "billingAddress": {
    "street": "123 Main St",
    "city": "Singapore",
    "postalCode": "123456",
    "country": "Singapore"
  },
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Singapore",
    "postalCode": "123456",
    "country": "Singapore"
  },
  "items": [
    {
      "productId": "course-1",
      "productTitle": "Making The Right Move",
      "sku": "COURSE-001",
      "price": 149.99,
      "quantity": 1
    }
  ],
  "subtotal": 149.99,
  "tax": 0,
  "total": 149.99,
  "status": "completed",
  "paymentStatus": "paid",
  "paymentMethod": "credit_card",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:35:00Z"
}
```

### GET `/api/admin/orders/{id}/items`
Get order items.

**Response:**
```json
{
  "items": [
    {
      "productId": "course-1",
      "productTitle": "Making The Right Move",
      "sku": "COURSE-001",
      "price": 149.99,
      "quantity": 1,
      "total": 149.99
    }
  ]
}
```

### PUT `/api/admin/orders/{id}/status`
Update order status.

**Request Body:**
```json
{
  "status": "processing" // "pending", "processing", "completed", "cancelled"
}
```

### PUT `/api/admin/orders/{id}/shipping`
Update shipping information.

**Request Body:**
```json
{
  "trackingNumber": "TRK123456789",
  "shippingMethod": "express",
  "shippedAt": "2024-01-16T10:00:00Z"
}
```

---

## 6. Payment Management

### GET `/api/admin/payments`
List all payments with filtering and pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `search` (string): Search by payment ID or customer name
- `status` (string): Filter by payment status
- `method` (string): Filter by payment method
- `dateFrom` (string): Filter by payment date from
- `dateTo` (string): Filter by payment date to

**Response:**
```json
{
  "payments": [
    {
      "id": "PAY-2025-1001",
      "orderId": "ORD-2025-1001",
      "customer": "John Smith",
      "amount": 149.99,
      "method": "Credit Card",
      "cardInfo": "Visa ending in 4242",
      "status": "Completed",
      "date": "2025-06-01",
      "transactionId": "txn_123456789"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 850,
    "totalPages": 43
  }
}
```

### GET `/api/admin/payments/{id}`
Get payment details.

**Response:**
```json
{
  "id": "PAY-2025-1001",
  "orderId": "ORD-2025-1001",
  "customer": {
    "id": "user-1",
    "name": "John Smith",
    "email": "john@example.com"
  },
  "amount": 149.99,
  "currency": "SGD",
  "method": "Credit Card",
  "cardInfo": "Visa ending in 4242",
  "status": "Completed",
  "date": "2025-06-01",
  "transactionId": "txn_123456789",
  "gateway": "stripe",
  "gatewayResponse": {
    "chargeId": "ch_123456789",
    "balanceTransaction": "txn_123456789"
  }
}
```

### GET `/api/admin/payments/{id}/receipt`
Get payment receipt.

**Response:**
```json
{
  "receipt": {
    "receiptNumber": "RCP-2025-1001",
    "paymentId": "PAY-2025-1001",
    "orderId": "ORD-2025-1001",
    "customer": "John Smith",
    "amount": 149.99,
    "currency": "SGD",
    "date": "2025-06-01",
    "items": [
      {
        "productTitle": "Making The Right Move",
        "price": 149.99
      }
    ]
  }
}
```

### GET `/api/admin/payments/stats`
Get payment statistics.

**Response:**
```json
{
  "totalPayments": 850,
  "totalRevenue": 127500,
  "refundedAmount": 2500,
  "failedPayments": 15,
  "paymentMethods": {
    "credit_card": 650,
    "paypal": 150,
    "bank_transfer": 50
  }
}
```

### POST `/api/admin/payments/{id}/refund`
Process refund.

**Request Body:**
```json
{
  "amount": 149.99,
  "reason": "Customer request",
  "partial": false
}
```

### POST `/api/admin/payments/{id}/retry`
Retry failed payment.

**Request Body:**
```json
{
  "paymentMethod": "credit_card",
  "cardToken": "tok_123456789"
}
```

---

## 7. Analytics

### GET `/api/admin/analytics/overview`
Get overview analytics data.

**Query Parameters:**
- `period` (string): "7d", "30d", "90d", "1y"

**Response:**
```json
{
  "totalRevenue": 140000,
  "totalUsers": 2600,
  "courseEnrollments": 1378,
  "completionRate": 71,
  "growthRates": {
    "revenue": 12.5,
    "users": 18.2,
    "enrollments": 8.1,
    "completion": -2.1
  }
}
```

### GET `/api/admin/analytics/revenue`
Get revenue analytics data.

**Query Parameters:**
- `period` (string): "7d", "30d", "90d", "1y"

**Response:**
```json
{
  "revenueData": [
    {
      "month": "Jan",
      "revenue": 15000,
      "courses": 120,
      "books": 45
    }
  ],
  "categoryData": [
    {
      "name": "Finance",
      "value": 35,
      "color": "#123B79"
    }
  ]
}
```

### GET `/api/admin/analytics/users`
Get user growth and demographics data.

**Query Parameters:**
- `period` (string): "7d", "30d", "90d", "1y"

**Response:**
```json
{
  "userGrowthData": [
    {
      "month": "Jan",
      "users": 1200,
      "active": 980
    }
  ],
  "demographics": {
    "ageGroups": [
      {
        "range": "18-25",
        "percentage": 35
      }
    ],
    "locations": [
      {
        "country": "Singapore",
        "percentage": 85
      }
    ]
  }
}
```

### GET `/api/admin/analytics/courses`
Get course performance data.

**Query Parameters:**
- `period` (string): "7d", "30d", "90d", "1y"

**Response:**
```json
{
  "coursePerformanceData": [
    {
      "name": "Data Science Essentials",
      "enrollments": 245,
      "completion": 78,
      "revenue": 36675
    }
  ],
  "enrollmentTrends": [
    {
      "month": "Jan",
      "courses": 120
    }
  ]
}
```

### GET `/api/admin/analytics/traffic`
Get traffic source data.

**Query Parameters:**
- `period` (string): "7d", "30d", "90d", "1y"

**Response:**
```json
{
  "trafficSourceData": [
    {
      "source": "Direct",
      "visitors": 4500,
      "percentage": 35
    }
  ],
  "pageViews": [
    {
      "page": "Homepage",
      "views": 12450
    }
  ]
}
```

### GET `/api/admin/analytics/export`
Export analytics data.

**Query Parameters:**
- `type` (string): "revenue", "users", "courses", "traffic"
- `format` (string): "csv", "excel"
- `period` (string): "7d", "30d", "90d", "1y"

**Response:** File download (CSV or Excel format)

---

## 8. Settings

### GET `/api/admin/settings`
Get all admin settings.

**Response:**
```json
{
  "general": {
    "siteName": "PLB Learning Platform",
    "siteDescription": "Property Learning Business",
    "adminEmail": "admin@plb.com",
    "timezone": "Asia/Singapore"
  },
  "email": {
    "smtpHost": "smtp.gmail.com",
    "smtpPort": 587,
    "smtpUser": "noreply@plb.com",
    "smtpPassword": "encrypted_password"
  },
  "integrations": {
    "stripe": {
      "enabled": true,
      "publishableKey": "pk_test_...",
      "secretKey": "sk_test_..."
    },
    "paypal": {
      "enabled": true,
      "clientId": "client_id",
      "secret": "secret"
    }
  }
}
```

### GET `/api/admin/settings/email-templates`
Get email templates.

**Response:**
```json
{
  "templates": [
    {
      "id": "welcome",
      "name": "Welcome Email",
      "subject": "Welcome to PLB Learning Platform",
      "body": "Hello {{name}}, welcome to our platform...",
      "variables": ["name", "email"]
    }
  ]
}
```

### PUT `/api/admin/settings`
Update general settings.

**Request Body:**
```json
{
  "general": {
    "siteName": "PLB Learning Platform",
    "siteDescription": "Property Learning Business",
    "adminEmail": "admin@plb.com",
    "timezone": "Asia/Singapore"
  }
}
```

### PUT `/api/admin/settings/email-templates`
Update email templates.

**Request Body:**
```json
{
  "templates": [
    {
      "id": "welcome",
      "name": "Welcome Email",
      "subject": "Welcome to PLB Learning Platform",
      "body": "Hello {{name}}, welcome to our platform..."
    }
  ]
}
```

### PUT `/api/admin/settings/integrations`
Update integration settings.

**Request Body:**
```json
{
  "integrations": {
    "stripe": {
      "enabled": true,
      "publishableKey": "pk_test_...",
      "secretKey": "sk_test_..."
    }
  }
}
```

---

## 9. Security

### GET `/api/admin/security/audit-log`
Get security audit logs.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `action` (string): Filter by action type
- `user` (string): Filter by user
- `dateFrom` (string): Filter by date from
- `dateTo` (string): Filter by date to

**Response:**
```json
{
  "logs": [
    {
      "id": "log-1",
      "action": "login",
      "user": "admin@plb.com",
      "ip": "192.168.1.1",
      "userAgent": "Mozilla/5.0...",
      "timestamp": "2024-01-15T10:30:00Z",
      "status": "success"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1500,
    "totalPages": 75
  }
}
```

### GET `/api/admin/security/access-control`
Get access control settings.

**Response:**
```json
{
  "roles": [
    {
      "id": "admin",
      "name": "Administrator",
      "permissions": ["all"]
    },
    {
      "id": "instructor",
      "name": "Instructor",
      "permissions": ["manage_courses", "view_analytics"]
    }
  ],
  "settings": {
    "sessionTimeout": 3600,
    "maxLoginAttempts": 5,
    "lockoutDuration": 900,
    "requireTwoFactor": false
  }
}
```

### PUT `/api/admin/security/access-control`
Update access control settings.

**Request Body:**
```json
{
  "roles": [
    {
      "id": "admin",
      "name": "Administrator",
      "permissions": ["all"]
    }
  ],
  "settings": {
    "sessionTimeout": 3600,
    "maxLoginAttempts": 5,
    "lockoutDuration": 900,
    "requireTwoFactor": false
  }
}
```

---

## 10. Support

### GET `/api/admin/support/tickets`
List support tickets.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `status` (string): Filter by ticket status
- `priority` (string): Filter by priority
- `assignedTo` (string): Filter by assigned admin

**Response:**
```json
{
  "tickets": [
    {
      "id": "ticket-1",
      "subject": "Course access issue",
      "customer": {
        "id": "user-1",
        "name": "John Smith",
        "email": "john@example.com"
      },
      "status": "open",
      "priority": "medium",
      "assignedTo": "admin@plb.com",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T11:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

### GET `/api/admin/support/tickets/{id}`
Get ticket details.

**Response:**
```json
{
  "id": "ticket-1",
  "subject": "Course access issue",
  "description": "I cannot access the course I purchased...",
  "customer": {
    "id": "user-1",
    "name": "John Smith",
    "email": "john@example.com"
  },
  "status": "open",
  "priority": "medium",
  "assignedTo": "admin@plb.com",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T11:00:00Z",
  "messages": [
    {
      "id": "msg-1",
      "author": "John Smith",
      "content": "I cannot access the course I purchased...",
      "timestamp": "2024-01-15T10:30:00Z",
      "type": "customer"
    },
    {
      "id": "msg-2",
      "author": "Admin",
      "content": "I'll help you resolve this issue...",
      "timestamp": "2024-01-15T11:00:00Z",
      "type": "admin"
    }
  ]
}
```

### POST `/api/admin/support/tickets/{id}/reply`
Reply to support ticket.

**Request Body:**
```json
{
  "content": "I'll help you resolve this issue...",
  "internal": false
}
```

### PUT `/api/admin/support/tickets/{id}/status`
Update ticket status.

**Request Body:**
```json
{
  "status": "in_progress" // "open", "in_progress", "resolved", "closed"
}
```

---

## Common Features

### Authentication
All admin endpoints require authentication with admin privileges. Include the admin authentication token in the request headers:
```
Authorization: Bearer <admin-token>
```

### Pagination
Most list endpoints support pagination with the following query parameters:
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20, max: 100)

**Response format:**
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1000,
    "totalPages": 50
  }
}
```

### Filtering
Many endpoints support filtering with query parameters:
- `search` (string): Text search
- `status` (string): Filter by status
- `dateFrom` (string): Filter by date from (ISO 8601 format)
- `dateTo` (string): Filter by date to (ISO 8601 format)

### Export
Data export endpoints support:
- `format` (string): "csv" or "excel"
- `filters` (object): Apply the same filters as the list endpoint

### Error Handling
All endpoints return consistent error responses:

**4xx Errors:**
```json
{
  "error": "validation_error",
  "message": "Invalid input data",
  "details": {
    "field": "email",
    "message": "Invalid email format"
  }
}
```

**5xx Errors:**
```json
{
  "error": "internal_error",
  "message": "An internal error occurred",
  "requestId": "req_123456789"
}
```

### Rate Limiting
API endpoints are rate-limited to prevent abuse:
- 1000 requests per hour for authenticated admin users
- 100 requests per hour for unauthenticated requests

### WebSocket Support
Real-time updates are available via WebSocket connections:
- `ws://api.example.com/admin/ws`
- Requires authentication token
- Supports real-time dashboard updates, notifications, and live data

---

## Implementation Notes

1. **Database Schema**: Ensure proper indexing on frequently queried fields (user_id, product_id, status, created_at)
2. **Caching**: Implement Redis caching for frequently accessed data (dashboard stats, user sessions)
3. **File Uploads**: Use cloud storage (AWS S3, Google Cloud Storage) for course resources and images
4. **Security**: Implement proper input validation, SQL injection prevention, and XSS protection
5. **Monitoring**: Set up logging and monitoring for API performance and error tracking
6. **Backup**: Regular database backups and disaster recovery procedures
7. **Testing**: Comprehensive unit and integration tests for all endpoints
8. **Documentation**: Keep API documentation updated with any changes
9. **Versioning**: Use API versioning (e.g., `/api/v1/admin/`) for future compatibility
10. **Compliance**: Ensure GDPR compliance for user data handling

---

*This documentation covers the complete API requirements for the PLB admin platform. Regular updates should be made as new features are added or existing functionality is modified.* 