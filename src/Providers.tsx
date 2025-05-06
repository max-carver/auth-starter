"use client";

import { HeroUIProvider } from "@heroui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  // 2. Wrap HeroUIProvider at the root of your app
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default Providers;
