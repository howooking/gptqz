import React from "react";
import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserAvatarProps {
  user?: Pick<User, "email" | "image" | "name">;
}

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src={user?.image as string} alt="profileImage" />
      <AvatarFallback className="font-bold">
        {user?.name?.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
}
