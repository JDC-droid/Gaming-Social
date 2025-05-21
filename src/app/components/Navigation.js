import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex gap-6 p-4 bg-[#603f8b] text-gray-300 border-b-2 border-[#323b36]">
      <Link className="text-lg hover:underline" href="/">
        Home
      </Link>
      <Link className="text-lg hover:underline" href="/New-Post">
        New Post
      </Link>
      <h1 className="ml-auto text-2xl font-bold underline">GameHub</h1>
    </div>
  );
};

export default Navigation;
