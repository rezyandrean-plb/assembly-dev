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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FileText,
  Search,
  Filter,
  Download,
  Calendar as CalendarIcon,
  User,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface AuditLogEntry {
  id: string;
  timestamp: string;
  adminUser: string;
  ipAddress: string;
  action: string;
  actionType:
    | "user_management"
    | "product_management"
    | "order_management"
    | "system_settings";
  targetObject: string;
  description: string;
  severity: "low" | "medium" | "high";
}

const mockAuditLogs: AuditLogEntry[] = [
  {
    id: "LOG-001",
    timestamp: "2024-01-15 14:30:25",
    adminUser: "admin@assembly.com",
    ipAddress: "192.168.1.100",
    action: "User Role Change",
    actionType: "user_management",
    targetObject: "User ID: 12345",
    description:
      "Changed user role for 'john.doe@email.com' from User to Content Manager",
    severity: "high",
  },
  {
    id: "LOG-002",
    timestamp: "2024-01-15 13:45:12",
    adminUser: "content@assembly.com",
    ipAddress: "192.168.1.101",
    action: "Product Creation",
    actionType: "product_management",
    targetObject: "Product ID: 67890",
    description: "Created new course 'Advanced Property Investment Strategies'",
    severity: "medium",
  },
  {
    id: "LOG-003",
    timestamp: "2024-01-15 12:20:08",
    adminUser: "admin@assembly.com",
    ipAddress: "192.168.1.100",
    action: "Order Status Update",
    actionType: "order_management",
    targetObject: "Order ID: ORD-2024-001",
    description:
      "Updated order status from 'Processing' to 'Shipped' with tracking number TRK123456",
    severity: "low",
  },
  {
    id: "LOG-004",
    timestamp: "2024-01-15 11:15:33",
    adminUser: "admin@assembly.com",
    ipAddress: "192.168.1.100",
    action: "User Account Deletion",
    actionType: "user_management",
    targetObject: "User ID: 54321",
    description:
      "Permanently deleted user account for 'inactive@example.com' after confirmation",
    severity: "high",
  },
  {
    id: "LOG-005",
    timestamp: "2024-01-15 10:30:45",
    adminUser: "admin@assembly.com",
    ipAddress: "192.168.1.100",
    action: "Security Policy Update",
    actionType: "system_settings",
    targetObject: "Password Policy",
    description:
      "Updated password complexity requirements - increased minimum length to 12 characters",
    severity: "medium",
  },
];

export function AuditLog() {
  const [logs] = useState<AuditLogEntry[]>(mockAuditLogs);
  const [filteredLogs, setFilteredLogs] =
    useState<AuditLogEntry[]>(mockAuditLogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState<string>("all");
  const [selectedActionType, setSelectedActionType] = useState<string>("all");
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const adminUsers = Array.from(new Set(logs.map((log) => log.adminUser)));
  const actionTypes = [
    { value: "user_management", label: "User Management" },
    { value: "product_management", label: "Product Management" },
    { value: "order_management", label: "Order Management" },
    { value: "system_settings", label: "System Settings" },
  ];

  const applyFilters = () => {
    let filtered = logs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (log) =>
          log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
          log.targetObject.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Admin user filter
    if (selectedAdmin !== "all") {
      filtered = filtered.filter((log) => log.adminUser === selectedAdmin);
    }

    // Action type filter
    if (selectedActionType !== "all") {
      filtered = filtered.filter(
        (log) => log.actionType === selectedActionType,
      );
    }

    setFilteredLogs(filtered);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedAdmin("all");
    setSelectedActionType("all");
    setDateRange({ from: undefined, to: undefined });
    setFilteredLogs(logs);
  };

  const exportLogs = () => {
    // In a real implementation, this would generate and download a CSV file
    console.log("Exporting logs...", filteredLogs);
  };

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case "user_management":
        return Users;
      case "product_management":
        return FileText;
      case "order_management":
        return ShoppingCart;
      case "system_settings":
        return Settings;
      default:
        return FileText;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Audit Log
          </CardTitle>
          <CardDescription>
            Complete log of all administrative actions for compliance and
            security tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search actions, descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Admin User</label>
              <Select value={selectedAdmin} onValueChange={setSelectedAdmin}>
                <SelectTrigger>
                  <SelectValue placeholder="All admins" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Admins</SelectItem>
                  {adminUsers.map((admin) => (
                    <SelectItem key={admin} value={admin}>
                      {admin}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Action Type</label>
              <Select
                value={selectedActionType}
                onValueChange={setSelectedActionType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All actions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  {actionTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange.from && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex gap-2 mb-6">
            <Button
              onClick={applyFilters}
              className="bg-[#123B79] hover:bg-[#425DA0]"
            >
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
            <Button variant="outline" onClick={exportLogs}>
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {/* Results Summary */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredLogs.length} of {logs.length} log entries
            </p>
          </div>

          {/* Audit Log Entries */}
          <div className="space-y-3">
            {filteredLogs.map((log) => {
              const ActionIcon = getActionIcon(log.actionType);
              return (
                <div
                  key={log.id}
                  className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50"
                >
                  <ActionIcon className="h-5 w-5 text-[#123B79] mt-0.5 flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{log.action}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {log.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {log.adminUser}
                          </span>
                          <span>IP: {log.ipAddress}</span>
                          <span>Target: {log.targetObject}</span>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="text-xs text-gray-500 mb-2">
                          {log.timestamp}
                        </div>
                        <Badge
                          variant={getSeverityColor(log.severity)}
                          className="text-xs"
                        >
                          {log.severity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                No audit log entries match your filters.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
