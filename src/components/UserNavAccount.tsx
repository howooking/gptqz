"use client";

import { User } from "next-auth";

interface UserNavAccountProps {
  user?: Pick<User, "email" | "image" | "name">;
}
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export default function UserNavAccount({ user }: UserNavAccountProps) {
  const handleSignout = async () => {
    try {
      signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.image as string} alt="profileImage" />
          <AvatarFallback className="font-bold">
            {user?.name?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuArrow />
        <DropdownMenuLabel>
          {user?.name}
          <div className="text-gray-400">{user?.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            My Account
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-destructive cursor-pointer"
            onClick={handleSignout}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
