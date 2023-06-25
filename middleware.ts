// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.


  function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token.user.roles.result[0].toString() !== "Admin"
    ) {
      return new NextResponse("You are not authorized")
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/((?!register|api|login).*)']
  // matcher: ["/admin/:path*", "/user/:path*"],
};