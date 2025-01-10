"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center	">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              New Video
            </Link>
          </div>

          {/* Navigation Items */}
          <Button> Automations </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
