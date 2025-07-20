import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Save, Globe, Bell, Shield, Palette } from "lucide-react";

export default function SettingsPage() {
  return (
    <div data-oid="-tt_6qw">
      <div className="flex items-center justify-between" data-oid="wkvawii">
        <h1 className="text-3xl font-bold text-[#123B79]" data-oid="y-osu.v">
          Settings
        </h1>
        <Button className="bg-[#123B79] hover:bg-[#425DA0]" data-oid="njq21on">
          <Save className="mr-2 h-4 w-4" data-oid=":7y89x9" />
          Save Changes
        </Button>
      </div>

      <div className="mt-6 space-y-6" data-oid="0m-2n8z">
        <Card data-oid="u:oosdi">
          <CardHeader data-oid="w2v4mmp">
            <CardTitle className="flex items-center gap-2" data-oid="6_j2jq2">
              <Globe className="h-5 w-5" data-oid="inetulc" />
              General Settings
            </CardTitle>
            <CardDescription data-oid="u725dfd">
              Manage your platform's general configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="d9dr61o">
            <div className="grid grid-cols-2 gap-4" data-oid="k-ilj93">
              <div className="space-y-2" data-oid="gc6j:g5">
                <Label htmlFor="site-name" data-oid="zer_e0m">
                  Site Name
                </Label>
                <Input
                  id="site-name"
                  defaultValue="Assembly Learning Platform"
                  data-oid="y:1zt9:"
                />
              </div>
              <div className="space-y-2" data-oid="jg4ratk">
                <Label htmlFor="site-url" data-oid="d404.v1">
                  Site URL
                </Label>
                <Input
                  id="site-url"
                  defaultValue="https://assembly.com"
                  data-oid="g9g._zq"
                />
              </div>
            </div>
            <div className="space-y-2" data-oid="t1tnxap">
              <Label htmlFor="description" data-oid="p95q1eq">
                Site Description
              </Label>
              <Input
                id="description"
                defaultValue="Singapore's premier real estate education platform"
                data-oid="cmmz8ht"
              />
            </div>
          </CardContent>
        </Card>

        <Card data-oid="j1iv.i.">
          <CardHeader data-oid="fe7bcd:">
            <CardTitle className="flex items-center gap-2" data-oid="bb0wpe7">
              <Bell className="h-5 w-5" data-oid="s-6-uw5" />
              Notification Settings
            </CardTitle>
            <CardDescription data-oid="qnh.5c4">
              Configure email and push notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="4ysyclm">
            <div
              className="flex items-center justify-between"
              data-oid="_y8t4hm"
            >
              <div className="space-y-0.5" data-oid="wvi2aem">
                <Label data-oid="xg93yu8">Email Notifications</Label>
                <p className="text-sm text-muted-foreground" data-oid="cpj3d5y">
                  Receive email updates about platform activity
                </p>
              </div>
              <Switch defaultChecked data-oid="y-kf.:z" />
            </div>
            <Separator data-oid="9w3zm1y" />
            <div
              className="flex items-center justify-between"
              data-oid="29f6wrv"
            >
              <div className="space-y-0.5" data-oid="6cok:wm">
                <Label data-oid="p689icm">New User Registrations</Label>
                <p className="text-sm text-muted-foreground" data-oid="3pel5ox">
                  Get notified when new users sign up
                </p>
              </div>
              <Switch defaultChecked data-oid="1y2-8is" />
            </div>
            <Separator data-oid="p-vv:5b" />
            <div
              className="flex items-center justify-between"
              data-oid="rkmu:h8"
            >
              <div className="space-y-0.5" data-oid="6bvfq3-">
                <Label data-oid="hgnvzol">Course Purchases</Label>
                <p className="text-sm text-muted-foreground" data-oid="mfdf9_k">
                  Receive notifications for course sales
                </p>
              </div>
              <Switch defaultChecked data-oid="non2_zb" />
            </div>
          </CardContent>
        </Card>

        <Card data-oid="qi-_8vf">
          <CardHeader data-oid="cu0ivia">
            <CardTitle className="flex items-center gap-2" data-oid="pqo0byi">
              <Shield className="h-5 w-5" data-oid="qmnus0-" />
              Security Settings
            </CardTitle>
            <CardDescription data-oid="fvr2pcu">
              Manage security and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="7flfdy2">
            <div
              className="flex items-center justify-between"
              data-oid="2ll55f0"
            >
              <div className="space-y-0.5" data-oid="sc3n8h7">
                <Label data-oid="q58i6w.">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground" data-oid="f0g2dle">
                  Require 2FA for admin accounts
                </p>
              </div>
              <Switch data-oid="u0glci7" />
            </div>
            <Separator data-oid="0ujnw8k" />
            <div
              className="flex items-center justify-between"
              data-oid="3jqx.:n"
            >
              <div className="space-y-0.5" data-oid="euw9q3a">
                <Label data-oid="bt7u6q6">Session Timeout</Label>
                <p className="text-sm text-muted-foreground" data-oid="n1w.7n:">
                  Auto-logout after inactivity
                </p>
              </div>
              <Switch defaultChecked data-oid="3dan10s" />
            </div>
            <Separator data-oid="glaiv0j" />
            <div className="space-y-2" data-oid="ik7ykwr">
              <Label htmlFor="session-timeout" data-oid="frs4ctu">
                Session Timeout (minutes)
              </Label>
              <Input
                id="session-timeout"
                type="number"
                defaultValue="30"
                data-oid=":qdy8w5"
              />
            </div>
          </CardContent>
        </Card>

        <Card data-oid="q0f0.::">
          <CardHeader data-oid="66phxdb">
            <CardTitle className="flex items-center gap-2" data-oid="-vvkiuk">
              <Palette className="h-5 w-5" data-oid="t89djgt" />
              Appearance
            </CardTitle>
            <CardDescription data-oid="qu32221">
              Customize the platform's appearance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="o2_7wg1">
            <div className="grid grid-cols-2 gap-4" data-oid="dfbk85c">
              <div className="space-y-2" data-oid="rgszo65">
                <Label htmlFor="primary-color" data-oid="n:30h06">
                  Primary Color
                </Label>
                <Input
                  id="primary-color"
                  defaultValue="#123B79"
                  data-oid="fd20ccs"
                />
              </div>
              <div className="space-y-2" data-oid="zhunkig">
                <Label htmlFor="secondary-color" data-oid="6.07_d9">
                  Secondary Color
                </Label>
                <Input
                  id="secondary-color"
                  defaultValue="#425DA0"
                  data-oid="zq9vvc3"
                />
              </div>
            </div>
            <div
              className="flex items-center justify-between"
              data-oid="8pq31s:"
            >
              <div className="space-y-0.5" data-oid="e9055a9">
                <Label data-oid=".9ruaiy">Dark Mode</Label>
                <p className="text-sm text-muted-foreground" data-oid="hy.7ukc">
                  Enable dark mode for users
                </p>
              </div>
              <Switch data-oid="16200n7" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
