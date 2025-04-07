
import { type NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next()
  if (req.nextUrl.pathname.startsWith("/users")) {
    response.cookies.set("name", "Tobe Iroka", {
      httpOnly: false,
      secured: false,
      path: "/"
    })
  }
  return response
}


export const config = {
  matcher: [
    "/users/:path*"
  ]
}