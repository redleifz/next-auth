//protected route by role

import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request: NextRequestWithAuth) {


        if (
            request.nextUrl.pathname.startsWith("/admin") &&
            request.nextauth.token?.role !== "admin"
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        if (
            request.nextUrl.pathname.startsWith("/profile") &&
            (request.nextauth.token?.role !== "admin" && request.nextauth.token?.role !== "user")
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }



    },
    {
        callbacks: {
            authorized: async ({ token }) => !!token,
        },
    }
);

//protected route
export const config = { matcher: ["/admin", "/profile"] };