"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Users,
  Shield,
  Eye,
  Edit,
  UserCheck,
  BookOpen,
  ShoppingCart,
  Settings,
} from "lucide-react";

interface AdminRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
  color: string;
}

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  lastLogin: string;
  status: "active" | "inactive";
}

const adminRoles: AdminRole[] = [
  {
    id: "super_admin",
    name: "Super Admin",
    description:
      "Has unrestricted access to all administrative features. Can manage other admin accounts.",
    permissions: [
      "All permissions from other roles",
      "Create, edit and delete other admin accounts",
      "Access system-wide settings and logs",
      "Manage security policies",
      "Configure API keys and integrations",
    ],

    userCount: 1,
    color: "bg-red-100 text-red-800 border-red-200",
  },
  {
    id: "content_manager",
    name: "Content Manager",
    description: "Responsible for managing the platform's product catalog.",
    permissions: [
      "Create, edit, and delete products (courses and books)",
      "Upload and manage product images, videos, articles",
      "Organise products into categories",
      "Manage inventory levels for physical books",
      "Set product status (Draft/Published)",
    ],

    userCount: 2,
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    id: "order_manager",
    name: "Order Manager",
    description: "Responsible for processing and tracking customer orders.",
    permissions: [
      "View the complete list of customer orders",
      "Filter and search for specific orders",
      "Update order statuses (Pending, Shipped, Delivered)",
      "View customer details associated with an order",
      "Add tracking numbers for shipped orders",
    ],

    userCount: 1,
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    id: "user_manager",
    name: "User Manager",
    description: "Responsible for managing all non-admin user accounts.",
    permissions: [
      "Create, edit, and delete customer accounts",
      "Search for users by name or email",
      "Activate/Deactivate user accounts",
      "Assist with user password resets",
      "View user activity and purchase history",
    ],

    userCount: 1,
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
];

const adminUsers: AdminUser[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@assembly.com",
    role: "super_admin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "2 hours ago",
    status: "active",
  },
  {
    id: "2",
    name: "Content Manager",
    email: "content@assembly.com",
    role: "content_manager",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "1 day ago",
    status: "active",
  },
  {
    id: "3",
    name: "Order Manager",
    email: "orders@assembly.com",
    role: "order_manager",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "3 hours ago",
    status: "active",
  },
  {
    id: "4",
    name: "User Manager",
    email: "users@assembly.com",
    role: "user_manager",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "1 week ago",
    status: "inactive",
  },
];

export function AccessControl() {
  const [selectedRole, setSelectedRole] = useState<AdminRole | null>(null);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);

  const handleViewRole = (role: AdminRole) => {
    setSelectedRole(role);
    setIsRoleDialogOpen(true);
  };

  const getRoleIcon = (roleId: string) => {
    switch (roleId) {
      case "super_admin":
        return Shield;
      case "content_manager":
        return BookOpen;
      case "order_manager":
        return ShoppingCart;
      case "user_manager":
        return Users;
      default:
        return UserCheck;
    }
  };

  const getRoleName = (roleId: string) => {
    const role = adminRoles.find((r) => r.id === roleId);
    return role?.name || roleId;
  };

  const getRoleColor = (roleId: string) => {
    const role = adminRoles.find((r) => r.id === roleId);
    return role?.color || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Access Control Management
          </CardTitle>
          <CardDescription>
            Manage admin roles, permissions, and user assignments
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Admin Roles Section */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Roles & Permissions</CardTitle>
          <CardDescription>
            Defined roles with their respective permissions as per functional
            requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {adminRoles.map((role) => {
              const RoleIcon = getRoleIcon(role.id);
              return (
                <div
                  key={role.id}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <RoleIcon className="h-6 w-6 text-[#123B79]" />
                      <div>
                        <h3 className="font-semibold">{role.name}</h3>
                        <p className="text-sm text-gray-600">
                          {role.description}
                        </p>
                      </div>
                    </div>
                    <Badge className={role.color}>
                      {role.userCount} user{role.userCount !== 1 ? "s" : ""}
                    </Badge>
                  </div>

                  <div className="space-y-1 mb-4">
                    <p className="text-sm font-medium text-gray-700">
                      Key Permissions:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {role.permissions.slice(0, 3).map((permission, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#123B79] mt-1">•</span>
                          <span>{permission}</span>
                        </li>
                      ))}
                      {role.permissions.length > 3 && (
                        <li className="text-[#123B79] text-xs">
                          +{role.permissions.length - 3} more permissions
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewRole(role)}
                    className="w-full"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View All Permissions
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Admin Users Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Admin User Assignments</CardTitle>
              <CardDescription>
                Current admin users and their role assignments
              </CardDescription>
            </div>
            <Button className="bg-[#123B79] hover:bg-[#425DA0]">
              <Edit className="mr-2 h-4 w-4" />
              Manage Assignments
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adminUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-[#123B79] text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">
                      Last login: {user.lastLogin}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge
                    variant={user.status === "active" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {user.status}
                  </Badge>
                  <Badge className={getRoleColor(user.role)}>
                    {getRoleName(user.role)}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Details Dialog */}
      <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedRole && (
                <>
                  {(() => {
                    const RoleIcon = getRoleIcon(selectedRole.id);
                    return <RoleIcon className="h-5 w-5" />;
                  })()}
                  {selectedRole.name} - Detailed Permissions
                </>
              )}
            </DialogTitle>
            <DialogDescription>{selectedRole?.description}</DialogDescription>
          </DialogHeader>

          {selectedRole && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">All Permissions:</h4>
                <ul className="space-y-2">
                  {selectedRole.permissions.map((permission, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-[#123B79] mt-1">•</span>
                      <span>{permission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>{selectedRole.userCount}</strong> admin user
                  {selectedRole.userCount !== 1 ? "s" : ""} currently assigned
                  to this role.
                </p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRoleDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
