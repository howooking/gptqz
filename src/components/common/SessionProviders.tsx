import { SessionProvider } from "next-auth/react";
import React from "react";

type PrividersProps = {
  children: React.ReactNode;
};

export default function SessionProviders({ children }: PrividersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
