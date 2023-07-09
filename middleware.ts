// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.


  function middleware(req: NextRequest) {

    const path = req.nextUrl.pathname

    const publicPaths = path === '/login' || path === '/register'

    const token = req.cookies.get('next-auth.session-token')?.value || ''
    console.log(token)

    if (publicPaths && token)
      return NextResponse.redirect(new URL('/', req.nextUrl))


    if (!publicPaths && !token)
      return NextResponse.redirect(new URL('/login', req.nextUrl))


    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type ,Authorization")
    response.headers.set("Access-Control-Max-Age", "86400")

    return response;


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