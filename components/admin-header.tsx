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
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 md:px-6">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        <Link href="/admin" className="flex items-center">
          <div className="flex items-center">
            <img
              src="/images/assembly-logo.png"
              alt="Assembly Logo"
              width="150"
              height="40"
              className="h-8 w-auto"
            />
          </div>
          <Badge className="ml-2 bg-[#123B79] text-white hover:bg-[#425DA0]">
            Admin
          </Badge>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="ml-auto flex items-center gap-4">
        <form className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 md:w-[240px] lg:w-[320px]"
            />
          </div>
        </form>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600"></span>
        </Button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                />

                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden text-left md:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
