import NextAuth from "next-auth/next";

declare module "next-auth/"{
    interface Session{
        user:{  
            userLogin: string;
            accessToken: string;
            role: string;
        }
    }
}