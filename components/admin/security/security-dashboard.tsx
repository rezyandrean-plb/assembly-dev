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
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Settings,
  Users,
  Globe,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const failedLoginData = [
  { day: "Mon", attempts: 12 },
  { day: "Tue", attempts: 8 },
  { day: "Wed", attempts: 15 },
  { day: "Thu", attempts: 6 },
  { day: "Fri", attempts: 22 },
  { day: "Sat", attempts: 4 },
  { day: "Sun", attempts: 7 },
];

export function SecurityDashboard() {
  const [securityScore] = useState(95);

  const securityChecklist = [
    {
      title: "Two-Factor Authentication",
      status: "enforced",
      description: "Enforced for all admin accounts",
      icon: Lock,
      action: "Configure",
      actionType: "settings" as const,
    },
    {
      title: "Password Policy",
      status: "strong",
      description: "Strong password requirements active",
      icon: Shield,
      action: "Review",
      actionType: "settings" as const,
    },
    {
      title: "IP Whitelisting",
      status: "disabled",
      description: "Not configured - recommended for enhanced security",
      icon: Globe,
      action: "Enable & Configure",
      actionType: "configure" as const,
    },
    {
      title: "SSL Certificate",
      status: "active",
      description: "Valid certificate, expires in 89 days",
      icon: Shield,
      action: "View Details",
      actionType: "info" as const,
    },
    {
      title: "Regular Backups",
      status: "running",
      description: "Daily backups completed successfully",
      icon: CheckCircle,
      action: "View Logs",
      actionType: "info" as const,
    },
    {
      title: "Firewall Protection",
      status: "active",
      description: "All ports secured and monitored",
      icon: Shield,
      action: "View Status",
      actionType: "info" as const,
    },
  ];

  const recentCriticalEvents = [
    {
      event: "Multiple failed login attempts",
      source: "203.0.113.45",
      time: "2 minutes ago",
      severity: "high" as const,
    },
    {
      event: "New admin account created",
      source: "admin@assembly.com",
      time: "1 hour ago",
      severity: "medium" as const,
    },
    {
      event: "Security policy updated",
      source: "admin@assembly.com",
      time: "3 hours ago",
      severity: "low" as const,
    },
    {
      event: "Suspicious API access blocked",
      source: "198.51.100.23",
      time: "6 hours ago",
      severity: "high" as const,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "enforced":
      case "active":
      case "running":
      case "strong":
        return "default";
      case "disabled":
        return "destructive";
      default:
        return "secondary";
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
      {/* Security Score Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#123B79]" />
            Security Score
          </CardTitle>
          <CardDescription>Overall security posture assessment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-[#123B79]">
              {securityScore}/100
            </div>
            <div className="flex-1">
              <Progress value={securityScore} className="h-3" />
              <p className="text-sm text-gray-600 mt-2">
                Excellent security posture. Address IP whitelisting to reach
                100%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Security Checklist */}
        <Card>
          <CardHeader>
            <CardTitle>Security Checklist</CardTitle>
            <CardDescription>
              Actionable security configuration status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityChecklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-[#123B79]" />
                    <div>
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={getStatusColor(item.status)}
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                    <Button variant="outline" size="sm" className="text-xs">
                      {item.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Live Security Events
            </CardTitle>
            <CardDescription>
              Real-time critical security events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentCriticalEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{event.event}</h3>
                    <p className="text-xs text-muted-foreground">
                      Source: {event.source}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">
                      {event.time}
                    </div>
                    <Badge
                      variant={getSeverityColor(event.severity)}
                      className="text-xs mt-1"
                    >
                      {event.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Failed Login Attempts Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Failed Login Attempts (Last 7 Days)
          </CardTitle>
          <CardDescription>
            Monitor potential brute-force attempts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={failedLoginData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attempts" fill="#123B79" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
