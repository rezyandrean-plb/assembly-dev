# Assembly Admin Dashboard Test Guide

## 🚀 Quick Start

### 1. Access the Test Login Page
Navigate to: `/admin/test-login`

### 2. Login Credentials
- **Email:** `admin@assembly.com`
- **Password:** `admin123`

### 3. Available Admin Pages

#### Core Admin Pages
- **Dashboard** (`/admin`) - Overview and analytics
- **Course Management** (`/admin/courses`) - Manage courses and content
- **User Management** (`/admin/users`) - Manage users and roles
- **Orders & Sales** (`/admin/orders`) - View orders and revenue
- **Payments** (`/admin/payments`) - Payment management
- **Analytics & Reports** (`/admin/analytics`) - Detailed analytics

#### Super Admin Only Pages
- **Settings** (`/admin/settings`) - Platform configuration (Super Admin only)

## 🔧 Settings Page Features

The Settings page includes the following sections:

### 1. General Settings
- Site name and contact information
- Logo upload
- Currency configuration
- Basic platform settings

### 2. Payment Gateways
- Configure payment providers
- API keys and webhook settings
- Payment method management

### 3. Shipping & Delivery
- Shipping methods configuration
- Delivery zones and costs
- Package handling settings

### 4. Email Templates
- Customize automated emails
- Template editor
- Email branding

### 5. Integrations & API Keys
- Third-party service configurations
- API key management
- Webhook endpoints

## 🛡️ Security Features

### Role-Based Access Control
- **Regular Admin:** Access to most admin features
- **Super Admin:** Full access including Settings page

### Session Management
- Admin sessions are stored in localStorage for testing
- Sessions expire after 24 hours
- Automatic logout on session expiration

## 🧪 Testing Scenarios

### 1. Basic Admin Access
1. Login with admin credentials
2. Navigate through different admin pages
3. Test responsive design on mobile/tablet

### 2. Settings Access Control
1. Login as Super Admin
2. Access Settings page
3. Test different settings sections
4. Verify save functionality

### 3. Session Management
1. Login and verify session persistence
2. Test logout functionality
3. Verify session expiration

### 4. Navigation
1. Test sidebar navigation
2. Verify active page highlighting
3. Test mobile menu toggle

## 📱 Responsive Design

The admin dashboard is fully responsive:
- **Desktop:** Full sidebar navigation
- **Tablet:** Collapsible sidebar
- **Mobile:** Hamburger menu with overlay

## 🎨 Design System

### Colors
- **Primary:** `#123B79` (Assembly Blue)
- **Secondary:** `#425DA0` (Hover Blue)
- **Background:** `#E8EFFF` (Light Blue)
- **Borders:** `#E5E7EB` (Light Gray)

### Components
- Consistent card layouts
- Light gray borders throughout
- Assembly brand colors for active states
- Clean, modern UI design

## 🔄 State Management

### Admin Session
- Stored in localStorage for testing
- Includes user info, role, and permissions
- Automatic session validation

### Settings State
- Form state management per section
- Validation and error handling
- Save/load functionality

## 🚨 Important Notes

1. **This is a test environment** - No real authentication or data persistence
2. **Use test credentials only** - `admin@assembly.com` / `admin123`
3. **Settings are not persisted** - Changes are simulated
4. **Session expires in 24 hours** - For testing purposes

## 🐛 Troubleshooting

### Common Issues
1. **Can't access Settings page** - Ensure you're logged in as Super Admin
2. **Session expired** - Re-login with test credentials
3. **Page not loading** - Check browser console for errors

### Development
- All admin pages use the `AdminLayout` component
- Settings components are in `/components/admin/settings/`
- Admin auth hook: `/hooks/use-admin-auth.ts`

## 📞 Support

For issues or questions about the admin dashboard:
1. Check browser console for errors
2. Verify you're using correct test credentials
3. Clear localStorage if session issues occur
4. Contact development team for technical support 