import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex justify-between bg-[#3A4D39] text-[#ECE3CE]">
      <div className="h-10 pl-3   flex items-center gap-3">
        <Link href={`/`}>App Logo</Link>
        <Link href={`/admin`}>Admin</Link>
        <Link href={`/profile`}>Profile</Link>
      </div>
      <div className="h-10 text-white flex items-center mr-3">
        <Link href={`/login`}>Login</Link>
      </div>
    </div>
  );
};

export default AppBar;
