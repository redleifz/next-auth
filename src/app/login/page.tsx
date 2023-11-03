"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const { data: session, status } = useSession();

  const login = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
      // callbackUrl: "/profile"
    });

    if (result?.status === 200) {
      console.log(`Login successful`);
      router.push(`/profile`);
    } else {
      console.log(`Login failed`);
      setErrorMessage(`Login failed`);
    }
  };

  useEffect(() => {
    if (session) {
      router.push(`/`);
    } else {
      setIsLoading(false);
    }
    // console.log(status);
  }, [session]);

  return (
    <>
      {!session && status !== "loading" && (
        <>
          <div className="w-full h-full  bg-gray-50 flex justify-center items-center">
            <div className="h-[300px] w-[300px] bg-blue-400 rounded-lg flex justify-center items-center">
              <form
                onSubmit={login}
                className="flex flex-col justify-center items-center gap-3"
              >
                <input
                  className="p-1"
                  placeholder="username"
                  onChange={(e) => {
                    setErrorMessage("");
                    setUsername(e.target.value);
                  }}
                />
                <input
                  className="p-1"
                  placeholder="password"
                  onChange={(e) => {
                    setErrorMessage("");
                    setPassword(e.target.value);
                  }}
                />
                {errMessage !== "" && (
                  <span className="text-red-500">{errMessage}</span>
                )}
                <button type="submit" className="bg-white w-full p-1">
                  Login
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginPage;
