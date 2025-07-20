import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";

export default function SecurityPage() {
  const securityChecks = [
    {
      title: "Two-Factor Authentication",
      status: "enabled",
      description: "2FA is enabled for all admin accounts",
      icon: Lock,
    },
    {
      title: "SSL Certificate",
      status: "enabled",
      description: "SSL certificate is valid and active",
      icon: Shield,
    },
    {
      title: "Firewall Protection",
      status: "enabled",
      description: "Firewall is active and protecting the platform",
      icon: Shield,
    },
    {
      title: "Database Encryption",
      status: "enabled",
      description: "All sensitive data is encrypted at rest",
      icon: Lock,
    },
    {
      title: "Regular Backups",
      status: "enabled",
      description: "Automated backups are running daily",
      icon: CheckCircle,
    },
    {
      title: "Security Monitoring",
      status: "warning",
      description: "Security monitoring needs attention",
      icon: AlertTriangle,
    },
  ];

  const recentActivity = [
    {
      action: "Admin login",
      user: "admin@assembly.com",
      time: "2 minutes ago",
      ip: "192.168.1.100",
      status: "success",
    },
    {
      action: "Course creation",
      user: "admin@assembly.com",
      time: "1 hour ago",
      ip: "192.168.1.100",
      status: "success",
    },
    {
      action: "Failed login attempt",
      user: "unknown@example.com",
      time: "3 hours ago",
      ip: "203.0.113.45",
      status: "failed",
    },
    {
      action: "User role change",
      user: "admin@assembly.com",
      time: "1 day ago",
      ip: "192.168.1.100",
      status: "success",
    },
  ];

  return (
    <div data-oid="vanr2k8">
      <div className="flex items-center justify-between" data-oid="b5sl1:2">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="0:1l-4a">
          Security
        </h1>
        <div className="flex items-center gap-2" data-oid="puxe7el">
          <Button variant="outline" data-oid="6i0az8d">
            <Eye className="mr-2 h-4 w-4" data-oid="sv-x_jm" />
            View Logs
          </Button>
          <Button
            className="bg-[#123B79] hover:bg-[#425DA0]"
            data-oid="7cibyuz"
          >
            <Shield className="mr-2 h-4 w-4" data-oid="ekmm2z1" />
            Security Scan
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2" data-oid="7i_xr1e">
        <Card data-oid="10v8ocy">
          <CardHeader data-oid="1iorvdq">
            <CardTitle data-oid="k5mknd4">Security Status</CardTitle>
            <CardDescription data-oid="u254s6y">
              Current security configuration and status
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="xw0_pd2">
            <div className="space-y-4" data-oid="6850phm">
              {securityChecks.map((check, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                  data-oid="xr9w2xb"
                >
                  <div className="flex items-center gap-3" data-oid="o1oii:6">
                    <check.icon
                      className="h-5 w-5 text-[#123B79]"
                      data-oid="vuucce1"
                    />

                    <div data-oid="jxq-jqb">
                      <h3 className="font-medium" data-oid="sa3v2ox">
                        {check.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="._8cz:v"
                      >
                        {check.description}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      check.status === "enabled"
                        ? "default"
                        : check.status === "warning"
                          ? "secondary"
                          : "destructive"
                    }
                    className="text-xs"
                    data-oid="0e6j7di"
                  >
                    {check.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card data-oid="h_b.p4q">
          <CardHeader data-oid="38t8som">
            <CardTitle data-oid="pymmfkc">Recent Activity</CardTitle>
            <CardDescription data-oid="qt3orqj">
              Latest security events and admin actions
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="seow1lb">
            <div className="space-y-4" data-oid="8ym_y9d">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                  data-oid="crv4c72"
                >
                  <div className="flex-1" data-oid="995:.ky">
                    <h3 className="font-medium" data-oid="gqcyq0w">
                      {activity.action}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="2xve53p"
                    >
                      {activity.user}
                    </p>
                    <p
                      className="text-xs text-muted-foreground"
                      data-oid="3tc4l7g"
                    >
                      IP: {activity.ip}
                    </p>
                  </div>
                  <div className="text-right" data-oid="ete_mh-">
                    <div
                      className="text-sm text-muted-foreground"
                      data-oid="_4eobvt"
                    >
                      {activity.time}
                    </div>
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : "destructive"
                      }
                      className="text-xs mt-1"
                      data-oid="otn8jc7"
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6" data-oid="9uiw-b5">
        <Card data-oid="wlh75g:">
          <CardHeader data-oid="uf3jbpn">
            <CardTitle data-oid="utp1hy1">Security Recommendations</CardTitle>
            <CardDescription data-oid="80qpb:u">
              Actions to improve platform security
            </CardDescription>
          </CardHeader>
          <CardContent data-oid=".7l5jsp">
            <div className="space-y-4" data-oid="3o9qgbg">
              <div
                className="flex items-center justify-between p-4 border rounded-lg"
                data-oid="qyl08ay"
              >
                <div data-oid="ds8:dba">
                  <h3 className="font-medium" data-oid="hy7yep2">
                    Enable IP Whitelisting
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid=".4x:a64"
                  >
                    Restrict admin access to specific IP addresses
                  </p>
                </div>
                <Button variant="outline" size="sm" data-oid="ep4wad1">
                  Configure
                </Button>
              </div>
              <div
                className="flex items-center justify-between p-4 border rounded-lg"
                data-oid="k45sjl0"
              >
                <div data-oid="ecn1z6f">
                  <h3 className="font-medium" data-oid="6nqquxs">
                    Update Security Policies
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="fgjd.gx"
                  >
                    Review and update password policies
                  </p>
                </div>
                <Button variant="outline" size="sm" data-oid="78_wxur">
                  Review
                </Button>
              </div>
              <div
                className="flex items-center justify-between p-4 border rounded-lg"
                data-oid="6:4qv-p"
              >
                <div data-oid="e67the_">
                  <h3 className="font-medium" data-oid="s0h6zj_">
                    Conduct Security Audit
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="5m6a5dr"
                  >
                    Schedule a comprehensive security review
                  </p>
                </div>
                <Button variant="outline" size="sm" data-oid="fj5_69m">
                  Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
