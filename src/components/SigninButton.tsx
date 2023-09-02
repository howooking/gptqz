"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SigninButton() {
  const handleSignin = async () => {
    try {
      signIn();
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={handleSignin}>Sign In</Button>;
}
