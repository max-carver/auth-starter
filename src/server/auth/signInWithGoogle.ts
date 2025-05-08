"use server";

import { signIn } from "@/server/auth/auth";

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/profile",
  });
}
