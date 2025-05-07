"use client";

import Button from "@/components/ui/Button";
import { CircularProgress } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data, status } = useSession();

  return (
    <header className="bg-background sticky top-0 z-10 flex h-16 items-center border-b border-gray-200">
      <nav className="container mx-auto flex w-full items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Brand
        </Link>

        <div className="flex items-center gap-x-2">
          {status === "loading" ? (
            <CircularProgress aria-label="Loading..." />
          ) : status === "authenticated" ? (
            <Button color="primary" onPress={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <Link href="/sign-in">
              <Button color="primary">Sign In</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
