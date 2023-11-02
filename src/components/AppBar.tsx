import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex justify-between bg-[#3A4D39] text-[#ECE3CE] ">
        <div className="h-10 pl-3   flex items-center gap-3">
          <Link href={`/`}>App Logo</Link>
          {session?.user.role === `admin` && <Link href={`/admin`}>Admin</Link>}
          {session?.user.role && <Link href={`/profile`}>Profile</Link>}
        </div>

        <div className="h-10 text-white flex items-center mr-3 ">
          {status === "loading" ? (
            <>
              <div className="animate-pulse h-10 w-10 bg-gray-400"></div>
            </>
          ) : (
            <>
              {session ? (
                <>
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: "/login",
                      })
                    }
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href={`/login`}>Login</Link>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AppBar;
