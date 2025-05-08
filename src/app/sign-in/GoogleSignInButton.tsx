"use client";

import Button from "@/components/ui/Button";
import { signInWithGoogle } from "@/server/auth/signInWithGoogle";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = () => {
  return (
    <Button
      size="md"
      variant="ghost"
      radius="lg"
      startContent={<FcGoogle className="size-8" />}
      onPress={signInWithGoogle}
    >
      Sign In with Google
    </Button>
  );
};

export default GoogleSignInButton;
