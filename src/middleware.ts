import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = new Set(["he", "en"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/").filter(Boolean)[0];
  const locale = LOCALES.has(segment || "") ? segment! : "he";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|.*\\..*).*)"],
};
