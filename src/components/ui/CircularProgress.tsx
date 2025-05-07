"use client";

import { CircularProgress as CircularProgressBase } from "@heroui/react";

export default function CircularProgress({
  className,
  size,
}: {
  className?: string;
  size?: string;
}) {
  return (
    <CircularProgressBase
      aria-label="Loading..."
      className={className}
      classNames={{
        svg: `${size}`,
      }}
    />
  );
}
