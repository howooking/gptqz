"use client";

import { User } from "next-auth";
import { AiOutlineLogout } from "react-icons/ai";

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

import { signOut } from "next-auth/react";
import { MouseEvent } from "react";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import UserAvatar from "./UserAvatar";

export default function UserNavAccount({ user }: UserNavAccountProps) {
  const handleSignout = async (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    try {
      signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuArrow />
        <DropdownMenuLabel>
          {user?.name}
          <div className="text-">{user?.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            My Account
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-destructive cursor-pointer space-x-2"
            onClick={handleSignout}
          >
            <AiOutlineLogout />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
