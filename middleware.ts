import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth) {
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  return Response.redirect(req.nextUrl.origin);
});

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

export const config = {
  // * zero or more parameters
  // + one or more parameters
  // ? zero or one parameter
  matcher: ["/dashboard/:path*"],
};
