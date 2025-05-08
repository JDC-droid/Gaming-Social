import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex gap-6 p-4 bg-[#603f8b] text-gray-300 border-b-2 border-[#323b36]">
      <Link href="/">Home</Link>
      <Link href="/New-Post">New Post</Link>
    </div>
  );
};

export default Navigation;
