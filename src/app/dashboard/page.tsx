import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import DetailsDialog from "./DetailsDialog";
import Container from "@/components/common/Container";
import PageTitle from "@/components/common/PageTitle";
import DashboardCard from "./DashboardCard";
import { LuBrainCircuit, LuHistory } from "react-icons/lu";
import HotTopicsCard from "./HotTopicsCard";
import RecentActivityCard from "./RecentActivityCArd";

export const metadata: Metadata = {
  title: "GPTQZ | Dashboard",
  description: "GPTQZ dashboard",
};

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <Container>
      <div className="py-8">
        <div className="flex items-center">
          <PageTitle text="Dashboard" />
          <DetailsDialog />
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <DashboardCard
            title="Quiz me!"
            content="Challenge yourself to a quiz with a topic of your choice."
            href="/quiz"
            icon={<LuBrainCircuit size={28} strokeWidth={2.5} />}
          />
          <DashboardCard
            title="History"
            content="View past quiz attempts."
            href="/history"
            icon={<LuHistory size={28} strokeWidth={2.5} />}
          />
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <HotTopicsCard />
          <RecentActivityCard />
        </div>
      </div>
    </Container>
  );
}
