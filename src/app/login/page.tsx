"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const login = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    console.log(result);
  };

  return (
    <div className="w-full h-full  bg-gray-50 flex justify-center items-center">
      <div className="h-[300px] w-[300px] bg-[#4F6F52] rounded-lg flex justify-center items-center">
        <form
          onSubmit={login}
          className="flex flex-col justify-center items-center gap-3"
        >
          <input
            className="p-1"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="p-1"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="bg-white w-full p-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
