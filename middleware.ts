import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/app/lib/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
 const { nextUrl } = req;

 const isAuthenticated = !!req.auth;
 const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

 if (isPublicRoute && isAuthenticated)
  return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

 if (!isAuthenticated && !isPublicRoute)
  return Response.redirect(new URL(ROOT, nextUrl));
});

export const config = {
 matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};



// import { NextRequest, NextResponse } from "next/server";
// import { getCurrentUrl } from "./app/utils/utils";
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';



// // export default function middleware(request: NextRequest) {
// //   const token = request.cookies.get('authjs.session-token')
// //   const pathname = request.nextUrl.pathname

// //   if(pathname === '/login' && token) {
// //     return NextResponse.redirect(new URL(getCurrentUrl("/dash/teams")))
// //   }

// //   if(pathname.includes('/dash') && !token) {
// //     return NextResponse.redirect(new URL(getCurrentUrl("/login")))
// //   }
// // }

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  
// }
