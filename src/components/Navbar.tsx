import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Navbar() {
  console.log("Navbar component");
  return (
    <header className="bg-background sticky top-0 z-10 flex h-16 items-center border-b border-gray-200">
      <nav className="container mx-auto flex w-full items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Brand
        </Link>

        <div className="flex items-center gap-x-2">
          <Button color="primary">Sign In</Button>
        </div>
      </nav>
    </header>
  );
}
