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
    <div data-oid="pxktwr_">
      <div className="flex items-center justify-between" data-oid="xrrwyer">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="2:z4c0r">
          Support
        </h1>
        <div className="flex items-center gap-2" data-oid="7dzaylk">
          <Button variant="outline" data-oid="2yti3cr">
            <Phone className="mr-2 h-4 w-4" data-oid="pfodz9l" />
            Call Support
          </Button>
          <Button
            className="bg-[#123B79] hover:bg-[#425DA0]"
            data-oid="_hqru2j"
          >
            <Mail className="mr-2 h-4 w-4" data-oid="t_z_et:" />
            Contact Support
          </Button>
        </div>
      </div>

      <div
        className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        data-oid="t66m2hd"
      >
        {supportStats.map((stat, index) => (
          <Card
            key={index}
            className="border-none shadow-md"
            data-oid="4.e7_:z"
          >
            <CardHeader
              className="flex flex-row items-center justify-between pb-2"
              data-oid="ingjw9n"
            >
              <CardTitle className="text-sm font-medium" data-oid="xfe8iw1">
                {stat.title}
              </CardTitle>
              <stat.icon
                className="h-4 w-4 text-[#123B79]"
                data-oid="ug3odb0"
              />
            </CardHeader>
            <CardContent data-oid="m4x29gi">
              <div className="text-2xl font-bold" data-oid=":3dhfhm">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground" data-oid="jos4gy2">
                <span className="text-green-500" data-oid="otpp0e6">
                  {stat.change}
                </span>{" "}
                from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6" data-oid="sjju8wr">
        <Card data-oid="bgu24ix">
          <CardHeader data-oid="gaw5rn4">
            <CardTitle data-oid="_1tce8j">Support Tickets</CardTitle>
            <CardDescription data-oid="s-ot.w3">
              Manage customer support requests and inquiries
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="3m3i_q8">
            <div className="space-y-4" data-oid="r6ctiz:">
              {supportTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                  data-oid="7j1vpaf"
                >
                  <div className="flex items-center gap-4" data-oid="htswy5k">
                    <Avatar className="h-10 w-10" data-oid="s3_qcy-">
                      <AvatarImage
                        src={ticket.user.avatar || "/placeholder.svg"}
                        alt={ticket.user.name}
                        data-oid="5uo8o9w"
                      />

                      <AvatarFallback
                        className="bg-[#123B79] text-white"
                        data-oid="m2y3er."
                      >
                        {ticket.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div data-oid=".4hlsov">
                      <h3 className="font-medium" data-oid="gpo5ur.">
                        {ticket.subject}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="61c4d63"
                      >
                        {ticket.user.name} • {ticket.user.email}
                      </p>
                      <div
                        className="flex items-center gap-2 mt-1"
                        data-oid="_iek9c2"
                      >
                        <Badge
                          variant="outline"
                          className="text-xs border-[#123B79] text-[#123B79]"
                          data-oid="hifmpnb"
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
                          data-oid="dbd49.0"
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4" data-oid="me94tbs">
                    <div className="text-right" data-oid="4w6w6sv">
                      <div
                        className="text-sm text-muted-foreground"
                        data-oid="0c-3..."
                      >
                        Created {ticket.createdAt}
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-oid="v38d.wd"
                      >
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
                      data-oid="jij46nx"
                    >
                      {ticket.status}
                    </Badge>
                    <Button variant="outline" size="sm" data-oid="wwk:cag">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2" data-oid="a6pavjl">
        <Card data-oid="bywp-3g">
          <CardHeader data-oid="wlvr2vc">
            <CardTitle data-oid="9pyj6f-">Quick Actions</CardTitle>
            <CardDescription data-oid="o2wm1xu">
              Common support tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="1gz-v1-">
            <div className="space-y-3" data-oid="bh0m33p">
              <Button
                variant="outline"
                className="w-full justify-start"
                data-oid="_wvr5uw"
              >
                <MessageCircle className="mr-2 h-4 w-4" data-oid=".sllm3k" />
                Create Knowledge Base Article
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                data-oid="8k_vf2-"
              >
                <Mail className="mr-2 h-4 w-4" data-oid="wfkqzaf" />
                Send Bulk Email
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                data-oid="nyv0e:9"
              >
                <Clock className="mr-2 h-4 w-4" data-oid="asn9sa1" />
                Set Response Time SLA
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                data-oid="j5y9lye"
              >
                <AlertCircle className="mr-2 h-4 w-4" data-oid="_jqzl:l" />
                Escalate Critical Issues
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="-j4v3l8">
          <CardHeader data-oid="j-zrt1j">
            <CardTitle data-oid="pwwzwnq">Support Resources</CardTitle>
            <CardDescription data-oid="la2l5pw">
              Helpful resources for support team
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="-yyab_v">
            <div className="space-y-3" data-oid="onhag7h">
              <div className="p-3 border rounded-lg" data-oid="xf4g:3c">
                <h3 className="font-medium" data-oid="r9run.2">
                  Knowledge Base
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="bnx1pjs">
                  Access to common solutions and FAQs
                </p>
              </div>
              <div className="p-3 border rounded-lg" data-oid="4c0jpd6">
                <h3 className="font-medium" data-oid="-9s7gxc">
                  Training Materials
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="5wsk6ox">
                  Support team training and guidelines
                </p>
              </div>
              <div className="p-3 border rounded-lg" data-oid="znn-r51">
                <h3 className="font-medium" data-oid="hodiqna">
                  Escalation Matrix
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="vo:lc3u">
                  When and how to escalate issues
                </p>
              </div>
              <div className="p-3 border rounded-lg" data-oid="y4r1znd">
                <h3 className="font-medium" data-oid="5u1iut_">
                  Support Templates
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="ca.s8h4">
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
