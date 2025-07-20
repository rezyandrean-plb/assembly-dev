"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function AdminHeader() {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Admin User",
    email: "admin@assembly.com",
    role: "Administrator",
    avatar: "/placeholder.svg?height=36&width=36",
  };

  return (
    <header
      className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 md:px-6"
      data-oid="td1h:wt"
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-2" data-oid="mh.uq1y">
        <Link href="/admin" className="flex items-center" data-oid="n6x7y24">
          <div className="flex items-center" data-oid="imcj0x0">
            <img
              src="/images/assembly-logo.png"
              alt="Assembly Logo"
              width="150"
              height="40"
              className="h-8 w-auto"
              data-oid="4g6ebqx"
            />
          </div>
          <Badge
            className="ml-2 bg-[#123B79] text-white hover:bg-[#425DA0]"
            data-oid="ft1q:wi"
          >
            Admin
          </Badge>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="ml-auto flex items-center gap-4" data-oid=":3v.b_z">
        <form className="hidden md:block" data-oid="u3uowje">
          <div className="relative" data-oid="m5rw1k9">
            <Search
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              data-oid="qez4kcp"
            />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 md:w-[240px] lg:w-[320px]"
              data-oid="8_w-l8j"
            />
          </div>
        </form>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          data-oid="y5uv0vy"
        >
          <Bell className="h-5 w-5" data-oid="zg2lxtn" />
          <span
            className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600"
            data-oid="rx6tr2:"
          ></span>
        </Button>

        {/* User Profile */}
        <DropdownMenu data-oid="nup7e2m">
          <DropdownMenuTrigger asChild data-oid="3tyybfi">
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-2"
              data-oid="vuacxy0"
            >
              <Avatar className="h-8 w-8" data-oid="q7g234z">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  data-oid="zdol511"
                />
                <AvatarFallback data-oid="mt.o1na">AD</AvatarFallback>
              </Avatar>
              <div className="hidden text-left md:block" data-oid="ydy_we:">
                <p className="text-sm font-medium" data-oid="x1ibr2c">
                  {user.name}
                </p>
                <p className="text-xs text-muted-foreground" data-oid="k5kxn:3">
                  {user.email}
                </p>
              </div>
              <ChevronDown
                className="h-4 w-4 text-muted-foreground"
                data-oid="w1qvm8o"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" data-oid="le.2m6y">
            <DropdownMenuLabel data-oid="8dq4beo">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator data-oid="wxjh5g0" />
            <DropdownMenuItem data-oid="_beczm7">Profile</DropdownMenuItem>
            <DropdownMenuItem data-oid="2qa-myf">Settings</DropdownMenuItem>
            <DropdownMenuSeparator data-oid="8bvvp8y" />
            <DropdownMenuItem data-oid="x74ao7j">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
