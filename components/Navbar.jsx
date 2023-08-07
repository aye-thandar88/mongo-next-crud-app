import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full items-center font-bold text-lg flex justify-between">
      <Link href="/">Daily Note</Link>
      <Link href="/addTopic" className="bg-slate-500 p-2 rounded-md">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
