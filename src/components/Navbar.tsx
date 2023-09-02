import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import SigninButton from "@/components/SigninButton";
import Link from "next/link";
import UserNavAccount from "@/components/UserNavAccount";
import { User } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <header className="fixed top-0 inset-x-0 bg-white dark:bg-gray-950 z-10 h-16 border-b border-zinc-300 py-2">
      <nav className="flex items-center justify-between h-full gap-2 px-8 mx-auto container">
        <Link href="/">
          <div className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold hover:border-b-2 hover:border-r-2 transition duration-200 dark:border-white">
            GPTQZ
          </div>
        </Link>
        <div>
          {session ? <UserNavAccount user={session.user} /> : <SigninButton />}
        </div>
      </nav>
    </header>
  );
}
