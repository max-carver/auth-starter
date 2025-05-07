import { auth } from "@/server/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  if (!req.auth && pathname !== "/sign-in") {
    const newUrl = new URL("/sign-in", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile"],
};
