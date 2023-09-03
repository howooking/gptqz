import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "GPTQZ | Quiz",
  description: "GPTQZ Quiz",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <Button>버튼입니다.</Button>
    </div>
  );
}
