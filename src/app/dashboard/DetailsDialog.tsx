"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { BiHelpCircle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

export default function DetailsDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-secondary rounded-md bg-primary">
          What is GPTQZ
          <BiHelpCircle className="ml-2" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to GPTQZ!</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-3 my-2">
              <div className="flex items-center">
                <AiFillGithub size={20} />
                <Link
                  className="ml-1 underline"
                  href="https://github.com/howooking"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <p className="my-2 mt-4 text-left">
              I am so excited to introuduce GPTQZ!
              <br />
              Using artificial intelligence, we create quizzes in various fields
              in just a few seconds.
            </p>
            <Separator className="my-2" />
            <div className="my-2 font-semibold">
              <h4 className="text-base">Built with</h4>
              <div className="grid justify-between grid-cols-4 mt-2 gap-y-3">
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    className="bg-white rounded-xl"
                    alt="planetscale"
                    src="/skills/planetscale.png"
                    width={35}
                    height={35}
                  />
                  <span className="hidden md:block">Planet Scale</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="nextjs"
                    src="/skills/nextjs.png"
                    width={35}
                    height={35}
                  />
                  <span className="hidden md:block">Next.js</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="tailwind"
                    src="/skills/tailwind.png"
                    width={35}
                    height={35}
                  />
                  <span className="hidden md:block">Tailwind</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="nextauth"
                    src="/skills/nextauth.png"
                    width={30}
                    height={30}
                  />
                  <span className="hidden md:block">NextAuth</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="openai"
                    src="/skills/openai.png"
                    width={30}
                    height={30}
                  />
                  <span className="hidden md:block">OpenAI</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="react query"
                    src="/skills/react-query.png"
                    width={30}
                    height={30}
                  />
                  <span className="hidden md:block">React Query</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="primsa"
                    src="/skills/prisma.png"
                    width={30}
                    height={30}
                  />
                  <span className="hidden md:block">Prisma</span>
                </div>
                <div className="flex items-center md:justify-start justify-center gap-2">
                  <Image
                    alt="typescript"
                    src="/skills/typescript.png"
                    width={30}
                    height={30}
                  />
                  <span className="hidden md:block">TypeScript</span>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>I am excited too!</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
