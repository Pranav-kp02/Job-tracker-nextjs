import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
  const session = await getSession();

  const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
  const isSignUnPage = request.nextUrl.pathname.startsWith("/sign-up");

  if ((isSignInPage || isSignUnPage) && session?.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
