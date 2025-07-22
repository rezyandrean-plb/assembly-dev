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
  MessageCircle,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function SupportPage() {
  const supportTickets = [
    {
      id: "TICKET-001",
      user: {
        name: "John Smith",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      subject: "Course access issue",
      status: "open",
      priority: "high",
      category: "Technical",
      createdAt: "2 hours ago",
      lastUpdated: "1 hour ago",
    },
    {
      id: "TICKET-002",
      user: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      subject: "Payment refund request",
      status: "in-progress",
      priority: "medium",
      category: "Billing",
      createdAt: "1 day ago",
      lastUpdated: "6 hours ago",
    },
    {
      id: "TICKET-003",
      user: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      subject: "Account verification",
      status: "resolved",
      priority: "low",
      category: "Account",
      createdAt: "3 days ago",
      lastUpdated: "1 day ago",
    },
    {
      id: "TICKET-004",
      user: {
        name: "Emily Davis",
        email: "emily@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      subject: "Course content question",
      status: "open",
      priority: "medium",
      category: "Content",
      createdAt: "4 hours ago",
      lastUpdated: "4 hours ago",
    },
  ];

  const supportStats = [
    {
      title: "Open Tickets",
      value: "12",
      change: "+3",
      changeType: "positive",
      icon: AlertCircle,
    },
    {
      title: "Resolved Today",
      value: "8",
      change: "+2",
      changeType: "positive",
      icon: CheckCircle,
    },
    {
      title: "Average Response Time",
      value: "2.4h",
      change: "-0.5h",
      changeType: "positive",
      icon: Clock,
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      changeType: "positive",
      icon: MessageCircle,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#123B79]">Support</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Phone className="mr-2 h-4 w-4" />
            Call Support
          </Button>
          <Button className="bg-[#123B79] hover:bg-[#425DA0]">
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {supportStats.map((stat, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-[#123B79]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">{stat.change}</span> from
                yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
            <CardDescription>
              Manage customer support requests and inquiries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={ticket.user.avatar || "/placeholder.svg"}
                        alt={ticket.user.name}
                      />

                      <AvatarFallback className="bg-[#123B79] text-white">
                        {ticket.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{ticket.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ticket.user.name} • {ticket.user.email}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className="text-xs border-[#123B79] text-[#123B79]"
                        >
                          {ticket.category}
                        </Badge>
                        <Badge
                          variant={
                            ticket.priority === "high"
                              ? "destructive"
                              : ticket.priority === "medium"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        Created {ticket.createdAt}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Updated {ticket.lastUpdated}
                      </div>
                    </div>
                    <Badge
                      variant={
                        ticket.status === "open"
                          ? "default"
                          : ticket.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {ticket.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common support tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="mr-2 h-4 w-4" />
                Create Knowledge Base Article
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Send Bulk Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Set Response Time SLA
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="mr-2 h-4 w-4" />
                Escalate Critical Issues
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support Resources</CardTitle>
            <CardDescription>
              Helpful resources for support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Knowledge Base</h3>
                <p className="text-sm text-muted-foreground">
                  Access to common solutions and FAQs
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Training Materials</h3>
                <p className="text-sm text-muted-foreground">
                  Support team training and guidelines
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Escalation Matrix</h3>
                <p className="text-sm text-muted-foreground">
                  When and how to escalate issues
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Support Templates</h3>
                <p className="text-sm text-muted-foreground">
                  Pre-written responses for common issues
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
