import { GlobeLock } from 'lucide-react';
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-start items-center mt-4 py-4 px-8">
      <div className="flex items-center gap-3">
        <GlobeLock className="size-8" />
        <div className="flex flex-col gap-4">
          <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
            ForgeSphere
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;